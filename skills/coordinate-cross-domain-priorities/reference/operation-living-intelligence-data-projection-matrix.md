---
id: operation_living_intelligence_data_projection_matrix
title: Operation Living Intelligence Data Projection Matrix
domain: company_operations
last_updated: 2026-05-14
tags: [operation-living-intelligence, data-projection, memgraph, supabase, pgvector, analytics, agents, migration-scope]
status: active_planning
---
# Operation Living Intelligence Data Projection Matrix

This document scopes how miniBIOTA's existing structured records, Markdown knowledge, public content, media evidence, telemetry, analytics, and agent-operating data should become more useful to agents without breaking existing sources of truth.

The core decision is: **do not move canonical data out of Supabase or domain repos first. Project it into derived systems.**

Use this rule:

```text
Canonical source stays where it belongs.
Derived systems make agent work faster, more connected, and easier to reason over.
Approved writeback goes back to the canonical owner.
```

## Current Answer

The migration/projection work is now scoped at the architecture level, but it is not implemented.

What is scoped here:

- Which data belongs in Supabase, Memgraph, vector search, analytics warehouse, telemetry history, visual AI review, cache/runtime memory, and Markdown.
- Which tables and files should be projected first.
- Which systems remain canonical.
- Which agents should read each layer.
- Which domain owns each layer and review boundary.
- Which agents may read, propose, or write by default.
- Which derived layers improve agent behavior.
- Which writebacks require approval.
- Which validation checks prevent drift.
- Which implementation waves should happen before deeper automation.

What is not approved by this document:

- Live Supabase writes.
- Schema changes.
- Memgraph installation.
- Import jobs.
- API/OAuth connections.
- Paid subscriptions.
- App runtime work.
- Public website changes.
- Automated scheduled jobs.
- Media metadata writes.
- Financial, sponsor, legal, public, launch, or roadmap commitments.

## 2026-05-14 Closeout State

The first Operation Living Intelligence planning push ended with derived-layer scope clarified, but no implementation layer created.

Completed docs-only/source artifacts:

- Research tasks `391-394`: graph ontology, Lake Post-Seal graph candidates, path safety, and Stage 3 question evaluation.
- Content tasks `395-399`, `413`, and `414`: retrievable source inventory, publicness/indexing plan, visual AI feasibility/storage risk, bounded test set, candidate annotation review workflow, Nemotron/Codex plus Twelve Labs media-set decision, and DaVinci pull-sheet/rough-sequence criteria.
- Financials tasks `406-408` and `415`: graph cost review, cost thresholds, proven-job criteria, and Twelve Labs free-tier/paid-threshold gate.
- App readiness tasks `386-390`: App surface boundary, read-only access pattern, agent router/tool registry design, local/private visual-model worker boundary, and approval/readback requirements.

Planner state at closeout:

| Project | Status | Meaning for projections |
|---|---|---|
| Company project `75` | Active | Do not build/export/import before task `409` reruns the implementation-time schema/data audit |
| App project `76` | Planned | App implementation remains gated; task `412` is still open |
| Research project `77` | Done | Research graph planning can be used as source for a future no-write dry-run handoff |
| Content project `78` | Done | Content source/media planning can be used as source for a future no-write dry-run handoff |
| Web project `79` | Planned | Public surfaces remain downstream; tasks `400-402` are open |
| Growth/Sales project `80` | Planned | Analytics questions remain open; tasks `403-405` are open |
| Financials project `81` | Done | Free/local and cost-gate posture is available for later implementation decisions |

Projection rule learned during closeout:

- Planner project cards are not task completion proof. For daily schedule cleanup, use task status for real work and project status/open tasks for container truth. Clearing a project-level `start_date` can remove calendar noise without changing whether the project is active or done.

## Research Basis

Local sources checked:

- Company Operation Living Intelligence plan.
- Company repo registry and database awareness rules.
- App migrations for media, content-calendar links, story beats, Planner, work programs, CRM, prompt library, field observer, and storage rules.
- Content memory for observations, story threads, story beats, open loops, content calendar, content pipeline, chronicles, and publish closeout.
- Research memory and Living Atlas validation notes for species, biomes, observations, claims, uncertainty, and publicness.
- Web ecosystem relationship graph schema and public relationship graph spec.
- Hardware telemetry memory and `biome_telemetry` schema reference.
- Brand Company overview for messaging, channel, sponsor-language, and public-copy boundaries.
- Growth CRM relationship model and database-access rules.
- Financials Company overview, Financials data-model memory, and close/reconciliation model references.
- Raw Footage and Definitions Company routing reports.
- Brain archive/transition registry and retired YouTube Extraction routing.
- Live read-only Supabase OpenAPI and Storage bucket audit on 2026-05-13, documented at `domains/company/operation_living_intelligence_supabase_schema_audit_2026-05-13.md`.

Current external platform sources checked:

- Memgraph/GQLAlchemy import docs: CSV, JSON, Parquet/Arrow, Python graphs, and streams can be used for import; fastest path is `LOAD CSV` with indexes created first. Source: https://memgraph.github.io/gqlalchemy/import-data/
- Memgraph vector search positioning: Memgraph can combine vector search and graph traversal, or sit beside an external vector database. Source: https://memgraph.com/vector-search
- Supabase pgvector docs: pgvector stores embeddings in Postgres for vector similarity and RAG use cases. Source: https://supabase.com/docs/guides/database/extensions/pgvector
- YouTube Analytics and Reporting APIs: Analytics API is for targeted queries; Reporting API is for bulk reports and downloaded datasets. Source: https://developers.google.com/youtube/analytics and https://developers.google.com/youtube/reporting
- DuckDB import docs: DuckDB can directly query/load CSV, JSON, and Parquet files, making it a good local analytics prototype. Source: https://duckdb.org/docs/current/data/overview
- MotherDuck/DuckDB cloud extension docs: DuckDB can connect to MotherDuck with the `motherduck`/`md` extension if cloud collaboration becomes useful. Source: https://duckdb.org/docs/current/core_extensions/motherduck
- Supabase partitioning docs: partitioning can help large tables, but Supabase cautions that complexity should be avoided until needed. Source: https://supabase.com/docs/guides/database/partitions

## System Roles

| System | Role | Canonical? | First use |
|---|---|---|---|
| Markdown domain repos | Durable meaning, source packets, decisions, briefs, workflow rules | Yes for narrative and operating context | Source packets, Research notes, Company coordination |
| Supabase/Postgres | Structured operational records, public/admin website data, Planner, Content, Research, App, Growth, telemetry | Yes for live structured state | Keep all current tables |
| Memgraph | Relationship reasoning, provenance graph, multi-hop agent context | No at first; derived graph | Living Atlas and agent routing graph |
| Supabase pgvector | First-pass semantic retrieval near existing records | Derived/search unless a table is explicitly canonical | Source packets, scripts, notes, summaries |
| DuckDB/MotherDuck | Analytics warehouse for audience, website, QR, agent telemetry, and performance history | Derived analytical history | YouTube first |
| Postgres telemetry tables | Current and internal biome telemetry history | Yes for current telemetry state and internal history for now | `telemetry_snapshot`, `biome_telemetry` |
| Visual AI/local models | Candidate media annotations and evidence discovery | No; review layer only | Raw footage/media evidence pilot |
| Redis/cache later | Temporary agent runtime memory, queues, locks, session state | No | Only after automation requires it |

## Migration Vocabulary

| Term | Meaning |
|---|---|
| Migration | Moving canonical ownership from one system to another. Avoid this unless explicitly approved. |
| Projection | Copying selected canonical data into a derived system for graph, search, analytics, or agent use. This is the default. |
| Sync | Repeating a projection on a schedule or trigger. Requires approval before automation. |
| Writeback | Writing a suggested change back into the canonical source. Requires owner approval. |
| Drift | When a derived record no longer matches its canonical source or no longer points to a valid source ID/path. |
| Rebuildable layer | A derived layer that can be deleted and regenerated from canonical sources. Required for first pilots. |

## Source-Of-Truth Map

| Data family | Canonical source | Derived target | Owner | Agent benefit |
|---|---|---|---|---|
| Species records | Supabase `species`, Research notes | Memgraph, vector summaries | Research/App | Species history, public status, uncertainty, related evidence |
| Biomes and biosphere profile | Supabase `biomes`, `biosphere_profile`, Research/Web notes | Memgraph, vector summaries | Research/Web/App | Biome context, public display grounding, telemetry joins |
| Observations | Supabase `observations`, observation link tables | Memgraph, vector index | Research/Content | Evidence trails from event to story to public claim |
| Story threads and open loops | Supabase `story_threads`, `open_loops`, link tables | Memgraph, vector summaries | Content/Research | Agent sees unresolved arcs and current story questions |
| Story beats | Supabase `story_beats` and beat link tables | Memgraph, vector summaries | Content/App | Agent finds story-shaped turns without treating every observation as content |
| Content calendar | Supabase `content_calendar` and source-map joins | Memgraph light projection, analytics joins | Content/App | Avoid duplicate work, connect planned content to sources |
| Published pipeline | Supabase `content_pipeline` | Memgraph, vector text, analytics dimension | Content | Published history, scripts, URLs, content identity |
| Chronicles | Supabase `chronicles`, `chronicle_subject_links` | Memgraph, vector text, public graph references | Content/Web/Research | Public history connected to evidence and species |
| Ecosystem relationship graph | Supabase `ecosystem_resources`, `ecosystem_interaction_types`, `ecosystem_interactions` | Memgraph | Research/Web/App | Public relationship rows become graph context |
| Media library | Supabase `media_assets` and link tables; filesystem remains source material | Memgraph references, visual AI candidate notes, vector captions | App/Raw Footage/Content/Research | Agents can find proof media and know review state |
| Species/biome images | Supabase `species_images`, `biome_images`, storage buckets | Memgraph references, vector metadata | App/Web/Research | Public proof image routing and missing-evidence detection |
| Planner | Supabase `work_domains`, `work_projects`, `tasks`, `work_programs`, links | Memgraph dependency graph, analytics snapshots | App/Company/domains | Agent sees ownership, blockers, dependencies, active programs |
| YouTube analytics | YouTube Analytics API or Reporting API exports | DuckDB/MotherDuck | Content/Growth/Company | Performance summaries, video-to-topic learning |
| Website analytics | Website/GA/export source when approved | DuckDB/MotherDuck | Web/Growth/Company | Traffic, QR, conversion, campaign feedback |
| CRM/relationships | CRM tables and Growth memory once live content exists | Memgraph later, analytics summaries later | Growth/App | Relationship context and follow-up reasoning without commitments |
| Financial records | Financials Supabase tables | Aggregated analytics only if approved | Financials/Company | Cost visibility and tool-spend review, not broad agent indexing |
| Biome telemetry | `telemetry_snapshot`, `biome_telemetry` | Rollups/summaries; possible future sidecar | Hardware/App/Web | Climate/control analysis and public-safe monitoring context |
| Domain briefs and memory | Markdown repos | Vector index, graph domain-owner nodes | Domains/Company | Agent routing and durable context retrieval |
| Brand messaging and channel rules | Brand repo memory/skills and Company Brand report | Vector index, domain-owner graph nodes | Brand/Company | Public language consistency, sponsor-safe wording, channel fit |
| Shared terminology | Company Definitions glossary plus domain-owned terminology | Vector index, graph vocabulary nodes | Company/domains | Prevent agents from mixing current terms, planned terms, and legacy labels |
| App prompt library | Supabase `prompt_library` | Vector/index metadata later | App/Company | Reusable prompt and workflow template retrieval after App review |
| Public intake and announcement surfaces | Web runtime/tables such as `announcements`, `email_signups`, `poll_votes` when confirmed | Analytics summaries, vector docs | Web/Growth/Brand | Audience signal and public-surface context without treating intake as CRM |
| Brain archive/provenance | Brain archive and Company transition reports | Vector index only if explicitly scoped | Company/Brain | Historical lookup, transition provenance, no active operational truth |
| Retired YouTube Extraction | `M:\miniBIOTA\YouTube_Extraction` historical tool | Archive reference only | Content/Company | Historical transcript/import context only if reactivated |
| Prompt/tool logs | App/agent logs when created | Analytics warehouse, vector summaries if useful | App/Company | Agent performance review and automation safety |

