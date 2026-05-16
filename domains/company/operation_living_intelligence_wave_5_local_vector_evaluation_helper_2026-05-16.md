---
id: operation_living_intelligence_wave_5_local_vector_evaluation_helper_2026-05-16
title: Operation Living Intelligence Wave 5 Local Vector Evaluation Helper
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-5, retrieval, vector-evaluation, app-helper, ignored-output, no-embedding, stale-baseline, semantic-proxy]
status: pass_with_review_required_local_vector_proxy_evaluation_ready
---
# Operation Living Intelligence Wave 5 Local Vector Evaluation Helper

## Purpose

This record documents the approved Wave 5 local vector-evaluation helper implementation, stale-baseline guardrail run, refreshed baseline run, and local semantic-proxy validation result.

The implementation follows the proposal at:

```text
domains/company/operation_living_intelligence_wave_5_local_vector_evaluation_helper_proposal_2026-05-16.md
```

## Implemented App Files

Added:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave5-local-vector-evaluation.js
M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave5-vector-eval-config.example.json
```

Generated output path:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\company_corpus\vector_eval\
```

Generated files:

```text
embedding_route_config.example.json
vector_baseline_comparison_report.md
vector_eval_manifest.json
vector_validation_report.json
```

The helper did not write `semantic_candidates.jsonl` or `semantic_eval_results.jsonl` because it correctly blocked before semantic candidate output when the accepted baseline was stale.

## First Run Result: Guardrail Blocked Stale Baseline

Status:

```text
blocked_baseline_stale_no_vector_evaluation
```

Counts read from the accepted baseline:

| Item | Result |
|---|---:|
| Baseline documents | `101` |
| Baseline chunks | `1463` |
| Evaluation questions | `15` |
| Missing baseline files | `0` |
| Stale source hashes | `6` |
| Unmanifested OLI source candidates | `6` |

Blocked stale sources:

```text
domains/app/app_brief.md
domains/app/app_overview.md
domains/company/company_brief.md
domains/company/operation_living_intelligence_deferred_return_map_2026-05-15.md
domains/company/operation_living_intelligence_session_closeout_2026-05-15.md
skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-data-projection-matrix.md
```

Unmanifested OLI source candidates:

```text
domains/company/operation_living_intelligence_wave_5_expected_status_helper_update_2026-05-15.md
domains/company/operation_living_intelligence_wave_5_expected_status_readback_review_2026-05-15.md
domains/company/operation_living_intelligence_wave_5_local_vector_evaluation_helper_proposal_2026-05-16.md
domains/company/operation_living_intelligence_wave_5_vector_embedding_app_design_review_packet_2026-05-16.md
domains/company/operation_living_intelligence_wave_5_vector_embedding_app_review_synthesis_2026-05-16.md
domains/company/operation_living_intelligence_wave_5_vector_embedding_decision_brief_2026-05-16.md
```

## Decision

Treat this as a successful guardrail implementation, not as a semantic retrieval pass.

The helper proves that Wave 5 vector-evaluation work will not proceed on stale accepted baseline files. It preserves the approved boundary by refusing semantic candidate output until the manifest/readback baseline is regenerated and accepted.

## Refreshed Baseline Run

After the stale-baseline block, the Wave 5 baseline was regenerated and accepted under the same ignored App output path.

Regenerated manifest/readback result:

| Item | Result |
|---|---:|
| Documents | `108` |
| Chunks | `1543` |
| Evaluation questions | `15` |
| Expected-status readback | `15 / 15` |
| Sensitive path matches | `0` |

The local vector-proxy helper then returned:

```text
pass_with_review_required_local_vector_proxy_evaluation_ready
```

Vector-proxy output:

| Item | Result |
|---|---:|
| Evaluation questions | `15` |
| Evaluation questions passed | `15 / 15` |
| Semantic-proxy candidate rows | `75` |
| Semantic-proxy result rows | `15` |
| Stale source hashes | `0` |
| Unmanifested OLI source candidates | `0` |

Generated files now include:

```text
embedding_route_config.example.json
semantic_candidates.jsonl
semantic_eval_results.jsonl
vector_baseline_comparison_report.md
vector_eval_manifest.json
vector_validation_report.json
```

## Current Decision

Accept the refreshed local vector-proxy evaluation as a no-embedding, no-model, no-pgvector comparison pass.

This is useful for checking semantic-style candidate ranking, citation preservation, expected-status safety, owner/publicness/claim-status label preservation, stale-output detection, and sensitive-source exclusion before any real embedding route is considered.

This does not approve real embeddings, pgvector, vector index, public search, App runtime integration, live reads, expanded corpus scope, scheduled refresh, or canonical writeback.

## Next Gate

Review the no-embedding semantic-proxy comparison before any real embedding route, pgvector design, public search, App runtime integration, live read, expanded corpus scope, scheduled refresh, or canonical writeback decision.

## Not Changed

- No embeddings generated.
- No model/API calls.
- No pgvector table, vector column, vector index, schema, or migration work.
- No Supabase, Planner, Storage, Web, Content, Research, media, CRM, Financials, telemetry, or YouTube analytics access.
- No App runtime, renderer, Electron IPC, package script, public behavior, or scheduled job changes.
- No public output.
- No structured writes.
- No canonical writeback.

## Verification

- Ran `node --check tools/run-oli-wave5-local-vector-evaluation.js`.
- Parsed `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave5-vector-eval-config.example.json`.
- Ran `node tools/run-oli-wave5-local-vector-evaluation.js` before baseline refresh; result: `blocked_baseline_stale_no_vector_evaluation`.
- Ran `node tools/generate-oli-wave5-retrieval-manifest.js`.
- Ran `node tools/run-oli-wave5-retrieval-readback.js`; result: `15 / 15`.
- Reran `node tools/run-oli-wave5-local-vector-evaluation.js`; result: `15 / 15`.
- Read generated `vector_validation_report.json`.
- Read generated `vector_baseline_comparison_report.md`.
- Read generated `semantic_eval_results.jsonl` status summary.
