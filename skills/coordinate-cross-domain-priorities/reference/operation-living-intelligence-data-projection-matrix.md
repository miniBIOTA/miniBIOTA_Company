---
id: operation_living_intelligence_data_projection_matrix
title: Operation Living Intelligence Data Projection Matrix
domain: company_operations
last_updated: 2026-05-16
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

## 2026-05-15 Task 409 Audit Pass

Company completed a read-only REST/OpenAPI and App migration-source audit pass for task `409`:

- `archive/superseded/operation-living-intelligence/operation_living_intelligence_task_409_schema_data_audit_2026-05-15.md`

The audit confirmed `108` OpenAPI-visible tables/views, exact row counts for the relevant source tables, the bounded Lake Post-Seal source rows, media asset/link state, privacy/publicness tiers, candidate export-manifest rows, and validation-query requirements.

Key implementation-readiness findings:

- `content_pipeline.id = 338` and `chronicles.id = 30` are the published source identities.
- `chronicle_subject_links` has eight live rows for chronicle `30`; species `65`, `169`, and `25` are public chronicle context but outside the bounded first seed unless explicitly expanded.
- Candidate seed species remain `24`, `66`, `67`, `164`, `167`, and `180`.
- Observations `170-178` have no direct `pipeline_id` or `chronicle_id`, so their relationship to the packet remains source-packet/research-context association unless a canonical link is separately approved.
- Thirteen packet media filenames are indexed in `media_assets`, all `reviewed = false`; two packet stills were not found by filename; no direct media links exist for chronicle `30`, biome `1`, or the candidate seed species.

Remaining gate:

- Live constraints, indexes, RLS policies, and triggers were not fully proven because SQL-capable Supabase metadata access was unavailable. User approval for read-only SQL inspection was granted on 2026-05-15, but the active session still had no usable SQL-capable path: catalog tables were not exposed through PostgREST, active-session MCP resource listings were empty, and the configured hosted Supabase MCP endpoint was not directly usable from the shell. App migration files provide source-level expectations, not live database proof.

Do not begin an export/import job, graph build, App implementation, automation, canonical write, or public surface change from this audit. The next step is a working Supabase MCP database session, App-owned read-only SQL bridge/helper, read-only Postgres catalog connection, or an explicit decision that the REST/OpenAPI plus migration-source audit is sufficient only for a design-only App proposal.

Josue approved that explicit fallback on 2026-05-15 for a design-only App proposal:

- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_no_write_dry_run_proposal_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_app_design_review_packet_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_app_design_review_readiness_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_jsonl_dry_run_generation_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_memgraph_import_readiness_review_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_app_regeneration_helper_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_memgraph_import_proposal_2026-05-15.md`

This approval does not authorize implementation, export/import, graph build, automation, App runtime changes, Supabase/Planner writes, media metadata writes, public behavior changes, or source-of-truth moves.

App context check on 2026-05-15 found that App currently ignores `out/` but not `.local/`, so the recommended future local output path is:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\
```

Company's App pre-review recommendation is JSONL-only first. Memgraph should remain optional until the manifest, validation report, blocked-edge handling, readback examples, and delete/rebuild behavior are proven from generated JSONL files.

The first JSONL dry run was generated on 2026-05-15 under:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\
```

Import-shape validation returned `pass_with_review_required_import_shape_ready` with `67` nodes, `96` edges, and `13` blocked edges. No Memgraph import was performed.

The recommended App-scoped regeneration helper was then created and verified:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave1-jsonl.js
```

Running `node tools/generate-oli-wave1-jsonl.js` from App regenerated the same import-shaped package under App's ignored `out/` tree. This makes Wave 1 repeatable enough for a local Memgraph import proposal, but still does not approve Memgraph install/runtime/import, Supabase/Planner writes, App runtime/schema changes, media metadata writes, public output, automation, or canonical writeback.

Local shell check found no visible `docker`, `memgraph`, or `mgconsole` command output, so any Memgraph step still needs an explicit runtime/install choice. Company documented the local Memgraph import proposal at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_memgraph_import_proposal_2026-05-15.md`.

Josue then approved the narrow `import.cypher` generation step. App now has:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave1-cypher.js
```

The generated local file is:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\import.cypher
```

The file contains `67` node merge statements, `109` relationship merge statements, and `13` blocked guardrail relationship imports. Company documented this at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_cypher_import_file_generation_2026-05-15.md`.

Josue then approved the runtime check. The active shell/machine initially did not expose `docker`, standard Docker Desktop paths, `memgraph`, or `mgconsole`, and no listeners were present on ports `7687`, `7444`, or `3000`. Company documented the initial block at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_memgraph_runtime_check_2026-05-15.md`.

After Josue approved using Docker to resume the test, Docker Desktop was installed through the official `winget` package, WSL/Docker initialized, and a disposable `memgraph/memgraph-mage:latest` container imported the generated Wave 1 graph. Readback confirmed `67` nodes, `109` relationships, blocked Daphnia/Ghost Shrimp/Mesostoma/Moina claims, `13` unreviewed media candidates, `0` direct observation-to-content/chronicle source links, and `0` canonical writebacks. The disposable container was stopped/removed and Docker Desktop was stopped after the test. Company documented the result at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_memgraph_import_readback_2026-05-15.md`.

App then updated the Cypher generator so regenerated `import.cypher` starts directly with executable Cypher for `mgconsole` compatibility. A fresh disposable Memgraph container imported the regenerated file directly without comment-stripping, and compact readback returned the same safe counts and blocked-claim behavior. The second disposable container was stopped/removed and Docker Desktop was stopped after verification.

App/Company then added a repeatable smoke helper at `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave1-memgraph-smoke.js`. The helper starts a disposable Memgraph container, imports `import.cypher`, checks counts and safety gates, and removes the container. Verified output: `67` nodes, `109` relationships, blocked claims/media/source-link/writeback checks passed. Company documented it at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_memgraph_smoke_helper_2026-05-15.md`.

Company then closed the immediate pilot dependency decision at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_pilot_dependency_decision_2026-05-15.md`: Docker Desktop plus Memgraph is accepted only as a local disposable Wave 1 pilot dependency. It is not day-to-day infrastructure, a persistent graph service, automation, canonical data storage, or approval for Supabase/Planner/media/public writes. The later SQL metadata review resolved task `409`'s live metadata gap for the current proof, but durable implementation still waits on a separate implementation proposal and future approval.

App then prepared the future read-only SQL metadata gate packet at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-sql-metadata-check.md` and `M:\miniBIOTA\miniBIOTA_App\tools\inspect-oli-wave1-sql-metadata.sql`, with optional runner `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave1-sql-metadata-check.ps1`. The SQL file contains catalog `SELECT` statements only and is meant to prove live columns, constraints, indexes, RLS state, policies, triggers, selected function metadata, and selected grants once a SQL-capable read-only path exists. It was not run during the active session because there was no `psql`, Postgres connection string, or MCP SQL database tool available.

App then added a no-Docker JSONL readback helper at `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave1-jsonl-readback.js`. It reads the generated JSONL files and writes ignored local reports without Supabase, Docker, Memgraph, Planner, or App runtime access. Verified readback returned `67` nodes, `96` edges, `13` blocked edges, `109` relationships with blocked guardrails, all expected blocked-claim/media/source-link/writeback checks passing, and `9 / 10` Stage 3 pilot questions passing or provisionally passing. Company documented it at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_jsonl_readback_helper_2026-05-15.md`.

Company then documented the Wave 1 public reuse boundary at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_public_reuse_boundary_2026-05-15.md`. This prepares a future Wave 1.1 sidecar for Stage 3 question `5` by naming candidate public source identities and surfaces while keeping all Web/Content/Research review gates active. It does not approve public output, Web changes, Content copy, media captions, Supabase/Planner writes, or canonical writeback.

Company then documented the proposed Wave 1.1 public reuse sidecar at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_1_public_reuse_sidecar_proposal_2026-05-15.md`. The sidecar should remain separate from the core Wave 1 graph and, if later approved, generate local ignored JSONL/readback files for `PublicReuseCandidate`, `PublicSurface`, `ReuseGate`, and derived candidate/review relationships. Its purpose is to let Stage 3 question `5` return `review_required` candidate surfaces instead of public-output approval. It does not approve App helper implementation, durable graph runtime, automation, Web route changes, Content copy, media captions, Supabase/Planner writes, public messaging, or source-of-truth migration.

Company/App then implemented and ran the local Wave 1.1 public reuse sidecar helper at `M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave1-public-reuse-sidecar.js`. Generated files live under App's ignored `out/operation_living_intelligence/wave_1_lake_post_seal/public_reuse_sidecar/` path. Validation returned `pass_with_review_required_public_reuse_sidecar_ready` with `11` public surfaces, `11` public reuse candidates, `7` reuse gates, and `47` public reuse edges. App then folded sidecar detection into the no-Docker JSONL readback helper, which now returns Stage 3 `10 / 10` pass or provisional-pass when the sidecar is present and scores question `5` as `provisional_pass` with `review_required` public-surface status. It still does not approve public output, Web changes, Content copy, media captions, Supabase/Planner writes, App runtime/schema/package changes, durable graph runtime, automation, or source-of-truth migration.

