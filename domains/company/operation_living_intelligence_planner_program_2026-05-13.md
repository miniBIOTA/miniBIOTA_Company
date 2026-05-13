---
title: Operation Living Intelligence Planner Program Record
date: 2026-05-13
domain: company_operations
status: created_readback_complete
related_plan: M:\miniBIOTA\miniBIOTA_Company\skills\coordinate-cross-domain-priorities\reference\operation-living-intelligence-plan.md
---
# Operation Living Intelligence Planner Program Record

This record defines the live Planner Program structure for Operation Living Intelligence.

Josue approved creating this exact live Planner bundle on 2026-05-13. Company created the Program, new projects, Program-project links, and parent/container tasks, then read the records back.

## Created Records

Live Planner readback confirmed:

- `work_programs.id = 4` - `Operation Living Intelligence`
- New `work_projects`: `75` through `81`
- New `work_program_projects`: `23` through `39`
- New `tasks`: `380` through `408`

No created task has `scheduled_date` or `due_date`; the first write used ordered parent/container tasks only.

## Recommendation

Create Operation Living Intelligence as a live Planner Program now, but keep the current work order intact:

1. Aquatic Club Talk Readiness remains the protected near-term hard-window priority through the 2026-06-13 talk and 2026-06-14 closeout.
2. Operation Living Atlas remains the first practical proof case for graph/retrieval/provenance work.
3. Operation Living Web remains downstream of curated Atlas/Research outputs.
4. Operation Living Intelligence becomes the architecture and routing program that connects the stack without forcing a cutover.
5. New graph, vector, analytics, media-intelligence, cache, and automation layers start as read-only or derived systems until approved otherwise.

## Source Checks Completed

Content source checked:

- Content production setup records Windows 11 Pro, DaVinci Resolve Studio 20.3.2 Build 9, and an MSI SHADOW RTX 5060 Ti 16GB GPU with CUDA enabled.
- Content production setup records active media storage as a 10TB WD Red Plus HDD and notes that a backup drive remains a high-priority gap.

App source checked:

- App runtime defaults media indexing to `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos`.
- App owns the Media Library indexing/reindexing path, thumbnail access, and Supabase-backed media records.
- App media schema includes `media_assets`, media species/biome/system/chronicle links, media tags, and media projects.

Routing conclusion:

- Content owns workstation/local compute and production-context assumptions.
- App owns the media folder indexing path, Media Library schema, app runtime, and writeback gates.
- Raw Footage owns source-media provenance and file organization context.
- Research reviews ecological and species claims from visual AI outputs.
- Company owns the cross-domain operating sequence.

## Program Record

Created in `work_programs`:

| Field | Value |
|---|---|
| id | 4 |
| title | Operation Living Intelligence |
| status | active |
| priority | 2 |
| owner_agent | Company Agent |
| lead_agent | Company Agent |
| start_date | 2026-05-13 |
| target_date | null |
| description | Build miniBIOTA's cross-domain agent data stack: Markdown memory, Supabase operational truth, graph intelligence, vector retrieval, analytics warehousing, visual/local AI, cache/runtime memory, automation, and routed agent access. |
| notes | Keep current Markdown/Supabase/Planner workflows live. New graph, vector, analytics, media-intelligence, cache, and automation layers begin as derived or read-first systems. Aquatic Club Talk Readiness remains the protected near-term hard-window priority. App owns implementation and schema/runtime gates; Company owns program governance. |

## New Projects Created

Created these `work_projects` records and linked them to the new Program.

| Project ID | Link ID | Domain | Title | Status | Priority | Owner Agent | Program Role |
|---:|---:|---|---|---:|---:|---|---|
| 75 | 23 | Company Ops | Operation Living Intelligence Coordination | active | 5 | Company Agent | lead |
| 76 | 24 | App | Operation Living Intelligence App Bridges & Agent Router | planned | 10 | App Agent | member |
| 77 | 25 | Ecosystem/Research | Operation Living Intelligence Graph Ontology & Evidence Model | planned | 9 | Research Agent | member |
| 78 | 26 | Content | Operation Living Intelligence Source Inventory & Visual AI Readiness | planned | 6 | Content Agent | member |
| 79 | 27 | Web | Operation Living Intelligence Public Data & Analytics Surfaces | planned | 8 | Web Agent | supporting |
| 80 | 28 | Sales/Growth | Operation Living Intelligence Analytics Warehouse Pilot | planned | 7 | Growth Agent | member |
| 81 | 29 | Financials | Operation Living Intelligence Cost & Subscription Review | planned | 9 | Financials Agent | review |

