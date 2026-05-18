---
id: content_brief
title: Content Production Brief
domain: content_production
last_updated: 2026-05-18
tags: [content, production, strategy-brief]
reporting_status: company_active
reporting_phase: phase_10_reporting_active
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\5. miniBIOTA_Content\\content_brief.md"
copied_on: 2026-05-09
brain_transition_status: "Company reporting active; Brain source historical/archive lookup only."
---
# Content Production Brief

> Phase 3 transition note: This Company report was originally copied from `M:\miniBIOTA\miniBIOTA_Brain\5. miniBIOTA_Content\content_brief.md` on 2026-05-09. As of Phase 10, this Company path is the active reporting target; the Brain source is historical/archive lookup only.

*Maintained by: Content Agent | Update trigger: end of any content session where active projects, workflow, equipment, or cross-domain dependencies changed*

## Active Projects

| Title | Format | Status | Project Doc |
|-------|--------|--------|-------------|
| [Working Title - The Seagrass Meadow Started Fighting Back] | Longform | Development - restructured as seagrass succession sequel; Grant field trip reduced to supporting sequence; Planner target 2026-05-14 | `video_projects/active/2026-04_biosphere_grant-field-trip.md` |

## Current Production State

- **Published pipeline:** 353 records in `content_pipeline` table (as of 2026-05-07)
- **Active platforms:** YouTube (25k), Instagram (62k), Facebook (~20k), TikTok (~20k), Patreon
- **Revenue:** ~$460/mo average (YouTube, Facebook, Ko-fi)
- **Shorts:** Daily routine active - 6 shorts published this week (pipelines 348, 349, 350, 351, 352, 353)
- **Content calendar:** Live in Electron app (board, week, month views). In the
  current production model, `content_calendar` is the blue content identity,
  due-date, and closeout record; the linked Content-domain work project, teal
  parent production task, and subtasks are the execution schedule.
- **Ordinary task/work-project layer:** Planner-integrated under
  `work_domains.key = content` / `domain_id = 5`. After the 2026-05-12
  cross-domain cleanup and 2026-05-14 Operation Living Intelligence
  visual-media additions, Content has 8 active work projects and 50 task/checklist
  rows (48 open, 2 done), including active short/longform production, Aquatic
  Club talk support, and visual media intelligence readiness.

## Active Priorities

- Sea urchin intro short published May 4 as pipeline 351. Mottled Shore Crab self-correction short published May 6 as pipeline 352. Producer-diversity plant/Caulerpa short published May 7 as pipeline 353. The amphipod surge short is the active May 12 production item, and the seagrass succession longform is now planned through the dedicated 2026-05-14 Planner project.
- Story beats schema applied and initial sea urchin beats seeded; `intervention` is now an allowed `story_beats.beat_type`, and beat 17 uses it. App Planner now supports Story Beats as a source type for production source maps.
- Ghost shrimp larvae follow-up remains queued after the current seagrass/amphipod production window.
- Website-related audience re-entry is now a near-term content strategy
  candidate: acknowledge that posting has slowed, explain that Josue is
  building the public website layer for miniBIOTA, and frame the site as an
  in-progress build rather than a finished launch. The amphipod surge short has
  only been scripted and remains flexible; it can be delayed, reframed as an
  example of the interactions the website should eventually make trackable, or
  dropped from the immediate lineup.
- Longform target 2026-05-14 - seagrass succession sequel; Planner/calendar id 3 now matches project doc and is no longer framed as Grant Field Trip.
- Historical `content_pipeline` backfill no longer includes the published chronicle link/editorial cleanup or short URL normalization pass; remaining follow-up is deeper source/routing review plus `source_observation_id`, `notes`, and `parent_pipeline_id` where applicable.
- Use App Planner/Supabase as the live ordinary Content work queue while
  preserving the distinction between ordinary tasks, `content_calendar`,
  source maps, story beats, story threads, open loops, pipeline records,
  chronicles, publish closeout, and active project docs.

