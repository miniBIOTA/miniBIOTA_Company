---
id: operation_living_intelligence_wave_5_no_write_app_manifest_chunk_export_proposal_2026-05-15
title: Operation Living Intelligence Wave 5 No-Write App Manifest/Chunk Export Proposal
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-5, retrieval, app-proposal, manifest, chunks, no-write]
status: design_only_proposal_pending_app_review
---
# Operation Living Intelligence Wave 5 No-Write App Manifest/Chunk Export Proposal

## Purpose

This is the Company-owned design-only proposal for the first **Operation Living Intelligence Wave 5: Retrieval Layer** local manifest/chunk export.

The proposed future App-owned package would help answer:

```text
Which source docs should an agent retrieve, cite, and route back to when answering Operation Living Intelligence questions?
```

The first package should generate source manifests, line-aware chunk manifests, a no-embedding keyword/source-path baseline, validation output, and a readback report for a small Company-owned/report-level corpus.

This document does not approve App repo edits, helper implementation, generated corpus files, embeddings, vector index creation, pgvector table creation, Supabase schema changes, local model/API calls, external embedding API use, paid vector service adoption, scheduled refresh, public search, Planner/Supabase writes, App runtime behavior, Web behavior, public claims, source-of-truth migration, canonical writeback, or any public, sponsor, financial, legal, launch, or roadmap commitment.

## Proposed Decision

Ask App to review a future no-write local implementation shaped like this:

```text
Company source inventory
-> local corpus_manifest.json
-> local documents_manifest.jsonl
-> local chunks_manifest.jsonl
-> local retrieval_evaluation_set.jsonl
-> local keyword_baseline_report.md
-> local validation_report.json
-> local retrieval_readback_report.md
-> no embeddings / no vector index / no canonical writeback
```

The first package should remain manifest/chunk/readback-first. Embeddings, pgvector, vector DB selection, semantic retrieval, public search, scheduled refresh, and App runtime integration should stay deferred until the local manifest, chunks, validation report, and evaluation readback prove value.

## Source Baseline

Use these Company records as the proposal baseline:

| Source | Path |
|---|---|
| Wave 5 design | `domains/company/operation_living_intelligence_wave_5_retrieval_layer_design_2026-05-15.md` |
| Wave 5 corpus/citation readiness review | `domains/company/operation_living_intelligence_wave_5_retrieval_corpus_inventory_citation_readiness_review_2026-05-15.md` |
| Projection matrix | `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-data-projection-matrix.md` |
| OLI plan | `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-plan.md` |
| Session closeout | `domains/company/operation_living_intelligence_session_closeout_2026-05-15.md` |
| Company brief | `domains/company/company_brief.md` |

Implementation-time generation must still read current files from disk before writing local ignored output. This proposal uses current docs as a design baseline, not as permission to skip source freshness checks.

## Exact First Corpus Scope

The first package should include only Company-owned and Company-report-level sources.

### Include

| Source family | Candidate paths | Source role |
|---|---|---|
| Company entry/protocol | `AGENTS.md`, `COMPANY_AGENT_PROTOCOL.md` | canonical operating rule |
| Company routing and database awareness | `_system/agent_repo_registry.md`, `_system/database_awareness.md` | routing/governance |
| Company memory | `memory/00-index.md`, `memory/01-agent-purpose.md`, `memory/02-company-safety-rules.md`, `memory/03-strategy-and-governance.md`, `memory/05-cross-domain-relationships.md`, `memory/06-source-of-truth-rules.md`, `memory/07-recurring-decisions.md`, `memory/10-cross-domain-operating-model.md` | canonical operating memory |
| OLI references | `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-plan.md`, `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-data-projection-matrix.md` | planning reference |
| OLI wave docs | `domains/company/operation_living_intelligence_*_2026-05-15.md` | design/review/handoff |
| Company report | `domains/company/company_brief.md` | manager-facing current state |
| Domain reports | `domains/*/*_brief.md`, `domains/*/*_overview.md` | routing/current-state report |

### Candidate Only

