# Company Supabase Helper

`_system/company_supabase.py` is the Company-owned replacement for Brain-rooted Supabase helper access.

It is intentionally smaller than Brain `_system/minibiota_tools.py`:

- uses Company `.env`, not Brain `.env`;
- uses only Python standard library modules;
- supports protected reads with `SUPABASE_SECRET_KEY`;
- keeps generic table access read-only from the CLI;
- limits write functions to Company Planner `work_projects` and `tasks`;
- requires explicit per-call `allow_write=True` and a specific `approval_note` before any write helper can run.

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

Publishable-key read, useful for RLS visibility checks:

```powershell
python _system/company_supabase.py read-table work_domains --select id,key --limit 1 --publishable
```

## Write Boundary

The CLI does not provide write commands. Import the helper functions for approved Company Planner writes:

- `create_company_task(...)`
- `update_company_task(...)`
- `create_company_project(...)`
- `update_company_project(...)`

These functions still block unless the caller passes both:

- `allow_write=True`
- `approval_note="specific user approval context"`

They also force `domain_id = 1` for new records and filter updates by `domain_id = 1`, so Company helper writes do not silently touch another domain's Planner records.

## Not Included

This helper does not include Research, Content, Financials, Growth, Hardware, Web, App runtime, storage, raw SQL, migration, or live-control writes. Those belong in their owning domain or App helpers and still require explicit approval.

## App-Owned Bridge

App already owns the runtime protected bridge:

- `M:\miniBIOTA\miniBIOTA_App\main.js` handles `supabase-rest` IPC with `SUPABASE_SECRET_KEY`.
- `M:\miniBIOTA\miniBIOTA_App\js\shared\api-client.js` routes renderer reads/writes through `global.electronAPI.supabaseRest` when the Electron bridge is available.

Use the Company helper for Company coordination and Company Planner helper work. Use the App bridge when testing or changing App runtime behavior.
