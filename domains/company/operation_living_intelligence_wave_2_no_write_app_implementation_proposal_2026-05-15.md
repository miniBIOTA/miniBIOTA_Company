---
id: operation_living_intelligence_wave_2_no_write_app_implementation_proposal_2026-05-15
title: Operation Living Intelligence Wave 2 No-Write App Implementation Proposal
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-2, content-story-graph, app-proposal, no-write, lake-post-seal]
status: implemented_local_helper_after_approval
---
# Operation Living Intelligence Wave 2 No-Write App Implementation Proposal

## Purpose

This is the Company-owned design-only proposal for the first **Operation Living Intelligence Wave 2: Content Story Graph** local package.

It proposed a future App-owned helper that would generate local JSONL/readback files for the selected Lake Post-Seal story packet. Josue later approved the smallest local JSONL/readback helper, and App implemented it.

This proposal and later helper approval do not approve Memgraph/Docker use, Supabase/Planner writes, Content writes, `content_calendar` changes, `content_pipeline` changes, chronicle changes, story thread or story beat changes, open-loop changes, observation changes, media metadata changes, public site behavior, Content copy, Research claim changes, automation, paid services, durable graph runtime, canonical writeback, or source-of-truth migration.

## Implementation Result

App implemented and verified:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave2-content-story-jsonl.js
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave2-content-story-readback.js
```

Generated local output:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_2_content_story_graph\lake_post_seal\
```

Validation returned `pass_with_review_required_content_story_jsonl_ready` with `63` nodes, `136` normal edges, and `34` blocked edges. Offline readback returned `pass_with_review_required_content_story_readback_ready`.

Company documented the completed helper here:

```text
domains/company/operation_living_intelligence_wave_2_jsonl_readback_helper_2026-05-15.md
```

One selected `story_beat_threads` row points from `story_beat:6` to out-of-scope `story_thread:30`. The helper records that as `blocked_inference:out_of_scope_story_thread_link` instead of expanding the approved scope.

## Proposed Decision

Ask App to review a future no-write local implementation shaped like this:

```text
read-only source refresh
-> local source_manifest.json
-> local nodes.jsonl / edges.jsonl / blocked_edges.jsonl
-> local validation_report.json
-> local story_readback_report.json / story_readback_report.md
-> no canonical writeback
```

The first Wave 2 package should remain JSONL/readback-first. Cypher/Memgraph output should wait until the JSONL package proves it can preserve published/planned/candidate/review-required status without confusing source truth.

## Source Baseline

Use these Company records as the proposal baseline:

| Source | Path |
|---|---|
| Wave 2 design | `domains/company/operation_living_intelligence_wave_2_content_story_graph_design_2026-05-15.md` |
| Packet selection | `domains/company/operation_living_intelligence_wave_2_lake_post_seal_packet_selection_2026-05-15.md` |
| Source availability review | `domains/company/operation_living_intelligence_wave_2_lake_post_seal_source_availability_review_2026-05-15.md` |
| Projection matrix | `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-data-projection-matrix.md` |
| Wave 1 completion handoff | `domains/company/operation_living_intelligence_wave_1_completion_and_next_waves_2026-05-15.md` |

## Exact Source Manifest

The first proposed Wave 2 package should include only the selected Lake Post-Seal story packet and directly connected current source rows.

### Published Anchors

| Source family | Rows |
|---|---|
| Published content anchor | `content_pipeline.id = 338` |
| Chronicle anchor | `chronicles.id = 30` |
| Chronicle subject context | `chronicle_subject_links` for chronicle `30`, refreshed at implementation time |

### Story Continuity

| Source family | Rows |
|---|---|
| Story threads | `story_threads.id in (1, 3, 5)` |
| Open loops | `open_loops.id in (1, 2, 3, 4, 7)` |
| Source observations | `observations.id in (170, 171, 172, 173, 174, 175, 176, 177, 178)` |
| Observation-thread joins | `observation_thread_links` for observations `170-178` |
| Observation-loop joins | `observation_loop_links` for observations `170-178` |

### Story Beats

