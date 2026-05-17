---
id: operation_living_intelligence_ih_phase_3_intelligence_query_harness_proposal_2026-05-17
title: Operation Living Intelligence Intelligent Harness Phase 3 Intelligence Query Harness Proposal
domain: company_operations
last_updated: 2026-05-17
tags: [operation-living-intelligence, intelligent-harness, phase-3, memgraph, query-harness, local-only, no-write, lake-post-seal]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 3 Intelligence Query Harness Proposal

## Purpose

This proposal defines the first practical Intelligence Query Harness for the approved Lake Post-Seal Core Seed graph.

The harness should let agents ask useful Operation Living Intelligence questions against the existing local Memgraph pilot while preserving source IDs, source tables, source paths, owner domains, publicness, review status, claim status, and writeback state.

This proposal does not approve implementation. It does not approve Supabase writes, Planner writes, App runtime changes, pgvector, public output, canonical writeback, Memgraph import, graph expansion, scheduled jobs, dashboard behavior, media metadata writes, or any scope beyond the Lake Post-Seal Core Seed.

## Source Baseline

Use the existing Phase 2 local Memgraph pilot output only:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_2_memgraph\lake_post_seal
```

Phase 2 readback baseline:

```text
status: pass_phase2_memgraph_readback_ready
nodes: 93
relationships: 99
review_gates: 9
blocked_claims: 9
media_candidates: 13
writeback: none
public_output_nodes: 0
canonical_write_nodes: 0
direct_observation_source_links: 0
```

Relationship count baseline:

```text
BLOCKED_FOR_PUBLIC: 9
MENTIONS: 5
NEEDS_REVIEW: 27
OBSERVED_IN: 9
PART_OF_BIOME: 6
PART_OF_STORY: 12
RETRIEVAL_SOURCE_FOR: 12
SOURCE_CONTENT_FOR: 1
SOURCE_LOOP_FOR: 5
SUPPORTS: 13
```

## Proposed App Helper Files

Create only this App helper after explicit implementation approval:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-ih-phase3-query-harness.js
```

Do not edit App runtime files. Do not edit `package.json`. Do not add dependencies unless separately approved. The helper should use built-in Node modules and Docker CLI / `mgconsole` access to the existing local Memgraph container.

The helper should be read-only against Memgraph. It should not import Cypher, reset Memgraph, regenerate Phase 1 or Phase 2 output, query Supabase, write Supabase, write Planner, write media metadata, or perform canonical writeback.

## Proposed Generated Output

Write generated query output only under App ignored `out/`:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_3_query_harness\lake_post_seal
```

Required generated files after implementation:

```text
query_harness_manifest.json
query_results.json
query_results.md
validation_report.json
```

Optional per-query files, if useful for review:

```text
queries\<query_name>.cypher
queries\<query_name>.json
```

The helper must create no public output and no canonical output.

## Query Result Citation Contract

Every query row should cite the graph evidence it used. When a row contains a node, include:

- `id`;
- `label`;
- `node_label`;
- `source_table`;
- `source_id`;
- `source_path`;
- `canonicality`;
- `owner_domain`;
- `publicness`;
- `review_status`;
- `claim_status`;
- `writeback`.

When a row contains a relationship, include:

- `relationship_type`;
- `relationship_id`;
- `source_table`;
- `source_id`;
- `source_path`;
- `canonicality`;
- `derived_rule`;
- `owner_domain`;
- `publicness`;
- `review_status`;
- `claim_status`;
- `writeback`.

The implementation may normalize raw `mgconsole` output into JSON rows, but it must preserve these fields wherever Memgraph returns them. If a field is null, preserve null rather than inventing a value.

## Query Library

### 1. `story_support`

Question:

```text
What supports the Lake Post-Seal story?
```

Cypher:

```cypher
MATCH (story:OLIIHPhase1Node)
WHERE story.node_label IN ["ContentItem", "Chronicle"]
OPTIONAL MATCH (content:OLIIHPhase1Node)-[source_link:SOURCE_CONTENT_FOR]->(story)
OPTIONAL MATCH (story)-[mentions:MENTIONS]->(subject:OLIIHPhase1Node)
OPTIONAL MATCH (observation:OLIIHPhase1Node)-[story_link:PART_OF_STORY]->(thread:OLIIHPhase1Node)
OPTIONAL MATCH (observation)-[support_link:SUPPORTS]->(loop:OLIIHPhase1Node)
RETURN story.id AS story_id,
       story.label AS story_label,
       story.node_label AS story_node_label,
       story.source_table AS story_source_table,
       story.source_id AS story_source_id,
       story.source_path AS story_source_path,
       story.owner_domain AS story_owner_domain,
       story.publicness AS story_publicness,
       story.review_status AS story_review_status,
       story.claim_status AS story_claim_status,
       story.writeback AS story_writeback,
       collect(DISTINCT {id: content.id, label: content.label, relationship_type: type(source_link), relationship_id: source_link.id, source_table: source_link.source_table, source_id: source_link.source_id, canonicality: source_link.canonicality, review_status: source_link.review_status, writeback: source_link.writeback}) AS source_content_links,
       collect(DISTINCT {id: subject.id, label: subject.label, node_label: subject.node_label, relationship_type: type(mentions), relationship_id: mentions.id, owner_domain: subject.owner_domain, publicness: subject.publicness, review_status: subject.review_status, claim_status: subject.claim_status, writeback: subject.writeback}) AS mentioned_subjects,
       collect(DISTINCT {id: observation.id, label: observation.label, source_table: observation.source_table, source_id: observation.source_id, owner_domain: observation.owner_domain, publicness: observation.publicness, review_status: observation.review_status, claim_status: observation.claim_status, writeback: observation.writeback, thread_id: thread.id, thread_label: thread.label, loop_id: loop.id, loop_label: loop.label}) AS supporting_observations
