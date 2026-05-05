---
title: Company Memory Index
last_updated: 2026-05-05
---
# Company Memory Index

## Purpose
This folder is the durable Company Agent memory layer for miniBIOTA strategy, governance, roadmap principles, cross-domain coordination, source-of-truth rules, and recurring operating decisions.

Use memory for stable company context. Use skills for repeatable workflows. Use skill reference folders for exact workflow reference material. Use docs only if future migration material appears and has not yet been absorbed.

## Load Order
1. Read `AGENTS.md`.
2. Read this index.
3. Load the smallest relevant memory files for the active request.
4. Load the matching `skills/*/SKILL.md` playbook when the request matches an active workflow.
5. Use `skills/*/reference/` for exact workflow reference material.
6. Use the Brain company brief for manager-facing strategy-level current state.
7. Use Supabase only when current structured records matter.

## Memory Files
| File | Use |
|---|---|
| `01-agent-purpose.md` | Company Agent role, scope, outputs, and boundaries |
| `02-company-safety-rules.md` | Commitment, public promise, financial, legal, and roadmap safety rules |
| `03-strategy-and-governance.md` | Mission, vision, governance, operating model, and decision principles |
| `04-roadmap-and-priorities.md` | Roadmap status, planning principles, priorities, and milestone handling |
| `05-cross-domain-relationships.md` | Domain relationship map and downstream owner expectations |
| `06-source-of-truth-rules.md` | Source hierarchy, Brain relationship, docs migration, and Supabase boundaries |
| `07-recurring-decisions.md` | Durable recurring decisions and constraints |
| `inbox.md` | Temporary holding area for migration notes and candidate durable memory |

## Migration Status
Phase 1 created the memory and skill architecture. Phase 2 Batch 1 absorbed `docs/agent_protocol.md` into `AGENTS.md`, `memory/`, and `skills/`, then archived it at `archive/superseded/agent_protocol.md`. Phase 2 Batch 2 absorbed `docs/company_operations_overview.md` into `memory/` and relevant `skills/`, then archived it at `archive/superseded/company_operations_overview.md`. Phase 2 Batch 3 absorbed `docs/ai_operating_interface_guide.md` into memory, skills, and archive notes, then archived it at `archive/superseded/ai_operating_interface_guide.md`. Phase 2 Batch 4 moved exact roadmap reference material from `docs/strategic_roadmap.md` into `skills/review-roadmap-implications/reference/strategic-roadmap.md`, then archived the source doc at `archive/superseded/strategic_roadmap.md`.

No active Company docs remain after Phase 2 Batch 4. Future migration phases should use `memory/`, `skills/`, `skills/*/reference/`, and `archive/` unless a new exact-reference need is explicitly scoped.
