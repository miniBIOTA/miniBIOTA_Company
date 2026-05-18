---
id: operation_living_intelligence_wave_7_planner_agent_routing_graph_design_2026-05-15
title: Operation Living Intelligence Wave 7 Planner And Agent Routing Graph Design
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-7, planner, agent-routing, dependency-graph, no-write]
status: docs_only_design
---
# Operation Living Intelligence Wave 7 Planner And Agent Routing Graph Design

## Purpose

Wave 7 designs a read-only Planner and agent-routing projection so agents can answer:

```text
Who owns this work, what is blocked, what needs approval, and where should the handoff go?
```

This wave is docs-only. It does not approve App helper implementation, generated output, Planner writes, Supabase writes, task/project/program edits, schema changes, App runtime behavior, public behavior, automation, durable graph infrastructure, vector indexing, paid services, or canonical writeback.

Wave 7 should treat Waves 4, 5, and 6 as deferred return gates, not optional loose ends:

- Wave 4 must return for manual analytics export or targeted YouTube Analytics API proposal.
- Wave 5 must return for manifest/chunk helper approval before generated corpus, embeddings, vector index, or pgvector work.
- Wave 6 must return for media-inspection tooling, exact model route, Raw Footage no-side-effect/cache policy, Research wording, and privacy/license/cost/input gates before helper/model/media work.

## Design Inputs

Reviewed sources:

```text
skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-data-projection-matrix.md
domains/company/operation_living_intelligence_session_closeout_2026-05-15.md
domains/company/company_brief.md
_system/agent_repo_registry.md
memory/01-agent-purpose.md
memory/02-company-safety-rules.md
memory/05-cross-domain-relationships.md
M:\miniBIOTA\miniBIOTA_App\migrations\007_project_management_schema.sql
M:\miniBIOTA\miniBIOTA_App\migrations\010_work_programs_schema.sql
M:\miniBIOTA\miniBIOTA_App\memory\09-planner-project-manager.md
domains/app/app_brief.md
```

No live Planner/Supabase query was required for this design pass. Current structured state should be read before any future implementation proposal because Planner records, project status, task status, program links, blockers, and due dates are live operational truth.

## Design Decision

Wave 7 should be a derived routing graph, not a replacement Planner.

Canonical sources remain:

| Source | Canonical responsibility |
|---|---|
| `work_domains` | Stable Planner domain identities. |
| `work_programs` | Cross-domain Programs/Operations container records. |
| `work_program_projects` | Program-to-project membership and coordination role. |
| `work_projects` | Domain-owned project execution containers. |
| `tasks` | Live actionable task truth. |
| `content_calendar` | Content identity, due/close record, and linked production context. |
| `_system/agent_repo_registry.md` | Company-owned repo/domain routing map, risk level, reporting path, and Supabase responsibility boundary. |
| Company `domains/*/*_brief.md` and `domains/*/*_overview.md` | Active manager-facing domain state and cross-domain context. |
| Domain repos | Domain implementation truth. |

The routing graph may summarize and connect those records, but it must not become:

- task status truth;
- project status truth;
- program membership truth;
- approval truth;
- source-of-truth routing override;
- public roadmap;
- automation queue;
- canonical dependency database.

## Proposed Future Output Boundary

If a later no-write helper is approved, use App's ignored output tree:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_7_planner_agent_routing_graph\
```

Possible future files:

```text
routing_source_manifest.json
routing_nodes.jsonl
routing_edges.jsonl
blocked_or_unresolved_routes.jsonl
routing_readback_report.md
validation_report.json
```

These files are not approved by this design.

## Projection Model

Recommended node families:

