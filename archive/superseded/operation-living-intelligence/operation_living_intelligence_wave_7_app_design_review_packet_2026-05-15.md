---
id: operation_living_intelligence_wave_7_app_design_review_packet_2026-05-15
title: Operation Living Intelligence Wave 7 App Design Review Packet
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-7, app-design-review, planner, agent-routing, no-write]
status: design_review_packet_ready
---
# Operation Living Intelligence Wave 7 App Design Review Packet

## Purpose

This packet is the Company-to-App design review handoff for **Operation Living Intelligence Wave 7: Planner And Agent Routing Graph**.

Company is asking App to review the future no-write boundary for a derived Planner/agent-routing helper or readback package. The purpose is to let agents answer ownership, blocker, approval, and handoff questions while keeping Planner/Supabase as live task truth.

This packet does not approve App code changes, helper implementation, generated output, live Planner/Supabase reads, Planner writes, task/project/program edits, source-link edits, schedule changes, recurrence changes, done/reopen/archive actions, schema changes, migrations, App runtime behavior, graph runtime, persistent service, vector index, embeddings, scheduled sync, automation, public website behavior, domain repo edits, Brain mirror edits, CRM/Financials sensitive indexing, paid services, source-of-truth migration, or canonical writeback.

## App Context Read

Company checked App context read-only on 2026-05-15.

| App source | Finding |
|---|---|
| `M:\miniBIOTA\miniBIOTA_App\.gitignore` | `out/` is ignored. Future generated output, if later approved, should stay under ignored `out/operation_living_intelligence/`. |
| `M:\miniBIOTA\miniBIOTA_App\migrations\007_project_management_schema.sql` | Planner project-management schema supports `work_domains`, `work_projects`, task project-management fields, task hierarchy, due/work dates, blocked reason, and `content_calendar.work_project_id`. |
| `M:\miniBIOTA\miniBIOTA_App\migrations\010_work_programs_schema.sql` | Programs/Operations schema supports `work_programs` and `work_program_projects` for cross-domain project grouping without changing project ownership. |
| `M:\miniBIOTA\miniBIOTA_App\memory\05-supabase-and-storage-rules.md` | Planner project/task/program writes are live operational writes and require explicit approval. |
| `M:\miniBIOTA\miniBIOTA_App\memory\09-planner-project-manager.md` | Planner/Supabase is live task truth. Programs coordinate domain-owned projects without overriding domain ownership or approval rules. |
| `M:\miniBIOTA\miniBIOTA_App\js\planner\calendar.js` | App already reads `content_calendar`, `tasks`, `work_domains`, `work_projects`, and optional `work_programs` / `work_program_projects`. |
| `M:\miniBIOTA\miniBIOTA_App\js\planner\calendar-programs.js` | Program UI groups linked projects by domain and derives task stats from project-linked tasks. Program create/edit/link/status paths are write-risk. |
| `M:\miniBIOTA\miniBIOTA_App\js\planner\services\write-plan-persistence.js` | Planner write-plan helpers persist patches and verify readback; useful for approved writes but out of scope for Wave 7 generated readback. |
| `M:\miniBIOTA\miniBIOTA_App\js\shared\api-client.js` | App reads/writes may route through Electron `supabase-rest` IPC when available; a future helper should not invent a new secret path. |

## Design Inputs

App should review these Company sources:

