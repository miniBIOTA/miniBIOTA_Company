---
id: operation_living_intelligence_wave_5_retrieval_baseline_usefulness_review_2026-05-15
title: Operation Living Intelligence Wave 5 Retrieval Baseline Usefulness Review
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-5, retrieval, baseline-review, no-embedding, no-write]
status: baseline_useful_vector_not_approved
---
# Operation Living Intelligence Wave 5 Retrieval Baseline Usefulness Review

## Purpose

This review evaluates whether the completed Wave 5 local manifest/chunk/keyword-baseline helper is useful enough to keep using before deciding on embeddings, pgvector, vector indexes, public search, scheduled refresh, App runtime integration, live reads, or canonical writeback.

The reviewed snapshot is the generated App ignored output from:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\company_corpus\
```

Reviewed generated timestamp:

```text
2026-05-16T00:37:29.854Z
```

## Reviewed Evidence

Reviewed files:

```text
validation_report.json
keyword_baseline_report.md
retrieval_readback_report.md
retrieval_readback_report.json
```

Source record:

```text
domains/company/operation_living_intelligence_wave_5_retrieval_manifest_chunk_helper_2026-05-15.md
```

## Result

The Wave 5 baseline is useful as a local source-path, keyword, heading, metadata-filter, and citation-readback aid.

It is not enough to approve embeddings, pgvector, a vector index, public search, scheduled refresh, App runtime integration, live reads, expanded corpus scope, or canonical writeback.

## What The Baseline Proved

The reviewed run produced:

| Item | Result |
|---|---:|
| Documents | `98` |
| Chunks | `1427` |
| Evaluation questions | `10` |
| Evaluation questions passed | `9 / 10` |
| Required keyword terms found | `6 / 6` |
| Sensitive path matches | `0` |

The readback checks passed for:

- exact path lookup;
- heading search;
- metadata filters;
- keyword search;
- blocked-answer behavior;
- no embeddings or vector index;
- no model/API calls;
- no Supabase, Planner, Storage, App runtime, or Web writes;
- no canonical writeback.

The strongest practical value is that agents can quickly recover source paths and citation ranges for Company operating rules, OLI wave records, Company/App ownership boundaries, generated-derived cautions, and publicness/claim-review caveats.

## Useful Behaviors

The baseline correctly found:

- the source-of-truth rule for OLI derived layers in the projection matrix;
- the reason Wave 1 should not become persistent Memgraph infrastructure yet;
- the reason Wave 4 YouTube analytics remains deferred;
- the `content_pipeline.id = 338` Lake Post-Seal source support;
- App ownership of helper/runtime/schema work;
- the Content read-before-use boundary for Wave 2 story output;
- the reason generated readbacks are derived and not canonical truth;
- Company brief sections summarizing OLI status;
- the citation gate before answering a public species-card question.

The blocked-answer behavior is especially useful: the corpus can find candidate Wave 3, Research, and Web context, but it keeps public species-card wording review-required instead of treating internal coordination notes as publishable public truth.

## Limitation

The Daphnia publicness-guardrail evaluation remains `review_required`.

That is acceptable for the first baseline because the answer shape preserved source citation, publicness/claim-status caveats, and Research/Content/Web review requirements. It is also the signal that the baseline should not become public answer infrastructure yet.

Before any vector or public-search step, Wave 5 should tighten the Daphnia/public species-card evaluation so review-required answers are expected where the publicness boundary is the correct outcome.

## Decision

Keep the Wave 5 helper as a rebuildable local retrieval aid for future Company/agent sessions.

Do not proceed to embeddings, pgvector, vector DB, public search, scheduled refresh, App runtime integration, live reads, corpus expansion beyond Company/report-level sources, or canonical writeback from this review.

## Recommended Next Gate

If returning to Wave 5, do this before any vector pilot:

1. Tune the evaluation set so review-required public species-card questions are judged as correct when they preserve the owner-review boundary.
2. Add three to five more evaluation questions covering owner routing, stale/generated-derived handling, and public/private source-family exclusion.
3. Prepare a separate vector/embedding decision brief only after the no-embedding baseline stays useful under the tightened evaluation set.

## Not Approved

This review does not approve:

- embeddings;
- pgvector or vector DB work;
- model/API calls;
- public search;
- scheduled refresh;
- App runtime integration;
- live Supabase, Planner, Storage, telemetry, CRM, Financials, Web, Content, Research, media, or YouTube analytics reads;
- generated output outside the approved ignored local baseline;
- corpus expansion beyond Company/report-level sources;
- public output;
- canonical writeback.

## Verification

- Read `validation_report.json`.
- Read `keyword_baseline_report.md`.
- Read `retrieval_readback_report.md`.
- Reviewed the Wave 5 helper record.

No app runtime behavior, database record, Planner record, Storage object, public site behavior, public output, schema, migration, embedding job, vector index, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical source-of-truth record changed.
