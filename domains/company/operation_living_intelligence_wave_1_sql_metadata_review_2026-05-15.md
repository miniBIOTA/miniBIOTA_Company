---
id: operation_living_intelligence_wave_1_sql_metadata_review_2026-05-15
title: Operation Living Intelligence Wave 1 SQL Metadata Review
domain: company_operations
date: 2026-05-15
status: reviewed_durable_automation_still_gated
tags: [operation-living-intelligence, sql-metadata, supabase, app, graph-automation, safety-review]
---
# Operation Living Intelligence Wave 1 SQL Metadata Review

## Summary

Josue ran the Supabase SQL Editor friendly JSON metadata packet:

```text
M:\miniBIOTA\miniBIOTA_App\tools\inspect-oli-wave1-sql-metadata-json.sql
```

The readback confirms the live metadata needed to judge the next Operation Living Intelligence gate:

- target table existence;
- columns;
- constraints;
- indexes;
- RLS state;
- policies;
- triggers;
- selected function metadata;
- selected grants.

This resolves the earlier "no SQL-capable path" gap for review purposes, but it does **not** approve durable graph automation, persistent Memgraph infrastructure, public graph output, or canonical writeback.

## High-Level Result

The live schema supports the current Wave 1 local graph proof shape.

Durable automation is still gated because:

- graph exports must use an internal protected read path, not public/client-side access;
- broad table grants exist and need to be interpreted together with RLS before expanding any automated path;
- generated graph sync needs explicit credential handling, output retention, rebuild cadence, drift checks, and no-write guarantees;
- public reuse remains `review_required`, not approved Web/Content output.

## Confirmed Passes

### Target Tables Exist

All `17` target tables exist:

- `biome_images`
- `chronicle_subject_links`
- `chronicles`
- `content_pipeline`
- `media_assets`
- `media_biomes`
- `media_chronicles`
- `media_species`
- `observation_loop_links`
- `observation_thread_links`
- `observations`
- `open_loops`
- `species`
- `species_images`
- `story_threads`
- `tasks`
- `work_projects`

### Columns Match Wave 1 Assumptions

The readback confirms the fields used by the Wave 1 helper are live, including:

- `content_pipeline.id`, `title`, `status`, `chronicle_scope`, `published_url`, `chronicle_entry_id`, `published_date`, `parent_pipeline_id`, `transcript`, `source_observation_id`, and `notes`;
- `chronicles.id`, `title`, `content`, `event_date`, `media_type`, `youtube_url`, `biome_id`, `source_pipeline_id`, `primary_chronicle_id`, and `chronicle_role`;
- `chronicle_subject_links.chronicle_id`, `subject_type`, `species_id`, `biome_id`, `relationship`, `show_on_page`, and `sort_order`;
- `observations.id`, `observed_at`, `note`, `species_id`, `biome_id`, `pipeline_id`, `promoted_to_chronicle`, and `chronicle_id`;
- `media_assets.id`, `filename`, `local_path`, `file_type`, `captured_date`, and `reviewed`;
- Planner fields on `work_projects` and `tasks` needed for later dependency graph projection.

### Constraints Support Source Relationships

Important live constraints are present:

- `chronicles.source_pipeline_id` references `content_pipeline(id)`;
- `content_pipeline.chronicle_entry_id` references `chronicles(id)`;
- `content_pipeline.source_observation_id` references `observations(id)`;
- `observations.pipeline_id` references `content_pipeline(id)`;
- `observations.chronicle_id` references `chronicles(id)`;
- `chronicle_subject_links` has subject-presence/type/relationship checks and foreign keys to chronicles, species, biomes, and systems;
- media join tables have composite primary keys and foreign keys back to `media_assets` plus their target entity;
- Planner `tasks` and `work_projects` have status/type/date constraints and foreign keys for domain/project/parent relationships.

This supports using the graph as a derived relationship layer over canonical source IDs.

### Indexes Cover Key Wave 1 Lookup Surfaces

Useful indexes exist for:

- `content_pipeline` by status, species, biome, system, scope, lane, and parent pipeline;
- `chronicles` by event date, scope, species, biome, and system;
- `chronicle_subject_links` by chronicle, species, biome, and system;
- `observations` by observed date, species, biome, pipeline, and promoted state;
- `media_assets` by captured date, file type, reviewed state, local path, and id;
- media join tables by target entity;
- Planner tasks/projects by domain, status, schedule, recurrence, parent, and project.

No obvious Wave 1 index blocker appears for the bounded local exporter.

### Triggers Are Known

The only relevant non-internal triggers returned were:

- `content_pipeline_updated_at`;
- `story_threads_updated_at`;
- `tasks_updated_at`.

These are update-time metadata triggers. They do not create a read-side blocker for no-write graph projection, but any future writeback or sync that updates these tables must account for them.

## RLS And Access Findings

RLS is enabled on every target table and not forced.

Returned policies are sparse:

- `chronicles`: public `SELECT` policy;
- `species`: authenticated `SELECT` policy for Field Observer;
- `species_images`: authenticated `SELECT` policy for Field Observer.

Most target tables returned no explicit public/authenticated policies, including:

- `content_pipeline`;
- `chronicle_subject_links`;
- `observations`;
- `observation_loop_links`;
- `observation_thread_links`;
- `open_loops`;
- `story_threads`;
- `media_assets`;
- `media_biomes`;
- `media_chronicles`;
- `media_species`;
- `biome_images`;
- `tasks`;
- `work_projects`.

Implication:

```text
Durable graph projection cannot assume browser/public/authenticated-client access.
It must use an internal protected App-owned read path or a narrowly scoped database role.
```

## Grants Finding

The readback shows broad table grants for `anon`, `authenticated`, and `service_role` on many target tables, including write privileges at the grant level.

Because RLS is enabled, grants alone do not mean public/client users can write; policies still gate effective access for ordinary roles. However, broad grants are a security-review signal.

Before any durable automated projection or broader read bridge is created, App should explicitly confirm:

- which role the exporter uses;
- whether it bypasses RLS;
- whether it can be constrained to read-only;
- whether any broad anon/authenticated grants should be tightened later;
- whether export logs or generated files could expose rows beyond intended scope.

This is not a blocker for the existing local disposable proof. It is a blocker for casual automation.

## Function Finding

`save_species_sighting_session(...)` exists as:

```text
language: plpgsql
security_definer: true
volatility: volatile
result_type: bigint
```

This does not affect the current Lake Post-Seal Wave 1 graph seed directly.

It does mean future Field Observer/sighting-derived graph projections require a separate App/Research safety review before using sighting sessions as graph inputs.

## Decision

The SQL metadata gap is resolved enough to say:

```text
Wave 1 local graph proof remains valid.
Wave 1 source IDs and relationship assumptions are supported by live metadata.
No durable automation should run yet.
```

The next implementation step should be a **durable internal projection design**, not an automated job yet.

That design should specify:

- internal credential path;
- read-only scope;
- exact output files;
- rebuild/delete cadence;
- validation/readback gates;
- drift checks;
- generated-file retention;
- no public output;
- no canonical writeback;
- operator runbook;
- stop conditions.

## Not Approved

This review does not approve:

- Supabase/Planner writes;
- schema changes;
- RLS policy changes;
- grants;
- trigger changes;
- Storage writes;
- App runtime behavior changes;
- public Web behavior;
- Content copy or captions;
- persistent Memgraph service;
- scheduled sync;
- graph automation;
- canonical writeback.

## Recommended Next Step

Prepare an App-owned **Wave 1 durable projection design** for a manually triggered internal graph export/import workflow.

The design should keep the current posture:

```text
canonical data stays in Supabase/domain repos
graph output is derived and rebuildable
exports are local/ignored by default
public reuse is review_required
writeback is none
automation is not enabled until explicitly approved
```

## Verification

- Reviewed the SQL metadata JSON result supplied by Josue.
- Confirmed all target tables exist.
- Confirmed key columns, constraints, indexes, RLS state, policies, triggers, function metadata, and grants.
- No SQL was run by Codex.
- No Supabase/Planner write, Storage write, schema change, RLS policy change, grant change, trigger change, App runtime change, Web behavior change, Content copy change, persistent graph runtime, automation, public output, or canonical writeback occurred.
