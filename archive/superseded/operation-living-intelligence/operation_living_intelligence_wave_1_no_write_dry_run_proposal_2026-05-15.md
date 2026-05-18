---
id: operation_living_intelligence_wave_1_no_write_dry_run_proposal_2026-05-15
title: Operation Living Intelligence Wave 1 No-Write Graph Dry-Run Proposal
domain: company_operations
date: 2026-05-15
status: design_only_proposal_pending_app_scope_approval
tags: [operation-living-intelligence, graph-seed, living-atlas, app-proposal, no-write-dry-run]
---
# Operation Living Intelligence Wave 1 No-Write Graph Dry-Run Proposal

## Purpose

This is the Company-owned design-only proposal for the first Operation Living Intelligence **Wave 1: Living Atlas Graph Seed** dry run.

The proposal uses Josue's 2026-05-15 approval to accept the REST/OpenAPI plus App migration-source audit as sufficient for a **design-only App proposal**, despite the still-open live SQL metadata proof gap for constraints, indexes, RLS policies, and triggers.

This document does not approve a graph import, export job, Memgraph install, App runtime change, schema change, Supabase write, Planner write, media metadata write, public website change, model run, cloud upload, paid service, automation job, public claim, launch target, roadmap commitment, or source-of-truth move.

## Proposal Summary

App should be asked to review a future no-write, local, rebuildable graph dry-run pattern for the Lake Post-Seal packet.

The dry run should:

- Read only from canonical Supabase rows and Markdown/source files.
- Write only to a local ignored output folder after App approval.
- Build a derived graph seed that can be deleted and regenerated.
- Preserve source IDs and file paths on every node and relationship.
- Fail closed on public output, sensitive data, direct canonical writeback, and unresolved Research/Content review gates.
- Produce a readback report, not canonical records.

The dry run should not:

- Write to Supabase, Planner, media tables, Content records, species records, public website tables, or Markdown source-of-truth docs.
- Infer direct canonical observation-to-pipeline or observation-to-chronicle links.
- Treat unreviewed media as proof.
- Promote graph candidates into public claims or canonical ecological truth.
- Include CRM, Financials row-level data, private contacts, broader telemetry, raw private media sweeps, agent logs, or paid/cloud service data.

## Source Baseline

Use these Company sources as the proposal baseline:

| Source | Path |
|---|---|
| Wave 1 handoff | `domains/company/operation_living_intelligence_wave_1_living_atlas_graph_seed_handoff_2026-05-15.md` |
| Task 409 audit | `archive/superseded/operation-living-intelligence/operation_living_intelligence_task_409_schema_data_audit_2026-05-15.md` |
| Projection matrix | `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-data-projection-matrix.md` |
| OLI plan | `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-plan.md` |
| Source packet | `M:\miniBIOTA\miniBIOTA_Content\audits\living_atlas\source_packets\pipeline_338_chronicle_30_lake_post_seal_2026-05-12.md` |
| Research ontology | `M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-task-391-graph-ontology.md` |
| Research candidates | `M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-task-392-lake-post-seal-graph-candidates.md` |
| Research path safety | `M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-task-393-graph-path-safety.md` |
| Research Stage 3 evaluation | `M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-task-394-stage-3-pilot-question-evaluation.md` |
| Content source inventory | `M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-content-task-395-retrievable-source-inventory.md` |
| Content publicness/indexing plan | `M:\miniBIOTA\miniBIOTA_Content\audits\living_atlas\2026-05-14-operation-living-intelligence-content-task-396-source-publicness-indexing-plan.md` |

## Exact Source Manifest

### Canonical Supabase Rows

