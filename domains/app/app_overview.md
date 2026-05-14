---
id: app_operations
title: 11. miniBIOTA_App
domain: app_operations
last_updated: 2026-05-14
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
- Provides operator workflows for Planner, financials, CRM, roadmap, Prompt Library, Site Admin, media management, and monitoring.
- Remains an internal secret-key-capable tool, not a public product or public website surface.

## Current State
- CRM relationship-system migration 013 is live after user-applied Supabase SQL on 2026-05-12. It added 33 additive tables beside the legacy CRM tables, with read-only verification showing all new tables empty and legacy counts unchanged. The CRM tab now includes a read-only Relationship view for schema/table counts and review queues through the internal main-process secret-key bridge. Migration 014 is live as of 2026-05-13, adding flexible labeled `crm_contact_links` rows for legacy CRM contact websites/social/reference links.
- `miniBIOTA_App` is the active desktop operator surface for miniBIOTA.
- Active tabs are Planner, Financials, CRM, Roadmap, Prompt Library, Site Admin, and Monitoring.
- Planner project-manager schema foundation is live after migration 007, and
  former top-level Weekly Checklist and Tasks behavior has been consolidated
  into Planner replacement surfaces.
- Planner Programs/Operations schema is live after migration 010, adding
  `work_programs` and `work_program_projects` as the cross-domain umbrella
  layer above domain-owned projects. Live Program records now include
  `Operation Living Atlas` (`work_programs.id = 1`), `Operation Living Web`
  (`work_programs.id = 2`), and `Aquatic Club Talk Readiness`
  (`work_programs.id = 3`), with domain-owned projects linked through
  `work_program_projects`.
- App project management is now organized in App Planner/Supabase under the
  App domain. After the 2026-05-12 cross-domain cleanup and the 2026-05-14
  Operation Living Intelligence visual-media task addition and the App Quality System closeout, App has 12 total work projects, 11 non-archived projects, and 104 task rows (23 open, 81 done). The newest App-owned project is `App Quality System Roadmap` (`work_projects.id = 82`), created on 2026-05-14 with 10 phase parent tasks and 62 child subtasks; its initial rollout is complete, with only task `473` open for broader write-plan expansion.
- Monitoring reads direct MQTT telemetry from the local biome network when connected to `mB2.4`, including internal-only heat-exchanger/liquid temperature (`liq_t`) and pump run percentage (`pump_pct`) display for sensor biomes 2-5.
- Site Admin supports species, biosphere, biome, chronicle, announcement, staging, and media-library workflows.
- Media Library/tagging, Species-style media search/filtering, and backend WebP image upload pipeline are implemented in the app.
- Prompt Library has replaced the old static Team reference surface. Migration 012 was applied successfully by the user on 2026-05-11, making `prompt_library` live for reusable prompt records and future workflow-template use.
- The app source repo now uses repo-local memory and skills as active detailed context: `AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`. `memory/11-app-quality-system.md` and `planning/app_quality_system_roadmap.md` capture the completed initial App quality-system rollout inspired by miniBIOTA_Web and the active-maintenance rules for extending it.
- Brain no longer keeps an App `docs/` mirror; use the source repo's memory/skills structure for detailed App Agent context.

## Key Facts
- CRM relationship-system tables from migration 013 are live, RLS-enabled, and policy-free; first runtime access must use the internal main-process secret-key bridge. No legacy CRM records have been backfilled into the new tables. Legacy CRM Contacts now support multiple labeled links through `crm_contact_links` rather than one column per social platform.
- The app uses Supabase publishable keys in renderer/browser-facing config and secret keys only in Electron main-process services or local admin tooling. Internal renderer REST helpers route through an Electron IPC bridge when secret-key access is needed, without exposing the secret key to browser code.
- Public website surfaces should remain read-only observability; operator/admin workflows belong in the desktop app.
- App owns CRM as software/runtime/schema/UI implementation. Growth owns CRM
  relationship meaning, lifecycle strategy, follow-up rules, opportunity
  context, and commercial commitment discipline.
- Planner is the main production workflow surface for story sources, project planning, scheduled content, and ordinary tasks.
- Prompt Library stores reusable prompts in `prompt_library`; prompt create, edit, favorite, archive, and restore actions are live Supabase writes.
- Monitoring internal hardware fields `liq_t` and `pump_pct` are App/operator-only displays over the existing MQTT payload and should not be added to Web/public telemetry without separate scope and approval.
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
  `tasks.parent_task_id`, with nested subtasks visible in Planner Tasks, work
  project detail panels, Planner Today child-task drawers, and task modal
  parent/child relationship panels.
