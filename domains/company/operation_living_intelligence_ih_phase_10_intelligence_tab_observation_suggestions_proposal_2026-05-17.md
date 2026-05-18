---
id: operation_living_intelligence_ih_phase_10_intelligence_tab_observation_suggestions_proposal_2026-05-17
title: Operation Living Intelligence Intelligent Harness Phase 10 Intelligence Tab Observation Suggestions Proposal
domain: company_operations
last_updated: 2026-05-17
tags: [operation-living-intelligence, intelligent-harness, phase-10, intelligence-tab, observation-suggestions, read-only, no-write]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 10 Intelligence Tab Observation Suggestions Proposal

## Purpose

Phase 9 proved the Observation Intake Auto-Linker can generate useful suggestion objects without writing anything. The next step is to render those suggestions inside the existing `Intelligence` tab so Josue can review the grasshopper / legume vine observation in the desktop app.

This proposal is read-only display only. It does not approve approve/reject/correct controls, Supabase writes, Planner writes, Memgraph writes, pgvector, public output, media metadata writes, canonical writeback, or graph expansion.

## Source

Use the existing Phase 9 generated output:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_9_observation_auto_linker\lake_post_seal\grasshopper_legume_vine_test
```

Required files:

```text
auto_link_suggestions.json
validation_report.json
blocked_public_claim_warnings.json
```

Required validation status:

```text
pass_phase9_observation_auto_link_suggestions_ready
```

Current Phase 9 readback:

```text
suggestions_generated: 8
outside_graph_suggestion_count: 4
review_required_suggestion_count: 8
blocked_public_claim_warning_count: 13
writeback: none
public_output_occurs: false
canonical_write_occurs: false
```

## Recommended Placement

Add a new `Observation Suggestions` panel inside the existing `Intelligence` tab.

Recommended placement:

```text
Living Intelligence
Status strip
Summary
Observation Suggestions
Needs Review
Media Review
Story Paths
Proposed Actions
No-Action Safe Context
```

The panel should appear immediately after `Summary` and before `Needs Review`.

Reason:

- suggestions are the daily intake workflow;
- they should be visible before the larger review queue;
- they bridge raw observation intake to the existing review queue;
- they remain separate from approved links, Planner tasks, or canonical writes.

The right rail should keep `Do Not Say Publicly`, `Owner Routes`, `Source Freshness`, and `Safety Boundaries`. If space allows, the right rail can show a small `Suggestion Safety` count summary, but the first implementation can keep all Phase 9 content in the main panel.

## Existing App Files Likely To Edit

Smallest implementation should edit only existing Intelligence tab files:

```text
M:\miniBIOTA\miniBIOTA_App\js\intelligence\intelligence-dashboard.js
M:\miniBIOTA\miniBIOTA_App\js\intelligence\intelligence-dashboard-render.js
M:\miniBIOTA\miniBIOTA_App\css\app-intelligence.css
```

Expected changes:

| File | Purpose |
|---|---|
| `js/intelligence/intelligence-dashboard.js` | Load Phase 9 suggestions, validation, and blocked-warning files alongside Phase 7 dashboard data |
| `js/intelligence/intelligence-dashboard-render.js` | Render the `Observation Suggestions` panel and suggestion cards |
| `css/app-intelligence.css` | Add display styles for suggestion cards, confidence badges, outside-graph labels, and future-control placeholders |

No new files are required for the first implementation.

## New Files

Recommended first implementation:

```text
none
```

Optional later split, if the renderer becomes too large:

```text
M:\miniBIOTA\miniBIOTA_App\js\intelligence\intelligence-observation-suggestions-render.js
```

Do not create this optional file unless implementation review shows the current renderer is too crowded.

## Loading Phase 9 Data

The existing Intelligence loader should continue loading Phase 7:

```text
out/operation_living_intelligence/intelligent_harness/phase_7_operator_dashboard/lake_post_seal/dashboard_data.json
```

Add read-only local loads for:

```text
out/operation_living_intelligence/intelligent_harness/phase_9_observation_auto_linker/lake_post_seal/grasshopper_legume_vine_test/auto_link_suggestions.json
out/operation_living_intelligence/intelligent_harness/phase_9_observation_auto_linker/lake_post_seal/grasshopper_legume_vine_test/validation_report.json
out/operation_living_intelligence/intelligent_harness/phase_9_observation_auto_linker/lake_post_seal/grasshopper_legume_vine_test/blocked_public_claim_warnings.json
```

The loader should verify:

- Phase 7 dashboard status is passing;
- Phase 9 validation status is passing;
- Phase 9 suggestions exist;
- all Phase 9 suggestions have `writeback: none`;
- no public output or canonical write occurred.

If Phase 9 files fail to load, the Intelligence tab should still render the Phase 7 dashboard and show a local `Observation Suggestions unavailable` panel. Do not create an IPC/preload/main bridge without separate approval.

## UI Fields Per Suggestion

Each suggestion card should show:

- relationship type;
- suggested target label;
- suggested target type;
- confidence label and score;
- reason;
- evidence count and compact evidence summaries;
- source IDs;
- source paths;
- owner domain;
- review status;
- publicness;
- claim status;
- blocked claims;
- approval state;
- `writeback: none`.

Recommended card hierarchy:

```text
SUGGESTED_BIOME
Lowland meadow
[high 0.88] [candidate_outside_current_graph_requires_review] [needs_review] [writeback none]
Reason: The observation explicitly names lowland meadow...
Evidence: Freshwater Lake context...
Blocked claims: none
```

## Outside-Graph Labeling

Any suggestion with:

```text
review_status: candidate_outside_current_graph_requires_review
```

should be visibly labeled:

```text
Outside current graph - review required
```

Do not soften or hide this. It is the main guardrail that prevents the UI from implying graph expansion.

First test outside-graph suggestions:

- `grasshopper / unknown grasshopper group`;
- `Lowland meadow`;
- `herbivory / plant grazing`;
- `legume vine interaction / grazing pressure`.

## Suggestions-Only Labeling

The section header should include:

```text
Suggestions only. Not approved links. No writeback.
```

Each card should show:

```text
approval_state: needs_review
writeback: none
```

The `BLOCKED_FOR_PUBLIC` card should be styled as a warning and show:

```text
approval_state: do_not_write
publicness: blocked
claim_status: blocked_public_output
```

## Future Approval Controls

Prepare for future approve/reject/correct workflow by preserving the state fields in the rendered card model:

```text
approved
rejected
corrected
needs_review
do_not_write
```

Do not implement controls yet.

Allowed first-version UI:

- non-clickable status chips;
- disabled-looking placeholder text such as `Review controls not enabled`;
- no buttons;
- no forms;
- no data-action attributes for approval/writeback;
- no Planner task creation.

Future controls should require a separate proposal and approval because they may become the front door to writeback design.

## Validation And Readback Checks

Recommended validation:

```text
npm run validate:renderer
npm run lint:css-quality
npm run validate:app
```

Additional readback checks:

- Intelligence tab still appears and renders Phase 7 dashboard;
- Phase 9 `auto_link_suggestions.json` loads successfully;
- Phase 9 `validation_report.json` loads successfully;
- Phase 9 `blocked_public_claim_warnings.json` loads successfully;
- `Observation Suggestions` panel renders after `Summary`;
- suggestions rendered: `8`;
- relationship types rendered:
  - `SUGGESTED_SPECIES`;
  - `SUGGESTED_BIOME`;
  - `SUGGESTED_STORY_THREAD`;
  - `SUGGESTED_OPEN_LOOP`;
  - `SUGGESTED_MEDIA`;
  - `SUGGESTED_CLAIM`;
  - `NEEDS_REVIEW`;
  - `BLOCKED_FOR_PUBLIC`;
- outside-graph labels rendered: `4`;
- review-required suggestions rendered: `8`;
- blocked public claim warnings rendered or summarized: `13`;
- every suggestion displays reason;
- every suggestion displays confidence;
- every suggestion displays approval state;
- every suggestion displays `writeback: none`;
- no approval/reject/correct controls are active;
- no Supabase request is made;
- no Planner write control is present;
- no Memgraph write/query is introduced;
- no public output or canonical writeback is introduced.

## Stop Conditions

Stop before implementation passes if:

- Phase 9 validation is missing or not passing;
- Phase 9 suggestions do not load;
- suggestions render without reason/confidence/approval/writeback fields;
- outside-graph suggestions are not visibly labeled;
- blocked public claim warnings are missing;
- any UI text implies suggestions are approved links;
- any approval/reject/correct control is interactive;
- any code writes Supabase, Planner, media metadata, Memgraph, or canonical records;
- any code adds pgvector;
- any code creates public output;
- any code expands beyond the grasshopper / legume vine test output.

## Confirmed Boundaries

This UI remains:

- read-only;
- local;
- derived only;
- suggestion-only;
- no-write;
- no Supabase writes;
- no Planner writes;
- no Memgraph writes;
- no public output;
- no canonical writeback.

## Implementation Approval Needed

Recommended approval:

```text
Approve rendering Phase 9 Observation Suggestions inside the existing Intelligence tab as read-only suggestion cards.
```

Until then, do not:

- edit App files;
- implement approval controls;
- write Supabase;
- write Planner;
- modify Memgraph;
- add pgvector;
- create public output;
- write media metadata;
- perform canonical writeback.
