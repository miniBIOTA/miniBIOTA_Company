---
id: operation_living_intelligence_wave_1_jsonl_dry_run_generation_2026-05-15
title: Operation Living Intelligence Wave 1 JSONL Dry-Run Generation
domain: company_operations
date: 2026-05-15
status: generated_local_no_write_import_shape_ready_repeatable_helper_added
tags: [operation-living-intelligence, jsonl, graph-seed, dry-run, living-atlas, app]
---
# Operation Living Intelligence Wave 1 JSONL Dry-Run Generation

## Purpose

This records the first Operation Living Intelligence **Wave 1: Living Atlas Graph Seed** JSONL-first dry run.

The dry run generated local disposable graph-seed files from the bounded Lake Post-Seal source manifest. It did not import into Memgraph, write Supabase/Planner records, change App code, change schema, write media metadata, change public site behavior, run a model, upload to cloud, start automation, or move any source of truth.

## Output Location

Generated files live under App's ignored `out/` folder:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\
```

Files generated:

| File | Purpose |
|---|---|
| `source_manifest.json` | Bounded source rows, source docs, excluded scope, live readback rows, approval basis |
| `nodes.jsonl` | Derived graph candidate nodes |
| `edges.jsonl` | Derived graph candidate relationships |
| `blocked_edges.jsonl` | Explicit blocked/unsafe overclaim relationships |
| `validation_report.json` | Counts, endpoint checks, safety flags, next gate |
| `readback_examples.md` | Human-readable safety readbacks for Daphnia, Ghost Shrimp, Mesostoma, media proof, direct-link cleanup, and public output |

## Generation Method

- Used protected Supabase REST reads only.
- Read the bounded live source rows for `content_pipeline`, `chronicles`, `chronicle_subject_links`, `species`, `observations`, observation loop/thread links, `open_loops`, and `media_assets`.
- Wrote only local generated files under App's ignored `out/` tree.
- Did not write to Supabase, Planner, App source, schema, migrations, Storage, media metadata, public site records, or Markdown source-of-truth docs outside this Company note and related Company coordination docs.

## Validation Summary

`validation_report.json` first returned `pass_with_review_required`. A follow-up import-shape review then added missing guardrail/context endpoint nodes for blocked edges and updated validation to `pass_with_review_required_import_shape_ready`.

Current `validation_report.json` summary:

```json
{
  "status": "pass_with_review_required_import_shape_ready",
  "actual_counts": {
    "content_pipeline": 1,
    "chronicles": 1,
    "chronicle_subject_links_live": 8,
    "seed_subject_links": 5,
    "candidate_species": 6,
    "candidate_observations": 9,
    "observation_species_context_not_seed_species": 2,
    "observation_loop_links": 13,
    "observation_thread_links": 12,
    "open_loop_context": 5,
    "media_assets": 13,
    "nodes": 67,
    "edges": 96,
    "blocked_edges": 13,
    "guardrail_nodes_added_for_import_shape": 13
  }
}
```

Checks passed:

| Check | Result |
|---|---|
| Output path is App ignored `out/` tree | true |
| Observations `170-178` have no direct `pipeline_id` or `chronicle_id` | true |
| All media candidates are unreviewed | true |
| Edge endpoints are valid | true |
| Blocked edge endpoints are valid | true |
| Canonical writeback | `none` |
| Sensitive source families included | false |
| Public output approved | false |
| Memgraph import approved/performed | false |

## Important Modeling Notes

- Two extra species context nodes were generated because bounded observations reference `species.id = 156` and `species.id = 59`. They are marked as observation species context only, not part of the first-seed species scope.
- Chronicle subject links `26`, `27`, and `28` remain out-of-seed live public chronicle context, not silent seed expansion.
- Observations `170-178` remain packet/context-associated only. The graph seed does not infer direct canonical links to `content_pipeline.id = 338` or `chronicles.id = 30`.
- Media assets are unreviewed candidate references only. The seed does not treat them as approved proof or caption-safe material.
- Blocked edges are explicit guardrails and should be preserved in any future Memgraph import.
- Import-shape review added `3` out-of-seed chronicle species context nodes and `10` blocked-claim guardrail nodes so `blocked_edges.jsonl` has valid endpoints for a future graph import.

## Next Gate

The next gate is captured in the Memgraph import readiness review and follow-up App helper record:

- `domains/company/operation_living_intelligence_wave_1_memgraph_import_readiness_review_2026-05-15.md`
- `domains/company/operation_living_intelligence_wave_1_app_regeneration_helper_2026-05-15.md`

After that review, Company created the App-scoped no-write helper:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave1-jsonl.js
```

The helper regenerated the same import-shaped package with `67` nodes, `96` edges, and `13` blocked edges. The next separate decision is now whether to approve a local Memgraph import proposal using the regenerated JSONL files as the source.

Do not proceed to Memgraph import, App implementation, automation, Supabase/Planner writes, public output, media metadata writes, cloud upload, paid services, or canonical writeback without explicit separate approval.

## Verification

- Generated local files under App's ignored `out/` folder.
- Parsed `source_manifest.json` and `validation_report.json` as JSON.
- Parsed every line of `nodes.jsonl`, `edges.jsonl`, and `blocked_edges.jsonl` as JSON.
- Confirmed updated generated counts: `67` nodes, `96` edges, `13` blocked edges.
- Confirmed blocked edge endpoints are now valid after adding guardrail/context nodes.
- Created and verified the App regeneration helper after the first dry-run review.
- Read `validation_report.json`.
- No Supabase/Planner writes were performed.
- No App runtime behavior, schema, migration, public site behavior, media metadata, model run, cloud upload, paid service, automation, or source-of-truth record changed.
