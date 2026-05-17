---
id: operation_living_intelligence_ih_phase_1_core_seed_source_query_list_2026-05-17
title: Operation Living Intelligence Intelligent Harness Phase 1 Core Seed Source Query List
domain: company_operations
last_updated: 2026-05-17
tags: [operation-living-intelligence, intelligent-harness, phase-1, source-query-list, no-write, lake-post-seal]
status: query_list_ready_for_review
---
# Operation Living Intelligence Intelligent Harness Phase 1 Core Seed Source Query List

## Purpose

This is the exact no-write source-query list for the first Intelligent Harness graph/retrieval scope.

Use with:

```text
domains/company/operation_living_intelligence_ih_phase_1_supabase_source_map_2026-05-17.md
domains/company/operation_living_intelligence_ih_phase_1_scope_review_packet_2026-05-17.md
```

This query list is implementation-ready as a planning artifact, but it does not approve implementation. It should be reviewed before any App helper, generated output, Memgraph setup, graph import, pgvector work, scheduled job, Supabase write, Planner write, or canonical writeback.

## Query Rules

- Use protected read-only Supabase access.
- Do not use raw SQL for these source rows unless the later SQL metadata pass is separately approved.
- Do not write to Supabase, Planner, Storage, App files, media metadata, or public surfaces.
- Preserve source table, source id, source updated timestamp when available, canonicality, owner domain, review status, publicness, and caveats in every derived node/edge.
- Treat absent canonical links as real findings, not errors to silently repair.

## Core Seed Query List

### Source Identity

| Query id | Table | Filter | Expected rows | Node/edge output |
|---|---|---|---:|---|
| `q_content_338` | `content_pipeline` | `id=eq.338` | 1 | `ContentItem` node |
| `q_chronicle_30` | `chronicles` | `id=eq.30` | 1 | `Chronicle` node; `SOURCE_CONTENT_FOR` edge to content `338` |
| `q_biome_1` | `biomes` | `id=eq.1` | 1 | `Biome` node |

Recommended fields:

```text
content_pipeline:
id,title,status,published_date,published_url,format,description,open_loops,biome_id,chronicle_entry_id,source_observation_id,species_id,system_id,transcript,updated_at

chronicles:
id,title,content,event_date,source_pipeline_id,biome_id,species_id,system_id,scope_type,media_type,youtube_url,chronicle_role

biomes:
id,name,slug,realm,biome_description,current_stability_status,ecological_notes,primary_maintenance_focus,habitat_theme_goal,image_filename
```

### Chronicle Subjects

| Query id | Table | Filter | Expected rows | Node/edge output |
|---|---|---|---:|---|
| `q_chronicle_30_subjects` | `chronicle_subject_links` | `chronicle_id=eq.30` | 8 | `MENTIONS` edges from chronicle `30` to biome/species subjects |

Recommended fields:

```text
id,chronicle_id,subject_type,species_id,biome_id,system_id,relationship,display_note,show_on_page,sort_order,created_at,updated_at
```

Core include rows:

```text
17, 22, 23, 24, 25
```

Context-only rows:

```text
26, 27, 28
```

### Core Species

| Query id | Table | Filter | Expected rows | Node/edge output |
|---|---|---|---:|---|
| `q_core_species` | `species` | `id=in.(24,66,67,164,167)` | 5 | Core `Species` nodes |
| `q_core_species_biomes` | `species_to_biomes` | `species_id=in.(24,66,67,164,167)` | 5 or more | `PART_OF_BIOME` edges with caveats |

Recommended fields:

```text
species:
id,common_name,scientific_name,slug,realm,main_biome,display_status,population_status,current_estimated_population,date_first_introduced,date_last_observed,last_seen,system_reproduction_status,ecological_role,species_description,population_dynamics_notes,identity_origin_notes,trophic_level,trophic_ecology_notes,interaction_profile_status

species_to_biomes:
species_id,biome_id
```