| Source | Path |
|---|---|
| Wave 7 design | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_7_planner_agent_routing_graph_design_2026-05-15.md` |
| Wave 7 source/readiness review | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_7_source_readiness_review_2026-05-15.md` |
| Projection matrix | `M:\miniBIOTA\miniBIOTA_Company\skills\coordinate-cross-domain-priorities\reference\operation-living-intelligence-data-projection-matrix.md` |
| Session closeout | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_session_closeout_2026-05-15.md` |
| Company brief | `M:\miniBIOTA\miniBIOTA_Company\domains\company\company_brief.md` |
| App brief | `M:\miniBIOTA\miniBIOTA_Company\domains\app\app_brief.md` |
| Company registry | `M:\miniBIOTA\miniBIOTA_Company\_system\agent_repo_registry.md` |
| Company database awareness | `M:\miniBIOTA\miniBIOTA_Company\_system\database_awareness.md` |

## Current Readiness Finding

Company's current readiness result is:

```text
source_shape_ready_live_read_deferred_app_packet_ready
```

Confirmed by source inspection:

- App schema/source shape supports the needed Planner tables and fields.
- App source already reads the relevant Planner sources.
- `work_programs` and `work_program_projects` reads are optional-schema guarded in App.
- `content_calendar.work_project_id` is available as the content identity-to-work-project bridge.
- Company registry and domain reports are ready as routing sources.
- App `out/` is ignored.
- Waves 4, 5, and 6 are now deferred return gates, not optional loose ends.

Still deferred:

- live Planner/Supabase readback;
- row counts and current OLI program/project/task membership;
- App helper implementation;
- generated routing output;
- graph runtime;
- App runtime integration;
- Planner/Supabase writes;
- automation or scheduled sync.

## Requested App Decision

Company is asking App to answer design questions only:

| Question | Needed App answer |
|---|---|
| No-write helper boundary | Is a future read-only Planner/registry routing helper acceptable in principle? |
| Read path | Should a future helper use App-owned protected reads, Company read-only helper reads, MCP/read-only awareness, or another approved read-only path? |
| Live read gate | What explicit approval/readback should be required before live Planner records are read for generated output? |
| Output boundary | Is `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_7_planner_agent_routing_graph\` acceptable for future ignored, rebuildable output? |
| Source set | Are `work_domains`, `work_programs`, `work_program_projects`, `work_projects`, `tasks`, `content_calendar`, Company registry, domain reports, and OLI wave docs the right first source set? |
| Write-path exclusion | What should prove the helper cannot call App mutation helpers, Planner write-plan helpers, `insert`, `patch`, or `remove`? |
| Canonical boundary | What validation should prove generated routes cannot become Planner/task truth? |
| Deferred gates | How should Waves 4, 5, and 6 be represented as return gates, not optional abandoned work? |
| Readback shape | What readback questions and validation checks should App require before output is useful? |
| Stop conditions | What should stop a future Wave 7 packet before it becomes implementation? |

## Recommended App Safety Position

Company recommends App classify the next stage as:

| Surface | Classification |
|---|---|
| App design review | Allowed as docs-only review. |
| Future helper | Proposal only; not approved by this packet. |
| Live Planner reads | Deferred until explicit read-only scope/approval. |
| Local ignored output | Acceptable candidate boundary if App agrees; creating output still needs approval. |
| Planner/Supabase writes | Not approved. |
| Task/project/program edits | Not approved. |
| Source-link/schedule/status/done/archive changes | Not approved. |
| App runtime behavior | Not approved. |
| Schema/migration work | Not approved. |
| Persistent graph/vector infrastructure | Not approved. |
| Automation/scheduled sync | Not approved. |
| CRM/Financials sensitive indexing | Not approved. |
| Public/Web behavior | Not approved. |
| Canonical writeback | Must remain `none`. |

## Proposed Future Output

If App later approves the design and Josue separately approves implementation, Company recommends the ignored output folder:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_7_planner_agent_routing_graph\
```

Expected future generated files:

```text
routing_source_manifest.json
routing_nodes.jsonl
routing_edges.jsonl
blocked_or_unresolved_routes.jsonl
routing_readback_report.md
validation_report.json
```

Generated output should stay local, ignored, rebuildable, and explicitly noncanonical.

## Proposed First Source Set

First structured source set:

```text
work_domains
work_programs
work_program_projects
work_projects
tasks
content_calendar
```

First Markdown source set:

```text
_system/agent_repo_registry.md
_system/database_awareness.md
memory/05-database-access.md
domains/*/*_brief.md
domains/*/*_overview.md
domains/company/operation_living_intelligence_*_2026-05-15.md
skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-data-projection-matrix.md
```

Excluded from first packet:

- CRM relationship details;
- raw Financials details;
- private sponsor notes;
- raw media folders;
- telemetry/live-control records;
- App runtime logs;
- credentials;
- Brain archive content unless explicitly scoped as archive-labeled provenance.

