---
id: operation_living_intelligence_ih_phase_1_app_no_write_jsonl_readback_helper_proposal_2026-05-17
title: Operation Living Intelligence Intelligent Harness Phase 1 App No-Write JSONL Readback Helper Proposal
domain: company_operations
last_updated: 2026-05-17
tags: [operation-living-intelligence, intelligent-harness, phase-1, app-proposal, jsonl, readback, no-write]
status: proposal_ready_for_app_implementation_review
---
# Operation Living Intelligence Intelligent Harness Phase 1 App No-Write JSONL Readback Helper Proposal

## Purpose

This proposal prepares the next implementation step after Phase 1 source-map approval:

```text
App-owned no-write JSONL/readback helper for the Lake Post-Seal Core Seed
```

It comes before any Memgraph import.

The goal is to prove the first Intelligent Harness source projection shape with local ignored output and readback reports before graph infrastructure is involved.

## Approved Planning Decisions

Approved by Josue on 2026-05-17:

- Use the narrow Lake Post-Seal Core Seed first.
- Keep context and expansion rows out of the required first import/readback.
- Use the current retrieval baseline first, not pgvector.
- Use Supabase SQL Editor as the first SQL metadata path.
- Prepare the next implementation proposal for an App-owned no-write JSONL/readback helper before any Memgraph import.

## Implementation Status

Status:

```text
proposal_ready_for_app_implementation_review
```

This proposal is ready for App implementation review after the Phase 1 SQL metadata gate was satisfied.

This proposal does not approve implementation by itself.

## Required Precondition

Before App implements the helper, App review should confirm the Supabase SQL Editor metadata readback and addendum results already provided by Josue.

Preferred SQL Editor packet:

```text
M:\miniBIOTA\miniBIOTA_App\tools\inspect-oli-wave1-sql-metadata.sql
```

App note:

```text
M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-sql-metadata-check.md
```

If the JSON-output companion packet is available in App, use that for easier paste/save review.

Required readback sections:

- `00_target_tables`
- `01_columns`
- `02_constraints`
- `03_indexes`
- `04_rls_state`
- `05_policies`
- `06_triggers`
- `07_relevant_functions`
- `08_table_grants`

The SQL packet must remain read-only. No DDL, DML, RPC calls, security changes, grants, trigger changes, policy changes, migrations, data backfills, or canonical writes are approved.

Metadata gate state:

```text
satisfied_for_no_write_jsonl_readback_helper_proposal
```

The Phase 1 SQL metadata gate is satisfied after:

- the existing App JSON SQL metadata packet confirmed the first inspected target tables;
- the addendum confirmed metadata coverage for `public.biomes`;
- the addendum confirmed metadata coverage for `public.species_to_biomes`;
- `public.species_to_biomes` confirmed `species_id`, `biome_id`, foreign keys to `species(id)` and `biomes(id)`, and supporting indexes.

Known Phase 1 field correction:

```text
observations.system_id is unavailable and must not be required by the helper.
```

## Proposed App Ownership

App owns the helper implementation because App owns:

- Planner runtime/schema-backed workflow implementation;
- Supabase protected runtime/bridge patterns;
- local ignored output conventions;
- future operator/dashboard surfaces;
- eventual graph/retrieval helper execution if approved.

Company owns:

- source-map scope;
- Programs/Operations governance;
- approval gates;
- cross-domain source ownership;
- publicness/review/writeback boundaries;
- closeout/readback review.

Domain owners retain meaning review:

- Research: species IDs, ecological interpretation, claim safety.
- Content: story/source packet, public content context, caption posture.
- Raw Footage/App: media metadata and media-library boundaries.

## Proposed App Files

Recommended App implementation files, if later approved:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-ih-phase1-core-seed-jsonl.js
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-ih-phase1-core-seed-readback.js
```

Recommended ignored output path:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_1_core_seed\lake_post_seal\
```

Required generated files:

```text
source_manifest.json
nodes.jsonl
edges.jsonl
review_gates.jsonl
blocked_claims.jsonl
retrieval_sources.jsonl
validation_report.json
readback_report.md
```

Optional generated files:

```text
negative_link_checks.json
source_freshness.json
query_inputs_snapshot.json
```

No generated output should be tracked unless a later review explicitly says to preserve a readback artifact in Company Markdown.

## Source Query Contract

Use:

```text
archive/superseded/operation-living-intelligence/operation_living_intelligence_ih_phase_1_core_seed_source_query_list_2026-05-17.md
```

Required source query groups:

- source identity;
- chronicle subjects;
- core species;
- core observations;
- open loops;
- story threads;
- media candidates;
- public display images;
- Planner context.

Phase 1 field correction:

- `observations.system_id` is unavailable in the SQL metadata readback and must not be required, synthesized, or treated as a missing-row error by the helper.

Required negative checks:

- no direct observation-to-content link;
- no direct observation-to-chronicle link;
- no direct chronicle-to-media link;
- no direct seed species-to-media link;
- no direct biome-to-media link;
- missing still-image candidates are not indexed in `media_assets`.

## Output Shape

### `source_manifest.json`

Must include:

- run timestamp;
- helper version;
- source query list reference path;
- SQL metadata readback reference path or note;
- source tables;
- filters;
- expected counts;
- actual counts;
- exclusions;
- writeback status `none`.