Company/App then prepared a Supabase SQL Editor friendly JSON packet at `M:\miniBIOTA\miniBIOTA_App\tools\inspect-oli-wave1-sql-metadata-json.sql` for the remaining live SQL metadata gate. It returns one `oli_wave1_sql_metadata_readback` JSON value covering target table existence, columns, constraints, indexes, RLS state, policies, triggers, selected function metadata, and selected grants. Static non-comment SQL keyword scan found no write/DDL/security/RPC keywords, but the packet was not run at that point because the active session still had no `psql`, Postgres connection string, or Supabase MCP SQL database tool. That gate was later resolved for review after Josue ran the JSON packet in Supabase SQL Editor.

Josue ran the JSON SQL packet in Supabase SQL Editor and provided the result. Company reviewed the metadata at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_sql_metadata_review_2026-05-15.md`. All `17` target tables exist; key columns, source/link constraints, and indexes support the current Wave 1 local graph proof. RLS is enabled across target tables, with sparse public/authenticated policies, so durable graph projection must use an internal protected App-owned read path or narrowly scoped database role rather than browser/public access. Broad table grants are a security-review signal before automation. The SQL metadata gap is resolved for review, but durable graph automation, persistent Memgraph infrastructure, public graph output, and canonical writeback remain gated.

App then prepared the Wave 1 durable projection design at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave1-durable-projection-design.md`, and Company documented the decision at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_durable_projection_design_2026-05-15.md`. The approved posture remains manual internal run only: protected read path, ignored local output, rebuildable files, validation/readback gates, drift checks, no public output, no canonical writeback, and explicit stop conditions. Automation, scheduled sync, persistent Memgraph service, App runtime integration, public Web behavior, Content copy, Supabase/Planner writes, paid services, and source-of-truth migration remain unapproved.

App then added and verified the manual projection helper at `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave1-manual-projection.js`, documented by Company at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_manual_projection_helper_2026-05-15.md`. The helper runs the Wave 1 local sequence in one operator command and writes ignored `manual_projection_operator_report.*` files. Verified result after explicit network permission for the bounded Supabase refresh: `pass_manual_internal_projection_ready`, `67` nodes, `96` normal edges, `13` blocked edges, Stage 3 `10 / 10`, public reuse `review_required`, and no stop conditions. This closes the near-term durable implementation step as manual internal orchestration only; it does not approve automation, persistent infrastructure, public output, App runtime integration, canonical writeback, or Supabase/Planner writes.

Company then closed Wave 1 as a successful local proof and documented the next-wave handoff at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_completion_and_next_waves_2026-05-15.md`. The decision was to pause graph infrastructure there: no persistent Memgraph service, no scheduled sync, no App runtime integration, no public graph output, no canonical writeback, and no source-of-truth migration. At that gate, the recommended next step was a docs-only Wave 2 Content Story Graph design pass before building more tooling.

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
- Live read-only Supabase OpenAPI and Storage bucket audit on 2026-05-13, documented at `archive/superseded/operation-living-intelligence/operation_living_intelligence_supabase_schema_audit_2026-05-13.md`.

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

The audit accounted for every exposed table/view in `archive/superseded/operation-living-intelligence/operation_living_intelligence_supabase_schema_audit_2026-05-13.md`.

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

1. Keep the task `409` SQL metadata review current after migrations touching target tables, RLS, policies, grants, triggers, or projection source columns; the 2026-05-15 REST/OpenAPI pass captured exact source rows, fields visible through OpenAPI, row counts, safe samples, quality caveats, and export-manifest candidates, and the later JSON SQL metadata readback resolved the live metadata gap for the current proof.
2. Confirm the local/App-approved Memgraph run pattern and where ignored export/import files will live.
3. Define validation queries for node count, edge endpoint validity, missing source IDs, publicness/confidence presence, and sensitive-field exclusion.
4. Confirm Research and Content review owners for claim/story interpretation.
5. Keep Web as downstream review only until curated graph outputs exist.
6. Keep Financials review available before any paid graph service is considered.

### Wave 2: Content Story Graph

Purpose:

- Make agents better at "what story is this part of?" and "what content already exists?"
- Keep published content, planned content, draft/candidate material, public history, source observations, open loops, and review gates visibly separate.

Data:

- `story_threads`, `open_loops`, `story_beats`.
- Beat/thread/loop/observation joins.
- Published `content_pipeline`.
- `chronicles` and subject links.
- `content_calendar` only as planned/in-production identity and source-map context.

Success:

- Content agent can retrieve story continuity without confusing planned content, published content, and public history.
- Output can answer whether a story is published, planned, draft, candidate, or blocked by review without changing Content, Web, Research, Planner, or App records.

2026-05-15 design pass:

- Company documented the Wave 2 design at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_2_content_story_graph_design_2026-05-15.md`.
- Recommended target question: "What story is this part of, what have we already published, what is planned, and what is only candidate material?"
- Recommended first implementation shape, if later approved: one bounded story packet around one published content item or chronicle plus directly connected story threads, open loops, story beats, observations, and candidate media.
- Recommended output path, if later approved: `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_2_content_story_graph\`.
- At this gate, implementation remained unapproved. The next step was source-packet selection and source availability review, not App helper work.

2026-05-15 packet selection:

- Company selected the Lake Post-Seal story packet as the first Wave 2 source-availability review target:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_2_lake_post_seal_packet_selection_2026-05-15.md`.
- Anchor rows: `content_pipeline.id = 338` and `chronicles.id = 30`.
- Known continuity rows from Wave 1: observations `170-178`, open loops `1`, `2`, `3`, `4`, `7`, and story thread IDs `1`, `3`, `5` through observation-thread links.
- Required fresh read-only check before implementation: actual `story_threads` rows for `1`, `3`, `5`; any linked `story_beats`; any related `content_calendar` rows; and source-map joins that distinguish published, planned, draft, and candidate material.
- At this gate, App helper work remained unapproved until later explicit approval.

2026-05-15 source-availability review:

- Company completed the read-only source review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_2_lake_post_seal_source_availability_review_2026-05-15.md`.
- Result: the Lake Post-Seal packet is source-available for a future no-write Wave 2 implementation proposal.
- Confirmed current source rows: published `content_pipeline.id = 338`, public `chronicles.id = 30`, story threads `1`, `3`, `5`, open loops `1`, `2`, `3`, `4`, `7`, observations `170-178`, `12` observation-thread links, and `13` observation-loop links.
- Confirmed five related `story_beats` are `available` / `unseen`, so they are candidate story material rather than published content.
- Confirmed related `content_calendar` follow-up context through loop `3`: calendar `11` is a published May 1 short, and calendar `12` is a planned May 18 short.
- Confirmed all `13` Wave 1 candidate media rows still have `reviewed = false`; media remains review-required.
- Modeling boundary: `content_calendar` has no direct `chronicle_entry_id` column, so future graph generation must not infer chronicle-calendar links without an explicit source path.
- At this gate, the recommended step was a no-write Wave 2 App implementation proposal for local JSONL/readback output only. App helper work, graph build, public output, and any Supabase/Planner/App/Web writes remained unapproved until later explicit approval for the smallest local helper only.

2026-05-15 no-write App implementation proposal:

- Company prepared the Wave 2 proposal at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_2_no_write_app_implementation_proposal_2026-05-15.md`.
- Proposed shape: read-only source refresh, local ignored `source_manifest.json`, `nodes.jsonl`, `edges.jsonl`, `blocked_edges.jsonl`, `validation_report.json`, and story readback reports under `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_2_content_story_graph\lake_post_seal\`.
- The proposal keeps JSONL/readback first and defers Cypher/Memgraph until published/planned/candidate/review-required status handling is proven.
- Required guardrails include blocking planned content as published, available story beats as published, observations as public content, unreviewed media as proof, inferred chronicle-calendar links, resolved-loop overclaims, public Web output, and any canonical writeback.
- At this gate, the next step was App-scoped design review only if explicitly approved. Implementation, App repo edits, graph generation, Memgraph/Docker use, Supabase/Planner writes, public output, automation, and source-of-truth migration remained unapproved.

2026-05-15 App design-review packet:

- After user approval to continue, Company prepared `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_2_app_design_review_packet_2026-05-15.md`.
- Company read App `AGENTS.md`, `.gitignore`, `memory/00-index.md`, `memory/05-supabase-and-storage-rules.md`, `skills/supabase-safety-review/SKILL.md`, and Wave 1 OLI helper docs/patterns.
- App context supports the proposed `out/operation_living_intelligence/wave_2_content_story_graph/lake_post_seal/` ignored-output path and confirms live Supabase/Planner/Source Map/media/public writes remain approval-gated.
- The packet is a Company-side handoff only; no App repo files, App helpers, App runtime behavior, Supabase rows, Planner rows, graph files, public output, or source-of-truth records changed.
- Next possible moves require explicit approval: App repo docs-only review, Company-only implementation checklist, or live Planner task creation/update.

2026-05-15 App docs-only design review:

- App completed the docs-only review at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave2-design-review.md`.
- App accepted the proposed ignored output path `out/operation_living_intelligence/wave_2_content_story_graph/lake_post_seal/` and JSONL/readback-first shape for a separately approved helper.
- App keeps Cypher/Memgraph deferred until JSONL/readback proves status and review gates are useful.
- App requires blocked-inference coverage for planned-as-published, available story beats as published, observations as public content, unreviewed media as proof, inferred chronicle-calendar links, resolved-loop overclaims, public Web output, and automatic canonical updates.
- At this gate, the next step was explicit implementation approval for local helper files, output path, read-only source access, network/Supabase read scope, validation/readback expectations, and no-write boundaries.
- No helper, graph files, runtime/schema behavior, Supabase/Planner write, media metadata, public output, automation, or source-of-truth migration happened during the review.

