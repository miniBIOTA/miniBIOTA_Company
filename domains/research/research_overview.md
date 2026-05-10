---
id: research_overview
title: 3. miniBIOTA_Research
domain: ecosystem_and_data
last_updated: 2026-05-09
tags: [research, ecosystem, species, biomes, observations, food-web, planner]
reporting_status: company_candidate
reporting_phase: brain_retirement_phase_3
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\3. miniBIOTA_Research\\research_overview.md"
copied_on: 2026-05-09
brain_transition_status: "Company reporting active; Brain source historical/archive lookup only."
---
# 3. miniBIOTA_Research

> Phase 3 transition note: This Company report was originally copied from `M:\miniBIOTA\miniBIOTA_Brain\3. miniBIOTA_Research\research_overview.md` on 2026-05-09. As of Phase 10, this Company path is the active reporting target; the Brain source is historical/archive lookup only.

## Scope
- Owns miniBIOTA's scientific evidence layer: species-state context, ecological mechanisms, organism identification support, claim checks, uncertainty tracking, experiment background, closed-system risk analysis, and research handoff briefs.
- Provides ecological grounding for Brain, Content, Web, App, Hardware, Brand, Growth, and Financials.
- Stays distinct from `miniBIOTA_Content`: Research prepares evidence and safe interpretation; Content owns final scripts, captions, website copy, polished species cards, calendars, and platform metadata.

## Current State
- `miniBIOTA_Research` is the active Research Agent workspace at `M:\miniBIOTA\miniBIOTA_Research\`.
- Supabase remains the source of truth for structured species, observations, story threads, open loops, chronicles, and related ecological records.
- The source repo now uses repo-local memory and skills as active detailed context: `AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`.
- Brain no longer keeps a Research `docs/` mirror or copied ecological reference docs; use the source repo's memory/skills/reference structure for detailed Research context.
- App Planner/Supabase is the live Research/Ecosystem work queue under `work_domains.key = ecosystem` / `domain_id = 3`, with current project records `43` through `48`.
- As of the migrated overview dated 2026-04-30: 170 species records, 239 observations, and 29 active story threads were documented. Verify live Supabase before treating those numbers as current.

## Key Facts
- miniBIOTA is structured as interconnected freshwater, terrestrial-transition, and marine-adjacent biomes with shared hydrology and atmospheric routing.
- The ecological design emphasizes internal nutrient cycling, passive processes, biological food webs, and stability without routine filtration or external feeding.
- Current ecological interpretation must separate observed, inferred, planned, and speculative claims.
- Research handoffs should include source-backed claims, uncertainty notes, safe wording, phrases to avoid, and open questions.
- Planner records organize research work but do not define ecological truth; Supabase structured records remain the current-state source of truth, and Markdown preserves evidence, uncertainty, interpretation, and handoff context.

## Priorities
- Keep species counts, observation totals, thread/loop state, and population status synchronized with Supabase.
- Use App Planner/Supabase for live Research task status and ask before marking completed Planner tasks done.
- Maintain biome profiles, biogeochemical-cycle notes, and instability/risk notes as concise interpretation layers over structured records.
- Resolve identification gaps and unresolved ecological questions, including water beetles, amber snail species, terrestrial isopod, aquatic amphipods, apple snail confirmation, ghost shrimp juvenile recruitment, and macroalgae/sea urchin trajectory.
- Preserve the distinction between internal story threads and public open loops when ecological developments become content opportunities.
- Preserve the distinction between research briefs and finished content assets.

## Risks / Gaps
- Ecology docs can drift quickly because live observations and Supabase records are updated often.
- Planner task wording, dated Markdown references, hardware telemetry, and casual observations can be useful leads, but they must not be treated as confirmed ecology without Research evidence and live-record checks.
- Some biome profile details may lag current Supabase observations.
- Several species identifications remain unresolved or pending.
- Current measurement gaps remain: CO2, O2, methane, salinity drift, pH, and dissolved oxygen are not yet measured.
- Macroalgae dominance, Mesostoma predation, ostracod population decline, ghost shrimp juvenile recruitment, and sea urchin establishment remain active ecological uncertainties.

## Files In This Folder
- `research_brief.md` - current Research Agent manager-facing brief for Brain sessions.
- `research_overview.md` - canonical Brain overview for Research / Ecosystem & Data.

## Source Repo
- Research source repo: `M:\miniBIOTA\miniBIOTA_Research\`
- Active entry point: `M:\miniBIOTA\miniBIOTA_Research\AGENTS.md`
- Memory index: `M:\miniBIOTA\miniBIOTA_Research\memory\00-index.md`
- Active skills: `M:\miniBIOTA\miniBIOTA_Research\skills\`
- Exact Research references live under source-repo `skills/*/reference/`.
- `_system/sync_docs.ps1` keeps Research docs mirroring disabled and removes any stale `3. miniBIOTA_Research\docs` folder if it appears.

## Vault Sync Status
- Last verified: 2026-05-05
- Known divergences: no active Research docs mirror remains in Brain.
- Next sync check: use Research repo memory/skills directly when Research detail is needed.
