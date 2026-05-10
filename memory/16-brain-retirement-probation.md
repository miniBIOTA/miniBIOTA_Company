---
id: company_brain_retirement_probation
title: Brain Retirement Probation Tracker
domain: company
last_updated: 2026-05-10
tags: [brain, company, migration, probation, phase-11]
---
# Brain Retirement Probation Tracker

## Purpose

This file tracks Phase 11 of the Brain retirement: operating miniBIOTA without Brain as an active coordination repo before final retirement.

Brain is now archive/recovery context. Company owns active cross-domain operating coordination, active repo/domain routing, active domain reports, and active broad exports. Domain repos own implementation truth. App owns Planner runtime/schema/UI. Supabase remains structured operational truth.

This tracker does not delete Brain, move Brain folders, make Brain physically read-only, write live Planner/Supabase records, run migrations, alter app/runtime behavior, change public site behavior, or make public/financial/legal/roadmap commitments.

## Probation Window

Start date: 2026-05-09.

Minimum duration: 2 to 4 weeks of normal miniBIOTA work.

Probation can end only after all required events below are completed and no open active-dependency blocker remains.

## Operating Rule During Probation

Use Company or the relevant domain repo for active work.

Use Brain only for:

- historical lookup,
- retirement provenance,
- recovery context,
- explicitly scoped Brain retirement checks.

If any workflow tries to use Brain for active startup, routing, closeout, reporting, exports, helper imports, App Team source-pack behavior, or live operational writes, log it below and classify it before proceeding.

## Required Probation Events

| Event | Status | Evidence |
|---|---|---|
| One Company operating review | Complete | `memory/17-phase-11-company-operating-review-2026-05-09.md` |
| One cross-domain Program/Operation update | Complete | `memory/18-phase-11-operation-living-atlas-update-2026-05-09.md` |
| One domain closeout from at least three different domains | Complete | `memory/19-phase-11-domain-closeout-batch-2026-05-10.md` |
| One Company export rebuild | Complete | Company exports rebuilt on 2026-05-09 during Phase 10/11 setup, after the first operating-review evidence item, after active Company report/export wording was aligned to Phase 11 probation, after the Operation Living Atlas Program/Operation update was recorded, after the active-reference scan was recorded, after the Planner/project-management strategy session was recorded, and after the Supabase read-awareness session was recorded. |
| One Planner/project-management strategy session | Complete | `memory/21-phase-11-planner-strategy-session-2026-05-10.md` |
| One Supabase read-awareness session | Complete | `memory/22-phase-11-supabase-read-awareness-2026-05-10.md` |
| One active-reference scan after normal work begins | Complete | `memory/20-phase-11-active-reference-scan-2026-05-10.md` |

## Baseline Scan On 2026-05-09

A Phase 11 baseline active-blocker phrase scan excluded generated Company exports and archive folders. It searched active repos and `YouTube_Extraction` for old active Brain-reporting phrases such as `reports to the Strategy Agent`, `Brain Reporting`, `Brain strategy brief`, `Brain App Operations brief`, `return this file to the Brain Agent`, `Start Brain session`, `Update Brain memory`, `Update domain brief`, `current reporting target until`, `Company report candidate`, `reporting candidates`, and `transition fallback`.

| Repo | Active blocker phrase matches | Classification |
|---|---:|---|
| `miniBIOTA_Company` | 2 | Intentional migration scan-pattern references in migration docs. Not active workflow blockers. |
| `miniBIOTA_Financials` | 0 | Clear. |
| `miniBIOTA_Research` | 0 | Clear. |
| `miniBIOTA_Brand` | 0 | Clear. |
| `miniBIOTA_Content` | 0 | Clear. |
| `miniBIOTA_Hardware` | 0 | Clear. |
| `miniBIOTA_Growth` | 0 | Clear. |
| `miniBIOTA_Web` | 0 | Clear. |
| `miniBIOTA_App` | 0 | Clear. |
| `YouTube_Extraction` | 0 | Clear; ownership is Content, and legacy live import is blocked until rebuilt with Content-owned helpers. |

## Brain Usage Log

| Date | Trigger | Repo/workflow | Classification | Action |
|---|---|---|---|---|
| 2026-05-09 | Phase 11 setup requested while already in Brain retirement thread | Brain retirement migration | Explicit transition maintenance | Created this tracker; no active Brain reactivation. |
| 2026-05-09 | User asked to continue probation from Brain retirement thread | Company operating review | Explicit transition maintenance | Created `memory/17-phase-11-company-operating-review-2026-05-09.md`; marked the Company operating-review event complete; no live Planner/Supabase records changed. |
| 2026-05-09 | User asked to continue probation from Brain retirement thread | Operation Living Atlas Program/Operation update | Explicit transition maintenance | Created `memory/18-phase-11-operation-living-atlas-update-2026-05-09.md`; marked the Program/Operation update event complete; patched Company coordination/Living Atlas guidance; no live Planner/Supabase records changed. |
| 2026-05-10 | User asked to continue probation from Brain retirement thread | Brand, Content, and Growth domain closeout batch | Explicit transition maintenance | Created `memory/19-phase-11-domain-closeout-batch-2026-05-10.md`; marked the three-domain closeout event complete; patched old-habit Brain fallback wording in Brand, Content, and Growth active docs; no live Planner/Supabase records changed. |
| 2026-05-10 | User asked to continue probation from Brain retirement thread | Active-reference scan across Company and active domain repos | Explicit transition maintenance | Created `memory/20-phase-11-active-reference-scan-2026-05-10.md`; marked the active-reference scan event complete; patched old-habit Brain fallback wording in Financials, Research, Web, Company, Hardware, and App active docs/playbooks; no live Planner/Supabase records changed. |
| 2026-05-10 | User asked to continue probation from Brain retirement thread | Planner/project-management strategy session | Explicit transition maintenance | Created `memory/21-phase-11-planner-strategy-session-2026-05-10.md`; marked the Planner/project-management strategy event complete; confirmed Company can govern Planner strategy from Company/App active docs without Brain as active coordinator; no live Planner/Supabase records changed. |
| 2026-05-10 | User approved scoped read-only Supabase inspection | Supabase read-awareness session | Explicit transition maintenance | Created `memory/22-phase-11-supabase-read-awareness-2026-05-10.md`; marked the Supabase read-awareness event complete; verified GET-only Planner/Programs endpoints with publishable key and documented RLS/protected-read limitations; no live Planner/Supabase records changed. |

