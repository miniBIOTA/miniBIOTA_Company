---
title: Domain Agent Migration
last_updated: 2026-05-09
---
# Domain Agent Migration

## Purpose

This file is the Phase 7 standard migration guide for moving domain agents from Brain-first coordination to Company-first coordination.

Use it when updating domain repos after Company protocol, registry, reports, export tooling, helper/database-awareness planning, and Company skill replacements are in place.

## Phase 7 Status

Phase 7 active domain repo doc migrations are complete. This file remains the standard domain-agent migration prompt/checklist. Company is the model repo for Company-first wording. Brand/Financials, Growth/Content/Web, Research, and Hardware/App have completed their Phase 7 migration batches.

Not done yet:
- Raw Footage and Definitions owner/path decisions remain deferred to Phase 9.
- Final Company reporting activation remains pending until Company reports/exports and transition authority are verified.
- Brain helper paths remain historical/archive lookup paths until helper code migration is explicitly scoped.
- Brain is not archive-only yet.

## Completed Domain Batches

- Company model wording is updated for Company-first coordination.
- Brand docs now point active top-level coordination, registry routing, reports, and closeout routing to Company while preserving Brand-local truth and Brand write boundaries.
- Financials docs now point active top-level coordination, registry routing, reports, and closeout routing to Company while preserving finance source-of-truth and high-stakes write boundaries.
- Growth docs now point active top-level coordination, registry routing, reports, and closeout/planning routing to Company while preserving commercial commitment boundaries and Growth-owned Planner/write gates.
- Content docs now point active top-level coordination, registry routing, reports, and closeout/publish routing to Company while preserving production-record, publish-closeout, and ecology-claim write gates.
- Web docs now point active top-level coordination, registry routing, reports, and closeout/memory routing to Company while preserving public-only site, route/runtime, telemetry, and Planner/write gates.
- Research docs now point active top-level coordination, registry routing, reports, and read/handoff/closeout routing to Company while preserving ecological truth, uncertainty labels, public-claim gates, and Research-owned structured-record boundaries.
- Hardware docs now point active top-level coordination, registry routing, reports, and closeout/memory/architecture routing to Company while preserving firmware, telemetry, MQTT, OTA, schema, Planner, and live-biosphere approval gates.
- App docs now point active top-level coordination, registry routing, reports, and feature/doc-closeout/memory/safety routing to Company while preserving Planner runtime, schema, Storage, telemetry, MQTT, launch, secret-key, and live-write approval gates.

## Standard Domain-Agent Migration Prompt

Use this prompt for each domain repo, adjusting the domain name and paths:

```text
Use the Brain retirement plan at M:\miniBIOTA\miniBIOTA_Brain\memory\12-brain-retirement-to-company-plan.md, the Phase 0 inventory at M:\miniBIOTA\miniBIOTA_Brain\memory\13-brain-retirement-phase-0-inventory.md, the Company protocol at M:\miniBIOTA\miniBIOTA_Company\COMPANY_AGENT_PROTOCOL.md, the Company registry at M:\miniBIOTA\miniBIOTA_Company\_system\agent_repo_registry.md, the Company reports under M:\miniBIOTA\miniBIOTA_Company\domains\, the Company exports under M:\miniBIOTA\miniBIOTA_Company\0. Agent Exports\, the Phase 5 helper migration plan at M:\miniBIOTA\miniBIOTA_Company\memory\11-helper-and-database-awareness-migration.md, the Phase 6 skill migration map at M:\miniBIOTA\miniBIOTA_Company\memory\12-brain-skills-migration.md, and the Phase 7 domain migration guide at M:\miniBIOTA\miniBIOTA_Company\memory\13-domain-agent-migration.md.

Update the {DOMAIN} repo only. Make it Company-first for top-level coordination, Company registry routing, Company reporting candidate awareness, and Phase 5/6 helper/playbook guidance while preserving domain-local implementation ownership and domain-owned Supabase/write boundaries.

Do not move helper code, archive Brain, alter app/runtime behavior, change public site behavior, run migrations, or write live Planner/Supabase records. Keep Brain paths as historical/archive lookup or historical/recovery references only where activation is not complete. Return a closeout with changed files, verification, not changed, and unresolved questions.
```

