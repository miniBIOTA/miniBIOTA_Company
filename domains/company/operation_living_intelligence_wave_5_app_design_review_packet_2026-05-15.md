---
id: operation_living_intelligence_wave_5_app_design_review_packet_2026-05-15
title: Operation Living Intelligence Wave 5 App Design Review Packet
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-5, app-design-review, retrieval, manifest, chunks, no-write]
status: design_review_packet_ready
---
# Operation Living Intelligence Wave 5 App Design Review Packet

## Purpose

This packet is the Company-to-App design review handoff for **Operation Living Intelligence Wave 5: Retrieval Layer**.

The user approved continuing through the Wave 5 docs-only sequence on 2026-05-15. Company interprets that as approval to prepare the App design-review handoff, not as approval to edit App files, implement a helper, generate corpus output, create embeddings, create a vector index, change Supabase schema, write live records, or change public behavior.

This packet asks App to review the future no-write local manifest/chunk export shape only.

It does not approve App helper implementation, generated corpus files, embeddings, vector index creation, pgvector table creation, Supabase schema changes, local model/API calls, external embedding API use, paid vector service adoption, scheduled refresh, public search, Planner/Supabase writes, schema changes, Storage changes, App runtime behavior, Web behavior, public claims, automation, canonical writeback, or source-of-truth migration.

## App Context Read

Company checked App context read-only on 2026-05-15.

| App source | Finding |
|---|---|
| `M:\miniBIOTA\miniBIOTA_App\AGENTS.md` | App owns internal app behavior, Planner runtime/schema/UI, Supabase access paths, Media Library runtime/schema/indexing, migrations, secret-key paths, and App-owned implementation decisions. Live app actions, Supabase writes, Storage writes, telemetry controls, migrations, and app launch require explicit approval when relevant. |
| `M:\miniBIOTA\miniBIOTA_App\.gitignore` | `out/` is ignored; `.env`, `.env.local`, local config, secrets, logs, and temp files are ignored. |
| `M:\miniBIOTA\miniBIOTA_App\memory\00-index.md` | Supabase remains structured-record/schema truth when current live records matter; App memory/skills route implementation work. |
| `M:\miniBIOTA\miniBIOTA_App\memory\05-supabase-and-storage-rules.md` | Default posture is no writes without approval. Planner, CRM, Financials, Roadmap, Site Admin, Media Library, Storage, schema, and telemetry are live operational write areas. |
| `M:\miniBIOTA\miniBIOTA_App\skills\supabase-safety-review\SKILL.md` | Supabase/Storage/schema/secret-key/telemetry work is read-only by default and requires explicit approval before writes or migrations. |
| Existing OLI App pattern | Wave 1-3 used ignored `out/operation_living_intelligence/` output and local readback-first helpers only after separate approval. |

## Design Inputs

App should review these Company sources:

| Source | Path |
|---|---|
| Wave 5 retrieval design | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_5_retrieval_layer_design_2026-05-15.md` |
| Wave 5 corpus/citation readiness review | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_5_retrieval_corpus_inventory_citation_readiness_review_2026-05-15.md` |
| Wave 5 no-write App proposal | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_5_no_write_app_manifest_chunk_export_proposal_2026-05-15.md` |
| Projection matrix | `M:\miniBIOTA\miniBIOTA_Company\skills\coordinate-cross-domain-priorities\reference\operation-living-intelligence-data-projection-matrix.md` |
| Session closeout | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_session_closeout_2026-05-15.md` |
| Company brief | `M:\miniBIOTA\miniBIOTA_Company\domains\company\company_brief.md` |

## Requested App Decision

Company is asking App to answer design questions only:

| Question | Needed App answer |
|---|---|
| Output path | Is `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\company_corpus\` acceptable for future ignored, rebuildable output? |
| First implementation shape | Should Wave 5 stay manifest/chunk/readback-only before embeddings, pgvector, vector DB, semantic retrieval, public search, or scheduled refresh? |
| Helper ownership | What App-owned helper pattern should generate source manifests and line-aware chunks without touching runtime behavior? |
| Line citation | What line-range approach should App require so chunks can cite source path, heading, start line, and end line? |
| Source manifest | Are the selected source families and excluded families appropriate for App's safety model? |
| Metadata labels | Are `domain_owner`, `source_role`, `canonicality`, `publicness`, and `claim_status` enough for safe retrieval routing? |
| Generated-derived handling | How should App label any future selected readback output so it never becomes canonical truth? |
| Keyword baseline | What no-embedding keyword/path/heading baseline should App require before any vector work? |
| Validation/readback | What App-owned validation/readback checks should be mandatory before local output is considered useful? |
| Stop conditions | What should stop a future helper before it writes generated local files? |

## Recommended App Safety Position

Company recommends App classify the next stage as:

| Surface | Classification |
|---|---|
| App design review | Allowed as docs-only review. |
| Source reads | Future generation should read local Company files and App context only; live Supabase reads are not needed for the first package. |
| Local output files | Future implementation approval required; acceptable candidate location is App ignored `out/`. |
| App code/helper changes | Not approved. |
| Generated corpus files | Not approved. |
| Embeddings/vector index/pgvector | Deferred and not approved. |
| External API/model calls | Not approved. |
| Supabase/Planner writes | Not approved. |
| Supabase schema/migrations | Not approved. |
| Storage writes | Not approved. |
| App runtime behavior | Not approved. |
| Public search/Web behavior | Not approved. |
| Automation/scheduled refresh | Not approved. |

## Proposed Future Output

If App later approves the design and Josue separately approves implementation, Company recommends the ignored output folder:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\company_corpus\
```

