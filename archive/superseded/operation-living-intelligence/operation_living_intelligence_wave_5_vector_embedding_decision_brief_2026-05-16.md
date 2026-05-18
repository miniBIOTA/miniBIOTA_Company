---
id: operation_living_intelligence_wave_5_vector_embedding_decision_brief_2026-05-16
title: Operation Living Intelligence Wave 5 Vector/Embedding Decision Brief
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-5, retrieval, vector, embedding, decision-brief, no-write]
status: decision_brief_ready_no_implementation_approved
---
# Operation Living Intelligence Wave 5 Vector/Embedding Decision Brief

## Purpose

This brief decides whether Wave 5 should move beyond the accepted no-embedding retrieval baseline.

It is docs-only. It does not approve embeddings, pgvector, vector DB work, model/API calls, App runtime integration, live reads, public search, scheduled refresh, expanded corpus scope, public output, or canonical writeback.

## Decision

Semantic retrieval is worth evaluating, but only as a future no-write, ignored-output pilot proposal.

Do not implement vectors yet.

The next safe Wave 5 gate is a Company-to-App design-review packet for a bounded vector/embedding pilot. That packet should ask App to review implementation shape, output location, embedding route options, validation/readback requirements, and stop conditions before any code or embedding run is approved.

## Current State

Accepted baseline:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\company_corpus\
```

The current local Wave 5 retrieval baseline is accepted after expected-status readback review:

| Item | Result |
|---|---:|
| Documents | `101` |
| Chunks | `1463` |
| Evaluation questions | `15` |
| Evaluation questions passed | `15 / 15` |
| Required keyword terms found | `6 / 6` |
| Sensitive path matches | `0` |

The baseline already handles:

- source-path recovery;
- citation range discovery;
- heading and keyword lookup;
- metadata-filtered readback;
- owner-routing answers;
- generated-derived caution checks;
- review-required publicness handling;
- blocked sensitive-source and canonical-writeback cases.

## Why Not Stay Keyword-Only Forever

The keyword/source-path baseline is enough for exact-source recovery and guardrail checks.

Semantic retrieval may still be useful for:

- questions phrased differently than the source text;
- cross-wave synthesis where exact keywords are not known;
- finding related operating decisions across Company reports and OLI records;
- future agent handoffs that need concept-level recall rather than path-level lookup.

Those benefits are real, but they do not justify skipping the approval gates.

## Options Considered

| Option | Decision | Reason |
|---|---|---|
| Keep only the current baseline | Accept as fallback | Lowest risk and already useful. It should remain available even if a vector pilot is later tested. |
| No-write ignored-output vector pilot | Recommended next gate | Best way to test semantic value without App runtime, public search, live reads, or canonical writeback. |
| Supabase pgvector shared layer | Defer | Still the preferred first shared-system path if a pilot proves value, but it requires schema/index/cost/security review and separate approval. |
| Dedicated vector DB | Defer | Oversized until pgvector or local evaluation shows a real bottleneck. |
| Public semantic search | Block | Public answer/search surfaces need Research, Content, Web, Brand, and source-publicness review first. |
| Sensitive-domain vector indexing | Block | CRM, Financials, private analytics, credentials, raw media, and runtime logs remain excluded by default. |

## Recommended Pilot Shape

The next packet should propose only a future no-write evaluation, not implementation approval.

Recommended pilot constraints:

- use the existing Wave 5 `chunks_manifest.jsonl` and metadata contract as the first corpus;
- keep output under ignored App `out/operation_living_intelligence/wave_5_retrieval_layer/company_corpus/`;
- produce a separate vector-evaluation report, not a runtime index;
- compare semantic retrieval against the accepted keyword/source-path baseline;
- preserve source path, line range, source family, domain owner, source role, canonicality, publicness, claim status, and caveats;
- run the same `15` expected-status questions and add semantic-specific miss/hallucination checks;
- require all `review_required` and `blocked` outcomes to survive semantic retrieval;
- keep the current no-embedding helper as the fallback and canonical readback source.

## App Review Questions

Ask App to review:

- whether the pilot should start as local files only, pgvector-only design, or a two-step local-to-pgvector path;
- where vector artifacts would live if implementation is later approved;
- how embedding route, credentials, model choice, dimensions, and cost are selected without hardcoding secrets;
- whether a local/offline embedding option is viable before any external API route;
- how to prevent stale vector output from being mistaken for current truth after docs change;
- how to validate citation fidelity and expected-status behavior after semantic ranking;
- how to delete or regenerate ignored vector artifacts safely;
- what would be required before any shared pgvector table, App runtime integration, scheduled refresh, or public search.

## Approval Boundary

The next approval, if Josue wants to proceed, should be for a docs-only App design-review packet.

Suggested approval wording:

```text
Approve a docs-only Wave 5 vector/embedding App design-review packet. No code, embeddings, generated vector output, pgvector table, live reads, App runtime behavior, public search, scheduled refresh, expanded corpus, or canonical writeback.
```

A later implementation approval would need to name exact files, output path, embedding/model route, corpus scope, validation checks, cost/privacy rules, and stop conditions.

## Stop Conditions

Stop before implementation if the next step would require:

- embedding generation;
- pgvector table or vector index creation;
- schema or migration work;
- model/API call or credential setup;
- live Supabase, Planner, Storage, Web, Content, Research, media, CRM, Financials, telemetry, or YouTube analytics reads;
- public search or public answer output;
- scheduled refresh;
- App runtime integration;
- expanded corpus beyond Company/report-level sources without owner approval;
- sensitive/private source-family inclusion;
- public species-card wording without Research, Content, Web, and Brand review;
- canonical writeback.

## Not Approved

This brief does not approve:

- App code edits;
- generated vector output;
- embeddings;
- pgvector/vector index;
- vector DB service;
- model/API calls;
- credential setup;
- public search;
- scheduled refresh;
- App runtime integration;
- live reads;
- structured writes;
- expanded corpus scope;
- public output;
- canonical writeback.

## Verification

- Read `domains/company/operation_living_intelligence_wave_5_expected_status_readback_review_2026-05-15.md`.
- Read `domains/company/operation_living_intelligence_deferred_return_map_2026-05-15.md`.
- Read Wave 5 entries in `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-data-projection-matrix.md`.

No app runtime behavior, database record, Planner record, Storage object, public site behavior, public output, schema, migration, embedding job, vector index, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical source-of-truth record changed.
