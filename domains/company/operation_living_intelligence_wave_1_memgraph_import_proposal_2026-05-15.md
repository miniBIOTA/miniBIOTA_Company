---
id: operation_living_intelligence_wave_1_memgraph_import_proposal_2026-05-15
title: Operation Living Intelligence Wave 1 Local Memgraph Import Proposal
domain: company_operations
date: 2026-05-15
status: import_cypher_generated_memgraph_not_executed
tags: [operation-living-intelligence, memgraph, graph-seed, import-proposal, local-only]
---
# Operation Living Intelligence Wave 1 Local Memgraph Import Proposal

## Purpose

This is the next technical proposal after the App-owned JSONL regeneration helper.

Goal: import the regenerated Wave 1 Lake Post-Seal graph seed into a **local disposable Memgraph database** so agents can run safe traversal/readback tests.

This proposal does not execute the import. It does not approve install, Docker run, Memgraph service start, database writes, Supabase/Planner writes, App runtime changes, public output, cloud upload, paid service, automation, or canonical writeback.

Update after approval: the narrow `import.cypher` generation sub-step was completed. Memgraph/Docker was still not started, and no graph import was performed.

## Current Input Package

Regenerate first:

```powershell
cd M:\miniBIOTA\miniBIOTA_App
node tools/generate-oli-wave1-jsonl.js
```

Input folder:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\
```

Required files:

- `nodes.jsonl`
- `edges.jsonl`
- `blocked_edges.jsonl`
- `validation_report.json`

Current verified validation:

```text
Status: pass_with_review_required_import_shape_ready
Nodes: 67
Edges: 96
Blocked edges: 13
```

## Recommended Import Shape

Use a generated Cypher import file rather than trying to make Memgraph consume JSONL directly in the first pass.

Recommended generated file:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\import.cypher
```

Generated helper:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave1-cypher.js
```

Verified generated counts:

```text
Node merge statements: 67
Relationship merge statements: 109
Blocked guardrail relationship imports: 13
```

Detailed record:

```text
M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_1_cypher_import_file_generation_2026-05-15.md
```

Import model:

1. Delete/reset only the disposable local Memgraph test database.
2. Create or merge nodes by `global_id`.
3. Store original `node_type` as a property and optionally as sanitized labels later.
4. Import normal relationships from `edges.jsonl`.
5. Import blocked relationships from `blocked_edges.jsonl` as explicit guardrail relationships.
6. Keep every property needed for provenance, review state, publicness, confidence, and canonical writeback.

Minimum node merge pattern:

```cypher
MERGE (n:OLIWave1Node {global_id: $global_id})
SET n += $properties;
```

Minimum relationship merge pattern:

```cypher
MATCH (source:OLIWave1Node {global_id: $source})
MATCH (target:OLIWave1Node {global_id: $target})
MERGE (source)-[r:RELATIONSHIP_TYPE]->(target)
SET r += $properties;
```

Implementation note: relationship type names cannot be parameterized in plain Cypher, so the import converter should sanitize `relationship_type` into an allowlisted Cypher identifier before writing each statement.

## Recommended Runtime Path

Preferred path: use Docker only after confirming Docker Desktop is installed/runnable and ports are available.

Preflight commands:

```powershell
docker --version
docker ps
```

Current session finding: `docker`, `memgraph`, and `mgconsole` were not visible in the active shell, so runtime setup is still a separate approval gate.

Current Memgraph platform repo guidance says the quick start uses Docker with ports `7687`, `7444`, and `3000`, and notes that the old single `memgraph/memgraph-platform` image is deprecated after the last published platform image. Prefer the current Docker Compose/install-helper path after reviewing what it will run. Keep one-container examples as fallback/reference only.

Primary runtime proposal after approval:

1. Verify Docker is available.
2. Review the current Memgraph Docker Compose/start path before execution.
3. Start Memgraph locally with Lab on `localhost:3000` and Bolt on `localhost:7687`.
4. Run the generated `import.cypher` through `mgconsole` or Memgraph Lab.
5. Run readback smoke tests.
6. Stop/remove the disposable containers when finished unless persistence is explicitly approved.

Do not enable Memgraph MCP yet. Memgraph's 2026 MCP Docker path may become useful later, but the first import should prove local graph shape and readback before adding an agent-facing MCP layer.

Sources checked:

- Memgraph platform repository quick start and deprecation note: https://github.com/memgraph/memgraph-platform
- Memgraph MCP Docker announcement for later agent-facing option: https://memgraph.com/blog/memgraph-mcp-server-on-docker-hub

## Smoke-Test Queries

Accept the import only if these queries fail closed safely:

| Test | Required readback |
|---|---|
| Daphnia clearing path | Shows blocked/review-required status; does not say Daphnia cleared the lake |
| Daphnia species ID | Blocks stronger-than-`Daphnia sp.` identification |
| Ghost Shrimp path | Separates confirmed breeding from unconfirmed juvenile recruitment |
| Mesostoma path | Keeps public-primary explanation blocked/internal unless reviewed |
| Moina path | Keeps establishment unresolved |
| Media proof path | Shows media as unreviewed candidate references only |
| Direct observation links | Shows observations `170-178` as packet context only, not direct canonical `pipeline_id`/`chronicle_id` links |
| Public output path | Fails closed until Research, Content, and Web review gates resolve |

Example query shape:

```cypher
MATCH path = (start:OLIWave1Node {global_id: 'species:164'})-[*1..4]-(other)
RETURN path
LIMIT 25;
```

Required manual readback:

- count nodes and relationships;
- list all `BlockedClaim` nodes;
- list all relationships with `review_state = 'blocked_or_review_required'`;
- list paths from `species:164`, `species:67`, `species:167`, `species:180`, and `open_loop:4`;
- prove there are no paths that convert `canonical_writeback` from `none`.

## Stop Conditions

Stop before import if:

- Docker/Memgraph runtime is unavailable or would require unreviewed install steps;
- ports `7687`, `7444`, or `3000` are occupied and no alternate port plan is approved;
- JSONL validation is not `pass_with_review_required_import_shape_ready`;
- any edge endpoint is missing;
- the import converter would drop blocked edges or blocked-claim nodes;
- import requires committing generated private data;
- import would write to Supabase, Planner, App runtime state, media metadata, Web/public records, source Markdown, cloud services, or paid tools.

## Proposed Next Implementation Unit

Completed narrow sub-step: created a small App local helper:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave1-cypher.js
```

The helper should:

- read `nodes.jsonl`, `edges.jsonl`, and `blocked_edges.jsonl`;
- validate endpoints again;
- write `import.cypher` under the same ignored `out/` folder;
- sanitize relationship types;
- avoid external dependencies;
- avoid Memgraph/Supabase/Planner writes;
- print exact node/relationship counts.

The actual Memgraph runtime/import is still a separate approval step.

## Approval Required

To proceed beyond the generated `import.cypher` file, Josue should explicitly approve one of:

1. inspect `import.cypher` further;
2. verify/install/start Docker/Memgraph locally;
3. import the regenerated Wave 1 graph into local Memgraph;
4. add an agent-facing Memgraph MCP layer after graph import and readback are proven.

Recommended next approval: **inspect `import.cypher` and verify Docker/Memgraph availability**, then decide whether to start Memgraph.
