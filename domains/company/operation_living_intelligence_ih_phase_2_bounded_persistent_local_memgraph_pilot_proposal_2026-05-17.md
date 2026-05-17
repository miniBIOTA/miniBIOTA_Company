---
id: operation_living_intelligence_ih_phase_2_bounded_persistent_local_memgraph_pilot_proposal_2026-05-17
title: Operation Living Intelligence Intelligent Harness Phase 2 Bounded Persistent Local Memgraph Pilot Proposal
domain: company_operations
last_updated: 2026-05-17
tags: [operation-living-intelligence, intelligent-harness, phase-2, memgraph, local-only, no-write, lake-post-seal]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 2 Bounded Persistent Local Memgraph Pilot Proposal

## Purpose

This proposal defines the next implementation step after the approved Phase 1 no-write JSONL/readback helper:

```text
Bounded persistent local Memgraph pilot for the Lake Post-Seal Core Seed
```

The goal is to load only the approved Phase 1 JSONL graph into a local Memgraph database, keep the graph derived/rebuildable, and prove graph-runtime readback without changing any canonical system.

This proposal does not approve implementation. It does not approve Docker run, Memgraph setup, graph import, Supabase writes, Planner writes, App runtime changes, public output, pgvector, scheduled jobs, media metadata writes, or canonical writeback.

## Phase 1 Source Shape

Use the completed Phase 1 helper output as the only graph source:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_1_core_seed\lake_post_seal
```

Phase 1 source helpers:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-ih-phase1-core-seed-jsonl.js
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-ih-phase1-core-seed-readback.js
```

Phase 1 validation baseline:

```text
validation_status: pass_phase1_no_write_jsonl_ready
readback_status: pass_phase1_no_write_readback_ready
nodes: 81
edges: 87
review_gates: 9
blocked_claims: 9
retrieval_sources: 12
writeback: none
memgraph_used: false
pgvector_used: false
```

Approved input files:

```text
nodes.jsonl
edges.jsonl
review_gates.jsonl
blocked_claims.jsonl
retrieval_sources.jsonl
validation_report.json
source_manifest.json
readback_report.md
```

## Recommendation

Use Docker Desktop with a single local Memgraph container and an explicit bind-mounted data directory under App ignored `out/`.

Recommended image:

```text
memgraph/memgraph-mage:latest
```

Recommended container name:

```text
minibiota-oli-ih-phase2-memgraph
```

Recommended exposed port:

```text
127.0.0.1:7687 -> 7687
```

Do not expose Memgraph Lab by default. Use `mgconsole` through `docker exec` for the first pilot readback. Lab can be a later convenience path if graph inspection needs a visual UI.

Why Docker:

- Docker already worked for the prior local OLI Memgraph smoke path.
- It keeps the Memgraph runtime isolated from the App runtime.
- It avoids installing Memgraph directly into Windows.
- It supports repeatable start/stop/reset commands.
- Bind-mounted local storage makes the pilot persistent while still clearly local and disposable.

Why not a direct local install:

- It adds machine-level setup and cleanup ambiguity.
- It is harder to guarantee isolation from App runtime behavior.
- It is less repeatable for an agent-managed pilot.

Why not another graph option:

- The Intelligent Harness path already names Memgraph as the derived graph pilot target.
- Phase 2 should test the intended graph runtime before considering alternatives.

## Local Storage

Recommended generated output path:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_2_memgraph\lake_post_seal
```

Recommended persistent Memgraph storage:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_2_memgraph\lake_post_seal\memgraph_data
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_2_memgraph\lake_post_seal\memgraph_logs
```

These paths are under App `out/`, which is ignored. They are local derived data only.

Proposed Docker mounts:

```text
memgraph_data -> /var/lib/memgraph
memgraph_logs -> /var/log/memgraph
```

Windows Docker bind-mount ownership correction approved on 2026-05-17:

- The first persistent Memgraph start failed after the `vm.max_map_count` warning was resolved because the bind-mounted data directory was seen by the container as owned by `root` while the Memgraph process ran as user `memgraph`.
- Relevant Memgraph log: `The process is running as user memgraph, but the data directory is owned by user root. Please start the process as user root!`
- For this bounded local Phase 2 pilot only, the App helper should run the approved `minibiota-oli-ih-phase2-memgraph` container as `root` when using the approved bind-mounted `memgraph_data` and `memgraph_logs` directories.
- If a stopped container with the same approved name already exists from the pre-correction run and is not configured as `root`, the helper may remove and recreate only that container. It must not delete Phase 1 source output, Supabase data, Planner data, App runtime files, media metadata, public output, or canonical records.

