---
id: operation_living_intelligence_ih_phase_12_observation_review_mode_compact_decision_layout_proposal_2026-05-18
title: Operation Living Intelligence Intelligent Harness Phase 12 Observation Review Mode Compact Decision Layout Proposal
domain: company_operations
last_updated: 2026-05-18
tags: [operation-living-intelligence, intelligent-harness, phase-12, observation-review-mode, compact-layout, decision-assistant, read-only, no-write]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 12 Observation Review Mode Compact Decision Layout Proposal

## Purpose

Phase 11 made the Intelligence tab feel like an observation review assistant instead of a raw audit board. Phase 12 should tighten the cards so Josue can scan the suggestions as decisions, not as a long internal report.

The goal is:

```text
see the observation -> scan suggested links -> notice safety flags -> decide what to review later
```

This remains UX-only, read-only, suggestion-only, and no-write. It does not enable approve/reject/correct actions.

## Source

Use the existing Phase 9 output already loaded by the Intelligence tab:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_9_observation_auto_linker\lake_post_seal\grasshopper_legume_vine_test
```

Use the current Phase 11 renderer as the implementation base:

```text
M:\miniBIOTA\miniBIOTA_App\js\intelligence\intelligence-dashboard-render.js
M:\miniBIOTA\miniBIOTA_App\css\app-intelligence.css
```

## Recommended Compact Layout

Make each suggestion card shorter and more decision-focused.

Default card layout:

```text
Target label
Relationship type | confidence | review state | outside graph if applicable | writeback none
Why suggested: one short sentence
Blocked warnings: 4
[Approve later] [Reject later] [Correct later] disabled
Details collapsed
```

Recommended changes:

- Put relationship type, confidence, and review status on one line.
- Make the suggested target label the main title.
- Keep the outside-current-graph badge visible at all times.
- Keep `writeback: none` visible but subtle.
- Collapse evidence refs by default.
- Collapse raw source IDs, source paths, and internal tags by default.
- Show blocked public warnings as a count by default.
- Put repeated blocked warning details behind an expander.

## Visual Grouping

Replace the current one-group-per-relationship visual flow with two practical decision groups.

### Suggested Connections

Show these as the primary review set:

- Species.
- Biome.
- Story Thread.
- Open Loop.
- Media.
- Claim.

These are suggestions that could become reviewed connections later, but are not approved and not written.

### Safety Checks

Show these as a compact safety group:

- Review Needed.
- Blocked For Public.

These are not connection targets. They are guardrails for what needs review and what must not become a public claim.

## Top Summary

Above the cards, show one plain-language summary:

```text
The agent found 8 possible connections. 4 are outside the current graph and need review before they can become real links.
```

Show one warning directly below:

```text
Nothing here has been approved or written.
```

The current metric grid can remain, but should become compact and secondary. The human summary should be the first thing the eye sees.

## Card Content Visible By Default

Each card should show:

- suggested target label;
- human group label;
- relationship type;
- confidence label and score;
- review state;
- outside-current-graph badge, if applicable;
- blocked warning count;
- short reason;
- owner domain;
- `writeback: none`;
- disabled future decision controls.

Suggested compact example:

```text
grasshopper / unknown grasshopper group
Organism / Species | high 0.82 | needs review | outside current graph | writeback none
Why: The observation names grasshopper, but the current Lake Post-Seal graph does not contain a grasshopper species node.
Blocked public warnings: 4
[Approve later] [Reject later] [Correct later]
```

## Collapsed By Default

Hide these behind `details` expanders:

- raw source IDs;
- source paths;
- long evidence lists;
- repeated blocked warning lists;
- full internal tags;
- full `suggested_connection_id`;
- full `review_status`, `publicness`, and `claim_status` strings when already summarized by plain-language badges.

The details must remain available for audit and source tracing, but they should not dominate the daily review experience.

## Disabled Future Controls

Keep disabled controls visible on each card:

```text
Approve later
Reject later
Correct later
```

Requirements:

- buttons or labels must be disabled;
- no click handlers;
- no `data-action` hooks;
- no forms;
- no network calls;
- no write plans;
- no Supabase, Planner, Memgraph, media metadata, or canonical side effects.

Helper text:

```text
Decision controls are reserved. No writeback is enabled.
```

## Files Likely To Edit

Likely implementation files:

```text
M:\miniBIOTA\miniBIOTA_App\js\intelligence\intelligence-dashboard-render.js
M:\miniBIOTA\miniBIOTA_App\css\app-intelligence.css
```

No `intelligence-dashboard.js` edit should be needed unless implementation discovers that pre-grouped display data would materially simplify the renderer. The preferred approach is to keep the Phase 10/11 loader unchanged and make this a renderer/CSS-only refinement.

No new files are recommended.

## Validation Checks

Implementation should confirm:

- Intelligence tab still loads.
- Observation Review Mode remains the primary experience.
- All 8 suggestions still render.
- Suggested Connections group renders:
  - Species;
  - Biome;
  - Story Thread;
  - Open Loop;
  - Media;
  - Claim.
- Safety Checks group renders:
  - Review Needed;
  - Blocked For Public.
- Outside-graph labels remain visible.
- Blocked warning counts remain visible.
- Raw details remain available but collapsed.
- Evidence refs remain available but collapsed.
- Disabled future controls are visible and inactive.
- No active approve/reject/correct controls exist.
- `writeback` remains `none`.
- `public_output` remains `false`.
- `canonical_writeback` remains `none`.
- No Supabase, Planner, Memgraph, media metadata, public output, or canonical write behavior is introduced.

Recommended commands:

```text
npm.cmd run validate:renderer
npm.cmd run lint:css-quality
npm.cmd run validate:app
```

Recommended render readback:

- suggestion card count is `8`;
- compact top summary is present;
- disabled controls count is present but controls are disabled;
- no `data-action`, active click handler, or form appears in suggestion cards;
- details sections exist for evidence/source/blocked-warning details.

## Stop Conditions

Stop implementation if:

- Phase 9 data fails to load;
- any suggestion disappears;
- outside-current-graph warnings become hidden;
- blocked public warning counts disappear;
- source/evidence details are removed instead of collapsed;
- disabled future controls become active;
- any write path is introduced;
- UI implies suggestions are approved or written.

## Recommendation

Implement Phase 12 next as a compact decision-layout pass. This is the highest-value refinement before any future approval workflow because it makes the existing no-write suggestions usable as a daily review surface without opening writeback risk.
