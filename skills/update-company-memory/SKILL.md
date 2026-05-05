---
name: update-company-memory
description: Use to promote durable company decisions, governance rules, strategy rules, or recurring constraints into memory.
---
# Update Company Memory

## Trigger Phrases
- "update memory"
- "make this durable"
- "remember this in the repo"
- "add this to company memory"
- "promote this decision"
- "save this operating rule"
- "this should be a recurring decision"

## Required Memory Files
- `memory/00-index.md`
- `memory/01-agent-purpose.md`
- `memory/02-company-safety-rules.md`
- `memory/03-strategy-and-governance.md`
- `memory/04-roadmap-and-priorities.md`
- `memory/05-cross-domain-relationships.md`
- `memory/06-source-of-truth-rules.md`
- `memory/07-recurring-decisions.md`
- `memory/inbox.md`

## Required Docs Or Reference Files
- Relevant `docs/` files only when checking whether old migration material already contains the rule.
- Brain company brief if the memory change affects manager-facing strategy state.

## Workflow
1. Identify the proposed durable fact, rule, decision, or constraint.
2. If the input came from chat history or another interface, verify it against durable files, the Brain company brief, domain briefs, or structured records before treating it as source truth.
3. Check existing memory for duplication or conflict.
4. Decide the correct destination: `AGENTS.md`, a `memory/*.md` file, a skill, skill reference, Brain company brief, Supabase, or `memory/inbox.md`.
5. Check whether the candidate belongs in active memory or should remain in `memory/inbox.md` as unapproved or unresolved.
6. Ask before editing memory unless the user explicitly scoped the edit.
7. Write the smallest durable update that preserves current/planned/proposed/aspirational distinctions.
8. Read changed files end to end.
9. Report whether Brain brief, domain owners, or structured records are implicated.

## Expected Output
- Destination decision.
- Files changed or proposed.
- Duplication/conflict check result.
- Brain, domain, or structured-record implications.
- Any unresolved questions.

## Write And Approval Rules
- Must check duplication before writing memory.
- Ask before editing memory unless explicitly scoped by the user.
- Do not write to Supabase or structured records unless explicitly asked.
- Do not update Brain mirrored docs.
- Follow `MINIBIOTA_WRITE_MODE`.

## Do-Not-Do Boundaries
- Do not store unapproved commitments as approved facts.
- Do not duplicate rules across many memory files without a clear reason.
- Do not turn chat-only ideas into durable company truth without scope or approval.
- Do not archive or delete legacy docs unless a migration phase explicitly asks for it.
