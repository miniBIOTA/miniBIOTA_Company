---
id: operation_living_intelligence_active_reference_map_2026-05-18
title: Operation Living Intelligence Active Reference Map
domain: company_operations
last_updated: 2026-05-18
tags: [operation-living-intelligence, intelligent-harness, active-reference, cleanup, observation-workflow, phase-21]
status: active_reference_map_current_after_wave_provenance_archived
---
# Operation Living Intelligence Active Reference Map

## Purpose

This is the compact operating map for Operation Living Intelligence after the Intelligent Harness proved the local-to-canonical observation workflow through Phase 20 and the second cleanup pass clarified the current operator path.

Use this map before opening older wave-expansion files. Older Wave 1-9 files now live in `archive/superseded/operation-living-intelligence/` as provenance and deferred-lane reference, not as the primary operating path.

## Current Operator Path

The working path is:

1. Content raw observation intake parser.
2. Content-owned audit draft JSON and Markdown.
3. App bridge to Phase 13 input.
4. Phase 13 auto-link suggestions with read-only canonical species lookup.
5. Intelligence tab latest suggestion display.
6. Phase 19 local observation intake pipeline.
7. Phase 20 approved observation writeback proposal.
8. Live duplicate and ID confirmation.
9. Canonical Supabase observation insert when explicitly approved.
10. Later story/open-loop/media/content follow-up as separate approval layers.

The completed proof example is the Gulf marsh crab excavation observation:

- Supabase observation ID: `253`.
- Species: `174`, Gulf marsh crab.
- Biome: `5`, Marine Shore.
- Bundled writes: none.

Current operator rule:

```text
Content should interpret the harness output conversationally.
Josue should not need to manually inspect the Intelligence tab to know what to do next.
```

Species lookup rule:

```text
Canonical species outside the bounded graph are ID-confirmation questions, not missing-species questions.
```

Known example:

- Creeping Beggarweed exists as canonical species `97` / `Desmodium incanum`.

## Active Entry Points

| File | Use |
|---|---|
| `operation_living_intelligence_intelligent_harness_master_plan_2026-05-17.md` | Current master plan and status spine. |
| `operation_living_intelligence_intelligent_harness_session_closeout_2026-05-18.md` | Current session handoff, Phase 21/post-write refresh proposals, and cleanup guidance. |
| `operation_living_intelligence_intelligent_harness_session_closeout_2026-05-17.md` | Prior handoff and original operational testing guidance. |
| `operation_living_intelligence_ih_observation_workflow_closeout_2026-05-18.md` | Plain-language closeout for the proven observation workflow. |
| `operation_living_intelligence_documentation_cleanup_inventory_2026-05-17.md` | Classification inventory and cleanup posture. |
| `company_brief.md` | Manager-facing Company summary of the milestone. |

## Active Workflow References

| Phase | File | Current role |
|---|---|---|
| Phase 1-7 | `operation_living_intelligence_ih_phase_1_7_closeout_2026-05-17.md` | Historical closeout for the first harness stack. |
| Phase 8 | `operation_living_intelligence_ih_phase_8_app_integrated_intelligence_tab_proposal_2026-05-17.md` | Read-only Intelligence tab integration reference. |
| Phase 9 | `operation_living_intelligence_ih_phase_9_observation_intake_auto_linker_proposal_2026-05-17.md` | Suggestion-generation model for observations. |
| Phase 10 | `operation_living_intelligence_ih_phase_10_intelligence_tab_observation_suggestions_proposal_2026-05-17.md` | Intelligence tab suggestion display reference. |
| Phase 11 | `operation_living_intelligence_ih_phase_11_observation_review_mode_proposal_2026-05-17.md` | Observation Review Mode UX reference. |
| Phase 12 | `operation_living_intelligence_ih_phase_12_observation_review_mode_compact_decision_layout_proposal_2026-05-18.md` | Compact decision layout reference. |
| Phase 13 | `operation_living_intelligence_ih_phase_13_observation_input_runner_proposal_2026-05-18.md` | App-side local observation input runner reference. |
| Phase 14 | `operation_living_intelligence_ih_phase_14_intelligence_tab_latest_suggestion_run_loader_proposal_2026-05-18.md` | Latest suggestion run loader reference. |
| Phase 15 | `operation_living_intelligence_ih_phase_15_content_agent_observation_parser_to_phase_13_input_proposal_2026-05-18.md` | Content-owned parser ownership decision. |
| Phase 16 | `operation_living_intelligence_ih_phase_16_content_audit_to_phase_13_app_bridge_proposal_2026-05-18.md` | Content audit to App input bridge reference. |
| Phase 17 | `operation_living_intelligence_ih_phase_17_content_raw_observation_intake_command_proposal_2026-05-18.md` | Content raw intake command reference. |
| Phase 19 | `operation_living_intelligence_ih_phase_19_local_observation_intake_pipeline_runner_proposal_2026-05-18.md` | Local no-write pipeline orchestration reference. |
| Phase 19 | `operation_living_intelligence_ih_phase_19_local_observation_intake_pipeline_checklist_2026-05-18.md` | Operator checklist for the local pipeline. |
| Phase 19 | `operation_living_intelligence_ih_phase_19_pipeline_readback_20260518_123237.md` | First pipeline readback proof. |
| Phase 20 | `operation_living_intelligence_ih_phase_20_approved_observation_writeback_from_content_intake_draft_proposal_2026-05-18.md` | Approval-gated canonical observation writeback design. |
| Phase 21 | `operation_living_intelligence_ih_phase_21_content_agent_intelligent_follow_up_workflow_proposal_2026-05-18.md` | Content agent conversational follow-up workflow proposal. |
| Post-write refresh | `operation_living_intelligence_ih_post_observation_memgraph_refresh_proposal_2026-05-18.md` | Derived Memgraph refresh proposal after approved observation insert/readback. |

