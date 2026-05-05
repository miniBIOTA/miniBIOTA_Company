---
name: make-operating-decision
description: Use for company-level decisions, governance choices, sequencing decisions, and cross-domain operating judgments.
---
# Make Operating Decision

## Trigger Phrases
- "decide"
- "what should the company do"
- "operating decision"
- "governance choice"
- "sequencing decision"
- "company-level judgment"
- "which path should we take"

## Required Memory Files
- `memory/01-agent-purpose.md`
- `memory/02-company-safety-rules.md`
- `memory/03-strategy-and-governance.md`
- `memory/05-cross-domain-relationships.md`
- `memory/06-source-of-truth-rules.md`
- `memory/07-recurring-decisions.md`

## Required Docs Or Reference Files
- Brain company brief when the decision depends on strategy-level current state.
- Relevant `docs/` files only while migration-era exact reference remains there.
- Supabase read checks only if current structured tasks, milestones, domain history, or operational records matter.

## Workflow
1. Restate the decision being made and the scope of authority.
2. Separate current state, planned state, proposed options, and aspirational roadmap.
3. Identify affected domains and downstream owners.
4. Check whether the decision would imply a business commitment, public promise, financial commitment, launch target, legal decision, sponsor obligation, or roadmap commitment.
5. If the decision requires explicit approval, frame it as a recommendation or option until Josue approves it.
6. Provide the decision, rationale, assumptions, downstream next steps, and any unresolved risks.
7. Decide whether the result should update `memory/`, Brain company brief, domain follow-up notes, or structured records.

## Expected Output
- Decision or recommendation.
- Current/planned/proposed/aspirational separation.
- Affected domains and downstream owners.
- Risks, assumptions, and approval needs.
- Memory, Brain, domain, or structured-record implications.

## Write And Approval Rules
- Ask before editing memory unless the user explicitly scoped the edit.
- Do not update Brain company brief unless manager-facing state changed and the user has not deferred it.
- Do not write to Supabase or structured records unless explicitly asked.
- Follow `MINIBIOTA_WRITE_MODE`.

## Do-Not-Do Boundaries
- Do not invent commitments.
- Do not make public promises.
- Do not create financial, legal, sponsor, launch, or roadmap obligations without explicit user direction.
- Do not replace domain source-of-truth implementation details.
- Do not blur current state with aspiration.
