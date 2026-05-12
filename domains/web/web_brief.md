---
id: web_brief
title: Web & Digital Presence Brief
domain: web_and_digital_presence
last_updated: 2026-05-11
tags: [website, digital-presence, information-architecture, ui, telemetry, strategy-brief]
reporting_status: company_active
reporting_phase: phase_10_reporting_active
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\9. miniBIOTA_Web\\web_brief.md"
copied_on: 2026-05-09
brain_transition_status: "Company reporting active; Brain source historical/archive lookup only."
---
# Web & Digital Presence Brief

> Phase 3 transition note: This Company report was originally copied from `M:\miniBIOTA\miniBIOTA_Brain\9. miniBIOTA_Web\web_brief.md` on 2026-05-09. As of Phase 10, this Company path is the active reporting target; the Brain source is historical/archive lookup only.

*Maintained by: Web Agent | Update trigger: end of any web session where system state, priorities, milestones, risks, or cross-domain dependencies changed*

## System State
- The site is a public-only Flask website and Railway-hosted application. It owns public biosphere, biome, species, engineering, chronicle, news, events, FAQ, newsletter, poll, and read-only telemetry surfaces.
- The legacy Flask admin surface has been removed from active web code. Forward operator/admin workflows belong in the Electron desktop app, not the public website.
- Telemetry architecture is local-first. The public site now consumes the live read-only telemetry snapshot through `/api/telemetry/overview` and `/live-monitoring`; it must not imply direct pump switching or centralized actuator control.
- Web Agent context now uses the repo-native memory/skills architecture in `M:\miniBIOTA\miniBIOTA_Web\`: `AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`.
- Brain no longer keeps an active Web `docs/` mirror. `_system/sync_docs.ps1` removes stale `9. miniBIOTA_Web\docs` if it appears.
- App Planner/Supabase is the live Web work queue under `work_domains.key = web` / `domain_id = 8`. After the 2026-05-12 cross-domain cleanup, current active Web projects are IDs `36` through `41` plus `57` and Aquatic Club project `68`; legacy/internal project `42` is archived. Web has 8 non-archived work projects and 62 task rows (29 open, 33 done), and Web docs route actionable task status to Planner instead of Markdown task lists.

## Active Priorities
- Keep Web memory and the Company Web report aligned with the public-only, local-first telemetry and control architecture.
- Continue the active UX Interaction Lab scope in App Planner project `40`; the first live `/biosphere#biosphere-ecosystem-map` application pass is stabilized, reusable state patterns are defined in `/ux-lab` and first applied to `/species`, the first shared EEL state-preset promotion pass is complete, `/chronicles` has its first archive state/accessibility pass, shared detail tab/accordion semantics are tightened across core detail pages, `/ux-lab` now includes first-pass journey maps and tighter keyboard/modal preview contracts, and local route/lint/full-test/HTTP smoke checks are green. Next Web UX work should focus on owner/design review, real browser/mobile visual QA when tooling is available, or a separately scoped live-surface application while keeping `/ux-lab` and `/ui-kitchen-sink` development-gated and out of production navigation.
- Keep the now-connected desktop-app/coordinator-to-website telemetry handoff production-verified, public-safe, and read-only.
- Work through the cleaned Web Planner roadmap: About/supporters and Patreon acknowledgment content, Substack signup/list migration and weekly newsletter assembly, events/news/chronicles product passes, engineering imagery, telemetry hardening, and species-card data polish.
- Build Operation Living Web, the Ecosystem Relationship Graph architecture, as a public species-to-biome-to-biosphere relationship experience; Web architecture is now ready to pause, with broad food-web curation routed to the Research Agent via the Web repo handoff packet.

## Recent Milestones
- 2026-05-12: Company applied approved Web Planner cleanup from the
  cross-domain task relevance review: project `36` is now `Public Site Core &
  About/Proof Page`, project `38` is now `Community, Events & Revenue
  Conversion Surfaces`, Patreon/supporter acknowledgment work is grouped under
  the About/supporter surface, and SQL/apply/member-community/course tasks
  remain clarified or approval-gated before implementation.