ORDER BY story.node_label, story.id;
```

Expected answer shape:

- one row per content/chronicle story anchor;
- cited source content links;
- mentioned species/biome subjects;
- observations connected to story threads and open loops;
- no claim that support is public-safe unless review/publicness fields say so.

### 2. `core_species_observations`

Question:

```text
Which observations connect to each core species?
```

Cypher:

```cypher
MATCH (species:OLIIHPhase1Node {node_label: "Species"})
OPTIONAL MATCH (chronicle:OLIIHPhase1Node)-[mention:MENTIONS]->(species)
OPTIONAL MATCH (species)-[biome_link:PART_OF_BIOME]->(biome:OLIIHPhase1Node)
OPTIONAL MATCH (observation:OLIIHPhase1Node {node_label: "Observation"})
WHERE observation.species_id = species.source_id
   OR toLower(observation.label) CONTAINS toLower(species.label)
   OR toLower(observation.label) CONTAINS toLower(coalesce(species.scientific_name, ""))
OPTIONAL MATCH (observation)-[support_link:SUPPORTS]->(loop:OLIIHPhase1Node)
OPTIONAL MATCH (observation)-[story_link:PART_OF_STORY]->(thread:OLIIHPhase1Node)
OPTIONAL MATCH (species)-[review_link:NEEDS_REVIEW]->(gate:OLIIHPhase1Node)
RETURN species.id AS species_id,
       species.label AS species_label,
       species.scientific_name AS scientific_name,
       species.source_table AS species_source_table,
       species.source_id AS species_source_id,
       species.owner_domain AS species_owner_domain,
       species.publicness AS species_publicness,
       species.review_status AS species_review_status,
       species.claim_status AS species_claim_status,
       species.writeback AS species_writeback,
       collect(DISTINCT {id: observation.id, label: observation.label, observed_at: observation.observed_at, source_table: observation.source_table, source_id: observation.source_id, owner_domain: observation.owner_domain, publicness: observation.publicness, review_status: observation.review_status, claim_status: observation.claim_status, writeback: observation.writeback, loop_id: loop.id, loop_label: loop.label, thread_id: thread.id, thread_label: thread.label}) AS observations,
       collect(DISTINCT {biome_id: biome.id, biome_label: biome.label, relationship_id: biome_link.id, relationship_source_table: biome_link.source_table, relationship_source_id: biome_link.source_id, relationship_review_status: biome_link.review_status}) AS biome_links,
       collect(DISTINCT {gate_id: gate.id, gate_label: gate.label, reason: gate.reason, relationship_id: review_link.id}) AS review_gates
