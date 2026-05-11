---
title: Cross-Domain Relationships
last_updated: 2026-05-11
---
# Cross-Domain Relationships

## Coordination Rule
When company work affects more than one domain, identify the affected domains, downstream owners, what each domain needs next, and whether the Company report needs to change.

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
- Brain: historical protocol, Brain-side registry references, retired briefs/exports, archive, recovery context, and retirement provenance during probation.

## Department Impact Rule
When a company decision affects a department, explicitly name the affected domain and what it needs to do next. If the decision affects a department's brief, source docs, or work queue, call that out separately from implementation recommendations.

## Ownership Pattern
Company can frame the decision and downstream need. The domain owner or domain agent owns the implementation detail unless Josue explicitly scopes the Company Agent to make a direct cross-repo change.

If Company Planner contains a task that affects another domain, treat it as a coordination task unless the task explicitly says Company owns the implementation. Identify the downstream owner and durable handoff surface before treating the work as complete.

Company owns cross-domain operating memory. Durable dependency changes, review outcomes, program governance rules, and recurring coordination constraints should land in Company memory or the Company report when manager-facing strategy state changes. Domain-specific implementation detail should land in the relevant domain repo, domain brief, or structured record.

## Growth CRM Role Pattern

Customer Relationship Management is a shared Growth/App surface.

The Growth Agent should understand CRM as part of its own commercial operating system, not merely as an app feature. Growth owns the meaning of the relationships: customers, partners, sponsors, donors, supporters, collaborators, event contacts, leads, and opportunities. Growth defines who belongs in the CRM, why they matter, what relationship stage they are in, what follow-up is appropriate, and what commercial or community context should be preserved.

Growth owns CRM strategy and operating rules: lifecycle stages, opportunity categories, outreach cadence, follow-up priority, relationship health, sponsor/partner fit, audience-support paths, speaking/event follow-up, campaign warmup, and the distinction between lead, active conversation, committed relationship, and archived/no-fit contact.

Growth also owns CRM commitment discipline. CRM notes, stages, and next actions must not imply approved sponsor obligations, pricing, public promises, legal decisions, financial commitments, campaign dates, launch targets, or roadmap commitments unless Josue explicitly approved those commitments through the proper source of truth.

App owns CRM as software: the internal CRM tab, UI behavior, database/runtime integration, schema and migration implementation when scoped, Supabase-backed create/read/update workflows, AppAPI/service-role paths, renderer modules, validation, smoke tests, and operator ergonomics.

Company owns the cross-domain boundary: deciding when CRM work affects Growth strategy, App implementation, Brand language, Web intake, Financials revenue assumptions, Content proof assets, or Company-level governance. Company may define handoffs and dependency maps, but it does not replace Growth as commercial owner or App as runtime owner.

Before App builds or expands CRM behavior, Growth should provide the role model App is implementing: contact types, relationship stages, opportunity fields, follow-up rules, priority signals, sponsor-safe language needs, and the minimum useful workflow for the operator. App should then translate those Growth-owned concepts into safe desktop app behavior and Supabase-backed workflows.

Any live CRM, partner, sponsor, Planner, schema, migration, app behavior, public claim, sponsor obligation, pricing, campaign, financial, legal, launch, or roadmap change remains approval-gated by its normal owner.

## Brain And App Boundary
Brain remains archive/recovery context and retirement provenance during probation. It is not the active owner of ongoing cross-domain planning cadence.

App owns Planner runtime behavior, schema, UI, and Supabase-backed workflow implementation. Company owns how Planner is used for Company operating strategy, program governance, and review cadence. Changes to Planner records remain live Supabase writes and require explicit approval.

## Handoff Pattern
If work begins in another interface or domain and the Company Agent needs to continue it, use durable files, the Company report, domain reports, or structured records as the handoff surface. Do not rely on chat history alone.

## Escalation Pattern
If a decision affects public claims, legal exposure, financial commitments, sponsor obligations, launch targets, or roadmap commitments, stop and ask for explicit user direction before treating it as approved.
