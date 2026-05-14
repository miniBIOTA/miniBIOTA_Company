---
id: content_production
title: 5. miniBIOTA_Content
domain: content_production
last_updated: 2026-05-14
tags: [content, storytelling, publishing, media-production, workflow, pipeline]
reporting_status: company_active
reporting_phase: phase_10_reporting_active
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\5. miniBIOTA_Content\\content_production_overview.md"
copied_on: 2026-05-09
brain_transition_status: "Company reporting active; Brain source historical/archive lookup only."
---
# 5. miniBIOTA_Content

> Phase 3 transition note: This Company report was originally copied from `M:\miniBIOTA\miniBIOTA_Brain\5. miniBIOTA_Content\content_production_overview.md` on 2026-05-09. As of Phase 10, this Company path is the active reporting target; the Brain source is historical/archive lookup only.

## Scope
- Defines the content strategy, platform architecture, production workflow, and story pipeline for miniBIOTA.
- Content is a documentary record of the living system: every video can become public history, every observation can become a story thread or story beat, and every publish closeout must update the durable records it affects.

## Current State
- Active Content Agent context now lives in `M:\miniBIOTA\miniBIOTA_Content\AGENTS.md`, `memory/`, `skills/`, `skills/*/reference/`, and `video_projects/`.
- Full content strategy established 2026-04-03. Major revision 2026-04-23: three-format architecture, two-audience ecosystem model, content calendar concept, updated platform routing. Active summaries now route through Content memory and skill playbooks.
- Pipeline has 353 records in `content_pipeline` as of 2026-05-07, including shorts 348-353.
- `story_threads`, `story_beats`, `open_loops`, `content_calendar`, `chronicles`, and `content_pipeline` are Supabase-backed structured records. Query Supabase when current state matters.
- Ordinary Content task management is now organized in App Planner/Supabase
  under `work_domains.key = content` / `domain_id = 5`. After the 2026-05-12
  cross-domain cleanup and the 2026-05-14 Operation Living Intelligence
  visual-media additions, Content has 8 active work projects and 50
  task/checklist rows (48 open, 2 done).
- ~$460/mo average revenue from content across YouTube, Facebook, and Patreon/Ko-fi support.
- Active platforms: YouTube (25k), Instagram (62k), Facebook (~20k), TikTok (~20k), Patreon.

## Key Facts - Format Architecture
- **Three formats:** Shorts (30-60 sec, vertical), mids (61 sec-5 min, horizontal, YouTube-only), longforms (~10 min, horizontal, YouTube + Patreon).
- **Two audience ecosystems:** Shorts ecosystem (TikTok, Reels, Facebook, YouTube Shorts) and YouTube ecosystem (mids + longforms + Patreon). Same general story, different depth. Open loops are tracked separately per ecosystem.
- **Content hierarchy:** Shorts = headlines. Mids + longforms = the article. Newsletter + Patreon = the book.
- **Cadence:** Shorts daily at 8 AM max. Mids as warranted. Longforms 1/week, Fri/Sat. Newsletter weekly Sunday evening when active.
- **Cannibalization rules:** Longforms on YouTube + Patreon only. Mids on YouTube only. Shorts are original footage only, not clips from mids or longforms.
- **Longform arc model:** Each episode should stand alone while connecting naturally to past events, the major arc of the whole project, and smaller species/biome arcs within episodes.
- **Content calendar:** Planning layer between source material and published pipeline records. The App Planner is the operator surface for calendar entries and source maps.
- **Ordinary tasks vs. production records:** `work_projects` and `tasks` track
  ordinary Content work. They do not replace `content_calendar`, Planner source
  maps, story beats, story threads, open loops, `content_pipeline`,
  chronicles, publish closeout, or active video project docs.
- **Scheduled production model:** In App Planner, `content_calendar` is the blue
  content identity, due-date, and closeout record. A linked Content-domain work
  project plus one teal parent production task and subtasks is the execution
  schedule. Do not create duplicate generic production tasks when a calendar
  entry already exists; attach the work project and production task, generate
  subtasks from the format template, and keep the content scheduled date on or
  after required production work.

## Active Production
- **Lake Post-Seal longform (pipeline 338):** Published 2026-04-17. Project doc archived at `M:\miniBIOTA\miniBIOTA_Content\video_projects\archive\2026-04_biome_lake-post-seal.md`.
- **Biosphere / Grant field trip video:** Spine confirmed (B+C hybrid), story notes written 2026-04-24. Working title still TBD. Project doc at `M:\miniBIOTA\miniBIOTA_Content\video_projects\active\2026-04_biosphere_grant-field-trip.md`. Content calendar entry id=3.
- **Shorts:** Daily routine active as of 2026-05-07. Use `M:\miniBIOTA\miniBIOTA_Content\skills\create-short\SKILL.md` and `skills\publish-closeout\SKILL.md` for active workflow.

## Content Agent Memory And Skills
Content now uses the repo-native memory/skills architecture. Use the Content repo directly for detailed context:

| Path | Purpose |
|---|---|
| `M:\miniBIOTA\miniBIOTA_Content\AGENTS.md` | Active Content Agent entry point and hard operating rules |
| `M:\miniBIOTA\miniBIOTA_Content\memory\00-index.md` | Memory routing and skill routing |
| `M:\miniBIOTA\miniBIOTA_Content\memory\02-content-philosophy.md` | Story judgment, format choice, and what belongs in miniBIOTA content |
| `M:\miniBIOTA\miniBIOTA_Content\memory\03-voice-and-style.md` | Script, title, caption, and narration style |
| `M:\miniBIOTA\miniBIOTA_Content\memory\04-platform-architecture.md` | Shorts, mids, longforms, newsletter, Patreon, and platform routing |
| `M:\miniBIOTA\miniBIOTA_Content\memory\05-production-setup.md` | Camera, audio, DaVinci, export, equipment, and editing workflow |
| `M:\miniBIOTA\miniBIOTA_Content\memory\06-content-data-model.md` | Observations, threads, beats, open loops, Planner, chronicles, and pipeline records |
| `M:\miniBIOTA\miniBIOTA_Content\memory\07-cross-agent-relationships.md` | Brain, App, Web, Research, Hardware, and Supabase boundaries |
| `M:\miniBIOTA\miniBIOTA_Content\memory\08-recurring-decisions.md` | Durable content decisions and rules |
| `M:\miniBIOTA\miniBIOTA_Content\skills\log-daily-observation\SKILL.md` | Observation and field-note logging workflow |
| `M:\miniBIOTA\miniBIOTA_Content\skills\create-story-thread\SKILL.md` | Story thread creation/update workflow |
| `M:\miniBIOTA\miniBIOTA_Content\skills\create-story-beat\SKILL.md` | Story beat creation workflow |
| `M:\miniBIOTA\miniBIOTA_Content\skills\create-short\SKILL.md` | Shorts workflow |
| `M:\miniBIOTA\miniBIOTA_Content\skills\create-midform\SKILL.md` | Midform workflow |
| `M:\miniBIOTA\miniBIOTA_Content\skills\create-longform\SKILL.md` | Longform workflow |
| `M:\miniBIOTA\miniBIOTA_Content\skills\publish-closeout\SKILL.md` | Strict publish closeout workflow |
| `M:\miniBIOTA\miniBIOTA_Content\skills\create-chronicle\SKILL.md` | Chronicle decision and writing workflow |
| `M:\miniBIOTA\miniBIOTA_Content\skills\davinci-editing-support\SKILL.md` | Resolve setup, editing, export prep, and production tracking |
| `M:\miniBIOTA\miniBIOTA_Content\skills\create-youtube-packaging\SKILL.md` | Titles, descriptions, captions, hashtags, and upload packaging |
| `M:\miniBIOTA\miniBIOTA_Content\video_projects\active\` | Active mid/longform project docs |

Brain no longer keeps a Content `docs/` mirror. Do not use archived/superseded Content docs as active workflow unless checking historical context.

## Priorities
- Sea urchin intro short was published May 4 as pipeline 351, Mottled Shore Crab short May 6 as pipeline 352, and producer-diversity/Caulerpa short May 7 as pipeline 353. Loop 9 is advanced, not resolved; shorts loop 17 tracks whether the variegated sea urchin survives and keeps eating Graceful redweed; shorts loop 18 tracks whether Green Feather Alga spreads too much and needs removal.
- Story beats schema has been applied and initial sea urchin beats seeded; `intervention` is now an allowed `story_beats.beat_type`, and beat 17 uses it. App Planner now supports Story Beats as a source type for Planner production source maps.
- Ghost shrimp larvae follow-up moved to May 12 so the May 5-9 calendar can stay focused on the seagrass longform buildup.
- Longform seagrass succession continuation is targeted for 2026-05-14 through the dedicated Planner project and still needs final title/footage/script decisions.
- Historical `content_pipeline` backfill no longer includes the published chronicle link/editorial cleanup or short URL normalization pass; remaining follow-up is deeper source/routing review plus `source_observation_id`, `notes`, and `parent_pipeline_id` where applicable.
- Build newsletter template and weekly dispatch workflow.
- Define Patreon tier structure and Discord community rules.
- Use App Planner/Supabase for live ordinary Content task status while keeping
  active mid/longform detail in `video_projects/active/` and structured
  production truth in the relevant Supabase content tables.

## Risks / Gaps
- Longform working title still TBD.
- Seagrass Meadow macroalgae problem remains unresolved. Loop 9 is advanced by sea urchin introduction, loop 17 tracks whether the remaining urchin survives and keeps grazing Graceful redweed, and loop 18 tracks whether Green Feather Alga spreads too much and needs removal.
- Historical `content_pipeline` metadata backfill incomplete for older records.
- Shorts routine established but still building consistency.
- Newsletter workflow not yet built.
- Instagram 62k audience not yet being systematically converted to Patreon.

## Files In This Folder

**Company-owned active overview:**
- `content_production_overview.md` - this file; Company active strategic view of the content domain

**Content Agent-owned active detail (edit in `M:\miniBIOTA\miniBIOTA_Content\`):**
- `content_brief.md` - current operational state maintained by the Content Agent
- `AGENTS.md` - active Content Agent entry point
- `memory/` - durable content memory and routing
- `skills/` - repo-local workflow playbooks and exact references
- `video_projects/` - active and archived mid/longform project docs

**Sync behavior:**
- `_system/sync_docs.ps1` keeps Content docs mirroring disabled and removes any stale `5. miniBIOTA_Content\docs` folder if it appears.

## Vault Sync Status
- Last verified: 2026-05-04
- Known divergences: Brain no longer mirrors Content docs; active details live in the Content repo memory/skills architecture.
- Next sync check: flag during relevant domain session
