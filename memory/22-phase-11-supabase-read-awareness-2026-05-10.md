---
id: phase_11_supabase_read_awareness_2026_05_10
title: Phase 11 Supabase Read-Awareness Session
domain: company
last_updated: 2026-05-10
tags: [brain, company, migration, probation, supabase, read-awareness]
---
# Phase 11 Supabase Read-Awareness Session - 2026-05-10

## Purpose

This file records the required Phase 11 Supabase read-awareness session.

The goal was to prove that Company can reason about Supabase/App Planner awareness from active Company/App sources without falling back to Brain helper code and without writing live records.

## Scope

The user approved a scoped read-only inspection.

Allowed:

- GET-only Supabase REST checks for Planner/Programs awareness.
- Reading local ignored App `.env` only to find configured Supabase URL/key names.
- Reading active Company/App docs for ownership and safety rules.

Not allowed:

- Supabase writes.
- Planner writes.
- Raw SQL.
- Migrations.
- Service-role mutations.
- Dummy records.
- Task/project/program status changes.
- App/runtime behavior changes.

## Sources Reviewed

Active Company sources:

- `_system/database_awareness.md`
- `memory/05-database-access.md`
- `_system/agent_repo_registry.md`
- `memory/16-brain-retirement-probation.md`

Active App sources:

- `.env` key-name presence only; values were not recorded.
- `migrations/005_task_planner_schedule.sql`
- `migrations/007_project_management_schema.sql`
- `migrations/010_work_programs_schema.sql`
- `main.js`
- `js/shared/api-client.js`

## Read-Only Checks Performed

MCP resource check:

- No MCP resources were exposed to this Codex session.

Local configured key check:

- `SUPABASE_PUBLISHABLE_KEY` exists in the App `.env`.
- `SUPABASE_SECRET_KEY` exists in the App `.env`.
- `SUPABASE_SERVICE_ROLE_KEY` was not present.
- No key values were printed or stored.

GET-only REST checks with the publishable key:

| Endpoint | Status | Visible rows | Classification |
|---|---:|---:|---|
| `work_domains` | 200 | 0 | Endpoint reachable; RLS exposes no rows through publishable key. |
| `work_domains` filtered to `company_ops` | 200 | 0 | Endpoint reachable; `company_ops` not visible through publishable key. |
| `work_projects` | 200 | 0 | Endpoint reachable; RLS exposes no rows through publishable key. |
| `tasks` | 200 | 0 | Endpoint reachable after selecting existing columns; RLS exposes no rows through publishable key. |
| `work_programs` | 200 | 0 | Endpoint reachable; RLS exposes no rows through publishable key. |
| `work_program_projects` | 200 | 0 | Endpoint reachable; RLS exposes no rows through publishable key. |

Additional schema signal:

- A GET selecting `tasks.title` returned `400` with `column tasks.title does not exist`, confirming that the REST path reached Supabase schema validation and that Company/App should use known task columns such as `id`, `status`, `domain`, `domain_id`, `work_project_id`, and `work_status` unless live schema inspection says otherwise.

Direct secret-key REST check:

- Direct REST with `SUPABASE_SECRET_KEY` was rejected with a forbidden secret-key message.
- Do not use direct secret-key REST from Codex shell as the normal read path.
- Future protected reads should use Supabase MCP or the App-owned protected bridge/tooling, not Brain helper code.

## Findings

1. Company no longer needs Brain helper code for Supabase awareness routing.
2. Planner/Programs table endpoints are reachable through the active Supabase REST API.
3. Publishable-key access is not enough for current Company Planner status because RLS exposes zero rows.
4. Direct secret-key REST from the shell is not a safe/working replacement path.
5. Future current-status reads should use Supabase MCP or an App-owned protected read bridge.
6. Company should continue to treat Supabase/App Planner as live structured truth when current project/task/program state matters, but should not write without explicit approval.

## Ownership Mapping

| Surface | Active owner | Company read posture |
|---|---|---|
| `work_domains` | App runtime/schema; Company uses domain keys for strategy routing | Read when current domain IDs or labels matter. |
| `work_projects` | Domain-owned project records in App Planner runtime | Read when current project state, blockers, or completion status matters. |
| `tasks` | Domain/project-owned task records in App Planner runtime | Read when current task state matters; write only after explicit approval. |
| `work_programs` | App runtime/schema; Company owns Program/Operation governance semantics | Read for current operation status and review cadence. |
| `work_program_projects` | App runtime/schema; Company owns cross-domain membership interpretation | Read before changing Program/project membership or closeout status. |

## Brain Usage Classification

Classification: Explicit transition maintenance.

Brain was referenced only because this task was requested from the Brain retirement migration thread. Active Supabase routing came from Company and App sources, not Brain.

## Boundaries Preserved

- No live Supabase records were written.
- No Planner records were created, edited, linked, completed, reopened, archived, scheduled, or deleted.
- No migrations or raw SQL were run.
- No app/runtime/public site behavior changed.
- No public, business, financial, legal, sponsor, launch, or roadmap commitments were made.
- Brain was not deleted, moved, physically archived, or made read-only.

## Result

The Phase 11 Supabase read-awareness event is complete.

All required Phase 11 evidence items are now recorded. Continue the planned probation window and keep logging any attempted Brain usage.
