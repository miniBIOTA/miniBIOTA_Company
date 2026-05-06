# Company Database Access Responsibilities

The Company Agent is read-only by default for Supabase. It uses structured records only when current operational state, tasks, decisions, milestones, or domain history matter.

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
| Read-only | `tasks`, `domain_history`, milestones or company operational records when present |
| Controlled write | `tasks`, `domain_history`, approved decisions, milestones, and history records through helpers |
| Admin/migration | None by default |

## Approval Boundary

Explicit user approval is required for raw SQL, migrations, destructive writes, schema changes, service-role actions, or any write outside scoped helper functions.

## Brain Reporting

At session close, update Brain when company state changes:

- `M:\miniBIOTA\miniBIOTA_Brain\1. miniBIOTA_Company\company_overview.md`
- `M:\miniBIOTA\miniBIOTA_Brain\1. miniBIOTA_Company\company_brief.md`

Report durable decisions, roadmap changes, governance changes, cross-domain priorities, and risks back to Brain. Detailed local context stays in this repo.
