---
id: financials_brief
title: Financials Brief
domain: financials
last_updated: 2026-05-09
tags: [finance, budget, revenue, debt, brief]
reporting_status: company_active
reporting_phase: phase_10_reporting_active
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\2. miniBIOTA_Financials\\financials_brief.md"
copied_on: 2026-05-09
brain_transition_status: "Company reporting active; Brain source historical/archive lookup only."
---
# Financials Brief

> Phase 3 transition note: This Company report was originally copied from `M:\miniBIOTA\miniBIOTA_Brain\2. miniBIOTA_Financials\financials_brief.md` on 2026-05-09. As of Phase 10, this Company path is the active reporting target; the Brain source is historical/archive lookup only.

*Maintained by: Financials Agent | Update trigger: end of any financials session where revenue, expenses, liabilities, priorities, or cross-domain dependencies changed*

## Current State

| Metric | Value |
|--------|-------|
| Monthly revenue (avg) | ~$460/mo |
| March 2026 inflow | $576.21 (YouTube, Facebook, Patreon, Ko-Fi) |
| April close cash receipts | $294.28 total: $78.21 Patreon deposited 2026-04-06 for April period; $216.07 Facebook deposited 2026-04-23 for March period; YouTube/Ko-Fi had no April deposit |
| Monthly OpEx | $157.52 |
| Net (avg) | ~$302/mo before debt service |
| Credit card debt | $56,674.65 (APRs 16.40%–28.49%) |
| Founder capital | $33,500.00 at 0% APR |
| Total liabilities | $90,174.65 |
| Cash position | $282.35 business cash plus $13,177.78 personal runway support as of 2026-05-02 |

Financials project management is now Planner-integrated under
`work_domains.key = financials` / `domain_id = 2`: 6 Financials work projects
track 14 Financials tasks, with 0 unlinked open Financials tasks after readback
on 2026-05-09. The Financials Agent has verified and tightened local Planner
wiring using the Hardware/App/Company rollout pattern; no live Planner records
or financial records were changed during that local wiring verification.

## Active Priorities

Planner/Supabase is the live Financials work queue for task status. Financial
truth remains in financial tables and close records, not Planner task text.

1. Review pending/needs-review Google $20 charge from 2026-04-28, likely final Claude/Anthropic charge before cancellation.
2. Capture utility cost estimates for biome operations
3. Document tax obligations and filing requirements
4. Build debt payoff projection (avalanche method)
5. Build 3–6 month cash flow projection using the new cash/runway snapshots

## Recent Milestones

- **2026-05-09:** Financials project management was organized in App
  Planner/Supabase: 6 Financials work projects now track revenue/targets,
  operating burn/utilities, debt/liabilities, tax/deduction support, monthly
  close/cash runway/forecasting, and planned purchases/equipment spend.
  Existing Financials tasks were linked, one pending Google-charge review task
  was added, and readback confirmed 0 unlinked open Financials tasks. The
  Financials Agent then verified and tightened local Planner wiring in
  `AGENTS.md`, memory, and `skills/financials-session-closeout/SKILL.md`
  without changing financial records, Planner records, schema, app behavior, or
  Brain docs.
- **2026-05-04:** Financials repo migrated active agent context from the old `docs/` pattern into Codex-native `memory/` and `skills/`. Active detailed sources are now `AGENTS.md`, `memory/00-index.md`, relevant `memory/*.md`, `skills/*/SKILL.md`, and `skills/*/reference/`. Brain no longer keeps a Financials `docs/` mirror.
- **2026-05-02:** Applied the financial close schema and completed April close in Supabase. Added close header, account balance snapshots, one Facebook cash receipt, 16 miniBIOTA expense transactions, six liability snapshots, current liability updates, and planned purchase links for monitor/GPU/phone mount. Posted miniBIOTA expenses totaled $1,353.08, plus one $20 pending/needs-review AI tools charge.
- **2026-05-02:** Added April Patreon to canonical records: $78.21 April 2026 `revenue_streams` row and matching cash receipt deposited 2026-04-06.
- **2026-05-02:** Drafted additive financial close schema migration and monthly close workflow in the Financials repo. New model separates cash receipts, expense transactions, account balance snapshots, and liability snapshots from current-state dashboard tables.
- **2026-05-02:** Updated AI tools operating expenses from the 2026-04-29 subscription change: Anthropic / Claude Code cancelled; OpenAI upgraded from ChatGPT Plus to ChatGPT Pro at $100/mo. Active monthly OpEx is now $157.52.
- **2026-04-30:** `miniBIOTA_Financials` initialized for Codex-first operation and GitHub tracking at `https://github.com/miniBIOTA/miniBIOTA_Financials`. Added `AGENTS.md`, `docs/agent_protocol.md`, Codex session helpers, root `.gitignore`, and README.
- **2026-04-27:** miniBIOTA_Financials repo established as dedicated Financials Agent workspace. `quicken_categories.md` migrated from Brain into `docs/`.
- **2026-04-21:** Quicken category structure established. `mileage_log` table added to Supabase. 603 miles / $404.01 deduction logged for 2026.
- **2026-03-29:** Initial financial data normalized from CSV exports and loaded into Supabase (`operating_expenses`, `liabilities`, `revenue_streams`, `planned_purchases`).

## Known Risks & Blockers

- Utility costs not captured in operating expenses.
- Tax obligations not documented.
- One Apr 28 $20 Google charge is included as pending/needs-review because it likely represents the final Claude/Anthropic charge, but the statement descriptor needs final confirmation.

## Cross-Domain Notes

- **Content:** Mileage trips for field work and content production are deductible — always log in `mileage_log` after field sessions. Artlist ($14.99/mo) is a Content OpEx.
- **Hardware:** Equipment purchases (sensors, ESP32s, build materials) should be logged in `planned_purchases` when received. Utility cost estimates for biome operations still pending.
- **Sales:** `partner_opportunities` table is Sales-domain-owned. Revenue from closed sponsorship deals flows into `revenue_streams` as Sponsorships — Financials tracks the inflow, Sales owns the pipeline.
- **App:** App Planner/Supabase is the shared project/task runtime for
  Financials work status. Financial tables remain the source of truth for
  balances, revenue, expenses, liabilities, mileage, receipts, transactions,
  and close records.

## Domain Reference

Active Financials Agent context: `M:\miniBIOTA\miniBIOTA_Financials\`

Load order for detailed financial work:
1. `AGENTS.md`
2. `memory\00-index.md`
3. Relevant `memory\*.md`
4. Matching `skills\*\SKILL.md`
5. Exact references under `skills\*\reference\`

Brain no longer keeps a Financials `docs/` mirror after the memory/skills migration.

| File | Contents |
|---|---|
| `memory\00-index.md` | Memory file routing and skill routing |
| `skills\analyze-financial-state\SKILL.md` | Cash flow, runway, debt, revenue, burn, liabilities, and current financial state |
| `skills\categorize-expense\SKILL.md` | Quicken category and tax-aware expense classification |
| `skills\categorize-expense\reference\quicken-categories.md` | Full Quicken category and subcategory structure with tax line items |
| `skills\log-mileage\SKILL.md` | Business mileage logging workflow |
| `skills\monthly-close-support\SKILL.md` | Monthly close, receipts, expenses, account balances, liabilities, and planned purchases |
| `skills\monthly-close-support\reference\monthly-close-workflow.md` | Exact monthly close order and table roles |