## Domain Coverage Audit

This matrix accounts for every active Company registry domain. Coverage means the domain has an identified canonical home, derived-layer posture, approval boundary, and agent-routing role. A first live Supabase OpenAPI schema inventory was completed on 2026-05-13, but implementation still needs row counts, sample checks, constraints, indexes, RLS, triggers, export queries, and validation queries before any import or sync job.

| Domain | Canonical home | Derived-layer posture | Approval boundary |
|---|---|---|---|
| Company | `miniBIOTA_Company` Markdown, Company report, Company Planner records when approved | Vector memory, `AgentDomain`, `WorkProgram`, dependency graph nodes | Company Markdown edits scoped; Planner writes require approval |
| Brain | Historical Brain archive/provenance only | Optional vector archive index only if explicitly scoped | No active writes; Brain mirrors are not recreated |
| Financials | Financials Supabase tables and Financials repo memory/skills | Aggregated cost/tool summaries only until Financials approves more | Raw finance rows and commitments require Financials approval |
| Research/Ecosystem | Species, biomes, biosphere profile, observations, ecological links, Research notes | Memgraph ecology graph, vector reviews/summaries | Research owns ecological meaning and claim safety |
| Brand | Brand repo memory/skills, Company Brand report, approved public-language records | Vector messaging memory, public-language review nodes | Brand owns public language; sponsor/campaign claims remain approval-gated |
| Content | Content pipeline/calendar/story/chronicle records, Content repo docs | Memgraph story graph, vector scripts/source packets, YouTube analytics joins | Content owns publish pipeline and story state |
| Hardware | Hardware repo, MQTT topology, telemetry snapshot/history, firmware/control docs | Telemetry rollups, Hardware system graph nodes, vector hardware docs | Live control, firmware, MQTT, schema, deployment require explicit approval |
| Growth/Sales | Growth repo memory/skills, partner/CRM records when approved | CRM graph later, funnel summaries later | Growth owns relationship meaning; no outreach/commitment inference |
| Web | Web repo, public Flask/Railway surfaces, public read tables/intake tables | Public surface graph nodes, website analytics, vector route contracts | Web owns public behavior and public rendering |
| App | App repo, Planner runtime/schema/UI, Media Library, CRM runtime, Prompt Library, Monitoring | Export helpers, local services, vector/graph/analytics connectors | App owns runtime/schema/UI and service implementation |
| Raw Footage | Local filesystem media and Company Raw Footage routing report | Media references, visual AI candidate annotations | App/Content/Research review before metadata or public proof writes |
| Definitions | Company glossary and domain-specific terminology extensions | Vocabulary vector index, graph term nodes | Company owns central glossary; domains own specialized corrections |

## Stage 1 Operating Matrix

Stage 1 is finalized at the planning/governance level as of 2026-05-14. It defines routing and ownership before any export, import, graph build, vector index, analytics pull, model run, App runtime change, or automation job begins.

This section does not approve live writes. It makes the rule simple:

```text
Read from the canonical owner first.
Use derived layers for relationship, retrieval, analytics, and review speed.
Return proposed changes to the canonical owner.
Write only after the relevant approval gate is satisfied.
```

### System Access Matrix

| System | Canonical role | Primary owner | Agents may read | Agents may propose | Writes require |
|---|---|---|---|---|---|
| Company and domain Markdown | Strategy, governance, briefs, source packets, decisions, domain instructions | Company and owning domain | Owning domain agents; Company for coordination | Edits to scoped docs, handoffs, source packets, decision notes | Repo-scope approval or standing doc-edit scope; no public/financial/legal/roadmap commitments by implication |
| Supabase/Postgres | Live structured operational truth | App runtime plus owning domains | Agents when current structured state matters | Proposed writes or approval bundles to owning records | Explicit approval or future standing domain delegation; schema/runtime/admin changes remain App-approved |
| Planner Programs/Projects/Tasks | Live operating work queue and program links | App runtime; Company/domain governance by record owner | Company and domain agents for current status | Task/project/status/link/schedule updates | Explicit Planner approval unless standing delegation exists for that domain |
| Memgraph | Derived relationship and provenance graph | App implementation; Company/Research governance by graph lane | Agents after a rebuildable graph exists | Candidate relationships, missing evidence, dependency paths | Write only to derived graph after scoped build approval; canonical corrections go back to source owner |
| pgvector/vector search | Derived semantic retrieval | App implementation; domains own indexed content meaning | Agents after indexed corpus is approved | Indexing scope, citation rules, retrieval evaluation fixes | Embedding/index job approval; canonical text edits remain repo/domain writes |
| DuckDB/MotherDuck analytics | Derived performance history | Growth/Content/Web/Company meaning; App/data implementation | Agents after source/API/export approval | Reports, dashboard questions, metric joins | API/OAuth/export approval; no strategy, sponsor, pricing, or campaign commitments by metric inference |
| Visual AI candidate annotations | Derived media review layer | App tooling; Raw Footage/Content/Research review | Agents after bounded test set approval | Candidate tags, descriptions, timestamps, pull sheets, review notes | Model run/test-set approval; no media metadata, upload, publication, or claim write without separate approval |
| Redis/cache/queues | Temporary runtime state only | App implementation | Agents only through approved runtime tools | Queue/cache needs, job status design | App-owned runtime approval; never durable truth |
| Automation jobs | Execution layer for reads, reports, indexes, proposed-write bundles | App implementation; Company governance | Agents may request/manual-run when scoped | Scheduled read-only jobs or proposed-write bundles | Explicit automation approval; consequential writes require current human approval |

### Domain Owner Matrix

| Lane | Company role | Domain owner | First derived use | Hard boundary |
|---|---|---|---|---|
| Program governance and routing | Owns OLI governance, dependency map, review cadence, approval posture | Company | Planner dependency graph, agent routing graph | Does not replace domain implementation queues |
| App/runtime infrastructure | Defines governance needs and approval gates | App | Export helpers, connectors, graph/vector/analytics clients, media worker, cache/queue | No schema, runtime, storage, secret, or UI change without App-scoped approval |
| Ecological graph and claims | Coordinates downstream owner needs | Research | Living Atlas graph, claim provenance, publicness/confidence paths | AI/graph outputs are not ecological truth until Research review |
| Source packets, scripts, and media usefulness | Coordinates proof/story needs | Content | Vector packets, story graph, visual pull sheets, YouTube joins | Content calendar/pipeline truth stays in Supabase/Content workflows |
| Public surfaces and website analytics | Names public-read constraints | Web | Public surface graph, website analytics exports | No public website behavior or public claim change without Web/Research/Brand approval |
| Audience and CRM meaning | Keeps commitment boundaries visible | Growth | YouTube/website/QR/social/CRM analytics later | No outreach, sponsor, pricing, CRM, or relationship commitment by inference |
| Cost and subscription posture | Requires cost gate before adoption | Financials | Aggregate tool-cost review and paid-threshold analysis | No recurring spend or raw finance projection without Financials approval |
| Telemetry and live system context | Coordinates source-of-truth split | Hardware/App/Web | Telemetry rollups and public-safe monitoring context | No firmware, MQTT, setpoint, live-control, or telemetry schema change without approval |
| Raw media evidence | Coordinates proof/archive routing | Raw Footage with App/Content/Research | Media references and candidate visual annotations | Raw media stays local by default; cloud upload and metadata writes require explicit approval |
| Brand and public language | Names downstream review need | Brand | Vector messaging corpus and public-language review nodes | No sponsor-safe, campaign, CTA, or public positioning change without Brand/Growth/Company review |

### Agent Permission Baseline

| Agent | Default read posture | Default proposal posture | Default write posture |
|---|---|---|---|
| Company | Reads Company docs, Company report, Planner status, domain reports, and derived OLI layers when relevant | Proposes governance, routing, dependencies, approval gates, and cross-domain handoffs | Company Markdown when scoped; Planner only with explicit approval |
| App | Reads App code/docs, schema/runtime surfaces, Planner/App records, and approved OLI specs | Proposes implementation boundaries, helper designs, readback, logs, fallback, and runtime safety | App code/runtime/schema only when scoped; live DB writes only with approval |
| Research | Reads Research docs/records, ecological graph candidates, evidence paths, and visual annotations | Proposes ecological corrections, claim labels, publicness/confidence changes | Research docs when scoped; canonical Research records only with approval |
| Content | Reads Content records/docs, source packets, scripts, media candidates, analytics summaries | Proposes packets, pull sheets, story links, calendar/pipeline changes, content interpretations | Content docs/drafts when scoped; calendar/pipeline writes only with approval |
| Web | Reads Web docs/code, public records, approved public graph outputs, website analytics | Proposes public route/copy/data-surface changes and analytics events | Web docs/code only when scoped; public behavior changes require approval |
| Growth | Reads Growth docs, approved CRM/analytics summaries, audience signals | Proposes relationship meaning, follow-up strategy, funnel questions | Growth docs when scoped; CRM/outreach/sponsor writes require approval |
| Brand | Reads Brand docs, approved public-language records, source context | Proposes wording, positioning, channel fit, sponsor-safe language | Brand docs/copy drafts when scoped; public commitments require approval |
| Financials | Reads Financials records only when scoped and aggregate summaries by default | Proposes cost thresholds, tool adoption gates, paid/free recommendations | Financials docs/records only through Financials approval |
| Hardware | Reads Hardware docs and telemetry when scoped | Proposes telemetry summaries, engineering context, live-system risk notes | Hardware docs when scoped; firmware/live-control/schema actions require approval |
| Raw Footage | Reads source-media routing, approved media references, candidate annotations | Proposes evidence/pull-sheet/metadata candidates | Media metadata/file changes only with explicit approval and owner review |

### Stage 1 Implementation Gates

Before any first export/import, Memgraph graph, vector index, analytics pull, visual AI batch, cache, or automation job:

1. Rerun task `409` as the implementation-grade Supabase schema/data audit gate.
2. Identify exact source rows, files, and private/public fields.
3. Name the domain owner and review owner for every exported family.
4. Define export files as rebuildable and local/ignored unless explicitly approved for commit.
5. Preserve source IDs, paths, publicness labels, confidence labels, and review status.
6. Produce a readback report with counts, missing IDs, sensitive-data exclusions, and drift warnings.
7. Keep Aquatic Club Talk Readiness protected as the near-term hard-window priority until Company deliberately reschedules OLI implementation work.

## Database And Platform Coverage Audit

