---
id: operation_living_intelligence_wave_3_no_write_app_implementation_proposal_2026-05-15
title: Operation Living Intelligence Wave 3 No-Write App Implementation Proposal
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-3, species, public-history, app-proposal, no-write, lake-post-seal]
status: local_helper_completed
---
# Operation Living Intelligence Wave 3 No-Write App Implementation Proposal

## Purpose

This is the Company-owned design-only proposal for the first **Operation Living Intelligence Wave 3: Species And Public History Expansion** local package.

The proposed package would help answer:

```text
What can we safely say publicly about this species, and why?
```

It should generate local JSONL/readback files for the Lake Post-Seal species/public-history packet while preserving publicness, claim confidence, uncertainty, media-review state, and cross-domain review gates.

This document does not approve App repo edits, helper implementation, graph generation, Memgraph/Docker use, Supabase/Planner writes, Research writes, Content writes, Web changes, public copy, media metadata writes, species-image changes, automation, public output, paid tools, source-of-truth migration, canonical writeback, or any public, sponsor, financial, legal, launch, or roadmap commitment.

## Proposed Decision

Ask App to review a future no-write local implementation shaped like this:

```text
protected read-only source refresh
-> local source_manifest.json
-> local nodes.jsonl / edges.jsonl / blocked_edges.jsonl
-> local validation_report.json
-> local species_public_history_readback_report.json
-> local species_public_history_readback_report.md
-> no canonical writeback
```

The first Wave 3 package should remain JSONL/readback-first. Cypher/Memgraph output should stay deferred unless the JSONL readback exposes a question that cannot be answered by local files.

## Source Baseline

Use these Company records as the proposal baseline:

| Source | Path |
|---|---|
| Wave 3 design | `domains/company/operation_living_intelligence_wave_3_species_public_history_design_2026-05-15.md` |
| Source availability review | `domains/company/operation_living_intelligence_wave_3_lake_post_seal_source_availability_review_2026-05-15.md` |
| Wave 1 public reuse sidecar boundary | `domains/company/operation_living_intelligence_wave_1_public_reuse_boundary_2026-05-15.md` |
| Wave 1 public reuse sidecar generation | `domains/company/operation_living_intelligence_wave_1_1_public_reuse_sidecar_generation_2026-05-15.md` |
| Wave 2 readback review | `domains/company/operation_living_intelligence_wave_2_readback_review_2026-05-15.md` |
| Task `409` schema/data audit | `archive/superseded/operation-living-intelligence/operation_living_intelligence_task_409_schema_data_audit_2026-05-15.md` |
| Projection matrix | `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-data-projection-matrix.md` |

Implementation-time generation must still refresh protected source reads before writing local output. This proposal uses same-day audit/readback records as a design baseline, not as permission to skip source refresh.

## Exact Source Manifest

The first proposed Wave 3 package should include only the Lake Post-Seal species/public-history packet and directly connected current source rows.

### Public Anchors

| Source family | Rows |
|---|---|
| Published content anchor | `content_pipeline.id = 338` |
| Public chronicle anchor | `chronicles.id = 30` |
| Primary biome context | `biomes.id = 1` / Freshwater Lake |
| Chronicle subject context | `chronicle_subject_links` for chronicle `30`, refreshed at implementation time |

### Primary Species

Include these primary species:

| Species id | Role | Required posture |
|---:|---|---|
| `24` | Flagfish public-history subject | Preserve removal as scale-management/food-web decision; do not frame as failure by default. |
| `67` | Ghost Shrimp public-history subject | Breeding is recorded, but juvenile recruitment and long-term establishment remain review-required. |
| `164` | Daphnia public-history subject | Keep as `Daphnia sp.`; block species-level ID, establishment, and water-clearing causation claims. |

### Public Chronicle Context Species

Include these only as public chronicle context, not standalone public-history proof:

