---
id: operation_living_intelligence_wave_1_memgraph_smoke_helper_2026-05-15
title: Operation Living Intelligence Wave 1 Memgraph Smoke Helper
domain: company_operations
date: 2026-05-15
status: helper_verified
tags: [operation-living-intelligence, memgraph, docker, smoke-test, app-helper]
---
# Operation Living Intelligence Wave 1 Memgraph Smoke Helper

## Purpose

This records the App-owned helper that makes the disposable Wave 1 Memgraph import/readback repeatable.

The helper starts a local disposable Memgraph container, imports the generated `import.cypher`, runs compact safety readbacks, and removes the container afterward.

## App Helper

Created App file:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave1-memgraph-smoke.js
```

Command:

```powershell
cd M:\miniBIOTA\miniBIOTA_App
node tools/run-oli-wave1-memgraph-smoke.js
```

Prerequisites:

- Docker Desktop installed and running.
- `import.cypher` already generated at:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\import.cypher
```

## Verified Result

Verified command output:

```text
Operation Living Intelligence Wave 1 Memgraph smoke test passed.
Container: minibiota-oli-memgraph
Input: M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\import.cypher
Readback summary: 67 nodes, 109 relationships, blocked claims/media/source-link/writeback checks passed.
Disposable Memgraph container stopped and removed.
```

After helper verification, Docker Desktop was stopped.

## What The Helper Checks

The helper verifies:

- node count is `67`;
- relationship count is `109`;
- Daphnia has blocked claims for species-level ID, establishment, and lake-clearing;
- Ghost Shrimp has blocked recruitment-confirmed claim;
- Mesostoma has blocked public-primary explanation claim;
- Moina has blocked establishment claim;
- media candidates total `13`, all `media_review_required`, all `reviewed = false`;
- observations `170-178` have `0` direct links to `content_pipeline:338` or `chronicle:30`;
- `0` nodes have non-`none` `canonical_writeback`;
- `0` relationships have non-`none` `canonical_writeback`.

## Safety Boundary

The helper does not write Supabase, Planner, Storage, media metadata, public site records, source-of-truth docs, App runtime state, schema, migrations, packages, cloud services, paid services, or automation.

The helper does start Docker/Memgraph locally for the duration of the test. By default it removes the disposable container afterward. It has an optional `--keep-container` flag for inspection, but that should not be used unless persistence is intentionally approved for the session.

## Current Repeatable Wave 1 Test Path

Use this sequence:

```powershell
cd M:\miniBIOTA\miniBIOTA_App
node tools/generate-oli-wave1-jsonl.js
node tools/generate-oli-wave1-cypher.js
node tools/run-oli-wave1-memgraph-smoke.js
```

This remains a local disposable pilot path, not durable infrastructure or canonical writeback.

Company closed the dependency-policy question in:

```text
M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_1_pilot_dependency_decision_2026-05-15.md
```

Default policy: use Docker/Memgraph only for disposable Wave 1 smoke tests, then remove the container and stop Docker Desktop unless the active session explicitly needs another run.

## Verification

- Ran `node --check` on the helper.
- Fixed `mgconsole` input handling to append an actual newline.
- Verified the helper starts and removes the disposable container.
- Verified the helper imports the direct `mgconsole`-compatible `import.cypher`.
- Verified compact safety readbacks pass.
- Stopped Docker Desktop after helper verification.
