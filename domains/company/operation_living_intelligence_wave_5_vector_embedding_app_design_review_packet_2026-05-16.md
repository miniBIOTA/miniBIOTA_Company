---
id: operation_living_intelligence_wave_5_vector_embedding_app_design_review_packet_2026-05-16
title: Operation Living Intelligence Wave 5 Vector/Embedding App Design-Review Packet
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-5, retrieval, vector, embedding, app-review, no-write]
status: app_design_review_packet_ready_no_implementation_approved
---
# Operation Living Intelligence Wave 5 Vector/Embedding App Design-Review Packet

## Purpose

This packet asks App for docs-only review of a future no-write, ignored-output Wave 5 vector/embedding pilot.

It follows the Wave 5 vector/embedding decision brief at:

```text
domains/company/operation_living_intelligence_wave_5_vector_embedding_decision_brief_2026-05-16.md
```

This packet does not approve App code, embeddings, generated vector output, pgvector table/index creation, model/API calls, credential setup, live reads, public search, scheduled refresh, App runtime behavior, expanded corpus scope, structured writes, public output, or canonical writeback.

## Current Baseline

Accepted local baseline:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\company_corpus\
```

Current accepted counts:

| Item | Result |
|---|---:|
| Documents | `101` |
| Chunks | `1463` |
| Evaluation questions | `15` |
| Evaluation questions passed | `15 / 15` |
| Required keyword terms found | `6 / 6` |
| Sensitive path matches | `0` |

Current App helper files:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave5-retrieval-manifest.js
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave5-retrieval-readback.js
```

## Review Request

App should review whether a future vector/embedding pilot can stay:

- local;
- ignored-output only;
- readback-first;
- non-runtime;
- non-public;
- noncanonical;
- reversible;
- validated against the accepted `15` expected-status questions.

## Proposed Future Pilot Shape

If implementation is later approved, the smallest pilot should:

1. Reuse the existing `chunks_manifest.jsonl` and metadata contract as input.
2. Write any future vector-evaluation artifacts only under App's ignored Wave 5 `out/` tree.
3. Produce a separate vector evaluation/readback report.
4. Compare semantic retrieval against the accepted keyword/source-path baseline.
5. Preserve path, heading, line range, source family, owner, source role, canonicality, publicness, claim status, record IDs, and caveats.
6. Preserve expected-status behavior for `answerable_with_citation`, `review_required`, and `blocked`.
7. Keep the no-embedding helper as fallback.
8. Treat any vector output as rebuildable generated-derived helper output, not source of truth.

## App Questions

Please review:

| Question | Why it matters |
|---|---|
| Should the first pilot be local-file-only, pgvector-design-only, or a local-to-pgvector staged plan? | Prevents jumping into schema/index work before value is proven. |
| What ignored output path should future vector artifacts use? | Keeps generated output out of canonical docs and source records. |
| How should embedding route, model choice, dimensions, credentials, and cost be represented in config? | Avoids hardcoding secrets or treating a model route as already approved. |
| Is a local/offline embedding route viable enough to evaluate before any external API route? | Reduces privacy and cost risk if practical. |
| What validation proves semantic retrieval did not weaken citation fidelity? | Keeps vector ranking from becoming uncited answer generation. |
| How should stale vector artifacts be detected after docs change? | Prevents generated output from being mistaken for current truth. |
| What stop conditions should fail the pilot before output is trusted? | Keeps publicness, owner review, sensitive-source, and canonical boundaries intact. |
| What separate approvals would be needed before pgvector, runtime integration, scheduled refresh, or public search? | Keeps App implementation authority and public/domain ownership clear. |

## Required Validation If Later Implemented

A future pilot should pass only if:

- input corpus stays Company/report-level unless Research or Content explicitly approves expansion;
- sensitive/private source families remain excluded;
- no CRM contacts, raw financial rows, private analytics, credentials, raw media, App runtime logs, or live telemetry rows enter the corpus;
- every semantic result includes citation path and line range;
- all `15` expected-status questions still pass;
- `review_required` answers preserve owner-review requirements;
- `blocked` answers remain blocked;
- stale output warning is present;
- no canonical source is changed;
- no live read or runtime behavior occurs.

## Approval Boundary

App completed docs-only review at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave5-vector-embedding-design-review.md`.

Company synthesized the review at `domains/company/operation_living_intelligence_wave_5_vector_embedding_app_review_synthesis_2026-05-16.md`.

Company then prepared the local vector evaluation helper proposal at `domains/company/operation_living_intelligence_wave_5_local_vector_evaluation_helper_proposal_2026-05-16.md`.

The next gate, if Wave 5 continues, is proposal approval or revision before any implementation.

Suggested next approval wording, if Josue wants App-side review:

```text
Approve App docs-only review of the Wave 5 vector/embedding pilot packet. No code, embeddings, generated vector output, pgvector table, live reads, App runtime behavior, public search, scheduled refresh, expanded corpus, or canonical writeback.
```

Implementation approval, if it ever happens, must be separate and must name exact files, output path, embedding route, model/config path, corpus scope, validation checks, cost/privacy rules, and stop conditions.

## Not Approved

This packet does not approve:

- App code edits;
- embedding generation;
- generated vector output;
- pgvector table, vector column, vector index, schema, or migration work;
- vector DB service;
- model/API call;
- credential setup;
- live Supabase, Planner, Storage, Web, Content, Research, media, CRM, Financials, telemetry, or YouTube analytics reads;
- public search;
- scheduled refresh;
- App runtime integration;
- expanded corpus scope;
- public output;
- structured writes;
- canonical writeback.

## Verification

- Read `domains/company/operation_living_intelligence_wave_5_vector_embedding_decision_brief_2026-05-16.md`.
- Read `domains/company/operation_living_intelligence_wave_5_expected_status_readback_review_2026-05-15.md`.
- Read `domains/company/operation_living_intelligence_deferred_return_map_2026-05-15.md`.

No app runtime behavior, database record, Planner record, Storage object, public site behavior, public output, schema, migration, embedding job, vector index, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical source-of-truth record changed.
