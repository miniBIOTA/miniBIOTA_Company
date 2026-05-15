---
id: operation_living_intelligence_wave_1_memgraph_import_readiness_review_2026-05-15
title: Operation Living Intelligence Wave 1 Memgraph Import Readiness Review
domain: company_operations
date: 2026-05-15
status: import_shaped_jsonl_repeatable_helper_ready_memgraph_not_imported
tags: [operation-living-intelligence, memgraph, jsonl, import-readiness, graph-seed, living-atlas]
---
# Operation Living Intelligence Wave 1 Memgraph Import Readiness Review

## Purpose

This is the Company-side review of whether the Wave 1 JSONL dry-run files are shaped well enough for a future local Memgraph import proposal.

Result: **yes for a proposal, not yet for execution**.

The generated JSONL files are now import-shaped enough to design a Memgraph import: normal edges and blocked edges have explicit endpoints, source IDs are preserved, and guardrails are visible as graph material.

This review does not approve a Memgraph install, Docker/container run, database import, Supabase/Planner write, media metadata write, public site change, cloud upload, paid service, automation, or canonical writeback.

Update after this review: the recommended App-scoped regeneration helper was created at `M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave1-jsonl.js` and successfully regenerated the same import-shaped package with `67` nodes, `96` edges, and `13` blocked edges. This changes the next gate from "choose helper or Memgraph" to "review/approve a local Memgraph import proposal" if Josue wants to proceed.

## Reviewed Generated Files

Generated output folder:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\
```

Reviewed files:

| File | Review result |
|---|---|
| `source_manifest.json` | Parses as JSON; contains source docs, live source rows, excluded scope, and approval basis |
| `nodes.jsonl` | Parses line-by-line; now contains all normal and guardrail endpoint nodes |
| `edges.jsonl` | Parses line-by-line; all endpoints are present in `nodes.jsonl` |
| `blocked_edges.jsonl` | Parses line-by-line; all endpoints are present in `nodes.jsonl` after guardrail/context node fix |
| `validation_report.json` | Parses as JSON; status is `pass_with_review_required_import_shape_ready` |
| `readback_examples.md` | Includes safety readbacks and import-shape review note |

## Import-Shape Correction

Initial review found that `blocked_edges.jsonl` had dangling targets:

- out-of-seed species context: `species:65`, `species:169`, `species:25`
- blocked-claim guardrails such as `blocked_claim:daphnia_cleared_lake`

Those endpoints are legitimate guardrails, but Memgraph relationships need concrete endpoint nodes. Company updated the disposable generated files by adding:

| Added node family | Count | Purpose |
|---|---:|---|
| `OutOfSeedChronicleSpeciesContext` | 3 | Makes excluded live chronicle context visible without expanding first-seed scope |
| `BlockedClaim` | 10 | Makes blocked claims explicit importable guardrail nodes |

Updated validation:

```json
{
  "status": "pass_with_review_required_import_shape_ready",
  "nodes": 67,
  "edges": 96,
  "blocked_edges": 13,
  "guardrail_nodes_added_for_import_shape": 13,
  "edge_endpoints_valid": true,
  "blocked_edge_endpoints_valid": true
}
```

## Local Runtime Check

Company checked for local Memgraph/Docker runtime commands in the active shell:

| Command | Available in shell |
|---|---|
| `docker` | no output found |
| `memgraph` | no output found |
| `mgconsole` | no output found |

This does not prove they cannot be installed elsewhere, but this shell does not currently expose a ready local Memgraph runtime.

## Recommended Memgraph Import Shape

When separately approved, a future local Memgraph import should use the generated JSONL files as source:

```text
nodes.jsonl
edges.jsonl
blocked_edges.jsonl
```

Recommended model:

| JSONL field | Memgraph use |
|---|---|
| `global_id` | Unique node key |
| `node_type` | Primary label or `node_type` property |
| `relationship_type` | Relationship type |
| `source` / `target` | Relationship endpoint `global_id` values |
| `source_table` / `source_id` / `source_path` | Provenance properties |
| `publicness_tier` / `publicness_floor` | Publicness guardrail |
| `confidence_tier` / `confidence_floor` | Confidence guardrail |
| `review_state` | Review/import readiness guardrail |
| `canonical_writeback` | Must remain `none` |

Minimum future import rules:

- Create uniqueness constraint or index on node `global_id` if the chosen Memgraph version supports it.
- Import nodes before relationships.
- Import `blocked_edges.jsonl` as explicit guardrail relationships, not comments.
- Treat `BlockedClaim` nodes as stop signs for public/readiness queries.
- Keep the graph disposable: drop/delete and regenerate from JSONL.
- Do not write back to Supabase, Planner, Media Library, Content, Research, Web, or Company source docs from Memgraph output.

## Future Query Smoke Tests

A future Memgraph import should be accepted only if it can answer these safely:

| Query | Required safe behavior |
|---|---|
| Daphnia clearing path | Returns blocked/review-required status; does not claim Daphnia cleared the lake |
| Ghost Shrimp claim path | Separates confirmed breeding from unconfirmed recruitment |
| Mesostoma public-use path | Returns internal-only or blocked public-primary status |
| Media proof path | Shows unreviewed media candidates and no direct media links as blockers |
| Direct observation link path | Shows packet context only; does not infer canonical `pipeline_id` or `chronicle_id` links |
| Public-output path | Fails closed until Research, Content, and Web review gates are resolved |

## Stop Conditions Before Memgraph

Do not proceed to Memgraph import if:

- Memgraph/Docker install or runtime would require an unapproved install.
- Generated output is not under an ignored local folder.
- JSONL files fail to parse.
- Any edge or blocked edge has a missing endpoint.
- Any source row count drifts without explanation.
- Any sensitive source family enters the manifest.
- The import path would write to Supabase, Planner, App runtime state, media metadata, public site records, or source-of-truth docs.
- The import requires cloud upload, paid service, automation, or a persistent service without explicit approval.

## App Regeneration Helper Completed

After this readiness review, Company proceeded with the recommended repeatability step:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave1-jsonl.js
```

