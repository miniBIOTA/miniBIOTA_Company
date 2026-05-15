---
id: operation_living_intelligence_wave_2_content_story_graph_design_2026-05-15
title: Operation Living Intelligence Wave 2 Content Story Graph Design
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-2, content-story-graph, content, app, research, web, no-write]
status: local_jsonl_readback_helper_verified
---
# Operation Living Intelligence Wave 2 Content Story Graph Design

## Objective

Wave 2 should make agents better at answering:

```text
What story is this part of, what have we already published, what is planned, and what is only candidate material?
```

Wave 1 proved that a bounded ecological source packet can become a safe derived graph. Wave 2 applies the same read-first, no-write pattern to Content continuity.

2026-05-15 update: after packet selection, source review, App design review, and Josue's later implementation approval, the smallest local JSONL/readback helper was implemented and verified. Company then reviewed the generated output and closed Wave 2 as a successful no-Docker local proof. The next recommended work is Wave 3 Species and Public History Expansion as a docs-only design pass.

## Decision Boundary

This began as a docs-only design pass. The later approved implementation is limited to App local helper files plus ignored generated output.

It does not approve:

- Memgraph import;
- Docker use;
- persistent graph infrastructure;
- scheduled sync;
- Supabase/Planner writes;
- `content_calendar` writes;
- `content_pipeline` writes;
- chronicle writes;
- story thread, story beat, open loop, or observation writes;
- media metadata writes;
- Web/public behavior;
- Content copy, captions, scripts, or publishing;
- Research claim changes;
- source-of-truth migration.

## Source Scope

Wave 2 should begin as a small bounded story-continuity projection, not a full Content archive import.

Candidate source families:

| Source | Role In Wave 2 | Canonical Owner |
|---|---|---|
| `content_pipeline` | Published or pipeline-stage content identity, transcript/source context, published URLs, parent/child relationships where present | Content/App |
| `chronicles` | Public history entries and public event text | Content/Web/Research depending on subject |
| `chronicle_subject_links` | Public subject routing for chronicle-to-species/biome/system links | Content/Web/Research |
| `content_calendar` | Planned/in-production content identity and due/close record only | Content/App |
| `story_threads` | Internal story arcs and continuity questions | Content/Research |
| `open_loops` | Unresolved questions, follow-up arcs, and story/research uncertainty | Content/Research |
| `story_beats` | Named story turns inside a thread or production arc | Content/App |
| `observations` | Evidence/source context, not automatic content publication proof | Research/Content |
| `media_assets` and media link tables | Candidate proof assets and review state only | App/Content/Research |
| Content project docs | Longform/midform planning context when explicitly included | Content |

Implementation-time source selection must use a fresh source audit. The design should not assume every listed table exists in every current helper path or that all link tables are ready for export.

## Proposed Node Types

| Node | Meaning |
|---|---|
| `ContentItem` | A `content_pipeline` row or published/planned content identity. |
| `Chronicle` | A public history entry. |
| `CalendarEntry` | A `content_calendar` planning/due/close record. |
| `StoryThread` | A continuing narrative arc or internal story container. |
| `StoryBeat` | A named story turn inside a thread or production arc. |
| `OpenLoop` | An unresolved question or follow-up arc. |
| `Observation` | Evidence/source context from Research/Supabase. |
| `Subject` | Species, biome, system, or biosphere subject referenced by content/history. |
| `MediaCandidate` | Media asset candidate with review state. |
| `ReviewGate` | Content, Research, Web, App, or media-review gate. |
| `StatusMarker` | Published, planned, draft, candidate, review-required, public, internal, or blocked status. |

## Proposed Edge Types

