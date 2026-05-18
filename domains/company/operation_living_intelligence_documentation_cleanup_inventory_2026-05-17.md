---
id: operation_living_intelligence_documentation_cleanup_inventory_2026-05-17
title: Operation Living Intelligence Documentation Cleanup Inventory
domain: company_operations
last_updated: 2026-05-18
tags: [operation-living-intelligence, intelligent-harness, cleanup, inventory, classification]
status: physical_cleanup_started_safe_leaf_files_removed_and_provenance_archived
---
# Operation Living Intelligence Documentation Cleanup Inventory

## Purpose

This is the cleanup inventory for Operation Living Intelligence documentation.

The goal is to inventory old OLI wave-expansion documents and classify each document family so the new Intelligent Harness path can stay clear without losing useful provenance.

This document began as a reviewable classification pass. On 2026-05-18, Josue approved beginning physical cleanup of easily safe leaf files.

## 2026-05-18 Second Cleanup Pass Result

The Intelligent Harness path has moved beyond the original Phase 1/2 planning spine. The local-to-canonical observation workflow is now proven through Phase 20 and is the current operational path.

New compact reference map:

```text
domains/company/operation_living_intelligence_active_reference_map_2026-05-18.md
```

Use that active reference map as the first entry point before opening older wave-expansion files.

Second-pass cleanup decision:

```text
Use the active reference map as the operator entry point.
Physical cleanup may proceed in small, reviewable batches after Josue approval.
Prefer archive moves for provenance-bearing docs and deletion only for redundant
generated/proposal residue that is summarized elsewhere.
```

## 2026-05-18 Physical Cleanup Started

Josue approved continuing cleanup by removing easily safe files from `domains/company`.

Removed safe leaf files:

- Failed/generated Phase 19 readback artifacts:
  - `operation_living_intelligence_ih_phase_19_pipeline_readback_20260518_134034.md`
  - `operation_living_intelligence_ih_phase_19_pipeline_readback_20260518_134034.json`
- Machine JSON companions where human-readable Markdown readbacks remain:
  - `operation_living_intelligence_ih_phase_19_pipeline_readback_20260518_123237.json`
  - `operation_living_intelligence_ih_phase_19_pipeline_readback_20260518_134108.json`
- Extra generated Phase 19 Markdown readback not referenced by the active map:
  - `operation_living_intelligence_ih_phase_19_pipeline_readback_20260518_134108.md`
- Individual Phase 2-7 Intelligent Harness proposal docs consolidated by the Phase 1-7 closeout:
  - `operation_living_intelligence_ih_phase_2_bounded_persistent_local_memgraph_pilot_proposal_2026-05-17.md`
  - `operation_living_intelligence_ih_phase_3_intelligence_query_harness_proposal_2026-05-17.md`
  - `operation_living_intelligence_ih_phase_4_graphrag_context_builder_proposal_2026-05-17.md`
  - `operation_living_intelligence_ih_phase_5_langgraph_style_agent_workflow_proposal_2026-05-17.md`
  - `operation_living_intelligence_ih_phase_6_review_queue_proposed_action_system_proposal_2026-05-17.md`
  - `operation_living_intelligence_ih_phase_7_operator_dashboard_proposal_2026-05-17.md`
- Redundant generic Wave 9 owner-review packet superseded by the Growth/Financials/App/Web owner-review packet and owner-review synthesis:
  - `operation_living_intelligence_wave_9_owner_review_packet_2026-05-15.md`

Archived from `domains/company` to `archive/superseded/operation-living-intelligence/`:

- Provenance closeout superseded by the active Intelligent Harness closeouts, current Company brief, OLI consolidation map, and deferred return map:
  - `operation_living_intelligence_session_closeout_2026-05-16.md`
- Planner alignment readback superseded for active routing by live Planner state and summarized Company reports:
  - `operation_living_intelligence_planner_alignment_readback_2026-05-16.md`

Preserved during this pass:

- active reference map;
- current master plan;
- current and prior Intelligent Harness closeouts;
- Phase 1 source map/query/scope docs;
- Phase 8-21 active workflow proposal docs;
- active-map referenced Phase 19 Markdown readback proof;
- deferred lane design/readiness docs;
- remaining Planner/Supabase provenance docs;
- Company brief and exports.

