---
id: web_brief
title: Web & Digital Presence Brief
domain: web_and_digital_presence
last_updated: 2026-05-15
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
- Telemetry architecture is local-first. The public site now consumes the live read-only telemetry snapshot through `/api/telemetry/overview`, `/live-monitoring`, and biome detail weather panels; it must not imply direct pump switching or centralized actuator control.
- Web Agent context now uses the repo-native memory/skills architecture in `M:\miniBIOTA\miniBIOTA_Web\`: `AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`.
- Brain no longer keeps an active Web `docs/` mirror. `_system/sync_docs.ps1` removes stale `9. miniBIOTA_Web\docs` if it appears.
- App Planner/Supabase is the live Web work queue under `work_domains.key = web` / `domain_id = 8`. After the 2026-05-12 cross-domain cleanup, current active Web projects are IDs `36` through `41`, `57`, `68`, and `79`; legacy/internal project `42` is archived. Web has 9 non-archived work projects and 79 task rows (32 open, 47 done), and Web docs route actionable task status to Planner instead of Markdown task lists.

## Active Priorities
- Keep Web memory and the Company Web report aligned with the public-only, local-first telemetry and control architecture.
- Continue the active UX Interaction Lab scope in App Planner project `40`; the first live `/biosphere#biosphere-ecosystem-map` application pass is stabilized, reusable state patterns are defined in `/ux-lab` and first applied to `/species`, the first shared EEL state-preset promotion pass is complete, `/chronicles` has its first archive state/accessibility pass, shared detail tab/accordion semantics are tightened across core detail pages, `/ux-lab` now includes first-pass journey maps, tighter keyboard/modal preview contracts, and accepted P0 guidance for state presets, loading/end states, detail tabs, and telemetry state coverage. The first live application pass has applied the control-group rule to `/species` filter/search, expanded detail-tab route-contract coverage, polished `/live-monitoring` refresh-state presentation, completed a screenshot-approved `/live-monitoring` sensor-card polish, aligned `/faq` accordions with the shared disclosure contract, hardened the mobile navigation overlay interaction contract, hardened the shared gallery/lightbox modal interaction contract, moved chronicle gallery triggers onto shared lightbox data hooks, and moved chronicle timeline toggles onto delegated interaction hooks while preserving the read-only telemetry boundary and public navigation links. Next Web UX work should focus on owner/design review, real browser/mobile visual QA when tooling is available, or a separately accepted live-surface application while keeping `/ux-lab` and `/ui-kitchen-sink` development-gated and out of production navigation.
- Keep the now-connected desktop-app/coordinator-to-website telemetry handoff production-verified, public-safe, and read-only, including the new biome weather presentation.
- Work through the cleaned Web Planner roadmap: About/supporters and Patreon acknowledgment content, Substack signup/list migration and weekly newsletter assembly, events/news/chronicles product passes, engineering imagery, telemetry hardening, and species-card data polish.
- Support website-related public expectation-setting with a soft
  build-in-public posture. The website can be shown as an in-progress public
  layer for species, interactions, ecosystem history, and telemetry, but should
  not be framed as a finished launch or complete telemetry experience unless
  Josue explicitly approves that scope.
- Build Operation Living Web, the Ecosystem Relationship Graph architecture, as a public species-to-biome-to-biosphere relationship experience; Web architecture is now ready to pause, with broad food-web curation routed to the Research Agent via the Web repo handoff packet.

## Recent Milestones
- 2026-05-15: The public `/faq` About page received the final Brand/Web
  implementation pass and owner visual approval on desktop and mobile. The
  page now leads with `miniBIOTA Builds Living Biospheres`, an About-first
  public identity section, read-only telemetry boundary language, restrained
  supporter/contributor handling, and route-contract coverage for approved
  public framing and forbidden support/control claims. Planner tasks `#553`
  through `#557` were marked done after read-back.
