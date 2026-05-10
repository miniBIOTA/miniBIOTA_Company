# Company Database Awareness

Supabase MCP/read-only awareness is the preferred Company database-awareness layer for broad schema, table, relationship, log, advisor, and cross-domain database context.

## Current Transition State

- Brain `_system/minibiota_tools.py` is retired from normal workflows after Phase 10 reporting activation.
- Company now owns a scoped helper module at `_system/company_supabase.py` for sanitized env status, protected Supabase reads, and approval-gated Company Planner helper writes.
- Company has a local ignored workspace MCP config at `.vscode/mcp.json` for Supabase's hosted MCP server with `read_only=true` and database/debugging/development/docs features.
- Codex global MCP registration for `supabase` was added and OAuth login completed on 2026-05-10. Already-running Codex sessions may still show no MCP resources until the agent/session is restarted.
- Phase 5 created `memory/11-helper-and-database-awareness-migration.md` as the helper ownership and migration plan.
- Brain helper paths are archive/recovery lookup only; use MCP/read-only awareness and Company/domain-owned helpers for normal workflows.

## Preferred Order

1. Use Supabase MCP or approved read-only paths for live schema/table/relationship/log/advisor awareness.
2. Use Company `_system/agent_repo_registry.md` to map tables and records back to domain owners, risk levels, and approval boundaries.
3. Use MCP/read-only awareness and Company/domain-owned helpers for typed reads or explicitly approved helper writes. For Company Planner records, `_system/company_supabase.py` is the active Company helper.
4. Route domain-specific writes to the owning domain before acting.

## Planner Current-Status Reads

Use this order when current Planner/Supabase status matters:

1. Supabase MCP/read-only awareness when available in the active session.
2. Company `_system/company_supabase.py` protected reads for Company Planner coordination under `work_domains.key = company_ops` / `domain_id = 1`.
3. App-owned protected bridge/tooling when the read depends on App runtime behavior or internal protected access. App owns `main.js` `supabase-rest` IPC and renderer routing through `js/shared/api-client.js`.
4. Publishable-key REST only for reachability or RLS visibility checks, not as proof of current Planner status.

Do not use Brain helper code or unsafe direct secret-key REST as the normal current-status read path.

## Approval Boundary

Explicit user approval is required for:
- Supabase writes.
- Planner project/task writes.
- Raw SQL.
- Migrations and schema changes.
- Destructive writes or deletes.
- Service-role actions.
- Storage/admin actions.
- Live-control paths.
- Public production behavior changes.

## Secret Policy

Secrets must remain in local environment variables, ignored local config, OAuth, or user-level tool settings. Do not commit Supabase keys, service-role keys, PATs, OAuth secrets, or `.env` files.

## Company Helper Rule

Do not copy Brain `minibiota_tools.py` into Company unchanged. It is Brain-rooted and mixes multiple domain write surfaces. Company helper access must stay intentionally scoped, owner-mapped, and verified without test writes.

The active Company helper is `_system/company_supabase.py`; its companion note is `_system/company_supabase.md`.