Current proven workflow:

1. Content raw observation intake parser.
2. Content audit draft JSON/Markdown.
3. App bridge to Phase 13 input.
4. Phase 13 auto-link suggestions.
5. Intelligence tab latest suggestion display.
6. Phase 19 local observation intake pipeline.
7. Phase 20 approved observation writeback proposal.
8. Live duplicate/ID confirmation.
9. Canonical Supabase observation insert when explicitly approved.
10. Later follow-up layers remain separate approvals.

Completed proof example:

- Supabase observation ID: `253`.
- Species: `174`, Gulf marsh crab.
- Biome: `5`, Marine Shore.
- Bundled writes: none.

Latest operator refinement:

- Content should become the conversational operator for harness output.
- Josue should not have to manually inspect the Intelligence tab to know the next question.
- Phase 13 should perform read-only canonical species lookup before labeling species hints as missing.
- Creeping Beggarweed is canonical species `97` / `Desmodium incanum`; if outside the bounded graph, it should be treated as an ID-confirmation question.

## Controlling Path

Active build direction:

```text
domains/company/operation_living_intelligence_intelligent_harness_master_plan_2026-05-17.md
```

Active closeout/handoff:

```text
domains/company/operation_living_intelligence_intelligent_harness_session_closeout_2026-05-18.md
```

Active observation-workflow closeout:

```text
domains/company/operation_living_intelligence_ih_observation_workflow_closeout_2026-05-18.md
```

Active reference map:

```text
domains/company/operation_living_intelligence_active_reference_map_2026-05-18.md
```

Prior closeout retained as provenance:

```text
domains/company/operation_living_intelligence_intelligent_harness_session_closeout_2026-05-17.md
```

## Inventory Summary

The original 2026-05-17 inventory counted the pre-Phase-20 `domains/company/operation_living_intelligence*.md` set:

```text
115 files
```

Since then, additional Intelligent Harness Phase 1-20 proposal, closeout, checklist, and readback files were created. This second pass does not recalculate the full count because the useful cleanup move is now classification and entry-point reduction, not another raw count.

Detected file families:

| Family | Count | Cleanup posture |
|---|---:|---|
| Intelligent Harness | 2 | Active control docs |
| General OLI docs | 8 | Mix of active scaffold and provenance |
| Wave 1 | 22 | Mostly Memgraph/Lake Post-Seal scaffold plus provenance |
| Wave 2 | 7 | Lake Post-Seal story graph scaffold plus provenance |
| Wave 3 | 6 | Lake Post-Seal species/public-history scaffold plus provenance |
| Wave 4 | 2 | Deferred analytics reference |
| Wave 5 | 16 | Retrieval/pgvector scaffold plus provenance |
| Wave 6 | 40 | Deferred media/visual-AI reference and implementation provenance |
| Wave 7 | 3 | Routing/workflow scaffold plus provenance |
| Wave 8 | 4 | Deferred telemetry reference |
| Wave 9 | 5 | Deferred sensitive-domain reference |

Second-pass family addition:

| Family | Cleanup posture |
|---|---|
| Intelligent Harness Phases 1-12 | Keep Phase 1 source/scope docs and Phase 8-12 active UI/workflow references; Phase 2-7 individual proposal docs were removed after consolidation by the Phase 1-7 closeout. |
| Intelligent Harness Phases 13-20 | Active observation workflow references. Keep easiest to find until operational testing stabilizes. |
| Phase 19 checklist/readback | Active operator proof and checklist. |
| Phase 20 writeback proposal | Active approval-gated canonical observation writeback design. |
| Phase 21 follow-up proposal | Active next workflow proposal for Content agent conversational follow-up. |
| Post-observation Memgraph refresh proposal | Proposed App-owned derived refresh helper after approved observation insert/readback; not implemented. |

## Classification Labels

