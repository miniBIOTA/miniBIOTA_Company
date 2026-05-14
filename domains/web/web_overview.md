---
id: web_overview
title: 9. miniBIOTA_Web
domain: web_and_digital_presence
last_updated: 2026-05-14
tags: [web, public-site, flask, telemetry, public-only, design-system, planner]
reporting_status: company_active
reporting_phase: phase_10_reporting_active
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\9. miniBIOTA_Web\\web_overview.md"
copied_on: 2026-05-09
brain_transition_status: "Company reporting active; Brain source historical/archive lookup only."
---
# 9. miniBIOTA_Web

> Phase 3 transition note: This Company report was originally copied from `M:\miniBIOTA\miniBIOTA_Brain\9. miniBIOTA_Web\web_overview.md` on 2026-05-09. As of Phase 10, this Company path is the active reporting target; the Brain source is historical/archive lookup only.

## Scope
- Owns the public Flask website and Railway-hosted application for miniBIOTA.
- Provides public biosphere, biome, species, engineering, chronicle, news, events, FAQ, newsletter, poll, and read-only telemetry surfaces.
- Does not own private operator/admin workflows; those belong in the Electron desktop app.

## Current State
- The site is public-only; legacy Flask admin has been removed from active web code.
- Public telemetry consumes the live read-only Supabase snapshot through `/api/telemetry/overview`, `/live-monitoring`, and paired biome detail weather panels.
- Web context now uses the repo-native memory/skills architecture in `M:\miniBIOTA\miniBIOTA_Web\`.
- Brain no longer keeps a Web `docs/` mirror; use the source repo's memory/skills/reference structure for detailed Web context.
- App Planner/Supabase is the live Web work queue under `work_domains.key = web` / `domain_id = 8`; current non-archived Web project records are `36` through `41`, `57`, `68`, and `79`, with legacy/internal review project `42` archived.
- The UX Interaction Lab is represented in Planner project `40`, was resumed by owner direction on 2026-05-09, has accepted P0 guidance slices completed as of 2026-05-14, and has started narrow live application through `/species` filter/search control-group cleanup, detail-tab route-contract coverage, `/live-monitoring` refresh-state presentation polish, a screenshot-approved `/live-monitoring` sensor-card polish pass, `/faq` shared disclosure alignment, mobile navigation overlay interaction hardening, shared gallery/lightbox modal interaction hardening, chronicle gallery trigger cleanup, and chronicle timeline delegated-toggle cleanup.

## Key Facts
- Telemetry architecture is local-first and must not imply direct pump switching or centralized actuator control. Biome detail telemetry is public weather/context, not an operator dashboard.
- Public pages should express the biosphere, biomes, species, engineering systems, and chronicles as the durable public record.
- Chronicle short-form video playback uses `media_type='short'` plus `/shorts/` URLs for vertical Shorts rendering.
- Operator/admin workflows belong in `miniBIOTA_App`, not the public site.
- The "Biological Startup" voice should remain technically precise, accessible, ecological, and maker-clear.

## Priorities
- Keep Web memory and active Company Web reports aligned with the public-only, local-first telemetry and control architecture.
- Use App Planner/Supabase for live Web task status; keep Markdown focused on architecture, rules, scope, and decisions.
- Continue active UX Lab work through Planner project `40`; use `/ux-lab` for UX states, interaction rules, page patterns, and journeys while keeping development routes out of production navigation. The next UX step should be browser/mobile visual QA when tooling is available or a separately accepted live-surface application.
- Keep the now-connected App/Hardware coordinator-to-website telemetry handoff production-verified, public-safe, and read-only, including the new biome weather presentation.
- Work through the cleaned Web Planner roadmap: About/supporters and Patreon acknowledgment content, Substack signup/list migration and weekly newsletter assembly, events/news/chronicles product passes, engineering imagery, telemetry hardening, and species-card data polish.

## Risks / Gaps
- Web documentation can drift into a web-first control model if telemetry boundaries are not kept explicit.
- Public telemetry now depends on the App/Hardware coordinator producer staying healthy and aligned with the public read-only contract.
- Planner records can organize Web work, but they do not authorize production navigation, public claims, private/admin surfaces, or runtime behavior changes by themselves.
- The owner roadmap is captured in Planner, but several tasks still need source assets, copy, policy decisions, or cross-domain input before implementation.
- `/events`, `/news`, and `/chronicles` remain active public routes but need later content/product development.
- Engineering system pages still need real system images to replace placeholders.

## Files In This Folder
- `web_brief.md` - active Company manager-facing report brief for Web.
- `web_overview.md` - active Company overview for Web / Digital Presence.

## Source Repo
- Web source repo: `M:\miniBIOTA\miniBIOTA_Web\`
- Active entry point: `M:\miniBIOTA\miniBIOTA_Web\AGENTS.md`
- Memory index: `M:\miniBIOTA\miniBIOTA_Web\memory\00-index.md`
- Active skills: `M:\miniBIOTA\miniBIOTA_Web\skills\`
- Exact Web references live under source-repo `skills/*/reference/`.
- `_system/sync_docs.ps1` keeps Web docs mirroring disabled and removes any stale `9. miniBIOTA_Web\docs` folder if it appears.

## Vault Sync Status
- Last verified: 2026-05-05
- Known divergences: no active Web docs mirror remains in Brain.
- Next sync check: use Web repo memory/skills directly when Web detail is needed.
