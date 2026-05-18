---
id: operation_living_intelligence_wave_1_living_atlas_graph_seed_handoff_2026-05-15
title: Operation Living Intelligence Wave 1 Living Atlas Graph Seed Handoff
domain: company_operations
date: 2026-05-15
status: docs_only_handoff
tags: [operation-living-intelligence, living-atlas, graph-seed, handoff, app, research, content]
---
# Operation Living Intelligence Wave 1 Living Atlas Graph Seed Handoff

## Purpose

This is the Company-owned docs-only handoff for the first Operation Living Intelligence implementation-readiness lane: **Wave 1: Living Atlas Graph Seed**.

The handoff converts the completed Company, Research, App, Content, and Financials planning into a usable boundary for a future no-write, derived-only graph dry run around the Lake Post-Seal Living Atlas packet.

This document does not approve a graph import, Memgraph install, export job, import job, Supabase write, Planner write, App runtime change, public website change, media metadata write, local model run, cloud upload, paid service, automation job, public claim, launch target, roadmap commitment, or source-of-truth move.

## Current Readback

Live Planner readback on 2026-05-15 showed:

| Planner item | Current state | Handoff meaning |
|---|---|---|
| Company project `75` | active | Company coordination remained open at handoff time because task `409` was still open; task `409` was later marked done on 2026-05-15, but project-level closeout was not changed |
| App project `76` | planned | App implementation remains unapproved even though readiness tasks `386-390` are done; visual media sidecar task `412` is still open |
| Research project `77` | done | Research graph ontology, candidates, path safety, and Stage 3 evaluation are ready as planning sources |
| Content project `78` | done | Content source/publicness/media-readiness artifacts are ready as planning sources |
| Web project `79` | planned | Public surface mapping remains open in tasks `400-402` |
| Growth/Sales project `80` | planned | Analytics source/question/stack work remains open in tasks `403-405` |
| Financials project `81` | done | Cost posture is ready: no-cost/free-local first, paid ceilings still not approved |
| Task `409` | done as of later 2026-05-15 readback | REST/OpenAPI and source-migration audit pass completed on 2026-05-15; later Wave 1/Wave 2/Wave 3 local helper/readback work and Company reviews satisfied the gate for the current local proofs; durable graph infrastructure, vector index, analytics pull, model batch, cache, automation, public output, and canonical writeback remain separately unapproved |

Later update: task `409` was marked done on 2026-05-15 after explicit approval and readback, following completion of the Wave 1/Wave 2/Wave 3 read-only audits, local helpers, readbacks, and Company reviews. This later task-status update did not mark Company project `75` done, did not mark App task `412` done, and did not approve durable graph infrastructure, automation, public output, or canonical writeback.

## Wave 1 Objective

Wave 1 should produce an implementation-ready packet for a **no-write, derived-only Lake Post-Seal graph seed dry run**.

The target is not a production graph. The target is a small rebuildable proof case that can answer whether graph traversal makes the Lake Post-Seal evidence, caveats, claims, and review gates easier and safer to query than Markdown/Supabase lookup alone.

## Source Bundle

Use these sources as the handoff bundle:

| Source | Path / record |
|---|---|
| OLI plan | `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-plan.md` |
| OLI projection matrix | `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-data-projection-matrix.md` |
| First Supabase schema audit | `archive/superseded/operation-living-intelligence/operation_living_intelligence_supabase_schema_audit_2026-05-13.md` |
| Task 409 schema/data audit pass | `archive/superseded/operation-living-intelligence/operation_living_intelligence_task_409_schema_data_audit_2026-05-15.md` |
| Wave 1 no-write dry-run proposal | `domains/company/operation_living_intelligence_wave_1_no_write_dry_run_proposal_2026-05-15.md` |
| App design review packet | `domains/company/operation_living_intelligence_wave_1_app_design_review_packet_2026-05-15.md` |
| App design review readiness | `domains/company/operation_living_intelligence_wave_1_app_design_review_readiness_2026-05-15.md` |
| JSONL dry-run generation record | `domains/company/operation_living_intelligence_wave_1_jsonl_dry_run_generation_2026-05-15.md` |
| Memgraph import readiness review | `domains/company/operation_living_intelligence_wave_1_memgraph_import_readiness_review_2026-05-15.md` |
| Planner program record | `domains/company/operation_living_intelligence_planner_program_2026-05-13.md` |
| Research ontology | `M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-task-391-graph-ontology.md` |
| Research graph candidates | `M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-task-392-lake-post-seal-graph-candidates.md` |
| Research path safety | `M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-task-393-graph-path-safety.md` |
| Research Stage 3 evaluation | `M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-task-394-stage-3-pilot-question-evaluation.md` |
| Content/Research source inventory | `M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-14-operation-living-intelligence-content-task-395-retrievable-source-inventory.md` |
| Content publicness/indexing plan | `M:\miniBIOTA\miniBIOTA_Content\audits\living_atlas\2026-05-14-operation-living-intelligence-content-task-396-source-publicness-indexing-plan.md` |
| Financials graph cost review | `M:\miniBIOTA\miniBIOTA_Financials\memory\09-operation-living-intelligence-graph-cost-review.md` |
| Financials cost thresholds | `M:\miniBIOTA\miniBIOTA_Financials\memory\10-operation-living-intelligence-cost-thresholds.md` |