ORDER BY species.label;
```

Expected answer shape:

- one row per species;
- direct observation links by `species_id` plus text-match context for observations that mention the species but lack a canonical species ID;
- biome relationship context;
- review gates for species still blocked or review-required.

### 3. `open_loop_status`

Question:

```text
Which open loops are still open, advanced, or review-required?
```

Cypher:

```cypher
MATCH (loop:OLIIHPhase1Node {node_label: "OpenLoop"})
OPTIONAL MATCH (source:OLIIHPhase1Node)-[source_link:SOURCE_LOOP_FOR]->(loop)
OPTIONAL MATCH (observation:OLIIHPhase1Node)-[support_link:SUPPORTS]->(loop)
OPTIONAL MATCH (loop)-[review_link:NEEDS_REVIEW]->(gate:OLIIHPhase1Node)
RETURN loop.id AS loop_id,
       loop.label AS loop_label,
       loop.status AS loop_status,
       loop.source_table AS loop_source_table,
       loop.source_id AS loop_source_id,
       loop.owner_domain AS loop_owner_domain,
       loop.publicness AS loop_publicness,
       loop.review_status AS loop_review_status,
       loop.claim_status AS loop_claim_status,
       loop.writeback AS loop_writeback,
       collect(DISTINCT {id: source.id, label: source.label, relationship_type: type(source_link), relationship_id: source_link.id, relationship_review_status: source_link.review_status}) AS source_items,
       collect(DISTINCT {id: observation.id, label: observation.label, source_table: observation.source_table, source_id: observation.source_id, relationship_id: support_link.id, relationship_review_status: support_link.review_status}) AS supporting_observations,
       collect(DISTINCT {id: gate.id, label: gate.label, reason: gate.reason, relationship_id: review_link.id}) AS review_gates
ORDER BY loop.status, loop.id;
```

Expected answer shape:

- one row per open loop;
- loop `status` preserved as `open` or `advanced`;
- review gates and supporting observations grouped under the loop.

### 4. `media_candidates_and_review_gates`

Question:

```text
Which media candidates exist and what review gates block public use?
```

Cypher:

```cypher
MATCH (media:OLIIHPhase1Node {node_label: "MediaAssetCandidate"})
OPTIONAL MATCH (media)-[review_link:NEEDS_REVIEW]->(gate:OLIIHPhase1Node)
OPTIONAL MATCH (gate)-[block_link:BLOCKED_FOR_PUBLIC]->(blocked:OLIIHPhase1Node)
RETURN media.id AS media_id,
       media.label AS media_label,
       media.local_path AS media_local_path,
       media.file_type AS media_file_type,
       media.reviewed AS media_reviewed,
       media.source_table AS media_source_table,
       media.source_id AS media_source_id,
       media.owner_domain AS media_owner_domain,
       media.publicness AS media_publicness,
       media.review_status AS media_review_status,
       media.claim_status AS media_claim_status,
       media.writeback AS media_writeback,
       collect(DISTINCT {gate_id: gate.id, gate_label: gate.label, gate_type: gate.gate_type, reason: gate.reason, blocks_public_output: gate.blocks_public_output, relationship_id: review_link.id, relationship_review_status: review_link.review_status}) AS review_gates,
       collect(DISTINCT {blocked_claim_id: blocked.id, blocked_claim: blocked.claim_text, blocked_reason: blocked.blocked_reason, relationship_id: block_link.id}) AS blocked_public_claims
ORDER BY media.id;
```

Expected answer shape:

- one row per media candidate;
- local path remains internal;
- every media candidate remains `media_review_required` and not public proof;
- blocked public claim path shown where applicable.

### 5. `blocked_public_claims`

Question:

```text
Which claims are blocked for public output?
```

Cypher:

```cypher
MATCH (claim_source:OLIIHPhase1Node)-[block_link:BLOCKED_FOR_PUBLIC]->(blocked:OLIIHPhase1Node {node_label: "BlockedClaim"})
RETURN blocked.id AS blocked_claim_id,
       blocked.label AS blocked_claim_label,
       blocked.claim_text AS claim_text,
       blocked.blocked_reason AS blocked_reason,
       blocked.source_table AS blocked_source_table,
       blocked.source_id AS blocked_source_id,
       blocked.owner_domain AS blocked_owner_domain,
       blocked.publicness AS blocked_publicness,
       blocked.review_status AS blocked_review_status,
       blocked.claim_status AS blocked_claim_status,
       blocked.writeback AS blocked_writeback,
       collect(DISTINCT {id: claim_source.id, label: claim_source.label, node_label: claim_source.node_label, source_table: claim_source.source_table, source_id: claim_source.source_id, owner_domain: claim_source.owner_domain, publicness: claim_source.publicness, review_status: claim_source.review_status, claim_status: claim_source.claim_status, relationship_id: block_link.id, relationship_canonicality: block_link.canonicality, relationship_derived_rule: block_link.derived_rule, relationship_writeback: block_link.writeback}) AS blocking_sources
