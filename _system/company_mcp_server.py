"""
Company-local MCP server for miniBIOTA tools.

This server mirrors the practical Brain workflow: read broadly, and write or
remove records/files when the user explicitly directs it. The safety checks live
in company_supabase.py so this file stays transport-only.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

from mcp.server.fastmcp import FastMCP


HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

import company_supabase as cs


mcp = FastMCP("miniBIOTA Company")


def _loads_json(value: str, label: str) -> object:
    try:
        return json.loads(value)
    except json.JSONDecodeError as exc:
        raise ValueError(f"{label} must be valid JSON: {exc}") from exc


def _filter_list(filters_json: str = "[]") -> list[str]:
    value = _loads_json(filters_json or "[]", "filters_json")
    if not isinstance(value, list) or not all(isinstance(item, str) for item in value):
        raise ValueError('filters_json must be a JSON array of PostgREST filter strings, e.g. ["id=eq.1"].')
    return value


@mcp.tool()
def session_init() -> dict:
    """Return Company tool/env status without exposing secrets."""
    status = cs.env_status()
    status["repo_root"] = str(cs.REPO_ROOT)
    status["tool_server"] = "miniBIOTA Company"
    return status


@mcp.tool()
def describe_write_policy() -> dict:
    """Return the active write mode and mutation approval rule."""
    return {
        "write_mode": cs.get_write_mode(),
        "writes_require": ["allow_write=True", "specific approval_note"],
        "deletes_require": ["allow_write=True", "specific approval_note", "at least one filter or exact file path"],
    }


@mcp.tool()
def read_table(
    table: str,
    select: str = "*",
    filters_json: str = "[]",
    limit: int = 25,
    order: str = "",
    protected: bool = True,
) -> object:
    """Read rows from any Supabase table using PostgREST filters."""
    return cs.read_table(
        table,
        select=select,
        filters=_filter_list(filters_json),
        limit=limit,
        order=order or None,
        protected=protected,
    )


@mcp.tool()
def insert_rows(table: str, payload_json: str, allow_write: bool = False, approval_note: str = "") -> object:
    """Insert one row or a JSON array of rows into a Supabase table after approval."""
    payload = _loads_json(payload_json, "payload_json")
    if not isinstance(payload, (dict, list)):
        raise ValueError("payload_json must be a JSON object or array of objects.")
    return cs.insert_rows(table, payload, allow_write=allow_write, approval_note=approval_note)


@mcp.tool()
def update_rows(
    table: str,
    filters_json: str,
    payload_json: str,
    allow_write: bool = False,
    approval_note: str = "",
) -> object:
    """Update rows in a Supabase table after approval. Requires at least one filter."""
    payload = _loads_json(payload_json, "payload_json")
    if not isinstance(payload, dict):
        raise ValueError("payload_json must be a JSON object.")
    return cs.update_rows(table, _filter_list(filters_json), payload, allow_write=allow_write, approval_note=approval_note)


@mcp.tool()
def delete_rows(table: str, filters_json: str, allow_write: bool = False, approval_note: str = "") -> object:
    """Delete rows from a Supabase table after approval. Requires at least one filter."""
    return cs.delete_rows(table, _filter_list(filters_json), allow_write=allow_write, approval_note=approval_note)


@mcp.tool()
def company_domain() -> object:
    """Read the Company Planner domain row."""
    return cs.company_domain()


@mcp.tool()
def company_projects(limit: int = 50) -> object:
    """Read Company Planner projects."""
    return cs.company_projects(limit=limit)


@mcp.tool()
def company_tasks(limit: int = 100, status: str = "") -> object:
    """Read Company Planner tasks, optionally filtered by status."""
    return cs.company_tasks(limit=limit, status=status or None)


@mcp.tool()
def create_company_task(payload_json: str, allow_write: bool = False, approval_note: str = "") -> object:
    """Create a Company Planner task after approval. Forces domain_id=1."""
    payload = _loads_json(payload_json, "payload_json")
    if not isinstance(payload, dict):
        raise ValueError("payload_json must be a JSON object.")
    return cs.create_company_task(payload, allow_write=allow_write, approval_note=approval_note)


@mcp.tool()
def update_company_task(
    task_id: int,
    payload_json: str,
    allow_write: bool = False,
    approval_note: str = "",
) -> object:
    """Update a Company Planner task after approval. Filters by id and domain_id=1."""
    payload = _loads_json(payload_json, "payload_json")
    if not isinstance(payload, dict):
        raise ValueError("payload_json must be a JSON object.")
    return cs.update_company_task(task_id, payload, allow_write=allow_write, approval_note=approval_note)


@mcp.tool()
def create_company_project(payload_json: str, allow_write: bool = False, approval_note: str = "") -> object:
    """Create a Company Planner project after approval. Forces domain_id=1."""
    payload = _loads_json(payload_json, "payload_json")
    if not isinstance(payload, dict):
        raise ValueError("payload_json must be a JSON object.")
    return cs.create_company_project(payload, allow_write=allow_write, approval_note=approval_note)


@mcp.tool()
def update_company_project(
    project_id: int,
    payload_json: str,
    allow_write: bool = False,
    approval_note: str = "",
) -> object:
    """Update a Company Planner project after approval. Filters by id and domain_id=1."""
    payload = _loads_json(payload_json, "payload_json")
    if not isinstance(payload, dict):
        raise ValueError("payload_json must be a JSON object.")
    return cs.update_company_project(project_id, payload, allow_write=allow_write, approval_note=approval_note)


@mcp.tool()
def list_company_files(pattern: str = "*", limit: int = 100) -> dict:
    """List Company repo files matching a glob pattern."""
    return cs.list_company_files(pattern=pattern, limit=limit)


@mcp.tool()
def read_company_file(relative_path: str, max_chars: int = 12000) -> dict:
    """Read a Company repo file by repo-relative path."""
    return cs.read_company_file(relative_path, max_chars=max_chars)


@mcp.tool()
def write_company_file(
    relative_path: str,
    content: str,
    overwrite: bool = False,
    allow_write: bool = False,
    approval_note: str = "",
) -> dict:
    """Write a Company repo file after approval."""
    return cs.write_company_file(
        relative_path,
        content,
        overwrite=overwrite,
        allow_write=allow_write,
        approval_note=approval_note,
    )


@mcp.tool()
def append_company_file(relative_path: str, content: str, allow_write: bool = False, approval_note: str = "") -> dict:
    """Append to a Company repo file after approval."""
    return cs.append_company_file(relative_path, content, allow_write=allow_write, approval_note=approval_note)


@mcp.tool()
def delete_company_file(relative_path: str, allow_write: bool = False, approval_note: str = "") -> dict:
    """Delete a Company repo file after approval."""
    return cs.delete_company_file(relative_path, allow_write=allow_write, approval_note=approval_note)


if __name__ == "__main__":
    mcp.run()