## Recent Milestones
- **2026-05-18:** Operation Living Intelligence observation workflow became
  operational through the Content Agent conversational layer. Phase 21 now lets
  Content read Phase 19 / Phase 13 Intelligent Harness outputs, summarize
  species/biome/story/open-loop/media/claim cautions, ask the next approval
  questions, and prepare Phase 20 writeback proposals while keeping all
  downstream layers separate. The workflow was tested on a real Mole Cricket
  burrow surface-foraging observation: Content preserved the raw note, created
  local intake/proposal/readback packets, confirmed `species_id = 162` and
  `biome_id = 3` by live read-only checks, passed duplicate checks, and wrote
  one approved canonical `public.observations` row (`id = 254`). No story
  links, open loop links, story beats, chronicles, Planner tasks, media
  metadata, content pipeline records, public output, App runtime change,
  Memgraph change, pgvector work, or graph refresh was performed.
- **2026-05-15:** Company completed the docs-only Operation Living
  Intelligence Wave 6 Media And Visual AI Readiness design:
  `domains/company/operation_living_intelligence_wave_6_media_visual_ai_readiness_design_2026-05-15.md`.
  Content implication: the first future visual AI lane must use the already
  selected task `398` four-item media set, preserve candidate annotation and
  pull-sheet outputs as review material only, and keep any rough sequence as a
  human checklist rather than a DaVinci timeline, publication plan, caption,
  alt text, or public claim. No model run, generated output, DaVinci work,
  Content calendar/pipeline change, publication, media metadata, public copy,
  App helper/runtime change, upload, paid service, Supabase/Planner write, or
  canonical writeback changed.
- **2026-05-15:** Company completed the Operation Living Intelligence Wave 6
  source/runtime readiness review:
  `domains/company/operation_living_intelligence_wave_6_source_runtime_readiness_review_2026-05-15.md`.
  Content implication: the four selected task `398` source files exist and can
  remain the future review set, but implementation is deferred until media
  inspection, storage, model-route, and review gates are resolved. No
  generated pull sheet, rough sequence, DaVinci work, Content record, public
  copy, publication, or media metadata changed.
- **2026-05-15:** Company completed the docs-only Operation Living
  Intelligence Wave 2 Content Story Graph design:
  `domains/company/operation_living_intelligence_wave_2_content_story_graph_design_2026-05-15.md`.
  The design keeps Content as owner of story continuity, source packets,
  scripts, captions, and publishing state while proposing a future read-only
  graph projection that distinguishes published content, planned content,
  draft/candidate material, chronicles, story threads, open loops, story beats,
  observations, and review gates. No `content_calendar`, `content_pipeline`,
  chronicle, story thread, story beat, open loop, media metadata, Web behavior,
  App helper, Supabase/Planner record, public copy, publishing, automation, or
  source-of-truth change was approved.
- **2026-05-15:** Company selected the Lake Post-Seal story as the first
  bounded Wave 2 Content Story Graph packet:
  `domains/company/operation_living_intelligence_wave_2_lake_post_seal_packet_selection_2026-05-15.md`.
  The anchor is `content_pipeline.id = 338` and `chronicles.id = 30`; the next
  gate is a read-only source-availability check for story threads `1`, `3`,
  `5`, linked story beats, related `content_calendar` rows, and source-map
  joins. No Content records, calendar rows, pipeline rows, chronicle rows,
  scripts, captions, publishing state, media metadata, App helper, or public
  output changed.
- **2026-05-15:** Company completed the read-only source-availability review
  for the selected Wave 2 Lake Post-Seal packet:
  `domains/company/operation_living_intelligence_wave_2_lake_post_seal_source_availability_review_2026-05-15.md`.
  The review confirms the packet is source-available for a future no-write
  implementation proposal: the April 17 published anchor and chronicle are
  present, story threads `1`, `3`, and `5` remain developing, five related
  story beats are available/unseen, one related short is published and one is
  planned through loop `3`, and all `13` candidate media rows remain
  `reviewed = false`. This is planning context only; no Content calendar,
  pipeline, story, script, caption, media, publishing, or public-output record
  changed.