- 2026-05-11: Completed a Web Planner cleanup with owner approval. Stale completed work was closed, legacy/internal project `42` was archived, active Web project routing now includes `36` through `41` plus `57`, and owner-written roadmap items were captured under the active project set.
- 2026-05-11: Species cards now display `Last seen` from canonical `date_last_observed`. The change was tested, deployed, production-smoked on `/species`, and Planner task `36:355` was marked done with owner-approved status update.
- 2026-05-11: Live public telemetry is connected. The Hardware/Wyse coordinator now publishes the read-only Supabase snapshot consumed by `/api/telemetry/overview` and `/live-monitoring`; the public page renders sensor biomes 2-5 while preserving the public/private boundary around pump, liquid, command, and control data.
- 2026-05-10: Continued the UX Interaction Lab definition pass with first-pass journey maps and tighter dev-gated interaction-preview contracts. `/ux-lab` now covers species discovery, biome understanding, public telemetry inspection, chronicle reading, relationship exploration, gap recovery, tab/mode keyboard behavior, and modal focus review. No live public page behavior, database, schema, Planner, production navigation, admin surface, telemetry control/runtime, or graph engine changed.
- 2026-05-10: Completed a practical QA closeout for the UX Interaction Lab/UI System continuation. Local HTTP smoke checks passed for `/chronicles`, `/species`, `/biosphere`, and filtered Ecosystem Map URLs; compile checks, full tests, route contracts, and relevant token lints passed. In-app browser automation was unavailable because the required browser Node REPL tool was not exposed in the session. No database, schema, Planner, production navigation, admin surface, telemetry control/runtime, or graph engine changed.
- 2026-05-10: Applied the first shared detail-disclosure contract pass across species, biome, engineering, and biosphere pages. Tabs now expose explicit tab/panel relationships with synchronized hidden state, and detail accordions expose owned panels with aria-hidden state through shared behavior. Route contract and relevant token lints passed. No database, schema, Planner, production navigation, admin surface, telemetry control/runtime, or graph engine changed.
- 2026-05-10: Applied the first `/chronicles` archive UX pass from the UX Interaction Lab patterns. The archive empty state now uses the shared no-records treatment, and timeline year groups plus chronicle cards expose clearer controlled-panel and keyboard-operable states. Route contract and relevant token lints passed. No database, schema, Planner, production navigation, admin surface, telemetry control/runtime, or graph engine changed.
- 2026-05-10: Completed the first UX Interaction Lab promotion/refactor checkpoint. Repeated server-rendered EEL states now have shared presets for visual-unavailable, classification-pending, no-records, no-results, and telemetry-unavailable use cases; page-local JavaScript adapters remain local until a second live client-rendered use justifies extraction. Route contract and relevant token lints passed. No database, schema, Planner, production navigation, admin surface, telemetry control/runtime, or graph engine changed.
- 2026-05-09: Applied the first live Operation Living Web UX pass to `/biosphere#biosphere-ecosystem-map`. The public Ecosystem Map remains list-first and server-rendered, now with relationship/node explorer modes, sparse graph messaging, and inspectable relationship detail. No database schema, production navigation, admin surface, public control behavior, or full Cytoscape-style visual graph engine changed.
- 2026-05-09: Continued the live Ecosystem Map interaction pass with hash-aware detail tab activation, keyboard tablist navigation, keyboard-friendly relationship/node mode switching, selected relationship state, and focus transfer to the relationship detail panel. No Planner, database, schema, production navigation, admin surface, telemetry, or full visual graph engine changed.
- 2026-05-09: With owner approval, Planner task 206 was marked done after the first /ux-lab visual hierarchy and priority-interaction polish pass was implemented and verified. Minor UX Lab refinement remains future follow-up, not a blocker for this completed step.
- 2026-05-09: Continued Planner task 206 by making the /ux-lab gallery/modal, timeline filter, and form state previews interactive for design review. This remains development-only UX Lab behavior; no live public page behavior changed.
- 2026-05-09: Continued Planner task 206 by making the /ux-lab tabs, filter/search, and accordion previews interactive for design review. This remains development-only UX Lab behavior; no live public page behavior changed.
- 2026-05-09: Started the /ux-lab polish pass with a current-pass overview, section jump navigation, and an interactive Operation Living Web list/graph/detail mode preview. With owner approval, Planner task 206 was created for continuing UX Lab visual hierarchy polish and priority interactive previews. No live public route behavior or Ecosystem Map behavior changed.
- 2026-05-09: Created Planner task 205 under UX Interaction Lab project 40 and added first-pass Operation Living Web graph/list UX definitions to the dev-gated /ux-lab surface. The pass defines list-first progressive enhancement, sparse graph states, relationship status weighting, species/resource node distinction, selected node/edge detail, cross-page continuity, and Research-reviewed boundaries. With owner approval, Planner task 205 was marked done after implementation and verification. No live Ecosystem Map behavior changed.
- 2026-05-09: Added FAQ/About page-pattern preview to the dev-gated /ux-lab surface and applied the first telemetry UX pass to /live-monitoring. Live monitoring now announces refresh state, handles malformed/unavailable refreshes with public-safe language, and preserves last valid public values. At that point public telemetry still depended on the App/Hardware producer path; the live handoff was later connected on 2026-05-11.
- 2026-05-09: Added first-pass accessibility QA and component-promotion rules to the dev-gated /ux-lab surface. No live route behavior, public navigation, telemetry runtime, or public data behavior changed.
- 2026-05-09: Added first-pass page-pattern previews to the dev-gated /ux-lab surface for index, detail, archive feed, monitoring dashboard, and graph explorer layouts. No live route behavior, public navigation, telemetry runtime, or public data behavior changed.
- 2026-05-09: Added first-pass interaction pattern previews to the dev-gated /ux-lab surface for tabs, filters/search, accordions, gallery/modal behavior, telemetry refresh, form messaging, timelines, and graph controls. With owner approval, Planner task `187` was marked done. No live route behavior, public navigation, telemetry runtime, or public data behavior changed.
- 2026-05-09: Added telemetry UX state previews to the dev-gated /ux-lab surface for source configured/unavailable/malformed/stale, coordinator healthy/offline/degraded, node healthy/stale/unavailable, and partial-degradation states. With owner approval, Planner task `190` was marked done. /live-monitoring, telemetry runtime behavior, production navigation, and public data behavior were not changed.
- 2026-05-09: Web Planner integration wiring completed in Web docs/memory/playbooks following the Hardware pilot pattern. App Planner/Supabase is now documented as the live Web work queue, closeout asks whether completed work maps to Planner tasks before marking anything done, and the UX Interaction Lab scope is tracked under project `40`. Later the same day, the owner resumed UX Lab work, project `40` was moved to active, and task `190` was created for telemetry UX state previews before `/live-monitoring` rollout.
- 2026-05-09: Added a dev-gated `/ux-lab` route in the Web repo behind `ENABLE_UX_LAB=true`. The first pass defines the UX state matrix for loading, empty, no-results, unavailable, stale, warning, error, pending, archived, and success states. `/ui-kitchen-sink` remains the visual component showroom; `/ux-lab` is now the UX definition surface. No public navigation, database, telemetry runtime, or admin surface changed.
- 2026-05-08: Ecosystem Relationship Graph planning and architecture began. Codename: Operation Living Web. Web now has a plain packet index at `planning/ecosystem_relationship_packet_index.md`, a durable spec, applied schema reference, read-side helper foundation, species-detail and biome-detail Ecological Web tab surfaces, a Biosphere-hosted Ecosystem Map tab, a graph payload contract implemented in the Web read helper, a small Freshwater Lake seed batch for proving the architecture, and a Research Agent handoff packet at `planning/ecosystem_relationship_research_handoff.md`. A copy-paste Research kickoff prompt is available at `planning/ecosystem_relationship_research_agent_prompt.md`. Research batch review now has a copy-ready template at `planning/ecosystem_relationship_research_batch_template.md`. Approved batches can be converted through a dry-review SQL packet template at `planning/ecosystem_relationship_insert_packet_template.sql`. Freshwater Lake Batch 2 was applied by the user on 2026-05-08. The review record is `planning/ecosystem_relationship_batch_2_review.md`, the dry-review packet is `planning/ecosystem_relationship_batch_2_dry_review.sql`, and the applied final packet is `planning/ecosystem_relationship_batch_2_final_apply.sql`. Local Flask smoke checks confirmed Batch 2 content on `/biosphere`, `/species/slough-crayfish`, and `/biomes/freshwater-lake`. Broad ecological relationship curation is intentionally deferred for Research before dense public graph expansion. Visual implementation is parked in planning/ecosystem_relationship_visual_handoff.md until Research data or an explicit prototype request is ready.
- 2026-05-07: SEO route metadata pass completed. Public pages now emit standard descriptions, `https://www.minibiota.com` canonical URLs, resilient page titles, canonical `/sitemap.xml`, `/robots.txt`, and existing image sitemap support.
- 2026-05-06: Web runtime Supabase config now prefers `SUPABASE_SECRET_KEY` for server-side Flask reads/intake, falls back to `SUPABASE_PUBLISHABLE_KEY` for lower-privilege use, and retains temporary legacy key fallbacks until Railway no longer depends on them.
- 2026-05-05: Web repo migrated from active `docs/` source-of-truth architecture to repo-local `memory/`, `skills/`, and `skills/*/reference/`. Legacy docs were archived under `archive/superseded/`, exact supporting references moved under local playbooks, and Brain Web docs mirroring was disabled.
- 2026-05-01: Post-EEL consolidation pass completed. Shared detail disclosures, chronicle timeline rendering, and species card rendering now use reusable web primitives/partials while preserving the public visual baseline, SEO-friendly server rendering, compatibility aliases, and existing API behavior.
- 2026-05-01: Web repo standardized for Codex-first agent operation with `AGENTS.md`, session helpers, README, and an `AGENT.md` compatibility note.
- 2026-05-01: Chronicle Relationship Model support went live. Supabase has chronicle source/relationship fields plus `chronicle_subject_links`; Web helpers render related-event cards without duplicate video embeds.
- 2026-04-30: Public-only Flask architecture finalized. Admin routes/assets were removed, retired public routes redirected or removed, active pages aligned to the shared public design system, and route contract tests guard the public route surface.
- 2026-04-23: Public `/live-monitoring` route and `/api/telemetry/overview` API added as a read-only observability scaffold.
- 2026-04-09: Image SEO and social preview standards fully implemented sitewide.

