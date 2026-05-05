---
title: Company Memory Index
last_updated: 2026-05-05
---
# Company Memory Index

## Purpose
This folder is the durable Company Agent memory layer for miniBIOTA strategy, governance, roadmap principles, cross-domain coordination, source-of-truth rules, and recurring operating decisions.

Use memory for stable company context. Use skills for repeatable workflows. Use docs only while migration is incomplete or when exact reference material still lives there.

## Load Order
1. Read `AGENTS.md`.
2. Read this index.
3. Load the smallest relevant memory files for the active request.
4. Load the matching `skills/*/SKILL.md` playbook when the request matches an active workflow.
5. Use `docs/` only for migration-era exact reference.
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
Phase 1 created the memory and skill architecture. Phase 2 Batch 1 absorbed `docs/agent_protocol.md` into `AGENTS.md`, `memory/`, and `skills/`, then archived it at `archive/superseded/agent_protocol.md`. Phase 2 Batch 2 absorbed `docs/company_operations_overview.md` into `memory/` and relevant `skills/`, then archived it at `archive/superseded/company_operations_overview.md`.

Remaining `docs/` files have not been archived or deleted. Future migration phases should absorb useful material from `docs/` into memory files or skill reference folders, then archive superseded material only when explicitly approved.
