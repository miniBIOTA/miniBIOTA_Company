---
id: financials
title: 2. miniBIOTA_Financials
domain: financials
last_updated: 2026-05-14
tags: [finance, budget, revenue, debt, opex, taxes]
reporting_status: company_active
reporting_phase: phase_10_reporting_active
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\2. miniBIOTA_Financials\\financials_overview.md"
copied_on: 2026-05-09
brain_transition_status: "Company reporting active; Brain source historical/archive lookup only."
---
# 2. miniBIOTA_Financials

> Phase 3 transition note: This Company report was originally copied from `M:\miniBIOTA\miniBIOTA_Brain\2. miniBIOTA_Financials\financials_overview.md` on 2026-05-09. As of Phase 10, this Company path is the active reporting target; the Brain source is historical/archive lookup only.

## Scope
- Defines the financial baseline, operating expenses, debt carry, active revenue streams, cash visibility, and tax-obligation support for miniBIOTA.
- This domain is strictly about the numbers: what comes in, what goes out, what is owed, and what is planned.
- Current financial values must be verified in Supabase before analysis. `financials_brief.md` is the active manager-facing snapshot.

## Current State
- Initial operating expense, liabilities, and revenue data was normalized on 2026-03-29 from founder-provided CSV exports and loaded into Supabase.
- Supabase tables are live for operating expenses, liabilities, revenue streams, planned purchases, mileage, monthly closes, account snapshots, cash receipts, expense transactions, and statement reconciliation support.
- Active Financials Agent context lives in `M:\miniBIOTA\miniBIOTA_Financials\AGENTS.md`, `memory\`, `skills\`, and `skills\*\reference\`.
- Financials project management is organized in App Planner/Supabase under `work_domains.key = financials` / `domain_id = 2`. After the 2026-05-14 closeout and recurring monthly close setup, Financials has 9 active/planned work projects and 36 task rows (28 open, 8 done). Planner is task-status truth only; financial truth remains in Supabase finance tables and close records.
- A recurring accountant-style monthly close workflow now lives in Planner project `Monthly Financial Close & Accountant Review` (`work_projects.id=83`) with recurring routine task `Monthly Financial Close and Statement Review` (`tasks.id=488`) and checklist subtasks (`tasks.id=489`-`497`), first scheduled for 2026-06-05.
- `mileage_log` added 2026-04-21 as the IRS-compliant vehicle trip log. Standard mileage rate method is adopted; tolls and parking are separately tracked in Quicken under `Content & Production : Tolls & Parking`.
- Operation Living Intelligence Wave 9 is Company docs-only design. Financials
  context remains aggregate-only by default, and any finance read, summary
  scope, graph/vector projection, generated output, spend approval, or
  financial recommendation needs Financials/Josue approval before it exists.
  Company source/privacy readiness, the Growth/Financials/App/Web owner-review
  packet, and Company owner-review synthesis are complete, but
  Financials-owned acceptance remains pending.

## Financial Baseline
Current values below are a Company reporting snapshot as of 2026-05-14. Verify Supabase rows before analysis or writes.

### Income
- Average monthly inflow: approximately $460/mo.
- Latest closed monthly snapshot: $576.21 total inflow in March 2026.
- April 2026 cash receipts: $294.28 total, consisting of $78.21 Patreon deposited 2026-04-06 for the April period and $216.07 Facebook deposited 2026-04-23 for the March period.
- May Patreon: $102.55 deposited 2026-05-06 and recorded with approval on 2026-05-14.

### Operating Expenses
- Monthly OpEx: $157.52.
- AI tools changed on 2026-04-29: Anthropic / Claude Code cancelled; OpenAI upgraded from ChatGPT Plus to ChatGPT Pro at $100/mo.
- Artlist remains a Content OpEx at $14.99/mo.

### Liabilities
- Credit card debt: $56,674.65, APRs 16.40%-28.49%.
- Founder capital: $33,500.00 at 0% APR.
- Total recorded liabilities: $90,174.65.

### Cash Visibility
- Business cash: $384.90 as of 2026-05-14 from Chase Business Complete Checking current activity.
- Personal runway support: $13,177.78 as of 2026-05-02. Personal runway support remains separate from business cash.
- May AmEx current activity was reviewed from a 2026-05-14 screenshot, but May AmEx expense writes were deferred until the next official statement to avoid partial-month duplication.

## Financials Agent Memory And Skills
Financials uses the repo-native memory/skills architecture. Use the Financials repo directly for detailed context:

Financials Agent wiring treats App Planner/Supabase as the live Financials work queue. Financials sessions should read Planner projects/tasks when planning work, ask before marking completed Planner tasks done at closeout, and keep balances, APRs, cash, revenue, mileage, tax, liability, receipt, transaction, and close truth in financial tables rather than in Planner.

| Path | Purpose |
|---|---|
| `M:\miniBIOTA\miniBIOTA_Financials\AGENTS.md` | Active Financials Agent entry point and hard operating rules |
| `M:\miniBIOTA\miniBIOTA_Financials\memory\00-index.md` | Memory routing and skill routing |
| `M:\miniBIOTA\miniBIOTA_Financials\memory\02-financial-safety-rules.md` | Financial safety, approval, and sensitive-write rules |
| `M:\miniBIOTA\miniBIOTA_Financials\memory\03-financial-data-model.md` | Current-state vs historical close table roles |
| `M:\miniBIOTA\miniBIOTA_Financials\memory\04-tax-and-category-rules.md` | Durable tax/category decisions |
| `M:\miniBIOTA\miniBIOTA_Financials\memory\05-database-access.md` | Database and Planner access boundaries |
| `M:\miniBIOTA\miniBIOTA_Financials\memory\05-monthly-close-rules.md` | Monthly close sequencing and separation rules |
| `M:\miniBIOTA\miniBIOTA_Financials\memory\08-statement-reconciliation-model.md` | Statement visibility and reconciliation model |
| `M:\miniBIOTA\miniBIOTA_Financials\skills\analyze-financial-state\SKILL.md` | Cash flow, runway, debt, revenue, burn, liabilities, taxes, and current state |
| `M:\miniBIOTA\miniBIOTA_Financials\skills\categorize-expense\SKILL.md` | Expense classification workflow |
| `M:\miniBIOTA\miniBIOTA_Financials\skills\log-mileage\SKILL.md` | Mileage logging workflow |
| `M:\miniBIOTA\miniBIOTA_Financials\skills\monthly-close-support\SKILL.md` | Monthly close workflow |
| `M:\miniBIOTA\miniBIOTA_Financials\skills\update-financial-memory\SKILL.md` | Durable financial memory updates |

The Brain Financials folder no longer keeps a `docs/` mirror. Use the source repo paths above unless the Financials repo recreates active source docs.

## Quicken Category Structure
Full category/subcategory/tax line item structure established 2026-04-21. Active reference: `M:\miniBIOTA\miniBIOTA_Financials\skills\categorize-expense\reference\quicken-categories.md`.

Key decisions:
- Standard mileage rate adopted for vehicle deduction, not actual vehicle expenses. Mileage is tracked in Supabase `mileage_log`. Gas stays on the personal side.
- Tolls and parking are deductible on top of the standard mileage rate and route to `Content & Production : Tolls & Parking`.
- Phone and internet stay on the personal side. Business-use percentage is handled at tax time.

2026 mileage logged as of 2026-04-21: 603.0 miles / $404.01 deduction.

## Dashboard
Financials tab lives in the miniBIOTA Electron desktop app (`M:\miniBIOTA\miniBIOTA_App\`). It pulls live from financial tables and displays revenue, monthly burn, liabilities, planned purchases, and related dashboard state.

## Sponsor Pipeline
Sales/Growth owns partner pipeline execution in `partner_opportunities`. Financials tracks revenue after closed/approved deals and keeps financial guardrails for sponsorship planning.

## Priorities
Live task status is in App Planner/Supabase under the Financials domain. Use live Planner records and `financials_brief.md` for current priority ordering. As of 2026-05-14, active manager-facing priorities are:

1. Capture utility cost estimates for biome operations
2. Verify and update debt balances, minimum payments, and APRs
3. Document tax obligations and filing requirements
4. Build a 3-6 month cash flow projection using current Chase visibility, AmEx current-activity review, cash snapshots, burn, debt payments, and planned purchases

## Risks / Gaps
- Utility costs not captured in operating expenses.
- Tax obligations not documented.
- `next_due_date` null on most liability records.
- May AmEx activity is reviewed from current activity but should wait for the next official statement before statement-row import or partial-month expense reconciliation.
- Wave 9 sensitive-domain projection must not expose raw account, statement,
  liability, cash, tax, mileage, transaction, document, or close details without
  Financials-approved scope and privacy rules.

## Files In This Folder

Company-owned active strategic view:
- `financials_overview.md` - this file
- `financials_brief.md` - operational state, active priorities, risks, and cross-domain notes

Financials Agent-owned detailed context:
- `M:\miniBIOTA\miniBIOTA_Financials\AGENTS.md`
- `M:\miniBIOTA\miniBIOTA_Financials\memory\`
- `M:\miniBIOTA\miniBIOTA_Financials\skills\`

Mirror status:
- Brain no longer keeps a Financials `docs/` mirror. Use the Financials repo paths above for active detailed context.
