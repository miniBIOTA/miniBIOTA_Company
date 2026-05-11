---
title: Recurring Decisions
last_updated: 2026-05-11
---
# Recurring Decisions

## Active Decisions
- Codex is the primary operating interface for `miniBIOTA_Company`.
- Claude-specific guidance is legacy reference unless Josue explicitly reactivates it.
- The Company Agent architecture is moving toward `AGENTS.md`, `memory/`, `skills/`, `skills/*/reference/`, and `archive/`.
- `docs/agent_protocol.md` was absorbed into active architecture during Phase 2 Batch 1 and archived at `archive/superseded/agent_protocol.md`.
- `docs/company_operations_overview.md` was absorbed into active memory and skills during Phase 2 Batch 2 and archived at `archive/superseded/company_operations_overview.md`.
- `docs/ai_operating_interface_guide.md` was absorbed into active memory and skills during Phase 2 Batch 3 and archived at `archive/superseded/ai_operating_interface_guide.md`.
- `docs/strategic_roadmap.md` was moved into `skills/review-roadmap-implications/reference/strategic-roadmap.md` during Phase 2 Batch 4 and archived at `archive/superseded/strategic_roadmap.md`.
- No active Company docs remain after Phase 2 Batch 4.
- Company report updates are for manager-facing state changes, not every working note.
- Company planning must identify downstream domains when decisions affect Research, Hardware, Content, Brand, Growth, Financials, Web, App, Raw Footage, or Brain.
- Commit/push is not a hard closeout rule. Brain docs sync no longer mirrors Company docs; active Company context lives in this repo memory/skills architecture, and git publication should remain user-directed.
- No executive persona framing is used for Company memory or planning.
- App Planner/Supabase is the live Company work queue when current Company project/task status matters.
- Company is the active cross-domain operating coordination owner for planning strategy, Programs/Operations governance, roadmap cadence, dependency mapping, cross-domain operating memory, review rhythm, and active repo/domain routing through `_system/agent_repo_registry.md`.
- Brain keeps history/recovery context, retired brief/export archive, and retirement provenance during probation.
- App owns Planner runtime behavior, schema, UI, and Supabase-backed workflow implementation.
- Company Planner records live under `work_domains.key = company_ops` / `domain_id = 1`.
- Current Company Planner projects are `Business Plan & Operating Model`, `Roadmap & Quarterly Objectives`, `AI & Knowledge Infrastructure`, and `Operation Living Atlas Coordination`.
- Planner `work_projects` and `tasks` are the structured source for Company task/project state when current operating status matters; do not recreate task truth in Markdown.
- Planner project/task writes are live Supabase writes and require explicit approval.
- Company Planner coordination does not replace domain-owned implementation queues.
- When Josue refers to "my calendar" in Company planning sessions, interpret it as the calendar view inside the miniBIOTA App Planner tab unless he specifies an external calendar.
- Daily scheduling should combine strategic priority judgment with realistic capacity planning. The Company Agent should protect the day from overloading by choosing a small number of meaningful work blocks, preserving buffer time, and naming why each task fits the current company priorities.
- Scheduling a task onto the Planner calendar is a live Planner/Supabase write. Read current Planner state when task fit, duplication, or domain ownership matters; ask for explicit approval before creating or scheduling tasks unless Josue has already clearly approved that exact scheduling action.
- Roadmap cadence and operating review rhythm are Company-owned coordination functions; they do not create roadmap commitments, launch targets, or public promises without explicit approval.
- Dependency maps are Company operating memory and should identify affected domains, downstream owners, blockers, handoff surfaces, and review timing.
- Cross-interface and cross-agent handoffs must use durable files, briefs, or structured records as the handoff surface. Chat history alone is not enough.
- Sparse roadmap placeholders are not commitments. Roadmap commitments require explicit approval.

## Recurring Constraints
- Do not create business commitments, public promises, financial commitments, launch targets, legal decisions, sponsor obligations, or roadmap commitments without explicit user direction.
- Do not write to Supabase or structured records unless explicitly scoped.
- Do not create, edit, complete, archive, delete, schedule, or relink Planner projects/tasks unless explicitly approved.
- Do not change app behavior or public site behavior unless explicitly scoped.
- Keep current, planned, proposed, and aspirational states separate.

## Candidate Future Decisions
Use `memory/inbox.md` for candidate durable decisions that need review before becoming active memory.
