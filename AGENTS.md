# miniBIOTA Company - Codex Agent Entry Point

## What This Repo Is
`miniBIOTA_Company` is the company operations, strategic planning, governance, roadmap, and cross-domain coordination vault for miniBIOTA. It owns the top-level operating context that guides research, hardware, content, brand, growth, financials, web, and app work.

Codex is the primary operating interface for this repo. Durable operating rules and company memory belong in Markdown in this repo, in the Brain company brief, or in Supabase when the record is structured.

## Tech Stack
- Markdown vault as durable company and strategy memory.
- Company reference docs under `docs/`.
- Brain strategy brief at `M:\miniBIOTA\miniBIOTA_Brain\1. Company Operations\company_brief.md`.
- Supabase, via `M:\miniBIOTA\miniBIOTA_Brain\_system\minibiota_tools.py`, for tasks, domain history, and structured operational records.

## Startup Sequence
For a full Codex bootstrap, run:

```powershell
powershell -ExecutionPolicy Bypass -File "_system/codex_session_start.ps1"
```

If working manually:

1. Read `AGENTS.md`.
2. Read `docs/agent_protocol.md`.
3. Read `M:\miniBIOTA\miniBIOTA_Brain\_system\agent_memory.md`.
4. Read `M:\miniBIOTA\miniBIOTA_Brain\1. Company Operations\company_brief.md`.
5. Load the lightest local company doc that can safely answer the request.

For roadmap work, read `docs/strategic_roadmap.md`. For historical AI-interface context, read `docs/ai_operating_interface_guide.md`, but treat Claude-specific guidance as legacy unless the user explicitly reactivates it.

## Source Of Truth
Use this hierarchy when sources disagree:

1. User direction in the current session.
2. `AGENTS.md` and `docs/agent_protocol.md` for Company Agent operating rules.
3. Brain `company_brief.md` for strategy-level current state.
4. Local `docs/` files for detailed company operations and roadmap context.
5. Supabase for structured/queryable records.
6. Brain mirrored docs and compiled exports as reference artifacts.

Chat history and private model memory are never source of truth. Durable project memory belongs in Markdown in this repo/vault, in Brain, or in Supabase when it is structured data.

## Company Operating Rules
- Keep mission, vision, roadmap, governance, and operating priorities separate from domain-specific implementation details.
- Codex is the primary interface moving forward. Claude-specific files are legacy reference unless the user explicitly says otherwise.
- Do not invent business commitments, launch targets, legal decisions, financial commitments, sponsor obligations, or public promises from memory.
- Company planning should coordinate the departments without replacing their source-of-truth docs.
- When decisions affect multiple departments, update the Brain brief and call out downstream owners clearly.

## Brain Relationship
This repo reports to the Strategy Agent through:

`M:\miniBIOTA\miniBIOTA_Brain\1. Company Operations\company_brief.md`

Update that brief at session end when any of these changed:
- Mission, vision, roadmap, operating model, or governance.
- Active company priorities or cross-domain sequencing.
- Recent milestones or decisions.
- Known risks, blockers, or planning gaps.
- Cross-domain dependencies for Research, Hardware, Content, Brand, Growth, Financials, Web, App, or Raw Footage.

Do not push full planning drafts or detailed department-specific work into the Brain brief. Keep detailed company work in this repo and structured records in Supabase.

## Docs
| File | Contents |
|---|---|
| `docs/company_operations_overview.md` | Original Brain Company Operations overview, retained as migrated context |
| `docs/strategic_roadmap.md` | Quarterly and five-year milestone planning |
| `docs/ai_operating_interface_guide.md` | Legacy AI interface guide; Claude-specific guidance is historical unless reactivated |
| `docs/agent_protocol.md` | Codex operating protocol for Company sessions |

Docs are mirrored read-only into `M:\miniBIOTA\miniBIOTA_Brain\1. Company Operations\docs\` by Brain `sync_docs.ps1`. Edit source docs here, not the Brain mirror.

## Write Policy
Respect `MINIBIOTA_WRITE_MODE` from Brain when available:

| Mode | Behavior |
|---|---|
| `read-only` | No writes anywhere |
| `confirm-before-write` | Confirm with the user before writes |
| `safe-write` | Writes may proceed after stating what will change |

For this repo, tell the user what files you intend to change before editing. Preserve user changes and keep edits scoped to the active request.

## Verification
For documentation-only sessions:
- Read every new or changed doc end to end.
- Run `git diff --name-only` or equivalent.
- Confirm no app behavior, database records, or public site behavior changed.

For company planning/ops sessions:
- Verify current structured tasks, milestones, finance-sensitive assumptions, or domain status before making time-sensitive recommendations.
- Report any live checks that could not run because of sandbox, auth, or network restrictions.

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

If local docs changed in a way the Strategy Agent needs, update the Brain company brief before closing unless the user explicitly defers it.
