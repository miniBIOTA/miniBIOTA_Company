---
id: operation_living_intelligence_wave_3_species_public_history_design_2026-05-15
title: Operation Living Intelligence Wave 3 Species And Public History Expansion Design
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-3, species, public-history, research, web, content, app, no-write]
status: docs_only_design
---
# Operation Living Intelligence Wave 3 Species And Public History Expansion Design

## Objective

Wave 3 should make agents better at answering:

```text
What can we safely say publicly about this species, and why?
```

Wave 1 proved a bounded ecological source packet can become a safe derived graph/readback. Wave 2 proved that story continuity can be projected locally without turning planned, draft, or candidate material into public history. Wave 3 should connect those two patterns to species-level public history while keeping Research, Content, Web, App, and Company review gates explicit.

This is a docs-only design pass. It does not approve implementation.

## Decision Boundary

Wave 3 is allowed to define the design, source scope, pilot questions, validation gates, and downstream review needs for a future no-write App helper proposal.

It does not approve:

- App helper implementation;
- Memgraph/Cypher work;
- persistent graph infrastructure;
- scheduled sync or automation;
- Supabase or Planner writes;
- `species`, `biomes`, `chronicles`, `chronicle_subject_links`, ecosystem relationship, content, media, or Web record writes;
- media metadata writes;
- species image changes;
- Web/public behavior;
- public species copy, captions, alt text, or page updates;
- Research claim changes;
- source-of-truth migration;
- public, sponsor, financial, legal, launch, or roadmap commitments.

## Source Scope

Wave 3 should begin with the Lake Post-Seal public-history packet already used by Wave 1 and Wave 2. It should not start as a full species database projection.

Candidate source families:

| Source | Role In Wave 3 | Canonical Owner |
|---|---|---|
| `species` | Species identity, display/public status, population state, last-seen context, uncertainty, and public-card readiness signals | Research/Web/App |
| `biomes` and `biosphere_profile` | Public habitat/system context for species history | Research/Web/App |
| `chronicles` | Public history entries and dated/public event text | Content/Web/Research |
| `chronicle_subject_links` | Explicit public-history subject routing from chronicles to species, biomes, systems, or other subjects | Content/Web/Research |
| `observations` | Evidence/source context for ecological events, not automatic public claims | Research/Content |
| Existing ecosystem relationship rows | Public relationship context only when rows are reviewed/approved for public use | Research/Web/App |
| `content_pipeline` | Published source identity and public video/page URL where directly connected | Content |
| Wave 1 public reuse sidecar | Candidate public surfaces and review gates, not approval for public output | Company/App/Web/Content/Research |
| Wave 2 story readback | Published/planned/candidate story continuity context, not public copy approval | Content/Research/Web/App |
| `media_assets`, species images, and image link tables | Candidate proof and public-image readiness state only | App/Raw Footage/Content/Research/Web |
| Research notes or Living Atlas validation notes | Claim labels, uncertainty, publicness, and review outcomes when explicitly included | Research |

Implementation-time source selection must use a fresh source audit. This design should not assume every listed source family is currently export-ready, publicly reviewed, or directly linked.

## First Pilot Packet

Recommended first Wave 3 packet:

```text
Lake Post-Seal Species/Public History packet
anchor chronicle: chronicles.id = 30
anchor content: content_pipeline.id = 338
primary species: Flagfish 24, Ghost Shrimp 67, Daphnia 164
primary biome: Freshwater Lake
context subjects: Freshwater amphipods 66, Calanoid copepods 65, Cyclopoid copepods 169, Slough Crayfish 25, Mesostoma 167, Moina 180 if directly supported by the approved source scope
```

The packet should stay small enough to inspect by hand. The purpose is to test species-public-history reasoning, not to backfill every species page.

Known starting caveats from the existing Lake Post-Seal packet:

- Daphnia `164` has high public-story value but needs Research review for identification, establishment, and public-readiness language.
- Ghost Shrimp `67` public history should preserve juvenile recruitment uncertainty.
- Flagfish `24` should avoid failure framing; removal was a scale-management/food-web decision in the source packet.
- Mesostoma `167` is central to the unresolved predator-pressure tension, but public linking still needs Research review.
- The current chronicle date may reflect publication date rather than ecological event timing, so chronology should remain review-gated.
- Media candidates remain unreviewed unless a later Content/Raw Footage/App/Research review approves specific proof use.

## Proposed Node Types

