---
name: update-domain-report
description: Use when Company-owned domain reports need a brief or overview update.
---
# Update Domain Report

## Trigger Phrases
- "update domain report"
- "update Company domain brief"
- "update overview"
- "domain reporting"
- "manager-facing state"
- "brief changed"
- "reporting candidate"

## Required Memory Files
- `memory/00-index.md`
- `memory/06-source-of-truth-rules.md`
- `memory/08-agent-operating-architecture.md`
- `memory/09-source-of-truth-and-routing.md`
- `_system/agent_repo_registry.md`
- `domains/README.md`

## Workflow
1. Identify the domain and the exact strategy-level or manager-facing facts that changed.
2. Verify the facts against the active domain repo, structured records, or active Company domain report as needed.
3. Read the current active Company report under `domains/`.
4. Update the brief/report for current operational state changes and the overview only for durable structure, scope, or ownership changes.
5. Keep implementation details in the owning domain repo.
6. Preserve historical Brain provenance notes in reports when present.
7. If `domains/` reports changed, rebuild Company exports with `0. Agent Exports/build_company_exports.ps1`.
8. Use Company `domains/` reports as the active reporting target. Brain domain briefs are historical/archive lookup only and should not be updated for normal reporting.
9. Read changed docs end to end.

## Write And Approval Rules
- Ask before changing live Planner/Supabase records; this workflow is Markdown/reporting only by default.
- Do not edit domain repos unless explicitly scoped.
- Do not write implementation details into Company reports.
- Do not edit Brain reporting paths for normal reporting; they are historical/archive lookup only.

## Do-Not-Do Boundaries
- Do not use reports as a replacement for domain implementation truth.
- Do not update reports from unverified current structured state when Supabase/App Planner should be checked.
- Do not use reports as task source of truth.