2026-05-15 local JSONL/readback helper:

- Josue approved the smallest local helper implementation after the docs-only review.
- App added `M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave2-content-story-jsonl.js` and `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave2-content-story-readback.js`.
- Generated output lives under App's ignored `out/operation_living_intelligence/wave_2_content_story_graph/lake_post_seal/` folder.
- Validation returned `pass_with_review_required_content_story_jsonl_ready` with `63` nodes, `136` normal edges, `34` blocked edges, valid endpoints, unique node IDs, `none` canonical writeback, five available/unseen story beats, two calendar entries, and thirteen unreviewed media candidates.
- Offline readback returned `pass_with_review_required_content_story_readback_ready` and answered the eight Wave 2 story-safety questions.
- One selected `story_beat_threads` link points from `story_beat:6` to out-of-scope `story_thread:30`; the helper records this as `blocked_inference:out_of_scope_story_thread_link` instead of expanding the approved scope.
- Company reviewed the generated output at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_2_readback_review_2026-05-15.md`.
- Decision: close Wave 2 as a successful no-Docker local proof and do not prepare Cypher/Memgraph for this wave unless a future query needs graph-runtime behavior that JSONL/readback cannot provide.
- Next recommended work: Wave 3 Species and Public History Expansion as a docs-only design pass.
- No Docker/Memgraph use, App runtime/schema behavior, Supabase/Planner write, media metadata change, public output, automation, or source-of-truth migration happened.

### Wave 3: Species And Public History Expansion

Purpose:

- Expand from one packet/story proof toward species/biome public history.
- Help agents answer: "What can we safely say publicly about this species, and why?"
- Keep public history, species-card candidates, uncertain claims, reviewed relationships, source observations, and media proof gates visibly separate.

Data:

- `species`, `biomes`, and `biosphere_profile`.
- `chronicles` and `chronicle_subject_links`.
- `observations` as evidence/source context, not automatic public copy.
- Published `content_pipeline` identities when directly connected.
- Existing reviewed public ecosystem relationship rows, if source-available.
- Research claim labels, uncertainty notes, and publicness decisions when explicitly included.
- Wave 1 public reuse sidecar and Wave 2 story readback as local derived context, not canonical truth.
- Media/species image references as candidate proof only.

Success:

- Agent can answer "what can we safely say publicly about this species and why?"
- Output names what is public, candidate, uncertain, internal, blocked, or review-required without changing species, Web, Research, Content, media, Planner, App, or Supabase records.

2026-05-15 design pass:

- Company documented the Wave 3 design at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_3_species_public_history_design_2026-05-15.md`.
- Recommended first packet: Lake Post-Seal Species/Public History, anchored on `chronicles.id = 30`, `content_pipeline.id = 338`, Freshwater Lake, and primary species Flagfish `24`, Ghost Shrimp `67`, and Daphnia `164`, with context species only when directly supported by the approved source scope.
- Required modeling distinctions: public history is not public copy approval; species-card candidates are not approved Web output; observations are evidence/context, not public text; reviewed public relationship rows must not be inferred; media remains candidate proof until exact asset/use review.
- Recommended future output path, if later approved: `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_3_species_public_history\lake_post_seal\`.
- Company completed the source-availability review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_3_lake_post_seal_source_availability_review_2026-05-15.md`.
- Result: the packet is source-available for a future no-write App proposal. Confirmed context includes published source anchors, Freshwater Lake, chronicle `30` subject links, available species rows, source-context species, observations/open loops, Wave 1 public reuse sidecar surfaces, Wave 2 story context, and review-gated media/image state.
- Company prepared the no-write App implementation proposal at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_3_no_write_app_implementation_proposal_2026-05-15.md`.
- Proposed shape: protected read-only source refresh, local ignored `source_manifest.json`, `nodes.jsonl`, `edges.jsonl`, `blocked_edges.jsonl`, `validation_report.json`, and species-public-history readback reports under `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_3_species_public_history\lake_post_seal\`.
- Required guardrails include blocking Daphnia ID/establishment/clearing overclaims, Ghost Shrimp recruitment/establishment overclaims, Flagfish failure framing, Mesostoma/Moina public chronicle linkage inference, observations as public copy, planned/unseen story material as published history, existing display images as proof, unreviewed media as proof, chronology changes, public Web output, and automatic canonical writeback.
- Josue approved continuing to the App design-review gate, and Company prepared the App design-review packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_3_app_design_review_packet_2026-05-15.md`.
- App completed the docs-only design review note at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave3-design-review.md`, accepting the proposed ignored output path, JSONL/readback-first shape, blocked-edge guardrails, validation/readback posture, and `none` canonical writeback boundary for a future separately approved helper.
- Josue approved the smallest local helper implementation. App added and verified `tools/generate-oli-wave3-species-public-history-jsonl.js` and `tools/run-oli-wave3-species-public-history-readback.js`.
- Generated output lives under App's ignored `out/operation_living_intelligence/wave_3_species_public_history/lake_post_seal/` folder. Generation returned `pass_with_review_required_species_public_history_jsonl_ready` with `114` nodes, `222` normal edges, and `49` blocked edges. No-Docker readback returned `pass_with_review_required_species_public_history_readback_ready` with `271` relationships including blocked guardrails, `3` primary species, `4` context species, `2` internal/review-required species, `9` observations, `13` media candidates, `3` display assets, and `11` public surfaces.
- Company recorded the helper at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_3_jsonl_readback_helper_2026-05-15.md` and reviewed the generated output at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_3_readback_review_2026-05-15.md`.
- Decision: close Wave 3 as a successful no-Docker local species/public-history proof. Cypher/Memgraph, public output, Research/Web/Content writes, media metadata writes, Planner/Supabase writes, automation, and canonical writeback remain unapproved.

### Wave 4: YouTube Analytics Warehouse

Purpose:

- Start analytics with YouTube as selected.
- Answer how published videos perform over time and what patterns should inform Content, Growth, Brand, Web, and Company review without turning analytics into content truth or public promises.

Data:

- YouTube Analytics targeted reports or Reporting API bulk reports.
- `content_pipeline` video identity and published URLs.
- Topic/story/species/biome tags from Content/Research projections.

Success:

- Agent can produce weekly/monthly video performance summaries joined to content identity.
- Analytics stays separate from content calendar and content truth.

2026-05-15 docs-only design pass:

- Company documented the Wave 4 design at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_4_youtube_analytics_warehouse_design_2026-05-15.md`.
- Current official Google/YouTube docs were checked for the design. The current posture is: YouTube Analytics API `reports.query` is the better first implementation candidate for bounded targeted queries, YouTube Reporting API bulk jobs are better later after recurring report shape and dedupe/backfill handling are known, and YouTube Data API should be used only for video/channel metadata gaps not already covered by `content_pipeline`.
- The first packet should begin with `content_pipeline.id = 338`, `chronicles.id = 30`, and the published Lake Post-Seal YouTube source URL `https://youtu.be/lgmPWX9e-A0`. Additional published videos should wait for source-availability review.
- First metrics should stay non-monetary: views, estimated minutes watched, average view duration, average view percentage, likes, comments, shares, subscribers gained, and subscribers lost when supported by the selected report. Estimated revenue, ad revenue, CPM, and other monetary metrics remain excluded until Financials approves monetary scope and the required read-only monetary access.
- Recommended future path, if separately approved: manual YouTube Studio export or targeted Analytics API query first; ignored local App output under `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_4_youtube_analytics_warehouse\`; DuckDB only after the report shape proves repeated value; Reporting API jobs only after recurrence, dedupe, and backfill handling are justified.
- Required guardrails: no OAuth/API connection, API call, credential storage, warehouse files, App helper, scheduled job, public dashboard, Content calendar change, Supabase/Planner write, revenue claim, sponsor/financial/public/launch/roadmap commitment, or canonical writeback from the docs-only design.
- Recommended next step: Wave 4 source-availability and auth-readiness review before any implementation.
- Company completed the source/auth readiness review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_4_youtube_analytics_source_auth_readiness_review_2026-05-15.md`.
- Result: `source_available_auth_not_ready_implementation_deferred`. The first source identity is available (`content_pipeline.id = 338`, `chronicles.id = 30`, YouTube video id `lgmPWX9e-A0`), but no YouTube analytics export, API response, OAuth setup, credential path, warehouse file, App helper, or readback exists.
- Recommendation: choose manual YouTube Studio export first if Josue can obtain it quickly; otherwise prepare a no-write App implementation proposal for a bounded targeted YouTube Analytics API query. Keep YouTube Reporting API bulk jobs deferred until recurrence, dedupe, backfill handling, and report consumers are proven.
- Monetary/revenue metrics remain blocked from the first packet unless Financials explicitly approves monetary scope.

