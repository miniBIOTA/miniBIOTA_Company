---
title: Source Of Truth Rules
last_updated: 2026-05-05
---
# Source Of Truth Rules

## Hierarchy
Use this order when sources disagree:
1. User direction in the current session.
2. `AGENTS.md` for hard Company Agent operating rules.
3. `memory/` for durable company purpose, strategy, governance, roadmap principles, cross-domain relationships, and recurring decisions.
4. Relevant `skills/*/SKILL.md` files for repeatable workflow rules.
5. Brain `company_brief.md` for manager-facing strategy-level current state.
6. Supabase for structured/queryable tasks, domain history, milestones, and operational records when relevant.
7. Local `docs/` files for migration-era reference not yet absorbed into memory or skill reference.
8. Brain mirrored docs and compiled exports as reference artifacts only.

## Durable Memory Destinations
- Company operating rules and recurring decisions: `AGENTS.md` or `memory/`.
- Repeatable workflows: `skills/*/SKILL.md`.
- Exact reference material for a workflow: `skills/*/reference/`.
- Manager-facing strategy state: Brain `company_brief.md`.
- Structured tasks, domain history, milestones, and operational records: Supabase.
- Historical or superseded material: `archive/`, only when an explicit migration phase asks for archival.

## Docs During Migration
`docs/` remains in place during Phase 1. Do not delete, move, or archive old docs yet. Future phases should absorb active material into memory or skill reference folders, then archive superseded docs only with explicit scope.

## Structured Records
Do not write to Supabase or structured records unless explicitly asked. If a recommendation depends on current structured state, verify it before answering in depth and report any live-check limitation.

## Brain Mirrors
Do not edit Brain mirrored docs directly. Edit the source in this repo when docs are still the source, and only sync mirrors when explicitly scoped.
