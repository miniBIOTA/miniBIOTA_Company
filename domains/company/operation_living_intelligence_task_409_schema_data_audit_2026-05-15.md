---
id: operation_living_intelligence_task_409_schema_data_audit_2026-05-15
title: Operation Living Intelligence Task 409 Schema And Data Audit
domain: company_operations
date: 2026-05-15
status: read_only_rest_openapi_audit_complete_sql_metadata_gap
tags: [operation-living-intelligence, task-409, supabase, schema-audit, graph-seed, living-atlas]
---
# Operation Living Intelligence Task 409 Schema And Data Audit

## Purpose

This is the Company-owned read-only implementation-readiness audit pass for Operation Living Intelligence task `409`.

The audit supports the future **Wave 1: Living Atlas Graph Seed** no-write dry-run proposal by identifying exact source rows, row counts, publicness/privacy boundaries, validation checks, and remaining metadata gaps for the Lake Post-Seal packet.

This document does not approve a graph import, export job, Memgraph install, App runtime change, schema change, Supabase write, Planner write, media metadata write, public website change, model run, cloud upload, paid service, automation job, public claim, launch target, roadmap commitment, or source-of-truth move.

## Method

Checked on 2026-05-15:

| Check | Result |
|---|---|
| Company startup | Completed with `MINIBIOTA_WRITE_MODE = safe-write` |
| Supabase access | Protected REST/OpenAPI reads only |
| OpenAPI inventory | `108` tables/views visible |
| Exact row counts | Completed with `count=exact` on bounded relevant tables |
| Safe row samples | Completed for the Lake Post-Seal seed rows and OLI Planner gates |
| App migration/source review | Completed for relevant media, content-calendar source links, Planner, work-program, and public read-policy migrations |
| MCP SQL metadata access | Not available; `list_mcp_resources` returned no Supabase resources |
| Live FK/index/RLS/trigger proof | Not fully proven from REST/OpenAPI; requires SQL-capable Supabase/App inspection |

The App migration review gives source-level expectations for constraints, indexes, RLS, and triggers, but it is not proof that the live database currently matches those migration files.

## Approved SQL Metadata Inspection Attempt

After user approval on 2026-05-15, Company attempted to resolve the remaining SQL metadata gap with read-only checks only.

Results:

| Check | Result |
|---|---|
| Protected REST/OpenAPI reachability | Successful: OpenAPI returned `110` paths, including `108` table/view paths and one visible RPC |
| Visible RPC paths | `/rpc/save_species_sighting_session` only |
| `information_schema.columns` through PostgREST | Blocked: table not exposed in PostgREST schema cache |
| `pg_indexes` through PostgREST | Blocked: table/view not exposed in PostgREST schema cache |
| `pg_policies` through PostgREST | Blocked: table/view not exposed in PostgREST schema cache |
| `pg_tables` through PostgREST | Blocked: table/view not exposed in PostgREST schema cache |
| Active-session MCP resources | None returned |
| Active-session MCP resource templates | None returned |
| Configured hosted Supabase MCP endpoint reachability | Direct unauthenticated HTTP reached Cloudflare `403` / Error `1010`; not usable as a SQL metadata path from this shell |

Conclusion:

- Approval is no longer the blocker for task `409`'s SQL metadata proof.
- The blocker is access: this active session does not have a SQL-capable Supabase path available.
- Resolving the gap requires a working Supabase MCP session with database tools, an App-owned read-only SQL helper/bridge, or a read-only Postgres connection path that can query catalog metadata.
- Josue subsequently approved using the REST/OpenAPI plus App migration-source audit as sufficient for a design-only App proposal. This does not approve implementation, export/import, graph build, or writes.

## Exact Relevant Row Counts

