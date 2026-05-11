---
id: app_brief
title: App Operations Brief
domain: app_operations
last_updated: 2026-05-11
tags: [app, electron, operations, planner, strategy-brief]
reporting_status: company_active
reporting_phase: phase_10_reporting_active
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\11. miniBIOTA_App\\app_brief.md"
copied_on: 2026-05-09
brain_transition_status: "Company reporting active; Brain source historical/archive lookup only."
---
# App Operations Brief

> Phase 3 transition note: This Company report was originally copied from `M:\miniBIOTA\miniBIOTA_Brain\11. miniBIOTA_App\app_brief.md` on 2026-05-09. As of Phase 10, this Company path is the active reporting target; the Brain source is historical/archive lookup only.

*Maintained by: App Agent | Update trigger: end of any app session where app behavior, schema assumptions, operational status, risks, or cross-domain dependencies changed*

## Current State

- `miniBIOTA_App` is the internal Electron desktop app for miniBIOTA operations.
- The app is an operator surface, not a public product. It uses Supabase publishable keys in renderer/browser-facing config and secret keys only in Electron main-process services or local admin tooling. Internal renderer REST helpers route through an Electron IPC bridge when secret-key access is needed, without exposing the secret key to browser code.
- Active tabs: Planner, Financials, CRM, Roadmap, Prompt Library, Site Admin, and Monitoring. Former top-level Weekly Checklist and Tasks behavior has been consolidated into Planner.
- Monitoring tab is live for direct MQTT telemetry from the local biome network when on `mB2.4`.
- Site Admin includes species, biosphere, biome, chronicle, announcement, and staging workflows.
- Media Library/tagging and backend WebP image upload pipeline are implemented in the app.
- A private Android Field Observer companion scaffold now exists under `mobile/field-observer/` for photo-first biome sighting sessions. Migration 008 has been applied successfully in Supabase and adds `species_sighting_sessions`, `species_sightings`, and `save_species_sighting_session(...)`. Migration 009 has also been applied successfully and grants the signed-in mobile operator read access to `biomes`, `species`, and `species_images`. Capacitor dependencies are installed, the Android project has been generated, the local Android build toolchain is installed, debug APK builds pass, and the mobile shell uses Supabase Auth plus publishable-key access rather than secret keys. The field UI now uses in-system, not-in-system, and not-listed language while preserving the RPC's stable `seen`, `not_seen`, and `unknown_organism` values. The mobile web code is split into ordered plain-script modules for shared state/helpers, API/Auth/data, filters, rendering, session saves, and bootstrap; mobile styles are split by ownership into ordered CSS imports. Local check and preview scripts validate/load the mobile web shell before APK reinstall.
- Planner project-manager schema foundation is live after migration 007 added
  `work_domains`, `work_projects`, project-management fields on `tasks`, and
  an optional `content_calendar.work_project_id` link. Initial Planner task UI
  wiring now uses live domains, project assignment, workflow status, multi-day
  task spans, Today and Tasks task surfaces, an initial general Projects view
  with linked task/content detail, content calendar assignment into the general
  work-project layer, task hierarchy UI through `parent_task_id`, project
  milestone/context rendering in week/month calendar views, and initial weekly
  planning prompts in Planner Today. Migration 010 was applied successfully by the user on 2026-05-09, making the cross-domain Programs/Operations layer live with `work_programs` and `work_program_projects`. Live Program records now include `Operation Living Atlas` (`work_programs.id = 1`), `Operation Living Web` (`work_programs.id = 2`), and `Aquatic Club Talk Readiness` (`work_programs.id = 3`), with domain-owned projects linked through `work_program_projects`.
- App project management is now Planner-integrated under
  `work_domains.key = app` / `domain_id = 9`: 7 App work projects track 16
  linked App tasks, with 0 unlinked open App tasks after readback on
  2026-05-09. The App Agent has verified and tightened local Planner wiring
  using the Hardware pilot pattern; no live Planner records were changed during
  that local wiring verification.
- Prompt Library has replaced the old static Team reference surface. Migration 012 was applied successfully by the user on 2026-05-11, making the `prompt_library` table live for reusable prompt records. Prompt create, edit, favorite, archive, and restore actions are live Supabase writes through the internal app REST path.
- `miniBIOTA_App` now has repo-local memory and skills as its active detailed context: `AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`.
- Brain no longer keeps an App `docs/` mirror; use the source repo's memory/skills structure for detailed App Agent context.

## Active Priorities

- Continue consolidating story-source execution and project management into the unified Planner workflow, with remaining work focused on Planner Programs/Operations UI smoke verification, Planner Sources polish, beat closeout ergonomics, recurring-task calendar integration, and smoke-testing the Planner replacement surfaces.
- Use App Planner/Supabase as the live App work queue, and keep App docs/memory
  wired so App sessions read current projects/tasks and ask before marking
  Planner tasks done at closeout.
- Keep the desktop app as the forward operator surface while the public website remains read-only.
- Preserve secret-key access as internal-only; do not expose app behavior as a public web surface.
- Continue the Field Observer Android build with publishable-key/Auth/RLS access only; do not ship Supabase secret keys in the APK.
- Verify packaged build behavior for Sharp/WebP image uploads when packaging work resumes.
- Continue using the app for financials, Planner/content production, CRM, media tagging, and monitoring workflows.

## Recent Milestones

- **2026-05-11:** The old static Team reference tab was replaced by a Supabase-backed Prompt Library. The app now exposes Prompt Library in navigation with search, category filters, copy, create/edit modal, favorite, archive, and restore behavior over the new prompt_library table. Migration 012 was applied successfully by the user on 2026-05-11. The old static Team data file was retired from the renderer manifest. Prompt records are now live operational records; no prompt records were seeded or written during the App implementation session.

- **2026-05-11:** Planner Calendar Week/Month was refined to stay schedule-first after live Company-agent scheduling exposed calendar clutter. Generic `work_projects` now render as single milestone cards on `target_date`, or `start_date` only when no target exists, instead of filling every day between `start_date` and `target_date`. Top-level parent tasks with children no longer render from their own `scheduled_date`/`span_end_date`; they appear only on dates where `taskSubtasksForCalendarDate(parent, dateStr)` returns child work. When such a parent card appears, the scheduled child task title is the primary visible title and the parent/container title appears as context. Company-agent scheduling guidance: use Programs/work_projects for structure and deadlines, but schedule concrete subtasks for daily calendar work. This was a renderer/docs update only; no live Planner records, schema, migrations, Storage, telemetry, MQTT, CRM, Financials, Site Admin, Monitoring, or app data writes changed.
- **2026-05-11:** Planner content production scheduling was updated so scheduled content does not need duplicate generic tasks. The intended model is: `content_calendar` remains the blue content identity/due-date card, a linked content-domain `work_project` can hold execution context, and one teal parent production task with subtasks represents the actual production work. The Production tab can create/attach that task structure from the format template; legacy checklist state remains a fallback for unconverted entries. Today, Tasks, Week, and Month now group scheduled child tasks under their parent production task and show day-specific child work. Parent production tasks cannot be marked Done while open subtasks remain, and moving required production work later than the linked content date pushes the content scheduled date forward. Live records touched during the approved setup: `content_calendar.id = 13`, `work_projects.id = 62`, `tasks.id = 247`, and subtasks `tasks.id = 248-261`.

- **2026-05-11:** Planner Calendar week/month start-day behavior was aligned to Sunday. Week view now renders Sunday through Saturday, and Month view uses a Sunday-first header and Sunday-anchored grid. This was a local renderer display update only; no Planner records, schema, migrations, Storage, telemetry, MQTT, CRM, Financials, Site Admin, Monitoring, or live app actions changed, and Electron visual smoke verification was not run.

- **2026-05-09:** Planner Programs UI was visually tightened so Programs read as cross-domain operation containers, linked projects read as domain-owned lanes, and task previews remain subordinate action rows. Planner source species filtering now uses a compact search-driven selector instead of rendering the full species chip wall by default. This was a local renderer/CSS behavior update only; no Planner records, schema, migrations, Storage, telemetry, MQTT, CRM, Financials, Site Admin, Monitoring, or live app actions changed, and Electron visual smoke verification remains pending.

- **2026-05-09:** First Planner Programs/Operations records were created in live Supabase. `Operation Living Atlas` is active as `work_programs.id = 1`, led by Company, with linked Company, Content, Research, Web, and App support projects plus ordered tasks/subtasks for the Lake Post-Seal / pipeline 338 model packet. `Operation Living Web` is active as `work_programs.id = 2`, led by Web, with linked Web, Research, and App support projects plus ordered tasks/subtasks for sparse graph UX, Research curation, dry-review SQL workflow, approval gates, smoke checks, and future private editor planning. No tasks were marked done and no species, biome, observation, chronicle, website, app runtime, schema, Storage, telemetry, MQTT, CRM, Financials, Site Admin, or Monitoring records were changed by this record-organization pass.
- **2026-05-09:** Planner Programs/Operations layer was added locally as an additive schema proposal and UI path. Migration 010 adds `work_programs` plus `work_program_projects`; the Planner Programs view/modal can list, create, edit, archive, assign, and remove project links. The user applied the migration successfully. During that App implementation pass, no Operation records were created.
- **2026-05-09:** App project management was organized in App Planner/Supabase:
  7 App work projects and 16 linked App tasks now cover Planner runtime
  rollout, Planner Sources/content workflow polish, App Agent wiring, Field
  Observer beta, Site Admin/Media reliability, Monitoring operator surface, and
  Supabase/Storage/secret-key safety. Readback confirmed 0 unlinked open App
  tasks. The App Agent then verified and tightened local Planner wiring in
  `AGENTS.md`, `README.md`, memory, closeout skill, implementation skill, and
  smoke/refactor references without changing app behavior or live records.
