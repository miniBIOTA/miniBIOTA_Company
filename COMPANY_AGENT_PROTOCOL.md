---
id: company_agent_protocol
title: Company Agent Protocol
domain: company
last_updated: 2026-05-19
tags: [company, protocol, operating-architecture, cross-domain-coordination, brain-transition]
---
# miniBIOTA Company Agent Protocol

## Purpose

This protocol is the top-level operating guide for Company Agent sessions in `M:\miniBIOTA\miniBIOTA_Company`.

Company is the active operating coordination repo for miniBIOTA. It owns planning strategy, Programs/Operations governance, roadmap cadence, dependency mapping, cross-domain operating memory, and operating review rhythm.

Brain is historical/archive, recovery, and retirement-provenance context during Phase 11 probation. Brain is not the active owner of cross-domain operating coordination, repo/domain routing, reporting, exports, or normal startup/closeout.

## Ownership Model

### Company Owns

- Cross-domain operating coordination.
- Planning strategy.
- Programs/Operations governance.
- Roadmap cadence and operating review rhythm.
- Dependency maps and downstream owner routing.
- Company-level source-of-truth routing that is not domain implementation detail.
- Manager-facing coordination workflow during the Brain retirement transition.
- Durable Company operating memory in `memory/`.

### Brain Keeps During Probation

- Historical protocol and startup rules for provenance.
- Brain-side registry references for historical comparison and recovery.
- Retired domain overview/brief folders as archive lookup only.
- Retired exports as archive lookup only.
- Historical archive, superseded material, recovery references, and retirement guardrails.

### App Owns

- Planner runtime behavior.
- Planner schema, UI, migrations, and Supabase-backed workflow implementation.
- Internal operator/admin surfaces.
- Desktop app behavior and internal service-role paths.
- Operation Living Intelligence implementation helpers and runtime surfaces, including local projection helpers, generated output conventions, Memgraph import/readback tooling, Company local vector retrieval, future approved retrieval implementation, and refresh automation when separately approved.

### Domain Agents Own

- Domain-local implementation truth.
- Domain memory, skills, exact references, and code.
- Domain-owned Supabase records.
- Domain Planner projects and tasks.
- Domain-specific closeout and safety rules.

Company coordinates across domains. It does not absorb domain repos or replace domain implementation authority.

## Startup Sequence

For a full Company bootstrap, run:

```powershell
powershell -ExecutionPolicy Bypass -File "_system/codex_session_start.ps1"
```

If working manually:

1. Read `AGENTS.md`.
2. Read this protocol.
3. Read `memory/00-index.md`.
4. Read `_system/agent_repo_registry.md` when the task touches repo/domain routing, reporting paths, risk levels, Supabase responsibilities, or Brain retirement migration.
5. Load the smallest relevant Company memory files.
6. Use the matching `skills/*/SKILL.md` playbook when the request matches a repeatable workflow.
7. Load Brain transition context only when the request depends on migration state, historical Brain reporting/export provenance, recovery context, or unresolved Brain dependencies.
8. Load domain repo `AGENTS.md`, memory, skills, or brief files only when domain-specific current state or ownership matters.
9. Use App Planner/Supabase only when current structured projects, tasks, milestones, or operational records matter.

## Source Of Truth

Use this hierarchy when sources disagree:

1. User direction in the current session.
2. Company `AGENTS.md` for hard Company Agent rules.
3. `COMPANY_AGENT_PROTOCOL.md` for Company-level operating protocol.
4. Company `_system/agent_repo_registry.md` for active repo/domain routing, risk levels, reporting-path transition state, and Supabase responsibility boundaries.
5. Company `memory/` for durable Company purpose, strategy, governance, roadmap rules, source routing, cross-domain operating model, and recurring decisions.
6. Relevant Company `skills/*/SKILL.md` playbooks for repeatable workflow rules.
7. Domain repo `AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/` for domain implementation truth.
8. Supabase/App Planner for structured/queryable projects, tasks, milestones, and operational records when those records are relevant.
9. Operation Living Intelligence derived layers, including Memgraph relationship projections, Company local vector retrieval, and future approved retrieval layers, for noncanonical relationship context and semantic source discovery only.
10. Brain domain briefs and Brain exports as historical/archive reference only.
11. Archives and superseded files as historical reference only.

