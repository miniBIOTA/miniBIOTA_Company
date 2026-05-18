---
id: operation_living_intelligence_wave_1_1_public_reuse_sidecar_proposal_2026-05-15
title: Operation Living Intelligence Wave 1.1 Public Reuse Sidecar Proposal
domain: company_operations
date: 2026-05-15
status: proposed_not_approved
tags: [operation-living-intelligence, public-reuse, graph-sidecar, web, content, research]
---
# Operation Living Intelligence Wave 1.1 Public Reuse Sidecar Proposal

## Purpose

Wave 1 proved the Lake Post-Seal graph seed can be generated, imported into a disposable local Memgraph container, and read back safely. The no-Docker JSONL readback now answers `9 / 10` Stage 3 pilot questions at pass or provisional-pass level.

The remaining weak point is Stage 3 question `5`:

```text
Which public pages, chronicle entries, or content items could safely reuse the evidence?
```

This proposal defines a **Wave 1.1 public reuse sidecar** that can answer that question without approving any public publishing, Web implementation, Content copy, media captioning, Supabase write, Planner write, or canonical writeback.

## Recommendation

Build the public-reuse mapping as a separate derived sidecar, not as part of the core Wave 1 evidence graph.

Reason:

- Core Wave 1 should stay focused on proof, claim safety, blocked overclaims, provenance, and review boundaries.
- Public reuse requires a different ownership model: Research claim safety, Content story meaning, Web route behavior, and Company sequencing.
- Sidecar separation lets the graph say "candidate after review" without implying "publish this."
- The sidecar can be deleted and regenerated from approved source records and the Company boundary doc.

## Proposed Output Location

If approved later, generated sidecar files should live under App's ignored local output tree:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\public_reuse_sidecar\
```

Proposed files:

| File | Purpose |
|---|---|
| `public_surfaces.jsonl` | Public surfaces or records that could receive reviewed reuse context |
| `public_reuse_candidates.jsonl` | Candidate reuse records tied to graph source identities |
| `public_reuse_gates.jsonl` | Review gates that block public output until satisfied |
| `public_reuse_edges.jsonl` | Derived relationships among candidates, source records, surfaces, and gates |
| `public_reuse_validation_report.json` | Machine-readable validation and stop-condition report |
| `public_reuse_readback.md` | Human-readable answer for Stage 3 question `5` |

## Candidate Records

These are sidecar candidates only. They are not public-output approvals.

| Candidate `global_id` | Route or record | Source basis | Reuse status | Required reviews |
|---|---|---|---|---|
| `public_reuse:chronicle_30` | `/chronicles#chronicle-30` | `chronicles.id = 30` | `public_source_identity_only` | Content, Research, Web |
| `public_reuse:content_pipeline_338` | YouTube/source URL for `content_pipeline.id = 338` | Published video URL | `public_source_identity_only` | Content |
| `public_reuse:biome_freshwater_lake` | `/biomes/freshwater-lake` or biome `1` | Chronicle subject link and biome context | `candidate_context_only` | Research, Web |
| `public_reuse:species_flagfish` | `/species/flagfish` | Chronicle subject link `22`, species `24` | `candidate_context_only` | Research, Content, Web |
| `public_reuse:species_daphnia_sp` | `/species/daphnia-sp` | Chronicle subject link `23`, species `164` | `candidate_caveat_only` | Research, Web |
| `public_reuse:species_ghost_shrimp` | `/species/ghost-shrimp` | Chronicle subject link `24`, species `67` | `candidate_caveat_only` | Research, Content, Web |
| `public_reuse:species_freshwater_amphipod` | `/species/freshwater-amphipod` | Chronicle subject link `25`, species `66` | `candidate_context_only` | Research, Web |
| `public_reuse:species_moina` | `/species/moina` | First-seed species `180`, not chronicle `30` subject link | `blocked_public_output` | Research |
| `public_reuse:species_mesostoma` | no confirmed Wave 1 public route | First-seed species `167`, no public slug in readback | `blocked_public_output` | Research, Web |
| `public_reuse:biosphere_ecosystem_map` | `/biosphere#biosphere-ecosystem-map` | Existing curated-public ecosystem-map surface | `out_of_wave_1` | Research, Web |
| `public_reuse:news_events_newsletter` | `/news`, `/events`, newsletter/Substack | Web/Content/Growth communication surfaces | `out_of_wave_1` | Content, Web, Growth, Brand |

## Review Gate Records

| Gate `global_id` | Blocks | Review owner |
|---|---|---|
| `reuse_gate:research_claim_review` | Stronger ecological claims, establishment claims, causal claims, species-page claim reuse | Research |
| `reuse_gate:content_story_review` | Story framing, source meaning, public narrative reuse, captions | Content |
| `reuse_gate:web_surface_review` | Route behavior, page placement, public UI states, ecosystem-map output | Web |
| `reuse_gate:media_caption_review` | Treating unreviewed media as proof or public caption material | Content, Research |
| `reuse_gate:public_messaging_review` | Launch/update/newsletter/support framing | Brand, Growth, Company |
| `reuse_gate:direct_link_write_review` | Any direct canonical observation-to-content or observation-to-chronicle link | Research, Content, App |
| `reuse_gate:ecosystem_map_relationship_review` | Any public graph relationship exposed in `/biosphere#biosphere-ecosystem-map` | Research, Web |

