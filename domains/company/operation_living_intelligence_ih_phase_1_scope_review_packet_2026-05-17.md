---
id: operation_living_intelligence_ih_phase_1_scope_review_packet_2026-05-17
title: Operation Living Intelligence Intelligent Harness Phase 1 Scope Review Packet
domain: company_operations
last_updated: 2026-05-17
tags: [operation-living-intelligence, intelligent-harness, phase-1, source-map, scope-review, lake-post-seal]
status: approved_scope_ready_for_sql_metadata_and_app_proposal
---
# Operation Living Intelligence Intelligent Harness Phase 1 Scope Review Packet

## Purpose

This packet resolves the first Phase 1 scope questions raised by the Supabase Source Map v0 and recommends the cleanest next path.

Use with:

```text
domains/company/operation_living_intelligence_ih_phase_1_supabase_source_map_2026-05-17.md
domains/company/operation_living_intelligence_intelligent_harness_master_plan_2026-05-17.md
```

This is documentation only. It does not approve code implementation, App changes, Supabase writes, Planner writes, schema migrations, Memgraph setup, generated outputs, media metadata writes, public output, scheduled jobs, or canonical writeback.

## Recommendation

Proceed with a narrow first graph/retrieval source scope:

```text
Lake Post-Seal Core Seed
```

Use the core seed to prove:

- canonical Supabase rows can become derived graph nodes;
- canonical join/link rows can become derived graph edges;
- derived review gates and blocked-claim nodes can preserve uncertainty;
- retrieval can attach cited Markdown/source context;
- the harness can answer practical questions without inventing source links or public claims.

Do not expand the first pilot just because related rows exist. The first win is a reliable, inspectable harness path, not a maximal graph.

## Approved Decisions

Approved by Josue on 2026-05-17:

- Use the narrow Lake Post-Seal Core Seed first.
- Keep context and expansion rows out of the required first import/readback.
- Use the current retrieval baseline first, not pgvector.
- Use Supabase SQL Editor as the first SQL metadata path.
- Prepare the next implementation proposal for an App-owned no-write JSONL/readback helper before any Memgraph import.

Interpretation:

- This approves the Phase 1 scope direction and next proposal preparation.
- This does not approve App code edits, generated output, Supabase writes, Planner writes, SQL execution by Codex, Memgraph setup, public output, or canonical writeback.

## Core Seed

### Include As Core Nodes

| Node type | Include | Reason |
|---|---|---|
| `Biome` | `biomes.id = 1` | The Freshwater Lake is the source scope. |
| `ContentItem` | `content_pipeline.id = 338` | Published source identity and source-loop anchor. |
| `Chronicle` | `chronicles.id = 30` | Public-history identity linked to pipeline `338`. |
| `Species` | `24`, `66`, `67`, `164`, `167` | Core chronicle/observation/review subjects for the first pilot. |
| `Observation` | `170-178` | Primary evidence notes for the source packet. |
| `OpenLoop` | `1`, `2`, `3`, `4`, `7` | Active/advanced question state. |
| `StoryThread` | `1`, `3`, `5` | Core story-continuity links from observations `170-178`. |
| `MediaAssetCandidate` | `9497`, `9499`, `9537`, `9538`, `9540`, `9548`, `9554`, `9557`, `9561`, `9562`, `9563`, `19311`, `35558` | Candidate media metadata only; all checked rows are unreviewed. |
| `WorkProject` | `75` | Operator/project context only. |
| `Task` | `563-571` | Phase status and future gate context only. |
| `GovernanceSource` | Master plan, closeout, source map, Content source packet, Wave 5 retrieval synthesis | Rules, caveats, source paths, retrieval and approval boundaries. |
| `ReviewGate` / `BlockedClaim` | Derived from source packet and Company/Research safety rules | Needed for review-gated answers. |

### Include As Core Relationships

| Relationship | Source | Direction |
|---|---|---|
| `SOURCE_CONTENT_FOR` | `chronicles.source_pipeline_id`, `content_pipeline.chronicle_entry_id` | `ContentItem <-> Chronicle` |
| `OBSERVED_IN` | `observations.biome_id` | `Observation -> Biome` |
| `MENTIONS` | `chronicle_subject_links` rows `17`, `22`, `23`, `24`, `25` | `Chronicle -> Biome/Species` |
| `SUPPORTS` | `observation_loop_links` | `Observation -> OpenLoop` |
| `PART_OF_STORY` | `observation_thread_links` | `Observation -> StoryThread` |
| `SOURCE_LOOP_FOR` | `open_loops.source_pipeline_id` | `ContentItem -> OpenLoop` |
| `NEEDS_REVIEW` | derived review rules | uncertain species/media/claims -> review gate |
| `BLOCKED_FOR_PUBLIC` | derived claim gates | unsafe claim/media/edge -> blocked claim |

### Important Non-Edges

The first pilot should explicitly preserve these absences:

- No canonical `Observation -> ContentItem` edge from `observations.pipeline_id`.
- No canonical `Observation -> Chronicle` edge from `observations.chronicle_id`.
- No canonical `Chronicle -> MediaAsset` edge from `media_chronicles`.
- No canonical `Species -> MediaAsset` edge from `media_species`.
- No canonical `Biome -> MediaAsset` edge from `media_biomes`.

The absence matters. It is how the harness avoids pretending that source-packet evidence is the same thing as live canonical links.

## Hold For Expansion

### Chronicle Context Species