| Species id | Role | Required posture |
|---:|---|---|
| `66` | Freshwater amphipod context subject | Context-only unless Research approves stronger wording. |
| `65` | Calanoid copepod context subject | Context-only; do not promote to standalone event. |
| `169` | Cyclopoid copepod context subject | Context-only; do not promote to standalone event. |
| `25` | Slough Crayfish context subject | Context-only; preserve unresolved crayfish/Mesostoma tension. |

### Internal / Review-Required Source Context

Include these only as source-context species with blocked public chronicle linkage unless a direct source path is refreshed and approved:

| Species id | Role | Required posture |
|---:|---|---|
| `167` | Mesostoma Flatworm | Internal/open-loop context by default; public-primary explanation remains blocked. |
| `180` | Moina | Review-required context only; establishment remains unresolved. |

### Evidence And Story Context

Include these as provenance/review context, not automatic public copy:

| Source family | Rows |
|---|---|
| Observations | `observations.id in (170, 171, 172, 173, 174, 175, 176, 177, 178)` |
| Observation-thread joins | `observation_thread_links` for observations `170-178` |
| Observation-loop joins | `observation_loop_links` for observations `170-178` |
| Open loops | `open_loops.id in (1, 2, 3, 4, 7)` |
| Story threads | `story_threads.id in (1, 3, 5)` |
| Story beats | `story_beats.id in (6, 8, 9, 10, 13)` as candidate/unseen story material |
| Content calendar context | `content_calendar.id in (11, 12)` through loop `3`, with status preserved |

Observations `170-178` must remain `chronicle_id = null`, `pipeline_id = null`, and `promoted_to_chronicle = false` unless implementation-time reads prove a separately approved source change.

### Public Surface Candidates

Use the Wave 1.1 public reuse sidecar as candidate public-surface context only:

| Surface | Handling |
|---|---|
| `/chronicles#chronicle-30` | Existing public source identity. |
| `content_pipeline.published_url` | Existing public source identity. |
| `/biomes/freshwater-lake` | Candidate public context; Web/Research review required. |
| `/species/flagfish` | Candidate species-history surface; Research/Web/Content review required. |
| `/species/daphnia-sp` | Candidate caveat-only surface; Research review required before stronger wording. |
| `/species/ghost-shrimp` | Candidate caveat-only surface; preserve juvenile-recruitment uncertainty. |
| `/species/freshwater-amphipod` | Candidate context-only surface. |
| `/species/moina` | Block public output in this wave. |
| Mesostoma species surface | Block public output in this wave unless a direct reviewed surface is refreshed. |
| `/biosphere#biosphere-ecosystem-map` | Out of scope for this package. |
| News/events/newsletter surfaces | Out of scope for this package. |

### Media And Existing Images

Include the thirteen packet media rows only as review-required `MediaCandidate` nodes:

```text
media_assets.id in (
  9497, 9499, 9537, 9538, 9540, 9548, 9554,
  9557, 9561, 9562, 9563, 19311, 35558
)
```

Expected source-review state:

```text
reviewed = false for all 13 rows
```

Existing public display images may be included as separate display-context nodes only:

| Source | Handling |
|---|---|
| `species_images` for species `24` / `flagfish-1.webp` | Existing display asset; not proof for this packet. |
| `species_images` for species `67` / `ghost-shrimp-1777648440986.webp` | Existing display asset; not proof for this packet. |
| `biome_images` for biome `1` / `biomes/Lake Biome 9 Jun 2025.jpg` | Existing display asset; not proof for this packet. |

Do not infer direct `media_chronicles`, `media_biomes`, or `media_species` proof links for this packet. The task `409` audit found zero direct links for the bounded seed.

## Excluded Scope

Exclude by default:

- broad species database projection;
- broad Web/public page update planning;
- public copy, captions, alt text, or species-card edits;
- unrelated chronicles;
- unrelated content calendar rows;
- unrelated story threads or open loops;
- broad media library scans;
- raw private media sweeps;
- unreviewed media as proof;
- direct public linkage for Mesostoma or Moina;
- CRM;
- Financials row-level data;
- private contacts;
- broader telemetry;
- agent logs;
- App runtime state;
- canonical writeback targets.

