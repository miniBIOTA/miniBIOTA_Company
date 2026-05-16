---
id: operation_living_intelligence_wave_5_retrieval_layer_design_2026-05-15
title: Operation Living Intelligence Wave 5 Retrieval Layer Design
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-5, retrieval, vector-search, citations, docs-only]
status: docs_only_design
---
# Operation Living Intelligence Wave 5 Retrieval Layer Design

## Purpose

Wave 5 designs a source-cited retrieval layer for Operation Living Intelligence.

The operating question is:

```text
How can agents find the right notes, source packets, scripts, briefs, reviews, and decisions faster while still citing durable sources and preserving source-of-truth boundaries?
```

This is a docs-only design pass. It does not authorize embeddings, vector index creation, pgvector table creation, Supabase schema changes, App helper implementation, local model/API calls, external embedding API use, paid vector service adoption, document ingestion, generated index files, scheduled refresh jobs, public search, public claims, Planner/Supabase writes, or canonical writeback.

## Why Wave 5 Can Proceed While Wave 4 Is Deferred

Wave 4 YouTube Analytics depends on either a manual YouTube Studio export or approved OAuth/API setup. Deferring it does not block Wave 5.

Wave 5 can start from existing local Markdown and known source records:

- Company memory and reports;
- OLI design/review docs;
- domain reports and briefs;
- source packets and review notes;
- Content scripts/packaging/source docs when scoped;
- Research validation and uncertainty notes when scoped;
- generated local OLI readback reports as references after they are selected, not as canonical truth.

The retrieval layer should make existing sources easier to find. It should not create new claims or move source ownership.

## Design Answer

Use a staged retrieval path:

```text
source inventory
  -> corpus manifest
  -> chunk/citation rules
  -> no-embedding keyword/source-path baseline
  -> retrieval evaluation set
  -> only then consider embeddings/vector index
```

Default posture:

- Start with a corpus inventory and citation rules.
- Use file paths, headings, source IDs, tags, domains, publicness labels, and owner labels before embeddings.
- If later approved, produce a small local ignored manifest/chunk export before any pgvector or vector DB work.
- Use Supabase pgvector as the first shared vector path only after the corpus, metadata schema, evaluation questions, and approval gates are clear.
- Defer Pinecone, Qdrant, Weaviate, Milvus, ChromaDB, MongoDB Atlas Vector Search, or other dedicated vector services until pgvector/local retrieval proves insufficient.

## Candidate First Corpus

The first retrieval corpus should be small, high-value, and source-of-truth-safe.

| Corpus family | Candidate sources | Owner | First posture |
|---|---|---|---|
| Company operating memory | `memory/*.md`, `AGENTS.md`, `COMPANY_AGENT_PROTOCOL.md` | Company | Include as source-cited operating context |
| OLI architecture | `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-plan.md` and projection matrix | Company | Include exact sections and wave docs |
| OLI wave docs | `domains/company/operation_living_intelligence_*_2026-05-15.md` | Company | Include design/review/closeout docs |
| Domain reports | `domains/*/*_brief.md`, `domains/*/*_overview.md` | Company/domain reporting | Include as routing/current-state summaries |
| Content source/story docs | Content repo source packets, scripts, packaging notes, and project docs when selected | Content | Inventory only until Content approves specific corpus |
| Research review notes | Research validation, uncertainty, species/observation review docs when selected | Research | Inventory only until Research approves specific corpus |
| Chronicles and public records | Supabase/public records or exports when selected | Web/Research/Content/App | Use source IDs and public/private labels; no live read in this docs pass |
| Generated OLI readbacks | App ignored `out/operation_living_intelligence/...` readback reports | App/Company | Reference after explicit selection; generated outputs are derived, not truth |

Exclude from the first corpus:

- raw private media;
- raw financial rows;
- CRM/contact rows;
- private sponsor/partner notes;
- YouTube private analytics;
- OAuth/API credentials;
- Supabase service-role output;
- App runtime logs;
- unreviewed visual AI annotations;
- anything with unclear owner/publicness.