- **2026-05-08:** Private Android Field Observer planning moved into the App repo. Added a Capacitor-ready scaffold under `mobile/field-observer/`, generated the Android native project, installed Capacitor dependencies, installed Android Studio 2025.3.4.7 plus Temurin JDK 21 and Android SDK packages, synced web assets, derived Android launcher icon PNGs from the desktop app logo, added Supabase Auth sign-in to the mobile shell, and added migration `migrations/008_species_sighting_history.sql` for `species_sighting_sessions`, `species_sightings`, and `save_species_sighting_session(...)`; the user applied the migration successfully in Supabase and the debug APK build now passes. Follow-up migration `migrations/009_field_observer_read_policies.sql` was also applied successfully so authenticated mobile users can read `biomes`, `species`, and `species_images`; a mobile status message now reports loaded row counts or policy blockage. The mobile sighting UI was simplified to in-system/not-in-system/not-listed language, with catalog filtering for website-listed, extirpated/removed, and all species records. The mobile JavaScript was split from one large file into focused ordered modules, and the mobile CSS was split into focused ordered imports with local asset-check and desktop-preview scripts. No live sighting records were written from the app.
- **2026-05-08:** Site Admin Media Library search now mirrors the Species tab search pattern with a full-width search area, realm and biome chips, and tagged-species lookup by common name, scientific name, or alternate names while preserving filename/description search and existing type/year/review filters.
- **2026-05-08:** Site Admin Media Library browsing now uses a preview-grid left pane backed by a persistent local thumbnail cache, compact date/size context, and reviewed/tagged/untouched chips while preserving the existing right-side selected-asset preview and tagging panel. Selecting a year loads all matching media for that year in batches, hides pagination for that year-scoped view, and uses a virtualized grid so only visible cards render while browsing.
- **2026-05-07:** Planner project-manager foundation migration 007 was run successfully in Supabase. The live schema now includes `work_domains`, `work_projects`, project-management fields on `tasks` (`domain_id`, `work_project_id`, `parent_task_id`, `work_status`, `task_type`, date-span support, blocked reason, completion timestamp, and sort order), plus optional `content_calendar.work_project_id` for linking content projects into the general project layer. Planner UI support is being added incrementally.
- **2026-05-07:** Initial Planner task UI wiring for migration 007 began. Planner now loads live `work_domains` and `work_projects`, task modals can save domain IDs, project assignment, workflow status, blocked reason, completion timestamp, and task span end dates, and calendar task rendering can include non-recurring multi-day spans.
- **2026-05-07:** Planner gained Today and Tasks task surfaces. Today shows scheduled/spanning tasks plus overdue, blocked, active unscheduled work, and planning prompts. Tasks groups ordinary tasks by `inbox`, `planned`, `active`, `blocked`, and `done`, with domain filtering and existing task edit/done actions.
- **2026-05-07:** The old top-level Weekly Checklist and Tasks tabs, shell pages, standalone render/state modules, and unused CSS bundles were removed after their replacement behavior moved into Planner. `checklist-definitions.js` remains loaded because Planner content production checklists still use `CHECKLIST_ITEMS`.
- **2026-05-07:** Planner gained an initial general Projects view over `work_projects`, grouped by `inbox`, `planned`, `active`, `blocked`, and `done`, with domain filtering. The work project modal can create, edit, archive, and move projects through the general workflow. Content project creation remains separate for now.
- **2026-05-07:** Work project modals now show linked tasks and linked content entries. Linked rows open the existing task/content editors, and New Task from a work project preselects the project/domain without writing until the task form is saved.
- **2026-05-07:** Planner content projects can now link to active general work projects through `content_calendar.work_project_id`. The content project modal exposes the assignment, board cards show the linked work project, week cards include compact project context, and month chips include project context in hover titles. Existing content workflow remains separate during transition.
- **2026-05-07:** Planner week/month calendar views now render general `work_projects` across their `start_date` to `target_date` span under the existing Projects toggle. Clicking a work project span opens the work project editor. This is display-only support and does not change records by itself.
- **2026-05-07:** Planner Today gained an initial Planning prompt area for weekly longform selection, active-observation review, and Sunday close. Prompt actions prefill the task modal as weekly recurring task candidates and do not write records until the task form is saved.
- **2026-05-07:** Planner gained task hierarchy UI for `tasks.parent_task_id`. The task modal can assign a parent task, Planner Tasks nests child tasks under their parent task card with subtask progress, and work project detail panels nest linked child tasks under parent tasks. Subtask actions only prefill the form and do not write records until saved.
- **2026-05-06:** App Supabase config migrated from legacy anon/service-role variables to the newer `SUPABASE_PUBLISHABLE_KEY` and `SUPABASE_SECRET_KEY` model. Renderer-safe config now prefers the publishable key and never exposes the secret key; Electron main-process services and local media indexing tools use the secret key. Legacy `SUPABASE_ANON_KEY` and `SUPABASE_SERVICE_ROLE_KEY` remain only as deprecated migration fallbacks until testing passes and legacy API keys are disabled in Supabase.
- **2026-05-06:** Restored App UI data loading after the key migration by making renderer REST helpers prefer a main-process `supabase-rest` IPC bridge. The renderer still exposes only publishable-key compatibility globals, while the Electron main process attaches `SUPABASE_SECRET_KEY` for internal REST calls.
- **2026-05-05:** Brain App Operations folder converted to the same repo-named memory/skills pattern as Financials and Content. Brain folder is now `11. miniBIOTA_App`; the stale App docs mirror was removed; active detailed sources are `M:\miniBIOTA\miniBIOTA_App\AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`. `_system/sync_docs.ps1` now keeps App docs mirroring disabled and removes any stale `11. miniBIOTA_App\docs` folder if it appears.
- **2026-05-04:** Team tab added as a static internal reference for App, Brain, Brand, Company, Content, Financials, Growth, Hardware, Research, and Web agents. Each agent has its own sub-tab with role, source docs, seeded tasks, prompts, required materials, filterable task category chips, and copy-prompt buttons; Content tasks are seeded from the current repo-local `SKILL.md` playbooks.
- **2026-05-04:** Planner Story Beats support added as a fourth source type (`beat`) alongside threads, loops, observations, and tasks. Planner now loads `story_beats`, beat relationship tables, and `content_calendar_story_beats`; Sources can filter/render beat cards and details; project Source Maps can select, hydrate, save, attach, and plan from beats. App-owned migration history added as `migrations/006_story_beats_schema.sql`; the live Supabase trigger/function still needs the corrected migration run manually.
- **2026-05-04:** App broad refactor completed and moved to maintenance mode. Renderer JavaScript and CSS are organized by feature folders, `index.html` is a small bootstrap frame, `js/app-bootstrap.js` loads `js/app-script-manifest.js`, obvious over-split helper files were merged back into owning modules, `npm run validate:renderer` passes, Electron boots, and the practical tab smoke passed for Planner, Site Admin, CRM, Weekly Checklist, Tasks, Financials, Roadmap, and Monitoring.
- **2026-05-04:** CRM contact list card and relationship badge styles were split from `css/crm-contacts.css` into `css/crm-contact-list.css`; `css/crm-contacts.css` now holds contact search and master-detail shell styles.
- **2026-05-04:** Site Admin shared table and no-data styles were split from `css/admin.css` into `css/admin-tables.css`; `css/admin.css` now holds shared navigation, status, and action button styles.
- **2026-05-04:** Shared task domain accent colors and status badge base styles were split from `css/shared-tags.css` into `css/shared-domain-colors.css` and `css/shared-status-badges.css`; `css/shared-tags.css` now holds tag variants only.
- **2026-05-04:** Planner modal action row and button styles were split from `css/planner-modal-forms.css` into `css/planner-modal-actions.css`; `css/planner-modal-forms.css` now holds modal forms and help text.
- **2026-05-04:** CRM stats row/card styles were split from `css/crm.css` into `css/crm-stats.css`; `css/crm.css` now holds shared CRM controls and view header styles.
- **2026-05-04:** Monitoring sensor grid/card styles were split from `css/monitoring.css` into `css/monitoring-sensors.css`; `css/monitoring.css` now holds banner, biome tabs, panel header, and health chips.
- **2026-05-04:** Planner stat row styles were split from `css/planner.css` into `css/planner-stats.css`; `css/planner.css` now holds Planner shell, view controls, and primary actions.
- **2026-05-04:** Site Admin Media Library pagination styles were split from `css/admin-media-list.css` into `css/admin-media-pagination.css`; `css/admin-media-list.css` now holds media list row styles.
- **2026-05-04:** Tasks domain grouping styles were split from `css/tasks.css` into `css/tasks-domain-groups.css`; `css/tasks.css` now holds task header controls.
- **2026-05-04:** Site Admin Media Library selected-asset save controls were split from `css/admin-media-edit.css` into `css/admin-media-save-controls.css`; `css/admin-media-edit.css` now holds edit field styles.
- **2026-05-04:** Planner compact loop/thread filter button styles were split from `css/planner-panels.css` into `css/planner-panel-filters.css`; `css/planner-panels.css` now holds compact loop panel/card styles, and `css/planner-thread-panels.css` keeps thread cards/status variants.
- **2026-05-04:** Unused legacy `.pipeline-*` CRM card styles were removed from `css/crm-pipeline.css`; current CRM pipeline rendering uses the `.crm-pipeline-*` board/card selectors.
- **2026-05-04:** Weekly Checklist item row/checkmark/text styles were split from `css/checklist.css` into `css/checklist-items.css`; `css/checklist.css` now holds header, section, title input, and fallback controls.
- **2026-05-04:** Tasks item row/checkbox/label styles were split from `css/tasks.css` into `css/tasks-items.css`; after a later pass, domain grouping styles live in `css/tasks-domain-groups.css`, item styles live in `css/tasks-items.css`, and `css/tasks.css` holds task header controls.
- **2026-05-04:** Planner source task schedule controls were split from `css/planner-source-cards.css` into `css/planner-source-schedule.css`; `css/planner-source-cards.css` now holds source card styling.
- **2026-05-04:** Planner card status badge and tag variant styles were split from `css/planner-cards.css` into `css/planner-card-badges.css`; `css/planner-cards.css` now holds board project card and action styles.
- **2026-05-04:** Shared filter tab button styles were split from `css/shared-ui.css` into `css/shared-filter-tabs.css`; `css/shared-ui.css` now holds filter row, label, and count badge styles.
- **2026-05-04:** Planner source attach-to-project control styles were split from `css/planner-source-modals.css` into `css/planner-source-attach.css`; `css/planner-source-modals.css` now holds source detail modal styles.
- **2026-05-04:** Roadmap category and initiative status badge styles were split from `css/roadmap-initiatives.css` into `css/roadmap-badges.css`; `css/roadmap-initiatives.css` now holds initiative card styles.
- **2026-05-04:** Planner source relationship link control styles were split from `css/planner-source-summary.css` into `css/planner-source-link-controls.css`; `css/planner-source-summary.css` now holds selected-source summary card styles.
- **2026-05-04:** Site Admin Media Library list row and pagination styles were split from `css/admin-media.css` into `css/admin-media-list.css`; after a later pass, pagination styles live in `css/admin-media-pagination.css`, list row styles remain in `css/admin-media-list.css`, and `css/admin-media.css` holds the media browser layout.
- **2026-05-04:** Roadmap capacity bar styles were split from `css/roadmap-timeline.css` into `css/roadmap-capacity.css`; `css/roadmap-timeline.css` now holds only timeline styles.
- **2026-05-04:** CRM status variant styles were split from `css/crm-summary.css` into `css/crm-status.css`; `css/crm-summary.css` now holds CRM summary and sales styles.
- **2026-05-04:** CRM sales goal progress styles were split from `css/crm-pipeline.css` into `css/crm-sales-goal.css`; `css/crm-pipeline.css` now holds pipeline card and board styles.
- **2026-05-04:** Site Admin Media Library selected-asset view tab styles were split from `css/admin-media-panel.css` into `css/admin-media-view.css`; `css/admin-media-panel.css` now holds the selected-asset panel shell, tabs, and reviewed controls.
- **2026-05-04:** Site Admin Media Library species/biome/system/chronicle linking control styles were split from `css/admin-media-edit.css` into `css/admin-media-linking.css`; after a later pass, selected-asset save controls live in `css/admin-media-save-controls.css`, and `css/admin-media-edit.css` holds edit field styles.
- **2026-05-04:** Planner thread picker styles were split from `css/planner-pickers.css` into `css/planner-thread-picker.css`; after an earlier pass, observation picker styles live in `css/planner-observation-picker.css`, and `css/planner-pickers.css` now holds loop picker styles.
- **2026-05-04:** Site Admin form action row and submit/cancel button styles were split from `css/admin-forms.css` into `css/admin-form-actions.css`; `css/admin-forms.css` now holds shared form controls and section headers.
- **2026-05-04:** Site Admin detail disclosure, checkbox, and small tag styles were split from `css/admin-forms.css` into `css/admin-details.css`; after a later pass, form action buttons live in `css/admin-form-actions.css`, and `css/admin-forms.css` holds shared form controls and section headers.
- **2026-05-04:** CRM contact detail panel and related opportunity card styles were split from `css/crm-contacts.css` into `css/crm-contact-detail.css`; after a later pass, contact list cards and badges live in `css/crm-contact-list.css`, and `css/crm-contacts.css` holds contact search and master-detail shell styles.
- **2026-05-04:** Planner week project/task card styles were split from `css/planner-week.css` into `css/planner-week-cards.css`; `css/planner-week.css` now holds week navigation and day-column layout styles.
- **2026-05-04:** Planner board card source-role chip styles were split from `css/planner-cards.css` into `css/planner-card-sources.css`; after a later pass, status badge/tag variant styles live in `css/planner-card-badges.css`, source-role chips live in `css/planner-card-sources.css`, and `css/planner-cards.css` holds core board card and action styles.
- **2026-05-04:** Planner compact thread card and thread status filter styles were split from `css/planner-panels.css` into `css/planner-thread-panels.css`; after a later pass, shared loop/thread filter button styles live in `css/planner-panel-filters.css`, `css/planner-thread-panels.css` keeps thread cards/status variants, and `css/planner-panels.css` holds compact loop panel/card styles.
- **2026-05-04:** Planner modal form/help/action button styles were split from `css/planner-modals.css` into `css/planner-modal-forms.css`; after a later pass, action rows/buttons live in `css/planner-modal-actions.css`, form/help styles remain in `css/planner-modal-forms.css`, and `css/planner-modals.css` holds modal chrome, tabs, and headers.
- **2026-05-04:** Roadmap initiative step control styles were split from `css/roadmap-initiatives.css` into `css/roadmap-steps.css`; after a later pass, category/status badges live in `css/roadmap-badges.css`, step controls live in `css/roadmap-steps.css`, and `css/roadmap-initiatives.css` holds initiative card styles.
- **2026-05-04:** Site Admin image management grid styles were split from `css/admin-forms.css` into `css/admin-images.css`; after later passes, detail disclosure/checkbox/small tag styles live in `css/admin-details.css`, image grid styles live in `css/admin-images.css`, form action buttons live in `css/admin-form-actions.css`, and `css/admin-forms.css` holds shared form controls and section headers.
- **2026-05-04:** Legacy Story Dashboard linked observation/intersection detail styles were split from `css/story-dashboard-cards.css` into `css/story-dashboard-card-details.css`; card shell/note styles remain in `css/story-dashboard-cards.css`, and `css/story-dashboard.css` holds shell, stats, section, and control styles.
- **2026-05-03:** Planner source card and task schedule control styles were split from `css/planner-sources.css` into `css/planner-source-cards.css`; after a later pass, task schedule controls live in `css/planner-source-schedule.css`, source card styling lives in `css/planner-source-cards.css`, and `css/planner-sources.css` holds source workspace layout styles.
- **2026-05-03:** Site Admin Media Library selected-asset preview and file-info styles were split from `css/admin-media-panel.css` into `css/admin-media-preview.css`; after a later pass, view-tab styles live in `css/admin-media-view.css`, and `css/admin-media-panel.css` holds panel shell, tabs, and reviewed button styles.
- **2026-05-03:** Site Admin Media Library free-form tag chip and input styles were split from `css/admin-media-edit.css` into `css/admin-media-tags.css`; after later passes, linking/checklist controls live in `css/admin-media-linking.css`, free-form tag chip/input styles live in `css/admin-media-tags.css`, selected-asset save controls live in `css/admin-media-save-controls.css`, and `css/admin-media-edit.css` holds edit field styles.
- **2026-05-03:** Shared tag, status badge, and domain accent styles were split from `css/shared-ui.css` into `css/shared-tags.css`; after later passes, tag variants live in `css/shared-tags.css`, domain accent colors live in `css/shared-domain-colors.css`, status badge base styles live in `css/shared-status-badges.css`, filter tab buttons live in `css/shared-filter-tabs.css`, and `css/shared-ui.css` holds shared filter rows, labels, and count badges.
- **2026-05-03:** Planner source summary and link-control styles were split from `css/planner-source-modals.css` into `css/planner-source-summary.css`; after later passes, source relationship link controls live in `css/planner-source-link-controls.css`, selected-source summary card styles live in `css/planner-source-summary.css`, attach-to-project controls live in `css/planner-source-attach.css`, and `css/planner-source-modals.css` holds source detail modal styles.
- **2026-05-03:** Site Admin Media Library filter/search/type/year/review control styles were split from `css/admin-media.css` into `css/admin-media-filters.css`; after later passes, list rows live in `css/admin-media-list.css`, pagination styles live in `css/admin-media-pagination.css`, and `css/admin-media.css` holds browser layout styles.
- **2026-05-03:** Planner modal production checklist styles were split from `css/planner-modals.css` into `css/planner-modal-checklist.css`; after later passes, modal form/help styles live in `css/planner-modal-forms.css`, modal action rows/buttons live in `css/planner-modal-actions.css`, and `css/planner-modals.css` holds project/task modal chrome, tabs, and header styles.
- **2026-05-03:** Planner loop/thread/observation picker styles were split from `css/planner-modals.css` into `css/planner-pickers.css`; after later passes, generic modal chrome/header styles remain in `css/planner-modals.css`, form/help styles live in `css/planner-modal-forms.css`, action rows/buttons live in `css/planner-modal-actions.css`, production checklist styles live in `css/planner-modal-checklist.css`, observation picker styles live in `css/planner-observation-picker.css`, thread picker styles live in `css/planner-thread-picker.css`, and loop picker styles live in `css/planner-pickers.css`.