## Sidecar Relationship Types

| Relationship | Meaning |
|---|---|
| `CANDIDATE_REUSE_OF` | Candidate public target points to a source identity such as `chronicle:30`, `content_pipeline:338`, a species, or a biome. |
| `PUBLIC_SURFACE_FOR` | A route/surface can display a source type after review, not before. |
| `REQUIRES_PUBLIC_REVIEW` | Candidate reuse remains blocked until the named review gate is satisfied. |
| `BLOCKS_PUBLIC_REUSE_OF` | Gate blocks a candidate, claim, surface, or media path from public reuse. |
| `OUT_OF_WAVE_SCOPE` | Candidate belongs to a later wave or campaign surface, not Wave 1. |

## Validation Requirements

A Wave 1.1 sidecar can be accepted only if validation proves:

- every candidate has `global_id`, `route_or_record`, `source_basis`, `reuse_status`, `owner_domain`, `required_reviews`, `allowed_output`, `blocked_output`, and `canonical_writeback = none`;
- every edge has valid endpoints;
- every candidate has at least one review owner unless its status is `out_of_wave_1`;
- no `blocked_public_output` or `out_of_wave_1` candidate appears as allowed public output;
- unreviewed media is never treated as public proof;
- observations `170-178` remain packet-associated only and do not gain direct canonical links to `content_pipeline:338` or `chronicle:30`;
- Daphnia, Ghost Shrimp, Mesostoma, and Moina blocked-claim paths remain visible as blockers;
- the Stage 3 question `5` readback returns `review_required`, not `approved`;
- no Supabase, Planner, Web, Content, media metadata, or canonical Markdown writeback is implied.

## Safe Readback Target

The sidecar should answer question `5` in this shape:

```text
Path status: review_required.

The graph can name public source identities and candidate public surfaces, but no public reuse is approved by the graph.

Candidate source identities:
- content_pipeline:338
- chronicle:30

Candidate contextual surfaces after review:
- /chronicles#chronicle-30
- /biomes/freshwater-lake
- /species/flagfish
- /species/daphnia-sp
- /species/ghost-shrimp
- /species/freshwater-amphipod

Blocked or later-wave surfaces:
- Moina public reuse
- Mesostoma public explanation
- biosphere ecosystem-map output
- news/events/newsletter or launch messaging
- unreviewed media captions/proof
- direct observation-to-content or observation-to-chronicle links

Canonical writes implied: none.
Required reviews: Research, Content, Web; Brand/Growth only if this becomes public messaging or campaign work.
```

## Stage 3 Impact

This proposal does not change the current JSONL readback score by itself.

If later implemented and validated as a local ignored sidecar, Stage 3 question `5` can move from partial/fail to provisional pass or pass if the readback preserves review gates and makes candidate public surfaces explicit.

Until then, the current Wave 1 status remains:

```text
Stage 3: 9 / 10 pass or provisional pass
Question 5: partial/fail pending approved public-reuse sidecar or downstream Web/Content tasks
```

## Stop Conditions

Stop before implementation if the sidecar would:

- create, edit, or schedule Web/Content/App/Planner/Supabase records;
- imply public approval from graph output;
- publish, rewrite, or route public pages;
- treat unreviewed media as proof;
- hide blocked claims instead of showing them as blockers;
- require a paid service or cloud upload;
- depend on a durable graph runtime before the SQL metadata gap is resolved;
- blur derived graph suggestions with canonical source-of-truth records.

## Not Approved

This proposal does not approve:

- App helper implementation;
- Memgraph durable runtime;
- graph automation;
- Supabase/Planner writes;
- Web route or rendering changes;
- Content/public copy changes;
- species-card edits;
- chronicle edits;
- ecosystem-map public output;
- media captions or media links;
- public launch/update/newsletter language;
- source-of-truth migration.

## Recommended Next Gate

When ready, the next implementation step would be an App-owned local helper that reads the existing Wave 1 JSONL package plus this Company sidecar proposal and writes ignored local sidecar JSONL/readback files.

That implementation should come after explicit approval and should stay local, rebuildable, read-only, and no-write.

The durable implementation track still needs the task `409` live SQL metadata gap resolved before any automation, persistent graph service, or canonical writeback policy is considered ready.

## Verification

- Built from the Wave 1 public reuse boundary:
  `domains/company/operation_living_intelligence_wave_1_public_reuse_boundary_2026-05-15.md`.
- Preserves the verified Wave 1 JSONL readback result: `67` nodes, `96` edges, `13` blocked edges, `109` relationships with blocked guardrails, and `9 / 10` Stage 3 questions passing or provisionally passing.
- No Web repo files changed.
- No Content repo files changed.
- No App repo files changed by this proposal.
- No App runtime/schema change, public site change, Supabase/Planner write, media metadata write, graph automation, paid service, cloud upload, or canonical writeback occurred.
