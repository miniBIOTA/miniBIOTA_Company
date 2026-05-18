---
id: operation_living_intelligence_ih_phase_9_observation_intake_auto_linker_proposal_2026-05-17
title: Operation Living Intelligence Intelligent Harness Phase 9 Observation Intake Auto-Linker Proposal
domain: company_operations
last_updated: 2026-05-17
tags: [operation-living-intelligence, intelligent-harness, phase-9, observation-intake, auto-linker, suggestions, no-write]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 9 Observation Intake Auto-Linker Proposal

## Purpose

The next useful Intelligent Harness step is an Observation Intake Auto-Linker.

The goal is to let Josue enter or select an observation and have the harness suggest likely graph/story/review connections automatically. Josue should not have to manually create every species, biome, story thread, open loop, media, claim, review gate, and blocked-claim connection one by one.

This phase creates suggestions only. Nothing is written automatically.

This proposal does not approve implementation. It does not approve App runtime changes, Supabase writes, Planner writes, Memgraph changes, pgvector, public output, media metadata writes, canonical writeback, or expansion beyond an explicitly approved test scope.

## Recommended First Version

Start as a local helper using one local JSON test observation.

Do not start as an App panel yet.

Reason:

- the important first problem is suggestion quality, not UI;
- the helper can be validated without App runtime risk;
- a single local test observation keeps scope bounded and repeatable;
- it avoids Supabase reads/writes in the first implementation;
- it creates the output contract that a later Intelligence tab panel can render;
- it prevents the UI from becoming a premature approval/writeback surface.

After the local helper passes, the next App UI feature should be a read-only `Observation Suggestions` panel inside the existing Intelligence tab.

## Recommended First Input Source

Use a new local JSON test file as the first input.

Recommended future input file:

```text
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_9_observation_auto_linker\lake_post_seal\grasshopper_legume_vine_test_observation.json
```

Why this is safest:

- no Supabase query is required;
- no Supabase row is modified;
- the test can be repeated exactly;
- expected suggestions can be validated;
- the object can mimic the shape of a future observation row without becoming canonical.

Do not use a new Supabase row for the first test. Do not write a test observation to Supabase. Do not require an App panel for the first test.

Future input paths can include:

- manually pasted observation text;
- selected existing observation row, read-only;
- App Intelligence panel intake;
- media candidate selected from a read-only list.

Those are later approval gates.

## First Test Scope

Approved test scope should be one local test observation only:

```text
May 16: I observed that the grasshopper is confirmed eating the legume vine in the lowland meadow. I captured video of it. There are now three grasshoppers in the biome, including a younger nymph that looks close to molting.
```

Suggested local JSON shape:

```json
{
  "observation_source": "local_test_observation",
  "observation_source_id": "grasshopper_legume_vine_2026_05_16",
  "observed_at": "2026-05-16",
  "text": "May 16: I observed that the grasshopper is confirmed eating the legume vine in the lowland meadow. I captured video of it. There are now three grasshoppers in the biome, including a younger nymph that looks close to molting.",
  "species_id": null,
  "biome_id": null,
  "media_notes": "Captured video.",
  "linked_media_candidate_ids": [],
  "scope": "single_local_test_observation",
  "writeback": "none"
}
```

Expected suggestion themes:

- Lowland meadow biome candidate;
- grasshopper species candidate or unknown grasshopper group;
- herbivory / plant grazing story thread candidate;
- legume vine interaction candidate;
- media review needed;
- reproduction/establishment claim remains review-required;
- do not claim stable population yet.

Because the current Lake Post-Seal Core Seed is bounded, any target not already represented in the approved graph should be labeled as:

```text
candidate_outside_current_graph_requires_review
```

This prevents the auto-linker from silently expanding the graph.

## Comparison Sources

