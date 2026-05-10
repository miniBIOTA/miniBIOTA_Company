---
title: Source Of Truth And Routing
last_updated: 2026-05-09
---
# Source Of Truth And Routing

## Purpose

This file defines Company-level routing after active Brain coordination responsibilities moved into Company.

Use it for cross-domain questions, source-of-truth conflicts, Brain retirement/probation sessions, and work where it is unclear whether Company, Brain archive, App, or a domain owns the next action.

## Source Hierarchy

Use this order when sources disagree:

1. User direction in the current session.
2. Company `AGENTS.md`.
3. `COMPANY_AGENT_PROTOCOL.md`.
4. Company `_system/agent_repo_registry.md` for active repo/domain routing, risk levels, reporting-path transition state, and Supabase responsibility boundaries.
5. Company memory files.
6. Relevant Company skills.
7. Domain repo `AGENTS.md`, memory, skills, references, and code for domain implementation truth.
8. Supabase/App Planner for current structured records when relevant.
9. Historical Brain briefs and Brain exports as archive/provenance references only.
10. Archives and superseded files as historical reference only.

## Routing Rules

### Route To Company

Route to Company when the question is about:
- Cross-domain operating coordination.
- Planning strategy.
- Programs/Operations governance.
- Roadmap cadence or operating review rhythm.
- Dependency mapping.
- Which domain owns a follow-up.
- How Planner should be used strategically.
- Brain retirement/migration sequencing.
- Source-of-truth routing that is not domain implementation detail.

### Route To Brain Archive During Probation

Route to Brain when the question is about:
- Historical Brain registry when investigating transition history or conflicts; active routing uses Company `_system/agent_repo_registry.md`.
- Historical Brain exports when archive/provenance lookup is explicitly needed.
- Historical Brain domain briefs when archive/provenance lookup is explicitly needed.
- Brain archive, superseded material, or transition guardrails.
- Verifying old Brain dependencies during the retirement plan.

Brain is archive/recovery context during probation, not the target owner for new cross-domain operating coordination.

### Route To App

Route to App when the question is about:
- Planner UI/runtime behavior.
- Supabase migrations for Planner or internal app workflows.
- Electron behavior.
- Media Library implementation.
- Monitoring tab behavior.
- Internal admin/operator surfaces.
- Service-role or secret-key app paths.

### Route To A Domain Repo

Route to domain repos for implementation and domain truth:

- Research: species, observations, ecological interpretation, claim boundaries.
- Content: scripts, publishing, content pipeline, calendar, story threads, open loops, story beats.
- Hardware: firmware, sensors, telemetry producer paths, MQTT, live controls, deployment.
- Web: public site routes, public UI, public telemetry display, newsletter/poll intake.
- Financials: revenue, expenses, liabilities, taxes, mileage, close workflows.
- Brand: message, public language, identity, channel strategy.
- Growth: partners, sponsors, sales, CRM strategy, outreach, events.
- App: internal tools and Planner runtime.

## Conflict Handling

When sources disagree:

1. Identify each source and what it says.
2. Classify each source as current, planned, proposed, stale, historical, or archive.
3. Prefer the highest source in the hierarchy.
4. If the conflict affects commitments, public claims, finance, legal, sponsor obligations, roadmap targets, schema, live controls, or structured records, ask the user before changing durable state.
5. Update the correct durable source after confirmation.

## Structured Records

Supabase/App Planner is canonical for queryable records and live task/project state. Markdown may explain strategy, context, and rules, but it must not become a competing task-status system.

Company reads structured records when current state matters. Company writes structured records only after explicit approval.

## Brain Reference Status

During Phase 11 probation, active repo/domain routing, reporting, exports, and operating coordination live in Company and the relevant domain repos. Brain remains searchable for historical lookup, recovery context, retirement provenance, and explicitly scoped retirement checks. Do not delete, move, or physically lock Brain until Phase 12 approval.
