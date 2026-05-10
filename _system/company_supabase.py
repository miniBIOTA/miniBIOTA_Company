"""
Company-owned Supabase helper for miniBIOTA coordination.

This module replaces Brain-rooted helper access for Company workflows. It is
read-oriented by default and exposes live writes/deletes only behind explicit
per-call approval flags. It uses only the Python standard library so a fresh
Codex session can run it without installing packages.
"""

from __future__ import annotations

import argparse
import fnmatch
import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from dataclasses import dataclass
from pathlib import Path
from typing import Any


REPO_ROOT = Path(__file__).resolve().parents[1]
ENV_PATH = REPO_ROOT / ".env"

VALID_WRITE_MODES = {"read-only", "confirm-before-write", "safe-write"}
DEFAULT_WRITE_MODE = "confirm-before-write"
COMPANY_DOMAIN_ID = 1
COMPANY_DOMAIN_KEY = "company_ops"

READ_METHODS = {"GET", "HEAD", "OPTIONS"}
WRITE_METHODS = {"POST", "PATCH", "PUT", "DELETE"}
VALID_TABLE_RE = re.compile(r"^[A-Za-z_][A-Za-z0-9_]*$")


class HelperError(RuntimeError):
    """Raised for blocked or failed helper operations."""


@dataclass(frozen=True)
class SupabaseConfig:
    url: str
    publishable_key: str
    secret_key: str

    @property
    def has_publishable_key(self) -> bool:
        return bool(self.publishable_key)

    @property
    def has_secret_key(self) -> bool:
        return bool(self.secret_key)


def _strip_env_value(value: str) -> str:
    value = value.strip()
    if len(value) >= 2 and value[0] == value[-1] and value[0] in {"'", '"'}:
        return value[1:-1]
    return value


def load_dotenv(path: Path = ENV_PATH) -> None:
    if not path.exists():
        return
    for raw_line in path.read_text(encoding="utf-8-sig").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        name, value = line.split("=", 1)
        name = name.strip()
        if not re.match(r"^[A-Za-z_][A-Za-z0-9_]*$", name):
            continue
        os.environ.setdefault(name, _strip_env_value(value))


def get_write_mode() -> str:
    mode = os.getenv("MINIBIOTA_WRITE_MODE", DEFAULT_WRITE_MODE).strip().lower()
    return mode if mode in VALID_WRITE_MODES else DEFAULT_WRITE_MODE


def env_status() -> dict[str, Any]:
    load_dotenv()
    return {
        "env_path": str(ENV_PATH),
        "env_file_exists": ENV_PATH.exists(),
        "write_mode": get_write_mode(),
        "supabase_url_set": bool(os.getenv("SUPABASE_URL")),
        "publishable_key_set": bool(os.getenv("SUPABASE_PUBLISHABLE_KEY")),
        "secret_key_set": bool(os.getenv("SUPABASE_SECRET_KEY")),
        "legacy_service_role_key_set": bool(os.getenv("SUPABASE_SERVICE_ROLE_KEY")),
        "legacy_anon_key_set": bool(os.getenv("SUPABASE_ANON_KEY")),
        "legacy_generic_key_set": bool(os.getenv("SUPABASE_KEY")),
    }


def config(require_secret: bool = False) -> SupabaseConfig:
    load_dotenv()
    cfg = SupabaseConfig(
        url=(os.getenv("SUPABASE_URL") or "").rstrip("/"),
        publishable_key=(os.getenv("SUPABASE_PUBLISHABLE_KEY") or "").strip(),
        secret_key=(os.getenv("SUPABASE_SECRET_KEY") or "").strip(),
    )
    if not cfg.url:
        raise HelperError("SUPABASE_URL is not set in Company .env.")
    if require_secret and not cfg.secret_key:
        raise HelperError("SUPABASE_SECRET_KEY is required for this protected operation.")
    if not require_secret and not (cfg.publishable_key or cfg.secret_key):
        raise HelperError("Set SUPABASE_PUBLISHABLE_KEY or SUPABASE_SECRET_KEY in Company .env.")
    return cfg


def _validate_table(table: str) -> None:
    if not VALID_TABLE_RE.match(table):
        raise HelperError(f"Unsafe table name: {table!r}")