| Label | Meaning | Action now |
|---|---|---|
| Active control | Current steering doc for the Intelligent Harness path. | Keep active. |
| Active scaffold | Still useful for Phase 1/2/3 source mapping, Memgraph projection, retrieval, routing, or first-scope design. | Keep active until replacement by harness implementation docs. |
| Deferred lane reference | Not active core build work, but useful for Phase 8/later upgrade planning. | Keep available; do not let it steer Phase 1. |
| Provenance preserve | Approval, implementation, readback, or decision history. | Preserve; may later archive with links. |
| Superseded reference | Useful background but not an active build instruction. | Candidate for archive/superseded labeling after review. |
| Archive candidate after review | Likely no longer needed in active docs once provenance is summarized and linked. | Do not move until Josue approves. |

## Cleanup Rule

Cleanup means:

- classify;
- preserve;
- archive;
- supersede;
- summarize;
- link forward to the Intelligent Harness path.

Cleanup does not mean:

- delete useful provenance;
- remove approval records;
- remove implementation readbacks;
- hide source evidence;
- erase how the current Intelligent Harness direction was reached.

## Recommended Active Set

These are the documents that should remain easiest to find during the next implementation session.

### Active Control

| File | Reason |
|---|---|
| `operation_living_intelligence_intelligent_harness_master_plan_2026-05-17.md` | Current active plan. |
| `operation_living_intelligence_intelligent_harness_session_closeout_2026-05-18.md` | Current session handoff and cleanup guidance. |
| `operation_living_intelligence_intelligent_harness_session_closeout_2026-05-17.md` | Prior Intelligent Harness handoff retained as provenance. |
| `operation_living_intelligence_ih_observation_workflow_closeout_2026-05-18.md` | Proven local-to-canonical observation workflow closeout. |
| `operation_living_intelligence_active_reference_map_2026-05-18.md` | Compact entry point for active and deferred OLI references. |

### Active Observation Workflow References

| File | Reason |
|---|---|
| `operation_living_intelligence_ih_phase_13_observation_input_runner_proposal_2026-05-18.md` | App-side local observation input runner design. |
| `operation_living_intelligence_ih_phase_14_intelligence_tab_latest_suggestion_run_loader_proposal_2026-05-18.md` | Intelligence tab latest-run loader design. |
| `operation_living_intelligence_ih_phase_15_content_agent_observation_parser_to_phase_13_input_proposal_2026-05-18.md` | Content-owned parser ownership decision. |
| `operation_living_intelligence_ih_phase_16_content_audit_to_phase_13_app_bridge_proposal_2026-05-18.md` | Content audit to App input bridge design. |
| `operation_living_intelligence_ih_phase_17_content_raw_observation_intake_command_proposal_2026-05-18.md` | Content raw observation intake command design. |
| `operation_living_intelligence_ih_phase_19_local_observation_intake_pipeline_runner_proposal_2026-05-18.md` | Local no-write pipeline runner design. |
| `operation_living_intelligence_ih_phase_19_local_observation_intake_pipeline_checklist_2026-05-18.md` | Operator checklist for local pipeline use. |
| `operation_living_intelligence_ih_phase_19_pipeline_readback_20260518_123237.md` | First pipeline readback proof. |
| `operation_living_intelligence_ih_phase_20_approved_observation_writeback_from_content_intake_draft_proposal_2026-05-18.md` | Approval-gated canonical observation writeback design. |
| `operation_living_intelligence_ih_phase_21_content_agent_intelligent_follow_up_workflow_proposal_2026-05-18.md` | Content agent conversational follow-up workflow proposal. |
| `operation_living_intelligence_ih_post_observation_memgraph_refresh_proposal_2026-05-18.md` | Derived post-observation Memgraph refresh proposal. |

### Active Scaffold For Phase 1: Supabase Source Map

| File | Reason |
|---|---|
| `operation_living_intelligence_supabase_schema_audit_2026-05-13.md` | Early schema/source inventory. |
| `operation_living_intelligence_task_409_schema_data_audit_2026-05-15.md` | Implementation-grade source audit gate. |
| `operation_living_intelligence_deferred_return_map_2026-05-15.md` | Keeps deferred analytics/media/routing/telemetry/sensitive lanes bounded. |
| `operation_living_intelligence_waves_1_9_consolidation_next_phase_map_2026-05-16.md` | Transition map from wave work into new path. |