| Table / view | Exact count |
|---|---:|
| `content_pipeline` | 342 |
| `chronicles` | 357 |
| `chronicle_subject_links` | 662 |
| `species` | 172 |
| `observations` | 251 |
| `observation_loop_links` | 88 |
| `observation_thread_links` | 181 |
| `open_loops` | 16 |
| `story_threads` | 30 |
| `media_assets` | 9816 |
| `media_chronicles` | 0 |
| `media_biomes` | 2 |
| `media_species` | 3 |
| `species_images` | 36 |
| `biome_images` | 6 |
| `work_projects` | 84 |
| `tasks` | 542 |

## Seed Source Rows

### Published Source Identity

| Record | Key fields |
|---|---|
| `content_pipeline.id = 338` | `title = My Lake Went Completely Opaque. So I Removed the Fish.`; `status = published`; `published_date = 2026-04-17`; `published_url = https://youtu.be/lgmPWX9e-A0`; `biome_id = 1`; `chronicle_entry_id = 30`; `transcript = null`; `updated_at = 2026-05-12T15:57:42.643246+00:00` |
| `chronicles.id = 30` | `title = Fish removal reopens the lake food web`; `event_date = 2026-04-17`; `source_pipeline_id = 338`; `biome_id = 1`; `scope_type = biome`; `media_type = youtube_horizontal`; `youtube_url = https://youtu.be/lgmPWX9e-A0` |

### Chronicle Subject Links

`chronicle_subject_links` currently has eight rows for `chronicle_id = 30`:

| Link id | Subject | Relationship | Public display | Sort |
|---:|---|---|---|---:|
| 17 | `biome 1` | `primary` | true | 0 |
| 22 | `species 24` | `major_impact` | true | 10 |
| 23 | `species 164` | `major_impact` | true | 20 |
| 24 | `species 67` | `major_impact` | true | 30 |
| 25 | `species 66` | `context` | true | 40 |
| 26 | `species 65` | `context` | true | 50 |
| 27 | `species 169` | `context` | true | 60 |
| 28 | `species 25` | `context` | true | 70 |

Wave 1's bounded species set is narrower than the live chronicle subject-link set. Species `65`, `169`, and `25` are live public chronicle context but outside the first seed unless explicitly expanded. Species `167` and `180` are in the first-seed candidate set but are not linked to chronicle `30`.

### Candidate Species Rows

| Species id | Common name | Scientific name | Review/status notes from live row |
|---:|---|---|---|
| 24 | Flagfish | `Jordanella floridae` | `status = active`; public/evidence state includes removed; `last_seen = 2026-04-05`; `date_last_observed = 2026-04-05`; breeding status `No Signs of Breeding` |
| 66 | Freshwater amphipod | `Order - Amphipoda` | `review_status = unreviewed`; status fields mostly unset |
| 67 | Ghost Shrimp | `Palaemon paludosus` | `status = active`; public/evidence state includes vulnerable; breeding status `Confirmed Breeding`; `last_seen = 2026-05-01`; `date_last_observed = 2026-05-15` |
| 164 | Daphnia | `Daphnia sp.` | `review_status = unreviewed`; public/evidence state includes uncertain; `last_seen = 2026-04-13` |
| 167 | Mesostoma Flatworm | `Mesostoma ehrenbergii` | `review_status = unreviewed` |
| 180 | Moina | `Genus - Moina` | `review_status = unreviewed`; public/evidence state includes uncertain; breeding status suspected; very small individuals observed 2026-05-01 |

The Ghost Shrimp live `date_last_observed` had advanced to 2026-05-15 at read time. Use live Supabase readback for any future export manifest rather than older packet assumptions.

### Candidate Observation Rows

Observation rows `170-178` are the bounded observation seed. All nine rows are `biome_id = 1`, `chronicle_id = null`, `pipeline_id = null`, and `promoted_to_chronicle = false`.

Species-linked rows in this set:

| Observation id | Species id |
|---:|---:|
| 172 | 156 |
| 174 | 59 |
| 176 | 164 |
| 177 | 164 |
| 178 | 167 |

Because observations `170-178` do not directly point to `content_pipeline.id = 338` or `chronicles.id = 30`, a graph dry run must treat their relationship to the packet as source-packet/research-context association unless another canonical link is explicitly approved.