| Database/platform | Accounted role | Current stance |
|---|---|---|
| Supabase/Postgres | Canonical structured records across Planner, Content, Research, Web/App, Growth, Financials, media, telemetry | Keep; do not replace |
| PostgreSQL + pgvector | Current Supabase-compatible retrieval path for embeddings near existing records | Preferred first vector path |
| Memgraph | Derived graph for relationships, provenance, agent routing, dependency reasoning | Selected graph pilot direction |
| Neo4j | Competing graph database option | Not selected for the first pilot because Memgraph better fits the current free/local-first posture |
| Supabase pgvector | First-pass vector retrieval close to existing Postgres data | Candidate before dedicated vector DB |
| TiDB/TiDB Cloud | Unified SQL, vector, and HTAP platform option | Deferred; not needed while Supabase remains canonical |
| Pinecone | Managed vector database for production RAG | Deferred unless pgvector/local retrieval becomes a bottleneck |
| Qdrant | Filtering-heavy vector search platform | Deferred; strongest dedicated vector candidate if metadata filters outgrow pgvector |
| Weaviate | Open-source hybrid vector/semantic search platform | Deferred unless hybrid semantic search becomes central |
| Milvus | Large-scale vector platform for very high embedding volume | Deferred; oversized for current scale |
| ChromaDB | Local/prototype vector database | Optional local experiment, but pgvector is cleaner for the shared system |
| MongoDB Atlas Vector Search | Document database plus vector search | Deferred; current canonical data is already relational/Supabase-first |
| DuckDB | Local analytics prototype for YouTube-first warehouse | Recommended first analytics prototype |
| MotherDuck | Cloud/collaborative DuckDB option | Optional later |
| BigQuery | Google-native analytics option for YouTube/GA-heavy workflows | Evaluate if Google integration wins |
| Databricks Lakehouse/Lakebase | Enterprise analytics, governance, sovereignty, and agentic data platform | Deferred; likely too heavy until enterprise-scale governance is needed |
| Azure Cosmos DB | Globally distributed document/memory database option | Deferred; useful only if Azure-native resilient memory becomes a requirement |
| Redis/cache | Runtime memory, locks, queues, temporary state | Deferred until automation needs it |
| Postgres telemetry tables | `telemetry_snapshot`, `biome_telemetry` | Keep; no separate TSDB yet |
| InfluxDB/Timescale sidecar | Possible future high-volume telemetry sidecar | Deferred until scale demands it |
| Local VLM/runtime | Visual media analysis and candidate annotations | Planned pilot only |
| Nemotron/Codex media pipeline | Local/private-first visual/video/audio analysis, candidate annotation generation, and clip pull-sheet orchestration | Selected first build path for visual media intelligence |
| Qwen media benchmark/fallback | Alternative visual/video analysis lane if Nemotron is unavailable, too costly, or underperforms on miniBIOTA's test set | Fallback/benchmark only, not the primary build path |
| Twelve Labs | Video-native cloud search, segmentation, embeddings, and structured analysis benchmark | Free-tier comparison after Nemotron/Codex pilot; no broad upload, paid plan, or backend adoption without approval |
| Local filesystem | Raw footage and non-git media source material | Keep as file source; do not duplicate blindly |
| YouTube APIs | Analytics/Reporting source for first warehouse | OAuth/API connection requires approval |
| Website analytics source | GA/server/export/QR metrics when approved | Later |
| Brain archive | Historical/provenance lookup | Not active operational database |
| YouTube Extraction | Retired historical extraction/import tool | Do not run unless reactivated |

## Live Supabase Schema Audit Result

The first read-only live Supabase schema audit on 2026-05-13 found:

| Live surface | Count/result |
|---|---:|
| Public-schema tables/views exposed through OpenAPI | 108 |
| Exposed RPC paths | 1 |
| Storage buckets | 2 |

The audit accounted for every exposed table/view in `domains/company/operation_living_intelligence_supabase_schema_audit_2026-05-13.md`.

Important deltas:

- CRM is broader than the initial planning subset and includes agent-run, recommendation, consent, campaign, segment, tag, interaction, relationship-fact, import, and audit tables. Keep CRM broad projection deferred until Growth/App privacy and commitment rules are approved.
- Financials includes `financial_documents`, `financial_entities`, `expense_classification_rules`, `statement_import_batches`, and `statement_transactions` in addition to the core finance tables. Keep Financials aggregate-only unless Financials approves more.
- Research includes `species_to_biomes`; use it as an explicit graph edge source.
- Web/App includes `system_logs`; do not broadly index it until public/private posture is confirmed.
- Planner/Company includes `strategic_initiatives` and `initiative_steps`; do not let those compete with Planner as active task truth.
- Storage buckets are `images` and `chronicles-images`; project references and metadata only.
- Exposed RPC is `/rpc/save_species_sighting_session`; treat it as an App/Research write boundary, not a projection read path.
- Planner task `409` now tracks the implementation-time schema and data audit gate before the first OLI export/import.

## Platform Decision Ledger

This ledger keeps the earlier database research from disappearing into broad categories.

| Platform | Keep in architecture? | Why |
|---|---|---|
| Supabase/Postgres | Yes, canonical | Already owns live structured records, Planner, app-facing workflows, public/admin data, and domain tables. |
| PostgreSQL + pgvector | Yes, first vector layer | Lowest-friction semantic retrieval because it stays close to Supabase/Postgres records. |
| Memgraph | Yes, first graph layer | Best current fit for local/free graph projection, relationship reasoning, and agent routing. |
| Neo4j | Watchlist | Strong graph option, but less aligned with the current free/local-first decision and the $65/month concern. |
| Financials task `406` graph cost review | Yes, cost gate | Stay no-cost and Memgraph-first; use Neo4j Aura Free only as bounded fallback/comparison after cloud-data approval; defer paid graph tooling until task `409`, manifests, rollback owner, and real free/local limitation exist. |
| Financials task `407` cost thresholds | Yes, cross-category approval gate | All category ceilings remain TBD; effective interim ceiling is $0 for new paid OLI tooling until Josue sets ceilings; paid/cloud/upload/account/install/write-capable actions require explicit approval. |
| Financials task `408` proven-job criteria | Yes, evidence threshold | Paid vector, analytics, cache/runtime, or automation tooling cannot reach Financials review until a recurring owner-backed job proves free/local/default options are insufficient and owner/benefit/rollback are defined. |
| Financials task `415` Twelve Labs cost threshold | Yes, cloud benchmark gate | No upload or benchmark approved now; Free still needs account/API/upload/privacy/deletion approval; paid Twelve Labs requires a completed Free benchmark that materially beats Nemotron/Codex for a named weekly job. |
| DuckDB | Yes, first analytics warehouse | Best local-first path for YouTube and website analytics files without committing to a cloud warehouse. |
| MotherDuck | Optional upgrade | Use if analytics needs cloud sharing, collaboration, or remote access. |
| BigQuery | Optional Google-native upgrade | Use if YouTube/Google Analytics integration becomes easier or more valuable there than DuckDB. |
| TiDB/TiDB Cloud | Watchlist | Interesting unified SQL/vector/HTAP option, but adopting it would duplicate or replace Supabase too early. |
| Pinecone | Watchlist | Strong managed vector DB, but paid managed retrieval is unnecessary until volume/latency require it. |
| Qdrant | Watchlist, likely best dedicated-vector fallback | Useful if metadata-filtered semantic search becomes hard in pgvector. |
| Weaviate | Watchlist | Useful if hybrid semantic/classic search becomes a core product capability. |
| Milvus | Watchlist | Intended for much larger vector scale than the current OLI pilot. |
| ChromaDB | Local experiment only | Good prototyping tool, but less appropriate as the shared durable retrieval layer. |
| MongoDB Atlas Vector Search | Watchlist | Useful for document-heavy systems, but miniBIOTA's current canonical model is relational and Supabase-backed. |
| Databricks Lakehouse/Lakebase | Enterprise later | Too heavy now; revisit for governance, data sovereignty, and multi-team analytics scale. |
| Azure Cosmos DB | Enterprise/cloud later | Revisit only if Azure-native distributed agent memory becomes a real operating need. |
| Redis | Later runtime utility | Useful for agent queues, locks, cache, and session memory after automation exists. |
| InfluxDB/Timescale | Later telemetry sidecar | Use only when biome telemetry frequency, retention, or query patterns outgrow Postgres rollups. |
| Local VLM runtime | Yes, pilot layer | Needed for visual review of video/image files, but outputs stay candidate annotations until reviewed. |
| Nemotron/Codex media pipeline | Yes, first visual-media build path | Codex should build the local/private pipeline while NVIDIA Nemotron 3 Nano Omni, or the best current Nemotron omni/video-capable deployment, produces candidate annotations, timestamps, story roles, and pull-sheet inputs. |
| Qwen media benchmark/fallback | Yes, fallback/benchmark lane | Keep Qwen available as a comparison or fallback option if Nemotron is unavailable, too costly, or weaker on the bounded media set. |
| Twelve Labs | Benchmark/refinement lane | Use the free tier after the Nemotron/Codex workflow exists to compare video-native search, segmentation, timestamping, embeddings, and structured metadata on the same bounded media set. Paid or ongoing use needs separate approval. |

## Memgraph Projection Scope

Memgraph should answer connected questions that Supabase and vector search alone do not answer well.

Initial Memgraph graph should be derived from canonical records and source paths. It should not become the place where species, content, media, Planner, or telemetry records are edited.

### Core Node Labels

| Label | Source | Key |
|---|---|---|
| `Species` | Supabase `species` | `species:<id>` |
| `Biome` | Supabase `biomes` | `biome:<id>` |
| `Biosphere` | Supabase `biosphere_profile` or static project node | `biosphere:miniBIOTA` |
| `Observation` | Supabase `observations` | `observation:<id>` |
| `StoryThread` | Supabase `story_threads` | `story_thread:<id>` |
| `OpenLoop` | Supabase `open_loops` | `open_loop:<id>` |
| `StoryBeat` | Supabase `story_beats` | `story_beat:<id>` |
| `ContentCalendarItem` | Supabase `content_calendar` | `content_calendar:<id>` |
| `ContentItem` | Supabase `content_pipeline` | `content_pipeline:<id>` |
| `Chronicle` | Supabase `chronicles` | `chronicle:<id>` |
| `EcosystemResource` | Supabase `ecosystem_resources` | `ecosystem_resource:<id>` |
| `EcosystemInteraction` | Supabase `ecosystem_interactions` | `ecosystem_interaction:<id>` |
| `MediaAsset` | Supabase `media_assets` | `media_asset:<id>` |
| `SourcePacket` | Markdown source packet path | `source_packet:<stable_slug>` |
| `ResearchReview` | Research brief path | `research_review:<stable_slug>` |
| `Claim` | Derived from source packet/Research review/proposed write bundles | `claim:<packet_slug>:<claim_slug>` |
| `PublicSurface` | Web route, species page, chronicle page, video URL, QR destination | `public_surface:<type>:<slug>` |
| `WorkProgram` | Supabase `work_programs` | `work_program:<id>` |
| `WorkProject` | Supabase `work_projects` | `work_project:<id>` |
| `Task` | Supabase `tasks` | `task:<id>` |
| `AgentDomain` | Company registry and domain reports | `domain:<key>` |
| `TelemetryWindow` | Derived rollup, not raw point by default | `telemetry_window:<biome_id>:<period>` |
| `AnalyticsMetric` | Warehouse metric row or summary | `analytics_metric:<source>:<grain>:<id>` |
| `Person` | CRM later, only after Growth approval | `crm_person:<id>` |
| `Organization` | CRM later, only after Growth approval | `crm_org:<id>` |
| `Opportunity` | CRM later, only after Growth approval | `crm_opportunity:<id>` |