- **2026-05-15:** Company prepared the no-write Wave 2 App implementation
  proposal:
  `domains/company/operation_living_intelligence_wave_2_no_write_app_implementation_proposal_2026-05-15.md`.
  Content impact: future graph output, if later approved, should help answer
  what has been published, what is planned, and what remains candidate story
  material without changing Content records. The proposal remains design-only;
  no calendar, pipeline, script, caption, media, publishing, public-output, or
  App helper change is approved.
- **2026-05-14:** Company updated Operation Living Intelligence Content tasks
  `413` and `414` for selecting a bounded Nemotron/Codex visual AI test set,
  later comparing Twelve Labs free tier on the same set, and defining
  candidate clip pull-sheet/rough-sequence review criteria for DaVinci and
  Content workflow. Qwen remains fallback/benchmark only. No
  `content_calendar`, publishing, media metadata, raw-media upload, paid
  service, App runtime, public site behavior, or public claim changed.
- **2026-05-13:** Company/Content strategy aligned around a possible website
  update short and supporting posts. The preferred posture is a soft
  build-in-public announcement, not a high-profile launch event: content can
  explain that publishing has slowed because Josue is building the public
  website layer for six years of miniBIOTA species, interactions, ecosystem
  history, and telemetry, while clearly saying the site is unfinished and some
  telemetry/features remain in progress. No `content_calendar`, Planner,
  publish, database, website behavior, app behavior, launch-date, sponsor,
  financial, legal, or roadmap commitment changed.
- **2026-05-12:** Aquatic Club talk drafting produced a durable writing
  preference for Content handoff. Josue prefers scripts and public narrative
  drafts that start from concrete lived or observable moments, respect the
  audience's existing knowledge, and earn meaning through tension, surprise,
  realization, and specific miniBIOTA detail rather than opening with abstract
  project explanation or generic inspiration language. The selected talk
  opening direction should still pass Brand, Research, and Hardware review
  before final use.
- **2026-05-12:** Published content public-history cleanup completed. Source-linked
  chronicle records are structurally linked and published, the editorial
  boilerplate audit is clear across 342 linked chronicles, key species/biome
  routing corrections were applied from transcript review, Southern Lubber
  Grasshopper was added for the relevant external observation, Duckweed was
  linked to both Freshwater Lake and Lakeshore, and all published short URLs
  were normalized for correct public Shorts playback.
- **2026-05-12:** Company applied approved Content Planner cleanup from the
  cross-domain task relevance review: created the dedicated seagrass longform
  work project for `[Working Title] The Seagrass Meadow Started Fighting Back`,
  aligned the amphipod short project owner/target to Content and 2026-05-12,
  relinked task `213` under the first Source Packet task, and scheduled/targeted
  production, Aquatic Club, and Operation Living Atlas work without changing
  publish status or content records.
- **2026-05-11:** App Planner content production scheduling now separates teal
  content due/close records from blue execution tasks. Scheduled content should
  not get duplicate generic "produce a short/video" tasks when a
  `content_calendar` entry already exists; agent-managed planning should attach
  or create the Content work project and parent production task, generate
  template subtasks, schedule them across days, and move the content scheduled
  date forward when required production subtasks move later than the content
  date.
- **2026-05-09:** Ordinary Content tasks were organized in App
  Planner/Supabase: 5 Content work projects now track Operation Living Atlas
  backfill, public history/retired biomes, story beats/source maps,
  revenue-support content, and active longform production. Existing ordinary
  Content tasks were linked and readback confirmed 0 unlinked open Content
  tasks. The Content Agent then verified and tightened local Planner wiring in
  `AGENTS.md`, memory, `skills/content-session-closeout/SKILL.md`, and
  `skills/planner-scheduling/SKILL.md` without changing live Planner records,
  `content_calendar`, source maps, story beats, story threads, open loops,
  pipeline records, chronicles, publish status, app behavior, or website
  behavior.
- **2026-05-07:** Short #6 published - "I Added More Plants to Fight the Algae" (pipeline 353, YouTube: https://youtube.com/shorts/ZY_Wq5G4Tbc). Closeout completed: calendar id 14 published, biome chronicle 33 written, story beat 17 published/seen in short with `beat_type='intervention'`, loops 8 and 9 advanced, new loop 18 seeded for Green Feather Alga spread/removal risk, observation 155 promoted, and species links added for Turtle Grass, Manatee Grass, Green Feather Alga, Shoal grass, and Graceful redweed.

