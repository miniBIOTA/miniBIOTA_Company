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
7. `skills/*/reference/` files for exact workflow reference material.
8. Brain company brief and compiled exports as reference artifacts only.

Chat history and private model memory are never durable project truth.

## AI Interface And Handoff Rules
Treat the repo, Brain brief, domain briefs, and structured records as the real memory. If work moves between interfaces or agents, write durable conclusions back to the appropriate source before treating the handoff as complete.

Old Claude-specific routing guidance is historical. Codex is the active Company Agent interface for repo-heavy execution, direct file changes, scripts, tooling, and multi-step implementation work in this repo.

## Final Structure
- `AGENTS.md`: hard operating rules, startup/routing, source-of-truth order, write policy, safety rules, and closeout format.
- `memory/`: durable company context, governance rules, roadmap principles, cross-domain relationships, source boundaries, and recurring decisions.
- `skills/`: active repeatable Company Agent workflows.
- `skills/*/reference/`: exact workflow reference material, including `skills/review-roadmap-implications/reference/strategic-roadmap.md`.
- `archive/superseded/`: historical docs only; do not use archive files as active operating instructions.
- Brain company brief: strategy-level current state and manager-facing summary.
- Supabase: structured records only when current tasks, domain history, milestones, or operational records matter.

## Supabase Boundaries
Tasks are structured records in the Supabase `tasks` table and are queryable by domain when current operating state matters. Do not recreate task state in Markdown as an active source of truth. Do not write to Supabase unless explicitly scoped.

## Docs Status
Original Company docs have been absorbed into `memory/`, `skills/`, skill reference files, or `archive/superseded/`. No active Company docs remain as workflow authorities. If a future exact-reference need appears, place it in the relevant `skills/*/reference/` folder unless explicitly scoped otherwise.

## Structured Records
Do not write to Supabase or structured records unless explicitly asked. If a recommendation depends on current structured state, verify it before answering in depth and report any live-check limitation.

## Brain Mirrors
Do not edit Brain mirrored docs directly. Brain no longer keeps a Company docs mirror after the Company restructure; active workflow authority lives in this repo memory/skills architecture.