## Recommended Local Output Location

Recommended App-owned ignored path:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_3_species_public_history\lake_post_seal\
```

Expected generated files if later approved:

| File | Purpose |
|---|---|
| `source_manifest.json` | Included rows, excluded source families, source timestamps, refresh result, publicness baseline, and approval boundary. |
| `nodes.jsonl` | Derived nodes with stable `global_id`, source identity, status, publicness, confidence, and review state. |
| `edges.jsonl` | Derived relationships with endpoint validity, source basis, and review gate state. |
| `blocked_edges.jsonl` | Guardrails for unsafe public wording, claim promotion, media proof, chronology, and canonical writeback. |
| `validation_report.json` | Counts, uniqueness, endpoint, source-refresh, publicness, confidence, media-review, and no-write checks. |
| `species_public_history_readback_report.json` | Machine-readable answers to the Wave 3 pilot questions. |
| `species_public_history_readback_report.md` | Human-readable readback for Research/Content/Web/App review. |
| `readback_examples.md` | Short public-history query examples and expected blocked-answer shapes. |

No generated graph data should be committed unless Josue separately approves sanitized fixtures.

## Proposed Node Types

| Node type | Example `global_id` | Notes |
|---|---|---|
| `SpeciesHistoryPacket` | `wave3_packet:lake_post_seal_species_public_history` | Derived package identity. |
| `Species` | `species:164` | Canonical species identity and current state. |
| `Biome` | `biome:1` | Habitat/system context. |
| `Chronicle` | `chronicle:30` | Public chronicle anchor. |
| `PublicHistoryEvent` | `public_history_event:chronicle_30` | Derived event view over the chronicle/content path. |
| `ContentItem` | `content_pipeline:338` | Published content identity. |
| `ChronicleSubjectLink` | `chronicle_subject_link:23` | Explicit public-history subject routing. |
| `Observation` | `observation:176` | Evidence/source context, not public copy. |
| `StoryThread` | `story_thread:5` | Story-continuity context from Wave 2. |
| `OpenLoop` | `open_loop:4` | Open or advanced unresolved question. |
| `StoryBeat` | `story_beat:8` | Available/unseen candidate story material. |
| `PublicSurface` | `public_surface:/species/daphnia-sp` | Candidate public page/surface identity. |
| `MediaCandidate` | `media_asset:9548` | Candidate media with review state. |
| `DisplayAsset` | `species_image:24:flagfish-1.webp` | Existing display image, not proof. |
| `Claim` | `claim:daphnia_cleared_lake` | Claim-like statement with confidence/publicness state. |
| `ReviewGate` | `review_gate:research_daphnia_establishment` | Research, Content, Web, App, Raw Footage, or Company gate. |
| `BlockedInference` | `blocked_inference:daphnia_established` | Explicit unsafe/public-overclaim guardrail. |
| `StatusMarker` | `status:review_required` | Optional explicit state marker when useful for readback. |

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
- `confidence_tier`
- `review_state`
- `owner_domain`
- `safe_summary`
- `do_not_infer`

## Proposed Edge Types

| Edge type | Use |
|---|---|
| `PACKET_INCLUDES` | Packet to included source/context nodes. |
| `HAS_PUBLIC_HISTORY` | Species or biome to public-history event when direct source path exists. |
| `MENTIONED_IN_CHRONICLE` | Chronicle to explicitly linked subject rows. |
| `SOURCE_CONTENT_FOR` | Published content anchors the chronicle/public-history event. |
| `HAS_CHRONICLE_SUBJECT_LINK` | Chronicle to exact subject-link row. |
| `HAS_POPULATION_STATE` | Species to current/historical population-status context. |
| `HAS_UNCERTAINTY` | Species, claim, chronology, or relationship has review-required uncertainty. |
| `SUPPORTED_BY_OBSERVATION_CONTEXT` | Claim/history path has observation context without public-copy promotion. |
| `PART_OF_THREAD_CONTEXT` | Observation/beat/calendar context to story thread. |
| `ADVANCES_LOOP_CONTEXT` | Observation/content/calendar context to open loop, without resolving it. |
| `PUBLIC_SURFACE_CANDIDATE_FOR` | Public surface might reuse a history path after review. |
| `DISPLAY_ASSET_FOR` | Existing species/biome image is a display asset, not proof. |
| `CANDIDATE_MEDIA_FOR` | Media may support species/history after review. |
| `REQUIRES_REVIEW` | Any path needs Research, Content, Web, App, Raw Footage, or Company review. |
| `BLOCKS_PUBLIC_USE_OF` | Guardrail node blocks unsafe public or proof inference. |

Avoid proof-like edge names for uncertain or review-needed paths. In particular, do not use `PROVES` in the first Wave 3 package.

## Status Rules

The helper must preserve these states:

| State | Rule |
|---|---|
| Public history | Existing chronicles and published content may anchor public-history identity, but do not approve new wording. |
| Public-safe claim | A claim is public-safe only after Research/Content/Web review confirms wording, source path, uncertainty, and publicness. |
| Species-card candidate | A suggested species-card improvement remains candidate material until Web/Research approval. |
| Context-only | Chronicle context species can be named as context only, not promoted into standalone public-history claims. |
| Internal | Research notes, source observations, open-loop context, and non-linked species remain internal or review-required. |
| Planned/unseen story material | Story beats and planned calendar rows are story context, not published history. |
| Media proof | Media is proof only after exact asset/frame/timecode and caption/use context are reviewed. |
| Existing display image | Existing species/biome images are display assets, not proof for the Lake Post-Seal packet. |
| Canonical writeback | Always `none`. |

## Required Blocked Edges

Write unsafe or overreaching paths to `blocked_edges.jsonl`.

| Blocked inference | Reason |
|---|---|
| Daphnia species-level ID stronger than `Daphnia sp.` | Research review required. |
| Daphnia establishment | Unresolved. |
| Daphnia caused/cleared the lake | Causation overclaim. |
| Ghost Shrimp juvenile recruitment confirmed | Breeding is recorded, recruitment remains unresolved. |
| Ghost Shrimp long-term establishment confirmed | Current state remains vulnerable/review-required. |
| Flagfish removal framed as failure | Source framing should preserve scale-management/food-web decision. |
| Mesostoma inferred as public chronicle subject | Not linked to chronicle `30`. |
| Mesostoma used as public-primary explanation | Internal/open-loop context by default. |
| Moina inferred as public chronicle subject | Not linked to chronicle `30`. |
| Moina establishment | Unresolved. |
| Context species treated as standalone public-history proof | Chronicle context does not equal standalone event proof. |
| Observations treated as public copy | Observations are source context; not public text. |
| Planned calendar row `12` treated as published history | It is planned, not published. |
| Available/unseen story beats treated as published history | They are candidate story material. |
| Existing species/biome image treated as packet proof | Display assets are not proof for this packet. |
| Unreviewed media treated as proof/caption/alt text | All 13 packet media rows were unreviewed at source review. |
| Chronology changed from `2026-04-17` to event range | Event-date/range change requires separate review. |
| Public Web output generated from graph output | Web remains downstream review only. |
| Canonical update proposed automatically | Wave 3 canonical writeback is `none`. |

## Validation Checks

The validation report should include:

| Check | Expected result |
|---|---|
| Source refresh | All selected source rows exist or stop condition fires. |
| Source counts | `1` pipeline anchor, `1` chronicle anchor, `1` biome, `8` chronicle subject links, `9` selected species/context rows, `9` observations, `5` open loops, `3` story threads, `5` story beats, `2` calendar entries, `13` media candidates. |
| Subject link explicitness | Primary and context public-history subject paths use refreshed `chronicle_subject_links`; Mesostoma and Moina are not inferred as chronicle subjects. |
| Observation direct-link guard | Observations `170-178` remain non-public-copy context unless direct source fields changed and were separately approved. |
| Public surface labels | Every candidate public surface carries publicness tier and review state. |
| Claim labels | Every claim-like node/edge carries confidence, uncertainty, and owner-domain review state. |
| Media review | All media nodes carry current `reviewed` state and review gate. |
| Display image distinction | Existing species/biome images are not treated as proof. |
| Node uniqueness | No duplicate `global_id`. |
| Edge endpoint validity | Every edge endpoint exists in `nodes.jsonl`. |
| Status explicitness | Public, candidate, context-only, internal, blocked, planned, unseen, and review-required states are present where applicable. |
| Blocked edges | Required blocked inferences are present. |
| Sensitive exclusion | No CRM, Financials row-level data, private contacts, raw private media sweep, broader telemetry, or agent logs. |
| No writes | No Supabase, Planner, App runtime, Web, Content, Research, media, Markdown source-of-truth, or public-output writes. |
| Rebuildability | Output folder can be deleted and regenerated from source reads. |

## Readback Examples

### What public history exists for Daphnia?

Expected answer shape:

```text
Path status: review_required
Public-history anchor: chronicle:30 and content_pipeline:338 mention Daphnia sp. through chronicle_subject_link:23.
Safe claim: Daphnia sp. is part of the Lake Post-Seal public-history context.
Do not say: Daphnia is established, identified beyond Daphnia sp., or cleared the lake.
Review required: Research, Content, Web before stronger public wording.
Canonical writes implied: none.
```

### What is the strongest Ghost Shrimp public-history claim?

Expected answer shape:

```text
Path status: caveat_required
Public-history anchor: chronicle:30 and content_pipeline:338 mention Ghost Shrimp through chronicle_subject_link:24.
Safe claim: Ghost Shrimp are part of the Lake Post-Seal public-history context; breeding is recorded in the species row.
Do not say: juvenile recruitment or long-term establishment is confirmed.
Review required: Research and Content before public species-card wording changes.
Canonical writes implied: none.
```

### How should Flagfish be framed?

Expected answer shape:

```text
Path status: public_history_with_framing_guardrail
Public-history anchor: chronicle:30 and content_pipeline:338 mention Flagfish through chronicle_subject_link:22.
Safe claim: Flagfish removal is part of the Lake Post-Seal food-web management history.
Do not say: the species failed, was bad, or caused the outcome by itself.
Review required: Content/Web for wording, Research for ecological nuance.
Canonical writes implied: none.
```

### Can Mesostoma be linked publicly to this chronicle?

Expected answer shape:

```text
Path status: blocked_or_internal_only
Safe claim: Mesostoma is source-context/open-loop material in the seed, not an explicit chronicle 30 subject.
Do not say: Mesostoma is the public explanation for the lake outcome or a public chronicle subject.
Review required: Research before any public-primary use.
Canonical writes implied: none.
```

### Which public surfaces could use this history?

Expected answer shape:

```text
Path status: candidate_review_required
Candidate surfaces: chronicle anchor, published YouTube source, Freshwater Lake biome page, Flagfish species page, Daphnia sp. species page, Ghost Shrimp species page, Freshwater amphipod species page.
Blocked/out-of-scope surfaces: Moina, Mesostoma unless refreshed/reviewed, biosphere ecosystem map, news/events/newsletter.
Review required: Web, Research, Content, App/media where images or media are involved.
Canonical writes implied: none.
```

### What media proves the species history?

Expected answer shape:

```text
Path status: review_required
Safe claim: Thirteen packet media rows exist as candidates, and existing Flagfish/Ghost Shrimp display images exist, but none are approved proof for this packet by default.
Do not say: media proves the event, is approved for captions, or is approved species-card evidence.
Review required: App media review, Raw Footage, Content, Research, Web.
Canonical writes implied: none.
```

## Stop Conditions

Stop before writing local output if:

- any selected source row is missing;
- publicness, confidence, or review state is ambiguous;
- chronicle subject links cannot be refreshed;
- context species are promoted beyond context-only;
- Mesostoma or Moina are inferred as public chronicle subjects;
- observations are treated as public copy;
- species-card candidates are treated as approved Web output;
- planned or unseen story material is treated as published history;
- unreviewed media is treated as proof;
- existing display images are treated as proof for this packet;
- Daphnia, Ghost Shrimp, Flagfish, Mesostoma, Moina, chronology, or food-web-completion guardrails are missing;
- output path is not ignored by git;
- any helper requires Supabase/Planner/App runtime/Web/Content/Research/media writes;
- any helper requires persistent service, cloud upload, paid tool, or automation.

## Review Owners

| Review | Owner |
|---|---|
| Local ignored output path, protected read helper pattern, validation/readback checks, deletion/rebuild behavior | App |
| Species truth, public-safe claims, uncertainty, relationship confidence, blocked claim posture | Research |
| Published source meaning, chronicle/story framing, public wording, planned/unseen story material boundaries | Content |
| Species cards, public pages, public surface candidates, rendering behavior | Web |
| Exact media identity, proof status, caption/alt-text readiness, existing image use | App Media / Raw Footage / Content / Research |
| Program governance, sequencing, approval gates, cross-domain closeout | Company |

## App Design Review Request

When this moves to App scope, ask App to review these questions only:

```text
Please review the Operation Living Intelligence Wave 3 no-write App implementation proposal as a design-only App review.