| Edge | Meaning |
|---|---|
| `PUBLISHED_AS` | Content item has a public published identity or URL. |
| `HAS_CHRONICLE` | Content item or subject is represented in a public chronicle. |
| `PLANNED_AS` | Calendar entry plans or stages a future content item. |
| `PART_OF_THREAD` | Content, beat, loop, or observation belongs to a story thread. |
| `HAS_BEAT` | Thread or content item includes a story beat. |
| `ADVANCES_LOOP` | Content, beat, or observation advances an open loop. |
| `RAISES_LOOP` | Content, beat, or observation creates or reveals an unresolved loop. |
| `SUPPORTED_BY_OBSERVATION` | Story/content claim has observation support. |
| `USES_SOURCE_PACKET` | Content item or graph packet depends on a bounded source packet. |
| `CANDIDATE_MEDIA_FOR` | Media asset may support a story/content/public surface, pending review. |
| `MENTIONS_SUBJECT` | Content/history mentions a species, biome, system, or biosphere subject. |
| `PUBLIC_SURFACE_CANDIDATE_FOR` | A public surface might be updated or reused, still review-gated. |
| `REQUIRES_REVIEW` | A path needs Content, Research, Web, App, or media review before use. |
| `BLOCKS_PUBLIC_USE_OF` | A gate prevents public output or claim use. |

## Status Rules

Wave 2 must preserve these distinctions:

| State | Rule |
|---|---|
| Published | Only published pipeline rows, published calendar closeout, or public chronicle state can support published status. |
| Planned | `content_calendar` and Planner work can show planned/in-production work, not publication. |
| Draft | Project docs/scripts/notes can show draft material, not public claims. |
| Candidate | Public reuse, media proof, and story continuation suggestions remain candidate material. |
| Review-required | Any path with uncertain claim, unreviewed media, draft copy, private note, or Web output implication remains review-gated. |
| Internal | Internal source notes and planning docs must not become public output. |
| Canonical writeback | Always `none` for Wave 2 derived outputs. |

## Pilot Questions

Wave 2 should be judged by whether it answers questions like these better than ordinary lookup:

1. What published content has already covered this story or subject?
2. Which chronicles/public history entries are connected to the story?
3. Which story threads and open loops does this content advance?
4. What planned content might duplicate or continue an existing story?
5. Which observations support the story, and which are only context?
6. Which story beats are already published, planned, or still unused?
7. Which media assets are candidate proof and which still need review?
8. What public surfaces might eventually reuse the story, and what gates block them?
9. What should Content review next before scripting or publishing?
10. What should Research/Web/App review before any public use or implementation?

## Validation Gates

Every future Wave 2 generated package should prove:

- source manifest lists every included row/path and excluded source family;
- no node has duplicate `global_id`;
- every edge endpoint exists;
- published/planned/draft/candidate statuses are explicit;
- public/internal/private status is explicit where relevant;
- observations are not treated as published content by default;
- `content_calendar` is not treated as published history by default;
- unreviewed media remains review-gated;
- public Web output remains blocked unless separately approved;
- no canonical writeback exists;
- readback names Content, Research, Web, and App review needs;
- stop conditions trigger on missing source rows, status ambiguity, review-gate loss, or public-output implication.

## Suggested Output Layout

