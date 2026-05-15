---
id: operation_living_intelligence_wave_1_cypher_import_file_generation_2026-05-15
title: Operation Living Intelligence Wave 1 Cypher Import File Generation
domain: company_operations
date: 2026-05-15
status: direct_mgconsole_import_file_verified
tags: [operation-living-intelligence, memgraph, cypher, graph-seed, local-only]
---
# Operation Living Intelligence Wave 1 Cypher Import File Generation

## Purpose

This records the approved narrow next step after the local Memgraph import proposal: generate a local `import.cypher` file from the already validated Wave 1 JSONL package, without starting Memgraph or importing anything.

## App Helper

Created App file:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave1-cypher.js
```

The helper reads:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\nodes.jsonl
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\edges.jsonl
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\blocked_edges.jsonl
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\validation_report.json
```

It writes:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\import.cypher
```

## Verified Run

Command run from App:

```powershell
node tools/generate-oli-wave1-cypher.js
```

Result:

```text
Operation Living Intelligence Wave 1 Cypher import generated.
Nodes: 67, edges: 96, blocked edges: 13
Relationship statements: 109
```

Generated file size:

```text
130199 bytes
```

## Import File Shape

The generated `import.cypher`:

- creates an index on `:OLIWave1Node(global_id)`;
- deletes only existing `OLIWave1Node` nodes with `MATCH (n:OLIWave1Node) DETACH DELETE n`;
- merges `67` nodes by `global_id`;
- merges `109` relationships total;
- includes `96` normal relationships;
- includes `13` blocked guardrail relationships with `import_edge_family = "blocked_guardrail"`;
- preserves `canonical_writeback = "none"` properties;
- ends with readback smoke-check queries for node count, relationship count, blocked claims, blocked/review-required relationships, and a Daphnia path query.

Safety scan found no `LOAD`, `CALL`, HTTP, secret, Supabase, Planner, or Storage hooks in the generated Cypher file.

## Direct `mgconsole` Compatibility Update

After the first disposable Memgraph import, Company found that `mgconsole` treated a leading comment-only header as an empty query. App updated:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave1-cypher.js
```

The regenerated `import.cypher` now starts directly with executable Cypher:

```cypher
CREATE INDEX ON :OLIWave1Node(global_id);
MATCH (n:OLIWave1Node) DETACH DELETE n;
```

The updated file was imported directly into a fresh disposable Memgraph container without stripping comments. Compact readback again confirmed:

```text
Nodes: 67
Relationships: 109
Daphnia blocked claims: 3
Ghost Shrimp blocked claims: 1
Mesostoma blocked claims: 1
Moina blocked claims: 1
Media candidates: 13, all media_review_required and reviewed=false
Direct observation source links: 0
Non-none canonical writeback nodes: 0
Non-none canonical writeback relationships: 0
```

## Safety Boundary

This step did not:

- start Docker or Memgraph;
- install Memgraph;
- run `mgconsole`;
- import into a graph database;
- write Supabase, Planner, Storage, media metadata, public site records, or source-of-truth docs outside this Company record;
- change App runtime behavior, renderer behavior, schema, migrations, package scripts, or public behavior;
- run a model, upload to cloud, start automation, approve public output, or perform canonical writeback.

## Next Gate

The next separate approval gate is whether to:

1. inspect `import.cypher` further;
2. verify Docker/Memgraph availability and ports;
3. start a local disposable Memgraph runtime;
4. run `import.cypher`;
5. perform readback smoke tests.

Company recommendation: inspect first, then start local Memgraph only if Josue explicitly wants to proceed with the graph traversal proof.

## Verification

- Ran `node --check` on `generate-oli-wave1-cypher.js`.
- Ran `node tools/generate-oli-wave1-cypher.js` from App.
- Confirmed generated node merge count: `67`.
- Confirmed generated relationship merge count: `109`.
- Confirmed blocked guardrail relationship count: `13`.
- Confirmed generated file has scoped delete only for `OLIWave1Node`.
- Confirmed no `LOAD`, `CALL`, HTTP, secret, Supabase, Planner, or Storage hooks were present in `import.cypher`.
- Updated the generator to emit direct `mgconsole`-compatible Cypher with no leading comment-only block.
- Regenerated `import.cypher`.
- Verified direct import into a fresh disposable Memgraph container.
- Stopped/removed the disposable container and stopped Docker Desktop after verification.