## Bounded Seed

The first graph seed is bounded to:

| Family | Allowed first-seed scope |
|---|---|
| Published source identity | `content_pipeline.id = 338` |
| Chronicle identity | `chronicles.id = 30` |
| Biome context | Freshwater Lake / `biome 1` as a context pointer only |
| Species / organism records | `24`, `67`, `66`, `164`, `167`, `180` |
| Observations | `170-178` plus only explicitly approved context records |
| Source packet | `M:\miniBIOTA\miniBIOTA_Content\audits\living_atlas\source_packets\pipeline_338_chronicle_30_lake_post_seal_2026-05-12.md` |
| Research validation | 2026-05-13 pipeline `338` validation and link/evidence verification notes |
| Media | Packet media references only, as candidate evidence/review references, not media metadata |

Excluded from Wave 1:

- Whole-ecosystem graph expansion.
- Later observations `179+` unless separately approved as context.
- Story threads and open loops as first-class graph nodes.
- Public website reuse mapping, except as an open gap.
- Canonical observation, species, chronicle, subject-link, media, Planner, or Content writes.
- Any public claim stronger than the weakest Research-reviewed evidence allows.

## Domain Handoff

| Domain | Owns next | Must not cross |
|---|---|---|
| Company | Program governance, dependency sequencing, approval gates, and review rhythm | No implementation mandate or Planner write without approval |
| App | Future no-write dry-run run pattern, ignored local export/import location, validation/readback design, and optional Memgraph/App boundary proposal | No runtime/schema/helper/service change without explicit App-scoped approval |
| Research | Ontology, claim caveats, publicness/confidence rules, blocked edges, and final ecological review | No AI/graph candidate becomes canonical ecological truth |
| Content | Source packet context, publicness/indexing policy, story usefulness, and media review routing | No publication, caption, calendar, pipeline, or media metadata update by implication |
| Web | Future public surface reuse constraints after tasks `400-402` | No public rendering or copy change from this handoff |
| Financials | Free/local-first cost posture and paid-tool approval gates | No paid graph, cloud, API, subscription, or install commitment |

## Gate Stack Before Any Dry Run

Before a no-write graph dry run begins:

1. Resolve task `409`'s remaining SQL metadata gap: the 2026-05-15 REST/OpenAPI audit identified exact source rows, counts, samples, validation checks, privacy tiers, and export-manifest candidates, but live constraints, indexes, RLS policies, and triggers still require a working Supabase MCP database session, App-owned read-only SQL bridge/helper, read-only Postgres catalog connection, or explicit acceptance of the narrower audit for a design-only next step.
2. Freeze the exact source files or record versions used by the seed, ideally with file timestamps, commit hashes, checksums, or another practical version note.
3. Decide where rebuildable local/ignored graph export files may live. Default should be local ignored output, not committed graph data.
4. Confirm no source family includes CRM, Financials row-level data, private contact data, raw private media, or broader telemetry.
5. Define validation queries before import: node count, edge endpoint validity, missing source IDs, publicness/confidence presence, blocked-edge visibility, sensitive-field exclusion, and rebuild/delete path.
6. Confirm Research and Content review owners for claim/story/media interpretation.
7. Confirm App owner for any local service, Memgraph instance, importer, or readback script before running it.

## Required Readback Shape

Any future graph readback should return:

| Field | Required behavior |
|---|---|
| Path status | `public_allowed`, `internal_only`, `blocked`, or `import_not_ready` |
| Safe claim | No stronger than the weakest path element |
| Evidence | Node IDs, edge IDs, source IDs, and source paths |
| Confidence floor | Most restrictive relevant confidence label |
| Publicness floor | Most restrictive publicness tier |
| Observed/inferred/proposed mix | Visible at path level |
| Review status | Resolved, required, blocked, and owner |
| Blockers | Blocking nodes/edges and review gates |
| Do-not-say | Overclaims blocked by the path |
| Canonical writes implied | Always `none` unless separately approved outside the graph output |

