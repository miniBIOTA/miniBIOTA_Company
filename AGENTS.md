# miniBIOTA Company - Codex Agent Entry Point

## What This Repo Is
`miniBIOTA_Company` is the company operations, strategic planning, governance, roadmap, and cross-domain coordination vault for miniBIOTA. It owns the top-level operating context that guides Research, Hardware, Content, Brand, Growth, Financials, Web, App, Raw Footage, and Brain coordination.

Codex is the primary operating interface for this repo. Durable company memory belongs in this repo's Markdown architecture, in the Brain company brief when it is manager-facing strategy state, or in Supabase when the record is structured.

## Active Architecture
- `AGENTS.md` contains hard operating rules, startup/routing, source-of-truth order, write policy, company safety rules, and closeout format.
- `memory/` contains durable company purpose, strategy context, governance rules, roadmap principles, cross-domain relationship rules, recurring decisions, and migration inbox notes.
- `skills/` contains active task playbooks for repeatable company workflows.
- `skills/*/reference/` contains exact strategy/reference material when a skill needs it.
- `archive/superseded/` contains historical docs only. Do not use archive files as active operating instructions.

## Tech Stack
- Markdown vault as durable company and strategy memory.
- Company memory under `memory/`.
- Company workflow playbooks under `skills/`.
- Roadmap exact reference under `skills/review-roadmap-implications/reference/`.
- Brain strategy brief at `M:\miniBIOTA\miniBIOTA_Brain\1. miniBIOTA_Company\company_brief.md`.
- Supabase, via `M:\miniBIOTA\miniBIOTA_Brain\_system\minibiota_tools.py`, for tasks, milestones, and structured operational records when the work requires current structured state.

## Startup Sequence
For a full Codex bootstrap, run:

```powershell
powershell -ExecutionPolicy Bypass -File "_system/codex_session_start.ps1"
```

If working manually:

1. Read `AGENTS.md`.
2. Read `memory/00-index.md`.
3. Load the lightest relevant `memory/*.md` files for the request.
4. Use the matching `skills/*/SKILL.md` playbook when the request matches a repeatable company workflow.
5. Read `M:\miniBIOTA\miniBIOTA_Brain\_system\agent_memory.md` when Brain-wide operating context or write mode may matter.
6. Read `M:\miniBIOTA\miniBIOTA_Brain\1. miniBIOTA_Company\company_brief.md` for strategy-level current state.
7. Use `skills/*/reference/` for exact workflow reference material.
8. Use Supabase only when current structured tasks, milestones, or operational records matter.

For roadmap work, use `skills/review-roadmap-implications/SKILL.md`, `memory/04-roadmap-and-priorities.md`, and `skills/review-roadmap-implications/reference/strategic-roadmap.md`.

Historical AI-interface guidance has been archived at `archive/superseded/ai_operating_interface_guide.md`. Treat Claude-specific routing as legacy unless the user explicitly reactivates it.

## Source Of Truth
Use this hierarchy when sources disagree:

1. User direction in the current session.
2. `AGENTS.md` for hard Company Agent operating rules.
3. `memory/` for durable company purpose, strategy, governance, roadmap principles, cross-domain relationships, source-of-truth rules, and recurring decisions.
4. Relevant `skills/*/SKILL.md` playbooks for active workflow rules.
5. Brain `company_brief.md` for manager-facing strategy-level current state.
6. Supabase for structured/queryable tasks, milestones, and operational records when those records are relevant.
7. `skills/*/reference/` files for exact workflow reference material.
8. Brain company brief and compiled exports as reference artifacts only.

Chat history and private model memory are never source of truth. Durable project memory belongs in Markdown in this repo, in the Brain company brief, or in Supabase when it is structured data.

