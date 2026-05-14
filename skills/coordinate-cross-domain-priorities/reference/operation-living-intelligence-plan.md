---
id: operation_living_intelligence_plan
title: Operation Living Intelligence Plan
domain: company_operations
last_updated: 2026-05-14
tags: [operation-living-intelligence, ai-infrastructure, databases, analytics, graph, vector, agents, cross-domain]
status: active_planning
---
# Operation Living Intelligence

Operation Living Intelligence is the Company-approved name and active planning program for building miniBIOTA's long-term agent data stack: the coordinated system of Markdown memory, Supabase operational records, graph intelligence, vector retrieval, analytics warehousing, optional agent runtime memory, automation, visual AI, local models, and cross-domain agent routing.

This is an active planning and architecture document. It does not approve live database writes, schema changes, migrations, paid subscriptions, public website changes, app runtime changes, automated agent execution, local model installation, or structured record changes. Those require explicit approval through the normal Company/App/domain gates.

## Purpose

miniBIOTA is accumulating several kinds of knowledge that do not belong in one database:

- Durable strategy, governance, decisions, and agent instructions.
- Live operational records such as Planner projects, tasks, programs, content calendar items, domain records, and workflow statuses.
- Ecological history, species relationships, event timelines, provenance, media evidence, and public-safe claim paths.
- Searchable text, notes, drafts, transcripts, source packets, and content archives.
- YouTube, website, social, newsletter, support, and agent-performance analytics.
- Short-lived agent context, cache, queue state, and session/runtime memory.
- Image and video understanding, media indexing, visual evidence review, and local vision-language model workflows.
- Future automated agents that can monitor, summarize, draft, route, and propose work with human approval where required.

The goal of Operation Living Intelligence is to make these systems work together as one coherent agent operating layer without turning any single database into a confused source of truth.

## Core Operating Principle

Use each system for the kind of truth it is best at.

```text
Markdown = memory and meaning
Supabase/Postgres = operational truth
Graph database = relationships and provenance
Vector search = semantic retrieval
Analytics warehouse = performance history and trend analysis
Redis/cache = temporary runtime memory
Local/visual AI = media understanding and private model execution
Agents = routed access, synthesis, and approved actions
```

The system should feel simple to the operator: ask an agent a question, let the agent route to the right sources, then receive a grounded answer with evidence, uncertainty, downstream owners, and approval needs.

## Current State

- Company already uses a Markdown vault for durable Company memory, governance, reports, skills, and cross-domain coordination.
- App Planner/Supabase is the live structured work queue for Company and domain work.
- Supabase/Postgres is already the strongest current source for operational records, Planner status, app-backed workflows, and structured tables.
- Operation Living Atlas has already proven the need for relationship-aware ecological knowledge: species, events, observations, media, claims, publicness tiers, source packets, and uncertainty labels.
- Existing guidance says not to create a dedicated Living Atlas queue table until manual packet flow or multiple concurrent packets prove the need.
- The emerging question is broader than Living Atlas: how should miniBIOTA coordinate all AI, database, analytics, and agent-memory infrastructure over time?
- Josue approved **Operation Living Intelligence** as the program name on 2026-05-13 and directed Company to plan for every beneficial database/AI system while blending the current workflow with staged buildout.

## Operation Name

Use **Operation Living Intelligence**. Josue approved this name on 2026-05-13.

Rationale:

- It fits the existing naming pattern beside Operation Living Atlas and Operation Living Web.
- It is broad enough to include AI agents, knowledge graphs, analytics, retrieval, and database routing.
- It does not imply a public launch, product promise, or immediate technical migration.
- It frames the work as an internal operating intelligence layer, not just a tool purchase.

Possible alternate names if Josue wants a different feel:

- Operation Data Nervous System.
- Operation Agent Memory Stack.
- Operation Intelligence Layer.
- Operation Living Data Spine.

## Kickoff Decision - 2026-05-13

Josue approved the name **Operation Living Intelligence** and directed Company to plan the full beneficial system stack across agent domains.

Kickoff posture:

1. Use a graph-first kickoff because Operation Living Atlas already has a concrete Lake Post-Seal packet that can test relationship reasoning, provenance, publicness, and claim safety.
2. Keep current Markdown/Supabase/Planner workflows live while new systems are built in parallel.
3. Treat analytics warehouse, retrieval, visual AI/local model, cache/runtime, and automation work as sidecar planning during the first graph pilot.
4. Build the agent routing matrix before giving agents new write-capable tools.
5. Prefer free/local pilots first, but choose paid tools when they clearly produce the best overall outcome.
6. Treat all live database writes, schema changes, App runtime work, public website changes, paid subscriptions, automated scheduled jobs, and local model installs as separate approval-gated implementation steps.

Follow-up decisions:

- On 2026-05-13, Josue chose **YouTube analytics first** for the analytics warehouse lane.
- On 2026-05-13, Josue chose **Memgraph** for the graph pilot direction.
- On 2026-05-13, Company recommended keeping biome telemetry in Supabase/Postgres for now instead of adding a separate time-series database during the first Operation Living Intelligence buildout.
- On 2026-05-14, Josue updated the visual media intelligence direction to a
  **Nemotron/Codex-first visual media intelligence build** after reviewing
  NVIDIA Nemotron 3 Nano Omni. Codex should build the local/private pipeline
  and NVIDIA Nemotron 3 Nano Omni, or the best current Nemotron
  omni/video-capable deployment at implementation time, should serve as the
  first media-analysis engine. Qwen is retained as a fallback/benchmark lane,
  not the primary build path. After the Nemotron/Codex build produces a usable
  candidate annotation workflow, miniBIOTA should try the **Twelve Labs free
  tier** on the same bounded media set as a benchmark/refinement lane, not as
  the initial source-of-truth media system.

## Source Checks - 2026-05-13

Josue clarified that local hardware information should be checked through the Content agent, and that the media folder is used by the App agent.

Verified operating facts:

- Content production setup currently records DaVinci Resolve Studio 20.3.2 Build 9 on Windows 11 Pro, with an MSI SHADOW RTX 5060 Ti 16GB GPU and CUDA enabled.
- Content production setup records the active media storage as a 10TB WD Red Plus HDD, with backup drive purchase still a high-priority gap.
- App runtime defaults media indexing to `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos`.
- App runtime owns the media indexing/reindexing path through the Media Library tooling, including thumbnail access and Supabase-backed media records.
- App media library schema contains `media_assets`, species/biome/system/chronicle link tables, tag tables, and media project tables.

Routing implication:

- Content owns production workstation and editing/runtime assumptions for local visual AI feasibility.
- App owns media indexing, Media Library schema, review-state/write paths, and any local model integration that touches App runtime or Supabase-backed media records.
- Raw Footage remains source-media provenance and file-organization context.
- Research reviews ecological/species claims produced from visual AI.
- Company coordinates the cross-domain sequence and approval gates.

Detailed data projection scope:

- The table/source-level projection matrix for species, observations, Content pipeline, chronicles, media assets, Planner records, YouTube analytics, telemetry, CRM, Financials, Memgraph, pgvector, and analytics now lives at `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-data-projection-matrix.md`.
- Use that matrix before implementing any export, import, sync, Memgraph graph, vector index, analytics warehouse, or writeback flow.
- A first read-only live Supabase schema audit was completed on 2026-05-13 and documented at `domains/company/operation_living_intelligence_supabase_schema_audit_2026-05-13.md`. It found 108 public-schema tables/views, one exposed RPC, and two public Storage buckets, and it confirmed that CRM and Financials need especially cautious projection boundaries.
- Planner task `409` is the implementation-time gate to rerun a deeper Supabase schema/data audit before the first Operation Living Intelligence export/import.

## Visual Media Intelligence Decision - 2026-05-14

The approved direction for the video/photo tagging, extraction, and rough-sequence workflow is **Nemotron/Codex first**, with **Twelve Labs free tier as a later side-by-side benchmark** and **Qwen retained only as a fallback/benchmark lane**.

Decision details:

- Codex is the builder/orchestrator for the first local media intelligence pipeline: folder reads, scene/chunk planning, model calls, candidate annotation files, search/index handoff, clip pull sheets, and later DaVinci-friendly export planning.
- NVIDIA Nemotron 3 Nano Omni, or the best current Nemotron omni/video-capable deployment at implementation time, is the first analysis engine for media understanding.
- Qwen may still be tested as a fallback or comparison model if Nemotron is unavailable, too costly, or weaker on miniBIOTA's bounded test set.
- The first output should be a rebuildable candidate annotation layer, not canonical media metadata.
- Twelve Labs should be tested only after the Nemotron/Codex workflow exists enough to compare against. Use its free tier, if available and still appropriate at test time, on the same small media set to benchmark search quality, timestamp usefulness, segmentation, structured metadata, and story-sequence usefulness.
- Twelve Labs is allowed as a refinement/reference candidate, but adopting it as an ongoing backend would require separate approval for cloud media upload, API/key setup, pricing, privacy, retention, and vendor dependency.
- ChatGPT/Codex and Gemini may help plan, build, or benchmark workflows, but they are not the first canonical media-processing engine for this build.

Initial candidate annotation fields:

- Source file path or App media asset reference.
- Start/end timestamp for video clips.
- Plain-language visual description.
- Candidate species/object/event labels.
- Story role such as context, tension, transition, evidence, beauty shot, Q&A support, or closing moment.
- Claim-support type and uncertainty.
- Publicness/review status.
- Research and Content review owner.
- Quality/usefulness notes for editing.
- Model name/version, prompt version, and run timestamp.

The first practical "unlock" target is a candidate clip sequence or pull sheet for a story such as Lake Post-Seal recovery or Aquatic Club proof media. The agent may propose clip order, in/out points, story role, and evidence caveats, but Content owns the final edit and Research owns ecological claim review.

Approved Planner follow-up:

- On 2026-05-14, Josue approved live Planner follow-up tasks `411` through `415` for the visual media intelligence path and Twelve Labs benchmark lane. Later that same day, Josue officially swapped the primary model lane from Qwen/Codex to Nemotron/Codex after reviewing NVIDIA Nemotron 3 Nano Omni. These tasks are unscheduled planned work across Company, App, Content, and Financials. They do not approve raw media upload, paid service adoption, App runtime changes, media metadata writes, or publication.

## Decision Boundary

Operation Living Intelligence may define:

- Which data system owns which kind of truth.
- Which domain owns implementation and review for each data layer.
- How agents should route reads, proposed writes, approvals, and closeout.
- Which pilots should be run before paid services or schema changes.
- What success looks like before scaling beyond a pilot.

Operation Living Intelligence does not by itself authorize:

- Supabase writes.
- Planner project/task/program writes.
- Raw SQL.
- Database migrations or schema changes.
- Neo4j, Memgraph, Pinecone, Qdrant, Weaviate, Milvus, ChromaDB, MongoDB Atlas, Redis, MotherDuck, BigQuery, Databricks, TiDB, Azure Cosmos DB, or other paid service subscriptions.
- Public website behavior changes.
- App runtime behavior changes.
- Financial commitments.
- Sponsor commitments.
- Launch dates or roadmap commitments.

## Recommended Architecture

### Layer Map

| Layer | Primary Tool | Role | Source Of Truth? | Owner |
|---|---|---|---|---|
| Durable operating memory | Markdown vaults | Strategy, governance, agent rules, domain briefs, decisions, source packets, review notes | Yes, for narrative/operating context | Company and domain repos |
| Operational database | Supabase/Postgres | Planner, tasks, programs, content calendar, app records, statuses, structured workflow records | Yes, for live operational state | App runtime; domain-owned records |
| Basic vector retrieval | Supabase pgvector first | Semantic search across selected structured text and embeddings | Derived/search layer unless table is canonical | App for implementation; domains for content |
| Dedicated vector DB | Qdrant, Pinecone, Weaviate, Chroma, Milvus only if needed | Higher-scale or specialized retrieval, filtering, hybrid search, large embedding collections | Derived/search layer | App/AI infrastructure |
| Graph intelligence | Neo4j or Memgraph | Species, observations, events, claims, media, provenance, dependencies, multi-hop reasoning | Initially derived; possible future canonical graph only by approval | Company governance; Research/App implementation |
| Analytics warehouse | MotherDuck/DuckDB or BigQuery first | YouTube, website, social, email, support, CRM funnel, agent telemetry, trend analysis | Derived analytical history | Growth, Content, Web, Company; App/data implementation |
| Short-term agent memory/cache | Redis or equivalent | Session state, queues, cache, locks, recent retrieval context | No, temporary runtime state | App/AI infrastructure |
| Visual AI/media intelligence | Nemotron/Codex local-or-private pipeline first; Qwen fallback/benchmark; Twelve Labs free tier later as benchmark/refinement if approved for the test set | Image/video/audio understanding, media captions, visual evidence extraction, object/event localization, rough clip notes, candidate story sequences, structured media metadata | Derived review layer unless approved as media metadata | Raw Footage, Content, Research, App |
| Automation/orchestration | App-owned workers, schedulers, queues, and agent tool bridges | Recurring checks, import jobs, retrieval refreshes, drift checks, report generation, proposed-task bundles | No, execution layer | App implementation; Company governance |
| Enterprise/lakehouse option | Databricks Lakehouse/Lakebase later | Enterprise analytics, governance, large-scale data lake, privacy/security controls | Future option only | Not needed by default |
| Distributed SQL option | TiDB/TiDB Cloud later | HTAP SQL + vector search if starting a new scalable operational DB | Not recommended as current replacement | Not needed by default |

### First Recommendation

Do not sunset any Supabase tables at the start.

Start with:

1. Keep Markdown and Supabase exactly in their current roles.
2. Add a local or free-tier graph pilot for Operation Living Atlas relationship intelligence.
3. Add analytics warehouse planning for YouTube/website/social performance, but do not implement until data sources and reporting questions are defined.
4. Use Supabase/pgvector for first-pass semantic retrieval before adopting a dedicated vector database.
5. Add Redis/cache only when agent workflows need queueing, speed, or temporary state.
6. Build the visual AI/media intelligence pilot as a Nemotron/Codex workflow, keeping local/private processing as the default target, then benchmark Twelve Labs free tier on the same bounded media set after the first workflow exists.
7. Keep all current workflows operational while derived layers are built, tested, and compared. Do not switch agents or domains to a new system until it passes readiness criteria.

## Candidate Platform Coverage

Operation Living Intelligence should evaluate every major data-system category that could materially help miniBIOTA, but it should not install or pay for every category automatically. Each platform earns adoption by solving a real workflow better than the current stack.

