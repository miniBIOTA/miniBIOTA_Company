# miniBIOTA Company Agent Repo Registry

This registry is the Company-owned coordination map for Codex-first miniBIOTA agent work.

Company is the active top-level operating coordination repo. Use this registry with `AGENTS.md`, `COMPANY_AGENT_PROTOCOL.md`, Company memory, Company skills, domain repo `AGENTS.md` files, and App Planner/Supabase when current structured project or task state matters.

Brain remains a transition/archive repo during the retirement migration. Brain paths listed here are historical/archive lookup surfaces unless a transition exception is explicitly documented. Company-owned reporting paths are active after Phase 10 reporting activation; helper tooling cleanup and final Brain archive labels remain in progress.

## Registry Boundary

This registry owns repo/domain responsibility, active routing, reporting-path transition state, database ownership boundaries, read/write policy, and risk-level coordination.

It is not live schema truth. Use Supabase MCP or approved read paths for current tables, columns, relationships, logs, advisors, and records. Do not expand this file into a complete table-by-table schema map. If recurring database audits become necessary, generate a separate schema report from live Supabase/MCP plus this registry and treat that report as an audit snapshot.

This registry does not authorize live writes. Raw SQL, migrations, destructive writes, deletes, schema changes, service-role actions, Planner writes, and live-control paths require explicit user approval.

## Active Agent Repos

| Repo | Local path | GitHub repo | Domain role | Primary entry point | Memory path | Skills path | Current reporting path | Company reporting candidate path | Risk |
|---|---|---|---|---|---|---|---|---|---|
| miniBIOTA_Company | `M:\miniBIOTA\miniBIOTA_Company` | `miniBIOTA/miniBIOTA_Company` | Active top-level operating coordination; mission, governance, roadmap, project-management strategy, Programs/Operations governance, dependency mapping, operating review rhythm | `AGENTS.md`; `COMPANY_AGENT_PROTOCOL.md` | `memory/` | `skills/` | Brain transition: `M:\miniBIOTA\miniBIOTA_Company\domains\company\company_overview.md`; `company_brief.md` | Phase 3 candidate: `domains\company\company_overview.md`; `domains\company\company_brief.md` | Low |
| miniBIOTA_Brain | `M:\miniBIOTA\miniBIOTA_Brain` | `miniBIOTA/miniBIOTA_Brain` | Transition protocol, historical registry, source-of-truth routing, briefs/exports, archive, retirement guardrails | `AGENTS.md`; `BRAIN_AGENT_PROTOCOL.md` | `memory/` | `skills/` | N/A | Archive/transition references only after Phase 10 | Medium |
| miniBIOTA_Financials | `M:\miniBIOTA\miniBIOTA_Financials` | `miniBIOTA/miniBIOTA_Financials` | Finance, revenue, expenses, liabilities, monthly closes, receipts, mileage, tax support | `AGENTS.md` | `memory/` | `skills/` | Company active: `domains\financials\financials_overview.md`; `domains\financials\financials_brief.md` | Historical Brain source: `M:\miniBIOTA\miniBIOTA_Brain\2. miniBIOTA_Financials\financials_overview.md`; `financials_brief.md` | Medium |
| miniBIOTA_Research | `M:\miniBIOTA\miniBIOTA_Research` | `miniBIOTA/miniBIOTA_Research` | Ecosystem research, species, biomes, observations, ecological interpretation, claim safety | `AGENTS.md` | `memory/` | `skills/` | Company active: `domains\research\research_overview.md`; `domains\research\research_brief.md` | Historical Brain source: `M:\miniBIOTA\miniBIOTA_Brain\3. miniBIOTA_Research\research_overview.md`; `research_brief.md` | Medium |
| miniBIOTA_Brand | `M:\miniBIOTA\miniBIOTA_Brand` | `miniBIOTA/miniBIOTA_Brand` | Brand, messaging, identity, channel strategy, audience fit, public language | `AGENTS.md` | `memory/` | `skills/` | Company active: `domains\brand\brand_overview.md`; `domains\brand\brand_brief.md` | Historical Brain source: `M:\miniBIOTA\miniBIOTA_Brain\4. miniBIOTA_Brand\brand_overview.md`; `brand_brief.md` | Low |
| miniBIOTA_Content | `M:\miniBIOTA\miniBIOTA_Content` | `miniBIOTA/miniBIOTA_Content` | Content production, scripts, publishing closeout, content calendar, story threads, open loops, story beats, pipeline records | `AGENTS.md` | `memory/` | `skills/` | Company active: `domains\content\content_overview.md`; `domains\content\content_brief.md` | Historical Brain source: `M:\miniBIOTA\miniBIOTA_Brain\5. miniBIOTA_Content\content_production_overview.md`; `content_brief.md` | Medium |
| miniBIOTA_Hardware | `M:\miniBIOTA\miniBIOTA_Hardware` | `miniBIOTA/miniBIOTA_Hardware` | Firmware, sensors, telemetry, host services, deployment, enclosure, live-system engineering | `AGENTS.md` | `memory/` | `skills/` | Company active: `domains\hardware\hardware_overview.md`; `domains\hardware\hardware_brief.md` | Historical Brain source: `M:\miniBIOTA\miniBIOTA_Brain\6. miniBIOTA_Hardware\hardware_overview.md`; `hardware_brief.md` | High |
| miniBIOTA_Growth | `M:\miniBIOTA\miniBIOTA_Growth` | `miniBIOTA/miniBIOTA_Growth` | Partners, sponsors, sales, events, outreach, pipeline strategy, commercial sequencing | `AGENTS.md` | `memory/` | `skills/` | Company active: `domains\growth\growth_overview.md`; `domains\growth\growth_brief.md` | Historical Brain source: `M:\miniBIOTA\miniBIOTA_Brain\7. miniBIOTA_Growth\growth_overview.md`; `growth_brief.md` | Medium |
| miniBIOTA_Web | `M:\miniBIOTA\miniBIOTA_Web` | `miniBIOTA/miniBIOTA_Web` | Public website, public data surfaces, newsletter/poll intake, public telemetry display | `AGENTS.md` | `memory/` | `skills/` | Company active: `domains\web\web_overview.md`; `domains\web\web_brief.md` | Historical Brain source: `M:\miniBIOTA\miniBIOTA_Brain\9. miniBIOTA_Web\web_overview.md`; `web_brief.md` | Medium |
| miniBIOTA_App | `M:\miniBIOTA\miniBIOTA_App` | `miniBIOTA/miniBIOTA_App` | Internal operator/admin desktop app, Planner runtime, live operations, schema-backed workflows, monitoring, media/admin tooling | `AGENTS.md` | `memory/` | `skills/` | Company active: `domains\app\app_overview.md`; `domains\app\app_brief.md` | Historical Brain source: `M:\miniBIOTA\miniBIOTA_Brain\11. miniBIOTA_App\app_overview.md`; `app_brief.md` | High |