- **2026-05-03:** Planner board project-card, board status badge, and card tag styles were split from `css/planner-board.css` into `css/planner-cards.css`; after later passes, board card source-role chips live in `css/planner-card-sources.css`, status badge/tag variants live in `css/planner-card-badges.css`, core board card/action styles remain in `css/planner-cards.css`, and `css/planner-board.css` holds board column layout styles.
- **2026-05-03:** Planner board column, project-card, board status, and card tag styles were split from `css/planner.css` into `css/planner-board.css`; after later passes, board card/action styles live in `css/planner-cards.css`, status badge/tag variants live in `css/planner-card-badges.css`, column layout styles remain in `css/planner-board.css`, Planner stat rows live in `css/planner-stats.css`, and Planner shell/view controls remain in `css/planner.css`.

- **2026-05-03:** CRM contact list/detail and related opportunity card styles were split from `css/crm.css` into `css/crm-contacts.css`, and activity row/overdue styles were split into `css/crm-activities.css`; after later passes, CRM contact detail/related opportunity styles live in `css/crm-contact-detail.css`, contact search/master-detail shell styles remain in `css/crm-contacts.css`, contact list card/badge styles live in `css/crm-contact-list.css`, stats row/cards live in `css/crm-stats.css`, and `css/crm.css` holds shared CRM controls and view header styles.
- **2026-05-03:** CRM summary, legacy sales, goal bar, and contact status variant styles were split from `css/crm.css` into `css/crm-summary.css`; after later passes, status variant styles live in `css/crm-status.css`, CRM stats row/cards live in `css/crm-stats.css`, CRM contact search/master-detail shell styles live in `css/crm-contacts.css`, contact list card/badge styles live in `css/crm-contact-list.css`, contact detail/related opportunity styles live in `css/crm-contact-detail.css`, pipeline board styles live in `css/crm-pipeline.css`, sales goal progress styles live in `css/crm-sales-goal.css`, activity/overdue styles live in `css/crm-activities.css`, modal styles live in `css/crm-modals.css`, and `css/crm.css` remains the shared CRM control/header stylesheet.