### Core Relationship Types

| Relationship | Meaning | Source examples |
|---|---|---|
| `LIVES_IN` | Species belongs to or is associated with biome | `species.main_biome`, future normalized joins |
| `OBSERVED_IN` | Observation happened in biome | `observations.biome_id` |
| `OBSERVED_SPECIES` | Observation concerns species | `observations.species_id`, subject links |
| `MENTIONS_SPECIES` | Content/chronicle/claim mentions species | `chronicle_subject_links`, Content packets |
| `SUPPORTED_BY` | Claim/story/chronicle supported by source | observations, source packets, media, Research reviews |
| `CAPTURED_IN` | Species/biome/event shown in media | media link tables |
| `PUBLISHED_AS` | Calendar/story item became published pipeline/chronicle | `content_calendar`, `content_pipeline`, chronicles |
| `SOURCE_FOR` | Observation/packet/beat feeds content/calendar/claim | source-map join tables |
| `ADVANCES_LOOP` | Observation/beat/content advances open loop | `observation_loop_links`, `story_beat_loops` |
| `PART_OF_THREAD` | Observation/beat/content belongs to a story thread | `observation_thread_links`, `story_beat_threads` |
| `HAS_BEAT` | Thread/loop/content has story beat | `story_beats` links |
| `PUBLICLY_RENDERED_AS` | Internal record appears on website/video/public route | Web route/URL references |
| `HAS_CONFIDENCE` | Claim or interaction has confidence state | Research labels, ecosystem interactions |
| `HAS_PUBLICNESS_TIER` | Claim or data has public/internal/review state | Research/Content packet labels |
| `NEEDS_REVIEW_FROM` | Node or claim needs domain review | Company/domain routing |
| `OWNED_BY` | Record or system belongs to domain | Company registry/domain reports |
| `DEPENDS_ON` | Program/project/task dependency | Planner and Company docs |
| `BLOCKED_BY` | Project/task/claim is blocked by another record | Planner/docs |
| `MEASURED_BY` | Biome/system has telemetry rollup | `biome_telemetry` summaries |
| `PERFORMED_AS` | Content item has analytics metric | YouTube analytics warehouse |
| `RELATED_TO_CRM` | Content/event/person/opportunity link | CRM later after Growth approval |

### Memgraph Property Rules

Every node and relationship should carry enough provenance to rebuild and audit:

- `source_system`: `supabase`, `markdown`, `filesystem`, `youtube_api`, `analytics_export`, `derived`.
- `source_table` or `source_path`.
- `source_id` or stable path.
- `source_updated_at` when available.
- `imported_at`.
- `owner_domain`.
- `canonical_url` or public route if applicable.
- `publicness`: `public`, `internal`, `private`, `review`, `unknown`.
- `confidence`: `observed`, `inferred`, `suspected`, `reviewed`, `uncertain`, `unknown`.
- `derived_status`: `current`, `historical`, `potential`, `retired`, `stale`.

## Vector Projection Scope

Use Supabase/pgvector first unless App later proves a dedicated vector database is needed.

Vector search should retrieve likely relevant material. It should not decide truth. It should always return source paths or record IDs that an agent can cite and check.

| Vector corpus | Source | Chunk unit | Metadata required | Use |
|---|---|---|---|---|
| Company/domain memory | Markdown memory files | Heading section | repo, file path, heading, domain, last_updated | Operating context and routing |
| Source packets | Content audits/source packets | Claim/evidence section | packet id, file path, pipeline id, chronicle id, species ids | Living Atlas evidence lookup |
| Research reviews | Research briefs | Claim/risk section | file path, species ids, observation ids, uncertainty label | Claim safety and publicness |
| Scripts and packaging | Content project docs, packaging notes, pipeline descriptions | Script scene, description, CTA, title block | content id, platform, publish status | Style, continuity, public wording |
| Chronicles | Supabase `chronicles` or exports | Chronicle text | chronicle id, subject links, public route | Public history retrieval |
| Species public text | Supabase `species` public fields | Species record summary | species id, public status, confidence/display status | Species card drafting support |
| Media candidate captions | Visual AI outputs only after pilot | Asset or clip annotation | media id/path, model, reviewed status | Media discovery |
| Planner summaries | Derived from Planner only | Project/task summary | project id, task id, status, owner, date | Work context, not task truth |
| Prompt/tool patterns | Approved logs/summaries later | Session/incident summary | source path/log id, domain, risk level | Agent improvement |

## Analytics Warehouse Scope

Analytics should answer "what happened over time?" It should not replace Content calendar, CRM, Planner, or public website truth.

Start with YouTube first because Josue selected it as the first analytics lane.

### YouTube First

| Dataset | Source | Grain | Join keys | Agent questions |
|---|---|---|---|---|
| Video daily metrics | YouTube Analytics API or Reporting API | video/day | YouTube video id, date, content_pipeline id if matched | Which videos move views, watch time, subscribers, retention? |
| Traffic sources | YouTube Analytics/Reporting | video/source/day | video id, source, date | What discovery paths matter? |
| Geography/device/subscribed status | YouTube Analytics/Reporting | video/dimension/day or month | video id, date, dimension | Who is watching and how? |
| Audience retention | YouTube reports where available | video/elapsed time | video id | Where do people stay or drop? |
| Shorts platform URL map | Supabase `content_pipeline.platform_urls`, `published_url` | content item | YouTube video id | Connect performance to story identity |
| Topic/story classification | Supabase/Markdown derived | content item | content_pipeline id, thread ids, species ids | Which topics perform? |

Recommended first warehouse:

- Local DuckDB files for first prototype.
- MotherDuck only if cross-device collaboration, cloud access, or hosted dashboards become worth paying for.
- BigQuery only if Google-native integration becomes materially easier than DuckDB/MotherDuck.

### Later Analytics Sources

| Dataset | Source | Grain | Canonical owner | Notes |
|---|---|---|---|---|
| Website traffic | GA/export/server logs when approved | route/day/source | Web/Growth | Public tracking changes require approval |
| QR destination metrics | QR/link tracking when approved | destination/day | Growth/Web | Useful for talks and events |
| Newsletter/Substack | Export/API when approved | campaign/subscriber event | Content/Growth | Subscriber privacy rules needed |
| Social platform metrics | Platform exports | post/day/platform | Content/Growth/Brand | Do not treat metrics as content truth |
| CRM funnel summaries | CRM tables after live data exists | stage/week | Growth/App | Aggregate only; no inferred commitments |
| Agent telemetry | App/agent logs after workflow stabilizes | run/tool/error/day | App/Company | For agent reliability, not public metrics |
| Biome telemetry summaries | Supabase rollups | biome/hour/day | Hardware/App | Keep separate from audience analytics |
| Financial tool costs | Financials approved summaries | vendor/month | Financials | Only after Financials approval |

## Table-Level Projection Matrix

### Research And Ecology

| Source | Project to | Priority | Purpose | Writeback rule |
|---|---|---:|---|---|
| `species` | Memgraph `Species`, vector species summaries | 1 | Species state, public status, uncertainty, history | Research/App approval for species edits |
| `species_to_biomes` | Species -> Biome relationships | 1 | Explicit live species-biome graph edges | Research/App approval |
| `biomes` | Memgraph `Biome`, vector summaries, telemetry joins | 1 | Biome context and relationship graph scope | Research/Web/App approval |
| `biosphere_profile` | Memgraph `Biosphere`, vector summary | 3 | Whole-system context | Research/Web approval |
| `observations` | Memgraph `Observation`, vector note chunks | 1 | Evidence trails and event chronology | Research/Content approval |
| `observation_thread_links` | `Observation` -> `StoryThread` | 1 | Story/evidence routing | Content/Research approval |
| `observation_loop_links` | `Observation` -> `OpenLoop` | 1 | Audience-facing unresolved question tracking | Content/Research approval |
| `species_sighting_sessions` | Memgraph optional, analytics summaries optional | 4 | Field Observer evidence and date-last-seen context | App/Research approval |
| `species_sightings` | Memgraph optional, analytics summaries optional | 4 | Sighting history and reviewed seen/not-seen state | App/Research approval |
| `species_images` | Memgraph references, vector image metadata | 2 | Public proof image routing | App/Research/Web approval |
| `biome_images` | Memgraph references, vector metadata | 3 | Biome proof/public media context | App/Web approval |

### Content And Public History

| Source | Project to | Priority | Purpose | Writeback rule |
|---|---|---:|---|---|
| `story_threads` | Memgraph `StoryThread`, vector summaries | 1 | Internal story continuity | Content approval |
| `open_loops` | Memgraph `OpenLoop`, vector summaries | 1 | Unresolved public/story questions | Content approval |
| `story_beats` | Memgraph `StoryBeat`, vector summaries | 1 | Story-shaped turns between observations and content | Content/App approval |
| `story_beat_observations` | `StoryBeat` -> `Observation` | 1 | Evidence behind beats | Content approval |
| `story_beat_threads` | `StoryBeat` -> `StoryThread` | 1 | Beat-to-thread routing | Content approval |
| `story_beat_loops` | `StoryBeat` -> `OpenLoop` | 1 | Beat-to-loop routing | Content approval |
| `content_calendar` | Memgraph light nodes, analytics dimension, vector summaries | 2 | Planned/in-production identity without duplicating task truth | Content/App approval |
| `content_calendar_story_beats` | Calendar item -> beat | 2 | Source map for planned content | Content/App approval |
| `content_calendar_threads` | Calendar item -> thread | 2 | Source map for planned content | Content/App approval |
| `content_calendar_loops` | Calendar item -> loop | 2 | Source map for planned content | Content/App approval |
| `content_calendar_observations` | Calendar item -> observation | 2 | Source map for planned content | Content/App approval |
| `content_pipeline` | Memgraph `ContentItem`, vector text, analytics dimension | 1 | Published video/content history and URLs | Content approval |
| `chronicles` | Memgraph `Chronicle`, vector text, public route references | 1 | Public historical record | Content/Web/Research approval |
| `chronicle_subject_links` | Chronicle -> species/biome/system/biosphere | 1 | Public relationship routing | Content/Web/Research approval |
| Content project docs | Vector chunks, SourcePacket links | 1 | Script and source evidence retrieval | Content repo edits only when scoped |
| Living Atlas source packets | Memgraph `SourcePacket`, vector chunks, `Claim` nodes | 1 | Provenance and claim review | Content/Research approval for proposed writes |
| Task `395` retrievable source inventory | Dry-run manifest/source manifest input only | 1 | Bounded Lake Post-Seal source/material/media/hardware inventory for graph/vector/visual/analytics design | Docs-only; no graph import, vector ingestion, media annotation, App behavior, publication, Planner, or Supabase write |
| Task `396` source publicness/indexing plan | Classification gate for dry-run manifest | 1 | Source/material/feed labels, review owners, blocked public-use cases, and validation checks before any readback prototype | Docs-only; indexability is not public safety and no ingestion/public/App/write path is approved |
| Task `397` visual AI feasibility/backup-risk plan | Feasibility and storage-risk gate | 1 | Workstation assumptions, backup-drive gap, tiny-test constraints, candidate annotation fields, and approval gates | Docs-only; no model run, install, media scan, persistent derivative, upload, purchase, or media/App/Web/write path is approved |
| Task `398` small visual AI test set | Selected bounded candidate media set | 1 | Four exact file/timecode items for possible later no-write local/private feasibility testing | Docs-only; no model run, tool install, media operation, App/Web behavior, graph/vector activity, public use, purchase, or write path is approved |
| Task `399` candidate annotation review workflow | Review gate before metadata proposal | 1 | Required candidate fields, Raw Footage/Content/Research/App checks, rejection/correction path, readback requirements | Docs-only; candidate annotations stay noncanonical review material and no metadata/public/App/Web/graph/vector/write path is approved |
| Task `413` Nemotron/Codex and Twelve Labs media-set decision | Model-lane media-set boundary | 1 | Confirms task `398` four-item set for Nemotron/Codex and later same-set Twelve Labs benchmark only after cloud gates | Docs-only; no model run, upload, test-set expansion, media operation, App/Web behavior, purchase, public use, or write path is approved |
| Task `414` DaVinci pull-sheet and rough-sequence criteria | Review output-shape gate | 1 | Pull-sheet fields, rough-sequence criteria, story role/quality/usefulness/evidence caveat labels, and DaVinci boundary | Docs-only; no DaVinci edit, media operation, metadata/public/App/Web/graph/vector/write path is approved |