- Planner task UI now separates parent/container deadlines from scheduled work:
  `tasks.due_date` is the deadline/target field, while `scheduled_date`,
  `scheduled_time`, and `span_end_date` represent work occurrences.
- Planner has an initial Today task surface for scheduled/spanning, overdue,
  blocked, and active unscheduled work.
- Planner has an initial Tasks board grouped by workflow status with domain
  filtering and existing task edit/done actions.
- Planner has an initial general Projects view over `work_projects`, with
  domain filtering, create/edit/archive, and workflow status movement.
- Work project modals show linked tasks and content entries, with quick open
  actions and New Task preselection for the current project/domain.
- Planner content projects can be assigned to active general work projects through `content_calendar.work_project_id`, with linked project context shown in Planner board/calendar surfaces. Scheduled content production now uses the blue `content_calendar` card as the content due/close marker and a teal parent production task with subtasks as the execution schedule.
- Planner Week/Month calendar views are schedule-first. Generic work projects render as single milestone cards on `target_date`, or `start_date` when no target exists, instead of spanning every day. Parent tasks with children appear only on dates with scheduled child work, and the child task title is the primary visible calendar title while the parent/container title remains context. Today and Timeline follow the same child-led display model for parent/container cards.
- Planner week/month calendar views start on Sunday; Week renders Sunday
  through Saturday and Month uses a Sunday-first grid.
- Planner Today includes initial weekly planning prompts that prefill recurring
  task candidates for longform selection, short-opportunity review, and Sunday
  close.
- Calendar entries use join-table links to story beats, story threads, open loops, and observations; legacy thread and loop array fields remain during transition.
- Renderer JavaScript and CSS were broadly refactored into feature-oriented modules and manifest-managed load order.
- Media Library search matches filename, description, notes, and tagged species
  by common name, scientific name, or alternate names; realm and biome chips
  combine with type, year, and unreviewed filters.

## Priorities
- Continue the staged CRM relationship-system UI: expand the read-only Relationship summary into People, Organizations, Opportunities, Interactions, Next Actions, Review, Agent Inbox, and reporting surfaces before any write or backfill workflows.
- Continue consolidating story-source execution and project-management behavior into the unified Planner workflow.
- Verify the first Planner Programs/Operations records in the App UI, then
  continue Planner Sources polish, beat closeout ergonomics, and recurring-task
  calendar integration.
- Keep secret-key access internal-only and avoid public exposure of app behavior.
- Verify packaged build behavior for Sharp/WebP image uploads when packaging resumes.
- Keep App memory and skill references current as architecture, schema assumptions, and safety rules change.
- Smoke test Prompt Library create/edit/copy/archive flows after launching the app, now that migration 012 is applied.
- Use App Planner/Supabase for live App task status; keep Markdown focused on context, operating rules, architecture notes, and playbooks.
- Maintain and extend the completed App quality-system rollout (`work_projects.id = 82`) as an active guardrail layer. Broader write-plan expansion remains open as Planner task `473`.

## Risks / Gaps
- CRM migration 013 created live RLS-protected tables with no policies. Any publishable-key policy design, legacy backfill, or CRM write workflow must be separately approved and tested. Migration 014's `crm_contact_links` table is live for legacy contact links; creating/editing those links remains a live CRM record write.
- Supabase secret-key access would be a major security risk if exposed outside the internal app.
- Real admin image upload to Supabase Storage still needs careful live verification when that work resumes.
- Packaged build behavior with Sharp/native dependencies should be verified before relying on distributable builds.
- Monitoring setpoint/control writes affect the live biosphere and require explicit confirmation before changes.
- Supabase migrations and schema assumptions must be checked before app write paths are changed.
- Planner task hierarchy has been visually smoke tested for the Aquatic Club Week-view case; parent/container due-date support and Today/task-modal hierarchy inspection are in place. The initial App quality-system rollout added Planner production scheduling services, fixture tests, selectors, write-plan persistence, and UI-system guardrails. Broader daily-use coverage across Planner task creation, Timeline, Month, and content production remains worth watching, and Planner task `473` remains open for broader write-plan expansion beyond the production-run pilot.
- Planner Programs/Operations schema and live Program records are live, but
  Program UI create/edit/link behavior still needs interactive smoke
  verification before daily reliance.
- Prompt Library schema is live after migration 012, but create/edit/copy/archive flows still need interactive app smoke verification before daily reliance.

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

