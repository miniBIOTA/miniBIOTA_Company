---
id: operation_living_intelligence_wave_2_lake_post_seal_packet_selection_2026-05-15
title: Operation Living Intelligence Wave 2 Lake Post-Seal Packet Selection
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-2, content-story-graph, packet-selection, lake-post-seal, source-review, no-write]
status: source_review_complete
---
# Operation Living Intelligence Wave 2 Lake Post-Seal Packet Selection

## Decision

The first bounded Wave 2 Content Story Graph packet should reuse the Lake Post-Seal story.

Selected anchor:

```text
content_pipeline.id = 338
chronicles.id = 30
```

This is the safest first Wave 2 packet because Wave 1 already proved the ecological/source side of the same story, while Wave 2 can now focus on the content-continuity question:

```text
What story is this part of, what have we already published, what is planned, and what is only candidate material?
```

This packet selection does not approve implementation, App helper work, Memgraph/Docker use, Supabase/Planner writes, Content writes, Web behavior, media metadata, public output, automation, or source-of-truth migration.

## Known Anchor Rows

From the existing Wave 1 local manifest:

| Source | Selected row |
|---|---|
| `content_pipeline` | `338` - `My Lake Went Completely Opaque. So I Removed the Fish.` |
| Content status | `published` |
| Published date | `2026-04-17` |
| Published URL | `https://youtu.be/lgmPWX9e-A0` |
| `chronicles` | `30` - `Fish removal reopens the lake food web` |
| Chronicle date | `2026-04-17` |
| Biome context | Freshwater Lake / `biome_id = 1` |
| Chronicle media type | `youtube_horizontal` |

Wave 2 should treat the chronicle and pipeline row as published identity, not as approval for new public copy.

## Known Story-Continuity Edges

The existing Wave 1 manifest already includes observation-to-thread and observation-to-loop links around observations `170-178`.

Known open loops associated with the packet:

| Loop id | Status in Wave 1 manifest | Story role |
|---:|---|---|
| `1` | `open` | Daphnia establishment and water-clearing question |
| `2` | `open` | Mesostoma predation risk to Daphnia/ostracods |
| `3` | `advanced` | Ghost Shrimp long-term survival/establishment |
| `4` | `advanced` | Lake food-web chain and water clarity question |
| `7` | `open` | Crayfish pressure on Mesostoma and microcrustacean layer |

Known story thread IDs linked through observations:

```text
1
3
5
```

The current manifest contains the observation-thread link rows but not the full `story_threads` rows. Wave 2 must read the actual thread rows before implementation.

## Source Availability Status

| Source family | Current availability | Wave 2 action |
|---|---|---|
| `content_pipeline.id = 338` | Available in Wave 1 manifest | Include as published `ContentItem` anchor. |
| `chronicles.id = 30` | Available in Wave 1 manifest | Include as public `Chronicle` anchor. |
| `chronicle_subject_links` for chronicle `30` | Available in Wave 1 manifest | Include as subject routing with public/review status. |
| `observations 170-178` | Available in Wave 1 manifest | Include as evidence/context only, not published content. |
| `observation_loop_links` for observations `170-178` | Available in Wave 1 manifest | Include as loop continuity edges. |
| `observation_thread_links` for observations `170-178` | Available in Wave 1 manifest | Include as thread continuity edges after thread rows are checked. |
| `open_loops 1, 2, 3, 4, 7` | Available in Wave 1 manifest | Include as unresolved/advanced story questions. |
| `story_threads 1, 3, 5` | IDs known from links; full rows not in manifest | Fresh read-only source availability check required. |
| `story_beats` | Not in Wave 1 manifest | Fresh read-only source availability check required. |
| `content_calendar` | Not in Wave 1 manifest | Fresh read-only check required to avoid confusing planned work with published content. |
| `media_assets` packet candidates | Available in Wave 1 manifest; all reviewed `false` | Include as candidate media only, review-gated. |
| Content project docs | Not selected yet | Optional only if Content chooses a current project doc as source context. |

## First Packet Boundary

Include for the first Wave 2 source-availability review:

- `content_pipeline.id = 338`
- `chronicles.id = 30`
- `chronicle_subject_links` for chronicle `30`
- observations `170-178`
- `observation_loop_links` for observations `170-178`
- `observation_thread_links` for observations `170-178`
- `open_loops 1, 2, 3, 4, 7`
- `story_threads 1, 3, 5`
- any `story_beats` linked to threads `1`, `3`, `5`, observations `170-178`, content pipeline `338`, chronicle `30`, or relevant calendar/source-map rows
- any `content_calendar` row linked to pipeline `338`, chronicle `30`, source threads, source loops, or source observations
- packet media asset candidates from Wave 1, candidate-only

