---
id: operation_living_intelligence_ih_phase_16_content_audit_to_phase_13_app_bridge_proposal_2026-05-18
title: Operation Living Intelligence Intelligent Harness Phase 16 Content Audit To Phase 13 App Bridge Proposal
domain: company_operations
last_updated: 2026-05-18
tags: [operation-living-intelligence, intelligent-harness, phase-16, content-audit, app-bridge, phase-13-input, local, no-write]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 16 Content Audit To Phase 13 App Bridge Proposal

## Purpose

Phase 15 created a Content-owned observation intake audit draft. Phase 16 should define the safe bridge that converts an explicitly approved Content audit draft into a Phase 13-compatible App input JSON.

This bridge is not approval to write Supabase, Planner, Memgraph, media metadata, public output, or canonical records. It only creates a local App input file for the existing no-write Phase 13 runner.

## Source And Target

Approved source draft for the first bridge test:

```text
M:\miniBIOTA\miniBIOTA_Content\audits\observation_intake\2026-05-16_grasshopper_legume_vine_followup.json
```

Approved target folder:

```text
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\inputs
```

Recommended output file:

```text
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\inputs\2026-05-16_grasshopper_legume_vine_followup.json
```

Optional bridge readback files:

```text
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\inputs\2026-05-16_grasshopper_legume_vine_followup.bridge_readback.json
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\inputs\2026-05-16_grasshopper_legume_vine_followup.bridge_readback.md
```

## Recommended Bridge Ownership

Recommendation:

```text
App-owned helper, reading Content audit drafts.
```

Reason:

- the output is an App-owned Phase 13 input fixture;
- Phase 13 runner is App-owned;
- App can validate its own input contract before writing a fixture;
- Content remains owner of the audit draft and raw wording;
- the bridge can preserve Content provenance while keeping App input generation explicit and local.

This does not make the App the owner of raw observation parsing. It only owns the conversion into its runner input shape.

## Proposed Helper File

Create:

```text
M:\miniBIOTA\miniBIOTA_App\tools\bridge-oli-content-audit-to-phase13-input.js
```

The helper should support:

```text
node tools/bridge-oli-content-audit-to-phase13-input.js --input M:\miniBIOTA\miniBIOTA_Content\audits\observation_intake\2026-05-16_grasshopper_legume_vine_followup.json
```

Do not trigger Phase 13 from the bridge.

## Required Source Validation

The bridge must verify the source is a Content parser draft, not canonical data.

Required:

- `parser_status: pass_phase15_content_observation_parser_audit_draft_ready`;
- `source_type: content_agent_observation_parser_draft`;
- `raw_text`;
- `text`;
- `observation_title`;
- `observed_at_candidate`;
- `duplicate_check_required`;
- `routing_review_required`;
- `supabase_write_status: not_approved`;
- `planner_write_status: not_approved`;
- `canonical_write_status: not_approved`;
- `public_use_status: blocked`;
- `app_fixture_output_status: deferred`;
- `phase13_trigger_status: not_triggered`.

Preserve review flags:

- `duplicate_check_required`;
- `routing_review_required`;
- `research_review_required` when present.

The bridge should allow `date_review_required: true` but must carry that flag into review metadata.

## Fields That Must Not Appear In Source Or Output

The bridge should reject source or output if any of these are present with non-null values:

- `species_id`;
- `biome_id`;
- `system_id`;
- `observation_id`;
- `story_thread_id`;
- `story_beat_id`;
- `open_loop_id`;
- `calendar_id`;
- `pipeline_id`;
- `chronicle_id`;
- public claim approval;
- media metadata;
- Research confidence;
- canonical ecology conclusions.

## Field Mapping

Map Content draft to Phase 13 input:

| Content audit field | Phase 13 input field |
|---|---|
| `source_type` | `source_type: content_audit_bridge_input` |
| `observation_title` | `observation_title` |
| `observed_at_candidate` | `observed_at` |
| `text` | `text` |
| `biome_hint` | `biome_hint` |
| `species_hint` | `species_hint` |
| `media_note` | `media_note` |
| optional bridge value | `media_file_or_path` |
| constant | `writeback: none` |

