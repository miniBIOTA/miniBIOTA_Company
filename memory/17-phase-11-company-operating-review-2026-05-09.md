---
id: phase_11_company_operating_review_2026_05_09
title: Phase 11 Company Operating Review - 2026-05-09
domain: company
last_updated: 2026-05-09
tags: [company, operating-review, brain-retirement, probation, programs-operations]
---
# Phase 11 Company Operating Review - 2026-05-09

## Purpose

This docs-only operating review is the first Company operating-review evidence item for Phase 11 Brain retirement probation.

It verifies whether Company can run a normal cross-domain operating review without using Brain as the active coordination repo. Brain was used only because the current task is explicit Brain retirement maintenance.

No live Planner/Supabase records were read or written. No migrations, raw SQL, schema changes, app runtime changes, public site changes, or business/public/financial/legal/roadmap commitments were made.

## Horizon And Scope

Horizon: Phase 11 probation start window on 2026-05-09.

Scope:

- Company operating cadence and dependency-map readiness.
- Programs/Operations governance readiness.
- Brain active-dependency check.
- Next probation events needed before final Brain retirement.

Out of scope:

- Live Planner task/project status verification.
- Supabase record updates.
- Public site or app behavior changes.
- Business plan, launch, finance, sponsor, legal, or roadmap commitments.

## State Separation

### Current State

- Company is the active top-level operating coordination repo.
- Company owns planning strategy, Programs/Operations governance, roadmap cadence, dependency mapping, cross-domain operating memory, review rhythm, active repo/domain routing, active Company reports, and active Company exports.
- Domain repos own implementation truth and domain-local memory/skills.
- App owns Planner runtime behavior, schema, UI, and Supabase-backed workflow implementation.
- Supabase/App Planner remains the live source for structured operational project/task status when current status matters.
- Brain is archive/recovery context and explicit retirement-provenance context during probation.
- `YouTube_Extraction` remains a known Content-owned helper replacement issue before live import writes can resume.

### Planned State

- Complete a 2 to 4 week probation period using Company and domain repos for active work.
- Finish all required Phase 11 probation events before final Brain retirement.
- Keep Brain searchable for historical lookup and recovery until Phase 12 explicitly chooses the physical retirement model.

### Proposed Next Actions

- Use this review as the first completed Company operating-review evidence item.
- Run one cross-domain Program/Operation update from Company next.
- Collect closeouts from at least three different domain repos using Company reporting paths.
- Run one Planner/project-management strategy session as read-only unless the user explicitly approves live writes.
- Run one Supabase read-awareness session as read-only.
- Repeat the active-reference scan after normal work begins.
- Rebuild or move the `YouTube_Extraction` live import under Content-owned helper code before any live Supabase write.

### Aspirational Roadmap

- Fully retire Brain from active operations after probation succeeds and no active-dependency blockers remain.
- Choose a Phase 12 final archive model: keep Brain as read-only/searchable repo, move it under archive, or keep it outside active workspace startup.

## Dependency Map

| Area | Current owner | Downstream owners | Blockers / gates | Next review point |
|---|---|---|---|---|
| Brain retirement probation | Company | Brain archive, all domains, App | Required probation events incomplete; physical retirement model deferred | After next probation event |
| Company operating cadence | Company | All domains | Live Planner status not checked in this docs-only review | Planner strategy session |
| Operation Living Atlas | Company governance | Research, Content, Web, App, Hardware | Current structured record status not checked; domain execution remains local | Cross-domain Program/Operation update |
| Operation Living Web | Company governance | Web, Brand, Content, Research, App, Growth | Public site behavior untouched; current structured record status not checked | Cross-domain Program/Operation update or Web closeout |
| Domain reporting | Company + domains | Financials, Research, Brand, Content, Hardware, Growth, Web, App | Need closeouts from at least three domains during probation | After first three domain sessions |
| Planner/project-management strategy | Company + App | App Planner/Supabase | Live reads/writes require correct scoped session; writes require explicit approval | Planner strategy session |
| Supabase read awareness | Company + App/domain owners | All domains with structured records | Read-only awareness still needs a scoped session; writes require explicit approval | Supabase read-awareness session |
| YouTube live import | Content | Content, App/Supabase | Legacy Brain helper path retired; live import blocked until Content-owned helper exists | Content helper rebuild session |

## Programs/Operations Governance Notes

### Brain Retirement Probation

Lifecycle state: Active probation.

Owner: Company.

Lead: Company/Codex under user direction.

Decision boundary: Company can maintain docs, trackers, routing, reports, exports, and operating-review evidence. Deleting, moving, or physically locking Brain is deferred to Phase 12 and requires explicit approval.

Durable source of truth: `memory/16-brain-retirement-probation.md` in Company, with the strategic migration plan retained in Brain at `memory/12-brain-retirement-to-company-plan.md` for retirement provenance.

### Operation Living Atlas

Lifecycle state: Active Company-governed operation.

Owner: Company governance; domain execution remains local.

Likely downstream owners: Research for ecological/species truth, Content for public story/proof assets, Web for public surfaces, App for structured workflow/runtime surfaces, Hardware for telemetry and system feasibility.

Current review limit: This session did not verify live Planner/Supabase state.

### Operation Living Web

Lifecycle state: Active Company-governed operation.

Owner: Company governance; Web and Brand/Content/Research/App/Growth keep their implementation boundaries.

Current review limit: This session did not change public site behavior or verify live Planner/Supabase state.

## Roadmap Cadence Notes

- The confirmed roadmap milestone remains the Q1 2026 fully closed working concept.
- Q2 goals are still an active planning gap and were not invented in this review.
- Planner workflow state should be used for operational task/project status only; it does not create roadmap commitments, launch targets, public promises, financial commitments, sponsor obligations, or legal decisions.
- The next roadmap-relevant review should happen after either a Planner strategy read or a cross-domain Program/Operation update, so current operational status and roadmap implications stay separate.

## Brain Usage Classification

Brain usage in this review: Explicit transition maintenance.

Reason: The user asked to continue Brain retirement migration/probation from the Brain repo. Active Company operating-review work was recorded in Company. Brain was not used as the active operating source for normal Company work.

No missing Company replacement was found for the operating-review workflow itself. A stale Company skill/reference wording issue was found where operating-review guidance still mentioned the Brain company brief as an active destination; that wording should be patched to Company reports and Brain archive only.

## Approval And Safety Gates

Unchanged approval gates:

- No live Planner writes without explicit approval.
- No Supabase writes, raw SQL, migrations, destructive actions, schema changes, or service-role actions without explicit approval.
- No app runtime, schema, UI, or public site behavior changes without explicit scope.
- No public, financial, legal, sponsor, launch, business-plan, or roadmap commitments without explicit user direction.

## Closeout Implications

Update `memory/16-brain-retirement-probation.md` to mark the Company operating review event complete and log this review as explicit transition maintenance.

Update active Company operating-review guidance to use Company reports for manager-facing Company state and Brain archive only for historical/retirement lookup.