- 2026-05-15: Brand provided screenshot-grounded website visual direction.
  Web recorded the boundary that Brand owns public image meaning, photo
  selection guidance, hero imagery, caption tone, and visual approval rules,
  while Web owns implementation, responsive rendering, optimization,
  accessibility mechanics, route contracts, and design-system integration.
  Approved direction is dark, observational, organism-forward, and
  instrument-like; real miniBIOTA imagery is preferred, and supporter/sponsor/
  Patreon/contributor/member/funding visuals remain owner-approval gated.
- 2026-05-15: Company completed the docs-only Operation Living Intelligence
  Wave 2 Content Story Graph design. Web's role remains downstream public
  review only: future graph outputs may name candidate public surfaces, but no
  Web route behavior, species-card copy, chronicle output, ecosystem-map
  relationship, public messaging, database record, schema, Planner record,
  telemetry behavior, launch/announcement, or source-of-truth change is
  approved by the design.
- 2026-05-15: Company completed the read-only source-availability review for
  the selected Wave 2 Lake Post-Seal packet. The packet is source-available for
  a future no-write App proposal, but Web remains downstream review only:
  candidate public reuse must stay blocked until Content/Research/Web review,
  and no Web route behavior, public copy, chronicle/species/biome output,
  ecosystem-map relationship, database record, schema, Planner record,
  telemetry behavior, launch/announcement, or source-of-truth change was
  approved.
- 2026-05-15: Company prepared the no-write Wave 2 App implementation
  proposal. Web remains downstream review only: future local readback may name
  candidate public-surface paths, but public rendering, route behavior,
  chronicle/species/biome copy, ecosystem-map output, public messaging,
  database records, schema, Planner records, launch/announcement, or
  source-of-truth changes are still unapproved.
- 2026-05-15: Company documented the Operation Living Intelligence Wave 1
  public reuse boundary for the Lake Post-Seal graph pilot. Candidate public
  surfaces such as `/chronicles#chronicle-30`, relevant species pages, the
  Freshwater Lake biome surface, and the biosphere ecosystem map remain
  review-gated only; no Web route behavior, public copy, species-card edit,
  chronicle edit, ecosystem-map output, database record, schema, Planner
  record, telemetry behavior, or public launch/announcement changed.
- 2026-05-15: Company/App generated the local Operation Living Intelligence
  Wave 1.1 public reuse sidecar. The sidecar models public reuse candidates
  and review gates as derived local graph data with `review_required` status.
  It does not authorize Web implementation, route behavior, species-card copy,
  chronicle output, ecosystem-map relationships, public messaging, database
  records, schema, Planner records, telemetry behavior, or public
  launch/announcement.
- 2026-05-14: Accepted P0 UX Interaction Lab slices were converted into App Planner project `40` tasks and completed. The dev-gated lab now has tighter guidance for reusable state presets, loading and end-state behavior, detail-tab interactions, and public telemetry state coverage while keeping implementation of live public surfaces separately scoped.
- 2026-05-14: The first accepted UX Lab live application slices were completed after owner visual review. /species filter/search controls now use the accepted control-group spacing contract, route-contract coverage now protects detail-tab ownership across species, biome, engineering, and biosphere detail surfaces, and /live-monitoring now presents refresh/stale/error state as a stable public status strip.
- 2026-05-14: A screenshot-driven `/live-monitoring` sensor-card polish pass was completed under Planner task `507`; node cards now have an equal-height layout treatment and metric values stay readable across desktop and mobile.
- 2026-05-14: `/faq` accordions were aligned with the shared disclosure contract under Planner task `508`, adding shared data hooks, ARIA state, and Enter/Space keyboard activation while preserving FAQ copy and route behavior.
- 2026-05-14: Mobile navigation was hardened under Planner task `509`; the hamburger now owns the overlay through ARIA state, the overlay traps and returns focus, scroll lock is cleaned up consistently, and Escape/outside-click close behavior is explicit while preserving public navigation links.
- 2026-05-14: The shared gallery/lightbox modal was hardened under Planner task `510`; generated image modals now expose dialog semantics, trap and return focus, coordinate page scroll lock, preserve Escape/outside-click/arrow behavior, and render selected captions with visible focus and reduced-motion handling.
- 2026-05-14: Chronicle gallery triggers were moved onto the shared lightbox interaction contract under Planner task `511`; gallery buttons now use data hooks and accessible labels instead of inline lightbox handlers while preserving timeline expansion behavior.
- 2026-05-14: Chronicle year and entry timeline toggles were moved onto delegated interaction hooks under Planner task `512`, preserving the existing keyboard behavior while removing inline timeline toggle handlers.
- 2026-05-13: Public biome detail pages now render live atmosphere and biome telemetry as paired weather context. Hardware/Wyse publishes the read-only node set to Supabase, and Web presents Atmosphere Weather before Biome Weather with Web-derived public status chips while preserving the no-actuator boundary.
- 2026-05-13: Company/Web/Content public-framing guidance was aligned for the
  website announcement idea. The preferred posture is a soft build-in-public
  update rather than a high-profile launch event, because the site is still a
  months-scale build and some telemetry may be incomplete while sensors need
  replacement. Public copy may point toward the larger goal of making six years
  of species, interactions, ecosystem history, and biome telemetry explorable,
  but should clearly distinguish current site progress from unfinished future
  depth. No website behavior, Planner/Supabase records, app behavior, publish
  records, launch date, sponsor commitment, financial commitment, legal
  decision, or roadmap commitment changed.
