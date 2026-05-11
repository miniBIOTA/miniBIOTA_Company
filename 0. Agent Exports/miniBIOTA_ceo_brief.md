# miniBIOTA Company Executive Brief

- Generated: 2026-05-11 15:14:46 -04:00
- Purpose: Company-side synthesis of domain reports.
- Migration status: Active Company export during Phase 11 Brain retirement probation. Brain exports are historical/archive artifacts.

## Snapshot
- Company is the active top-level operating coordination repo for cross-domain planning, Programs/Operations governance, dependency mapping, roadmap cadence, and review rhythm.
- These exports read Company `domains/` reports, not Brain domain folders.
- Brain remains available for historical lookup, recovery context, and retirement provenance during Phase 11 probation.
- No Planner, Supabase, app, web, firmware, finance, public, sponsor, legal, or roadmap commitment is changed by generating these exports.

## 1. miniBIOTA_Company

**Summary:** Defines the company's mission, vision, strategic direction, operating priorities, project-management strategy, and cross-domain operating model for the miniBIOTA program. Mission: make Earth's ecological complexity visible and accessible on a human scale through engineered, documented closed biospheres.

### Current Status
- miniBIOTA has already been tested as a fully closed working concept in Q1 2026.
- Operation Living Atlas is active as the coordinated backfill program for published content, species histories, chronicles, observations, media, and ecological relationships.
- The near-term operating agenda is still being formalized; the business plan is not yet assembled.

### Priorities
- Coordinate Operation Living Atlas across Company, Research, Content, Web, App, and Raw Footage. Source plan: `M:\miniBIOTA\miniBIOTA_Company\skills\coordinate-cross-domain-priorities\reference\operation-living-atlas-plan.md`; first model arc: Lake Post-Seal / Flagfish / Daphnia / Ghost Shrimp.
- Build a business plan that aligns operations, funding, storytelling, and hardware development.
- Complete the content strategy and story arc so public communication matches the current stage of the project.

### Risks / Gaps
- The roadmap is mostly unfilled after the first confirmed milestone, limiting strategic visibility.
- Core business planning is not yet documented in a single operating plan.
- Q2 goals are not yet defined in `M:\miniBIOTA\miniBIOTA_Company\skills\review-roadmap-implications\reference\strategic-roadmap.md`.

## 2. miniBIOTA_Financials

**Summary:** Defines the financial baseline, operating expenses, debt carry, active revenue streams, and tax obligations for miniBIOTA.

### Current Status
- Initial operating expense, liabilities, and revenue data was normalized on 2026-03-29 from founder-provided CSV exports and loaded into Supabase.
- Supabase tables are live: `operating_expenses`, `liabilities`, `revenue_streams`, `planned_purchases`, `mileage_log`.
- Active Financials Agent context has moved from the old mirrored `docs/` pattern into `M:\miniBIOTA\miniBIOTA_Financials\AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`.

### Priorities
- No items captured.

### Risks / Gaps
- No cash balance / runway visibility yet â€” highest structural gap. April 30 snapshot planned.
- April 2026 revenue partially entered (Patreon only); YouTube and Facebook still pending.
- Utility costs not captured in operating expenses.

## 3. miniBIOTA_Research

**Summary:** Owns miniBIOTA's scientific evidence layer: species-state context, ecological mechanisms, organism identification support, claim checks, uncertainty tracking, experiment background, closed-system risk analysis, and research handoff briefs. miniBIOTA is structured as interconnected freshwater, terrestrial-transition, and marine-adjacent biomes with shared hydrology and atmospheric routing.