def _headers(cfg: SupabaseConfig, protected: bool, write: bool) -> dict[str, str]:
    key = cfg.secret_key if protected else (cfg.publishable_key or cfg.secret_key)
    if not key:
        raise HelperError("No usable Supabase key is configured.")
    headers = {
        "apikey": key,
        "Authorization": f"Bearer {key}",
        "Accept": "application/json",
    }
    if write:
        headers["Content-Type"] = "application/json"
        headers["Prefer"] = "return=representation"
    return headers


def _query_pairs(
    select: str | None = None,
    filters: list[str] | None = None,
    limit: int | None = None,
    order: str | None = None,
) -> list[tuple[str, str]]:
    pairs: list[tuple[str, str]] = []
    if select:
        pairs.append(("select", select))
    for item in filters or []:
        if "=" not in item:
            raise HelperError(f"Filter must be in PostgREST form column=op.value: {item!r}")
        name, value = item.split("=", 1)
        if not name:
            raise HelperError(f"Filter has an empty column name: {item!r}")
        pairs.append((name, value))
    if order:
        pairs.append(("order", order))
    if limit is not None:
        pairs.append(("limit", str(max(1, min(int(limit), 1000)))))
    return pairs


def _url(table: str, pairs: list[tuple[str, str]]) -> str:
    _validate_table(table)
    query = urllib.parse.urlencode(pairs, doseq=True, safe="*,.()")
    suffix = f"?{query}" if query else ""
    return f"{config().url}/rest/v1/{table}{suffix}"


def _require_write_approval(
    method: str,
    table: str,
    allow_write: bool,
    approval_note: str | None,
) -> None:
    mode = get_write_mode()
    if mode == "read-only":
        raise HelperError("Supabase writes are blocked because MINIBIOTA_WRITE_MODE is read-only.")
    if method.upper() not in WRITE_METHODS:
        return
    if not allow_write:
        raise HelperError("Supabase write blocked: pass allow_write=True only after explicit user approval.")
    if not approval_note or len(approval_note.strip()) < 8:
        raise HelperError("Supabase write blocked: provide a specific approval_note for audit context.")


def request_json(
    method: str,
    table: str,
    *,
    select: str | None = None,
    filters: list[str] | None = None,
    limit: int | None = None,
    order: str | None = None,
    payload: Any | None = None,
    protected: bool = False,
    allow_write: bool = False,
    approval_note: str | None = None,
) -> Any:
    method = method.upper()
    write = method in WRITE_METHODS
    if write:
        protected = True
        _require_write_approval(method, table, allow_write, approval_note)
    cfg = config(require_secret=protected)
    url = _url(table, _query_pairs(select=select, filters=filters, limit=limit, order=order))
    body = None if payload is None else json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=body, headers=_headers(cfg, protected, write), method=method)
    try:
        with urllib.request.urlopen(req, timeout=30) as response:
            text = response.read().decode("utf-8")
            return json.loads(text) if text else []
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")
        raise HelperError(f"Supabase {method} {table} failed with HTTP {exc.code}: {detail}") from exc
    except urllib.error.URLError as exc:
        raise HelperError(f"Supabase {method} {table} failed: {exc.reason}") from exc


def read_table(
    table: str,
    *,
    select: str = "*",
    filters: list[str] | None = None,
    limit: int = 25,
    order: str | None = None,
    protected: bool = True,
) -> Any:
    return request_json("GET", table, select=select, filters=filters, limit=limit, order=order, protected=protected)


def insert_rows(
    table: str,
    payload: dict[str, Any] | list[dict[str, Any]],
    *,
    allow_write: bool,
    approval_note: str,
) -> Any:
    return request_json(
        "POST",
        table,
        payload=payload,
        protected=True,
        allow_write=allow_write,
        approval_note=approval_note,
    )


def update_rows(
    table: str,
    filters: list[str],
    payload: dict[str, Any],
    *,
    allow_write: bool,
    approval_note: str,
) -> Any:
    if not filters:
        raise HelperError("Refusing table update without at least one filter.")
    return request_json(
        "PATCH",
        table,
        filters=filters,
        payload=payload,
        protected=True,
        allow_write=allow_write,
        approval_note=approval_note,
    )


