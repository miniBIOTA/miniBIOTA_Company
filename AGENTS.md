# miniBIOTA Company - Codex Agent Entry Point

## What This Repo Is
`miniBIOTA_Company` is the company operations, strategic planning, governance, roadmap, and cross-domain coordination vault for miniBIOTA. It owns the active cross-domain operating coordination layer that guides Research, Hardware, Content, Brand, Growth, Financials, Web, App, Raw Footage, and Brain coordination.

Company owns planning strategy, Programs/Operations governance, roadmap cadence, dependency mapping, cross-domain operating memory, and operating review rhythm. Company owns active repo/domain routing through `_system/agent_repo_registry.md`. Brain keeps historical protocol, Brain-side registry references, retired briefs/exports, archive, and retirement provenance during probation. App owns Planner runtime behavior, schema, UI, and Supabase-backed workflow implementation.

Codex is the primary operating interface for this repo. Durable company memory belongs in this repo's Markdown architecture, in the Company report when it is manager-facing strategy state, or in Supabase when the record is structured.

App Planner/Supabase is the live Company work queue when current Company project or task status matters. Company-owned Planner records live under `work_domains.key = company_ops` / `domain_id = 1` in `work_projects` and `tasks`. Markdown may keep strategy, context, decisions, references, and operating rules, but it must not compete with Planner as the active Company task-status source.

## Active Architecture
- `AGENTS.md` contains hard operating rules, startup/routing, source-of-truth order, write policy, company safety rules, and closeout format.
- `COMPANY_AGENT_PROTOCOL.md` contains the Company-owned top-level operating protocol for cross-domain coordination and the Brain retirement transition.
- `_system/agent_repo_registry.md` is the Company-owned active routing map for repos, domains, reporting-path transition state, risk levels, and Supabase responsibility boundaries.
- `memory/` contains durable company purpose, strategy context, governance rules, roadmap principles, cross-domain relationship rules, recurring decisions, and migration inbox notes.
- `domains/` contains active Company-owned domain reports, originally copied from Brain domain overview/brief files and activated during Phase 10.
- `skills/` contains active task playbooks for repeatable company workflows, including operating decisions, roadmap review, cross-domain coordination, memory updates, operating review rhythm, and session closeout.
- `skills/*/reference/` contains exact strategy/reference material when a skill needs it.
- `archive/superseded/` contains historical docs only. Do not use archive files as active operating instructions.

## Tech Stack
- Markdown vault as durable company and strategy memory.
- Company top-level protocol at `COMPANY_AGENT_PROTOCOL.md`.
- Company repo registry at `_system/agent_repo_registry.md`.
- Company database-awareness note at `_system/database_awareness.md`.
- Active Company domain reports under `domains/`.
- Active Company exports at `0. Agent Exports/`, generated from `domains/` reports.
- Company memory under `memory/`.
- Company workflow playbooks under `skills/`.
- Roadmap exact reference under `skills/review-roadmap-implications/reference/`.
- Company strategy brief at `M:\miniBIOTA\miniBIOTA_Company\domains\company\company_brief.md`.
- Supabase/App Planner via MCP/read-only awareness first and Company/domain-owned helpers, for `work_domains`, `work_projects`, `tasks`, milestones, and structured operational records when the work requires current structured state. App owns the Planner runtime, schema, UI, and implementation details.
- Operation Living Intelligence derived layers: Memgraph is the local/noncanonical relationship graph for approved projections; the Company local vector layer under `out/operation_living_intelligence/local_vector_layer/` is the first simple semantic-retrieval helper. Supabase `vector` is available, but OpenAI/API-key-dependent pgvector embedding is not approved after cost/credential review. These are derived awareness layers, not sources of truth. App owns runtime/shared implementation; Company owns routing, governance, and approval boundaries.

## Startup Sequence
For a full Codex bootstrap, run:

```powershell
powershell -ExecutionPolicy Bypass -File "_system/codex_session_start.ps1"
```

If working manually:

1. Read `AGENTS.md`.
2. Read `COMPANY_AGENT_PROTOCOL.md`.
3. Read `memory/00-index.md`.
4. Read `_system/agent_repo_registry.md` when the task touches domain routing, reporting paths, risk levels, Supabase responsibilities, or Brain retirement migration.
5. Read `_system/database_awareness.md` and `memory/11-helper-and-database-awareness-migration.md` when the task touches Supabase helper migration, MCP/database awareness, or retired Brain helper provenance.
6. Read `memory/12-brain-skills-migration.md` when the task touches Brain skill migration or Company playbook replacements.
7. Read `memory/15-brain-archive-freeze-plan.md` when the task touches Brain archive freeze, freeze-readiness scans, archive-only labels, or final Brain retirement gates.
8. Read `memory/16-brain-retirement-probation.md` when the task touches probation tracking, attempted Brain usage, missing replacements, or Phase 11 exit criteria.
9. Load the lightest relevant `memory/*.md` files for the request.
10. Use the matching `skills/*/SKILL.md` playbook when the request matches a repeatable company workflow.
11. Read archived Phase 11 evidence under `archive/superseded/phase-11-evidence/` only for audit/provenance lookup.
12. Read Brain `_system/agent_memory.md` only for historical, archive, transition, or recovery lookup.
13. Read `M:\miniBIOTA\miniBIOTA_Company\domains\company\company_brief.md` for manager-facing strategy-level current state.
14. Use `skills/*/reference/` for exact workflow reference material.
15. Use Supabase/App Planner only when current structured projects, tasks, milestones, or operational records matter.
16. Use Memgraph/vector retrieval only as derived context when Operation Living Intelligence relationship or semantic-recall context matters; verify consequential claims against Markdown, Supabase, domain source docs, or approved source records before treating them as true.

For broad Company cold starts, cross-domain architecture work, or unclear requests, use `0. Agent Exports\miniBIOTA_master_context.md` after the startup files. This is a Company-generated export built from active `domains/` reports; Brain exports are historical/archive artifacts.

For roadmap work, use `skills/review-roadmap-implications/SKILL.md`, `memory/04-roadmap-and-priorities.md`, and `skills/review-roadmap-implications/reference/strategic-roadmap.md`.

For Company operating reviews, cadence checks, dependency-map refreshes, or Programs/Operations rhythm work, use `skills/run-operating-review/SKILL.md`.

Historical AI-interface guidance has been archived at `archive/superseded/ai_operating_interface_guide.md`. Treat Claude-specific routing as legacy unless the user explicitly reactivates it.

## Source Of Truth
Use this hierarchy when sources disagree:

1. User direction in the current session.
2. `AGENTS.md` for hard Company Agent operating rules.
3. `COMPANY_AGENT_PROTOCOL.md` for Company-level operating protocol.
4. `_system/agent_repo_registry.md` for active repo/domain routing, risk levels, reporting-path transition state, and Supabase responsibility boundaries.
5. `memory/` for durable company purpose, strategy, governance, roadmap principles, cross-domain relationships, source-of-truth rules, and recurring decisions.
6. Relevant `skills/*/SKILL.md` playbooks for active workflow rules.
7. Company `domains/company/company_brief.md` for manager-facing strategy-level current state.
8. Supabase/App Planner for structured/queryable projects, tasks, milestones, and operational records when those records are relevant.
9. Operation Living Intelligence derived layers, including Memgraph relationship projections, Company local vector retrieval, and future approved retrieval layers, for noncanonical relationship context and semantic source discovery only.
10. `skills/*/reference/` files for exact workflow reference material.
11. Historical Brain company brief and compiled Brain exports as archive reference artifacts only.

Chat history and private model memory are never source of truth. Durable project memory belongs in Markdown in this repo, in the Company report, or in Supabase when it is structured data.
Memgraph, vector indexes, retrieval manifests, embeddings, generated readbacks, and other Operation Living Intelligence outputs are derived helper layers unless a future source-of-truth change is explicitly approved. They may help agents find context, but they do not approve canonical links, public claims, Planner records, media metadata, app behavior, or writeback.