| Category | Candidate Platforms | Best Use | Initial Posture |
|---|---|---|---|
| Current operational database | Supabase/Postgres | Planner, App workflows, content calendar, Research/App structured records, current state | Keep as system of record |
| Postgres vector layer | Supabase pgvector, plain PostgreSQL + pgvector | First-pass embeddings, semantic search near existing records | Use before a separate vector DB if sufficient |
| Distributed SQL/HTAP | TiDB / TiDB Cloud | Unified SQL + vector + analytical workloads at larger scale | Evaluate later; do not replace Supabase now |
| Managed vector DB | Pinecone | Fully managed RAG retrieval and long-term vector memory | Defer until pgvector/local retrieval is insufficient |
| Filtering-heavy vector DB | Qdrant | Semantic search with strong metadata filtering and payload constraints | Strong candidate if source/publicness filters become central |
| Hybrid vector/keyword DB | Weaviate | Hybrid semantic + keyword search and RAG workflows | Candidate if hybrid search becomes core |
| Massive vector scale | Milvus | Very large embedding collections | Defer until scale demands it |
| Local vector prototyping | ChromaDB | Local experiments and quick RAG prototypes | Good for prototypes, not assumed production |
| Document + vector database | MongoDB Atlas Vector Search | JSON/document-centric agent memory and retrieval | Evaluate only if document-first workflows outgrow Postgres/Markdown |
| Graph database | Neo4j, Memgraph | Living Atlas relationships, provenance, claims, species/events/media graph | First active pilot category |
| Short-term memory/cache | Redis | Agent session state, queues, cache, locks, temporary memory | Add only when runtime automation needs it |
| Analytics warehouse | MotherDuck/DuckDB, BigQuery | YouTube, website, QR, social, newsletter, CRM/funnel, agent telemetry analytics | Inventory first; pilot after graph or in parallel docs-only |
| Enterprise lakehouse | Databricks Lakehouse / Lakebase | Enterprise governance, security, large-scale analytics, data sovereignty | Defer unless scale/security needs justify it |
| Globally distributed app DB | Azure Cosmos DB | Resilient, multi-model, cloud-scale app memory in Azure ecosystems | Defer unless Azure-centered agent infrastructure appears |
| Visual/local AI runtime | Nemotron/Codex pipeline first; NVIDIA Nemotron 3 Nano Omni or best current Nemotron omni/video-capable deployment at implementation time; Qwen fallback/benchmark | Image/video/audio understanding, media evidence extraction, candidate annotations, rough clip pull sheets | Plan now; pilot after media test set and hardware review |
| Video-native cloud benchmark | Twelve Labs free tier first, paid plan only after separate approval | Compare Nemotron/Codex results against video-native search, timestamping, segmentation, embeddings, and structured analysis | Benchmark after Nemotron/Codex build; do not upload broadly or adopt as backend without approval |
| Automation/orchestration | App-owned workers, queues, schedulers, MCP/tool bridges | Recurring reports, sync jobs, proposed-write bundles, drift checks | Design early; enable only after approval |

Adoption rule:

- Keep a platform out of production until it has a job that existing Markdown/Supabase/App workflows cannot do well enough.
- Prefer one excellent tool per category over overlapping tools with unclear ownership.
- Keep experimental systems rebuildable from canonical sources.
- Do not let "AI database" branding override source-of-truth discipline.

## Build Strategy

### Parallel Build, Then Controlled Cutover

The current Markdown + Supabase + Planner workflow should keep operating while Operation Living Intelligence is built.

Use this posture:

```text
Current workflow stays live
        |
        v
New systems read/copy approved data
        |
        v
Pilots prove value in parallel
        |
        v
Agents compare old vs new answers
        |
        v
Human approval for any source-of-truth change
        |
        v
Limited domain cutover only after readiness gates pass
```

Do not create a "big bang" migration. The safer path is a shadow/parallel system:

- Supabase and Markdown remain the source-of-truth surfaces during buildout.
- Graph, vector, analytics, visual AI, and cache layers start read-only or derived.
- Agents may use new layers for recommendations only until the layer proves accuracy and routing discipline.
- Writeback into canonical sources remains approval-gated.
- Each domain turns on new workflows only after its owner confirms the benefit, risks, and handoff rules.

### Readiness Gates

A new system can move from pilot to operational use only when:

- It has a named owner.
- It has a clear source-of-truth relationship.
- It can be rebuilt or audited from canonical sources.
- It preserves provenance, public/private boundaries, and confidence labels.
- Agents know when to use it and when not to use it.
- It has a rollback/fallback path to current Markdown/Supabase workflows.
- It has cost visibility.
- It has security and credential rules.
- It has passed a domain-specific evaluation set.
- It does not create unapproved public, financial, sponsor, legal, launch, or roadmap commitments.

### Human-Team Standard

The long-term goal is for the agent system to behave like a strong human team:

- Specialists know their domain.
- Specialists know when to ask another domain.
- Work is traceable.
- Notes become durable.
- Decisions are not lost in chat.
- Claims are evidence-backed.
- Tasks are routed to the right owner.
- Costs and risks are visible before action.
- Automation handles repetitive work while humans approve consequential moves.

The system should prioritize reliability, traceability, and domain discipline over novelty.

## Live Planner Program Strategy

Operation Living Intelligence is now a live Planner Program, but it should not displace the current Q2 operating order.

Recommended posture:

1. Keep `Operation Living Intelligence` live as Company-led Program `work_programs.id = 4`.
2. Keep `Aquatic Club Talk Readiness` as the protected near-term hard-window priority through the 2026-06-13 talk and 2026-06-14 closeout.
3. Use `Operation Living Atlas` as the first graph/retrieval proof case because the Lake Post-Seal packet already exposes the relationship, provenance, evidence, media, and publicness problems this stack is meant to solve.
4. Keep `Operation Living Web` downstream: it should consume curated graph/Atlas outputs after Research/Web/App review, not drive the first architecture build.
5. Link existing overlapping projects into the new Program as dependencies or supporting lanes rather than duplicating their tasks.
6. Create new domain-owned projects only where the new intelligence stack needs a distinct work lane.
7. Use due-only parent/container tasks for the sequential order of operation. Add scheduled child tasks only after the domain owner confirms timing.

### Recommended Program Links

Initial new projects, created on 2026-05-13:

| Domain | Project | Role |
|---|---|---|
| Company | Operation Living Intelligence Coordination (`work_project_id = 75`) | Lead |
| App | Operation Living Intelligence App Bridges & Agent Router (`work_project_id = 76`) | Member |
| Research/Ecosystem | Operation Living Intelligence Graph Ontology & Evidence Model (`work_project_id = 77`) | Member |
| Content | Operation Living Intelligence Source Inventory & Visual AI Readiness (`work_project_id = 78`) | Member |
| Web | Operation Living Intelligence Public Data & Analytics Surfaces (`work_project_id = 79`) | Supporting |
| Growth/Sales | Operation Living Intelligence Analytics Warehouse Pilot (`work_project_id = 80`) | Member |
| Financials | Operation Living Intelligence Cost & Subscription Review (`work_project_id = 81`) | Review |

Recommended existing project links:

| Existing Project | Link Role | Reason |
|---|---|---|
| AI & Knowledge Infrastructure | Dependency | Prior knowledge-infrastructure work and agent-access precedent |
| Operation Living Atlas Coordination | Dependency | First proof case and source-packet workflow |
| Operation Living Atlas Backfill | Dependency | Content source packets and historical evidence |
| Operation Living Atlas Evidence Integrity | Dependency | Research validation and evidence-link rules |
| Operation Living Atlas Review Workflow Support | Supporting | App workflow candidate after packet friction is proven |
| Operation Living Web Review Workflow Support | Supporting | Future private relationship-review workflow |
| Site Admin & Media Workflow Reliability | Supporting | App-owned media library reliability and media review paths |
| Supabase, Storage & Secret-Key Safety | Review | Schema, credential, and write-safety gate |
| Aquatic Club Talk Program Coordination | Dependency | Protects the current hard-window operating priority |

### Stage 2 Operation Mesh

Stage 2 is the coordination layer that keeps Operation Living Intelligence useful without letting it sprawl into the protected Aquatic Club talk window or duplicate existing Operations.

The mesh rule:

```text
Aquatic Club Talk sets near-term timing.
Living Atlas supplies the first proof case.
Living Web stays downstream of reviewed outputs.
AI & Knowledge Infrastructure supplies precedent and tooling discipline.
Operation Living Intelligence coordinates the stack, but does not replace any of them.
```

| Overlapping operation | Relationship to OLI | What OLI may do now | What waits |
|---|---|---|---|
| Aquatic Club Talk Readiness | Protected Q2 hard-window priority and current public-readiness filter | Use OLI planning only when it reduces talk friction: proof-media routing, source retrieval rules, claim/evidence routing, QR/follow-up analytics questions, and safer agent handoffs | Heavy graph/vector/analytics builds, model installs, broad media analysis, automation, and new App runtime work unless Josue explicitly reprioritizes |
| Operation Living Atlas | First graph/retrieval proof case and source-packet workflow | Use Lake Post-Seal as the first graph model candidate; preserve Research uncertainty, Content source packets, media evidence, publicness tiers, and proposed-write discipline | Dedicated queue table, App review workflow, structured writeback, or large backfill expansion until approval/write/readback friction proves the need |
| Operation Living Web | Downstream public consumption path for reviewed Atlas/OLI outputs | Define public-read-only constraints, website analytics questions, and future graph-powered public surface requirements | Public route changes, graph-powered UI, public copy changes, or website tracking changes without Web/Research/Brand approval |
| AI & Knowledge Infrastructure | Existing knowledge-work and agent-access precedent | Reuse its discipline for MCP/helper reads, source loading, routing rules, readback, and closeout standards | New broad tool access, automated writes, or cross-domain write authority until App/Company governance and approval gates are ready |

Near-term priority split:

| Timing | Allowed OLI work | Reason |
|---|---|---|
| Before 2026-06-13 talk | Docs-only planning, source/routing maps, small proof-media or claim-evidence handoff improvements, questions for analytics/reporting, and bounded follow-up prep that directly helps the talk | Supports the Q2 focus without stealing implementation capacity |
| 2026-06-13 to 2026-06-14 closeout | Capture talk outcomes, proof gaps, audience questions, follow-up metrics needed, and source/asset retrieval pain | Turns the talk into evidence for what OLI should build next |
| After talk closeout | Stage 3 graph pilot scope, implementation-grade schema/data audit task `409`, App-owned export/helper design, and deeper Content/Research/Web/Growth/Financials lane planning | Moves from governance to implementation readiness with better evidence |

Stage 2 dependency map:

| Dependency | Upstream owner | Downstream owner | Handoff surface |
|---|---|---|---|
| Talk proof themes and source/evidence needs | Content + Research + Company | OLI graph/retrieval planning | Talk notes, source packets, Research review notes, Company brief |
| Lake Post-Seal packet status and unresolved caveats | Content + Research | Stage 3 graph pilot | Operation Living Atlas packet, Research validation notes, projection matrix |
| Public-safe website consumption rules | Web + Research + Brand | OLI/Web analytics and public graph planning | Web repo docs, Company brief, future implementation handoff |
| App bridge and schema safety precedent | App | OLI implementation planning | App docs, Supabase safety project, Company database-awareness notes |
| Cost and paid-tool thresholds | Financials | OLI platform choices | Financials review task/project, OLI cost posture |
| Audience and follow-up signal questions | Growth + Web + Content | Analytics warehouse pilot | Growth notes, website analytics questions, content identity records |

Stage 2 closeout criteria:

- OLI remains live but does not displace Aquatic Club Talk Readiness.
- Stage 3 is framed as graph-first through Lake Post-Seal, not as a broad data-stack build.
- Web is named as a downstream consumer of reviewed graph/Atlas outputs, not the first implementation driver.
- AI & Knowledge Infrastructure is treated as precedent and support, not as a parallel source of task truth.
- No new implementation work begins before task `409` and the relevant App/domain approval gates.
- Any talk-support OLI work is limited to retrieval, evidence routing, proof-media planning, or analytics questions that directly help the talk.

### Stage 3 Graph-First Pilot Scope

Stage 3 approves the graph-first pilot scope and success criteria at the planning/governance level only. It does not approve a Memgraph install, export job, import job, App runtime change, schema change, or canonical writeback.

Pilot decision:

```text
Use a rebuildable local/free Memgraph-first Living Atlas graph seed.
Scope it to the Lake Post-Seal packet.
Evaluate it against evidence-path, publicness, uncertainty, and cross-domain routing questions.
Do not expand to a broad graph until this packet proves value.
```

Bounded source set:

| Source family | Included first | Excluded from Stage 3 |
|---|---|---|
| Published content | `content_pipeline.id = 338` and related source packet context | Broad Content pipeline history |
| Public chronology | `chronicles.id = 30` and related subject links | Full chronicle archive |
| Species | Flagfish `24`, Ghost Shrimp `67`, Freshwater amphipods `66`, Daphnia `164`, Mesostoma `167`, Moina `180`, and directly relevant related organisms if the packet requires them | Full species database |
| Observations | Observations `170-178` plus approved later context observations only when they explain the Lake Post-Seal arc | Unrelated observation cleanup |
| Story context | Relevant story threads, open loops, and story beats tied to the packet | Broad story graph |
| Media evidence | References to candidate media only, with review status and source path/asset id when available | Media metadata writes, broad raw-media indexing, cloud upload |
| Reviews and packets | Living Atlas source packet, Research validation notes, proposed-write bundle notes | New structured queue table or App review workflow |

Minimum graph model:

| Node or edge class | Required in first pilot? | Purpose |
|---|---:|---|
| `Species`, `Observation`, `ContentItem`, `Chronicle`, `SourcePacket`, `ResearchReview`, `Claim`, `MediaAsset` reference | Yes | Core evidence path from event to species/story/public claim |
| `Biome`, `PublicSurface`, `AgentDomain` | Yes, if source data is available | Preserve context, public rendering boundary, and owner routing |
| `StoryThread`, `OpenLoop`, `StoryBeat` | Optional but preferred | Test whether graph helps Content continuity |
| `SUPPORTED_BY`, `MENTIONS_SPECIES`, `OBSERVED_SPECIES`, `CAPTURED_IN`, `NEEDS_REVIEW_FROM`, `OWNED_BY`, `HAS_CONFIDENCE`, `HAS_PUBLICNESS_TIER` | Yes | Preserve provenance, owner, review, uncertainty, and publicness |
| Planner `WorkProgram`/`WorkProject`/`Task` nodes | No for first ecological seed; optional as a separate later proof | Avoid mixing task truth into the first ecology graph |

Pilot questions:

1. What evidence supports saying the lake changed after sealing or fish removal?
2. Which species are connected to the Lake Post-Seal event, and how?
3. Which claims are public-safe, uncertain, internal-only, or still review-needed?
4. Which observations, source packets, media references, and Research notes support each claim?
5. Which public pages, chronicle entries, or content items could safely reuse the evidence?
6. Which relationships are observed versus inferred?
7. Which Daphnia, Ghost Shrimp, Flagfish, amphipod, Mesostoma, or Moina facts still need caveats?
8. Which source packet facts would require explicit structured write approval?
9. Which media references are useful but still not canonical media metadata?
10. Does graph traversal make the packet easier, safer, or faster than Markdown/Supabase lookup alone?