Verified command:

```powershell
node tools/generate-oli-wave1-jsonl.js
```

Verified result:

```text
Status: pass_with_review_required_import_shape_ready
Nodes: 67, edges: 96, blocked edges: 13
```

The helper performs read-only Supabase REST reads and writes only generated local files under App's ignored `out/` tree. It does not write Supabase, Planner, Storage, media metadata, public site records, source-of-truth docs, or Memgraph.

Detailed record:

```text
M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_1_app_regeneration_helper_2026-05-15.md
```

Company also documented the local Memgraph import proposal:

```text
M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_1_memgraph_import_proposal_2026-05-15.md
```

## Next Gate

The next gate is a separate user decision:

1. **Approve the next proposal sub-step: generate `import.cypher` only**, then inspect it before starting Memgraph; or
2. approve local Docker/Memgraph runtime/import/readback after reviewing the proposal; or
3. pause technical implementation and use the regenerated JSONL package for Company/Research/Content review only.

Company recommendation: generate `import.cypher` first, then decide whether to start/import into local Memgraph.

## Verification

- Parsed `source_manifest.json` and `validation_report.json`.
- Parsed every line of `nodes.jsonl`, `edges.jsonl`, and `blocked_edges.jsonl`.
- Checked node/relationship type counts.
- Checked normal edge endpoint validity.
- Checked blocked edge endpoint validity.
- Added missing guardrail/context nodes to disposable generated files.
- Revalidated `67` nodes, `96` edges, and `13` blocked edges.
- Checked local shell for `docker`, `memgraph`, and `mgconsole`; no command output was found.
- Created and verified App local regeneration helper after this review.
- No Memgraph import was performed.
- No Supabase/Planner writes were performed.
- No App runtime behavior, schema, migration, public site behavior, media metadata, model run, cloud upload, paid tool, automation, or source-of-truth record changed.