## Active Helper Ownership

| Owner | Helper | Role |
|---|---|---|
| Content | `miniBIOTA_Content/tools/parse-oli-raw-observation-intake.js` | Create Content-owned parser drafts from raw observation text. |
| Content | `miniBIOTA_Content/tools/parse-oli-observation-to-phase13-input.js` | Earlier parser proof helper retained as provenance. |
| App | `miniBIOTA_App/tools/bridge-oli-content-audit-to-phase13-input.js` | Convert approved Content audit drafts into Phase 13-compatible local inputs. |
| App | `miniBIOTA_App/tools/run-oli-ih-phase13-observation-input-runner.js` | Generate local observation suggestions and latest-run pointer. |
| Company | `miniBIOTA_Company/tools/run-oli-ih-phase19-local-observation-intake-pipeline.js` | Thin orchestrator that calls existing helpers without duplicating logic. |

## Deferred Reference Lanes

Archived wave documents should be treated this way:

| Lane | Status |
|---|---|
| Waves 1-3 graph/story/species docs | Archived Lake Post-Seal regression/test fixture and model provenance, not the daily operator path. |
| Wave 4 analytics | Archived deferred analytics warehouse reference. |
| Wave 5 retrieval/vector docs | Archived deferred retrieval/pgvector reference; pgvector remains unapproved. |
| Wave 6 visual AI/media docs | Archived deferred media and visual-AI reference; media metadata writes remain unapproved. |
| Wave 7 routing docs | Archived provenance for routing concepts; not the current operator workflow. |
| Wave 8 telemetry docs | Archived deferred telemetry reference. |
| Wave 9 sensitive-domain docs | Archived deferred sensitive-data reference. |

## Current Operating Guidance

Next operational testing should be:

1. Run one or two new real observations through the Phase 19 local pipeline.
2. Let Content read the Phase 19/Phase 13 outputs and summarize what the harness found.
3. Confirm species/biome IDs, especially if the match is outside the bounded graph.
4. Choose one observation for Phase 20 writeback only if useful.
5. Keep story links, open loop links, story beats, chronicles, Planner tasks, media metadata, content pipeline records, graph refresh, and public output separate unless explicitly approved later.

Do not start a new phase just because a suggestion is outside the current graph. First check whether the canonical row already exists.

## Not Approved

The following remain unapproved:

- Supabase writes except an explicitly approved Phase 20 observation insert.
- Planner writes.
- App runtime changes beyond already approved Intelligence tab work.
- Memgraph modification.
- pgvector.
- public output.
- media metadata writes.
- canonical writeback beyond explicitly approved observation records.
- automatic approve/reject/correct controls.
- expansion beyond the current bounded observation testing path.

## Cleanup Posture

Wave 1-9 exploration/proof files have been archived out of `domains/company`.
Use this map to avoid mistaking archived wave files for the current operator
path.

Approved cleanup posture:

- use this active map as the first entry point;
- treat Lake Post-Seal as a regression/test fixture;
- treat archived wave files as provenance or deferred-lane references unless this map says otherwise;
- route daily observations through the current observation-to-story path;
- keep provenance-bearing docs in `archive/superseded/operation-living-intelligence/`;
- delete only redundant generated/proposal residue already summarized elsewhere;
- keep current observation workflow docs active until more real operator tests are complete.