Success criteria:

| Criterion | Pass condition |
|---|---|
| Evidence-path value | At least 7 of the 10 pilot questions are answered more clearly than with current Markdown/Supabase lookup alone |
| Provenance | Every node and edge preserves source table/path plus source id/path |
| Publicness and confidence | Public/internal/review and observed/inferred/uncertain labels remain visible in query outputs |
| Rebuildability | The graph can be deleted and rebuilt from source exports without losing canonical truth |
| No source-of-truth drift | No species, observation, content, media, Planner, or Web record treats Memgraph as canonical |
| Review routing | Research, Content, Web, App, and Company review needs are visible from graph paths |
| Implementation restraint | No paid service, App runtime work, schema change, media metadata write, or public surface change occurs during the pilot without separate approval |

Required gates before any import:

1. Complete task `409`: implementation-grade Supabase schema/data audit for the exact source rows and fields.
2. Confirm the local/App-approved Memgraph run pattern: local binary, Docker, or another App-approved local service path.
3. Define export file location, privacy posture, and ignored/local storage rules.
4. Produce a source manifest listing included rows, Markdown paths, media references, and excluded sensitive fields.
5. Define validation queries and readback format.
6. Confirm Research and Content review owners for claim and story interpretation.
7. Confirm Web review only begins after reviewed outputs exist.

Stage 3 closeout criteria:

- The graph pilot is scoped narrowly enough for one packet.
- The success criteria are testable before any import.
- The implementation gates are explicit and owner-mapped.
- The next work is task `409` plus an App/Research/Content implementation handoff, not a broad buildout.

### Stage 4 Pilot Review Rhythm

Stage 4 defines the review cadence for Operation Living Intelligence during pilot planning. It does not approve implementation, scheduling, Planner edits, App runtime changes, imports, exports, model installs, paid services, public-site changes, automation, or writeback.

Cadence decision:

```text
Use a weekly OLI review while pilot planning is active.
Keep the review lightweight before the 2026-06-13 Aquatic Club Talk.
Switch to biweekly only when the talk window or domain capacity makes weekly review too heavy.
Reconfirm cadence after the 2026-06-14 talk closeout.
```

Review scope:

| Review lane | What to check | Primary owner |
|---|---|---|
| Pilot phase | Whether the work is still in planning, audit, export design, local graph build, validation, or closeout | Company |
| Protected talk window | Whether OLI work is directly helping Aquatic Club Talk Readiness or should wait | Company + Content |
| Stage 3 gates | Task `409`, source manifest, Memgraph run pattern, export location/privacy, validation queries, and owner review paths | Company + App |
| Living Atlas proof case | Lake Post-Seal packet status, Research caveats, Content source packet readiness, and media-reference boundaries | Research + Content |
| Public surface boundary | Whether any Web-facing idea is still downstream of reviewed Atlas/graph outputs | Web + Research + Brand |
| Cost and tools | Whether any tool choice is still free/local/planning or needs Financials review | Financials + Company |
| Source-of-truth drift | Whether graph, vector, analytics, or visual AI layers are being treated as canonical without approval | Company + App |
| Domain handoffs | Which owner needs the next input, what surface carries it, and whether approval is required | Company |

Review inputs:

- Current status of Planner task `409` and any approved implementation handoff tasks.
- Stage 3 pilot gate checklist.
- Lake Post-Seal packet notes, Research validation notes, Content source packet status, and relevant media references.
- App notes for local Memgraph/export/helper design, if approved and available.
- Financials notes for paid/free tool thresholds, if a paid-service question appears.
- Talk-window conflicts, support needs, audience questions, proof gaps, or retrieval friction.
- Any new publicness, confidence, privacy, credential, or source-of-truth concern.

Review outputs:

- Confirm current phase and whether the work remains planning-only.
- Refresh blockers, dependencies, downstream owners, and approval gates.
- Decide whether the next week should stay docs-only, move to audit/export design, or wait.
- Record any Company brief, domain report, memory, or Planner implication.
- Flag any live Planner/Supabase write that needs explicit approval before it happens.

Escalation triggers:

- Paid subscription, paid API, cloud upload, or recurring service cost.
- Memgraph/Neo4j install, local service setup, Docker/service dependency, or App runtime bridge.
- Supabase export/import, schema change, migration, raw SQL, storage change, or credential change.
- Public website behavior, public tracking, public copy, or graph-powered public route.
- Raw media upload, broad media scan, canonical media metadata write, or model-derived claim becoming public.
- Automated agent run, scheduled job, writeback, or cross-domain write authority.
- Any public, sponsor, legal, financial, launch, or roadmap commitment.
- Any loss of publicness, confidence, uncertainty, or observed-vs-inferred labels.

Stage 4 closeout criteria:

- Weekly review is the default during pilot planning.
- Biweekly review is allowed only as a capacity adjustment, especially around the talk window.
- The review has clear inputs, outputs, owners, and escalation triggers.
- OLI cadence preserves the Aquatic Club Talk priority and does not authorize implementation by itself.
- Every review checks source-of-truth drift, domain handoffs, and whether live Planner/Supabase writes need approval.

### Stage 5 Post-Talk Implementation Readiness Decision

Stage 5 decides which Operation Living Intelligence lanes may move from planning into implementation readiness after the Aquatic Club Talk closeout. It does not approve the implementation work itself. Each lane still needs the normal domain approval, App/runtime approval, live-write approval, cost approval, or public-surface approval before any concrete build, import, install, automation, or source-of-truth change.

Decision rule:

```text
After 2026-06-14 closeout, allow the lowest-risk lanes to move into implementation readiness.
Keep all canonical writes, public surfaces, paid services, automation, and source-of-truth cutovers gated.
Use the Lake Post-Seal graph seed as the first real technical proof case.
```

Post-talk lane posture:

| Lane | Post-talk posture | May move next? | Required before implementation |
|---|---|---:|---|
| Task `409` schema/data audit | First required implementation-readiness step | Yes | Explicit approval to run the deeper audit; exact source rows/fields; readback notes |
| Living Atlas graph seed | Primary technical proof case | Yes, after `409` | Source manifest, Research/Content review owners, App-approved Memgraph run path, validation queries, local/ignored export location |
| Content/source inventory | Supporting readiness lane | Yes | Content confirms source packets, transcripts/scripts, production notes, and media references included/excluded |
| Research ontology and claim review | Supporting readiness lane | Yes | Research confirms publicness, confidence, observed/inferred labels, caveats, and review-needed rules |
| App bridge design | Design may advance; build remains gated | Yes, design only | App approval for any local service, helper, connector, secret, schema, runtime, or UI work |
| Visual AI/media readiness | Readiness may advance; model runs remain gated | Yes, bounded readiness only | Small test set, local/private processing path, hardware/storage review, Content/Research review loop, no media metadata write |
| Analytics warehouse questions | Planning may advance; API/export remains gated | Yes, questions/inventory only | Growth/Web/Content define first questions; separate approval for YouTube/API/OAuth/export, website tracking, or warehouse setup |
| Financials cost review | Required before paid adoption | Yes | Free/local baseline, paid threshold, owner, rollback plan, and no recurring spend without approval |
| Web public data surfaces | Stays downstream | Not yet | Reviewed Atlas/graph outputs, Web/Research/Brand approval, public copy/behavior approval |
| Vector retrieval | Stays secondary until graph/source packet proof | Not yet, except docs-only scope | Approved corpus, citation rules, publicness filters, evaluation set, App implementation approval |
| Automation/cache/runtime memory | Holds until manual pilot proves repeated need | Not yet | Proven repeated job, logs/readback, App approval, human approval for consequential writes |
| Controlled writeback/cutover | Holds until pilots pass | No | Pilot proof, domain owner approval, rollback path, source-of-truth decision, explicit write approval |

Stage 5 implementation-readiness sequence:

1. Finish Aquatic Club Talk closeout and capture proof gaps, audience questions, follow-up signals, source retrieval friction, and media-evidence needs.
2. Run the weekly OLI review and confirm whether domain capacity supports `409` plus docs-only implementation handoffs.
3. If approved, complete task `409` as the deeper schema/data audit for the exact Lake Post-Seal source set.
4. Produce a docs-only App/Research/Content handoff for the Living Atlas graph seed: source manifest, ontology, export format, validation queries, local storage/privacy, and review owners.
5. Decide whether the Memgraph local/free pilot build is approved as a separate implementation step.
6. Keep analytics, visual AI, vector retrieval, and Financials as sidecar readiness lanes until each has a bounded test set, owner, success criteria, and approval gate.
7. Keep Web public surfaces, automation, and writeback/cutover downstream until reviewed outputs and pilot results exist.

Stage 5 closeout criteria:

- The first post-talk technical lane is `409` followed by the Lake Post-Seal graph seed handoff.
- Content and Research readiness may advance because they directly feed the first graph proof case.
- App bridge work may advance as design only until implementation is separately approved.
- Visual AI and analytics may advance as bounded readiness/inventory lanes, not service connections or model runs.
- Web, vector retrieval, automation/cache, and writeback/cutover remain downstream until pilot proof and approvals exist.
- No live Planner/Supabase record, App runtime, schema, public website behavior, paid service, model run, media metadata write, automation, public commitment, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or source-of-truth change is approved by this stage.

### Sequential Work Order

Use this order for Planner parent tasks. Only the first Company coordination lane should be active immediately; most implementation lanes should stay planned until after Aquatic Club Talk closeout unless a task directly reduces current friction.

| Order | Phase | Default Timing | Primary Owner | Output |
|---|---|---|---|---|
| 0 | Live Program setup | Now | Company | Program record, linked projects, no-cutover rule |
| 1 | Source and routing map | Now/light work | Company + App + Content | Data-access matrix, agent routing map, source-of-truth map |
| 2 | Existing operation mesh | Now/light work | Company | Confirm how Aquatic Club, Living Atlas, Living Web, and AI Infrastructure overlap |
| 3 | Graph-first pilot design | Before heavy build | Company + Research + App | Neo4j/Memgraph pilot spec, ontology, sample packet questions |
| 4 | Content/source inventory | Light before talk; deeper after | Content | Source packet, transcript, production-note, and media-evidence inventory rules |
| 5 | App bridge design | Mostly after talk | App | Read-only graph/vector/analytics client design, secret rules, local model boundary |
| 6 | Visual AI readiness | Mostly after talk | Content + App + Research | Small media test set, hardware feasibility, annotation review path |
| 7 | Analytics warehouse pilot design | After protected talk work | Growth + Web + Company | YouTube/website/QR/social/source list and first dashboard questions |
| 8 | Paid/free tool decision | Before subscription | Financials + Company + App | Cost review and recommendation for Neo4j/Memgraph/vector/warehouse tools |
| 9 | Read-only pilot build | After approval | App + domain owners | Derived graph/retrieval/analytics pilot with readback |
| 10 | Controlled writeback/cutover review | After pilot proof | Company + App + domains | Decision on whether any workflow moves beyond read-only |

### First Planner Task Set

The first approved Planner setup created tasks in this shape so the live Program works like a real operating team without overloading current work. Tasks `380` through `408` are parent/container records with no scheduled dates.

Company lead project:

- Stage 0: Create the live Operation Living Intelligence Program and link overlapping operations.
- Stage 1: Finalize source-of-truth, domain-owner, and agent-routing matrix.
- Stage 2: Mesh Operation Living Intelligence with Aquatic Club Talk, Operation Living Atlas, Operation Living Web, and AI & Knowledge Infrastructure.
- Stage 3: Approve graph-first pilot scope and success criteria before any graph import.
- Stage 4: Run weekly or biweekly Operation Living Intelligence review during pilot planning.
- Stage 5: Decide which lanes may move from planning to implementation after Aquatic Club Talk closeout.

App project:

- Map App-owned Planner, Supabase bridge, media library, storage, secret-key, and indexing boundaries.
- Design read-only access pattern for graph, vector, analytics, and media-intelligence layers.
- Design the agent router/tool registry needed to decide which agent queries which system.
- Design local visual-model worker boundary without changing App runtime yet.
- Define approval/readback requirements for any future App schema, media metadata, or writeback path.

#### App Boundary Map - Task 386

Task `386` maps the App-owned surfaces that Operation Living Intelligence must respect before any export, graph build, media workflow, analytics connector, or agent tool bridge is implemented. This is a planning boundary only; it does not authorize App code changes, schema changes, local service setup, storage writes, media metadata writes, secret handling changes, or Planner/Supabase writes.

| App surface | Current role | OLI may use for planning | Boundary |
|---|---|---|---|
| Planner runtime | App-owned UI/runtime over `work_domains`, `work_projects`, `tasks`, `work_programs`, and `work_program_projects` | Read current work state, ownership, dependencies, blockers, and approved Program links | Planner status remains Supabase truth; task/project/program edits require approval |
| Supabase bridge | Internal app and approved helpers provide protected reads/writes where scoped | Design read-only export/readback patterns and source manifests | No raw SQL, migration, schema change, service-role action, or broad helper access without App-scoped approval |
| Media Library | App-owned media search/filter/tagging and Supabase-backed media records | Reference media assets, review status, tags, species/biome/system/chronicle links, and proof-media routing | Candidate OLI annotations are not canonical media metadata; writes require App/Content/Research approval |
| Raw media folder/indexing path | App runtime defaults media indexing to `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos` | Use as the boundary for future local/private media test-set planning | No broad scan, reindex, move, cloud upload, or model run without explicit approval |
| Storage/upload tooling | App/Web-owned Supabase Storage and image upload/rollback surfaces | Map file references and public-image provenance only | No storage write, bucket policy change, upload, deletion, or public image behavior change without approval |
| Secret-key path | Secrets stay in Electron main-process services, local environment, ignored config, OAuth, or user-level tooling | Document which future connectors need credentials and where approval is required | Do not commit keys, expose service-role credentials to renderer/browser code, or create new secret paths from OLI planning |
| Site Admin/admin records | App operator/admin workflows for species, biomes, chronicles, announcements, staging, and media | Identify downstream App/Web/Research review points for future curated outputs | No public/admin record change, public route behavior, or public claim update without domain approval |
| Monitoring/local hardware display | App/operator view for internal telemetry fields and MQTT read surfaces | Map internal-only telemetry context if analytics or graph planning needs it later | No firmware, MQTT, live-control, setpoint, or public telemetry change |
| Prompt Library | App-owned reusable prompt/workflow records | Treat as future retrieval/workflow-template candidate after App review | Prompt create/edit/favorite/archive are live writes and require approval |

Task `386` routing rules:

- Company may use this boundary map to plan OLI handoffs and approval gates.
- App owns implementation design for any bridge, connector, helper, service, UI, schema, storage, indexing, or credential change.
- Content and Research own interpretation of media usefulness, ecological claims, publicness, and review status.
- Web owns public rendering and public behavior once curated outputs exist.
- Raw Footage remains local source-media provenance; App's Media Library is the runtime/indexing surface.
- Financials reviews any paid App connector, API, storage, model, analytics, or managed service.