Optional context species query, do not require for first import:

```text
species.id in (25,65,69,156,169,180)
```

Use only when testing full chronicle-context or expansion behavior.

### Core Observations

| Query id | Table | Filter | Expected rows | Node/edge output |
|---|---|---|---:|---|
| `q_core_observations` | `observations` | `id=in.(170,171,172,173,174,175,176,177,178)` | 9 | `Observation` nodes; `OBSERVED_IN` edges to biome `1` |

Recommended fields:

```text
id,observed_at,created_at,biome_id,species_id,system_id,pipeline_id,chronicle_id,promoted_to_chronicle,has_video,video_description,note
```

Validation:

```text
pipeline_id must be null for all 9 rows.
chronicle_id must be null for all 9 rows.
promoted_to_chronicle must be false for all 9 rows.
```

### Open Loops

| Query id | Table | Filter | Expected rows | Node/edge output |
|---|---|---|---:|---|
| `q_core_open_loops` | `open_loops` | `id=in.(1,2,3,4,7)` | 5 | `OpenLoop` nodes; `SOURCE_LOOP_FOR` edges from content `338` |
| `q_core_observation_loop_links` | `observation_loop_links` | `observation_id=in.(170,171,172,173,174,175,176,177,178)` | 13 | `SUPPORTS` edges from observations to open loops |

Recommended fields:

```text
open_loops:
id,loop_text,notes,status,scope,source_format,source_pipeline_id,species_id,biome_id,system_id,opened_at,resolved_at,resolved_by_pipeline_id,created_at,updated_at

observation_loop_links:
observation_id,loop_id,note,created_at
```

Validation:

```text
open_loops.source_pipeline_id should be 338 for loops 1,2,3,4,7.
No loop should be treated as resolved unless status/resolved fields say so.
```

### Story Threads

| Query id | Table | Filter | Expected rows | Node/edge output |
|---|---|---|---:|---|
| `q_core_story_threads` | `story_threads` | `id=in.(1,3,5)` | 3 | Core `StoryThread` nodes |
| `q_core_observation_thread_links` | `observation_thread_links` | `observation_id=in.(170,171,172,173,174,175,176,177,178)` | 12 | `PART_OF_STORY` edges from observations to story threads |

Recommended fields:

```text
story_threads:
id,title,description,status,scope,species_id,biome_id,system_id,became_pipeline_id,created_at,updated_at

observation_thread_links:
id,observation_id,thread_id,note,created_at
```

Expansion query, do not require for first import:

```text
story_threads.id in (30)
```

### Media Candidates

| Query id | Table | Filter | Expected rows | Node/edge output |
|---|---|---|---:|---|
| `q_candidate_media_assets` | `media_assets` | `id=in.(9497,9499,9537,9538,9540,9548,9554,9557,9561,9562,9563,19311,35558)` | 13 | `MediaAssetCandidate` nodes with `NEEDS_REVIEW` |
| `q_missing_still_check` | `media_assets` | `filename=in.(20260408_082108.jpg,20260503_101720.jpg)` | 0 | Negative validation finding |
| `q_media_chronicle_links` | `media_chronicles` | `chronicle_id=eq.30` | 0 | Negative validation finding |
| `q_media_species_links` | `media_species` | `species_id=in.(24,66,67,164,167)` | 0 | Negative validation finding |
| `q_media_biome_links` | `media_biomes` | `biome_id=eq.1` | 0 | Negative validation finding |

Recommended fields:

```text
media_assets:
id,filename,local_path,file_type,captured_date,date_parse_source,reviewed,description,notes,duration_seconds,size_bytes,indexed_at,created_at
```

Validation:

```text
All 13 media candidate rows should have reviewed = false at the time of the readback.
No direct canonical media-use edge should be created from the negative link queries.
```

### Public Display Images