Include these current story beats as candidate/available material:

| Beat id | Status | Audience state |
|---:|---|---|
| `6` | `available` | `unseen` |
| `8` | `available` | `unseen` |
| `9` | `available` | `unseen` |
| `10` | `available` | `unseen` |
| `13` | `available` | `unseen` |

Include their direct source-map joins:

```text
story_beat_threads
story_beat_loops
story_beat_observations
```

Do not treat these story beats as published content. They are available story material unless a separately verified published content path exists.

### Content Calendar Context

Include these related calendar entries through loop `3`:

| Calendar id | Title | Status | Date | Role |
|---:|---|---|---|---|
| `11` | `The ghost shrimp had offspring` | `published` | `2026-05-01` | Published follow-up short advancing loop `3`. |
| `12` | `The ghost shrimp larvae disappeared` | `planned` | `2026-05-18` | Planned follow-up short advancing loop `3`. |

Implementation-time read should also refresh the relevant `content_calendar_loops` rows.

If calendar `11` still points to `pipeline_id = 350`, the helper may include `content_pipeline.id = 350` only after reading that row directly. Do not infer a `ContentItem` node for pipeline `350` from the calendar row alone.

### Media Candidates

Include the thirteen Wave 1 candidate media rows only as review-required `MediaCandidate` nodes:

```text
media_assets.id in (
  9497, 9499, 9537, 9538, 9540, 9548, 9554,
  9557, 9561, 9562, 9563, 19311, 35558
)
```

Expected review state at source review time:

```text
reviewed = false for all 13 rows
```

Implementation must refresh this state and stop or downgrade media edges if any reviewed/candidate assumptions changed.

## Excluded Scope

Exclude by default:

- broad Content archive;
- unrelated content calendar entries;
- unrelated story threads;
- unrelated open loops;
- broad media library scan;
- raw private media sweeps;
- CRM;
- Financials row-level data;
- private contacts;
- broader telemetry;
- agent logs;
- Web route records or public-output changes;
- App runtime state;
- canonical writeback targets.

## Recommended Local Output Location