- **2026-05-03:** Planner compact loop/thread panel styles were split from `css/planner.css` into `css/planner-panels.css`; after later passes, compact thread card/status filter styles live in `css/planner-thread-panels.css`, compact loop panel/card styles remain in `css/planner-panels.css`, Planner stat rows live in `css/planner-stats.css`, Planner shell and view controls remain in `css/planner.css`, board column styles live in `css/planner-board.css`, board card/action styles live in `css/planner-cards.css`, and status badge/tag variants live in `css/planner-card-badges.css`.

- **2026-05-03:** Planner source summary/detail/attach modal styles were split from `css/planner-modals.css` into `css/planner-source-modals.css`; after later passes, source relationship link controls live in `css/planner-source-link-controls.css`, source summary card styles live in `css/planner-source-summary.css`, attach-to-project controls live in `css/planner-source-attach.css`, source detail modal styles remain in `css/planner-source-modals.css`, generic Planner modal chrome/header styles remain in `css/planner-modals.css`, modal form/help styles live in `css/planner-modal-forms.css`, modal action rows/buttons live in `css/planner-modal-actions.css`, production checklist styles live in `css/planner-modal-checklist.css`, observation picker styles live in `css/planner-observation-picker.css`, thread picker styles live in `css/planner-thread-picker.css`, and loop picker styles live in `css/planner-pickers.css`.

- **2026-05-03:** Site Admin Media Library selected-asset edit tab styles were split from `css/admin-media-panel.css` into `css/admin-media-edit.css`; after later passes, linking/checklist controls live in `css/admin-media-linking.css`, free-form tag chips/inputs live in `css/admin-media-tags.css`, save controls live in `css/admin-media-save-controls.css`, edit field styles remain in `css/admin-media-edit.css`, and `index.html`, `AGENTS.md`, and app docs include those stylesheets after the panel stylesheet.
- **2026-05-03:** Site Admin species search/filter chip styles were split from `css/admin.css` into `css/admin-species.css`; `index.html`, `AGENTS.md`, and app docs now include the species stylesheet after the shared admin stylesheet.
- **2026-05-03:** Site Admin shared form, detail, tag, and image management styles were split from `css/admin.css` into `css/admin-forms.css`; after later passes, detail disclosure/checkbox/small tag styles live in `css/admin-details.css`, image management grid styles live in `css/admin-images.css`, form action buttons live in `css/admin-form-actions.css`, shared table/no-data styles live in `css/admin-tables.css`, shared form control/section header styles remain in `css/admin-forms.css`, and `css/admin.css` holds shared navigation, status, and action button styles.
- **2026-05-03:** Roadmap CSS was split from `css/roadmap.css` into `css/roadmap-timeline.css` for capacity/timeline styles and `css/roadmap-initiatives.css` for initiative cards, badges, and steps; after later passes, capacity bar styles live in `css/roadmap-capacity.css`, timeline styles remain in `css/roadmap-timeline.css`, category/status badges live in `css/roadmap-badges.css`, step controls live in `css/roadmap-steps.css`, initiative card styles remain in `css/roadmap-initiatives.css`, and `css/roadmap.css` holds shell and stats styles.
- **2026-05-03:** Remaining Site Admin Media Library selected-asset panel/tab/view styles were moved from `css/admin-media.css` into `css/admin-media-panel.css`; after later passes, preview/file-info styles live in `css/admin-media-preview.css`, view-tab styles live in `css/admin-media-view.css`, edit field styles live in `css/admin-media-edit.css`, save controls live in `css/admin-media-save-controls.css`, linking/checklist controls live in `css/admin-media-linking.css`, free-form tag controls live in `css/admin-media-tags.css`, filter/search controls live in `css/admin-media-filters.css`, list rows live in `css/admin-media-list.css`, pagination styles live in `css/admin-media-pagination.css`, and `css/admin-media.css` now focuses on the media browser shell.
- **2026-05-03:** Site Admin Media Library selected-asset edit panel styles were split from `css/admin-media.css` into `css/admin-media-panel.css`; after later passes, selected-asset preview/file-info styles live in `css/admin-media-preview.css`, view-tab styles live in `css/admin-media-view.css`, panel header/tabs/reviewed controls live in `css/admin-media-panel.css`, edit field styles live in `css/admin-media-edit.css`, save controls live in `css/admin-media-save-controls.css`, linking/checklist controls live in `css/admin-media-linking.css`, free-form tag controls live in `css/admin-media-tags.css`, filter/search controls live in `css/admin-media-filters.css`, list rows live in `css/admin-media-list.css`, pagination styles live in `css/admin-media-pagination.css`, and browser layout remains in `css/admin-media.css`.

- **2026-05-03:** CRM pipeline board and sales goal styles were split from `css/crm.css` into `css/crm-pipeline.css`; after later passes, unused legacy `.pipeline-*` styles were removed, sales goal progress styles live in `css/crm-sales-goal.css`, shared CRM shell controls remain in `css/crm.css`, contact search/master-detail shell styles live in `css/crm-contacts.css`, contact list card/badge styles live in `css/crm-contact-list.css`, contact detail/related opportunity styles live in `css/crm-contact-detail.css`, and activity/overdue styles live in `css/crm-activities.css`.

