---
id: operation_living_intelligence_ih_phase_1_supabase_source_map_2026-05-17
title: Operation Living Intelligence Intelligent Harness Phase 1 Supabase Source Map
domain: company_operations
last_updated: 2026-05-17
tags: [operation-living-intelligence, intelligent-harness, phase-1, supabase, source-map, lake-post-seal]
status: phase_1_scope_approved_app_no_write_proposal_next
---
# Operation Living Intelligence Intelligent Harness Phase 1 Supabase Source Map

## Purpose

This document starts `IH Phase 1: Supabase Source Map for first graph and retrieval scope`.

It identifies the first bounded Supabase rows, Markdown sources, entity types, relationship types, review gates, and retrieval boundaries for the Intelligent Harness.

This is a planning/source-map artifact only. It does not approve code implementation, helpers, package installs, Supabase writes, Planner writes, schema migrations, Memgraph setup, generated outputs, App runtime changes, public output, media metadata writes, scheduled jobs, or canonical writeback.

## Phase 1 Result So Far

Status:

```text
phase_1_scope_approved_app_no_write_proposal_next
```

Approved by Josue on 2026-05-17:

- Use the narrow Lake Post-Seal Core Seed first.
- Keep context and expansion rows out of the required first import/readback.
- Use the current retrieval baseline first, not pgvector.
- Use Supabase SQL Editor as the first SQL metadata path.
- Prepare the next implementation proposal for an App-owned no-write JSONL/readback helper before any Memgraph import.

First bounded scope:

```text
Lake Post-Seal existing scope
```

Primary reason:

- It already has a verified Content-owned source packet.
- It has live Supabase source rows for content, chronicle, species, observations, story/open-loop links, media candidates, and Planner phase state.
- It has enough review complexity to test the harness without loading all miniBIOTA data.

Controlling plan:

```text
domains/company/operation_living_intelligence_intelligent_harness_master_plan_2026-05-17.md
```

Phase 1 review packet:

```text
archive/superseded/operation-living-intelligence/operation_living_intelligence_ih_phase_1_scope_review_packet_2026-05-17.md
```

Core seed source-query list:

```text
archive/superseded/operation-living-intelligence/operation_living_intelligence_ih_phase_1_core_seed_source_query_list_2026-05-17.md
```

Next App proposal:

```text
archive/superseded/operation-living-intelligence/operation_living_intelligence_ih_phase_1_app_no_write_jsonl_readback_helper_proposal_2026-05-17.md
```

Primary source packet:

```text
M:\miniBIOTA\miniBIOTA_Content\audits\living_atlas\source_packets\pipeline_338_chronicle_30_lake_post_seal_2026-05-12.md
```

## Read-Only Verification

Read-only Company Supabase helper checks were run on 2026-05-17 for the first scope.

Verified live rows:

- `content_pipeline.id = 338`
- `chronicles.id = 30`
- `chronicle_subject_links.chronicle_id = 30`
- `biomes.id = 1`
- `species.id in (24, 66, 67, 164, 167, 180)`
- `species_to_biomes` for seed species
- `observations.id in (170, 171, 172, 173, 174, 175, 176, 177, 178)`
- `observation_loop_links` for observations `170-178`
- `observation_thread_links` for observations `170-178`
- `open_loops.id in (1, 2, 3, 4, 7)`
- `story_threads.id in (1, 3, 5, 30)`
- `story_beats.id in (6, 8, 9, 10, 13)` as follow-on story context, not core seed
- `media_assets.id in (9497, 9499, 9537, 9538, 9540, 9548, 9554, 9557, 9561, 9562, 9563, 19311, 35558)`
- `species_images` for species `24` and `67`
- `biome_images` for biome `1`
- `work_projects.id = 75`
- `tasks.id in (563, 564, 565, 566, 567, 568, 569, 570, 571)`

Verified negative/blocked link state:

- `content_calendar_observations` returned no rows for observations `170-178`.
- `content_calendar_threads` returned no rows for threads `1`, `3`, and `5`.
- `content_calendar_story_beats` returned no rows for story beats `6`, `8`, `9`, `10`, and `13`.
- `story_beat_observations` returned no rows for observations `170-178`.
- `media_chronicles` returned no rows for chronicle `30`.
- `media_species` returned no rows for seed species `24`, `66`, `67`, `164`, `167`, and `180`.
- `media_biomes` returned no rows for biome `1`.
- `media_assets` returned no rows for filenames `20260408_082108.jpg` and `20260503_101720.jpg`.

