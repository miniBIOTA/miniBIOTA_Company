---
id: operation_living_intelligence_intelligent_harness_master_plan_2026-05-17
title: "Operation Living Intelligence: Intelligent Harness Master Plan"
domain: company_operations
last_updated: 2026-05-18
tags: [operation-living-intelligence, intelligent-harness, memgraph, supabase, graphrag, planning]
status: active_harness_path_with_observation_workflow_proven
---
# Operation Living Intelligence: Intelligent Harness Master Plan

## Purpose

The broad OLI wave expansion is being closed and consolidated into the Intelligent Harness implementation path.

The prior Operation Living Intelligence wave work remains useful scaffolding. It clarified source ownership, review boundaries, local graph/readback patterns, retrieval posture, visual-AI boundaries, and deferred sensitive-data lanes. But the active build path now needs to be narrower, more practical, and centered on the working harness Josue actually wants.

The active build path is now:

```text
Supabase source map
-> Memgraph projection
-> Cypher query harness
-> pgvector retrieval
-> LangGraph-style workflow
-> review-gated answer system
-> operator dashboard
-> later upgrade adapters as needed
```

The aim is to build a private miniBIOTA command center where agents can answer connected questions with evidence, source IDs, uncertainty, review warnings, and domain ownership.

This plan is documentation only. It does not approve implementation, helpers, package installs, Supabase writes, Planner changes, migrations, Memgraph setup, generated outputs, App runtime changes, public output, or canonical writeback.

## 2026-05-18 Operational Closeout Addendum

The Intelligent Harness path has now produced a working local-to-canonical observation workflow.

Proven chain:

```text
raw observation
-> Content raw observation intake parser
-> Content audit draft JSON/Markdown
-> App bridge to Phase 13 input
-> Phase 13 auto-link suggestions
-> Intelligence tab latest suggestion display
-> Phase 19 local observation intake pipeline
-> Phase 20 approved observation writeback proposal
-> live duplicate/ID confirmation
-> canonical Supabase observation insert
```

Completed proof example:

- Observation: Gulf marsh crab excavation activity in the coastal biome / Marine Shore.
- New Supabase observation ID: `253`.
- Confirmed species: `species_id = 174`, Gulf marsh crab.
- Confirmed biome: `biome_id = 5`, Marine Shore.
- Confirmed no bundled story thread links, open loop links, story beats, chronicles, Planner tasks, media metadata, public output, or content pipeline records.

This does not start a new planning phase. The next work is operational testing:

```text
Run one or two new real observations through the Phase 19 local pipeline, then choose one for Phase 20 writeback if useful.
```

Future work remains separately approval-gated: story/open-loop linking, media review/linking, Intelligence suggestion approval controls, pgvector, actual LangGraph, and scope expansion beyond the current test lanes.

## 1. Plain-Language Outcome

When the Intelligent Harness works, Josue should be able to ask miniBIOTA agents questions like:

- What changed recently?
- What story is forming?
- What observations connect to this species?
- What media supports this story?
- What claims are safe?
- What is blocked?
- What needs review?
- What should each agent do next?

The answer should not come from one flat table or one isolated document. The harness should gather the right context from Supabase, Memgraph, retrieval indexes, Markdown rules, source files, and domain ownership records. It should then return a useful answer with connected evidence, source IDs, uncertainty, review warnings, and the responsible domain.

Josue should not need to personally operate five databases every day. Most daily use should happen through an App dashboard or agent interface. Behind the scenes, the harness routes the question to the right systems:

- Supabase for canonical structured records;
- Memgraph for relationships;
- pgvector or the current retrieval baseline for semantic text search;
- Markdown/GitHub repos for governance, durable meaning, and source packets;
- workflow orchestration for multi-step questions, review pauses, and future approved writeback.

The harness should enhance current miniBIOTA workflows. It should not replace the current source-of-truth systems or force a big-bang migration.

## 2. System Roles

