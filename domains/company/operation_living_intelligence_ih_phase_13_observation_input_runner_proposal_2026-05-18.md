---
id: operation_living_intelligence_ih_phase_13_observation_input_runner_proposal_2026-05-18
title: Operation Living Intelligence Intelligent Harness Phase 13 Observation Input Runner Proposal
domain: company_operations
last_updated: 2026-05-18
tags: [operation-living-intelligence, intelligent-harness, phase-13, observation-input-runner, auto-linker, local, no-write]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 13 Observation Input Runner Proposal

## Purpose

Phase 12 made the Intelligence tab review surface compact enough to use. Phase 13 should move beyond the hardcoded grasshopper test by defining a safe way for Josue to provide a new observation to the auto-linker.

The first version should remain local, no-write, suggestion-only, and file-based. It should prove the daily workflow before adding an App text box or any approval/writeback path.

## Recommendation

Use a local JSON input file and local helper first.

Recommended first input method:

```text
local JSON file
```

Reason:

- it is structured enough to validate before running;
- it avoids App runtime input complexity;
- it avoids IPC/preload/main-process changes;
- it keeps the workflow reviewable in git/local files;
- it lets the auto-linker run repeatedly without touching Supabase, Planner, Memgraph, or media metadata.

Do not start with an App text box. The text box should come later after the file-based runner proves the right input schema, output shape, and latest-run selection pattern.

## Implementation Shape

Recommended first implementation:

```text
local helper only
```

The helper should:

1. Read one local observation input JSON file.
2. Validate required fields.
3. Compare the observation against the existing local harness artifacts.
4. Generate auto-link suggestions into a new run-specific output folder.
5. Update or generate a local latest-run pointer file for the Intelligence tab to read later.

The Intelligence tab should not accept typed input yet. It can later load the latest suggestion run after a separate App integration approval.

## Observation Input Schema

Each observation input should contain:

```json
{
  "source_type": "local_observation_input",
  "observation_title": "Short human title",
  "observed_at": "2026-05-18",
  "text": "Observation text...",
  "biome_hint": null,
  "species_hint": null,
  "media_note": null,
  "media_ref": null,
  "writeback": "none"
}
```

Required fields:

- `source_type`;
- `observation_title`;
- `observed_at`;
- `text`;
- `writeback: none`.

Optional fields:

- `biome_hint`;
- `species_hint`;
- `media_note`;
- `media_ref`.

`media_ref` may be a local filename/path/id string, but it must not write media metadata or imply public media approval.

## Run ID And Naming

Every run should get:

- `run_id`;
- `generated_at`;
- `observation_title`;
- `input_path`;
- `output_path`.

Recommended run ID format:

```text
YYYYMMDD_HHMMSS_slugified_observation_title
```

Example:

```text
20260518_143012_snail_egg_cluster_observation
```

This avoids overwriting the existing grasshopper test and makes every output traceable.

## Proposed Input Path

Use a local fixture/intake folder:

```text
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\inputs
```

Example input file:

```text
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\inputs\new_observation_input.json
```

The implementation can support a `--input` argument so Josue can point the runner at any local JSON file in that intake shape.

## Proposed Output Path

Generate output under:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\runs
```

Each run should write to:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\runs\<run_id>
```

Generated files:

```text
auto_link_suggestions.json
auto_link_suggestions.md
validation_report.json
auto_link_manifest.json
suggestions.jsonl
evidence_readback.json
blocked_public_claim_warnings.json
```

Latest-run pointer:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\latest_suggestion_run.json
```

The latest pointer should contain:

```json
{
  "latest_run_id": "20260518_143012_snail_egg_cluster_observation",
  "latest_output_path": "M:\\miniBIOTA\\miniBIOTA_App\\out\\...",
  "latest_auto_link_suggestions_path": "M:\\miniBIOTA\\miniBIOTA_App\\out\\...\\auto_link_suggestions.json",
  "latest_validation_report_path": "M:\\miniBIOTA\\miniBIOTA_App\\out\\...\\validation_report.json",
  "latest_blocked_public_claim_warnings_path": "M:\\miniBIOTA\\miniBIOTA_App\\out\\...\\blocked_public_claim_warnings.json",
  "writeback": "none"
}
```

## Proposed Files

Likely App helper to create:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-ih-phase13-observation-input-runner.js
```