### Wave 5: Retrieval Layer

Purpose:

- Improve agent recall over notes, packets, scripts, and briefs.
- Make existing sources easier to find without turning retrieval into source-of-truth memory.

Data:

- Company/domain memory.
- Source packets.
- Research reviews.
- Content scripts/packaging.
- Chronicles/species summaries.

Success:

- Search results cite source paths and IDs.
- Vector retrieval does not replace graph reasoning or canonical reads.

2026-05-15 docs-only design pass:

- Company documented the Wave 5 design at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_retrieval_layer_design_2026-05-15.md`.
- Wave 5 can proceed while Wave 4 is deferred because retrieval starts from existing local Markdown/source docs, not YouTube analytics access.
- Recommended sequence: source inventory, corpus manifest, chunk/citation rules, no-embedding keyword/source-path baseline, retrieval evaluation set, then optional embeddings/vector index only after approval.
- First corpus should stay small and source-of-truth-safe: Company memory/protocols, OLI plan/projection matrix/wave docs, domain reports, and selected Content/Research source packets only after owner scope is clear.
- First generated shape, if later approved, should be local ignored App output under `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\` with `corpus_manifest.json`, `documents_manifest.jsonl`, `chunks_manifest.jsonl`, evaluation set, validation report, and readback report. Embeddings are not part of the first approved step unless separately scoped.
- Guardrails: retrieval remains derived; every answer needs source path or record ID; public/private/review/claim-status labels must survive; CRM, raw finance, private sponsor/contact notes, private analytics, raw media, credentials, and App runtime logs are excluded by default.
- Company completed the corpus inventory and citation readiness review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_retrieval_corpus_inventory_citation_readiness_review_2026-05-15.md`.
- Result: `company_corpus_ready_for_no_write_manifest_proposal`. The first corpus can be limited to Company-owned and Company-report-level sources: Company operating memory/protocols, OLI plan/projection matrix/wave docs, active domain reports/overviews, and explicitly selected generated readbacks labeled `generated-derived`.
- Deep Content and Research source docs remain candidate-only until owner scope is explicit. Sensitive CRM/contact rows, raw financial rows, private sponsor notes, YouTube private analytics, raw media, credentials, service-role output, App runtime logs, and Brain archive content remain excluded by default.
- Company prepared the no-write App manifest/chunk export proposal at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_no_write_app_manifest_chunk_export_proposal_2026-05-15.md`.
- Proposal shape: local ignored App output under `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\company_corpus\`, with corpus/document/chunk manifests, a retrieval evaluation set, no-embedding keyword baseline report, validation report, and readback report.
- Company prepared the App design-review packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_app_design_review_packet_2026-05-15.md`.
- App completed the docs-only design review note at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave5-design-review.md`.
- App accepted the ignored `out/operation_living_intelligence/wave_5_retrieval_layer/company_corpus/` path and manifest/chunk/readback-first shape for a future separately approved helper. App requires line-aware chunks, source/owner/role/canonicality/publicness/claim-status metadata, generated-derived labels, a no-embedding keyword/source-path baseline, validation/readback gates, and `none` canonical writeback.
- Josue approved the narrow local helper implementation. App added `tools/generate-oli-wave5-retrieval-manifest.js` and `tools/run-oli-wave5-retrieval-readback.js`, generated ignored output under `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\company_corpus\`, and verified `98` documents, `1427` chunks, `10` evaluation questions, `0` sensitive path matches, and readback status `pass_with_review_required_retrieval_readback_ready` with `9 / 10` evaluation questions passed.
- Company recorded the implementation at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_retrieval_manifest_chunk_helper_2026-05-15.md`.
- Company completed the baseline usefulness review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_retrieval_baseline_usefulness_review_2026-05-15.md`.
- Decision: keep the helper as a rebuildable local source-path, keyword, heading, metadata-filter, and citation-readback aid. Do not proceed to embeddings, pgvector table, vector index, public search, scheduled refresh, App runtime integration, live reads, expanded corpus, or canonical writeback from this review.
- Company completed the docs-only evaluation tuning plan at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_evaluation_tuning_plan_2026-05-15.md`.
- Josue approved the expected-status helper update. App updated the helper/evaluation set to support `answerable_with_citation`, `review_required`, and `blocked` expected statuses; make the Daphnia/publicness question pass only when it preserves Research/Content/Web review boundaries; add public species-card blocked, generated-derived canonicality, owner-routing, private source-family exclusion, and stale generated snapshot questions; then reran the no-embedding baseline before any vector/embedding decision brief.
- Company prepared the expected-status helper update proposal at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_expected_status_helper_update_proposal_2026-05-15.md`. Future implementation, if explicitly approved, is limited to `tools/generate-oli-wave5-retrieval-manifest.js`, `tools/run-oli-wave5-retrieval-readback.js`, ignored local output regeneration, and readback validation. Embeddings, vector work, live reads, runtime behavior, public output, expanded corpus, and canonical writeback remain unapproved.
- Josue approved the expected-status helper update. App updated `tools/generate-oli-wave5-retrieval-manifest.js` and `tools/run-oli-wave5-retrieval-readback.js`, regenerated ignored local output, and verified `101` documents, `1463` chunks, `15` evaluation questions, and `15 / 15` passes with expected-status fields present. Company recorded this at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_expected_status_helper_update_2026-05-15.md`. This is still no-embedding, no-vector, no-live-read, no-runtime, no-public-output, and no-canonical-writeback.
- Company completed the expected-status readback review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_expected_status_readback_review_2026-05-15.md`. Decision: accept the 15-question no-embedding readback as the current local Wave 5 retrieval baseline. Next Wave 5 step, only if semantic retrieval is worth evaluating, is a docs-only vector/embedding decision brief before any implementation.
- Company completed the vector/embedding decision brief at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_vector_embedding_decision_brief_2026-05-16.md`. Decision: semantic retrieval is worth evaluating only through a future no-write, ignored-output App design-review packet. Do not implement embeddings, pgvector, vector indexes, model/API calls, live reads, public search, scheduled refresh, App runtime integration, expanded corpus scope, or canonical writeback from the brief.
- Company prepared the vector/embedding App design-review packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_vector_embedding_app_design_review_packet_2026-05-16.md`. The packet asks App for docs-only review only; no App code, embeddings, generated vector output, pgvector/vector index, model/API call, live read, runtime behavior, public search, scheduled refresh, expanded corpus, or canonical writeback is approved.
- App completed the vector/embedding docs-only review at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave5-vector-embedding-design-review.md`; Company synthesized the result at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_vector_embedding_app_review_synthesis_2026-05-16.md`. App recommends local-file-only vector evaluation first, with pgvector deferred until local value, citation fidelity, expected-status behavior, stale-output handling, and cost/privacy rules are proven.
- Company prepared the local vector evaluation helper proposal at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_local_vector_evaluation_helper_proposal_2026-05-16.md`. Josue approved the boundary. App added `tools/run-oli-wave5-local-vector-evaluation.js` and `docs/operation-living-intelligence-wave5-vector-eval-config.example.json`, wrote validation under ignored `out/operation_living_intelligence/wave_5_retrieval_layer/company_corpus/vector_eval/`, and first returned `blocked_baseline_stale_no_vector_evaluation`. Baseline files were present, but `6` stale source hashes and `6` unmanifested OLI source candidates blocked semantic candidate output. Company recorded this at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_local_vector_evaluation_helper_2026-05-16.md`. The baseline was then regenerated and accepted with `108` documents, `1543` chunks, and `15 / 15` expected-status questions passing. The vector-proxy helper reran with `pass_with_review_required_local_vector_proxy_evaluation_ready`, `75` candidate rows, `15` result rows, and `15 / 15` expected-status rows passing. Company accepted the no-embedding comparison at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_local_vector_proxy_readback_review_2026-05-16.md`. Embeddings, pgvector, live reads, runtime behavior, public output, expanded corpus, and canonical writeback remain unapproved.

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

2026-05-15 docs-only design pass:

- Company documented the Wave 6 Media And Visual AI Readiness design at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_media_visual_ai_readiness_design_2026-05-15.md`.
- Current official NVIDIA and Twelve Labs documentation was checked for the model/vendor posture. Nemotron 3 Nano Omni remains a plausible first analysis engine, but the exact route is time-sensitive and must be rechecked for availability, video/audio support, license/commercial terms, input limits, privacy/retention, cost, and hardware/storage requirements at implementation time.
- The design keeps the first media set locked to the task `398` four-item set: `TEST_398_01_OPAQUE_LAKE_STILL`, `TEST_398_02_FIELD_SAMPLING`, `TEST_398_03_SAMPLE_INTRODUCTION`, and `TEST_398_04_MICROCRUSTACEAN_BLOCKING`.
- The future output shape, if later approved, is noncanonical candidate annotation and pull-sheet/readback material under App's ignored `out/operation_living_intelligence/wave_6_media_visual_ai_readiness/` path.
- Required output labels include source path/timecode, model route, prompt version, plain visual description, broad candidate label, advisory confidence, story role, evidence caveats, blocked public uses, Raw Footage/Content/Research review status, `metadata_write_status = not_approved`, `public_use_status = blocked`, and `canonical_writeback = none`.
- Twelve Labs remains a later benchmark only after a reviewed Nemotron/Codex run shows a specific gap; no Twelve Labs account, API key, upload, benchmark, persistent index, payment method, or paid plan is approved.
- Recommended next step: Wave 6 source/runtime readiness review. Verify exact file availability, read-only media inspection path, App ignored output path, workstation/GPU/storage assumptions, concrete Nemotron route, privacy/retention/cost/credential gates, Raw Footage no-side-effect policy, Research wording for the ID-sensitive item, and Financials no-spend posture before any App design-review packet or helper proposal.
- Do not run a model, install/download a model, call an API, upload media, create generated output, scan media, extract frames, create thumbnails/sidecars/proxies, write media metadata, change App runtime, open DaVinci, write Supabase/Planner/Storage/graph/vector records, publish, or canonicalize any visual AI output from this design.
- Company completed the source/runtime readiness review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_source_runtime_readiness_review_2026-05-15.md`.
- Result: `source_available_runtime_partially_ready_model_route_not_ready_implementation_deferred`.
- The four task `398` files exist; App `out/` is ignored; the proposed Wave 6 output path does not exist yet; Node `v24.14.1`, `npm.cmd 11.11.0`, and `nvidia-smi` are available; `nvidia-smi` reports `NVIDIA GeForce RTX 5060 Ti`, `16311 MiB`, driver `595.79`.
- Blockers: `ffprobe`, `ffmpeg`, and `mediainfo` are not on PATH; storage-free checks through `Get-CimInstance` and `fsutil` were denied; exact Nemotron route is not selected; local 16GB VRAM does not prove full Nemotron local feasibility; privacy/retention/license/cost/input-limit gates remain unresolved.
- Recommended next step: prepare a Wave 6 App design-review packet for source/runtime readiness only, or resolve the media-inspection/model-route gaps first. Do not propose a model run yet.
- Company prepared the Wave 6 App design-review packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_app_design_review_packet_2026-05-15.md`.
- The packet asks App for docs-only review of the source/runtime readiness boundary: preflight-only media inspection, `ffprobe`/equivalent dependency posture, ignored preflight/readback output under `out/operation_living_intelligence/wave_6_media_visual_ai_readiness/`, raw media no-side-effect requirements, Media Library separation, credential/model-route separation, storage/cache posture, and stop conditions.
- The packet does not approve App helper implementation, media inspection tooling install/use, generated output, model install/download/run, API/model calls, cloud upload, media scan, clip/frame extraction, thumbnail/proxy/sidecar creation, App runtime behavior, Media Library metadata, Supabase/Planner/Storage writes, DaVinci work, public output, or canonical writeback.
- App completed the docs-only design review note at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-design-review.md`.
- App accepts a future preflight-only boundary in principle: ignored output under `out/operation_living_intelligence/wave_6_media_visual_ai_readiness/`, bounded task `398` source set, read-only media metadata inspection, validation/readback, and strict separation between media preflight, model route selection, credentials, generated annotations, Media Library metadata, and App runtime behavior.
- App keeps implementation deferred. No helper, media-inspection dependency install/use, generated output, model route selection, model install/download/run, API/model call, cloud upload, media scan, clip/frame extraction, thumbnail/proxy/sidecar creation, App runtime behavior, Media Library metadata, Supabase/Planner/Storage writes, DaVinci work, public output, paid service, or canonical writeback is approved.
- Company prepared the Wave 6 media preflight policy/tooling proposal at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_media_preflight_policy_and_tooling_proposal_2026-05-16.md`, then prepared the implementation readiness checklist at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_preflight_implementation_readiness_checklist_2026-05-16.md`. Josue approved Phase A, and App added `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-media-preflight.js`. Generated ignored output lives under `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\preflight\`. Readback returned `pass_with_review_required_wave6_phase_a_preflight_ready`: exact four task `398` paths, `4 / 4` files present, ignored App output, tool availability detection only, immediate parent-folder side-effect checks unchanged, validation/readback, and no media processing/model/API/cloud/database/App runtime/public/canonical write. Company then prepared the Phase B media stream metadata approval packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_phase_b_media_stream_metadata_approval_packet_2026-05-16.md`; Josue approved it; and App completed the approved `ffprobe` readback at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_phase_b_media_stream_metadata_readback_2026-05-16.md`. Phase B returned `pass_with_review_required_wave6_phase_b_stream_metadata_ready` with all `4 / 4` commands exiting `0`, parsed stream metadata, unchanged parent folders, ignored local output only, and no `ffmpeg`, media export/transcode/clip/frame/thumbnail/proxy/sidecar/cache/checksum/derivative, model/API/cloud, Media Library metadata, App runtime, database, public, or canonical write. Company then completed the model-route decision packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_model_route_decision_packet_2026-05-16.md`, recommending local/private-first feasibility review, Nemotron as preferred target if feasible, Qwen as fallback/local benchmark, and hosted/cloud routes deferred. Company then prepared the App model-route design-review packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_model_route_app_design_review_packet_2026-05-16.md`, App completed the docs-only model-route review at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-model-route-design-review.md`, Company prepared the model-route feasibility preflight approval packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_model_route_feasibility_preflight_approval_packet_2026-05-16.md`, App completed the approved feasibility helper/readback at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_model_route_feasibility_preflight_readback_2026-05-16.md`, Company completed the official route recheck and route-selection packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_official_route_recheck_and_route_selection_packet_2026-05-16.md`, Company prepared the Qwen3-VL local pilot implementation approval packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_qwen3_vl_local_pilot_implementation_approval_packet_2026-05-16.md`, App completed the approved still-image pilot recorded at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_qwen3_vl_local_pilot_readback_2026-05-16.md`, Company completed the prompt hardening/usefulness review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_qwen3_vl_prompt_hardening_usefulness_review_2026-05-16.md`, App completed the approved prompt-hardened still-image rerun recorded at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_qwen3_vl_prompt_hardened_rerun_readback_2026-05-16.md`, Company completed the video/GPU runtime decision packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_video_gpu_runtime_decision_packet_2026-05-16.md`, Company prepared the video/GPU App design-review packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_video_gpu_runtime_app_design_review_packet_2026-05-16.md`, App completed the docs-only video/GPU runtime review at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-video-gpu-runtime-design-review.md`, Company prepared the runtime/backend preflight approval packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_runtime_backend_preflight_approval_packet_2026-05-16.md`, and App completed the approved preflight recorded at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_runtime_backend_preflight_readback_2026-05-16.md`.
- Company then prepared the exact CPU-only short-video implementation approval packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_cpu_only_short_video_implementation_approval_packet_2026-05-16.md`: existing local/offline Qwen3-VL runtime/cache only, CPU only, `torchvision` only, `TEST_398_02_FIELD_SAMPLING` only, audio ignored, bounded video budget, ignored candidate/readback output only, blocked readback if runtime/backend/preprocessing expansion is needed, and no public/canonical writes.
- App completed the approved CPU-only short-video helper at `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-qwen3-vl-short-video-pilot.js`, and Company recorded the blocked readback at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_cpu_only_short_video_pilot_readback_2026-05-16.md`. The helper stayed inside the exact boundary, but `qwen_vl_utils` could not use the approved `torchvision` route because `torchvision.io` has no `read_video`; no candidate was accepted, raw parent stayed unchanged at `967 / 967`, and model cache stayed unchanged.
- Company prepared the Decord backend short-video approval packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_decord_backend_short_video_approval_packet_2026-05-16.md`; it recommends a local `decord` backend route as the next possible video path, with install/use limited to the existing ignored App venv, CPU-only, exact `TEST_398_02_FIELD_SAMPLING` scope, existing model cache, ignored output, and no `torchcodec`, `ffmpeg`, preprocessing, GPU/CUDA, public, or canonical writes.
- Recommended next step: stop Wave 6 video here by default; if Wave 6 continues, explicitly approve the Decord backend packet or prepare a different backend/runtime-change or preprocessing/frame-sampling approval packet. Do not rerun the same CPU-only `torchvision` route.

### Wave 7: Planner And Agent Routing Graph

Purpose:

- Help agents route work like a cross-domain team.

Data:

- `work_domains`, `work_projects`, `tasks`, `work_programs`, links.
- Company registry and domain reports.

Success:

- Agent can answer "who owns this, what is blocked, and what needs approval?" without writing Planner records.

2026-05-15 docs-only design pass:

- Company documented the Wave 7 Planner And Agent Routing Graph design at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_7_planner_agent_routing_graph_design_2026-05-15.md`.
- Design decision: Wave 7 should project Planner truth plus Company registry/domain-report routing into a derived routing graph, not create a new work queue or replace Planner/Supabase as task truth.
- Canonical sources remain `work_domains`, `work_programs`, `work_program_projects`, `work_projects`, `tasks`, `content_calendar`, `_system/agent_repo_registry.md`, Company domain reports, and domain repos.
- Proposed future local output path, if separately approved: `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_7_planner_agent_routing_graph\`.
- Recommended node families: `WorkDomain`, `WorkProgram`, `WorkProject`, `Task`, `ContentCalendarEntry`, `DomainRepo`, `DomainReport`, `ApprovalGate`, `HandoffSurface`, and `DeferredGate`.
- Required boundary: agents may answer who owns work, what is blocked, what approval applies, and where handoff should go, but must not mark tasks done, change Planner records, create schedules, automate work, or treat the routing graph as canonical truth.
- Wave 7 explicitly treats Waves 4 and 6 as deferred return gates that must come back later, while Wave 5 expected-status readback has been reviewed and accepted as the local no-embedding baseline and the vector/embedding decision brief is complete.
- Recommended next step: Wave 7 source/readiness review for Planner and registry routing sources, then a no-write App design-review packet only if the read-only source shape is clear.
- Do not create a helper, generated output, Planner/Supabase writes, App runtime behavior, schema change, persistent graph service, vector index, public output, domain repo edits, paid service, automation, or canonical writeback from this design.
- Company completed the Wave 7 source/readiness review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_7_source_readiness_review_2026-05-15.md`.
- Result: `source_shape_ready_live_read_deferred_app_packet_ready`.
- App source/schema shape is ready for a future no-write design-review packet: migration 007 supports `work_domains`, `work_projects`, `tasks`, and `content_calendar.work_project_id`; migration 010 supports `work_programs` and `work_program_projects`; App `loadCalendar()` already reads the relevant Planner sources; Program reads are optional-schema guarded; App `out/` is ignored.
- Live Planner/Supabase reads, generated routing output, helper implementation, Planner writes, App runtime behavior, schema changes, graph runtime, public output, automation, and canonical writeback remain unapproved.
- Recommended next step: prepare the Wave 7 Company-to-App design-review packet for no-write Planner/agent routing readiness.
- Company prepared the Wave 7 App design-review packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_7_app_design_review_packet_2026-05-15.md`.
- The packet asks App for docs-only review of the future no-write Planner/registry routing helper boundary: read path, live-read gate, ignored output path, source set, write-path exclusion, canonical boundary, deferred gate handling, readback shape, and stop conditions.
- The packet does not approve App code changes, helper implementation, generated output, live Planner/Supabase reads, Planner writes, task/project/program edits, source-link edits, schedule/status/done/archive changes, App runtime behavior, schema/migration work, graph runtime, vector/embedding work, automation, public behavior, sensitive indexing, paid services, or canonical writeback.
- Josue chose to pause Wave 7 like Waves 4 and 6 and continue to Wave 8 docs-only.
- Josue later approved the Wave 7 App docs-only review, which App completed at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave7-design-review.md`.
- Wave 7 is now a deferred return gate after Company design, source/readiness review, Company-to-App packet, and App docs-only review. App accepts the future no-write routing boundary in principle, but helper implementation, generated output, live Planner read, Planner write, graph runtime, App runtime behavior, automation, public output, and canonical writeback remain unapproved.
- Company then continued with Wave 8 Telemetry Summaries docs-only design.