## Company Safety Rules
- Do not invent business commitments, launch targets, legal decisions, financial commitments, sponsor obligations, roadmap commitments, or public promises from memory.
- Do not invent business plans, launch dates, legal decisions, public commitments, or financial commitments.
- Do not make commitments or public promises without explicit user direction.
- Keep current state, planned state, proposed changes, and aspirational roadmap separate.
- Keep mission, vision, roadmap, governance, and operating priorities separate from domain-specific implementation details.
- Company planning coordinates departments; it does not replace their source-of-truth docs, briefs, codebases, or structured records.
- Company owns the cross-domain planning strategy, dependency map, Programs/Operations governance, roadmap cadence, operating memory, and review rhythm; this does not transfer implementation ownership away from domain agents.
- When decisions affect multiple departments, identify downstream owners and what each domain needs next.
- Treat Claude-specific files as legacy reference unless the user explicitly reactivates them. Codex is the primary interface moving forward.
- Do not write to Supabase, change structured records, change app behavior, or change public site behavior unless the user explicitly asks for that specific action.
- Creating, editing, linking, scheduling, completing, reopening, archiving, or deleting Planner projects/tasks are live Supabase writes and require explicit user approval.
- Do not create, refresh, rebuild, import, schedule, or write Memgraph, vector/pgvector, embedding, retrieval, or generated Operation Living Intelligence outputs unless the user explicitly approves the scoped action or the current repo has an approved helper/closeout rule for that exact refresh. OpenAI/API-key-dependent pgvector embedding is not approved; any future pgvector path must be no-surprise on cost, credentials, source scope, and write boundaries.

## Planner / Project Management
- App Planner/Supabase is the live Company work queue for actionable Company projects and tasks.
- Company Planner work lives under `work_domains.key = company_ops` / `domain_id = 1`.
- Company owns Planner strategy and governance for Company work; App owns Planner runtime behavior, schema, UI, and Supabase-backed workflow implementation.
- Current open Company work projects are `Business Plan & Operating Model`, `Roadmap & Quarterly Objectives`, `AI & Knowledge Infrastructure`, `Operation Living Atlas Coordination`, and `Aquatic Club Talk Program Coordination`. `Operation Living Intelligence Coordination` was closed on 2026-05-19 and should be treated as archive/provenance unless explicitly reopened.
- Read Planner projects/tasks when choosing next Company work, checking blockers, or verifying completion status.
- At closeout, if completed work maps clearly to an open Planner task, ask whether to mark that task done unless the user explicitly asked for that live task update.
- Company planning coordinates cross-domain work, but domain-owned implementation queues remain in their domain repos and Planner domains.
- For scheduled Content production, treat `content_calendar` as the blue content identity, due-date, and closeout record; treat the linked Content-domain work project, teal parent production task, and subtasks as the execution schedule. Do not create duplicate generic "produce a short/video" tasks when a content calendar entry already exists. For agent-managed production planning, create or attach the work project and parent production task, generate subtasks from the format template, schedule subtasks across days, and move the content scheduled date forward when required production subtasks move later than that date, with explicit approval for any live Planner/Supabase writes.
- Planner project/task create, edit, status, done/reopen, archive, delete, project-link, subtask, schedule, or recurrence changes are live Supabase writes and require explicit user approval.

## Transition Relationship
Company is the active top-level operating coordination repo. Manager-facing Company state lives at:

`M:\miniBIOTA\miniBIOTA_Company\domains\company\company_brief.md`

Update or flag that report at session end only when manager-facing Company state changed:
- Mission, vision, roadmap, operating model, or governance.
- Active company priorities, risks, planning gaps, or cross-domain sequencing.
- Recent milestones or decisions.
- Cross-domain dependencies for Research, Hardware, Content, Brand, Growth, Financials, Web, App, Raw Footage, or Brain.
- A decision affects another department's brief, source docs, or work queue.
- Business plan, roadmap, or quarterly objectives are created or materially changed.