### Active Scaffold For Phase 2/3: Memgraph And Projection

| File | Reason |
|---|---|
| `operation_living_intelligence_wave_1_living_atlas_graph_seed_handoff_2026-05-15.md` | First Lake Post-Seal graph seed handoff. |
| `operation_living_intelligence_wave_1_no_write_dry_run_proposal_2026-05-15.md` | Source-to-graph dry-run scope and boundaries. |
| `operation_living_intelligence_wave_1_memgraph_import_readiness_review_2026-05-15.md` | Memgraph readiness notes and preconditions. |
| `operation_living_intelligence_wave_1_memgraph_import_readback_2026-05-15.md` | Proven Memgraph import/readback reference. |
| `operation_living_intelligence_wave_1_sql_metadata_review_2026-05-15.md` | SQL metadata review useful for source-map rigor. |
| `operation_living_intelligence_wave_1_durable_projection_design_2026-05-15.md` | Durable projection design reference. |

### Active Scaffold For Observation-To-Story And Species Context

| File | Reason |
|---|---|
| `operation_living_intelligence_wave_2_content_story_graph_design_2026-05-15.md` | Story graph model reference. |
| `operation_living_intelligence_wave_2_lake_post_seal_packet_selection_2026-05-15.md` | First bounded story packet. |
| `operation_living_intelligence_wave_2_lake_post_seal_source_availability_review_2026-05-15.md` | Source availability for story scope. |
| `operation_living_intelligence_wave_2_readback_review_2026-05-15.md` | Readback questions useful for Phase 4 query design. |
| `operation_living_intelligence_wave_3_species_public_history_design_2026-05-15.md` | Species/public-history model reference. |
| `operation_living_intelligence_wave_3_lake_post_seal_source_availability_review_2026-05-15.md` | Species/source availability for first scope. |
| `operation_living_intelligence_wave_3_readback_review_2026-05-15.md` | Species/public-history readback questions useful for Phase 4 query design. |

### Active Scaffold For Retrieval And GraphRAG

| File | Reason |
|---|---|
| `operation_living_intelligence_wave_5_retrieval_layer_design_2026-05-15.md` | Retrieval baseline design. |
| `operation_living_intelligence_wave_5_retrieval_corpus_inventory_citation_readiness_review_2026-05-15.md` | Corpus/source readiness for retrieval. |
| `operation_living_intelligence_wave_5_retrieval_baseline_usefulness_review_2026-05-15.md` | Current local retrieval usefulness decision. |
| `operation_living_intelligence_wave_5_vector_embedding_decision_brief_2026-05-16.md` | pgvector/embedding decision context. |
| `operation_living_intelligence_wave_5_vector_embedding_app_review_synthesis_2026-05-16.md` | App review synthesis for embedding path. |
| `operation_living_intelligence_wave_5_local_vector_proxy_readback_review_2026-05-16.md` | No-embedding vector proxy usefulness record. |

### Active Scaffold For Workflow/Routing

| File | Reason |
|---|---|
| `operation_living_intelligence_wave_7_planner_agent_routing_graph_design_2026-05-15.md` | Agent routing/work ownership graph reference. |
| `operation_living_intelligence_wave_7_source_readiness_review_2026-05-15.md` | Planner/routing source readiness reference. |

## Deferred Lane References

These files should not steer Phase 1, but should remain easy to recover for Phase 8 and later upgrades.

| Lane | Files |
|---|---|
| Analytics warehouse | `operation_living_intelligence_wave_4_youtube_analytics_warehouse_design_2026-05-15.md`; `operation_living_intelligence_wave_4_youtube_analytics_source_auth_readiness_review_2026-05-15.md` |
| Visual AI/media | All Wave 6 files listed below; keep as deferred media adapter, local/private model, runtime, and review-gate provenance. |
| Telemetry | All Wave 8 files listed below; keep as deferred telemetry/source-review reference. |
| CRM/Financials/sensitive data | All Wave 9 files listed below; keep as deferred sensitive-domain reference. |

## Per-Family Cleanup Classification

### General OLI Files

