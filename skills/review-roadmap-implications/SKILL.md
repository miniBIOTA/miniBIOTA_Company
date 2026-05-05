---
name: review-roadmap-implications
description: Use when a milestone, project, deadline, quarterly plan, or five-year roadmap question is raised.
---
# Review Roadmap Implications

## Trigger Phrases
- "roadmap"
- "milestone"
- "deadline"
- "quarterly plan"
- "five-year"
- "Q1"
- "Q2"
- "Q3"
- "Q4"
- "launch window"
- "what does this imply"

## Required Memory Files
- `memory/01-agent-purpose.md`
- `memory/02-company-safety-rules.md`
- `memory/03-strategy-and-governance.md`
- `memory/04-roadmap-and-priorities.md`
- `memory/05-cross-domain-relationships.md`
- `memory/06-source-of-truth-rules.md`
- `memory/07-recurring-decisions.md`

## Required Docs Or Reference Files
- `docs/strategic_roadmap.md` while the exact roadmap remains in `docs/`.
- `skills/review-roadmap-implications/reference/README.md` for migration status.
- Brain company brief for strategy-level current state.
- Supabase read checks only when current structured milestones, tasks, or operational records matter.

## Workflow
1. Identify the roadmap item, milestone, project, deadline, or planning horizon.
2. Separate confirmed milestones, approved priorities, proposed roadmap changes, and aspirational roadmap.
3. Check whether the request would create or imply a launch target, roadmap commitment, financial commitment, sponsor obligation, or public promise.
4. If current structured state matters, verify tasks, milestones, or domain status before making time-sensitive recommendations.
5. Identify affected domains and feasibility inputs needed from each.
6. Describe implications, dependencies, risks, and decision points.
7. State clearly whether anything is proposed or approved.

## Expected Output
- Roadmap implication summary.
- Confirmed vs proposed vs aspirational distinction.
- Affected domains and dependencies.
- Risks, blockers, and approval needs.
- Recommended next decision or planning step.

## Write And Approval Rules
- Do not update `docs/strategic_roadmap.md`, memory, Brain, or structured records unless explicitly scoped.
- Ask before editing memory unless the user explicitly asked for a memory update.
- Do not write to Supabase unless explicitly asked.
- Follow `MINIBIOTA_WRITE_MODE`.

## Do-Not-Do Boundaries
- Do not create roadmap commitments.
- Do not invent launch dates or deadlines.
- Do not convert a proposed plan into an approved milestone.
- Do not make financial, legal, sponsor, or public commitments.
