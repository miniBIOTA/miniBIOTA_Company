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

Current state after user clarification:

- The tool is retired historical extraction/backfill tooling.
- The historical channel transcript backfill is complete, and new videos are documented as they are posted.
- `main.py` is intentionally fail-closed and no longer contains an embedded OpenAI API key.
- `pipeline_questions.md`, draft JSON, transcript CSVs, and extraction outputs are retained only as historical/source artifacts.
- No Content-owned import replacement is needed unless the user explicitly reactivates extraction/import work later.

## Retirement Route

The retirement path is:

1. Keep `M:\miniBIOTA\YouTube_Extraction` available only for historical transcript/source-artifact lookup.
2. Do not run live YouTube extraction, OpenAI transcription, or Content pipeline import from this folder.
3. Do not migrate this tool into Content unless the user explicitly reactivates the workflow.
4. If reactivated later, rebuild it as a Content-owned workflow with environment-based secrets, source inspection, duplicate checks, and explicit approval before live writes.
5. Research should be consulted only if future reactivation involves species, biome, or ecological interpretation IDs.

Minimum reactivation requirements:

- No import from `M:\miniBIOTA\miniBIOTA_Brain\_system\minibiota_tools.py`.
- No Brain `.env`, Brain root, or Brain write policy dependency.
- No hardcoded API keys or secrets.
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

`YouTube_Extraction` classification: Retired historical tooling; not an open Brain dependency and not a pending Content migration after user clarification.

Planner/Supabase read-path classification: Access limitation managed; future current-status reads have a safe Company/App/MCP route and do not require Brain.

## Result

The remaining Brain-retirement dependency risk is closed at the Company coordination layer:

- `YouTube_Extraction` is retired historical tooling and `main.py` has been fail-closed with the embedded OpenAI key removed.
- Planner/Supabase current-status reads are routed through MCP, Company protected reads for Company coordination, or the App-owned protected bridge.

No Content implementation or future live import is pending unless the user explicitly reactivates extraction/import work.