## Existing Projects Linked

Linked these existing projects to the new Program so overlap is visible without duplicating ownership.

| Project ID | Link ID | Project | Role | Reason |
|---:|---:|---|---|---|
| 63 | 30 | Aquatic Club Talk Program Coordination | dependency | Protects the current 2026-06-13 hard-window priority. |
| 18 | 31 | AI & Knowledge Infrastructure | dependency | Existing Company knowledge-infrastructure and agent-access precedent. |
| 19 | 32 | Operation Living Atlas Coordination | dependency | First practical proof case for graph/provenance/source-packet workflow. |
| 31 | 33 | Operation Living Atlas Backfill | dependency | Content source packets and historical evidence. |
| 60 | 34 | Operation Living Atlas Evidence Integrity | dependency | Research validation and evidence-link rules. |
| 57 | 35 | Operation Living Atlas Public Rendering | supporting | Web should consume curated Atlas outputs only after review. |
| 59 | 36 | Operation Living Atlas Review Workflow Support | supporting | Candidate App review workflow if manual packet friction is proven. |
| 61 | 37 | Operation Living Web Review Workflow Support | supporting | Future relationship-review workflow. |
| 13 | 38 | Site Admin & Media Workflow Reliability | supporting | App-owned media library reliability and media review path. |
| 15 | 39 | Supabase, Storage & Secret-Key Safety | review | Schema, credential, storage, and write-safety gate. |

## Task Creation Rule

The first write created parent/container tasks only. It did not add scheduled calendar dates.

Use task titles, priorities, and `sort_order` to represent sequence. Add scheduled child tasks only after a later review confirms timing and avoids crowding the Aquatic Club hard window.

## Company Lead Project Tasks

Project: `Operation Living Intelligence Coordination`

| Task ID | Sort | Task | Type | Work Status | Notes |
|---:|---:|---|---|---|---|
| 380 | 10 | Stage 0: Create the live Operation Living Intelligence Program and link overlapping operations | task | active | No schema, app runtime, public site, paid tool, or automated-agent changes implied. |
| 381 | 20 | Stage 1: Finalize source-of-truth, domain-owner, and agent-routing matrix | task | planned | Include Markdown, Supabase, graph, vector, analytics warehouse, media library, local models, cache, and automation. |
| 382 | 30 | Stage 2: Mesh Operation Living Intelligence with Aquatic Club Talk, Operation Living Atlas, Operation Living Web, and AI & Knowledge Infrastructure | task | planned | Confirm what supports current work and what waits until after talk closeout. |
| 383 | 40 | Stage 3: Approve graph-first pilot scope and success criteria before any graph import | task | planned | Lake Post-Seal remains the default proof case. |
| 384 | 50 | Stage 4: Define the weekly or biweekly review rhythm for pilot planning | routine | planned | Review owner, current phase, blockers, cost, safety, and whether any lane is trying to become source of truth. |
| 385 | 60 | Stage 5: Decide which lanes can move from planning to implementation after Aquatic Club Talk closeout | milestone | planned | Explicitly review App, Research, Content, Web, Growth, Financials, and media/visual AI readiness. |

## App Project Tasks

Project: `Operation Living Intelligence App Bridges & Agent Router`

| Task ID | Sort | Task | Type | Work Status | Notes |
|---:|---:|---|---|---|---|
| 386 | 10 | Map App-owned Planner, Supabase bridge, Media Library, storage, secret-key, and indexing boundaries | task | planned | Include the current media folder used by App indexing. |
| 387 | 20 | Design read-only access pattern for graph, vector, analytics, and media-intelligence layers | task | planned | Derived layers should not write canonical records during pilot. |
| 388 | 30 | Design the agent router and tool registry for which agent queries which system | task | planned | Include read/write/approval policy per agent domain. |
| 389 | 40 | Design local visual-model worker boundary without changing App runtime yet | task | planned | Treat Qwen2.5-VL-7B-style models as time-sensitive candidates, not permanent commitments. |
| 390 | 50 | Define approval and readback requirements for any future App schema, media metadata, or writeback path | milestone | planned | App/schema/runtime changes require separate approval. |

## Research Project Tasks

Project: `Operation Living Intelligence Graph Ontology & Evidence Model`

