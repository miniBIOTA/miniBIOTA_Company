---
id: financials
title: 2. miniBIOTA_Financials
domain: financials
last_updated: 2026-05-09
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
- Defines the financial baseline, operating expenses, debt carry, active revenue streams, and tax obligations for miniBIOTA.
- This domain is strictly about the numbers — what comes in, what goes out, what's owed, and what's planned.

## Current State
- Initial operating expense, liabilities, and revenue data was normalized on 2026-03-29 from founder-provided CSV exports and loaded into Supabase.
- Supabase tables are live: `operating_expenses`, `liabilities`, `revenue_streams`, `planned_purchases`, `mileage_log`.
- Active Financials Agent context has moved from the old mirrored `docs/` pattern into `M:\miniBIOTA\miniBIOTA_Financials\AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`.
- Financials project management is now organized in App Planner/Supabase under
  `work_domains.key = financials` / `domain_id = 2`: 6 Financials work
  projects track 14 Financials tasks, with 0 unlinked open Financials tasks
  after readback on 2026-05-09.
- `mileage_log` added 2026-04-21: IRS-compliant vehicle trip log. Fields: `trip_date`, `destination`, `purpose`, `project`, `category` (field_work/production/business), `miles`, `irs_rate`, `deduction_amount` (computed). RLS enabled. Standard mileage rate method adopted — tolls and parking are separately tracked in Quicken under `Content & Production : Tolls & Parking`.
- Hardware debt (physical build costs) is currently a secondary priority to establishing digital cash flow.

## Financial Baseline
### Income
- **Total Average Monthly Inflow:** $460.10 (Facebook $193.31, YouTube $170.14, Patreon $87.95, Ko-Fi $8.71)
- **Latest Monthly Snapshot:** $576.21 total inflow in March 2026
- **April 2026 (partial as of 2026-04-21):** Patreon $78.21 (received Apr 6). YouTube and Facebook pending. Ko-Fi and Open Collective pending.

### Operating Expenses
- **Total Monthly OpEx:** $97.52
- Web & Data: $26.25 (OpenAI, Domain, Railway)
- Content Production: $14.99 (Artlist)
- Operations: $36.28 (Google Workspace, Amex annual fee, FL Annual Report filing fee)
- AI Tools: $20.00 (Anthropic Claude Code)
- *Cancelled: Fusion 360 ($40.88/mo), Google AI API ($10.00/mo)*

### Liabilities
- **Credit Cards/Loans:** $56,883.41 total balance, $1,695.00 minimum monthly payments, APRs 16.40%-28.49%
- **Founder Capital:** $33,500.00 at 0% APR (sunk cost)
- **Total Recorded Liabilities:** $90,383.41

### Pending
- Utilities: estimated monthly electricity/water bump from biomes not yet captured

## Financials Agent Memory And Skills
Financials now uses the repo-native memory/skills architecture. Use the Financials repo directly for detailed context:

Financials Agent wiring now treats App Planner/Supabase as the live Financials
work queue. Financials sessions should read Planner projects/tasks when
planning work, ask before marking completed Planner tasks done at closeout, and
keep balances, APRs, cash, revenue, mileage, tax, liability, receipt,
transaction, and close truth in financial tables rather than in Planner.

| Path | Purpose |
|---|---|
| `M:\miniBIOTA\miniBIOTA_Financials\AGENTS.md` | Active Financials Agent entry point and hard operating rules |
| `M:\miniBIOTA\miniBIOTA_Financials\memory\00-index.md` | Memory routing and skill routing |
| `M:\miniBIOTA\miniBIOTA_Financials\memory\02-financial-safety-rules.md` | Financial safety, approval, and sensitive-write rules |
| `M:\miniBIOTA\miniBIOTA_Financials\memory\03-financial-data-model.md` | Current-state vs historical close table roles |
| `M:\miniBIOTA\miniBIOTA_Financials\memory\04-tax-and-category-rules.md` | Durable tax/category decisions |
| `M:\miniBIOTA\miniBIOTA_Financials\memory\05-monthly-close-rules.md` | Monthly close sequencing and separation rules |
| `M:\miniBIOTA\miniBIOTA_Financials\skills\analyze-financial-state\SKILL.md` | Cash flow, runway, debt, revenue, burn, liabilities, taxes, and current state |
| `M:\miniBIOTA\miniBIOTA_Financials\skills\categorize-expense\SKILL.md` | Expense classification workflow |
| `M:\miniBIOTA\miniBIOTA_Financials\skills\log-mileage\SKILL.md` | Mileage logging workflow |
| `M:\miniBIOTA\miniBIOTA_Financials\skills\monthly-close-support\SKILL.md` | Monthly close workflow |
| `M:\miniBIOTA\miniBIOTA_Financials\skills\update-financial-memory\SKILL.md` | Durable financial memory updates |

