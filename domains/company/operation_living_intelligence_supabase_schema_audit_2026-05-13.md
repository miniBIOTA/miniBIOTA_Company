---
id: operation_living_intelligence_supabase_schema_audit_2026-05-13
title: Operation Living Intelligence Supabase Schema Audit
domain: company_operations
last_updated: 2026-05-13
tags: [operation-living-intelligence, supabase, schema-audit, planner, read-only]
status: active_reference
---
# Operation Living Intelligence Supabase Schema Audit

## Purpose

This is the first live, read-only Supabase schema audit for Operation Living Intelligence.

It exists to verify the planning matrix against the live public Supabase schema before implementation work begins. It does not authorize exports, imports, sync jobs, schema changes, App runtime changes, public website changes, paid services, or broad data indexing.

## Method

Checked on 2026-05-13 using Company protected Supabase access:

- `GET /rest/v1/` OpenAPI inventory for public-schema tables/views and exposed RPC paths.
- `GET /storage/v1/bucket` for Storage bucket inventory.
- Company Planner readback for the Operation Living Intelligence project.
- Company Planner write for the requested implementation-time follow-up audit task.

No row data was sampled. No schema was changed. No app behavior changed.

## Limits

This audit is a schema inventory, not an implementation-grade data profile.

The OpenAPI surface confirmed table/view names, exposed column names, exposed column types, required fields, one RPC path, and Storage buckets. It did not fully prove:

- Foreign-key constraints.
- Indexes.
- RLS policy details.
- Trigger behavior.
- Row counts.
- Null distribution.
- Data quality.
- Export query performance.
- Sensitive-field samples.

Those belong in the implementation-time audit before the first Operation Living Intelligence export/import. Planner task `409` was created for that gate.

## Summary

| Area | Result |
|---|---:|
| Public-schema tables/views exposed by OpenAPI | 108 |
| Exposed RPC paths | 1 |
| Storage buckets checked | 2 |
| Planner follow-up task created | `tasks.id = 409` |
| Live data sampled | No |
| Writes performed | Planner task `409` only, explicitly requested |

## RPCs

| RPC | Owner posture | OLI posture |
|---|---|---|
| `/rpc/save_species_sighting_session` | App/Research Field Observer save path | Do not call during projection. Document as a write boundary for future App/Research implementation review. |

## Storage Buckets

| Bucket | Public | OLI posture |
|---|---:|---|
| `images` | true | Canonical public image object bucket for current Web/App image flows. Project references/metadata only. |
| `chronicles-images` | true | Canonical public chronicle image object bucket. Project references/metadata only. |

## Domain Coverage

Every live public-schema table/view is accounted for below. "Project posture" describes first Operation Living Intelligence treatment, not an approval to move or index data.

### Research And Ecosystem

| Table/view | Project posture | Notes |
|---|---|---|
| `species` | Memgraph `Species`, vector species summaries | Canonical Research/App species records. |
| `species_to_biomes` | Memgraph species-biome relationships | Live schema confirms explicit join table beyond broad species/biome records. |
| `species_sighting_sessions` | Optional Memgraph summaries later | Field Observer session records; write boundary goes through App RPC. |
| `species_sightings` | Optional Memgraph summaries later | Field Observer sighting details; Research review needed before claim use. |
| `biomes` | Memgraph `Biome`, vector summaries, telemetry joins | Canonical biome context. |
| `biosphere_profile` | Memgraph `Biosphere`, vector summary | Whole-system public/internal context. |
| `observations` | Memgraph `Observation`, vector note chunks | Canonical event/evidence records. |
| `observation_loop_links` | Observation to open-loop edges | Story/evidence routing. |
| `observation_thread_links` | Observation to story-thread edges | Story/evidence routing. |
| `ecosystem_resources` | Memgraph `EcosystemResource` | Public relationship graph resource nodes. |
| `ecosystem_interaction_types` | Graph vocabulary/reference | Controlled interaction language. |
| `ecosystem_interactions` | Memgraph interaction edges/nodes | Public ecosystem relationship graph. |

### Content And Public History

| Table/view | Project posture | Notes |
|---|---|---|
| `content_pipeline` | Memgraph `ContentItem`, vector text, analytics dimension | Published content identity and URLs. |
| `content_calendar` | Light graph projection, analytics dimension | Planned/in-production identity; not task truth. |
| `content_calendar_loops` | Calendar to open-loop edges | Source-map table. |
| `content_calendar_observations` | Calendar to observation edges | Source-map table. |
| `content_calendar_story_beats` | Calendar to story-beat edges | Source-map table. |
| `content_calendar_threads` | Calendar to story-thread edges | Source-map table. |
| `story_threads` | Memgraph `StoryThread`, vector summaries | Content continuity. |
| `open_loops` | Memgraph `OpenLoop`, vector summaries | Unresolved questions and arcs. |
| `story_beats` | Memgraph `StoryBeat`, vector summaries | Narrative turns and source-shaping records. |
| `story_beat_loops` | Story-beat to open-loop edges | Beat source map. |
| `story_beat_observations` | Story-beat to observation edges | Beat evidence map. |
| `story_beat_threads` | Story-beat to story-thread edges | Beat continuity map. |
| `chronicles` | Memgraph `Chronicle`, vector text | Public history records. |
| `chronicle_subject_links` | Chronicle subject edges | Public history to species/biome/system/biosphere routing. |