def delete_rows(
    table: str,
    filters: list[str],
    *,
    allow_write: bool,
    approval_note: str,
) -> Any:
    if not filters:
        raise HelperError("Refusing table delete without at least one filter.")
    return request_json(
        "DELETE",
        table,
        filters=filters,
        protected=True,
        allow_write=allow_write,
        approval_note=approval_note,
    )


def company_domain() -> Any:
    return read_table(
        "work_domains",
        select="*",
        filters=[f"key=eq.{COMPANY_DOMAIN_KEY}"],
        limit=1,
        protected=True,
    )


def company_projects(limit: int = 50) -> Any:
    return read_table(
        "work_projects",
        select="*",
        filters=[f"domain_id=eq.{COMPANY_DOMAIN_ID}"],
        limit=limit,
        protected=True,
    )


def company_tasks(limit: int = 100, status: str | None = None) -> Any:
    filters = [f"domain_id=eq.{COMPANY_DOMAIN_ID}"]
    if status:
        filters.append(f"status=eq.{status}")
    return read_table("tasks", select="*", filters=filters, limit=limit, protected=True)


def create_company_task(payload: dict[str, Any], *, allow_write: bool, approval_note: str) -> Any:
    scoped = dict(payload)
    scoped["domain_id"] = COMPANY_DOMAIN_ID
    return request_json(
        "POST",
        "tasks",
        payload=scoped,
        protected=True,
        allow_write=allow_write,
        approval_note=approval_note,
    )


def update_company_task(
    task_id: int,
    payload: dict[str, Any],
    *,
    allow_write: bool,
    approval_note: str,
) -> Any:
    scoped = {key: value for key, value in payload.items() if key != "domain_id"}
    return request_json(
        "PATCH",
        "tasks",
        filters=[f"id=eq.{int(task_id)}", f"domain_id=eq.{COMPANY_DOMAIN_ID}"],
        payload=scoped,
        protected=True,
        allow_write=allow_write,
        approval_note=approval_note,
    )


def create_company_project(payload: dict[str, Any], *, allow_write: bool, approval_note: str) -> Any:
    scoped = dict(payload)
    scoped["domain_id"] = COMPANY_DOMAIN_ID
    return request_json(
        "POST",
        "work_projects",
        payload=scoped,
        protected=True,
        allow_write=allow_write,
        approval_note=approval_note,
    )


def update_company_project(
    project_id: int,
    payload: dict[str, Any],
    *,
    allow_write: bool,
    approval_note: str,
) -> Any:
    scoped = {key: value for key, value in payload.items() if key != "domain_id"}
    return request_json(
        "PATCH",
        "work_projects",
        filters=[f"id=eq.{int(project_id)}", f"domain_id=eq.{COMPANY_DOMAIN_ID}"],
        payload=scoped,
        protected=True,
        allow_write=allow_write,
        approval_note=approval_note,
    )


def _resolve_repo_path(relative_path: str, *, must_exist: bool = False) -> Path:
    if not relative_path or Path(relative_path).is_absolute():
        raise HelperError("Use a non-empty repo-relative path.")
    candidate = (REPO_ROOT / relative_path).resolve()
    root = REPO_ROOT.resolve()
    if candidate != root and root not in candidate.parents:
        raise HelperError(f"Path escapes Company repo: {relative_path!r}")
    if must_exist and not candidate.exists():
        raise HelperError(f"Path does not exist: {relative_path}")
    return candidate


def _require_file_write_approval(action: str, relative_path: str, allow_write: bool, approval_note: str | None) -> None:
    mode = get_write_mode()
    if mode == "read-only":
        raise HelperError(f"{action} blocked because MINIBIOTA_WRITE_MODE is read-only.")
    if not allow_write:
        raise HelperError(f"{action} blocked for {relative_path}: pass allow_write=True only after explicit user approval.")
    if not approval_note or len(approval_note.strip()) < 8:
        raise HelperError(f"{action} blocked for {relative_path}: provide a specific approval_note.")


def list_company_files(pattern: str = "*", limit: int = 100) -> dict[str, Any]:
    limit = max(1, min(int(limit), 1000))
    ignored_parts = {".git", "__pycache__", ".pytest_cache", ".mypy_cache", ".ruff_cache"}
    matches: list[str] = []
    for path in REPO_ROOT.rglob("*"):
        if len(matches) >= limit:
            break
        if not path.is_file():
            continue
        relative = path.relative_to(REPO_ROOT)
        if any(part in ignored_parts for part in relative.parts):
            continue
        rel = relative.as_posix()
        if fnmatch.fnmatch(rel, pattern):
            matches.append(rel)
    return {"repo_root": str(REPO_ROOT), "pattern": pattern, "count": len(matches), "files": matches}


