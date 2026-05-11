---
id: phase_11_operation_living_atlas_update_2026_05_09
title: Phase 11 Operation Living Atlas Program Update - 2026-05-09
domain: company
last_updated: 2026-05-09
tags: [company, operation-living-atlas, programs-operations, brain-retirement, probation]
---
# Phase 11 Operation Living Atlas Program Update - 2026-05-09

## Purpose

This docs-only Program/Operation update is the second Phase 11 Brain retirement probation evidence item.

It verifies that Company can refresh a cross-domain Program/Operation dependency map without using Brain as the active coordination repo.

No live Planner/Supabase records were read or written. No migrations, raw SQL, schema changes, app runtime changes, public site changes, firmware/live-control changes, or business/public/financial/legal/roadmap commitments were made.

## Program Scope

Program/Operation: Operation Living Atlas.

Company-level objective: turn miniBIOTA's past videos, observations, photos, species records, and ecological memory into a connected living record where important ecological stories are traceable to evidence.

Current model arc: Lake Post-Seal / Flagfish / Daphnia / Ghost Shrimp, beginning from pipeline 338 and chronicle 30.

Lifecycle state: Reviewed during Phase 11 probation. Not closed. Not expanded into new live Planner/Supabase work during this session.

## State Separation

### Current State

- Company owns Operation Living Atlas governance, dependency mapping, review rhythm, and cross-domain coordination.
- Research owns species histories, ecological interpretation, interaction mapping, confidence language, and public/private scientific judgment support.
- Content owns pipeline-by-pipeline extraction, transcript/video context, story arcs, and publish chronology.
- Web owns public rendering rules, chronicle relationship display, SEO/public page behavior, and public claim presentation.
- App owns Planner/runtime support, schema/UI implementation, and any future operator workflow for Living Atlas review.
- Raw Footage owns media discovery, photo/video evidence selection, and tagging readiness.
- Brain is archive/recovery context and retirement provenance only; it is not an active Operation Living Atlas owner during probation.

### Planned State

- Keep Operation Living Atlas as a Company-governed cross-domain Program/Operation.
- Use bounded source packets rather than broad historical cleanup sessions.
- Use Supabase/App Planner for structured status or records only when a scoped read/write session is explicitly needed.

### Proposed Next Actions

- Use the Lake Post-Seal arc as the first model packet.
- Begin with one bounded source packet for pipeline 338 and chronicle 30 before any write session.
- Keep the first packet docs-only until the required Supabase read/write approval path is clear.
- Decide later whether Living Atlas needs a dedicated Supabase queue table, Markdown packets plus Planner tasks, or an App review workflow.

### Aspirational Direction

- Build a repeatable ecological knowledge-graph backfill process that can scale from the first Lake Post-Seal packet to future species, biome, and story arcs.
- Make public ecological stories traceable without turning public pages into raw research notebooks.

## Cross-Domain Impact Map

| Domain | Why implicated | Next need | Durable handoff surface |
|---|---|---|---|
| Company | Owns Program/Operation governance, dependency interpretation, review cadence, and cross-domain source discipline | Keep the dependency map current and choose the next bounded review point | Company memory and Operation Living Atlas reference plan |
| Research | Owns ecological interpretation, species histories, uncertainty/confidence language, and public/private judgment support | Validate Flagfish, Ghost Shrimp, Daphnia, amphipod, copepod, and crayfish interpretation before public claims | Research repo memory/skills and Supabase species/observation reads when scoped |
| Content | Owns video/source extraction, transcript context, story arcs, and publishing chronology | Build source packet evidence from pipeline 338 and related content context | Content repo, content pipeline records, source packet notes |
| Web | Owns public chronicle/species rendering and public claim presentation | Confirm what public pages should show only after record/publicness decisions are made | Web repo memory/skills and public route review when scoped |
| App | Owns Planner/runtime support, schema/UI implementation, and future operator workflow | Evaluate later whether a Living Atlas review workflow or queue belongs in App | App repo memory/skills and approved Planner/Supabase reads/writes |
| Raw Footage | Owns source media discovery, evidence selection, and tagging readiness | Locate lake opacity, fish removal, post-removal microcrustacean, and shrimp evidence when packet work begins | Raw Footage report, App Media Library, Content/Research handoffs |
| Brain | Archive/recovery context only during probation | No active Operation Living Atlas work should route to Brain | Historical lookup only if provenance is needed |