### Web And Public Relationship Graph

| Source | Project to | Priority | Purpose | Writeback rule |
|---|---|---:|---|---|
| `ecosystem_resources` | Memgraph `EcosystemResource` | 2 | Non-species graph resources such as detritus/biofilm | Web/Research approval |
| `ecosystem_interaction_types` | Memgraph relationship vocabulary | 2 | Controlled interaction language | Web/Research approval |
| `ecosystem_interactions` | Memgraph relationships and `EcosystemInteraction` nodes | 2 | Existing public food-web relationships | Web/Research approval |
| `systems` | Memgraph `System` or `PublicSurface` references, vector public docs | 3 | Engineering-system context and public proof routing | Web/App/Hardware approval |
| `announcements` | Analytics/vector summaries only | 5 | Public homepage/news announcement context | Web/Brand/Content approval |
| `email_signups` | Analytics aggregate only | 6 | Newsletter capture signal, not CRM by default | Web/Growth approval |
| `poll_votes` | Analytics aggregate only | 6 | Lightweight audience interest signal | Web/Growth approval |
| `species_images` | Memgraph media/public image references, vector metadata | 2 | Public species gallery and SEO/alt text context | App/Web/Research approval |
| `biome_images` | Memgraph media/public image references, vector metadata | 3 | Public biome hero/gallery context | App/Web approval |
| `chronicle_images` | Memgraph media/public image references, vector metadata | 3 | Public chronicle gallery context | App/Web/Content approval |
| Supabase Storage buckets `images`, `chronicles-images` | File references only, not graph payloads | 4 | Public image provenance and missing-image detection | App/Web approval |
| `chronicles_staging` | Do not project by default | 8 | Legacy/internal review queue only if redesigned | App/Web/Content approval |
| `system_logs` | Do not project broadly yet | 8 | Mixed public/system notes require public/private review before indexing | Web/App/Hardware approval |
| Site-owned static images and metadata | Vector/static asset metadata only | 5 | Public preview/social image context | Web approval |
| Public routes/spec docs | Memgraph `PublicSurface`, vector docs | 3 | Agent knows public rendering boundaries | Web repo edits only when scoped |
| News/events routes | Analytics/vector later | 5 | Public communications and event context | Web/Content/Growth approval |

### App Media And Local Files

| Source | Project to | Priority | Purpose | Writeback rule |
|---|---|---:|---|---|
| `media_assets` | Memgraph `MediaAsset`, vector metadata | 2 | Evidence lookup and media-to-claim routing | App approval |
| `media_species` | Media -> Species | 2 | Species proof media | App/Research approval |
| `media_biomes` | Media -> Biome | 2 | Biome proof media | App/Research approval |
| `media_systems` | Media -> System | 3 | Engineering/system proof media | App/Hardware/Web approval |
| `media_chronicles` | Media -> Chronicle | 2 | Public history proof assets | App/Content/Web approval |
| `media_tags`, `media_tag_links` | Media tag nodes/properties | 3 | Search/filter help | App approval |
| `media_projects`, `media_project_assets` | Media grouping nodes | 4 | Production/evidence project context | App/Content approval |
| Raw footage filesystem | Vector/visual AI candidate annotations | 4 | Find clips and images faster | Raw Footage/App/Content/Research approval before metadata writes |
| Visual AI outputs | Candidate `Claim`/annotation nodes, vector captions | 5 | Find evidence, never public proof by default | Review required before any canonical write |

### App Runtime, Admin, And Prompt Library

| Source | Project to | Priority | Purpose | Writeback rule |
|---|---|---:|---|---|
| `prompt_library` | Vector prompt/workflow index after App review | 5 | Reusable prompt retrieval and future workflow-template memory | App approval for create/edit/archive/favorite writes |
| Site Admin species/biome/chronicle/admin surfaces | Vector docs and ownership graph only | 3 | Agent knows App-owned admin write boundaries | App/Web/Research approval before records change |
| Monitoring runtime/MQTT display | Vector docs and Hardware/App boundary nodes | 4 | Agent understands App operator-only telemetry display | App/Hardware approval |
| App migrations | Vector/schema reference index | 3 | Agent can inspect intended schema history without live writes | App approval for migrations/schema changes |
| App storage/upload tooling | Vector docs and storage-surface nodes | 5 | Agent understands image upload/rollback risk | App/Web approval |
| Field Observer RPC `save_species_sighting_session(...)` | Vector docs; optional Memgraph sighting summary later | 6 | Agent understands sighting saves and `date_last_observed` update boundary | App/Research approval |

#### App Boundary Map For Task 386

Task `386` establishes the App boundary for Operation Living Intelligence before later App bridge, router, media-worker, or writeback design. This is a projection/readiness map only. It does not approve App implementation, helper creation, local services, secret changes, storage writes, media metadata writes, raw SQL, migrations, public behavior, or Planner/Supabase writes.

