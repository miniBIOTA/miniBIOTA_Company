---
id: operation_living_intelligence_ih_phase_4_graphrag_context_builder_proposal_2026-05-17
title: Operation Living Intelligence Intelligent Harness Phase 4 GraphRAG Context Builder Proposal
domain: company_operations
last_updated: 2026-05-17
tags: [operation-living-intelligence, intelligent-harness, graphrag, context-packet, current-retrieval-baseline, no-write, lake-post-seal]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 4 GraphRAG Context Builder Proposal

## Purpose

This proposal defines the first GraphRAG Context Builder for the approved Lake Post-Seal Core Seed.

The goal is to produce one clean context packet that an agent can use to answer Lake Post-Seal questions with connected relationships, source IDs, source paths, owner domains, publicness, review status, claim status, uncertainty, and blocked/public-safe warnings.

This proposal does not approve implementation. It does not approve pgvector, Supabase writes, Supabase queries, Planner writes, App runtime changes, public output, media metadata writes, canonical writeback, Memgraph import/reset, scheduled jobs, dashboard behavior, or expansion beyond the Lake Post-Seal Core Seed.

## Source Baseline

Use the passed Phase 3 Intelligence Query Harness output:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_3_query_harness\lake_post_seal
```

Required Phase 3 files:

```text
query_harness_manifest.json
query_results.json
query_results.md
validation_report.json
queries\story_support.json
queries\core_species_observations.json
queries\open_loop_status.json
queries\media_candidates_and_review_gates.json
queries\blocked_public_claims.json
queries\relationship_source_classes.json
queries\public_claim_review_requirements.json
queries\story_continuity_paths.json
queries\writeback_exceptions.json
queries\bounded_graph_review_delta.json
```

Phase 3 validation baseline:

```text
status: pass_phase3_query_harness_ready
nodes: 93
review_gates: 9
blocked_claims: 9
writeback node exceptions: 0
writeback relationship exceptions: 0
public output nodes: 0
canonical write nodes: 0
direct observation-source links: 0
all 10 query templates: pass
```

## Proposed App Helper Files

Create only this App helper after explicit implementation approval:

```text
M:\miniBIOTA\miniBIOTA_App\tools\build-oli-ih-phase4-graphrag-context-packet.js
```

Do not edit App runtime files. Do not edit `package.json`. Do not add dependencies unless separately approved.

The helper should read only existing Phase 3 output, Phase 1 retrieval source manifests, and approved local Markdown/source packet files. It should not query Supabase, write Supabase, write Planner, import/reset/query Memgraph, regenerate Phase 1/2/3 output, write media metadata, or perform canonical writeback.

## Proposed Generated Output

Write generated context output only under App ignored `out/`:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_4_graphrag_context\lake_post_seal
```

Required generated files after implementation:

```text
context_packet.json
context_packet.md
context_packet_manifest.json
validation_report.json
source_reference_index.json
```

Optional generated files:

```text
source_excerpt_index.json
sample_question_readbacks.json
sample_question_readbacks.md
```

No generated output should be public output. The packet is an internal derived agent context artifact only.

## Phase 3 Query Inputs

The context packet should consume these Phase 3 query outputs:

| Query output | Context packet role |
|---|---|
| `story_support` | Primary story anchors, subject mentions, supporting observations, source content links |
| `core_species_observations` | Species-to-observation evidence, species caveats, species review gates |
| `open_loop_status` | Open/advanced loop state, source items, supporting observations, loop review warnings |
| `media_candidates_and_review_gates` | Candidate media, internal paths, media review gates, public-proof blockers |
| `blocked_public_claims` | Explicit blocked claims, blocked reasons, owner domains, blocking source nodes |
| `relationship_source_classes` | Distinction between canonical source links and derived review/context links |
| `public_claim_review_requirements` | What must be reviewed before public claim reuse |
| `story_continuity_paths` | Strongest observation-to-thread and observation-to-loop continuity paths |
| `writeback_exceptions` | Required zero-row safety gate |
| `bounded_graph_review_delta` | Review-required, blocked, internal, and candidate nodes that shape the answer envelope |

The helper should not re-run graph queries unless a later implementation review explicitly chooses that route. First pass should assemble from the already-passed Phase 3 output.