## Common File Targets

Update these when they exist in the domain repo:
- `AGENTS.md`
- `README.md`
- `memory/00-index.md`
- database access memory
- source-of-truth memory
- cross-agent relationship memory
- recurring decision memory when it mentions Brain routing
- closeout skill
- domain skills that mention Brain reporting, Brain briefs, Brain exports, or Brain helper paths
- session start/close scripts only when the phase explicitly scopes script migration

## Required New Domain Rule

Each migrated domain should say:
- Company is the active top-level operating coordination repo.
- Company owns active repo/domain routing through `M:\miniBIOTA\miniBIOTA_Company\_system\agent_repo_registry.md`.
- Company reports live under `M:\miniBIOTA\miniBIOTA_Company\domains\...`.
- Brain is transition/history/recovery, not the owner of new active cross-domain coordination.
- Brain reporting paths are historical/archive lookup only after Phase 10 reporting activation.
- App Planner/Supabase remains the live project/task/program runtime.
- Domain implementation truth remains local to the domain repo and domain-owned Supabase records.
- Brain `_system/minibiota_tools.py` is retired from normal workflows; use MCP/read-only awareness and Company/domain-owned helpers while preserving domain write boundaries.

## Reporting Path Pattern

Use the Company registry for exact paths. Current candidates:

| Domain | Company reports |
|---|---|
| Company | `domains/company/company_overview.md`; `domains/company/company_brief.md` |
| Financials | `domains/financials/financials_overview.md`; `domains/financials/financials_brief.md` |
| Research | `domains/research/research_overview.md`; `domains/research/research_brief.md` |
| Brand | `domains/brand/brand_overview.md`; `domains/brand/brand_brief.md` |
| Content | `domains/content/content_overview.md`; `domains/content/content_brief.md` |
| Hardware | `domains/hardware/hardware_overview.md`; `domains/hardware/hardware_brief.md` |
| Growth | `domains/growth/growth_overview.md`; `domains/growth/growth_brief.md` |
| Web | `domains/web/web_overview.md`; `domains/web/web_brief.md` |
| App | `domains/app/app_overview.md`; `domains/app/app_brief.md` |
| Raw Footage | `domains/raw-footage/raw_footage_overview.md` until Phase 9 owner decision |
| Definitions | `domains/definitions/definitions_overview.md` until Phase 9 owner decision |

## Verification Checklist Per Domain

After each domain migration:
- Read every changed doc end to end.
- Run a stale-routing scan on changed domain docs, for example:
  `rg -n "reports to the Strategy Agent|Brain Relationship|Brain Reporting|Brain strategy brief|Preferred path: Brain helper|miniBIOTA_Brain\\_system\\minibiota_tools.py|Brain Agent" <changed-files>`
- Confirm any remaining Brain references are labeled historical/archive lookup, historical, archive, or recovery.
- Run `git diff --check`.
- Run `git diff --name-only` or equivalent.
- Run `git status --short --branch`.
- Confirm no live Planner/Supabase records, app behavior, public site behavior, firmware, schema, migrations, or domain implementation code changed unless explicitly scoped.

## Batch Order Recommendation

1. Company model wording.
2. Low-risk docs-heavy domains: Brand, Financials.
3. Medium-risk coordination domains: Growth, Content, Web.
4. Research after Content/Web wording is stable, because public claims and ecology truth are sensitive.
5. Hardware and App last, because live-system, schema, runtime, and app behavior boundaries are highest risk.
6. Raw Footage and Definitions owner decisions stay Phase 9 unless a Phase 7 domain update needs a temporary pointer.