| Node | Meaning |
|---|---|
| `Species` | A canonical species row or public species identity. |
| `Biome` | A biome or habitat context node. |
| `PublicHistoryEvent` | A chronicle/event identity suitable for public-history review. |
| `Chronicle` | A public chronicle row and its current public text/date/source identity. |
| `ContentItem` | A published source or directly connected content identity. |
| `Observation` | Evidence/source context from Research/Supabase. |
| `Claim` | A claim-like statement requiring status, confidence, and publicness labels. |
| `Relationship` | A species-species, species-biome, or ecological relationship candidate. |
| `PublicSurface` | A possible Web species page, species card, chronicle page, content page, or public relationship surface. |
| `ReviewGate` | Research, Content, Web, App, Raw Footage, or Company approval gate. |
| `MediaCandidate` | Candidate image/video proof with review state. |
| `StatusMarker` | Public, internal, review-required, uncertain, observed, inferred, blocked, or canonical-writeback-none status. |

## Proposed Edge Types

| Edge | Meaning |
|---|---|
| `HAS_PUBLIC_HISTORY` | Species or biome is connected to a chronicle/public-history event. |
| `MENTIONED_IN_CHRONICLE` | Subject is explicitly linked or named by public history. |
| `SUPPORTED_BY_OBSERVATION` | Public-history or claim path has observation evidence. |
| `SOURCE_CONTENT_FOR` | Published content supports or anchors a public-history event. |
| `HAS_POPULATION_STATE` | Species has a current or historical population-status context. |
| `HAS_UNCERTAINTY` | Species, claim, or relationship has ID, establishment, recruitment, date, or causation uncertainty. |
| `RELATED_TO_SPECIES` | Species has a relationship candidate or reviewed relationship to another species. |
| `LIVES_IN_BIOME` | Species is connected to a biome or habitat context. |
| `PUBLIC_SURFACE_CANDIDATE_FOR` | A public surface might safely reuse a species/history path after review. |
| `CANDIDATE_MEDIA_FOR` | Media may support a species/history surface, pending review. |
| `REQUIRES_REVIEW` | A path needs Research, Content, Web, App, Raw Footage, or Company review before use. |
| `BLOCKS_PUBLIC_USE_OF` | A gate prevents public output or claim use. |

## Status Rules

Wave 3 must preserve these distinctions:

| State | Rule |
|---|---|
| Public history | Only existing public chronicles, published content, or reviewed public Web/relationship rows can support public-history status. |
| Public-safe claim | A claim is public-safe only after Research/Content/Web review confirms wording, source path, uncertainty, and publicness. |
| Species-card candidate | A suggested species-card improvement remains candidate material until Web/Research approval. |
| Uncertain | ID, establishment, recruitment, event date, causation, and relationship uncertainty must stay visible. |
| Internal | Research notes, packet caveats, source observations, and unreviewed media remain internal or review-required unless promoted by the owner. |
| Media proof | Media is proof only after exact asset/frame/timecode and caption/use context are reviewed. |
| Canonical writeback | Always `none` for Wave 3 derived outputs. Proposed writes must remain review notes only. |

## Pilot Questions

Wave 3 should be judged by whether it answers questions like these better than ordinary lookup:

1. What public history currently exists for this species?
2. Which chronicles, published content, and observations support that history?
3. Which species-card or public-page facts are already safe, and which are only candidates?
4. What uncertainty blocks stronger wording?
5. Which related species, biome, or food-web relationships are reviewed, candidate, or blocked?
6. Which event date or event-range caveats matter before public reuse?
7. Which media might support the public history, and why is it still review-required?
8. Which public surfaces could use the history after review?
9. What should Research review next before public species wording changes?
10. What should Web/Content/App review before a species card, public page, media proof, or relationship display changes?

## Validation Gates

Every future Wave 3 generated package should prove:

- source manifest lists every included row/path and excluded source family;
- no node has duplicate `global_id`;
- every edge endpoint exists;
- species IDs, biome IDs, chronicle IDs, content IDs, observation IDs, and media IDs remain traceable;
- public/internal/review-required labels are explicit;
- claim confidence and uncertainty labels are explicit;
- chronicle subject links are not inferred when no explicit source path exists;
- observations are not treated as public copy by default;
- candidate relationship rows are not treated as reviewed public relationships;
- species-card candidates are not treated as approved Web output;
- unreviewed media remains review-gated;
- no canonical writeback exists;
- readback names Research, Content, Web, App, Raw Footage, and Company review needs where relevant;
- stop conditions trigger on missing source rows, ambiguous publicness, unreviewed claim promotion, unsupported chronology, missing relationship-review state, media-review loss, or public-output implication.

## Suggested Output Layout

If implemented later, use a separate ignored App output folder:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_3_species_public_history\
```

For the first packet:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_3_species_public_history\lake_post_seal\
```

Expected file family:

```text
source_manifest.json
nodes.jsonl
edges.jsonl
blocked_edges.jsonl
validation_report.json
species_public_history_readback_report.json
species_public_history_readback_report.md
readback_examples.md
```

JSONL/readback should come before Cypher/Memgraph. A graph runtime is only useful if the readback reveals a query that local files cannot answer well.

## Cross-Domain Handoff