| Node | Source | Purpose |
|---|---|---|
| `WorkDomain` | `work_domains` | Stable Planner domain identity and label. |
| `WorkProgram` | `work_programs` | Cross-domain operation container. |
| `WorkProject` | `work_projects` | Domain-owned project execution unit. |
| `Task` | `tasks` | Live actionable work item or container task. |
| `ContentCalendarEntry` | `content_calendar` | Content identity and due/close surface when linked. |
| `DomainRepo` | `_system/agent_repo_registry.md` | Active repo path, risk, and implementation owner. |
| `DomainReport` | `domains/*/*_brief.md` / `domains/*/*_overview.md` | Company reporting surface. |
| `ApprovalGate` | Company safety rules, registry, App memory, domain reports | Explicit approval category for writes, public use, spend, schema, live controls, or sensitive data. |
| `HandoffSurface` | Registry and domain reports | Where a downstream owner should receive follow-up. |
| `DeferredGate` | OLI closeout and wave docs | Return gates for deferred Waves 4, 5, and 6. |

Recommended edge families:

| Edge | Meaning |
|---|---|
| `PROGRAM_INCLUDES_PROJECT` | Program membership from `work_program_projects`. |
| `PROJECT_OWNED_BY_DOMAIN` | Project domain from `work_projects.domain_id`. |
| `TASK_OWNED_BY_DOMAIN` | Task domain from `tasks.domain_id` or legacy task domain key. |
| `TASK_BELONGS_TO_PROJECT` | Task project membership from `tasks.work_project_id`. |
| `TASK_PARENT_OF_TASK` | Parent/child task structure from `tasks.parent_task_id`. |
| `CONTENT_ENTRY_LINKED_TO_PROJECT` | Content identity to work project from `content_calendar.work_project_id`. |
| `DOMAIN_HAS_REPO` | Domain to active repo path from the registry. |
| `DOMAIN_REPORTS_TO_COMPANY` | Domain to active Company report path. |
| `DOMAIN_HAS_RISK_LEVEL` | Registry risk classification. |
| `WORK_ITEM_NEEDS_APPROVAL` | Derived from write surface, domain, risk, status, blocker text, or known rule. |
| `WORK_ITEM_BLOCKED_BY_GATE` | Derived from blocked status, blocker fields, or explicit wave closeout blockers. |
| `WORK_ITEM_HANDS_OFF_TO_DOMAIN` | Derived downstream owner route, with Company coordination remaining separate from domain execution. |
| `DEFERRED_GATE_RETURNS_TO_WAVE` | Links deferred Wave 4/5/6 gate records to future action. |

Do not infer unrecorded project dependencies from vague notes as if they were canonical. If a dependency is not explicit in structured records or active docs, mark it `candidate_dependency_review_required`.

## Agent Questions Wave 7 Should Support

The routing graph should answer, with citations:

1. Which domain owns this project or task?
2. Which Program/Operation contains this project?
3. Which tasks are blockers, containers, or child work?
4. Which domain report or repo should an agent read next?
5. Which approval gate applies before a write, public change, schema change, app behavior change, live-control path, spend, sponsor commitment, or sensitive-data use?
6. Which OLI waves are complete, deferred, or blocked?
7. Which deferred gate must return before implementation resumes?
8. Which downstream owner needs the next handoff?
9. Is this Company coordination, App runtime work, or domain-owned execution?
10. What should an agent not do by default?

## Readback Requirements

A future `routing_readback_report.md` should include:

- total domains, programs, projects, tasks, and domain reports included;
- every source path/table queried;
- active vs deferred OLI wave status;
- a domain ownership summary;
- a program/project/task hierarchy summary;
- top blockers and approval gates;
- unresolved routes where ownership or approval is ambiguous;
- examples for at least ten routing questions;
- explicit reminder that Planner/Supabase remains live task truth.

Suggested first readback questions:

1. Who owns Operation Living Intelligence implementation work?
2. Which domain owns Planner runtime/schema/UI decisions?
3. Which domain owns Company coordination and review cadence?
4. What is blocking Wave 4?
5. What is blocking Wave 5?
6. What is blocking Wave 6?
7. Which repo should handle Media Library metadata behavior?
8. Which domain should review public species-card claims?
9. Which records require explicit approval before live Planner writes?
10. Which reports should an agent read before changing cross-domain sequencing?