- **2026-05-07:** Shorts packaging workflow corrected. Short-form platforms now use one shared description/caption unless variants are explicitly requested; every materially discussed species gets a Featured species block below the description; shorts descriptions end with exactly five hashtags; green feather algae corrected to *Caulerpa taxifolia* for the May 7 producer-diversity short.

- **2026-05-07:** Planner reshuffled for the seagrass buildup: calendar id 14 is now the May 7 producer-diversity plant/green feather algae short; calendar id 13 is now the May 8 amphipod surge short; the standalone sea urchin near-failure/recovery short was eliminated and folded into the May 9 longform source map.

- **2026-05-06:** Short #5 published - "This Crab Was Already Eating the Problem" (pipeline 352, YouTube: https://youtube.com/shorts/hubXLacNq68). Closeout completed: calendar id 7 published, species chronicle 32 written, story beat 15 published/seen in short, loops 8 and 9 advanced, observation 158 promoted, and stale Planner thread link corrected from thread 22 to thread 7.

- **2026-05-06:** DaVinci shorts timeline/export naming routine updated. Timeline names now use date plus readable platform-friendly keywords, and _9x16 is no longer part of the normal export filename convention.

- **2026-05-06:** Callback discipline added to shorts workflow. Audience history is now checked for every short, but past-moment callbacks should only appear when they prevent confusion, create useful before/after contrast, advance an existing loop, make the current observation more meaningful, or support a larger weekly arc.

- **2026-05-05:** Content calendar reshuffled again for the May 9 seagrass longform buildup. May 6 Mottled Shore Crab, May 7 producer-diversity plant/Caulerpa addition, May 8 amphipod surge, May 9 longform. Scorched Mussels removed from this week's shorts lineup; sea urchin near-failure/recovery moved into the longform; Ghost shrimp follow-up remains May 12.

- **2026-05-05:** Active longform project doc restructured from Grant field trip spine into a direct sequel to pipeline 3, "The Un Eaten". New working frame: "The Seagrass Meadow Started Fighting Back". Grant footage is now supporting material, dried lake bed is optional only if it strengthens the resource-compression turn, and the observation map centers Mottled Shore Crab grazing, producer-diversity plant/Caulerpa addition, amphipod surge, slipper snail recycling, and Variegated Sea Urchin failure/recovery/feed sequence.

