# Company Database Awareness

Supabase MCP/read-only awareness is the preferred Company database-awareness layer for broad schema, table, relationship, log, advisor, and cross-domain database context.

## Current Transition State

- Brain `_system/minibiota_tools.py` is retired from normal workflows after Phase 10 reporting activation.
- Company does not yet own a copied helper module.
- Phase 5 created `memory/11-helper-and-database-awareness-migration.md` as the helper ownership and migration plan.
- Brain helper paths are archive/recovery lookup only; use MCP/read-only awareness and Company/domain-owned helpers for normal workflows.

## Preferred Order

1. Use Supabase MCP or approved read-only paths for live schema/table/relationship/log/advisor awareness.
2. Use Company `_system/agent_repo_registry.md` to map tables and records back to domain owners, risk levels, and approval boundaries.
3. Use MCP/read-only awareness and Company/domain-owned helpers for typed reads or explicitly approved helper writes; inspect Brain helper code only for historical/recovery context.
4. Route domain-specific writes to the owning domain before acting.

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

Do not copy Brain `minibiota_tools.py` into Company unchanged. It is Brain-rooted and mixes multiple domain write surfaces. Any future Company helper must be intentionally scoped, owner-mapped, and verified without test writes.