| File | Classification | Recommendation |
|---|---|---|
| `operation_living_intelligence_intelligent_harness_master_plan_2026-05-17.md` | Active control | Keep active. |
| `operation_living_intelligence_intelligent_harness_session_closeout_2026-05-17.md` | Active control | Keep active until next closeout replaces it. |
| `operation_living_intelligence_deferred_return_map_2026-05-15.md` | Active scaffold / deferred lane reference | Keep active until Phase 8 upgrade backlog is stable. |
| `operation_living_intelligence_planner_alignment_readback_2026-05-16.md` | Archived provenance | Moved to `archive/superseded/operation-living-intelligence/`; active routing should use live Planner state and current Company reports. |
| `operation_living_intelligence_planner_program_2026-05-13.md` | Provenance preserve | Later archive candidate after program setup provenance is linked. |
| `operation_living_intelligence_session_closeout_2026-05-15.md` | Provenance preserve | Later archive candidate; large wave-session record. |
| `operation_living_intelligence_session_closeout_2026-05-16.md` | Archived provenance | Moved to `archive/superseded/operation-living-intelligence/`; active routing should use the 2026-05-18 active reference map, current closeouts, consolidation map, and deferred return map. |
| `operation_living_intelligence_supabase_schema_audit_2026-05-13.md` | Active scaffold | Keep for Phase 1 source map. |
| `operation_living_intelligence_task_409_schema_data_audit_2026-05-15.md` | Active scaffold | Keep for Phase 1 source map. |
| `operation_living_intelligence_waves_1_9_consolidation_next_phase_map_2026-05-16.md` | Active scaffold / superseded reference | Keep until Phase 1 source map and Phase 2 Memgraph plan supersede it. |

### Wave 1: Graph / Memgraph / Projection

| File | Classification | Recommendation |
|---|---|---|
| `operation_living_intelligence_wave_1_living_atlas_graph_seed_handoff_2026-05-15.md` | Active scaffold | Keep for Phase 1/2. |
| `operation_living_intelligence_wave_1_no_write_dry_run_proposal_2026-05-15.md` | Active scaffold | Keep for Phase 1/2. |
| `operation_living_intelligence_wave_1_memgraph_import_readiness_review_2026-05-15.md` | Active scaffold | Keep for Phase 2. |
| `operation_living_intelligence_wave_1_memgraph_import_readback_2026-05-15.md` | Active scaffold / provenance | Keep for Phase 2 readback pattern. |
| `operation_living_intelligence_wave_1_sql_metadata_review_2026-05-15.md` | Active scaffold | Keep for Phase 1 source rigor. |
| `operation_living_intelligence_wave_1_durable_projection_design_2026-05-15.md` | Active scaffold | Keep for Phase 3 projection design. |
| `operation_living_intelligence_wave_1_jsonl_dry_run_generation_2026-05-15.md` | Provenance preserve | Later archive candidate after Phase 2/3 reference summary. |
| `operation_living_intelligence_wave_1_jsonl_readback_helper_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_1_app_design_review_packet_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_1_app_design_review_readiness_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_1_app_regeneration_helper_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_1_cypher_import_file_generation_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_1_manual_projection_helper_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_1_memgraph_import_proposal_2026-05-15.md` | Superseded reference | Keep until Phase 2 setup plan supersedes it. |
| `operation_living_intelligence_wave_1_memgraph_runtime_check_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_1_memgraph_smoke_helper_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_1_pilot_dependency_decision_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_1_public_reuse_boundary_2026-05-15.md` | Active scaffold | Keep for public-output gates. |
| `operation_living_intelligence_wave_1_1_public_reuse_sidecar_proposal_2026-05-15.md` | Superseded reference | Later archive candidate after public gates are summarized. |
| `operation_living_intelligence_wave_1_1_public_reuse_sidecar_generation_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_1_sql_metadata_json_packet_2026-05-15.md` | Provenance preserve | Later archive candidate after source-map needs are extracted. |
| `operation_living_intelligence_wave_1_completion_and_next_waves_2026-05-15.md` | Superseded reference | Later archive candidate; replaced by Intelligent Harness plan. |

### Wave 2: Content Story Graph

