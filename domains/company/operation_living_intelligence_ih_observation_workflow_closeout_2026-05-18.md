---
id: operation_living_intelligence_ih_observation_workflow_closeout_2026-05-18
title: Operation Living Intelligence Intelligent Harness Observation Workflow Closeout
domain: company_operations
last_updated: 2026-05-18
tags: [operation-living-intelligence, intelligent-harness, observation-workflow, closeout, content, app, supabase]
status: closeout_complete
---
# Operation Living Intelligence Intelligent Harness Observation Workflow Closeout

## What Is Now Working

The local-to-canonical observation workflow is now proven end to end.

Working chain:

```text
raw observation
-> Content raw observation intake parser
-> Content audit draft JSON/Markdown
-> App bridge to Phase 13 input
-> Phase 13 auto-link suggestions
-> Intelligence tab latest suggestion display
-> Phase 19 local observation intake pipeline
-> Phase 20 approved observation writeback proposal
-> live duplicate/ID confirmation
-> canonical Supabase observation insert
```

This means Josue can now move from a raw observation note to a reviewed canonical observation record without manually building every graph connection first.

## Completed Example

Completed observation:

```text
Gulf marsh crab excavation activity in the coastal biome / Marine Shore.
```

Canonical Supabase observation:

- New observation ID: `253`
- Confirmed species: `species_id = 174`, Gulf marsh crab
- Confirmed biome: `biome_id = 5`, Marine Shore

The canonical write captured the observed event only: Gulf marsh crab excavation and visible sediment turnover. It did not approve public claims about long-term stabilization, destabilization, erosion, or ecological causality.

## Confirmed No Bundled Writes

The observation insert did not bundle any additional canonical or public workflow writes.

Confirmed not written:

- no story thread links
- no open loop links
- no story beats
- no chronicles
- no Planner tasks
- no media metadata
- no public output
- no content pipeline records

This keeps the observation row as the source-of-truth event record, while every interpretation or downstream use remains separately reviewable.

## What Each Layer Does

Content intake:

- preserves Josue's raw wording;
- drafts cleaned observation text;
- keeps uncertainty and claim cautions visible;
- creates Content-owned audit JSON/Markdown before any write.

App bridge:

- converts an approved Content draft into Phase 13 input;
- preserves Content provenance and review metadata;
- does not approve canonical writes by itself.

Phase 13 auto-linker:

- suggests species, biome, story thread, open loop, media, claim, review, and blocked-public connections;
- checks canonical `public.species` read-only when a species hint is present, so canonical species outside the bounded graph are not mistaken for missing species;
- keeps suggestions local and review-required;
- updates the latest suggestion run for the Intelligence tab.

Intelligence tab:

- displays the latest suggestion run;
- remains read-only;
- shows suggestions, warnings, outside-graph labels, and no-write status.

Phase 19 pipeline:

- coordinates the local parser, bridge, and Phase 13 runner;
- keeps each step separately reviewable;
- does not open the app or write canonical systems.

Phase 20 writeback path:

- defines the approval-gated canonical observation write;
- requires duplicate and ID confirmation first;
- writes only the approved `public.observations` row.

## Still Separate / Future Work

The following remain future approval-gated layers:

- approved story thread linking
- approved open loop linking
- approved media review/linking
- approved Intelligence suggestion approval controls
- pgvector
- actual LangGraph
- wider scope beyond Lake Post-Seal/coastal test observations

None of those are implied by observation ID `253`. They should each get their own proposal, approval, writeback path, and readback.

## Recommended Next Operational Step

Use the new workflow for a small number of real observations before adding automation.

Recommended next step:

```text
Run one or two more raw observations through the Phase 19 local pipeline, then choose one approved observation for the Phase 20 writeback path.
```

2026-05-18 operational scope refinement:

- the active first operator path should now be the normal current observation-to-story workflow;
- Lake Post-Seal remains the regression/test fixture for graph and readback behavior;
- canonical species lookup should happen before labeling a species hint as missing;
- known example: Creeping Beggarweed exists as canonical species `97` / `Desmodium incanum`, even though it may be outside the bounded Lake Post-Seal graph.

After one or two more real observations, the highest-value next build is likely approved story-thread/open-loop linking from an existing canonical observation, starting with observation `253` only if Josue wants the Gulf marsh crab excavation event connected into the story system.