## Chunk And Citation Rules

Every future retrieval chunk must carry enough metadata for an agent to return an answer with proof.

Minimum metadata:

| Field | Required meaning |
|---|---|
| `chunk_id` | Stable derived id for the chunk |
| `source_path` | Absolute or repo-relative file path, or structured source table/id |
| `source_heading` | Nearest Markdown heading or record label |
| `source_line_start` | Line number when available |
| `source_line_end` | Line number when available |
| `source_owner` | Company, Research, Content, App, Web, Brand, Growth, Financials, Hardware, Raw Footage, or Brain archive |
| `source_role` | Canonical, report, review, design, generated-derived, archive, or candidate |
| `publicness` | Public, public-source-identity, internal, private, review-required, or unknown |
| `claim_status` | Approved, current-state, planned, proposed, candidate, inferred, blocked, or unknown |
| `last_updated` | Source date when available |
| `corpus_version` | Manifest/build identifier |
| `exclusions` | Any omitted sensitive fields or blocked use |

Citation rule:

```text
No source path or record ID, no authoritative answer.
```

If retrieval finds useful text but lacks enough provenance, the agent should say it found a candidate memory and route the user back to the source owner for verification.

## Retrieval Modes

Wave 5 should support multiple retrieval modes rather than pretending semantic similarity is always enough.

| Mode | Use | Boundary |
|---|---|---|
| Exact path/id lookup | Known docs, source packets, table ids, task ids, species ids | Preferred when the user names a source |
| Keyword/heading search | Known terms like `Daphnia`, `Lake Post-Seal`, `Wave 3`, `publicness` | Good first baseline before embeddings |
| Metadata-filtered retrieval | Domain, owner, publicness, status, date, source family | Required for safe cross-domain search |
| Semantic retrieval | Similar meaning when the wording is unknown | Only after corpus and citation rules are approved |
| Graph-assisted retrieval | Relationship context from Wave 1-3 outputs | Derived helper only; canonical check still required |
| Human review queue | Ambiguous or sensitive retrieved material | Required for public, financial, sponsor, legal, ecological-claim, or roadmap-sensitive outputs |

## First Evaluation Questions

A later implementation should prove value against an evaluation set before adding more sources.

Candidate questions:

1. Where is the current source-of-truth rule for OLI derived layers?
2. What docs explain why Wave 1 should not become persistent Memgraph infrastructure yet?
3. What are the publicness guardrails for Daphnia in the Lake Post-Seal packet?
4. Which docs explain why Wave 4 YouTube analytics is deferred?
5. What source supports `content_pipeline.id = 338` as the Lake Post-Seal video?
6. Which docs define App ownership of helper/runtime/schema work?
7. What current docs should Content read before using Wave 2 story output?
8. Which docs explain why generated local readbacks are derived and not canonical truth?
9. What current Company brief sections summarize OLI status?
10. Which docs should an agent cite before answering a public species-card question?

Success threshold:

- Retrieval returns the right source family for at least 8 of 10 questions.
- Every answer includes source path or record id.
- Public/private/review-required labels survive the retrieval path.
- Generated-derived outputs are never treated as canonical truth.
- The answer names the downstream owner when action is requested.

## Proposed Future Output Shape