| Family | Rows |
|---|---|
| Published source identity | `content_pipeline.id = 338` |
| Chronicle identity | `chronicles.id = 30` |
| First-seed chronicle subject links | `chronicle_subject_links.id in (17, 22, 23, 24, 25)` |
| Out-of-seed live chronicle context | `chronicle_subject_links.id in (26, 27, 28)`; include only as excluded/context readback unless seed scope is expanded |
| First-seed species | `species.id in (24, 66, 67, 164, 167, 180)` |
| First-seed observations | `observations.id between 170 and 178` |
| Observation loop links | `170 -> 1,4`; `171 -> 4`; `172 -> 1`; `173 -> 1`; `175 -> 1,4`; `176 -> 1,2`; `177 -> 1,4`; `178 -> 2,7` |
| Observation thread links | `170 -> 5`; `171 -> 5`; `172 -> 1`; `173 -> 1`; `174 -> 5`; `175 -> 1`; `176 -> 1,3`; `177 -> 1,3,5`; `178 -> 5` |
| Open-loop context | `open_loops.id in (1, 2, 3, 4, 7)` as context/review material only |
| Media candidate references | `media_assets.id in (9497, 9499, 9537, 9538, 9540, 9548, 9554, 9557, 9561, 9562, 9563, 19311, 35558)` as unreviewed candidate references only |

### Excluded From Manifest

| Excluded family | Reason |
|---|---|
| `species.id in (65, 169, 25)` | Live public chronicle context, but outside bounded first-seed species scope unless explicitly expanded |
| Missing stills `20260408_082108.jpg`, `20260503_101720.jpg` | Source-packet evidence but not found in `media_assets` by filename |
| `media_chronicles`, `media_biomes`, `media_species` links for the seed | No direct links exist for chronicle `30`, biome `1`, or seed species |
| Direct observation-to-pipeline/chronicle links | Observations `170-178` have `pipeline_id = null` and `chronicle_id = null` |
| CRM, Financials row-level data, private contacts, broader telemetry, raw private media sweeps, agent logs | Outside Wave 1 and sensitive or unrelated |

## Recommended Local Output Location