The bridge should preserve source provenance:

```json
"content_audit_source_path": "M:\\miniBIOTA\\miniBIOTA_Content\\audits\\observation_intake\\2026-05-16_grasshopper_legume_vine_followup.json"
```

## Review-Only Metadata To Preserve

Carry these into the App input as metadata fields, not canonical claims:

- `raw_text`;
- `observed_at_raw_phrase`;
- `date_resolution_note`;
- `date_review_required`;
- `behavior_hint`;
- `plant_or_object_hint`;
- `possible_story_thread_hint`;
- `possible_open_loop_hint`;
- `claim_cautions`;
- `uncertainty`;
- `duplicate_check_required`;
- `routing_review_required`;
- `research_review_required`;
- `supabase_write_status`;
- `planner_write_status`;
- `canonical_write_status`;
- `public_use_status`;
- `content_parser_status`;
- `bridge_status`.

Phase 13 may ignore extra metadata fields today, but they should remain available for future UI/readback.

## Generated App Input Tracking

Recommendation:

```text
Track generated App input fixtures in git by default.
```

Reason:

- the source Content audit draft is tracked;
- the App input is not canonical data;
- it is a reproducible local bridge artifact;
- tracking it makes the review chain visible before Phase 13 suggestion generation.

Use local-only/ignored output only for sensitive observation content by explicit exception.

## Bridge Readback

Generate bridge readback JSON/Markdown if implementation effort is small.

Recommended readback content:

- source Content audit path;
- output App input path;
- mapped fields;
- review-only metadata preserved;
- blocked statuses;
- confirmation Phase 13 was not triggered;
- confirmation no canonical systems changed.

Recommended bridge status:

```text
pass_phase16_content_audit_to_phase13_bridge_ready
```

## Phase 13 Execution

Phase 13 should remain manual after bridge output is created.

Manual command:

```text
node tools/run-oli-ih-phase13-observation-input-runner.js --input fixtures/operation_living_intelligence/intelligent_harness/phase_13_observation_input_runner/lake_post_seal/inputs/2026-05-16_grasshopper_legume_vine_followup.json
```

Do not run this automatically in Phase 16.

Reason:

- bridge conversion and suggestion generation remain separate reviewable steps;
- the operator can inspect the App input first;
- no UI/run automation is introduced.

## Blocked Work

Phase 16 remains blocked from:

- Supabase writes;
- Supabase queries;
- Planner writes;
- Memgraph writes;
- Memgraph query/import/reset behavior;
- pgvector;
- public output;
- media metadata writes;
- canonical writeback;
- active approve/reject/correct actions;
- Phase 13 auto-run;
- App runtime changes;
- assigning canonical IDs;
- approving public claims.

## Validation Checks

Implementation should confirm:

- Content audit source exists;
- source is a Phase 15 parser draft;
- source blocked/not-approved statuses are intact;
- required review flags are present;
- disallowed ID/canonical fields are absent or null;
- output path is inside approved App fixture input folder;
- output file does not overwrite an existing file unless explicitly allowed;
- Phase 13 input required fields are present;
- `writeback: none`;
- review-only metadata is preserved;
- bridge readback is generated if scoped;
- Phase 13 is not triggered;
- no Supabase, Planner, Memgraph, media metadata, public output, or canonical systems changed.

## Stop Conditions

Stop implementation if:

- source draft is missing;
- source draft is not a Phase 15 parser draft;
- any blocked/not-approved status is missing or changed;
- public use is not blocked;
- disallowed ID/canonical fields are present;
- output would overwrite an existing App input without explicit approval;
- conversion would require Supabase lookup;
- conversion would require Planner write;
- conversion would require Memgraph;
- conversion would require App runtime changes;
- Phase 13 would need to run automatically.

## Recommendation

Implement Phase 16 as an App-owned local bridge helper that reads the approved Content audit draft and writes a Phase 13-compatible App input fixture, with optional bridge readback.

This keeps the chain clean:

```text
Content parser draft -> Content review artifact -> App bridge fixture -> manual Phase 13 runner -> Intelligence tab latest run
```

It remains local, no-write, bridge-only, and review-preserving.