Remaining metadata gap:

- Live SQL metadata for foreign keys, indexes, RLS policies, and triggers is still not fully proven from the active Company REST helper path.
- The prior task `409` audit and App migration-source review remain sufficient for planning and source-map work, not for implementation.
- Before export/import, graph build, App helper implementation, automation, or canonical writeback, use a SQL-capable Supabase MCP/database tool, Supabase SQL Editor, `psql`, or an approved App-owned read-only SQL metadata path.

## First Structured Source Rows

### Canonical Source Identity

| Entity | Source row | Current live state | Phase 1 handling |
|---|---|---|---|
| Content item | `content_pipeline.id = 338` | Published longform, title `My Lake Went Completely Opaque. So I Removed the Fish.`, published `2026-04-17`, URL present, `biome_id = 1`, `chronicle_entry_id = 30`, `transcript = null` | Core `ContentItem` node and retrieval source identity. |
| Chronicle | `chronicles.id = 30` | Title `Fish removal reopens the lake food web`, `event_date = 2026-04-17`, `source_pipeline_id = 338`, `biome_id = 1` | Core `Chronicle` node and public-history source identity. |
| Biome | `biomes.id = 1` | `Freshwater Lake`, active post-fish-removal transition; stability unresolved | Core `Biome` node. |
| Source packet | Content Markdown packet path above | Verified with caveats; review material only | Core `GovernanceSource` / retrieval document. |

### Subject Links

`chronicle_subject_links` for chronicle `30` returned eight live rows:

| Link ids | Subject rows | Relationship | Phase 1 handling |
|---|---|---|---|
| `17` | biome `1` | `primary` | Include as `Chronicle -> MENTIONS/SUPPORTS -> Biome`. |
| `22`, `23`, `24`, `25` | species `24`, `164`, `67`, `66` | `major_impact` or `context` | Include in the first seed. |
| `26`, `27`, `28` | species `65`, `169`, `25` | `context` | Treat as live public chronicle context outside the narrow seed unless explicitly expanded. |

### Seed Species

Core seed species rows:

| Species id | Common name | Scientific name | Current public/review posture | Phase 1 handling |
|---:|---|---|---|---|
| `24` | Flagfish | `Jordanella floridae` | `display_status = active`, population `Removed`, estimated population `0`, last seen `2026-04-05` | Core `Species` node. Removal context can support the story with cautious wording. |
| `66` | Freshwater amphipod | `Order - Amphipoda` | `display_status = unreviewed`, biome link currently points to biome `2`; chronicle link context is biome `1` | Core context `Species` node with review warning. Do not overstate Lake membership from species-to-biome alone. |
| `67` | Ghost Shrimp | `Palaemon paludosus` | `display_status = active`, `Confirmed Breeding`, `Vulnerable`, juvenile recruitment unresolved | Core `Species` node with blocked recruitment/establishment claims. |
| `164` | Daphnia | `Daphnia sp.` | `display_status = unreviewed`, population `Uncertain`, last seen `2026-04-13` | Core `Species` node with ID/establishment caution. |
| `167` | Mesostoma Flatworm | `Mesostoma ehrenbergii` | `display_status = unreviewed`, predator-pressure context | Core internal/review `Species` node. Public use blocked by default. |
| `180` | Moina | `Genus - Moina` | `display_status = unreviewed`, population `Uncertain`, observed `2026-05-01` | Follow-on context node for later story beats, not core chronicle `30` subject. |

Related species visible in source rows but not in the narrow core seed:

- `65` / Calanoid copepods: live public chronicle context link.
- `169` / Cyclopoid copepods: live public chronicle context link.
- `25` / Slough Crayfish: live public chronicle context link.
- `156` / Daphnia magna: referenced by observation `172`; not part of the seed species set unless the Phase 1 scope expands to diagnostic trial context.
- `59` / Duckweed: referenced by observation `174`; not part of the seed species set unless the Phase 1 scope expands to alternative-bridge context.
- `69` / larger ostracods: referenced by story thread/beat context; not part of the core seed unless the Phase 1 scope expands to the ostracod follow-up lane.