Recommended App-owned ignored location:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\
```

This uses App's currently ignored `out/` folder. Do not use `.local/` unless App first adds an explicit ignore rule.

Recommended files if App approves the dry run:

| File | Purpose |
|---|---|
| `source_manifest.json` | Canonical rows, Markdown source paths, excluded rows, timestamp/version notes |
| `nodes.jsonl` | Derived graph nodes with `global_id`, `label`, source table/path, source id/path, publicness, confidence, review state |
| `edges.jsonl` | Derived graph relationships with endpoints, relationship type, evidence basis, publicness/confidence/review floors |
| `blocked_edges.jsonl` | Explicit overclaim/unsafe relationship candidates used as guardrails |
| `validation_report.json` | Counts, endpoint validity, missing-source checks, publicness/confidence checks, sensitive-exclusion checks |
| `readback_examples.md` | Human-readable query results and blocked-output examples |

The output folder should be ignored by git. No generated graph data should be committed unless Josue separately approves sanitized fixtures.

## Proposed Graph Seed Format

Use stable IDs that preserve source identity:

| Node family | Example `global_id` |
|---|---|
| Graph seed | `graph_seed:living_atlas_lake_post_seal_wave_1` |
| Content item | `content_pipeline:338` |
| Chronicle | `chronicle:30` |
| Biome context | `biome:1` |
| Species | `species:164` |
| Observation | `observation:176` |
| Open-loop context | `open_loop:1` |
| Story-thread context | `story_thread:3` |
| Media candidate | `media_asset:9548` |
| Source packet | `source_packet:pipeline_338_chronicle_30_lake_post_seal_2026-05-12` |
| Research review | `research_review:task_393_path_safety` |
| Review gate | `review_gate:daphnia_establishment` |
| Claim guardrail | `blocked_claim:daphnia_cleared_lake` |

Required node fields:

- `global_id`
- `label`
- `node_type`
- `source_table` or `source_path`
- `source_id` or `source_anchor`
- `derived_only = true`
- `candidate_status = candidate_not_imported`
- `publicness_tier`
- `confidence_tier`
- `review_state`
- `owner_domain`
- `safe_summary`
- `do_not_say`

Recommended relationship families:

| Relationship | Use |
|---|---|
| `SEED_INCLUDES` | GraphSeed to included source/context nodes |
| `SOURCE_RECORD_FOR` | Supabase source rows to graph nodes |
| `SOURCE_FILE_FOR` | Markdown/source files to graph nodes |
| `CHRONICLE_SUBJECT_CONTEXT` | Chronicle to in-seed species/biome subject context |
| `PACKET_CONTEXT_FOR` | Source packet to observations/media/reviews without implying canonical direct links |
| `OBSERVATION_LINKED_TO_LOOP_CONTEXT` | Observation to open-loop context |
| `OBSERVATION_LINKED_TO_THREAD_CONTEXT` | Observation to story-thread context |
| `MEDIA_CANDIDATE_FOR_REVIEW` | Media asset candidate to observation/source packet/review gate |
| `REQUIRES_REVIEW` | Claim/media/species node to Research/Content/App review gates |
| `QUALIFIES_CLAIM` | Caveat/review node to claim node |
| `BLOCKS_PUBLIC_USE_OF` | Guardrail node to unsafe claim/path |

Do not use proof-like relationship names for uncertain or review-needed material. `CONTEXT_FOR`, `REQUIRES_REVIEW`, `QUALIFIES_CLAIM`, and `BLOCKS_PUBLIC_USE_OF` must not be treated as evidence support.

## Blocked-Edge Handling

Represent blocked edges as explicit guardrail relationships in `blocked_edges.jsonl`, not as normal proof/support relationships.

Blocked edge families:

| Blocked claim / edge | Reason |
|---|---|
| Daphnia species-level ID stronger than `Daphnia sp.` | Research review required |
| Daphnia establishment | Unresolved |
| Daphnia caused water clearing | Causation overclaim |
| Ghost Shrimp juvenile recruitment | Breeding confirmed, recruitment unconfirmed |
| Mesostoma public-primary use | Internal/open-loop by default |
| Moina establishment | Unresolved |
| Lake food web completion/stability | Overstates evidence |
| Event chronology edit from publish date to field window | Not approved |
| Unreviewed media caption/species proof | Media assets are unreviewed and unlinked |
| Direct observation-to-pipeline/chronicle canonical link | Observations `170-178` lack direct canonical links |

Readback should show blockers instead of silently dropping them.

## Validation Queries And Expected Counts

The dry run should produce a validation report with these expected results:

| Check | Expected result |
|---|---|
| `content_pipeline` source | 1 row: `338` |
| `chronicles` source | 1 row: `30` |
| Chronicle subject links live readback | 8 rows; seed includes `17`, `22`, `23`, `24`, `25`; links `26-28` documented as excluded context |
| Candidate species | 6 rows: `24`, `66`, `67`, `164`, `167`, `180` |
| Candidate observations | 9 rows: `170-178` |
| Observation loop links | 13 relationships |
| Observation thread links | 12 relationships |
| Open-loop context | 5 rows: `1`, `2`, `3`, `4`, `7` |
| Direct observation source links | `pipeline_id = null` and `chronicle_id = null` for observations `170-178` |
| Media candidates | 13 `media_assets` rows, all `reviewed = false` |
| Missing stills | 2 filename misses in `media_assets` |
| Direct media links | 0 for chronicle `30`, biome `1`, and candidate species |
| Node uniqueness | No duplicate `global_id` |
| Edge endpoint validity | Every edge endpoint exists in `nodes.jsonl` |
| Source preservation | Every node/edge has source table/path and source id/path |
| Publicness/confidence/review state | Present on every claim-like node/edge |
| Sensitive exclusion | No CRM, Financials, private-contact, broader telemetry, raw-private-media sweep, or agent-log fields |
| Canonical writeback | Always `none` |
| Rebuild/delete path | Output folder can be deleted and regenerated |

## Readback Examples

### Daphnia Query

Question:

```text
Can we say Daphnia cleared the lake?
```

Required answer shape:

```text
Path status: blocked
Safe claim: Daphnia sp. is part of the Lake Post-Seal evidence context, but establishment and water-clearing causation remain unresolved.
Evidence: species:164, observations:176-177, open_loop:1, source packet, Research validation.
Do not say: Daphnia established or cleared the lake.
Review required: Research.
Canonical writes implied: none.
```

### Ghost Shrimp Query

Question:

```text
What is the strongest Ghost Shrimp claim?
```

Required answer shape:

```text
Path status: internal_only or review_required
Safe claim: Ghost Shrimp breeding is recorded as confirmed in the live species row, but juvenile recruitment and long-term establishment remain separate review questions.
Evidence: species:67, chronicle_subject_link:24, open_loop:3, source packet, Research validation.
Do not say: Ghost Shrimp recruitment is confirmed.
Canonical writes implied: none.
```

### Mesostoma Query

Question:

```text
Can Mesostoma be used publicly in this story?
```

Required answer shape:

```text
Path status: blocked or internal_only
Safe claim: Mesostoma is an internal/open-loop context item in the seed, not a public-primary claim.
Evidence: species:167, observation:178, open_loops:2 and 7, Research validation.
Do not say: Mesostoma is the public explanation for the lake outcome.
Canonical writes implied: none.
```

### Media Proof Query

Question:

```text
Which media proves this event?
```

Required answer shape:

```text
Path status: review_required
Safe claim: Thirteen packet media files are indexed as media assets and two stills are source-packet-only references, but no direct media links exist for the chronicle, biome, or seed species, and all found media assets are unreviewed.
Evidence: media_asset ids 9497, 9499, 9537, 9538, 9540, 9548, 9554, 9557, 9561, 9562, 9563, 19311, 35558.
Do not say: These media assets are approved proof or approved captions.
Review required: App media library, Content, Research.
Canonical writes implied: none.
```

### Direct-Link Cleanup Query

Question:

```text
Should observations 170-178 be linked directly to pipeline 338 or chronicle 30?
```

Required answer shape:

```text
Path status: import_not_ready
Safe claim: The dry run can show packet/context association only. Direct canonical observation links would be a separate proposed-write bundle for Research/Content/App review.
Evidence: observations 170-178 have pipeline_id = null and chronicle_id = null.
Do not say: The graph discovered canonical direct links.
Canonical writes implied: none.
```

### Public Output Query

Question:

```text
Can this graph power a public species or story page?
```

Required answer shape:

```text
Path status: blocked
Safe claim: Not yet. Public surface reuse remains downstream of Web tasks 400-402, Content publicness review, and Research claim review.
Evidence: OLI handoff, Content publicness plan, Research path safety, open Web tasks.
Do not say: The graph is approved for public rendering.
Canonical writes implied: none.
```

## Review Owners

| Review | Owner |
|---|---|
| App no-write dry-run location, script pattern, local service/Memgraph boundary, deletion/rebuild behavior | App |
| Ecological claims, blocked edges, confidence/publicness floors, species caveats | Research |
| Source packet meaning, story usefulness, publicness/indexing, media/story handling | Content |
| Public surface reuse after curated outputs exist | Web |
| Program governance, dependency sequencing, approval gates, closeout reporting | Company |
| Paid/cloud/tool posture | Financials before any paid or cloud path |

## App Approval Request Shape

When this moves to App, ask for review of the design only:

```text
Please review the Operation Living Intelligence Wave 1 no-write graph dry-run proposal.

