---
id: brand_brief
title: Brand & Marketing Brief
domain: brand_and_marketing
last_updated: 2026-05-09
tags: [brand, marketing, messaging, planner, strategy-brief]
reporting_status: company_candidate
reporting_phase: brain_retirement_phase_3
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\4. miniBIOTA_Brand\\brand_brief.md"
copied_on: 2026-05-09
brain_transition_status: "Company reporting active; Brain source historical/archive lookup only."
---
# Brand & Marketing Brief

> Phase 3 transition note: This Company report was originally copied from `M:\miniBIOTA\miniBIOTA_Brain\4. miniBIOTA_Brand\brand_brief.md` on 2026-05-09. As of Phase 10, this Company path is the active reporting target; the Brain source is historical/archive lookup only.

*Maintained by: Brand Agent | Update trigger: end of any brand session where positioning, messaging, active priorities, risks, milestones, or cross-domain dependencies changed*

## Current State

- `miniBIOTA_Brand` is the dedicated Brand Agent workspace for mission language, positioning, public voice, messaging systems, reach strategy, and distribution strategy.
- `miniBIOTA_Brand` now uses repo-local memory and skills as its active detailed context: `AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`.
- Brain no longer keeps a Brand `docs/` mirror. Use the source repo's memory/skills structure for detailed Brand Agent context.
- Foundational mission and vision language is established and migrated into the Brand repo memory/skills architecture.
- Reach and distribution strategy is established for Substack, Reddit, press, podcast circuit, YouTube Community, Discord, Ko-fi, Open Collective, and future native comments.
- Operational marketing assets are still thin: reusable messaging pillars, founder narrative, campaign templates, and outreach-ready pitch materials need deeper development.
- App Planner/Supabase is the live Brand work queue under `work_domains.key = brand` / `domain_id = 4`. Current Brand projects are IDs `49` through `56`, and Brand docs now route actionable task status to Planner instead of Markdown task lists.
- Planner tracks work only. Brand memory and skills remain the source for positioning, voice, claim safety, channel rules, support/sponsor boundaries, and approved-versus-draft language context.

## Active Priorities

- Turn mission and vision into reusable messaging pillars, founder narrative, and external positioning language.
- Use App Planner/Supabase for live Brand task status while preserving Brand memory and skills as the source for messaging and claim-safety rules.
- Build outreach-ready material for speaking opportunities, press, podcasts, and public partnerships.
- Research Reddit targets and format guidance before active external posting.
- Build press and podcast outreach lists.
- Prepare for 1 Million Cups speaking opportunities as a stepping stone toward larger public talks.

## Recent Milestones

- **2026-05-09:** Brand Planner integration wiring completed in Brand docs/memory/playbooks following the Hardware pilot pattern. App Planner/Supabase is now documented as the live Brand work queue, closeout asks whether completed work maps to Planner tasks before marking anything done, and the Planner/Markdown boundary is explicit: Planner tracks actionable work, while Brand memory and skills govern positioning, voice, claim safety, channel rules, support/sponsor boundaries, and approved-versus-draft language context. No public copy, sponsor promises, campaign commitments, partner commitments, launch/pricing/legal/scientific claims, website behavior, app behavior, public channels, Supabase records, Planner records, schema, migrations, or Brain docs were changed by the Brand Agent wiring pass.
- **2026-05-05:** Brain Brand & Marketing folder converted to the same repo-named memory/skills pattern as Financials, Company, Content, and App. Brain folder is now `4. miniBIOTA_Brand`; the stale Brand docs mirror was removed; active detailed sources are `M:\miniBIOTA\miniBIOTA_Brand\AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`. `_system/sync_docs.ps1` now keeps Brand docs mirroring disabled and removes any stale `4. miniBIOTA_Brand\docs` folder if it appears.
- **2026-04-30:** `miniBIOTA_Brand` created as dedicated Brand Agent workspace and initialized for Codex-first operation with `AGENTS.md`, the original agent protocol material, Codex session helpers, root `.gitignore`, and README. GitHub: `https://github.com/miniBIOTA/miniBIOTA_Brand`.
- **2026-04-30:** Existing Brain Brand docs were copied into `miniBIOTA_Brand` as migration source material; that material was later absorbed into Brand memory, skills, skill references, and archive.
- **2026-04-14:** Reach and distribution strategy established: Patreon/Discord first, Substack, YouTube Community, Instagram, Facebook auto-cross-post, TikTok only with video, Reddit only for major milestones.
- **2026-04-03:** Mission, vision, and design trajectory established.

