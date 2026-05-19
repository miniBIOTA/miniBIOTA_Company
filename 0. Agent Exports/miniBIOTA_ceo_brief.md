# miniBIOTA Company Executive Brief

- Generated: 2026-05-19 08:24:44 -04:00
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
- Operation Living Intelligence has been consolidated into the Intelligent Harness implementation path: Supabase source map, Memgraph projection, Cypher query harness, current local retrieval baseline, LangGraph-style workflow, review-gated answer system, operator dashboard, and later upgrade adapters as needed. Paid/API-key-dependent pgvector embedding is not approved after cost/credential review.

### Priorities
- Coordinate Aquatic Club Talk Readiness as the Q2 strategic forcing function. Remaining Q2 work should stack toward the talk unless urgent operations require otherwise. The talk should help people buy into the miniBIOTA story, feel emotionally connected to the project, understand why the build matters, make their own novel connections, and leave with curiosity, awe, and a sense of future possibilities.
- Coordinate Operation Living Atlas across Company, Research, Content, Web, App, and Raw Footage. Source plan: `M:\miniBIOTA\miniBIOTA_Company\skills\coordinate-cross-domain-priorities\reference\operation-living-atlas-plan.md`; first model arc: Lake Post-Seal / Flagfish / Daphnia / Ghost Shrimp.
- Coordinate Operation Living Intelligence as the Intelligent Harness build: Supabase remains canonical structured truth, Memgraph becomes the derived relationship graph, retrieval adds cited source context, workflow orchestration routes multi-step questions, and all canonical/public writeback remains approval-gated.

### Risks / Gaps
- The roadmap is mostly unfilled after the Q2 talk focus, limiting Q3+ strategic visibility.
- Core business planning is not yet documented in a single operating plan.
- Post-talk Q3+ quarterly objectives and task priorities still need a later review after the Aquatic Club talk window.

## 2. miniBIOTA_Financials

**Summary:** Defines the financial baseline, operating expenses, debt carry, active revenue streams, cash visibility, and tax-obligation support for miniBIOTA.