### Wave 8: Telemetry Summaries

Purpose:

- Add climate/control context without introducing a new time-series database.

Data:

- `telemetry_snapshot`.
- `biome_telemetry` rollups by biome/hour/day.

Success:

- Agent can reason over current vs historical climate behavior while preserving Hardware/App/Web public/private boundaries.

2026-05-15 docs-only design pass:

- Josue chose to pause Wave 7 as a deferred return gate and continue to Wave 8 docs-only.
- Company documented the Wave 8 Telemetry Summaries design at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_8_telemetry_summaries_design_2026-05-15.md`.
- Design decision: Wave 8 should derive telemetry summaries for climate context from approved sources, not create a new time-series database or change telemetry producer/runtime behavior.
- Candidate sources are `telemetry_snapshot`, `biome_telemetry`, local telemetry-domain references, Hardware telemetry/source-of-truth docs, App Monitoring boundaries, and Web public telemetry boundaries.
- Required boundary: public-safe telemetry and internal operator telemetry stay separate; pump/liquid/control details remain internal-only unless Web/Hardware/App separately approve public reuse.
- No helper, generated output, live telemetry read, Supabase write, telemetry schema change, Hardware service change, firmware change, MQTT publish, command queue, device control, App Monitoring change, Web/public telemetry change, scheduled job, graph/vector runtime, paid service, public claim, or canonical writeback is approved.
- Recommended next step: Wave 8 source/readiness review for telemetry table/source shape, public/private field boundaries, cadence/retention, stale/offline semantics, and safe read path.
- Company completed the Wave 8 source/readiness review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_8_source_readiness_review_2026-05-15.md`.
- Result: `source_shape_ready_live_read_deferred_packet_ready_retention_open`.
- Source shape is ready for a no-write Hardware/App/Web design-review packet. Hardware source confirms `biome_telemetry` internal history schema and coordinator behavior; Web source confirms `telemetry_snapshot` public read contract, allowlist, and stale/offline semantics; App source confirms Monitoring internal operator fields and telemetry-control safety boundaries.
- Live `telemetry_snapshot` payload, live `biome_telemetry` rows, row counts, latest timestamps, RLS/policy state, sample quality, source volume, and retention policy were not checked.
- Company prepared the Wave 8 Hardware/App/Web design-review packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_8_hardware_app_web_design_review_packet_2026-05-15.md`.
- The packet asks Hardware, App, and Web for docs-only review of the no-write telemetry-summary helper boundary, including read path, live-read gate, snapshot-first vs history rollups, ignored output path, public/internal field separation, retention/cadence policy, Web reuse, App runtime boundary, Hardware live-control boundary, validation checks, and stop conditions.
- The packet recommends `telemetry_snapshot`-only readback as the first separately approved helper scope before any `biome_telemetry` history rollups.
- Company prepared the Wave 8 domain review synthesis at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_8_domain_review_synthesis_2026-05-15.md`.
- Synthesis result: `company_review_synthesis_ready_domain_acceptance_pending`.
- Company recommends a `telemetry_snapshot`-only first helper scope if implementation is later approved, with `biome_telemetry` history rollups deferred until retention/cadence/source-volume and public/internal validation gates are accepted.
- Recommended next step: pause Wave 8 as a deferred return gate before implementation and continue Wave 9 docs-only, unless Josue explicitly chooses to ask Hardware, App, and Web for domain-owned docs-only review notes now. Do not implement a helper, read live telemetry tables, generate output, change schema/runtime, change App/Web/Hardware behavior, create scheduled jobs, or perform canonical writeback.

### Wave 9: CRM, Financials, And Sensitive Domains

Purpose:

- Add commercial and finance context only after those systems are ready and policies exist.
- Define privacy, owner approval, and aggregate-only boundaries before any CRM, partner, Financials, public-intake, or other sensitive-domain projection.

Data:

- CRM relationship data only after Growth approves live use and privacy/commitment boundaries.
- Financial summaries only after Financials approves safe aggregation.
- Public intake aggregates only after Web/Growth approval.
- App CRM/Financials runtime sources only after App approves protected read/output boundaries.

Success:

- Agents get enough context for decisions without exposing sensitive raw financial/relationship records broadly.
- Agent recommendations remain review-required and cannot become outreach, sponsor, pricing, financial, legal, public, campaign, or launch commitments.

2026-05-15 docs-only design pass:

- Company documented the Wave 9 CRM, Financials, And Sensitive Domains design at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_9_crm_financials_sensitive_domains_design_2026-05-15.md`.
- Design decision: Wave 9 should create policy before data. Sensitive-source projection requires sensitivity tiers, owner approval matrix, allowed aggregate summary shapes, blocked source families, commitment discipline, agent recommendation policy, and audit/provenance requirements before any helper or live read.
- Candidate future output path, if separately approved: `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_9_sensitive_domains\`.
- Candidate future files: `sensitive_source_manifest.json`, `owner_approval_matrix.json`, `crm_readiness_summary.json`, `financials_aggregate_scope_summary.json`, `public_intake_aggregate_scope_summary.json`, `blocked_sensitive_sources.jsonl`, `review_required_sensitive_questions.md`, and `validation_report.json`.
- Sensitive or private by default: contact details, CRM notes, sponsor/partner conversation details, opportunity terms, pricing, outreach next actions, follow-up dates, financial account details, statement rows, documents, liabilities, account balances, cash snapshots, tax details, raw transactions, private sponsor notes, private analytics, credentials, service-role output, and App runtime logs.
- Blocked from Wave 9 generated output without separate owner approval: outreach execution, contact/backfill writes, sponsor promises, pricing, campaign dates, public claims, public copy, financial commitments, spend, legal decisions, raw finance rows, raw contact details, and broad embeddings/vector indexing of sensitive CRM or Financials data.
- No CRM reads, Financials reads, live Supabase reads, helper implementation, generated output, CRM writes, Financials writes, Planner writes, outreach, partner follow-up, sponsor commitments, pricing, campaign dates, revenue projections, legal decisions, public claims, App runtime changes, schema changes, migrations, public Web changes, export/import jobs, vector indexing, graph import, automation, paid services, or canonical writeback is approved.
- Company completed the Wave 9 source/privacy readiness review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_9_source_privacy_readiness_review_2026-05-15.md`.
- Result: `policy_shape_ready_owner_review_required_live_read_deferred_sensitive_projection_blocked`.
- Company prepared the Wave 9 Growth/Financials/App/Web owner-review packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_9_growth_financials_app_web_owner_review_packet_2026-05-15.md`.
- Company prepared the Wave 9 owner-review synthesis at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_9_owner_review_synthesis_2026-05-15.md`.
- Review finding: owner review is ready to request, but Growth/Financials/App/Web acceptance, live CRM/partner/Financials/public-intake/private-analytics/App-runtime reads, helper work, generated output, graph/vector indexing, outreach, spend, public claims, behavior changes, and canonical writeback remain unapproved.
- Recommended next step: ask Growth, Financials, App, and Web for docs-only owner review notes, or pause Wave 9 as a deferred return gate before any sensitive live read, helper, generated output, graph/vector projection, or implementation.

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