## Stage 3 Acceptance Carryforward

Research task `394` found the graph-candidate model passed `8 / 10` Stage 3 pilot questions. Continue only toward a no-write, derived-only dry-run/readback prototype or another docs-only design pass.

The two weak areas remain:

- Public surface reuse is under-modeled until Web and Content tasks `400-402` clarify target surfaces.
- Real-use speed is unproven until a dry-run readback can be compared against Markdown/Supabase lookup.

## Recommended Next Action

Use the completed task `409` REST/OpenAPI audit pass and design-only proposal as the current App review baseline:

- `archive/superseded/operation-living-intelligence/operation_living_intelligence_task_409_schema_data_audit_2026-05-15.md`
- `domains/company/operation_living_intelligence_wave_1_no_write_dry_run_proposal_2026-05-15.md`
- `domains/company/operation_living_intelligence_wave_1_app_design_review_packet_2026-05-15.md`
- `domains/company/operation_living_intelligence_wave_1_app_design_review_readiness_2026-05-15.md`
- `domains/company/operation_living_intelligence_wave_1_jsonl_dry_run_generation_2026-05-15.md`
- `domains/company/operation_living_intelligence_wave_1_memgraph_import_readiness_review_2026-05-15.md`

Josue approved using the REST/OpenAPI plus migration-source audit as sufficient for this design-only step on 2026-05-15. The remaining live SQL metadata proof for constraints, indexes, RLS policies, and triggers is still required before any implementation, export/import, graph build, automation, or canonical write.

Company generated the JSONL-first dry run under `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\`. Import-shape validation now returns `pass_with_review_required_import_shape_ready` with `67` nodes, `96` edges, and `13` blocked edges. Memgraph import remains unapproved and unperformed.

The next gate is a separate decision on whether to approve an App-scoped regeneration helper or a local Memgraph import proposal. Company recommendation remains: helper first for repeatability, Memgraph next for quickly seeing graph traversal value. The proposal names:

- Exact source rows and files.
- Local ignored output location.
- Graph seed format.
- Whether blocked edges are represented as graph guardrail edges or Research Markdown readback rules.
- Validation queries and expected counts.
- Readback examples for Daphnia, Ghost Shrimp, Mesostoma, media proof, direct-link cleanup, and public-output exclusion.
- Fallback path if Memgraph/App implementation is not approved.

No Planner status should be changed from this handoff without explicit approval.
No App implementation should begin without separate App-scoped approval.

## Open Questions

- Should blocked edges be imported as first-class guardrail relationships in a dry-run graph, or kept outside the graph and injected into readback checks?
- Should public surface reuse remain outside Wave 1 until Web tasks `400-402` are complete?
- What source versioning rule is practical enough for local work but strong enough to make graph rebuilds auditable?
- Where should App place ignored local graph seed exports/imports if the dry run is approved?
- What should count as a real-use speed improvement over Markdown/Supabase lookup?

## Verification

- Company startup completed on 2026-05-15.
- Live Planner protected readback checked OLI projects `75-81` and tasks `380-415`.
- Protected Supabase REST/OpenAPI and App migration-source audit pass for task `409` documented at `archive/superseded/operation-living-intelligence/operation_living_intelligence_task_409_schema_data_audit_2026-05-15.md`.
- User-approved read-only SQL metadata attempt found no active SQL-capable Supabase path in this session.
- Josue approved proceeding to the design-only no-write dry-run proposal despite the SQL metadata access gap.
- App design review packet documented at `domains/company/operation_living_intelligence_wave_1_app_design_review_packet_2026-05-15.md`.
- Company-side App design review readiness documented at `domains/company/operation_living_intelligence_wave_1_app_design_review_readiness_2026-05-15.md`.
- JSONL dry-run generation documented at `domains/company/operation_living_intelligence_wave_1_jsonl_dry_run_generation_2026-05-15.md`.
- Memgraph import readiness documented at `domains/company/operation_living_intelligence_wave_1_memgraph_import_readiness_review_2026-05-15.md`.
- No Planner/Supabase writes were performed.
- No App runtime, public site, graph database, export/import job, media metadata, model run, cloud upload, paid tool, automation, or source-of-truth record changed.