Task `386` closeout criteria:

- The active media folder boundary is named.
- Planner, Supabase bridge, Media Library, storage, secret-key, and indexing surfaces are separated.
- App implementation ownership is explicit.
- OLI planning can reference App surfaces without authorizing App changes.
- Later App tasks `387` through `390` have a clean boundary to build from.

#### Read-Only Access Pattern - Task 387

Task `387` designs how Operation Living Intelligence may query graph, vector, analytics, and media-intelligence layers during pilots without letting those layers write canonical records. This is a design pattern only; it does not approve a Memgraph install, vector index, analytics warehouse, media model run, App connector, scheduled job, credential setup, or any source-of-truth write.

Core pattern:

```text
Canonical source first.
Derived layer second.
Evidence/citation returned with every answer.
Proposed changes routed back to the canonical owner.
No canonical write from a derived layer during pilot.
```

Read-only access by layer:

| Derived layer | Read-only input | Allowed pilot query | Required output | Hard stop |
|---|---|---|---|---|
| Memgraph relationship graph | Approved rebuildable export from Supabase/Markdown/source packets | Relationship paths, evidence chains, owner/dependency paths, publicness/confidence traversal | Source table/path/id, relationship type, confidence/publicness/review labels, validation query result | No canonical Supabase, Markdown, media, Planner, or Web write |
| Vector retrieval | Approved corpus chunks with source IDs, paths, publicness labels, and version/run metadata | Similarity search, source packet retrieval, transcript/script/note retrieval, prompt/workflow lookup | Ranked chunks with source path/id, retrieval score, corpus version, public/internal status | No text edit, embedding refresh, corpus expansion, or publication without approval |
| Analytics warehouse | Approved read-only exports or API reports after source approval | YouTube/website/QR/social/task cadence questions and trend summaries | Source export/API name, date range, metric definition, aggregation notes, uncertainty/low-sample caveat | No campaign, sponsor, pricing, outreach, roadmap, or public claim commitment from metrics |
| Media intelligence | Approved bounded local/private media test set and candidate annotation files | Candidate visual descriptions, timestamps, tags, evidence usefulness, pull-sheet suggestions | Source file/asset reference, timestamp, model/prompt version, uncertainty, Content/Research review owner | No media metadata write, cloud upload, broad scan, publication, or ecological claim without review |
| Agent router/tool registry | Approved domain/source matrix and App-owned bridge design | Decide which system to query and which owner must review | Query route, sources consulted, omitted layers, approval needs, proposed next owner | No cross-domain write, hidden tool access, or automated action beyond approved scope |

Access envelope:

- Reads must be traceable to a source manifest or approved corpus/export.
- Derived layers must be rebuildable from canonical sources.
- Query outputs must include enough evidence for a human/domain owner to verify them.
- Agents may propose changes, but the proposal returns to the owning domain's canonical surface.
- App owns implementation of clients, connectors, helpers, secrets, logs, and runtime paths.
- Company owns the governance pattern and review cadence, not App runtime implementation.
- Any layer that needs credentials, APIs, local services, scheduled refresh, cloud processing, writeback, or new storage requires separate approval before use.

Task `387` closeout criteria:

- Graph, vector, analytics, media-intelligence, and router reads are separated.
- Every read path returns source/citation, publicness/confidence/review context where applicable, and an owner for proposed changes.
- No derived layer is allowed to become canonical during the pilot.
- The pattern gives task `388` enough structure to design agent routing/tool registry rules.

#### Agent Router And Tool Registry - Task 388

Task `388` defines the first agent router/tool registry shape for Operation Living Intelligence. The router's job is to decide which canonical source and which derived helper layer an agent should use, then identify the owner and approval path for any proposed action. This is a governance/design registry only; it does not grant new tool access, write authority, automation, cross-domain permissions, App bridge implementation, or live Planner/Supabase writes.

Router decision order:

```text
1. Classify the request and domain owner.
2. Read the canonical source first when current truth matters.
3. Use derived layers only as helpers.
4. Return evidence, uncertainty, and omitted/blocked layers.
5. Route proposed changes to the canonical owner.
6. Stop at the approval gate before any write or consequential action.
```

Tool registry fields:

| Field | Purpose |
|---|---|
| `tool_or_layer` | Human-readable name such as Supabase Planner, Memgraph, vector index, analytics warehouse, Media Library, visual AI candidate annotations |
| `canonical_or_derived` | Marks whether the layer owns truth or only helps retrieval/reasoning |
| `owning_domain` | Domain responsible for meaning, runtime, or approval |
| `allowed_agents` | Agents allowed to read or request the layer during the pilot |
| `allowed_actions` | Read, query, summarize, propose, validate, export-design, or write only if separately approved |
| `required_inputs` | Source manifest, task id, source id/path, date range, corpus version, media test set, or owner approval |
| `required_outputs` | Source/citation, confidence/publicness/review labels, owner, approval need, readback or validation notes |
| `blocked_actions` | Writes, public behavior, cloud upload, schema/runtime change, paid service, automation, or commitments |
| `approval_gate` | The human/domain approval needed before action moves beyond query/proposal |

Initial router map:

| Request type | First source | Helper layer | Primary owner | Agent may output | Stop before |
|---|---|---|---|---|---|
| Current task/project/program status | Supabase Planner/App Planner | Memgraph dependency graph later | App runtime + record owner | Status summary, owner, blockers, proposed next step | Planner edit/status/schedule/link/archive |
| Ecological relationship or claim | Research records/notes and source packets | Memgraph, vector source packets | Research | Evidence path, confidence/publicness labels, review need | Species/observation/claim write or public claim |
| Content/story/source lookup | Content pipeline/calendar/source packets | Vector retrieval, Memgraph story graph | Content | Prior coverage, source list, story continuity, proposed packet note | Calendar/pipeline write or publish action |
| Proof media lookup | App Media Library/raw media references | Memgraph media links, visual AI candidates | App + Content + Research | Candidate proof assets, review owner, caveats | Media metadata write, broad scan, upload, publication |
| Public website use | Web docs/public tables after review | Memgraph public-surface paths, analytics | Web + Research + Brand | Public-readiness note, downstream handoff | Public route/copy/behavior/tracking change |
| Analytics/performance question | Approved source export/API report | DuckDB/MotherDuck summaries | Growth + Content + Web + Company | Trend summary, caveats, follow-up questions | Sponsor/pricing/outreach/roadmap commitment |
| Tool cost/adoption | Financials approved summaries and OLI cost posture | Analytics/cost comparison docs | Financials + Company + App | Free/paid comparison, threshold, owner, rollback need | Subscription, purchase, or financial commitment |
| App/runtime/schema/tooling question | App docs/repo and approved App records | Router registry and source manifest | App | Implementation handoff, risk list, approval need | Code/schema/runtime/helper/secret/storage change |
| Visual AI/media model question | Approved bounded test-set plan | Candidate annotation layer | App + Content + Research + Raw Footage | Model-readiness note, review loop, privacy/cost gate | Model run, cloud upload, broad indexing, media write |

Per-agent policy:

| Agent | Default router role | Default read posture | Default proposal posture | Write/approval stop |
|---|---|---|---|---|
| Company | Governance router and dependency interpreter | Company docs, domain reports, Planner status, approved OLI layers | Handoffs, approval gates, sequencing, review rhythm | Planner writes, commitments, App/domain changes need approval |
| App | Runtime/tooling owner | App docs/code, Planner/App records, schema/runtime surfaces when scoped | Bridge designs, readback/logging, safety boundaries | Code/schema/runtime/helper/storage/secret changes need App-scoped approval |
| Research | Ecological meaning owner | Research records, graph candidates, source evidence | Claim labels, caveats, ontology corrections | Canonical records/public claims need Research approval |
| Content | Story/source owner | Content records/docs, packets, scripts, media candidates | Source packets, story links, pull sheets | Calendar/pipeline/publish writes need approval |
| Web | Public behavior owner | Web docs/code, public records, reviewed outputs | Public-surface plans, analytics events | Public behavior/copy/tracking changes need approval |
| Growth | Relationship/audience owner | Growth docs, approved CRM/analytics summaries | Follow-up strategy, audience questions | Outreach/CRM/sponsor actions need approval |
| Financials | Cost/finance owner | Financials summaries when scoped | Cost thresholds, paid/free recommendation | Spend/subscription/raw finance writes need approval |
| Raw Footage | Source media provenance context | Approved media references and routing docs | Evidence candidates, archive/proof routing | File moves/metadata/cloud upload need approval |

Task `388` closeout criteria:

- The router always checks canonical source before derived helper trust.
- Each tool/layer has owner, allowed action, required output, blocked action, and approval gate fields.
- Each domain agent has a default read/propose/write boundary.
- The registry can inform later App implementation without granting tool access by itself.
- Task `389` can use the registry to keep visual-model worker design outside App runtime until approved.

#### Local Visual-Model Worker Boundary - Task 389

Task `389` defines the local/private visual-model worker boundary for the Nemotron/Codex media-intelligence path without changing App runtime. This is a design boundary only. It does not approve a model install, model download, raw media scan, cloud upload, App integration, background worker, GPU setup, dependency install, media metadata write, storage write, or public/media claim.

Worker boundary decision:

```text
Codex may design a file-based sidecar worker.
Nemotron/Codex is the preferred first analysis lane.
Qwen remains fallback/benchmark only.
Twelve Labs remains a later bounded benchmark after a usable local/private workflow exists.
The worker produces candidate files, not App records.
```

Allowed sidecar responsibilities:

| Responsibility | Allowed in task 389? | Boundary |
|---|---:|---|
| Worker architecture sketch | Yes | File-based sidecar only; no App runtime integration |
| Input manifest shape | Yes | Lists approved files/assets only; no broad folder scan |
| Candidate annotation schema | Yes | JSON/JSONL or Markdown candidate outputs only |
| Clip pull-sheet shape | Yes | Content review aid, not DaVinci/App automation |
| Model route notes | Yes | Nemotron-first, Qwen fallback, Twelve Labs later benchmark |
| Review loop | Yes | Content reviews story usefulness; Research reviews ecological claims; App reviews metadata/runtime boundaries |
| Hardware/storage checklist | Yes | Readiness checklist only; no install or dependency change |
| Cost/privacy checklist | Yes | Required before hosted/API/cloud path |

Blocked until separate approval:

- Installing or downloading Nemotron, Qwen, CUDA/NVIDIA/NIM, vLLM, SGLang, TensorRT-LLM, Python packages, Docker images, or any model runtime dependency.
- Running a model over raw media.
- Broadly scanning, indexing, moving, copying, uploading, or reindexing the raw media folder.
- Creating App workers, IPC routes, UI, schema, migration, service, queue, scheduler, or helper code.
- Writing `media_assets`, media tags, media links, storage records, thumbnails, public copy, or ecological claims.
- Uploading raw media or persistent indexes to Twelve Labs, NVIDIA-hosted services, or any cloud video/model platform.
- Treating model labels, captions, or timestamps as reviewed truth.

Candidate file contract:

| Field | Purpose |
|---|---|
| `source_ref` | Local file path or App media asset reference when approved |
| `time_start` / `time_end` | Optional video timestamp range |
| `frame_ref` | Optional still/frame reference if created by an approved run |
| `description` | Plain-language visual/audio description |
| `candidate_labels` | Candidate species, object, event, behavior, or system labels |
| `story_role` | Evidence, context, transition, beauty shot, tension, Q&A support, or close |
| `claim_support_type` | What kind of claim the clip/image might support |
| `confidence` | Model/human confidence note, including uncertainty |
| `publicness` | Internal, review-needed, or public-candidate label |
| `review_owner` | Content, Research, App, Web, or Raw Footage owner needed next |
| `model_route` | Nemotron, Qwen fallback, Twelve Labs benchmark, or manual note |
| `model_version` / `prompt_version` | Exact versions after an approved run |
| `generated_at` | Timestamp after an approved run |

Task `389` closeout criteria:

- The visual worker is defined as a sidecar candidate-output workflow, not App runtime.
- Nemotron/Codex is preserved as the first lane; Qwen is fallback/benchmark only.
- Twelve Labs remains a later bounded comparison, not the first backend.
- Candidate annotations remain review artifacts until Content/Research/App approve any write path.
- The boundary gives task `390` enough structure to define approval/readback requirements for future App schema, media metadata, or writeback paths.

#### App Approval And Readback Requirements - Task 390

Task `390` defines the approval and readback requirements for any future App schema, media metadata, storage, runtime, helper, or writeback path related to Operation Living Intelligence. This is a governance requirement only. It does not approve the future writes, schema changes, App code changes, migrations, workers, services, model runs, media metadata writes, storage writes, or public behavior changes.

Approval packet required before any App-affecting implementation:

| Required item | Why it matters |
|---|---|
| Change type | Distinguish schema, runtime, helper, storage, media metadata, App UI, worker, queue, scheduled job, or canonical writeback |
| Owning domain | App owns runtime/schema/tooling; Content/Research/Web/Raw Footage/Financials own review meaning where relevant |
| Source records/files | Exact tables, rows, file paths, media asset IDs, storage buckets, or docs touched |
| Derived input | Export, manifest, candidate annotation file, model output, graph result, vector result, or analytics report being used |
| Proposed write target | Exact table/file/path/API/UI behavior that would change |
| Approval scope | Single run, bounded batch, recurring job, one-off schema change, or future delegated workflow |
| Validation plan | Queries, counts, sample checks, UI checks, or file checks that prove the change did what it claimed |
| Readback plan | What will be read back immediately after the action |
| Rollback/fallback | How to undo, ignore, rebuild, or fall back to current Markdown/Supabase/App behavior |
| Risk labels | Public/private, confidence, claim safety, credential, cost, security, source-of-truth, and domain-owner risks |

Approval gates by write class:

| Write class | Required approval before action | Required readback after action |
|---|---|---|
| App schema or migration | App-scoped approval plus explicit migration scope | Migration applied status, affected table/column/index/policy list, sample query or schema inspection |
| App runtime/helper/bridge | App-scoped approval for code/runtime path | Tool/bridge route exercised in read-only mode, logs or readback showing no unintended writes |
| Media metadata write | App + Content + Research approval, and Raw Footage/Web if public proof is implicated | Changed media rows/tags/links/review fields plus before/after summary |
| Storage upload/delete/policy | App + Web approval, and Content/Research if proof/public assets are implicated | Bucket/path/object readback, public/private access check, rollback path |
| Candidate annotation file creation | Approval for bounded run/test set | File count, schema check, model/prompt version, skipped/error list, confirmation no canonical record changed |
| Planner/Supabase task or project write | Record-owner approval or standing delegation | Changed row readback with id, status/date/link fields, and approval note |
| Public website behavior/copy/tracking | Web + Brand/Research/Content/Growth as applicable | Route/copy/event readback or implementation verification |
| Paid service/API/OAuth | Financials + App + owning domain approval | Account/key/storage/cost boundary confirmation without exposing secrets |
| Automation/scheduled job | App + Company + owning domain approval | Run log, source read list, output list, skipped/error list, and proof of no unapproved writes |