## Known Risks & Blockers
- Web documentation can drift into a web-first control model if telemetry boundaries are not kept explicit.
- Public telemetry now depends on the App/Hardware coordinator producer staying healthy and aligned with the public read-only contract.
- The cleaned Web roadmap still needs source assets and cross-domain inputs for About/supporter recognition, Substack/list migration, weekly newsletter process design, events/news/chronicles content strategy, and engineering imagery.
- `/events`, `/news`, and `/chronicles` remain active public routes but need later content/product development.
- Engineering system pages still need real system images to replace placeholders.

## Cross-Domain Notes
- **Company/Web Strategy:** Company owns active Web strategy reporting and cross-domain coordination through this report, while detailed Web context lives in `M:\miniBIOTA\miniBIOTA_Web\AGENTS.md`, `memory/00-index.md`, relevant memory files, local playbooks, and exact playbook references. Brain is archive/provenance lookup only during retirement probation.
- **App:** The Electron app owns private operator/admin workflows, telemetry producer handoff work, and the App Planner runtime used as Web's live work queue.
- **Hardware:** Public telemetry depends on local-first coordinator, node freshness, upstream status, and setpoint read models. Check Hardware context before changing live telemetry assumptions.
- **Content:** Chronicles and public story surfaces depend on Content records and publishing closeout decisions.
- **Research:** Scientific and ecological claims must reflect structured ecological truth.
- **Brand:** Public copy should keep the "Biological Startup" voice: technical precision, accessible ecology, and maker clarity.