1. What privacy policy should govern CRM, financial summaries, and any agent logs before indexing?
2. Which exact Nemotron route should Wave 6 use if implementation is later approved: hosted/API, self-hosted NIM, local/Hugging Face/vLLM, DGX/Spark-style hardware, or fallback/benchmark only?
3. What summary cadence and retention boundary should Wave 8 use before any telemetry rollup helper is proposed?

Closed on 2026-05-15:

- Read-only export files for Wave 1 live under App's ignored `out/operation_living_intelligence/wave_1_lake_post_seal/` path.
- App owns the first helpers for JSONL generation, Cypher generation, and disposable Memgraph smoke testing.
- The first Memgraph pilot uses local Docker Desktop plus a disposable `memgraph/memgraph-mage:latest` container only; this is a pilot dependency, not day-to-day infrastructure.
- Wave 4 YouTube report path question is narrowed for the first packet: use manual export or targeted YouTube Analytics API query first, keep YouTube Reporting API bulk jobs for later recurrence.
- Wave 4 source identity is available, but auth/analytics data is not ready. Manual export or targeted API path choice remains open.
- Wave 5 corpus inventory, citation readiness review, no-write App manifest/chunk export proposal, Company-to-App design-review packet, App docs-only design review, local helper implementation, ignored local manifest/chunk/readback output, expected-status update/readback, vector/embedding decision brief, vector/embedding App packet, App docs-only review, local vector evaluation helper proposal, approved local vector-proxy helper implementation, refreshed baseline, and vector-proxy readback review are complete. The first vector-proxy run correctly blocked on stale baseline before semantic candidate output; after regeneration, the helper passed `15 / 15` with `75` candidate rows. The first corpus remains Company-owned/report-level, with deep Content/Research docs candidate-only and sensitive sources excluded. Semantic retrieval should continue beyond the no-embedding proxy only if a concrete retrieval failure or agent workflow need justifies true local/offline embeddings; pgvector remains deferred, and embeddings, vector index, public search, scheduled refresh, App runtime integration, live reads, expanded corpus, and canonical writeback remain unapproved.
- Wave 6 Media And Visual AI Readiness design is complete as docs-only at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_media_visual_ai_readiness_design_2026-05-15.md`. The task `398` four-item media set is the first bounded set; Nemotron/Codex remains first lane; Qwen remains fallback/benchmark; Twelve Labs remains later cloud benchmark only; model run, install/download, API call, upload, generated output, App helper/runtime, media scan, frame/thumbnail/sidecar/proxy creation, DaVinci work, media metadata write, graph/vector write, Supabase/Planner/Storage write, public output, and canonical writeback remain unapproved.
- Wave 6 source/runtime readiness review is complete as docs-only at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_source_runtime_readiness_review_2026-05-15.md`. Company prepared the Wave 6 App design-review packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_app_design_review_packet_2026-05-15.md`, and App completed the docs-only review note at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-design-review.md`. Company then prepared the media preflight policy/tooling proposal at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_media_preflight_policy_and_tooling_proposal_2026-05-16.md`, the Phase A implementation readiness checklist at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_preflight_implementation_readiness_checklist_2026-05-16.md`, the approved Phase A helper record at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_phase_a_media_preflight_helper_2026-05-16.md`, the Phase B media stream metadata approval packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_phase_b_media_stream_metadata_approval_packet_2026-05-16.md`, the approved Phase B readback record at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_phase_b_media_stream_metadata_readback_2026-05-16.md`, the model-route decision packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_model_route_decision_packet_2026-05-16.md`, the App model-route design-review packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_model_route_app_design_review_packet_2026-05-16.md`, App's docs-only model-route review at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-model-route-design-review.md`, the model-route feasibility preflight approval packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_model_route_feasibility_preflight_approval_packet_2026-05-16.md`, the approved feasibility helper/readback at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_model_route_feasibility_preflight_readback_2026-05-16.md`, the official route recheck/selection packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_official_route_recheck_and_route_selection_packet_2026-05-16.md`, the Qwen3-VL local pilot implementation approval packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_qwen3_vl_local_pilot_implementation_approval_packet_2026-05-16.md`, the Qwen3-VL local pilot readback at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_qwen3_vl_local_pilot_readback_2026-05-16.md`, the Qwen3-VL prompt hardening/usefulness review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_qwen3_vl_prompt_hardening_usefulness_review_2026-05-16.md`, the Qwen3-VL prompt-hardened rerun readback at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_qwen3_vl_prompt_hardened_rerun_readback_2026-05-16.md`, the video/GPU runtime decision packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_video_gpu_runtime_decision_packet_2026-05-16.md`, the video/GPU App design-review packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_video_gpu_runtime_app_design_review_packet_2026-05-16.md`, App's docs-only video/GPU runtime review at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-video-gpu-runtime-design-review.md`, the runtime/backend preflight approval packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_runtime_backend_preflight_approval_packet_2026-05-16.md`, and the approved runtime/backend preflight readback at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_runtime_backend_preflight_readback_2026-05-16.md`. Phase A is ready with all four source files present and parent folders unchanged; Phase B proved approved `ffprobe` stream metadata readback on the exact four files without source-folder side effects or live writes; feasibility preflight recorded local CPU/RAM/GPU/disk readiness and unchanged raw parent folders; route selection chose `Qwen/Qwen3-VL-2B-Instruct` local/offline; the prompt-hardened still-image rerun generated parsed candidate-only JSON with required public/canonical blocks, no environment-quality judgment, and unchanged raw parent folder at `430 / 430`; runtime/backend preflight reports existing local runtime/cache, `torch = 2.12.0+cpu`, `torch_cuda_available = false`, `torchvision` importable, `torchcodec`/`decord` missing, and raw video parent unchanged at `967 / 967`. Video input, model execution, GPU/CUDA runtime changes, decoder/backend changes, preprocessing, Research wording, Raw Footage policy beyond metadata readback, and privacy/license/cost/input gates remain unapproved.
- The Wave 6 CPU-only short-video implementation approval packet is prepared at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_cpu_only_short_video_implementation_approval_packet_2026-05-16.md`; implementation remains blocked until Josue explicitly approves that exact boundary.
- The approved CPU-only short-video helper blocked safely at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_cpu_only_short_video_pilot_readback_2026-05-16.md`; the current local `torchvision` route cannot read video because `torchvision.io` lacks `read_video`. Further video work requires separate backend/runtime/preprocessing approval.
- The Decord backend short-video approval packet is prepared at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_decord_backend_short_video_approval_packet_2026-05-16.md`; implementation remains blocked until Josue explicitly approves that exact boundary.
- Planner dependency projection no longer needs to wait as an undefined question: Wave 7 is now allowed to proceed as docs-only design/readiness, while implementation remains gated.
- Wave 7 Planner And Agent Routing Graph is now a deferred return gate after Company docs-only design at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_7_planner_agent_routing_graph_design_2026-05-15.md`, source/readiness review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_7_source_readiness_review_2026-05-15.md`, Company-to-App design-review packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_7_app_design_review_packet_2026-05-15.md`, and App docs-only design review at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave7-design-review.md`. It keeps Planner/Supabase as live task truth and Company registry/domain reports as routing truth, while designing only a derived no-write routing layer for ownership, blockers, approval gates, handoff surfaces, and deferred return gates. Live reads, output, helper work, Planner writes, graph runtime, App runtime behavior, automation, public output, and canonical writeback remain unapproved.
- Wave 8 Telemetry Summaries is now scoped as docs-only design at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_8_telemetry_summaries_design_2026-05-15.md`, with source/readiness review complete at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_8_source_readiness_review_2026-05-15.md`, the Hardware/App/Web design-review packet prepared at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_8_hardware_app_web_design_review_packet_2026-05-15.md`, and the Company domain review synthesis prepared at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_8_domain_review_synthesis_2026-05-15.md`. It keeps telemetry summaries derived, rebuildable, and planning-only while preserving Hardware/App/Web ownership, public/private field boundaries, and live-control safety. Domain-owned review remains pending; live reads, row samples, retention policy, helper work, generated output, schema/runtime changes, App/Web/Hardware behavior changes, scheduled jobs, and canonical writeback remain unapproved.
- Wave 9 CRM, Financials, And Sensitive Domains is now scoped as docs-only design at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_9_crm_financials_sensitive_domains_design_2026-05-15.md`, with source/privacy readiness review complete at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_9_source_privacy_readiness_review_2026-05-15.md`, the Growth/Financials/App/Web owner-review packet prepared at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_9_growth_financials_app_web_owner_review_packet_2026-05-15.md`, and the Company owner-review synthesis prepared at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_9_owner_review_synthesis_2026-05-15.md`. It keeps sensitive-domain projection policy-first: sensitivity tiers, owner approvals, aggregate-only summary shapes, blocked source families, commitment discipline, recommendation review gates, and provenance must come before any live read or helper. Result: `company_review_synthesis_ready_owner_acceptance_pending`. Growth, Financials, App, and Web acceptance remains pending; CRM reads, Financials reads, public intake reads, helper work, generated output, graph/vector indexing, outreach, spend, public claims, App/Web/Growth/Financials behavior changes, and canonical writeback remain unapproved.
- Company consolidated Waves 4-9 in the deferred return map at `archive/superseded/operation-living-intelligence/operation_living_intelligence_deferred_return_map_2026-05-15.md`. Wave 7 App docs-only review is complete, and Wave 5 is now the first completed low-risk implementation return with usefulness review, docs-only evaluation tuning plan, proposal, approved expected-status helper update, readback review, vector/embedding decision brief, vector/embedding App design-review packet, App docs-only review, local vector evaluation helper proposal, approved stale-baseline guardrail helper, refreshed baseline, and no-embedding vector-proxy readback complete. Recommendation: stop here by default unless a concrete retrieval failure justifies a true local/offline embedding pilot, or intentionally choose another deferred gate.

## Recommended Next Action

Use the completed docs-only App/Research/Content handoff, task `409` REST/OpenAPI audit pass, and design-only no-write proposal for **Wave 1: Living Atlas Graph Seed**:

- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_living_atlas_graph_seed_handoff_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_task_409_schema_data_audit_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_no_write_dry_run_proposal_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_app_design_review_packet_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_app_design_review_readiness_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_jsonl_dry_run_generation_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_memgraph_import_readiness_review_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_app_regeneration_helper_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_memgraph_import_proposal_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_cypher_import_file_generation_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_memgraph_runtime_check_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_memgraph_import_readback_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_memgraph_smoke_helper_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_pilot_dependency_decision_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_jsonl_readback_helper_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_public_reuse_boundary_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_1_public_reuse_sidecar_proposal_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_1_public_reuse_sidecar_generation_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_sql_metadata_json_packet_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_sql_metadata_review_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_durable_projection_design_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_manual_projection_helper_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_completion_and_next_waves_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_3_species_public_history_design_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_3_lake_post_seal_source_availability_review_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_3_no_write_app_implementation_proposal_2026-05-15.md`
- `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_3_app_design_review_packet_2026-05-15.md`

