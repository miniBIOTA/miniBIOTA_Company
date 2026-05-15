---
id: research_brief
title: Research Brief
domain: ecosystem_and_data
last_updated: 2026-05-12
tags: [research, ecosystem, species, biomes, planner, strategy-brief]
reporting_status: company_active
reporting_phase: phase_10_reporting_active
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\3. miniBIOTA_Research\\research_brief.md"
copied_on: 2026-05-09
brain_transition_status: "Company reporting active; Brain source historical/archive lookup only."
---
# Research Brief

> Phase 3 transition note: This Company report was originally copied from `M:\miniBIOTA\miniBIOTA_Brain\3. miniBIOTA_Research\research_brief.md` on 2026-05-09. As of Phase 10, this Company path is the active reporting target; the Brain source is historical/archive lookup only.

*Maintained by: Research Agent | Update trigger: end of any research session where ecosystem state, species counts, observations, risks, milestones, or cross-domain dependencies changed*

## Current State

- `miniBIOTA_Research` is the upstream scientific evidence layer behind miniBIOTA. It owns ecological research, species-state context, organism identification support, claim checks, uncertainty tracking, source-backed mechanisms, experiment background, closed-system risk analysis, and research briefs for downstream agents.
- The repo is explicitly distinct from `miniBIOTA_Content`: Research prepares evidence and content-safe briefs; Content owns final scripts, captions, website copy, polished species cards, content calendars, and platform metadata.
- The repo currently lives at `M:\miniBIOTA\miniBIOTA_Research\` and pushes to GitHub repo `https://github.com/miniBIOTA/miniBIOTA_Research`.
- Existing Brain Ecosystem & Data docs have been absorbed into Research repo memory, skills, and skill references.
- Supabase remains the source of truth for structured species, observations, story threads, open loops, chronicles, and related ecological records.
- App Planner/Supabase is the live Research/Ecosystem work queue under
  `work_domains.key = ecosystem` / `domain_id = 3`. After the 2026-05-12
  cross-domain cleanup, Research has 9 active work projects and 38 task rows
  (37 open, 1 done), including core projects `43` through `48`, Operation
  Living Web/Atlas support projects `58` and `60`, and Aquatic Club claim
  review project `66`.
- Planner tracks work only. Supabase structured records remain ecological truth, and Markdown remains the evidence, uncertainty, interpretation, and handoff context layer.
- As of the migrated overview dated 2026-04-30: 170 species records, 239 observations, and 29 active story threads are documented. Verify live Supabase before treating those numbers as current.

## Active Priorities

- Keep observed, inferred, planned, and speculative ecology clearly separated.
- Use App Planner/Supabase for live Research task status while preserving Supabase as structured ecological truth.
- Keep species counts, observation totals, thread/loop state, and population status synchronized with Supabase.
- Maintain biome profiles and ecological risk notes as concise interpretation layers over structured records.
- Resolve identification gaps and unresolved ecological questions, including water beetles, amber snail species, terrestrial isopod, aquatic amphipods, apple snail confirmation, ghost shrimp juvenile recruitment, and macroalgae/sea urchin trajectory.
- Preserve the distinction between internal story threads and public open loops when ecological developments become content opportunities.
- Preserve the distinction between research briefs and finished content assets. Research should hand off verified points, uncertainty notes, source-backed claims, safe wording, phrases to avoid, and open questions rather than final scripts or polished public copy unless explicitly requested.

## Recent Milestones

- **2026-05-15:** Company completed the docs-only Operation Living
  Intelligence Wave 2 Content Story Graph design:
  `domains/company/operation_living_intelligence_wave_2_content_story_graph_design_2026-05-15.md`.
  Research's boundary is claim safety and observation/open-loop interpretation:
  Wave 2 may use observations as evidence/context in a future read-only graph,
  but observations, open loops, and story beats must not become public claims
  without Research/Content/Web review. No species, observation, thread, loop,
  chronicle, Research note, Supabase/Planner record, public copy, App helper,
  automation, or source-of-truth change was approved.
- **2026-05-15:** Company completed the read-only source-availability review
  for the selected Wave 2 Lake Post-Seal packet:
  `domains/company/operation_living_intelligence_wave_2_lake_post_seal_source_availability_review_2026-05-15.md`.
  Research-relevant result: observations `170-178`, open loops `1`, `2`, `3`,
  `4`, and `7`, and active story threads `1`, `3`, and `5` are available for
  future graph context, while media remains unreviewed and loops remain open
  or advanced rather than resolved. Any future public claim path still needs
  Research/Content/Web review.