Expected future generated files:

```text
corpus_manifest.json
documents_manifest.jsonl
chunks_manifest.jsonl
retrieval_evaluation_set.jsonl
keyword_baseline_report.md
validation_report.json
retrieval_readback_report.md
```

No generated manifest/chunk output should be committed unless Josue separately approves sanitized fixtures.

## Required Review Guardrails

App should reject the future helper design if it cannot prove:

- no Supabase, Planner, Storage, App runtime, Web, Content, Research, media, Markdown source-of-truth, public-output, schema, or migration writes;
- output path stays under ignored `out/`;
- every document has source path, owner, source role, canonicality, publicness, and claim-status labels;
- every chunk has source path, source heading, and line-range citation when available;
- generated output contains no embeddings, vector fields, API payloads, or vector-index files;
- deep Content and Research source docs remain candidate-only until owner scope is explicit;
- CRM/contact rows, raw financial rows, private sponsor notes, private analytics, raw media, credentials, service-role output, App runtime logs, and Brain archive content are excluded by default;
- selected generated readbacks are labeled `generated-derived` and cannot override canonical sources;
- keyword/source-path baseline runs before any semantic/vector retrieval decision;
- evaluation readback preserves source path or record ID, publicness, claim status, and downstream owner routing;
- canonical writeback remains `none`.

## Handoff Message For App

Use this message when opening the App design review:

```text
Please review the Company Operation Living Intelligence Wave 5 no-write App manifest/chunk export proposal as a design-only App review.

At this gate, Company is not asking for implementation. The requested decision is whether the proposed ignored output path, manifest/chunk/readback-first package, Company-owned/report-level corpus, source manifest fields, line-aware chunk fields, keyword baseline, validation checks, readback examples, and stop conditions are acceptable for a future separately approved no-write helper.

Key App questions:
- Is `out/operation_living_intelligence/wave_5_retrieval_layer/company_corpus/` acceptable?
- Should Wave 5 stay manifest/chunk/readback-only before embeddings, pgvector, vector indexes, semantic retrieval, public search, or scheduled refresh?
- What App-owned helper pattern should generate line-aware chunks without embeddings?
- What validation/readback checks are mandatory?
- What stop conditions should prevent generated local output?

Not approved:
- No App code changes.
- No generated corpus files.
- No embeddings.
- No vector index.
- No pgvector table or Supabase schema change.
- No external API/model call.
- No Supabase/Planner writes.
- No schema/migration work.
- No Storage writes.
- No App runtime behavior.
- No public search or Web behavior.
- No automation.
```

## Next Company Action

Do not create App Planner tasks, implement helpers, generate corpus output, create embeddings, create vector indexes, create pgvector tables, integrate with App runtime, create public search, automate refreshes, or perform live Supabase/Planner writes from Company without explicit approval for that specific action.

If Josue approves the next move after this packet, recommended options are:

1. Ask App to perform a docs-only design review note for the Wave 5 manifest/chunk export proposal.
2. Keep Wave 5 paused at the design-review packet until App implementation capacity is reviewed.
3. Continue to Wave 6 Media And Visual AI Readiness as a docs-only design pass, with Wave 5 implementation still deferred.

## Verification

- Read App `AGENTS.md`.
- Read App `.gitignore`.
- Read App `memory/00-index.md`.
- Read App `memory/05-supabase-and-storage-rules.md`.
- Read App `skills/supabase-safety-review/SKILL.md`.
- Read Wave 5 retrieval design, corpus/citation readiness review, and no-write App manifest/chunk export proposal.
- No App repo files were changed.
- No generated corpus files were created.
- No Supabase/Planner writes were performed.
- No App runtime, schema, public site behavior, graph database, export/import job, embedding job, vector index, pgvector table, model/API call, Storage change, media metadata, cloud upload, paid tool, automation, source-of-truth record, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical writeback changed.
