---
id: operation_living_intelligence_wave_1_app_design_review_packet_2026-05-15
title: Operation Living Intelligence Wave 1 App Design Review Packet
domain: company_operations
date: 2026-05-15
status: app_design_review_packet_ready
tags: [operation-living-intelligence, app-design-review, graph-seed, no-write-dry-run, living-atlas]
---
# Operation Living Intelligence Wave 1 App Design Review Packet

## Purpose

This packet is the Company-to-App design review handoff for the Operation Living Intelligence **Wave 1: Living Atlas Graph Seed** proposal.

It asks App to review a future no-write, local, rebuildable graph dry-run pattern. It does not ask App to implement anything yet.

No App repo file, App runtime behavior, schema, Supabase record, Planner record, media metadata, public site behavior, graph import, export job, local service, model run, cloud upload, paid service, automation, or source-of-truth record is approved by this packet.

## Current App-Relevant Context

Company read App repo context on 2026-05-15:

| App source | Finding |
|---|---|
| `M:\miniBIOTA\miniBIOTA_App\AGENTS.md` | App owns internal app behavior, Planner runtime/schema/UI, Media Library runtime/schema/indexing, migrations, secret-key paths, and App-owned implementation decisions |
| `M:\miniBIOTA\miniBIOTA_App\.gitignore` | `out/` is already ignored; `.local/` is not currently ignored |
| `M:\miniBIOTA\miniBIOTA_App\skills\supabase-safety-review\SKILL.md` | Any Supabase, schema, Storage, secret-key, telemetry, or live-control work is read-only by default and needs explicit approval before writes |
| Company registry | App risk level is high; App implementation and schema/runtime work require explicit App-scoped approval |

Because `out/` is already ignored, Company now recommends the future local output path:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\
```

Do not use:

```text
M:\miniBIOTA\miniBIOTA_App\.local\operation_living_intelligence\wave_1_lake_post_seal\
```

unless App first approves and adds an ignore rule.

## Design Review Inputs

App should review these Company sources:

| Source | Path |
|---|---|
| No-write dry-run proposal | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_1_no_write_dry_run_proposal_2026-05-15.md` |
| Wave 1 handoff | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_1_living_atlas_graph_seed_handoff_2026-05-15.md` |
| Task 409 audit | `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_task_409_schema_data_audit_2026-05-15.md` |
| Projection matrix | `M:\miniBIOTA\miniBIOTA_Company\skills\coordinate-cross-domain-priorities\reference\operation-living-intelligence-data-projection-matrix.md` |
| Company readiness review | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_1_app_design_review_readiness_2026-05-15.md` |

## Requested App Decision

Company is asking App to answer these design questions only:

| Question | Needed App answer |
|---|---|
| Local output path | Is `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\` acceptable for future ignored, rebuildable graph dry-run files? |
| First implementation shape | If later approved, should the first dry run be JSONL-only, Memgraph-backed, or JSONL first with optional Memgraph import later? |
| App ownership boundary | Should App own a future no-write export/readback helper, or should Company keep the next step docs-only until the SQL metadata gap is resolved? |
| Source access | Should future reads use Company protected REST export, App's existing protected bridge, a new App-owned read-only helper, or a working Supabase MCP database session? |
| SQL metadata gap | What App-owned path should be used before implementation to prove live constraints, indexes, RLS policies, and triggers? |
| Readback/deletion/rebuild | What App-owned checks are required before any local generated output is created? |
| Safety stop conditions | What conditions should stop a dry run before local output generation? |

## Proposed App Safety Position

Company recommends App classify the next stage as:

| Surface | Classification |
|---|---|
| App design review | Allowed as docs-only review |
| Supabase source reads | Read-only, approval-gated by scope |
| Local output files | Not approved yet; future approval required |
| `out/operation_living_intelligence/...` generated files | Acceptable candidate location only if App approves |
| App code/helper changes | Not approved |
| Memgraph install/import | Not approved |
| Planner/Supabase writes | Not approved |
| Media metadata writes | Not approved |
| Public website behavior | Not approved |
| SQL metadata proof | Still required before implementation |

## Source Manifest Summary

The proposed first seed remains bounded to:

| Family | Scope |
|---|---|
| Published source | `content_pipeline.id = 338` |
| Chronicle | `chronicles.id = 30` |
| In-seed chronicle subject links | `17`, `22`, `23`, `24`, `25` |
| Out-of-seed live chronicle context | `26`, `27`, `28` only as excluded/context readback unless expanded |
| Species | `24`, `66`, `67`, `164`, `167`, `180` |
| Observations | `170-178` |
| Open loops | `1`, `2`, `3`, `4`, `7` as context/review material only |
| Media assets | `9497`, `9499`, `9537`, `9538`, `9540`, `9548`, `9554`, `9557`, `9561`, `9562`, `9563`, `19311`, `35558` as unreviewed candidate references only |

The seed excludes CRM, Financials row-level data, private contacts, broader telemetry, raw private media sweeps, agent logs, unindexed stills as media records, direct canonical observation-to-pipeline/chronicle links, and public output.

## Required App Readback Before Any Future Dry Run

If App later approves a dry run, Company recommends App require a pre-run readback that says:

```text
This run will only read approved source rows/files.
This run will only create ignored local generated files under out/.
This run will not write Supabase, Planner, Storage, Media Library metadata, public site records, Markdown source-of-truth docs, or app runtime state.
This run can be deleted and regenerated.
This run returns proposed/readback output only.
```

## Stop Conditions

Stop before local output generation if any of these are true:

- Source rows no longer match the manifest.
- Output path is not ignored by git.
- Any source query tries to include CRM, Financials row-level data, private contacts, broader telemetry, raw private media sweeps, or agent logs.
- Any media candidate is treated as reviewed proof.
- Any observation `170-178` is treated as directly linked to `content_pipeline.id = 338` or `chronicles.id = 30`.
- Any public claim would be generated without Research/Content/Web review.
- Any helper or script would require App code changes without approval.
- Any install, cloud upload, paid tool, persistent service, or automation would be required.

## Handoff Message For App

Use this message when opening the App design review:

```text
Please review the Company Operation Living Intelligence Wave 1 no-write graph dry-run proposal as a design-only App review.

Company is not asking for implementation yet. The requested decision is whether the proposed ignored output path, JSONL graph seed format, validation/readback checks, and safety stop conditions are acceptable for a future separately approved no-write dry run.

Key App questions:
- Is App's ignored `out/operation_living_intelligence/wave_1_lake_post_seal/` path acceptable?
- Should the first approved run be JSONL-only, Memgraph-backed, or JSONL first with optional Memgraph later?
- What App-owned read-only path should resolve the remaining live SQL metadata proof for constraints, indexes, RLS policies, and triggers before implementation?
- What deletion/rebuild/readback checks should App require?

Not approved:
- No App code changes.
- No Supabase/Planner writes.
- No schema/migration work.
- No Memgraph install/import.
- No media metadata changes.
- No public behavior.
- No cloud upload, model run, paid service, or automation.
```

## Next Company Action

Do not edit App repo docs or create App Planner tasks from Company without explicit approval.

Company's pre-review recommendation is documented at:

- `domains/company/operation_living_intelligence_wave_1_app_design_review_readiness_2026-05-15.md`

The recommended first implementation shape, if later approved by App, is JSONL-only before any Memgraph-backed run.

Next action options:

1. Ask Josue to switch/scope the next session into `miniBIOTA_App` for App design review.
2. If Josue approves Company-to-App repo edits, add an App-side docs-only design review note in the App repo.
3. If Josue approves Planner writes, create or update an App-domain task for this design review.

## Verification

- Read Company OLI task `409` audit, Wave 1 handoff, and no-write dry-run proposal.
- Read App `AGENTS.md`, App `memory/00-index.md`, App Supabase safety skill, and App `.gitignore`.
- Confirmed `out/` is ignored in App and `.local/` is not.
- No App repo files changed.
- No Supabase/Planner writes were performed.
- No App runtime, schema, public site, graph database, export/import job, media metadata, model run, cloud upload, paid tool, automation, or source-of-truth record changed.