Requested App decision:
- Is the proposed local ignored output path acceptable?
- Should App own a future no-write export/readback helper, or should Company keep the next step docs-only?
- If a dry run is later approved, should the first graph be JSONL-only, Memgraph-backed, or both?
- What App-owned readback/deletion/rebuild checks are required before any local dry run?

Not requested:
- No App code change.
- No Supabase/Planner write.
- No schema/runtime change.
- No Memgraph install/import.
- No public behavior.
```

## Fallback Path

If App does not approve a local graph dry run, continue with a docs-only readback table using the same source manifest and readback examples. This fallback still tests whether the graph model clarifies evidence, blockers, and review routing without creating any local graph files or App work.

## Next Gate

The next gate is **App design review**, not implementation.

Use the Company App design review packet:

- `domains/company/operation_living_intelligence_wave_1_app_design_review_packet_2026-05-15.md`

Proceed only if Josue explicitly approves sending this proposal into App scope or asks Company to refine the docs-only proposal further.

## Verification

- Built from the 2026-05-15 Wave 1 handoff and task `409` REST/OpenAPI audit.
- Uses Josue's 2026-05-15 approval to proceed to a design-only proposal despite the SQL metadata access gap.
- No Supabase/Planner writes were performed.
- No App runtime, schema, public site, graph database, export/import job, media metadata, model run, cloud upload, paid tool, automation, or source-of-truth record changed.