## Former Brain-Only Domains With Phase 9 Ownership Routing

| Domain | Current path | Company reporting candidate path | Current role | Likely future owner options | Risk | Status |
|---|---|---|---|---|---|
| Raw Footage | Historical Brain source: `M:\miniBIOTA\miniBIOTA_Brain\8. Raw Footage\raw_footage_overview.md` | Active Company routing: `domains\raw-footage\raw_footage_overview.md` | Media evidence/proof context and raw footage overview | Company owns proof/archive strategy; App owns Media Library runtime/schema/indexing; Content owns production use; Research owns ecological interpretation | Medium | Phase 9 owner split documented |
| Definitions | Historical Brain source: `M:\miniBIOTA\miniBIOTA_Brain\10. Definitions\definitions_overview.md`; `glossary.md` | Active Company routing: `domains\definitions\definitions_overview.md`; `domains\definitions\glossary.md` | Shared vocabulary across ecology, engineering, product, content, and operations | Company owns central glossary; domains own specialized extensions and corrections | Medium | Phase 9 Company owner documented |

## Supabase Responsibility Map

| Repo | Owned tables, if known | Read-only tables, if known | Controlled-write tables, if known | Migration/admin permissions |
|---|---|---|---|---|
| miniBIOTA_Company | None exclusively documented | `work_domains`, `work_projects`, `tasks`, milestones, company operational records when present; domain records only when needed for coordination | Company Planner records and approved durable context only after explicit user approval | None by default |
| miniBIOTA_Brain | None exclusively; archive/recovery only | Supabase MCP/read awareness only when historical Brain context needs live schema visibility | No normal active helper writes; Brain helper code is historical/recovery only unless explicitly scoped | Schema changes and migrations require explicit user approval |
| miniBIOTA_Financials | `operating_expenses`, `liabilities`, `revenue_streams`, `planned_purchases`, `monthly_financial_closes`, `cash_receipts`, `expense_transactions`, `liability_snapshots`, `account_balance_snapshots`, `financial_accounts`, `mileage_log` | Company, App, and task records only when needed for finance context | Finance tables through controlled helpers or approved close workflows | Finance migrations/admin only with explicit user approval |
| miniBIOTA_Research | `species`, `biomes`, `biosphere_profile`, `observations`, ecological links, science-facing chronicles | `content_pipeline`, `story_threads`, `open_loops`, telemetry summaries when needed for interpretation | Species, observations, chronicles, links, and ecology records through controlled helpers | Schema/admin only with explicit user approval |
| miniBIOTA_Brand | None exclusively documented | Public-facing website, sponsor, newsletter, channel, and task records when relevant | `tasks` and approved marketing or sponsor records if tables exist | None by default |
| miniBIOTA_Content | `content_pipeline`, `content_calendar`, `story_threads`, `story_beats`, `open_loops`, observation links, content-facing chronicles | `species`, `biomes`, `biosphere_profile`, public website records, tasks | Content pipeline, calendar, loops, threads, observations, chronicles through controlled helpers | Content schema migrations only with explicit user approval |
| miniBIOTA_Hardware | `telemetry_snapshot`; future `biome_telemetry` and `setpoint_commands` when approved | `biomes`, `species`, App monitoring records, public telemetry endpoints | Telemetry snapshot writes through approved service/helper paths | Live control, schema, migration/admin, and setpoint paths require explicit user approval |
| miniBIOTA_Growth | None exclusively documented; future CRM/partner records may be shared with App | `partner_opportunities`, CRM/sponsor tables, and tasks | Partner, sponsor, CRM, and task records through controlled helpers if tables are confirmed | None by default |
| miniBIOTA_Web | Public read surfaces and limited public intake tables used by the website | `species`, `biomes`, `biosphere_profile`, `chronicles`, `announcements`, telemetry snapshot, public media | Newsletter signup and poll intake through runtime app code; admin/schema changes explicit only | Web schema/admin only with explicit user approval |
| miniBIOTA_App | Internal operational tables touched by desktop app modules, media records, CRM, calendar, tasks, Planner, site admin, storage-backed records | Broad internal operational records needed by the desktop app | Direct internal service-role writes inside the app, plus migrations/tools when scoped | Migration/admin access only for explicit app/schema tasks |

