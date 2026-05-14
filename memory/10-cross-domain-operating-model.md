---
title: Cross-Domain Operating Model
last_updated: 2026-05-14
---
# Cross-Domain Operating Model

## Purpose

This file defines how Company coordinates work across miniBIOTA domains without replacing domain ownership.

It is the Company-side replacement direction for Brain's former active cross-domain coordination role.

## Operating Units

### Program Or Operation

A Program or Operation is a cross-domain umbrella with a company-level goal, decision boundary, review rhythm, dependency map, and participating domain projects.

Company owns the governance meaning, approval posture, dependency interpretation, review cadence, and closeout semantics. App owns the Planner runtime that stores and displays the records. Domain repos own the linked implementation projects.

Programs/Operations should exist only when coordination across domains matters. Do not use them as decorative tags for unrelated projects.

### Project

A Project is a domain-owned execution unit. It may participate in one or more Programs/Operations, but its implementation source of truth remains in its domain repo and domain-owned records.

A project owner is the domain or agent accountable for execution. A project lead is the person or agent coordinating day-to-day movement. In solo sessions these may be the same, but docs should keep the distinction visible when cross-domain work depends on handoffs.

Project dates can carry start, deadline, or milestone context, but they should not be used merely to force daily calendar visibility. For cross-domain prep programs, keep the project as the domain-owned container and use scheduled tasks or subtasks for actual day-by-day work.

If a project is complete or is only an umbrella/container but still appears in a daily Planner lane because `work_projects.start_date` is set, treat that as calendar-noise cleanup. With approval, clear the project-level `start_date` and preserve the true project status. Do not mark an active container project done while it still has an intentional open gate task.

### Task

A Task is a concrete unit of work. Task status lives in App Planner/Supabase when structured tracking matters. Markdown can explain context, but should not compete with task status.

Parent tasks may be useful as deliverable containers, but the daily Planner calendar should be driven by scheduled child tasks when those children exist. In Week/Month views, parent containers with scheduled children should appear only on dates with child work and should emphasize the child task title first, with the parent title as context.

### Domain Agent Project Manager Pattern

Each active domain agent may operate as the project manager for work inside its own Planner domain once Josue explicitly grants standing project-management delegation for that domain or for all active domains.

Domain project-manager authority means the agent may propose, create, update, schedule, complete, reopen, archive, and reorganize ordinary `work_projects` and `tasks` that belong to its own `work_domains` record, using the approved shared Planner/Supabase write path. The agent does not need its own Supabase key. The technical credential should remain in an App-owned, MCP-owned, local-helper, OAuth, or ignored-environment path; the record's `domain_id`, owner/lead fields, project links, and task metadata identify the work owner.

This delegation does not authorize cross-domain writes, Programs/Operations writes, schema changes, migrations, service-role/admin actions, destructive writes, public website behavior changes, app runtime behavior changes, firmware/live-control changes, financial record writes, content publish closeout writes, CRM/sponsor commitment writes, or any public, sponsor, partner, legal, financial, launch, campaign, pricing, or roadmap commitment. Those remain approval-gated by their normal owner and source of truth.

Until standing delegation is explicitly granted, existing repo rules remain in force: Planner writes are live Supabase writes and require explicit approval unless the user requested the exact write in the current session.

When delegation is granted, each domain agent should still state intended Planner changes before writing, read back changed records after writes, keep changes scoped to its own domain, and report changed Planner records at closeout. If a task or project belongs to another domain, the agent should hand it off instead of editing it directly.

### Dependency

A dependency is an input or decision one owner needs before another owner can safely continue. Dependencies should name the upstream owner, downstream owner, needed input, and durable handoff surface.

### Blocker

A blocker is a dependency, approval gate, missing source, missing runtime capability, or live-system constraint that prevents safe progress. Blockers should be reviewed during Company operating reviews and either resolved, assigned, deferred, or explicitly accepted.

### Closeout

A Program/Operation closeout confirms what changed, which domain reports or records need updates, what remains open, whether Planner records need approved writes, and whether any Brain transition dependency still exists.

## Coordination Workflow

For cross-domain work:

1. Define the company-level objective.
2. Decide whether the work needs a Program/Operation, or whether an ordinary domain project is enough.
3. Identify affected domains.
4. Name the upstream inputs each domain depends on.
5. Name downstream owners and what they need next.
6. Identify blockers, approval gates, and sequencing constraints.
7. Choose durable handoff surfaces.
8. Check `_system/agent_repo_registry.md` for repo path, reporting-path transition state, risk level, and database ownership when routing matters.
9. Decide whether Planner records need reads or approved writes.
10. When planning a calendarized program, separate umbrella, project container, parent deliverable, and scheduled work-block records before writing Planner records.
11. Set the review rhythm or next check point.
12. Record durable coordination rules in Company memory when they become recurring truth.

## Program Lifecycle

Use this lifecycle for future cross-domain Programs/Operations:

1. Proposed: Company records the objective, affected domains, likely owner/lead, risks, and why ordinary project routing is not enough.
2. Approved: Josue explicitly approves the Program/Operation direction, or an existing approved operation is being continued. Approval of docs does not imply approval for live Planner writes.
3. Created: Planner `work_programs` and `work_program_projects` records may be created only after explicit approval for those live Supabase writes.
4. Reviewed: Company checks dependencies, blockers, participating projects, owner/lead fit, and next review point on a recurring cadence.
5. Closed: Company records outcomes, unresolved follow-ups, domain report implications, and whether linked Planner records need approved status/archive changes.

Operation Living Atlas is a Company-governed Program/Operation with Research, Content, Web, App, and Company participation. Research owns ecological interpretation; Content owns story/source production; Web owns public presentation; App owns Planner/runtime support; Company owns coordination, dependency interpretation, and review cadence.

Operation Living Web is a Company-governed Program/Operation with Web, Brand, Content, Research, App, Growth, and Company participation. Web owns implementation and public route/runtime behavior; Brand owns public language fit; Content and Research own public-safe source material and claim discipline; App owns internal admin/data tooling; Growth owns partner/sponsor implications; Company owns coordination, sequencing, and review cadence.

A recurring Company operating review is part of the documented cadence. It can be represented as a Company Planner project/task only after explicit approval for the live Planner write; until then, the durable rule lives in Company memory and `skills/run-operating-review/SKILL.md`.

## Downstream Owner Rule

Company may decide who should own the next step. The downstream owner owns implementation detail unless Josue explicitly scopes Company to make a cross-repo change.

Each handoff should name:

- Domain owner.
- Reason the domain is implicated.
- Input needed.
- Output expected.
- Durable handoff surface.
- Approval needed, if any.

## Approval Gates

Explicit user approval is required before Company treats any of these as approved:

- Business commitments.
- Public promises.
- Financial commitments.
- Legal decisions.
- Sponsor obligations.
- Launch targets.
- Roadmap commitments.
- Supabase writes outside an approved scoped helper or standing delegation.
- Planner writes outside explicit current-session approval or standing domain project-manager delegation.
- Schema changes or migrations.
- App behavior changes.
- Website behavior changes.
- Firmware, telemetry producer, or live-control changes.

## Review Rhythm

Company operating reviews should check:

- Active Programs/Operations.
- Cross-domain blockers.
- Dependency map freshness.
- Roadmap cadence and quarter-objective gaps.
- Whether domain reports are current.
- Whether Planner records match documented ownership.
- Whether any Brain dependency remains active because a Company replacement is missing.

## Brain Retirement Probation Model

During Phase 11 probation, Company should operate without Brain as the active coordination repo.

- Treat Brain as archive/recovery context and retirement provenance.
- Use the Phase 11 probation tracker to record attempted Brain usage.
- Classify attempted Brain usage as historical lookup, explicit transition maintenance, missing Company replacement, or old habit.
- Patch Company or domain replacements when a missing replacement or old-habit reference appears.
- Keep Brain searchable until Phase 12 chooses the physical retirement model.
- Do not delete, move, or physically lock Brain until Phase 12 approval and retirement-plan acceptance criteria pass.

## Normal Closeout Questions

At closeout, ask:

- Did this session change Company strategy, governance, dependencies, cadence, or source routing?
- Did it create a downstream need for a domain owner?
- Did it imply a Planner or Supabase write that still needs approval?
- Did it affect Brain transition state?
- Did it create a durable operating rule that belongs in memory?
