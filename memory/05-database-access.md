# Company Database Access Responsibilities

The Company Agent is read-only by default for Supabase. It uses structured records only when current operational state, Planner projects/tasks, decisions, milestones, or domain status matter.

## Access Model

- Database access needed: Yes, limited.
- Default mode: Read-only.
- MCP: Brain has broad Supabase MCP read awareness. This domain may use MCP read access for relevant company context, but should escalate cross-domain interpretation to Brain.
- Preferred path: Brain helper functions in `M:\miniBIOTA\miniBIOTA_Brain\_system\minibiota_tools.py`.
- Secrets: Local environment variables or ignored local config only.

## Table Responsibilities

| Category | Tables |
|---|---|
| Owned | None exclusively documented |
| Read-only | `work_domains`, `work_projects`, `tasks`, milestones, or company operational records when present |
| Controlled write | Company Planner `work_projects` and `tasks` only after explicit user approval; approved decisions, milestones, and durable context through repo/vault updates |
| Admin/migration | None by default |

## Approval Boundary

Explicit user approval is required for raw SQL, migrations, destructive writes, schema changes, service-role actions, Planner project/task writes, or any write outside scoped helper functions.

## Planner Task Records

Company work is managed in App Planner through Supabase `work_projects` and `tasks`.

- Company Planner records live under `work_domains.key = company_ops` / `domain_id = 1`.
- Current Company work projects are `Business Plan & Operating Model`, `Roadmap & Quarterly Objectives`, `AI & Knowledge Infrastructure`, and `Operation Living Atlas Coordination`.
- Read Planner projects/tasks when current Company work priorities, blockers, sequencing, or completion status matter.
- Creating projects/tasks, linking tasks to projects, adding subtasks, changing workflow status, marking done/reopened, scheduling, changing recurrence, or archiving are live operational writes.
- At closeout, offer to update Planner task status when completed work maps clearly to an open Company Planner task, but ask before writing unless the user explicitly requested the update.
- Company Planner records coordinate company-level planning. They do not replace domain-owned implementation queues or domain source-of-truth records.

## Brain Reporting

At session close, update Brain when company state changes:

- `M:\miniBIOTA\miniBIOTA_Brain\1. miniBIOTA_Company\company_brief.md`

Report durable decisions, roadmap changes, governance changes, cross-domain priorities, and risks back to Brain. Detailed local context stays in this repo.