ORDER BY blocked.id;
```

Expected answer shape:

- one row per blocked claim;
- blocked reason and responsible owner domain visible;
- source nodes and `BLOCKED_FOR_PUBLIC` relationship citations attached.

### 6. `relationship_source_classes`

Question:

```text
Which relationships are canonical source links vs derived review/context links?
```

Cypher:

```cypher
MATCH (from:OLIIHPhase1Node)-[r]->(to:OLIIHPhase1Node)
WITH CASE
       WHEN r.canonicality STARTS WITH "canonical" THEN "canonical_source_link"
       WHEN r.canonicality STARTS WITH "derived" THEN "derived_review_or_context_link"
       ELSE "other_or_missing_canonicality"
     END AS relationship_class,
     type(r) AS relationship_type,
     r,
     from,
     to
RETURN relationship_class,
       relationship_type,
       count(r) AS count,
       collect({relationship_id: r.id, from_id: from.id, from_label: from.label, from_node_label: from.node_label, to_id: to.id, to_label: to.label, to_node_label: to.node_label, source_table: r.source_table, source_id: r.source_id, source_path: r.source_path, canonicality: r.canonicality, derived_rule: r.derived_rule, owner_domain: r.owner_domain, publicness: r.publicness, review_status: r.review_status, claim_status: r.claim_status, writeback: r.writeback}) AS examples
ORDER BY relationship_class, relationship_type;
```

Expected answer shape:

- grouped relationship counts;
- cited examples for each type;
- clear distinction between canonical source links and derived review/context links.

### 7. `public_claim_review_requirements`

Question:

```text
What would need review before a public claim?
```

Cypher:

```cypher
MATCH (candidate:OLIIHPhase1Node)
WHERE candidate.node_label IN ["ClaimCandidate", "Species", "OpenLoop", "MediaAssetCandidate", "StoryThread", "Chronicle"]
OPTIONAL MATCH (candidate)-[needs_review:NEEDS_REVIEW]->(gate:OLIIHPhase1Node)
OPTIONAL MATCH (candidate)-[blocks:BLOCKED_FOR_PUBLIC]->(blocked:OLIIHPhase1Node)
OPTIONAL MATCH (candidate)-[*1..2]-(nearby:OLIIHPhase1Node)-[nearby_blocks:BLOCKED_FOR_PUBLIC]->(nearby_blocked:OLIIHPhase1Node)
WHERE nearby.id <> candidate.id
RETURN candidate.id AS candidate_id,
       candidate.label AS candidate_label,
       candidate.node_label AS candidate_node_label,
       candidate.source_table AS candidate_source_table,
       candidate.source_id AS candidate_source_id,
       candidate.source_path AS candidate_source_path,
       candidate.owner_domain AS candidate_owner_domain,
       candidate.publicness AS candidate_publicness,
       candidate.review_status AS candidate_review_status,
       candidate.claim_status AS candidate_claim_status,
       candidate.writeback AS candidate_writeback,
       collect(DISTINCT {gate_id: gate.id, gate_label: gate.label, reason: gate.reason, owner_domain: gate.owner_domain, relationship_id: needs_review.id}) AS direct_review_gates,
       collect(DISTINCT {blocked_claim_id: blocked.id, claim_text: blocked.claim_text, blocked_reason: blocked.blocked_reason, relationship_id: blocks.id}) AS direct_blocked_claims,
       collect(DISTINCT {nearby_id: nearby.id, nearby_label: nearby.label, nearby_node_label: nearby.node_label, blocked_claim_id: nearby_blocked.id, claim_text: nearby_blocked.claim_text, blocked_reason: nearby_blocked.blocked_reason, relationship_id: nearby_blocks.id}) AS nearby_blocked_claims