| Boundary | Canonical/App-owned surface | OLI projection/readiness use | Required approval before action |
|---|---|---|---|
| Planner runtime | `work_domains`, `work_projects`, `tasks`, `work_programs`, `work_program_projects` through App Planner/Supabase | Dependency graph, ownership map, blocker context, approved Program membership | Planner write approval for any create/edit/status/schedule/link/archive change |
| Supabase bridge | App-owned runtime bridge, MCP/read-only awareness, Company scoped helper for Company Planner records | Read-only source audit, source manifest, export query planning, readback design | App approval for helper/bridge changes; explicit approval for writes, raw SQL, schema, migration, service-role action |
| Media Library records | `media_assets`, media link tables, tags, media projects, review/status fields | Media references in graph, candidate proof routing, visual AI test-set planning | App/Content/Research approval before metadata write or review-state change |
| Raw media folder | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos` as the App indexing default | Boundary for local/private media test-set selection and evidence references | Approval before broad scan, reindex, move, model run, cloud upload, or persistent external index |
| Storage/upload | Supabase Storage buckets and App/Web upload/rollback tooling | File-reference provenance and missing-image analysis only | App/Web approval before upload, deletion, bucket policy change, public image behavior, or storage write |
| Secrets and credentials | Electron main-process services, local environment, ignored config, OAuth, or user-level tool settings | Connector requirement inventory and security checklist | App/security approval before new credential path; never commit keys or expose service-role credentials to renderer/browser code |
| Site Admin/admin workflows | App operator surfaces for species, biomes, chronicles, announcements, staging, and media | Future handoff points for curated graph/Atlas outputs | App/Web/Research/Brand approval before public/admin record or behavior change |
| Monitoring and telemetry display | App/operator MQTT and monitoring surfaces | Internal telemetry context for later analytics or graph planning | Hardware/App/Web approval before public telemetry, live-control, setpoint, MQTT, or schema changes |
| Prompt Library | `prompt_library` records and App prompt workflows | Future retrieval/workflow-template index after App review | App approval for create/edit/archive/favorite/restore writes |

Task `386` unlocks planning clarity for:

- Task `387`: read-only access patterns can use named App surfaces without expanding write authority.
- Task `388`: agent router/tool registry can route App-owned operations through App-approved bridges.
- Task `389`: visual-model worker planning can stay outside App runtime until explicitly approved.
- Task `390`: approval/readback rules can distinguish App runtime/schema/media/storage writes from derived OLI outputs.

#### Read-Only Access Pattern For Task 387

Task `387` defines how derived OLI layers should be queried during pilots. These access patterns are read-only designs. They do not approve installs, indexes, imports, exports, API connections, local services, App helpers, scheduled jobs, model runs, cloud uploads, or canonical writes.

| Layer | First read surface | Minimum query contract | Return with every result | Writeback boundary |
|---|---|---|---|---|
| Memgraph | Approved local/free graph built from a source manifest | Query by source ID/path, relationship type, owner, publicness, confidence, and review state | Source table/path/id, labels, edge type, graph build/version, validation query reference | Proposed corrections go to Research/Content/App/Company source owner; Memgraph stays derived |
| Vector retrieval | Approved corpus/index with chunk metadata | Query by semantic similarity plus source filters, publicness filters, owner filters, and version | Chunk text or summary, source path/id, score, corpus version, public/internal status | Text edits return to repo/domain owner; index refresh requires approval |
| Analytics | Approved exports/API reports loaded into DuckDB/MotherDuck or local files | Query by source, metric definition, date range, aggregation, and sample-size caveat | Metric name, source/export name, date range, aggregation logic, caveat | Reports may inform questions only; no sponsor/pricing/outreach/public/roadmap commitments |
| Media intelligence | Approved bounded test set and candidate annotation files | Query by file/asset reference, timestamp, candidate tag, species/object/event, and review status | Source file/asset id, timestamp, model/prompt version, confidence/uncertainty, review owner | Candidate annotations are not media metadata; writes need App/Content/Research approval |
| Agent router | Domain/source matrix plus App-owned bridge design | Choose canonical source first, then derived helper layer, then review owner | Route taken, sources skipped, approval need, proposed owner | No automated write or tool escalation beyond approved scope |

Read-only pilot invariants:

- Canonical source lookup comes before derived-layer trust.
- Every derived answer must carry provenance, owner, and confidence/publicness/review context where the source supports it.
- Derived layers may generate proposed-write bundles, but not canonical writes.
- Query logs/readback should show what source was read, what layer answered, and what approval would be required for action.
- A layer that cannot preserve source IDs, labels, and rebuildability is not ready for pilot use.

#### Agent Router And Tool Registry For Task 388

Task `388` turns the Stage 1 permission baseline and task `387` read-only pattern into a registry shape. This is still docs-only. It does not create tools, grant credentials, install MCP servers, expose App bridges, automate jobs, or authorize writes.

Tool registry minimum record:

| Field | Required value |
|---|---|
| Tool/layer name | Supabase Planner, Memgraph, vector index, analytics warehouse, Media Library, visual AI candidate files, App bridge, or future connector |
| Source role | Canonical, derived, temporary runtime, candidate review layer, or execution layer |
| Owning domain | Domain that owns meaning, implementation, or approval |
| Allowed agents | Which domain agents may read/query/request it |
| Allowed actions | Read, query, summarize, validate, propose, export-design, or approved write |
| Required input | Source id/path, task/project id, source manifest, corpus version, date range, media test set, approval note |
| Required output | Source/citation, owner, confidence/publicness/review labels, route taken, approval need, readback/validation note |
| Blocked by default | Canonical write, public behavior, cloud upload, schema/runtime change, paid service, automation, commitment, broad indexing |
| Approval gate | Human/domain approval needed before the blocked action can happen |

Initial routing table:

| Request family | Canonical first | Derived/helper second | Proposed output | Approval stop |
|---|---|---|---|---|
| Work status and dependencies | Planner/Supabase | Memgraph dependency graph later | Status, owner, blocker, proposed handoff | Planner writes |
| Ecology and claims | Research records/notes | Memgraph and vector source packets | Evidence path, caveat, review need | Research record/public claim writes |
| Content/story memory | Content records/docs | Vector and Memgraph story paths | Prior coverage, source packet, story continuity | Calendar/pipeline/publish writes |
| Media evidence | App Media Library/raw references | Memgraph media paths and visual AI candidates | Candidate assets, timestamps, review owners | Metadata writes, cloud upload, broad scan |
| Public website use | Web public records/docs | Public-surface graph and analytics | Public-readiness handoff | Public behavior/copy/tracking changes |
| Analytics | Approved exports/API reports | DuckDB/MotherDuck | Trend, caveat, question list | Sponsor/pricing/outreach/roadmap commitments |
| Cost/tool adoption | Financials summaries and OLI cost posture | Tool comparison notes | Cost threshold, benefit, rollback need | Spend/subscription commitment |
| Runtime/tooling | App docs/code/runtime notes | Router registry and source manifests | App implementation handoff | App code/schema/runtime/helper/secret/storage change |
| Visual AI | Approved test-set plan | Candidate annotations | Candidate tags, pull sheet, uncertainty | Model run, media write, cloud upload, publication |

Router invariants:

- The router must name the route it took and the route it refused or deferred.
- The router must surface omitted layers when a query cannot safely use them yet.
- The router may recommend an owner or approval path, but it may not manufacture authority.
- The router must preserve current/planned/proposed/aspirational separation.
- The router should prefer the narrowest sufficient source set.
- Future App implementation should expose registry-backed tools through App-approved bridges only.

#### Local Visual-Model Worker Boundary For Task 389

Task `389` defines the projection boundary for a local/private visual-model worker. It is a file-based sidecar design, not an App runtime change. It does not approve model installation, dependency installation, media processing, cloud upload, App worker code, storage writes, media metadata writes, or publication.

Worker posture:

| Boundary | Task 389 design value | Not approved |
|---|---|---|
| Input | Approved file/asset manifest for a bounded test set | Broad raw-folder scan, reindex, file move, or cloud upload |
| Processing | Nemotron/Codex-first candidate analysis design | Model install/download/run or GPU/runtime setup |
| Fallback | Qwen-style local model lane retained as fallback/benchmark | Treating Qwen as primary or permanent commitment |
| Cloud benchmark | Twelve Labs later on the same bounded set after local/private workflow exists | Persistent cloud index, paid plan, broad upload, or backend adoption |
| Output | Candidate JSON/JSONL, Markdown notes, and pull-sheet drafts | Canonical `media_assets`, tags, captions, storage records, or public claims |
| Review | Content story usefulness, Research ecological claim safety, App metadata/runtime boundary | Unreviewed model output becoming truth |

Candidate annotation minimum fields:

| Field | Required? | Notes |
|---|---:|---|
| `source_ref` | Yes | Local file path or approved App media asset reference |
| `time_start`, `time_end` | For video | Timestamp range when known |
| `description` | Yes | Plain-language visual/audio description |
| `candidate_labels` | Yes | Species, object, event, behavior, system, or story tags |
| `story_role` | Preferred | Evidence, context, transition, beauty shot, tension, Q&A support, close |
| `claim_support_type` | Preferred | What claim the media may support |
| `confidence` | Yes | Include uncertainty and model limitations |
| `publicness` | Yes | Internal, review-needed, or public-candidate |
| `review_owner` | Yes | Content, Research, App, Web, or Raw Footage |
| `model_route` | Yes | Nemotron, Qwen fallback, Twelve Labs benchmark, manual |
| `model_version`, `prompt_version`, `generated_at` | After approved run | Required when real model outputs exist |

Readback expectations for any future approved run:

- Count input files/clips processed and skipped.
- List model route, model version, prompt version, and runtime path.
- List output files created.
- List candidate labels requiring Research review.
- List candidate clips requiring Content review.
- List any file that failed, timed out, or was excluded.
- Confirm no App media metadata, Storage record, public site record, or canonical source was written.

#### App Approval And Readback Requirements For Task 390

Task `390` is the hard stop between derived OLI outputs and App-owned implementation/write paths. Any future App schema, runtime, helper, bridge, storage, media metadata, automation, or canonical writeback path needs an explicit approval packet and immediate readback. This section does not approve any of those actions.

Approval packet minimum:

| Requirement | Minimum detail |
|---|---|
| Proposed action | Read-only query, export, candidate file creation, schema change, runtime/helper change, media metadata write, storage write, Planner write, public behavior change, or automation |
| Owner approvals | App plus affected domain owners such as Content, Research, Web, Raw Footage, Growth, Financials, or Company |
| Source inputs | Exact source rows, file paths, media asset ids, source manifest, corpus version, model output, graph result, vector result, or analytics export |
| Write target | Exact table/field, file/path, bucket/object, route, helper, worker, or runtime surface |
| Scope | One row/file, bounded batch, one-off run, recurring job, migration, or delegated workflow |
| Safety labels | Public/private, confidence, review status, credential, cost, security, and source-of-truth implications |
| Validation/readback | Exact rows/files/routes/logs/objects to inspect after action |
| Rollback/fallback | How to undo, ignore, rebuild, or return to current App/Supabase/Markdown behavior |

Readback matrix:

| Action class | Required readback |
|---|---|
| Schema/migration | Migration status, affected tables/columns/indexes/policies, schema inspection or sample query |
| Runtime/helper/bridge | Route exercised, logs/output, proof of intended read/write scope |
| Media metadata | Before/after row summary, changed tags/links/status fields, review owner confirmation |
| Storage | Bucket/object path, access posture, upload/delete result, rollback path |
| Candidate annotation file | Output path, schema check, model/prompt version, processed/skipped/error counts |
| Planner/task write | Row id, status/date/link fields, completed/archive fields if changed, approval note |
| Public behavior | Route/copy/event verification and public/private claim review where relevant |
| Paid/API/OAuth | Cost boundary, credential location, retention/privacy note, no secret exposure |
| Automation | Run log, source read list, output list, skipped/error list, proof of no unapproved writes |

Default no-write rule:

- Graph, vector, analytics, visual AI, and router outputs may propose.
- They do not write App/Supabase/Web/Storage/Planner records unless the approval packet explicitly authorizes that target and the readback confirms it.

### Planner And Operations

| Source | Project to | Priority | Purpose | Writeback rule |
|---|---|---:|---|---|
| `work_domains` | Memgraph `AgentDomain` | 1 | Domain ownership and routing | App/Company approval for changes |
| `work_projects` | Memgraph `WorkProject`, analytics snapshots | 1 | Project dependency and ownership map | Planner write approval |
| `tasks` | Memgraph `Task`, vector task summaries if useful | 1 | Blockers, sequencing, "who needs what" | Planner write approval |
| `work_programs` | Memgraph `WorkProgram` | 1 | Cross-domain program context | Planner write approval |
| `work_program_projects` | Program -> Project relationships | 1 | Program membership/dependencies | Planner write approval |
| `task_completions` | Analytics snapshots | 4 | Completion cadence and workload review | Planner/App approval |
| `strategic_initiatives` | Defer or vector only with Company approval | 8 | Legacy/strategy records should not become active roadmap commitments | Company approval |
| `initiative_steps` | Defer or vector only with Company approval | 8 | Initiative steps should not compete with Planner task truth | Company approval |
| Company/domain briefs | Vector chunks, domain nodes | 1 | Agent routing and durable current state | Markdown edits scoped by repo |

### Hardware And Telemetry

| Source | Project to | Priority | Purpose | Writeback rule |
|---|---|---:|---|---|
| `telemetry_snapshot` | Current-state summary, Web public surface references | 3 | Public-safe current monitoring | Hardware/App/Web approval |
| `biome_telemetry` | Rollups, `TelemetryWindow` nodes, analytics summaries | 4 | Climate/control analysis without a new TSDB | Hardware/App approval |
| MQTT topic map docs | Vector chunks, Hardware system nodes | 4 | Agent understands live-control boundary | Hardware approval for changes |
| `setpoint_commands` future | Do not project until approved | 9 | Future command queue awareness | Explicit live-control/schema approval |

### Growth, CRM, And Commercial Relationships

| Source | Project to | Priority | Purpose | Writeback rule |
|---|---|---:|---|---|
| `partner_opportunities` | Analytics summaries, optional Memgraph later | 6 | Opportunity context after Growth review | Growth approval |
| `crm_contacts`, `crm_activities` | Do not project broadly yet | 7 | Legacy CRM is empty as of latest Growth memory | Growth/App approval |
| CRM privacy/control tables: `crm_consents`, `crm_audit_events`, `crm_import_batches`, `crm_external_sources` | Compliance/provenance reference only | 9 | Privacy, audit, and import metadata should not become broad agent memory | Growth/App approval |
| CRM campaign/segment tables: `crm_campaigns`, `crm_campaign_members`, `crm_segments`, `crm_segment_members` | Aggregate analytics only after approval | 8 | Campaign and segment membership can be sensitive | Growth/App approval |
| CRM agent tables: `crm_agent_runs`, `crm_agent_recommendations` | Agent reliability analytics only after policy | 9 | Agent-suggested relationship actions need explicit review gates | Growth/App/Company approval |
| CRM contact-detail tables: `crm_addresses`, `crm_contact_methods`, `crm_contact_links` | Do not project broadly | 9 | Contact details are sensitive | Growth/App approval |
| `crm_people` | Memgraph later | 7 | Person relationship graph after live data exists | Growth/App approval |
| `crm_organizations` | Memgraph later | 7 | Organization relationship graph | Growth/App approval |
| `crm_person_organizations` | Person -> organization | 7 | Relationship structure | Growth/App approval |
| `crm_opportunities` | Opportunity graph/analytics later | 7 | Relationship pipeline reasoning | Growth/App approval |
| CRM opportunity/interaction join tables | Relationship graph later only after policy | 8 | Includes opportunity/person/org/tag and interaction/person/org/opportunity edges | Growth/App approval |
| `crm_interactions` | Vector summaries only with privacy rules | 8 | Interaction history and next-action context | Growth/App approval |
| CRM vocabulary tables: `crm_tags`, `crm_person_tags`, `crm_organization_tags`, `crm_opportunity_tags`, `crm_pipeline_stages`, `crm_pipelines` | Reference metadata later | 8 | Tag/pipeline vocabulary can shape agents after privacy policy exists | Growth/App approval |
| `crm_relationship_facts`, `crm_referrals`, `crm_assets`, `crm_decisions` | Defer broad projection | 9 | Relationship facts, referrals, assets, and commercial decisions are sensitive | Growth/App approval |
| `crm_tasks`, `crm_next_actions`, related tables | Planner/CRM routing later | 8 | Follow-up context without commitments | Growth/App approval |

### Financials

| Source | Project to | Priority | Purpose | Writeback rule |
|---|---|---:|---|---|
| `operating_expenses` | Aggregated cost summaries only | 8 | Tool cost review and runway-aware decisions | Financials approval |
| `liabilities` | Do not project broadly | 9 | Sensitive finance context | Financials approval |
| `revenue_streams` | Aggregated summaries only | 8 | Revenue context | Financials approval |
| `planned_purchases` | Aggregated subscription decision context | 6 | OLI paid-tool review | Financials approval |
| `monthly_financial_closes` | Status summaries only | 8 | Finance-readiness context | Financials approval |
| `cash_receipts` | Aggregated monthly revenue/cash summaries only | 9 | Cash receipt context when Financials approves | Financials approval |
| `expense_transactions` | Aggregated vendor/category/tool-cost summaries only | 8 | Actual tool spend and recurring/nonrecurring cost review | Financials approval |
| `liability_snapshots` | Do not project broadly; aggregate debt trend only if approved | 9 | Debt trend context | Financials approval |
| `account_balance_snapshots` | Do not project broadly; runway summary only if approved | 9 | Cash/runway context | Financials approval |
| `financial_accounts` | Do not project broadly | 9 | Account catalog is sensitive operational finance context | Financials approval |
| `mileage_log` | Aggregated field/content trip summaries only if approved | 9 | Field work/content cost context | Financials approval |
| `financial_documents` | Do not project by default | 9 | Source documents are sensitive and require secure-storage policy | Financials approval |
| `financial_entities` | Do not project broadly | 9 | Entity/accounting context is sensitive | Financials approval |
| `expense_classification_rules` | Reference only after approval | 9 | Classification rules can expose finance workflow assumptions | Financials approval |
| `statement_import_batches` | Audit/provenance only | 9 | Statement import metadata should stay Finance-owned | Financials approval |
| `statement_transactions` | Do not project broadly | 9 | Statement rows are sensitive | Financials approval |
| Statement reconciliation tables/files | Do not project by default | 9 | Mixed-entity statements and source documents are sensitive | Financials approval and secure-storage policy |

### Brand, Definitions, Brain, And External Tools

| Source | Project to | Priority | Purpose | Writeback rule |
|---|---|---:|---|---|
| Brand memory/skills | Vector messaging corpus, `AgentDomain` nodes | 2 | Public-language, channel, and audience-fit retrieval | Brand repo edits only when scoped |
| Brand Planner tasks | Memgraph Planner/dependency projection | 2 | Brand work ownership and blockers | Planner approval |
| Public channel references | Analytics/vector summaries after source approval | 6 | Channel strategy and distribution context | Brand/Content/Growth approval |
| Sponsor-safe language notes | Vector corpus with high caution labels | 4 | Prevent accidental sponsor/commitment claims | Brand/Growth/Company approval |
| Definitions glossary | Vector vocabulary corpus, optional `Term` nodes | 3 | Shared language and current-vs-planned term discipline | Company/domains approval |
| Domain-specific terminology extensions | Vector glossary corpus | 5 | Prevent cross-domain term drift | Owning domain approval |
| Brain archive/provenance | Archive vector index only if scoped | 8 | Historical lookup and transition provenance | No active writes; archive rules apply |
| Company exports | Vector broad-context corpus | 3 | Cold-start and cross-domain context retrieval | Company export tooling approval |
| YouTube_Extraction retired tool | Archive reference only | 9 | Historical import/transcript context | Do not run or import unless explicitly reactivated |

## Implementation Waves

### Wave 0: Projection Contract

Purpose:

- Define export shape, IDs, provenance, source ownership, and validation before data movement.

Deliverables:

- This matrix.
- Export manifest template.
- Memgraph node/relationship naming convention.
- Source ID preservation rule.
- Publicness/confidence property standard.
- Drift-check checklist.

No live writes.

### Wave 1: Living Atlas Graph Seed

Purpose:

- Prove Memgraph value with Lake Post-Seal/pipeline 338/chronicle 30.
- Keep the first graph seed rebuildable, narrow, and review-safe before any larger Living Atlas graph expansion.

Data:

- `species`: Flagfish `24`, Ghost Shrimp `67`, Freshwater amphipods `66`, Daphnia `164`, Mesostoma `167`, Moina `180`, related organisms as scoped.
- `content_pipeline.id = 338`.
- `chronicles.id = 30`.
- Observations `170-178` and approved later context observations.
- Relevant story threads/open loops.
- Source packet and Research validation briefs.
- Media references only as references, not canonical media writes.

Success:

- Agents can answer evidence-path questions with source IDs and caveats.
- Research uncertainty survives import.
- No publicness flattening.
- The graph can be rebuilt from export files.

Research ontology source:

- `M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-task-391-graph-ontology.md`
- `M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-task-392-lake-post-seal-graph-candidates.md`
- `M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-task-393-graph-path-safety.md`
- `M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-task-394-stage-3-pilot-question-evaluation.md`

Research task `391` defines the first Research-owned ontology for this wave. The graph is a derived evidence/review graph, not canonical ecology. Use the Research brief as the detailed authority for node classes, edge types, claim gates, publicness tiers, confidence labels, observed-vs-inferred separation, and review ownership.

Research task `392` applies that ontology to the Lake Post-Seal packet as candidate graph nodes and relationships. Use the task `392` brief as the detailed source for graph-candidate IDs, candidate edges, blocked edges, source IDs, provenance references, media candidate handling, and validation questions before import.

Research task `393` defines graph path safety. Use the task `393` brief as the detailed source for path-level provenance, confidence floors, publicness floors, review floors, observed/inferred/proposed/approved status handling, query/readback checks, and failure cases where traversal could overstate evidence.

Research task `394` evaluates the 10 Stage 3 pilot questions. It records an 8/10 pass result and recommends continuing only to a no-write, derived-only dry-run/readback prototype or another docs-only design pass. It does not approve live graph import, App behavior, public rendering, or canonical writes.

Minimum Research ontology requirements from task `391`:

| Requirement | Task 391 direction |
|---|---|
| Seed wrapper | Use `GraphSeed` to enforce the bounded source set and derived-only write policy |
| Evidence sources | Use `SourcePacket` and `CanonicalRecord` references so every node and edge points back to source docs or source records |
| Ecological/context nodes | Use `Species`, `Biome`, `Observation`, and `Event` without turning the graph into canonical ecology |
| Claim safety | Use `Claim`, `PublicnessTier`, `ConfidenceAssessment`, and `ReviewGate` to keep publicness, confidence, uncertainty, and review status queryable |
| Media proof | Use `Media` as proof references only; media captions and organism IDs remain review-gated |
| Overclaim blocks | Keep Daphnia species-level ID/establishment, Ghost Shrimp juvenile recruitment, Mesostoma public use, Moina establishment, water-clearing causation, food-web completion, stability, chronology edits, and sensitive media captions behind Research review |
| Exclusions | Do not add global records, whole ecosystem graph, unapproved observations, unreviewed media claims, story-thread/open-loop first-class nodes, or canonical links that have only packet-association evidence |

Minimum candidate-relationship requirements from task `392`:

| Requirement | Task 392 direction |
|---|---|
| Candidate status | All candidate nodes/edges are `derived_only = true` and `candidate_status = candidate_not_imported` |
| Provenance | Use source IDs such as `SRC_PACKET_338`, `SRC_RESEARCH_VALIDATION`, `SRC_LINK_VERIFY`, and `SRC_MEDIA_PACKET` on every candidate node/edge |
| Candidate source set | Keep observations to `170-178`; exclude later observations unless explicitly approved as context |
| Biome context | Freshwater Lake biome `1` can be represented only as a source-context pointer until import inclusion is approved |
| Strongest edge families | Prioritize provenance, evidence, review-gate, publicness/confidence, media-candidate, and context-vs-proof edges |
| Blocked edges | Preserve blocked overclaim edges as guardrails for Daphnia, Ghost Shrimp, Mesostoma, Moina, lake clearing, food-web completion, stability, chronology, media captions, and direct canonical observation links |
| Import checks | Require frozen source versions/checksums, no-write dry run, delete/regenerate path, publicness filtering, and explicit approval before any candidate edge becomes canonical, public, or app-visible |

Minimum path-safety requirements from task `393`:

| Requirement | Task 393 direction |
|---|---|
| Path wrapper | Return `path_query_purpose`, nodes, edges, sources, evidence bases, confidence/publicness/review floors, observed/inferred/proposed mix, blockers, required reviews, safe readback, and do-not-say guardrails |
| Confidence floor | Traversal cannot upgrade confidence; the most restrictive relevant confidence controls the path |
| Publicness floor | Publicness can only narrow; internal/raw/blocked/proposed/review-required path elements block public output |
| Edge semantics | `CONTEXT_FOR`, `QUALIFIES_CLAIM`, `REQUIRES_REVIEW`, and `BLOCKS_PUBLIC_USE_OF` cannot be treated as proof/support edges |
| Review gates | Unresolved gates stop both public output and import readiness |
| Query safety | Public-output and import-readiness queries must fail closed and show blockers instead of silently dropping them |
| Readback | Every path must produce a safe readback sentence weaker than or equal to the weakest path element |

Stage 3 evaluation result from task `394`:

| Evaluation item | Result |
|---|---|
| Pass count | `8 / 10` |
| Continue? | Yes, but only as no-write/derived-only dry-run/readback or another docs-only design pass |
| Strongest graph value | Claim safety, source provenance, observed-vs-inferred separation, review gates, species caveats, structured-write boundaries, and media-candidate boundaries |
| Weak area 1 | Public surface/content reuse mapping is under-modeled |
| Weak area 2 | Speed improvement is plausible but unproven until a no-write dry-run/query readback exists |
| Stop before | Live graph import, App behavior, public rendering, canonical writes, media metadata writes, or source-of-truth changes |

Stage 3 pilot acceptance:

| Acceptance check | Required result |
|---|---|
| Source manifest | Lists every included Supabase row, Markdown path, media reference, and excluded sensitive/private field |
| Included scope | Stays limited to the Lake Post-Seal packet, `content_pipeline.id = 338`, `chronicles.id = 30`, species `24`, `67`, `66`, `164`, `167`, `180`, observations `170-178`, and explicitly approved context records |
| Required nodes | Includes `Species`, `Observation`, `ContentItem`, `Chronicle`, `SourcePacket`, `ResearchReview`, `Claim`, and media reference nodes when evidence exists |
| Required relationships | Includes source/provenance, species mention, observation, support, review, owner, confidence, and publicness edges |
| Query evaluation | Answers at least 7 of the 10 Stage 3 pilot questions more clearly than Markdown/Supabase lookup alone |
| Publicness/confidence | Every claim-like path exposes public/internal/review and observed/inferred/uncertain state |
| Canonical writeback | Produces proposed-write notes only; no canonical Supabase, media, Web, Planner, or Markdown write happens from the graph |
| Rebuild test | Graph can be dropped and rebuilt from export files without losing truth |
| Owner routing | Output names Research, Content, Web, App, and Company review needs where relevant |

Stage 3 gates before import:

1. Complete implementation-grade audit task `409` for exact source rows, fields, row counts, sample records, quality caveats, and export queries.
2. Confirm the local/App-approved Memgraph run pattern and where ignored export/import files will live.
3. Define validation queries for node count, edge endpoint validity, missing source IDs, publicness/confidence presence, and sensitive-field exclusion.
4. Confirm Research and Content review owners for claim/story interpretation.
5. Keep Web as downstream review only until curated graph outputs exist.
6. Keep Financials review available before any paid graph service is considered.

### Wave 2: Content Story Graph

Purpose:

- Make agents better at "what story is this part of?" and "what content already exists?"

Data:

- `story_threads`, `open_loops`, `story_beats`.
- Beat/thread/loop/observation joins.
- Published `content_pipeline`.
- `chronicles` and subject links.
- `content_calendar` only as planned/in-production identity and source-map context.

Success:

- Content agent can retrieve story continuity without confusing planned content, published content, and public history.

### Wave 3: Species And Public History Expansion

Purpose:

- Expand from one packet to species/biome public history.

Data:

- Species cards and statuses.
- Biome profiles.
- Chronicles and subject links.
- Existing Web ecosystem relationship rows.
- Research claim labels.

Success:

- Agent can answer "what can we safely say publicly about this species and why?"

### Wave 4: YouTube Analytics Warehouse

Purpose:

- Start analytics with YouTube as selected.

Data:

- YouTube Analytics targeted reports or Reporting API bulk reports.
- `content_pipeline` video identity and published URLs.
- Topic/story/species/biome tags from Content/Research projections.

Success:

- Agent can produce weekly/monthly video performance summaries joined to content identity.
- Analytics stays separate from content calendar and content truth.

### Wave 5: Retrieval Layer

Purpose:

- Improve agent recall over notes, packets, scripts, and briefs.

Data:

- Company/domain memory.
- Source packets.
- Research reviews.
- Content scripts/packaging.
- Chronicles/species summaries.

Success:

- Search results cite source paths and IDs.
- Vector retrieval does not replace graph reasoning or canonical reads.

### Wave 6: Media And Visual AI Readiness

Purpose:

- Let agents visually inspect media in a review-safe way.
- Build a miniBIOTA-owned Nemotron/Codex workflow before deciding whether any cloud video platform should become operational infrastructure.

Data:

- Small selected media set from App media library/raw folder.
- Existing `media_assets` references.
- Candidate model annotations from NVIDIA Nemotron 3 Nano Omni or the best current Nemotron omni/video-capable deployment.
- Optional Qwen fallback/benchmark annotations if needed.
- Optional Twelve Labs free-tier benchmark outputs after the Nemotron/Codex run, using the same bounded media set and only after cloud-upload approval for those files.

Nemotron implementation notes:

- Current public NVIDIA material positions Nemotron 3 Nano Omni as an omni/multimodal reasoning lane for image, video, audio, and text workflows.
- Candidate deployment paths include hosted/API access, NVIDIA NIM, Hugging Face weights, and local inference stacks when hardware and storage are sufficient.
- The first implementation should verify current model availability, license/commercial terms, GPU/storage requirements, input limits, cost, privacy/retention terms, and whether the chosen route actually supports the required video/audio inputs.
- Hosted/API testing should use only an explicitly approved bounded media set; broad raw-media upload, persistent external indexing, or paid recurring use remains outside this wave unless separately approved.

Success:

- Candidate annotations help find proof faster.
- Outputs are labeled model-generated and do not write canonical media metadata.
- The Nemotron/Codex run produces candidate JSON/JSONL annotations with file path, timestamps, description, candidate tags/species, story role, claim-support type, confidence, model/prompt version, and review owner.
- The agent can generate at least one useful clip pull sheet or rough sequence for Content review.
- The Twelve Labs comparison, if run, clarifies whether video-native cloud search materially improves recall, timestamp precision, segmentation, or editing usefulness.

Planner follow-up:

- Approved tasks `411` through `415` cover Company governance gates, App sidecar/pipeline boundaries, Content test-set and pull-sheet review criteria, and Financials review of Twelve Labs free-tier limits and paid-plan thresholds.

### Wave 7: Planner And Agent Routing Graph

Purpose:

- Help agents route work like a cross-domain team.

Data:

- `work_domains`, `work_projects`, `tasks`, `work_programs`, links.
- Company registry and domain reports.

Success:

- Agent can answer "who owns this, what is blocked, and what needs approval?" without writing Planner records.

### Wave 8: Telemetry Summaries

Purpose:

- Add climate/control context without introducing a new time-series database.

Data:

- `telemetry_snapshot`.
- `biome_telemetry` rollups by biome/hour/day.

Success:

- Agent can reason over current vs historical climate behavior while preserving Hardware/App/Web public/private boundaries.

### Wave 9: CRM, Financials, And Sensitive Domains

Purpose:

- Add commercial and finance context only after those systems are ready and policies exist.

Data:

- CRM relationship data only after Growth approves live use and privacy/commitment boundaries.
- Financial summaries only after Financials approves safe aggregation.

Success:

- Agents get enough context for decisions without exposing sensitive raw financial/relationship records broadly.

## Export And Import Strategy

First implementation should be file-based and rebuildable:

```text
Supabase / Markdown / filesystem
        |
        v