- **2026-05-03:** CRM contact/opportunity/activity modal styles were split from `css/crm.css` into `css/crm-modals.css`; after later passes, CRM contact search/master-detail shell styles live in `css/crm-contacts.css`, contact list card/badge styles live in `css/crm-contact-list.css`, contact detail/related opportunity styles live in `css/crm-contact-detail.css`, pipeline board styles live in `css/crm-pipeline.css`, sales goal progress styles live in `css/crm-sales-goal.css`, activity/overdue styles live in `css/crm-activities.css`, and shared CRM shell controls remain in `css/crm.css`.

- **2026-05-03:** Planner source workspace and source-card styles were split from `css/planner.css` into `css/planner-sources.css`; after later passes, source card styles live in `css/planner-source-cards.css`, task schedule controls live in `css/planner-source-schedule.css`, source workspace layout remains in `css/planner-sources.css`, and board/project card styles remain in `css/planner.css`.

- **2026-05-03:** Site Admin Media Library styles were split from `css/admin.css` into `css/admin-media.css`; after later passes, species search/filter styles live in `css/admin-species.css`, shared form controls and section headers live in `css/admin-forms.css`, form action buttons live in `css/admin-form-actions.css`, detail disclosure/checkbox/small tag styles live in `css/admin-details.css`, image management grid styles live in `css/admin-images.css`, shared table/no-data styles live in `css/admin-tables.css`, and shared Site Admin navigation, status, and action buttons remain in `css/admin.css`.

- **2026-05-03:** Planner week and month view styles were split from `css/planner-calendar.css` into `css/planner-week.css` and `css/planner-month.css`; after later passes, week project/task cards live in `css/planner-week-cards.css`, month day chip/add-action styles live in `css/planner-month-items.css`, month grid/cell layout styles remain in `css/planner-month.css`, week navigation/day-column layout styles remain in `css/planner-week.css`, and `css/planner-calendar.css` holds shared calendar view-control styles.
- **2026-05-03:** Planner week/month calendar view styles were split from `css/planner.css` into `css/planner-calendar.css`; after later passes, week navigation/day-column layout styles live in `css/planner-week.css`, week card styles live in `css/planner-week-cards.css`, month grid/cell layout styles live in `css/planner-month.css`, month day chip/add-action styles live in `css/planner-month-items.css`, board column styles live in `css/planner-board.css`, board card/action styles live in `css/planner-cards.css`, status badge/tag variants live in `css/planner-card-badges.css`, source workspace layout styles live in `css/planner-sources.css`, source card styles live in `css/planner-source-cards.css`, task schedule controls live in `css/planner-source-schedule.css`, and shell/view-control styles remain in `css/planner.css`.

- **2026-05-03:** Planner project/task/source modal and picker styles were split from `css/planner.css` into `css/planner-modals.css`; Planner board column styles now live in `css/planner-board.css`, board card/action styles live in `css/planner-cards.css`, status badge/tag variants live in `css/planner-card-badges.css`, source workspace layout styles live in `css/planner-sources.css`, source card styles live in `css/planner-source-cards.css`, task schedule controls live in `css/planner-source-schedule.css`, and shell/view-control styles remain in `css/planner.css`.

- **2026-05-03:** Shared filter tab, badge, tag, and domain accent styles were split from `css/dashboard.css` into `css/shared-ui.css`; after later passes, tag variants live in `css/shared-tags.css`, domain accent colors live in `css/shared-domain-colors.css`, status badge base styles live in `css/shared-status-badges.css`, filter tab buttons live in `css/shared-filter-tabs.css`, shared filter rows/labels/count badges remain in `css/shared-ui.css`, and `css/dashboard.css` holds base app shell, loading, visibility, top-bar, refresh, and page-tab styles.
- **2026-05-03:** Legacy Story Dashboard-only styles were split from `css/dashboard.css` into `css/story-dashboard.css`; after later passes, Story Dashboard card shell/note styles live in `css/story-dashboard-cards.css`, linked observation/intersection detail styles live in `css/story-dashboard-card-details.css`, Story Dashboard shell/stats/section/control styles remain in `css/story-dashboard.css`, shared filter rows/labels/count badges live in `css/shared-ui.css`, filter tab buttons live in `css/shared-filter-tabs.css`, tag variants live in `css/shared-tags.css`, domain accent colors live in `css/shared-domain-colors.css`, status badge base styles live in `css/shared-status-badges.css`, and loading/page navigation remain in `css/dashboard.css`.

- **2026-05-03:** Weekly Checklist calendar view styles were split from `css/checklist.css` into `css/checklist-calendar.css`; after a later pass, item row/checkmark/text styles live in `css/checklist-items.css`, calendar view styles live in `css/checklist-calendar.css`, and `css/checklist.css` holds checklist header/section/title/fallback controls.
- **2026-05-03:** Weekly Checklist styles were split from `css/dashboard.css` into `css/checklist.css`; after later passes, checklist item row/checkmark/text styles live in `css/checklist-items.css`, checklist calendar view styles live in `css/checklist-calendar.css`, and checklist stylesheets load before Planner styles to preserve the existing shared `cal-*` cascade.

- **2026-05-03:** Planner/Content Calendar styles were split from `css/dashboard.css` into `css/planner.css`; Weekly Checklist calendar styles now live in `css/checklist-calendar.css`.

- **2026-05-03:** Site Admin and Media Library styles were split from `css/dashboard.css` into `css/admin.css`.

- **2026-05-03:** Tasks tab styles and Financials tab styles were split from `css/dashboard.css` into `css/tasks.css` and `css/financials.css`; after later passes, task domain grouping styles live in `css/tasks-domain-groups.css`, task item row/checkmark/text styles live in `css/tasks-items.css`, and shared task domain accent colors live in `css/shared-domain-colors.css` for Planner compatibility.

- **2026-05-03:** CRM and legacy Sales tab styles were split from `css/dashboard.css` into `css/crm.css`; after later passes, shared status badge base styling lives in `css/shared-status-badges.css` for Roadmap compatibility.

- **2026-05-03:** Roadmap tab styles were split from `css/dashboard.css` into `css/roadmap.css`; `index.html` now loads the shared dashboard/shared-ui stylesheets plus the Roadmap stylesheet.

- **2026-05-03:** Monitoring tab styles were split from `css/dashboard.css` into `css/monitoring.css`; after a later pass, sensor grid/card styles live in `css/monitoring-sensors.css`, and `css/monitoring.css` holds banner, biome tab, panel header, and health chip styles.

- **2026-05-03:** Planner attach-to-existing-project rendering helpers were split from `js/calendar-source-attach.js` into `js/calendar-source-attach-render.js`; `js/calendar-source-attach.js` now focuses on source-link specs and attach mutations.

- **2026-05-03:** Legacy Story Dashboard filter tab rendering helpers were split from `js/story-dashboard-filters.js` into `js/story-dashboard-filter-render.js`; `js/story-dashboard-filters.js` now focuses on filter state handlers.

- **2026-05-03:** Planner source filter rendering helpers were split from `js/calendar-source-filter-controls.js` into `js/calendar-source-filter-render.js`; `js/calendar-source-filter-controls.js` now focuses on filter orchestration and state handlers.

- **2026-05-03:** Site Admin biome table rendering and biome form/mutation helpers were split from `js/admin-biomes.js` into `js/admin-biome-list.js` and `js/admin-biome-form.js`; `js/admin-biomes.js` now only orchestrates biome loading and downstream refreshes.

- **2026-05-03:** Site Admin species edit-form helpers were split from `js/admin-species-form.js` into `js/admin-species-edit.js`; `js/admin-species-form.js` now focuses on species create/update/delete behavior.

- **2026-05-03:** Legacy Story Dashboard section renderers were split from `js/story-dashboard-render.js` into focused stats, loop, thread, and observation renderer modules; `js/story-dashboard-render.js` now only orchestrates the legacy dashboard render cycle.

- **2026-05-03:** CRM selected-contact activity filter and row helpers were split from `js/crm-contact-detail.js` into `js/crm-contact-activities.js`; `js/crm-contact-detail.js` now focuses on selected-contact detail rendering.

- **2026-05-03:** Planner plan-from-source helper was split from `js/calendar-source-summary.js` into `js/calendar-source-plan.js`; `js/calendar-source-summary.js` now focuses on selected-source summary rendering.

- **2026-05-03:** Planner board project card rendering helpers were split from `js/calendar-board.js` into `js/calendar-board-cards.js`; `js/calendar-board.js` now focuses on board stats, columns, and quick status updates.

- **2026-05-03:** Site Admin species biome checkbox helpers were split from `js/admin-species-form.js` into `js/admin-species-biomes.js`; species form mutation behavior remains in `js/admin-species-form.js`.

- **2026-05-03:** Site Admin species observation helper `admMarkObservedToday()` was split from `js/admin-species-form.js` into `js/admin-species-observations.js`; at that checkpoint, `js/admin-species-form.js` focused on species form and mutation behavior.

- **2026-05-03:** Site Admin chronicle form and persistence helpers were split from `js/admin-chronicles.js` into `js/admin-chronicle-form.js`; `js/admin-chronicles.js` now focuses on chronicle selects, loading, and table rendering.