## Domain Reference

Active Web Agent context: `M:\miniBIOTA\miniBIOTA_Web\`
Historical Brain brief: `9. miniBIOTA_Web\web_brief.md`
Historical Brain overview: `9. miniBIOTA_Web\web_overview.md`

Load order for detailed Web work:
1. `AGENTS.md`
2. `memory\00-index.md`
3. Relevant `memory\*.md`
4. Matching `skills\*\SKILL.md`
5. Exact references under `skills\*\reference\`
6. Current code and tests when implementation behavior matters
7. Supabase MCP/read-only awareness and App/domain-owned approved helpers when current structured records matter

Brain no longer keeps a Web `docs\` mirror after the memory/skills migration.

| File | Contents |
|---|---|
| `memory\00-index.md` | Memory and local playbook routing |
| `memory\03-public-site-architecture.md` | Public route model, route contracts, SEO/rendering guardrails |
| `memory\04-ui-design-system.md` | EEL visual baseline, shared primitives, token/lint rules |
| `memory\05-data-and-telemetry-boundaries.md` | Supabase, public writes, telemetry, and hardware-control boundaries |
| `memory\05-database-access.md` | Database access boundaries and App Planner Web project/task routing |
| `memory\06-operational-rules.md` | Write policy, verification matrix, closeout format |
| `memory\08-recurring-decisions.md` | Durable Web decisions and guardrails |
| `skills\change-public-route\SKILL.md` | Route/API/form change workflow |
| `skills\update-ui-system\SKILL.md` | Shared UI and design-system workflow |
| `skills\work-with-public-telemetry\SKILL.md` | Public telemetry workflow |
| `skills\close-web-session\SKILL.md` | Closeout workflow |
| `skills\*\reference\` | Exact supporting references for playbooks |





