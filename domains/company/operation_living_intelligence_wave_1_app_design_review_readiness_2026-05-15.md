---
id: operation_living_intelligence_wave_1_app_design_review_readiness_2026-05-15
title: Operation Living Intelligence Wave 1 App Design Review Readiness
domain: company_operations
date: 2026-05-15
status: jsonl_dry_run_generated_after_pre_review
tags: [operation-living-intelligence, app-design-review, readiness, graph-seed, no-write-dry-run]
---
# Operation Living Intelligence Wave 1 App Design Review Readiness

## Purpose

This is the Company-side readiness review for sending the Operation Living Intelligence **Wave 1 no-write graph dry-run proposal** into App scope.

It is not an App approval and does not authorize implementation. It summarizes what Company learned from App operating rules and what Company recommends App decide during design review.

## App Context Checked

Company read these App sources on 2026-05-15:

| Source | Relevant finding |
|---|---|
| `M:\miniBIOTA\miniBIOTA_App\AGENTS.md` | App owns internal app behavior, Planner runtime/schema/UI, migrations, secret-key paths, and implementation choices; documentation-only review is safe, but runtime/schema/database changes need explicit App-scoped approval |
| `M:\miniBIOTA\miniBIOTA_App\.gitignore` | `out/` is ignored; `.local/` is not ignored |
| `M:\miniBIOTA\miniBIOTA_App\memory\02-app-safety-rules.md` | Do not write Supabase, schema, Storage, telemetry, MQTT, or launch the app without explicit approval |
| `M:\miniBIOTA\miniBIOTA_App\memory\03-app-architecture.md` | Source files are runtime truth; App is plain Electron with main/preload IPC and feature scripts |
| `M:\miniBIOTA\miniBIOTA_App\memory\05-database-access.md` | Secret-key access must stay internal; App-owned work lives under `work_domains.key = app` / `domain_id = 9`; App Planner writes require explicit approval |
| `M:\miniBIOTA\miniBIOTA_App\memory\05-supabase-and-storage-rules.md` | Use source/migrations/schema inspection before writes; use main-process secret-key bridge for internal access; no dummy records or uploads |
| `M:\miniBIOTA\miniBIOTA_App\memory\07-cross-agent-relationships.md` | App reports durable state, risks, blockers, and cross-domain dependencies back to Company; implementation detail stays in App |
| `M:\miniBIOTA\miniBIOTA_App\memory\09-planner-project-manager.md` | Planner is structured live work truth; project/task writes are live Supabase writes |
| `M:\miniBIOTA\miniBIOTA_App\skills\supabase-safety-review\SKILL.md` | Any Supabase/schema/Storage/secret-key/telemetry work is read-only by default and requires explicit approval before writes |

## Readiness Finding

Company can safely hand the proposal to App for **design review only**.

The proposal is not ready for implementation because:

- Live SQL metadata proof for constraints, indexes, RLS policies, and triggers is still unavailable.
- No App-owned read-only export/helper path has been approved.
- No local output generation has been approved.
- No Memgraph install/import path has been approved.
- No App Planner task/status write has been approved.

The proposal is ready for App design review because:

- The source manifest is bounded.
- Sensitive source families are excluded.
- The future output path now uses App's already ignored `out/` folder.
- The graph seed is proposed as generated derived data only.
- Validation and readback checks fail closed.
- The proposal explicitly blocks App behavior, schema, Supabase, Planner, media metadata, public site, cloud, paid service, automation, and source-of-truth changes.

## Recommended App Answers

| App design question | Company recommendation |
|---|---|
| Is the output path acceptable? | Yes as a candidate: `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\`, because `out/` is currently ignored. App should still confirm no generated source data is committed. |
| Should the first run be JSONL-only, Memgraph-backed, or both? | JSONL-only first. Treat Memgraph as optional second pass after source manifest, validation report, blocked-edge handling, and readback examples are proven. |
| Should App own a future helper? | Yes, if implementation proceeds. App should own any future no-write export/readback helper because it owns internal runtime, secret-key paths, schema awareness, and generated local tool outputs. |
| Should Company keep the next step docs-only? | Yes until App explicitly accepts the design and the live SQL metadata path is resolved for implementation. |
| What source access should be used? | Prefer a working Supabase MCP database session or App-owned read-only SQL/helper path for metadata proof. Any secret-key path must stay main-process/local-helper only and never enter renderer/public code. |
| What should be generated first if approved later? | `source_manifest.json`, `nodes.jsonl`, `edges.jsonl`, `blocked_edges.jsonl`, `validation_report.json`, and `readback_examples.md` under ignored `out/`. |
| What should stop the run? | Any source drift, unignored output path, sensitive source inclusion, media proof overclaim, direct observation-to-pipeline/chronicle link inference, public claim generation, unapproved App code change, install, cloud upload, paid service, or automation requirement. |

## Recommended First Implementation Shape If Later Approved

The safest future implementation shape is:

```text
read-only source fetch
  -> source_manifest.json
  -> generated JSONL graph seed files
  -> validation_report.json
  -> readback_examples.md
  -> delete/rebuild test
```

Do not make Memgraph the first required step. JSONL-first gives App, Research, Content, and Company a small reviewable artifact before any local graph database, import syntax, service lifecycle, or query behavior enters the picture.

## App Review Questions To Ask Next

Ask App to answer:

1. Is `out/operation_living_intelligence/wave_1_lake_post_seal/` the right ignored generated-output location?
2. Does App prefer JSONL-only first, or does it see a reason to require Memgraph in the first approved dry run?
3. What App-owned read-only path should resolve live SQL metadata proof before implementation?
4. Should a future helper live under `tools/`, `services/`, or another App-owned local tooling folder?
5. What pre-run operator readback should App require before local generated files are created?
6. What file deletion/rebuild check should prove the generated graph seed is disposable?
7. Does App want an App Planner task for this review, or should it stay as docs-only context until implementation is approved?

## Not Approved

This readiness review does not approve:

- App repo edits.
- App runtime behavior.
- App schema or migrations.
- Supabase/Planner writes.
- SQL execution.
- Local generated output files.
- Memgraph install/import.
- Media metadata writes.
- Public site behavior.
- Model runs.
- Cloud upload.
- Paid service.
- Automation.
- Public, sponsor, financial, legal, launch, or roadmap commitments.
- Source-of-truth moves.

## Next Gate

The Company-recommended JSONL-first dry run was generated after this pre-review:

- `domains/company/operation_living_intelligence_wave_1_jsonl_dry_run_generation_2026-05-15.md`
- `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\`

The next gate is reviewing the generated JSONL files, then deciding whether to approve an App-scoped regeneration helper or a local Memgraph import proposal.

Company can prepare the handoff, but App owns the design answer for implementation shape, generated-output location, helper ownership, and SQL metadata proof path.

## Verification

- Read Company OLI task `409` audit, Wave 1 handoff, no-write dry-run proposal, and App design review packet.
- Read App `AGENTS.md`, `.gitignore`, App memory files `02`, `03`, `05-database-access`, `05-supabase-and-storage-rules`, `07`, `09`, and App Supabase safety skill.
- Confirmed App currently ignores `out/` but not `.local/`.
- No App repo files changed.
- No Supabase/Planner writes were performed.
- No App runtime, schema, public site, graph database, export/import job, media metadata, model run, cloud upload, paid tool, automation, or source-of-truth record changed.
