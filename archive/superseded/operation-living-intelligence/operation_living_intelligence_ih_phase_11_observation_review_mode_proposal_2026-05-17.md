---
id: operation_living_intelligence_ih_phase_11_observation_review_mode_proposal_2026-05-17
title: Operation Living Intelligence Intelligent Harness Phase 11 Observation Review Mode Proposal
domain: company_operations
last_updated: 2026-05-17
tags: [operation-living-intelligence, intelligent-harness, phase-11, observation-review-mode, intelligence-tab, ux, read-only, no-write]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 11 Observation Review Mode Proposal

## Purpose

Phase 10 proved that the Intelligence tab can render Phase 9 Observation Suggestions inside the existing desktop app. The next improvement should make the page feel less like a raw audit board and more like a human observation review assistant.

The goal is to make the primary workflow feel like:

```text
new observation -> suggested connections -> warnings -> later approvals -> blocked claims
```

This remains UX-only. It does not approve Supabase writes, Planner writes, Memgraph writes, pgvector, public output, media metadata writes, canonical writeback, or active approve/reject/correct controls.

## Source Inputs

Use the current Phase 9 Observation Suggestions output and the existing Intelligence tab renderer:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_9_observation_auto_linker\lake_post_seal\grasshopper_legume_vine_test
```

Required local files:

```text
auto_link_suggestions.json
validation_report.json
blocked_public_claim_warnings.json
```

Current App renderer files:

```text
M:\miniBIOTA\miniBIOTA_App\js\intelligence\intelligence-dashboard.js
M:\miniBIOTA\miniBIOTA_App\js\intelligence\intelligence-dashboard-render.js
M:\miniBIOTA\miniBIOTA_App\css\app-intelligence.css
```

## Recommended Layout

Make `Observation Suggestions` the primary top section immediately after the page header, status strip, and load state.

Recommended page order:

```text
Living Intelligence
Status strip
Observation Review Mode intro
Observation Suggestions
Compact Do Not Say Publicly warning rail
Summary
Story Paths
Source Freshness
Secondary/collapsed sections
```

The current `Summary` should move below Observation Suggestions. It is useful, but it should not be the first mental model. The first mental model should be: the agent read one observation and suggested possible connections for review.

## Primary Observation Review Mode

At the top of the main column, add plain-language copy:

```text
The agent reviewed this observation and suggested possible connections. Nothing has been approved or written yet.
```

Show the observation text prominently:

```text
May 16: I observed that the grasshopper is confirmed eating the legume vine in the lowland meadow...
```

Then group suggestions by relationship type into human-readable categories:

| Relationship type | Display group |
|---|---|
| `SUGGESTED_SPECIES` | Organism / Species |
| `SUGGESTED_BIOME` | Biome |
| `SUGGESTED_STORY_THREAD` | Story Thread |
| `SUGGESTED_OPEN_LOOP` | Open Loop |
| `SUGGESTED_MEDIA` | Media |
| `SUGGESTED_CLAIM` | Claim |
| `NEEDS_REVIEW` | Review Needed |
| `BLOCKED_FOR_PUBLIC` | Blocked For Public |

Each group should show a compact count and one or more suggestion cards.

## Plain-Language Card Design

Each suggestion card should read like a review assistant, not a database row.

Recommended card fields:

- Suggested connection: the target label and type.
- Why the agent suggested it: `reason`.
- Confidence: label and score.
- Review state: `approval_state` and `review_status`.
- Outside current graph: clear badge for `candidate_outside_current_graph_requires_review`.
- Would connect later to: relationship type and target.
- What not to claim publicly: blocked claims attached to the suggestion.
- Source support: compact evidence summaries, source IDs, and source paths where available.
- Owner routing: `owner_domain`.
- Safety: `writeback: none`, publicness, claim status.

Recommended plain-language example:

```text
Organism / Species
Suggested connection: grasshopper / unknown grasshopper group
Why: The observation explicitly names grasshopper, but the current Lake Post-Seal graph does not contain a grasshopper species node.
Confidence: high, 0.82
Review state: needs review
Outside current graph: yes, review required
Do not claim publicly: stable grasshopper population, established population, or public proof from candidate media
Writeback: none
```

## Visible By Default

Show these sections by default:

- Observation Suggestions.
- Do Not Say Publicly, as a compact warning rail or alert near the suggestions.
- Summary, below the observation review flow.
- Story Paths, as a compact context section.
- Source Freshness, compact.
- Safety Boundaries, compact.

The visible default should answer:

- what the agent noticed;
- what it suggests connecting;
- what needs human review;
- what not to say publicly;
- what remains no-write.

## Collapsed Or Secondary By Default

Move these out of the main first-view experience:

- Needs Review.
- Proposed Actions.
- Owner Routes.
- No-Action Safe Context.
- Full Media Review.

These are still useful audit/detail views, but they should not dominate the page. They can appear as collapsed `details` sections or secondary panels below the review mode.

## Noise Reduction

Do not lead with large counts such as 58 review items or 58 proposed actions. Those counts make the screen feel like manual triage.

Instead, lead with a small review summary:

```text
8 suggestions generated
4 outside current graph
8 require review
13 blocked public warnings attached
0 writebacks enabled
```

The full audit lists should remain available below the review mode, but only after the operator sees the plain-language suggestion flow.

## Do Not Say Publicly

Keep `Do Not Say Publicly` visible, but compact.

Recommended form:

- a right rail alert, or
- a compact warning panel beside the suggestion groups.

It should summarize blocked public claims without making the whole page feel like a danger dashboard.

Required warning logic:

- candidate media is not public proof;
- do not claim stable/self-sustaining population;
- do not claim establishment or reproduction without review;
- do not treat outside-graph suggestions as approved graph expansion.

## Future Review Controls

Prepare visually for later review actions without implementing them.

Allowed now:

```text
Approve later
Reject later
Correct later
```

These must be disabled labels or disabled buttons only. They must not have click handlers, data-action hooks, form submission behavior, write plans, or network/write side effects.

Required helper text:

```text
Review controls are reserved. No writeback is enabled.
```

Any active approval, rejection, correction, Planner task creation, Supabase write, media metadata write, Memgraph write, or canonical writeback requires a separate proposal and approval.

## Files Likely To Edit

Likely edits:

```text
M:\miniBIOTA\miniBIOTA_App\js\intelligence\intelligence-dashboard-render.js
M:\miniBIOTA\miniBIOTA_App\css\app-intelligence.css
```

Possible small edit:

```text
M:\miniBIOTA\miniBIOTA_App\js\intelligence\intelligence-dashboard.js
```

Expected reason for `intelligence-dashboard.js` edit:

- only if the data passed to the renderer needs a small grouped or normalized shape.

Preferred implementation:

- keep data loading unchanged;
- do grouping in `intelligence-dashboard-render.js`;
- update CSS only for layout, card hierarchy, grouped suggestions, compact warning rail, and secondary/collapsed sections.

No new files are recommended for the first UX refinement.

## Blocked Work

This phase must not introduce:

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
- graph expansion beyond the grasshopper / legume vine test observation.

## Validation And Readback Checks

Implementation validation should confirm:

- Intelligence tab still loads.
- Observation Suggestions appears as the primary section after the status strip.
- Observation text is prominent.
- Suggestions are grouped by relationship type.
- All 8 suggestions render.
- Outside-graph suggestions are clearly labeled.
- Blocked public warnings are visible but not overwhelming.
- Needs Review and Proposed Actions are secondary or collapsed by default.
- Disabled future controls are visible but not active.
- No active approve/reject/correct click handlers are present.
- `writeback` remains `none`.
- `public_output` remains `false`.
- `canonical_writeback` remains `none`.
- No Supabase, Planner, Memgraph, media metadata, public output, or canonical write paths are introduced.

Recommended commands:

```text
npm.cmd run validate:renderer
npm.cmd run lint:css-quality
npm.cmd run validate:app
```

Recommended render readback:

- `Observation Suggestions` appears before `Summary`.
- `Summary` appears before the secondary audit sections.
- `Needs Review` is collapsed or visually secondary.
- `Proposed Actions` is collapsed or visually secondary.
- `Do Not Say Publicly` remains visible.

## Stop Conditions

Stop implementation if:

- Phase 9 data does not load;
- suggestions cannot be grouped reliably;
- any suggestion loses reason, confidence, approval state, source references, or writeback state;
- outside-current-graph warnings disappear;
- blocked public warnings disappear;
- disabled future controls become active;
- any Supabase, Planner, Memgraph, media metadata, public output, or canonical write path is introduced;
- the UI implies suggestions are approved links.

## Recommendation

Implement Observation Review Mode next as a UX-only refinement of the existing Intelligence tab.

The highest-value change is to make the app say:

```text
The agent already did the connection-finding. Josue is reviewing suggestions, not manually building the graph.
```

This keeps the harness useful day to day without opening writeback or public-output risk.