Exclude by default:

- full Content archive;
- unrelated content calendar entries;
- unrelated story threads/open loops;
- broad media library scan;
- raw private media beyond the packet references;
- CRM, Financials, telemetry, sponsor, contact, or analytics rows;
- Web implementation rows beyond candidate public-surface identity;
- any canonical writeback target.

## Required Read-Only Source Check

Before any Wave 2 helper is proposed, run a fresh read-only source check that answers:

1. Do `story_threads 1, 3, 5` still exist, and what are their current titles/status/scope fields?
2. Which `story_beats`, if any, link to those threads, observations, pipeline `338`, chronicle `30`, or related source records?
3. Is there a `content_calendar` row for pipeline `338`, the Lake Post-Seal video, or the related source map?
4. Which rows represent published history vs planned/in-production/draft work?
5. Are any candidate media assets reviewed now, or are they still review-required?
6. Are there any direct source-map joins from calendar/content to threads, loops, observations, or beats that Wave 1 did not include?
7. Do any current rows imply a public copy/update path, or are all public-surface outputs still candidate/review-required?

The check should be read-only. It should not create, edit, link, schedule, complete, archive, or write any Planner, Content, story, chronicle, media, or Web records.

## Source Check Result

Company completed the read-only source-availability review on 2026-05-15:

```text
domains/company/operation_living_intelligence_wave_2_lake_post_seal_source_availability_review_2026-05-15.md
```

Result:

- `content_pipeline.id = 338` and `chronicles.id = 30` still provide the published anchor.
- `story_threads 1, 3, 5` all exist and remain `developing`.
- `open_loops 1, 2, 3, 4, 7` all exist; loops `3` and `4` are `advanced`, while loops `1`, `2`, and `7` remain `open`.
- Observations `170-178` exist with `12` observation-thread links and `13` observation-loop links.
- Five related `story_beats` are available/unseen story material; they should be modeled as candidate/available, not published.
- Two related `content_calendar` rows advance loop `3`: calendar `11` is a published May 1 short and calendar `12` is a planned May 18 short.
- The `13` Wave 1 media candidates still exist and all remain `reviewed = false`.
- No direct `media_chronicles` rows were found for chronicle `30`.

At the packet-selection gate, the packet was source-available for a future no-write Wave 2 App implementation proposal, but implementation remained unapproved until later explicit approval.

## Proposed Future Output

Implementation was later approved for the smallest local JSONL/readback helper and uses:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_2_content_story_graph\lake_post_seal\
```

Expected output family:

```text
source_manifest.json
nodes.jsonl
edges.jsonl
blocked_edges.jsonl
validation_report.json
story_readback_report.json
story_readback_report.md
```

No Cypher/Memgraph output should be created until JSONL readback proves the published/planned/draft/candidate distinctions and a separate proposal is approved.

## Approval Boundary

Approved now:

- packet selection;
- docs-only source-availability plan;
- using Wave 1 manifest as prior context;
- recommending a fresh read-only check before any build.

Not approved by this packet selection:

- source export/import;
- graph build;
- Memgraph/Docker use;
- Supabase/Planner writes;
- `content_calendar`, `content_pipeline`, chronicle, story thread, story beat, open loop, or observation writes;
- media metadata changes;
- Content copy/caption/script/publish changes;
- Web behavior or public output;
- automation;
- source-of-truth migration.

## Next Action

Company prepared the no-write Wave 2 App implementation proposal on 2026-05-15:

```text
domains/company/operation_living_intelligence_wave_2_no_write_app_implementation_proposal_2026-05-15.md
```

The App-scoped design review and smallest local helper implementation were later completed after explicit approval.

That proposal should use the same safety posture as Wave 1:

```text
source manifest design -> no-write proposal -> App helper only if later approved
```

The later helper result is documented here:

```text
domains/company/operation_living_intelligence_wave_2_jsonl_readback_helper_2026-05-15.md
```

No graph build beyond local JSONL generation, Memgraph/Docker use, Supabase/Planner write, Content record change, Web behavior, public output, canonical writeback, automation, or source-of-truth migration is approved by the helper result.