The Wave 1 durable-implementation gate is satisfied as manual internal orchestration only, and Wave 2 is closed as a successful no-Docker local proof. Company documented the session handoff at `archive/superseded/operation-living-intelligence/operation_living_intelligence_session_closeout_2026-05-15.md`. The recommended infrastructure posture is still to stop short of durable runtime work until a new proposal is approved. Wave 3 Species and Public History Expansion is also closed as a successful no-Docker local proof after docs-only design, Lake Post-Seal source-availability review, no-write App implementation proposal, Company-to-App design-review packet, App-side docs-only review note, verified App helper implementation, and Company readback review. Wave 4 YouTube Analytics Warehouse is now scoped as a docs-only design pass at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_4_youtube_analytics_warehouse_design_2026-05-15.md`; Company then completed the source/auth readiness review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_4_youtube_analytics_source_auth_readiness_review_2026-05-15.md`. Josue chose to defer manual/API analytics setup and continue Wave 5 instead. Wave 5 Retrieval Layer completed docs-only design at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_retrieval_layer_design_2026-05-15.md`, corpus inventory/citation readiness review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_retrieval_corpus_inventory_citation_readiness_review_2026-05-15.md`, no-write App manifest/chunk export proposal at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_no_write_app_manifest_chunk_export_proposal_2026-05-15.md`, App design-review packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_app_design_review_packet_2026-05-15.md`, and App docs-only design review at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave5-design-review.md`. Josue then approved the narrow local helper implementation; App added `tools/generate-oli-wave5-retrieval-manifest.js` and `tools/run-oli-wave5-retrieval-readback.js`, generated ignored output under `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\company_corpus\`, and Company recorded the verified baseline at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_retrieval_manifest_chunk_helper_2026-05-15.md`. Company then completed evaluation tuning, the expected-status helper update, expected-status readback review, vector/embedding decision brief, vector/embedding App design-review packet, App docs-only review, and local vector evaluation helper proposal; Wave 5 is accepted as a local no-embedding baseline, and semantic retrieval implementation now requires explicit proposal approval or revision. Wave 6 Media And Visual AI Readiness is now scoped as a docs-only design at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_media_visual_ai_readiness_design_2026-05-15.md`; Company completed the source/runtime readiness review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_source_runtime_readiness_review_2026-05-15.md`; Company prepared the App design-review packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_app_design_review_packet_2026-05-15.md`; and App completed the docs-only design review note at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-design-review.md`. Waves 4 and 6 remain deferred return gates. Wave 7 Planner And Agent Routing Graph is now also a deferred return gate after docs-only design at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_7_planner_agent_routing_graph_design_2026-05-15.md`, source/readiness review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_7_source_readiness_review_2026-05-15.md`, and Company-to-App design-review packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_7_app_design_review_packet_2026-05-15.md`. App docs-only review is now complete at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave7-design-review.md`; Wave 7 implementation remains paused before any helper, generated output, live Planner read, Planner write, graph runtime, App runtime behavior, automation, public output, or canonical writeback. Wave 8 Telemetry Summaries is now scoped as docs-only design at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_8_telemetry_summaries_design_2026-05-15.md`; Company completed the source/readiness review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_8_source_readiness_review_2026-05-15.md`; and Company prepared the Hardware/App/Web design-review packet at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_8_hardware_app_web_design_review_packet_2026-05-15.md`. The next step is domain docs-only review, or pausing Wave 8 before review and continuing Wave 9 docs-only, before any telemetry helper, live telemetry read, generated output, schema/runtime change, App/Web/Hardware behavior change, scheduled job, or canonical writeback. The JSONL/readback helpers and Wave 5 manifest/chunk/readback helper remain the default no-Docker local checks after regeneration. Memgraph has proven useful enough to remain a pilot dependency, but only as a disposable local runtime around verified App helpers until a durable runtime policy and automation boundary are separately approved.

Wave 8 follow-up: Company prepared the domain review synthesis at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_8_domain_review_synthesis_2026-05-15.md`. The recommended default is now to pause Wave 8 as a deferred return gate before implementation and continue Wave 9 docs-only, unless Josue explicitly chooses domain-owned Hardware/App/Web review notes now.

Wave 9 is now docs-only design plus source/privacy readiness review plus owner-review packet plus Company synthesis at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_9_crm_financials_sensitive_domains_design_2026-05-15.md`, `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_9_source_privacy_readiness_review_2026-05-15.md`, `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_9_growth_financials_app_web_owner_review_packet_2026-05-15.md`, and `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_9_owner_review_synthesis_2026-05-15.md`. The next recommended step is docs-only Growth/Financials/App/Web owner review, or pausing Wave 9 as a deferred return gate. Sensitive live reads, helpers, generated output, graph/vector projection, outreach, spend, public claims, App/Web/Growth/Financials behavior changes, and canonical writeback remain unapproved.

Deferred return map: Company consolidated Waves 4-9 at `archive/superseded/operation-living-intelligence/operation_living_intelligence_deferred_return_map_2026-05-15.md`. Wave 7 App docs-only review is complete at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave7-design-review.md`, and Wave 5 local manifest/chunk/keyword-baseline helper is verified at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_retrieval_manifest_chunk_helper_2026-05-15.md`, usefulness-reviewed at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_retrieval_baseline_usefulness_review_2026-05-15.md`, eval-tuning-scoped at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_evaluation_tuning_plan_2026-05-15.md`, approval-packeted at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_expected_status_helper_update_proposal_2026-05-15.md`, implemented at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_expected_status_helper_update_2026-05-15.md`, accepted at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_expected_status_readback_review_2026-05-15.md`, decision-briefed at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_vector_embedding_decision_brief_2026-05-16.md`, packeted for App review at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_vector_embedding_app_design_review_packet_2026-05-16.md`, App-reviewed at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave5-vector-embedding-design-review.md`, proposal-ready at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_local_vector_evaluation_helper_proposal_2026-05-16.md`, implemented as a stale-baseline guardrail at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_local_vector_evaluation_helper_2026-05-16.md`, and accepted after refreshed vector-proxy readback at `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_local_vector_proxy_readback_review_2026-05-16.md`. Josue or owner input is required before API/OAuth setup, live/private reads, additional helper implementation, expanded generated output, model/tooling work, sensitive owner-owned data use, App/Web behavior changes, structured writes, paid services, embeddings/vector work beyond the approved local proxy, public search, scheduled refresh, or canonical writeback. Recommended next gate: stop here by default unless a concrete retrieval failure justifies a true local/offline embedding pilot, or intentionally choose another deferred gate.

No durable graph infrastructure, App runtime behavior, Planner/Supabase write, public behavior, paid service, canonical writeback, or source-of-truth change is approved by the handoffs, audits, proposals, local helpers, or disposable smoke tests.
