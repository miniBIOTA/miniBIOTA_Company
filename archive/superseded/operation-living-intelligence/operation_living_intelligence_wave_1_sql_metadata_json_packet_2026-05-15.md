---
id: operation_living_intelligence_wave_1_sql_metadata_json_packet_2026-05-15
title: Operation Living Intelligence Wave 1 SQL Metadata JSON Packet
domain: company_operations
date: 2026-05-15
status: prepared_user_run_required
tags: [operation-living-intelligence, sql-metadata, supabase, app, graph-automation]
---
# Operation Living Intelligence Wave 1 SQL Metadata JSON Packet

## Summary

App already had a read-only SQL metadata inspection packet:

```text
M:\miniBIOTA\miniBIOTA_App\tools\inspect-oli-wave1-sql-metadata.sql
```

Company/App added a Supabase SQL Editor friendly JSON packet:

```text
M:\miniBIOTA\miniBIOTA_App\tools\inspect-oli-wave1-sql-metadata-json.sql
```

The JSON packet returns one result column:

```text
oli_wave1_sql_metadata_readback
```

This makes the manual Supabase SQL Editor path easier because the user can run one read-only query and provide one JSON result for review.

## Why This Is Needed

The local Operation Living Intelligence Wave 1 graph proof now has:

- generated JSONL graph files;
- generated Cypher import file;
- disposable local Memgraph import/readback proof;
- repeatable no-Docker JSONL readback;
- generated public-reuse sidecar;
- Stage 3 readback at `10 / 10` pass or provisional-pass with public reuse held at `review_required`.

The remaining durable-implementation blocker is live database metadata proof:

- columns;
- constraints;
- indexes;
- RLS state;
- policies;
- triggers;
- selected function metadata;
- selected grants.

REST/OpenAPI and migration-source review are enough for the bounded disposable local pilot. They are not enough for scheduled graph sync, persistent Memgraph service, App runtime integration, or canonical writeback policy.

## Safety

The JSON packet contains catalog reads only. Static keyword scan of non-comment SQL found no:

```text
insert
update
delete
merge
create
alter
drop
truncate
grant
revoke
call
do
copy
```

The packet does not approve:

- schema changes;
- migrations;
- data writes;
- RLS policy changes;
- grants;
- trigger changes;
- Supabase/Planner records;
- Storage writes;
- persistent Memgraph service;
- scheduled sync;
- canonical writeback;
- App runtime behavior changes.

## User Action Required

Because the active machine/session still has no `psql`, Postgres connection string, or Supabase MCP SQL database tool, this gate now requires the user to run the JSON SQL packet manually in Supabase SQL Editor or provide a SQL-capable read-only connection path.

Recommended manual path:

1. Open Supabase SQL Editor for the miniBIOTA project.
2. Open/copy:

```text
M:\miniBIOTA\miniBIOTA_App\tools\inspect-oli-wave1-sql-metadata-json.sql
```

3. Run it.
4. Copy or export the single `oli_wave1_sql_metadata_readback` JSON result.
5. Provide that result back to Codex for review.

Do not run migrations, edits, grants, RLS changes, or data writes as part of this step.

## Review Target

Once the JSON result is available, Company/App should review:

- whether every target table exists;
- whether columns match the Wave 1 helper assumptions;
- which constraints and indexes protect the source/link surfaces;
- whether RLS and policies match expected public/internal access boundaries;
- whether triggers could mutate records that a graph sync might read;
- whether public/authenticated/service-role grants expose unexpected surfaces;
- whether `save_species_sighting_session(...)` metadata changes the Field Observer or future graph-projection boundary.

## Verification

- Read the existing App SQL metadata packet.
- Read the App SQL metadata documentation.
- Added the JSON single-result SQL packet.
- Updated App SQL metadata documentation.
- Ran static non-comment SQL keyword scan for write/DDL/security/RPC keywords.
- No SQL was run.
- No Supabase/Planner write, schema change, RLS policy change, grant change, trigger change, Storage write, App runtime change, Web behavior change, Content copy change, persistent graph runtime, automation, or canonical writeback occurred.