Rows `65`, `169`, and `25` should not be ignored, but they should stay as first-pilot context references rather than core seed nodes.

Reason:

- They are live public chronicle context links.
- They are useful for "what else is mentioned?" questions.
- They are not needed to prove the first Lake Post-Seal graph mechanics.

Recommended handling:

```text
Load as optional context if the query asks for full chronicle subject coverage.
Do not require them for first import/readback pass.
```

### Observation-Referenced Species

Rows `156` and `59` should stay as referenced evidence only for the first pilot.

Reason:

- `156` / Daphnia magna is diagnostic-trial context.
- `59` / Duckweed is alternative-bridge test context.
- Including them in the first graph would broaden the seed before the core review gates are proven.

Recommended handling:

```text
Represent as mentioned/referenced terms in observation text or retrieval chunks first.
Promote to explicit graph nodes only if the first query library needs diagnostic-trial or alternative-bridge questions.
```

### Ostracod Follow-Up Lane

Species/story row `69` and story beat `13` should stay out of the first core seed.

Reason:

- Ostracods matter, but the first seed is already complex enough with Daphnia, Mesostoma, Ghost Shrimp, and media review gates.
- Story beat `13` points to later observation context outside observations `170-178`.

Recommended handling:

```text
Hold for the observation-to-story expansion pass after the first core readback works.
```

### Moina And Later Story Beats

Story thread `30` and story beats `6`, `8`, `9`, `10`, and `13` should be held for expansion.

Reason:

- They are useful follow-on Lake Post-Seal context.
- Their source observations are later than the core `170-178` seed.
- Including them now would make the first validation checklist blur source-packet proof with ongoing story progression.

Recommended handling:

```text
Use them as the first expansion set after the core seed can answer source-packet questions.
```

## Query Library For The First Pilot

The first query library should answer these questions before adding more scope:

1. What supports the Lake Post-Seal story?
2. Which observations connect to Daphnia, Mesostoma, Ghost Shrimp, and the Freshwater Lake?
3. Which open loops are still open, advanced, or review-required?
4. Which media candidates exist, and which are blocked for public use?
5. Which claims are blocked for public output?
6. Which relationships are canonical Supabase links, and which are derived source-packet context?
7. What would need review before a public claim or canonical writeback?

If those questions work, Phase 2/3 can use the same pattern for the first Memgraph/projection proposal.

## Retrieval Recommendation

Use the current local retrieval baseline first.

Do not start pgvector yet.

Reason:

- The Wave 5 App review recommends local-file-only vector evaluation before pgvector.
- The first harness value can be proven with cited source packets, structured rows, and graph relationships.
- pgvector becomes useful after the context packet shape is stable enough to know what should be embedded.

Recommended order:

```text
source map
-> exact query list
-> local graph/projection proposal
-> GraphRAG context packet shape with current retrieval baseline
-> local semantic evaluation only if the baseline is measurably weak
-> pgvector only after local semantic value is proven and approved
```

## Availability Needed

### Needed Before Implementation

SQL metadata availability is the main thing needed before any implementation proposal becomes executable.

Chosen first path:

```text
Supabase SQL Editor
```

Josue needs to run or provide the readback from the existing App-side SELECT-only SQL metadata packet before App implementation starts.

Other paths remain fallback options only:

| Path | What Josue needs to provide or do | Why it matters |
|---|---|---|
| Supabase SQL Editor | Run or approve running the existing read-only SQL metadata packet and provide the result | Fastest if MCP is not available. |
| Supabase MCP database tools | Make a session available where Codex can use SQL-capable Supabase MCP database tools in read-only mode | Lets the agent inspect columns, FK constraints, indexes, RLS policies, and triggers directly. |
| App-owned read-only SQL bridge | Approve a docs-only or later implementation proposal for an App-owned read-only metadata bridge | Best if this will become recurring operational tooling. |
| `psql` / direct read-only connection | Provide a read-only connection path and approval for catalog-only SELECT queries | Works, but needs careful secret handling and explicit read-only posture. |

Existing App-side SQL metadata packet:

```text
M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-sql-metadata-check.md
M:\miniBIOTA\miniBIOTA_App\tools\inspect-oli-wave1-sql-metadata.sql
```

### Helpful Before App/Memgraph Work

- Confirm whether local persistent Memgraph should use Docker again or a different local install path.
- Confirm whether App should own the first no-write projection helper proposal after the SQL metadata gap is resolved.
- Confirm whether first output should be JSONL/readback-first again before any Memgraph import.

### Not Needed Yet

- No pgvector decision yet.
- No visual AI/media model availability yet.
- No CRM, Financials, telemetry, YouTube analytics, public Web, or dashboard availability yet.
- No public caption or media-review session yet.

## Recommended Next Move

Company should prepare the next App-owned no-write JSONL/readback helper proposal before any Memgraph import.

That proposal should use the approved core seed query list and require SQL Editor metadata readback before implementation.

After that, the next gate is:

```text
Josue runs/provides Supabase SQL Editor metadata readback, then App reviews the no-write JSONL/readback helper proposal.
```

## Not Approved

This packet does not approve:

- code implementation;
- App helper creation;
- package installs;
- Supabase writes;
- Planner writes;
- raw SQL execution;
- schema migrations;
- Memgraph setup;
- generated outputs;
- App runtime changes;
- public Web output;
- media metadata writes;
- scheduled jobs;
- canonical writeback.