Default readback standard:

- Read back the exact row, file, object, route, or output that changed.
- Include stable IDs, paths, timestamps, and owner/domain fields where available.
- Confirm whether the action was read-only, proposed-write only, or canonical write.
- Confirm whether publicness, confidence, review status, and source IDs survived the action.
- Confirm no unrelated tables, files, storage buckets, public routes, or Planner records changed.
- Record any failed/skipped item and the next owner.

Task `390` closeout criteria:

- Every future App-affecting OLI action has an approval packet shape.
- Schema/runtime/media/storage/writeback classes each have explicit approval and readback requirements.
- Candidate annotations remain separate from canonical media metadata.
- Derived graph/vector/analytics/model outputs cannot write canonical App/Supabase/Web records by implication.
- The App lane is ready to hand off to Research task `391` without leaving hidden App write authority behind.

Research project:

- Define the first graph ontology for species, biomes, observations, events, claims, media, source packets, publicness, confidence, and reviews.
- Convert the Lake Post-Seal model packet into graph-candidate relationships without making canonical writes.
- Define how graph paths preserve evidence, uncertainty, inferred-vs-observed status, and Research review status.
- Evaluate whether graph traversal improves at least 7 of the 10 pilot questions.

#### Research Graph Ontology - Task 391

Research completed the first Research-owned graph ontology planning brief for task `391` on 2026-05-14:

`M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-task-391-graph-ontology.md`

Company should treat that Research brief as the detailed source for ecological ontology, claim safety, publicness, confidence, and review gates. The Company-side summary is:

```text
The first graph is a derived evidence and review graph.
It connects canonical records, source packets, claims, media, confidence labels,
publicness tiers, and review gates.
It does not become canonical ecology.
It must answer: what can be public, what is internal only, what supports this,
what must not be said, and what needs Research review?
```

Research ontology outputs:

| Area | Research decision |
|---|---|
| Source boundary | Lake Post-Seal proof case only: `content_pipeline.id = 338`, `chronicles.id = 30`, species `24`, `67`, `66`, `164`, `167`, `180`, observations `170-178`, explicitly approved context records only, Living Atlas source packets, Research validation notes, proposed-write bundle notes, and media references |
| Core node classes | `GraphSeed`, `SourcePacket`, `CanonicalRecord`, `Species`, `Biome`, `Observation`, `Event`, `Claim`, `Media`, `PublicnessTier`, `ConfidenceAssessment`, `ReviewGate` |
| Core edge families | Seed/provenance edges, canonical-record references, packet associations, species/biome subject edges, observation/event/media/claim support edges, publicness/confidence/review edges, context-vs-proof edges, and limitation edges |
| Cross-cutting fields | Source set id, derived-only flag, canonical record type/id, source doc path/section, evidence basis, confidence label, uncertainty note, observed-vs-inferred status, publicness tier, public-use status, review status, review owner, do-not-say guardrail, and source-check date |
| Public-use guardrails | Daphnia remains `Daphnia sp.` publicly; Daphnia establishment is unresolved; Ghost Shrimp breeding is confirmed but juvenile recruitment is unconfirmed; Mesostoma remains internal or review-gated; lake clearing, food-web completion, stability, and causation claims remain gated |
| First-pilot exclusions | No global record discovery, no whole ecosystem graph, no new claims from adjacency, no direct canonical links when only packet association is verified, no unreviewed media public claims, no story-thread/open-loop first-class expansion unless explicitly approved |

Task `391` Company closeout criteria:

- The Research ontology brief is linked from the Company OLI plan.
- Company uses the Research brief as the detailed ontology source instead of duplicating ecological authority.
- The first graph remains derived-only and bounded to the Lake Post-Seal proof case.
- Daphnia, Ghost Shrimp, Mesostoma, Moina, water-clearing, food-web-completion, chronology, and media-caption claims remain review-gated.
- Open Research questions are carried forward: approved context records outside `170-178`, story thread/open-loop node timing, source packet checksum/versioning, final review-status ownership if App implements workflows, implementation form for publicness/confidence/review gates, publish-date vs ecological-event-window model, media verification standard, and graph regeneration after source correction.

#### Lake Post-Seal Graph Candidates - Task 392

Research completed the task `392` docs-only graph-candidate relationship brief on 2026-05-14:

`M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-task-392-lake-post-seal-graph-candidates.md`

Company should treat that Research brief as the detailed source for candidate nodes, candidate edges, blocked edges, provenance references, confidence/publicness/review labels, and validation questions before any graph import. The Company-side summary is:

```text
Task 392 converts the Lake Post-Seal packet into candidate graph relationships.
Everything remains derived-only and candidate_not_imported.
The strongest edges are provenance, evidence, review, and guardrail edges.
The most important blocked edges are the tempting public overclaims.
```

Task `392` outputs:

| Area | Research output |
|---|---|
| Source key | Uses source IDs including `SRC391`, `SRC_PACKET_338`, `SRC_RESEARCH_VALIDATION`, `SRC_LINK_VERIFY`, `SRC_ARCHIVED_PROJECT`, and `SRC_MEDIA_PACKET` |
| Candidate nodes | Defines seed/source nodes, canonical-record pointer nodes, species nodes, observation nodes, event nodes, claim nodes, review gate nodes, and media candidate nodes |
| Candidate edges | Defines seed/provenance edges, source-to-record edges, species/biome context edges, observation evidence edges, event/claim edges, media candidate edges, and qualifying/blocking edges |
| Explicit biome pointer | Treats Freshwater Lake biome `1` as source-context pointer only, pending Company/App/Research confirmation before import |
| Blocked edges | Blocks direct canonical observation-to-pipeline/chronicle links, Daphnia species-level ID/establishment/clearing claims, food-web completion/stability, Ghost Shrimp recruitment, Mesostoma public-primary use, Moina establishment, public media captions, out-of-scope chronicle species, later observations, and story-thread/open-loop first-class nodes |
| Import validation | Requires frozen source versions/checksums, no-write dry-run/delete-regenerate path, candidate-vs-canonical distinction, publicness/review label visibility, blocked/internal/raw-evidence filtering, and explicit approval before any candidate edge becomes canonical/public/app-visible |
| Open cross-domain questions | Company/App/Content/Research need decisions on context records beyond `170-178`, Freshwater Lake biome node inclusion, story/open-loop node timing, blocked-edge import posture, candidate storage form, source checksum/path preservation, media approval bundle scope, Mesostoma public handling, Daphnia public wording, and publish-date vs ecological-event-window policy |

Task `392` Company closeout criteria:

- The Research graph-candidate brief is linked from the Company OLI plan.
- Candidate graph relationships remain docs-only and derived-only.
- Company recognizes blocked edges as guardrails, not implementation instructions.
- App task `409` and a later App/Research/Content handoff remain required before import/export work.
- Planner task `392` may be marked complete only after explicit approval and readback.

#### Graph Path Evidence And Publicness Safety - Task 393

Research completed the task `393` docs-only graph path safety brief on 2026-05-14:

`M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-task-393-graph-path-safety.md`

Company should treat that Research brief as the detailed source for how graph paths preserve evidence provenance, confidence/uncertainty, publicness, observed-vs-inferred/proposed/approved status, and Research review state. The Company-side rule is:

```text
Graph traversal must not make claims stronger.
The most restrictive confidence, publicness, and review state controls the path.
Blocked/review-required/internal/raw/proposed material stops public output and import readiness.
```

Task `393` path safety outputs:

| Area | Research output |
|---|---|
| Required path wrapper | Every readback path should expose `path_query_purpose`, `source_set_id`, `path_nodes`, `path_edges`, `path_sources`, evidence bases, confidence/publicness/review floors, observed/inferred/proposed mix, blocking nodes/edges, required reviews, safe readback, and do-not-say guardrails |
| Provenance rule | Every node and edge must preserve source docs/sections, source packet refs, canonical record pointers where applicable, source-check date, owner, and derived-only state |
| Confidence rule | Confidence labels never average or improve by traversal; the path inherits the most restrictive relevant confidence label |
| Publicness rule | Publicness can only narrow as a path grows; any internal, raw, blocked, proposed, or review-required hop blocks public output |
| Edge-type rule | `CONTEXT_FOR`, `QUALIFIES_CLAIM`, `REQUIRES_REVIEW`, and `BLOCKS_PUBLIC_USE_OF` cannot be treated as `SUPPORTS_CLAIM` |
| Review rule | Review gates are hard stops for public use and import readiness until resolved in the approved scope |
| Query/readback checks | Public-output and import-readiness queries must fail closed, return all path nodes/edges/gates, expose blockers, and produce a safe readback no stronger than the weakest path element |
| Lake Post-Seal examples | Safe chronicle frame, Daphnia introduction with unresolved establishment, Daphnia media block, Ghost Shrimp breeding vs recruitment, Mesostoma internal-only path, and direct-link cleanup block |

Task `393` Company closeout criteria:

- The Research path-safety brief is linked from the Company OLI plan.
- Graph path readback must preserve hop-by-hop provenance, labels, and review gates.
- Public-output and import-readiness queries are separated and fail closed.
- Company carries forward open decisions: blocked-edge storage/import posture, final review-status transition owner if App implements workflows, source version/checksum rule, explicit `purpose = public_output` query parameter, compact App display of mixed-status paths, confidence-floor implementation, and whether `validated_for_public_candidate` is enough for Website-visible output.

#### Stage 3 Pilot Question Evaluation - Task 394

Research completed the task `394` docs-only Stage 3 pilot question evaluation on 2026-05-14:

`M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-task-394-stage-3-pilot-question-evaluation.md`

Result:

```text
Pass count: 8 / 10.
Recommendation: continue.
Continue only to a no-write, derived-only dry-run/readback prototype or another docs-only design pass.
Do not proceed to live graph import, canonical writes, public rendering, or App behavior changes.
```

Task `394` evaluation summary:

| Pilot question area | Result |
|---|---|
| Evidence for lake change after sealing/fish removal | Pass |
| Species connected to the Lake Post-Seal event and how | Pass |
| Public-safe, uncertain, internal-only, and review-needed claims | Strong pass |
| Supporting observations, packets, media refs, and Research notes | Strong pass |
| Public pages, chronicle entries, or content items that could reuse evidence | Partial/fail; public surface reuse targets are not modeled clearly enough |
| Observed versus inferred relationships | Strong pass |
| Species caveats for Daphnia, Ghost Shrimp, Flagfish, amphipods, Mesostoma, and Moina | Strong pass |
| Source packet facts needing explicit structured write approval | Pass |
| Useful media references that are not canonical media metadata | Pass |
| Easier, safer, or faster than Markdown/Supabase lookup alone | Provisional pass; easier/safer yes, faster still needs dry-run proof |

Task `394` Company implications:

- The graph-first pilot clears the 7/10 planning threshold.
- The next approved posture is not live implementation; it is a no-write dry-run/readback prototype proposal or another docs-only design pass.
- Before any import or App behavior, OLI still needs public surface/reuse-target modeling, source version/checksum rules, readback proof that blockers/floors/do-not-say guardrails are visible by default, and evidence that a dry-run is faster without hiding caveats.
- Public surface reuse remains under-modeled and belongs with Content/Web ownership before public-output use.
- Speed is not proven until a no-write dry-run or query readback prototype exists.

Task `394` Company closeout criteria:

- The Research evaluation artifact is linked from the Company OLI plan.
- Company records the 8/10 pass result and "continue, but no-write/derived-only" recommendation.
- The graph pilot is allowed to proceed only toward dry-run/readback planning, not live import, public rendering, App behavior, or canonical writes.

#### Retrievable Source Inventory - Task 395

Content/Research completed the task `395` docs-only retrievable source inventory on 2026-05-14:

`M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-content-task-395-retrievable-source-inventory.md`

Company should treat that artifact as the detailed source for which Content-owned and cross-domain materials are candidates for graph dry-run/readback, vector retrieval, visual AI candidate annotation, analytics, or Markdown-only context. The file is a Content planning inventory stored under the Research brief path provided by the handoff; if Content later relocates or mirrors it, Company should update this pointer rather than duplicate the inventory.

Task `395` source inventory summary:

| Area | Content/Research output |
|---|---|
| Bounded case | Uses Lake Post-Seal Living Atlas / `content_pipeline.id = 338` / `chronicles.id = 30` as the first retrievability design pass |
| Included source classes | Living Atlas source packet, archived Content project notes, Research tasks `391-394`, named candidate footage/media recommendations, Content production setup notes, DaVinci workflow assumptions, and Supabase IDs as provenance pointers only |
| Candidate feeds | Separates graph dry-run/readback, vector retrieval, visual AI candidate annotations, analytics, and Markdown-only operating context |
| Publicness labels | Distinguishes public-safe candidate material, internal-only material, raw evidence material, review-needed material, and exclusions from the first retrieval seed |
| Media boundary | Uses explicitly listed media paths/timecodes as candidate references only; no media metadata, `media_assets`, species-image, caption, or publication approval is implied |
| Transcript gap | Records that `content_pipeline.id = 338` has `transcript = null`; the archived project final script may serve as script-equivalent planning context only with an explicit label |
| Hardware/local compute | Captures phone/camera, macro lens, stabilization, audio, DaVinci, GPU, storage, export, and workflow watchouts as production context, not ecological evidence |
| Validation questions | Requires source path/ID/owner/review preservation, public-output exclusion of internal/review-needed/raw material, vector distinction between final script and drafts, graph status separation, candidate-only media references, null-transcript handling, blocked-evidence readback, speed proof, and owner citation |

Task `395` Company implications:

- The Content/source inventory is now sufficient for a no-write, derived-only dry-run/readback design pass, but not for indexing, import, media metadata writes, visual AI annotations, public reuse, or App behavior changes.
- Public-output reuse still needs Content/Web/Research approval rules and explicit publicness filters before it can be tested.
- Raw Footage needs a read-only path/index strategy, candidate annotation storage policy, checksum/thumbnail/frame-extraction policy, backup readiness answer, and frame-level review owner.
- Financials needs storage/backup and local processing cost gates before large-scale visual AI or indexing.
- Company still needs to decide who approves the move from docs-only design to no-write dry-run/readback and what threshold proves OLI is faster or safer than Markdown/Supabase lookup.

Task `395` Company closeout criteria:

- The Content/Research source inventory artifact is linked from the Company OLI plan.
- Candidate retrievable materials remain docs-only and derived-only.
- The inventory does not approve graph import, vector ingestion, visual AI annotation, media metadata writes, App behavior, Planner updates, publication changes, or Supabase writes.

#### Source Publicness And Indexing Plan - Task 396