## Known Risks & Blockers

- Brand documentation is still too sparse to support consistent execution across web, content, events, and fundraising.
- The difference between foundational message and active campaign strategy needs clearer documentation.
- Marketing action items have historically lived in scattered notes and need consolidation into a brand operating system.
- Planner task wording can describe marketing work, but it does not approve public claims, sponsor promises, campaign commitments, partner commitments, launch/pricing/legal/scientific claims, media interest, event bookings, or brand commitments.
- Reddit, press, podcast, and speaking tracks require research before execution.
- Public copy, sponsor language, campaign promises, pricing, launch, legal, scientific, and product claims need claim-safety review before approval.

## Cross-Domain Notes

- **Website:** Public copy should reinforce miniBIOTA as the public source of truth and make ecological, engineering, and sponsor paths easy to follow.
- **Content:** Content titles, hooks, captions, and announcements should use the brand voice and no-em-dash public copy rule.
- **Partners/Sales:** Sponsorship and Open Collective language should separate business sponsorships from individual support channels.
- **Financials:** Current revenue baseline and support channel performance influence messaging around sustainability and sponsorship.
- **App:** Operator/admin surfaces stay internal; public messaging should point to public website, content, and support channels instead. App also owns the Planner runtime used as Brand's live work queue.
- **Company:** Mission, vision, governance, roadmap, and public commitments must remain aligned with company-level decisions.

## Domain Reference

Brain brief: `4. miniBIOTA_Brand\brand_brief.md`
Full brand repo: `M:\miniBIOTA\miniBIOTA_Brand\`

Brain no longer mirrors Brand docs. Load active Brand detail from the source repo:

| File | Contents |
|---|---|
| `AGENTS.md` | Brand Agent entry point, source-of-truth hierarchy, safety rules, and skill routing |
| `memory/00-index.md` | Memory index, read order, migration status, and skill routing |
| `memory/01-agent-purpose.md` | Brand Agent scope, responsibilities, and boundaries |
| `memory/02-brand-safety-and-claims-rules.md` | Public claim safety, approvals, and prohibited inventions |
| `memory/03-source-of-truth-and-brain-relationship.md` | Source hierarchy, Brain brief, docs migration, and Supabase boundaries |
| `memory/04-mission-vision-and-positioning.md` | Mission, vision, design trajectory, and positioning summary |
| `memory/05-voice-tone-and-public-copy-rules.md` | Public voice, tone, copy rules, and style constraints |
| `memory/06-distribution-and-channel-model.md` | Announcement sequencing, channel roles, and reach strategy |
| `memory/07-support-sponsorship-and-community-boundaries.md` | Patreon, Discord, Ko-fi, Open Collective, sponsors, supporters, and community boundaries |
| `memory/08-cross-agent-relationships.md` | Brand relationships to Website, Content, Growth, App, Financials, Hardware, Company, and Brain |
| `memory/09-recurring-decisions.md` | Durable repeated decisions and current migration notes |
| `skills/brand-claim-safety-review/SKILL.md` | Playbook for claims, sponsor language, product language, launch, pricing, and legal-sensitive copy |
| `skills/message-architecture-review/SKILL.md` | Playbook for mission, vision, positioning, tagline, and core narrative |
| `skills/message-architecture-review/reference/mission-vision-positioning.md` | Exact mission, vision, design trajectory, and positioning reference |
| `skills/draft-public-copy/SKILL.md` | Playbook for public copy drafts and captions |
| `skills/announcement-distribution/SKILL.md` | Playbook for announcement sequencing across channels |
| `skills/channel-strategy-review/SKILL.md` | Playbook for reach, distribution, support platform, community, and audience growth strategy |
| `skills/press-and-podcast-outreach/SKILL.md` | Playbook for press, media, podcast, and outreach planning |
| `skills/speaking-prep/SKILL.md` | Playbook for talks, events, speaking tracks, and pitch framing |
| `skills/support-and-sponsorship-copy-review/SKILL.md` | Playbook for Patreon, sponsorship, donor, partner, supporter, and community support language |
| `skills/update-brand-memory/SKILL.md` | Playbook for promoting durable brand rules and repeated decisions into memory |
| `skills/brand-session-closeout/SKILL.md` | Playbook for closing Brand sessions and deciding whether Brain/domain records are implicated |