Likely local input fixture to create:

```text
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\inputs\new_observation_input.json
```

Possible later App files to edit, after helper proves useful:

```text
M:\miniBIOTA\miniBIOTA_App\js\intelligence\intelligence-dashboard.js
M:\miniBIOTA\miniBIOTA_App\js\intelligence\intelligence-dashboard-render.js
M:\miniBIOTA\miniBIOTA_App\css\app-intelligence.css
```

Do not edit App UI files in the first helper-only implementation unless separately approved.

## Auto-Linker Flow

The Phase 13 helper should:

1. Read the local observation input.
2. Validate the input schema.
3. Generate a run ID from timestamp plus observation title.
4. Read existing local harness artifacts:
   - Phase 4 `context_packet.json`;
   - Phase 5 `answer_packets.json`;
   - Phase 6 `review_queue.json`;
   - Phase 7 `dashboard_data.json`;
   - Phase 3 `query_results.json`.
5. Compare observation text and hints against current harness context.
6. Generate suggestion objects using the Phase 9 output shape.
7. Write only local output under the Phase 13 run folder.
8. Write or update `latest_suggestion_run.json`.
9. Validate no writeback, no public output, and no canonical write occurred.

The helper should not overwrite Phase 9 grasshopper output. Phase 9 remains a fixed proof fixture. Phase 13 outputs are run-specific.

## Intelligence Tab Handoff

Recommended first handoff:

- Phase 13 helper writes `latest_suggestion_run.json`.
- A later App UI proposal can update the Intelligence tab loader to read that pointer.
- If the pointer exists and validates, the tab can load the latest run.
- If the pointer is missing or invalid, the tab can fall back to the Phase 9 grasshopper test or show a local unavailable state.

Do not implement live refresh/rebuild buttons yet.

Do not let the Intelligence tab run the helper directly yet. A direct App-runner bridge should require a separate proposal because it may involve shell execution, IPC, preload/main-process changes, or runtime permissions.

## Blocked Work

Phase 13 remains blocked from:

- Supabase writes;
- Supabase queries;
- Planner writes;
- Memgraph writes;
- Memgraph query/import/reset behavior;
- pgvector;
- public output;
- media metadata writes;
- canonical writeback;
- active approve/reject/correct controls;
- App text-box input;
- App-triggered helper execution;
- graph expansion beyond local suggestion output.

## Validation Checks

Implementation should confirm:

- observation input exists;
- observation input has required fields;
- `writeback` is `none`;
- run ID is generated;
- output path is run-specific;
- existing grasshopper test output is not overwritten;
- suggestions are generated;
- every suggestion has reason, confidence, approval state, source references where available, and `writeback: none`;
- blocked/public warnings are preserved;
- `latest_suggestion_run.json` points to the new run;
- Intelligence tab can later identify the latest suggestion run from the pointer;
- no Supabase, Planner, Memgraph, media metadata, public output, or canonical systems changed.

Recommended helper validation output:

```text
status: pass_phase13_observation_input_runner_ready
```

Recommended commands after implementation:

```text
node tools/run-oli-ih-phase13-observation-input-runner.js --input fixtures/operation_living_intelligence/intelligent_harness/phase_13_observation_input_runner/lake_post_seal/inputs/new_observation_input.json
npm.cmd run validate:app
```

## Stop Conditions

Stop implementation if:

- the input file is missing or malformed;
- `writeback` is not `none`;
- the run would overwrite an existing output folder without explicit approval;
- suggestions cannot be generated from local artifacts;
- latest-run pointer cannot be written under the approved output folder;
- any Supabase, Planner, Memgraph, media metadata, public output, or canonical write path is introduced;
- App text entry or App-triggered execution becomes necessary.

## Recommendation

Implement Phase 13 as a local JSON input runner first.

This is the safest next step because it creates the daily observation intake workflow without making the desktop app responsible for execution, writeback, or canonical decisions. Once this proves useful, the next proposal can let the Intelligence tab read `latest_suggestion_run.json` and show the newest run instead of the fixed grasshopper test.
