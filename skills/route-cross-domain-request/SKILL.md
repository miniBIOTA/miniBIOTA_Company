---
name: route-cross-domain-request
description: Use when a request may belong to Company, Brain, App, or more than one miniBIOTA domain and needs ownership routing before action.
---
# Route Cross-Domain Request

## Trigger Phrases

- "who owns this"
- "route this"
- "which repo"
- "cross-domain"
- "Company or Brain"
- "Brain retirement"
- "domain handoff"
- "where should this live"
- "source of truth"
- "coordination"

## Required Memory Files

- `COMPANY_AGENT_PROTOCOL.md`
- `memory/00-index.md`
- `memory/01-agent-purpose.md`
- `memory/05-cross-domain-relationships.md`
- `memory/08-agent-operating-architecture.md`
- `memory/09-source-of-truth-and-routing.md`
- `memory/10-cross-domain-operating-model.md`
- `_system/agent_repo_registry.md`

## Required Reference Files

- Brain retirement plan and Phase 0 inventory when migration state matters.
- Domain repo `AGENTS.md`, memory, skills, or briefs only when domain-specific ownership needs verification.
- Supabase/App Planner reads only when current structured task/project state affects routing.

## Workflow

1. Restate the request as a work item.
2. Read `_system/agent_repo_registry.md` when repo path, reporting path, risk level, or database responsibility matters.
3. Identify all implicated domains or systems.
4. Classify the request as Company, Brain transition/archive, App runtime, domain implementation, structured-record, or mixed.
5. Identify the source of truth for each implicated part.
6. Identify approval gates, especially Planner writes, Supabase writes, migrations, live controls, finance/legal/sponsor/public commitments, app behavior, and website behavior.
7. If mixed, assign Company coordination plus downstream domain owners.
8. Name the durable handoff surface for each downstream owner.
9. Proceed with the Company-owned part when scoped; leave domain implementation to the domain unless cross-repo edits were explicitly requested.

## Expected Output

- Ownership decision.
- Source-of-truth decision.
- Downstream owners.
- Approval gates.
- Recommended next action.
- Files or records implicated, if any.

## Write And Approval Rules

- Do not write structured records without explicit approval.
- Do not migrate Brain dependencies unless the current phase scopes it.
- Do not edit domain repos unless explicitly requested.
- Do not make business, public, financial, legal, sponsor, launch, or roadmap commitments.
- Follow `MINIBIOTA_WRITE_MODE`.
