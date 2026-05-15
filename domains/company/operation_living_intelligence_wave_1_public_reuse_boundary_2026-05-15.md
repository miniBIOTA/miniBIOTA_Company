---
id: operation_living_intelligence_wave_1_public_reuse_boundary_2026-05-15
title: Operation Living Intelligence Wave 1 Public Reuse Boundary
domain: company_operations
date: 2026-05-15
status: design_boundary_ready
tags: [operation-living-intelligence, public-reuse, web, content, graph-seed, stage-3]
---
# Operation Living Intelligence Wave 1 Public Reuse Boundary

## Purpose

This closes the current Stage 3 weak spot as a design boundary: the Wave 1 graph seed can identify candidate public reuse surfaces, but it must not generate public output or imply Web/Content reuse approval.

The local JSONL readback currently returns `9 / 10` for Stage 3 because question `5` remains a partial/fail:

```text
Which public pages, chronicle entries, or content items could safely reuse the evidence?
```

The right next move is **not** to push graph output onto the public website. The right next move is to define candidate reuse targets and review gates so a later Wave 1.1 sidecar can answer the question safely.

## Current Boundary

Wave 1 may say:

- the published content identity is `content_pipeline.id = 338`;
- the public chronicle identity is `chronicles.id = 30`;
- the chronicle and content record are valid public source identities;
- some species and biome records are public surfaces that may eventually receive reviewed context;
- unreviewed media, internal open loops, and blocked claims are not public output.

Wave 1 may not say:

- a public page should be changed;
- a species card can use the graph summary;
- a chronicle date, subject link, media caption, or public claim should be edited;
- unreviewed media is public proof;
- Daphnia established or cleared the lake;
- Ghost Shrimp recruitment is confirmed;
- Mesostoma is the public explanation;
- Moina established;
- observations `170-178` are canonically linked to `content_pipeline:338` or `chronicle:30`.

## Candidate Public Reuse Targets

These targets are candidate surfaces only. They are not approved work items or public output.

| Candidate target | Current basis | Reuse status | Required review |
|---|---|---|---|
| `/chronicles#chronicle-30` | Existing public chronicle record `30`, title `Fish removal reopens the lake food web` | Candidate public source identity only | Content + Research + Web |
| YouTube/source URL for `content_pipeline.id = 338` | Existing published video URL `https://youtu.be/lgmPWX9e-A0` | Candidate source reference only | Content |
| `/biomes/freshwater-lake` or biome `1` public surface | Chronicle subject link `17`, biome `1` primary context | Candidate contextual surface | Research + Web |
| `/species/flagfish` | Chronicle subject link `22`, species `24`, public slug present | Candidate reviewed-context surface | Research + Content + Web |
| `/species/daphnia-sp` | Chronicle subject link `23`, species `164`, public slug present, review status unreviewed | Candidate caveat-only surface | Research + Web |
| `/species/ghost-shrimp` | Chronicle subject link `24`, species `67`, public slug present | Candidate caveat-safe surface | Research + Content + Web |
| `/species/freshwater-amphipod` | Chronicle subject link `25`, species `66`, public slug present, review status unreviewed | Candidate context-only surface | Research + Web |
| `/species/moina` | First-seed species `180`, not a chronicle subject link for `30`, public slug present | Candidate internal/review surface, not public reuse yet | Research |
| Mesostoma species surface | First-seed species `167`, no public slug in readback | Not a public target in Wave 1 | Research + Web before any route/copy |
| `/biosphere#biosphere-ecosystem-map` | Existing public ecosystem-map surface is curated-public only | Future candidate after curated relationships exist | Research + Web |
| `/news`, `/events`, newsletter/Substack | Web/Content/Growth communication surfaces | Out of Wave 1 | Content + Web + Growth + Brand |

## Public Reuse Status Vocabulary

Use these statuses for any later Wave 1.1 public-reuse sidecar:

| Status | Meaning |
|---|---|
| `public_source_identity_only` | The public record can be named as provenance, but no new claim/copy/media is approved. |
| `candidate_context_only` | The surface may later show context if Research/Content/Web approve exact wording. |
| `candidate_caveat_only` | The surface may later show a cautious caveat, not a stronger claim. |
| `blocked_public_output` | The surface must not use this graph output publicly. |
| `out_of_wave_1` | Useful later, but not part of the first graph seed. |