### Observations

Core observation rows:

```text
170, 171, 172, 173, 174, 175, 176, 177, 178
```

All nine live rows currently have:

- `biome_id = 1`
- `pipeline_id = null`
- `chronicle_id = null`
- `promoted_to_chronicle = false`

Phase 1 implication:

- These observations can become `Observation` nodes.
- Their relation to `content_pipeline.id = 338` and `chronicles.id = 30` must be modeled as source-packet/review-supported context, not as a direct canonical Supabase link.
- Do not invent direct observation-to-pipeline or observation-to-chronicle edges.

Observation roles:

| Observation ids | Role |
|---|---|
| `170`, `171` | Opaque water problem and plant-structure/light/nutrient context. |
| `172` | Daphnia magna diagnostic trial rationale. |
| `173`, `175` | Field search and trail-pool discovery. |
| `174` | Duckweed alternative-bridge test. |
| `176`, `177` | Species composition and introduction of collected organisms. |
| `178` | Mesostoma correction and predator-pressure tension. |

### Open Loops And Story Threads

Open loops in the first scope:

| Open loop id | Status | Core question |
|---:|---|---|
| `1` | open | Daphnia establishment and water clearing. |
| `2` | open | Mesostoma pressure on Daphnia/ostracods. |
| `3` | advanced | Ghost Shrimp survival/establishment. |
| `4` | advanced | Food-web completion and water clearing without mechanical intervention. |
| `7` | open | Crayfish checking Mesostoma. |

Story threads in the first scope:

| Story thread id | Status | Title |
|---:|---|---|
| `1` | developing | Daphnia - establishing in the post-seal lake biome |
| `3` | developing | Larger ostracods - no sightings since introduction |
| `5` | developing | Freshwater Lake - ecological state post-seal |
| `30` | developing | Moina - reproduction and establishment in Freshwater Lake |

Core link counts verified:

- `observation_loop_links`: 13 rows for observations `170-178`.
- `observation_thread_links`: 12 rows for observations `170-178`.

### Story Beats

Story beats `6`, `8`, `9`, `10`, and `13` are useful follow-on Lake Post-Seal story context, but they are not the core seed because their `source_observation_id` values point to later observations outside `170-178`.

Phase 1 handling:

- Keep them as expansion candidates for the first graph after the core seed is mapped.
- Use them to test the boundary between first source identity and ongoing observation-to-story workflow.
- Do not let them blur the first validation checklist for observations `170-178`.

### Media

Indexed `media_assets` rows found:

```text
9497, 9499, 9537, 9538, 9540, 9548, 9554, 9557, 9561, 9562, 9563, 19311, 35558
```

All thirteen checked media rows have:

- `file_type = video`
- `reviewed = false`
- local filesystem paths under `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\...`

No direct canonical media links were found for:

- chronicle `30`
- biome `1`
- seed species `24`, `66`, `67`, `164`, `167`, `180`

Still-image candidates not indexed in `media_assets` by filename:

- `20260408_082108.jpg`
- `20260503_101720.jpg`

Phase 1 handling:

- Create `MediaAssetCandidate` nodes only as candidate/internal evidence.
- Add `NEEDS_REVIEW` edges from candidate media to Research, Content, Raw Footage, and/or App review domains as appropriate.
- Do not create `USES_MEDIA` edges from public content/chronicle as canonical links unless an existing Supabase relationship row exists or a later approved write creates one.
- Do not use candidate media as public proof without review.

Existing public display image rows:

- `species_images.id = 18` for species `24`, `flagfish-1.webp`
- `species_images.id = 35` for species `67`, `ghost-shrimp-1777648440986.webp`
- `biome_images.id = 1` for biome `1`, `biomes/Lake Biome 9 Jun 2025.jpg`

These are public display context, not proof that the Wave 1 media candidates have been reviewed or linked.

### Planner / System Context

Planner rows are not ecological truth, but they are useful for agent-routing and implementation-state questions.