Do not store Memgraph data under Company docs, App runtime directories, Supabase exports, media folders, or public Web folders.

## Start And Stop

Start should be explicit and local-only. Proposed future helper behavior:

```powershell
cd M:\miniBIOTA\miniBIOTA_App
node tools/run-oli-ih-phase2-memgraph-pilot.js --start
```

Stop should preserve the local database by default:

```powershell
node tools/run-oli-ih-phase2-memgraph-pilot.js --stop
```

Stop behavior:

- stop the container;
- do not delete `memgraph_data`;
- do not delete generated `import.cypher`;
- do not write to Supabase, Planner, App runtime, media metadata, or public output.

Use `--reset` only when explicitly approved for a rebuild.

## Reset And Rebuild

Reset must be scoped to the Phase 2 local Memgraph pilot output path only.

Recommended reset behavior:

1. Stop the `minibiota-oli-ih-phase2-memgraph` container if it exists.
2. Remove only that container.
3. Delete only:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_2_memgraph\lake_post_seal\memgraph_data
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_2_memgraph\lake_post_seal\memgraph_logs
```

4. Regenerate `import.cypher` from Phase 1 JSONL.
5. Start a fresh local Memgraph container with the same bind mounts.
6. Import and read back.

Reset must not delete Phase 1 JSONL source files unless a separate Phase 1 refresh is explicitly approved.

## Import Strategy

Recommend generating Cypher from Phase 1 JSONL first, then importing that Cypher into Memgraph.

Do not load JSONL directly in the first Phase 2 pilot.

Why Cypher-first:

- The generated `import.cypher` is readable before import.
- It gives a stable review artifact for node/edge/property mapping.
- It avoids relying on Memgraph-specific JSONL loader behavior in the first persistent pilot.
- It lets the import helper validate endpoints and allowlist relationship types before Memgraph starts.
- It matches the prior successful Wave 1 Memgraph path.

Required generated Cypher file:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_2_memgraph\lake_post_seal\import.cypher
```

Import model:

1. Validate Phase 1 `validation_report.json` status is `pass_phase1_no_write_jsonl_ready`.
2. Parse every line of `nodes.jsonl`, `edges.jsonl`, `review_gates.jsonl`, `blocked_claims.jsonl`, and `retrieval_sources.jsonl`.
3. Require unique node IDs.
4. Treat `review_gates.jsonl`, `blocked_claims.jsonl`, and `retrieval_sources.jsonl` as nodes if they are not already represented in `nodes.jsonl`.
5. Validate every edge endpoint exists.
6. Generate Cypher with one common label and type-specific labels/properties.
7. Import into local Memgraph.
8. Run readback queries.

Recommended node key:

```cypher
(:OLIIHPhase1Node {id: <source id>})
```

Recommended relationship type source:

```text
edges.jsonl.label
```

Relationship labels must be allowlisted/sanitized:

```text
SOURCE_CONTENT_FOR
OBSERVED_IN
MENTIONS
PART_OF_BIOME
SUPPORTS
PART_OF_STORY
SOURCE_LOOP_FOR
NEEDS_REVIEW
BLOCKED_FOR_PUBLIC
RETRIEVAL_SOURCE_FOR
```

Every imported node and relationship must preserve:

- source table or source path;
- source ID when applicable;
- canonicality;
- owner domain;
- publicness;
- review status;
- claim status;
- writeback = `none`;
- generated timestamp or source freshness.

## Exact Input Files

Required:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_1_core_seed\lake_post_seal\nodes.jsonl
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_1_core_seed\lake_post_seal\edges.jsonl
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_1_core_seed\lake_post_seal\review_gates.jsonl
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_1_core_seed\lake_post_seal\blocked_claims.jsonl
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_1_core_seed\lake_post_seal\retrieval_sources.jsonl
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_1_core_seed\lake_post_seal\validation_report.json
```

Reference-only:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_1_core_seed\lake_post_seal\source_manifest.json
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_1_core_seed\lake_post_seal\readback_report.md
```

## Proposed App Files

Create only these implementation files after approval:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-ih-phase2-core-seed-cypher.js
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-ih-phase2-memgraph-pilot.js
```

Do not edit App runtime files.
Do not edit `package.json`.
Do not create a dashboard.
Do not create scheduled jobs.
Do not add dependencies unless a later implementation review proves one is required. The first pass should use built-in Node modules and Docker CLI calls, following the prior OLI Memgraph smoke helper pattern.

## Proposed Generated Files

Generated under:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_2_memgraph\lake_post_seal
```