## Session Commands

Each active repo should support:

```powershell
powershell -ExecutionPolicy Bypass -File "_system/codex_session_start.ps1"
powershell -ExecutionPolicy Bypass -File "_system/codex_session_close.ps1"
```

If a repo lacks one of these commands, treat that as a coordination bug and update this registry after confirming the current repo shape.

## Routing Expectations

- Use Company for active cross-domain operating coordination, planning strategy, Programs/Operations governance, dependency mapping, roadmap cadence, and operating review rhythm.
- Use App for Planner runtime/schema/UI and internal operator/admin implementation.
- Use domain repos for domain implementation truth, domain memory, domain skills, code, and domain-owned structured records.
- Use Brain only for transition guardrails still explicitly in scope, historical lookup, archive/recovery context, and the Brain retirement plan.
- Use Supabase/App Planner for current structured project/task/record state when it matters.
- Use Company exports under `0. Agent Exports/` for broad Company cold starts and cross-domain operating context; Brain exports are historical/archive artifacts.
- Do not write live records without explicit approval.
- Domain agents now use Company reporting paths for normal reporting after Phase 10 activation. Brain brief paths are historical/archive lookup only.

## Phase Status

As of 2026-05-09:

- Phase 0 inventory exists in Brain at `memory/13-brain-retirement-phase-0-inventory.md`.
- Phase 1 Company protocol surfaces exist in Company.
- Phase 2 created this Company registry as the active routing map.
- Phase 3 created Company-owned reports under `domains/`; Phase 10 activated those Company reports as the normal reporting target. Brain domain folders are historical/archive lookup only.
- Phase 4 created Company export tooling and generated Company exports under `0. Agent Exports/`. Company exports are active broad cold-start exports after Phase 10 reporting activation; Brain exports are historical/archive artifacts.
- Phase 5 created the helper/database-awareness ownership plan in `memory/11-helper-and-database-awareness-migration.md` and `_system/database_awareness.md`. Brain helper paths are historical/archive lookup only; use MCP/read-only awareness and Company/domain-owned helpers for normal workflows.
- Phase 6 created the Brain skill migration map in `memory/12-brain-skills-migration.md` and added Company equivalents for active coordination playbooks. Brain skills remain transition-active until domain-agent updates and archive freeze are complete.
- Phase 7 active domain repo doc migrations are complete and Phase 10 reporting activation updated domain startup/closeout surfaces to Company reporting paths. Raw Footage and Definitions owner/path decisions are complete as Phase 9 docs-only routing.
- Phase 8 docs-only Planner/Programs alignment is complete: Company owns Program/Operation governance semantics, owner/lead, dependency/blocker, lifecycle, review cadence, and closeout rules; App owns Planner runtime/schema/UI. Live Planner record verification or writes remain approval-gated follow-up.
- Phase 9 docs-only Raw Footage and Definitions ownership routing is complete: Raw Footage uses Company/App/Content/Research split ownership; Definitions uses Company central glossary with domain-specific extension paths. Brain copies are transition/history until archive freeze.
- Phase 10 archive-freeze edits are active: Company reports are normal reporting targets, Brain startup/closeout helpers are archive-only, App Team presents Brain as archive/recovery context, `YouTube_Extraction` ownership is Content, and Brain helper code is retired from normal workflows. Brain has not been physically moved or deleted. Phase 11 probation is active and tracked in `memory/16-brain-retirement-probation.md`.

## Notes

- This registry intentionally keeps historical Brain source paths for provenance while Company `domains/` paths are the active reporting targets. During Phase 11, any attempted active Brain usage should be logged in `memory/16-brain-retirement-probation.md`.
- This registry does not replace domain repo memory or skills. It routes to them.
- This registry does not replace live Supabase schema inspection.
