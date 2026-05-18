---
id: operation_living_intelligence_ih_phase_19_local_observation_intake_pipeline_runner_proposal_2026-05-18
title: Operation Living Intelligence Intelligent Harness Phase 19 Local Observation Intake Pipeline Runner Proposal
domain: company_operations
last_updated: 2026-05-18
tags: [operation-living-intelligence, intelligent-harness, phase-19, observation-intake, local-pipeline, orchestration, no-write, suggestion-only]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 19 Local Observation Intake Pipeline Runner Proposal

## Purpose

Phase 17, Phase 18, Phase 16, Phase 13, and the Intelligence tab now prove the no-write observation intake chain can work end to end:

```text
raw observation
-> Content audit draft JSON/Markdown
-> App bridge to Phase 13 input
-> Phase 13 suggestions + latest_suggestion_run.json
-> Intelligence tab latest suggestion run display
```

Phase 19 should make that local chain easier to run without hiding the review boundaries that keep the system safe.

## Recommendation

Recommended first version:

```text
Thin Company-owned local pipeline orchestrator/checklist that calls the existing Content and App helpers.
```

Do not build a new combined parser/bridge/suggestion engine. The existing helpers already own their contracts:

- Content owns raw observation parsing and Content audit drafts.
- App owns the Content-audit bridge and Phase 13 suggestion runner.
- Company owns the cross-domain sequencing, stop gates, and operator readback.

This gives Josue one coordinated process while preserving separate step outputs and reviewability.

## Why Not One Combined Helper

A monolithic helper would be tempting, but it would blur ownership:

- Content parsing rules would move into Company or App.
- App bridge validation could be duplicated.
- Phase 13 safety checks could drift.
- The operator would lose a clean audit trail between parser draft, bridge fixture, and suggestions.

Phase 19 should coordinate, not replace.

## Proposed Workflow

First implementation should support two modes:

1. Checklist mode:
   - prints the exact commands for each step;
   - verifies expected paths;
   - does not execute subcommands.

2. Local run mode:
   - executes the existing helpers in sequence;
   - stops after the first failed validation;
   - records each command, output path, status, and safety check in a pipeline readback.

Suggested command shape:

```powershell
node tools/run-oli-ih-phase19-local-observation-intake-pipeline.js `
  --input M:\path\to\raw_observation.txt `
  --session-date 2026-05-18 `
  --mode run-local
```

No UI run button should be added in Phase 19.

## Ownership

Recommended ownership:

```text
Company owns the orchestration proposal and optional thin runner.
Content owns parser behavior and Content audit output.
App owns bridge behavior, Phase 13 input, Phase 13 suggestions, and latest_suggestion_run.json.
```

Recommended final pipeline helper location:

```text
M:\miniBIOTA\miniBIOTA_Company\tools\run-oli-ih-phase19-local-observation-intake-pipeline.js
```

Reason:

- it is cross-domain coordination;
- it should not transfer Content or App implementation ownership;
- it can call existing helpers without duplicating their logic;
- it can emit a Company-level pipeline readback for operator confidence.

If Company `tools/` is not an accepted helper surface, use a Company domain doc checklist first and defer the executable runner.

## Input

Safest first input:

```text
local text or Markdown file
```

Reason:

- avoids shell quoting problems with long observations;
- preserves raw wording better than command-line paste;
- allows optional source context and media note in the file;
- keeps the first pipeline local and auditable.

The runner may also support `--text` for quick tests, but file input should be the recommended normal path.

Recommended input examples:

```text
--input M:\miniBIOTA\miniBIOTA_Content\audits\observation_intake\incoming\2026-05-18_raw_observation.md
--session-date 2026-05-18
--source-context "Content agent pasted observation"
--media-note "captured video"
```

## Outputs

The pipeline should preserve the existing output surfaces:

Content parser outputs:

```text
M:\miniBIOTA\miniBIOTA_Content\audits\observation_intake\YYYY-MM-DD_<slug>.json
M:\miniBIOTA\miniBIOTA_Content\audits\observation_intake\YYYY-MM-DD_<slug>.md
```

App bridge outputs:

```text
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\inputs\<slug>.json
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\inputs\<slug>.bridge_readback.json
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\inputs\<slug>.bridge_readback.md
```

Phase 13 outputs:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\runs\<run_id>\
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\latest_suggestion_run.json
```

