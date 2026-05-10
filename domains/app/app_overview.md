---
id: app_operations
title: 11. miniBIOTA_App
domain: app_operations
last_updated: 2026-05-09
tags: [app, electron, operations, planner, monitoring, internal-tools]
reporting_status: company_active
reporting_phase: phase_10_reporting_active
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\11. miniBIOTA_App\\app_overview.md"
copied_on: 2026-05-09
brain_transition_status: "Company reporting active; Brain source historical/archive lookup only."
---
# 11. miniBIOTA_App

> Phase 3 transition note: This Company report was originally copied from `M:\miniBIOTA\miniBIOTA_Brain\11. miniBIOTA_App\app_overview.md` on 2026-05-09. As of Phase 10, this Company path is the active reporting target; the Brain source is historical/archive lookup only.

## Scope
- Owns the internal Electron desktop app used for miniBIOTA operations.
- Provides operator workflows for Planner, financials, CRM, roadmap, team reference, Site Admin, media management, and monitoring.
- Remains an internal secret-key-capable tool, not a public product or public website surface.

## Current State
- `miniBIOTA_App` is the active desktop operator surface for miniBIOTA.
- Active tabs are Planner, Financials, CRM, Roadmap, Team, Site Admin, and Monitoring.
- Planner project-manager schema foundation is live after migration 007, and
  former top-level Weekly Checklist and Tasks behavior has been consolidated
  into Planner replacement surfaces.
- Planner Programs/Operations schema is live after migration 010, adding
  `work_programs` and `work_program_projects` as the cross-domain umbrella
  layer above domain-owned projects. First live Program records now exist for
  `Operation Living Atlas` (`work_programs.id = 1`) and `Operation Living Web`
  (`work_programs.id = 2`), with domain-owned projects linked through
  `work_program_projects`.
- App project management is now organized in App Planner/Supabase under the
  App domain: 7 App work projects track 16 linked App tasks, with 0 unlinked
  open App tasks after readback on 2026-05-09.
- Monitoring reads direct MQTT telemetry from the local biome network when connected to `mB2.4`.
- Site Admin supports species, biosphere, biome, chronicle, announcement, staging, and media-library workflows.
- Media Library/tagging, Species-style media search/filtering, and backend WebP image upload pipeline are implemented in the app.
- The app source repo now uses repo-local memory and skills as active detailed context: `AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`.
- Brain no longer keeps an App `docs/` mirror; use the source repo's memory/skills structure for detailed App Agent context.

## Key Facts
- The app uses Supabase publishable keys in renderer/browser-facing config and secret keys only in Electron main-process services or local admin tooling. Internal renderer REST helpers route through an Electron IPC bridge when secret-key access is needed, without exposing the secret key to browser code.
- Public website surfaces should remain read-only observability; operator/admin workflows belong in the desktop app.
- Planner is the main production workflow surface for story sources, project planning, scheduled content, and ordinary tasks.
- Planner is the intended unified project-management surface. The live schema
  now includes `work_domains`, `work_projects`, task project-management fields,
  an optional `content_calendar.work_project_id` bridge, and the
  `work_programs` / `work_program_projects` Programs layer.
- Programs/Operations are cross-domain umbrellas. Projects remain domain-owned
  execution units, tasks remain domain/project-owned, and Programs do not
  override domain source-of-truth or approval rules.
- App Agent wiring now treats App Planner/Supabase as the live App work queue:
  App sessions should read Planner projects/tasks when choosing work, and ask
  before marking completed Planner tasks done at closeout.
- Planner task UI has initial migration 007 support for live domains, project
  assignment, workflow status, blocked reason, completion timestamp, and
  multi-day task spans.
- Planner task UI supports parent-child task hierarchy through
  `tasks.parent_task_id`, with nested subtasks visible in Planner Tasks and work
  project detail panels.
- Planner has an initial Today task surface for scheduled/spanning, overdue,
  blocked, and active unscheduled work.
- Planner has an initial Tasks board grouped by workflow status with domain
  filtering and existing task edit/done actions.
- Planner has an initial general Projects view over `work_projects`, with
  domain filtering, create/edit/archive, and workflow status movement.
- Work project modals show linked tasks and content entries, with quick open
  actions and New Task preselection for the current project/domain.
- Planner content projects can be assigned to active general work projects
  through `content_calendar.work_project_id`, with linked project context shown
  in Planner board/calendar surfaces.
- Planner week/month calendar views show general work project date spans from
  `work_projects.start_date` through `target_date`.
- Planner Today includes initial weekly planning prompts that prefill recurring
  task candidates for longform selection, short-opportunity review, and Sunday
  close.
- Calendar entries use join-table links to story beats, story threads, open loops, and observations; legacy thread and loop array fields remain during transition.
- Renderer JavaScript and CSS were broadly refactored into feature-oriented modules and manifest-managed load order.
- Media Library search matches filename, description, notes, and tagged species
  by common name, scientific name, or alternate names; realm and biome chips
  combine with type, year, and unreviewed filters.

## Priorities
- Continue consolidating story-source execution and project-management behavior into the unified Planner workflow.
- Verify the first Planner Programs/Operations records in the App UI, then
  continue Planner Sources polish, beat closeout ergonomics, and recurring-task
  calendar integration.
- Keep secret-key access internal-only and avoid public exposure of app behavior.
- Verify packaged build behavior for Sharp/WebP image uploads when packaging resumes.
- Keep App memory and skill references current as architecture, schema assumptions, and safety rules change.
- Use App Planner/Supabase for live App task status; keep Markdown focused on
  context, operating rules, architecture notes, and playbooks.

## Risks / Gaps
- Supabase secret-key access would be a major security risk if exposed outside the internal app.
- Real admin image upload to Supabase Storage still needs careful live verification when that work resumes.
- Packaged build behavior with Sharp/native dependencies should be verified before relying on distributable builds.
- Monitoring setpoint/control writes affect the live biosphere and require explicit confirmation before changes.
- Supabase migrations and schema assumptions must be checked before app write paths are changed.
- New Planner task hierarchy paths need interactive smoke testing before they
  are treated as fully proven in daily use.
- Planner Programs/Operations schema and first Program records are live, but
  Program UI create/edit/link behavior still needs interactive smoke
  verification before daily reliance.

## Files In This Folder
- `app_brief.md` - active Company manager-facing report brief for App.
- `app_overview.md` - active Company overview for App Operations.

## Source Repo
- App source repo: `M:\miniBIOTA\miniBIOTA_App\`
- Active entry point: `M:\miniBIOTA\miniBIOTA_App\AGENTS.md`
- Memory index: `M:\miniBIOTA\miniBIOTA_App\memory\00-index.md`
- Active skills: `M:\miniBIOTA\miniBIOTA_App\skills\`
- `_system/sync_docs.ps1` keeps App docs mirroring disabled and removes any stale `11. miniBIOTA_App\docs` folder if it appears.

## Vault Sync Status
- Last verified: 2026-05-09
- Known divergences: no active App docs mirror remains in Brain.
- Next sync check: use App repo memory/skills directly when App detail is needed.