- **2026-05-03:** Roadmap renderers were split from `js/roadmap-render.js` into focused stats, capacity, timeline, and initiative-card modules; `js/roadmap.js` still loads read models and calls the same render functions.

- **2026-05-03:** Financial dashboard renderers were split from `js/financials-render.js` into focused stats, revenue, burn-rate, liabilities, and planned-purchases modules; `js/financials.js` still loads the read models and calls the same render functions.

- **2026-05-03:** Planner production checklist map and modal helpers were split from `js/calendar-panels.js` into `js/calendar-checklist.js`; `js/calendar-panels.js` now focuses on loop and thread side panels.

- **2026-05-03:** Planner task modal save and delete handlers were split from `js/calendar-task-modal.js` into `js/calendar-task-modal-save.js`; `js/calendar-task-modal.js` now focuses on task modal open/edit and recurrence field helpers.

- **2026-05-03:** Planner project modal save and delete handlers were split from `js/calendar-modal.js` into `js/calendar-modal-save.js`; `js/calendar-modal.js` now focuses on fields, open/edit, visibility, and tab helpers.

- **2026-05-03:** Planner week calendar rendering and navigation helpers were split from `js/calendar-views.js` into `js/calendar-week-view.js`; `js/calendar-views.js` now focuses on month calendar rendering and navigation.

- **2026-05-03:** Planner source filter control rendering and handlers were split from `js/calendar-filters.js` into `js/calendar-source-filter-controls.js`; `js/calendar-filters.js` now focuses on Planner page switching and calendar type toggles.

- **2026-05-03:** Planner source inbox filter predicate was split from `js/calendar-source-workspace.js` into `js/calendar-source-filtering.js`; `js/calendar-source-workspace.js` now focuses on inbox and workspace section rendering.

- **2026-05-03:** Planner source inbox card rendering and thread status helpers were split from `js/calendar-source-workspace.js` into `js/calendar-source-cards.js`; at that checkpoint, `js/calendar-source-workspace.js` focused on inbox filtering and workspace sections.

- **2026-05-03:** Planner source detail section/card helpers were split from `js/calendar-source-detail.js` into `js/calendar-source-detail-sections.js`; source detail modal orchestration remains in `js/calendar-source-detail.js`.

- **2026-05-03:** Planner source attach-to-existing-project helpers were split from `js/calendar-source-detail.js` into `js/calendar-source-attach.js`; source detail modal rendering remains in `js/calendar-source-detail.js`.

- **2026-05-03:** CRM selected-contact detail rendering was split from `js/crm-contacts.js` into `js/crm-contact-detail.js`; `js/crm-contacts.js` now focuses on contact type filters and list rendering.

- **2026-05-03:** Site Admin Media Library view-tab renderer was split from `js/admin-media-panel-tabs.js` into `js/admin-media-view-tab.js`; `js/admin-media-panel-tabs.js` now only handles panel tab switching.

- **2026-05-03:** CRM activity modal/write helpers were split from `js/crm-modals.js` into `js/crm-activity-modal.js`; the startup CRM badge preload now lives with `js/crm-activities.js`, and the generic `js/crm-modals.js` wrapper was retired.

- **2026-05-03:** CRM opportunity modal/write helpers were split from `js/crm-modals.js` into `js/crm-opportunity-modal.js`.

- **2026-05-03:** CRM contact modal/write helpers were split from `js/crm-modals.js` into `js/crm-contact-modal.js`.

- **2026-05-03:** Site Admin Media Library edit-tab renderer was split from `js/admin-media-panel-tabs.js` into `js/admin-media-edit-tab.js`; at that checkpoint, `js/admin-media-panel-tabs.js` held the view tab and tab switching behavior.

- **2026-05-03:** Site Admin Media Library reviewed-state helper was split from `js/admin-media-panel.js` into `js/admin-media-review.js`; the panel shell now delegates reviewed toggles to that module.

- **2026-05-03:** Site Admin Media Library panel view/edit tab renderers were split from `js/admin-media-panel.js` into `js/admin-media-panel-tabs.js`; asset selection and panel shell rendering remain in `js/admin-media-panel.js`.

- **2026-05-03:** Planner project-modal observation picker controls were split from `js/calendar-source-pickers.js` into `js/calendar-observation-picker.js`; loop and thread picker controls remain in `js/calendar-source-pickers.js`.

- **2026-05-03:** Planner selected-source summary and plan-from-source helpers were split from `js/calendar-source-pickers.js` into `js/calendar-source-summary.js`; `js/calendar-source-pickers.js` focused on picker controls at that checkpoint.

- **2026-05-02:** Roadmap step grouping moved into `js/roadmap-steps.js`, keeping step collection shaping next to the existing Roadmap step helpers.

- **2026-05-02:** Roadmap stats, capacity, timeline, and initiative card renderers were split from `js/roadmap.js` into `js/roadmap-render.js`; `js/roadmap.js` focused on loading initiatives and steps at that checkpoint.

- **2026-05-02:** Roadmap initiative-step mutation helpers were split from `js/roadmap.js` into `js/roadmap-steps.js`; Roadmap read/render behavior remains separate from step write helpers.

- **2026-05-02:** Roadmap capacity and category display configuration were split from `js/roadmap.js` into `js/roadmap-config.js`, keeping category colors and weekly capacity outside the Roadmap runtime module.

- **2026-05-02:** Financial dashboard stats, tables, and card renderers were split from `js/financials.js` into `js/financials-render.js`; `js/financials.js` focused on loading the Financials read models at that checkpoint.

- **2026-05-02:** Tasks tab domain/group list rendering was split from `js/tasks.js` into `js/tasks-render.js`; `js/tasks.js` now holds task state, loading, and status toggles.

- **2026-05-02:** Shared task domain display metadata was split from `js/tasks.js` into `js/tasks-domains.js`; this was later superseded when Planner stopped depending on the retired Tasks renderer globals.

- **2026-05-02:** Weekly Checklist list and week calendar render helpers were split from `js/checklist.js` into `js/checklist-render.js`; `js/checklist.js` now holds checklist state and persistence helpers.

- **2026-05-02:** Weekly Checklist item definitions and calendar day templates were split from `js/checklist.js` into `js/checklist-definitions.js`, keeping static checklist content separate from state and rendering behavior.

- **2026-05-02:** Legacy Story Dashboard section renderers and thread status helper were split from `js/story-dashboard.js` into `js/story-dashboard-render.js`; `js/story-dashboard.js` holds dashboard state and source loading only.

- **2026-05-02:** Legacy Story Dashboard filter tab helpers were split from `js/story-dashboard.js` into `js/story-dashboard-filters.js`; dashboard filters now live outside the Story Dashboard load shell.

- **2026-05-02:** Planner task source-card rendering helpers were split from `js/calendar-tasks.js` into `js/calendar-task-cards.js`; `js/calendar-tasks.js` now focuses on task scheduling mutations and completion helpers.

- **2026-05-02:** Planner task modal open/edit/submit/delete helpers were split from `js/calendar-tasks.js` into `js/calendar-task-modal.js`; task modal behavior now lives outside the task mutation shell.

- **2026-05-02:** Planner calendar-entry source link persistence helpers were split from `js/calendar-modal.js` into `js/calendar-entry-links.js`; at that checkpoint, `js/calendar-modal.js` focused on modal fields, tabs, save, and delete behavior.

- **2026-05-02:** Planner project modal source picker UI, selected-source summary, and Plan-from-source helper were split from `js/calendar-modal.js` into `js/calendar-source-pickers.js`; source picker behavior now lives outside the calendar-entry modal shell.

- **2026-05-02:** Planner task domain labels and recurrence/date helpers were split from `js/calendar-tasks.js` into `js/calendar-task-utils.js`; `js/calendar-tasks.js` now focuses on task cards, modal behavior, scheduling mutations, and completion helpers.

- **2026-05-02:** Planner source inbox filtering, workspace sections, source cards, and thread status helper were split from `js/calendar-sources.js` into `js/calendar-source-workspace.js`; `js/calendar-sources.js` now focuses on source metadata, relationship labels, and project link helpers.

- **2026-05-02:** Planner source detail modal, related-source cards, and attach-to-existing-project helpers were split from `js/calendar-sources.js` into `js/calendar-source-detail.js`; source detail behavior now lives outside the source metadata shell.

- **2026-05-02:** Admin biome list, form, save, and delete helpers were split from `js/admin-ecosystem.js` into `js/admin-biomes.js`; `js/admin-ecosystem.js` now focuses on biosphere profile load/save behavior.

- **2026-05-02:** Admin announcement helpers were split from `js/admin-chronicles.js` into `js/admin-announcements.js`, and chronicle staging review helpers were split into `js/admin-chronicle-staging.js`; at that checkpoint, `js/admin-chronicles.js` focused on chronicle selects, list, form, and persistence.

- **2026-05-02:** Admin species form, create/update/delete, Observed Today, and biome checkbox helpers were split from `js/admin-species.js` into `js/admin-species-form.js`; `js/admin-species.js` focused on species loading, filters, chips, and table rendering at that checkpoint.

