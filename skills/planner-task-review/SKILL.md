---
name: planner-task-review
description: Use during Company closeout or planning when completed work or follow-up work may map to App Planner/Supabase tasks.
---
# Planner Task Review

## Trigger Phrases
- "task review"
- "calendar"
- "schedule my day"
- "put that on my calendar"
- "plan today"
- "what tasks changed"
- "mark done"
- "follow-up task"
- "Planner"
- "open tasks"
- "what remains"

## Required Memory Files
- `memory/05-database-access.md`
- `_system/database_awareness.md`
- `_system/agent_repo_registry.md` when domain ownership or task domain routing matters

## Workflow
1. Identify domains touched by the session.
2. Decide whether current task/project state matters. If not, do not query Planner just for ceremony.
3. Use MCP/read-only awareness or approved helper reads to inspect relevant App Planner/Supabase records.
4. Compare open tasks against work completed or follow-up work surfaced in the session.
5. Ask before marking tasks done, reopening tasks, changing workflow status, linking projects, scheduling, archiving, or creating new tasks.
6. If an approved write happens, read back the changed record.
7. Report task implications separately from Markdown/doc changes.

## Daily Planner Calendar Scheduling
- When Josue says "my calendar" during Company planning, assume he means the miniBIOTA App Planner calendar unless he names Google Calendar, Outlook, or another external calendar.
- Treat day planning as strategic prioritization, not just time blocking. Recommend a realistic set of work blocks based on current Company priorities, domain ownership, task status, known blockers, and the cognitive load of creative, technical, and operational work.
- Prefer scheduling existing Planner tasks when they match the planned work. Create a new task only when no suitable task exists and Josue has approved the live Planner write.
- For cross-domain days, use the correct domain/project for each task instead of forcing everything into Company Ops. Company may coordinate the day, but Content, Web, Hardware, App, and other domain tasks should remain in their owning Planner domains.
- Leave buffer when the day contains production work, website/app implementation, telemetry, live-system work, or decision review. Do not fill every open slot just because Planner can hold it.
- Read back scheduled tasks after any approved scheduling write and summarize the calendar entries by date, time, task, domain, and task id.

## Canonical Task Store
Tasks live in App Planner/Supabase, not Markdown task lists. Markdown may preserve strategy, context, decisions, and operating rules; it must not compete with Planner as task status truth.

## Do-Not-Do Boundaries
- Do not mark tasks done without explicit approval.
- Do not insert speculative tasks without approval.
- Do not infer current task status from memory when current records matter.
- Do not use Planner workflow state as approval for roadmap, public, financial, legal, sponsor, or launch commitments.
- Do not treat external-calendar language as Google/Outlook by default when the session is clearly about the miniBIOTA Planner.