| Row | State | Phase 1 handling |
|---|---|---|
| `work_projects.id = 75` | Active `Operation Living Intelligence Coordination` project | `WorkProject` / `ProgramContext` node for operator status and phase routing. |
| `tasks.id = 563` | Done Phase 0 | Phase-history node; confirms pivot closure. |
| `tasks.id = 564` | Open / active Phase 1 | Current source-map work node. |
| `tasks.id = 565-571` | Open / planned | Future phase nodes and approval-boundary context. |

Planner remains the live task-status source. This document must not compete with Planner as task truth.

## First Node Map

| Node label | Source rows or docs | Canonical source? | Include in core graph? | Notes |
|---|---|---:|---:|---|
| `Biome` | `biomes.id = 1` | Yes | Yes | Freshwater Lake. |
| `ContentItem` | `content_pipeline.id = 338` | Yes | Yes | Published source identity. |
| `Chronicle` | `chronicles.id = 30` | Yes | Yes | Public history record. |
| `Species` | `species.id = 24, 66, 67, 164, 167, 180` | Yes | Yes, with caveats | Some are unreviewed or context-only. |
| `Observation` | `observations.id = 170-178` | Yes | Yes | No direct pipeline/chronicle links. |
| `OpenLoop` | `open_loops.id = 1, 2, 3, 4, 7` | Yes | Yes | Review state must survive. |
| `StoryThread` | `story_threads.id = 1, 3, 5`; `30` as expansion | Yes | Yes for `1`, `3`, `5`; candidate for `30` | Thread `30` supports Moina follow-on. |
| `StoryBeat` | `story_beats.id = 6, 8, 9, 10, 13` | Yes | No, expansion candidate | Later observation-to-story layer. |
| `MediaAssetCandidate` | `media_assets` ids listed above | Yes for metadata; no for interpretation | Candidate only | All checked rows are unreviewed. |
| `PublicImage` | `species_images`, `biome_images` rows listed above | Yes | Context only | Display asset, not proof edge. |
| `WorkProject` | `work_projects.id = 75` | Yes for Planner status | Yes for operator context | Not ecological evidence. |
| `Task` | `tasks.id = 563-571` | Yes for Planner status | Yes for operator context | Not ecological evidence. |
| `GovernanceSource` | Company master plan, closeout, source packet, source-map docs | Yes for governance/context | Yes for retrieval packet | Markdown is source for rules and caveats. |
| `ReviewGate` | Derived from source packet and Company safety rules | No, derived | Yes | Helps expose review requirements. |
| `BlockedClaim` | Derived from packet caveats and Research/Company rules | No, derived | Yes | Prevents public overclaiming. |

## First Relationship Map

### Canonical Relationship Sources

| Relationship | Source table/field | Direction | Include now? | Notes |
|---|---|---|---:|---|
| `OBSERVED_IN` | `observations.biome_id` | `Observation -> Biome` | Yes | Observations `170-178` observed in biome `1`. |
| `PART_OF_BIOME` | `species_to_biomes` | `Species -> Biome` | Yes, with caveat | Species `66` links to biome `2`, while chronicle context places it in lake story; do not overstate. |
| `SOURCE_CONTENT_FOR` | `chronicles.source_pipeline_id` and `content_pipeline.chronicle_entry_id` | `ContentItem <-> Chronicle` | Yes | Canonical source identity. |
| `MENTIONS` | `chronicle_subject_links` | `Chronicle -> Species/Biome` | Yes | Link rows `17`, `22-28`; core seed uses `17`, `22-25`. |
| `PART_OF_STORY` | `observation_thread_links` | `Observation -> StoryThread` | Yes | 12 verified rows for observations `170-178`. |
| `SUPPORTS` | `observation_loop_links` | `Observation -> OpenLoop` | Yes | 13 verified rows for observations `170-178`. |
| `SOURCE_LOOP_FOR` | `open_loops.source_pipeline_id` | `ContentItem -> OpenLoop` | Yes | Loops `1`, `2`, `3`, `4`, `7` point to pipeline `338`. |

### Derived Review Relationships

These are not canonical Supabase rows. They should be generated only by projection rules and labeled as derived.