- **2026-05-02:** Admin species image panel, upload/link, primary image, and image delete helpers were split from `js/admin-species.js` into `js/admin-species-images.js`; species image management now lives outside the species list shell.

- **2026-05-02:** Admin Media Library tag editing, tag chip rendering, link persistence, save, and clear helpers were split from `js/admin-media.js` into `js/admin-media-tags.js`; `js/admin-media.js` now holds Media Library state, shared utilities, and re-indexing behavior.

- **2026-05-02:** Admin Media Library asset selection and view/edit panel rendering were split from `js/admin-media.js` into `js/admin-media-panel.js`; asset panel rendering now lives outside the Media Library shell.

- **2026-05-02:** Admin Media Library loading, filters, list rendering, and pagination were split from `js/admin-media.js` into `js/admin-media-list.js`; list browsing now lives outside the Media Library shell.

- **2026-05-02:** CRM contact, opportunity, and activity modal/write helpers were split from `js/crm.js` into `js/crm-modals.js`; `js/crm.js` now holds shared CRM state, loading, view switching, and stats only.

- **2026-05-02:** CRM activity filters, activity list, overdue badge, and overdue banner were split from `js/crm.js` into `js/crm-activities.js`; activity list/badge rendering now lives outside the CRM shell.

- **2026-05-02:** CRM pipeline board and sales goal rendering were split from `js/crm.js` into `js/crm-pipeline.js`; pipeline rendering now lives outside the CRM shell.

- **2026-05-02:** CRM contact type filters, contact list, contact detail, and contact activity rows were split from `js/crm.js` into `js/crm-contacts.js`; CRM shared state and load/view switching remain in `js/crm.js`.

- **2026-05-02:** Planner page switching, calendar type toggles, and source filter controls were split from `js/calendar.js` into `js/calendar-filters.js`; `js/calendar.js` now holds shared Planner state, data loading, and entry hydration only.

- **2026-05-02:** Planner board stats, project cards, and quick status updates were split from `js/calendar.js` into `js/calendar-board.js`; board rendering now lives outside the Planner data-loading shell.

- **2026-05-02:** Planner project modal, source pickers, and calendar-entry persistence helpers were split from `js/calendar.js` into `js/calendar-modal.js`; project modal persistence now lives outside the Planner shell.

- **2026-05-02:** Planner loop/thread side panels and production checklist helpers were split from `js/calendar.js` into `js/calendar-panels.js`; at that checkpoint, the panel module loaded before week/month views so `CAL_CHECKLIST_MAP` was available for calendar rendering.

- **2026-05-02:** Planner week/month calendar rendering and navigation helpers were split from `js/calendar.js` into `js/calendar-views.js`; the view module loads after task scheduling helpers because calendar views render scheduled task occurrences.

- **2026-05-02:** Planner source inbox, source metadata, source cards, and source detail attach flow were split from `js/calendar.js` into `js/calendar-sources.js`; source helpers now load between the Planner shell and task scheduling module.

- **2026-05-02:** Planner task scheduling, recurrence, task cards, and task modal behavior were split from `js/calendar.js` into `js/calendar-tasks.js`; that task module now supports the Planner modal and week/month view modules.

- **2026-05-02:** Legacy Story Dashboard state, filters, source loading, and renderers were split from `js/core.js` into `js/story-dashboard.js`; `js/core.js` now stays as the shared browser-global shell for maps, system constants, date/helpers, and page switching.

- **2026-05-02:** Weekly Checklist definitions, localStorage state, list view, and week calendar view were split from `js/core.js` into `js/checklist.js`; Planner still reads `CHECKLIST_ITEMS` from that module.

- **2026-05-02:** Tasks tab state, domain metadata, rendering, and status toggles were split from `js/core.js` into `js/tasks.js`; this historical path was later superseded by the Planner Tasks replacement surface.

- **2026-05-02:** Financial dashboard read models and renderers were split from `js/core.js` into `js/financials.js`, loaded between core page switching and Roadmap.

- **2026-05-02:** Roadmap initiative, timeline, capacity, and step-management code was split from `js/core.js` into `js/roadmap.js`, loaded immediately after core page switching.

- **2026-05-02:** Admin biosphere profile and biome management were split from `js/admin.js` into `js/admin-ecosystem.js`; `js/admin.js` now holds shared Admin state, utilities, upload helpers, and section loading.

- **2026-05-02:** Admin species records, filters, and species image management were split from `js/admin.js` into `js/admin-species.js`, loaded before chronicles and media so shared species state remains available.

- **2026-05-02:** Admin chronicle, announcement, and chronicle-staging code was split from `js/admin.js` into `js/admin-chronicles.js`; Media remains in `js/admin-media.js` and loads after chronicles.

- **2026-05-02:** Admin Media Library code was split from `js/admin.js` into `js/admin-media.js`, with `index.html`, `AGENTS.md`, and app docs updated for the new script order.

- **2026-05-02:** Legacy `core.js` story thread status, task status, and roadmap initiative-step writes now route through `AppAPI`, completing the first pass over obvious raw renderer table-write fetches outside Storage/API helpers.

- **2026-05-02:** Admin species image upload linking now uses `AppAPI.insert` for the `species_images` DB record while keeping WebP upload and Storage cleanup as Storage API primitives.

- **2026-05-02:** Admin Media Library metadata, reviewed-state, and tagging save paths now route through `AppAPI`; local media indexing and Supabase Storage upload/delete primitives remain intentionally separate.

- **2026-05-02:** Admin Chronicles, Announcements, and Chronicle Staging approval/rejection paths now route through `AppAPI`, with chronicle image rollback preserved when DB writes fail after upload.

- **2026-05-02:** Admin Biosphere and Biome save/delete paths now route through `AppAPI`, preserving WebP image rollback behavior when a DB write fails after upload.

- **2026-05-02:** Admin Species create/update/delete and Observed Today actions now route through `AppAPI`; storage-backed species image upload/linking remains intentionally separate for a later upload-focused pass.

- **2026-05-02:** CRM mutation paths now use shared `AppAPI` helpers for contacts, partner opportunities, and activities, removing CRM raw Supabase REST fetches while preserving the existing UI flow.

- **2026-05-02:** Fixed AppAPI load regression by exposing Supabase config constants from `js/config.js` onto `globalThis`; Planner/AppAPI requests now resolve to the real Supabase REST URL again.

- **2026-05-02:** Second refactor pass added shared Supabase REST helpers (`js/api-client.js`), routed selected Planner/Admin mutations through them, and documented the `ELECTRON_RUN_AS_NODE` startup watchout after a read-only launch smoke test.

- **2026-05-02:** First app refactor pass added shared renderer UI helpers (`js/ui.js`), updated script-order docs, fixed admin inline-handler escaping for species image actions, and fixed Planner project edits so clearing optional content fields persists nulls.