Recommended App-owned ignored path:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_2_content_story_graph\lake_post_seal\
```

Expected generated files if later approved:

| File | Purpose |
|---|---|
| `source_manifest.json` | Included rows, excluded source families, source timestamps, refresh result, and approval boundary. |
| `nodes.jsonl` | Derived nodes with stable `global_id`, source identity, status, publicness, and review state. |
| `edges.jsonl` | Derived relationships with endpoint validity and source basis. |
| `blocked_edges.jsonl` | Guardrails for unsafe inferred publication, claim, media-proof, and public-output paths. |
| `validation_report.json` | Counts, uniqueness, endpoint, status, publicness, review-gate, and no-write checks. |
| `story_readback_report.json` | Machine-readable answers to the Wave 2 pilot questions. |
| `story_readback_report.md` | Human-readable readback for Content/Research/Web/App review. |

No generated graph data should be committed unless Josue separately approves sanitized fixtures.

## Proposed Node Types

| Node type | Example `global_id` | Notes |
|---|---|---|
| `GraphPacket` | `wave2_packet:lake_post_seal` | Derived package identity. |
| `ContentItem` | `content_pipeline:338` | Published pipeline/content identity. |
| `Chronicle` | `chronicle:30` | Public chronicle anchor. |
| `CalendarEntry` | `content_calendar:12` | Planned/published calendar work identity. |
| `StoryThread` | `story_thread:5` | Internal story-continuity arc. |
| `StoryBeat` | `story_beat:8` | Available/planned/published story turn, status-preserved. |
| `OpenLoop` | `open_loop:4` | Unresolved or advanced story/research question. |
| `Observation` | `observation:177` | Evidence/source context, not publication proof by default. |
| `Subject` | `biome:1` or `species:164` | Species, biome, system, or biosphere subject. |
| `MediaCandidate` | `media_asset:9548` | Candidate media with review state. |
| `ReviewGate` | `review_gate:media_review_required` | Content, Research, Web, App, or media review gate. |
| `StatusMarker` | `status:planned` | Optional explicit state marker when useful for readback. |

Required node fields:

- `global_id`
- `node_type`
- `label`
- `source_table` or `source_path`
- `source_id` or `source_anchor`
- `derived_only = true`
- `canonical_writeback = none`
- `status_state`
- `publicness_tier`
- `review_state`
- `owner_domain`
- `safe_summary`
- `do_not_infer`

## Proposed Edge Types

| Edge type | Use |
|---|---|
| `PACKET_INCLUDES` | Packet to included source/context nodes. |
| `PUBLISHED_AS` | Published content item to public URL/status marker. |
| `HAS_CHRONICLE` | Content item to chronicle when direct source path exists. |
| `MENTIONS_SUBJECT` | Chronicle/content to subject rows. |
| `PART_OF_THREAD` | Observation/beat/calendar context to story thread. |
| `HAS_BEAT` | Story thread or packet to story beat. |
| `ADVANCES_LOOP` | Content, calendar entry, beat, or observation advances an open loop. |
| `RAISES_LOOP` | Content, beat, or observation raises a question or unresolved follow-up. |
| `SUPPORTED_BY_OBSERVATION_CONTEXT` | Story beat or packet has source observation context, without promoting public proof. |
| `PLANNED_AS` | Planned calendar entry as planned content context. |
| `CANDIDATE_MEDIA_FOR` | Media candidate may support a story/content path after review. |
| `REQUIRES_REVIEW` | Any path that needs Content/Research/Web/App/media review. |
| `BLOCKS_PUBLIC_USE_OF` | Guardrail node blocks unsafe public or proof inference. |

Avoid proof-like edge names for uncertain or review-needed paths. In particular, do not use a relationship named `PROVES` in the first Wave 2 package.

## Status Rules

The helper must preserve these states:

| State | Rule |
|---|---|
| Published | `content_pipeline.status = published`, `chronicles` public history, or `content_calendar.status = published` may be published only within its own source identity. |
| Planned | `content_calendar.status = planned` is planned work, not publication. |
| Available | `story_beats.status = available` is candidate story material, not published content. |
| Developing | `story_threads.status = developing` is internal story continuity. |
| Open/advanced | `open_loops.status` should remain open or advanced; do not resolve. |
| Review-required | Unreviewed media, public-surface reuse, ecological claims, and draft/planned copy remain gated. |
| Canonical writeback | Always `none`. |

## Blocked Edges

Write unsafe or overreaching paths to `blocked_edges.jsonl`.

Required blocked-edge families:

| Blocked inference | Reason |
|---|---|
| Planned calendar row `12` treated as published | It is `planned`, not published. |
| Story beats `6`, `8`, `9`, `10`, `13` treated as published | They are `available` / `unseen`. |
| Observations `170-178` treated as public content | Observations are source context, not publication proof. |
| Unreviewed media treated as proof | All 13 candidate media rows are currently `reviewed = false`. |
| Direct chronicle-to-calendar link inferred through `chronicle_entry_id` | `content_calendar` has no direct `chronicle_entry_id` column. |
| Loop `3` or `4` treated as resolved | They are `advanced`, not resolved. |
| Public Web reuse generated from graph output | Web remains downstream review only. |
| Canonical update proposed automatically | Wave 2 canonical writeback is `none`. |

## Validation Checks

The validation report should include:

| Check | Expected result |
|---|---|
| Source refresh | All selected source rows exist or stop condition fires. |
| Source counts | `1` pipeline anchor, `1` chronicle anchor, `3` story threads, `5` open loops, `9` observations, `5` story beats, `2` calendar entries, `13` media candidates. |
| Observation links | `12` observation-thread links and `13` observation-loop links for observations `170-178`. |
| Calendar joins | `2` `content_calendar_loops` rows for loop `3`; no inferred chronicle FK path. |
| Media review | All media nodes carry current `reviewed` state and review gate. |
| Node uniqueness | No duplicate `global_id`. |
| Edge endpoint validity | Every edge endpoint exists in `nodes.jsonl`. |
| Status explicitness | Published/planned/available/developing/open/advanced/review-required states are present where applicable. |
| Publicness explicitness | Every public-adjacent node/edge has publicness tier. |
| Blocked edges | Required blocked inferences are present. |
| Sensitive exclusion | No CRM, Financials row-level data, private contacts, raw private media sweep, broader telemetry, or agent logs. |
| No writes | No Supabase, Planner, App runtime, Web, Content, Research, media, or Markdown source-of-truth writes. |
| Rebuildability | Output folder can be deleted and regenerated from source reads. |

## Readback Examples

### What has already been published?

Expected answer shape:

```text
Published anchor: content_pipeline:338 / chronicle:30 on 2026-04-17.
Published follow-up context: content_calendar:11 on 2026-05-01, with pipeline row required if a ContentItem edge is generated.
Planned follow-up: content_calendar:12 on 2026-05-18; not published.
Canonical writes implied: none.
```

### What story is this part of?

Expected answer shape:

```text
Threads: story_thread:1, story_thread:3, story_thread:5.
Open loops: open_loop:1, open_loop:2, open_loop:3, open_loop:4, open_loop:7.
Status: threads are developing; loops are open or advanced.
Do not infer: resolved story, completed food web, or approved public claim.
```

### Which story beats are available?

Expected answer shape:

```text
Available/unseen beats: story_beat:6, 8, 9, 10, 13.
These are candidate story material, not published content.
Review required before scripting/public reuse: Content and Research.
```

### What media supports this?

Expected answer shape:

```text
Media status: 13 candidate media rows exist, all reviewed=false.
Path status: review_required.
Do not say: media proves the event or is approved for captions/public use.
Review required: App media review, Content, Research.
```

### Can this update the public website?

Expected answer shape:

```text
Path status: blocked.
Reason: public Web reuse remains downstream review only.
Required reviews: Content, Research, Web.
Canonical writes implied: none.
```

## Stop Conditions

Stop before writing local output if:

- any selected source row is missing;
- any required status field is ambiguous;
- output path is not ignored by git;
- any query expands into excluded source families;
- any generated path treats planned content as published;
- any generated path treats available story beats as published;
- any generated path treats observations as public publication proof;
- any generated path treats unreviewed media as proof;
- any generated path implies public Web output;
- any helper requires Supabase/Planner/App/Web/Content/Research/media writes;
- any helper requires persistent service, cloud upload, paid tool, or automation.

## App Design Review Request

When this moves to App scope, ask App to review these questions only:

```text
Please review the Operation Living Intelligence Wave 2 no-write App implementation proposal as a design-only App review.