| Source family | Handling |
|---|---|
| App ignored OLI readback outputs | Include only after explicit selection and label `source_role = generated-derived`; not canonical truth. |
| Content source packets, scripts, packaging notes, and source docs | Inventory only until Content approves specific corpus scope. |
| Research validation, uncertainty, species, and observation review docs | Inventory only until Research approves specific corpus scope. |
| Supabase/public records | Out of scope for the first file-only package unless a structured source-id row is separately approved. |
| Brain archive content | Excluded unless explicitly scoped and archive-labeled. |

### Exclude

Exclude by default:

- `archive/superseded/`;
- Brain archive paths;
- raw private media folders;
- CRM/contact rows;
- raw financial rows;
- private sponsor/partner notes;
- YouTube private analytics;
- OAuth/API credentials;
- Supabase service-role output;
- App runtime logs;
- unreviewed visual AI annotations;
- anything with unclear owner, publicness, or claim status.

## Recommended Local Output Location

Recommended App-owned ignored path:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\company_corpus\
```

Expected generated files if later approved:

| File | Purpose |
|---|---|
| `corpus_manifest.json` | Corpus version, included/excluded source families, owners, source roles, publicness defaults, and run timestamp. |
| `documents_manifest.jsonl` | One row per selected file/record with owner, source role, canonicality, inclusion status, and refresh metadata. |
| `chunks_manifest.jsonl` | One row per retrieval chunk with citation fields and no embeddings. |
| `retrieval_evaluation_set.jsonl` | Evaluation questions, expected source paths/ids, required caveats, and owner routing. |
| `keyword_baseline_report.md` | No-embedding baseline using exact path, keyword, heading, and metadata-filtered retrieval. |
| `validation_report.json` | Missing metadata, private/sensitive exclusions, duplicate chunks, line-range checks, owner checks, and no-write checks. |
| `retrieval_readback_report.md` | Human-readable answers showing what retrieval can answer, cite, and block. |

No generated manifest/chunk output should be committed unless Josue separately approves sanitized fixtures.

## Document Manifest Fields

Each `documents_manifest.jsonl` row should include:

| Field | Meaning |
|---|---|
| `source_key` | Stable derived key for the source. |
| `source_path` | Repo-relative or absolute source path, or structured table/id if separately approved. |
| `source_family` | Company memory, OLI wave doc, domain report, generated-derived readback, candidate, etc. |
| `domain_owner` | Company, App, Research, Content, Web, Brand, Growth, Financials, Hardware, Raw Footage, or Brain archive. |
| `source_role` | canonical operating rule, operating memory, report, design, review, generated-derived, archive, candidate. |
| `canonicality` | canonical, report, derived, candidate, archive. |
| `publicness_default` | public, internal, private, review-required, unknown. |
| `claim_status_default` | current-state, approved, planned, proposed, candidate, inferred, blocked, unknown. |
| `include_status` | include, candidate, excluded. |
| `last_modified` | Filesystem timestamp or source date where available. |
| `content_hash` | Hash for stale-source and rebuild checks. |
| `why` | Inclusion/exclusion rationale. |
| `exclusions` | Sensitive fields, folders, or record types intentionally omitted. |
| `refresh_trigger` | When the source should be rescanned. |

## Chunk Manifest Fields

Each `chunks_manifest.jsonl` row should include:

| Field | Meaning |
|---|---|
| `chunk_id` | Stable derived id from source key and heading/line range. |
| `source_key` | Parent source key from `documents_manifest.jsonl`. |
| `source_path` | Exact source path. |
| `source_heading` | Nearest Markdown heading or record label. |
| `source_line_start` | First source line included in the chunk. |
| `source_line_end` | Last source line included in the chunk. |
| `chunk_text_sha256` | Hash of chunk text, not a replacement for citation. |
| `chunk_summary` | Short derived summary for readback only. |
| `domain_owner` | Owner inherited or overridden from source. |
| `source_role` | Role inherited or overridden from source. |
| `publicness` | Public/private/review/default label. |
| `claim_status` | Current/planned/proposed/candidate/blocked label. |
| `record_ids` | Structured ids mentioned in the chunk, when parseable. |
| `excluded_terms` | Any sensitive terms or source families intentionally excluded. |

Do not generate embedding vectors in the first package.

## Chunking Rules

The first chunker should be conservative:

- chunk by Markdown heading boundaries when possible;
- preserve YAML frontmatter as source metadata, not normal answer text;
- keep chunks source-local and avoid joining unrelated files;
- split very long sections into line-ranged subchunks;
- preserve fenced code blocks only when they describe paths, commands, schemas, or guardrails needed for citation;
- do not include raw credentials, tokens, private records, or runtime logs;
- flag any chunk with unknown owner/publicness/claim status for exclusion or candidate-only handling;
- keep generated readbacks labeled `generated-derived` if they are included later.

## Retrieval Evaluation Set

The first `retrieval_evaluation_set.jsonl` should include these questions:

| Question | Expected source family |
|---|---|
| Where is the source-of-truth rule for OLI derived layers? | Projection matrix, Company source-of-truth memory, `AGENTS.md` |
| Why should Wave 1 not become persistent Memgraph infrastructure yet? | Wave 1 completion/readback/pilot dependency docs |
| What are the publicness guardrails for Daphnia in the Lake Post-Seal packet? | Wave 3 design/source/review docs and Wave 1/3 blocked-claim records |
| Why is Wave 4 YouTube analytics deferred? | Wave 4 source/auth readiness review |
| What source supports `content_pipeline.id = 338` as the Lake Post-Seal video? | Task 409 audit, Wave 2/3 source reviews, Wave 4 source/auth review |
| Which docs define App ownership of helper/runtime/schema work? | `AGENTS.md`, Company protocol, App brief, projection matrix |
| What should Content read before using Wave 2 story output? | Wave 2 design/source/review docs and session closeout |
| Why are generated local readbacks derived and not canonical truth? | Wave 5 design, projection matrix, Wave 1-3 readback docs |
| What Company brief sections summarize OLI status? | `domains/company/company_brief.md` |
| What should an agent cite before answering a public species-card question? | Wave 3 design/source/review docs, domain reports, Research/Web ownership notes |

Success threshold:

```text
8 of 10 source-family hits with source path or record ID, line/heading citation where available, publicness preserved, generated-derived content labeled, and downstream owner named when action is requested.
```

## Keyword Baseline Requirements

The no-embedding baseline should test:

| Mode | Required behavior |
|---|---|
| Exact path lookup | Return source document, source role, owner, and headings. |
| Keyword search | Find terms such as `Daphnia`, `Lake Post-Seal`, `Wave 3`, `publicness`, `canonical writeback`, and `content_pipeline.id = 338`. |
| Heading search | Return nearest heading and line range. |
| Metadata filter | Filter by `domain_owner`, `source_role`, `publicness`, `claim_status`, and `include_status`. |
| Blocked-answer readback | Show why a result cannot support an authoritative answer when provenance or owner scope is missing. |

## Validation Checks

The validation report should include:

| Check | Expected result |
|---|---|
| Output path | Under App's ignored `out/operation_living_intelligence/wave_5_retrieval_layer/company_corpus/` folder. |
| Source existence | Every included source path exists at generation time. |
| Source freshness | Every included source has timestamp/hash metadata. |
| Document manifest uniqueness | No duplicate `source_key` or normalized `source_path`. |
| Chunk uniqueness | No duplicate `chunk_id`. |
| Citation fields | Every chunk has `source_path`, `source_heading`, `source_line_start`, and `source_line_end` when available. |
| Owner labels | Every document and chunk has `domain_owner`. |
| Role labels | Every document and chunk has `source_role` and `canonicality`. |
| Safety labels | Every document and chunk has publicness and claim-status defaults. |
| Sensitive exclusion | CRM/contact rows, raw finance, private sponsor notes, private analytics, raw media, credentials, service-role output, App runtime logs, and Brain archive content are excluded. |
| Generated-derived handling | Any selected readback output is labeled `generated-derived` and not canonical. |
| Evaluation coverage | All 10 evaluation questions have expected source-family targets. |
| No embeddings | No vector fields, embedding payloads, model/API calls, or vector-index files. |
| No writes | No Supabase, Planner, App runtime, Web, Content, Research, media, Markdown source-of-truth, or public-output writes. |
| Rebuildability | Output folder can be deleted and regenerated from source files. |

## Readback Examples

### Where is the source-of-truth rule for OLI derived layers?

Expected answer shape:

```text
Path status: answerable_with_citation
Likely sources: projection matrix, source-of-truth memory, AGENTS.md.
Required citation: source path plus heading/line range.
Do not infer: derived layers are canonical.
Canonical writes implied: none.
```

### Why is Wave 4 deferred?

Expected answer shape:

```text
Path status: answerable_with_citation
Likely source: Wave 4 source/auth readiness review.
Safe answer: source identity exists, but analytics auth/data is not ready.
Do not infer: YouTube API/OAuth setup, manual export, or warehouse work is approved.
Canonical writes implied: none.
```

### Can retrieval answer a public species-card question?

Expected answer shape:

```text
Path status: review_required
Likely sources: Wave 3 design/source/readback docs, domain reports, Research/Web ownership notes.
Safe answer: retrieval can locate candidate evidence and guardrails, but public wording needs Research, Content, and Web review.
Do not infer: species-card updates, public copy, or Web behavior are approved.
Canonical writes implied: none.
```

### Are generated readbacks canonical?

Expected answer shape:

```text
Path status: answerable_with_citation
Safe answer: generated readbacks are derived evidence/readback artifacts, not source-of-truth records.
Required label: generated-derived.
Do not infer: generated output can overwrite Markdown, Supabase, Planner, or public site state.
Canonical writes implied: none.
```

## Stop Conditions

Stop before writing local output if:

- any included source path is missing;
- owner, publicness, or claim-status labels cannot be assigned;
- line ranges cannot be generated for source-cited chunks;
- the output path is not ignored by git;
- the package requires embeddings, pgvector, a vector DB, a paid service, cloud upload, or API/model credentials;
- deep Content or Research docs are included without owner scope;
- CRM/contact rows, raw financial rows, private sponsor notes, private analytics, raw media, credentials, service-role output, App runtime logs, or Brain archive content are included silently;
- generated readbacks are treated as canonical;
- the helper implies public search, Web changes, App runtime behavior, Planner/Supabase writes, scheduled refresh, or canonical writeback.

## Review Owners

| Review | Owner |
|---|---|
| Local ignored output path, helper pattern, line-aware chunking, validation/readback checks, deletion/rebuild behavior | App |
| Corpus governance, source hierarchy, citation rules, approval gates, and cross-domain closeout | Company |
| Deep Content source-packet, script, packaging, and public narrative corpus scope | Content |
| Deep Research validation, species, observation, uncertainty, and ecological claim corpus scope | Research |
| Public species-card/search/display behavior | Web |
| CRM/audience/sponsor relationship corpus scope | Growth |
| Finance records and paid vector-service decisions | Financials |
| Archive-only source labeling | Brain archive/Company |

## App Design Review Request

When this moves to App scope, ask App to review the proposal as a design-only App review:

```text
Please review the Operation Living Intelligence Wave 5 no-write App manifest/chunk export proposal as a design-only App review.

Requested decision:
- Is the proposed ignored output path acceptable?
- Is manifest/chunk/readback-first the right first shape?
- What App-owned helper pattern should generate line-aware chunks without embeddings?
- What validation/readback checks should App require before generated output?
- Should embeddings, pgvector, vector indexes, public search, and scheduled refresh remain deferred until the manifest/chunk baseline passes?

Not requested:
- No App code changes yet.
- No generated corpus files yet.
- No embeddings.
- No vector index.
- No pgvector table or Supabase schema change.
- No external API/model call.
- No Planner/Supabase writes.
- No App runtime or Web behavior.
- No public search.
- No automation.
```

## Next Gate

The next gate is **Company-to-App design-review packet**, not implementation.

Proceed only if Josue explicitly approves sending this proposal into App scope or asks Company to prepare the App design-review packet.

## Verification

- Built from the Wave 5 retrieval design and corpus/citation readiness review.
- Uses active Company files and Company-report-level sources only.
- No App repo files were changed.
- No generated corpus files were created.
- No embeddings, vector index, pgvector table, external API/model call, Supabase/Planner write, App runtime behavior, public search, Web behavior, scheduled refresh, paid service, source-of-truth record, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical writeback changed.