The helper should compare the observation against local derived harness artifacts only:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_4_graphrag_context\lake_post_seal\context_packet.json
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_5_agent_workflow\lake_post_seal\answer_packets.json
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_6_review_queue\lake_post_seal\review_queue.json
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_7_operator_dashboard\lake_post_seal\dashboard_data.json
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_3_query_harness\lake_post_seal\query_results.json
```

It may also use existing Supabase source IDs already represented inside those graph/context artifacts. It must not query Supabase in the first implementation.

Comparison targets:

- current species/source IDs represented in the graph;
- current biomes/source IDs represented in the graph;
- story threads;
- open loops;
- media candidates;
- blocked claims;
- review gates;
- owner/domain routing;
- public-safety rules;
- writeback/public-output/canonical-writeback safety state.

## Suggested Connection Types

The first implementation should support:

```text
SUGGESTED_SPECIES
SUGGESTED_BIOME
SUGGESTED_STORY_THREAD
SUGGESTED_OPEN_LOOP
SUGGESTED_MEDIA
SUGGESTED_CLAIM
NEEDS_REVIEW
BLOCKED_FOR_PUBLIC
```

These are suggestion relationship types, not canonical graph writes.

No Memgraph import, reset, overwrite, or canonical graph update is approved.

## Suggested App Helper Files

Create only this helper after explicit implementation approval:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-ih-phase9-observation-auto-linker.js
```

Recommended local test input file after approval:

```text
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_9_observation_auto_linker\lake_post_seal\grasshopper_legume_vine_test_observation.json
```

No App runtime files should be edited in the first implementation. No package/dependency edits should be needed.

## Proposed Generated Output Path

