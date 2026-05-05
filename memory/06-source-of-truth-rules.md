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

Chat history and private model memory are never durable project truth.

## AI Interface And Handoff Rules
Treat the repo, Brain brief, domain briefs, and structured records as the real memory. If work moves between interfaces or agents, write durable conclusions back to the appropriate source before treating the handoff as complete.

Old Claude-specific routing guidance is historical. Codex is the active Company Agent interface for repo-heavy execution, direct file changes, scripts, tooling, and multi-step implementation work in this repo.

## Durable Memory Destinations
- Company operating rules and recurring decisions: `AGENTS.md` or `memory/`.
- Repeatable workflows: `skills/*/SKILL.md`.
- Exact reference material for a workflow: `skills/*/reference/`.
- Manager-facing strategy state: Brain `company_brief.md`.
- Structured tasks, domain history, milestones, and operational records: Supabase.
- Historical or superseded material: `archive/`, only when an explicit migration phase asks for archival.

## Supabase Boundaries
Tasks are structured records in the Supabase `tasks` table and are queryable by domain when current operating state matters. Do not recreate task state in Markdown as an active source of truth. Do not write to Supabase unless explicitly scoped.

## Docs During Migration
`docs/` remains in place during migration for exact reference material that has not yet been absorbed. `docs/agent_protocol.md` has been absorbed and archived at `archive/superseded/agent_protocol.md`. `docs/company_operations_overview.md` has been absorbed and archived at `archive/superseded/company_operations_overview.md`. `docs/ai_operating_interface_guide.md` has been absorbed and archived at `archive/superseded/ai_operating_interface_guide.md`.

Do not delete, move, or archive other docs unless a migration batch explicitly scopes that work. Future phases should absorb active material into memory or skill reference folders, then archive superseded docs only with explicit scope.

## Structured Records
Do not write to Supabase or structured records unless explicitly asked. If a recommendation depends on current structured state, verify it before answering in depth and report any live-check limitation.

## Brain Mirrors
Do not edit Brain mirrored docs directly. Edit the source in this repo when docs are still the source, and only sync mirrors when explicitly scoped.