ORDER BY candidate.node_label, candidate.id;
```

Expected answer shape:

- one row per candidate public-claim-relevant node;
- direct review gates;
- direct blocked claims;
- nearby blocked claims for graph-neighbor risk context;
- no public approval inferred.

### 8. `story_continuity_paths`

Question:

```text
Where are the strongest story-continuity paths?
```

Cypher:

```cypher
MATCH path = (observation:OLIIHPhase1Node {node_label: "Observation"})-[:PART_OF_STORY|SUPPORTS*1..2]->(target:OLIIHPhase1Node)
WHERE target.node_label IN ["StoryThread", "OpenLoop"]
WITH observation,
     target,
     path,
     length(path) AS path_length,
     [node IN nodes(path) | {id: node.id, label: node.label, node_label: node.node_label, source_table: node.source_table, source_id: node.source_id, source_path: node.source_path, owner_domain: node.owner_domain, publicness: node.publicness, review_status: node.review_status, claim_status: node.claim_status, writeback: node.writeback}] AS path_nodes,
     [rel IN relationships(path) | {relationship_type: type(rel), relationship_id: rel.id, source_table: rel.source_table, source_id: rel.source_id, source_path: rel.source_path, canonicality: rel.canonicality, derived_rule: rel.derived_rule, owner_domain: rel.owner_domain, publicness: rel.publicness, review_status: rel.review_status, claim_status: rel.claim_status, writeback: rel.writeback}] AS path_relationships
RETURN target.id AS target_id,
       target.label AS target_label,
       target.node_label AS target_node_label,
       count(DISTINCT observation) AS supporting_observation_count,
       collect(DISTINCT {observation_id: observation.id, observation_label: observation.label, observed_at: observation.observed_at, source_table: observation.source_table, source_id: observation.source_id, path_length: path_length, path_nodes: path_nodes, path_relationships: path_relationships}) AS continuity_paths
ORDER BY supporting_observation_count DESC, target_id;
```

Expected answer shape:

- one row per story thread or open loop;
- strongest paths sorted by number of supporting observations;
- path nodes and path relationships preserved for citation.

### 9. `writeback_exceptions`

Question:

```text
Which nodes or edges have writeback other than none?
```

Cypher:

```cypher
MATCH (n:OLIIHPhase1Node)
WHERE coalesce(n.writeback, "none") <> "none"
RETURN "node" AS item_kind,
       n.id AS item_id,
       n.label AS item_label,
       n.node_label AS item_node_label,
       n.source_table AS source_table,
       n.source_id AS source_id,
       n.source_path AS source_path,
       n.owner_domain AS owner_domain,
       n.publicness AS publicness,
       n.review_status AS review_status,
       n.claim_status AS claim_status,
       n.writeback AS writeback
UNION ALL
MATCH (from:OLIIHPhase1Node)-[r]->(to:OLIIHPhase1Node)
WHERE coalesce(r.writeback, "none") <> "none"
RETURN "relationship" AS item_kind,
       r.id AS item_id,
       type(r) + ": " + from.id + " -> " + to.id AS item_label,
       type(r) AS item_node_label,
       r.source_table AS source_table,
       r.source_id AS source_id,
       r.source_path AS source_path,
       r.owner_domain AS owner_domain,
       r.publicness AS publicness,
       r.review_status AS review_status,
       r.claim_status AS claim_status,
       r.writeback AS writeback;
```

Expected answer shape:

- zero rows;
- any row is a stop condition.

### 10. `bounded_graph_review_delta`

Question:

```text
What changed or needs review in this bounded graph?
```

Cypher:

```cypher
MATCH (n:OLIIHPhase1Node)
WHERE n.review_status CONTAINS "review"
   OR n.publicness CONTAINS "blocked"
   OR n.publicness CONTAINS "internal"
   OR n.claim_status CONTAINS "blocked"
   OR n.claim_status CONTAINS "candidate"