| System | Role | What it stores or does | Source of truth? | Build now or specify for later | Owner / review domain |
|---|---|---|---|---|---|
| Supabase/Postgres | Canonical structured record store | Observations, tasks, projects, content records, species/source records, review status, operational structured data | Yes, for structured records | Build now as the source map and projection input | App owns runtime/schema; domains own meaning; Company coordinates governance |
| Memgraph | Derived relationship graph | Nodes and relationships for species, observations, media, stories, content, claims, tasks, locations, systems, review gates | No | Build now for one bounded local persistent pilot | App implements; Company governs scope; source domains review meaning |
| Supabase pgvector | First-pass semantic retrieval | Embeddings over selected long text, notes, docs, scripts, captions, transcripts, readbacks, and source packets | No | Build now or use current retrieval baseline first, then upgrade to pgvector when approved | App implements; Company/Content/Research review source scope |
| Markdown/GitHub repos | Governance and durable context | Operating rules, decisions, agent instructions, source packets, short readbacks, domain reports | Yes, for governance/context where repo docs are source | Use now, but keep concise | Company and domain repo owners |
| LangGraph-style orchestration | Workflow brain | Multi-step routed agent questions, context assembly, review pauses, tool routing, future approved writeback flow | No | Build now as a skeleton/spec for one routed Q&A workflow | App implements; Company governs routing rules |
| miniBIOTA App UI/helpers | Operator control surface | Refresh/rebuild controls, graph import/query controls, readbacks, review queues, later approved writeback | No, except where App owns runtime configuration | Build now for minimal local controls after plan approval; full UI later | App |
| Redis/cache | Fast cache layer | Recent query packets, session state, intermediate results, expensive lookup cache | No | Specify for later | App |
| DuckDB/MotherDuck or BigQuery | Analytics path | Analytics warehouse, aggregate reporting, larger event/history analysis | No | Specify for later | Growth/Web/Financials depending on data |
| Qdrant/Pinecone/Weaviate | Dedicated vector database adapter path | Vector search if pgvector becomes too limited | No | Specify for later | App with Company approval |
| Visual AI/media pipeline | Media understanding adapter | Candidate image/video/audio observations, visual evidence suggestions, media-review readbacks | No | Specify for later; local/private first | Raw Footage, Content, Research, App |
| Approved writeback path | Controlled canonical update path | Human-approved changes back to Supabase or other owner systems | Yes only after the target system accepts the write | Specify for later; no automatic writeback | App implements; domain owner approves; Company governs boundaries |

## 3. Build Phases

### Phase 0: Close Broad OLI Wave Expansion

Goal:

Close the wave-sprawl path and pivot to the Intelligent Harness plan.

Output:

- Pivot note in this master plan.
- Prior OLI docs preserved as scaffolding.
- No implementation.

Done when:

- This markdown plan clearly says the active build path is now the Intelligent Harness.
- Prior wave docs are treated as reference/scaffolding, not the active build structure.

Documentation cleanup requirement:

- Prior OLI wave documents should be cleaned up once the Intelligent Harness phases replace their active purpose.
- Cleanup means classify, preserve, archive, or supersede; it does not mean deleting useful provenance.
- No cleanup should remove source evidence, implementation readbacks, approval records, or provenance needed to understand how the harness was reached.
- The cleanup pass should be tracked in Planner so obsolete documents do not keep pulling future work back into the old wave structure.

Current cleanup inventory:

```text
domains/company/operation_living_intelligence_documentation_cleanup_inventory_2026-05-17.md
```

### Phase 1: Supabase Source Map

Goal:

Identify exactly what feeds the first graph and retrieval scope.

Output:

- Tables, fields, IDs, and relationships for the first scope.
- First entity types:
  - species;
  - observations;
  - media;
  - story threads;
  - content;
  - tasks;
  - projects;
  - claims;
  - locations;
  - systems.
- First relationship types:
  - `OBSERVED_IN`;
  - `SUPPORTS`;
  - `MENTIONS`;
  - `USES_MEDIA`;
  - `PART_OF_STORY`;
  - `NEEDS_REVIEW`;
  - `BLOCKED_FOR_PUBLIC`.

Done when:

- We know what rows become nodes.
- We know what links become relationships.
- No abstract guessing remains for the first scope.

### Phase 2: Bounded Persistent Local Memgraph Pilot

Goal:

Make Memgraph the working local relationship graph for one bounded scope.

Output:

- Local persistent Memgraph setup plan.
- Rebuild/reset script spec.
- Import script spec.
- Basic graph schema conventions.
- First loaded graph from Supabase-derived data.

Done when:

- Memgraph contains one approved miniBIOTA graph scope.
- Cypher queries can inspect it.
- Reset/rebuild is repeatable.

Clarification:

Memgraph is not canonical. It is a derived relationship graph. Supabase remains canonical structured truth.

### Phase 3: Supabase To Memgraph Projection

Goal:

Automate the projection of canonical Supabase rows into derived Memgraph nodes and relationships.

Output:

- Helper spec that reads Supabase.
- Row-to-node and row-to-edge mapping rules.
- Memgraph load process.
- Short import/readback report.

Done when:

- New or changed Supabase data can be reflected in Memgraph through a controlled refresh.
- Supabase is not damaged or written by the projection.

### Phase 4: Intelligence Query Harness

Goal:

Make the graph useful to agents.

Output:

Query library for practical miniBIOTA questions:

- What supports this story?
- What observations connect to this species?
- What changed?
- What is blocked?
- What is public-safe?
- What should an agent review next?
- What media candidates support this thread?
- Where did the last story leave off?
- What new observations connect to active story threads?
- Which claims are still review-required?

Done when:

- An agent can ask OLI-style questions and get connected answers from Memgraph.

### Phase 5: GraphRAG Context Builder

Goal:

Combine graph intelligence with semantic retrieval and canonical records.

Output:

- Memgraph finds relationships.
- pgvector or the current retrieval baseline finds relevant text.
- Supabase fetches canonical rows.
- Markdown contributes rules/context.
- Agent receives one clean context packet.

Done when:

- The agent can answer with relationships, source paths, citations, review warnings, and uncertainty.

### Phase 6: Review And Proposed Writeback

Goal:

Make the harness operational while keeping humans and domain owners in control.

Output:

- Candidate vs approved state.
- Review queue spec.
- Public-safe gate.
- Proposed writeback bundle spec.
- Optional approved writeback to Supabase later.

Done when:

- OLI can suggest changes.
- Humans/domain owners approve.
- Approved updates go back only through the right controlled source path.

Clarification:

No automatic writeback. The agent proposes. A human/domain owner approves. Then a controlled App path writes back.

### Phase 7: Operator Dashboard

Goal:

Make the harness usable daily.

Output:

Dashboard spec for:

- What changed today?
- What needs review?
- What can I use?
- What is blocked?
- What should each agent do next?
- What stories are forming?
- What new media needs review?
- What source data is stale?
- What graph/retrieval layer needs refresh?

Done when:

- Josue can use the harness as a command center instead of manually chasing data.

### Phase 8: Later Upgrade Specification And Expansion Backlog

Goal:

Keep later harness upgrades visible, specified, and reviewable without letting them distract from the main build path.

Output:

- Upgrade backlog with clear purpose, expected harness value, trigger condition, owner/review domain, and approval gate.
- No implementation by default.
- No new tool adoption unless the core harness shows a real need.

Done when:

- Later upgrade ideas are not lost.
- Each upgrade has a clear job in the harness.
- The main implementation path remains focused on Supabase, Memgraph, query harness, retrieval, workflow, review-gated answers, and dashboard.

#### Qdrant/Pinecone/Weaviate Upgrade Adapter

Purpose:

Provide a dedicated vector database path if Supabase pgvector becomes too limited for the volume, speed, filtering, or retrieval quality needed by the harness.

What it would do:

- Store and search embeddings for long text, notes, docs, scripts, captions, transcripts, readbacks, and source packets.
- Support semantic search across larger or more specialized corpora.
- Return source paths, IDs, citations, and provenance into GraphRAG context packets.

Trigger condition:

- Use only if pgvector or the current retrieval baseline is measurably insufficient.

Approval gate:

- Requires explicit approval before replacing or supplementing pgvector with a dedicated vector database.

#### Redis/Cache

Purpose:

Improve speed and reduce repeated expensive work after the harness has real repeated query patterns.

What it would do:

- Cache recent context packets.
- Cache expensive graph/retrieval lookups.
- Store short-lived workflow/session state.
- Reduce repeated calls during dashboard use or multi-step agent workflows.

Trigger condition:

- Use only after repeated expensive lookups or latency problems are visible in the working harness.

Approval gate:

- Requires explicit approval before adding Redis or another cache service.

#### Analytics Warehouse

Purpose:

Support larger trend analysis and aggregate learning across content, Web, Growth, audience behavior, QR/follow-up, telemetry, and future performance data.

What it would do:

- Store or query larger analytical history outside the day-to-day canonical workflow.
- Support trend questions, campaign learning, content performance, audience movement, and operational analysis.
- Keep analytics separate from unsupported public claims or financial conclusions.

Possible systems:

- DuckDB;
- MotherDuck;
- BigQuery.

Trigger condition:

- Use only when Growth, Web, Financials, or another owner has real data and a concrete analytical question that the core harness cannot answer cleanly.

Approval gate:

- Requires owner approval before analytics ingestion, warehouse setup, external service use, or sensitive-data expansion.

#### Visual AI/Media Expansion

Purpose:

Let the harness understand media as candidate evidence while keeping media review human-controlled.

What it would do:

- Analyze images, video, or audio for possible species, behaviors, scenes, actions, timestamps, and story-supporting moments.
- Suggest media-to-observation, media-to-story, and media-to-claim relationships.
- Preserve candidate-only, review-required, public-use-blocked, and noncanonical states.

Trigger condition:

- Use only when Raw Footage, Research, Content, or App has a concrete media review workflow that needs it.

Approval gate:

- Local/private visual AI first.
- Cloud media upload, paid service use, public output, media metadata write, or canonical writeback requires explicit approval.

#### Full Dashboard

Purpose:

Turn the harness into a daily command center after the core query/readback flows prove useful.

What it would do:

- Show what changed today.
- Show what needs review.
- Show what can be used.
- Show what is blocked.
- Show stories forming.
- Show media needing review.
- Show stale source data.
- Show graph/retrieval refresh health.
- Show next actions by agent/domain.

Trigger condition:

- Build after the first bounded harness workflow proves the dashboard views and data contracts.

Approval gate:

- Requires App implementation approval before runtime/UI changes.

#### Approved Writeback

Purpose:

Allow reviewed harness outputs to update canonical systems through controlled paths.

What it would do:

- Package proposed writes with source evidence, target system, target record, intended change, owner approval, and rollback/readback needs.
- Support updates to the right canonical system only after human/domain approval.
- Keep agent suggestions separate from canonical writes.

Trigger condition:

- Use after review queues and proposed writeback bundles are proven.

Approval gate:

- No automatic writeback.
- Every canonical write path requires explicit approval and owner review.

#### Scheduled Refresh

Purpose:

Keep graph and retrieval layers current without making refresh behavior mysterious.

What it would do:

- Refresh the Memgraph projection from approved Supabase/source scopes.
- Refresh retrieval indexes or manifests.
- Produce short readbacks with timestamps, source hashes, counts, errors, exclusions, and stale-source warnings.

Trigger condition:

- Use after manual refresh/rebuild is proven and the harness needs routine freshness.

Approval gate:

- Automated scheduled jobs require explicit approval.

#### Public Output Gates

Purpose:

Prevent raw, candidate, private, uncertain, or review-required material from becoming public content.

What it would do:

- Carry publicness tiers into graph relationships, retrieval context, answers, dashboard views, and proposed writeback.
- Require public-safe status before Web/content/public-facing use.
- Highlight missing evidence, blocked claims, and review ownership.

Trigger condition:

- Specify early; implement more deeply before any public-output integration.

Approval gate:

- Any public Web output, public content generation, public claim, or public route/API behavior requires explicit approval.

#### CRM/Financials/Sensitive Data Integration

Purpose:

Let the harness eventually reason over sensitive business signals without mixing them into general graph/retrieval context by default.

What it would do:

- Support tightly gated questions about CRM, sponsors, pricing, costs, revenue-sensitive analysis, audience follow-up, and financial planning.
- Keep sensitive data segmented by owner, privacy tier, and approved use.
- Prevent sensitive records from leaking into general story/content/public-answer contexts.

Trigger condition:

- Use only when CRM, Financials, Growth, or Company has a concrete decision need and owner-approved data scope.

Approval gate:

- Requires explicit approval for any CRM, Financials, sponsor, pricing, revenue, sensitive-data, or external-service integration.

## 4. Interface Design

The harness should use provider interfaces conceptually so each layer can be improved or replaced without rewriting the whole system.

### CanonicalStoreProvider

Current provider:

- Supabase/Postgres.

Purpose:

- Fetch canonical structured records.
- Preserve source IDs and ownership.
- Never treat derived graph or retrieval outputs as canonical replacements.

### GraphProvider

Current provider:

- Memgraph.

Possible later provider:

- Neo4j, if there is a future reason to migrate.

Purpose:

- Store derived nodes and relationships.
- Support Cypher queries.
- Represent relationships without becoming the source of truth.

### RetrievalProvider

Current provider:

- Supabase pgvector, or the current retrieval baseline until pgvector is approved.

Possible later providers:

- Qdrant;
- Pinecone;
- Weaviate.

Purpose:

- Find semantically relevant long text, notes, docs, scripts, captions, transcripts, readbacks, and source packets.
- Return citations, source paths, and provenance.

### GovernanceProvider

Current provider:

- Markdown/GitHub repos.

Purpose:

- Provide operating rules, domain ownership, decision records, approval boundaries, and short readbacks.

### WorkflowProvider

Current provider:

- LangGraph-style orchestration.

Purpose:

- Route multi-step agent questions.
- Assemble context.
- Pause for review.
- Track state across a question or review flow.
- Later, route approved writeback bundles.

### MediaUnderstandingProvider

Current provider:

- Local/private visual AI first.

Possible later provider:

- Twelve Labs benchmark only if approved.

Purpose:

- Produce candidate media observations and evidence suggestions.
- Preserve candidate-only, review-required, and public-use-blocked states.

### WritebackProvider

Current provider:

- Approval-gated App path only.

Purpose:

- Package proposed writes.
- Require human/domain-owner approval.
- Write only to the correct canonical source when approved.

These interfaces prevent future rework. They also keep miniBIOTA from becoming too deeply hardwired to one vendor, one database, or one tool before the actual daily workflow proves what is needed.

## 5. First Practical Use Case

Recommended first bounded scope:

```text
Lake Post-Seal existing scope
```

Reason:

- It already has prior OLI scaffolding.
- It has been used across graph, story, species, retrieval, and readback planning.
- It is narrow enough to build without trying to load the entire miniBIOTA universe.
- It is meaningful enough to test real questions about observations, species, media, story threads, public safety, and review gates.

The first implementation pattern should prove:

- Supabase records can become Memgraph nodes and relationships.
- Memgraph can answer useful miniBIOTA questions with Cypher.
- Retrieval can add source text and citations.
- Review gates survive the context packet.
- The harness can produce a short answer with source IDs and ownership.

2026-05-18 refinement:

```text
Normal current observation-to-story workflow is now the active first operator path.
Lake Post-Seal remains the regression/test fixture.
```

Reason:

- the observation intake, App bridge, Phase 13 suggestions, Phase 19 pipeline, and Phase 20 approved observation writeback path are already proven;
- Josue's live need is to process real observations conversationally without manually inspecting the Intelligence tab;
- bounded graph context should support the workflow, not narrow it so much that canonical species outside Lake Post-Seal look absent;
- Lake Post-Seal remains useful for stable harness regression checks and known graph/readback behavior.

