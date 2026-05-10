---
name: process-new-knowledge
description: Use when new information, decisions, corrections, migration facts, domain updates, or source-of-truth changes need to be routed into durable Company, domain, Brain transition, or structured-record memory.
---
# Process New Knowledge

## Trigger Phrases

- "remember this"
- "make this durable"
- "new rule"
- "new decision"
- "correction"
- "update the source of truth"
- "where should this go"
- "new context"
- "migration note"
- "handoff"

## Required Memory Files

- `COMPANY_AGENT_PROTOCOL.md`
- `memory/00-index.md`
- `memory/06-source-of-truth-rules.md`
- `memory/08-agent-operating-architecture.md`
- `memory/09-source-of-truth-and-routing.md`
- `memory/10-cross-domain-operating-model.md`
- `memory/07-recurring-decisions.md`
- `memory/inbox.md`
- `_system/agent_repo_registry.md` when the new knowledge affects routing, reporting paths, risk levels, or database ownership

## Workflow

1. Identify the new information.
2. Classify it as fact, decision, operating rule, correction, task, observation, domain state, migration dependency, public claim, commitment, or unresolved question.
3. Verify it against durable sources when it came from chat history or memory alone.
4. Read `_system/agent_repo_registry.md` when the item affects repo ownership, reporting paths, risk levels, domain routing, or database responsibility.
5. Choose the destination:
   - Company `AGENTS.md` for hard Company rules.
   - `COMPANY_AGENT_PROTOCOL.md` for Company-wide operating protocol.
   - Company `memory/` for durable coordination, source routing, governance, cadence, dependencies, and recurring decisions.
   - Company `skills/` for repeatable workflows.
   - Domain repo memory/skills/records for domain implementation truth.
   - Brain transition docs for Brain retirement dependencies and migration status.
   - Supabase/App Planner for structured/queryable operational records, with explicit approval before writes.
   - `memory/inbox.md` for unresolved or unapproved candidates.
6. Check for duplicate or conflicting memory.
7. Preserve current, planned, proposed, aspirational, and historical distinctions.
8. Ask for approval before writes when required by write mode or record type.
9. Write the smallest durable update that makes the next session safer.
10. Read changed files end to end.
11. Report any downstream domain, Brain, App, or structured-record implications.

## Task Routing

Tasks live in App Planner/Supabase, not Markdown task lists, when they are actionable operating work. Propose Planner writes when needed, but do not create or update them without explicit approval.

## Commitment Routing

Do not store public promises, business commitments, launch targets, financial commitments, legal decisions, sponsor obligations, or roadmap commitments as approved facts unless Josue explicitly approved that exact commitment.

## Expected Output

- Classification.
- Destination decision.
- Files or records changed/proposed.
- Conflicts or duplicates found.
- Approval gates.
- Downstream implications.
- Unresolved questions.

## Do-Not-Do Boundaries

- Do not leave durable state only in chat history.
- Do not duplicate domain implementation details into Company memory.
- Do not write live records without approval.
- Do not use Brain as the destination for new active cross-domain operating memory unless the migration phase specifically requires a Brain transition note.
