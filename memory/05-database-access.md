# Company Database Access Responsibilities

The Company Agent is read-only by default for Supabase. It uses structured records only when current operational state, Planner projects/tasks, decisions, milestones, or domain status matter.

Company owns Planner strategy, Programs/Operations governance, roadmap cadence, dependency mapping, and review rhythm for Company work. App owns Planner runtime behavior, schema, UI, and Supabase-backed workflow implementation.

## Access Model

- Database access needed: Yes, limited.
- Default mode: Read-only.
- MCP/read-only awareness is preferred for current schema, table, relationship, log, advisor, and broad database context. Use Company `_system/agent_repo_registry.md` for ownership/risk routing and `_system/database_awareness.md` for Phase 5 transition rules.
- Preferred path: MCP/read-only awareness first. Use MCP/read-only awareness and Company/domain-owned helpers; Brain helper functions are retired from normal workflows.
- Secrets: Local environment variables or ignored local config only.

## Table Responsibilities

| Category | Tables |
|---|---|
| Owned | None exclusively documented |
| Read-only | `work_domains`, `work_projects`, `tasks`, milestones, or company operational records when present |
| Controlled write | Company Planner `work_projects` and `tasks` after explicit user approval or standing Company project-manager delegation; approved decisions, milestones, and durable context through repo/vault updates |
| Admin/migration | None by default |

## Approval Boundary

Explicit user approval is required for raw SQL, migrations, destructive writes, schema changes, service-role actions, Planner project/task writes outside current-session approval or standing domain project-manager delegation, or any write outside scoped helper functions.

## Planner Task Records

Company work is managed in App Planner through Supabase `work_projects` and `tasks`.

- Company Planner records live under `work_domains.key = company_ops` / `domain_id = 1`.
- Current Company work projects are `Business Plan & Operating Model`, `Roadmap & Quarterly Objectives`, `AI & Knowledge Infrastructure`, `Operation Living Atlas Coordination`, and `Aquatic Club Talk Program Coordination`.
- Read Planner projects/tasks when current Company work priorities, blockers, sequencing, or completion status matter.
- Creating projects/tasks, linking tasks to projects, adding subtasks, changing workflow status, marking done/reopened, scheduling, changing recurrence, or archiving are live operational writes.
- At closeout, offer to update Planner task status when completed work maps clearly to an open Company Planner task, but ask before writing unless the user explicitly requested the update or standing Company project-manager delegation has been granted.
- Company Planner records coordinate company-level planning. They do not replace domain-owned implementation queues or domain source-of-truth records.
- Scheduled Content production uses a two-layer Planner model: `content_calendar` is the blue content identity, due-date, and closeout record, while the linked Content-domain work project, teal parent production task, and subtasks are the execution schedule. Agents should attach to existing calendar entries instead of creating duplicate generic production tasks, generate production subtasks from the relevant format template, and keep the content scheduled date from appearing earlier than required production work.
- Do not treat Planner schema, UI, runtime behavior, or Supabase workflow implementation as Company-owned implementation work. Route those to App unless Josue explicitly scopes a cross-repo App change.

## Domain Project Manager Access Pattern

Domain agents do not need separate Supabase keys to manage their own Planner work. The key or credential belongs in one controlled technical path: App-owned runtime/tooling, MCP/OAuth, ignored local environment, or a domain-owned helper that does not commit secrets. The domain agent's authority comes from the record ownership fields, not from possessing a unique key.

When Josue grants standing project-management delegation, each domain agent may use the approved shared Planner write path for ordinary `work_projects` and `tasks` inside its own domain only. The agent should keep writes scoped to its `work_domains` record, state intended changes before writing, read back changed rows, and report changed records at closeout.

Standing delegation for ordinary Planner records does not authorize finance table writes, content publish closeout writes, CRM/sponsor/partner commitment writes, ecological public-state writes, web/public behavior changes, app runtime behavior changes, firmware/live-control changes, schema changes, migrations, raw SQL, service-role/admin actions, destructive writes, cross-domain record changes, Programs/Operations writes, or public/sponsor/legal/financial/launch/pricing/campaign/roadmap commitments.

Until standing delegation is explicitly granted, Planner writes remain live Supabase writes requiring explicit approval unless the user requested the exact write in the current session.

## Transition Reporting

At session close, update or flag the Company report only when manager-facing Company state changes:

- `M:\miniBIOTA\miniBIOTA_Company\domains\company\company_brief.md`

Detailed local context stays in this repo. Company reports and exports are the active reporting path; Brain briefs are historical/archive lookup during probation.

## Helper Migration

Phase 5 helper ownership and migration planning lives in `memory/11-helper-and-database-awareness-migration.md`. Do not copy Brain `_system/minibiota_tools.py` into Company unchanged; it is Brain-rooted and mixes Company, Research, Content, Financials, Growth, Web, App, Raw Footage, and Brain vault helper surfaces.