Do not push full planning drafts or detailed department-specific work into the Company brief. Keep detailed company work in this repo and structured records in Supabase.

Brain no longer keeps an active Company docs mirror after the Company restructure. Active Company Agent behavior lives in this repo's `AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`. Do not edit, sync, or recreate retired Brain docs mirrors. Company owns active repo/domain routing through `_system/agent_repo_registry.md`; Brain keeps historical registry references, retired briefs/exports, archive, and retirement provenance during probation.

## Current Memory Map
| File | Purpose |
|---|---|
| `memory/00-index.md` | Memory map, loading order, and migration notes |
| `memory/01-agent-purpose.md` | Company Agent scope, role, and outputs |
| `memory/02-company-safety-rules.md` | Company-level safety boundaries and commitment rules |
| `memory/03-strategy-and-governance.md` | Mission, vision, governance, and operating principles |
| `memory/04-roadmap-and-priorities.md` | Roadmap principles, current roadmap state, and priority rules |
| `memory/05-cross-domain-relationships.md` | Domain relationship map and downstream owner rules |
| `memory/05-database-access.md` | Company database and Planner access boundaries |
| `memory/06-source-of-truth-rules.md` | Source hierarchy and structured-record rules |
| `memory/07-recurring-decisions.md` | Durable decisions and recurring constraints |
| `memory/08-agent-operating-architecture.md` | Company/Brain/App/domain ownership model during Brain retirement |
| `memory/09-source-of-truth-and-routing.md` | Company-level source hierarchy and request routing during migration |
| `memory/10-cross-domain-operating-model.md` | Programs/Operations, dependency, downstream-owner, and review-rhythm model |
| `memory/11-helper-and-database-awareness-migration.md` | Phase 5 Brain helper/database-awareness ownership map and migration plan |
| `memory/12-brain-skills-migration.md` | Phase 6 Brain skill classification and Company playbook replacement map |
| `memory/13-domain-agent-migration.md` | Phase 7 standard domain-agent migration prompt, checklist, and batch order |
| `memory/14-raw-footage-and-definitions-ownership.md` | Phase 9 Raw Footage and Definitions ownership split, active routing, and live-write boundaries |
| `memory/15-brain-archive-freeze-plan.md` | Phase 10 Brain archive freeze criteria, blocker classes, verification scans, retained-readable surfaces, and approval gates |
| `memory/16-brain-retirement-probation.md` | Phase 11 probation tracker, required events, Brain usage log, issue list, and exit criteria |
| `memory/inbox.md` | Temporary parking lot for migration questions and unsorted memory candidates |
| `archive/superseded/phase-11-evidence/` | Completed Phase 11 evidence logs retained for audit/provenance only |
| `domains/README.md` | Active Company domain reporting map and Brain archive provenance |
| `0. Agent Exports/README.md` | Active Company export tooling and generated export rules |

## Active Skills
| Skill | Use When |
|---|---|
| `skills/make-operating-decision/SKILL.md` | Company-level decision, governance choice, sequencing decision, or cross-domain operating judgment |
| `skills/coordinate-cross-domain-priorities/SKILL.md` | Work affects multiple domains or needs downstream owner coordination, dependency mapping, or Programs/Operations governance |
| `skills/route-cross-domain-request/SKILL.md` | Ownership or source-of-truth routing is unclear across Company, Brain, App, or domain repos |
| `skills/process-new-knowledge/SKILL.md` | New information, decisions, corrections, migration facts, or source-of-truth changes need durable routing |
| `skills/review-roadmap-implications/SKILL.md` | Milestone, project, deadline, quarterly plan, roadmap cadence, or five-year roadmap question |
| `skills/update-company-memory/SKILL.md` | Promote durable decisions, governance rules, strategy rules, or recurring constraints into memory |
| `skills/run-operating-review/SKILL.md` | Company operating review, cadence check, dependency map refresh, or Programs/Operations rhythm |
| `skills/company-session-start/SKILL.md` | Bootstrap Company sessions with light context and correct routing |
| `skills/company-session-closeout/SKILL.md` | Close company planning sessions and decide whether Brain, domains, or structured records are implicated |
| `skills/update-domain-report/SKILL.md` | Update active Company domain reports |
| `skills/planner-task-review/SKILL.md` | Review App Planner/Supabase task implications with approval gates |
| `skills/sync-domain-context/SKILL.md` | Verify, route, or migrate domain context between Brain, Company, and domain repos |
| `skills/route-chronicle-candidate/SKILL.md` | Route possible public chronicle candidates to Content/Research ownership |
| `skills/route-public-web-simplification/SKILL.md` | Route public-only Web simplification through Company/Web/App boundaries |