Required generated files:

```text
import.cypher
cypher_generation_report.json
memgraph_pilot_manifest.json
memgraph_readback_report.json
memgraph_readback_report.md
```

Persistent local runtime folders:

```text
memgraph_data\
memgraph_logs\
```

No generated output should be committed unless a later Company review explicitly chooses to preserve a report in Company Markdown.

## Cypher Generation Requirements

`generate-oli-ih-phase2-core-seed-cypher.js` should:

- read only Phase 1 generated files under App `out/`;
- validate Phase 1 status before generating;
- parse JSONL safely;
- require all required files;
- require unique node IDs;
- require edge endpoints;
- include `review_gates.jsonl`, `blocked_claims.jsonl`, and `retrieval_sources.jsonl`;
- write only `import.cypher` and `cypher_generation_report.json` under the Phase 2 output path;
- set every imported node and relationship `writeback` to `none`;
- generate no public output;
- run no Docker/Memgraph command;
- run no Supabase or Planner query;
- make no App runtime changes.

`import.cypher` should start with executable Cypher, not a comment-only header, because prior Memgraph smoke testing found that comment-only headers can confuse direct `mgconsole` import.

Minimum Cypher sections:

```cypher
MATCH (n:OLIIHPhase1Node) DETACH DELETE n;
CREATE INDEX ON :OLIIHPhase1Node(id);
MERGE (:OLIIHPhase1Node:ContentItem {id: "content_item:338"}) SET ...
MATCH (a:OLIIHPhase1Node {id: "..."}), (b:OLIIHPhase1Node {id: "..."}) MERGE (a)-[:SOURCE_CONTENT_FOR]->(b) SET ...
```

The reset statement must be limited to the `OLIIHPhase1Node` label so it cannot delete unrelated Memgraph pilot data if a user later runs multiple local pilots in the same database.

## Runtime Helper Requirements

`run-oli-ih-phase2-memgraph-pilot.js` should support:

```text
--start
--stop
--reset
--import
--readback
--all
--keep-running
```

Default recommended implementation command after approval:

```powershell
cd M:\miniBIOTA\miniBIOTA_App
node tools/generate-oli-ih-phase2-core-seed-cypher.js
node tools/run-oli-ih-phase2-memgraph-pilot.js --all
```

`--all` should:

1. verify Docker CLI is available;
2. verify Phase 2 `import.cypher` exists;
3. start the local Memgraph container if needed;
4. wait for `mgconsole` to respond;
5. import `import.cypher`;
6. run readback queries;
7. write readback reports;
8. stop the container unless `--keep-running` is supplied.

Persistent local data remains on disk after stop. `--reset` is the only approved path to delete local graph data, and it must target only the Phase 2 Memgraph data/log folders.

## Required Readback Queries

Node count:

```cypher
MATCH (n:OLIIHPhase1Node)
RETURN count(n) AS nodes;
```

Expected:

```text
81 or more if retrieval sources are imported as separate nodes not already present.
```

Relationship count:

```cypher
MATCH (:OLIIHPhase1Node)-[r]->(:OLIIHPhase1Node)
RETURN type(r) AS relationship_type, count(r) AS count
ORDER BY relationship_type;
```

Expected Phase 1 relationship counts:

```text
SOURCE_CONTENT_FOR: 1
OBSERVED_IN: 9
MENTIONS: 5
PART_OF_BIOME: 6
SUPPORTS: 13
PART_OF_STORY: 12
SOURCE_LOOP_FOR: 5
NEEDS_REVIEW: 27
BLOCKED_FOR_PUBLIC: 9
```

Review gates:

```cypher
MATCH (n:OLIIHPhase1Node {node_label: "ReviewGate"})
RETURN count(n) AS review_gates, collect(n.id) AS ids;
```

Expected:

```text
9
```

Blocked claims:

```cypher
MATCH (n:OLIIHPhase1Node {node_label: "BlockedClaim"})
RETURN count(n) AS blocked_claims, collect(n.id) AS ids;
```

Expected:

```text
9
```

Media candidates remain review-required:

```cypher
MATCH (m:OLIIHPhase1Node {node_label: "MediaAssetCandidate"})
RETURN count(m) AS media_candidates,
       collect(DISTINCT m.review_status) AS review_statuses,
       collect(DISTINCT m.reviewed) AS reviewed_values;
```