| Task ID | Sort | Task | Type | Work Status | Notes |
|---:|---:|---|---|---|---|
| 391 | 10 | Define the first graph ontology for species, biomes, observations, events, claims, media, source packets, publicness, confidence, and reviews | task | planned | Preserve observed, inferred, proposed, and approved distinctions. |
| 392 | 20 | Convert the Lake Post-Seal model packet into graph-candidate relationships without making canonical writes | task | planned | Use source IDs and paths for provenance. |
| 393 | 30 | Define how graph paths preserve evidence, uncertainty, publicness, inferred-vs-observed status, and Research review status | task | planned | Keep public and internal claims separated. |
| 394 | 40 | Evaluate whether graph traversal improves at least 7 of the 10 pilot questions | milestone | planned | Continue only if the pilot beats Markdown/Supabase lookup in real use. |

## Content Project Tasks

Project: `Operation Living Intelligence Source Inventory & Visual AI Readiness`

| Task ID | Sort | Task | Type | Work Status | Notes |
|---:|---:|---|---|---|---|
| 395 | 10 | Inventory source packets, transcripts, scripts, production notes, footage references, and hardware/local compute assumptions that should be retrievable | task | planned | Content owns production context and workstation assumptions. |
| 396 | 20 | Confirm which source materials are safe to index, which are internal-only, and which need publicness labels | task | planned | Avoid flattening private context into public-safe claims. |
| 397 | 30 | Confirm visual AI feasibility against the current production workstation and backup-drive gap | task | planned | Do not install models or move media from this task alone. |
| 398 | 40 | Select a small visual AI test set after App confirms media-folder and indexing boundaries | task | planned | Use local files by default; no upload/cloud processing without approval. |
| 399 | 50 | Document how candidate visual annotations return to Content and Research review before any metadata write | milestone | planned | Candidate annotations are not canonical media metadata until reviewed. |

## Web Project Tasks

Project: `Operation Living Intelligence Public Data & Analytics Surfaces`

| Task ID | Sort | Task | Type | Work Status | Notes |
|---:|---:|---|---|---|---|
| 400 | 10 | Identify which public surfaces could eventually consume curated graph or Living Atlas outputs | task | planned | Public rendering remains downstream of Research/Web review. |
| 401 | 20 | Define website analytics events or exports needed for the analytics warehouse pilot | task | planned | Keep analytics separate from content calendar truth. |
| 402 | 30 | Define public-read-only constraints for any future graph-powered website experience | milestone | planned | No public site behavior changes are approved by this task. |

## Growth Project Tasks

Project: `Operation Living Intelligence Analytics Warehouse Pilot`

| Task ID | Sort | Task | Type | Work Status | Notes |
|---:|---:|---|---|---|---|
| 403 | 10 | Inventory YouTube, website, QR, social, support, newsletter, and CRM signals that should feed analytics | task | planned | Include data availability and access method, not just desired metrics. |
| 404 | 20 | Define the first performance questions for content-to-website movement and Aquatic Club follow-up | task | planned | Avoid sponsor or revenue claims without evidence. |
| 405 | 30 | Recommend the first analytics pilot stack after sources are known | milestone | planned | MotherDuck/DuckDB is the default lightweight candidate unless a better fit is proven. |

## Financials Project Tasks

Project: `Operation Living Intelligence Cost & Subscription Review`

| Task ID | Sort | Task | Type | Work Status | Notes |
|---:|---:|---|---|---|---|
| 406 | 10 | Compare free/local versus paid graph candidates after the graph pilot scope is known | task | planned | Include Neo4j Aura Free/Paid and local Memgraph. |
| 407 | 20 | Set cost thresholds and approval criteria for graph, vector, analytics, cache, automation, and local model tooling | task | planned | Paid tools need owner, benefit, and rollback plan. |
| 408 | 30 | Review vector, warehouse, and automation costs only after each layer has a proven job | milestone | planned | Do not subscribe because a platform is popular. |

## What This Does Not Change

- No Supabase schema changes.
- No App runtime changes.
- No public website changes.
- No media metadata writes.
- No Research/ecological canonical writes.
- No Content calendar or pipeline writes.
- No paid subscriptions.
- No local model installation.
- No automated agents or scheduled jobs.
- No public, financial, sponsor, legal, launch, or roadmap commitments.

## Readback Notes

Readback confirmed the created tasks are unscheduled. Aquatic Club Talk Readiness remains the protected near-term hard-window priority through the 2026-06-13 talk and 2026-06-14 closeout.

The first attempted task insert was rejected by Supabase because the live `tasks` table requires `domain_label`. Company reran the idempotent write with the required labels; the completed write created only the missing task rows.
