---
title: Helper And Database Awareness Migration
last_updated: 2026-05-09
---
# Helper And Database Awareness Migration

## Purpose

This file is the Phase 5 migration plan for replacing Brain-owned helper and database-awareness routing without moving helper code prematurely.

Brain helper source: `Company/domain-owned helpers or MCP read-only awareness`.

Company target direction: keep broad database awareness Company-routed, keep implementation writes domain-owned, and avoid turning one shared helper into an unbounded cross-domain write surface.

## Phase 5 Status

Phase 5 is complete as an inventory and migration plan. Helper code has not moved yet.

Current state:
- Supabase MCP remains the preferred broad database-awareness layer.
- Brain `_system/minibiota_tools.py` remains the active fallback/helper module during transition.
- Company owns routing, ownership classification, and approval boundaries for future helper migration.
- Domain-specific write helpers should move only after each owner accepts the scope.

## Root Coupling Found

Brain `minibiota_tools.py` is root-coupled:
- `VAULT_ROOT` resolves to `miniBIOTA_Brain`.
- `WEB_ROOT` resolves relative to Brain as `miniBIOTA_Web`.
- `.env` is loaded from Brain root.
- Vault file helpers read/write Brain paths.
- Web file helpers read/write `miniBIOTA_Web` paths.
- Supabase helper writes use Brain write policy and Brain `.env` key status.

Do not copy this file into Company unchanged unless the root semantics are deliberately rewritten.

## Helper Ownership Classification

| Helper group | Functions or surfaces | Proposed owner | Migration action | Risk |
|---|---|---|---|---|
| Write policy and env status | `get_write_mode`, `describe_write_policy`, `_require_safe_write`, `_supabase_env_status`, `_require_write_key` | Shared Company protocol plus domain-local helpers | Recreate as a small shared Company helper module only after secret/env policy is documented. Keep approval gates identical. | High |
| Supabase client internals | `_supabase`, `_supabase_secret_key`, `_supabase_publishable_key` | Shared helper infrastructure | Do not expose broadly. Keep secrets in ignored env/config. Prefer MCP read awareness first. | High |
| Schema awareness and broad reads | `KNOWN_SUPABASE_TABLES`, `list_supabase_tables`, `describe_supabase_table`, `list_table_columns`, `sample_table_rows` | Company for routing map; MCP for live truth | Move registry ownership into Company only as fallback. Live schema truth stays MCP/read-only. | Medium |
| Research/ecology reads | `describe_science_schema`, `list_species`, `search_species_by_name`, `get_species_by_slug`, `get_species_stats`, `list_biomes`, `get_biome_by_slug`, `get_biosphere_profile`, `get_recent_chronicles`, `get_system_logs`, `get_species_biome_links` | Research, with Company read use when coordination needs it | Domain-owned helpers or MCP reads. Company should not own ecology interpretation. | Medium |
| Research/ecology writes | `update_extinct_species_count`, `update_biosphere_profile`, `update_species`, `run_rpc` | Research, App only for schema/runtime where scoped | Do not move to Company as active write helpers. Require explicit approval and owner routing. | High |
| Finance/growth reads | `describe_finance_schema`, `list_operating_expenses`, `list_liabilities`, `list_revenue_streams`, `list_planned_purchases`, `list_partner_opportunities`, `get_finance_snapshot` | Financials and Growth | Keep domain-owned. Company may read summaries for planning only. | High for finance |
| Brain vault reads | `read_vault_file`, `find_vault_files`, `read_task_context` | Brain archive or Company migration tooling | Do not make these active Company vault writes. Replace with Company-specific file readers only if needed. | Medium |
| Brain vault writes and Markdown task mutation | `append_to_vault_file`, `append_under_heading`, `add_task_under_heading`, `update_task_status` | Retire or rewrite for Company only after source-of-truth review | Do not migrate as-is. Markdown task mutation conflicts with Planner task truth. | High |
| Observations and chronicle staging | `log_observation`, `get_recent_observations`, `promote_observation`, `list_chronicles_staging`, `add_chronicles_staging`, `approve_staged_chronicle`, `reject_staged_chronicle` | Research + Content; Web for public rendering only | Split by workflow. Writes need explicit approval and domain owner routing. | High |
| Content pipeline | `get_pipeline_chain`, `list_content_pipeline`, `get_pipeline_transcript`, `get_content_pipeline_item`, `create_content_pipeline_item`, `update_content_pipeline_item` | Content | Keep Content-owned. Company may inspect for cross-domain sequencing but should not own writes. | Medium/High |
| Announcements | `list_announcements`, `add_announcement`, `toggle_announcement` | Web + Brand + Content, with App/runtime as needed | Do not move into Company active writes. Public behavior requires explicit approval. | High |
| Content calendar and source map | `list_content_calendar`, `read_calendar_source_map`, `get_content_calendar_entry`, `create_content_calendar_entry`, `update_content_calendar_entry`, `replace_calendar_source_map` and private calendar-link helpers | Content + App Planner/runtime | Reads may inform Company planning. Writes are domain/App workflow writes requiring approval. | High |
| Web file helpers | `list_web_directory`, `read_web_file`, `write_web_file` | Web | Do not move to Company. Web implementation belongs in Web repo. | High |
| Session bootstrap | `session_init` and `__main__` system check | Company/domain-local startup scripts | Recreate a Company-specific bootstrap after helper ownership is settled. Avoid Brain greeting/root assumptions. | Medium |

## Migration Recommendations

1. Keep MCP read-only awareness as the preferred path for broad Supabase schema/table/log/advisor context.
2. Create a small Company helper only for Company-owned needs: write policy reporting, Company Planner read helpers, and export/reporting checks.
3. Split domain writes into domain-owned helper modules rather than one Company mega-helper.
4. Preserve explicit approval for all Supabase writes, Planner writes, raw SQL, migrations, schema changes, destructive writes, service-role actions, storage/admin actions, and live-control paths.
5. Do not migrate Brain vault write helpers as-is. Company uses `domains/`, `memory/`, `skills/`, exports, and Planner; Markdown task helpers are not a long-term task source.
6. Keep Brain helper available as a historical/archive lookup until all domain references are updated in Phase 7.
7. Add Company/local MCP setup notes before moving any helper that depends on database awareness.

## Candidate Company Helper Scope

A future Company helper module may include:
- `get_write_mode` / `describe_write_policy` with Company root semantics.
- Read-only Company Planner helpers for `work_domains`, `work_projects`, and `tasks` filtered to `company_ops`.
- Read-only table/schema awareness wrappers that prefer MCP and clearly label fallback snapshots.
- Export/report validation helpers for `domains/` and `0. Agent Exports/`.

A future Company helper module should not include:
- Research species/observation writes.
- Financial transaction writes.
- Hardware telemetry/control writes.
- App schema/runtime helpers.
- Web file writes.
- Content publish/calendar writes unless explicitly scoped with Content/App ownership.
- Raw SQL or migrations.

## Activation Criteria For Moving Code

Move helper code only when:
- The destination owner is identified.
- The root path and env semantics are rewritten and tested.
- Approval gates match or exceed Brain helper gates.
- Domain agents that depend on the helper are updated together with the helper path.
- A read-only smoke check passes without test writes.
- Any controlled write helper is verified with source inspection first, not dummy writes.

## Phase 5 Closeout

Phase 5 does not activate a Company helper path. It creates the ownership map and safety plan needed before code movement.

Next likely phases:
- Phase 6: migrate Brain skills that are still useful.
- Phase 7: update domain agents and helper references after reporting/export/helper decisions are ready.