| Relationship | Derived from | Direction | Purpose |
|---|---|---|---|
| `NEEDS_REVIEW` | unreviewed species, unreviewed media, packet caveats, open loops | Node/edge -> ReviewGate | Preserve uncertainty and owner review. |
| `BLOCKED_FOR_PUBLIC` | packet caveats and Company/Research safety rules | Claim/edge/media -> BlockedClaim | Prevent public overclaiming. |
| `SUPPORTS` | source packet plus observation/link evidence | Observation/MediaCandidate/GovernanceSource -> ClaimCandidate | Allow evidence assembly without approving the claim. |
| `USES_MEDIA` | only existing canonical media links or approved candidate projection | ContentItem/Chronicle/StoryBeat -> MediaAssetCandidate | Candidate only for now; no canonical media link rows exist for chronicle `30`. |

### Do Not Create These Edges Yet

- No direct `Observation -> ContentItem` edge from `observations.pipeline_id` because `pipeline_id = null` for observations `170-178`.
- No direct `Observation -> Chronicle` edge from `observations.chronicle_id` because `chronicle_id = null` for observations `170-178`.
- No canonical `Chronicle -> MediaAsset` edge because `media_chronicles` returned no rows for chronicle `30`.
- No canonical `Species -> MediaAsset` edge because `media_species` returned no rows for the seed species.
- No canonical `Biome -> MediaAsset` edge because `media_biomes` returned no rows for biome `1`.
- No public claim edge that says Daphnia established, Daphnia cleared the lake, Ghost Shrimp recruited juveniles, Mesostoma became a public primary subject, or the food web is complete/stable.

## Retrieval Source Map

### Include In First Retrieval Baseline

| Source | Why include | Required metadata |
|---|---|---|
| `content_pipeline.id = 338` fields | Published source identity, description, open loops, URL | `table`, `id`, `published_url`, `status`, `biome_id`, `chronicle_entry_id`, `transcript_is_null`. |
| `chronicles.id = 30` fields | Public history identity and chronicle content | `table`, `id`, `source_pipeline_id`, `event_date`, `biome_id`, `media_type`. |
| Observations `170-178` | Primary evidence notes | `table`, `id`, `observed_at`, `biome_id`, `species_id`, `has_video`, `pipeline_id`, `chronicle_id`. |
| Open loops `1`, `2`, `3`, `4`, `7` | Question state and review warnings | `table`, `id`, `status`, `scope`, `source_pipeline_id`, `species_id`, `biome_id`. |
| Story threads `1`, `3`, `5` | Story continuity | `table`, `id`, `status`, `scope`, `species_id`, `biome_id`. |
| Seed species rows | Species status and caveats | `table`, `id`, `display_status`, `population_status`, `scientific_name`, owner domain. |
| Biome `1` | Freshwater Lake context | `table`, `id`, `name`, stability/status fields. |
| Source packet Markdown | Caveats, media review, publicness tiers, proposed-write boundaries | source path, owner, canonicality, publicness, claim status. |
| Company Intelligent Harness docs | Governance and approval boundaries | source path, owner, phase, approval gates. |
| Wave 5 retrieval synthesis | Retrieval and pgvector boundary | source path, owner, no-vector/no-implementation status. |

### Exclude From First Retrieval Baseline

- CRM and Financials row-level data.
- Raw private media sweeps beyond named candidate paths.
- Broader telemetry.
- Agent logs.
- Public website output generation.
- Vector embeddings or pgvector rows until a separate implementation decision approves them.
- Candidate media visual interpretations that have not passed Research/Content/Raw Footage/App review.

### Retrieval Posture

- Use the accepted local retrieval baseline and source-path/citation rules first.
- Treat pgvector as a later App-reviewed implementation path, not a Phase 1 requirement.
- Every retrieval chunk should carry source path or table/id, owner domain, canonicality, publicness, review status, claim status, and caveats.
- Because `content_pipeline.id = 338` has `transcript = null`, retrieval should rely on the Content source packet and archived project doc for transcript-equivalent narrative context until a canonical transcript/source-text path is approved.

## Publicness And Claim Gates

Blocked or review-required claims for the first scope:

