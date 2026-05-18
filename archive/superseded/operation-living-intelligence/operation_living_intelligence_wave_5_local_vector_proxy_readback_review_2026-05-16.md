---
id: operation_living_intelligence_wave_5_local_vector_proxy_readback_review_2026-05-16
title: Operation Living Intelligence Wave 5 Local Vector-Proxy Readback Review
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-5, retrieval, vector-proxy, readback-review, no-embedding, ignored-output]
status: pass_with_review_required_local_vector_proxy_evaluation_accepted
---
# Operation Living Intelligence Wave 5 Local Vector-Proxy Readback Review

## Purpose

This review decides whether to accept the refreshed Wave 5 no-embedding local vector-proxy evaluation as a useful next-stage retrieval check.

It reviews generated output under:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\company_corpus\vector_eval\
```

## Result

Accept the refreshed local vector-proxy evaluation as a no-embedding semantic-style retrieval comparison pass.

Status:

```text
pass_with_review_required_local_vector_proxy_evaluation_ready
```

## Refreshed Baseline

Before rerunning the vector-proxy helper, the Wave 5 manifest/readback baseline was regenerated and accepted.

| Item | Result |
|---|---:|
| Documents | `108` |
| Chunks | `1543` |
| Evaluation questions | `15` |
| Expected-status readback passed | `15 / 15` |
| Sensitive path matches | `0` |
| Missing baseline files | `0` |

## Vector-Proxy Evaluation

| Item | Result |
|---|---:|
| Route | `local_semantic_proxy_no_embeddings` |
| Evaluation questions | `15` |
| Evaluation questions passed | `15 / 15` |
| Candidate rows | `75` |
| Result rows | `15` |
| Stale source hashes | `0` |
| Unmanifested OLI source candidates | `0` |
| Failed checks | `0` |

The `15` expected-status rows preserved:

- `answerable_with_citation`;
- `review_required`;
- `blocked`;
- source path and line ranges;
- domain owner, source role, publicness, and claim-status labels;
- sensitive-source exclusion.

## What This Proves

The helper is useful as a local comparison layer before any real vector infrastructure decision.

It can:

- catch stale baseline state before semantic candidate output;
- produce candidate source rows without embeddings or model calls;
- preserve citation and owner/review labels;
- keep public/review/blocked answers in the expected status lane;
- verify that sensitive/private source families remain excluded.

## What This Does Not Prove

This is not a true embedding benchmark.

It does not prove:

- local embedding quality;
- pgvector value;
- vector index design;
- production search behavior;
- public answer readiness;
- corpus expansion readiness;
- scheduled refresh readiness;
- App runtime integration readiness.

## Decision

Keep the local vector-proxy helper as a rebuildable, ignored, noncanonical evaluation aid.

Do not proceed to real embeddings, pgvector, vector indexes, public search, scheduled refresh, App runtime integration, live reads, expanded corpus scope, or canonical writeback without a separate approval decision.

## Recommended Next Gate

If Wave 5 continues, prepare a decision note comparing:

1. stop at the accepted no-embedding semantic-proxy layer;
2. approve a local/offline embedding route for a bounded pilot;
3. defer embedding work until a concrete agent question fails the current baseline.

Default recommendation: stop here until a concrete retrieval failure or agent workflow need justifies real embeddings.

## Verification

- Ran `node tools/generate-oli-wave5-retrieval-manifest.js`.
- Ran `node tools/run-oli-wave5-retrieval-readback.js`.
- Ran `node tools/run-oli-wave5-local-vector-evaluation.js`.
- Read `vector_validation_report.json`.
- Read `vector_baseline_comparison_report.md`.
- Read `semantic_eval_results.jsonl` status summary.

No embeddings, model/API calls, pgvector, vector index, Supabase/Planner/Storage writes, live reads, App runtime behavior, public output, expanded corpus scope, scheduled refresh, or canonical writeback occurred.
