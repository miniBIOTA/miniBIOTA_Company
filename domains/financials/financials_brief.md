---
id: financials_brief
title: Financials Brief
domain: financials
last_updated: 2026-05-14
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
| Credit card debt | $56,674.65 (APRs 16.40%-28.49%) |
| Founder capital | $33,500.00 at 0% APR |
| Total liabilities | $90,174.65 |
| Cash position | $384.90 business cash as of 2026-05-14 plus $13,177.78 personal runway support as of 2026-05-02 |

Financials project management is now Planner-integrated under
`work_domains.key = financials` / `domain_id = 2`. After the 2026-05-12
cross-domain cleanup and financial readback plus the approved 2026-05-14
Financials closeout for tasks `182` and `410`, and the recurring monthly
Financials close routine, Financials has 9 active/planned work projects and 36
task rows (28 open, 8 done). Planner remains task-status truth; financial
tables and close records remain balance/revenue/expense truth.

## Active Priorities

Planner/Supabase is the live Financials work queue for task status. Financial
truth remains in financial tables and close records, not Planner task text.

1. Capture utility cost estimates for biome operations
2. Verify and update debt balances, minimum payments, and APRs
3. Document tax obligations and filing requirements
4. Build 3-6 month cash flow projection using current Chase visibility, current AmEx activity review, cash snapshots, burn, debt payments, and planned purchases

## Recent Milestones

- **2026-05-14:** Financials created the approved recurring `Monthly Financial
  Close & Accountant Review` Planner project (`work_projects.id=83`) with a
  monthly recurring parent routine (`tasks.id=488`) and nine recurring checklist
  subtasks (`tasks.id=489`-`497`), first scheduled for 2026-06-05. The routine
  preserves the approval boundary: actual financial-record writes, statement
  imports, balance updates, liability edits, tax-sensitive changes, schema/app
  changes, and Planner closeout writes still require explicit approval and
  readback.
- **2026-05-14:** Financials completed the current statement visibility pass
  for Planner task `410` with approval. January-April Chase Business Complete
  Checking statements were reviewed, Chase current activity showed a 2026-05-06
  Patreon deposit of $102.55 and a 2026-05-14 business cash balance of
  $384.90, and those May revenue/cash receipt/balance records were added to
  Supabase with readback. The AmEx current-activity screenshot was reviewed
  through 2026-05-14; May AmEx expense writes were intentionally deferred until
  the next official statement to avoid partial-month duplication. Planner tasks
  `182` and `410` were marked done with approval.
- **2026-05-14:** Financials added the missing 2026-03-25 PayPal/eBay Wyse
  computer purchase as a posted $50.88 System Equipment expense after Josue
  confirmed it was the Hardware Wyse computer for the local control network and
  telemetry coordinator.
- **2026-05-14:** Company updated Operation Living Intelligence Financials
  task `415` to review Twelve Labs free-tier limits and paid-plan thresholds
  only after Nemotron/Codex benchmark results exist. Qwen remains
  fallback/benchmark only. This is a cost-review gate only; no paid
  subscription, vendor backend, financial commitment, media upload, App
  runtime change, or schema change was approved.
- **2026-05-13:** Financials added and applied a statement reconciliation layer for full card visibility without polluting miniBIOTA expense totals. January-April 2026 AmEx Business Green Rewards Card statements are now represented in `statement_import_batches` with 72 statement rows, 4 statement document metadata records, and 12 recurring classification rules. User review resolved all initially open Amazon, Walmart, Home Depot, and points-adjustment rows; remaining open statement-review count was verified as zero. The April-statement Google/Claude charge was confirmed as Anthropic/Claude, and Planner task `410` was created for 2026-05-14 to collect May/current bank and card statements; that follow-up was completed on 2026-05-14 with approval.
- **2026-05-12:** Company applied approved Financials Planner cleanup and
  readback. Tasks `96` and `97` were marked complete after verifying
  `account_balance_snapshots`, `expense_transactions`, and `planned_purchases`.
  Task `99` was then marked complete after Josue confirmed April financials
  were entered and readback confirmed monthly close `id=1` is closed for
  `close_month = 2026-04-01` with April cash receipts entered.
- **2026-05-09:** Financials project management was organized in App
  Planner/Supabase: the 6 core Financials work projects track revenue/targets,
  operating burn/utilities, debt/liabilities, tax/deduction support, monthly
  close/cash runway/forecasting, and planned purchases/equipment spend.
  Existing Financials tasks were linked, one then-pending Google-charge review
  task was added and later resolved, and readback confirmed 0 unlinked open
  Financials tasks. The
  Financials Agent then verified and tightened local Planner wiring in
  `AGENTS.md`, memory, and `skills/financials-session-closeout/SKILL.md`
  without changing financial records, Planner records, schema, app behavior, or
  Brain docs.
- **2026-05-04:** Financials repo migrated active agent context from the old `docs/` pattern into Codex-native `memory/` and `skills/`. Active detailed sources are now `AGENTS.md`, `memory/00-index.md`, relevant `memory/*.md`, `skills/*/SKILL.md`, and `skills/*/reference/`. Brain no longer keeps a Financials `docs/` mirror.
- **2026-05-02:** Applied the financial close schema and completed April close in Supabase. Added close header, account balance snapshots, one Facebook cash receipt, 16 miniBIOTA expense transactions, six liability snapshots, current liability updates, and planned purchase links for monitor/GPU/phone mount. Posted miniBIOTA expenses now total $1,373.08 after the formerly pending $20 AI tools charge was confirmed as Anthropic/Claude on 2026-05-13.
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
- May AmEx activity is reviewed from current activity but should wait for the
  next official statement before statement-row import or partial-month expense
  reconciliation.

## Cross-Domain Notes

- **Content:** Mileage trips for field work and content production are deductible - always log in `mileage_log` after field sessions. Artlist ($14.99/mo) is a Content OpEx.
- **Hardware:** Equipment purchases (sensors, ESP32s, build materials) should be logged in `planned_purchases` when received. Utility cost estimates for biome operations still pending.
- **Sales:** `partner_opportunities` table is Sales-domain-owned. Revenue from closed sponsorship deals flows into `revenue_streams` as Sponsorships - Financials tracks the inflow, Sales owns the pipeline.
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