## Retrieval And Source Document Inputs

Use the current retrieval baseline first, not pgvector.

Read the Phase 1 retrieval source list:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_1_core_seed\lake_post_seal\retrieval_sources.jsonl
```

The first context packet should carry these retrieval/source references:

| Retrieval source ID | Source reference | Role |
|---|---|---|
| `retrieval_source:content_pipeline.id=338` | `table:content_pipeline/id:338` | Published content identity, description, open loops, URL |
| `retrieval_source:chronicles.id=30` | `table:chronicles/id:30` | Chronicle identity and public history context |
| `retrieval_source:observations.170-178` | `table:observations/id:170-178` | Primary observation evidence notes |
| `retrieval_source:open_loops.1,2,3,4,7` | `table:open_loops/id:1,2,3,4,7` | Question state and review warnings |
| `retrieval_source:story_threads.1,3,5` | `table:story_threads/id:1,3,5` | Story continuity |
| `retrieval_source:core_species` | `table:species/id:24,66,67,164,167` | Species status and caveats |
| `retrieval_source:biomes.id=1` | `table:biomes/id:1` | Freshwater Lake context |
| `retrieval_source:content_source_packet` | `M:\miniBIOTA\miniBIOTA_Content\audits\living_atlas\source_packets\pipeline_338_chronicle_30_lake_post_seal_2026-05-12.md` | Content source packet caveats, media review, publicness tiers, proposed-write boundaries |
| `retrieval_source:phase1_source_map` | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_ih_phase_1_supabase_source_map_2026-05-17.md` | Source map governance and approval boundaries |
| `retrieval_source:phase1_query_list` | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_ih_phase_1_core_seed_source_query_list_2026-05-17.md` | Exact source query contract |
| `retrieval_source:phase1_app_proposal` | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_ih_phase_1_app_no_write_jsonl_readback_helper_proposal_2026-05-17.md` | No-write helper proposal and pass criteria |
| `retrieval_source:wave5_retrieval_synthesis` | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_5_vector_embedding_app_review_synthesis_2026-05-16.md` | Retrieval and pgvector boundary |

For table-style retrieval references, the helper should not query Supabase in this phase. It should treat the graph's existing source IDs and Phase 3 query outputs as the local readback for those canonical rows. For Markdown/source packet references, the helper may read local files if present and produce short excerpts or summaries for internal context.

If a referenced Markdown/source packet file is unavailable locally, the helper should record it as `referenced_not_read` rather than failing, unless the missing file is a required Company governance source in this repo.

## Context Packet Structure

`context_packet.json` should use this top-level structure:

```json
{
  "packet_id": "operation_living_intelligence_ih_phase4_lake_post_seal_context_packet",
  "generated_at": "...",
  "status": "pass_phase4_graphrag_context_packet_ready",
  "scope": {
    "operation": "Operation Living Intelligence",
    "harness": "Intelligent Harness",
    "bounded_graph": "lake_post_seal_core_seed",
    "local_only": true,
    "derived_only": true,
    "writeback": "none"
  },
  "source_layers": {
    "canonical_supabase_rows": [],
    "derived_memgraph_relationships": [],
    "markdown_governance_context": [],
    "candidate_media": [],
    "review_gates": [],
    "blocked_claims": []
  },
  "context_sections": {
    "story_support": {},
    "species_observation_links": {},
    "open_loops": {},
    "media_review": {},
    "public_claim_safety": {},
    "story_continuity": {},
    "uncertainty": {},
    "answer_rules": {}
  },
  "sample_question_support": [],
  "validation": {},
  "safety": {}
}
```

`context_packet.md` should be a compact human-readable version with:

- scope and safety status;
- what the graph supports;
- what remains uncertain;
- blocked/public-safe warnings;
- citation/source reference table;
- sample question support;
- "Do not claim publicly" warnings.

## Citation And Source Reference Model

Every cited item should use a stable citation object:

```json
{
  "citation_id": "citation:observation:170",
  "source_layer": "canonical_supabase_row",
  "node_id": "observation:170",
  "relationship_type": null,
  "relationship_id": null,
  "source_table": "observations",
  "source_id": 170,
  "source_path": null,
  "owner_domain": "Research",
  "canonicality": "canonical_source_row",
  "publicness": "internal_source_context",
  "review_status": "evidence_context_only",
  "claim_status": "not_a_claim",
  "writeback": "none",
  "summary": "Short internal summary or label from Phase 3 output."
}
```

Relationship citations should use:

```json
{
  "citation_id": "citation:relationship:edge:supports_loop:170:1:0",
  "source_layer": "derived_memgraph_relationship",
  "from_node_id": "observation:170",
  "to_node_id": "open_loop:1",
  "relationship_type": "SUPPORTS",
  "relationship_id": "edge:supports_loop:170:1:0",
  "source_table": "observation_loop_links",
  "source_id": "170:1",
  "source_path": null,
  "canonicality": "canonical_source_row",
  "derived_rule": null,
  "owner_domain": "Content/Research",
  "publicness": "internal_story_context",
  "review_status": "loop_context_only",
  "claim_status": "not_a_claim",
  "writeback": "none"
}
```

Markdown governance/source context citations should use:

```json
{
  "citation_id": "citation:markdown:phase1_source_map",
  "source_layer": "markdown_governance_context",
  "source_path": "M:\\miniBIOTA\\miniBIOTA_Company\\domains\\company\\operation_living_intelligence_ih_phase_1_supabase_source_map_2026-05-17.md",
  "owner_domain": "Company",
  "canonicality": "governance_source",
  "publicness": "internal_governance",
  "review_status": "source_context",
  "claim_status": "not_a_claim",
  "writeback": "none",
  "excerpt_role": "approval boundary / source scope"
}
```

## Layer Distinctions

The packet must distinguish these layers:

| Layer | Meaning | Examples | Can support public claim directly? |
|---|---|---|---|
| `canonical_supabase_row` | Canonical structured source already represented in the graph | observations, species, biomes, chronicles, content item, open loops, story threads | Only if publicness/review state allows it; many rows remain internal context |
| `derived_memgraph_relationship` | Relationship projection or review/context edge in local Memgraph | `SUPPORTS`, `PART_OF_STORY`, `NEEDS_REVIEW`, `BLOCKED_FOR_PUBLIC` | No by itself; it explains connections and review state |
| `markdown_governance_context` | Governance/source contract/source packet context | Phase 1 docs, source packet, retrieval synthesis | No; it constrains answers and provides provenance |
| `candidate_media` | Media candidate rows and local paths | `media_asset_candidate:*` | No; all remain review-required and not public proof |
| `review_gate` | Derived gate that blocks or warns | `review_gate:*` | No; requires owner review before claim reuse |
| `blocked_claim` | Explicit public-output blocker | `blocked_claim:*` | No; must be carried as a warning |

## Carrying Review Gates And Blocked Claims Forward

The context packet should carry review gates and blocked claims in three places:

1. `source_layers.review_gates` and `source_layers.blocked_claims` as complete source-layer collections.
2. Attached to relevant `context_sections` such as media, species, public claim safety, and open loops.
3. In a top-level `answer_rules.do_not_claim_publicly` list.

Every blocked claim should preserve:

- blocked claim ID;
- claim text;
- blocked reason;
- owner domain;
- source or blocking node IDs;
- `BLOCKED_FOR_PUBLIC` relationship IDs;
- review status;
- claim status;
- writeback = `none`.

Every review gate should preserve:

- gate ID;
- gate label/type;
- reason;
- owner domain;
- blocks-public-output flag when present;
- connected node IDs;
- `NEEDS_REVIEW` relationship IDs;
- writeback = `none`.

## Overclaim Prevention

The context packet should prevent overclaiming with explicit answer rules:

- Do not present candidate media as public proof.
- Do not claim Daphnia establishment is confirmed.
- Do not claim Daphnia cleared the lake.
- Do not identify Daphnia beyond `Daphnia sp.` unless a later Research-approved source permits it.
- Do not claim Ghost Shrimp juvenile recruitment is confirmed.
- Do not treat Mesostoma as approved public-primary subject.
- Do not claim Moina established.
- Do not claim the lake food web is completed.
- Do not claim the lake is stable/self-sustaining.
- Do not treat any derived Memgraph relationship as canonical by itself.
- Do not treat Markdown governance context as ecological evidence.
- Do not produce public output from this packet.
- Do not propose or perform writeback from this packet.

The packet should include an `uncertainty` section with:

- unresolved species identification;
- unresolved establishment status;
- unresolved causation around water clarity;
- candidate media review status;
- relationship endpoint caveats such as `biome:2` endpoint context;
- planner/task context marked as operator context, not ecological evidence.

## Sample Questions Supported

The first context packet should support internal agent answers to:

1. What supports the Lake Post-Seal story?
2. What observations connect to Daphnia?
3. What observations connect to Mesostoma?
4. What observations connect to Ghost Shrimp?
5. What open loops are still open or advanced?
6. What media candidates exist for this story, and why are they not public proof yet?
7. Which public claims are blocked?
8. What would need review before making a public claim about Daphnia clearing the lake?
9. What are the strongest story-continuity paths?
10. Which relationships are canonical source links and which are derived review/context links?
11. What should an agent avoid saying publicly?
12. What source IDs and owner domains should be cited in an internal answer?

The context packet is for internal agent context assembly. It should not generate final public copy.

## Validation And Readback Checks

The helper should pass only if:

- Phase 3 `validation_report.json` exists and has `status = pass_phase3_query_harness_ready`;
- all ten required Phase 3 query JSON files exist;
- `writeback_exceptions` remains empty;
- Phase 3 public output nodes remain `0`;
- Phase 3 canonical write nodes remain `0`;
- Phase 3 direct observation-source links remain `0`;
- Phase 1 `retrieval_sources.jsonl` exists and includes all 12 approved retrieval sources;
- every context packet citation has at least one of `node_id`, `relationship_id`, `source_table/source_id`, or `source_path`;
- every citation preserves owner domain, publicness, review status, claim status, and writeback;
- every context section carries blocked/public-safe warnings where relevant;
- candidate media remain `media_review_required` and `not_public_proof`;
- blocked claims count remains `9`;
- review gates count remains `9`;
- context packet writeback is `none`;
- generated output stays under the approved Phase 4 App `out/` folder;
- no pgvector, Supabase query/write, Planner write, App runtime behavior change, media metadata write, public output, or canonical writeback occurs.

Recommended validation status:

```text
pass_phase4_graphrag_context_packet_ready
```

## Stop Conditions

Stop before writing a passing context packet if:

- Phase 3 validation is missing or not passing;
- any required Phase 3 query output is missing;
- Phase 1 retrieval source list is missing;
- fewer than 12 retrieval sources are present;
- any required blocked claim is missing;
- any required review gate is missing;
- media candidates are no longer review-required;
- any writeback exception appears;
- any public output or canonical write check is nonzero;
- any citation lacks owner domain, publicness, review status, claim status, or writeback;
- the helper would need to query Supabase;
- the helper would need pgvector or embeddings;
- the helper would need to query, import, reset, or mutate Memgraph;
- the helper would need to write Planner;
- the helper would need to modify App runtime behavior;
- the helper would need to write media metadata;
- the helper would create public output;
- the helper would perform canonical writeback;
- the helper would expand beyond Lake Post-Seal Core Seed;
- generated output path resolves outside the approved Phase 4 App `out/` folder.

## Confirmed Boundaries

The GraphRAG Context Builder remains:

- local;
- derived only;
- no-write to canonical systems;
- bounded to the Lake Post-Seal Core Seed;
- current retrieval baseline first;
- no pgvector yet;
- no Supabase writes;
- no Supabase queries in the first pass;
- no Planner writes;
- no App runtime behavior change;
- no package edits;
- no public output;
- no dashboard;
- no scheduled jobs;
- no media metadata writes;
- no canonical writeback.

## Implementation Approval Needed

Recommended next approval:

```text
Approve implementation of the Phase 4 local GraphRAG Context Builder helper and generated internal context packet only.
```

Until that approval, do not:

- create the App helper;
- generate the context packet;
- add pgvector;
- query or write Supabase;
- write Planner;
- modify App runtime behavior;
- query/import/reset Memgraph;
- regenerate Phase 1, Phase 2, or Phase 3 output;
- write media metadata;
- create public output;
- perform canonical writeback;
- expand beyond Lake Post-Seal Core Seed.