### Web, Public Intake, And Public Images

| Table/view | Project posture | Notes |
|---|---|---|
| `announcements` | Analytics/vector summaries later | Public communication surface; Web/Brand/Content approval. |
| `email_signups` | Aggregate analytics only | Public intake; not CRM by default. |
| `poll_votes` | Aggregate analytics only | Audience signal; not individual relationship memory by default. |
| `systems` | Memgraph `System` or `PublicSurface` references | Public engineering-system context. |
| `species_images` | Media/public image references, vector metadata | Public species image table. |
| `biome_images` | Media/public image references, vector metadata | Public biome image table. |
| `chronicle_images` | Media/public image references, vector metadata | Public chronicle image table. |
| `chronicles_staging` | Do not project by default | Internal/legacy review queue unless redesigned. |
| `system_logs` | Do not broadly project yet | Public/system notes may contain mixed context; review before indexing. |

### App Media And Prompt Runtime

| Table/view | Project posture | Notes |
|---|---|---|
| `media_assets` | Memgraph `MediaAsset`, vector metadata | Canonical App media-library record. |
| `media_biomes` | Media to biome edges | App/Research/Web review before writeback. |
| `media_chronicles` | Media to chronicle edges | App/Content/Web review before writeback. |
| `media_project_assets` | Media project membership edges | App/Content production/evidence grouping. |
| `media_projects` | Media project nodes | App media grouping records. |
| `media_species` | Media to species edges | App/Research review before writeback. |
| `media_systems` | Media to system edges | App/Hardware/Web review before writeback. |
| `media_tag_links` | Media tag edges | App-owned tagging. |
| `media_tags` | Tag vocabulary nodes | App-owned tag vocabulary. |
| `prompt_library` | Vector prompt/workflow index after App review | Prompt records are operational templates, not source-truth facts. |

### Planner And Company Operations

| Table/view | Project posture | Notes |
|---|---|---|
| `work_domains` | Memgraph `AgentDomain` | Domain ownership and routing. |
| `work_projects` | Memgraph `WorkProject`, analytics snapshots | Project dependency and ownership map. |
| `tasks` | Memgraph `Task`, vector summaries if useful | Planner remains task truth. |
| `task_completions` | Analytics snapshots | Completion cadence and workload review. |
| `work_programs` | Memgraph `WorkProgram` | Cross-domain program context. |
| `work_program_projects` | Program to project edges | Program membership/dependencies. |
| `strategic_initiatives` | Defer or vector with Company approval | Legacy/strategy records; avoid treating as roadmap commitments. |
| `initiative_steps` | Defer or vector with Company approval | Strategy step records; Planner remains active task truth. |

### Hardware And Telemetry

| Table/view | Project posture | Notes |
|---|---|---|
| `telemetry_snapshot` | Current-state summary and public-surface references | Keep canonical current telemetry in Supabase. |
| `biome_telemetry` | Rollups, analytics summaries, optional `TelemetryWindow` nodes | Keep in Postgres first; no TSDB sidecar yet. |

### Growth And CRM

CRM coverage is broader than the original planning matrix named explicitly. Keep CRM projection deferred until Growth/App confirms privacy, live-data readiness, and commitment boundaries.

