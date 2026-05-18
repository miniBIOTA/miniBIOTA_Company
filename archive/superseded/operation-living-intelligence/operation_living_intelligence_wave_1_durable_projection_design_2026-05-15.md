---
id: operation_living_intelligence_wave_1_durable_projection_design_2026-05-15
title: Operation Living Intelligence Wave 1 Durable Projection Design
domain: company_operations
date: 2026-05-15
status: design_ready_manual_internal_only
tags: [operation-living-intelligence, durable-projection, app, memgraph, supabase, graph-automation]
---
# Operation Living Intelligence Wave 1 Durable Projection Design

## Summary

App now has a durable projection design for Operation Living Intelligence Wave 1:

```text
M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave1-durable-projection-design.md
```

The design converts the successful local graph proof into a controlled manually triggered internal workflow.

It does not approve automation, persistent Memgraph infrastructure, App runtime integration, public output, Supabase writes, Planner writes, schema changes, or canonical writeback.

## Current Proof State

Wave 1 now has:

- bounded Supabase/App source scope;
- generated JSONL graph files;
- generated Cypher import file;
- disposable local Memgraph import/readback proof;
- repeatable no-Docker JSONL readback;
- generated public-reuse sidecar;
- Stage 3 readback at `10 / 10` pass or provisional-pass when the sidecar is present;
- live SQL metadata review confirming target tables, columns, constraints, indexes, RLS state, policies, triggers, selected function metadata, and grants.

## Design Decision

The next safe implementation posture is:

```text
Manual internal run only.
```

Reason:

- It proves repeatable value without creating always-on infrastructure.
- It keeps generated files local and ignored.
- It avoids public/browser access.
- It avoids accidental canonical writes.
- It gives App time to design a narrow protected read path before automation.

## Durable Projection Boundary

The design keeps canonical data in:

- Supabase;
- domain repos;
- Company docs for governance/coordination.

The graph remains:

- derived;
- local by default;
- rebuildable;
- review-gated;
- not canonical;
- not public output.

## Internal Read Path

The design allows only protected internal read paths:

- existing local App helper with protected environment secret;
- future Electron main-process protected read bridge;
- future narrow read-only Postgres role;
- read-only Supabase MCP/database session for inspection.

It rejects:

- renderer/browser public keys for private graph export;
- public Web routes;
- committed credentials;
- unattended service-role automation;
- scheduled sync.

## Required Gates

Every run must validate:

- source scope;
- source counts;
- node uniqueness;
- relationship endpoints;
- canonical writeback equals `none`;
- public output remains unapproved;
- media candidates remain review-gated;
- observations `170-178` do not gain direct canonical source links;
- blocked claims remain present;
- public reuse sidecar remains `review_required`;
- Stage 3 readback remains `10 / 10` when sidecar is present;
- SQL metadata review remains current enough for the scope.

## Stop Conditions

Stop before import, smoke testing, automation, or public use if:

- output leaves App's ignored `out/` tree;
- source counts drift without review;
- SQL metadata changes materially;
- generated files imply public approval;
- any node/edge has canonical writeback other than `none`;
- media review state is treated as proof;
- blocked claims disappear;
- public reuse sidecar is missing or not `review_required`;
- Docker/Memgraph would require persistent service setup;
- credentials would be exposed or committed;
- any step would write Supabase, Planner, Storage, media metadata, Web, Content, or domain Markdown records.

## Company Decision

Company should treat Wave 1 as:

```text
local proof complete
manual internal projection design ready
automation not approved
persistent graph infrastructure not approved
public output not approved
canonical writeback not approved
```

## Recommended Next Step

If continuing implementation, the next safe step is not a scheduler or persistent Memgraph service.

Recommended next step:

```text
Create a single manual orchestration helper or runbook command that executes the existing Wave 1 helper sequence and produces one final operator readback, without adding new database writes or automation.
```

That next step should remain App-owned and local-only.

## Not Approved

This design does not approve:

- Supabase/Planner writes;
- schema changes;
- RLS policy changes;
- grants;
- Storage writes;
- App runtime behavior changes;
- public Web behavior;
- Content copy/captions;
- persistent Memgraph service;
- scheduled sync;
- graph automation;
- canonical writeback;
- paid services;
- public commitments.

## Verification

- Read App Wave 1 tools doc.
- Read App SQL metadata doc.
- Read Company SQL metadata review.
- Read Company OLI projection matrix.
- Added App durable projection design.
- Updated App Wave 1 tools doc.
- No Supabase/Planner write, Storage write, schema change, RLS policy change, grant change, trigger change, App runtime change, Web behavior change, Content copy change, persistent graph runtime, automation, public output, paid service, or canonical writeback occurred.
