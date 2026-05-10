---
title: Brain Skills Migration
last_updated: 2026-05-09
---
# Brain Skills Migration

## Purpose

This file is the Phase 6 migration map for Brain-local playbooks. It records which Brain skills now have Company equivalents, which remain transition-only, and which should ultimately move to domain owners.

Brain skills remain available during the transition. Company equivalents are the active coordination playbooks for new Company-led work, but domain-agent updates wait for Phase 7.

## Phase 6 Status

Phase 6 is complete as an initial Company skill-equivalent pass.

Completed in this phase:
- Read all Brain skills end to end.
- Classified each Brain skill as Company-owned, domain-owned, or Brain transition/archive.
- Added Company equivalents for missing active coordination workflows.
- Preserved approval gates for Planner/Supabase writes, public behavior changes, and domain-owner boundaries.
- Left Brain skills active until Phase 7 domain-agent updates and later Brain archive freeze.

Not done in this phase:
- Domain agents were not updated.
- Brain skills were not deleted, archived, or disabled.
- Live Planner/Supabase records were not changed.
- Web, Content, Research, App, or other domain implementation behavior was not changed.

## Skill Classification

| Brain skill | Company disposition | Company surface | Notes |
|---|---|---|---|
| `skills/session-start/SKILL.md` | Move to Company | `skills/company-session-start/SKILL.md` | Company startup now loads Company protocol, registry, memory, and skill routing; Brain startup remains transition-only. |
| `skills/session-closeout/SKILL.md` | Move/merge to Company | `skills/company-session-closeout/SKILL.md` | Existing Company closeout remains active and now composes with Planner task review and chronicle candidate routing. |
| `skills/update-brain-memory/SKILL.md` | Replace for active work | `skills/update-company-memory/SKILL.md` | Brain memory update remains transition-only for Brain migration notes and archive guardrails. |
| `skills/update-domain-brief/SKILL.md` | Move to Company reporting workflow | `skills/update-domain-report/SKILL.md` | Company reports under `domains/` are active reporting targets after Phase 10 activation. |
| `skills/process-new-knowledge/SKILL.md` | Move/merge to Company | `skills/process-new-knowledge/SKILL.md` | Existing Company skill is the active routing workflow. |
| `skills/route-cross-domain-request/SKILL.md` | Move/merge to Company | `skills/route-cross-domain-request/SKILL.md` | Existing Company skill is the active ownership-routing workflow. |
| `skills/task-interrogation/SKILL.md` | Move to Company Planner review | `skills/planner-task-review/SKILL.md` | Keeps Supabase/App Planner as task source of truth and requires approval before writes. |
| `skills/chronicle-candidates/SKILL.md` | Route through Company, final ownership domain-specific | `skills/route-chronicle-candidate/SKILL.md` | Content and Research own chronicle/public-evidence workflows; Company only routes cross-domain/public-strategy implications. |
| `skills/sync-domain-context/SKILL.md` | Move to Company transition workflow | `skills/sync-domain-context/SKILL.md` | Company verifies domain context and reports; no domain-agent updates until Phase 7. |
| `skills/site-simplification-reference/SKILL.md` | Route to Web with Company guardrails | `skills/route-public-web-simplification/SKILL.md` | Web owns implementation and exact public-site behavior; Company preserves public-only strategy and approval routing. |

## Active Company Skill Additions

New Company playbooks from Phase 6:
- `skills/company-session-start/SKILL.md`
- `skills/update-domain-report/SKILL.md`
- `skills/planner-task-review/SKILL.md`
- `skills/sync-domain-context/SKILL.md`
- `skills/route-chronicle-candidate/SKILL.md`
- `skills/route-public-web-simplification/SKILL.md`

Existing Company playbooks that already covered Brain skill responsibilities:
- `skills/company-session-closeout/SKILL.md`
- `skills/update-company-memory/SKILL.md`
- `skills/process-new-knowledge/SKILL.md`
- `skills/route-cross-domain-request/SKILL.md`

## Activation Rules

- Use Company skills for new Company-led coordination work.
- Use Brain skills only for Brain transition work, Brain archive maintenance, or recovery lookup until Brain is frozen.
- Do not update domain agents to reference Company skills until Phase 7.
- Do not delete or archive Brain skills until Company replacements are verified through normal operations.
- Do not move domain-owned implementation playbooks into Company.

## Domain Ownership Notes

Chronicle candidates:
- Research owns ecological evidence and claim safety.
- Content owns story/publishing workflow and public narrative packaging.
- Company may route cross-domain implications, public milestone significance, and approval gates.

Public web simplification:
- Web owns route, template, style, public behavior, and implementation details.
- App owns private operator/admin surfaces.
- Company owns public-only strategy, cross-domain risk, and approval routing.

Domain reporting:
- Company `domains/` reports are active reporting targets after Phase 10 activation.
- Brain domain overview/brief folders are historical/archive lookup only after Phase 10 reporting activation.

## Phase 6 Closeout

Phase 6 does not retire Brain skills. It makes Company capable of handling the active coordination playbook layer and documents what remains for domain-agent update and archive freeze phases.

Next likely phase:
- Phase 7: update domain agents to Company-first routing, Company reporting paths, and updated helper/database-awareness guidance.
