---
id: phase_11_dependency_risk_closeout_2026_05_10
title: Phase 11 Dependency Risk Closeout - YouTube Extraction And Planner Reads
domain: company
last_updated: 2026-05-10
tags: [brain, company, migration, probation, content, planner, supabase]
---
# Phase 11 Dependency Risk Closeout - 2026-05-10

## Purpose

This file records the Phase 11 closeout pass for the two remaining active dependency risks:

- `YouTube_Extraction` and its former Brain-helper import path.
- Safe current-status reads for Planner/Supabase.

This was a Company coordination session. It did not run live imports, write Supabase/Planner records, run migrations, change App runtime behavior, change public site behavior, move or delete Brain, or make public/financial/legal/roadmap commitments.

## Sources Checked

- `AGENTS.md`
- `COMPANY_AGENT_PROTOCOL.md`
- `_system/agent_repo_registry.md`
- `_system/database_awareness.md`
- `_system/company_supabase.md`
- `memory/11-helper-and-database-awareness-migration.md`
- `memory/16-brain-retirement-probation.md`
- `memory/22-phase-11-supabase-read-awareness-2026-05-10.md`
- `M:\miniBIOTA\YouTube_Extraction\reconcile_and_import.py`
- `M:\miniBIOTA\YouTube_Extraction\pipeline_questions.md`
- `M:\miniBIOTA\YouTube_Extraction\main.py`

## YouTube Extraction Finding

`YouTube_Extraction` is no longer an active Brain-helper dependency for normal operation.

Current state:

- The live import script is blocked by an immediate runtime guard before any import can run.
- The guard explicitly says the legacy Content import tool no longer imports Brain helpers and must be moved or rebuilt under `miniBIOTA_Content` with an approved Content helper before live Supabase writes.
- `pipeline_questions.md`, draft JSON, transcript CSVs, and extraction outputs are historical/source artifacts for a future Content-owned import workflow, not active Company or Brain operating tools.
- The remaining work is a Content implementation follow-up, not a reason to reactivate Brain helper code.

## Content-Owned Replacement Route

The replacement path is:

1. Content owns the workflow and helper for YouTube transcript-to-`content_pipeline` import/reconciliation.
2. The rebuilt workflow should live in `M:\miniBIOTA\miniBIOTA_Content` or another explicitly Content-owned tool surface, not in Brain.
3. App remains owner of Planner/runtime/schema/UI and Supabase implementation details.
4. Company may coordinate dependencies and read status for sequencing, but should not own Content pipeline writes.
5. Research should be consulted when species, biome, or ecological interpretation IDs are uncertain.
6. Live Supabase writes require explicit user approval after source inspection, duplicate/empty-table checks, and a clear batch plan.

Minimum replacement requirements:

- No import from `M:\miniBIOTA\miniBIOTA_Brain\_system\minibiota_tools.py`.
- No Brain `.env`, Brain root, or Brain write policy dependency.
- Content-owned environment and approval gates.
- Read-only validation before writes.
- Idempotency or duplicate protection before inserting into `content_pipeline`.
- Clear handoff from source artifacts to Content records, with unresolved ecological claims routed to Research.

## Planner/Supabase Current-Status Read Path

Safe current-status reads should use this order:

1. Supabase MCP/read-only awareness when available in the active Codex session.
2. Company `_system/company_supabase.py` protected read helpers for Company-owned Planner coordination under `work_domains.key = company_ops` / `domain_id = 1`.
3. App-owned protected bridge/tooling when the status read depends on App runtime behavior or internal protected access. The active bridge is App `main.js` `supabase-rest` IPC with renderer routing through `js/shared/api-client.js`.
4. Publishable-key REST only for reachability/RLS visibility checks, not as proof of current Planner status, because Phase 11 readback showed zero visible rows under RLS.

Do not use:

- Brain helper code as the normal read path.
- Unsafe direct secret-key REST from Codex shell.
- Planner workflow state as approval for roadmap, public, financial, legal, sponsor, launch, or business commitments.

## Phase 11 Classification

Brain usage classification: Explicit transition maintenance.

Reason: The user explicitly asked to continue Phase 11 Brain retirement probation and named Brain-helper replacement risks. Active routing and documentation updates were made in Company. Brain helper code was not used as an active dependency.

`YouTube_Extraction` classification: Known replacement routed to Content; not an open Brain dependency after this closeout.

Planner/Supabase read-path classification: Access limitation managed; future current-status reads have a safe Company/App/MCP route and do not require Brain.

## Result

The remaining Brain-retirement dependency risk is closed at the Company coordination layer:

- `YouTube_Extraction` is routed to Content-owned helper/workflow implementation before any live import can resume.
- Planner/Supabase current-status reads are routed through MCP, Company protected reads for Company coordination, or the App-owned protected bridge.

Content implementation and any future live import remain separate approval-gated work.