If later approved, the first local ignored output path should be:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\
```

Recommended future files:

| File | Purpose |
|---|---|
| `corpus_manifest.json` | Included/excluded source families, owners, publicness rules, and run timestamp |
| `documents_manifest.jsonl` | One row per selected file/record with owner, source role, and inclusion status |
| `chunks_manifest.jsonl` | Chunk metadata and citation fields without embeddings |
| `retrieval_evaluation_set.jsonl` | Evaluation questions, expected source paths/ids, and required caveats |
| `keyword_baseline_report.md` | No-embedding baseline using exact path/keyword/heading search |
| `validation_report.json` | Missing metadata, private/sensitive exclusions, duplicate chunks, and source-owner checks |
| `retrieval_readback_report.md` | Human readback of what retrieval can answer and what remains blocked |

Do not create embeddings, vector tables, external API payloads, or public search indexes in the first approved implementation unless separately scoped.

## Platform Posture

| Platform | Wave 5 posture |
|---|---|
| Markdown + `rg`/source paths | First baseline and audit surface |
| Local JSONL manifest | Best first generated artifact if later approved |
| Supabase pgvector | Preferred first shared vector path after corpus/evaluation approval |
| Plain local Postgres + pgvector | Possible local pilot if App wants isolation before Supabase schema work |
| ChromaDB | Optional local experiment only if pgvector path is not ready |
| Qdrant | Candidate later if metadata filtering becomes central and pgvector is insufficient |
| Pinecone/Weaviate/Milvus/MongoDB Atlas Vector Search | Defer until there is proven retrieval pain, scale, or feature need |

No platform adoption is approved by this design.

## Guardrails

- Retrieval is a derived search layer, not a source of truth.
- Retrieval answers must cite source paths or structured record IDs.
- Retrieval must preserve publicness, review status, owner, and claim-status labels.
- Embeddings must not flatten public/private, current/planned/proposed, or approved/candidate distinctions.
- Retrieval should not quote long copyrighted/private source text into outputs.
- Retrieval should not index CRM, Financials, private contact/sponsor notes, raw media, private analytics, credentials, or App runtime logs without a separate policy.
- Retrieval must not write back to Markdown, Supabase, Planner, App runtime, Web, Content, Research, or media metadata automatically.
- Search results can propose a correction, but canonical edits go back to the source owner.
- Brain archive content, if ever indexed, must stay archive-labeled and not become active operating truth.

## Downstream Owners

| Domain | Why implicated | Next need |
|---|---|---|
| Company | Owns OLI retrieval governance, source hierarchy, and cross-domain citation rules | Approve corpus scope and evaluation questions before implementation |
| App | Owns helper implementation, output path, pgvector/schema/runtime choices, and any future tool bridge | Review local manifest/export shape before any helper or vector index |
| Research | Owns ecological truth, species/observation interpretation, and claim safety | Approve any Research corpus and uncertainty labels before indexing |
| Content | Owns scripts, source packets, story docs, publication context, and public narrative | Approve any Content corpus and distinguish published/planned/draft material |
| Brand | Owns public language and sponsor-safe framing | Review retrieval use for public wording |
| Web | Owns public search/display behavior | No public search or website behavior from this wave |
| Growth | Owns CRM/audience/sponsor relationship context | CRM and sponsor notes excluded by default |
| Financials | Owns finance records and paid-tool approval | Raw finance excluded; paid vector services deferred |
| Brain | Archive/recovery only | Archive material excluded unless explicitly scoped and archive-labeled |

## Stop Conditions

Stop before implementation if:

- the first corpus includes sensitive sources without owner approval;
- the design requires Supabase schema/table creation;
- an embedding provider/API key/model run would be needed;
- public/private labels are missing for public-facing or sensitive material;
- generated-derived OLI readbacks would be treated as canonical truth;
- results cannot cite source paths or record IDs;
- the plan implies App runtime, Web public behavior, Planner/Supabase writes, paid services, or automation.

## Decision

Wave 5 should begin with a docs-only corpus and citation design, then a source-inventory/readiness review.

Approved by this document:

```text
design posture only
```

Not approved:

```text
embedding job
vector index
pgvector table
external API/model call
App helper
generated output
scheduled refresh
public search
canonical writeback
```

## Recommended Next Step

Prepare:

```text
Operation Living Intelligence Wave 5 Retrieval Corpus Inventory And Citation Readiness Review
```

That review should select the first corpus, confirm exclusions, define the evaluation questions, and decide whether the next artifact should be a no-write App implementation proposal for a local manifest/chunk export.
