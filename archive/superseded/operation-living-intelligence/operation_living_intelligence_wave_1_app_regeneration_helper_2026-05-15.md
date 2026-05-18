---
id: operation_living_intelligence_wave_1_app_regeneration_helper_2026-05-15
title: Operation Living Intelligence Wave 1 App Regeneration Helper
domain: company_operations
date: 2026-05-15
status: app_helper_created_no_database_write
tags: [operation-living-intelligence, app, jsonl, graph-seed, memgraph-readiness]
---
# Operation Living Intelligence Wave 1 App Regeneration Helper

## Purpose

This records the App-owned local helper created after the first Wave 1 JSONL dry run and Memgraph import-readiness review.

The helper gives App a repeatable way to regenerate the bounded Lake Post-Seal graph-seed JSONL files from live read-only Supabase rows before any Memgraph import is proposed or run.

## App Helper

Created App file:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave1-jsonl.js
```

Default generated output:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\
```

The App `out/` folder is ignored by git. The helper writes generated local files only:

- `source_manifest.json`
- `nodes.jsonl`
- `edges.jsonl`
- `blocked_edges.jsonl`
- `validation_report.json`
- `readback_examples.md`

## Safety Boundary

The helper:

- reads bounded Supabase rows through REST using local protected credentials;
- keeps `canonical_writeback = none`;
- writes only ignored local JSON/JSONL/Markdown output files;
- includes blocked-claim and out-of-seed context endpoint nodes so blocked edges are import-shaped;
- validates normal and blocked edge endpoints;
- fails/flags stop conditions when output path, endpoint validity, observation direct-link state, or media review state is unsafe.

The helper does not:

- write Supabase, Planner, Storage, media metadata, public site records, source-of-truth Markdown, or Memgraph;
- change App runtime behavior, renderer behavior, schema, migrations, package scripts, or public behavior;
- import into Memgraph, start a local service, run a model, upload to cloud, schedule automation, or approve public output.

## Verified Run

Command run from App:

```powershell
node tools/generate-oli-wave1-jsonl.js
```

Result:

```text
Status: pass_with_review_required_import_shape_ready
Nodes: 67
Edges: 96
Blocked edges: 13
```

The regenerated validation report preserved:

- valid normal edge endpoints;
- valid blocked edge endpoints;
- observations `170-178` with no direct `pipeline_id` or `chronicle_id`;
- all candidate media assets still unreviewed;
- no sensitive source families included;
- no public output approval;
- no Memgraph import approval/performance;
- no canonical writeback.

## Memgraph Implication

This moves Wave 1 from a one-time JSONL snapshot to a repeatable App-owned export helper. The next technical gate can now be a local Memgraph import proposal rather than another manual JSONL-generation pass.

That proposal still needs separate approval and should name:

- runtime/install choice, such as Docker or local binary;
- import/delete/rebuild commands;
- node uniqueness/index strategy;
- blocked-edge import strategy;
- smoke-test queries for Daphnia, Ghost Shrimp, Mesostoma, media proof, direct observation links, and public-output failure-closed behavior;
- confirmation that no Supabase/Planner/App runtime/public/canonical writeback happens from graph output.

## Verification

- Ran `node --check` on the App helper.
- Ran the helper from App against the bounded live Supabase rows.
- Confirmed regenerated counts: `67` nodes, `96` edges, `13` blocked edges.
- Confirmed validation status: `pass_with_review_required_import_shape_ready`.
- No Supabase/Planner writes, Storage writes, media metadata writes, public site changes, App runtime/schema/migration/package changes, Memgraph import, model run, cloud upload, paid service, automation, public commitment, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical writeback was performed.
