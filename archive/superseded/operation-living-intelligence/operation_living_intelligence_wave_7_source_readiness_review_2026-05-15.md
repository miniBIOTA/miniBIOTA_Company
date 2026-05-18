---
id: operation_living_intelligence_wave_7_source_readiness_review_2026-05-15
title: Operation Living Intelligence Wave 7 Source Readiness Review
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-7, planner, agent-routing, source-readiness, no-write]
status: design_ready_for_app_packet
---
# Operation Living Intelligence Wave 7 Source Readiness Review

## Purpose

This review checks whether **Operation Living Intelligence Wave 7: Planner And Agent Routing Graph** can move from docs-only design toward a Company-to-App design-review packet.

Result:

```text
source_shape_ready_live_read_deferred_app_packet_ready
```

The Planner schema/source shape is ready for a future no-write App design-review packet. App source already reads the core Planner tables needed for ownership, program membership, task hierarchy, and content-project linkage. App `out/` is ignored and suitable for future local readback output if separately approved.

The review should still stop before implementation because no live Planner/Supabase read was performed in this pass, no generated routing output exists, and Planner writes remain live operational changes requiring explicit approval.

## Review Basis

Company/App sources checked on 2026-05-15:

```text
domains/company/operation_living_intelligence_wave_7_planner_agent_routing_graph_design_2026-05-15.md
skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-data-projection-matrix.md
domains/company/operation_living_intelligence_session_closeout_2026-05-15.md
_system/agent_repo_registry.md
_system/database_awareness.md
memory/05-database-access.md
domains/company/company_brief.md
domains/app/app_brief.md
M:\miniBIOTA\miniBIOTA_App\.gitignore
M:\miniBIOTA\miniBIOTA_App\migrations\007_project_management_schema.sql
M:\miniBIOTA\miniBIOTA_App\migrations\010_work_programs_schema.sql
M:\miniBIOTA\miniBIOTA_App\memory\05-supabase-and-storage-rules.md
M:\miniBIOTA\miniBIOTA_App\memory\09-planner-project-manager.md
M:\miniBIOTA\miniBIOTA_App\js\planner\calendar.js
M:\miniBIOTA\miniBIOTA_App\js\planner\calendar-programs.js
M:\miniBIOTA\miniBIOTA_App\js\planner\services\write-plan-persistence.js
M:\miniBIOTA\miniBIOTA_App\js\shared\api-client.js
M:\miniBIOTA\miniBIOTA_App\main.js
M:\miniBIOTA\miniBIOTA_App\preload.js
```

No live Supabase, Planner, App runtime, MCP, SQL, API, helper, generated-output, graph-runtime, or public-surface command was run.

## Source Shape Readiness

### Planner Tables

The App schema references support the first Wave 7 routing source set.

| Source | Readiness | Notes |
|---|---|---|
| `work_domains` | Ready by schema/source | Migration 007 creates stable domain IDs, keys, labels, color classes, active flag, and sort order. App reads active domains ordered by sort/label. |
| `work_projects` | Ready by schema/source | Migration 007 creates project domain, title, status, priority, dates, owner, notes, and lifecycle fields. App reads non-archived projects. |
| `tasks` | Ready by schema/source | Migration 007 adds `domain_id`, `work_project_id`, `parent_task_id`, `work_status`, `task_type`, work dates, due date, blocked reason, completion timestamp, and sort order. App reads all tasks ordered by domain/priority. |
| `work_programs` | Ready by schema/source, live-read optional guard exists | Migration 010 creates Programs/Operations containers. App reads non-archived programs through `optionalPlannerSchemaRead`. |
| `work_program_projects` | Ready by schema/source, live-read optional guard exists | Migration 010 creates program-project links with role, notes, sort order, and uniqueness. App reads links through `optionalPlannerSchemaRead`. |
| `content_calendar.work_project_id` | Ready by schema/source | Migration 007 links content identity/due records to general work projects. App reads `content_calendar` and uses `work_project_id` in Planner views. |

Readiness implication:

- A future Wave 7 helper can start with these six source surfaces.
- Program/project/task/content identity can be projected without inventing new ownership fields.
- Current live row counts and current OLI project/task/program membership still need an approved read-only live check before generated output.

### App Read Paths

App source confirms the current runtime can read the relevant planner records:

| App source | Finding |
|---|---|
| `js/planner/calendar.js` | `loadCalendar()` reads `content_calendar`, `tasks`, `work_domains`, `work_projects`, optional `work_programs`, and optional `work_program_projects`. |
| `js/planner/calendar.js` | `hydratePlannerTasks()` derives task domain labels from `domain_id` when present and falls back to legacy domain key. |
| `js/planner/calendar-programs.js` | Program rendering groups linked projects by domain and derives task stats from tasks linked to each work project. |
| `js/shared/api-client.js` | App reads may route through Electron `supabase-rest` IPC when available, keeping internal protected access out of renderer globals. |
| `main.js` / `preload.js` | App exposes `supabase-rest` IPC from renderer to main process. |

Readiness implication:

- App already has source patterns for the reads Wave 7 cares about.
- A future helper should reuse an App-owned protected/read-only path or a separately approved Company read-only path rather than invent a new secret path.
- Publishable-key REST should not be treated as proof of full current Planner truth when RLS or protected access matters.

### Write-Risk Sources

App source and memory make clear that Wave 7 must avoid write paths.