Write generated output only under App ignored `out/`:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_9_observation_auto_linker\lake_post_seal\grasshopper_legume_vine_test
```

Required generated files:

```text
auto_link_suggestions.json
auto_link_suggestions.md
validation_report.json
auto_link_manifest.json
```

Optional generated files:

```text
suggestions.jsonl
evidence_readback.json
blocked_public_claim_warnings.json
```

No generated file is public output.

## Suggestion Object Contract

Each suggestion should contain:

```json
{
  "suggested_connection_id": "suggestion:grasshopper_legume_vine_2026_05_16:SUGGESTED_BIOME:lowland_meadow",
  "observation_source": {
    "type": "local_test_observation",
    "id": "grasshopper_legume_vine_2026_05_16",
    "observed_at": "2026-05-16",
    "text_excerpt": "grasshopper is confirmed eating the legume vine in the lowland meadow"
  },
  "suggested_target_type": "biome",
  "suggested_target_id": null,
  "suggested_target_label": "Lowland meadow",
  "relationship_type": "SUGGESTED_BIOME",
  "confidence": {
    "score": 0.86,
    "label": "high"
  },
  "reason": "The observation explicitly mentions lowland meadow.",
  "evidence": [],
  "source_ids": [],
  "source_paths": [],
  "owner_domain": "Research",
  "review_status": "review_required",
  "publicness": "internal_suggestion_only",
  "claim_status": "not_public_claim",
  "blocked_claims": [],
  "approval_state": "needs_review",
  "writeback": "none"
}
```

Required fields:

- `suggested_connection_id`;
- `observation_source`;
- `suggested_target_type`;
- `suggested_target_id`;
- `suggested_target_label`;
- `relationship_type`;
- `confidence`;
- `reason`;
- `evidence`;
- `source_ids`;
- `source_paths`;
- `owner_domain`;
- `review_status`;
- `publicness`;
- `claim_status`;
- `blocked_claims`;
- `approval_state`;
- `writeback`.

Recommended confidence labels:

```text
high
medium
low
blocked
needs_review
```

Every suggestion must preserve `writeback: none`.

## Expected Suggestions For First Test

The first test should produce suggestions like:

| Relationship | Target label | Expected state |
|---|---|---|
| `SUGGESTED_BIOME` | Lowland meadow | needs review if target is outside current graph |
| `SUGGESTED_SPECIES` | grasshopper / unknown grasshopper group | needs review |
| `SUGGESTED_STORY_THREAD` | herbivory / plant grazing | candidate story context |
| `SUGGESTED_OPEN_LOOP` | legume vine interaction / grazing pressure | candidate open loop |
| `SUGGESTED_MEDIA` | captured video | media review required |
| `SUGGESTED_CLAIM` | grasshopper eating legume vine | internal claim candidate |
| `NEEDS_REVIEW` | molting / nymph / three grasshoppers | establishment and life-stage review |
| `BLOCKED_FOR_PUBLIC` | stable population / established population | blocked public claim warning |

The helper should avoid overclaiming:

- do not infer stable population;
- do not infer established population;
- do not infer reproduction from one nymph observation without review;
- do not treat video as proof until media review;
- do not create a canonical story thread or open loop.

## Later Approval States

Future approval UI/workflow can support:

```text
approved
rejected
corrected
needs_review
do_not_write
```

Phase 9 first implementation must not implement approval writeback.

Allowed first implementation state:

```text
approval_state: needs_review
approval_state: do_not_write
```

Future meaning:

- `approved`: human approved for a later proposed writeback package;
- `rejected`: human rejected the suggestion;
- `corrected`: human edited target or relationship;
- `needs_review`: still pending review;
- `do_not_write`: explicitly kept as local context only.

Even future `approved` suggestions should not write automatically. They should only become candidates for a separate approved writeback design.

## Bad Automation Prevention

The auto-linker must enforce:

- no automatic Supabase writes;
- no automatic Supabase queries in first version;
- no automatic Planner tasks;
- no automatic media metadata writes;
- no automatic public claims;
- no automatic story publishing;
- no graph overwrite without review;
- no Memgraph import/reset/modification;
- no pgvector;
- no App runtime change in first version;
- no canonical writeback;
- no scope expansion beyond the approved test input.

Any suggestion that cannot be grounded should still be useful, but must be labeled:

```text
needs_review
candidate_outside_current_graph_requires_review
writeback: none
```

## Validation And Readback Checks

The helper should pass only if:

- local test observation file exists;
- Phase 4 context packet exists and is passing;
- Phase 5 answer packets exist and are passing;
- Phase 6 review queue exists and is passing;
- Phase 7 dashboard data exists and is passing;
- Phase 3 query results exist;
- suggestions are generated;
- every suggestion has `reason`;
- every suggestion has `confidence`;
- every suggestion has `approval_state`;
- every suggestion has `writeback: none`;
- every suggestion has `publicness`;
- every suggestion has `review_status`;
- blocked/public claim warnings are preserved;
- review gates are carried forward where relevant;
- candidate media is review-required, not proof;
- no canonical write occurs;
- no public output occurs;
- no Supabase query/write occurs;
- no Planner write occurs;
- no media metadata write occurs;
- no Memgraph modification occurs;
- output path stays under the approved Phase 9 App `out/` folder.

Recommended validation status:

```text
pass_phase9_observation_auto_link_suggestions_ready
```

## Stop Conditions

Stop before passing if:

- the input observation is missing;
- required harness source artifacts are missing or not passing;
- no suggestions are produced;
- any suggestion lacks reason, confidence, approval state, or writeback;
- any suggestion has writeback other than `none`;
- any suggestion implies public approval;
- any suggestion implies canonical writeback;
- any suggestion treats candidate media as proof;
- any suggestion turns a review gate into an approved claim;
- any code attempts Supabase write/query, Planner write, media metadata write, Memgraph modification, pgvector, App runtime change, scheduled job, public output, or canonical writeback;
- the helper expands beyond the approved single test observation.

## Future App UI Direction

After the local helper passes, this should become the next App UI feature inside the existing Intelligence tab.

Recommended later App panel:

```text
Observation Suggestions
```

Panel behavior:

- select or paste an observation;
- show suggested species, biome, story thread, open loop, media, claim, review gate, and blocked-claim warnings;
- allow human review states later: approved, rejected, corrected, needs_review, do_not_write;
- keep all suggestions local/no-write until a separate writeback path is approved.

Do not implement this panel until the local helper and suggestion schema pass.

## Confirmed Boundaries

Phase 9 remains:

- local;
- derived only;
- no-write;
- suggestion-only;
- human-reviewed;
- no public output;
- no canonical writeback;
- no automatic graph writes;
- no App runtime change in the first implementation;
- bounded to the approved single test observation.

## Implementation Approval Needed

Recommended next approval:

```text
Approve Phase 9 local Observation Intake Auto-Linker helper for one local test observation only.
```

Until that approval, do not:

- create the helper;
- create the test input file;
- generate suggestions;
- modify App runtime;
- write Supabase;
- write Planner;
- modify Memgraph;
- add pgvector;
- create public output;
- write media metadata;
- perform canonical writeback;
- expand beyond the approved test scope.