- **2026-05-04:** Brain Content folder converted to the same memory/skills pattern as Financials. Brain folder is now `5. miniBIOTA_Content`, stale `docs/` mirror files were removed, and active detailed sources are `AGENTS.md`, `memory/`, `skills/`, `skills/*/reference/`, and `video_projects/` in `M:\miniBIOTA\miniBIOTA_Content\`.
- **2026-05-04:** Content repo first-pass memory + local playbook architecture added. AGENTS.md now routes through memory/00-index.md; new repo-local playbooks cover daily observation logging, short creation, and weekly story planning. Existing docs were not moved.
- **2026-05-04:** Short #4 published - "I Added Sea Urchins to Fight the Algae" (pipeline 351, YouTube: https://youtube.com/shorts/NeYzSX-vSL0). Closeout completed: calendar id 6 published, species chronicle 31 written, beats 1-2 published/seen in short, loop 9 advanced, and new open loop 17 seeded for sea urchin survival and continued Graceful redweed grazing.
- **2026-05-04:** Initial story beats seeded for the sea urchin arc (thread 27): intro, acclimation redweed proof, near-failure, survival, and in-system grazing evidence. Beats 1-2 are tied to calendar id 6; beats 3-5 remain available for follow-up stories. App UI support still pending.
- **2026-05-04:** Story beats workflow documented in Content repo (docs/story_beats_workflow.md) with schema source at _system/story_beats_schema.sql. Beats are now defined as named story turns inside threads, bridging observations to Planner projects, open loops, and published pipeline records. Supabase tables were applied manually; App UI support and app-owned migration history are pending.
- **2026-05-04:** Added DaVinci Start Routine to Content repo (docs/davinci_production_tracker.md). When Josue says he is getting started in DaVinci, Content Agent should provide Resolve project, timeline, export filename, thumbnail text, and the minimal shorts setup checklist from the active Planner entry.
- **2026-05-04:** Added Codex story writing guide in Content repo (docs/story_writing_guide.md) and linked it from the shorts workflow. Future script sessions should check audience knowledge first, avoid known AI-writing tells, and save durable voice/style lessons from Josue's corrections.
- **2026-05-01:** Short #3 published - "The ghost shrimp had offspring" (pipeline 350, YouTube: https://youtube.com/shorts/97y0G2p7Wms). Ghost shrimp (species 67) in Lake biome (biome 1). Closeout completed: pipeline record created, calendar id 11 published, open loop 3 advanced, observation 207 linked/promoted, species chronicle 29 written.
- **2026-05-01:** Content publish closeout workflow updated for the Chronicle Relationship Model. Future chronicle sessions must identify the primary chronicle owner, one video-embed owner, major impacts, context links, and any secondary impact chronicle rows before writing public chronicle records.
- **2026-05-01:** Planner integration docs updated with Codex database execution notes: always read Planner records from Supabase before metadata edits, use read/write/readback, avoid PowerShell `python -c` for multiline video copy, and track the need for dedicated `content_calendar` helper functions.
- **2026-05-01:** Added DaVinci production tracker for organizing many videos in different edit stages, connecting App Planner entries to Resolve projects/templates, and tracking process improvements.
- **2026-05-01:** Content workflow updated with a description species naming rule: keep descriptions short, but include common and scientific names for every featured species, including context species that materially explain the story.
- **2026-04-30:** `miniBIOTA_Content` initialized for Codex and GitHub operation. Added `AGENTS.md`, `docs/agent_protocol.md`, Codex session helpers, `.gitignore`, and README; initialized local git repository and pushed initial `main` branch to `https://github.com/miniBIOTA/miniBIOTA_Content`.
- **2026-04-29:** Short #2 published - "This snail carries marine nutrients back onto land." (pipeline 349, YouTube: https://youtube.com/shorts/Nt60b0Td6lY). Eastern Melampus (species 176). Full closeout completed: pipeline record, calendar id 5 published, open loop 16 seeded (Eastern Melampus establishment and reproduction), obs 224 linked, species record updated with ecological_role and microhabitat_preference, chronicles 27 (biome) and 28 (species) written.
- **2026-04-28:** Short #1 published - "Grass is taking over the Marine Shore Biome" (pipeline 348, YouTube: https://youtube.com/shorts/mJaxOrhstJI). Full closeout completed: pipeline record, content calendar updated, open loop 15 seeded (Gulf marsh crab establishment), species records updated for ids 174/175/176/141, chronicles 25-26 written. First full short closeout process run end-to-end.
- **2026-04-28:** Longform direction set - seagrass meadow succession continuation from pipeline 3 ("The Un Eaten"). Coastal biome focus (biomes 5+6). Target publish 2026-05-03. Direction flexible, working title TBD. 4 shorts arc planned: (1) problem/field trip setup, (2) Eastern Melampus, (3) Scorched Mussels, (4) Gulf marsh crab as week's star. Sea urchins introduced 2026-04-26 - both dead by 2026-04-28, cause unknown, removed from story. New DB records: obs 233-234, story thread 29 (slipper snails), open loops 13-14, pipeline 25 biome corrected.
- **2026-04-27:** Hardware upgrade complete - MSI SHADOW RTX 5060 Ti 16GB installed (replaces GTX 1660), ASUS ProArt PA279CRV 27" 4K installed as center editing monitor (replaces Acer). Monitor calibrated for SDR editing: sRGB mode, NVIDIA 10 bpc Full range. DaVinci confirmed on CUDA with neural engine optimization.
- **2026-04-27:** miniBIOTA_Content repo created as dedicated Content Agent workspace. Production docs and video project files moved out of the previous Brain Content Production folder into the Content repo. Content brief and Brain mirror established.
- **2026-04-24:** Grant Field Trip video spine confirmed (B+C hybrid). Story notes written. 14 field trip observations logged (ids 214-227). Content calendar entry id=3.
- **2026-04-17:** Lake Post-Seal longform published (pipeline 338). URL: https://youtu.be/lgmPWX9e-A0. Open loops 1-4, 7 seeded.