## Required App Review Guardrails

App should reject a future helper design if it cannot prove:

- output path stays under ignored `out/`;
- every structured node preserves source table and source ID;
- every Markdown-derived node preserves source path and heading when available;
- Planner/Supabase remains live task truth;
- generated output cannot mark tasks done, change status, create schedules, create links, or imply approval;
- program membership does not override project ownership;
- Company coordination does not replace domain implementation ownership;
- Waves 4, 5, and 6 remain deferred return gates;
- approval gates are traceable to Company/App/domain rules;
- live writes, public output, spend, sponsor commitments, schema/runtime changes, live controls, CRM/sensitive data, Financials data, Raw Footage/media metadata, and Research claims remain blocked without explicit approval;
- the helper does not call App mutation helpers, Planner write-plan helpers, `insert`, `patch`, or `remove`;
- no Supabase, Planner, Storage, schema, migration, App runtime, Web, domain repo, Brain mirror, graph/vector runtime, automation, paid service, or canonical write occurs.

## First Readback Questions

A future `routing_readback_report.md` should answer:

1. Which domain owns Operation Living Intelligence coordination?
2. Which domain owns Planner runtime/schema/UI decisions?
3. Which domain owns a selected project?
4. Which Program/Operation contains a selected project?
5. Which tasks are blocked, containers, child work, or done?
6. Which domain report or repo should an agent read next?
7. Which approval gate applies before a Planner write?
8. What is blocking Wave 4?
9. What is blocking Wave 5?
10. What is blocking Wave 6?

The readback should cite source tables/IDs or source paths for every answer.

## Handoff Message For App

Use this message when opening the App design review:

```text
Please review the Company Operation Living Intelligence Wave 7 Planner And Agent Routing Graph packet as a design-only App review.

At this gate, Company is not asking for implementation. The requested decision is whether App accepts the proposed no-write boundary for a future Planner/registry routing helper or readback package.

Key App questions:
- Is a no-write Planner/agent routing helper acceptable in principle?
- Should future live Planner reads use App-owned protected reads, Company read-only helper reads, MCP/read-only awareness, or another approved path?
- Is out/operation_living_intelligence/wave_7_planner_agent_routing_graph/ acceptable for ignored output if later approved?
- Are work_domains, work_programs, work_program_projects, work_projects, tasks, content_calendar, Company registry, domain reports, and OLI wave docs the right first source set?
- What must prove the helper cannot write Planner records or call App mutation/write-plan helpers?
- How should generated routes stay derived and noncanonical?
- How should Waves 4, 5, and 6 be represented as deferred return gates?

Not approved:
- No App code changes.
- No helper implementation.
- No generated output.
- No live Planner/Supabase reads yet.
- No Planner/Supabase writes.
- No task/project/program/source-link/schedule/status/done/archive changes.
- No schema or migration work.
- No App runtime behavior.
- No graph runtime.
- No vector index or embeddings.
- No public/Web behavior.
- No CRM/Financials sensitive indexing.
- No automation or scheduled sync.
- No canonical writeback.
```

## Next Company Action

Do not implement an App helper, generate output, perform live Planner reads, write Planner/Supabase records, build graph runtime, or create App changes from Company without explicit approval for that specific action.

If Josue approves the next move after this packet, recommended options are:

1. Ask App to perform a docs-only design review note for the Wave 7 Planner/agent routing packet.
2. Pause Wave 7 before App review and continue Wave 8 docs-only.
3. Return to deferred Wave 4, Wave 5, or Wave 6 gate work if implementation readiness becomes more urgent.

## Verification

- Read Wave 7 design and source/readiness review.
- Read Company database-awareness and database-access rules.
- Read Company repo registry.
- Read App Planner schema migrations 007 and 010.
- Read App Planner project-manager memory.
- Read App Supabase/Storage safety memory.
- Inspected App Planner source for read/write boundaries.
- No App repo files were changed.
- No live Planner/Supabase reads or writes were performed.
- No generated output was created.
- No App runtime, schema, migration, public site behavior, graph runtime, vector index, embedding job, automation, paid service, domain repo, Brain mirror, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, source-of-truth record, or canonical writeback changed.
