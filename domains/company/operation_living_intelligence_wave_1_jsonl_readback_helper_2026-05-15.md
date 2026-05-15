---
id: operation_living_intelligence_wave_1_jsonl_readback_helper_2026-05-15
title: Operation Living Intelligence Wave 1 JSONL Readback Helper
domain: company_operations
date: 2026-05-15
status: helper_verified
tags: [operation-living-intelligence, jsonl, readback, graph-seed, app-helper]
---
# Operation Living Intelligence Wave 1 JSONL Readback Helper

## Purpose

This records the App-owned no-Docker readback helper for the Operation Living Intelligence Wave 1 Lake Post-Seal graph seed.

The helper lets Company/App inspect the generated JSONL graph files without starting Docker or Memgraph. It checks import-shape counts, endpoints, blocked claims, media review state, direct source-link safety, canonical writeback, and Stage 3 pilot question coverage.

## App Helper

Created App file:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave1-jsonl-readback.js
```

Command:

```powershell
cd M:\miniBIOTA\miniBIOTA_App
node tools\run-oli-wave1-jsonl-readback.js
```

Generated local reports:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\jsonl_readback_report.json
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\jsonl_readback_report.md
```

The reports live under App's ignored `out/` tree and are not canonical records.

## Verified Result

Verified command output:

```text
Operation Living Intelligence Wave 1 JSONL readback passed.
Status: pass_with_review_required
Stage 3 pass count: 9 / 10
```

Verified readback counts:

| Item | Count |
|---|---:|
| Nodes | 67 |
| Edges | 96 |
| Blocked edges | 13 |
| Relationships with blocked guardrails | 109 |
| Media candidates | 13 |

## Safety Readback

The helper confirmed:

- node `global_id` values are unique;
- normal and blocked edge endpoints are valid;
- node and relationship `canonical_writeback` values are `none`;
- all `13` media candidates remain `media_review_required` and `reviewed = false`;
- observations `170-178` have `0` direct links to `content_pipeline:338` or `chronicle:30`;
- Daphnia, Ghost Shrimp, Mesostoma, and Moina blocked-claim paths are present.

## Stage 3 Readback

The local JSONL readback returns `9 / 10` for the Stage 3 pilot threshold:

- Questions `1`, `2`, `6`, `8`, and `9`: pass.
- Questions `3`, `4`, and `7`: strong pass.
- Question `10`: provisional pass because safety/ease are proven locally, while true speed comparison remains a later operator benchmark.
- Question `5`: partial fail because concrete Web/public-surface reuse targets remain outside Wave 1 until Web/Content ownership is modeled.

Interpretation: the graph seed is now useful and safe enough for repeated local pilot readbacks, but still not durable automation.

## Safety Boundary

The helper reads local generated JSONL files and writes local ignored reports only.

It does not connect to Supabase, Planner, Storage, Docker, Memgraph, app runtime services, telemetry, MQTT, public website records, cloud services, paid services, or canonical Markdown records.

## Current Repeatable Wave 1 Local Check Path

Use this sequence for a full local no-write check:

```powershell
cd M:\miniBIOTA\miniBIOTA_App
node tools\generate-oli-wave1-jsonl.js
node tools\run-oli-wave1-jsonl-readback.js
node tools\generate-oli-wave1-cypher.js
```

Run the Docker/Memgraph smoke helper only when the active session intentionally needs the graph runtime:

```powershell
node tools\run-oli-wave1-memgraph-smoke.js
```

## Verification

- Ran `node --check tools/run-oli-wave1-jsonl-readback.js`.
- Ran `node tools/run-oli-wave1-jsonl-readback.js`.
- Read generated `jsonl_readback_report.md`.
- No Supabase/Planner writes, App runtime/schema changes, public site changes, Docker/Memgraph run, Storage writes, media metadata writes, paid service, automation, or canonical writeback occurred.