## Proposed Sidecar Model

Do not add these nodes to the core Wave 1 graph until App/Research/Web/Content approve the sidecar. If later approved, model them as derived-only candidate nodes:

| Node type | Example `global_id` | Required fields |
|---|---|---|
| `PublicReuseCandidate` | `public_reuse:chronicle_30` | `route_or_record`, `reuse_status`, `owner_domain`, `required_reviews`, `allowed_output`, `blocked_output`, `canonical_writeback = none` |
| `PublicSurface` | `public_surface:chronicles_archive` | `route_pattern`, `surface_owner`, `publicness_floor`, `implementation_owner`, `canonical_writeback = none` |
| `ReuseGate` | `reuse_gate:research_claim_review` | `review_owner`, `blocks_public_output`, `required_before`, `canonical_writeback = none` |

Suggested sidecar relationships:

| Relationship | Meaning |
|---|---|
| `CANDIDATE_REUSE_OF` | Candidate public target points to a graph source such as `chronicle:30` or `content_pipeline:338`. |
| `REQUIRES_PUBLIC_REVIEW` | Candidate public target requires Research, Content, Web, Brand, or Growth review. |
| `BLOCKS_PUBLIC_REUSE_OF` | Gate blocks public reuse of a claim/path/media item. |
| `PUBLIC_SURFACE_FOR` | Surface can display a source type once approved, not before. |

## Safe Readback For Question 5

Question:

```text
Which public pages, chronicle entries, or content items could safely reuse the evidence?
```

Safe answer:

```text
Path status: review_required

Candidate public source identities:
- content_pipeline:338, published YouTube source
- chronicle:30, visible through the chronicles archive

Candidate contextual public surfaces after review:
- Freshwater Lake biome surface
- Flagfish, Daphnia sp., Ghost Shrimp, and Freshwater amphipod species surfaces

Blocked or out-of-scope for Wave 1:
- Mesostoma public explanation
- Moina establishment or public reuse
- unreviewed media captions/proof
- direct observation-to-content/chronicle links
- biosphere ecosystem-map relationship output
- news/events/newsletter/launch messaging

Canonical writes implied: none.
Required reviews: Research, Content, Web; Brand/Growth only if this becomes public announcement or audience-facing campaign language.
```

## Ownership

| Domain | Decision ownership |
|---|---|
| Research | Claim safety, species caveats, observed/inferred/confidence labels |
| Content | Published source meaning, story reuse, captions, final public wording for content surfaces |
| Web | Public route behavior, page rendering, public UI states, ecosystem-map presentation |
| Brand | Public framing if this becomes audience-facing message/campaign copy |
| Growth | Newsletter/support/follow-up surfaces if reuse becomes campaign or conversion work |
| App | Generated files, local helpers, future sidecar data shape, protected read paths |
| Company | Sequencing, approval gates, and cross-domain routing |

## Stage 3 Impact

This document does not change the current JSONL readback score by itself. It prepares the missing design layer for question `5`.

Current result remains:

```text
9 / 10 pass or provisional pass
Question 5: partial_fail until public reuse targets become an approved sidecar or Web/Content tasks define concrete surfaces.
```

If a later Wave 1.1 sidecar is approved and validated, question `5` can move from `partial_fail` to `pass` only if:

- target surfaces are explicit;
- each target has owner/review gates;
- publicness floors are preserved;
- blocked/internal/review-needed evidence is hidden from public output by default;
- no Web, Content, Supabase, media, Planner, or canonical writes are implied.

## Not Approved

This boundary does not approve:

- Web route changes;
- Content/public copy changes;
- species-card edits;
- chronicle edits;
- public ecosystem-map relationship changes;
- media captions or media links;
- Supabase/Planner writes;
- schema changes;
- App runtime changes;
- automated graph sync;
- public launch/announcement language.

## Verification

- Read Company Wave 1 no-write dry-run proposal.
- Read Company Wave 1 App design review packet.
- Read Web Company report and Web repo route/source patterns.
- Read Content publicness/indexing plan.
- Read local source manifest for Wave 1 species slugs, chronicle subject links, and content/chronicle source identities.
- No Web repo files changed.
- No Content repo files changed.
- No App runtime/schema changes, public site changes, Supabase/Planner writes, media metadata writes, or canonical writeback occurred.