| Table/view | Project posture | Notes |
|---|---|---|
| `partner_opportunities` | Optional analytics/graph later | Growth-owned opportunity context. |
| `crm_activities` | Defer broad projection | Legacy/activity context. |
| `crm_addresses` | Do not project broadly | Sensitive contact detail. |
| `crm_agent_recommendations` | Defer until agent policy exists | Agent-generated CRM suggestions need review gates. |
| `crm_agent_runs` | Analytics only after policy | Agent telemetry/private commercial workflow. |
| `crm_assets` | Defer | Relationship/commercial asset context. |
| `crm_audit_events` | Audit/security reference only | Do not broadly index. |
| `crm_campaign_members` | Aggregate only later | Campaign membership can be sensitive. |
| `crm_campaigns` | Analytics later | Campaign context after Growth approval. |
| `crm_consents` | Privacy-control table | Do not project except compliance-aware checks. |
| `crm_contact_links` | Relationship edges later | Only after privacy policy. |
| `crm_contact_methods` | Do not project broadly | Sensitive contact detail. |
| `crm_contacts` | Defer broad projection | Legacy/general contact records. |
| `crm_decisions` | Defer/vector only with approval | Commercial decision records. |
| `crm_external_sources` | Provenance reference later | Import/source traceability. |
| `crm_import_batches` | Audit/provenance only | Import metadata. |
| `crm_interaction_opportunities` | Relationship edges later | Needs privacy/commitment policy. |
| `crm_interaction_organizations` | Relationship edges later | Needs privacy/commitment policy. |
| `crm_interaction_people` | Relationship edges later | Needs privacy/commitment policy. |
| `crm_interactions` | Vector summaries only with privacy rules | Interaction history is sensitive. |
| `crm_next_actions` | Planner/CRM routing later | Do not infer commitments. |
| `crm_opportunities` | Graph/analytics later | Growth approval required. |
| `crm_opportunity_organizations` | Opportunity relationship edges later | Growth/App approval required. |
| `crm_opportunity_people` | Opportunity relationship edges later | Growth/App approval required. |
| `crm_opportunity_tags` | Tag edges later | Growth/App approval required. |
| `crm_organization_tags` | Tag edges later | Growth/App approval required. |
| `crm_organizations` | Organization nodes later | Growth/App approval required. |
| `crm_people` | Person nodes later | Sensitive; no broad projection yet. |
| `crm_person_organizations` | Person to organization edges later | Sensitive relationship map. |
| `crm_person_tags` | Tag edges later | Sensitive classification risk. |
| `crm_pipeline_stages` | Reference metadata later | Pipeline vocabulary. |
| `crm_pipelines` | Reference metadata later | Pipeline vocabulary. |
| `crm_referrals` | Defer | Commercial relationship context. |
| `crm_relationship_facts` | Graph later only after policy | Explicit relationship facts need approval. |
| `crm_segment_members` | Aggregate only later | Audience/contact segmentation is sensitive. |
| `crm_segments` | Reference/analytics later | Segment vocabulary. |
| `crm_tags` | Reference metadata later | Tag vocabulary. |

### Financials

Financial projection remains aggregate-only unless Financials approves more. This audit confirms additional Financials tables that the planning matrix should treat as sensitive.

| Table/view | Project posture | Notes |
|---|---|---|
| `operating_expenses` | Aggregated cost summaries only | Financials approval. |
| `liabilities` | Do not broadly project | Sensitive finance context. |
| `revenue_streams` | Aggregated summaries only | Financials approval. |
| `planned_purchases` | Subscription/tool decision summaries | Financials approval. |
| `monthly_financial_closes` | Status summaries only | Financials approval. |
| `cash_receipts` | Aggregated monthly revenue/cash summaries only | Financials approval. |
| `expense_transactions` | Aggregated vendor/category/tool-cost summaries only | Financials approval. |
| `liability_snapshots` | Do not broadly project | Aggregate trend only if approved. |
| `account_balance_snapshots` | Do not broadly project | Runway summary only if approved. |
| `financial_accounts` | Do not broadly project | Sensitive account catalog. |
| `mileage_log` | Aggregate field/content trip summaries only if approved | Financials approval. |
| `financial_documents` | Do not project by default | Source documents are sensitive. |
| `financial_entities` | Do not broadly project | Entity ownership/accounting context. |
| `expense_classification_rules` | Reference only after Financials approval | Classification rules can expose financial workflow assumptions. |
| `statement_import_batches` | Audit/provenance only | Statement import metadata. |
| `statement_transactions` | Do not broadly project | Statement rows are sensitive. |

## Deltas Against The Planning Matrix

The planning matrix was directionally correct, but the live audit found areas that need explicit handling:

- CRM is substantially larger than the initial named subset. It has agent-run, recommendation, consent, campaign, segment, tag, interaction, relationship-fact, import, and audit tables. Default posture should remain deferred/private.
- Financials includes document, entity, classification, statement import, and statement transaction tables in addition to the core expense/revenue/liability/cash tables. Default posture should remain aggregate-only.
- Public/Web surface includes `system_logs`, which should not be automatically indexed until Web/App/Hardware confirms its content and public/private posture.
- Research includes `species_to_biomes`, which should become an explicit graph edge source.
- Company/Planner includes `strategic_initiatives` and `initiative_steps`, which should not compete with Planner as the active task source.
- Storage buckets are only `images` and `chronicles-images` in this audit.

## Planner Follow-Up

Created live Planner task:

| Field | Value |
|---|---|
| Task id | `409` |
| Project | `Operation Living Intelligence Coordination` / `work_project_id = 75` |
| Parent task | `383` |
| Task | `Implementation gate: rerun live Supabase schema and data audit before first Operation Living Intelligence export/import` |
| Status | `open` |
| Scheduled date | none |

## Recommendation

Keep the first audit as architecture validation. Before implementation, task `409` should run the deeper audit:

- Table and column inventory refresh.
- Row counts.
- Sample records for non-sensitive tables.
- Data-quality/null-pattern checks.
- Foreign keys, indexes, RLS, and triggers through Supabase MCP or SQL-capable approved tooling.
- Privacy tier per table.
- Exact export queries.
- Validation queries.
- Rebuild/readback plan.
- Writeback approval map.