## Validation Requirements

Before any generated output is considered usable, a future helper must validate:

- every included table/file source is listed in `routing_source_manifest.json`;
- every node has `source_table` or `source_path`;
- every structured node preserves source ID;
- every Markdown-derived node preserves source path and heading when available;
- every `WorkProject` and `Task` has a domain route or is flagged unresolved;
- every Program edge preserves membership role and source ID;
- every approval gate is traceable to Company/App/domain rules;
- deferred Waves 4, 5, and 6 remain flagged as required return gates;
- no generated route marks a task done, changes status, or schedules work;
- no graph node or edge is treated as canonical Planner truth;
- no Supabase, Planner, App runtime, schema, migration, public site, domain repo, Brain mirror, paid service, or canonical write occurred.

## Stop Conditions

Stop before implementation if:

- live Planner state cannot be read through an approved read-only path;
- the helper would require Planner/Supabase writes;
- the helper would create, edit, link, archive, schedule, complete, or reopen a task/project/program;
- ownership conflicts cannot be resolved from registry, Planner domain, or domain reports;
- approval gates are missing for live writes, public output, spend, sponsor commitments, schema/runtime changes, live controls, CRM/sensitive data, Financials data, Raw Footage/media metadata, or Research claims;
- the graph would become an automation queue or task truth;
- the output path would leave App's ignored `out/` tree;
- generated routes cannot cite source IDs or source paths;
- a future App helper proposal expands into runtime UI, scheduled sync, persistent graph service, vector index, public dashboard, or canonical writeback.

## Domain Impact Map

| Domain | Why implicated | Next need |
|---|---|---|
| Company | Owns cross-domain coordination, Programs/Operations governance, dependency map, review rhythm, and registry. | Keep Wave 7 as derived routing design and update Company state. |
| App | Owns Planner runtime/schema/UI, Supabase-backed work queue behavior, and any future helper implementation. | Review any future no-write helper proposal before output generation. |
| Research | Owns claim safety and species/ecology interpretation. | Use routing graph to know when Research review is required, not to generate claims. |
| Content | Owns story/source production and content calendar execution. | Use routing graph to find handoffs, not to change content records. |
| Web | Owns public site behavior. | Treat public output as downstream approval-gated. |
| Growth | Owns CRM/commercial relationship meaning. | Keep CRM/sponsor/follow-up context out of Wave 7 until sensitive-domain policy is ready. |
| Financials | Owns spend, runway, and finance-sensitive summaries. | Keep financial details out of Wave 7 except approval-gate routing. |
| Hardware | Owns live-system telemetry/control safety. | Keep live controls out of Wave 7; route telemetry/control questions to Hardware/App. |
| Raw Footage | Owns raw source media/proof context with App/Content/Research split. | Keep media metadata/write decisions approval-gated. |
| Brain | Archive/recovery context only. | No Brain mirror updates. |

## Sequencing Recommendation

Recommended next step:

```text
Wave 7 source/readiness review for Planner and registry routing sources, then a no-write App design-review packet only if the read-only source shape is clear.
```

Do not jump directly to helper implementation. The source/readiness review should verify:

- which live Planner tables can be read safely;
- whether `work_programs`, `work_program_projects`, `work_projects`, `tasks`, and `work_domains` have the fields needed for a first routing graph;
- whether `content_calendar.work_project_id` should be included in the first packet;
- how to represent deferred Waves 4, 5, and 6 as return gates;
- whether App's ignored output path is acceptable for Wave 7;
- what examples prove the graph improves agent routing without changing Planner truth.

## Not Approved

This design does not approve:

- live Planner/Supabase reads beyond future explicitly scoped read-only review;
- Planner/Supabase writes;
- task, project, program, source-link, or schedule changes;
- App helper implementation;
- generated output;
- schema changes or migrations;
- App runtime behavior;
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