- **2026-05-01:** Removed the Story Dashboard from primary navigation and made Planner the default startup page; story-source review/action now lives in Planner Sources while legacy story helper code remains dormant for transition safety.
- **2026-05-01:** Planner gained a Sources workspace that expands story threads, open loops, observations, and tasks into actionable sections with Details, Plan, Task, and thread ready/unmark actions.
- **2026-05-01:** Planner smoke test passed for load, source details, Plan Project, Attach Source, Open Project, source role/note persistence, project role chips, calendar task done/reopen, task/project creation, and Story Dashboard loading.
- **2026-04-30:** Planner source detail project rows now include Open Project, jumping directly to the linked project's Production source map for review/editing.
- **2026-04-30:** Added the original app feature/workflow manual for future AI agents and operators, covering tabs, Planner source-map semantics, migrations, safety rules, and smoke tests; that material was later absorbed into App memory, skills, skill references, and archive.
- **2026-04-30:** Planner direct source-to-existing-project attachment now mirrors thread and loop IDs back to legacy content_calendar array fields after the join-table link succeeds.
- **2026-04-30:** Planner source detail now supports attaching a thread, loop, or observation directly to an existing project with relationship role and link note metadata.
- **2026-04-30:** Planner project cards and source detail project rows now surface saved source relationship roles and link notes for faster source-map review.
- **2026-04-30:** Planner project source links now expose relationship role and link-note controls in the Production source map and persist that metadata to the content-calendar join tables.
- **2026-04-30:** Planner source cards now open a detail modal with Story Dashboard context: metadata, linked observations, related loops/threads, existing project links, and a direct Plan Project action.
- **2026-04-30:** Fixed Planner Calendar one-off task Done/Reopen actions so they redraw the active Week/Month calendar instead of switching through the Planner Inbox flow.
- **2026-04-30:** Fixed Planner Calendar Done Tasks visibility so completed one-off scheduled tasks can be hidden and restored by the calendar toggle instead of disappearing permanently from the view.
- **2026-04-30:** Planner Calendar view now has visibility toggles for Projects, Tasks, and completed task occurrences so Week/Month can be scanned by item type.
- **2026-04-30:** Planner Calendar task items now open the task editor from Week and Month views; Week view keeps Done/Reopen as a separate occurrence action.
- **2026-04-30:** Planner Calendar week/month day cells now expose separate Task and Project add actions so tasks can be created directly on a chosen date.
- **2026-04-30:** Planner Inbox now has task-domain filters so ordinary tasks can be narrowed by Company Ops, Financials, Ecosystem, Content, Engineering, Sales, Web, and related domains.
- **2026-04-30:** Planner header actions now group New Task and New Project together, and task cards can open the New Task modal in edit mode with save/delete support.
- **2026-04-30:** Planner and Tasks now expose a dedicated New Task modal, keeping ordinary task creation separate from video/project creation while supporting optional scheduling fields when migration 005 is active.
- **2026-04-30:** Planner task scheduling controls now expose scheduled date, scheduled time, recurrence rule, interval, and recurrence end date directly on task cards.
- **2026-04-30:** Planner task cards now keep completed tasks recoverable by switching to Tasks/Done after completion, and scheduling now uses an inline date picker with Clear Date instead of a Today-only shortcut.
- **2026-04-30:** Planner gained task scheduling groundwork with migration 005 for task scheduled dates, recurrence metadata, and occurrence-based recurring-task completions; Calendar views can render scheduled task occurrences once the migration is run.
- **2026-04-30:** Planner Inbox now includes ordinary tasks as work items alongside story sources, with task filtering and open/done toggles from the unified planning surface.
- **2026-04-30:** Planner board project cards now support quick status transitions from Planned to In Production to Published, with Reopen for published projects still visible on the board.
- **2026-04-30:** Planner project modal now includes a Production Source Map that summarizes selected threads, observations, and loops with remove controls before save.
- **2026-04-30:** Planner Inbox gained filter parity controls for source type, biome, system, species, status, year, and unplanned/show-planned visibility, with planned/in-production indicators and observation-count badges on source cards.
- **2026-04-30:** Content Calendar tab reframed as Planner with workflow board columns, source filters, and a Story Inbox that can turn threads, loops, or observations into draft projects.
- **2026-04-30:** Content Calendar story-source schema upgraded with join tables for calendar-entry links to story threads, open loops, and direct observations; app integration now reads/writes those links and keeps legacy arrays as a compatibility mirror.
- **2026-04-30:** `miniBIOTA_App` promoted to a Brain-managed domain with this App Operations brief; App sessions report strategic state changes here.
- **2026-04-30:** `miniBIOTA_App` initialized for Codex-first operation with `AGENTS.md`, the original agent protocol material, Codex session helpers, and README. Legacy assistant-specific files were later moved into archive.
- **2026-04-29:** Backend WebP image upload pipeline implemented with Electron main-process Sharp conversion and Supabase Storage upload.
- **2026-04-25:** Monitoring tab live with direct MQTT readings and healthy/stale/offline chip status.
- **2026-04-23:** Media Library/tagging system added for local media asset indexing and review.

## Known Risks & Blockers

- The app has Supabase secret-key access in main-process/local tooling; accidental public or renderer exposure would be a security risk.
- Real admin image upload to Supabase Storage still needs careful live verification with approval if not already completed.
- Packaged build behavior with Sharp/native dependencies should be verified before relying on distributable `.exe` builds.
- Monitoring setpoint/control writes affect the live biosphere and require explicit confirmation before changes.
- App source repo memory and skills must stay current as app architecture, schema assumptions, safety rules, and workflow playbooks change.
- Field Observer authenticated catalog reads are enabled through migration 009. Signed release APK generation and any live sighting saves remain unverified and require explicit approval before use against production data.
- New Planner task hierarchy paths have now been visually smoke tested for the
  Aquatic Club Week-view case, but broader daily-use coverage across Today,
  Month, Timeline, and content production remains worth watching.
- Planner Programs/Operations schema and live Program records exist after
  migration 010, but Program UI create/edit/link behavior still needs
  interactive smoke verification before daily reliance.
- Prompt Library schema is live after migration 012, but create/edit/copy/archive flows still need interactive app smoke verification before daily reliance.

## Cross-Domain Notes

- **Website:** Public website should remain read-only observability. Operator/admin workflows belong in the desktop app.
- **Website:** Field Observer sessions are intended to update `species.date_last_observed` only after a reviewed session save so the public website can show "seen today" immediately without auto-changing curated population fields.
- **Content:** Planner is now the app production surface for story sources and scheduled content. Calendar entries use join-table links to story beats, story threads, open loops, and direct observations; thread and loop legacy array fields remain during transition. Migration 007 adds the live general project-management layer, content projects can now be assigned to general work projects through `content_calendar.work_project_id`, and tasks can be organized under parent tasks through `tasks.parent_task_id`. For scheduled content production, the Company agent should treat the blue `content_calendar` entry as the content due/close record and the teal parent production task plus subtasks as the execution schedule. When a required production subtask moves later than the content date, the content date should move later too.
- **Planner:** Week/Month should read as daily action schedules. Generic
  `work_projects` provide milestone/context visibility instead of flooding
  every day in their date range, and parent task containers with scheduled
  children render the child task as the primary title only on dates with child
  work.
- **All domains:** Prompt Library now stores reusable prompt records in `prompt_library`. These prompts can mature into workflow templates, but create/edit/favorite/archive/restore actions are live app data writes and should be treated as operational records.
- **All domains:** App Planner/Supabase is the shared project/task runtime for
  domain-agent rollout. App's own work lives under the App domain, while each
  domain agent still owns its local wiring verification before being called
  Planner-ready. Programs/Operations are cross-domain umbrellas above projects;
  they coordinate domain-owned projects without overriding domain
  source-of-truth, approval rules, or task/project ownership.
- **Financials:** Financials tab reads `revenue_streams`, `operating_expenses`, `liabilities`, and `planned_purchases`.
- **Hardware:** Monitoring tab reads live biome MQTT data and may later integrate Supabase telemetry snapshot fallback and setpoint controls.
- **Ecosystem/Data:** Species and chronicle admin changes in the app affect public ecology records. Field Observer sighting counts/details should remain history datapoints; curated species population fields remain manually maintained.

## Domain Reference

Full app repo: `M:\miniBIOTA\miniBIOTA_App\`
Historical Brain brief: `11. miniBIOTA_App\app_brief.md`
Historical Brain overview: `11. miniBIOTA_App\app_overview.md`

Brain no longer mirrors App docs. Load active App detail from the source repo:

| File | Contents |
|---|---|
| `AGENTS.md` | App Agent entry point, source-of-truth hierarchy, safety rules, and skill routing |
| `memory/00-index.md` | Memory index, read order, migration status, and archived-doc routing |
| `memory/01-agent-purpose.md` | What the App Agent owns and does not own |
| `memory/02-app-safety-rules.md` | Live data, app launch, telemetry, Storage, migration, and write safety rules |
| `memory/03-app-architecture.md` | Stable app architecture and runtime source-of-truth routing |
| `memory/04-runtime-surfaces.md` | App tabs, major surfaces, and behavior ownership |
| `memory/05-supabase-and-storage-rules.md` | Secret-key, schema, migration, Storage, and rollback constraints |
| `memory/06-renderer-manifest-rules.md` | Renderer script manifest and load-order rules |
| `memory/07-cross-agent-relationships.md` | Brain and domain-agent relationship rules |
| `memory/08-recurring-decisions.md` | Durable recurring decisions and unresolved app decisions |
| `skills/implement-app-feature/SKILL.md` | Playbook for adding or fixing UI/app features |
| `memory/10-field-observer.md` | Private Android Field Observer routing, data contract, install path, and safety notes |
| `skills/refactor-renderer-module/SKILL.md` | Playbook for renderer module refactors |
| `skills/refactor-renderer-module/reference/app-module-map.md` | Current module ownership map and refactor boundaries |
| `skills/refactor-renderer-module/reference/refactor-roadmap.md` | Current refactor status, stop conditions, and maintenance-mode guidance |
| `skills/validate-renderer-manifest/SKILL.md` | Playbook for validating renderer file and manifest changes |
| `skills/validate-renderer-manifest/reference/renderer-manifest.md` | Exact renderer script load-order reference |
| `skills/electron-smoke-test/SKILL.md` | Playbook for app smoke testing when launch/testing is approved |
| `skills/electron-smoke-test/reference/app-smoke-tests.md` | Tab and workflow smoke-test checklist |
| `skills/supabase-safety-review/SKILL.md` | Playbook for Supabase, Storage, telemetry, schema, migration, and secret-key work |
| `skills/supabase-safety-review/reference/schema-migrations.md` | App migration and schema reference |
| `skills/image-pipeline-review/SKILL.md` | Playbook for Site Admin and Media Library image pipeline work |
| `skills/image-pipeline-review/reference/image-pipeline.md` | WebP, Sharp, Supabase Storage, rollback, and packaging guidance |
| `skills/app-doc-closeout/SKILL.md` | Playbook for deciding whether App memory/Brain updates are required at closeout |
| `skills/update-app-memory/SKILL.md` | Playbook for promoting durable App decisions, hazards, and architecture rules into memory |