## Dependency Map

| Dependency | Upstream owner | Downstream owner | Blocker / gate | Review point |
|---|---|---|---|---|
| Bounded source packet for pipeline 338 / chronicle 30 | Company + Content | Research, Web, App, Raw Footage | Not started in this docs-only update | Before first Living Atlas write session |
| Species interpretation for model arc | Research | Company, Content, Web | Requires current species/observation context before public claims | During first source-packet review |
| Publicness tier decisions | Company + Research + Content | Web, App | Need evidence and uncertainty classification before public surface changes | Before public chronicle/species updates |
| Media evidence selection | Raw Footage + Content | Research, Web | Needs media discovery/tagging pass; no media moved here | After source packet identifies evidence needs |
| Structured record writes | App/Supabase + domain owners | Company, Research, Content, Web | Explicit approval required for live writes | Separate scoped write session |
| App review workflow decision | Company + App | App, all participating domains | Do not create UI/schema work until data-entry workflow is proven | After first packet exposes real workflow friction |
| Brain dependency check | Company | Brain archive | No active Brain dependency found for this Program update | Recheck after first packet and domain closeouts |

## Sequencing Recommendation

Proposed sequence, not an approved commitment:

1. Draft the first Lake Post-Seal source packet from pipeline 338 and chronicle 30.
2. Ask Research to validate species/ecological interpretation and uncertainty language.
3. Ask Content to verify chronology and source evidence from the published video context.
4. Ask Raw Footage/Media Library to identify candidate visual evidence.
5. Decide publicness tiers before asking Web or App to implement anything.
6. Only after the packet is stable, scope Supabase reads/writes or Planner task updates with explicit approval.

## Program Governance Notes

- Owner: Company governance.
- Lead for this update: Company/Codex under user direction.
- Lifecycle state: Reviewed; active; not closed.
- Review cadence: next review after one bounded source packet is drafted or after the Planner strategy session verifies current structured status.
- Closeout status: Phase 11 cross-domain Program/Operation update event can be marked complete, but Operation Living Atlas itself remains open.

## Brain Usage Classification

Brain usage in this update: Explicit transition maintenance.

Reason: The user asked to continue Brain retirement probation from the Brain repo. Active Program/Operation state was recorded in Company, and Operation Living Atlas ownership remained Company/domain/App based.

No missing Company replacement was found for the Program/Operation update workflow. Two stale Company references were found and patched in this session:

- `skills/coordinate-cross-domain-priorities/SKILL.md` previously named the Brain company brief as the manager-facing strategy reference.
- `skills/coordinate-cross-domain-priorities/reference/operation-living-atlas-plan.md` previously listed Brain as an active protocol/registry/brief/export/guardrail contributor rather than archive/provenance context.

## Approval And Safety Gates

Unchanged approval gates:

- No live Planner writes without explicit approval.
- No Supabase writes, raw SQL, migrations, destructive actions, schema changes, or service-role actions without explicit approval.
- No App runtime, schema, UI, or public site behavior changes without explicit scope.
- No firmware, telemetry producer, or live-control changes without explicit scope.
- No public, financial, legal, sponsor, launch, business-plan, or roadmap commitments without explicit user direction.

## Closeout Implications

Update `memory/16-brain-retirement-probation.md` to mark the cross-domain Program/Operation update event complete and log this work as explicit transition maintenance.

Update active Company coordination guidance so Brain is archive/provenance context for Operation Living Atlas during probation, not an active downstream owner.