OPTIONAL MATCH (n)-[needs_review:NEEDS_REVIEW]->(gate:OLIIHPhase1Node)
OPTIONAL MATCH (n)-[blocks:BLOCKED_FOR_PUBLIC]->(blocked:OLIIHPhase1Node)
OPTIONAL MATCH (retrieval:OLIIHPhase1Node)-[retrieval_link:RETRIEVAL_SOURCE_FOR]->(n)
RETURN n.id AS node_id,
       n.label AS node_label,
       n.node_label AS node_type,
       n.source_table AS source_table,
       n.source_id AS source_id,
       n.source_path AS source_path,
       n.owner_domain AS owner_domain,
       n.publicness AS publicness,
       n.review_status AS review_status,
       n.claim_status AS claim_status,
       n.writeback AS writeback,
       collect(DISTINCT {gate_id: gate.id, gate_label: gate.label, reason: gate.reason, relationship_id: needs_review.id}) AS review_gates,
       collect(DISTINCT {blocked_claim_id: blocked.id, claim_text: blocked.claim_text, blocked_reason: blocked.blocked_reason, relationship_id: blocks.id}) AS blocked_claims,
       collect(DISTINCT {retrieval_source_id: retrieval.id, retrieval_label: retrieval.label, source_path: retrieval.source_path, relationship_id: retrieval_link.id}) AS retrieval_sources
ORDER BY n.node_label, n.id;
```

Expected answer shape:

- rows for review-required, blocked, internal, and candidate nodes;
- retrieval source context attached when present;
- no implication that these rows changed canonically.

## Validation And Readback Checks

The implementation should run these checks before reporting success:

1. Confirm Phase 2 `memgraph_readback_report.json` exists and has `status = pass_phase2_memgraph_readback_ready`.
2. Confirm the local Memgraph container name is `minibiota-oli-ih-phase2-memgraph`.
3. Confirm node count still equals `93`.
4. Confirm relationship counts still match the Phase 2 baseline.
5. Confirm review gate count is `9`.
6. Confirm blocked claim count is `9`.
7. Confirm media candidates count is `13`, review status remains `media_review_required`, and reviewed remains `false`.
8. Confirm `writeback_exceptions` returns zero rows.
9. Confirm public output nodes remain `0`.
10. Confirm canonical write nodes remain `0`.
11. Confirm direct observation-source links remain `0`.
12. Confirm every required query returns successfully.
13. Confirm generated output path is under App ignored `out/`.
14. Confirm no Supabase query/write, Planner write, App runtime change, pgvector, public output, media metadata write, or canonical writeback occurred.

Recommended validation status:

```text
pass_phase3_query_harness_ready
```

## Stop Conditions

Stop before running query outputs if:

- Phase 2 readback is missing or not `pass_phase2_memgraph_readback_ready`;
- Docker or the approved local Memgraph container is unavailable;
- the helper would need to regenerate Phase 1 or Phase 2 output;
- the helper would need to import or reset Memgraph without explicit approval;
- node count is not `93`;
- relationship counts drift from the Phase 2 baseline;
- review gate count is not `9`;
- blocked claim count is not `9`;
- media candidates are missing or no longer review-required;
- any node or relationship has `writeback` other than `none`;
- any public output node appears;
- any canonical write node appears;
- any direct observation-source link appears;
- any query would expand beyond the Lake Post-Seal Core Seed;
- any query would require Supabase, Planner, App runtime, media metadata, pgvector, public output, or canonical writeback access;
- generated output path resolves outside the approved Phase 3 App `out/` folder.

## Confirmed Boundaries

Phase 3 Intelligence Query Harness remains:

- local;
- derived only;
- no-write to canonical systems;
- bounded to the Lake Post-Seal Core Seed;
- read-only against the existing Memgraph pilot graph;
- no Supabase writes;
- no Planner writes;
- no App runtime behavior change;
- no package edits;
- no pgvector;
- no public output;
- no dashboard;
- no scheduled jobs;
- no media metadata writes;
- no canonical writeback.

## Implementation Approval Needed

Recommended next approval:

```text
Approve implementation of the Phase 3 read-only Intelligence Query Harness helper and generated query reports only.
```

Until that approval, do not:

- create the App Phase 3 helper;
- run query harness output generation;
- change Docker/Memgraph runtime behavior;
- import into Memgraph;
- reset Memgraph;
- regenerate Phase 1 or Phase 2 output;
- query or write Supabase;
- write Planner;
- change App runtime;
- write media metadata;
- create public output;
- perform canonical writeback;
- expand beyond Lake Post-Seal Core Seed.
