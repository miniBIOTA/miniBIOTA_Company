---
id: operation_living_intelligence_ih_phase_14_intelligence_tab_latest_suggestion_run_loader_proposal_2026-05-18
title: Operation Living Intelligence Intelligent Harness Phase 14 Intelligence Tab Latest Suggestion Run Loader Proposal
domain: company_operations
last_updated: 2026-05-18
tags: [operation-living-intelligence, intelligent-harness, phase-14, intelligence-tab, latest-suggestion-run, observation-review-mode, read-only, no-write]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 14 Intelligence Tab Latest Suggestion Run Loader Proposal

## Purpose

Phase 13 created a local Observation Input Runner and wrote a latest-run pointer. Phase 14 should update the Intelligence tab so Observation Review Mode can display the newest local suggestion run instead of being fixed to the Phase 9 grasshopper test output.

This phase only teaches the existing tab to read local generated files. It does not add a run button, text input, approve/reject/correct controls, Supabase writes, Planner writes, Memgraph writes, public output, media metadata writes, pgvector, or canonical writeback.

## Source

Primary latest-run pointer:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\latest_suggestion_run.json
```

The pointer references:

```text
auto_link_suggestions.json
validation_report.json
blocked_public_claim_warnings.json
```

Fallback Phase 9 test output:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_9_observation_auto_linker\lake_post_seal\grasshopper_legume_vine_test
```

## Recommended Loading Behavior

Use a pointer-first, read-only load sequence:

1. Load Phase 7 `dashboard_data.json` exactly as the Intelligence tab does now.
2. Try to load Phase 13 `latest_suggestion_run.json`.
3. Validate that the pointer status is `pass_phase13_observation_input_runner_ready`.
4. Validate that the pointed run folder exists by loading:
   - `latest_auto_link_suggestions_path`;
   - `latest_validation_report_path`;
   - `latest_blocked_public_claim_warnings_path`.
5. Validate that the run validation report passes.
6. Validate safety fields:
   - `writeback: none`;
   - `public_output: false`;
   - `canonical_writeback: none`.
7. Render Observation Review Mode from the Phase 13 run.
8. If Phase 13 pointer or run files are missing, fall back to Phase 9 test output with a visible fallback notice.

Do not call or run the Phase 13 helper from the UI. The Intelligence tab should only display files that already exist.

## Fallback Recommendation

Fallback to Phase 9 is recommended for the first implementation.

Reason:

- it keeps the Intelligence tab usable if no Phase 13 run exists yet;
- it preserves the known-good grasshopper proof fixture;
- it prevents a blank or broken Observation Review Mode;
- it makes stale/missing latest-run state obvious without blocking the whole dashboard.

Fallback notice:

```text
Latest Phase 13 suggestion run unavailable. Showing Phase 9 proof fixture.
```

If Phase 13 pointer exists but fails validation, show:

```text
Latest suggestion run failed validation. Showing Phase 9 proof fixture.
```

Do not silently fall back. The UI should always say which source it is showing.

## Files Likely To Edit

Likely edits:

```text
M:\miniBIOTA\miniBIOTA_App\js\intelligence\intelligence-dashboard.js
M:\miniBIOTA\miniBIOTA_App\js\intelligence\intelligence-dashboard-render.js
```

Possible CSS edit:

```text
M:\miniBIOTA\miniBIOTA_App\css\app-intelligence.css
```

Expected changes:

| File | Change |
|---|---|
| `js/intelligence/intelligence-dashboard.js` | Add Phase 13 latest pointer loading, validate pointed run files, preserve Phase 9 fallback |
| `js/intelligence/intelligence-dashboard-render.js` | Show current run metadata in Observation Review Mode |
| `css/app-intelligence.css` | Add small styles for run metadata/freshness/fallback notice if needed |

No new files are recommended.

## UI Fields To Show

At the top of Observation Review Mode, show compact run metadata:

- source mode: `Phase 13 latest suggestion run` or `Phase 9 fallback fixture`;
- run ID;
- observation title;
- observed date;
- generated timestamp;
- source path or output path;
- validation status;
- freshness note;
- writeback state.

Example:

```text
Source: Phase 13 latest suggestion run
Run: 20260518_102542_grasshopper_legume_vine_followup
Observation: Grasshopper Legume Vine Followup
Generated: 2026-05-18T10:25:42.834Z
Writeback: none
```

If fallback is active:

```text
Source: Phase 9 fallback fixture
Latest Phase 13 suggestion run unavailable. Showing Phase 9 proof fixture.
```

## Freshness And Staleness

The UI should prevent stale or missing run confusion by showing:

- the generated timestamp from the active suggestion source;
- whether Phase 13 latest-run pointer was used;
- if fallback was used, why;
- the latest output path or source path;
- validation status.

Optional first-version freshness wording:

```text
Generated from local files. Refresh requires running the Phase 13 helper outside the UI.
```

Do not add refresh/rebuild buttons.

## Read-Only Boundaries

This phase must remain:

- local;
- read-only;
- derived only;
- suggestion-only;
- no-write.

Blocked:

- no Supabase queries;
- no Supabase writes;
- no Planner writes;
- no Memgraph writes;
- no Memgraph query/import/reset behavior;
- no pgvector;
- no public output;
- no media metadata writes;
- no canonical writeback;
- no active approve/reject/correct controls;
- no App-triggered helper execution;
- no run button;
- no observation text input.

## Validation Checks

Implementation should confirm:

- Intelligence tab still loads.
- Phase 13 `latest_suggestion_run.json` loads when present.
- The pointed run folder files load:
  - `auto_link_suggestions.json`;
  - `validation_report.json`;
  - `blocked_public_claim_warnings.json`.
- Phase 13 validation status is `pass_phase13_observation_input_runner_ready`.
- 8 suggestions render from the latest run.
- Run ID appears in the UI.
- Observation title appears in the UI.
- Generated timestamp appears in the UI.
- Source/output path appears in the UI.
- `writeback` remains `none`.
- `public_output` remains `false`.
- `canonical_writeback` remains `none`.
- If Phase 13 files are missing, Phase 9 fallback renders with a visible fallback notice.
- No active approve/reject/correct controls are introduced.
- No Supabase, Planner, Memgraph, media metadata, public output, or canonical write behavior is introduced.

Recommended commands:

```text
npm.cmd run validate:renderer
npm.cmd run lint:css-quality
npm.cmd run validate:app
```

Recommended render readback:

- active source mode is visible;
- active run ID is visible;
- suggestion card count is `8`;
- no `data-action`, form, App-runner bridge, or helper execution hook exists.

## Stop Conditions

Stop implementation if:

- Phase 13 pointer loads but points outside App `out/`;
- Phase 13 pointer is malformed;
- pointed run files are missing;
- validation report is not passing;
- safety fields do not confirm no-write/no-public/canonical-none;
- fallback cannot load Phase 9 fixture;
- UI would need IPC/preload/main-process changes;
- implementation requires running the helper from the UI;
- active approve/reject/correct controls become necessary.

## Recommendation

Implement Phase 14 as a read-only latest-run loader with Phase 9 fallback.

This is the smallest useful bridge from local observation intake to the existing Intelligence tab. It lets Josue run Phase 13 locally, then open the app and see the newest suggestion run without turning the UI into an execution or writeback surface.
