---
id: operation_living_intelligence_wave_1_manual_projection_helper_2026-05-15
title: Operation Living Intelligence Wave 1 Manual Projection Helper
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, graph, app, manual-projection, no-write, local-output]
status: completed
---
# Operation Living Intelligence Wave 1 Manual Projection Helper

## Summary

App now has a manual internal orchestration helper for the Wave 1 Lake Post-Seal graph projection:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave1-manual-projection.js
```

The helper runs the existing App-owned local sequence:

1. Regenerate the core Wave 1 JSONL files from bounded Supabase reads.
2. Run the no-Docker JSONL safety/value readback.
3. Generate the Wave 1.1 public reuse sidecar.
4. Run the no-Docker JSONL readback again with the sidecar present.
5. Generate the local Cypher import file.
6. Write an ignored local operator report.

It does not start Docker, start Memgraph, change App runtime behavior, write Supabase or Planner records, write Storage, change media metadata, change Web/public behavior, edit Content copy, approve public output, automate a schedule, or create canonical writeback.

## Verification Result

Verified from the App repo on 2026-05-15:

```powershell
node --check tools/run-oli-wave1-manual-projection.js
node tools/run-oli-wave1-manual-projection.js
```

The syntax check passed.

The first sandboxed run completed downstream checks from existing local output but could not refresh the source JSONL because network access to Supabase was blocked and the generator reported `fetch failed`. The helper correctly returned:

```text
status review_required_stop_condition
stop_conditions manual_projection_step_failed
```

After rerunning with explicit network permission for the same command, the helper regenerated the source package and returned:

```text
status pass_manual_internal_projection_ready
stage3_pass_count 10 / 10
core_validation_status pass_with_review_required_import_shape_ready
jsonl_readback_status pass_with_review_required
public_reuse_sidecar_status pass_with_review_required_public_reuse_sidecar_ready
public_reuse_safe_status review_required
stop_conditions_triggered []
```

The final local output remains under:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\
```

The new operator report files are:

```text
manual_projection_operator_report.json
manual_projection_operator_report.md
```

## Decision

This closes the next durable implementation step as a manual internal runbook command.

Approved posture:

- manual internal run only;
- protected/internal Supabase read path;
- ignored local derived output;
- rebuildable JSONL/Cypher files;
- no-Docker readback as the default safety/value check;
- optional disposable Memgraph smoke test only when separately needed;
- public reuse sidecar remains `review_required`;
- canonical writeback remains `none`.

Not approved:

- scheduled automation;
- persistent Memgraph service;
- App runtime integration;
- public Web behavior;
- Content copy or captions;
- Research claim changes;
- media metadata changes;
- Supabase/Planner writes;
- Storage writes;
- schema or RLS changes;
- paid services;
- source-of-truth migration.

## Next Gate

The recommended next step is operational use of the manual helper when a fresh Wave 1 projection/readback is needed.

The next optional proof is a disposable Memgraph smoke run after the manual helper, only if graph-runtime readback is specifically useful for a decision. A persistent graph runtime, scheduled sync, App operator UI, public output, or canonical writeback still requires a separate implementation proposal and approval.