Optional Phase 19 Company readback:

```text
M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_ih_phase_19_pipeline_readback_<timestamp>.json
M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_ih_phase_19_pipeline_readback_<timestamp>.md
```

If generated pipeline readbacks become frequent, move them to a dedicated Company audit folder in a later proposal.

## Review Boundaries

The pipeline must preserve these meanings:

- Content parser draft is not canonical data.
- App bridge is not approval.
- Phase 13 suggestions are not approved links.
- Intelligence tab is read-only.
- Candidate media is not public proof.
- Review-required claims remain review-required.
- Blocked public claims remain blocked.

The pipeline readback should label each step:

```text
parser_draft_only
bridge_fixture_only
suggestions_only
latest_display_pointer_only
```

## Stop Conditions

Stop immediately if:

- parser command fails;
- parser output JSON/Markdown is missing;
- parser status is not a passing Phase 17/18 status;
- parser output has any Supabase/Planner/canonical status other than `not_approved`;
- parser output has `public_use_status` other than `blocked`;
- bridge command fails;
- bridge validation fails;
- bridge output is missing;
- Phase 13 command fails;
- Phase 13 validation fails;
- any `writeback` is not `none`;
- any `public_output` is `true`;
- any `canonical_writeback` is not `none`;
- any helper attempts to write Supabase, Planner, Memgraph, media metadata, public output, or canonical records;
- any active approve/reject/correct action is introduced.

## App Refresh

Do not automatically open or refresh the App in the first version.

Reason:

- the Intelligence tab already reads `latest_suggestion_run.json`;
- the operator can refresh/reopen the app manually;
- adding UI automation would expand scope into App runtime behavior;
- it is not needed to prove the local no-write chain.

The pipeline readback may end with:

```text
Refresh the Intelligence tab manually to view the latest suggestion run.
```

## Proposed Files

Implementation could create:

```text
M:\miniBIOTA\miniBIOTA_Company\tools\run-oli-ih-phase19-local-observation-intake-pipeline.js
```

Optional checklist document:

```text
M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_ih_phase_19_local_observation_intake_pipeline_checklist_2026-05-18.md
```

Optional generated readbacks:

```text
M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_ih_phase_19_pipeline_readback_<timestamp>.json
M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_ih_phase_19_pipeline_readback_<timestamp>.md
```

No Content or App helper logic should be duplicated. The runner should call:

```text
M:\miniBIOTA\miniBIOTA_Content\tools\parse-oli-raw-observation-intake.js
M:\miniBIOTA\miniBIOTA_App\tools\bridge-oli-content-audit-to-phase13-input.js
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-ih-phase13-observation-input-runner.js
```

## Validation Checks

The Phase 19 runner/checklist should confirm:

- input file exists or raw text is supplied;
- Content parser command completed;
- Content JSON and Markdown were created;
- Content parser status passed;
- raw text was preserved;
- Content statuses remain blocked/not approved;
- App bridge command completed;
- App bridge output and readback were created;
- bridge status passed;
- Phase 13 command completed;
- Phase 13 validation status passed;
- suggestions were generated;
- `latest_suggestion_run.json` points to the newest run;
- writeback remains `none`;
- public output remains `false`;
- canonical writeback remains `none`;
- no Supabase/Planner/Memgraph/media/public/canonical writes occurred;
- no approve/reject/correct actions were introduced.

## Blocked Work

Phase 19 remains blocked from:

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
- App UI run buttons;
- automatic App refresh/open behavior;
- duplicating parser, bridge, or Phase 13 implementation logic.

## Recommendation

Implement Phase 19 as a Company-owned thin local orchestrator with checklist mode first and local run mode second, calling existing Content and App helpers.

This keeps the flow easy:

```text
one coordinated local process
```

without weakening the safety model:

```text
Content parser draft -> App bridge fixture -> Phase 13 suggestions -> read-only Intelligence display
```

The chain remains local, no-write, suggestion-only, and separately reviewable.