### Current Status
- `miniBIOTA_Research` is the active Research Agent workspace at `M:\miniBIOTA\miniBIOTA_Research\`.
- Supabase remains the source of truth for structured species, observations, story threads, open loops, chronicles, and related ecological records.
- The source repo now uses repo-local memory and skills as active detailed context: `AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`.

### Priorities
- Keep species counts, observation totals, thread/loop state, and population status synchronized with Supabase.
- Use App Planner/Supabase for live Research task status and ask before marking completed Planner tasks done.
- Maintain biome profiles, biogeochemical-cycle notes, and instability/risk notes as concise interpretation layers over structured records.

### Risks / Gaps
- Ecology docs can drift quickly because live observations and Supabase records are updated often.
- Planner task wording, dated Markdown references, hardware telemetry, and casual observations can be useful leads, but they must not be treated as confirmed ecology without Research evidence and live-record checks.
- Some biome profile details may lag current Supabase observations.

## 4. miniBIOTA_Brand

**Summary:** Defines the narrative framing, public message, and market-facing identity of miniBIOTA. The brand promise centers on making ecology visible by building and documenting fully closed biospheres.

### Current Status
- Foundational mission and vision language is preserved and clear.
- Reach and distribution strategy is established for Substack, Reddit, press, podcast circuit, YouTube Community, Discord, Ko-fi, Open Collective, and future native comments.
- Operational marketing assets are still thin: reusable messaging pillars, founder narrative, campaign templates, and outreach-ready pitch materials need deeper development.

### Priorities
- Turn the mission and vision into reusable messaging pillars, founder narrative, and external positioning language.
- Use App Planner/Supabase for live Brand task status and ask before marking completed Planner tasks done.
- Prepare outreach-ready material for speaking opportunities, press, podcasts, and public-facing partnerships.

### Risks / Gaps
- Brand documentation is still too sparse to support consistent execution across web, content, events, and fundraising.
- The difference between foundational message and active campaign strategy needs clearer documentation.
- Marketing action items have historically lived in scattered notes and need consolidation into a brand operating system.

## 5. miniBIOTA_Content

**Summary:** Defines the content strategy, platform architecture, production workflow, and story pipeline for miniBIOTA.

### Current Status
- Active Content Agent context now lives in `M:\miniBIOTA\miniBIOTA_Content\AGENTS.md`, `memory/`, `skills/`, `skills/*/reference/`, and `video_projects/`.
- Full content strategy established 2026-04-03. Major revision 2026-04-23: three-format architecture, two-audience ecosystem model, content calendar concept, updated platform routing. Active summaries now route through Content memory and skill playbooks.
- Pipeline has 353 records in `content_pipeline` as of 2026-05-07, including shorts 348-353.

### Priorities
- Sea urchin intro short was published May 4 as pipeline 351, Mottled Shore Crab short May 6 as pipeline 352, and producer-diversity/Caulerpa short May 7 as pipeline 353. Loop 9 is advanced, not resolved; shorts loop 17 tracks whether the variegated sea urchin survives and keeps eating Graceful redweed; shorts loop 18 tracks whether Green Feather Alga spreads too much and needs removal.
- Story beats schema has been applied and initial sea urchin beats seeded; `intervention` is now an allowed `story_beats.beat_type`, and beat 17 uses it. App Planner now supports Story Beats as a source type for Planner production source maps.
- Ghost shrimp larvae follow-up moved to May 12 so the May 5-9 calendar can stay focused on the seagrass longform buildup.

### Risks / Gaps
- Longform working title still TBD.
- Seagrass Meadow macroalgae problem remains unresolved. Loop 9 is advanced by sea urchin introduction, loop 17 tracks whether the remaining urchin survives and keeps grazing Graceful redweed, and loop 18 tracks whether Green Feather Alga spreads too much and needs removal.
- Historical `content_pipeline` metadata backfill incomplete for older records.

## 6. miniBIOTA_Hardware

**Summary:** Owns the physical biosphere system, closure model, control network, firmware, telemetry producer path, sensor topology, and hardware safety rules. ESP32 nodes own local thermostat hysteresis and pump switching.

### Current Status
- As of 2026-05-11, the Wyse is remotely maintainable over SSH from Josue's PC and runs Mosquitto plus the read-only telemetry coordinator on the Opal network at `192.168.8.228`.
- The biosphere is a fully closed working concept, but airtight closure is not yet achieved.
- All 6 biome ESP32 nodes have live firmware; OTA is operational going forward.

### Priorities
- Complete sealing and infrastructure upgrades to reach airtight closed-system standard.
- Execute biomes 2-5 rewire to resolve sensor faults and stabilize readings.
- Maintain public website telemetry against the live Supabase `telemetry_snapshot` row and keep historical telemetry/command queues deferred until explicitly scoped.

### Risks / Gaps
- Biomes 2-5 have SHT31 wiring, water-damage, and connection-quality risks until the rewire is complete.
- Biome 1 has no sensors and remains expected-offline until hardware is installed.
- Website telemetry is reading the live `telemetry_snapshot`; stale/offline handling and public-safe payload semantics should continue to be monitored. History logging and command queues remain deferred.

## 7. miniBIOTA_Growth

**Summary:** Defines how miniBIOTA turns public interest, technical credibility, and storytelling into durable business support. Commercial readiness depends on aligning business planning, brand positioning, content proof, current financial reality, and public conversion surfaces.

### Current Status
- This function is still early, but it is no longer blank: the vault already contains commercial signals across operations, brand, financials, web, and content documentation.
- Known near-term deliverables include a business plan, media kit, sponsorship package, and speaking/pitching activity, but they are not yet organized into one operating system.
- The website already has commercial and audience-capture surfaces through `/donate`, `/events`, `/build`, and newsletter signup routes, while `email_signups` remains capture-only until an external platform sync is defined.

### Priorities
- Turn scattered commercial signals into a working operating model covering sponsorships, speaking, audience support, course pre-sale, affiliate-backed resources, and crowdfunding.
- Build core commercial assets: business plan, media kit, sponsorship package, and lightweight relationship pipeline.
- Establish the newsletter handoff from website capture to an external email platform.

### Risks / Gaps
- Without an explicit commercial system, public interest can accumulate without conversion.
- Newsletter-sync and relationship-management workflow are missing.
- Sponsorship pricing, tier design, partner categories, and outreach cadence are not yet documented.

## 8. Raw Footage

**Summary:** Documentation for the miniBIOTA media asset system Ã¢â‚¬â€ how raw photos and videos are stored, indexed, tagged, and retrieved. The media tagging and review workflow lives in the Electron desktop app (Site Admin Ã¢â€ â€™ Media Library tab).

### Current Status
- No items captured.

### Priorities
- No items captured.

### Risks / Gaps
- No items captured.

## 9. miniBIOTA_Web

**Summary:** Owns the public Flask website and Railway-hosted application for miniBIOTA. Telemetry architecture is local-first and must not imply direct pump switching or centralized actuator control.

### Current Status
- The site is public-only; legacy Flask admin has been removed from active web code.
- Public telemetry consumes the live read-only Supabase snapshot through `/api/telemetry/overview` and `/live-monitoring`.
- Web context now uses the repo-native memory/skills architecture in `M:\miniBIOTA\miniBIOTA_Web\`.

### Priorities
- Keep Web memory and active Company Web reports aligned with the public-only, local-first telemetry and control architecture.
- Use App Planner/Supabase for live Web task status; keep Markdown focused on architecture, rules, scope, and decisions.
- Continue active UX Lab work through Planner project `40`; use `/ux-lab` for UX states, interaction rules, page patterns, and journeys while keeping development routes out of production navigation.

### Risks / Gaps
- Web documentation can drift into a web-first control model if telemetry boundaries are not kept explicit.
- Public telemetry now depends on the App/Hardware coordinator producer staying healthy and aligned with the public read-only contract.
- Planner records can organize Web work, but they do not authorize production navigation, public claims, private/admin surfaces, or runtime behavior changes by themselves.

## 10. Definitions

**Summary:** Maintains the glossary of system terms used across ecology, engineering, and platform documentation. The glossary covers foundational system concepts: atmosphere, biome, closure, rain cycle, processor, freshwater side, marine side, estuary, hydrological continuity.

### Current Status
- Core ecological and hardware terms are defined in `glossary.md`.
- The glossary needs to keep pace with distributed-control, MQTT, and micro-network language as those systems become canonical.
- Business, telemetry, and content terms are underrepresented.

### Priorities
- Keep glossary terminology synchronized with canonical source notes across all domains.
- Expand the glossary to include business, telemetry, and content terms.
- Distinguish clearly between active terms and planned concepts so downstream use does not overstate future-state capabilities.

### Risks / Gaps
- If glossary language lags behind hardware architecture, downstream use may assume centralized pump control or outdated sensor/network standards.
- Missing business and digital terms can create inconsistent wording.
- Planned concepts like estuary behavior may be interpreted as current-state reality if not labeled.

## 11. miniBIOTA_App

**Summary:** Owns the internal Electron desktop app used for miniBIOTA operations. The app uses Supabase publishable keys in renderer/browser-facing config and secret keys only in Electron main-process services or local admin tooling. Internal renderer REST helpers route through an Electron IPC bridge when secret-key access is needed, without exposing the secret key to browser code.

### Current Status
- `miniBIOTA_App` is the active desktop operator surface for miniBIOTA.
- Active tabs are Planner, Financials, CRM, Roadmap, Team, Site Admin, and Monitoring.
- Planner project-manager schema foundation is live after migration 007, and former top-level Weekly Checklist and Tasks behavior has been consolidated into Planner replacement surfaces.

### Priorities
- Continue consolidating story-source execution and project-management behavior into the unified Planner workflow.
- Verify the first Planner Programs/Operations records in the App UI, then continue Planner Sources polish, beat closeout ergonomics, and recurring-task calendar integration.
- Keep secret-key access internal-only and avoid public exposure of app behavior.

### Risks / Gaps
- Supabase secret-key access would be a major security risk if exposed outside the internal app.
- Real admin image upload to Supabase Storage still needs careful live verification when that work resumes.
- Packaged build behavior with Sharp/native dependencies should be verified before relying on distributable builds.

## Cross-Domain Next Actions

- 1. miniBIOTA_Company: Next action - Coordinate Operation Living Atlas across Company, Research, Content, Web, App, and Raw Footage. Source plan: `M:\miniBIOTA\miniBIOTA_Company\skills\coordinate-cross-domain-priorities\reference\operation-living-atlas-plan.md`; first model arc: Lake Post-Seal / Flagfish / Daphnia / Ghost Shrimp. Gap - The roadmap is mostly unfilled after the first confirmed milestone, limiting strategic visibility.
- 2. miniBIOTA_Financials: Next action - No immediate action recorded. Gap - No cash balance / runway visibility yet â€” highest structural gap. April 30 snapshot planned.
- 3. miniBIOTA_Research: Next action - Keep species counts, observation totals, thread/loop state, and population status synchronized with Supabase. Gap - Ecology docs can drift quickly because live observations and Supabase records are updated often.
- 4. miniBIOTA_Brand: Next action - Turn the mission and vision into reusable messaging pillars, founder narrative, and external positioning language. Gap - Brand documentation is still too sparse to support consistent execution across web, content, events, and fundraising.
- 5. miniBIOTA_Content: Next action - Sea urchin intro short was published May 4 as pipeline 351, Mottled Shore Crab short May 6 as pipeline 352, and producer-diversity/Caulerpa short May 7 as pipeline 353. Loop 9 is advanced, not resolved; shorts loop 17 tracks whether the variegated sea urchin survives and keeps eating Graceful redweed; shorts loop 18 tracks whether Green Feather Alga spreads too much and needs removal. Gap - Longform working title still TBD.
- 6. miniBIOTA_Hardware: Next action - Complete sealing and infrastructure upgrades to reach airtight closed-system standard. Gap - Biomes 2-5 have SHT31 wiring, water-damage, and connection-quality risks until the rewire is complete.
- 7. miniBIOTA_Growth: Next action - Turn scattered commercial signals into a working operating model covering sponsorships, speaking, audience support, course pre-sale, affiliate-backed resources, and crowdfunding. Gap - Without an explicit commercial system, public interest can accumulate without conversion.
- 8. Raw Footage: Next action - No immediate action recorded. Gap - No explicit gap recorded.
- 9. miniBIOTA_Web: Next action - Keep Web memory and active Company Web reports aligned with the public-only, local-first telemetry and control architecture. Gap - Web documentation can drift into a web-first control model if telemetry boundaries are not kept explicit.
- 10. Definitions: Next action - Keep glossary terminology synchronized with canonical source notes across all domains. Gap - If glossary language lags behind hardware architecture, downstream use may assume centralized pump control or outdated sensor/network standards.
- 11. miniBIOTA_App: Next action - Continue consolidating story-source execution and project-management behavior into the unified Planner workflow. Gap - Supabase secret-key access would be a major security risk if exposed outside the internal app.