| Query id | Table | Filter | Expected rows | Node/edge output |
|---|---|---|---:|---|
| `q_species_public_images` | `species_images` | `species_id=in.(24,67)` | 2 | `PublicImage` context nodes |
| `q_biome_public_images` | `biome_images` | `biome_id=eq.1` | 1 | `PublicImage` context node |

Recommended fields:

```text
species_images:
id,species_id,filename,caption,is_primary,upload_date,uploaded_by

biome_images:
id,biome_id,filename,caption,is_primary,upload_date,uploaded_by
```

Validation:

```text
Public display image rows are not proof that candidate media files were reviewed or linked.
```

### Planner Context

| Query id | Table | Filter | Expected rows | Node/edge output |
|---|---|---|---:|---|
| `q_oli_project_75` | `work_projects` | `id=eq.75` | 1 | `WorkProject` node |
| `q_ih_phase_tasks` | `tasks` | `id=in.(563,564,565,566,567,568,569,570,571)` | 9 | `Task` nodes and phase-state context |

Recommended fields:

```text
work_projects:
id,title,status,domain_id,owner_agent,priority,description,notes,created_at,updated_at,completed_at,archived_at

tasks:
id,task,status,work_status,task_type,work_project_id,parent_task_id,domain_id,domain,priority,due_date,scheduled_date,completed_at,blocked_reason,planner_notes,sort_order,created_at,updated_at
```

Validation:

```text
Task 563 should be done.
Task 564 should be active/open.
Tasks 565-571 should be planned/open.
Planner rows are operator context, not ecological evidence.
```

## Derived Nodes And Edges

These are not direct Supabase rows. The future projection should generate them from rules and clearly mark them as derived.

| Derived item | Inputs | Required properties |
|---|---|---|
| `ReviewGate` | unreviewed species, unreviewed media, open loops, source-packet caveats | `gate_type`, `owner_domain`, `reason`, `source_path_or_row`, `blocks_public_output` |
| `BlockedClaim` | source-packet caveats, Company safety rules, Research review constraints | `claim_text`, `blocked_reason`, `owner_domain`, `review_required`, `source_path_or_row` |
| `ClaimCandidate` | observations, source packet, open loops, media candidates | `claim_text`, `confidence`, `publicness`, `canonical_status`, `source_ids`, `review_status` |
| `GovernanceSource` | Company and Content Markdown docs | `source_path`, `owner_domain`, `source_role`, `canonicality`, `last_reviewed` |

## Minimum Readback Report

A future no-write helper or manual readback should output:

| Section | Required content |
|---|---|
| Source counts | Expected vs actual row counts for every query above. |
| Node counts | Counts by node label. |
| Edge counts | Counts by edge label and canonical/derived flag. |
| Negative link checks | Explicit confirmation of absent observation-source and media-link rows. |
| Review gates | List of every unreviewed/blocked/public-sensitive node or edge. |
| Public blocked claims | Daphnia establishment, Daphnia clearing, Ghost Shrimp recruitment, Mesostoma public-primary use, food-web completion/stability. |
| Sensitive exclusions | Confirm no CRM, Financials, broader telemetry, private contacts, agent logs, or public-output rows. |
| Source freshness | Include `updated_at`, `created_at`, or read timestamp where available. |
| Writeback | Must say `none`. |

## SQL Metadata Still Needed

This query list does not prove:

- foreign keys;
- indexes;
- RLS policies;
- triggers;
- complete column constraints.

Before implementation, resolve SQL metadata through one approved path:

```text
Supabase MCP database tools
Supabase SQL Editor with the existing App SQL packet
psql/direct read-only connection
App-owned read-only SQL bridge
```

## Not Approved

This query list does not approve:

- code implementation;
- App helper creation;
- package installs;
- Supabase writes;
- Planner writes;
- raw SQL execution;
- schema migrations;
- Memgraph setup;
- generated output;
- App runtime changes;
- public Web output;
- media metadata writes;
- scheduled jobs;
- canonical writeback.