Classification values:

- Historical lookup: Brain was used only to inspect old context or provenance.
- Explicit transition maintenance: Brain was used because the task itself was Brain retirement or recovery work.
- Missing Company replacement: active work needed something Company/domain repos do not yet provide.
- Old habit: a prompt, script, doc, or source pack pointed to Brain even though Company/domain replacements exist.

## Issue List

| Issue | Classification | Owner | Status | Next action |
|---|---|---|---|---|
| `YouTube_Extraction` live import cannot run after Brain helper retirement | Known replacement needed | Content | Open | Rebuild or move the import under Content-owned helper code before any live Supabase write. |
| Brand closeout/startup docs still treated Brain as fallback manager-facing reporting | Old habit | Brand | Closed 2026-05-10 | Patched Brand active docs to route manager-facing state to Company reports and Brain to historical/archive lookup only. |
| Content closeout/startup docs still treated Brain as fallback manager-facing reporting | Old habit | Content | Closed 2026-05-10 | Patched Content active docs to route manager-facing state to Company reports and Brain to historical/archive lookup only. |
| Growth closeout/startup docs still treated Brain as fallback manager-facing reporting | Old habit | Growth | Closed 2026-05-10 | Patched Growth active docs to route manager-facing state to Company reports and Brain to historical/archive lookup only. |
| Financials docs/playbooks still treated Brain financials brief/exports as fallback manager-facing current state | Old habit | Financials | Closed 2026-05-10 | Patched Financials active docs/playbooks to route active manager-facing state to Company reports and current values to Supabase or explicit snapshots; Brain financials brief/export is historical/archive only. |
| Research docs/playbooks still referenced Company/Brain transition reporting and Brain fallback brief routing | Old habit | Research | Closed 2026-05-10 | Patched Research active docs/playbooks to route active manager-facing state to Company reports and Brain to historical/archive lookup only. |
| Web compatibility docs/playbooks still referenced Brain reporting and Company/Brain transition reports | Old habit | Web | Closed 2026-05-10 | Patched Web active docs/playbooks to route active manager-facing state to Company Web report and Brain to historical/archive lookup only. |
| Company protocol/playbooks/reports still contained candidate or Brain-current-state transition wording | Old habit | Company | Closed 2026-05-10 | Patched Company protocol, Company reporting playbooks, Company brief, and Hardware report wording so Company owns active reports/coordination and Brain is historical/archive/provenance only. |
| Hardware/App memory contained residual Company/Brain transition wording | Old habit | Hardware + App | Closed 2026-05-10 | Patched active memory wording to point to Company reporting, App/website system records, and Brain archive/provenance only. |
| Publishable-key Supabase reads reach Planner/Programs endpoints but expose zero rows under RLS | Access limitation | Company + App | Open | Use Supabase MCP or the protected App read bridge for future current-status reads; do not use Brain helpers or unsafe direct secret-key REST. |
| Physical Brain retirement model not chosen | Final retirement decision | User + Company | Deferred to Phase 12 | Choose keep-as-read-only repo, move-under-archive, or keep local searchable archive after probation succeeds. |

## Patch Rule During Probation

If a missing replacement or old-habit Brain reference is found:

1. Patch Company or the relevant domain repo as the active source.
2. Keep Brain archive-readable.
3. Do not silently reactivate Brain as top-level coordinator.
4. Do not delete or move Brain without a separate Phase 12 approval.
5. Record the issue and close it only after verification.

## Exit Criteria

Phase 11 is complete when:

- all required probation events are complete,
- no active workflow requires Brain paths,
- Company handles startup, routing, closeout, exports, cross-domain planning, and domain reporting,
- App Planner/Supabase remains the live structured work queue where current task/project state matters,
- Brain usage during probation is only historical lookup or explicit transition maintenance,
- unresolved issues are either closed or deliberately deferred to Phase 12.

## Recommended Next Work

Continue normal Company/domain work from Company and the relevant domain repos through the rest of the probation window. All required Phase 11 evidence items are now recorded, but probation should continue for the planned 2 to 4 weeks of normal work. After each meaningful session, update this tracker if Brain was used or if a workflow attempted to use Brain as active coordination.