- 2026-05-12: Short-form chronicle playback was corrected across data and
  rendering. All published short records and linked short chronicles now use
  `/shorts/` URLs with `media_type='short'`, and the Web renderer now treats
  structured short media as vertical playback even if a future import uses a
  standard YouTube watch URL.
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
- The cleaned Web roadmap still needs source assets and cross-domain inputs for Substack/list migration, weekly newsletter process design, events/news/chronicles content strategy, engineering imagery, and any later owner-approved supporter/sponsor/Patreon/contributor/member/funding recognition.
- `/events`, `/news`, and `/chronicles` remain active public routes but need later content/product development.
- Engineering system pages still need real system images to replace placeholders.
- Public expectation-setting is a near-term risk if website content sends
  viewers to an unfinished page without context. Incomplete telemetry, sensor
  replacement needs, species-card photo/data polish, and still-developing
  interaction/history surfaces should be named as in-progress rather than
  implied as launch-complete.
- Operation Living Intelligence graph outputs must not become public Web output
  until Research, Content, and Web review gates are satisfied. Wave 1 public
  reuse targets are candidate surfaces only; Web route behavior, species-card
  copy, chronicle output, and ecosystem-map relationships remain separately
  scoped and approval-gated.

## Cross-Domain Notes
- **Company/Web Strategy:** Company owns active Web strategy reporting and cross-domain coordination through this report, while detailed Web context lives in `M:\miniBIOTA\miniBIOTA_Web\AGENTS.md`, `memory/00-index.md`, relevant memory files, local playbooks, and exact playbook references. Brain is archive/provenance lookup only during retirement probation.
- **App:** The Electron app owns private operator/admin workflows, telemetry producer handoff work, and the App Planner runtime used as Web's live work queue.
- **Hardware:** Public telemetry depends on local-first coordinator, node freshness, upstream status, and setpoint read models. Check Hardware context before changing live telemetry assumptions.
- **Content:** Chronicles and public story surfaces depend on Content records and publishing closeout decisions.
- **Content:** Website-related audience updates should explain the slower
  content cadence and invite viewers into the build without creating a launch
  promise. The Content Agent owns the story and post sequence; Web owns the
  public site implementation and current capability truth.
- **Research:** Scientific and ecological claims must reflect structured ecological truth.
- **Brand:** Public copy should keep the "Biological Startup" voice: technical precision, accessible ecology, and maker clarity.
- **Brand:** Brand owns public visual direction for website imagery, hero
  selection, image approval boundaries, and caption tone. Web should ask Brand
  or the owner before publishing first-viewport hero imagery, identifiable
  people, private workspace details, sensitive hardware/prototype states,
  supporter/sponsor/Patreon/contributor/member/funding visuals, or image/copy
  pairings that could imply unapproved claims.

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
