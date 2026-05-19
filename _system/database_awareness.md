# Company Database Awareness

Supabase MCP/read-only awareness is the preferred Company database-awareness layer for broad schema, table, relationship, log, advisor, and cross-domain database context.

Operation Living Intelligence adds derived awareness layers beside Supabase:

- Memgraph is the local/noncanonical relationship graph for approved projections and readback questions.
- The Company local vector layer under `out/operation_living_intelligence/local_vector_layer/` is the first simple semantic source-discovery helper for cited recall across approved active Company Markdown chunks.
- Supabase `vector` is available, but OpenAI/API-key-dependent pgvector embedding is not approved after cost/credential review. Any future pgvector path must be explicitly scoped as no-surprise on cost, credentials, source scope, and write boundaries.
- Both layers are derived from Markdown, Supabase, domain source docs, or approved generated manifests. They do not replace canonical sources, approve public claims, create Planner state, or authorize writeback.

## Current Transition State

- Brain `_system/minibiota_tools.py` is retired from normal workflows after Phase 10 reporting activation.
- Company now owns a scoped helper module at `_system/company_supabase.py` for sanitized env status, protected Supabase reads, and approval-gated Company Planner helper writes.
- Company has a local ignored workspace MCP config at `.vscode/mcp.json` for Supabase's hosted MCP server with `read_only=true` and database/debugging/development/docs features.
- Codex global MCP registration for `supabase` was added and OAuth login completed on 2026-05-10. Already-running Codex sessions may still show no MCP resources until the agent/session is restarted.
- Josue enabled the Supabase `vector` extension on 2026-05-19 and confirmed it with `pg_extension` readback.
- On 2026-05-19, Josue rejected the OpenAI/API-key-dependent pgvector pilot after clarifying that a separate API credential and billing path were not expected. The OpenAI pgvector schema/seed/query helpers were removed. The no-cost local deterministic vector helper remains the active semantic source-discovery layer.
- Phase 5 created `memory/11-helper-and-database-awareness-migration.md` as the helper ownership and migration plan.
- Brain helper paths are archive/recovery lookup only; use MCP/read-only awareness and Company/domain-owned helpers for normal workflows.

## Preferred Order

1. Use Supabase MCP or approved read-only paths for live schema/table/relationship/log/advisor awareness.
2. Use Company `_system/agent_repo_registry.md` to map tables and records back to domain owners, risk levels, and approval boundaries.
3. Use MCP/read-only awareness and Company/domain-owned helpers for typed reads, explicitly approved helper writes, or ordinary own-domain Planner writes after standing domain project-manager delegation is granted. For Company Planner records, `_system/company_supabase.py` is the active Company helper.
4. Use Memgraph or vector retrieval only as derived context when OLI relationship or semantic-recall context matters, then verify consequential claims against the canonical owner.
5. Route domain-specific writes to the owning domain before acting.

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
- Planner project/task writes outside current-session approval or explicitly granted standing domain project-manager delegation.
- Raw SQL.
- Migrations and schema changes.
- Destructive writes or deletes.
- Service-role actions.
- Storage/admin actions.
- Live-control paths.
- Public production behavior changes.
- Memgraph projection/import/rebuild/refresh, vector/pgvector index changes, embedding jobs, generated retrieval outputs, scheduled refresh jobs, or derived OLI writeback unless the exact action is explicitly approved or already covered by a scoped approved helper/closeout rule. OpenAI/API-key-dependent pgvector embedding is not approved; no broad vector indexing, scheduling, App runtime use, Memgraph changes, public search, or canonical writeback is approved.

## Secret Policy

Secrets must remain in local environment variables, ignored local config, OAuth, or user-level tool settings. Do not commit Supabase keys, service-role keys, PATs, OAuth secrets, or `.env` files.

## Company Helper Rule

Do not copy Brain `minibiota_tools.py` into Company unchanged. It is Brain-rooted and mixes multiple domain write surfaces. Company helper access must stay intentionally scoped, owner-mapped, and verified without test writes.

The active Company helper is `_system/company_supabase.py`; its companion note is `_system/company_supabase.md`.