### Observation Loop Links

| Observation id | Open loop ids |
|---:|---|
| 170 | `1`, `4` |
| 171 | `4` |
| 172 | `1` |
| 173 | `1` |
| 175 | `1`, `4` |
| 176 | `1`, `2` |
| 177 | `1`, `4` |
| 178 | `2`, `7` |

### Observation Thread Links

| Observation id | Story thread ids |
|---:|---|
| 170 | `5` |
| 171 | `5` |
| 172 | `1` |
| 173 | `1` |
| 174 | `5` |
| 175 | `1` |
| 176 | `1`, `3` |
| 177 | `1`, `3`, `5` |
| 178 | `5` |

### Open Loops Associated With Pipeline 338

| Loop id | Summary | Status |
|---:|---|---|
| 1 | Daphnia sp. establish/clear water | open |
| 2 | Mesostoma eat through Daphnia/ostracods | open |
| 3 | Ghost shrimp survive/establish long-term | advanced |
| 4 | lake food web complete algae -> microcrustacean -> crayfish/shrimp and clear water | advanced |
| 7 | crayfish check Mesostoma and allow microcrustacean layer | open |

Open loops and story threads remain context/review material for Wave 1, not first-class graph truth, unless App/Research/Content approve that modeling choice.

## Media Audit

The source packet names fifteen candidate media files. Thirteen were found in `media_assets`, all with `reviewed = false`:

| File | `media_assets.id` |
|---|---:|
| `20260405_114948.mp4` | 9497 |
| `20260405_121055.mp4` | 9499 |
| `20260408_112539.mp4` | 9537 |
| `20260408_112606.mp4` | 9538 |
| `20260408_112739.mp4` | 9540 |
| `20260408_114418.mp4` | 9548 |
| `20260408_121519.mp4` | 9554 |
| `20260408_135213.mp4` | 9557 |
| `20260408_140153.mp4` | 9561 |
| `20260408_141102.mp4` | 9562 |
| `20260408_161920.mp4` | 9563 |
| `20260419_212350.mp4` | 19311 |
| `20260501_071248.mp4` | 35558 |

Two packet stills were not found in `media_assets` by filename:

- `20260408_082108.jpg`
- `20260503_101720.jpg`

No direct media relationship rows were found for the bounded seed:

| Link check | Count |
|---|---:|
| `media_chronicles` for chronicle `30` | 0 |
| `media_biomes` for biome `1` | 0 |
| `media_species` for species `24`, `66`, `67`, `164`, `167`, `180` | 0 |

Existing public image rows related to the seed:

| Table | Rows |
|---|---|
| `species_images` | species `24` image `flagfish-1.webp`; species `67` image `ghost-shrimp-1777648440986.webp` |
| `biome_images` | biome `1` old primary image `biomes/Lake Biome 9 Jun 2025.jpg` |

These image rows are existing public display assets, not proof that the Wave 1 candidate media has been reviewed or linked.

## Source Packet And Research Validation Readback

The Lake Post-Seal source packet remains a decision aid, not an approval bundle for writes or public claims:

`M:\miniBIOTA\miniBIOTA_Content\audits\living_atlas\source_packets\pipeline_338_chronicle_30_lake_post_seal_2026-05-12.md`

Relevant packet/research constraints checked:

- Proposed writes, media links, and caption-safe wording remain decision aids only.
- The `20260408_114418.mp4` candidate timestamp was corrected to `00:00-00:15`.
- The two stills are source-packet evidence but are not indexed in `media_assets`.
- Daphnia should remain public-labeled as `Daphnia sp.`; establishment is unresolved.
- Ghost Shrimp breeding is confirmed, but juvenile recruitment remains unconfirmed.
- Mesostoma should remain internal/open-loop by default.
- Chronicle date `2026-04-17` is publish date. The event window is likely 2026-03-12 through 2026-04-08, but no chronology edit is approved.
- No media records, captions, direct canonical observation links, or public wording changes were approved by the source packet or validation notes.