| Domain | Owns | Wave 3 Need |
|---|---|---|
| Company | Sequencing, governance, publicness boundaries, next-wave decision | Keep this as design/source-scope work until implementation is explicitly approved. |
| Research | Species truth, ecological relationships, claim labels, uncertainty, public readiness | Define which species facts and relationships can become public-safe, candidate, or blocked. |
| Content | Published source identity, story continuity, chronicle/source-packet context, public wording review | Confirm source/story context before any species public-history wording or caption is drafted. |
| Web | Public species cards, public pages, public relationship rendering, public UI behavior | Treat all candidate public surfaces as blocked until Web/Research/Content review approves them. |
| App | Helper implementation, output location, protected reads, validation/readback tooling | Only implement a local ignored-output helper after explicit approval and App design review. |
| Raw Footage/App Media | Proof assets, exact media identity, review state, image/caption readiness | Keep all media as candidate proof until exact asset and use context are reviewed. |
| Brand/Growth | Public language fit and commitment discipline if surfaced publicly | No sponsor, campaign, launch, or public-promise language is created by Wave 3. |

## Recommended Next Action

Before building anything, complete a Wave 3 source-availability review for the Lake Post-Seal packet.

That review should confirm:

- current species rows for `24`, `67`, `164`, and directly included context species;
- current biome row for Freshwater Lake;
- chronicle `30` subject links and event-date semantics;
- whether any reviewed public ecosystem relationship rows are in scope;
- whether Research has current publicness/confidence notes for Daphnia, Ghost Shrimp, Flagfish, Mesostoma, and related food-web claims;
- whether any public species images or media links are already reviewed;
- which Wave 1/Wave 2 outputs can be reused as local source context without becoming canonical truth.

At this gate, the next step is source-availability review only. App helper work, graph generation, public output, Research/Web/Content writes, media metadata writes, Planner/Supabase writes, and canonical writeback remain unapproved.

## Source Availability Review

Company completed the Wave 3 source-availability review on 2026-05-15:

```text
domains/company/operation_living_intelligence_wave_3_lake_post_seal_source_availability_review_2026-05-15.md
```

Result: the Lake Post-Seal packet is source-available for a future no-write Wave 3 App proposal.

The review confirms enough same-day source context to model:

- published source identity through `content_pipeline.id = 338`;
- public chronicle identity through `chronicles.id = 30`;
- Freshwater Lake as the primary biome context;
- chronicle subject links for Flagfish `24`, Daphnia `164`, Ghost Shrimp `67`, Freshwater amphipod `66`, Calanoid copepods `65`, Cyclopoid copepods `169`, and Slough Crayfish `25`;
- source-context species Mesostoma `167` and Moina `180` as review-required/non-linked context;
- observations, open loops, and Wave 2 story continuity as provenance/review context;
- Wave 1 public reuse sidecar surfaces as candidate public surfaces only;
- media and species-image context with review gates preserved.

The recommended next step is a no-write Wave 3 App implementation proposal for local JSONL/readback only. App repo edits, helper implementation, graph generation, Memgraph/Docker use, Supabase/Planner writes, public output, Web changes, Research changes, Content copy, media metadata writes, automation, and source-of-truth migration remain unapproved.

## No-Write App Proposal

Company prepared the Wave 3 no-write App implementation proposal on 2026-05-15:

```text
domains/company/operation_living_intelligence_wave_3_no_write_app_implementation_proposal_2026-05-15.md
```

The proposal keeps the first Wave 3 implementation shape local, JSONL/readback-first, and App-review-gated. It specifies the exact Lake Post-Seal source manifest, context/public-history species handling, proposed nodes and edges, blocked inferences, validation checks, readback examples, stop conditions, review owners, and the proposed ignored App output path.

Josue approved continuing to the App design-review gate on 2026-05-15. Company prepared the App design-review packet here:

```text
domains/company/operation_living_intelligence_wave_3_app_design_review_packet_2026-05-15.md
```

App completed the docs-only design review note here:

```text
M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave3-design-review.md
```

The next gate is explicit approval for the smallest local Wave 3 JSONL/readback helper and ignored generated output. App helper implementation, graph generation, Memgraph/Docker use, Supabase/Planner writes, public output, Web changes, Research changes, Content copy, media metadata writes, automation, and canonical writeback remain unapproved.

## Local Helper And Readback

Josue later approved the smallest local Wave 3 JSONL/readback helper implementation. App added and verified the helper, and Company recorded the result here:

```text
domains/company/operation_living_intelligence_wave_3_jsonl_readback_helper_2026-05-15.md
domains/company/operation_living_intelligence_wave_3_readback_review_2026-05-15.md
```

Result: Wave 3 is closed as a successful no-Docker local species/public-history proof. Cypher/Memgraph, public output, App runtime integration, Supabase/Planner writes, Research/Web/Content writes, media metadata writes, automation, and canonical writeback remain unapproved.