Requested decision:
- Is the proposed ignored output path acceptable?
- Is JSONL/readback-first still the right first shape?
- What App-owned source refresh helper pattern should be used?
- What validation/readback checks should App require before generated output?
- Should Cypher/Memgraph stay deferred until JSONL readback passes?

Not requested:
- No App code changes yet.
- No graph generation yet.
- No Docker/Memgraph use.
- No Supabase/Planner writes.
- No schema/runtime changes.
- No media metadata changes.
- No public behavior.
- No automation.
```

## Next Gate

The user approved continuing to the next recommended step on 2026-05-15. Company prepared the App design-review packet:

```text
domains/company/operation_living_intelligence_wave_2_app_design_review_packet_2026-05-15.md
```

The App design-review and smallest-helper implementation gates are complete.

The generated JSONL/readback output review is complete:

```text
domains/company/operation_living_intelligence_wave_2_readback_review_2026-05-15.md
```

Decision: close Wave 2 as a successful no-Docker local proof. Do not prepare Cypher/Memgraph for this wave unless a future query needs graph-runtime behavior that JSONL/readback cannot provide.

Next recommended work: Wave 3 Species and Public History Expansion as a docs-only design pass.

## Verification

- Built from the Wave 2 design, packet selection, and read-only source-availability review.
- App helper files changed only after later explicit approval.
- No Supabase/Planner writes were performed.
- No App runtime, schema, public site behavior, graph database, export/import job, media metadata, model run, cloud upload, paid tool, automation, or source-of-truth record changed.