The Brain Financials folder no longer keeps a `docs/` mirror. Use the source repo paths above unless the Financials repo recreates active source docs.

## Quicken Category Structure
Full category/subcategory/tax line item structure established 2026-04-21. Active reference: `M:\miniBIOTA\miniBIOTA_Financials\skills\categorize-expense\reference\quicken-categories.md`.

Key decisions:
- **Standard mileage rate** adopted for vehicle deduction (not actual expenses). Mileage tracked in Supabase `mileage_log`. Gas stays on personal side.
- **Tolls & Parking** is the vehicle subcategory under Content & Production (replaces Vehicle & Fuel). Tolls deductible on top of standard mileage rate.
- **Phone & Internet** stays on personal side. Business use percentage deducted at tax time — not split in Quicken.

**2026 mileage logged as of 2026-04-21:** 603.0 miles / $404.01 deduction
| Date | Destination | Miles | Deduction |
|---|---|---|---|
| Mar 14 | Aquashella, Orlando FL | 172.0 | $115.24 |
| Mar 26 | Honeymoon Island, FL | 182.0 | $121.94 |
| Apr 4 | Old Town, FL | 120.0 | $80.40 |
| Apr 22 | Spring Hill, FL | 129.0 | $86.43 |

## Dashboard
Financials tab lives in the miniBIOTA Electron desktop app (`M:\miniBIOTA\miniBIOTA_App\`). Pulls live from `revenue_streams`, `operating_expenses`, `liabilities`, `planned_purchases`. Shows: revenue by source (3-month comparison), monthly burn, liabilities with APR and proportional bars, planned purchases queue.

## Sponsor Pipeline
Active partner pipeline now live in Supabase `partner_opportunities` table (added 2026-04-17). Visible in the Sales Pipeline tab of the miniBIOTA desktop app (`M:\miniBIOTA\miniBIOTA_App\`). 5 active prospects: Fritz Aquatics (warm — gifting only, converting to paid), Bambu Lab, Seachem, Autodesk/Fusion 360, Fluval. Target: 2 closed deals by May 1 to reach $2,000/mo break-even.

## Priorities (as of 2026-04-21)
Live task status is now in App Planner/Supabase under the Financials domain.
The historical priority list below predates Planner project organization and
should be treated as context unless confirmed against live Planner records.
Open items in priority order:
1. ~~Create live revenue tracker~~ — Quicken categories established; April revenue entry in progress (return Apr 30 for full close)
2. Capture utility cost estimates (electricity/water) for biome operations
3. Verify and update all debt balances, minimum payments, and APRs — fill missing `next_due_date` fields
4. Document tax obligations and filing requirements
5. Build sponsor/partner pipeline in `partner_opportunities` table
6. Add cash balance / bank snapshot table — **scheduled for April 30** (closing balance + credit card balances + runway calculation)
7. Create one-time expenses log for non-recurring actual spend (monitor, GPU, and other equipment purchases)
8. Add monthly revenue targets per source
9. Build debt payoff projection (avalanche method)
10. Build 3–6 month cash flow projection (requires cash balance table first)

**April 30 return checklist:**
- Log YouTube and Facebook April revenue
- Log Ko-Fi and Open Collective (if any)
- Log actual cost/date for ASUS ProArt monitor and Ulanzi phone mount
- Log RTX 5060 Ti GPU (received Apr 24, actual cost)
- Enter cash balance and credit card balances
- Log any remaining April mileage trips

## Risks / Gaps
- No cash balance / runway visibility yet — highest structural gap. April 30 snapshot planned.
- April 2026 revenue partially entered (Patreon only); YouTube and Facebook still pending.
- Utility costs not captured in operating expenses.
- Tax obligations not documented.
- `next_due_date` null on most liability records.
- Equipment purchases (monitor, GPU) not yet logged as actual expenses — `planned_purchases` still shows them as pending/ordered.

## Files In This Folder

**Company-owned active strategic view:**
- `financials_overview.md` — this file

**Financials Agent-owned (edit in `M:\miniBIOTA\miniBIOTA_Financials\`):**
- `AGENTS.md` - active Financials Agent entry point
- `memory/` - durable financial memory and routing
- `skills/` - repeatable workflow playbooks and exact references
- `financials_brief.md` — operational state, active priorities, risks, cross-domain notes (maintained by Financials Agent)

**Mirror status:**
- Brain no longer keeps a Financials `docs/` mirror. Use the source repo paths above for active detailed context.

**Sync behavior:**
- `_system/sync_docs.ps1` keeps Financials docs mirroring disabled and removes any stale `2. miniBIOTA_Financials\docs` folder if it appears.