- **2026-05-15:** Company prepared the no-write Wave 2 App implementation
  proposal:
  `domains/company/operation_living_intelligence_wave_2_no_write_app_implementation_proposal_2026-05-15.md`.
  Research boundary remains unchanged: observations, loops, and story beats may
  be projected as source context in a future local readback, but the graph must
  block unresolved-loop overclaims, unreviewed-media proof, and any public
  ecological claim without Research/Content/Web review.
- **2026-05-12:** Company applied approved Research/Ecosystem Planner cleanup:
  Aquatic Club claim-review project `66` is active, task `221` now belongs
  under Operation Living Atlas Evidence Integrity, dated task wording was
  cleaned up, and long-running ID/outcome tasks remain target-only or
  dependency-gated rather than daily-scheduled.
- **2026-05-09:** Research Planner integration wiring completed in Research docs/memory/playbooks following the Hardware pilot pattern. App Planner/Supabase is now documented as the live Research/Ecosystem work queue, closeout asks whether completed work maps to Planner tasks before marking anything done, and the Planner/Supabase/Markdown boundary is explicit: Planner tracks work, Supabase owns structured ecological truth, and Markdown preserves evidence, uncertainty, interpretation, and handoff context. No species, biome, observation, story-thread, open-loop, chronicle, ecological link, website, app, schema, migration, telemetry, public content, Supabase, or Planner records were changed by the Research Agent wiring pass.
- **2026-04-30:** `miniBIOTA_Research` created as dedicated Research Agent workspace and initialized for Codex-first operation with `AGENTS.md`, `docs/agent_protocol.md`, Codex session helpers, root `.gitignore`, and README. GitHub: `https://github.com/miniBIOTA/miniBIOTA_Research`.
- **2026-05-05:** Brain Research folder converted to the repo-named memory/skills pattern. Brain folder is now `3. miniBIOTA_Research`; the old copied detail docs and docs mirror were removed; active detailed sources are `M:\miniBIOTA\miniBIOTA_Research\AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`.
- **2026-04-30:** Existing Brain Ecosystem & Data docs copied into `miniBIOTA_Research\docs\` as migration source material; that material was later absorbed into Research memory, skills, skill references, and archive/source references.
- **May 5, 2026:** Research repo instructions clarified its boundary with `miniBIOTA_Content`. New lightweight workflow docs, uncertainty labels, research folder guidance, and Markdown templates define Research as the scientific grounding layer that produces evidence-backed briefs for Content, Brain, Website, species cards, scripts, field notes, and future experiments.
- **May 7, 2026:** Research defined the canonical biome profile data model for Website/App display and ongoing ecological tracking. Active reference: `M:\miniBIOTA\miniBIOTA_Research\skills\species-research\reference\biome-profile-data-model.md`.
- **May 7, 2026:** Research drafted the first biome profile website fill plan, separating fields that can be filled now from relationship cleanup, ideal measurement fields, and claims that are not public-safe yet. Active brief: `M:\miniBIOTA\miniBIOTA_Research\research\research-briefs\2026-05-07-biome-profile-website-fill-plan.md`.
- **May 7, 2026:** After user approval, Research wrote the first low-risk biome profile batch to Supabase `biomes` records 1-6. Updated habitat/display/ecological summary fields only; measurement fields, `last_observed`, species links, observations, threads, loops, chronicles, and content pipeline records were not changed.
- **May 7, 2026:** After user correction, Research updated Marine Shore in Supabase from brackish framing to full saltwater framing. Current live values include `realm = Saltwater`, `interface_tag = Marine / Shoreline`, and `habitat_typology = Fully marine saltwater shoreline.`
- **May 7, 2026:** After user approval, Research inserted 116 missing `species_to_biomes` links using exact parsed `species.main_biome` values. No existing links were deleted and no species records were edited. Post-cleanup biome link totals: Freshwater Lake 33, Lakeshore 23, Lowland Meadow 35, Mangrove Forest 17, Marine Shore 28, Seagrass Meadow 38.
- **2026-04-30:** Migrated overview records 5 new observations logged, sea urchin mortality assumption corrected, Dampwood termite added as `display_status='considered'`, and totals updated to 170 species records, 239 observations, and 29 active threads.
- **May 1, 2026:** Ghost Shrimp / freshwater glass shrimp (*Palaemon paludosus*, id=67) species record enriched after the published short "The ghost shrimp had offspring" (pipeline 350, chronicle 29). Zoea were first observed on April 19, 2026, confirming reproduction, but follow-up observation 240 keeps juvenile recruitment unresolved; the larvae were visible for three nights, then no longer visible after continued checks.
- **May 1, 2026:** Flagfish (*Jordanella floridae*, id=24) species record updated and corrected from `Jordanella florida` to `Jordanella floridae`. The April 17, 2026 longform "My Lake Went Completely Opaque. So I Removed the Fish." is attached to Freshwater Lake biome chronicle 30, documenting the deliberate removal of the lake's only fish to reopen the microcrustacean layer.
- **May 3, 2026:** Daphnia (*Daphnia* sp., likely *Daphnia ambigua*, id=164) species record enriched for the Lake Post-Seal arc. The record now reflects its April 8, 2026 introduction, April 13, 2026 last documented sighting, suspended-algae grazing role, and unresolved long-term establishment under predation, oxygen, and temperature pressure.
- **2026-04-29:** Biome profiles and ecosystem overview updated for current lake, seagrass, marine shore, mangrove, lakeshore, and meadow developments.

## Known Risks & Blockers

- Ecology docs can drift quickly because live observations and Supabase records are updated often.
- Planner task wording, dated Markdown references, hardware telemetry, and casual observations can suggest research work, but they are not ecological truth until verified through Research evidence and live structured records.
- Some biome profile details may lag current Supabase observations.
- Several species identifications remain unresolved or pending.
- Current measurement gaps remain: CO2, O2, methane, salinity drift, pH, and dissolved oxygen are not yet measured.
- Macroalgae dominance, Mesostoma predation, ostracod population decline, ghost shrimp juvenile recruitment, and sea urchin establishment remain active ecological uncertainties.

## Cross-Domain Notes

- **Content:** Research supplies research briefs, source-backed claims, uncertainty notes, safe wording, phrases to avoid, story-thread context, open-loop context, ecological evidence, chronicle candidates, and conservative biological framing. Content owns final scripts, captions, social posts, polished copy, and platform metadata.
- **Website:** Public species, biome, system, and chronicle pages depend on accurate structured records and research-grounded interpretation.
- **Website/App:** Biome profile display should use the canonical biome profile data model in `skills/species-research/reference/biome-profile-data-model.md`, with Supabase as structured source of truth and Markdown as the interpretation/uncertainty layer.
- **Hardware:** Sensor priorities should follow ecological measurement gaps and instability tracking.
- **App:** Data-entry and operator workflows must preserve species, observation, thread, loop, and chronicle link integrity. App also owns the Planner runtime used as Research/Ecosystem's live work queue.
- **Brand:** Public scientific claims should be grounded in observed or clearly qualified inferred research.
- **Growth:** Campaign, sponsorship, course, and Kickstarter claims must reflect documented ecological feasibility and outcomes.
- **Financials:** Research priorities can create field collection, instrumentation, testing, and equipment costs.

## Domain Reference

Full research repo: `M:\miniBIOTA\miniBIOTA_Research\`
Historical Brain brief: `3. miniBIOTA_Research\research_brief.md`
Historical Brain overview: `3. miniBIOTA_Research\research_overview.md`

| File | Contents |
|---|---|
| `AGENTS.md` | Research Agent entry point, source-of-truth hierarchy, boundaries, and workflow routing |
| `memory/00-index.md` | Memory index, load order, migration status, and archived/source-reference routing |
| `memory/01-agent-role-and-boundaries.md` | Research Agent role and domain boundaries |
| `memory/02-source-of-truth-and-write-policy.md` | Source hierarchy, write policy, and live-record rules |
| `memory/03-current-priorities-and-watchouts.md` | Current research priorities, unresolved IDs, and ecological watchouts |
| `memory/04-cross-domain-handoffs.md` | Research handoff expectations for Content, Web, App, Hardware, Brand, Growth, Financials, and Brain |
| `memory/05-supabase-and-structured-record-rules.md` | Supabase read/write constraints and structured ecology rules |
| `memory/06-recurring-corrections.md` | Durable recurring corrections and claim-safety notes |
| `skills/species-research/reference/biome-profiles.md` | Detailed ecological profiles for the six biomes |
| `skills/species-research/reference/biome-profile-data-model.md` | Canonical biome profile data contract for website display, Supabase tracking, Markdown interpretation, relationships, uncertainty labels, and measurement gaps |
| `skills/ecological-mechanism-brief/reference/biogeochemical-cycles.md` | Water, nitrogen, carbon, calcium, salinity, and nutrient-cycle reference |
| `skills/experiment-background/reference/instabilities-and-risks.md` | Current ecological instability and measurement-gap reference |
| `skills/supabase-ecology-read/reference/ecosystem-and-data-overview.md` | Migrated ecosystem overview reference |
| `skills/claim-check/reference/uncertainty-labels.md` | Standard confidence and uncertainty labels for research claims |