The active workflow is:

```text
new observation
-> source record
-> read-only canonical species/biome ID checks
-> graph refresh
-> story/thread/media relationship suggestions
-> review queue
-> approved reuse
```

The harness should perform read-only canonical ID checks before treating a species or biome hint as missing. For example, Creeping Beggarweed is canonical species `97` / `Desmodium incanum`; if it is outside the bounded graph, the operator question should be "Can I use species_id 97?" rather than "Do we need to create/find this species?"

## 6. What To Build Now vs Later

### Build Now

- Supabase source map.
- Persistent local Memgraph pilot for one bounded scope.
- Supabase-to-Memgraph projection helper.
- Query library.
- Basic GraphRAG context packet using pgvector or the current retrieval baseline.
- LangGraph-style skeleton for one routed Q&A workflow.
- OLI documentation cleanup plan for superseded wave-expansion docs.
- Short readback reports.

### Specify For Later

These are now preserved in Phase 8 as a later upgrade specification and expansion backlog:

- Qdrant/Pinecone/Weaviate upgrade adapter for dedicated vector search if pgvector becomes insufficient.
- Redis/cache for repeated expensive lookups, context packets, and workflow/session state.
- Analytics warehouse for larger trend analysis, campaign learning, telemetry, and owner-approved analytical history.
- Visual AI/media expansion for candidate media evidence and review-gated media understanding.
- Full dashboard for daily command-center use after the first bounded harness workflow proves the views.
- Approved writeback for human-approved canonical updates through controlled App paths.
- Scheduled refresh for graph/retrieval freshness after manual rebuilds are proven.
- Public output gates for public-safe review before any Web/content/public use.
- CRM/Financials/sensitive data integration for tightly gated business and sensitive-domain questions.

These are not part of the immediate implementation path unless a specific phase, owner need, and approval gate makes one necessary.

## 7. Risk Controls

| Risk | Control |
|---|---|
| Stale graph projection | Use rebuild timestamps, source hash checks, and import readbacks. |
| Incorrect connections | Trace every connection to a source row, source link, or projection rule before changing graph logic. |
| Overclaiming | Blocked claims and review states must survive retrieval, graph queries, and context packet assembly. |
| Public/private leakage | Publicness tiers must be carried into every context packet. |
| Tool sprawl | No new systems without a clear job in the harness. |
| Writeback risk | No automatic canonical writes. |
| Operator confusion | Maintain one operator map and short readbacks. |
| Vendor lock-in | Use provider interfaces where practical. |
| Premature scaling | Start with one bounded scope before expanding. |

## 8. Approval Gates

The following require explicit Josue/domain approval:

- Any Supabase write.
- Any schema migration.
- Any App runtime behavior change.
- Any public Web output.
- Any media metadata write.
- Any external paid service.
- Any cloud media upload.
- Any automated scheduled job.
- Any canonical writeback.
- Any expansion into CRM/Financials/sensitive data.
- Any replacement of pgvector with a dedicated vector database.
- Any move from local Memgraph pilot to shared/persistent production service.

## 9. Timeline

### 1 To 2 Focused Weeks

Useful local harness for one bounded scope.

This estimate applies only to the first bounded scope, such as Lake Post-Seal. It does not mean the entire miniBIOTA universe is fully wired.

### 3 To 6 Focused Weeks

Broader cross-domain system with dashboard, review queues, pgvector, and controlled writeback.

### Longer

Polished daily-use operating system across stories, media, telemetry, analytics, Planner, and sensitive domains.

## 10. Review Checklist

- Is the plan understandable to Josue?
- Does it preserve Supabase as truth?
- Does it make Memgraph useful without making it canonical?
- Does it avoid another wave/document rabbit hole?
- Does it define what to build now vs later?
- Does it keep the system scalable?
- Does it keep writeback human-approved?
- Does it support years of observations, media, and stories?
- Does it preserve later upgrade ideas with clear triggers and approval gates?
- Does it let Josue return to miniBIOTA work instead of babysitting architecture?
- Does it make the next implementation step obvious?