read-only exports with provenance
        |
        v
CSV or Parquet staging files
        |
        v
Memgraph / pgvector / DuckDB projections
        |
        v
agent queries, summaries, proposed-write bundles
```

Recommended export file families:

| Export | Format | Target |
|---|---|---|
| `nodes_species.csv` | CSV | Memgraph |
| `nodes_biomes.csv` | CSV | Memgraph |
| `nodes_observations.csv` | CSV | Memgraph/vector |
| `nodes_content_items.csv` | CSV | Memgraph/analytics |
| `nodes_chronicles.csv` | CSV | Memgraph/vector |
| `nodes_media_assets.csv` | CSV | Memgraph |
| `nodes_work_items.csv` | CSV | Memgraph |
| `edges_ecology.csv` | CSV | Memgraph |
| `edges_content_story.csv` | CSV | Memgraph |
| `edges_media_evidence.csv` | CSV | Memgraph |
| `edges_program_dependencies.csv` | CSV | Memgraph |
| `documents_vector.jsonl` | JSONL | pgvector embedding job |
| `media_ai_candidates.jsonl` | JSONL | Nemotron/Codex visual AI pilot, optional Qwen benchmark, optional vector search |
| `media_clip_pull_sheets.jsonl` | JSONL | Content/DaVinci review workflow |
| `youtube_daily_metrics.parquet` | Parquet | DuckDB/MotherDuck |
| `telemetry_rollups.parquet` | Parquet | DuckDB optional, Memgraph summaries |

Memgraph import posture:

- Create indexes before bulk import.
- Use stable unique IDs like `species:24` rather than raw numeric IDs alone.
- Load nodes first, then relationships.
- Keep import files under an ignored local data folder or App-owned export path, not committed if they include private data.
- Commit only schema/spec/docs unless Josue explicitly approves sample export fixtures.

## Validation And Drift Checks

Every projection run should produce a readback report:

| Check | Required result |
|---|---|
| Source row counts | Export counts match intended source query counts |
| Node uniqueness | No duplicate `global_id` values |
| Relationship endpoint validity | Every edge source and target node exists |
| Canonical source preservation | Every derived node has source table/path and source id/path |
| Publicness/confidence presence | Claims and public-facing facts have labels |
| Sensitive data exclusion | Financial/CRM/raw private fields excluded unless approved |
| Planner status warning | Derived Planner graph does not become task truth |
| Media review warning | Visual AI outputs remain candidate annotations |
| Stale source detection | Missing or archived canonical records are flagged |
| Rebuild test | Projection can be deleted and recreated from source exports |

## Agent Routing Model

When an agent gets a question, it should route like this:

| User question type | First read | Then read | Do not do by default |
|---|---|---|---|
| "What species are connected to this event?" | Memgraph | Supabase/Research source IDs | Edit species records |
| "What should I say publicly?" | Research reviews, Content/Web publicness rules | Memgraph evidence paths, vector source packets | Publish or change public copy |
| "What content has covered this?" | Memgraph `ContentItem`/Chronicle paths | Supabase `content_pipeline`, vector scripts | Create new pipeline/calendar rows |
| "What media proves this?" | Memgraph media links | App media library/raw folder, visual AI annotations | Write media tags/captions |
| "What should I work on next?" | Planner/Supabase current records | Memgraph dependencies, Company priorities | Change Planner without approval |
| "How is YouTube doing?" | Analytics warehouse | `content_pipeline` identities and topics | Change content strategy as commitment |
| "Is the biome stable?" | Supabase telemetry/current Hardware docs | Telemetry rollups | Send setpoints or live commands |
| "Who should we follow up with?" | CRM/Growth only after approved data exists | Planner and Growth memory | Outreach or commitments |
| "Can we afford this tool?" | Financials approved summaries | OLI cost posture | Subscribe or commit spending |

## What Makes Agent Use More Beneficial

The biggest improvement is not that agents can search more data. It is that agents can see relationships with proof.

Examples:

1. Species reasoning:
   - Ask: "What is the strongest public-safe Daphnia story?"
   - Agent uses Memgraph to traverse Daphnia -> observations -> open loops -> content pipeline -> chronicle -> Research review -> publicness label.
   - Agent returns a cautious answer with evidence and unresolved ID/establishment limits.

2. Content planning:
   - Ask: "Have we already told this story?"
   - Agent checks content pipeline, chronicles, story beats, and YouTube performance.
   - Agent distinguishes published content from planned calendar work and old project docs.

3. Media proof:
   - Ask: "Find clips that support Ghost Shrimp breeding."
   - Agent uses graph media links and visual candidate annotations.
   - Agent returns candidate assets and says which still need Research/Content review.

4. Web/species card work:
   - Ask: "Can this species page be improved?"
   - Agent checks species record, public status, chronicles, media proof, Research claims, and existing public surfaces.
   - Agent proposes a write bundle instead of editing directly.

5. Program management:
   - Ask: "What is blocking Operation Living Intelligence?"
   - Agent reads Planner truth, then Memgraph dependency paths.
   - Agent identifies App, Research, Content, Web, Growth, Financials, and Hardware needs without rewriting their queues.

6. Analytics:
   - Ask: "Which videos should influence the next content direction?"
   - Agent joins YouTube metrics to `content_pipeline`, species/biome tags, story threads, and public pages.
   - Agent recommends patterns, not commitments.

## Open Questions

The architecture is scoped, but implementation still needs these decisions:

1. Where should read-only export files live locally?
2. Should App own the first export helper, or should Company create docs-only specs for App to implement later?
3. Should the first Memgraph pilot be local Docker, local binary, or another App-approved local service pattern?
4. Which small media set should be used for visual AI evaluation?
5. Which YouTube reports should be pulled first: targeted Analytics API queries or Reporting API bulk jobs?
6. Should pgvector live in existing Supabase as an embeddings table, or in a separate local Postgres for the pilot?
7. Should Planner dependency projection wait until after the Living Atlas graph pilot, or run as a second small graph proof?
8. What privacy policy should govern CRM, financial summaries, and any agent logs before indexing?

## Recommended Next Action

Create a docs-only App/Research/Content implementation handoff for **Wave 1: Living Atlas Graph Seed**.

That handoff should define:

- Exact source rows and Markdown files for the first export.
- Memgraph node and relationship CSV layouts.
- Import Cypher or GQLAlchemy path.
- Validation queries.
- Agent prompt examples.
- No writeback until Research/Content/App review.

This keeps the first build small enough to succeed while still proving the larger data architecture.