| File | Classification | Recommendation |
|---|---|---|
| `operation_living_intelligence_wave_2_content_story_graph_design_2026-05-15.md` | Active scaffold | Keep for observation-to-story workflow. |
| `operation_living_intelligence_wave_2_lake_post_seal_packet_selection_2026-05-15.md` | Active scaffold | Keep for first bounded scope. |
| `operation_living_intelligence_wave_2_lake_post_seal_source_availability_review_2026-05-15.md` | Active scaffold | Keep for Phase 1. |
| `operation_living_intelligence_wave_2_no_write_app_implementation_proposal_2026-05-15.md` | Superseded reference | Later archive candidate after Phase 3 helper spec replaces it. |
| `operation_living_intelligence_wave_2_app_design_review_packet_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_2_jsonl_readback_helper_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_2_readback_review_2026-05-15.md` | Active scaffold | Keep for Phase 4 query examples. |

### Wave 3: Species And Public History

| File | Classification | Recommendation |
|---|---|---|
| `operation_living_intelligence_wave_3_species_public_history_design_2026-05-15.md` | Active scaffold | Keep for species/public-history entity model. |
| `operation_living_intelligence_wave_3_lake_post_seal_source_availability_review_2026-05-15.md` | Active scaffold | Keep for Phase 1. |
| `operation_living_intelligence_wave_3_no_write_app_implementation_proposal_2026-05-15.md` | Superseded reference | Later archive candidate after Phase 3 helper spec replaces it. |
| `operation_living_intelligence_wave_3_app_design_review_packet_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_3_jsonl_readback_helper_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_3_readback_review_2026-05-15.md` | Active scaffold | Keep for Phase 4 query examples. |

### Wave 4: YouTube Analytics Warehouse

| File | Classification | Recommendation |
|---|---|---|
| `operation_living_intelligence_wave_4_youtube_analytics_warehouse_design_2026-05-15.md` | Deferred lane reference | Keep for Phase 8 analytics warehouse. |
| `operation_living_intelligence_wave_4_youtube_analytics_source_auth_readiness_review_2026-05-15.md` | Deferred lane reference / provenance | Keep for Phase 8 analytics source gate. |

### Wave 5: Retrieval / Vector / Embedding

| File | Classification | Recommendation |
|---|---|---|
| `operation_living_intelligence_wave_5_retrieval_layer_design_2026-05-15.md` | Active scaffold | Keep for Phase 5. |
| `operation_living_intelligence_wave_5_retrieval_corpus_inventory_citation_readiness_review_2026-05-15.md` | Active scaffold | Keep for retrieval source map. |
| `operation_living_intelligence_wave_5_retrieval_baseline_usefulness_review_2026-05-15.md` | Active scaffold | Keep for retrieval baseline decision. |
| `operation_living_intelligence_wave_5_vector_embedding_decision_brief_2026-05-16.md` | Active scaffold | Keep for pgvector decision. |
| `operation_living_intelligence_wave_5_vector_embedding_app_review_synthesis_2026-05-16.md` | Active scaffold | Keep for App/pgvector boundary. |
| `operation_living_intelligence_wave_5_local_vector_proxy_readback_review_2026-05-16.md` | Active scaffold | Keep for no-embedding comparison. |
| `operation_living_intelligence_wave_5_no_write_app_manifest_chunk_export_proposal_2026-05-15.md` | Superseded reference | Later archive candidate after Phase 5 packet spec. |
| `operation_living_intelligence_wave_5_app_design_review_packet_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_5_retrieval_manifest_chunk_helper_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_5_evaluation_tuning_plan_2026-05-15.md` | Superseded reference | Keep until Phase 5 answer-quality checks replace it. |
| `operation_living_intelligence_wave_5_expected_status_helper_update_proposal_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_5_expected_status_helper_update_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_5_expected_status_readback_review_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_5_vector_embedding_app_design_review_packet_2026-05-16.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_5_local_vector_evaluation_helper_proposal_2026-05-16.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_5_local_vector_evaluation_helper_2026-05-16.md` | Provenance preserve | Later archive candidate. |

### Wave 6: Media And Visual AI

Wave 6 is a deferred Phase 8 media/visual-AI lane, not the active core build path.

