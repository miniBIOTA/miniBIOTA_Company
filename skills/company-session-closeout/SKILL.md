---
name: company-session-closeout
description: Use to close company planning sessions and verify Brain, domain-owner, and structured-record implications.
---
# Company Session Closeout

## Trigger Phrases
- "close out"
- "session closeout"
- "wrap up"
- "finish the session"
- "what changed"
- "final report"

## Required Memory Files
- `memory/00-index.md`
- `memory/01-agent-purpose.md`
- `memory/02-company-safety-rules.md`
- `memory/05-cross-domain-relationships.md`
- `memory/06-source-of-truth-rules.md`
- `memory/07-recurring-decisions.md`

## Required Docs Or Reference Files
- Brain company brief when deciding whether manager-facing strategy state changed.
- Relevant docs, memory, or skills that changed during the session.
- Supabase read checks only if structured tasks, milestones, durable memory, or operational records were implicated.

## Workflow
1. Identify every file changed in the session.
2. Read every new or changed doc end to end.
3. Decide whether Brain company brief needs an update.
4. Decide whether company-level priorities, risks, planning gaps, roadmap gaps, roadmap commitments, business-planning gaps, governance, or cross-domain sequencing changed.
5. Decide whether any domain owner needs follow-up, including whether any department brief, source docs, or work queue was affected.
6. Decide whether structured tasks, milestones, durable memory, or operational records are implicated.
7. If structured tasks, durable memory, milestones, or operational records changed, summarize those changes clearly.
8. Confirm durable conclusions are in the appropriate source or explicitly listed as unresolved; do not leave durable state only in chat history.
9. If local docs changed and manager-facing strategy state changed, update or flag the Brain company brief. Brain docs mirrors are retired for Company and should not be synced or recreated.
10. Commit and push only when the user asks or the work unit is explicitly scoped for git publication.
11. Run `git diff --name-only` or equivalent.
12. Run `git status --short --branch`.
13. Confirm no Supabase records, structured records, app behavior, public site behavior, retired Brain docs mirrors, test data, or unapproved commitments changed.
14. Provide the standard closeout report.

## Expected Output
```markdown
Changed files:
- path

Verification:
- command or read-through performed

Not changed:
- app behavior/database/public site/etc. as relevant

Unresolved questions:
- item or "None"
```

## Write And Approval Rules
- Update Brain company brief only when manager-facing strategy state changed and the user has not deferred it.
- Treat approved roadmap changes as manager-facing strategy state changes unless Josue explicitly defers Brain brief updates.
- Do not write to Supabase or structured records unless explicitly asked.
- Do not sync, edit, or recreate retired Brain docs mirrors.
- Do not commit or push unless explicitly scoped.
- Follow `MINIBIOTA_WRITE_MODE`.

## Do-Not-Do Boundaries
- Do not close without reading changed docs end to end.
- Do not omit verification commands.
- Do not claim structured records changed when they did not.
- Do not create business commitments, public promises, financial commitments, launch targets, legal decisions, sponsor obligations, or roadmap commitments in the closeout.
