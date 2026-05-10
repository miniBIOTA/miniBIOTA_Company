---
name: run-operating-review
description: Use for Company operating reviews, review rhythm, roadmap cadence checks, dependency-map refreshes, and Programs/Operations governance reviews.
---
# Run Operating Review

## Trigger Phrases
- "operating review"
- "review rhythm"
- "weekly review"
- "monthly review"
- "cadence check"
- "dependency map"
- "program review"
- "Programs/Operations review"
- "roadmap cadence"

## Required Memory Files
- `memory/01-agent-purpose.md`
- `memory/02-company-safety-rules.md`
- `memory/03-strategy-and-governance.md`
- `memory/04-roadmap-and-priorities.md`
- `memory/05-cross-domain-relationships.md`
- `memory/05-database-access.md`
- `memory/06-source-of-truth-rules.md`
- `memory/07-recurring-decisions.md`

## Required Docs Or Reference Files
- Company report when manager-facing strategy state, priorities, risks, planning gaps, or dependencies matter.
- `skills/review-roadmap-implications/reference/strategic-roadmap.md` when roadmap contents or quarterly objectives are in scope.
- Relevant skill references when a named program is under review.
- Supabase/App Planner reads only when current structured project/task status, blockers, scheduling, or completion state matters.

## Workflow
1. Define the review horizon, program, or operating question.
2. Separate current state, approved plans, proposed changes, and aspirational roadmap.
3. Identify affected domains: Research, Hardware, Content, Brand, Growth, Financials, Web, App, Raw Footage, and Brain.
4. Refresh the dependency map: upstream inputs, downstream owners, blockers, handoff surfaces, approval gates, and next review point.
5. Review roadmap cadence: confirmed milestones, active planning gaps, quarterly objective readiness, and unresolved feasibility inputs.
6. Review Programs/Operations governance: lifecycle state, decision boundary, owner, lead, dependency map, blockers, durable source of truth, review cadence, closeout status, and whether the work belongs to Company, a domain, Brain, App, or Planner.
7. If current task/project state matters, read Planner records under `work_domains.key = company_ops` / `domain_id = 1`; do not write live records without explicit approval.
8. Identify whether Company reports, domain reports, domain repos, Company memory, Brain archive/retirement notes, or structured records need follow-up.
9. Label any recommended next steps as proposed unless Josue explicitly approves them.

## Expected Output
- Review horizon and scope.
- Current/planned/proposed/aspirational separation.
- Dependency map with downstream owners and blockers.
- Roadmap cadence and next review point.
- Programs/Operations governance notes, including lifecycle state, owner/lead, dependencies, blockers, and closeout needs.
- Company report, domain, App, Planner, Brain archive/retirement, or structured-record implications.
- Proposed next actions and approval needs.

## Write And Approval Rules
- Do not write to Supabase or Planner unless explicitly asked.
- Do not create, edit, complete, schedule, archive, or relink Planner records without explicit approval.
- Do not change App runtime behavior, schema, or UI unless explicitly scoped as App work.
- Do not update Company reports unless manager-facing state changed and the user has not deferred it. Do not update historical Brain briefs unless explicitly scoped as archive/retirement work.
- Ask before editing memory unless the user explicitly scoped the edit.
- Follow `MINIBIOTA_WRITE_MODE`.

## Do-Not-Do Boundaries
- Do not turn review rhythm into a roadmap commitment.
- Do not invent quarterly objectives, launch targets, public promises, financial commitments, sponsor obligations, or legal decisions.
- Do not replace domain implementation ownership.
- Do not use Planner workflow state as proof of roadmap approval.