| File | Classification | Recommendation |
|---|---|---|
| `operation_living_intelligence_wave_6_media_visual_ai_readiness_design_2026-05-15.md` | Deferred lane reference | Keep for Phase 8 media adapter. |
| `operation_living_intelligence_wave_6_source_runtime_readiness_review_2026-05-15.md` | Deferred lane reference | Keep for media source/runtime gate. |
| `operation_living_intelligence_wave_6_model_route_decision_packet_2026-05-16.md` | Deferred lane reference | Keep for future model route review. |
| `operation_living_intelligence_wave_6_gpu_short_video_usefulness_performance_review_2026-05-16.md` | Deferred lane reference | Keep as current local video baseline note. |
| `operation_living_intelligence_wave_6_gpu_still_image_usefulness_performance_review_2026-05-16.md` | Deferred lane reference | Keep as local still-image usefulness note. |
| `operation_living_intelligence_wave_6_decord_short_video_usefulness_review_2026-05-16.md` | Deferred lane reference | Keep as CPU/Decord route note. |
| All remaining Wave 6 approval packets, preflight packets, implementation readbacks, and helper records | Provenance preserve | Later archive candidates after a Phase 8 media adapter summary is created. |

Wave 6 files in the remaining provenance set:

- `operation_living_intelligence_wave_6_app_design_review_packet_2026-05-15.md`
- `operation_living_intelligence_wave_6_cpu_only_short_video_implementation_approval_packet_2026-05-16.md`
- `operation_living_intelligence_wave_6_cpu_only_short_video_pilot_readback_2026-05-16.md`
- `operation_living_intelligence_wave_6_decord_backend_short_video_approval_packet_2026-05-16.md`
- `operation_living_intelligence_wave_6_decord_backend_short_video_pilot_readback_2026-05-16.md`
- `operation_living_intelligence_wave_6_gpu_cuda_runtime_proof_app_design_review_packet_2026-05-16.md`
- `operation_living_intelligence_wave_6_gpu_cuda_runtime_proof_decision_packet_2026-05-16.md`
- `operation_living_intelligence_wave_6_gpu_model_load_proof_readback_2026-05-16.md`
- `operation_living_intelligence_wave_6_gpu_qwen3_vl_stack_proof_approval_packet_2026-05-16.md`
- `operation_living_intelligence_wave_6_gpu_qwen3_vl_stack_proof_readback_2026-05-16.md`
- `operation_living_intelligence_wave_6_gpu_short_video_implementation_approval_packet_2026-05-16.md`
- `operation_living_intelligence_wave_6_gpu_short_video_proof_readback_2026-05-16.md`
- `operation_living_intelligence_wave_6_gpu_still_image_inference_approval_packet_2026-05-16.md`
- `operation_living_intelligence_wave_6_gpu_still_image_inference_readback_2026-05-16.md`
- `operation_living_intelligence_wave_6_gpu_torchvision_compat_proof_readback_2026-05-16.md`
- `operation_living_intelligence_wave_6_media_preflight_policy_and_tooling_proposal_2026-05-16.md`
- `operation_living_intelligence_wave_6_model_route_app_design_review_packet_2026-05-16.md`
- `operation_living_intelligence_wave_6_model_route_feasibility_preflight_approval_packet_2026-05-16.md`
- `operation_living_intelligence_wave_6_model_route_feasibility_preflight_readback_2026-05-16.md`
- `operation_living_intelligence_wave_6_no_video_gpu_cuda_runtime_proof_approval_packet_2026-05-16.md`
- `operation_living_intelligence_wave_6_no_video_gpu_cuda_runtime_proof_readback_2026-05-16.md`
- `operation_living_intelligence_wave_6_official_route_recheck_and_route_selection_packet_2026-05-16.md`
- `operation_living_intelligence_wave_6_phase_a_media_preflight_helper_2026-05-16.md`
- `operation_living_intelligence_wave_6_phase_b_media_stream_metadata_approval_packet_2026-05-16.md`
- `operation_living_intelligence_wave_6_phase_b_media_stream_metadata_readback_2026-05-16.md`
- `operation_living_intelligence_wave_6_preflight_implementation_readiness_checklist_2026-05-16.md`
- `operation_living_intelligence_wave_6_qwen3_vl_local_pilot_implementation_approval_packet_2026-05-16.md`
- `operation_living_intelligence_wave_6_qwen3_vl_local_pilot_readback_2026-05-16.md`
- `operation_living_intelligence_wave_6_qwen3_vl_prompt_hardened_rerun_readback_2026-05-16.md`
- `operation_living_intelligence_wave_6_qwen3_vl_prompt_hardening_usefulness_review_2026-05-16.md`
- `operation_living_intelligence_wave_6_runtime_backend_preflight_approval_packet_2026-05-16.md`
- `operation_living_intelligence_wave_6_runtime_backend_preflight_readback_2026-05-16.md`
- `operation_living_intelligence_wave_6_video_gpu_runtime_app_design_review_packet_2026-05-16.md`
- `operation_living_intelligence_wave_6_video_gpu_runtime_decision_packet_2026-05-16.md`