| Source | Write-risk finding |
|---|---|
| App `memory/05-supabase-and-storage-rules.md` | Planner project/task create, edit, status, done/reopen, archive, scheduling, recurrence, Source Map links, and Program links are live operational writes. |
| `calendar-programs.js` | Program create/edit/status/archive and project-link operations call `AppAPI.insert`, `AppAPI.patch`, or `AppAPI.remove`. |
| `calendar-work-projects.js` and task modal sources | Project/task edits route through App write helpers. |
| `write-plan-persistence.js` | Planner patch paths persist writes and verify readback, which is useful for approved writes but out of scope for Wave 7 readback generation. |

Readiness implication:

- A Wave 7 helper must be read-only by construction.
- It must not call App mutation helpers, Planner write-plan helpers, `insert`, `patch`, or `remove`.
- It must not create or relink programs, projects, content entries, tasks, source links, or schedules.

## Registry And Domain Routing Readiness

Company registry and domain reports are ready as routing sources.

| Source | Readiness | Use |
|---|---|---|
| `_system/agent_repo_registry.md` | Ready | Map domain/repo ownership, active paths, reporting targets, risk levels, Supabase responsibility boundaries, and Brain archive relationship. |
| `domains/*/*_brief.md` | Ready where present | Manager-facing active domain state and cross-domain implications. |
| `domains/*/*_overview.md` | Ready where present | Broader domain context and active routing notes. |
| Company memory safety/routing files | Ready | Approval gates, source hierarchy, and Company/App/domain boundaries. |

Detected Company domain report folders:

```text
app
brand
company
content
definitions
financials
growth
hardware
raw-footage
research
web
```

Readiness implication:

- A future helper can create `DomainRepo`, `DomainReport`, `ApprovalGate`, and `HandoffSurface` nodes from Company docs.
- The helper should preserve source path and heading for Markdown-derived records.
- Brain should remain archive/recovery context only.

## Output Boundary Readiness

App `.gitignore` contains:

```text
out/
```

Future proposed output path:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_7_planner_agent_routing_graph\
```

Readiness implication:

- The proposed path follows the established OLI ignored-output pattern.
- No output folder or generated output was created during this review.
- Creating local output still requires separate implementation approval.

## Deferred Return Gate Readiness

Wave 7 should include deferred return gates as first-class routing facts.

| Gate | Current state | Required return |
|---|---|---|
| Wave 4 YouTube Analytics Warehouse | Source identity ready; auth/analytics access not ready. | Manual YouTube Studio export packet or targeted YouTube Analytics API no-write App proposal. |
| Wave 5 Retrieval Layer | App docs-only design review complete; implementation paused. | Helper approval before generated corpus, embeddings, vector index, pgvector, or scheduled refresh. |
| Wave 6 Media And Visual AI Readiness | App docs-only design review complete; implementation paused. | Media-inspection tooling, exact model route, Raw Footage no-side-effect/cache policy, Research wording, and privacy/license/cost/input gates. |

Readiness implication:

- These should become `DeferredGate` nodes in the future routing graph.
- Agents should answer that these gates must return later, not that they are optional or abandoned.

## Readiness Decision

Wave 7 is ready for a Company-to-App design-review packet.

Recommended packet scope:

- Ask App whether the proposed no-write helper/readback boundary is acceptable.
- Ask App whether to use App-owned protected reads, Company read-only helper reads, or another approved read-only source path for live Planner state.
- Ask App whether the ignored output path is acceptable.
- Ask App to validate that the helper can avoid all write paths.
- Ask App to confirm that generated routing output must remain derived, rebuildable, and noncanonical.

Do not implement the helper yet.

## Recommended Future First Packet

First source set:

```text
work_domains
work_programs
work_program_projects
work_projects
tasks
content_calendar
_system/agent_repo_registry.md
domains/*/*_brief.md
domains/*/*_overview.md
Operation Living Intelligence wave docs and closeout records
```

First readback questions:

1. Which domain owns Operation Living Intelligence coordination?
2. Which domain owns Planner runtime/schema/UI decisions?
3. Which domain owns a selected project?
4. Which Program/Operation contains a selected project?
5. Which tasks are blocked or containers?
6. Which handoff surface should an agent read next?
7. Which approval gate applies before a Planner write?
8. What is blocking Wave 4?
9. What is blocking Wave 5?
10. What is blocking Wave 6?

## Stop Conditions

Stop before App implementation if:

- no approved live read-only Planner path is available;
- App cannot keep output under ignored `out/`;
- source records cannot preserve source IDs and source paths;
- write-risk helpers cannot be excluded;
- generated output would mark tasks done, change statuses, create schedules, create links, or imply approvals;
- deferred return gates are treated as optional or closed;
- ownership conflicts cannot be flagged without inventing a decision;
- the packet expands into App runtime behavior, persistent graph service, scheduled sync, public dashboard, vector index, CRM/Financials sensitive indexing, paid service, or canonical writeback.

## Not Approved

This review does not approve:

- live Planner/Supabase read execution;
- Planner/Supabase writes;
- task, project, program, source-link, schedule, recurrence, done/reopen, archive, or status changes;
- App helper implementation;
- generated output;
- App runtime behavior;
- schema changes or migrations;
- persistent graph infrastructure;
- scheduled sync or automation;
- vector index or embedding job;
- public website behavior;
- domain repo edits;
- Brain mirror edits;
- CRM/Financials sensitive indexing;
- paid services;
- public, sponsor, legal, financial, launch, roadmap, or canonical commitments;
- source-of-truth migration or canonical writeback.