Content completed the task `396` docs-only source publicness and indexing plan on 2026-05-14:

`M:\miniBIOTA\miniBIOTA_Content\audits\living_atlas\2026-05-14-operation-living-intelligence-content-task-396-source-publicness-indexing-plan.md`

Company should treat that artifact as the detailed source for how each task `395` source/material group is classified before any no-write dry-run/readback. The Company-side rule is:

```text
Indexability is not public safety.
Every retrieved item must carry classification, allowed feed, publicness label,
review owner, blocked public-use cases, and validation checks.
```

Task `396` classification summary:

| Area | Content output |
|---|---|
| Classification vocabulary | Defines `safe-to-index`, `internal-only`, `review-needed`, `public-safe candidate`, `raw evidence only`, and `excluded` |
| Allowed feeds | Limits all feed labels to no-write `graph dry-run`, `vector retrieval`, `visual AI candidate annotation`, `analytics`, and `Markdown-only` |
| Source/material groups | Classifies the source packet, Research tasks `391-394`, archived project sections, pipeline/chronicle/observation pointers, null transcript gap, final script, story spine, production notes, prior transcript targets, production setup, and DaVinci tracker |
| Candidate media groups | Separates public-safe candidate media, review-needed media, internal-only media, and excluded media by path/timecode with caption and claim blocks |
| Hardware/local compute | Marks workstation, capture, lens, storage, GPU, export, and workflow notes as production context only, not ecological evidence |
| Feed-level gates | Requires per-feed exclusions and minimum validation before graph dry-run, vector retrieval, visual AI candidate annotation, analytics, or Markdown-only readback |
| Universal validation | Requires bounded source-set confirmation, source/owner/classification/publicness/review preservation, default public exclusion of internal/review-needed/raw/excluded material, blocked-evidence readback, transcript-null handling, media-reference-only behavior, ID-sensitive claim blocking, chronology separation, and unresolved owner reporting |

Task `396` Company implications:

- The Content/source lane now has a usable publicness/indexing gate for a later no-write dry-run/readback design.
- `public-safe candidate` still means candidate only; it does not approve publication, captions, species images, media records, Web rendering, or public copy.
- Section-level labeling is required for mixed documents like the archived Content project so final-script wording does not get blended with draft/story/session notes.
- Any visual media use remains candidate-only until Raw Footage/Content/Research review confirms path, timecode/frame, caption risk, and publicness label.
- The next Company/App decision point is where the no-write derived inventory lives and what benchmark proves faster/safer lookup.

Task `396` Company closeout criteria:

- The Content publicness/indexing artifact is linked from the Company OLI plan.
- The projection matrix treats task `396` as a source-classification gate, not as an ingestion approval.
- No graph import, vector ingestion, visual AI annotation, analytics job, media metadata, file move, public copy, publication record, Planner update, Supabase write, App behavior, Web behavior, or canonical Content/Research change is implied.

#### Visual AI Feasibility And Backup Risk - Task 397

Content completed the task `397` docs-only visual AI feasibility and backup-risk artifact on 2026-05-14:

`M:\miniBIOTA\miniBIOTA_Content\audits\living_atlas\2026-05-14-operation-living-intelligence-content-task-397-visual-ai-feasibility-and-backup-risk.md`

Company should treat that artifact as the detailed source for whether a future local/private visual AI feasibility pass is reasonable and what storage/backup gates must be satisfied first. The Company-side rule is:

```text
A tiny no-write local/private visual test may be reasonable later.
Scale, full scans, persistent derivatives, and production indexing are blocked
until backup/storage and owner-review gates are solved.
```

Task `397` feasibility summary:

| Area | Content output |
|---|---|
| Feasibility posture | `yes_later` for a tiny no-write local/private pass; `not_now` for any model run from this task; `blocked_for_scale` for batch processing, library scans, persistent derivatives, or production indexing |
| Workstation assumptions | Windows 11 Pro, RTX 5060 Ti 16GB CUDA, DaVinci Resolve Studio, Samsung Galaxy S25 Ultra capture assumptions, macro lens, separate narration workflow, export settings, and production watchouts remain planning assumptions only |
| Backup/storage gate | The 10TB raw media HDD and unresolved backup-drive gap block large-scale or automated processing, full-library scans, write-heavy workflows, persistent frame extraction, thumbnails, media fingerprinting, checksum sweeps, and model caches in media folders |
| Future run requirements | Requires Company, Content, Raw Footage, App, Research, and Financials approval before any model run, plus verified read-only handling, exact file/timecode selection, allowed outputs, stop conditions, and no install/download/cloud/upload bundled into the test |
| Task `398` constraints | Test set must use only task `395` media references and task `396` labels, prefer 3-5 items, max 6, avoid full clips, include at least one easy context item and at most one ID-sensitive item, exclude `20260501_071248.mp4`, and stop if the tool cannot prevent writes/uploads/broader scans |
| Allowed outputs | Candidate annotation rows only: source path, timecode/frame, tool/run date, prompt, plain visual description, broad candidate label, advisory confidence, copied publicness label, review owner, blocked public-use cases, and human review note |
| Forbidden outputs | Media metadata, `media_assets`, `species_images`, Supabase, Planner, graph, vector, App/Web writes, public captions, alt text, species copy, chronicle copy, publication notes, strong organism IDs, ecological outcome claims, establishment/recruitment/causation claims, checksums, thumbnails, frame exports, or persistent extracted media |

Task `397` Company implications:

- Task `398` may select a small test set, but it should not run models or approve the run protocol unless separately scoped.
- The first media set should favor harmless context/scene-description items, with at most one ID-sensitive item only if the goal is to test blocked-claim behavior.
- Raw Footage must approve read-only access and cache/output handling before any run.
- Research must define forbidden and allowed organism wording before any ID-sensitive item is tested.
- Financials must decide whether a tiny local GPU run is acceptable without purchase approval and what backup threshold blocks clip-based tests.

Task `397` Company closeout criteria:

- The Content feasibility/backup-risk artifact is linked from the Company OLI plan.
- The projection matrix treats task `397` as a feasibility and storage-risk gate, not a model-run approval.
- No model install, visual AI run, file move, media scan, metadata write, Supabase/Planner record, graph data, vector index, App/Web behavior, upload, purchase, or public-use approval is implied.

Content project:

- Inventory source packets, transcripts, scripts, production notes, footage references, and hardware/local compute assumptions that should be retrievable.
- Confirm which source materials are safe to index, which are internal-only, and which need publicness labels.
- Select a small visual AI test set after App confirms the media-folder/indexing boundary.
- Document how candidate visual annotations return to Content/Research review before any metadata write.

Web project:

- Define which public surfaces could eventually consume curated graph/Atlas outputs.
- Define website analytics events or exports needed for the analytics warehouse pilot.
- Keep public rendering read-only and Research-reviewed until explicit Web implementation approval.

Growth/Sales project:

- Inventory YouTube, website, QR, social, support, newsletter, and CRM signals that should feed analytics.
- Define first performance questions, especially around Aquatic Club follow-up and content-to-website movement.
- Keep sponsor, outreach, pricing, and CRM commitments approval-gated.

Financials project:

- Track expected free/local options versus paid options by category.
- Review the Neo4j Aura paid threshold against local Memgraph and Aura Free after the graph pilot scope is known.
- Review vector, warehouse, and automation costs only after each layer has a proven job.
- Approve no recurring subscription without a concrete benefit, owner, and rollback plan.

## System Roles In Detail

### Markdown Vaults

Use Markdown for:

- Company operating strategy.
- Governance rules.
- Source-of-truth rules.
- Domain briefs and reports.
- Agent instructions and playbooks.
- Human-readable source packets.
- Research validation notes.
- Proposed data model notes.
- Decision logs before they become structured records.

Do not use Markdown as:

- A competing live task-status system.
- A replacement for Supabase records where structured state already exists.
- A hidden place for public, financial, sponsor, legal, launch, or roadmap commitments.

### Supabase/Postgres

Use Supabase for:

- Planner `work_domains`, `work_projects`, `tasks`, `work_programs`, and related workflow tables.
- Content calendar and pipeline records.
- Research species, observations, biomes, chronicles, and ecological structured records.
- App runtime records.
- Public website read surfaces when already implemented.
- CRM, media, or admin records when approved and App-owned.
- Transactional state where "what is current?" matters.

Do not move out of Supabase during the pilot:

- Planner tasks/projects/programs.
- Task status.
- Content calendar records.
- App runtime tables.
- Approval-gated operational records.
- Domain-owned structured records that already serve the app.

Supabase remains the default system of record for live structured state.

### Graph Database

Use a graph database for relationship intelligence:

- Species connected to observations.
- Observations connected to media.
- Claims connected to evidence.
- Public-facing claims connected to review status.
- Events connected to before/after ecological states.
- Chronicles connected to species, systems, source packets, and media.
- Domain dependencies connected to owners, blockers, and handoff surfaces.
- Talk/web/content assets connected to proof and claim safety.

Candidate tools:

- Neo4j AuraDB: polished managed option, strong graph ecosystem, GraphRAG support, likely paid if it becomes daily infrastructure.
- Memgraph Community: cheaper/free local or self-hosted option, Cypher-style graph work, good candidate for lower-cost experimentation.

Initial graph posture:

- Derived layer, not canonical write target.
- Import approved or clearly labeled data from Supabase and Markdown.
- Proposed graph changes should flow back to the source-of-truth system after approval.
- Publicness and uncertainty labels must travel with graph records.

### Vector Search

Use vector search for semantic retrieval:

- "Find notes similar to this question."
- "Find transcript sections that mention Daphnia bloom."
- "Find prior captions in this voice."
- "Find source packets related to sealing, opacity, or fish removal."
- "Find content drafts about public website framing."

Recommended order:

1. Use Supabase/pgvector first because Postgres is already in the stack.
2. Use Qdrant if filtering-heavy semantic search becomes painful.
3. Use Pinecone if a fully managed vector DB is worth paying for.
4. Use Weaviate if hybrid semantic/keyword retrieval becomes a core workflow.
5. Use Chroma for quick local prototypes only.
6. Use Milvus only if embedding volume becomes very large.

Vector search should not replace graph relationships. It retrieves likely relevant material; the graph explains how evidence, claims, species, events, and owners connect.

### Analytics Warehouse

Use an analytics warehouse for performance and trend analysis:

- YouTube video and channel analytics.
- Website analytics.
- QR code and campaign landing-page performance.
- Social post/channel performance.
- Newsletter/support/contact conversion.
- Talk/event follow-up outcomes.
- Sponsor/CRM funnel metrics, once Growth/App define CRM structures.
- Agent workflow telemetry, such as tasks completed, retrieval quality, approval-cycle time, and handoff friction.

Candidate tools:

- MotherDuck/DuckDB: lightweight, SQL-friendly, good for solo/company analytics and lower operational complexity.
- BigQuery: strong fit if Google Analytics and YouTube become the center of reporting.
- Supabase/Postgres: acceptable for light early analytics, but not ideal as the long-term warehouse.
- Databricks Lakehouse/Lakebase: likely overkill until enterprise-scale governance, security, and data-sovereignty needs appear.
- MotherDuck or BigQuery should be evaluated before Databricks for miniBIOTA's current size.

Analytics warehouse records are generally derived analytical history, not operational truth. They should answer "what happened over time?" rather than "what task is current?"

### Redis Or Runtime Cache

Use Redis only when needed for:

- Short-term agent session state.
- Queue state.
- Job status.
- Cache for expensive retrieval or graph queries.
- Locks to prevent duplicate agent writes.
- Temporary tool results.

Do not use Redis for:

- Durable ecological memory.
- Source-of-truth records.
- Permanent decisions.
- Financial records.
- Public claim state.

### Visual AI And Local Models

Use visual AI for media understanding and evidence extraction:

- Image description and tagging.
- Video scene/event detection.
- Rough clip summaries.
- Species or object candidate detection.
- Text/OCR extraction from screenshots, slides, labels, forms, and charts.
- Media-to-claim support review.
- Bounding boxes, points, or structured coordinate outputs when a model supports them.
- Draft metadata for App Media Library or Raw Footage workflows.

At the time of the 2026-05-14 model swap, NVIDIA Nemotron 3 Nano Omni became the preferred first model lane for the visual workflows. NVIDIA's current material describes the model as an omni/multimodal Nemotron lane for image, video, audio, and text reasoning, with possible access patterns through NVIDIA-hosted/API deployment, NIM, Hugging Face weights, and local inference stacks such as vLLM/SGLang/TensorRT-LLM when hardware supports them. The exact deployment should remain time-sensitive: App/AI infrastructure should verify the best current Nemotron local, private, NIM, or API-accessible option before implementation. Qwen remains a fallback/benchmark candidate rather than the primary lane.

Implementation caution:

- Treat Nemotron as a stronger first target, not as a permanent vendor lock.
- Prefer local/private processing for raw miniBIOTA footage when hardware and setup make it practical.
- If a hosted API or NIM endpoint is used first, limit testing to an explicitly approved bounded media set.
- Verify license, commercial-use terms, model availability, hardware/storage needs, context limits, video/audio input support, API cost, and retention/privacy terms at implementation time.
- Do not assume hosted tests authorize broad cloud media upload or persistent external media indexing.

Initial visual AI posture:

- Nemotron/Codex first for the first build: Codex builds the pipeline and NVIDIA Nemotron 3 Nano Omni analyzes the bounded media set when local/private deployment is feasible.
- Qwen can be used as a fallback or comparison model if needed.
- Local-first when privacy, cost, or raw media volume matters.
- Twelve Labs free tier may be used later on the same bounded test set to benchmark/refine the Nemotron/Codex workflow.
- Cloud multimodal models only when approved and when local quality, timestamping, search quality, or hardware is insufficient.
- Outputs are candidate annotations until reviewed by the owning domain.
- Do not publish AI-derived media claims without Research/Content/Web review.
- Do not write media metadata back to Supabase/App records without approval.
- Do not upload raw media to a cloud video platform without explicit approval for the selected test set.

Visual AI belongs near Raw Footage, Content, Research, and App:

- Raw Footage owns archival source/proof context.
- Content owns production use and story framing.
- Research owns ecological interpretation and species/claim safety.
- App owns media tooling, local model integration, batch processing, and metadata write paths when scoped.

### Automation And Autonomous Agents

Use automation to reduce repetitive work, not to bypass approval.

Candidate automated workflows:

- Nightly or manual source indexing.
- Vector index refresh after docs change.
- Graph drift checks against Supabase IDs and Markdown paths.
- Analytics imports and weekly summaries.
- Media pre-indexing and candidate tagging.
- Agent-generated proposed task bundles.
- Claim-review queues that identify missing evidence or stale uncertainty labels.
- Reminder/review reports for cross-domain blockers.
- Cost and quota monitoring for paid services.

Automation levels:

| Level | Meaning | Approval Posture |
|---|---|---|
| Level 0: Manual | Human asks agent to run a workflow | Current default |
| Level 1: Assisted | Agent drafts/summarizes/proposes, human decides | Safe early target |
| Level 2: Scheduled read-only | Agent runs recurring reads/reports/indexes | Requires scoped approval |
| Level 3: Proposed writes | Agent prepares write bundles for human approval | Requires strong provenance |
| Level 4: Limited approved writes | Agent writes low-risk owned-domain records under delegation | Requires explicit delegation |
| Level 5: High-consequence automation | Public, financial, sponsor, legal, launch, roadmap, live-control, schema, or destructive changes | Not allowed without explicit current approval |

The near-term target is Level 1 and selected Level 2. Level 3 can be piloted for low-risk proposed-write bundles. Level 4 should wait until tooling, readback, rollback, and delegation are mature.

## Agent Workflow Model

### General Agent Routing

When a user asks an agent a question:

1. Classify the request.
2. Identify source-of-truth needs.
3. Read the minimum necessary systems.
4. Preserve current/planned/proposed/aspirational separation.
5. Return a grounded answer with evidence, uncertainty, downstream owners, and approval needs.
6. Write only to the approved system, and only when scoped.
7. Close with changed files, verification, not-changed surfaces, and unresolved questions.

### Agent Routing Infrastructure To Build

Each domain agent needs a small, explicit routing layer. This can start as documentation and later become App-owned tooling.

Minimum routing record per agent:

- Domain name.
- Agent authority.
- Allowed read systems.
- Allowed write systems.
- Approval gates.
- Preferred retrieval systems.
- Canonical source-of-truth fallback.
- Domain handoff targets.
- Closeout requirements.
- Automation level allowed.
- Visual/model permissions, if any.

Required routing artifacts:

| Artifact | Purpose | Owner |
|---|---|---|
| Agent data-access matrix | Shows which agent can read/query/propose/write each system | Company governance; App implementation support |
| Tool routing registry | Maps tool names/connectors/helpers to safe use cases | App/Company |
| Source-of-truth map | Prevents graph/vector/analytics layers from competing with canonical records | Company |
| Approval matrix | Lists which writes require human approval and which can be delegated later | Company + domain owners |
| Query templates | Reusable graph/vector/analytics queries by workflow | App + domain owners |
| Evaluation set | Test questions and expected outputs for each system | Company + affected domains |
| Closeout checklist | Forces reporting of changed files, records, systems, unresolved questions | Company |
| Automation runbook | Defines schedule, logs, retries, readback, rollback, and alerting | App |

The first version can live in this document or a follow-up reference file. A later App-owned implementation could expose routing through agent tools, MCP servers, local helpers, or the Planner/App operator surface.

### Agent Data-Access Matrix

| Agent | Markdown | Supabase | Graph | Vector | Analytics | Cache/Queue | Visual AI | Writes By Default |
|---|---|---|---|---|---|---|---|---|
| Company | Read/write Company docs when scoped | Read; write only approved Company Planner/records | Read derived graph | Read | Read summaries | No direct default | Read derived outputs | Company Markdown only when scoped |
| Research | Read/write Research docs when scoped | Read Research records; approved Research writes only | Read/query ecological graph; propose corrections | Read | Limited | No direct default | Review visual evidence outputs | Research Markdown/proposed structured writes |
| Content | Read/write Content drafts/packets when scoped | Read pipeline/calendar; approved Content writes only | Read claim/media/story graph | Read | Read content performance | No direct default | Use visual media summaries | Drafts/source packets/proposed content writes |
| Web | Read Web docs/code when scoped | Read public-facing records | Read public claim/evidence graph | Read | Read website analytics | No direct default | Use approved media metadata | Web code/docs only when scoped |
| App | Read implementation docs/code | Owns runtime/schema implementation when approved | Implements graph sync/tools when approved | Implements retrieval stack | Implements imports/tools | Owns cache/queue runtime | Owns local model integration | App code/schema only when scoped |
| Growth | Read/write Growth docs when scoped | Read CRM/Planner when scoped; writes approved only | Read relationship/claim context | Read | Read audience/funnel analytics | No direct default | Limited | Growth docs/proposed CRM actions |
| Brand | Read/write Brand docs when scoped | Read relevant public/context records | Read public claim/context graph | Read | Read campaign/audience summaries | No direct default | Review visual brand fit | Brand docs/copy drafts |
| Financials | Read/write Financials docs when scoped | Read finance records when scoped; writes approved only | Usually no | Usually no | Read cost/performance summaries | No direct default | No default | Financial docs/approved finance records |
| Hardware | Read/write Hardware docs when scoped | Read telemetry when scoped; live-control approved only | Read telemetry/ecology links if created | Read | Read telemetry analytics if created | No direct default | Visual inspection candidates | Hardware docs/proposed telemetry notes |
| Raw Footage | Read/write routing docs when scoped | Read media records when scoped | Read media/evidence graph | Read media index | No default | No direct default | Primary visual AI user | Media notes/proposed metadata |

No agent should receive broad write authority across all systems. Cross-domain write paths remain explicit approvals or future delegation.

### Example: Company Agent

Request:

> What should we prioritize for the Aquatic Club talk this week?

Likely routing:

- Markdown: Company strategy, talk framing, current priorities, safety rules.
- Supabase: Planner tasks, due dates, blockers, work programs, domain ownership.
- Graph: claims, species histories, proof media, evidence paths relevant to talk themes.
- Vector search: prior scripts, notes, source packets, captions, and public website framing.
- Analytics warehouse: only if performance data or prior channel behavior matters.

Likely output:

- Priority recommendation.
- Domain owners.
- Evidence/proof assets needed.
- Approval gates.
- Planner writes that would require explicit approval.

### Example: Research Agent

Request:

> Can we safely say Daphnia populations changed after the sealing event?

Likely routing:

- Graph: event-to-species-to-observation-to-media-to-claim paths.
- Supabase: current species, observation, chronicle, and media records.
- Vector search: source packets, transcripts, research notes.
- Markdown: Research validation notes and uncertainty rules.

Likely output:

- Confidence label.
- Evidence path.
- Claim wording options.
- What remains internal or needs review.
- Proposed structured writes only if explicitly scoped.

### Example: Content Agent

Request:

> Draft a public-safe short about Ghost Shrimp after sealing.

Likely routing:

- Graph: approved Ghost Shrimp claims and evidence/media relationships.
- Vector search: prior scripts, captions, transcripts, story tone examples.
- Supabase: content calendar and pipeline records to avoid duplicate content planning.
- Markdown: Content voice guidance and source packet.

Likely output:

- Draft script.
- Public-safe claim notes.
- Media suggestions.
- Content calendar/Planner write suggestions requiring approval.

### Example: Web Agent

Request:

> Build or update a species page with the best proof.

Likely routing:

- Supabase: current public species fields, media, chronicles, website-facing records.
- Graph: species-to-claim-to-evidence-to-media relationships.
- Markdown: public claim boundaries, Brand guidance, Research review notes.
- App/Web codebase: only when implementation is explicitly scoped.

Likely output:

- Proposed page content or implementation plan.
- Public/private separation.
- App/Web changes requiring explicit scope.
- Public site behavior changes requiring approval.

### Example: Growth Agent

Request:

> What did the Aquatic Club talk do for audience growth?

Likely routing:

- Analytics warehouse: website traffic, YouTube follows, QR scans, contact/support actions before and after the talk.
- Supabase/CRM: approved relationship/contact records if scoped.
- Markdown: Growth strategy and sponsor-safe rules.
- Content/Web: campaign or post context.

Likely output:

- Performance summary.
- Follow-up opportunities.
- Sponsor-safe interpretation.
- No sponsor or financial commitments unless explicitly approved.

## Domain Ownership Map

| Domain | Role In Operation Living Intelligence |
|---|---|
| Company | Program governance, source-of-truth model, dependency map, review cadence, cross-domain sequencing, approval discipline |
| App | Runtime implementation, schema/migrations when approved, sync jobs, internal UI, MCP/tool bridges, credentials, monitoring, database integration |
| Research | Ecological truth, species/biome interpretation, observation meaning, scientific uncertainty, claim safety, graph ontology for ecological relationships |
| Content | Source packets, transcripts, story arcs, content calendar relationship, public/internal narrative routing, source-to-claim workflow |
| Web | Public display rules, website data surfaces, public claim rendering, analytics tags and conversion paths when scoped |
| Brand | Public language, identity fit, audience framing, support/sponsor-safe wording |
| Growth | Audience analytics interpretation, CRM meaning, partner/sponsor funnel, event follow-up, commercial sequencing |
| Financials | Cost review, paid-service budget impact, subscription approval, runway implications |
| Hardware | Telemetry source boundaries, sensor data meaning, live-system safety, future telemetry warehouse inputs |
| Raw Footage | Media evidence inventory, proof assets, footage/source routing, media provenance support |
| Brain | Historical/archive lookup and retirement provenance only during probation |

## Data Categories And Homes

| Data Type | Canonical Home | Derived/Helper Home | Notes |
|---|---|---|---|
| Company strategy | Company Markdown | Vector index | Do not move to database as the main source |
| Domain briefs | Company/domain Markdown | Vector index | Briefs remain human-readable |
| Planner tasks/projects | Supabase | Analytics snapshots; vector summaries if useful | Supabase remains truth |
| Programs/Operations | Supabase Planner if created; Company Markdown for governance | Analytics/graph summaries | Live Planner writes require approval |
| Species records | Supabase Research tables | Graph; vector summaries | Research owns ecological meaning |
| Observations | Supabase Research tables and Research notes | Graph; vector index | Evidence/provenance should be preserved |
| Chronicles | Supabase/Web-facing records | Graph | Public chronology must not be distorted by import order |
| Source packets | Markdown first | Graph references; vector index | Keep human-readable packets |
| Public claims | Supabase/Markdown depending current workflow | Graph paths | Must preserve confidence/publicness labels |
| Media assets | Supabase/App media library or filesystem until indexed | Graph references; vector captions/metadata | Raw media should not be duplicated blindly |
| YouTube analytics | Analytics warehouse | Supabase summary if needed | Do not mix with content calendar truth |
| Website analytics | Analytics warehouse | Supabase summary if needed | Use for trend analysis and campaign review |
| CRM/contact funnel | Supabase/App/Growth CRM when approved | Analytics warehouse snapshots | Commitments remain approval-gated |
| Agent telemetry | Analytics warehouse or logs | Dashboard summaries | Use after workflows stabilize |
| Session cache | Redis/cache | None | Temporary only |

## Pilot Scope

### Pilot 1: Living Atlas Graph Packet

Purpose:

- Prove whether a graph database materially improves ecological reasoning, source provenance, and public-safe claim review.

Suggested first packet:

- Lake Post-Seal.
- Flagfish.
- Daphnia.
- Ghost Shrimp.
- Freshwater amphipods.
- Copepods.
- Slough Crayfish.
- Pipeline 338 and Chronicle 30.
- Existing source packet and Research validation notes.

Pilot graph node types:

- `Species`
- `Biome`
- `Event`
- `Observation`
- `Claim`
- `MediaAsset`
- `Chronicle`
- `SourcePacket`
- `ResearchReview`
- `ContentItem`
- `PublicSurface`
- `DomainOwner`

Pilot relationship types:

- `OBSERVED_IN`
- `AFFECTED_BY`
- `CHANGED_AFTER`
- `SUPPORTED_BY`
- `CAPTURED_IN`
- `MENTIONED_IN`
- `PUBLICLY_RENDERED_AS`
- `REVIEWED_BY`
- `HAS_CONFIDENCE`
- `HAS_PUBLICNESS_TIER`
- `OWNED_BY`
- `NEEDS_REVIEW_FROM`
- `DERIVED_FROM`
- `RELATED_TO`

Pilot questions:

1. What evidence supports saying the lake changed after sealing?
2. Which species are connected to the Lake Post-Seal event?
3. Which claims are public-safe, uncertain, or internal-only?
4. Which media assets support Daphnia, Ghost Shrimp, and Flagfish claims?
5. Which observations are not directly linked to the relevant pipeline or chronicle?
6. Which public pages or content items could safely reuse this evidence?
7. Which Research review notes are still blocking public wording?
8. Which relationships are inferred rather than observed?
9. Which source packet facts need structured Supabase write approval?
10. Does graph traversal save enough time to justify continuing?

Success criteria:

- The graph answers at least 7 of the 10 pilot questions more clearly than current Markdown/Supabase lookup alone.
- Evidence paths remain traceable back to source packets, Supabase IDs, or media paths.
- Publicness and uncertainty labels remain visible.
- No competing source of truth is created.
- The pilot can be rebuilt from source data.
- The workflow identifies at least one concrete cross-domain time savings or safety improvement.

Recommended tool for pilot:

- Start with local/self-hosted Memgraph Community for the graph pilot.
- Do not start with a paid graph subscription unless local Memgraph cannot support the pilot evaluation.

### Pilot 2: Analytics Warehouse For Audience Signals

Purpose:

- Centralize audience and performance data so Company, Content, Web, Growth, and Brand can understand what public work is doing over time.

Initial sources:

- YouTube Analytics API or YouTube Reporting API exports as the first analytics source.
- Google Analytics or website event exports.
- QR destination metrics.
- Manual event/contact/support summary if no CRM integration exists yet.
- Social post/export metrics when accessible.

Initial questions:

1. Did a specific post, talk, or website update drive traffic?
2. Which videos send people to the website?
3. Which topics produce retention, follows, or support interest?
4. Did the Aquatic Club talk create measurable audience movement?
5. Which QR destination or CTA performs best?
6. Which content themes should inform future Content/Brand/Web planning?

Recommended tool for pilot:

- Start the analytics inventory with YouTube first.
- Use MotherDuck/DuckDB for lightweight analytics unless YouTube/Google-source requirements make BigQuery the better fit.

Success criteria:

- YouTube data can be exported, normalized, and joined to content identity by date, video, topic, or campaign.
- Later, YouTube and website data can be joined by date, content item, campaign, or destination.
- The agent can produce a weekly or monthly performance summary without manual tab-hopping.
- The warehouse does not become the source of truth for content calendar or CRM commitments.

### Biome Telemetry Database Posture

Current recommendation:

- Do not add a separate time-series database for biome telemetry yet.
- Keep `telemetry_snapshot` in Supabase/Postgres as the current-state/public-read fallback.
- Keep `biome_telemetry` in Supabase/Postgres as the internal historical climate/control analysis table.
- Treat telemetry analytics as Hardware/App operational data, not as part of the YouTube-first audience analytics warehouse.

Rationale:

- The current telemetry volume is still small enough for Postgres when indexed and managed carefully.
- Supabase is already wired into App/Web/Hardware workflows for current telemetry and structured operational state.
- A separate time-series database would add service management, credentials, backup/restore, sync drift, query routing, and agent-access complexity before the need is proven.
- Telemetry should not gain a competing source of truth while the current monitoring and app paths are still stabilizing.

Scaling path:

1. Stay with Supabase/Postgres while row volume, query speed, and retention needs remain manageable.
2. If telemetry grows, use standard Postgres techniques first: time indexes, native range partitioning, retention policies, and rollup/summary tables or materialized views.
3. Avoid making Supabase TimescaleDB the default path for new work because Supabase has deprecated the extension for Postgres 17 projects.
4. Add a dedicated time-series sidecar later only if high-resolution retention, long-history dashboards, heavy aggregations, or many more sensors make Postgres awkward.

Possible future sidecar:

- InfluxDB is the strongest default candidate for raw high-frequency telemetry if a separate time-series database becomes justified.
- A managed TimescaleDB service outside Supabase can be reconsidered if Postgres-compatible time-series features become valuable enough to justify a separate managed database.

Source-of-truth rule:

- Supabase remains the source for current telemetry snapshots, approved operational summaries, and any App/Web-facing telemetry records.
- Any future time-series database should begin as a derived raw-history store or analytical sidecar unless Company, Hardware, and App explicitly approve a different source-of-truth split.

### Pilot 3: Retrieval Layer

Purpose:

- Improve agent access to notes, source packets, transcripts, briefs, drafts, and previous decisions.

Recommended order:

1. Inventory what should be indexed.
2. Start with Supabase/pgvector or local prototype.
3. Add Qdrant/Pinecone/Weaviate only after retrieval pain is proven.

Success criteria:

- Agents retrieve the right source packets and notes with fewer misses.
- Retrieval results cite durable source paths or record IDs.
- Public/private and uncertainty boundaries are not flattened by embeddings.

### Pilot 4: Visual AI Media Intelligence

Purpose:

- Let agents visually work with miniBIOTA image and video files while preserving review boundaries.

Initial sources:

- A small Raw Footage or media folder selected by Josue.
- Existing media assets already relevant to Lake Post-Seal or Aquatic Club proof.
- A small set of known images/videos with expected labels to evaluate accuracy.

Candidate tasks:

1. Describe images/video clips in plain language.
2. Identify candidate species, objects, scenes, or ecological events.
3. Extract visible text from slides, labels, screenshots, or forms.
4. Generate draft media tags.
5. Locate objects or moments when the model supports coordinates or timestamps.
6. Link candidate media evidence to graph claims for human review.
7. Generate candidate story-sequence pull sheets with file paths, in/out times, story role, and review caveats.

Recommended tool posture:

- Build with Codex + Nemotron first: local/private read-only file analysis, candidate JSON/JSONL annotations, and Markdown/pull-sheet output.
- Use NVIDIA Nemotron 3 Nano Omni or the best current Nemotron omni/video-capable deployment at implementation time rather than locking to an older named model or a less capable fallback.
- Keep Qwen as a fallback/benchmark lane if Nemotron is unavailable, too costly, or unexpectedly weaker on the bounded media set.
- Try Twelve Labs free tier after the Nemotron/Codex workflow exists, using the same bounded media set to compare timestamped search, segmentation, structured metadata, and story-sequence usefulness.
- Use broader cloud multimodal fallback only if approved.

Success criteria:

- The model helps locate or describe media evidence faster than manual browsing.
- Outputs are clearly labeled as candidate AI annotations.
- Research/Content can reject or correct outputs without contaminating source truth.
- No media metadata is written to Supabase without approval.
- Hardware cost/performance is acceptable for repeated use.
- The Nemotron/Codex workflow can produce a useful candidate clip pull sheet or rough sequence for a real miniBIOTA story.
- The Twelve Labs comparison shows whether a video-native cloud platform materially improves recall, timestamp precision, segmentation, or editing usefulness enough to consider future adoption.

## Phased Build Plan

### Phase 0: Decision And Boundaries

Outputs:

- Confirm the approved Operation Living Intelligence name and current decision boundaries.
- Confirm that Supabase remains operational truth.
- Confirm that graph, vector, analytics, and cache layers start as derived/helper systems.
- Confirm no paid service is started without approval.

Downstream owners:

- Company for governance.
- App for technical implementation scoping.
- Financials for cost review.

Approval needed:

- Name and program posture.
- Any paid service.
- Any schema, App, or database write.

### Phase 1: Inventory And Map

Outputs:

- Data-source inventory.
- Data-category-to-home map.
- Access/credential map.
- Current sync/export options.
- Risk register for secrets, RLS, public/private data, and source-of-truth conflicts.

Affected domains:

- Company, App, Research, Content, Web, Growth, Financials, Raw Footage.

Notes:

- This phase can be docs-only.
- Do not create live integrations yet.

### Phase 2: Living Atlas Graph Pilot

Outputs:

- Local/free graph database.
- Lake Post-Seal graph model.
- Import script or manual import bundle.
- Query examples.
- Evaluation notes.

Affected domains:

- Research, Content, App, Company, Raw Footage, Web.

Approval needed:

- Any credentials.
- Any paid database.
- Any writeback to Supabase.
- Any App integration.

### Phase 3: Analytics Warehouse Pilot

Outputs:

- Analytics warehouse decision: MotherDuck/DuckDB vs BigQuery vs defer.
- Initial YouTube and website metric schema.
- Import/export workflow.
- First weekly/monthly report template.

Affected domains:

- Content, Web, Growth, Brand, Company, App, Financials.

Approval needed:

- OAuth/API access.
- Any paid plan.
- Any public tracking or website behavior changes.

### Phase 4: Retrieval Layer

Outputs:

- Indexing policy.
- Embedding source list.
- Metadata schema.
- Retrieval evaluation set.
- Agent citation rules.

Affected domains:

- Company, Research, Content, Brand, Web, App.

Approval needed:

- External API/service costs.
- Indexed private/sensitive material policy.

### Phase 5: Visual AI Media Pilot

Outputs:

- Local/cloud model evaluation note.
- Hardware/runtime requirements.
- Test media set.
- Candidate annotation format.
- Nemotron/Codex local/private pipeline plan and first candidate annotation run.
- Qwen fallback/benchmark posture.
- Twelve Labs free-tier benchmark plan for the same media set after the Nemotron/Codex run.
- Candidate clip pull-sheet or rough sequence output format for DaVinci/Content review.
- Raw Footage/Content/Research review workflow.
- Decision on whether to integrate with App Media Library later.

Affected domains:

- Raw Footage, Content, Research, App, Company, Hardware if local compute constraints matter.

Approval needed:

- Local model installation or large model downloads if outside existing environment.
- Any cloud model/API cost.
- Any raw media upload to Twelve Labs or another cloud provider.
- Any Twelve Labs paid plan, credential storage, persistent index, or ongoing backend use.
- Any media metadata writeback.
- Any App Media Library integration.

### Phase 6: Agent Routing And Tooling

Outputs:

- Agent source-routing rules by domain.
- Read/write approval matrix.
- Helper/tool bridge designs.
- Closeout templates for multi-database work.
- App-owned implementation plan if needed.

Affected domains:

- All active domains.

Approval needed:

- Any agent write capabilities.
- Any cross-domain database access expansion.

### Phase 7: Automation And Scheduled Workflows

Outputs:

- Automation level policy by workflow.
- Scheduled read-only jobs for approved imports/reports/indexes.
- Proposed-write bundle format.
- Logs, monitoring, retries, and failure alerts.
- Human approval surface for consequential changes.

Affected domains:

- Company, App, Research, Content, Web, Growth, Brand, Financials, Raw Footage.

Approval needed:

- Any scheduled job.
- Any write-capable automation.
- Any public, financial, sponsor, legal, launch, roadmap, schema, live-control, or destructive automation.

### Phase 8: Operationalization

Outputs:

- Recurring review rhythm.
- Backups and restore plan.
- Cost monitoring.
- Data quality checks.
- Drift detection between Supabase/Markdown and derived systems.
- Dashboard/report templates.

Affected domains:

- Company, App, Financials, Growth, Content, Research, Web.

Approval needed:

- Production-grade paid services.
- Monitoring/alerting integrations.
- Any public or operator UI.

## Cost Posture

Default posture:

- Start free/local wherever possible.
- Pay only after a pilot proves weekly value.
- Financials should review recurring subscription impact before paid adoption.
- Pilot budget is TBD as of 2026-05-13 while Josue continues finance planning with the Financials agent.

Likely early costs:

- Neo4j AuraDB Free or local Memgraph Community: likely no initial cost.
- Neo4j AuraDB Professional: likely future candidate if graph becomes daily infrastructure.
- MotherDuck or BigQuery: likely small early analytics cost, but depends on volume and query pattern.
- Pinecone/Qdrant/Weaviate: defer unless Supabase/pgvector is insufficient.
- Redis: defer unless runtime/session needs appear.
- Local visual models: may be free in licensing but can require GPU/storage/time costs.
- Cloud multimodal models: defer unless local visual AI is too weak or too slow.
- Databricks: defer as enterprise-scale option.

Cost decision rule:

Prefer free/local first, but do not let free tools create a worse long-term system. Pay when the paid option clearly improves reliability, speed, accuracy, maintainability, security, or team-like usefulness enough to justify the cost.

## Data Governance Rules

### Source-Of-Truth Rules

- Supabase remains truth for live structured operational state.
- Markdown remains truth for durable strategy, governance, human-readable packets, and agent protocols.
- Graph database starts as a derived relationship layer.
- Vector database starts as a derived retrieval layer.
- Analytics warehouse starts as a derived performance history layer.
- Redis/cache is never durable truth.

### Provenance Rules

Every derived record should retain:

- Source system.
- Source record ID or file path.
- Import timestamp.
- Import method.
- Confidence/publicness label where applicable.
- Domain owner.
- Whether the fact is observed, inferred, proposed, or approved.

### Publicness Rules

Public-facing claims must preserve:

- Public/private/internal tier.
- Research confidence.
- Source evidence.
- Review status.
- Approved wording, if present.
- Domain owner.

The graph and vector layers must not turn internal research interpretation into public-safe language by default.

### Writeback Rules

Derived systems may suggest changes, but canonical writes go back to the owning source:

- Supabase writes: explicit approval or approved domain delegation.
- Markdown changes: scoped docs/memory edits.
- App/schema changes: App-owned implementation approval.
- Website changes: Web-owned implementation approval.
- Research ecological records: Research-owned approval path.
- Content calendar/pipeline changes: Content-owned approval path.
- CRM/contact changes: Growth/App approval path.

## Security And Credential Rules

- Keep secrets in ignored local environment, user-level tool settings, OAuth, or approved App-owned credential paths.
- Do not commit API keys, service-role keys, OAuth secrets, `.env` files, or database credentials.
- Use read-only access first.
- Use least-privilege credentials per tool.
- Keep public/private data separation explicit.
- Do not export sensitive records into third-party services without approval.
- Treat analytics platform terms and YouTube/Google API policies as external constraints.
- Financial, sponsor, CRM, and contact data require extra care and should not be indexed broadly without a policy.
- Raw media should stay local by default unless Josue approves upload or cloud processing.
- Local model downloads and runtimes should be documented, versioned, and reviewed for storage, compute, and license fit.

## Sync And Drift Model

Initial sync direction:

```text
Markdown + Supabase + exports
        |
        v
Graph / Vector / Analytics derived layers
        |
        v
Visual AI / automation candidate outputs
        |
        v
Agent answers, dashboards, proposed changes
        |
        v
Approved writes back to Markdown or Supabase
```

Drift checks should verify:

- Graph records still point to existing source records.
- Vector indexes are refreshed after source changes.
- Analytics imports do not duplicate dates or reports.
- Source-of-truth IDs are preserved.
- Publicness labels did not disappear during sync.
- Deleted/archived source records do not remain active in derived outputs.
- Visual AI candidate annotations remain distinct from reviewed human/domain metadata.
- Automated jobs log what they read, generated, proposed, or changed.

## Review Rhythm

Suggested cadence after kickoff:

- Weekly during pilot build.
- Every two weeks during active integration.
- Monthly once stable.
- Immediate review after any paid subscription, schema change, public tracking change, or cross-domain write path expansion.

Each review should check:

- Current phase.
- Active blockers.
- Cost posture.
- Security/credential posture.
- Domain owner needs.
- Whether pilots have met success criteria.
- Whether any derived layer is becoming an accidental source of truth.
- Whether automation has exceeded its approved level.
- Whether visual AI outputs are useful enough to keep or expand.
- Whether Company report, domain reports, Planner records, or App implementation plans need updates.

## Risks

| Risk | Why It Matters | Mitigation |
|---|---|---|
| Too many databases too soon | Increases maintenance and confusion | Stage pilots; require success criteria before adding systems |
| Competing sources of truth | Agents may write or trust the wrong place | Keep source-of-truth rules explicit and enforce writeback paths |
| Paid services before proof | Adds recurring cost without clear value | Free/local pilots first; Financials review before subscription |
| Public/private flattening | AI retrieval may expose internal or uncertain claims | Preserve publicness and confidence metadata everywhere |
| App/runtime creep | Infrastructure planning may become unapproved App work | App owns implementation; schema/runtime changes require approval |
| Analytics misinterpretation | Small data can create false confidence | Pair metrics with context and avoid overcommitting |
| Credential sprawl | Secrets can leak or become unmanageable | Centralize credentials in approved local/OAuth/App paths |
| Graph over-modeling | Too much ontology work can slow progress | Start with one packet and 10 questions |
| Vector over-reliance | Similar text is not the same as true relationship | Use vector retrieval plus graph/provenance checks |
| Agent write risk | Multi-database agents could change live state unsafely | Read-first posture and approval-gated writes |
| Visual AI false positives | Models may misidentify species, events, or evidence | Treat outputs as candidate annotations; require Research/Content review |
| Local model operations burden | Local VLMs can require GPU, storage, dependency maintenance, and batch tooling | Pilot with a small media set before committing |
| Automation overreach | Scheduled agents may act beyond intended scope | Use automation levels, logs, readback, and approval gates |
| Cutover disruption | Switching too early could break current workflows | Keep current workflow live until readiness gates pass |

## Remaining Questions For Josue

These are the main questions still open after the 2026-05-13 source checks, Planner setup, and follow-up choices:

1. What is the maximum acceptable monthly cost for this whole intelligence stack during the pilot phase? Current answer: TBD pending Financials work.

## Recommended Next Step

Use a **graph-first kickoff** while running analytics, retrieval, and visual AI as scoped planning sidecars. The detailed projection scope is in `operation-living-intelligence-data-projection-matrix.md`:

1. Start with the Lake Post-Seal graph pilot because it directly strengthens Operation Living Atlas and claim provenance.
2. In parallel, inventory analytics sources and visual media workflows without connecting live services yet.
3. Define the agent data-access matrix and approval model before giving any agent new tools.
4. Keep current Markdown/Supabase/Planner workflows live until a pilot passes readiness gates.

The graph-first kickoff is the strongest default because it directly supports Operation Living Atlas, claim safety, source provenance, public website readiness, visual proof routing, and agent reasoning.