| Claim or use | Gate |
|---|---|
| Daphnia identified beyond `Daphnia sp.` | Research review required. |
| Daphnia established or cleared the lake | Blocked for public until reviewed evidence supports it. |
| Ghost Shrimp juvenile recruitment or establishment | Blocked for public; breeding/zoea evidence still does not prove recruitment. |
| Mesostoma as a public primary chronicle subject | Research + Company + Content review required. |
| Moina reproduction/establishment | Review required; current state is uncertain. |
| Food web completed or stable | Blocked for public; loop `4` is advanced, not resolved. |
| Candidate media captions | Content + Research/Raw Footage/App review required depending on claim. |
| Chronicle `30` event-date change | Company + Content + Research approval required. |
| Any canonical record update | Explicit approval and owner-controlled write path required. |

## Minimum Phase 2/3 Projection Requirements

Before any Memgraph pilot or Supabase-to-Memgraph projection implementation, the next proposal must define:

- Exact source query list.
- Exact row-to-node mapping.
- Exact row-to-edge mapping.
- Derived vs canonical edge labeling.
- Publicness/review fields on every node or edge that can affect public use.
- Stale-source and rebuild timestamp fields.
- Source hash or source row updated-at tracking where available.
- Validation readback checks.
- No-write proof that Supabase is read only.
- Delete/rebuild behavior for local derived output.
- Live SQL metadata check path for FK/index/RLS/trigger proof, or an explicit accepted limitation.

## First Validation Checklist

The first graph/retrieval source-map validation should prove:

| Check | Expected result |
|---|---|
| Content source | One row: `content_pipeline.id = 338`. |
| Chronicle source | One row: `chronicles.id = 30`. |
| Biome source | One row: `biomes.id = 1`. |
| Chronicle subject links | Eight live rows for chronicle `30`; seed must explain why links `26-28` are context/out-of-seed if excluded. |
| Core seed species | Six rows: `24`, `66`, `67`, `164`, `167`, `180`. |
| Core observations | Nine rows: `170-178`. |
| Observation-loop links | Thirteen rows. |
| Observation-thread links | Twelve rows. |
| Open-loop context | Five rows: `1`, `2`, `3`, `4`, `7`. |
| Story-thread context | At least rows `1`, `3`, `5`; row `30` only as expansion context. |
| Direct observation source links | `pipeline_id = null` and `chronicle_id = null` for observations `170-178`. |
| Indexed media candidates | Thirteen `media_assets` rows, all `reviewed = false`. |
| Missing still candidates | Two filenames not found in `media_assets`. |
| Direct media links | No `media_chronicles`, no `media_species`, no `media_biomes` rows for the first scope. |
| Public display images | Existing `species_images` for `24` and `67`, existing `biome_images` for `1`; treat as display context only. |
| Planner phase context | Project `75` active; task `563` done; task `564` active; `565-571` planned. |
| Sensitive data exclusion | No CRM, Financials, broader telemetry, private contact, or agent-log rows. |
| Canonical writeback | Always `none` unless separately approved. |

## Open Questions

- Should first-scope species include live chronicle context species `65`, `169`, and `25`, or keep them as out-of-seed public context until Phase 2?
- Should observation species `156`, `59`, and story species `69` become explicit context nodes in Phase 1, or stay as referenced evidence only?
- Should story beats `6`, `8`, `9`, `10`, and `13` be included in the first graph pilot, or held until the observation-to-story expansion pass?
- What is the approved live SQL metadata path before implementation: Supabase MCP database tools, SQL Editor, `psql`, or App-owned read-only bridge?
- Should pgvector wait until after the local retrieval baseline is wired into the GraphRAG context packet, or should App prepare a local-only semantic evaluation proposal first?

## Not Approved

This source map does not approve:

- code implementation;
- helper creation;
- package installs;
- Supabase writes;
- Planner writes;
- schema migrations;
- raw SQL;
- Memgraph setup;
- graph import/export;
- generated output;
- App runtime changes;
- public Web output;
- media metadata writes;
- CRM/Financials/sensitive-data integration;
- scheduled jobs;
- canonical writeback.

## Next Step

Recommended next Company step:

```text
Prepare the Phase 1 source-map review packet: decide core seed vs expansion rows, resolve open scope questions, and produce the exact source-query list for a future no-write App/Memgraph proposal.
```

Recommended next implementation gate, only after review:

```text
Phase 2 proposal for bounded persistent local Memgraph pilot, still no implementation until explicitly approved.
```