Expected:

```text
media_candidates: 13
review_statuses includes media_review_required
reviewed_values is false
```

Writeback remains none:

```cypher
MATCH (n:OLIIHPhase1Node)
WHERE n.writeback <> "none"
RETURN count(n) AS nodes_with_writeback;

MATCH (:OLIIHPhase1Node)-[r]->(:OLIIHPhase1Node)
WHERE r.writeback <> "none"
RETURN count(r) AS relationships_with_writeback;
```

Expected:

```text
0
0
```

No public output:

```cypher
MATCH (n:OLIIHPhase1Node)
WHERE n.public_output = true OR n.claim_status = "public_approved"
RETURN count(n) AS public_output_nodes;
```

Expected:

```text
0
```

No canonical writes:

```cypher
MATCH (n:OLIIHPhase1Node)
WHERE n.canonical_writeback = true OR n.writeback <> "none"
RETURN count(n) AS canonical_write_nodes;
```

Expected:

```text
0
```

Negative relationship preservation:

```cypher
MATCH (o:OLIIHPhase1Node)
WHERE o.id IN ["observation:170","observation:171","observation:172","observation:173","observation:174","observation:175","observation:176","observation:177","observation:178"]
MATCH (x:OLIIHPhase1Node)
WHERE x.id IN ["content_item:338","chronicle:30"]
MATCH p = (o)-[*1]-(x)
RETURN count(p) AS direct_observation_source_links;
```

Expected:

```text
0
```

Blocked claim paths:

```cypher
MATCH (c:OLIIHPhase1Node)-[:BLOCKED_FOR_PUBLIC]->(b:OLIIHPhase1Node {node_label: "BlockedClaim"})
RETURN b.id AS blocked_claim, count(c) AS incoming_paths
ORDER BY blocked_claim;
```

Expected:

```text
Every required blocked claim has at least one incoming BLOCKED_FOR_PUBLIC path.
```

## Acceptance Criteria

Phase 2 passes only if:

- Phase 1 source validation is still passing;
- all required Phase 1 files are present;
- generated Cypher parses and imports;
- node counts match expected import plan;
- edge counts match expected import plan;
- review gates = 9;
- blocked claims = 9;
- media candidates = 13 and remain review-required;
- direct observation-source links remain absent;
- all node/relationship writeback fields remain `none`;
- no public output is created;
- no canonical writes are created;
- generated output remains under App ignored `out/`;
- Memgraph is local only;
- graph is derived and rebuildable from Phase 1 JSONL.

## Stop Conditions

Stop before generating Cypher, starting Memgraph, or importing if:

- Phase 1 `validation_report.json` is missing or not `pass_phase1_no_write_jsonl_ready`;
- any required generated file is missing;
- source counts drift unexpectedly;
- duplicate node IDs are found;
- edge endpoints are missing;
- required review gates are missing;
- required blocked claims are missing;
- any node, edge, review gate, blocked claim, or retrieval source has `writeback` other than `none`;
- any input or proposed import references Supabase/Planner/App runtime/media metadata writes;
- any helper tries to query or write Supabase;
- any helper tries to write Planner;
- any helper tries to change App runtime behavior;
- any helper tries to write media metadata;
- any helper expands beyond the Lake Post-Seal Core Seed;
- any helper adds pgvector, embeddings, scheduled jobs, public output, dashboard behavior, cloud upload, paid service, or canonical writeback;
- Docker/Memgraph is unavailable or would require unapproved install/setup;
- target output path is outside App ignored `out/`;
- reset path resolves outside the Phase 2 Memgraph pilot output folder.

## Confirmed Boundaries

Phase 2 remains:

- local;
- derived only;
- no-write to canonical systems;
- bounded to the Lake Post-Seal Core Seed;
- rebuilt from Phase 1 JSONL;
- no Supabase writes;
- no Planner writes;
- no media metadata writes;
- no App runtime behavior change;
- no public output;
- no pgvector;
- no scheduled jobs;
- no dashboard;
- no canonical writeback.

## Implementation Approval Needed

Recommended next approval:

```text
Approve implementation of the two App helper files and generated Phase 2 output only.
```

Until that approval, do not:

- create the App Phase 2 helper files;
- generate Cypher;
- start Docker;
- start Memgraph;
- import graph data;
- run Memgraph readbacks;
- create persistent local Memgraph data;
- change App runtime;
- write Supabase, Planner, media metadata, public output, or canonical records.
