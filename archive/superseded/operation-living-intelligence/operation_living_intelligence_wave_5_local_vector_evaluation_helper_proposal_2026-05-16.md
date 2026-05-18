---
id: operation_living_intelligence_wave_5_local_vector_evaluation_helper_proposal_2026-05-16
title: Operation Living Intelligence Wave 5 Local Vector Evaluation Helper Proposal
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-5, retrieval, vector, embedding, app-helper-proposal, no-write, implemented]
status: implemented_guardrail_blocked_baseline_stale
---
# Operation Living Intelligence Wave 5 Local Vector Evaluation Helper Proposal

## Purpose

This proposal defines the smallest future App helper implementation that could evaluate semantic retrieval beyond the accepted Wave 5 no-embedding baseline.

It follows App's docs-only review at:

```text
M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave5-vector-embedding-design-review.md
```

It is docs-only. It does not change App code, generate embeddings, create vector output, create pgvector tables/indexes, call models/APIs, set credentials, read live systems, change App runtime behavior, expand corpus scope, create public output, or write canonical records.

## Current Baseline

Accepted no-embedding baseline:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\company_corpus\
```

Accepted result:

| Item | Result |
|---|---:|
| Documents | `101` |
| Chunks | `1463` |
| Evaluation questions | `15` |
| Evaluation questions passed | `15 / 15` |
| Required keyword terms found | `6 / 6` |
| Sensitive path matches | `0` |

Existing helper files:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave5-retrieval-manifest.js
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave5-retrieval-readback.js
```

## Proposed Future File Scope

If Josue later approves implementation, use a new helper so the accepted no-embedding baseline remains stable:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave5-local-vector-evaluation.js
```

Allowed supporting example config:

```text
M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave5-vector-eval-config.example.json
```

Do not edit App runtime files, renderer files, Electron IPC, Supabase helpers, migrations, package scripts, Planner code, Web code, or public surfaces from this proposal.

## Proposed Future Output Scope

Allowed generated output path if implementation is later approved:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\company_corpus\vector_eval\
```

Proposed generated files:

```text
vector_eval_manifest.json
embedding_route_config.example.json
semantic_candidates.jsonl
semantic_eval_results.jsonl
vector_baseline_comparison_report.md
vector_validation_report.json
```

Generated files remain ignored, rebuildable, and noncanonical.

## Proposed Helper Behavior

The future helper should:

1. Read the existing `chunks_manifest.jsonl`.
2. Refuse to run if the accepted baseline files are missing or stale.
3. Load only Company/report-level chunks already present in the accepted baseline.
4. Use a local/offline embedding route first if an approved route is available.
5. Write semantic candidate results under `vector_eval/`.
6. Compare semantic matches against keyword/source-path readback.
7. Run the same `15` expected-status questions as a regression suite.
8. Fail if any `review_required` or `blocked` case becomes an answerable/public answer.
9. Fail if any result lacks source path and line range.
10. Fail if sensitive/private source families appear.
11. Report stale source hashes/timestamps.
12. Keep pgvector, scheduled refresh, App runtime integration, public search, live reads, and canonical writeback out of scope.

## Embedding Route Posture

No embedding route is approved by this proposal.

Future implementation approval must choose one of:

| Route | Status | Notes |
|---|---|---|
| Local/offline embedding | Preferred first route if practical | Lowest privacy/cost risk, but route, dependency, dimensions, and hardware behavior still need approval. |
| External embedding API | Deferred | Requires provider/model, credentials, cost, privacy, retention, and data-egress approval. |
| pgvector | Deferred | Requires schema/index proposal after local evaluation proves value. |

Any config must be example-only unless implementation is separately approved. Credentials must remain outside git and outside renderer/public paths.

## Validation Requirements

Future implementation should pass only if:

- output path stays under ignored App `out/`;
- no App runtime, renderer, IPC, schema, migration, package script, public Web, or scheduled job changes;
- no live Supabase, Planner, Storage, Web, Content, Research, media, CRM, Financials, telemetry, or YouTube analytics reads occur;
- corpus stays Company/report-level;
- selected chunks match the accepted manifest hashes or report stale status;
- every semantic result has source path, heading, line range, owner, publicness, claim status, and caveats;
- all `15` expected-status questions pass;
- blocked and review-required answers remain blocked or review-required;
- no sensitive/private source family appears;
- generated vector output is labeled generated-derived, rebuildable, ignored, and noncanonical.

## Stop Conditions

Stop before implementation if:

- implementation needs App runtime, Electron IPC, UI, Supabase, Planner, Storage, Web, model/API, credential, migration, schema, public search, or scheduled job changes;
- embedding route cannot be local/offline without extra approval;
- output path would leave ignored App `out/`;
- corpus expansion beyond Company/report-level sources is needed;
- Research, Content, Web, Brand, CRM, Financials, telemetry, media, or private analytics sources are needed;
- sensitive/private source families enter the corpus;
- citation line ranges cannot be preserved;
- expected-status evaluation cannot run;
- generated output could be mistaken for canonical truth.

## Approval Boundary

This proposal is ready for a future explicit implementation approval decision.

Suggested approval wording:

```text
Approve the Wave 5 local vector evaluation helper only: add `tools/run-oli-wave5-local-vector-evaluation.js`, add the example config doc if needed, write generated vector-evaluation output only under ignored `out/operation_living_intelligence/wave_5_retrieval_layer/company_corpus/vector_eval/`, and run validation/readback. No pgvector, live reads, App runtime behavior, public search, scheduled refresh, expanded corpus, external API/model calls, credentials, structured writes, or canonical writeback.
```

Josue approved this implementation boundary on 2026-05-16.

The implementation record is:

```text
domains/company/operation_living_intelligence_wave_5_local_vector_evaluation_helper_2026-05-16.md
```

First run result:

```text
blocked_baseline_stale_no_vector_evaluation
```

The helper correctly refused semantic candidate output because the accepted baseline was stale. It found `6` stale source hashes and `6` unmanifested OLI source candidates. Next gate is regenerating and accepting the Wave 5 manifest/readback baseline before rerunning local vector-proxy evaluation.

Follow-up result:

```text
pass_with_review_required_local_vector_proxy_evaluation_ready
```

After baseline regeneration, the refreshed Wave 5 baseline returned `108` documents, `1543` chunks, and `15 / 15` expected-status questions passing. The local vector-proxy helper produced `75` candidate rows and `15 / 15` result rows passing, with `0` stale source hashes and `0` unmanifested OLI source candidates. Company accepted the no-embedding comparison at `domains/company/operation_living_intelligence_wave_5_local_vector_proxy_readback_review_2026-05-16.md`.

## Still Not Approved

The 2026-05-16 helper approval did not approve:

- embedding generation;
- semantic candidate output from stale baselines;
- pgvector table, vector column, vector index, schema, or migration work;
- vector DB service;
- model/API calls;
- credential setup;
- live reads;
- Supabase, Planner, Storage, Web, Content, Research, media, CRM, Financials, telemetry, or YouTube analytics access;
- public search;
- scheduled refresh;
- App runtime integration;
- expanded corpus scope;
- public output;
- structured writes;
- canonical writeback.

## Verification

- Read `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave5-vector-embedding-design-review.md`.
- Read `domains/company/operation_living_intelligence_wave_5_vector_embedding_app_review_synthesis_2026-05-16.md`.
- Read `domains/company/operation_living_intelligence_wave_5_expected_status_readback_review_2026-05-15.md`.

No app runtime behavior, database record, Planner record, Storage object, public site behavior, public output, schema, migration, embedding job, vector index, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical source-of-truth record changed.
