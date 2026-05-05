# Company Agent Migration Notes

## Phase 1 - Memory And Skills Architecture
Phase 1 created the initial Company Agent architecture:
- `memory/` for durable company purpose, safety rules, strategy and governance context, roadmap principles, cross-domain relationships, source-of-truth rules, recurring decisions, and inbox notes.
- `skills/` for repeatable company workflows.
- `skills/review-roadmap-implications/reference/` for roadmap-specific reference material during migration.
- Updated `AGENTS.md` routing for the new architecture.

## What Stayed In Place
Old docs were not archived, deleted, or moved. The `docs/` folder remains available as temporary migration-era source material.

## Future Migration Phases
Future phases should absorb useful material from `docs/` into `memory/` or `skills/*/reference/`, then archive superseded docs only when explicitly scoped and approved.

## Phase 2 Batch 1 - Agent Protocol Absorption
Phase 2 Batch 1 absorbed `docs/agent_protocol.md` into active Company Agent architecture:
- Startup, source-of-truth order, safety rules, Brain update rules, cross-domain dependency rules, and closeout expectations now live in `AGENTS.md`, `memory/`, and relevant `skills/`.
- The superseded protocol was archived at `archive/superseded/agent_protocol.md`.
- Commit/push and Brain docs sync prompts were preserved as scoped actions, not hard closeout rules, because active Company context is moving out of `docs/` and this repo should not update Brain mirrors or publish git history unless explicitly scoped.

## Phase 2 Batch 2 - Company Operations Overview Absorption
Phase 2 Batch 2 absorbed `docs/company_operations_overview.md` into active Company Agent memory and relevant skills:
- Company-level purpose, operating scope, mission, vision, operating model, source boundaries, priorities, risks, and planning gaps now live in `memory/`.
- Decision, cross-domain coordination, and closeout workflows now account for company-level priorities, risks, planning gaps, business-planning gaps, and governance implications.
- The superseded overview was archived at `archive/superseded/company_operations_overview.md`.
- Current-state claims from the overview were preserved only where already consistent with active memory or Brain brief context; roadmap and task-priority language remains framed as planning gaps or items needing Josue review, not commitments.

## Explicit Non-Changes
No Supabase records, structured records, app behavior, public site behavior, Brain mirrored docs, Brain company brief, test data, business commitments, public promises, financial commitments, launch targets, legal decisions, sponsor obligations, or roadmap commitments were changed by Phase 1, Phase 2 Batch 1, or Phase 2 Batch 2.
