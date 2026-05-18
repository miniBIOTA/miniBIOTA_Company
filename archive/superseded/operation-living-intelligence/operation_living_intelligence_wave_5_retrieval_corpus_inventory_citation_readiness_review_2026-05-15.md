---
id: operation_living_intelligence_wave_5_retrieval_corpus_inventory_citation_readiness_review_2026-05-15
title: Operation Living Intelligence Wave 5 Retrieval Corpus Inventory And Citation Readiness Review
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-5, retrieval, corpus-inventory, citations, docs-only]
status: docs_only_readiness_review
---
# Operation Living Intelligence Wave 5 Retrieval Corpus Inventory And Citation Readiness Review

## Purpose

This review selects the first safe retrieval corpus for Operation Living Intelligence and checks whether the corpus is ready for a future no-write manifest/chunk export proposal.

This is a docs-only review. It does not authorize an embedding job, vector index, pgvector table, Supabase schema change, App helper, generated output, local model/API call, external embedding API, paid vector service, scheduled refresh, public search, Planner/Supabase write, App runtime behavior, Web behavior, public claim, or canonical writeback.

## Reviewed Inputs

- `domains/company/operation_living_intelligence_wave_5_retrieval_layer_design_2026-05-15.md`
- `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-plan.md`
- `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-data-projection-matrix.md`
- `domains/company/operation_living_intelligence_session_closeout_2026-05-15.md`
- `domains/company/company_brief.md`
- Company-side file inventory under `memory/`, `domains/`, `_system/`, and `skills/coordinate-cross-domain-priorities/reference/`

## Readiness Result

Result:

```text
company_corpus_ready_for_no_write_manifest_proposal
```

The first retrieval corpus is ready to define as a no-write manifest/chunk proposal, but not ready for embeddings, pgvector, or a vector service.

The safe first corpus is Company-owned and report-level:

- Company operating memory and protocols;
- Operation Living Intelligence plan, projection matrix, and wave records;
- active Company domain reports and overviews;
- active Company session closeout and Company brief;
- source-path references to App-generated local readbacks only when they are explicitly selected and labeled `generated-derived`.

Deep Content and Research repo source docs should remain inventory candidates until the relevant domain owner scope is explicit. Sensitive domains remain excluded by default.

## Corpus Tiers

| Tier | Corpus family | Inclusion status | Notes |
|---|---|---|---|
| 1 | Company operating corpus | Ready for future manifest proposal | `AGENTS.md`, `COMPANY_AGENT_PROTOCOL.md`, `_system/agent_repo_registry.md`, `_system/database_awareness.md`, selected `memory/*.md`, and Company skills/reference docs |
| 2 | OLI planning and wave docs | Ready for future manifest proposal | OLI plan, projection matrix, session closeout, Wave 1-5 design/review/handoff docs |
| 3 | Company domain reports | Ready as routing/current-state summaries | `domains/*/*_brief.md`, `domains/*/*_overview.md`, with source role `report` |
| 4 | Generated OLI readbacks | Candidate, explicitly labeled only | App ignored `out/operation_living_intelligence/...` reports may be cited as derived readbacks, not canonical truth |
| 5 | Domain repo deep source docs | Candidate pending owner scope | Content packets/scripts and Research validation notes need source selection by owner before indexing |
| 6 | Sensitive/private records | Excluded by default | CRM/contact rows, raw financial rows, private sponsor notes, YouTube private analytics, raw media, credentials, service-role output, App runtime logs |
| 7 | Brain archive material | Excluded by default | If ever included, it must remain archive-labeled and cannot override active Company sources |

## Candidate First Manifest Families

If a later no-write App proposal is approved, the manifest should begin with these families:

| Source family | Candidate paths | Source role |
|---|---|---|
| Company entry/protocol | `AGENTS.md`, `COMPANY_AGENT_PROTOCOL.md` | canonical operating rule |
| Company routing and database awareness | `_system/agent_repo_registry.md`, `_system/database_awareness.md` | routing/governance |
| Company memory | `memory/00-index.md`, `memory/01-agent-purpose.md`, `memory/02-company-safety-rules.md`, `memory/03-strategy-and-governance.md`, `memory/05-cross-domain-relationships.md`, `memory/06-source-of-truth-rules.md`, `memory/07-recurring-decisions.md`, `memory/10-cross-domain-operating-model.md` | canonical operating memory |
| OLI references | `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-plan.md`, `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-data-projection-matrix.md` | planning reference |
| OLI wave docs | `domains/company/operation_living_intelligence_*_2026-05-15.md` | design/review/handoff |
| Company report | `domains/company/company_brief.md` | manager-facing current state |
| Domain reports | `domains/*/*_brief.md`, `domains/*/*_overview.md` | routing/current-state report |

