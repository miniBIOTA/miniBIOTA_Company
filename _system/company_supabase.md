# Company Supabase Helper

`_system/company_supabase.py` is the Company-owned replacement for Brain-rooted Supabase helper access.

`_system/company_mcp_server.py` exposes the helper as a local MCP server named `minibiota-company` in the ignored local `.vscode/mcp.json`.

It is intentionally rooted in Company rather than Brain:

- uses Company `.env`, not Brain `.env`;
- uses only Python standard library modules;
- supports protected reads with `SUPABASE_SECRET_KEY`;
- supports generic table reads;
- supports generic table inserts, updates, and deletes through import/MCP helper calls;
- supports Company-rooted file list/read/write/append/delete helpers;
- requires explicit per-call `allow_write=True` and a specific `approval_note` before any write or delete helper can run.

## Common Commands

Sanitized environment check:

```powershell
python _system/company_supabase.py env-status
```

Protected read of the Company Planner domain:

```powershell
python _system/company_supabase.py company-domain
```

Protected read of Company projects:

```powershell
python _system/company_supabase.py company-projects --limit 50
```

Protected read of Company tasks:

```powershell
python _system/company_supabase.py company-tasks --limit 100
```

Generic protected read:

```powershell
python _system/company_supabase.py read-table work_projects --filter domain_id=eq.1 --limit 10
```

List Company repo files:

```powershell
python _system/company_supabase.py list-files --pattern "memory/*.md" --limit 50
```

Read a Company repo file:

```powershell
python _system/company_supabase.py read-file memory/00-index.md
```

Publishable-key read, useful for RLS visibility checks:

```powershell
python _system/company_supabase.py read-table work_domains --select id,key --limit 1 --publishable
```

## MCP Tools

The local `minibiota-company` MCP server exposes:

- `session_init`
- `describe_write_policy`
- `read_table`
- `insert_rows`
- `update_rows`
- `delete_rows`
- `company_domain`
- `company_projects`
- `company_tasks`
- `create_company_task`
- `update_company_task`
- `create_company_project`
- `update_company_project`
- `list_company_files`
- `read_company_file`
- `write_company_file`
- `append_company_file`
- `delete_company_file`

## Write Boundary

The CLI remains read-only for database records. Import the helper or use the local MCP tools for approved writes/deletes.

Generic Supabase write/delete helpers:

- `insert_rows(...)`
- `update_rows(...)`
- `delete_rows(...)`

Company Planner convenience helpers:

- `create_company_task(...)`
- `update_company_task(...)`
- `create_company_project(...)`
- `update_company_project(...)`

Company-rooted file write/delete helpers:

- `write_company_file(...)`
- `append_company_file(...)`
- `delete_company_file(...)`

These functions block unless the caller passes both:

- `allow_write=True`
- `approval_note="specific user approval context"`

Company Planner convenience helpers also force `domain_id = 1` for new records and filter updates by `domain_id = 1`, so they do not silently touch another domain's Planner records.

## Not Included

This helper does not include raw SQL, migrations, storage/admin actions, service-role admin operations outside PostgREST table access, or live-control paths.

## App-Owned Bridge

App already owns the runtime protected bridge:

- `M:\miniBIOTA\miniBIOTA_App\main.js` handles `supabase-rest` IPC with `SUPABASE_SECRET_KEY`.
- `M:\miniBIOTA\miniBIOTA_App\js\shared\api-client.js` routes renderer reads/writes through `global.electronAPI.supabaseRest` when the Electron bridge is available.

Use the Company helper for Company coordination and Company Planner helper work. Use the App bridge when testing or changing App runtime behavior.