### Wave 7: Planner And Agent Routing

| File | Classification | Recommendation |
|---|---|---|
| `operation_living_intelligence_wave_7_planner_agent_routing_graph_design_2026-05-15.md` | Active scaffold | Keep for WorkflowProvider and routing design. |
| `operation_living_intelligence_wave_7_source_readiness_review_2026-05-15.md` | Active scaffold / provenance | Keep until Phase 4/5 workflow source map is complete. |
| `operation_living_intelligence_wave_7_app_design_review_packet_2026-05-15.md` | Provenance preserve | Later archive candidate. |

### Wave 8: Telemetry

| File | Classification | Recommendation |
|---|---|---|
| `operation_living_intelligence_wave_8_telemetry_summaries_design_2026-05-15.md` | Deferred lane reference | Keep for Phase 8/analytics/telemetry upgrade. |
| `operation_living_intelligence_wave_8_source_readiness_review_2026-05-15.md` | Deferred lane reference / provenance | Keep until telemetry adapter is specified. |
| `operation_living_intelligence_wave_8_hardware_app_web_design_review_packet_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_8_domain_review_synthesis_2026-05-15.md` | Deferred lane reference | Keep for later owner review. |

### Wave 9: CRM, Financials, Sensitive Domains

| File | Classification | Recommendation |
|---|---|---|
| `operation_living_intelligence_wave_9_crm_financials_sensitive_domains_design_2026-05-15.md` | Deferred lane reference | Keep for Phase 8 sensitive-data upgrade. |
| `operation_living_intelligence_wave_9_source_privacy_readiness_review_2026-05-15.md` | Deferred lane reference | Keep for sensitive-data gates. |
| `operation_living_intelligence_wave_9_growth_financials_app_web_owner_review_packet_2026-05-15.md` | Provenance preserve | Later archive candidate. |
| `operation_living_intelligence_wave_9_owner_review_packet_2026-05-15.md` | Removed leaf file | Removed after supersession by the Growth/Financials/App/Web owner-review packet and owner-review synthesis. |
| `operation_living_intelligence_wave_9_owner_review_synthesis_2026-05-15.md` | Deferred lane reference / provenance | Keep for later owner review. |

## Recommended Next Cleanup Action

The compact replacement map now exists:

```text
domains/company/operation_living_intelligence_active_reference_map_2026-05-18.md
```

Before additional moves or deletions, use that map as the active entry point.

The next physical cleanup pass can then classify batches as:

- keep active;
- keep as deferred reference;
- preserve as provenance;
- archive candidate after review;
- superseded reference after review.

Additional file movement should remain batch-scoped and explicitly reviewed against active references.

Recommended guardrails for the next physical cleanup batch:

- keep all active control and active observation workflow references in place;
- remove only old proposal/readback files already summarized by a retained closeout, synthesis, or active reference;
- do not archive Phase 13/19/20/21 files until two more real observations prove the current operator flow;
- do not archive Lake Post-Seal graph/story/species files until the regression fixture contract is written down in App/Company terms.

## Not Changed

This physical cleanup pass did not:

- update Planner;
- change Supabase;
- change App runtime;
- set up Memgraph;
- create App or harness generated outputs;
- change public output;
- change canonical records.