The first manifest should not include `archive/superseded/`, Brain archive paths, raw media folders, credential paths, App runtime logs, private analytics exports, CRM raw records, or raw finance records.

## Proposed Manifest Fields

The future manifest should use source-level rows before chunk-level rows.

Minimum document manifest fields:

| Field | Meaning |
|---|---|
| `source_key` | Stable derived source key |
| `source_path` | Repo-relative or absolute source path, or structured table/id |
| `source_family` | Company memory, OLI wave doc, domain report, generated-derived readback, etc. |
| `domain_owner` | Company, App, Research, Content, Web, Brand, Growth, Financials, Hardware, Raw Footage, Brain archive |
| `source_role` | canonical operating rule, operating memory, report, design, review, generated-derived, archive, candidate |
| `canonicality` | canonical, report, derived, candidate, archive |
| `publicness_default` | public, internal, private, review-required, unknown |
| `claim_status_default` | current-state, approved, planned, proposed, candidate, inferred, blocked, unknown |
| `include_status` | include, candidate, excluded |
| `why` | Short inclusion or exclusion rationale |
| `exclusions` | Sensitive fields, folders, or record types intentionally omitted |
| `refresh_trigger` | When the source should be rescanned |

## Citation Readiness

The Company corpus is citation-ready enough for a manifest/chunk export proposal because:

- Markdown paths and headings are stable enough for initial chunking.
- OLI docs use explicit IDs, dates, statuses, and source-path references.
- Company/domain reports already separate current state, plans, proposals, and boundaries.
- The Wave 5 design already requires source path or record ID for authoritative answers.

Implementation still needs line-aware chunking before any generated corpus is trusted. Minimum chunk citation fields should be:

| Field | Required |
|---|---|
| `source_path` | Yes |
| `source_heading` | Yes |
| `source_line_start` | Yes when available |
| `source_line_end` | Yes when available |
| `source_role` | Yes |
| `domain_owner` | Yes |
| `publicness` | Yes |
| `claim_status` | Yes |
| `record_id` | Required for structured sources |

If a chunk cannot preserve source path, heading, owner, publicness, and claim status, it should be excluded or downgraded to candidate context.

## Evaluation Set Readiness

The first retrieval evaluation set is ready to define. Expected source families:

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

Success threshold remains:

```text
8 of 10 source-family hits with source path or record ID, publicness preserved, generated-derived content labeled, and downstream owner named when action is requested.
```

## Downstream Owner Implications

| Domain | Implication |
|---|---|
| Company | Owns corpus governance, source hierarchy, and citation/readiness rules |
| App | Owns any future manifest/chunk helper, output path, schema/runtime decisions, and vector index choices |
| Content | Must approve any deep Content corpus beyond Company report-level summaries |
| Research | Must approve any deep Research corpus and ecological uncertainty labels beyond Company report-level summaries |
| Web | No public search, public species-card output, or site behavior from this review |
| Growth | CRM/contact/sponsor relationship context remains excluded by default |
| Financials | Raw finance and paid vector-service decisions remain excluded until Financials approves scope |
| Brain | Archive material remains excluded unless explicitly scoped and archive-labeled |

## Stop Conditions

Stop before implementation if:

- a source family cannot preserve path, owner, publicness, or claim status;
- the proposal requires embeddings, pgvector, a vector DB, a paid service, or API/model credentials;
- deep Content/Research docs are included without owner scope;
- private analytics, CRM/contact rows, finance rows, sponsor notes, raw media, credentials, App runtime logs, or Brain archive content are silently included;
- generated readbacks are treated as canonical;
- the output path is not local and ignored;
- the plan implies public search, Web changes, App runtime behavior, Planner/Supabase writes, or canonical writeback.

## Decision

Wave 5 is ready for a no-write App manifest/chunk export proposal limited to Company-owned and Company-report-level sources.

Not ready:

```text
embeddings
pgvector
vector database
external model/API call
generated corpus files
App helper implementation
scheduled refresh
public search
canonical writeback
```

## Recommended Next Step

Prepare:

```text
Operation Living Intelligence Wave 5 No-Write App Manifest/Chunk Export Proposal
```

That proposal should keep the first implementation to local ignored manifest/chunk generation and a keyword/source-path baseline. Embeddings and pgvector should remain a later decision after the manifest, chunks, validation report, and evaluation readback are reviewed.