### `nodes.jsonl`

Allowed node labels:

- `Biome`
- `ContentItem`
- `Chronicle`
- `Species`
- `Observation`
- `OpenLoop`
- `StoryThread`
- `MediaAssetCandidate`
- `PublicImage`
- `WorkProject`
- `Task`
- `GovernanceSource`
- `ReviewGate`
- `BlockedClaim`
- `ClaimCandidate`

Every node must include:

- `id`;
- `label`;
- `source_table` or `source_path`;
- `source_id` when applicable;
- `canonicality`;
- `owner_domain`;
- `publicness`;
- `review_status`;
- `claim_status`;
- `source_updated_at` or read timestamp when available.

### `edges.jsonl`

Allowed edge labels:

- `SOURCE_CONTENT_FOR`
- `OBSERVED_IN`
- `MENTIONS`
- `SUPPORTS`
- `PART_OF_STORY`
- `SOURCE_LOOP_FOR`
- `PART_OF_BIOME`
- `NEEDS_REVIEW`
- `BLOCKED_FOR_PUBLIC`

Every edge must include:

- `id`;
- `label`;
- `from`;
- `to`;
- `canonicality`;
- `source_table` or `source_path`;
- `source_id` when applicable;
- `derived_rule` when derived;
- `review_status`;
- `publicness`;
- `claim_status`.

### `review_gates.jsonl`

Must include gates for:

- unreviewed seed species;
- unreviewed media candidates;
- Daphnia ID/establishment uncertainty;
- Ghost Shrimp recruitment uncertainty;
- Mesostoma publicness;
- Moina/other expansion rows held out of core readback;
- food-web completion/stability claims;
- chronicle event-date semantics;
- media caption/public-use gates.

### `blocked_claims.jsonl`

Must include:

- Daphnia established;
- Daphnia cleared the lake;
- Daphnia identified beyond `Daphnia sp.`;
- Ghost Shrimp juvenile recruitment confirmed;
- Mesostoma is approved as a public primary subject;
- Moina established;
- lake food web completed;
- lake is stable or self-sustaining;
- candidate media is public proof without review.

### `retrieval_sources.jsonl`

Use the current retrieval baseline, not pgvector.

Must include source references for:

- `content_pipeline.id = 338`;
- `chronicles.id = 30`;
- observations `170-178`;
- open loops `1`, `2`, `3`, `4`, `7`;
- story threads `1`, `3`, `5`;
- core species rows;
- `biomes.id = 1`;
- Content source packet;
- Company source-map docs;
- Wave 5 retrieval synthesis.

Every retrieval source must carry:

- source path or table/id;
- owner domain;
- source role;
- canonicality;
- publicness;
- review status;
- claim status;
- caveats.

## Readback Requirements

`readback_report.md` must answer:

1. What supports the Lake Post-Seal story?
2. Which observations connect to Daphnia, Mesostoma, Ghost Shrimp, and the Freshwater Lake?
3. Which open loops are open, advanced, or review-required?
4. Which media candidates exist, and which are blocked for public use?
5. Which claims are blocked for public output?
6. Which relationships are canonical Supabase links?
7. Which relationships are derived source-packet context?
8. What would need review before a public claim or canonical writeback?

`validation_report.json` must prove:

- expected source counts match actual counts or list mismatches;
- node counts by label;
- edge counts by label;
- canonical vs derived edge counts;
- negative link checks are explicit;
- sensitive exclusions are present;
- writeback is `none`;
- pgvector is not used;
- Memgraph is not used;
- no App runtime integration occurred.

## Pass Criteria

The helper/readback can pass only if:

- all required source queries run as read-only;
- all expected rows are present or mismatches are reported clearly;
- context/expansion rows are not required for first import/readback;
- unreviewed species and media remain review-gated;
- blocked claims are present and visible;
- absent canonical links are reported as absences;
- no canonical links are invented;
- no public claim is promoted;
- no Supabase, Planner, Storage, App runtime, Web, media metadata, or graph database write occurs;
- generated output stays under ignored App `out/`;
- readback names the SQL metadata readback used or says implementation is blocked until it is provided.
- `observations.system_id` is not required for the Phase 1 observation projection.

## Stop Conditions

Stop implementation or mark the run blocked if:

- SQL metadata readback or the `biomes` / `species_to_biomes` addendum is missing from App review evidence;
- any source query needs a write path;
- expected source rows are missing without explanation;
- the helper cannot distinguish canonical from derived edges;
- review gates or blocked claims are missing;
- media candidates are treated as reviewed/public proof;
- pgvector, Memgraph, scheduled jobs, public output, or App runtime integration become necessary to complete the helper.

## Not Approved

This proposal does not approve:

- App code edits yet;
- generated output yet;
- Supabase SQL execution by Codex;
- Supabase writes;
- Planner writes;
- schema migrations;
- raw SQL beyond the separate user-run SQL Editor metadata readback;
- Memgraph setup;
- Memgraph import;
- pgvector;
- embeddings;
- App runtime changes;
- public Web output;
- media metadata writes;
- Storage writes;
- scheduled jobs;
- CRM/Financials/sensitive-data integration;
- canonical writeback.

## Next Action

```text
Ask App to review this proposal and, if approved, implement the smallest no-write JSONL/readback helper under ignored App out/.
```