## Company Safety Rules
- Do not invent business commitments, launch targets, legal decisions, financial commitments, sponsor obligations, roadmap commitments, or public promises from memory.
- Do not invent business plans, launch dates, legal decisions, public commitments, or financial commitments.
- Do not make commitments or public promises without explicit user direction.
- Keep current state, planned state, proposed changes, and aspirational roadmap separate.
- Keep mission, vision, roadmap, governance, and operating priorities separate from domain-specific implementation details.
- Company planning coordinates departments; it does not replace their source-of-truth docs, briefs, codebases, or structured records.
- When decisions affect multiple departments, identify downstream owners and what each domain needs next.
- Treat Claude-specific files as legacy reference unless the user explicitly reactivates them. Codex is the primary interface moving forward.
- Do not write to Supabase, change structured records, change app behavior, or change public site behavior unless the user explicitly asks for that specific action.

## Brain Relationship
This repo reports to the Strategy Agent through:

`M:\miniBIOTA\miniBIOTA_Brain\1. miniBIOTA_Company\company_brief.md`

Update that brief at session end when any of these changed:
- Mission, vision, roadmap, operating model, or governance.
- Active company priorities, risks, planning gaps, or cross-domain sequencing.
- Recent milestones or decisions.
- Cross-domain dependencies for Research, Hardware, Content, Brand, Growth, Financials, Web, App, Raw Footage, or Brain.
- A decision affects another department's brief, source docs, or work queue.
- Business plan, roadmap, or quarterly objectives are created or materially changed.

Do not push full planning drafts or detailed department-specific work into the Brain brief. Keep detailed company work in this repo and structured records in Supabase.

Brain no longer keeps an active Company docs mirror after the Company restructure. Active Company Agent behavior lives in this repo's `AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`. Do not edit, sync, or recreate retired Brain docs mirrors.

## Current Memory Map
| File | Purpose |
|---|---|
| `memory/00-index.md` | Memory map, loading order, and migration notes |
| `memory/01-agent-purpose.md` | Company Agent scope, role, and outputs |
| `memory/02-company-safety-rules.md` | Company-level safety boundaries and commitment rules |
| `memory/03-strategy-and-governance.md` | Mission, vision, governance, and operating principles |
| `memory/04-roadmap-and-priorities.md` | Roadmap principles, current roadmap state, and priority rules |
| `memory/05-cross-domain-relationships.md` | Domain relationship map and downstream owner rules |
| `memory/06-source-of-truth-rules.md` | Source hierarchy and structured-record rules |
| `memory/07-recurring-decisions.md` | Durable decisions and recurring constraints |
| `memory/inbox.md` | Temporary parking lot for migration questions and unsorted memory candidates |

## Active Skills
| Skill | Use When |
|---|---|
| `skills/make-operating-decision/SKILL.md` | Company-level decision, governance choice, sequencing decision, or cross-domain operating judgment |
| `skills/coordinate-cross-domain-priorities/SKILL.md` | Work affects multiple domains or needs downstream owner coordination |
| `skills/review-roadmap-implications/SKILL.md` | Milestone, project, deadline, quarterly plan, or five-year roadmap question |
| `skills/update-company-memory/SKILL.md` | Promote durable decisions, governance rules, strategy rules, or recurring constraints into memory |
| `skills/company-session-closeout/SKILL.md` | Close company planning sessions and decide whether Brain, domains, or structured records are implicated |

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
- Confirm no business commitments, public promises, financial commitments, launch targets, legal decisions, sponsor obligations, or roadmap commitments were created.

For company planning/ops sessions:
- Verify current structured tasks, milestones, finance-sensitive assumptions, or domain status before making time-sensitive recommendations.
- Report any live checks that could not run because of sandbox, auth, or network restrictions.
- If structured tasks, durable context, milestones, or operational records changed, summarize those changes clearly.
- If active Company architecture changes in a way that affects manager-facing state, decide whether the Brain company brief needs an update. Do not sync or recreate retired Brain docs mirrors.
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

If local Company architecture or planning changed in a way the Strategy Agent needs, update the Brain company brief before closing unless the user explicitly defers it. During migration sessions that only change local agent architecture, do not update the Brain brief unless manager-facing strategy state changed.
