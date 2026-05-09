---
title: Company Memory Index
last_updated: 2026-05-09
---
# Company Memory Index

## Purpose
This folder is the durable Company Agent memory layer for miniBIOTA strategy, governance, roadmap principles, cross-domain coordination, source-of-truth rules, and recurring operating decisions.

Company owns active cross-domain operating coordination for miniBIOTA: planning strategy, Programs/Operations governance, roadmap cadence, dependency mapping, cross-domain operating memory, and review rhythm. Brain remains protocol, registry, briefs/exports, archive, and transition guardrail. App owns Planner runtime behavior, schema, UI, and Supabase-backed workflow implementation.

Use memory for stable company context. Use skills for repeatable workflows. Use skill reference folders for exact workflow reference material. Use App Planner/Supabase for live Company project/task status. Use docs only if future migration material appears and has not yet been absorbed.

## Load Order
1. Read `AGENTS.md`.
2. Read this index.
3. Load the smallest relevant memory files for the active request.
4. Load the matching `skills/*/SKILL.md` playbook when the request matches an active workflow.
5. Use `skills/*/reference/` for exact workflow reference material.
6. Use the Brain company brief for manager-facing strategy-level current state.
7. Use App Planner/Supabase only when current structured projects, tasks, milestones, or operational records matter.

## Planner Routing
App Planner/Supabase is the live Company work queue when current Company project or task status matters. Company Planner records live under `work_domains.key = company_ops` / `domain_id = 1` in `work_projects` and `tasks`.

Current Company work projects:
- `Business Plan & Operating Model`
- `Roadmap & Quarterly Objectives`
- `AI & Knowledge Infrastructure`
- `Operation Living Atlas Coordination`

Use Planner for actionable work status, blockers, scheduling, task/project links, and completion checks. Use Markdown memory and skill references for company strategy, Programs/Operations governance, roadmap cadence, dependency maps, decisions, context, review rhythm, and operating rules.

Company owns Planner strategy and governance for Company work. App owns the Planner runtime, schema, UI, and Supabase-backed workflow implementation. Do not write live Planner/Supabase records unless explicitly approved.

## Memory Files
| File | Use |
|---|---|
| `01-agent-purpose.md` | Company Agent role, scope, outputs, and boundaries |
| `02-company-safety-rules.md` | Commitment, public promise, financial, legal, and roadmap safety rules |
| `03-strategy-and-governance.md` | Mission, vision, governance, operating model, and decision principles |
| `04-roadmap-and-priorities.md` | Roadmap status, planning principles, priorities, and milestone handling |
| `05-cross-domain-relationships.md` | Domain relationship map and downstream owner expectations |
| `05-database-access.md` | Company database and Planner access boundaries, domain key, owned/read/write tables, and Brain reporting expectations |
| `06-source-of-truth-rules.md` | Source hierarchy, Brain relationship, docs migration, and Supabase boundaries |
| `07-recurring-decisions.md` | Durable recurring decisions and constraints |
| `inbox.md` | Temporary holding area for migration notes and candidate durable memory |

## Skill References
| File | Use |
|---|---|
| `skills/coordinate-cross-domain-priorities/reference/operation-living-atlas-plan.md` | Operation Living Atlas cross-domain backfill, source packet, publicness tier, and ecological knowledge graph coordination plan |
| `skills/review-roadmap-implications/reference/strategic-roadmap.md` | Exact roadmap reference |

## Active Company Workflows
| Skill | Use |
|---|---|
| `skills/make-operating-decision/SKILL.md` | Company-level operating decisions and governance choices |
| `skills/coordinate-cross-domain-priorities/SKILL.md` | Cross-domain priority coordination, dependency mapping, and downstream owner routing |
| `skills/review-roadmap-implications/SKILL.md` | Roadmap, milestone, quarterly objective, and cadence review |
| `skills/run-operating-review/SKILL.md` | Operating review rhythm, dependency-map refresh, and Programs/Operations review |
| `skills/update-company-memory/SKILL.md` | Durable memory promotion |
| `skills/company-session-closeout/SKILL.md` | Session closeout and Brain/domain/structured-record implication checks |

## Migration Status
Phase 1 created the memory and skill architecture. Phase 2 Batch 1 absorbed `docs/agent_protocol.md` into `AGENTS.md`, `memory/`, and `skills/`, then archived it at `archive/superseded/agent_protocol.md`. Phase 2 Batch 2 absorbed `docs/company_operations_overview.md` into `memory/` and relevant `skills/`, then archived it at `archive/superseded/company_operations_overview.md`. Phase 2 Batch 3 absorbed `docs/ai_operating_interface_guide.md` into memory, skills, and archive notes, then archived it at `archive/superseded/ai_operating_interface_guide.md`. Phase 2 Batch 4 moved exact roadmap reference material from `docs/strategic_roadmap.md` into `skills/review-roadmap-implications/reference/strategic-roadmap.md`, then archived the source doc at `archive/superseded/strategic_roadmap.md`.

No active Company docs remain after Phase 2 Batch 4. Future migration phases should use `memory/`, `skills/`, `skills/*/reference/`, and `archive/` unless a new exact-reference need is explicitly scoped.
