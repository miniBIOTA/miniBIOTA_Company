---
name: company-session-closeout
description: Use to close company planning sessions and verify Company report, Brain archive, domain-owner, dependency-map, review-rhythm, and structured-record implications.
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
- Company report under `domains/company/company_brief.md` when deciding whether manager-facing strategy state changed.
- Relevant docs, memory, domain reports, or skills that changed during the session.
- Company domain reports under `domains/` when manager-facing domain state or reporting paths changed.
- Company export files under `0. Agent Exports/` when broad context or executive synthesis changed.
- Supabase/App Planner read checks only if structured projects/tasks, milestones, durable memory, or operational records were implicated.

## Workflow
1. Identify every file changed in the session.
2. Read every new or changed doc end to end.
3. Decide whether the Company report needs an update.
4. Decide whether company-level priorities, risks, planning gaps, roadmap gaps, roadmap commitments, business-planning gaps, governance, or cross-domain sequencing changed.
5. Decide whether the dependency map, Programs/Operations governance, roadmap cadence, or operating review rhythm changed.
6. Decide whether any domain owner needs follow-up, including whether any department brief, source docs, or work queue was affected.
7. Decide whether structured projects/tasks, milestones, durable memory, or operational records are implicated.
8. Run `skills/planner-task-review/SKILL.md` when completed work or surfaced follow-up may map to App Planner/Supabase tasks.
9. Run `skills/route-chronicle-candidate/SKILL.md` when the session produced a possible public chronicle candidate.
10. If work completed in the session maps clearly to an open Company Planner task, ask whether to mark it done unless the user explicitly approved that live Planner update.
11. If structured projects/tasks, durable memory, milestones, or operational records changed, summarize those changes clearly.
12. Confirm durable conclusions are in the appropriate source or explicitly listed as unresolved; do not leave durable state only in chat history.
13. If local docs changed and manager-facing strategy state changed, update or flag the Company report. Historical Brain briefs are archive/provenance only and should not be edited unless explicitly scoped.
14. If `domains/` reports changed, rebuild Company exports with `powershell -ExecutionPolicy Bypass -File "0. Agent Exports\build_company_exports.ps1"`.
15. Commit and push only when the user asks or the work unit is explicitly scoped for git publication.
16. Run `git diff --name-only` or equivalent.
17. Run `git status --short --branch`.
18. Confirm no Supabase records, structured records, app behavior, public site behavior, retired Brain docs mirrors, test data, or unapproved commitments changed.
19. Provide the standard closeout report.

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
- Update the Company report only when manager-facing strategy state changed and the user has not deferred it.
- Treat approved roadmap changes as manager-facing strategy state changes unless Josue explicitly defers Company report updates.
- Do not write to Supabase or structured records unless explicitly asked.
- Planner project/task create, edit, status, done/reopen, archive, delete, project-link, subtask, schedule, or recurrence changes are live Supabase writes and require explicit user approval.
- Do not sync, edit, or recreate retired Brain docs mirrors.
- Do not commit or push unless explicitly scoped.
- Follow `MINIBIOTA_WRITE_MODE`.

## Do-Not-Do Boundaries
- Do not close without reading changed docs end to end.
- Do not omit verification commands.
- Do not claim structured records changed when they did not.
- Do not create business commitments, public promises, financial commitments, launch targets, legal decisions, sponsor obligations, or roadmap commitments in the closeout.