### Current Status
- Initial operating expense, liabilities, and revenue data was normalized on 2026-03-29 from founder-provided CSV exports and loaded into Supabase.
- Supabase tables are live for operating expenses, liabilities, revenue streams, planned purchases, mileage, monthly closes, account snapshots, cash receipts, expense transactions, and statement reconciliation support.
- Active Financials Agent context lives in `M:\miniBIOTA\miniBIOTA_Financials\AGENTS.md`, `memory\`, `skills\`, and `skills\*\reference\`.

### Priorities
- Capture utility cost estimates for biome operations
- Verify and update debt balances, minimum payments, and APRs
- Document tax obligations and filing requirements

### Risks / Gaps
- Utility costs not captured in operating expenses.
- Tax obligations not documented.
- `next_due_date` null on most liability records.

## 3. miniBIOTA_Research

**Summary:** Owns miniBIOTA's scientific evidence layer: species-state context, ecological mechanisms, organism identification support, claim checks, uncertainty tracking, experiment background, closed-system risk analysis, and research handoff briefs. miniBIOTA is structured as interconnected freshwater, terrestrial-transition, and marine-adjacent biomes with shared hydrology and atmospheric routing.

### Current Status
- `miniBIOTA_Research` is the active Research Agent workspace at `M:\miniBIOTA\miniBIOTA_Research\`.
- Supabase remains the source of truth for structured species, observations, story threads, open loops, chronicles, and related ecological records.
- Supabase now includes the live ecological events layer. Migration `016_ecological_events_schema.sql` and the first two Lake Post-Seal / Seagrass Meadow seed packets were applied on 2026-05-18; the layer contains 22 approved internal events with 90 source links, 36 species links, 22 biome links, 33 story-thread links, and 43 open-loop links. App now has an internal read-only Ecology Events browser for QA; public/runtime access remains gated pending a separate RLS pass.

### Priorities
- Keep species counts, observation totals, thread/loop state, and population status synchronized with Supabase.
- Use App Planner/Supabase for live Research task status and ask before marking completed Planner tasks done.
- Maintain biome profiles, biogeochemical-cycle notes, and instability/risk notes as concise interpretation layers over structured records.

### Risks / Gaps
- Ecology docs can drift quickly because live observations and Supabase records are updated often.
- Planner task wording, dated Markdown references, hardware telemetry, and casual observations can be useful leads, but they must not be treated as confirmed ecology without Research evidence and live-record checks.
- Some biome profile details may lag current Supabase observations.

## 4. miniBIOTA_Brand

**Summary:** Defines the narrative framing, public message, and market-facing identity of miniBIOTA. The brand promise centers on making ecological relationships visible through a hand-built, documented living biosphere.

### Current Status
- Foundational mission, vision, and positioning language is preserved and current. As of 2026-05-15, Brand no longer uses startup-category positioning; current positioning centers on living biospheres, ecological storytelling, and human-scale understanding.
- Reach and distribution strategy is established for Substack, Reddit, press, podcast circuit, YouTube Community, Discord, Ko-fi, Open Collective, and future native comments.
- Operational marketing assets are still thin: reusable messaging pillars, founder narrative, campaign templates, and outreach-ready pitch materials need deeper development.

### Priorities
- Turn the living-biosphere positioning into reusable messaging pillars, About-page language, founder-light narrative, and external positioning language.
- Use App Planner/Supabase for live Brand task status and ask before marking completed Planner tasks done.
- Prepare outreach-ready material for speaking opportunities, press, podcasts, and public-facing partnerships.

### Risks / Gaps
- Brand documentation is still too sparse to support consistent execution across web, content, events, and fundraising, especially now that the new living-biosphere positioning needs reusable copy systems.
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
- As of 2026-05-13, the Wyse is remotely maintainable over SSH from Josue's PC and runs Mosquitto plus the read-only telemetry coordinator on the Opal network at `192.168.8.228`.
- The biosphere is a fully closed working concept, but airtight closure is not yet achieved.
- All 6 biome ESP32 nodes have live firmware; OTA is operational going forward.

### Priorities
- Complete sealing and infrastructure upgrades to reach airtight closed-system standard.
- Execute biomes 2-5 rewire to resolve sensor faults and stabilize readings.
- Maintain public website telemetry against the live Supabase `telemetry_snapshot` row, monitor internal `biome_telemetry` history for climate/control analysis, and keep command queues deferred until explicitly scoped.

### Risks / Gaps
- Biomes 2-5 have SHT31 wiring, water-damage, and connection-quality risks until the rewire is complete.
- Biome 1 has no sensors and remains expected-offline until hardware is installed.
- Website telemetry is reading the live `telemetry_snapshot`; stale/offline handling and public-safe payload semantics should continue to be monitored. Internal `biome_telemetry` history is live for analysis; command queues remain deferred.

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
- Newsletter-sync and broader relationship-management workflow are still being built out.
- CRM/Planner calendar display needs cleanup review so relationship activity context remains distinct from all-domain Planner task truth and does not imply outreach approval.

## 8. Raw Footage

**Summary:** Documentation for the miniBIOTA media asset system Ã¢â‚¬â€ how raw photos and videos are stored, indexed, tagged, and retrieved. The media tagging and review workflow lives in the Electron desktop app (Site Admin Ã¢â€ â€™ Media Library tab).

### Current Status
- No items captured.

### Priorities
- No items captured.

### Risks / Gaps
- No items captured.

## 9. miniBIOTA_Web

**Summary:** Owns the public Flask website and Railway-hosted application for miniBIOTA. Telemetry architecture is local-first and must not imply direct pump switching or centralized actuator control. Biome detail telemetry is public weather/context, not an operator dashboard.

### Current Status
- The site is public-only; legacy Flask admin has been removed from active web code.
- Public telemetry consumes the live read-only Supabase snapshot through `/api/telemetry/overview`, `/live-monitoring`, and paired biome detail weather panels.
- Archived Operation Living Intelligence Wave 8/9 material is provenance only. Web-facing telemetry reuse, public-intake reads, CRM linkage, route/API/form behavior, newsletter sync, public copy, public claims, and generated public output remain separately Web/Growth approval gated.

### Priorities
- Keep Web memory and active Company Web reports aligned with the public-only, local-first telemetry and control architecture.
- Use App Planner/Supabase for live Web task status; keep Markdown focused on architecture, rules, scope, and decisions.
- Continue active UX Lab work through Planner project `40`; use `/ux-lab` for UX states, interaction rules, page patterns, and journeys while keeping development routes out of production navigation. The next UX step should be browser/mobile visual QA when tooling is available or a separately accepted live-surface application.

### Risks / Gaps
- Web documentation can drift into a web-first control model if telemetry boundaries are not kept explicit.
- Public telemetry now depends on the App/Hardware coordinator producer staying healthy and aligned with the public read-only contract.
- Archived Operation Living Intelligence Wave 8 material must not become public Web behavior, public claims, route/API changes, generated public summary output, or public-safe field expansion without separate Web review.

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

**Summary:** Owns the internal Electron desktop app used for miniBIOTA operations. CRM relationship-system tables from migration 013 are live, RLS-enabled, and policy-free; first runtime access must use the internal main-process secret-key bridge. No legacy CRM records have been backfilled into the new tables. Legacy CRM Contacts now support multiple labeled links through `crm_contact_links` rather than one column per social platform.

### Current Status
- Operation Living Intelligence Phase 18 now has an App-owned bridge path from Content observation-intake audit JSON into manual Phase 13 suggestion input. `tools/bridge-oli-content-audit-to-phase13-input.js` accepts Phase 15 legacy parser drafts and Phase 17 raw observation intake drafts, derives collision-safe local input names, rejects canonical IDs/approval fields, and keeps writeback/public/canonical/database actions blocked. The latest manual Phase 13 run from the bridged Phase 17 input is `20260518_123237_grasshopper_legume_vine_followup`, with `8` suggestion-only records and `latest_suggestion_run.json` updated for the Intelligence tab. Raw Phase 17 provenance is preserved in the bridged input; Phase 13 normalized output keeps only the local input path.
- Operation Living Intelligence now has an approved App-owned full Supabase-to-Memgraph projection v1. The helpers read approved canonical Supabase rows with GET/HEAD only, generate ignored local JSONL/Cypher/status files, and rebuild only the `OLIFullProjectionNode` namespace in the existing local Memgraph container. The latest readback passed with `1219` nodes, `3318` relationships, and observations `253`, `254`, `255`, and `256` present exactly once; observation `256` connects to species `162`, biome `3`, story thread `8`, open loop `10`, related story beats `14` and `18`, published pipeline `31`, and chronicle `59` through canonical source rows. Ecosystem interaction/resource rows are deferred from v1 and absent from the current projection. Memgraph remains derived/local/noncanonical and does not approve story links, open loops, beats, chronicles, media metadata, Planner work, public output, or writeback.
- CRM relationship-system migration 013 is live after user-applied Supabase SQL on 2026-05-12. It added 33 additive tables beside the legacy CRM tables, with read-only verification showing all new tables empty and legacy counts unchanged. The CRM tab now includes a read-only Relationship view for schema/table counts and review queues through the internal main-process secret-key bridge. Migration 014 is live as of 2026-05-13, adding flexible labeled `crm_contact_links` rows for legacy CRM contact websites/social/reference links.

### Priorities
- Continue the staged CRM relationship-system UI: expand the read-only Relationship summary into People, Organizations, Opportunities, Interactions, Next Actions, Review, Agent Inbox, and reporting surfaces before any write or backfill workflows.
- Continue consolidating story-source execution and project-management behavior into the unified Planner workflow.
- Verify the first Planner Programs/Operations records in the App UI, then continue Planner Sources polish, beat closeout ergonomics, and recurring-task calendar integration.

### Risks / Gaps
- CRM migration 013 created live RLS-protected tables with no policies. Any publishable-key policy design, legacy backfill, or CRM write workflow must be separately approved and tested. Migration 014's `crm_contact_links` table is live for legacy contact links; creating/editing those links remains a live CRM record write.
- Ecological events are visible internally but remain RLS-gated for public/runtime reads. The browser is read-only; any event write/edit workflow or public access policy must be separately approved.
- Supabase secret-key access would be a major security risk if exposed outside the internal app.

## Cross-Domain Next Actions

- 1. miniBIOTA_Company: Next action - Coordinate Aquatic Club Talk Readiness as the Q2 strategic forcing function. Remaining Q2 work should stack toward the talk unless urgent operations require otherwise. The talk should help people buy into the miniBIOTA story, feel emotionally connected to the project, understand why the build matters, make their own novel connections, and leave with curiosity, awe, and a sense of future possibilities. Gap - The roadmap is mostly unfilled after the Q2 talk focus, limiting Q3+ strategic visibility.
- 2. miniBIOTA_Financials: Next action - Live task status is in App Planner/Supabase under the Financials domain. Use live Planner records and `financials_brief.md` for current priority ordering. As of 2026-05-14, active manager-facing priorities are: Gap - Utility costs not captured in operating expenses.
- 3. miniBIOTA_Research: Next action - Keep species counts, observation totals, thread/loop state, and population status synchronized with Supabase. Gap - Ecology docs can drift quickly because live observations and Supabase records are updated often.
- 4. miniBIOTA_Brand: Next action - Turn the living-biosphere positioning into reusable messaging pillars, About-page language, founder-light narrative, and external positioning language. Gap - Brand documentation is still too sparse to support consistent execution across web, content, events, and fundraising, especially now that the new living-biosphere positioning needs reusable copy systems.
- 5. miniBIOTA_Content: Next action - Sea urchin intro short was published May 4 as pipeline 351, Mottled Shore Crab short May 6 as pipeline 352, and producer-diversity/Caulerpa short May 7 as pipeline 353. Loop 9 is advanced, not resolved; shorts loop 17 tracks whether the variegated sea urchin survives and keeps eating Graceful redweed; shorts loop 18 tracks whether Green Feather Alga spreads too much and needs removal. Gap - Longform working title still TBD.
- 6. miniBIOTA_Hardware: Next action - Complete sealing and infrastructure upgrades to reach airtight closed-system standard. Gap - Biomes 2-5 have SHT31 wiring, water-damage, and connection-quality risks until the rewire is complete.
- 7. miniBIOTA_Growth: Next action - Turn scattered commercial signals into a working operating model covering sponsorships, speaking, audience support, course pre-sale, affiliate-backed resources, and crowdfunding. Gap - Without an explicit commercial system, public interest can accumulate without conversion.
- 8. Raw Footage: Next action - No immediate action recorded. Gap - No explicit gap recorded.
- 9. miniBIOTA_Web: Next action - Keep Web memory and active Company Web reports aligned with the public-only, local-first telemetry and control architecture. Gap - Web documentation can drift into a web-first control model if telemetry boundaries are not kept explicit.
- 10. Definitions: Next action - Keep glossary terminology synchronized with canonical source notes across all domains. Gap - If glossary language lags behind hardware architecture, downstream use may assume centralized pump control or outdated sensor/network standards.
- 11. miniBIOTA_App: Next action - Continue the staged CRM relationship-system UI: expand the read-only Relationship summary into People, Organizations, Opportunities, Interactions, Next Actions, Review, Agent Inbox, and reporting surfaces before any write or backfill workflows. Gap - CRM migration 013 created live RLS-protected tables with no policies. Any publishable-key policy design, legacy backfill, or CRM write workflow must be separately approved and tested. Migration 014's `crm_contact_links` table is live for legacy contact links; creating/editing those links remains a live CRM record write.

