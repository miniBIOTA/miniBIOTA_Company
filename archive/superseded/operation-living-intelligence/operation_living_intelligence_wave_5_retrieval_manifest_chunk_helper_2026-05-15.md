---
id: operation_living_intelligence_wave_5_retrieval_manifest_chunk_helper_2026-05-15
title: Operation Living Intelligence Wave 5 Retrieval Manifest/Chunk Helper
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-5, retrieval, manifest, chunks, app-helper, no-embedding, no-write]
status: local_helper_verified
---
# Operation Living Intelligence Wave 5 Retrieval Manifest/Chunk Helper

## Purpose

This record documents the approved narrow implementation of the first **Operation Living Intelligence Wave 5: Retrieval Layer** helper.

The helper creates a local, ignored, rebuildable Company-corpus manifest/chunk baseline so agents can test source-path, heading, keyword, metadata-filtered, and blocked-answer retrieval before any embeddings or vector infrastructure.

## Implementation Boundary

Approved and completed:

- App-owned local helper files:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave5-retrieval-manifest.js
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave5-retrieval-readback.js
```

- Generated output under App's ignored `out/` tree:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\company_corpus\
```

- Generated local files:

```text
corpus_manifest.json
documents_manifest.jsonl
chunks_manifest.jsonl
retrieval_evaluation_set.jsonl
keyword_baseline_report.md
validation_report.json
retrieval_readback_report.md
retrieval_readback_report.json
```

Not approved or performed:

- embeddings;
- vector fields;
- vector index creation;
- pgvector table or Supabase schema changes;
- model/API calls;
- live Supabase, Planner, Storage, App runtime, Web, Content, Research, media, CRM, Financials, telemetry, or YouTube analytics reads;
- public search;
- scheduled refresh;
- public output;
- canonical writeback.

## Corpus Scope

The helper selected Company-owned and Company-report-level Markdown sources only:

- Company entry/protocol files;
- Company routing and database-awareness files;
- selected Company memory files;
- Operation Living Intelligence planning references;
- Operation Living Intelligence wave records under `domains/company/`;
- Company brief;
- domain briefs and overviews under `domains/`.

Sensitive and owner-gated source families remained excluded:

- `archive/superseded/`;
- Brain archive paths;
- raw private media;
- CRM/contact rows;
- raw financial rows;
- private sponsor/partner notes;
- YouTube private analytics;
- OAuth/API credentials;
- Supabase service-role output;
- App runtime logs;
- unreviewed visual AI annotations.

Deep Content and Research source docs remain candidate-only until owner scope is explicitly approved.

## Verified Result

Generation command:

```powershell
node tools/generate-oli-wave5-retrieval-manifest.js
```

Generation result:

| Item | Result |
|---|---:|
| Status | `pass_with_review_required_retrieval_manifest_ready` |
| Documents | `98` |
| Chunks | `1427` |
| Evaluation questions | `10` |
| Sensitive path matches | `0` |

Readback command:

```powershell
node tools/run-oli-wave5-retrieval-readback.js
```

Readback result:

| Item | Result |
|---|---:|
| Status | `pass_with_review_required_retrieval_readback_ready` |
| Evaluation questions passed | `9 / 10` |
| Required keyword terms found | `6 / 6` |
| Exact path lookup | `pass` |
| Heading search | `pass` |
| Metadata filters | `pass` |
| Blocked-answer readback | `present` |

The one evaluation item that remained `review_required` was the Daphnia publicness-guardrail question. That is acceptable for the first baseline because the readback still returned a source-cited, review-required answer shape and preserved the publicness/claim-status caveat.

## Validation Checks

The generated `validation_report.json` confirms:

- output path is under App ignored `out/`;
- App `.gitignore` ignores `out/`;
- source paths exist;
- source hashes are present;
- document source keys and paths are unique;
- chunk IDs are unique;
- chunk citation fields are present;
- document metadata fields are present;
- sensitive source families are absent;
- selected/generated readback records are labeled when applicable;
- evaluation questions are present;
- no embeddings, vector fields, model/API calls, pgvector/vector-index outputs, live writes, or canonical writeback occurred.

## Decision

Wave 5 now has a verified local manifest/chunk/keyword-baseline helper.

Next gate:

```text
Review whether this local keyword/source-path baseline is useful before approving any embeddings, pgvector, vector DB, public search, scheduled refresh, App runtime integration, live reads, or canonical writeback.
```

The helper output is useful as a local retrieval proof and rebuildable audit artifact, not as canonical truth.

## Verification

- `node --check M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave5-retrieval-manifest.js`
- `node --check M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave5-retrieval-readback.js`
- `node tools/generate-oli-wave5-retrieval-manifest.js`
- `node tools/run-oli-wave5-retrieval-readback.js`
- Read generated `validation_report.json`, `keyword_baseline_report.md`, and `retrieval_readback_report.md`.

No app runtime behavior, database record, Planner record, Storage object, public site behavior, public output, schema, migration, embedding job, vector index, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical source-of-truth record changed.
