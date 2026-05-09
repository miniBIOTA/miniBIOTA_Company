---
title: Cross-Domain Relationships
last_updated: 2026-05-09
---
# Cross-Domain Relationships

## Coordination Rule
When company work affects more than one domain, identify the affected domains, downstream owners, what each domain needs next, and whether the Brain company brief needs to change.

Company strategy provides the top-level business context for downstream execution. It should align operations, funding, storytelling, hardware development, brand/public language, web presentation, app workflows, and research truth without replacing domain ownership.

Company owns the active dependency map across domains. Dependency mapping should capture the company-level objective, affected domains, upstream inputs, downstream owners, blockers, sequencing constraints, durable handoff surfaces, and review timing.

Company Planner tasks may coordinate cross-domain planning, decisions, and follow-up, but they do not replace domain-owned implementation queues. When execution belongs to Research, Hardware, Content, Brand, Growth, Financials, Web, App, or Raw Footage, use the relevant domain repo, domain brief, or domain Planner records as the implementation source of truth.

## Domain Map
- Research: ecological feasibility, species/data truth, observations, scientific claims, and knowledge graph integrity.
- Hardware: engineering priorities, sensor expansion, telemetry, climate control, enclosure, estuary feasibility, and live-system safety.
- Content: story arc, editorial priorities, proof assets, publishing cadence, and audience-facing loops.
- Brand: mission, positioning, public language, visual identity, and founder/company narrative.
- Growth: business plan, commercial sequencing, partnerships, sponsorships, distribution, and public commitments.
- Financials: budget, debt pressure, revenue baseline, runway, taxes, spending decisions, and financial risk.
- Web: public source-of-truth surfaces, conversion paths, strategic presentation, and public claims.
- App: Planner runtime behavior, schema, UI, Supabase-backed workflow implementation, internal operating tools, structured data workflows, dashboards, monitoring, and workflow support.
- Raw Footage: archival evidence, media source material, proof assets, and documentary history.
- Brain: protocol, registry, manager-facing briefs/exports, archive, and transition guardrails.

## Department Impact Rule
When a company decision affects a department, explicitly name the affected domain and what it needs to do next. If the decision affects a department's brief, source docs, or work queue, call that out separately from implementation recommendations.

## Ownership Pattern
Company can frame the decision and downstream need. The domain owner or domain agent owns the implementation detail unless Josue explicitly scopes the Company Agent to make a direct cross-repo change.

If Company Planner contains a task that affects another domain, treat it as a coordination task unless the task explicitly says Company owns the implementation. Identify the downstream owner and durable handoff surface before treating the work as complete.

Company owns cross-domain operating memory. Durable dependency changes, review outcomes, program governance rules, and recurring coordination constraints should land in Company memory or the Brain company brief when manager-facing strategy state changes. Domain-specific implementation detail should land in the relevant domain repo, domain brief, or structured record.

## Brain And App Boundary
Brain remains the guardrail layer for protocol, registry, briefs/exports, archive, and transition context. It is not the active owner of ongoing cross-domain planning cadence once Company memory and skills cover the workflow.

App owns Planner runtime behavior, schema, UI, and Supabase-backed workflow implementation. Company owns how Planner is used for Company operating strategy, program governance, and review cadence. Changes to Planner records remain live Supabase writes and require explicit approval.

## Handoff Pattern
If work begins in another interface or domain and the Company Agent needs to continue it, use durable files, the Brain company brief, domain briefs, or structured records as the handoff surface. Do not rely on chat history alone.

## Escalation Pattern
If a decision affects public claims, legal exposure, financial commitments, sponsor obligations, launch targets, or roadmap commitments, stop and ask for explicit user direction before treating it as approved.
