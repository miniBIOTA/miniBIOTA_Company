---
id: operation_living_intelligence_wave_1_pilot_dependency_decision_2026-05-15
title: Operation Living Intelligence Wave 1 Pilot Dependency Decision
domain: company_operations
date: 2026-05-15
status: active_decision
tags: [operation-living-intelligence, memgraph, docker, pilot-dependency, runtime-policy]
---
# Operation Living Intelligence Wave 1 Pilot Dependency Decision

## Purpose

This closes the immediate open question after the successful disposable Memgraph smoke test: whether Docker/Memgraph should remain part of Operation Living Intelligence now, and what Josue needs to do next.

Immediate user action required: **none**.

## Decision

For Wave 1, Docker Desktop plus Memgraph is accepted only as a **local disposable pilot dependency**.

This means:

- Docker Desktop is not being adopted as required day-to-day miniBIOTA infrastructure.
- Memgraph is not becoming a canonical database or always-on service.
- The Wave 1 graph remains rebuildable from App-generated files under the ignored `out/` tree.
- The verified smoke helper is the default test path when the graph proof needs to be rerun.
- The Memgraph container should be disposable by default: start it for the smoke test, import, read back, then remove it.
- Docker Desktop should be stopped after the test unless the current session explicitly needs another Docker/Memgraph run.

## Approved Pilot Path

Use this only when a Wave 1 graph smoke test is needed:

```powershell
cd M:\miniBIOTA\miniBIOTA_App
node tools/generate-oli-wave1-jsonl.js
node tools/generate-oli-wave1-cypher.js
node tools/run-oli-wave1-memgraph-smoke.js
```

The verified smoke helper starts a disposable `memgraph/memgraph-mage:latest` container, imports `import.cypher`, runs safety readbacks, and removes the container.

## Not Approved

This decision does not approve:

- persistent Memgraph service operation;
- Docker/Memgraph as general daily infrastructure;
- automated scheduled graph syncs;
- Supabase, Planner, Storage, media metadata, or canonical Markdown writeback;
- App runtime, schema, migration, package, or public-site behavior changes;
- Memgraph MCP or agent direct-write tooling;
- paid graph services;
- cloud upload;
- public, sponsor, financial, legal, launch, or roadmap commitments.

## Still Blocking Durable Implementation

Task `409`'s live SQL metadata gap remains unresolved for durable automation and implementation. Before a durable graph pipeline, automated sync, or canonical writeback exists, Company/App still need a working path for live constraints, indexes, RLS policies, and trigger inspection, such as:

- a working Supabase MCP database session;
- an App-owned read-only SQL bridge/helper;
- a read-only Postgres catalog connection.

The current REST/OpenAPI plus App migration-source audit was sufficient for the Wave 1 design and disposable smoke test, not for durable automation.

## Practical Next Step

Company/App can continue with App helper polish and documentation on our end. Josue does not need to sign up for another database service or migrate data right now.

The actual graph database work has begun at pilot scale: Wave 1 already imports into Memgraph and passes readback. Data migration to a durable graph database comes later, only after the rebuild workflow, metadata gap, ownership policy, and writeback boundaries are settled.

## Verification Basis

This decision is based on:

- `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave1.md`
- `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_1_memgraph_import_readback_2026-05-15.md`
- `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_1_memgraph_smoke_helper_2026-05-15.md`

Verified pilot readback:

```text
67 nodes
109 relationships
blocked claims/media/source-link/writeback checks passed
disposable container stopped and removed
```