Requested decision:
- Is the proposed ignored output path acceptable?
- Is JSONL/readback-first still the right first shape?
- What App-owned protected source refresh helper pattern should be used?
- What validation/readback checks should App require before generated output?
- Should Cypher/Memgraph remain deferred unless JSONL readback cannot answer the species-public-history questions?

Not requested:
- No App code changes yet.
- No graph generation yet.
- No Docker/Memgraph use.
- No Supabase/Planner writes.
- No schema/runtime changes.
- No media metadata changes.
- No Web/public behavior.
- No Research/Content record changes.
- No automation.
```

## Next Gate

The App docs-only design review gate is complete. The next gate is explicit implementation approval for the smallest local JSONL/readback helper, not broader App runtime or graph implementation.

Josue approved continuing to the App design-review gate on 2026-05-15. Company prepared the App design-review packet here:

```text
domains/company/operation_living_intelligence_wave_3_app_design_review_packet_2026-05-15.md
```

App completed the docs-only review note here:

```text
M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave3-design-review.md
```

App accepted the proposed ignored output path, JSONL/readback-first package shape, source-scope posture, blocked-edge guardrails, validation/readback requirements, and `none` canonical writeback boundary for a future separately approved helper. At that gate, App helper implementation, graph generation, local source refresh, Memgraph/Docker use, Supabase/Planner writes, public behavior, and canonical writeback remained unapproved pending explicit implementation approval.

Josue later approved the smallest local helper implementation. App added and verified:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave3-species-public-history-jsonl.js
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave3-species-public-history-readback.js
```

Generated output validated under:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_3_species_public_history\lake_post_seal\
```

Company recorded the helper result and readback review here:

```text
domains/company/operation_living_intelligence_wave_3_jsonl_readback_helper_2026-05-15.md
domains/company/operation_living_intelligence_wave_3_readback_review_2026-05-15.md
```

## Verification

- Built from the Wave 3 design and source-availability review.
- Uses same-day task `409` audit and Wave 1/Wave 2 local readbacks as design baseline.
- App docs-only review note was created at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave3-design-review.md`.
- App local helper and readback were verified after explicit implementation approval.
- No Supabase/Planner writes were performed.
- No App runtime, schema, public site, graph database, export/import job, media metadata, model run, cloud upload, paid tool, automation, source-of-truth record, public promise, sponsor commitment, financial commitment, legal decision, launch target, or roadmap commitment changed.