Chat history and private model memory are never durable source of truth.
Memgraph, vector indexes, retrieval manifests, embeddings, generated readbacks, and other Operation Living Intelligence outputs are derived awareness layers unless a future source-of-truth change is explicitly approved. Agents may use them to find context, but must verify consequential claims against Markdown, Supabase, domain source docs, or approved source records.

## Routing Rules

Route work by ownership:

- Company: cross-domain coordination, planning strategy, dependency maps, Programs/Operations governance, roadmap cadence, operating review rhythm, and source-of-truth routing.
- App: Planner runtime, schema, UI, migrations, internal tools, service-role paths, media/admin tooling, and live operator surfaces.
- Brain: transition inventory, archive/freeze guardrails, historical lookup, recovery context, and retired Brain exports/briefs as provenance.
- Research: ecological truth, species, biomes, observations, claim safety, and scientific interpretation.
- Content: publishing workflow, story threads, scripts, content calendar, pipeline records, open loops, story beats, and public story execution.
- Hardware: firmware, sensors, MQTT, telemetry producer paths, live-system safety, enclosure, climate, control, and deployment.
- Web: public website, public-only routes, public telemetry display, newsletter/poll intake, public data surfaces, and public UI.
- Financials: expenses, revenue, liabilities, tax support, mileage, account balances, monthly close, and finance records.
- Brand: positioning, messaging, public language, identity, support/sponsorship copy, and audience fit.
- Growth: partnerships, sponsors, sales, CRM strategy, outreach, events, and commercial sequencing.
- Raw Footage: Company-owned proof/archive strategy and routing, with App owning Media Library runtime/schema/indexing, Content owning production use, and Research owning ecological interpretation.
- Definitions: Company-owned central shared vocabulary, with domain-specific extension paths for Research, Hardware, App, Web, Content, Brand, Financials, and Growth.

When ownership is mixed, Company names the downstream owners and durable handoff surfaces; domains execute their owned implementation.

## Write Policy

Respect `MINIBIOTA_WRITE_MODE` when available:

| Mode | Behavior |
|---|---|
| `read-only` | No writes anywhere |
| `confirm-before-write` | Confirm with the user before writes |
| `safe-write` | Writes may proceed after stating what will change |

For Company docs, say what files will change before editing. Preserve user changes and keep edits scoped.

Always ask explicit approval before:

- Supabase writes.
- Planner project/task create, edit, status, schedule, recurrence, archive, delete, link, or completion changes.
- Raw SQL, migrations, schema changes, destructive writes, service-role actions, or live-control paths.
- Memgraph projection/import/rebuild/refresh, vector/pgvector index changes, embedding jobs, retrieval-output generation, scheduled refresh jobs, or derived Operation Living Intelligence writeback unless the scoped action has been explicitly approved.
- Public promises, business commitments, sponsor obligations, legal decisions, financial commitments, launch targets, or roadmap commitments.
- App behavior, website behavior, firmware, telemetry producer behavior, or live system changes.

## Migration Guardrails

- Do not migrate domain briefs, helpers, exports, or domain agent references before the relevant phase is scoped.
- Do not physically freeze, move, or delete Brain while any active startup, closeout, helper, export, registry, brief, or domain agent path depends on Brain.
- Do not duplicate implementation source of truth into Company.
- Do not rewrite historical archives unless archive cleanup is explicitly scoped.
- Do not treat a Company protocol update as authorization for live Planner, Supabase, app, web, finance, or hardware writes.

## Closeout

For Company sessions:

1. List changed files.
2. Read every new or changed doc end to end.
3. Decide whether Company memory, Brain archive/provenance docs, Company reports, domain owners, or structured records are implicated.
4. If structured records would need updates, ask for explicit approval before writing.
5. Run `git diff --name-only` or equivalent.
6. Run `git status --short --branch`.
7. Confirm no unscoped app behavior, database records, structured records, public site behavior, Brain docs mirrors, test data, or commitments changed.
8. Confirm no unscoped Memgraph projection, vector index, embedding artifact, generated retrieval output, scheduled refresh, or derived Operation Living Intelligence layer changed.
9. Use the standard closeout report.