## Migration Notes For Former Docs
Original Company docs have been absorbed into active architecture or archived during Phase 2. The exact roadmap reference now lives at `skills/review-roadmap-implications/reference/strategic-roadmap.md`.

`docs/agent_protocol.md` was absorbed into `AGENTS.md`, `memory/`, and `skills/` during Phase 2 Batch 1 and archived at `archive/superseded/agent_protocol.md`.

`docs/company_operations_overview.md` was absorbed into `memory/` and relevant `skills/` during Phase 2 Batch 2 and archived at `archive/superseded/company_operations_overview.md`.

`docs/ai_operating_interface_guide.md` was absorbed into `memory/`, relevant `skills/`, and archive notes during Phase 2 Batch 3 and archived at `archive/superseded/ai_operating_interface_guide.md`.

`docs/strategic_roadmap.md` was moved into `skills/review-roadmap-implications/reference/strategic-roadmap.md` during Phase 2 Batch 4 and archived at `archive/superseded/strategic_roadmap.md`.

## Write Policy
Respect `MINIBIOTA_WRITE_MODE` from Brain when available:

| Mode | Behavior |
|---|---|
| `read-only` | No writes anywhere |
| `confirm-before-write` | Confirm with the user before writes |
| `safe-write` | Writes may proceed after stating what will change |

For this repo, tell the user what files you intend to change before editing. Preserve user changes and keep edits scoped to the active request.

Do not edit, sync, or recreate retired Brain docs mirrors, or update Supabase records, structured records, app behavior, public site behavior, test data, business commitments, public promises, financial commitments, launch targets, legal decisions, sponsor obligations, or roadmap commitments unless the user explicitly asks for that exact action.

## Verification
For documentation-only sessions:
- Read every new or changed doc end to end.
- Run `git diff --name-only` or equivalent.
- Run `git status --short --branch`.
- Confirm no app behavior, database records, structured records, public site behavior, or retired Brain docs mirrors changed.
- Confirm no Memgraph projection, vector index, embedding artifact, generated retrieval output, scheduled refresh, or derived Operation Living Intelligence layer changed unless explicitly scoped.
- Confirm no business commitments, public promises, financial commitments, launch targets, legal decisions, sponsor obligations, or roadmap commitments were created.

For company planning/ops sessions:
- Verify current structured projects, tasks, milestones, finance-sensitive assumptions, or domain status before making time-sensitive recommendations.
- Report any live checks that could not run because of sandbox, auth, or network restrictions.
- If structured tasks, durable context, milestones, or operational records changed, summarize those changes clearly.
- If active Company architecture changes in a way that affects manager-facing state, decide whether the Company report needs an update. Do not sync or recreate retired Brain docs mirrors.
- Commit and push only when the user asks or the work unit is explicitly scoped for git publication. Do not make commit/push a hard closeout rule.

## Session Closeout Report
Close every session with:

```markdown
Changed files:
- path

Verification:
- command or read-through performed

Not changed:
- app behavior/database/public site/etc. as relevant

Unresolved questions:
- item or "None"
```

If local Company architecture or planning changed in a way transition manager-facing state needs, update or flag the Company report before closing unless the user explicitly defers it. During migration sessions that only change local agent architecture, do not update historical Brain briefs unless explicitly scoped.