## Source-Level Schema And Policy Findings

App migration files reviewed as source-level evidence:

| Migration | Relevant finding |
|---|---|
| `001_media_schema.sql` | `media_assets.id` primary key; `local_path text NOT NULL UNIQUE`; `file_type` check for photo/video; media join tables use composite primary keys and foreign keys with `ON DELETE CASCADE`; indexes exist for media date/type and join lookup columns; RLS is enabled on media tables with no policies in the migration, relying on service-role access for internal tooling |
| `004_content_calendar_story_links.sql` | Adds content-calendar source-map join precedent, indexes, and trigger `trg_calendar_thread_in_production`; RLS enabled with no policies in the migration |
| `007_project_management_schema.sql` | Adds `work_domains`, `work_projects`, Planner task fields, task parent/project/domain links, status/type checks, and Planner indexes; RLS enabled on work tables with internal protected bridge assumptions |
| `009_field_observer_read_policies.sql` | Adds authenticated SELECT policies for `biomes`, `species`, and `species_images` |
| `010_work_programs_schema.sql` | Adds `work_programs`, `work_program_projects`, indexes, and RLS enabled with no policies in the migration |

Live REST/OpenAPI did not expose enough SQL metadata to prove all live constraints, indexes, RLS policies, or triggers. A SQL-capable App/Supabase inspection remains required before this can be treated as a complete implementation-grade database metadata audit.

## Privacy And Publicness Tiers

| Tier | Included examples | Handling |
|---|---|---|
| Public source identity | `content_pipeline.id = 338`, `chronicles.id = 30`, existing public chronicle subject links | Can identify the published source, but cannot infer stronger ecological claims |
| Public display context with caution | Existing species/biome records and existing public image rows | Must preserve Research caveats and publicness/confidence floors |
| Internal/review seed context | Observations `170-178`, open loops `1`, `2`, `3`, `4`, `7`, source packet notes, Research validation notes, media candidates | Suitable for no-write dry-run design only; public output blocked until reviewed |
| Excluded/sensitive | CRM rows, Financials row-level data, private contacts, raw private media beyond approved packet references, broader telemetry, agent logs | Not included in Wave 1 |
| Blocked public claims | Daphnia species-level ID/establishment/clearing causation, Ghost Shrimp recruitment, Mesostoma public-primary use, Moina establishment, food-web completion/stability, unreviewed captions, chronology edits | Must remain blocked or review-required in graph readback |

## Candidate Export Manifest For A Future Proposal

Candidate rows for a future App-scoped no-write proposal:

- `content_pipeline`: `338`
- `chronicles`: `30`
- `chronicle_subject_links`: `17`, `22`, `23`, `24`, `25` as in-seed context; `26`, `27`, `28` as live public context but out-of-seed unless expanded
- `species`: `24`, `66`, `67`, `164`, `167`, `180`
- `observations`: `170-178`
- `observation_loop_links`: the 13 links listed in this audit
- `observation_thread_links`: the 12 links listed in this audit
- `open_loops`: `1`, `2`, `3`, `4`, `7` as context/review material only
- `media_assets`: ids `9497`, `9499`, `9537`, `9538`, `9540`, `9548`, `9554`, `9557`, `9561`, `9562`, `9563`, `19311`, `35558` as candidate references only
- Source packet and Research validation notes as Markdown sources

Candidate exclusions:

- No CRM, Financials row-level data, private contact data, broader telemetry, raw private media sweep, model output, public-site rows, Planner writes, media metadata writes, or source-of-truth moves.
- No direct canonical observation-to-pipeline/chronicle link should be created or implied from this audit.
- No missing stills should be treated as indexed media until App/media-library review confirms their storage and record status.

## Validation Queries For A Future Dry Run

A future no-write graph readback should prove at minimum:

| Check | Expected result |
|---|---|
| Pipeline source count | 1 row: `content_pipeline.id = 338` |
| Chronicle source count | 1 row: `chronicles.id = 30` |
| Chronicle subject links | 8 live rows; seed manifest must explain whether links `26-28` are excluded |
| Candidate species count | 6 rows: `24`, `66`, `67`, `164`, `167`, `180` |
| Candidate observations | 9 rows: `170-178` |
| Observation loop links | 13 rows |
| Observation thread links | 12 rows |
| Open-loop context | 5 rows: `1`, `2`, `3`, `4`, `7` |
| Observation direct source links | `pipeline_id = null` and `chronicle_id = null` for observations `170-178` |
| Media asset references | 13 found, all `reviewed = false` |
| Missing stills | 2 not found in `media_assets` by filename |
| Direct media links | 0 `media_chronicles`, 0 `media_biomes` for biome `1`, 0 `media_species` for seed species |
| Publicness/confidence fields | Present on every claim-like node or relationship in the derived graph |
| Blocked-edge visibility | Blockers returned explicitly instead of silently omitted |
| Sensitive-field exclusion | No CRM, Financials, private-contact, broader telemetry, raw-private-media, or agent-log fields |
| Canonical writeback | Always `none` unless separately approved |
| Rebuild/delete path | Export/import files can be deleted and regenerated from source rows |

## OLI Planner Gate Readback

Open/planned gates at read time:

| Project / task | State |
|---|---|
| Company task `409` | open/planned implementation audit gate |
| App task `412` | open/planned visual media boundary gate |
| Web tasks `400-402` | open/planned public surface mapping |
| Growth/Sales tasks `403-405` | open/planned analytics source/question/stack work |

This audit did not change Planner status.

## Task 409 Result

The read-only REST/OpenAPI and source-migration audit completed the accessible parts of task `409`:

- Exact relevant table counts.
- Exact bounded source rows and IDs.
- Safe samples for the Wave 1 seed.
- Media asset/link state.
- Publicness/privacy exclusions.
- Candidate export manifest.
- Validation-query requirements.
- App migration source-level schema expectations.

Remaining gap:

- Live constraints, indexes, RLS policies, and triggers were not fully proven because SQL-capable Supabase metadata access was unavailable in this session, even after user approval for read-only SQL inspection.

Operational interpretation:

- The audit is strong enough to support a docs-only or App-scoped **proposal** for a no-write dry-run.
- It is not strong enough to begin an export/import job, graph build, App implementation, automation, or canonical write.
- Josue accepted this REST/OpenAPI plus migration-source audit as sufficient for the next limited design step on 2026-05-15.
- Live SQL metadata proof remains unresolved for implementation, but it no longer blocks a design-only App proposal.
- The next implementation-grade metadata action remains: restart/enable the Supabase MCP database tools or provide an App-owned read-only SQL metadata path before any export/import, graph build, App implementation, automation, or canonical write.
- App now has a prepared read-only SQL metadata packet for that future action:
  `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-sql-metadata-check.md`
  and
  `M:\miniBIOTA\miniBIOTA_App\tools\inspect-oli-wave1-sql-metadata.sql`.
  The packet contains catalog `SELECT` queries only and is not a live check
  until run through Supabase SQL Editor, Supabase MCP database tools, `psql`,
  or another approved SQL-capable read-only path.

## Verification

- Company startup completed on 2026-05-15.
- Protected Supabase REST/OpenAPI reads were used for counts and safe row samples.
- User approved read-only SQL metadata inspection on 2026-05-15.
- User approved proceeding to a design-only App proposal with the narrower audit on 2026-05-15.
- PostgREST catalog probes for `information_schema.columns`, `pg_indexes`, `pg_policies`, and `pg_tables` were blocked because those surfaces are not exposed through the REST schema cache.
- Active-session MCP resource and template listings returned no Supabase SQL metadata tools.
- Relevant App migration files were reviewed as source-level schema/policy evidence.
- MCP SQL metadata resources were not available.
- No Supabase/Planner writes were performed.
- No App runtime, schema, public site, graph database, export/import job, media metadata, model run, cloud upload, paid tool, automation, or source-of-truth record changed.
