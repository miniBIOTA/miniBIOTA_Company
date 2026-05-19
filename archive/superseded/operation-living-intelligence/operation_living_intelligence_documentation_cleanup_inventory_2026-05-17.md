---
id: operation_living_intelligence_documentation_cleanup_inventory_2026-05-17
title: Operation Living Intelligence Documentation Cleanup Inventory
domain: company_operations
last_updated: 2026-05-18
tags: [operation-living-intelligence, intelligent-harness, cleanup, inventory, archive]
status: active_folder_reduced_to_current_operator_surface
---
# Operation Living Intelligence Documentation Cleanup Inventory

## Purpose

This inventory explains what remains active for Operation Living Intelligence after the documentation cleanup and where the older wave/proof material went.

The cleanup goal is to keep the current Intelligent Harness operator path easy to find without losing approval records, implementation readbacks, source evidence, or deferred-lane provenance.

## Current Rule

Use this file first:

```text
domains/company/operation_living_intelligence_active_reference_map_2026-05-18.md
```

Older Wave 1-9 documents, former transition-summary maps, foundational source audits, individual Phase 1 seed/proposal docs, prior harness closeouts, early Intelligence tab UI proposal docs, Phase 13-17 helper/bridge proposal docs, Phase 19 runner/proof docs, and the deferred post-write Memgraph refresh proposal are no longer active operating instructions. They are archived provenance.

## What Remains Active In `domains/company`

The active OLI set is now intentionally small:

| Group | Files | Why kept active |
|---|---:|---|
| Control and current closeout | 5 | Current map, master plan, cleanup record, current handoff, and observation workflow closeout. |
| Current observation workflow references | 3 | Phase 19 checklist, Phase 20 writeback proposal, and Phase 21 follow-up workflow. |

Active folder count after this pass:

```text
8 Operation Living Intelligence Markdown docs in domains/company
```

## Archived From `domains/company`

Moved to:

```text
archive/superseded/operation-living-intelligence/
```

Archived batches:

- Wave 1-9 exploration, design, approval, helper, readback, usefulness, and owner-review docs.
- 2026-05-15 OLI session closeout.
- 2026-05-13 OLI Planner program setup note.
- Earlier archived 2026-05-16 OLI closeout and Planner alignment readback.
- Former deferred return map and Waves 1-9 consolidation / next-phase map.
- Supabase schema audit, task 409 schema/data audit, and individual Phase 1 seed/source/proposal docs.
- Prior 2026-05-17 Intelligent Harness closeout and Phase 1-7 closeout.
- Early Intelligence tab and Observation Review Mode UI proposal docs for Phases 8-12.
- Phase 13-17 helper, bridge, parser, and raw-intake proposal docs.
- Phase 19 runner proposal and first pipeline readback proof.
- Deferred post-observation Memgraph refresh proposal.

Archive count after this pass:

```text
131 Operation Living Intelligence Markdown docs
```

## Why These Were Archived

The Wave 1-9 docs were useful while exploring whether local graph projection, retrieval, media/visual AI, telemetry summaries, routing, analytics, and sensitive-data boundaries could work.

They are no longer the active operating path because the current path is:

1. Content raw observation intake parser.
2. Content-owned audit draft JSON and Markdown.
3. App bridge to Phase 13 input.
4. Phase 13 auto-link suggestions with read-only canonical species lookup.
5. Intelligence tab latest suggestion display.
6. Phase 19 local observation intake pipeline.
7. Phase 20 approved observation writeback proposal.
8. Live duplicate and ID confirmation.
9. Canonical Supabase observation insert only when explicitly approved.
10. Later story/open-loop/media/content follow-up as separate approval layers.

## What Was Not Deleted

This pass archived provenance instead of deleting it. The archived files still preserve:

- approval boundaries;
- implementation/readback evidence;
- deferred-lane design context;
- source-readiness notes;
- no-write/no-public/no-canonical guardrails;
- owner-review history.

## Active Cleanup Guidance

- Keep the current Intelligent Harness/operator path in `domains/company`.
- Keep older Wave 1-9 material in `archive/superseded/operation-living-intelligence/`.
- Do not use archived wave files as active instructions.
- If a deferred lane becomes relevant again, start from the active reference map, then open archived transition maps or wave files only for provenance.
- Do not delete archived approval/readback records unless their facts are preserved in a newer durable summary.

## Not Changed

This cleanup did not:

- update Planner;
- change Supabase;
- change App runtime;
- set up Memgraph;
- create App or harness generated outputs;
- change public output;
- change canonical records;
- create sponsor, legal, launch, financial, or roadmap commitments.