def read_company_file(relative_path: str, max_chars: int = 12000) -> dict[str, Any]:
    path = _resolve_repo_path(relative_path, must_exist=True)
    if not path.is_file():
        raise HelperError(f"Path is not a file: {relative_path}")
    text = path.read_text(encoding="utf-8-sig", errors="replace")
    max_chars = max(1, int(max_chars))
    return {
        "path": path.relative_to(REPO_ROOT).as_posix(),
        "chars": len(text),
        "truncated": len(text) > max_chars,
        "content": text[:max_chars],
    }


def write_company_file(
    relative_path: str,
    content: str,
    *,
    overwrite: bool = False,
    allow_write: bool,
    approval_note: str,
) -> dict[str, Any]:
    _require_file_write_approval("file write", relative_path, allow_write, approval_note)
    path = _resolve_repo_path(relative_path)
    if path.exists() and not overwrite:
        raise HelperError(f"File exists and overwrite=False: {relative_path}")
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")
    return {"status": "written", "path": path.relative_to(REPO_ROOT).as_posix(), "chars": len(content)}


def append_company_file(
    relative_path: str,
    content: str,
    *,
    allow_write: bool,
    approval_note: str,
) -> dict[str, Any]:
    _require_file_write_approval("file append", relative_path, allow_write, approval_note)
    path = _resolve_repo_path(relative_path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as handle:
        handle.write(content)
    return {"status": "appended", "path": path.relative_to(REPO_ROOT).as_posix(), "chars": len(content)}


def delete_company_file(
    relative_path: str,
    *,
    allow_write: bool,
    approval_note: str,
) -> dict[str, Any]:
    _require_file_write_approval("file delete", relative_path, allow_write, approval_note)
    path = _resolve_repo_path(relative_path, must_exist=True)
    if not path.is_file():
        raise HelperError(f"Refusing to delete non-file path: {relative_path}")
    path.unlink()
    return {"status": "deleted", "path": relative_path}


def _print_json(value: Any) -> None:
    print(json.dumps(value, indent=2, sort_keys=True))


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Company-owned Supabase helper")
    sub = parser.add_subparsers(dest="command", required=True)

    sub.add_parser("env-status")
    sub.add_parser("company-domain")

    projects = sub.add_parser("company-projects")
    projects.add_argument("--limit", type=int, default=50)

    tasks = sub.add_parser("company-tasks")
    tasks.add_argument("--limit", type=int, default=100)
    tasks.add_argument("--status")

    read = sub.add_parser("read-table")
    read.add_argument("table")
    read.add_argument("--select", default="*")
    read.add_argument("--filter", action="append", default=[])
    read.add_argument("--limit", type=int, default=25)
    read.add_argument("--order")
    read.add_argument("--publishable", action="store_true", help="Use the publishable key instead of protected secret-key reads.")

    files = sub.add_parser("list-files")
    files.add_argument("--pattern", default="*")
    files.add_argument("--limit", type=int, default=100)

    file_read = sub.add_parser("read-file")
    file_read.add_argument("path")
    file_read.add_argument("--max-chars", type=int, default=12000)

    args = parser.parse_args(argv)
    try:
        if args.command == "env-status":
            _print_json(env_status())
        elif args.command == "company-domain":
            _print_json(company_domain())
        elif args.command == "company-projects":
            _print_json(company_projects(limit=args.limit))
        elif args.command == "company-tasks":
            _print_json(company_tasks(limit=args.limit, status=args.status))
        elif args.command == "read-table":
            _print_json(
                read_table(
                    args.table,
                    select=args.select,
                    filters=args.filter,
                    limit=args.limit,
                    order=args.order,
                    protected=not args.publishable,
                )
            )
        elif args.command == "list-files":
            _print_json(list_company_files(pattern=args.pattern, limit=args.limit))
        elif args.command == "read-file":
            _print_json(read_company_file(args.path, max_chars=args.max_chars))
        return 0
    except HelperError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
