---
id: operation_living_intelligence_wave_2_app_design_review_packet_2026-05-15
title: Operation Living Intelligence Wave 2 App Design Review Packet
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-2, app-design-review, content-story-graph, no-write, lake-post-seal]
status: app_design_review_complete_helper_implemented
---
# Operation Living Intelligence Wave 2 App Design Review Packet

## Purpose

This packet is the Company-to-App design review handoff for **Operation Living Intelligence Wave 2: Content Story Graph**.

The user approved continuing to the next recommended step on 2026-05-15. Company interpreted that as approval to prepare the App design-review handoff, not as approval to edit App files or implement a helper. Josue later approved the smallest local helper implementation.

This packet originally asked App to review the future no-write local JSONL/readback shape only. The App review is now complete, and the smallest approved helper has been implemented.

It does not approve Memgraph/Docker use, Supabase/Planner writes, schema changes, Storage changes, media metadata changes, public site behavior, Content copy, Research claim changes, automation, paid services, durable graph runtime, canonical writeback, or source-of-truth migration.

## App Review And Helper Result

App completed the design review at:

```text
M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave2-design-review.md
```

After Josue approved implementation, App added and verified:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave2-content-story-jsonl.js
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave2-content-story-readback.js
```

Generated output lives under:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_2_content_story_graph\lake_post_seal\
```

Verified result:

- generation status: `pass_with_review_required_content_story_jsonl_ready`;
- readback status: `pass_with_review_required_content_story_readback_ready`;
- nodes: `63`;
- normal edges: `136`;
- blocked edges: `34`;
- canonical writeback: `none`.

Company recorded the completed helper at:

```text
domains/company/operation_living_intelligence_wave_2_jsonl_readback_helper_2026-05-15.md
```

## App Context Read

Company checked App context read-only on 2026-05-15.

| App source | Finding |
|---|---|
| `M:\miniBIOTA\miniBIOTA_App\AGENTS.md` | App owns internal app behavior, Planner runtime/schema/UI, Supabase access paths, Media Library runtime/schema/indexing, migrations, secret-key paths, and App-owned implementation decisions. Live app actions, Supabase writes, Storage writes, telemetry controls, and migrations require explicit approval. |
| `M:\miniBIOTA\miniBIOTA_App\.gitignore` | `out/` is ignored; `.env`, `.env.local`, local config, secrets, logs, and temp files are ignored. |
| `M:\miniBIOTA\miniBIOTA_App\memory\00-index.md` | Supabase remains structured-record/schema truth when current live records matter; App memory/skills route implementation work. |
| `M:\miniBIOTA\miniBIOTA_App\memory\05-supabase-and-storage-rules.md` | Default posture is no writes without approval. Planner, Source Map links, story beats, story threads, loops, observations, media review state, and public/admin records are live operational writes. |
| `M:\miniBIOTA\miniBIOTA_App\skills\supabase-safety-review\SKILL.md` | Supabase/Storage/schema/secret-key work is read-only by default and requires explicit approval before any write. |
| `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave1.md` | Wave 1 already established the local ignored-output, readback-first, no-write helper pattern under `out/operation_living_intelligence/`. |
| `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave1-manual-projection.js` | Existing Wave 1 manual helper enforces output under App `out/`, runs local helper steps, and writes ignored operator reports without App runtime, Planner, Storage, Web, Content, or canonical writes. |

## Design Inputs

App should review these Company sources:

| Source | Path |
|---|---|
| Wave 2 design | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_2_content_story_graph_design_2026-05-15.md` |
| Lake Post-Seal packet selection | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_2_lake_post_seal_packet_selection_2026-05-15.md` |
| Source availability review | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_2_lake_post_seal_source_availability_review_2026-05-15.md` |
| No-write App proposal | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_2_no_write_app_implementation_proposal_2026-05-15.md` |
| Projection matrix | `M:\miniBIOTA\miniBIOTA_Company\skills\coordinate-cross-domain-priorities\reference\operation-living-intelligence-data-projection-matrix.md` |

## Requested App Decision

Company is asking App to answer design questions only:

| Question | Needed App answer |
|---|---|
| Output path | Is `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_2_content_story_graph\lake_post_seal\` acceptable for future ignored, rebuildable output? |
| First implementation shape | Should Wave 2 stay JSONL/readback-only before any Cypher/Memgraph work? |
| Source refresh pattern | Should a future helper mirror the Wave 1 protected REST read pattern, or use another App-owned read-only path? |
| Source manifest | Are the selected source families and excluded families appropriate for App's safety model? |
| Status modeling | Are the published/planned/available/developing/open/advanced/review-required states explicit enough to prevent bad UI/public assumptions? |
| Blocked edges | Are the required blocked inferences sufficient, especially planned-as-published, unreviewed-media-as-proof, and inferred chronicle-calendar links? |
| Readback checks | What App-owned validation/readback checks should be mandatory before local output is considered useful? |
| Stop conditions | What should stop a future helper before it writes generated local files? |

## Recommended App Safety Position

Company recommends App classify the next stage as:

| Surface | Classification |
|---|---|
| App design review | Allowed as docs-only review. |
| Supabase source reads | Read-only, bounded to the selected packet, and approval-gated at run time. |
| Local output files | Future approval required; acceptable candidate location is App ignored `out/`. |
| App code/helper changes | Not approved. |
| Graph generation | Not approved. |
| Cypher/Memgraph/Docker | Deferred and not approved. |
| Supabase/Planner writes | Not approved. |
| Source Map/story/calendar/media writes | Not approved. |
| Public website behavior | Not approved. |
| Automation/scheduled sync | Not approved. |

## Proposed Future Output

If App later approves implementation, Company recommends the ignored output folder:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_2_content_story_graph\lake_post_seal\
```

Expected future generated files:

```text
source_manifest.json
nodes.jsonl
edges.jsonl
blocked_edges.jsonl
validation_report.json
story_readback_report.json
story_readback_report.md
```

## Required Review Guardrails

App should reject the future helper design if it cannot prove:

- no Supabase, Planner, Storage, App runtime, Web, Content, Research, media metadata, or Markdown source-of-truth writes;
- output path stays under ignored `out/`;
- every generated node/edge has source provenance;
- published, planned, available, developing, open, advanced, candidate, and review-required status states are explicit;
- planned content is not treated as published;
- available/unseen story beats are not treated as published;
- observations are not treated as public content;
- unreviewed media is not treated as proof;
- `content_calendar` is not assumed to have a direct `chronicle_entry_id` path;
- public Web reuse remains blocked pending Web/Content/Research review;
- canonical writeback remains `none`.

## Handoff Message For App

Use this message when opening the App design review:

```text
Please review the Company Operation Living Intelligence Wave 2 no-write App implementation proposal as a design-only App review.

At this gate, Company was not asking for implementation yet. The requested decision was whether the proposed ignored output path, JSONL/readback-first package, source manifest, blocked-edge guardrails, validation checks, and stop conditions were acceptable for a future separately approved no-write helper.

Key App questions:
- Is `out/operation_living_intelligence/wave_2_content_story_graph/lake_post_seal/` acceptable?
- Should Wave 2 stay JSONL/readback-only before Cypher/Memgraph?
- What App-owned source refresh pattern should be used?
- What validation/readback checks are mandatory?
- What stop conditions should prevent generated local output?

Not approved:
- No App code changes.
- No graph generation.
- No Docker/Memgraph use.
- No Supabase/Planner writes.
- No schema/migration work.
- No media metadata changes.
- No public behavior.
- No automation.
```

## Next Company Action

Do not create App Planner tasks, run Cypher/Memgraph, integrate with App runtime, create public output, automate runs, or perform live Supabase/Planner writes from Company without explicit approval for that specific action.

If the user approves the next move after this packet and helper result, recommended options are:

1. Use the completed Wave 2 readback review as the closing decision: no Cypher/Memgraph is needed for this wave right now.
2. Prepare Wave 3 Species and Public History Expansion as a docs-only design pass.
3. If live work tracking matters, ask for explicit approval before creating/updating any App-domain Planner task.

## Verification

- Read App `AGENTS.md`.
- Read App `.gitignore`.
- Read App `memory/00-index.md`.
- Read App `memory/05-supabase-and-storage-rules.md`.
- Read App `skills/supabase-safety-review/SKILL.md`.
- Read App Wave 1 OLI docs and helper patterns.
- App repo helper/doc files changed only after later explicit approval.
- No Supabase/Planner writes were performed.
- No App runtime, schema, public site behavior, graph database, export/import job, media metadata, model run, cloud upload, paid tool, automation, or source-of-truth record changed.
