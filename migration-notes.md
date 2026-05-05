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

## Explicit Non-Changes
No Supabase records, structured records, app behavior, public site behavior, Brain mirrored docs, test data, business commitments, public promises, financial commitments, launch targets, legal decisions, sponsor obligations, or roadmap commitments were changed by Phase 1.