## Known Risks & Blockers

- Longform working title still provisional; dried lake bed sequence and Grant role need footage review before scripting begins
- Seagrass meadow macroalgae problem unresolved - loop 9 is advanced by sea urchin introduction, loop 17 tracks whether the remaining urchin survives and keeps grazing Graceful redweed, and loop 18 tracks whether Green Feather Alga spreads too much and needs removal
- Historical `content_pipeline` metadata backfill incomplete for older records
- Shorts routine established but still building consistency - 6 shorts published this week
- Website/update short strategy needs Content Agent lineup review before any
  calendar or publishing changes: the announcement/update post may replace or
  precede the amphipod short, but no live content records have been changed.
- Newsletter workflow not yet built
- Instagram 62k audience not being systematically converted to Patreon

## Cross-Domain Notes

- **Company:** Aquatic Club talk writing should preserve the learned preference
  for concrete observed/lived moments first, then meaning. For scripts and
  spoken drafts, use the pattern: concrete moment, tension or surprise, what
  Josue realized, why it matters, and what question it opens next. Keep the
  writing spoken, specific, and human while preserving claim-safety boundaries.
- **Company/Web:** Website-related shorts and posts should set expectations:
  the website is already showing the direction of the project, but it is still
  under construction. Public copy should separate current visible progress from
  future goals such as complete current-living species cards, deeper six-year
  history, interaction tracking, and full biome telemetry coverage.
- **Hardware:** Biomes 2-5 hardware rewire (XT30 + JST-XH) is planned but unscheduled. May require temporary tank downtime. Coordinate with Hardware Agent before scheduling filming sessions that depend on biomes 2-5.
- **Ecology:** `story_threads` and `open_loops` are the production queue - always query these before selecting the next video topic. Loop 9 (sea urchin question) is advanced by the sea urchin introduction and later survival/feeding evidence; long-term macroalgae impact remains unresolved.
- **App:** App Planner/Supabase is the shared project/task runtime for
  ordinary Content work status and scheduled content production planning. App
  owns Planner runtime behavior; Content owns story, production, source-map,
  and publish-closeout decisions. The teal `content_calendar` record remains
  content identity/due/close truth, while the linked Content work project and
  blue task hierarchy carry execution scheduling.

## Domain Reference

Active Content Agent context: `M:\miniBIOTA\miniBIOTA_Content\`

Load order for detailed content work:
1. `AGENTS.md`
2. `memory\00-index.md`
3. Relevant `memory\*.md`
4. Matching `skills\*\SKILL.md`
5. Exact references under `skills\*\reference\`
6. Active project docs under `video_projects\active\`

Brain no longer keeps a Content `docs\` mirror after the memory/skills migration.

| File | Contents |
|---|---|
| `memory\00-index.md` | Memory file routing and local playbook routing |
| `memory\06-content-data-model.md` | Observations, threads, beats, loops, Planner, chronicles, and pipeline records |
| `memory\08-recurring-decisions.md` | Durable content rules and decisions |
| `skills\log-daily-observation\SKILL.md` | Observation and field-note logging |
| `skills\create-story-beat\SKILL.md` | Story beat creation |
| `skills\create-short\SKILL.md` | Shorts workflow |
| `skills\create-midform\SKILL.md` | Midform workflow |
| `skills\create-longform\SKILL.md` | Longform workflow |
| `skills\publish-closeout\SKILL.md` | Strict publish closeout workflow |
| `skills\create-chronicle\SKILL.md` | Chronicle decision and writing workflow |
| `skills\davinci-editing-support\SKILL.md` | DaVinci setup, editing, export prep, and production tracking |
| `video_projects\active\` | Active mid/longform project docs |