If implemented later, use a separate ignored App output folder:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_2_content_story_graph\
```

Expected file family:

```text
source_manifest.json
nodes.jsonl
edges.jsonl
blocked_edges.jsonl
validation_report.json
story_readback_report.json
story_readback_report.md
```

Cypher/Memgraph output should wait until JSONL readback is useful and review gates behave correctly.

## Cross-Domain Handoff

| Domain | Owns | Wave 2 Need |
|---|---|---|
| Company | Sequencing, boundaries, next-wave governance | Keep Wave 2 docs-only until implementation is explicitly approved. |
| Content | Story continuity, source packets, scripts, captions, publishing state | Define which story arcs and records are safe for the first bounded pilot. |
| App | Helper implementation, output location, protected reads, runtime safety | Reuse the Wave 1 local-output pattern only after design approval. |
| Research | Claim safety, observations, ecological uncertainty | Make sure observations and open loops are not promoted into public claims. |
| Web | Public surface behavior and public claim display | Treat all public-surface reuse as candidate until reviewed. |
| Raw Footage/App Media | Media source material and media asset review state | Keep media proof candidate-only unless reviewed. |

## Recommended Next Action

Before building anything, Content/Company should choose the first bounded Wave 2 story packet.

Recommended packet shape:

```text
one published content item or chronicle
plus directly connected story threads, open loops, story beats, observations, and candidate media
```

The selected packet should be small enough to inspect by hand and should reuse the Wave 1 safety posture:

```text
read-only source audit -> local JSONL package -> no-Docker readback -> review-gated handoff
```

No implementation should begin until that packet is selected and source availability is checked.

## Packet Selection

Company selected the first packet on 2026-05-15:

```text
Lake Post-Seal story packet
content_pipeline.id = 338
chronicles.id = 30
```

Selection record:

```text
domains/company/operation_living_intelligence_wave_2_lake_post_seal_packet_selection_2026-05-15.md
```

At this gate, the next step was a read-only source-availability review for story threads `1`, `3`, and `5`, any linked story beats, related `content_calendar` rows, and source-map joins. Implementation remained unapproved until later explicit approval for the smallest local JSONL/readback helper.

## Source Availability Review

Company completed the read-only source-availability review on 2026-05-15:

```text
domains/company/operation_living_intelligence_wave_2_lake_post_seal_source_availability_review_2026-05-15.md
```

The selected Lake Post-Seal packet is source-available for a future no-write implementation proposal:

- published anchor: `content_pipeline.id = 338`;
- public chronicle anchor: `chronicles.id = 30`;
- active story threads: `1`, `3`, `5`;
- open/advanced loops: `1`, `2`, `3`, `4`, `7`;
- source observations: `170-178`;
- related story beats: five `available` / `unseen` beats;
- related content calendar follow-up rows: one published short and one planned short linked through loop `3`;
- media review state: all `13` Wave 1 candidate media rows still `reviewed = false`.

Important modeling boundary:

- `content_calendar` does not currently provide a direct `chronicle_entry_id` column.
- Future Wave 2 graph generation should not infer chronicle-to-calendar links without an explicit source path.
- Planned calendar rows must remain distinct from published pipeline/chronicle history.

Company prepared the no-write Wave 2 App implementation proposal on 2026-05-15:

```text
domains/company/operation_living_intelligence_wave_2_no_write_app_implementation_proposal_2026-05-15.md
```

The proposal is ready for App-scoped design review if explicitly approved. App helper work, graph generation, Memgraph/Docker use, Supabase/Planner writes, public output, and source-of-truth migration remain unapproved.

## App Design Review Packet

The user approved continuing to the next recommended step on 2026-05-15. Company prepared the App design-review packet without editing App repo files:

```text
domains/company/operation_living_intelligence_wave_2_app_design_review_packet_2026-05-15.md
```

The packet asked App to review the proposed ignored output path, JSONL/readback-first shape, source refresh pattern, validation/readback checks, and stop conditions only. Implementation was later approved only for the smallest local JSONL/readback helper.

## Local Helper Result

After App completed the docs-only review, Josue approved implementing the smallest local JSONL/readback helper.

Implemented App files:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave2-content-story-jsonl.js
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave2-content-story-readback.js
```

Generated output:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_2_content_story_graph\lake_post_seal\
```

Verified statuses:

```text
pass_with_review_required_content_story_jsonl_ready
pass_with_review_required_content_story_readback_ready
```

Counts:

| Item | Count |
|---|---:|
| Nodes | `63` |
| Normal edges | `136` |
| Blocked edges | `34` |
| Story beats | `5` |
| Media candidates | `13` |

One selected `story_beat_threads` link points to out-of-scope `story_thread:30`; the helper keeps that relationship blocked instead of expanding the approved packet scope.

Company record:

```text
domains/company/operation_living_intelligence_wave_2_jsonl_readback_helper_2026-05-15.md
```
