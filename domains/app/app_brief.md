---
id: app_brief
title: App Operations Brief
domain: app_operations
last_updated: 2026-05-18
tags: [app, electron, operations, planner, strategy-brief]
reporting_status: company_active
reporting_phase: phase_10_reporting_active
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\11. miniBIOTA_App\\app_brief.md"
copied_on: 2026-05-09
brain_transition_status: "Company reporting active; Brain source historical/archive lookup only."
---
# App Operations Brief

> Phase 3 transition note: This Company report was originally copied from `M:\miniBIOTA\miniBIOTA_Brain\11. miniBIOTA_App\app_brief.md` on 2026-05-09. As of Phase 10, this Company path is the active reporting target; the Brain source is historical/archive lookup only.

*Maintained by: App Agent | Update trigger: end of any app session where app behavior, schema assumptions, operational status, risks, or cross-domain dependencies changed*

## Current State

- `miniBIOTA_App` is the internal Electron desktop app for miniBIOTA operations.
- The app is an operator surface, not a public product. It uses Supabase publishable keys in renderer/browser-facing config and secret keys only in Electron main-process services or local admin tooling. Internal renderer REST helpers route through an Electron IPC bridge when secret-key access is needed, without exposing the secret key to browser code.
- Active tabs: Planner, Financials, CRM, Roadmap, Prompt Library, Site Admin, and Monitoring. Former top-level Weekly Checklist and Tasks behavior has been consolidated into Planner.
- App owns CRM as software/runtime/schema/UI implementation. Growth owns CRM
  relationship meaning, lifecycle strategy, follow-up rules, opportunity
  context, and commercial commitment discipline.
- CRM relationship-system migration 013 is live after user-applied Supabase SQL on 2026-05-12. It added 33 additive tables beside `crm_contacts`, `crm_activities`, and `partner_opportunities`; App read-only verification confirmed all 33 new tables exist, all are empty, and legacy counts remain `crm_contacts = 0`, `crm_activities = 0`, `partner_opportunities = 5`. The first read-only CRM Relationship view now summarizes those table counts and review queues through the internal main-process secret-key bridge. Migration 014 is also live as of 2026-05-13, adding flexible labeled contact links to legacy CRM contacts through `crm_contact_links`.
- Monitoring tab is live for direct MQTT telemetry from the local biome network when on `mB2.4`; it now displays internal-only heat-exchanger/liquid temperature (`liq_t`) and pump run percentage (`pump_pct`) for sensor biomes 2-5 without adding those fields to Web/public telemetry.
- Site Admin includes species, biosphere, biome, chronicle, announcement, and staging workflows.
- Media Library/tagging and backend WebP image upload pipeline are implemented in the app.
- A private Android Field Observer companion scaffold now exists under `mobile/field-observer/` for photo-first biome sighting sessions. Migration 008 has been applied successfully in Supabase and adds `species_sighting_sessions`, `species_sightings`, and `save_species_sighting_session(...)`. Migration 009 has also been applied successfully and grants the signed-in mobile operator read access to `biomes`, `species`, and `species_images`. Capacitor dependencies are installed, the Android project has been generated, the local Android build toolchain is installed, debug APK builds pass, and the mobile shell uses Supabase Auth plus publishable-key access rather than secret keys. The field UI now uses in-system, not-in-system, and not-listed language while preserving the RPC's stable `seen`, `not_seen`, and `unknown_organism` values. The mobile web code is split into ordered plain-script modules for shared state/helpers, API/Auth/data, filters, rendering, session saves, and bootstrap; mobile styles are split by ownership into ordered CSS imports. Local check and preview scripts validate/load the mobile web shell before APK reinstall.
- Planner project-manager schema foundation is live after migration 007 added
  `work_domains`, `work_projects`, project-management fields on `tasks`, and
  an optional `content_calendar.work_project_id` link. Initial Planner task UI
  wiring now uses live domains, project assignment, workflow status, multi-day
  task spans, due-date deadlines, Today and Tasks task surfaces, an initial
  general Projects view with linked task/content detail, content calendar
  assignment into the general work-project layer, task hierarchy UI through
  `parent_task_id`, project milestone/context rendering in calendar views, and
  initial weekly planning prompts in Planner Today. Migration 010 was applied
  successfully by the user on 2026-05-09, making the cross-domain
  Programs/Operations layer live with `work_programs` and
  `work_program_projects`. Live Program records now include `Operation Living
  Atlas` (`work_programs.id = 1`), `Operation Living Web` (`work_programs.id =
  2`), and `Aquatic Club Talk Readiness` (`work_programs.id = 3`), with
  domain-owned projects linked through `work_program_projects`.
- App project management is now Planner-integrated under
  `work_domains.key = app` / `domain_id = 9`. After the 2026-05-15 Mobile Field Observer Quality System mirror, App has a new planned App-domain project for tomorrow: `Mobile Field Observer Quality System` (`work_projects.id = 84`), scheduled for 2026-05-16 with 6 parent phase tasks and 33 child tasks. Project `11` is completed/archived as stale wiring work. The initial quality-system rollout in project `82` is complete with all 72 roadmap task rows done. Active App Planner work is now concentrated in runtime, sources/workflow polish, Field Observer mobile quality-system work, media reliability, monitoring, Supabase/storage safety, and Aquatic Club support.
- Prompt Library has replaced the old static Team reference surface. Migration 012 was applied successfully by the user on 2026-05-11, making the `prompt_library` table live for reusable prompt records. Prompt create, edit, favorite, archive, and restore actions are live Supabase writes through the internal app REST path.
- `miniBIOTA_App` now has repo-local memory and skills as its active detailed context: `AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`.
- Brain no longer keeps an App `docs/` mirror; use the source repo's memory/skills structure for detailed App Agent context.
- Operation Living Intelligence Wave 6 GPU visual-AI readiness now has a
  separate ignored GPU runtime proof and import-stack proof path. The latest
  approved helper, `tools/run-oli-wave6-gpu-model-load-proof.js`, used only the
  existing ignored GPU runtime and local `Qwen/Qwen3-VL-2B-Instruct` cache,
  set offline/cache-only flags plus `local_files_only=True`, loaded the
  processor and model on `cuda:0`, and confirmed the accepted CPU runtime plus
  model cache unchanged without dependency install, model download, media
  input, generation, forward pass, App runtime behavior, Media Library
  metadata, Supabase/Planner/Storage/schema writes, public output, or
  canonical writeback. Company then prepared the GPU still-image inference
  approval packet at
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_gpu_still_image_inference_approval_packet_2026-05-16.md`.
  Josue approved that boundary, and App added
  `tools/run-oli-wave6-gpu-still-image-proof.js`: the helper generated parsed
  candidate JSON with review-required/public-blocked/noncanonical guardrails
  intact, kept the raw parent folder, accepted CPU runtime, and model cache
  unchanged, and did not install dependencies, download a model, read video,
  preprocess media, change App runtime behavior, or write public/canonical/
  database records. Company then completed the docs-only GPU still-image
  usefulness/performance review: the proof is useful for local visual-AI
  readiness, but one still image took about `86.1s` total, so it does not
  approve GPU video execution. The next approved-by-design shape, if Wave 6
  continues, is the prepared docs-only GPU short-video implementation approval
  packet at
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_gpu_short_video_implementation_approval_packet_2026-05-16.md`.
  Implementation remains unapproved; the packet requires existing ignored GPU
  runtime/cache only, `TEST_398_02_FIELD_SAMPLING` only, audio ignored, no
  dependency changes, no preprocessing, and no App runtime/public/canonical/
  database writes. Josue then approved that boundary, and App added
  `tools/run-oli-wave6-gpu-short-video-proof.js`: the helper ignored audio,
  sampled `4` frames, generated parsed candidate JSON with review-required/
  public-blocked/noncanonical guardrails intact, kept the raw parent folder,
  accepted CPU runtime, and model cache unchanged, and did not install
  dependencies, download a model, preprocess media, change App runtime
  behavior, or write public/canonical/database records. Company then completed
  the GPU short-video usefulness/performance review at
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_gpu_short_video_usefulness_performance_review_2026-05-16.md`.
  App implication: GPU short-video is accepted as the current local baseline,
  but Wave 6 implementation should stop here by default. Any prompt refinement,
  owner review, additional media run, annotation workflow, Media Library
  integration, App runtime behavior, public output, database write, or
  canonical writeback needs separate scope and approval.

## Active Priorities

- Continue the staged CRM upgrade from the applied relationship-system foundation: expand the read-only Relationship view into People, Organizations, Interactions, Next Actions, Review, Agent Inbox, and reporting surfaces before any write/backfill workflows.
- Continue consolidating story-source execution and project management into the unified Planner workflow, with remaining work focused on Planner Programs/Operations UI smoke verification, Planner Sources polish, beat closeout ergonomics, recurring-task calendar integration, and smoke-testing the Planner replacement surfaces.
- Use App Planner/Supabase as the live App work queue, and keep App docs/memory
  wired so App sessions read current projects/tasks and ask before marking
  Planner tasks done at closeout.
- Maintain and extend the completed App quality-system rollout (`work_projects.id = 82`) as an active guardrail layer: App design tokens, shared primitives, fixture tests, scoped lints, dev-only UI Lab, Planner selectors, and explicit write plans are now in place. Ordinary Planner single-row patch paths now use write-plan persistence/readback; Programs/Operations write-plan coverage remains a future separately scoped cross-domain pass if needed.
- Keep the desktop app as the forward operator surface while the public website remains read-only.
- Preserve secret-key access as internal-only; do not expose app behavior as a public web surface.
- Continue the Field Observer Android build with publishable-key/Auth/RLS access only; do not ship Supabase secret keys in the APK. The next planned Field Observer work is the 2026-05-16 mobile quality-system project (`work_projects.id = 84`) to add mobile `--field-*` tokens, shared mobile UI primitives, a fixture-only mobile UI Lab, validation/lints, and explicit Capacitor sync/build/install closeout.
- Verify packaged build behavior for Sharp/WebP image uploads when packaging work resumes.
- Continue using the app for financials, Planner/content production, CRM, media tagging, and monitoring workflows.

## Recent Milestones

- **2026-05-18:** App completed the approved Operation Living Intelligence Phase 18 Content audit to Phase 13 bridge update. `tools/bridge-oli-content-audit-to-phase13-input.js` now accepts both the Phase 15 legacy Content parser contract and the Phase 17 raw observation intake contract, with Phase 17 as the normal path. The bridge created the local App input `fixtures/operation_living_intelligence/intelligent_harness/phase_13_observation_input_runner/lake_post_seal/inputs/2026-05-16_grasshopper_legume_vine_followup_03.json` plus readbacks, preserving Phase 17 provenance and keeping writeback/public/canonical/database actions blocked. App then manually ran Phase 13 against that bridged input. Run `20260518_123237_grasshopper_legume_vine_followup` produced `8` suggestion-only records and updated `out/operation_living_intelligence/intelligent_harness/phase_13_observation_input_runner/lake_post_seal/latest_suggestion_run.json`. Phase 13 output remained local/suggestion-only: no Supabase or Planner writes, Memgraph changes, pgvector, public output, media metadata write, approve/reject/correct action, or canonical writeback. Raw Phase 17 metadata remains preserved in the bridged input path; Phase 13 normalized suggestion output does not copy that raw provenance forward.
- **2026-05-15:** App completed the read-only Electron smoke for App
  Planner task `176`, `Verify Media Library search/filter/thumbnail behavior
  in read-only app smoke`, then marked the task done after explicit approval
  and readback. Media Library loaded `9,816` assets; filename search returned
  `4` matches for `20260506`; tagged-species search returned `2` matches for
  `Variegated Sea Urchin`; photo/video/unreviewed filters, year `2026` mode,
  pagination hiding for year-scoped browsing, virtualized grid rendering,
  thumbnail loading, asset selection, and view/edit tab inspection all passed
  without non-GET app/Supabase calls. The sampled realm and biome chips
  returned `0 results`, so that pass verified the empty-state/filter path
  rather than positive linked-media chip results. No Media Library metadata,
  tags, links, reviewed state, uploads, deletes, re-indexing, Storage, schema,
  telemetry, MQTT, or app source files changed.
- **2026-05-15:** Company completed the docs-only Operation Living
  Intelligence Wave 6 Media And Visual AI Readiness design:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_media_visual_ai_readiness_design_2026-05-15.md`.
  App implication: any future Wave 6 helper/runtime path must stay local,
  ignored-output-first, review-gated, and separated from Media Library
  metadata unless separately approved. The design proposes future noncanonical
  output under
  `out/operation_living_intelligence/wave_6_media_visual_ai_readiness/`, but
  does not approve App helper implementation, model calls, model downloads,
  generated output, Media Library integration, Supabase/Planner/Storage writes,
  App runtime behavior, graph/vector writes, cloud upload, or canonical
  writeback.
- **2026-05-15:** Company completed the Operation Living Intelligence Wave 6
  source/runtime readiness review:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_source_runtime_readiness_review_2026-05-15.md`.
  App implication: source files and App ignored-output posture are partially
  ready, but implementation is deferred. `ffprobe`/`ffmpeg`/`mediainfo` are not
  on PATH, the exact Nemotron route is not selected, storage-free checks were
  blocked, and credential/privacy/cost/input gates remain unresolved. A future
  App packet should be source/runtime readiness only, not a helper or model-run
  proposal.
- **2026-05-15:** Company prepared the Operation Living Intelligence Wave 6 App
  design-review packet:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_app_design_review_packet_2026-05-15.md`.
  App implication: the requested next review is docs-only and
  readiness-only. The packet asks whether App should require a preflight-only
  media inspection step, whether `ffprobe` or an equivalent path is acceptable,
  whether ignored `out/operation_living_intelligence/wave_6_media_visual_ai_readiness/`
  is the right preflight output boundary, and what stop conditions prevent raw
  media side effects, Media Library writes, model/API behavior, generated
  output, runtime behavior, or canonical writeback.
- **2026-05-15:** App completed the docs-only Operation Living Intelligence
  Wave 6 design review:
  `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-design-review.md`.
  The review accepts a future preflight-only boundary in principle: bounded
  task `398` source set, ignored
  `out/operation_living_intelligence/wave_6_media_visual_ai_readiness/`
  output, read-only media metadata inspection, validation/readback, and strict
  separation between media preflight, model route, credentials, generated
  annotations, Media Library metadata, and App runtime behavior. It keeps
  implementation deferred: no helper, dependency install/use, generated output,
  media scan, clip/frame extraction, thumbnail/proxy/sidecar creation, model
  route selection, model install/download/run, API/model call, cloud upload,
  Media Library metadata, Supabase/Planner/Storage write, App runtime behavior,
  DaVinci work, public output, paid service, or canonical writeback.
- **2026-05-16:** Company prepared the Operation Living Intelligence Wave 6
  media preflight policy/tooling proposal:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_media_preflight_policy_and_tooling_proposal_2026-05-16.md`.
  App implication: future work would require separate approval before adding
  `tools/run-oli-wave6-media-preflight.js`, writing ignored preflight output,
  running read-only media inspection, or performing parent-folder side-effect
  checks. No App code, helper implementation, generated output,
  media-inspection tooling install/use, model route, model/API call, media
  operation, Media Library metadata, App runtime behavior, Supabase/Planner/
  Storage write, public output, paid service, or canonical writeback changed.
- **2026-05-16:** Company prepared the Operation Living Intelligence Wave 6
  preflight implementation readiness checklist:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_6_preflight_implementation_readiness_checklist_2026-05-16.md`.
  App implication: the next possible helper, if explicitly approved, is Phase A
  filesystem-only preflight with tool availability detection only, ignored
  preflight readback output, and immediate parent-folder side-effect checks.
  No App code, helper implementation, generated output, media operation, App
  runtime behavior, Media Library metadata, Supabase/Planner/Storage write,
  public output, paid service, or canonical writeback changed.
- **2026-05-16:** App completed the approved Operation Living Intelligence
  Wave 6 Phase A media preflight helper:
  `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-media-preflight.js`.
  Generated ignored output lives under
  `out\operation_living_intelligence\wave_6_media_visual_ai_readiness\preflight\`.
  Result:
  `pass_with_review_required_wave6_phase_a_preflight_ready` with all `4 / 4`
  source files present, immediate parent folders unchanged, `ffprobe`/`ffmpeg`
  detected by PATH filesystem probe only, `mediainfo` unavailable, and no media
  tools executed. No media processing, model/API/cloud, Media Library metadata,
  App runtime behavior, Supabase/Planner/Storage write, public output, paid
  service, or canonical writeback changed.
- **2026-05-16:** Company prepared the Operation Living Intelligence Wave 6
  Phase B media stream metadata approval packet:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_phase_b_media_stream_metadata_approval_packet_2026-05-16.md`.
  App implication: the next possible helper change required an explicit
  `--phase-b-stream-metadata` boundary, the exact detected `ffprobe.exe` path,
  and the proposed `-v error -print_format json -show_format -show_streams`
  flags before any media inspection execution.
- **2026-05-16:** App completed the approved Operation Living Intelligence
  Wave 6 Phase B media stream metadata readback:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_phase_b_media_stream_metadata_readback_2026-05-16.md`.
  App updated `tools/run-oli-wave6-media-preflight.js` so Phase B requires
  `--phase-b-stream-metadata`, then ran only the approved `ffprobe` command
  against the exact four task `398` files. Result:
  `pass_with_review_required_wave6_phase_b_stream_metadata_ready`; all `4 / 4`
  commands exited `0`, metadata parsed, parent folders remained unchanged, and
  output stayed under ignored `out/`. No `ffmpeg`, media export/transcode/clip/
  frame/thumbnail/proxy/sidecar/cache/checksum/derivative, model/API/cloud,
  Media Library metadata, App runtime behavior, Supabase/Planner/Storage write,
  public output, paid service, or canonical writeback changed.
- **2026-05-16:** Company completed the Operation Living Intelligence Wave 6
  model-route decision packet:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_model_route_decision_packet_2026-05-16.md`.
  App implication at that point: the next safe gate was docs-only App
  model-route design review. Company recommended local/private-first
  feasibility review: Nemotron
  remains the preferred target if feasible, Qwen remains fallback/local
  benchmark if needed, and hosted/cloud routes remain deferred until account,
  key, upload, privacy, retention, and cost approvals exist. No model install,
  model download, model run, API call, cloud upload, preprocessing, generated
  annotations, App runtime behavior, Media Library metadata, Supabase/Planner/
  Storage write, public output, paid service, or canonical writeback changed.
- **2026-05-16:** Company prepared the Operation Living Intelligence Wave 6
  App model-route design-review packet:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_model_route_app_design_review_packet_2026-05-16.md`.
  App implication: App's next safe action is docs-only route feasibility review
  covering local/private Nemotron feasibility, Qwen fallback practicality,
  hosted/cloud requirements, preprocessing constraints, output/cache/credential
  boundaries, and validation/readback. No App code, model install/download/run,
  API call, cloud upload, preprocessing, generated annotations, runtime
  behavior, Media Library metadata, Supabase/Planner/Storage write, public
  output, paid service, or canonical writeback changed.
- **2026-05-16:** App completed the docs-only Operation Living Intelligence
  Wave 6 model-route design review:
  `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-model-route-design-review.md`.
  App decision: local/private-first is accepted as the planning posture.
  Nemotron remains the preferred strategic target if feasible; Qwen2.5-VL local
  remains fallback/benchmark if Nemotron is blocked; hosted/cloud routes remain
  deferred behind account/key/upload/privacy/retention/cost approval. The next
  App-facing step, if any, is a separately approved model-route feasibility
  preflight, not model execution. No App code, helper implementation, generated
  output, model install/download/run, API call, cloud upload, preprocessing,
  generated annotations, App runtime behavior, Media Library metadata,
  Supabase/Planner/Storage write, public output, paid service, or canonical
  writeback changed.
- **2026-05-16:** Company prepared the Operation Living Intelligence Wave 6
  model-route feasibility preflight approval packet:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_model_route_feasibility_preflight_approval_packet_2026-05-16.md`.
  App implication: the future implementation boundary is feasibility/readback
  only: route requirements, hardware/storage/cache checks, input-limit
  questions, output paths, validation, and stop conditions. The packet itself
  did not approve App helper implementation, local environment probing,
  official route recheck, generated output, model install/download/run, API call, cloud upload, preprocessing,
  generated annotations, App runtime behavior, Media Library metadata,
  Supabase/Planner/Storage write, public output, paid service, or canonical
  writeback changed.
- **2026-05-16:** App completed the approved Operation Living Intelligence
  Wave 6 model-route feasibility helper/readback:
  `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-model-route-feasibility.js`.
  Generated ignored output lives under
  `out\operation_living_intelligence\wave_6_media_visual_ai_readiness\model_route_feasibility\`.
  Result:
  `pass_with_review_required_wave6_model_route_feasibility_preflight_ready`.
  The readback found all `4 / 4` source files present, parent folders
  unchanged, CPU/RAM/GPU/disk readiness recorded, including
  `NVIDIA GeForce RTX 5060 Ti` with `16311 MiB` total VRAM and `14195 MiB`
  free at readback. No official route docs recheck, model install/download/run,
  API call, cloud upload, credential use, account/payment setup, `ffmpeg`,
  preprocessing, generated annotation, Media Library metadata, App runtime
  behavior, Supabase/Planner/Storage write, public output, paid service, or
  canonical writeback changed.
- **2026-05-16:** Company completed the Operation Living Intelligence Wave 6
  official route recheck and route-selection packet:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_official_route_recheck_and_route_selection_packet_2026-05-16.md`.
  App implication: `Qwen/Qwen3-VL-2B-Instruct` local/offline is selected as
  the first practical future pilot proposal route. Nemotron 3 Nano Omni remains
  the strategic quality target once hardware/runtime gates are solved, and
  hosted/cloud routes remain deferred. No App code, dependency install, model
  install/download/run, API call, cloud upload, preprocessing, generated
  annotation, Media Library metadata, App runtime behavior, Supabase/Planner/
  Storage write, public output, or canonical writeback is approved.
- **2026-05-16:** Company prepared the Operation Living Intelligence Wave 6
  Qwen3-VL local pilot implementation approval packet:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_qwen3_vl_local_pilot_implementation_approval_packet_2026-05-16.md`.
  App implication: explicit approval is now required before App code,
  dependency install, model download/cache, or model run. The prepared packet
  proposes a still-image-only first pilot using `TEST_398_01_OPAQUE_LAKE_STILL`,
  ignored local output, candidate-only readback, raw parent-folder side-effect
  proof, and no public/canonical writes.
- **2026-05-16:** App completed the approved Operation Living Intelligence
  Wave 6 Qwen3-VL still-image local pilot:
  `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-qwen3-vl-local-pilot.js`.
  Company readback is recorded at
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_qwen3_vl_local_pilot_readback_2026-05-16.md`.
  Result: `pass_with_review_required_wave6_qwen3_vl_still_image_candidate_ready`.
  The helper used only `TEST_398_01_OPAQUE_LAKE_STILL`, installed named
  dependencies and cached the model under ignored App `out/`, generated parsed
  candidate-only JSON under ignored App `out/`, preserved public/canonical
  blocks, and confirmed the raw parent folder unchanged. Runtime was CPU-only;
  video/GPU/preprocessing remain unapproved.
- **2026-05-16:** Company completed the Operation Living Intelligence Wave 6
  Qwen3-VL prompt hardening and usefulness review:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_qwen3_vl_prompt_hardening_usefulness_review_2026-05-16.md`.
  App implication: next implementation, if any, should be a prompt-hardened
  still-image rerun approval before video or GPU/CUDA runtime work. No App
  helper change or model rerun is approved by the review itself.
- **2026-05-16:** App completed the approved Operation Living Intelligence
  Wave 6 Qwen3-VL prompt-hardened still-image rerun:
  `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-qwen3-vl-local-pilot.js`.
  Company readback is recorded at
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_qwen3_vl_prompt_hardened_rerun_readback_2026-05-16.md`.
  Result: `pass_with_review_required_wave6_qwen3_vl_still_image_candidate_ready`.
  The final rerun used only `TEST_398_01_OPAQUE_LAKE_STILL`, used the existing
  local runtime/cache under ignored App `out/`, did not attempt dependency
  install or model download, generated parsed prompt-versioned candidate JSON,
  preserved public/canonical blocks, removed the earlier environment-quality
  judgment issue, and confirmed the raw parent folder unchanged at `430 / 430`.
  Runtime remained CPU-only; video/GPU/preprocessing remain unapproved.
- **2026-05-16:** Company completed the Operation Living Intelligence Wave 6
  video/GPU runtime decision packet:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_video_gpu_runtime_decision_packet_2026-05-16.md`.
  App implication: do not run video yet. The next safe gate is App docs-only
  review of short-video/GPU runtime design for `TEST_398_02_FIELD_SAMPLING`.
  No App code, video input, GPU/CUDA runtime change, dependency change,
  decoder/backend install/use, `ffmpeg`, preprocessing, generated annotation
  expansion, Media Library metadata, App runtime behavior, database/public
  output, or canonical writeback is approved.
- **2026-05-16:** Company prepared the Operation Living Intelligence Wave 6
  video/GPU runtime App design-review packet:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_video_gpu_runtime_app_design_review_packet_2026-05-16.md`.
  App implication: App may review the packet docs-only for
  `TEST_398_02_FIELD_SAMPLING` as the only possible first short-video
  candidate. No helper implementation, video execution, GPU/CUDA runtime
  change, dependency change, decoder/backend install/use, preprocessing,
  generated annotation expansion, Media Library metadata, App runtime behavior,
  database/public output, or canonical writeback is approved.
- **2026-05-16:** App completed the docs-only Operation Living Intelligence
  Wave 6 video/GPU runtime design review:
  `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-video-gpu-runtime-design-review.md`.
  Result: `app_review_blocks_video_until_runtime_changes_are_approved`.
  App accepts the decision to stop before video and recommends a no-execution
  runtime/backend preflight or exact implementation approval packet before any
  short-video run. No App code, video input, GPU/CUDA runtime change,
  dependency change, decoder/backend install/use, `ffmpeg`, preprocessing,
  generated annotation expansion, Media Library metadata, App runtime behavior,
  database/public output, or canonical writeback is approved.
- **2026-05-16:** Company prepared the Operation Living Intelligence Wave 6
  runtime/backend preflight approval packet:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_runtime_backend_preflight_approval_packet_2026-05-16.md`.
  App implication: the next possible helper, if explicitly approved, is
  no-execution local Python/runtime/cache/package/CUDA/backend availability
  readback only. At packet stage it did not approve App code, local
  environment probing, video input, model execution, dependency change,
  decoder/backend use, `ffmpeg`, preprocessing,
  generated annotation expansion, App runtime behavior, database/public output,
  or canonical writeback is approved.
- **2026-05-16:** App completed the approved Operation Living Intelligence
  Wave 6 runtime/backend preflight helper:
  `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-runtime-backend-preflight.js`.
  Company readback is recorded at
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_runtime_backend_preflight_readback_2026-05-16.md`.
  Result: `pass_runtime_backend_preflight_cpu_only_video_packet_possible`.
  The existing Qwen runtime is CPU-only from Torch's view
  (`torch = 2.12.0+cpu`, `torch_cuda_available = false`), `torchvision` is
  importable, `torchcodec` and `decord` are missing, `TEST_398_02_FIELD_SAMPLING`
  exists, and the raw parent folder stayed unchanged at `967 / 967`. No video
  input, model execution, GPU/CUDA runtime change, dependency/backend change,
  `ffmpeg`, preprocessing, generated annotation expansion, App runtime behavior,
  database/public output, or canonical writeback is approved.
- **2026-05-16:** Company prepared the Operation Living Intelligence Wave 6
  CPU-only short-video implementation approval packet:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_cpu_only_short_video_implementation_approval_packet_2026-05-16.md`.
  App implication: implementation remains unapproved, but the packet names the
  exact possible future helper boundary: existing local/offline Qwen3-VL
  runtime/cache only, CPU only, `torchvision` only,
  `TEST_398_02_FIELD_SAMPLING` only, audio ignored, bounded video budget,
  ignored App `out/` candidate/readback output, and blocked readback if any
  runtime/backend/preprocessing expansion is needed.
- **2026-05-16:** App completed the approved Operation Living Intelligence
  Wave 6 CPU-only short-video helper:
  `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-qwen3-vl-short-video-pilot.js`.
  Company readback is recorded at
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_cpu_only_short_video_pilot_readback_2026-05-16.md`.
  Result: `blocked_wave6_qwen3_vl_cpu_short_video_readback_only`. The helper
  stayed inside the exact approved boundary, but `qwen_vl_utils` could not use
  the approved `torchvision` backend because `torchvision.io` has no
  `read_video`. No candidate was accepted; raw parent folder stayed unchanged
  at `967 / 967`; model cache stayed unchanged.
- **2026-05-16:** Company prepared the Operation Living Intelligence Wave 6
  Decord backend short-video approval packet:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_decord_backend_short_video_approval_packet_2026-05-16.md`.
  App implication: implementation remains unapproved, but the next possible
  video route is a local `decord` backend run limited to the existing ignored
  App venv, CPU-only, exact `TEST_398_02_FIELD_SAMPLING` scope, existing model
  cache, ignored output, and no `torchcodec`, `ffmpeg`, preprocessing, GPU/CUDA,
  public, or canonical writes.
- **2026-05-16:** App completed the approved Operation Living Intelligence
  Wave 6 Decord backend short-video helper:
  `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-qwen3-vl-short-video-pilot.js`.
  Company readback is recorded at
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_decord_backend_short_video_pilot_readback_2026-05-16.md`.
  Result:
  `pass_with_review_required_wave6_qwen3_vl_decord_short_video_candidate_ready`.
  The helper installed/used `decord 0.6.0` only inside the existing ignored App
  venv, reused the existing local/offline Qwen3-VL model cache, ran CPU-only on
  `TEST_398_02_FIELD_SAMPLING`, sampled `4` frames, and wrote candidate-only
  ignored output under
  `out\operation_living_intelligence\wave_6_media_visual_ai_readiness\qwen3_vl_short_video_pilot_decord\`.
  Raw parent folder and model cache stayed unchanged; no `torchcodec`,
  `ffmpeg`, preprocessing, GPU/CUDA, Media Library metadata, App runtime
  behavior, Supabase/Planner/Storage/schema/public write, or canonical
  writeback changed.
- **2026-05-16:** Company completed the Operation Living Intelligence Wave 6
  Decord short-video usefulness review:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_decord_short_video_usefulness_review_2026-05-16.md`.
  App implication: Decord is accepted as the current local CPU short-video
  baseline, but additional video/model runs, GPU/CUDA, preprocessing,
  `torchcodec`, `ffmpeg`, generated annotation workflows, Media Library
  metadata, App runtime integration, public output, or canonical writeback
  remain unapproved. If Wave 6 continues, the next safe App-facing work should
  be a docs-only GPU/CUDA runtime proof decision or a new exact approval packet.
- **2026-05-16:** Company completed the Operation Living Intelligence Wave 6
  GPU/CUDA runtime proof decision packet:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_cuda_runtime_proof_decision_packet_2026-05-16.md`.
  App implication: GPU/CUDA proof is worth planning, but no App code,
  runtime/package change, model run, video input, GPU/CUDA inference, or
  dependency work is approved. The next safe App-facing step is a docs-only
  design-review packet for the GPU/CUDA runtime-proof boundary, ideally
  starting with no-video runtime availability before any model proof.
- **2026-05-16:** Company prepared the Operation Living Intelligence Wave 6
  GPU/CUDA runtime proof App design-review packet:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_cuda_runtime_proof_app_design_review_packet_2026-05-16.md`.
  App implication: the requested next step is docs-only review of a possible
  no-video GPU/CUDA runtime proof boundary. Implementation remains unapproved:
  no App code, runtime/package install or change, model run, video input,
  GPU/CUDA inference, generated annotation output, App runtime behavior,
  database/public/canonical write, or Media Library metadata is approved.
- **2026-05-16:** App completed the docs-only Operation Living Intelligence
  Wave 6 GPU/CUDA runtime proof design review:
  `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-gpu-cuda-runtime-proof-design-review.md`.
  App implication: any future GPU/CUDA proof should use a separate ignored App
  runtime and must name the exact Torch/CUDA package path before install. The
  first future implementation should be no-video/no-model CUDA availability
  proof only; model cache use, still-image GPU model proof, and short-video GPU
  model proof remain separate later gates. No App code, runtime/package change,
  dependency install, model run, video input, GPU/CUDA inference, database,
  public, canonical, Media Library, or App runtime behavior changed.
- **2026-05-16:** Company prepared the Operation Living Intelligence Wave 6
  no-video GPU/CUDA runtime proof approval packet:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_no_video_gpu_cuda_runtime_proof_approval_packet_2026-05-16.md`.
  App implication: implementation is still unapproved, but the exact possible
  boundary is now named: add `tools/run-oli-wave6-gpu-cuda-runtime-proof.js`,
  create a separate ignored GPU runtime under App `out/`, install only
  `torch==2.7.0` from the PyTorch CUDA 12.8 wheel index in that runtime, run
  only Torch CUDA availability/device/tiny-tensor checks, and verify the
  accepted CPU runtime and model cache unchanged. No model, media, App runtime,
  Media Library, database, public, canonical, driver/toolkit/global Python, or
  cloud/paid route is approved.
- **2026-05-16:** App completed the approved Operation Living Intelligence
  Wave 6 no-video GPU/CUDA runtime proof:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_no_video_gpu_cuda_runtime_proof_readback_2026-05-16.md`.
  App added `tools/run-oli-wave6-gpu-cuda-runtime-proof.js`, created/used only
  the separate ignored GPU runtime under App `out/`, installed `torch
  2.7.0+cu128` from the approved CUDA 12.8 PyTorch wheel index, verified CUDA
  available on `NVIDIA GeForce RTX 5060 Ti`, and passed a tiny CUDA tensor
  check. The accepted CPU proof runtime and existing model cache stayed
  unchanged. This is runtime readiness only; model execution, media input,
  preprocessing, generated annotations, Media Library metadata, App runtime
  behavior, database/public/canonical writes, and cloud/API routes remain
  separately gated.
- **2026-05-16:** Company prepared the Operation Living Intelligence Wave 6
  GPU Qwen3-VL stack proof approval packet:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_qwen3_vl_stack_proof_approval_packet_2026-05-16.md`.
  App implication: the next proposed implementation, if explicitly approved,
  is no-media/no-model-load package/import compatibility inside the existing
  ignored GPU runtime only. It may install only the named non-Torch model-stack
  packages and run import checks; model loading, model download/cache mutation,
  image/video input, Media Library metadata, App runtime behavior,
  database/public/canonical writes, and cloud/API routes remain blocked.
- **2026-05-16:** App completed the approved Operation Living Intelligence
  Wave 6 GPU Qwen3-VL stack proof:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_qwen3_vl_stack_proof_readback_2026-05-16.md`.
  App added `tools/run-oli-wave6-gpu-qwen3-vl-stack-proof.js`, installed the
  approved non-Torch package stack inside the existing ignored GPU runtime,
  kept Torch unchanged at `2.7.0+cu128`, verified CUDA and tiny tensor checks,
  and imported `transformers` plus the Qwen3-VL classes. The proof blocked
  safely because `qwen_vl_utils` requires `torchvision`, which was explicitly
  excluded. No model load, model cache mutation, media input, App runtime
  behavior, Media Library metadata, database/public/canonical writes, or
  cloud/API route changed. The next App-facing gate was a separate exact
  `torchvision` compatibility proof.
- **2026-05-16:** App completed the approved Operation Living Intelligence
  Wave 6 GPU `torchvision` compatibility proof:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_torchvision_compat_proof_readback_2026-05-16.md`.
  App added `tools/run-oli-wave6-gpu-torchvision-compat-proof.js`, installed
  only `torchvision 0.22.0+cu128` from the official PyTorch CUDA 12.8 wheel
  index inside the existing ignored GPU runtime, kept Torch unchanged at
  `2.7.0+cu128`, confirmed CUDA/tiny tensor readiness, confirmed
  `qwen_vl_utils` and Qwen3-VL class imports, left `torchaudio`, `decord`, and
  `torchcodec` absent, and confirmed the accepted CPU runtime plus model cache
  unchanged. No model load, model cache mutation, media input, App runtime
  behavior, Media Library metadata, database/public/canonical writes, or
  cloud/API route changed. Next App-facing gate, if continuing, is a
  no-media/no-download GPU model-load proof using only the existing local
  Qwen3-VL model cache before any GPU still-image or short-video inference.
- **2026-05-16:** App completed the approved Operation Living Intelligence
  Wave 6 GPU model-load proof:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_model_load_proof_readback_2026-05-16.md`.
  App added `tools/run-oli-wave6-gpu-model-load-proof.js`, used only the
  existing ignored GPU runtime and local Qwen3-VL cache, set offline/cache-only
  flags plus `local_files_only=True`, loaded `AutoProcessor` and
  `Qwen3VLForConditionalGeneration`, and sampled parameters on `cuda:0`. The
  accepted CPU runtime and model cache stayed unchanged. No dependency install,
  model download/cache mutation, media input, generation, forward pass, App
  runtime behavior, Media Library metadata, database/public/canonical writes,
  or cloud/API route changed. The later GPU still-image inference proof used
  only `TEST_398_01_OPAQUE_LAKE_STILL` and the accepted prompt-hardened
  guardrails, and was approved and completed separately.
- **2026-05-16:** Company prepared the Operation Living Intelligence Wave 6
  GPU still-image inference approval packet:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_still_image_inference_approval_packet_2026-05-16.md`.
  App implication: implementation is not approved yet. The packet proposes one
  future helper, existing ignored GPU runtime/cache only,
  `TEST_398_01_OPAQUE_LAKE_STILL` only, accepted prompt-hardened guardrails,
  ignored candidate/readback output only, raw parent/model cache/CPU runtime
  unchanged checks, and no video, dependency changes, model download/cache
  mutation, preprocessing, Media Library metadata, App runtime behavior,
  database/public/canonical writes, or cloud/API route.
- **2026-05-16:** App completed the approved Operation Living Intelligence
  Wave 6 GPU still-image inference proof:
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_still_image_inference_readback_2026-05-16.md`.
  App added `tools/run-oli-wave6-gpu-still-image-proof.js`, used only
  `TEST_398_01_OPAQUE_LAKE_STILL`, existing ignored GPU runtime/cache, and the
  accepted prompt-hardened guardrails, and generated parsed candidate JSON with
  review-required/public-use-blocked/metadata-write-not-approved/noncanonical
  status. The raw parent folder stayed `430 / 430`, the accepted CPU runtime
  stayed `30064 / 30064`, and the model cache stayed `18 / 18`. No dependency
  install/change, model download/cache mutation, video input, preprocessing,
  App runtime behavior, Media Library metadata, database/public/canonical
  writes, or cloud/API route changed. Company then completed the docs-only GPU
  still-image usefulness/performance review at
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_still_image_usefulness_performance_review_2026-05-16.md`.
  The proof is useful for local visual-AI readiness, but not approval for GPU
  video execution. Company then prepared the docs-only GPU short-video
  implementation approval packet at
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_short_video_implementation_approval_packet_2026-05-16.md`.
  Josue approved that exact boundary, and App completed the proof at
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_short_video_proof_readback_2026-05-16.md`.
  App added `tools/run-oli-wave6-gpu-short-video-proof.js`, used only the
  existing ignored GPU runtime/cache and `TEST_398_02_FIELD_SAMPLING`, ignored
  audio, sampled `4` frames, produced candidate-only parsed JSON, kept public/
  canonical writes blocked, and confirmed raw parent folder, accepted CPU
  runtime, and model cache unchanged. No dependency install/change,
  preprocessing, Media Library metadata, App runtime behavior, database/public/
  canonical write, or cloud/API route changed. Company then completed the
  docs-only GPU short-video usefulness/performance review at
  `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_short_video_usefulness_performance_review_2026-05-16.md`.
  The review accepts GPU short-video as the current local baseline and
  recommends stopping Wave 6 implementation here by default; any future prompt
  refinement, owner review, additional media run, annotation workflow, Media
  Library integration, public output, database write, or canonical writeback
  needs separate scope and approval.
- **2026-05-15:** Company completed the docs-only Operation Living Intelligence
  Wave 7 Planner And Agent Routing Graph design:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_7_planner_agent_routing_graph_design_2026-05-15.md`.
  App implication: any future Wave 7 helper should be no-write, ignored-output
  only, and review-gated. Planner/Supabase remains live task truth; the routing
  graph may only derive ownership, blockers, approval gates, handoff surfaces,
  and deferred return gates. The design does not approve App helper
  implementation, generated output, Planner/Supabase writes, schema changes,
  App runtime behavior, persistent graph runtime, automation, public output, or
  canonical writeback.
- **2026-05-15:** Company completed the Operation Living Intelligence Wave 7
  source/readiness review:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_7_source_readiness_review_2026-05-15.md`.
  App implication: source shape is ready for a no-write design-review packet,
  but implementation remains unapproved. The review confirms App schema/source
  support for `work_domains`, `work_programs`, `work_program_projects`,
  `work_projects`, `tasks`, and `content_calendar.work_project_id`; App
  `loadCalendar()` already reads the relevant Planner sources; Program reads
  are optional-schema guarded; and App `out/` is ignored. No live Planner read,
  helper, generated routing output, Planner/Supabase write, App runtime
  behavior, schema change, graph runtime, automation, public output, or
  canonical writeback is approved.
- **2026-05-15:** Company prepared the Operation Living Intelligence Wave 7 App
  design-review packet:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_7_app_design_review_packet_2026-05-15.md`.
  App implication: the requested next review is docs-only. The packet asks App
  to decide whether a future no-write Planner/registry routing helper boundary
  is acceptable, including read path, live-read gate, ignored output path,
  source set, write-path exclusion, canonical boundary, deferred gate handling,
  readback shape, and stop conditions. It does not approve live Planner reads,
  helper implementation, generated output, Planner/Supabase writes, schema
  changes, App runtime behavior, graph runtime, automation, public behavior,
  sensitive indexing, paid services, or canonical writeback.
- **2026-05-15:** Josue paused Operation Living Intelligence Wave 7 as a
  deferred return gate and continued to Wave 8 Telemetry Summaries docs-only:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_8_telemetry_summaries_design_2026-05-15.md`.
  App implication: any future telemetry helper or read path remains unapproved
  until a source/readiness review. Do not change App Monitoring, App runtime
  behavior, protected read paths, generated output, scheduled jobs, or public
  telemetry behavior from this design.
- **2026-05-15:** App completed the docs-only Operation Living Intelligence
  Wave 7 design review:
  `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave7-design-review.md`.
  The review accepts the future no-write Planner/agent routing boundary in
  principle: ignored `out/operation_living_intelligence/wave_7_planner_agent_routing_graph/`
  output, manifest/readback-first shape, Planner/Supabase as live task truth,
  Company registry and domain reports as routing context, deferred return gates
  preserved, and validation that no mutation helpers or Planner write-plan
  helpers are called. Implementation remains deferred: no helper, generated
  output, live Planner read, Planner/Supabase write, App runtime behavior,
  graph runtime, automation, public output, or canonical writeback.
- **2026-05-15:** App added the approved narrow Operation Living Intelligence
  Wave 5 retrieval helper:
  `tools/generate-oli-wave5-retrieval-manifest.js` and
  `tools/run-oli-wave5-retrieval-readback.js`. The helper reads selected
  Company-owned/report-level Markdown sources and writes ignored local output
  under
  `out/operation_living_intelligence/wave_5_retrieval_layer/company_corpus/`.
  Verification generated `98` documents, `1427` line-aware chunks, `10`
  evaluation questions, and `0` sensitive path matches. Readback returned
  `pass_with_review_required_retrieval_readback_ready` with `9 / 10`
  evaluation questions passed, exact path lookup, keyword search, heading
  search, metadata filters, and blocked-answer readback present. No embeddings,
  vector index, pgvector table, model/API call, live Supabase/Planner read,
  App runtime behavior, public search, scheduled refresh, or canonical
  writeback was performed.
- **2026-05-15:** Company completed the docs-only Operation Living Intelligence
  Wave 5 retrieval baseline usefulness review. Result: the App local helper is
  useful as a rebuildable source-path, keyword, heading, metadata-filter, and
  citation-readback aid, but it does not approve embeddings, pgvector/vector
  index work, public search, scheduled refresh, App runtime integration, live
  reads, expanded corpus scope, or canonical writeback. The later
  expected-status helper update and readback review accepted the no-embedding
  baseline; any vector/embedding implementation still needs a separate
  decision brief.
- **2026-05-15:** Company completed the docs-only Operation Living Intelligence
  Wave 5 evaluation tuning plan. App implication: a future approved helper
  update should support expected statuses for `answerable_with_citation`,
  `review_required`, and `blocked` retrieval questions before any vector or
  embedding work. No App code, generated output, runtime behavior, live reads,
  public search, pgvector/vector index, scheduled refresh, or canonical
  writeback changed.
- **2026-05-15:** Company prepared the docs-only Operation Living Intelligence
  Wave 5 expected-status helper update proposal. App implication: if Josue
  later approves the exact scope, only `tools/generate-oli-wave5-retrieval-manifest.js`
  and `tools/run-oli-wave5-retrieval-readback.js` should change, with ignored
  local output regeneration and readback validation. The proposal does not
  approve App runtime behavior, Supabase/Planner/Storage reads or writes,
  embeddings, vectors, public search, scheduled refresh, expanded corpus scope,
  public output, or canonical writeback.
- **2026-05-15:** App completed the approved narrow Operation Living
  Intelligence Wave 5 expected-status helper update. Files changed:
  `tools/generate-oli-wave5-retrieval-manifest.js` and
  `tools/run-oli-wave5-retrieval-readback.js`. The generator now writes `15`
  evaluation questions with expected statuses, and the readback distinguishes
  `answerable_with_citation`, `review_required`, and `blocked` safe outcomes.
  Regenerated ignored local output returned `101` documents, `1463` chunks,
  `15 / 15` evaluation questions passed, expected-status fields present, and
  no embeddings, model/API calls, vector index, live reads, runtime behavior,
  public search, scheduled refresh, or canonical writeback.
- **2026-05-15:** Company completed the docs-only Operation Living Intelligence
  Wave 5 expected-status readback review. App implication: the two-helper local
  retrieval baseline is accepted for source-path/citation/readback use, but no
  vector/embedding implementation, App runtime integration, public search,
  scheduled refresh, live reads, expanded corpus scope, or canonical writeback
  is approved. Any vector/embedding work needs a separate decision brief.
- **2026-05-16:** Company completed the docs-only Operation Living Intelligence
  Wave 5 vector/embedding decision brief. App implication: semantic retrieval
  is worth evaluating only through a future no-write, ignored-output App
  design-review packet. No App code, generated vector output, embeddings,
  pgvector/vector index, model/API calls, credential setup, live reads, public
  search, scheduled refresh, App runtime integration, expanded corpus scope,
  structured writes, public output, or canonical writeback is approved.
- **2026-05-16:** Company prepared the docs-only Operation Living Intelligence
  Wave 5 vector/embedding App design-review packet. App implication: the next
  App action, only if Josue approves it, is docs-only review of the future
  no-write semantic retrieval pilot shape. No App code, embeddings, generated
  vector output, pgvector/vector index, model/API calls, credential setup, live
  reads, public search, scheduled refresh, App runtime integration, expanded
  corpus scope, structured writes, public output, or canonical writeback is
  approved.
- **2026-05-16:** App completed the docs-only Operation Living Intelligence
  Wave 5 vector/embedding design review. App decision: future semantic
  retrieval should start, if separately approved, as local-file-only vector
  evaluation under ignored `out/`, with pgvector deferred until local value,
  citation fidelity, expected-status behavior, stale-output handling, and
  cost/privacy rules are proven. No App code, embeddings, generated vector
  output, pgvector/vector index, model/API calls, credential setup, live reads,
  public search, scheduled refresh, App runtime integration, expanded corpus
  scope, structured writes, public output, or canonical writeback changed.
- **2026-05-16:** Company prepared the docs-only Operation Living Intelligence
  Wave 5 local vector evaluation helper proposal. App implication: future
  implementation, if separately approved, would add
  `tools/run-oli-wave5-local-vector-evaluation.js` and write ignored output
  only under `out/operation_living_intelligence/wave_5_retrieval_layer/company_corpus/vector_eval/`.
  No App code, embeddings, generated vector output, pgvector/vector index,
  model/API calls, credential setup, live reads, public search, scheduled
  refresh, App runtime integration, expanded corpus scope, structured writes,
  public output, or canonical writeback is approved.
- **2026-05-16:** Josue approved the Operation Living Intelligence Wave 5
  local vector evaluation helper boundary. App added
  `tools/run-oli-wave5-local-vector-evaluation.js` and
  `docs/operation-living-intelligence-wave5-vector-eval-config.example.json`.
  First run wrote only ignored validation output under
  `out/operation_living_intelligence/wave_5_retrieval_layer/company_corpus/vector_eval/`
  and returned `blocked_baseline_stale_no_vector_evaluation`, blocking
  semantic candidate output because the accepted baseline is stale. No
  embeddings, model/API calls, pgvector/vector index, live reads, App runtime
  behavior, public output, expanded corpus, structured writes, scheduled
  refresh, or canonical writeback changed.
- **2026-05-16:** The Wave 5 baseline was regenerated and accepted, then the
  local vector-proxy helper reran successfully. App output remains ignored
  under `out/operation_living_intelligence/wave_5_retrieval_layer/company_corpus/`.
  Result: `108` documents, `1543` chunks, `15 / 15` baseline readback passes,
  `75` semantic-proxy candidate rows, `15 / 15` vector-proxy result rows, `0`
  stale source hashes, and `0` unmanifested OLI source candidates. Company
  accepted the no-embedding comparison at
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_5_local_vector_proxy_readback_review_2026-05-16.md`.
  No embeddings, model/API calls, pgvector/vector index, live reads, App
  runtime behavior, public output, expanded corpus, structured writes,
  scheduled refresh, or canonical writeback changed.
- **2026-05-15:** Company completed the Operation Living Intelligence Wave 8
  source/readiness review:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_8_source_readiness_review_2026-05-15.md`.
  App implication: source shape is ready for a no-write Hardware/App/Web
  design-review packet, but any App-owned helper, protected read path, live
  telemetry read, generated output, App Monitoring change, App runtime
  integration, scheduled job, or public telemetry behavior remains unapproved.
- **2026-05-15:** Company prepared the Operation Living Intelligence Wave 8
  Hardware/App/Web design-review packet:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_8_hardware_app_web_design_review_packet_2026-05-15.md`.
  App implication: the next App involvement is docs-only review of the future
  no-write telemetry-summary helper boundary, ignored output path, protected
  read path, snapshot-first recommendation, validation/report shape, and
  runtime exclusion. The packet does not approve an App helper, live telemetry
  read, generated output, App Monitoring change, App runtime integration,
  scheduled sync, schema change, public telemetry behavior, or canonical
  writeback.
- **2026-05-15:** Company prepared the Operation Living Intelligence Wave 8
  domain review synthesis:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_8_domain_review_synthesis_2026-05-15.md`.
  App implication: Company recommends pausing Wave 8 before implementation and
  continuing Wave 9 docs-only unless Josue asks for App-owned review now. App
  acceptance of output path, protected read path, validation/report shape,
  snapshot-first sequence, and runtime exclusion remains pending.
- **2026-05-15:** Company documented the Operation Living Intelligence Wave 9
  CRM, Financials, And Sensitive Domains docs-only design:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_9_crm_financials_sensitive_domains_design_2026-05-15.md`.
  App implication: any future helper/output path is candidate-only and must
  wait for Growth/Financials/Web owner scope plus App protected-read/output
  review. No App CRM, Financials tab, Planner, schema, migration, protected
  read path, runtime behavior, generated output, graph/vector projection, or
  sensitive live read is approved.
- **2026-05-15:** Company completed the Operation Living Intelligence Wave 9
  source/privacy readiness review:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_9_source_privacy_readiness_review_2026-05-15.md`.
  App implication: policy shape is ready for a no-write owner-review packet,
  but App acceptance of protected read boundaries, ignored output path, no
  runtime/schema behavior, validation expectations, and future helper shape
  remains pending.
- **2026-05-15:** Company prepared the Operation Living Intelligence Wave 9
  Growth/Financials/App/Web owner-review packet:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_9_growth_financials_app_web_owner_review_packet_2026-05-15.md`.
  Company also prepared the owner-review synthesis:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_9_owner_review_synthesis_2026-05-15.md`.
  App implication: App docs-only review is ready to request for the candidate
  ignored output path, protected read/no-runtime boundary, first-output shape,
  validation requirements, and stop conditions. App acceptance remains pending;
  helper implementation, generated output, live sensitive reads, schema/runtime
  changes, service-role exposure, App runtime logs, and canonical writeback
  remain unapproved.
- **2026-05-15:** App completed the docs-only Operation Living Intelligence
  Wave 5 design review:
  `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave5-design-review.md`.
  The review accepts the proposed ignored
  `out/operation_living_intelligence/wave_5_retrieval_layer/company_corpus/`
  output path and manifest/chunk/readback-first package shape for a future
  separately approved helper. It requires line-aware chunks,
  source/owner/role/canonicality/publicness/claim-status metadata, a
  no-embedding keyword/source-path baseline, validation/readback gates,
  generated-derived labels for selected readbacks, and `none` canonical
  writeback. The review did not create helpers, generated corpus files,
  embeddings, vector indexes, pgvector tables, Supabase schema changes,
  external API/model calls, Supabase/Planner/Storage writes, App runtime
  behavior, Web/public-search behavior, automation, paid services, durable
  retrieval infrastructure, or source-of-truth migration.
- **2026-05-15:** After Josue approved the smallest local Operation Living
  Intelligence Wave 3 helper, App added and verified
  `tools/generate-oli-wave3-species-public-history-jsonl.js` and
  `tools/run-oli-wave3-species-public-history-readback.js`. The generated
  files are ignored local output under
  `out\operation_living_intelligence\wave_3_species_public_history\lake_post_seal\`.
  The generator returned
  `pass_with_review_required_species_public_history_jsonl_ready` with `114`
  nodes, `222` normal edges, and `49` blocked edges; the no-Docker readback
  returned
  `pass_with_review_required_species_public_history_readback_ready` with `271`
  relationships including blocked guardrails. No Docker/Memgraph use, App
  runtime/schema change, Supabase/Planner write, Storage write, media metadata
  change, species image change, public behavior, automation, canonical
  writeback, or source-of-truth migration changed.
- **2026-05-15:** App completed the docs-only Operation Living Intelligence
  Wave 3 design review:
  `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave3-design-review.md`.
  The review accepts the proposed ignored
  `out/operation_living_intelligence/wave_3_species_public_history/lake_post_seal/`
  output path and JSONL/readback-first package shape for a future separately
  approved helper. It keeps Cypher/Memgraph deferred, requires explicit
  source-scope, blocked-edge, validation, and readback checks, and preserves
  `none` canonical writeback. The review itself did not create helpers,
  generated output, runtime behavior, schema changes, Supabase/Planner/Storage
  writes, media metadata changes, species image changes, public behavior,
  Research/Content/Web changes, automation, paid services, durable graph
  runtime, or source-of-truth migration.
- **2026-05-15:** Company completed the docs-only Operation Living
  Intelligence Wave 2 Content Story Graph design:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_2_content_story_graph_design_2026-05-15.md`.
  App's role is future protected-read helper/output ownership only if a later
  implementation proposal is approved. The design recommends reusing the Wave
  1 local-output/no-write pattern under a separate ignored output folder, but
  does not approve App helper implementation, App runtime integration,
  Memgraph/Docker use, Supabase/Planner writes, schema changes, public output,
  automation, or source-of-truth migration.
- **2026-05-15:** Company completed the read-only source-availability review
  for the selected Wave 2 Lake Post-Seal packet:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_2_lake_post_seal_source_availability_review_2026-05-15.md`.
  At that gate, the packet was ready for a future no-write App implementation
  proposal, but helper work remained unapproved until later explicit approval.
  Any App work should stay local JSONL/readback-first,
  ignored-output-only, protected-read-only, and must
  preserve `none` canonical writeback plus public/media/research review gates.
- **2026-05-15:** Company prepared the no-write Wave 2 App implementation
  proposal:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_2_no_write_app_implementation_proposal_2026-05-15.md`.
  It proposes a future App-owned local package under
  `out\operation_living_intelligence\wave_2_content_story_graph\lake_post_seal\`
  with source manifest, JSONL graph files, blocked edges, validation, and
  readback reports. At proposal time this was not App implementation approval;
  later approval covered only the smallest local helper, not runtime/schema
  change, Docker/Memgraph use, Supabase/Planner write, public behavior, or
  automation.
- **2026-05-15:** Company prepared the Wave 2 App design-review packet after
  user approval to continue:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_2_app_design_review_packet_2026-05-15.md`.
  Company read App operating rules, ignored-output state, Supabase safety
  memory/skill, and Wave 1 OLI helper patterns. The packet is a design-review
  handoff only; later approval covered only the smallest local helper and did
  not approve runtime/schema changes, Supabase/Planner writes, public
  behavior, or automation.
- **2026-05-15:** App completed the docs-only Operation Living Intelligence
  Wave 2 design review:
  `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave2-design-review.md`.
  The review accepts the proposed ignored `out\operation_living_intelligence\wave_2_content_story_graph\lake_post_seal\`
  output path and JSONL/readback-first shape for a separately approved helper.
  It also keeps Cypher/Memgraph deferred and requires explicit status and
  blocked-inference validation. During the review itself, no App helper,
  graph files, runtime behavior, schema, Supabase/Planner write, media
  metadata, public behavior, or automation changed.
- **2026-05-15:** After Josue approved the smallest local Wave 2 helper, App
  added and verified
  `tools/generate-oli-wave2-content-story-jsonl.js` and
  `tools/run-oli-wave2-content-story-readback.js`. The generated files are
  ignored local output under
  `out\operation_living_intelligence\wave_2_content_story_graph\lake_post_seal\`.
  The generator returned
  `pass_with_review_required_content_story_jsonl_ready` with `63` nodes,
  `136` normal edges, and `34` blocked edges; the offline readback returned
  `pass_with_review_required_content_story_readback_ready`. One selected story
  beat link to out-of-scope `story_thread:30` is blocked instead of expanding
  scope. No Docker/Memgraph use, App runtime/schema change, Supabase/Planner
  write, Storage write, media metadata change, public behavior, automation,
  canonical writeback, or source-of-truth migration changed. Company later
  reviewed the generated output and closed Wave 2 as a successful no-Docker
  local proof, so no Cypher/Memgraph or App runtime follow-up is currently
  recommended for Wave 2.
- **2026-05-15:** App added local Operation Living Intelligence Wave 1 helper
  tooling and documentation for the Lake Post-Seal graph pilot:
  `tools/generate-oli-wave1-jsonl.js`, `tools/generate-oli-wave1-cypher.js`,
  `tools/run-oli-wave1-jsonl-readback.js`,
  `tools/run-oli-wave1-memgraph-smoke.js`, and
  `docs/operation-living-intelligence-wave1.md`. The helpers generate ignored
  local JSONL/Cypher outputs, run no-Docker JSONL safety/value readbacks, run a
  disposable local Memgraph smoke test when intentionally needed, and preserve
  the boundary that Supabase/domain repos remain canonical. Verified JSONL
  readback returned `67` nodes, `96` edges, `13` blocked edges, `109`
  relationships with blocked guardrails, and `9 / 10` Stage 3 questions
  passing or provisionally passing. Verified Memgraph smoke readback returned
  `67` nodes, `109` relationships, blocked claims/media/source-link/writeback
  checks passed, and the disposable container was removed. No App runtime
  behavior, schema, migrations, packages, Supabase/Planner records, Storage,
  media metadata, telemetry, MQTT, public website behavior, paid service,
  automation, or canonical writeback changed.
- **2026-05-15:** Company documented a public-reuse boundary for the remaining
  OLI Wave 1 Stage 3 question `5` gap:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_public_reuse_boundary_2026-05-15.md`.
  The boundary keeps public surfaces as review-gated candidates only and does
  not approve App runtime changes, Web behavior, Content copy, Supabase writes,
  media metadata, or canonical writeback.
  Company then documented the proposed Wave 1.1 public reuse sidecar:
  `archive/superseded/operation-living-intelligence/operation_living_intelligence_wave_1_1_public_reuse_sidecar_proposal_2026-05-15.md`.
  App then added and verified the local helper
  `tools/generate-oli-wave1-public-reuse-sidecar.js`, which writes ignored
  sidecar JSONL/readback files under `out/operation_living_intelligence/`.
  Verified sidecar generation returned `11` public surfaces, `11` public reuse
  candidates, `7` reuse gates, `47` public reuse edges, and status
  `pass_with_review_required_public_reuse_sidecar_ready`. App also updated the
  no-Docker JSONL readback helper so Stage 3 now returns `10 / 10` pass or
  provisional-pass when the sidecar is present, with question `5` held at
  `provisional_pass` and `review_required`. The helper is local, ignored,
  rebuildable, read-only against generated files, and no-write against
  Supabase/Planner/Web/Content/App runtime services.
  Environment inspection at that point found no SQL-capable database
  connection string or Postgres environment variables; the task `409` live SQL
  metadata gap was later resolved for review after Josue ran the JSON SQL
  packet in Supabase SQL Editor.
- **2026-05-15:** App added a Supabase SQL Editor friendly JSON version of the
  Operation Living Intelligence Wave 1 SQL metadata packet:
  `tools/inspect-oli-wave1-sql-metadata-json.sql`. It returns one
  `oli_wave1_sql_metadata_readback` JSON value for target table existence,
  columns, constraints, indexes, RLS state, policies, triggers, selected
  function metadata, and selected grants. Static non-comment SQL keyword scan
  found no write/DDL/security/RPC keywords. It was not run because this
  machine/session still does not expose `psql`, a Postgres connection string,
  or an MCP SQL database tool.
- **2026-05-15:** Josue ran the Wave 1 SQL metadata JSON packet in Supabase SQL
  Editor and provided the result for review. Company/App review confirmed all
  `17` target tables exist and that key columns, constraints, and indexes
  support the current local Wave 1 graph proof. RLS is enabled on target
  tables, with sparse public/authenticated policies, so any durable projection
  must use an internal protected App-owned read path or narrowly scoped
  database role rather than browser/public access. Broad table grants are a
  security-review signal before automation. Durable graph automation,
  persistent Memgraph infrastructure, public graph output, and canonical
  writeback remain unapproved.
- **2026-05-15:** App prepared the Operation Living Intelligence Wave 1 durable
  projection design:
  `docs/operation-living-intelligence-wave1-durable-projection-design.md`.
  The design keeps the next implementation posture at manual internal run only:
  protected read path, ignored local output, rebuildable files,
  validation/readback gates, drift checks, no public output, no canonical
  writeback, operator runbook, and stop conditions. It does not approve
  scheduled sync, persistent Memgraph service, App runtime integration,
  Supabase/Planner writes, Web behavior, Content copy, paid services, or source
  of truth migration.
- **2026-05-15:** App added and verified the manual Operation Living
  Intelligence Wave 1 projection helper:
  `tools/run-oli-wave1-manual-projection.js`. The helper runs the existing
  local JSONL regeneration, no-Docker readback, public reuse sidecar,
  sidecar-aware readback, and Cypher generation sequence, then writes ignored
  local operator reports. Verified run returned
  `pass_manual_internal_projection_ready`, `67` nodes, `96` normal edges, `13`
  blocked edges, Stage 3 `10 / 10`, public reuse `review_required`, and no stop
  conditions after explicit network permission allowed the bounded Supabase
  source refresh. It does not start Docker/Memgraph, change App runtime
  behavior, write Supabase/Planner/Storage records, change public Web behavior,
  edit Content copy, automate a schedule, or create canonical writeback.
- **2026-05-15:** App added the read-only Operation Living Intelligence SQL
  metadata gate packet:
  `docs/operation-living-intelligence-sql-metadata-check.md` and
  `tools/inspect-oli-wave1-sql-metadata.sql`, plus optional runner
  `tools/run-oli-wave1-sql-metadata-check.ps1`. The SQL file is catalog
  inspection only and targets Wave 1 columns, constraints, indexes, RLS state,
  policies, triggers, selected function metadata, and selected grants. It was
  not run because this machine/session does not expose `psql`, a Postgres
  connection string, or an MCP SQL database tool.
- **2026-05-15:** Planner domain accents were simplified so color now means domain ownership rather than mixed project/thread/task semantics. The shared palette in `css/shared/shared-domain-colors.css` gives each domain a distinct color lane; project/content cards use the full domain accent while tasks/subtasks use softer versions, and status remains separate as badges, text, actions, or columns. Planner renderers now route known domains through the local palette helper instead of trusting live `work_domains.color_class` for display. This was a local renderer/CSS behavior update only; no Supabase records, schema, migrations, Storage, telemetry, MQTT, Planner records, or live app actions changed, and Electron visual smoke verification was not run.
- **2026-05-15:** App completed a supplemental quality-system token cleanup after the domain-accent update. Planner domain palette values now live in `css/shared/app-tokens.css` as `--app-domain-*` tokens, `shared-domain-colors.css` remains the class-to-semantic-variable mapping layer, and focused Planner/Roadmap/CRM/Admin Media CSS cleanup keeps the scoped token and CSS quality lints passing across 69 CSS files. Prompt Library was checked and needed no edits because it was already token-clean. No app launch, Supabase writes, schema, Storage, telemetry, MQTT, or live Planner records changed.
- **2026-05-15:** App completed the second scanner-driven cleanup pass over Site Admin CSS. Shared Admin navigation/status/action controls, detail disclosures, form action buttons, species filters/search, image grids, tables/forms, and Media Library styles now scan clean for raw color and scoped CSS quality drift. The token and CSS quality lint pilot now covers 74 CSS files. No app launch, Supabase writes, schema, Storage, telemetry, MQTT, or live operational records changed.
- **2026-05-15:** Mobile Field Observer quality-system planning was promoted into durable App planning/memory and mirrored into App Planner as `work_projects.id = 84`, scheduled for 2026-05-16 with 6 parent phase tasks and 33 child tasks. The work will bring the mobile app under the same guardrail model as the desktop App quality-system rollout: mobile `--field-*` design tokens, shared plain-JavaScript UI primitives, a fixture-only mobile UI Lab, scoped validation/lints, and a Capacitor sync/build/install closeout. The final phone install/relaunch is in scope for the project but remains an explicit device-action approval gate. No app runtime behavior, schema, Storage, telemetry, MQTT, sighting records, public website behavior, or Company/Brain source docs changed beyond this reporting update.

- **2026-05-14:** App quality-system planning was promoted into durable App memory and live Planner tracking. The new roadmap `planning/app_quality_system_roadmap.md` compares miniBIOTA_App against miniBIOTA_Web and defines the long-running path toward Web-like build quality: design tokens, shared primitives, fixture tests, token lints, dev-only UI Lab, Planner selectors/services, and explicit write plans. It was mirrored to App Planner as `work_projects.id = 82` with 10 phase parent tasks and 62 child subtasks. No app runtime behavior, schema, Storage, telemetry, MQTT, public website behavior, or Company/Brain source docs changed beyond this reporting update.

- **2026-05-14:** Company updated Operation Living Intelligence App task `412`
  for designing the Nemotron/Codex local/private media-analysis pipeline and
  sidecar annotation boundary after Josue selected NVIDIA Nemotron 3 Nano Omni
  as the primary model lane. Qwen remains fallback/benchmark only. This is
  planning only; no App runtime behavior, schema, model install, media
  metadata write, raw media upload, public site behavior, paid service, or
  automated job changed.

- **2026-05-13:** CRM Contacts gained flexible labeled links through migration `014_crm_contact_links.sql` and App UI support in the contact modal/detail view. Contacts can now store only the links they actually have, such as Website, YouTube, Facebook, or other freeform labels, instead of requiring a fixed social-platform column list. Grant Eder's YouTube link was moved from notes into `crm_contact_links` after the user applied the migration. This changed App CRM schema/runtime behavior and one approved CRM contact record; no outreach execution, partner/sponsor commitments, Planner records, public site behavior, Storage, telemetry, or pricing/public claims changed.

- **2026-05-13:** Monitoring now surfaces Hardware's internal live MQTT fields for sensor biomes 2-5: heat-exchanger/liquid temperature from `liq_t` and pump run percentage from `pump_pct`. This was an App/operator-only renderer label/display closeout over the existing MQTT payload; no Supabase records, schema, migrations, Storage, MQTT subscriptions, telemetry controls, setpoints, public Web telemetry, or live app actions changed.

- **2026-05-13:** Planner task hierarchy inspection was tightened after daily use showed completed subtasks could be visible but hard to open from Today and parent tasks. Today subtask rows now open the child task directly while drawer summaries still avoid accidental parent-card opens. The task modal now shows linked parent/child task rows with direct open actions, and its form layout constrains long project/parent labels to avoid horizontal modal scroll. This was a local renderer/CSS update only; no database records, schema, migrations, Storage, telemetry, MQTT, CRM, Financials, Site Admin, Monitoring, or live app actions changed, and Electron visual smoke verification was not run.

- **2026-05-12:** CRM relationship-system schema foundation was applied and verified. Growth approved the schema semantics; existing CRM rows were exported to `C:\tmp\miniBIOTA-crm-pre-013-2026-05-12\`; Josue ran `migrations/013_crm_relationship_system.sql` in Supabase SQL Editor; App read-only verification confirmed all 33 new CRM tables exist and are empty, while legacy counts remained `crm_contacts = 0`, `crm_activities = 0`, `partner_opportunities = 5`. App then added a read-only CRM Relationship view that uses the internal main-process secret-key bridge for RLS-protected table counts and review queues. No CRM records were created, edited, deleted, archived, migrated, backfilled, or used as test records.
- **2026-05-12:** App added Planner parent/container deadline support using
  `tasks.due_date` without migrations or live Planner record writes. The task
  modal, save paths, task cards, Today, Timeline, Week, Month, task board,
  project detail, quick edit controls, and linked content-date push guard now
  separate parent/container due dates from scheduled work occurrences. Today
  and Timeline now lead parent/container cards with the scheduled child task
  when child work caused the parent to appear. No database records, schema,
  migrations, Storage, telemetry, public site behavior, or Planner records were
  changed by the App implementation.
- **2026-05-12:** Company applied approved App Planner cleanup from the
  cross-domain task relevance review: completed and archived stale App Agent
  wiring project `11`, made task `279` a due-only Aquatic Club support
  container, nested domain-filter smoke task `166` under hierarchy smoke task
  `165`, and renamed project `10` to `Planner Sources, Content Workflow &
  Recurring Task Polish`. No app runtime, schema, Storage, telemetry, or UI
  behavior changed.
- **2026-05-11:** The old static Team reference tab was replaced by a Supabase-backed Prompt Library. The app now exposes Prompt Library in navigation with search, category filters, copy, create/edit modal, favorite, archive, and restore behavior over the new prompt_library table. Migration 012 was applied successfully by the user on 2026-05-11. The old static Team data file was retired from the renderer manifest. Prompt records are now live operational records; no prompt records were seeded or written during the App implementation session.

- **2026-05-11:** Planner Calendar Week/Month was refined to stay schedule-first after live Company-agent scheduling exposed calendar clutter. Generic `work_projects` now render as single milestone cards on `target_date`, or `start_date` only when no target exists, instead of filling every day between `start_date` and `target_date`. Top-level parent tasks with children no longer render from their own `scheduled_date`/`span_end_date`; they appear only on dates where `taskSubtasksForCalendarDate(parent, dateStr)` returns child work. When such a parent card appears, the scheduled child task title is the primary visible title and the parent/container title appears as context. Company-agent scheduling guidance: use Programs/work_projects for structure and deadlines, but schedule concrete subtasks for daily calendar work. This was a renderer/docs update only; no live Planner records, schema, migrations, Storage, telemetry, MQTT, CRM, Financials, Site Admin, Monitoring, or app data writes changed.
- **2026-05-11:** Planner content production scheduling was updated so scheduled content does not need duplicate generic tasks. The intended model is: `content_calendar` remains the blue content identity/due-date card, a linked content-domain `work_project` can hold execution context, and one teal parent production task with subtasks represents the actual production work. The Production tab can create/attach that task structure from the format template; legacy checklist state remains a fallback for unconverted entries. Today, Tasks, Week, and Month now group scheduled child tasks under their parent production task and show day-specific child work. Parent production tasks cannot be marked Done while open subtasks remain, and moving required production work later than the linked content date pushes the content scheduled date forward. Live records touched during the approved setup: `content_calendar.id = 13`, `work_projects.id = 62`, `tasks.id = 247`, and subtasks `tasks.id = 248-261`.

- **2026-05-11:** Planner Calendar week/month start-day behavior was aligned to Sunday. Week view now renders Sunday through Saturday, and Month view uses a Sunday-first header and Sunday-anchored grid. This was a local renderer display update only; no Planner records, schema, migrations, Storage, telemetry, MQTT, CRM, Financials, Site Admin, Monitoring, or live app actions changed, and Electron visual smoke verification was not run.

- **2026-05-09:** Planner Programs UI was visually tightened so Programs read as cross-domain operation containers, linked projects read as domain-owned lanes, and task previews remain subordinate action rows. Planner source species filtering now uses a compact search-driven selector instead of rendering the full species chip wall by default. This was a local renderer/CSS behavior update only; no Planner records, schema, migrations, Storage, telemetry, MQTT, CRM, Financials, Site Admin, Monitoring, or live app actions changed, and Electron visual smoke verification remains pending.

- **2026-05-09:** First Planner Programs/Operations records were created in live Supabase. `Operation Living Atlas` is active as `work_programs.id = 1`, led by Company, with linked Company, Content, Research, Web, and App support projects plus ordered tasks/subtasks for the Lake Post-Seal / pipeline 338 model packet. `Operation Living Web` is active as `work_programs.id = 2`, led by Web, with linked Web, Research, and App support projects plus ordered tasks/subtasks for sparse graph UX, Research curation, dry-review SQL workflow, approval gates, smoke checks, and future private editor planning. No tasks were marked done and no species, biome, observation, chronicle, website, app runtime, schema, Storage, telemetry, MQTT, CRM, Financials, Site Admin, or Monitoring records were changed by this record-organization pass.
- **2026-05-09:** Planner Programs/Operations layer was added locally as an additive schema proposal and UI path. Migration 010 adds `work_programs` plus `work_program_projects`; the Planner Programs view/modal can list, create, edit, archive, assign, and remove project links. The user applied the migration successfully. During that App implementation pass, no Operation records were created.
- **2026-05-09:** App project management was organized in App Planner/Supabase:
  7 App work projects and 16 linked App tasks now cover Planner runtime
  rollout, Planner Sources/content workflow polish, App Agent wiring, Field
  Observer beta, Site Admin/Media reliability, Monitoring operator surface, and
  Supabase/Storage/secret-key safety. Readback confirmed 0 unlinked open App
  tasks. The App Agent then verified and tightened local Planner wiring in
  `AGENTS.md`, `README.md`, memory, closeout skill, implementation skill, and
  smoke/refactor references without changing app behavior or live records.
- **2026-05-08:** Private Android Field Observer planning moved into the App repo. Added a Capacitor-ready scaffold under `mobile/field-observer/`, generated the Android native project, installed Capacitor dependencies, installed Android Studio 2025.3.4.7 plus Temurin JDK 21 and Android SDK packages, synced web assets, derived Android launcher icon PNGs from the desktop app logo, added Supabase Auth sign-in to the mobile shell, and added migration `migrations/008_species_sighting_history.sql` for `species_sighting_sessions`, `species_sightings`, and `save_species_sighting_session(...)`; the user applied the migration successfully in Supabase and the debug APK build now passes. Follow-up migration `migrations/009_field_observer_read_policies.sql` was also applied successfully so authenticated mobile users can read `biomes`, `species`, and `species_images`; a mobile status message now reports loaded row counts or policy blockage. The mobile sighting UI was simplified to in-system/not-in-system/not-listed language, with catalog filtering for website-listed, extirpated/removed, and all species records. The mobile JavaScript was split from one large file into focused ordered modules, and the mobile CSS was split into focused ordered imports with local asset-check and desktop-preview scripts. No live sighting records were written from the app.
- **2026-05-08:** Site Admin Media Library search now mirrors the Species tab search pattern with a full-width search area, realm and biome chips, and tagged-species lookup by common name, scientific name, or alternate names while preserving filename/description search and existing type/year/review filters.
- **2026-05-08:** Site Admin Media Library browsing now uses a preview-grid left pane backed by a persistent local thumbnail cache, compact date/size context, and reviewed/tagged/untouched chips while preserving the existing right-side selected-asset preview and tagging panel. Selecting a year loads all matching media for that year in batches, hides pagination for that year-scoped view, and uses a virtualized grid so only visible cards render while browsing.
- **2026-05-07:** Planner project-manager foundation migration 007 was run successfully in Supabase. The live schema now includes `work_domains`, `work_projects`, project-management fields on `tasks` (`domain_id`, `work_project_id`, `parent_task_id`, `work_status`, `task_type`, date-span support, blocked reason, completion timestamp, and sort order), plus optional `content_calendar.work_project_id` for linking content projects into the general project layer. Planner UI support is being added incrementally.
- **2026-05-07:** Initial Planner task UI wiring for migration 007 began. Planner now loads live `work_domains` and `work_projects`, task modals can save domain IDs, project assignment, workflow status, blocked reason, completion timestamp, and task span end dates, and calendar task rendering can include non-recurring multi-day spans.
- **2026-05-07:** Planner gained Today and Tasks task surfaces. Today shows scheduled/spanning tasks plus overdue, blocked, active unscheduled work, and planning prompts. Tasks groups ordinary tasks by `inbox`, `planned`, `active`, `blocked`, and `done`, with domain filtering and existing task edit/done actions.
- **2026-05-07:** The old top-level Weekly Checklist and Tasks tabs, shell pages, standalone render/state modules, and unused CSS bundles were removed after their replacement behavior moved into Planner. `checklist-definitions.js` remains loaded because Planner content production checklists still use `CHECKLIST_ITEMS`.
- **2026-05-07:** Planner gained an initial general Projects view over `work_projects`, grouped by `inbox`, `planned`, `active`, `blocked`, and `done`, with domain filtering. The work project modal can create, edit, archive, and move projects through the general workflow. Content project creation remains separate for now.
- **2026-05-07:** Work project modals now show linked tasks and linked content entries. Linked rows open the existing task/content editors, and New Task from a work project preselects the project/domain without writing until the task form is saved.
- **2026-05-07:** Planner content projects can now link to active general work projects through `content_calendar.work_project_id`. The content project modal exposes the assignment, board cards show the linked work project, week cards include compact project context, and month chips include project context in hover titles. Existing content workflow remains separate during transition.
- **2026-05-07:** Planner week/month calendar views now render general `work_projects` across their `start_date` to `target_date` span under the existing Projects toggle. Clicking a work project span opens the work project editor. This is display-only support and does not change records by itself.
- **2026-05-07:** Planner Today gained an initial Planning prompt area for weekly longform selection, active-observation review, and Sunday close. Prompt actions prefill the task modal as weekly recurring task candidates and do not write records until the task form is saved.
- **2026-05-07:** Planner gained task hierarchy UI for `tasks.parent_task_id`. The task modal can assign a parent task, Planner Tasks nests child tasks under their parent task card with subtask progress, and work project detail panels nest linked child tasks under parent tasks. Subtask actions only prefill the form and do not write records until saved.
- **2026-05-06:** App Supabase config migrated from legacy anon/service-role variables to the newer `SUPABASE_PUBLISHABLE_KEY` and `SUPABASE_SECRET_KEY` model. Renderer-safe config now prefers the publishable key and never exposes the secret key; Electron main-process services and local media indexing tools use the secret key. Legacy `SUPABASE_ANON_KEY` and `SUPABASE_SERVICE_ROLE_KEY` remain only as deprecated migration fallbacks until testing passes and legacy API keys are disabled in Supabase.
- **2026-05-06:** Restored App UI data loading after the key migration by making renderer REST helpers prefer a main-process `supabase-rest` IPC bridge. The renderer still exposes only publishable-key compatibility globals, while the Electron main process attaches `SUPABASE_SECRET_KEY` for internal REST calls.
- **2026-05-05:** Brain App Operations folder converted to the same repo-named memory/skills pattern as Financials and Content. Brain folder is now `11. miniBIOTA_App`; the stale App docs mirror was removed; active detailed sources are `M:\miniBIOTA\miniBIOTA_App\AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`. `_system/sync_docs.ps1` now keeps App docs mirroring disabled and removes any stale `11. miniBIOTA_App\docs` folder if it appears.
- **2026-05-04:** Team tab added as a static internal reference for App, Brain, Brand, Company, Content, Financials, Growth, Hardware, Research, and Web agents. Each agent has its own sub-tab with role, source docs, seeded tasks, prompts, required materials, filterable task category chips, and copy-prompt buttons; Content tasks are seeded from the current repo-local `SKILL.md` playbooks.
- **2026-05-04:** Planner Story Beats support added as a fourth source type (`beat`) alongside threads, loops, observations, and tasks. Planner now loads `story_beats`, beat relationship tables, and `content_calendar_story_beats`; Sources can filter/render beat cards and details; project Source Maps can select, hydrate, save, attach, and plan from beats. App-owned migration history added as `migrations/006_story_beats_schema.sql`; the live Supabase trigger/function still needs the corrected migration run manually.
- **2026-05-04:** App broad refactor completed and moved to maintenance mode. Renderer JavaScript and CSS are organized by feature folders, `index.html` is a small bootstrap frame, `js/app-bootstrap.js` loads `js/app-script-manifest.js`, obvious over-split helper files were merged back into owning modules, `npm run validate:renderer` passes, Electron boots, and the practical tab smoke passed for Planner, Site Admin, CRM, Weekly Checklist, Tasks, Financials, Roadmap, and Monitoring.
- **2026-05-04:** CRM contact list card and relationship badge styles were split from `css/crm-contacts.css` into `css/crm-contact-list.css`; `css/crm-contacts.css` now holds contact search and master-detail shell styles.
- **2026-05-04:** Site Admin shared table and no-data styles were split from `css/admin.css` into `css/admin-tables.css`; `css/admin.css` now holds shared navigation, status, and action button styles.
- **2026-05-04:** Shared task domain accent colors and status badge base styles were split from `css/shared-tags.css` into `css/shared-domain-colors.css` and `css/shared-status-badges.css`; `css/shared-tags.css` now holds tag variants only.
- **2026-05-04:** Planner modal action row and button styles were split from `css/planner-modal-forms.css` into `css/planner-modal-actions.css`; `css/planner-modal-forms.css` now holds modal forms and help text.
- **2026-05-04:** CRM stats row/card styles were split from `css/crm.css` into `css/crm-stats.css`; `css/crm.css` now holds shared CRM controls and view header styles.
- **2026-05-04:** Monitoring sensor grid/card styles were split from `css/monitoring.css` into `css/monitoring-sensors.css`; `css/monitoring.css` now holds banner, biome tabs, panel header, and health chips.
- **2026-05-04:** Planner stat row styles were split from `css/planner.css` into `css/planner-stats.css`; `css/planner.css` now holds Planner shell, view controls, and primary actions.
- **2026-05-04:** Site Admin Media Library pagination styles were split from `css/admin-media-list.css` into `css/admin-media-pagination.css`; `css/admin-media-list.css` now holds media list row styles.
- **2026-05-04:** Tasks domain grouping styles were split from `css/tasks.css` into `css/tasks-domain-groups.css`; `css/tasks.css` now holds task header controls.
- **2026-05-04:** Site Admin Media Library selected-asset save controls were split from `css/admin-media-edit.css` into `css/admin-media-save-controls.css`; `css/admin-media-edit.css` now holds edit field styles.
- **2026-05-04:** Planner compact loop/thread filter button styles were split from `css/planner-panels.css` into `css/planner-panel-filters.css`; `css/planner-panels.css` now holds compact loop panel/card styles, and `css/planner-thread-panels.css` keeps thread cards/status variants.
- **2026-05-04:** Unused legacy `.pipeline-*` CRM card styles were removed from `css/crm-pipeline.css`; current CRM pipeline rendering uses the `.crm-pipeline-*` board/card selectors.
- **2026-05-04:** Weekly Checklist item row/checkmark/text styles were split from `css/checklist.css` into `css/checklist-items.css`; `css/checklist.css` now holds header, section, title input, and fallback controls.
- **2026-05-04:** Tasks item row/checkbox/label styles were split from `css/tasks.css` into `css/tasks-items.css`; after a later pass, domain grouping styles live in `css/tasks-domain-groups.css`, item styles live in `css/tasks-items.css`, and `css/tasks.css` holds task header controls.
- **2026-05-04:** Planner source task schedule controls were split from `css/planner-source-cards.css` into `css/planner-source-schedule.css`; `css/planner-source-cards.css` now holds source card styling.
- **2026-05-04:** Planner card status badge and tag variant styles were split from `css/planner-cards.css` into `css/planner-card-badges.css`; `css/planner-cards.css` now holds board project card and action styles.
- **2026-05-04:** Shared filter tab button styles were split from `css/shared-ui.css` into `css/shared-filter-tabs.css`; `css/shared-ui.css` now holds filter row, label, and count badge styles.
- **2026-05-04:** Planner source attach-to-project control styles were split from `css/planner-source-modals.css` into `css/planner-source-attach.css`; `css/planner-source-modals.css` now holds source detail modal styles.
- **2026-05-04:** Roadmap category and initiative status badge styles were split from `css/roadmap-initiatives.css` into `css/roadmap-badges.css`; `css/roadmap-initiatives.css` now holds initiative card styles.
- **2026-05-04:** Planner source relationship link control styles were split from `css/planner-source-summary.css` into `css/planner-source-link-controls.css`; `css/planner-source-summary.css` now holds selected-source summary card styles.
- **2026-05-04:** Site Admin Media Library list row and pagination styles were split from `css/admin-media.css` into `css/admin-media-list.css`; after a later pass, pagination styles live in `css/admin-media-pagination.css`, list row styles remain in `css/admin-media-list.css`, and `css/admin-media.css` holds the media browser layout.
- **2026-05-04:** Roadmap capacity bar styles were split from `css/roadmap-timeline.css` into `css/roadmap-capacity.css`; `css/roadmap-timeline.css` now holds only timeline styles.
- **2026-05-04:** CRM status variant styles were split from `css/crm-summary.css` into `css/crm-status.css`; `css/crm-summary.css` now holds CRM summary and sales styles.
- **2026-05-04:** CRM sales goal progress styles were split from `css/crm-pipeline.css` into `css/crm-sales-goal.css`; `css/crm-pipeline.css` now holds pipeline card and board styles.
- **2026-05-04:** Site Admin Media Library selected-asset view tab styles were split from `css/admin-media-panel.css` into `css/admin-media-view.css`; `css/admin-media-panel.css` now holds the selected-asset panel shell, tabs, and reviewed controls.
- **2026-05-04:** Site Admin Media Library species/biome/system/chronicle linking control styles were split from `css/admin-media-edit.css` into `css/admin-media-linking.css`; after a later pass, selected-asset save controls live in `css/admin-media-save-controls.css`, and `css/admin-media-edit.css` holds edit field styles.
- **2026-05-04:** Planner thread picker styles were split from `css/planner-pickers.css` into `css/planner-thread-picker.css`; after an earlier pass, observation picker styles live in `css/planner-observation-picker.css`, and `css/planner-pickers.css` now holds loop picker styles.
- **2026-05-04:** Site Admin form action row and submit/cancel button styles were split from `css/admin-forms.css` into `css/admin-form-actions.css`; `css/admin-forms.css` now holds shared form controls and section headers.
- **2026-05-04:** Site Admin detail disclosure, checkbox, and small tag styles were split from `css/admin-forms.css` into `css/admin-details.css`; after a later pass, form action buttons live in `css/admin-form-actions.css`, and `css/admin-forms.css` holds shared form controls and section headers.
- **2026-05-04:** CRM contact detail panel and related opportunity card styles were split from `css/crm-contacts.css` into `css/crm-contact-detail.css`; after a later pass, contact list cards and badges live in `css/crm-contact-list.css`, and `css/crm-contacts.css` holds contact search and master-detail shell styles.
- **2026-05-04:** Planner week project/task card styles were split from `css/planner-week.css` into `css/planner-week-cards.css`; `css/planner-week.css` now holds week navigation and day-column layout styles.
- **2026-05-04:** Planner board card source-role chip styles were split from `css/planner-cards.css` into `css/planner-card-sources.css`; after a later pass, status badge/tag variant styles live in `css/planner-card-badges.css`, source-role chips live in `css/planner-card-sources.css`, and `css/planner-cards.css` holds core board card and action styles.
- **2026-05-04:** Planner compact thread card and thread status filter styles were split from `css/planner-panels.css` into `css/planner-thread-panels.css`; after a later pass, shared loop/thread filter button styles live in `css/planner-panel-filters.css`, `css/planner-thread-panels.css` keeps thread cards/status variants, and `css/planner-panels.css` holds compact loop panel/card styles.
- **2026-05-04:** Planner modal form/help/action button styles were split from `css/planner-modals.css` into `css/planner-modal-forms.css`; after a later pass, action rows/buttons live in `css/planner-modal-actions.css`, form/help styles remain in `css/planner-modal-forms.css`, and `css/planner-modals.css` holds modal chrome, tabs, and headers.
- **2026-05-04:** Roadmap initiative step control styles were split from `css/roadmap-initiatives.css` into `css/roadmap-steps.css`; after a later pass, category/status badges live in `css/roadmap-badges.css`, step controls live in `css/roadmap-steps.css`, and `css/roadmap-initiatives.css` holds initiative card styles.
- **2026-05-04:** Site Admin image management grid styles were split from `css/admin-forms.css` into `css/admin-images.css`; after later passes, detail disclosure/checkbox/small tag styles live in `css/admin-details.css`, image grid styles live in `css/admin-images.css`, form action buttons live in `css/admin-form-actions.css`, and `css/admin-forms.css` holds shared form controls and section headers.
- **2026-05-04:** Legacy Story Dashboard linked observation/intersection detail styles were split from `css/story-dashboard-cards.css` into `css/story-dashboard-card-details.css`; card shell/note styles remain in `css/story-dashboard-cards.css`, and `css/story-dashboard.css` holds shell, stats, section, and control styles.
- **2026-05-03:** Planner source card and task schedule control styles were split from `css/planner-sources.css` into `css/planner-source-cards.css`; after a later pass, task schedule controls live in `css/planner-source-schedule.css`, source card styling lives in `css/planner-source-cards.css`, and `css/planner-sources.css` holds source workspace layout styles.
- **2026-05-03:** Site Admin Media Library selected-asset preview and file-info styles were split from `css/admin-media-panel.css` into `css/admin-media-preview.css`; after a later pass, view-tab styles live in `css/admin-media-view.css`, and `css/admin-media-panel.css` holds panel shell, tabs, and reviewed button styles.
- **2026-05-03:** Site Admin Media Library free-form tag chip and input styles were split from `css/admin-media-edit.css` into `css/admin-media-tags.css`; after later passes, linking/checklist controls live in `css/admin-media-linking.css`, free-form tag chip/input styles live in `css/admin-media-tags.css`, selected-asset save controls live in `css/admin-media-save-controls.css`, and `css/admin-media-edit.css` holds edit field styles.
- **2026-05-03:** Shared tag, status badge, and domain accent styles were split from `css/shared-ui.css` into `css/shared-tags.css`; after later passes, tag variants live in `css/shared-tags.css`, domain accent colors live in `css/shared-domain-colors.css`, status badge base styles live in `css/shared-status-badges.css`, filter tab buttons live in `css/shared-filter-tabs.css`, and `css/shared-ui.css` holds shared filter rows, labels, and count badges.
- **2026-05-03:** Planner source summary and link-control styles were split from `css/planner-source-modals.css` into `css/planner-source-summary.css`; after later passes, source relationship link controls live in `css/planner-source-link-controls.css`, selected-source summary card styles live in `css/planner-source-summary.css`, attach-to-project controls live in `css/planner-source-attach.css`, and `css/planner-source-modals.css` holds source detail modal styles.
- **2026-05-03:** Site Admin Media Library filter/search/type/year/review control styles were split from `css/admin-media.css` into `css/admin-media-filters.css`; after later passes, list rows live in `css/admin-media-list.css`, pagination styles live in `css/admin-media-pagination.css`, and `css/admin-media.css` holds browser layout styles.
- **2026-05-03:** Planner modal production checklist styles were split from `css/planner-modals.css` into `css/planner-modal-checklist.css`; after later passes, modal form/help styles live in `css/planner-modal-forms.css`, modal action rows/buttons live in `css/planner-modal-actions.css`, and `css/planner-modals.css` holds project/task modal chrome, tabs, and header styles.
- **2026-05-03:** Planner loop/thread/observation picker styles were split from `css/planner-modals.css` into `css/planner-pickers.css`; after later passes, generic modal chrome/header styles remain in `css/planner-modals.css`, form/help styles live in `css/planner-modal-forms.css`, action rows/buttons live in `css/planner-modal-actions.css`, production checklist styles live in `css/planner-modal-checklist.css`, observation picker styles live in `css/planner-observation-picker.css`, thread picker styles live in `css/planner-thread-picker.css`, and loop picker styles live in `css/planner-pickers.css`.

- **2026-05-03:** Planner board project-card, board status badge, and card tag styles were split from `css/planner-board.css` into `css/planner-cards.css`; after later passes, board card source-role chips live in `css/planner-card-sources.css`, status badge/tag variants live in `css/planner-card-badges.css`, core board card/action styles remain in `css/planner-cards.css`, and `css/planner-board.css` holds board column layout styles.
- **2026-05-03:** Planner board column, project-card, board status, and card tag styles were split from `css/planner.css` into `css/planner-board.css`; after later passes, board card/action styles live in `css/planner-cards.css`, status badge/tag variants live in `css/planner-card-badges.css`, column layout styles remain in `css/planner-board.css`, Planner stat rows live in `css/planner-stats.css`, and Planner shell/view controls remain in `css/planner.css`.

- **2026-05-03:** CRM contact list/detail and related opportunity card styles were split from `css/crm.css` into `css/crm-contacts.css`, and activity row/overdue styles were split into `css/crm-activities.css`; after later passes, CRM contact detail/related opportunity styles live in `css/crm-contact-detail.css`, contact search/master-detail shell styles remain in `css/crm-contacts.css`, contact list card/badge styles live in `css/crm-contact-list.css`, stats row/cards live in `css/crm-stats.css`, and `css/crm.css` holds shared CRM controls and view header styles.
- **2026-05-03:** CRM summary, legacy sales, goal bar, and contact status variant styles were split from `css/crm.css` into `css/crm-summary.css`; after later passes, status variant styles live in `css/crm-status.css`, CRM stats row/cards live in `css/crm-stats.css`, CRM contact search/master-detail shell styles live in `css/crm-contacts.css`, contact list card/badge styles live in `css/crm-contact-list.css`, contact detail/related opportunity styles live in `css/crm-contact-detail.css`, pipeline board styles live in `css/crm-pipeline.css`, sales goal progress styles live in `css/crm-sales-goal.css`, activity/overdue styles live in `css/crm-activities.css`, modal styles live in `css/crm-modals.css`, and `css/crm.css` remains the shared CRM control/header stylesheet.

- **2026-05-03:** Planner compact loop/thread panel styles were split from `css/planner.css` into `css/planner-panels.css`; after later passes, compact thread card/status filter styles live in `css/planner-thread-panels.css`, compact loop panel/card styles remain in `css/planner-panels.css`, Planner stat rows live in `css/planner-stats.css`, Planner shell and view controls remain in `css/planner.css`, board column styles live in `css/planner-board.css`, board card/action styles live in `css/planner-cards.css`, and status badge/tag variants live in `css/planner-card-badges.css`.

- **2026-05-03:** Planner source summary/detail/attach modal styles were split from `css/planner-modals.css` into `css/planner-source-modals.css`; after later passes, source relationship link controls live in `css/planner-source-link-controls.css`, source summary card styles live in `css/planner-source-summary.css`, attach-to-project controls live in `css/planner-source-attach.css`, source detail modal styles remain in `css/planner-source-modals.css`, generic Planner modal chrome/header styles remain in `css/planner-modals.css`, modal form/help styles live in `css/planner-modal-forms.css`, modal action rows/buttons live in `css/planner-modal-actions.css`, production checklist styles live in `css/planner-modal-checklist.css`, observation picker styles live in `css/planner-observation-picker.css`, thread picker styles live in `css/planner-thread-picker.css`, and loop picker styles live in `css/planner-pickers.css`.

- **2026-05-03:** Site Admin Media Library selected-asset edit tab styles were split from `css/admin-media-panel.css` into `css/admin-media-edit.css`; after later passes, linking/checklist controls live in `css/admin-media-linking.css`, free-form tag chips/inputs live in `css/admin-media-tags.css`, save controls live in `css/admin-media-save-controls.css`, edit field styles remain in `css/admin-media-edit.css`, and `index.html`, `AGENTS.md`, and app docs include those stylesheets after the panel stylesheet.
- **2026-05-03:** Site Admin species search/filter chip styles were split from `css/admin.css` into `css/admin-species.css`; `index.html`, `AGENTS.md`, and app docs now include the species stylesheet after the shared admin stylesheet.
- **2026-05-03:** Site Admin shared form, detail, tag, and image management styles were split from `css/admin.css` into `css/admin-forms.css`; after later passes, detail disclosure/checkbox/small tag styles live in `css/admin-details.css`, image management grid styles live in `css/admin-images.css`, form action buttons live in `css/admin-form-actions.css`, shared table/no-data styles live in `css/admin-tables.css`, shared form control/section header styles remain in `css/admin-forms.css`, and `css/admin.css` holds shared navigation, status, and action button styles.
- **2026-05-03:** Roadmap CSS was split from `css/roadmap.css` into `css/roadmap-timeline.css` for capacity/timeline styles and `css/roadmap-initiatives.css` for initiative cards, badges, and steps; after later passes, capacity bar styles live in `css/roadmap-capacity.css`, timeline styles remain in `css/roadmap-timeline.css`, category/status badges live in `css/roadmap-badges.css`, step controls live in `css/roadmap-steps.css`, initiative card styles remain in `css/roadmap-initiatives.css`, and `css/roadmap.css` holds shell and stats styles.
- **2026-05-03:** Remaining Site Admin Media Library selected-asset panel/tab/view styles were moved from `css/admin-media.css` into `css/admin-media-panel.css`; after later passes, preview/file-info styles live in `css/admin-media-preview.css`, view-tab styles live in `css/admin-media-view.css`, edit field styles live in `css/admin-media-edit.css`, save controls live in `css/admin-media-save-controls.css`, linking/checklist controls live in `css/admin-media-linking.css`, free-form tag controls live in `css/admin-media-tags.css`, filter/search controls live in `css/admin-media-filters.css`, list rows live in `css/admin-media-list.css`, pagination styles live in `css/admin-media-pagination.css`, and `css/admin-media.css` now focuses on the media browser shell.
- **2026-05-03:** Site Admin Media Library selected-asset edit panel styles were split from `css/admin-media.css` into `css/admin-media-panel.css`; after later passes, selected-asset preview/file-info styles live in `css/admin-media-preview.css`, view-tab styles live in `css/admin-media-view.css`, panel header/tabs/reviewed controls live in `css/admin-media-panel.css`, edit field styles live in `css/admin-media-edit.css`, save controls live in `css/admin-media-save-controls.css`, linking/checklist controls live in `css/admin-media-linking.css`, free-form tag controls live in `css/admin-media-tags.css`, filter/search controls live in `css/admin-media-filters.css`, list rows live in `css/admin-media-list.css`, pagination styles live in `css/admin-media-pagination.css`, and browser layout remains in `css/admin-media.css`.

- **2026-05-03:** CRM pipeline board and sales goal styles were split from `css/crm.css` into `css/crm-pipeline.css`; after later passes, unused legacy `.pipeline-*` styles were removed, sales goal progress styles live in `css/crm-sales-goal.css`, shared CRM shell controls remain in `css/crm.css`, contact search/master-detail shell styles live in `css/crm-contacts.css`, contact list card/badge styles live in `css/crm-contact-list.css`, contact detail/related opportunity styles live in `css/crm-contact-detail.css`, and activity/overdue styles live in `css/crm-activities.css`.

- **2026-05-03:** CRM contact/opportunity/activity modal styles were split from `css/crm.css` into `css/crm-modals.css`; after later passes, CRM contact search/master-detail shell styles live in `css/crm-contacts.css`, contact list card/badge styles live in `css/crm-contact-list.css`, contact detail/related opportunity styles live in `css/crm-contact-detail.css`, pipeline board styles live in `css/crm-pipeline.css`, sales goal progress styles live in `css/crm-sales-goal.css`, activity/overdue styles live in `css/crm-activities.css`, and shared CRM shell controls remain in `css/crm.css`.

- **2026-05-03:** Planner source workspace and source-card styles were split from `css/planner.css` into `css/planner-sources.css`; after later passes, source card styles live in `css/planner-source-cards.css`, task schedule controls live in `css/planner-source-schedule.css`, source workspace layout remains in `css/planner-sources.css`, and board/project card styles remain in `css/planner.css`.

- **2026-05-03:** Site Admin Media Library styles were split from `css/admin.css` into `css/admin-media.css`; after later passes, species search/filter styles live in `css/admin-species.css`, shared form controls and section headers live in `css/admin-forms.css`, form action buttons live in `css/admin-form-actions.css`, detail disclosure/checkbox/small tag styles live in `css/admin-details.css`, image management grid styles live in `css/admin-images.css`, shared table/no-data styles live in `css/admin-tables.css`, and shared Site Admin navigation, status, and action buttons remain in `css/admin.css`.

- **2026-05-03:** Planner week and month view styles were split from `css/planner-calendar.css` into `css/planner-week.css` and `css/planner-month.css`; after later passes, week project/task cards live in `css/planner-week-cards.css`, month day chip/add-action styles live in `css/planner-month-items.css`, month grid/cell layout styles remain in `css/planner-month.css`, week navigation/day-column layout styles remain in `css/planner-week.css`, and `css/planner-calendar.css` holds shared calendar view-control styles.
- **2026-05-03:** Planner week/month calendar view styles were split from `css/planner.css` into `css/planner-calendar.css`; after later passes, week navigation/day-column layout styles live in `css/planner-week.css`, week card styles live in `css/planner-week-cards.css`, month grid/cell layout styles live in `css/planner-month.css`, month day chip/add-action styles live in `css/planner-month-items.css`, board column styles live in `css/planner-board.css`, board card/action styles live in `css/planner-cards.css`, status badge/tag variants live in `css/planner-card-badges.css`, source workspace layout styles live in `css/planner-sources.css`, source card styles live in `css/planner-source-cards.css`, task schedule controls live in `css/planner-source-schedule.css`, and shell/view-control styles remain in `css/planner.css`.

- **2026-05-03:** Planner project/task/source modal and picker styles were split from `css/planner.css` into `css/planner-modals.css`; Planner board column styles now live in `css/planner-board.css`, board card/action styles live in `css/planner-cards.css`, status badge/tag variants live in `css/planner-card-badges.css`, source workspace layout styles live in `css/planner-sources.css`, source card styles live in `css/planner-source-cards.css`, task schedule controls live in `css/planner-source-schedule.css`, and shell/view-control styles remain in `css/planner.css`.

- **2026-05-03:** Shared filter tab, badge, tag, and domain accent styles were split from `css/dashboard.css` into `css/shared-ui.css`; after later passes, tag variants live in `css/shared-tags.css`, domain accent colors live in `css/shared-domain-colors.css`, status badge base styles live in `css/shared-status-badges.css`, filter tab buttons live in `css/shared-filter-tabs.css`, shared filter rows/labels/count badges remain in `css/shared-ui.css`, and `css/dashboard.css` holds base app shell, loading, visibility, top-bar, refresh, and page-tab styles.
- **2026-05-03:** Legacy Story Dashboard-only styles were split from `css/dashboard.css` into `css/story-dashboard.css`; after later passes, Story Dashboard card shell/note styles live in `css/story-dashboard-cards.css`, linked observation/intersection detail styles live in `css/story-dashboard-card-details.css`, Story Dashboard shell/stats/section/control styles remain in `css/story-dashboard.css`, shared filter rows/labels/count badges live in `css/shared-ui.css`, filter tab buttons live in `css/shared-filter-tabs.css`, tag variants live in `css/shared-tags.css`, domain accent colors live in `css/shared-domain-colors.css`, status badge base styles live in `css/shared-status-badges.css`, and loading/page navigation remain in `css/dashboard.css`.

- **2026-05-03:** Weekly Checklist calendar view styles were split from `css/checklist.css` into `css/checklist-calendar.css`; after a later pass, item row/checkmark/text styles live in `css/checklist-items.css`, calendar view styles live in `css/checklist-calendar.css`, and `css/checklist.css` holds checklist header/section/title/fallback controls.
- **2026-05-03:** Weekly Checklist styles were split from `css/dashboard.css` into `css/checklist.css`; after later passes, checklist item row/checkmark/text styles live in `css/checklist-items.css`, checklist calendar view styles live in `css/checklist-calendar.css`, and checklist stylesheets load before Planner styles to preserve the existing shared `cal-*` cascade.

- **2026-05-03:** Planner/Content Calendar styles were split from `css/dashboard.css` into `css/planner.css`; Weekly Checklist calendar styles now live in `css/checklist-calendar.css`.

- **2026-05-03:** Site Admin and Media Library styles were split from `css/dashboard.css` into `css/admin.css`.

- **2026-05-03:** Tasks tab styles and Financials tab styles were split from `css/dashboard.css` into `css/tasks.css` and `css/financials.css`; after later passes, task domain grouping styles live in `css/tasks-domain-groups.css`, task item row/checkmark/text styles live in `css/tasks-items.css`, and shared task domain accent colors live in `css/shared-domain-colors.css` for Planner compatibility.

- **2026-05-03:** CRM and legacy Sales tab styles were split from `css/dashboard.css` into `css/crm.css`; after later passes, shared status badge base styling lives in `css/shared-status-badges.css` for Roadmap compatibility.

- **2026-05-03:** Roadmap tab styles were split from `css/dashboard.css` into `css/roadmap.css`; `index.html` now loads the shared dashboard/shared-ui stylesheets plus the Roadmap stylesheet.

- **2026-05-03:** Monitoring tab styles were split from `css/dashboard.css` into `css/monitoring.css`; after a later pass, sensor grid/card styles live in `css/monitoring-sensors.css`, and `css/monitoring.css` holds banner, biome tab, panel header, and health chip styles.

- **2026-05-03:** Planner attach-to-existing-project rendering helpers were split from `js/calendar-source-attach.js` into `js/calendar-source-attach-render.js`; `js/calendar-source-attach.js` now focuses on source-link specs and attach mutations.

- **2026-05-03:** Legacy Story Dashboard filter tab rendering helpers were split from `js/story-dashboard-filters.js` into `js/story-dashboard-filter-render.js`; `js/story-dashboard-filters.js` now focuses on filter state handlers.

- **2026-05-03:** Planner source filter rendering helpers were split from `js/calendar-source-filter-controls.js` into `js/calendar-source-filter-render.js`; `js/calendar-source-filter-controls.js` now focuses on filter orchestration and state handlers.

- **2026-05-03:** Site Admin biome table rendering and biome form/mutation helpers were split from `js/admin-biomes.js` into `js/admin-biome-list.js` and `js/admin-biome-form.js`; `js/admin-biomes.js` now only orchestrates biome loading and downstream refreshes.

- **2026-05-03:** Site Admin species edit-form helpers were split from `js/admin-species-form.js` into `js/admin-species-edit.js`; `js/admin-species-form.js` now focuses on species create/update/delete behavior.

- **2026-05-03:** Legacy Story Dashboard section renderers were split from `js/story-dashboard-render.js` into focused stats, loop, thread, and observation renderer modules; `js/story-dashboard-render.js` now only orchestrates the legacy dashboard render cycle.

- **2026-05-03:** CRM selected-contact activity filter and row helpers were split from `js/crm-contact-detail.js` into `js/crm-contact-activities.js`; `js/crm-contact-detail.js` now focuses on selected-contact detail rendering.

- **2026-05-03:** Planner plan-from-source helper was split from `js/calendar-source-summary.js` into `js/calendar-source-plan.js`; `js/calendar-source-summary.js` now focuses on selected-source summary rendering.

- **2026-05-03:** Planner board project card rendering helpers were split from `js/calendar-board.js` into `js/calendar-board-cards.js`; `js/calendar-board.js` now focuses on board stats, columns, and quick status updates.

- **2026-05-03:** Site Admin species biome checkbox helpers were split from `js/admin-species-form.js` into `js/admin-species-biomes.js`; species form mutation behavior remains in `js/admin-species-form.js`.

- **2026-05-03:** Site Admin species observation helper `admMarkObservedToday()` was split from `js/admin-species-form.js` into `js/admin-species-observations.js`; at that checkpoint, `js/admin-species-form.js` focused on species form and mutation behavior.

- **2026-05-03:** Site Admin chronicle form and persistence helpers were split from `js/admin-chronicles.js` into `js/admin-chronicle-form.js`; `js/admin-chronicles.js` now focuses on chronicle selects, loading, and table rendering.

- **2026-05-03:** Roadmap renderers were split from `js/roadmap-render.js` into focused stats, capacity, timeline, and initiative-card modules; `js/roadmap.js` still loads read models and calls the same render functions.

- **2026-05-03:** Financial dashboard renderers were split from `js/financials-render.js` into focused stats, revenue, burn-rate, liabilities, and planned-purchases modules; `js/financials.js` still loads the read models and calls the same render functions.

- **2026-05-03:** Planner production checklist map and modal helpers were split from `js/calendar-panels.js` into `js/calendar-checklist.js`; `js/calendar-panels.js` now focuses on loop and thread side panels.

- **2026-05-03:** Planner task modal save and delete handlers were split from `js/calendar-task-modal.js` into `js/calendar-task-modal-save.js`; `js/calendar-task-modal.js` now focuses on task modal open/edit and recurrence field helpers.

- **2026-05-03:** Planner project modal save and delete handlers were split from `js/calendar-modal.js` into `js/calendar-modal-save.js`; `js/calendar-modal.js` now focuses on fields, open/edit, visibility, and tab helpers.

- **2026-05-03:** Planner week calendar rendering and navigation helpers were split from `js/calendar-views.js` into `js/calendar-week-view.js`; `js/calendar-views.js` now focuses on month calendar rendering and navigation.

- **2026-05-03:** Planner source filter control rendering and handlers were split from `js/calendar-filters.js` into `js/calendar-source-filter-controls.js`; `js/calendar-filters.js` now focuses on Planner page switching and calendar type toggles.

- **2026-05-03:** Planner source inbox filter predicate was split from `js/calendar-source-workspace.js` into `js/calendar-source-filtering.js`; `js/calendar-source-workspace.js` now focuses on inbox and workspace section rendering.

- **2026-05-03:** Planner source inbox card rendering and thread status helpers were split from `js/calendar-source-workspace.js` into `js/calendar-source-cards.js`; at that checkpoint, `js/calendar-source-workspace.js` focused on inbox filtering and workspace sections.

- **2026-05-03:** Planner source detail section/card helpers were split from `js/calendar-source-detail.js` into `js/calendar-source-detail-sections.js`; source detail modal orchestration remains in `js/calendar-source-detail.js`.

- **2026-05-03:** Planner source attach-to-existing-project helpers were split from `js/calendar-source-detail.js` into `js/calendar-source-attach.js`; source detail modal rendering remains in `js/calendar-source-detail.js`.

- **2026-05-03:** CRM selected-contact detail rendering was split from `js/crm-contacts.js` into `js/crm-contact-detail.js`; `js/crm-contacts.js` now focuses on contact type filters and list rendering.

- **2026-05-03:** Site Admin Media Library view-tab renderer was split from `js/admin-media-panel-tabs.js` into `js/admin-media-view-tab.js`; `js/admin-media-panel-tabs.js` now only handles panel tab switching.

- **2026-05-03:** CRM activity modal/write helpers were split from `js/crm-modals.js` into `js/crm-activity-modal.js`; the startup CRM badge preload now lives with `js/crm-activities.js`, and the generic `js/crm-modals.js` wrapper was retired.

- **2026-05-03:** CRM opportunity modal/write helpers were split from `js/crm-modals.js` into `js/crm-opportunity-modal.js`.

- **2026-05-03:** CRM contact modal/write helpers were split from `js/crm-modals.js` into `js/crm-contact-modal.js`.

- **2026-05-03:** Site Admin Media Library edit-tab renderer was split from `js/admin-media-panel-tabs.js` into `js/admin-media-edit-tab.js`; at that checkpoint, `js/admin-media-panel-tabs.js` held the view tab and tab switching behavior.

- **2026-05-03:** Site Admin Media Library reviewed-state helper was split from `js/admin-media-panel.js` into `js/admin-media-review.js`; the panel shell now delegates reviewed toggles to that module.

- **2026-05-03:** Site Admin Media Library panel view/edit tab renderers were split from `js/admin-media-panel.js` into `js/admin-media-panel-tabs.js`; asset selection and panel shell rendering remain in `js/admin-media-panel.js`.

- **2026-05-03:** Planner project-modal observation picker controls were split from `js/calendar-source-pickers.js` into `js/calendar-observation-picker.js`; loop and thread picker controls remain in `js/calendar-source-pickers.js`.

- **2026-05-03:** Planner selected-source summary and plan-from-source helpers were split from `js/calendar-source-pickers.js` into `js/calendar-source-summary.js`; `js/calendar-source-pickers.js` focused on picker controls at that checkpoint.

- **2026-05-02:** Roadmap step grouping moved into `js/roadmap-steps.js`, keeping step collection shaping next to the existing Roadmap step helpers.

- **2026-05-02:** Roadmap stats, capacity, timeline, and initiative card renderers were split from `js/roadmap.js` into `js/roadmap-render.js`; `js/roadmap.js` focused on loading initiatives and steps at that checkpoint.

- **2026-05-02:** Roadmap initiative-step mutation helpers were split from `js/roadmap.js` into `js/roadmap-steps.js`; Roadmap read/render behavior remains separate from step write helpers.

- **2026-05-02:** Roadmap capacity and category display configuration were split from `js/roadmap.js` into `js/roadmap-config.js`, keeping category colors and weekly capacity outside the Roadmap runtime module.

- **2026-05-02:** Financial dashboard stats, tables, and card renderers were split from `js/financials.js` into `js/financials-render.js`; `js/financials.js` focused on loading the Financials read models at that checkpoint.

- **2026-05-02:** Tasks tab domain/group list rendering was split from `js/tasks.js` into `js/tasks-render.js`; `js/tasks.js` now holds task state, loading, and status toggles.

- **2026-05-02:** Shared task domain display metadata was split from `js/tasks.js` into `js/tasks-domains.js`; this was later superseded when Planner stopped depending on the retired Tasks renderer globals.

- **2026-05-02:** Weekly Checklist list and week calendar render helpers were split from `js/checklist.js` into `js/checklist-render.js`; `js/checklist.js` now holds checklist state and persistence helpers.

- **2026-05-02:** Weekly Checklist item definitions and calendar day templates were split from `js/checklist.js` into `js/checklist-definitions.js`, keeping static checklist content separate from state and rendering behavior.

- **2026-05-02:** Legacy Story Dashboard section renderers and thread status helper were split from `js/story-dashboard.js` into `js/story-dashboard-render.js`; `js/story-dashboard.js` holds dashboard state and source loading only.

- **2026-05-02:** Legacy Story Dashboard filter tab helpers were split from `js/story-dashboard.js` into `js/story-dashboard-filters.js`; dashboard filters now live outside the Story Dashboard load shell.

- **2026-05-02:** Planner task source-card rendering helpers were split from `js/calendar-tasks.js` into `js/calendar-task-cards.js`; `js/calendar-tasks.js` now focuses on task scheduling mutations and completion helpers.

- **2026-05-02:** Planner task modal open/edit/submit/delete helpers were split from `js/calendar-tasks.js` into `js/calendar-task-modal.js`; task modal behavior now lives outside the task mutation shell.

- **2026-05-02:** Planner calendar-entry source link persistence helpers were split from `js/calendar-modal.js` into `js/calendar-entry-links.js`; at that checkpoint, `js/calendar-modal.js` focused on modal fields, tabs, save, and delete behavior.

- **2026-05-02:** Planner project modal source picker UI, selected-source summary, and Plan-from-source helper were split from `js/calendar-modal.js` into `js/calendar-source-pickers.js`; source picker behavior now lives outside the calendar-entry modal shell.

- **2026-05-02:** Planner task domain labels and recurrence/date helpers were split from `js/calendar-tasks.js` into `js/calendar-task-utils.js`; `js/calendar-tasks.js` now focuses on task cards, modal behavior, scheduling mutations, and completion helpers.

- **2026-05-02:** Planner source inbox filtering, workspace sections, source cards, and thread status helper were split from `js/calendar-sources.js` into `js/calendar-source-workspace.js`; `js/calendar-sources.js` now focuses on source metadata, relationship labels, and project link helpers.

- **2026-05-02:** Planner source detail modal, related-source cards, and attach-to-existing-project helpers were split from `js/calendar-sources.js` into `js/calendar-source-detail.js`; source detail behavior now lives outside the source metadata shell.

- **2026-05-02:** Admin biome list, form, save, and delete helpers were split from `js/admin-ecosystem.js` into `js/admin-biomes.js`; `js/admin-ecosystem.js` now focuses on biosphere profile load/save behavior.

- **2026-05-02:** Admin announcement helpers were split from `js/admin-chronicles.js` into `js/admin-announcements.js`, and chronicle staging review helpers were split into `js/admin-chronicle-staging.js`; at that checkpoint, `js/admin-chronicles.js` focused on chronicle selects, list, form, and persistence.

- **2026-05-02:** Admin species form, create/update/delete, Observed Today, and biome checkbox helpers were split from `js/admin-species.js` into `js/admin-species-form.js`; `js/admin-species.js` focused on species loading, filters, chips, and table rendering at that checkpoint.

- **2026-05-02:** Admin species image panel, upload/link, primary image, and image delete helpers were split from `js/admin-species.js` into `js/admin-species-images.js`; species image management now lives outside the species list shell.

- **2026-05-02:** Admin Media Library tag editing, tag chip rendering, link persistence, save, and clear helpers were split from `js/admin-media.js` into `js/admin-media-tags.js`; `js/admin-media.js` now holds Media Library state, shared utilities, and re-indexing behavior.

- **2026-05-02:** Admin Media Library asset selection and view/edit panel rendering were split from `js/admin-media.js` into `js/admin-media-panel.js`; asset panel rendering now lives outside the Media Library shell.

- **2026-05-02:** Admin Media Library loading, filters, list rendering, and pagination were split from `js/admin-media.js` into `js/admin-media-list.js`; list browsing now lives outside the Media Library shell.

- **2026-05-02:** CRM contact, opportunity, and activity modal/write helpers were split from `js/crm.js` into `js/crm-modals.js`; `js/crm.js` now holds shared CRM state, loading, view switching, and stats only.

- **2026-05-02:** CRM activity filters, activity list, overdue badge, and overdue banner were split from `js/crm.js` into `js/crm-activities.js`; activity list/badge rendering now lives outside the CRM shell.

- **2026-05-02:** CRM pipeline board and sales goal rendering were split from `js/crm.js` into `js/crm-pipeline.js`; pipeline rendering now lives outside the CRM shell.

- **2026-05-02:** CRM contact type filters, contact list, contact detail, and contact activity rows were split from `js/crm.js` into `js/crm-contacts.js`; CRM shared state and load/view switching remain in `js/crm.js`.

- **2026-05-02:** Planner page switching, calendar type toggles, and source filter controls were split from `js/calendar.js` into `js/calendar-filters.js`; `js/calendar.js` now holds shared Planner state, data loading, and entry hydration only.

- **2026-05-02:** Planner board stats, project cards, and quick status updates were split from `js/calendar.js` into `js/calendar-board.js`; board rendering now lives outside the Planner data-loading shell.

- **2026-05-02:** Planner project modal, source pickers, and calendar-entry persistence helpers were split from `js/calendar.js` into `js/calendar-modal.js`; project modal persistence now lives outside the Planner shell.

- **2026-05-02:** Planner loop/thread side panels and production checklist helpers were split from `js/calendar.js` into `js/calendar-panels.js`; at that checkpoint, the panel module loaded before week/month views so `CAL_CHECKLIST_MAP` was available for calendar rendering.

- **2026-05-02:** Planner week/month calendar rendering and navigation helpers were split from `js/calendar.js` into `js/calendar-views.js`; the view module loads after task scheduling helpers because calendar views render scheduled task occurrences.

- **2026-05-02:** Planner source inbox, source metadata, source cards, and source detail attach flow were split from `js/calendar.js` into `js/calendar-sources.js`; source helpers now load between the Planner shell and task scheduling module.

- **2026-05-02:** Planner task scheduling, recurrence, task cards, and task modal behavior were split from `js/calendar.js` into `js/calendar-tasks.js`; that task module now supports the Planner modal and week/month view modules.

- **2026-05-02:** Legacy Story Dashboard state, filters, source loading, and renderers were split from `js/core.js` into `js/story-dashboard.js`; `js/core.js` now stays as the shared browser-global shell for maps, system constants, date/helpers, and page switching.

- **2026-05-02:** Weekly Checklist definitions, localStorage state, list view, and week calendar view were split from `js/core.js` into `js/checklist.js`; Planner still reads `CHECKLIST_ITEMS` from that module.

- **2026-05-02:** Tasks tab state, domain metadata, rendering, and status toggles were split from `js/core.js` into `js/tasks.js`; this historical path was later superseded by the Planner Tasks replacement surface.

- **2026-05-02:** Financial dashboard read models and renderers were split from `js/core.js` into `js/financials.js`, loaded between core page switching and Roadmap.

- **2026-05-02:** Roadmap initiative, timeline, capacity, and step-management code was split from `js/core.js` into `js/roadmap.js`, loaded immediately after core page switching.

- **2026-05-02:** Admin biosphere profile and biome management were split from `js/admin.js` into `js/admin-ecosystem.js`; `js/admin.js` now holds shared Admin state, utilities, upload helpers, and section loading.

- **2026-05-02:** Admin species records, filters, and species image management were split from `js/admin.js` into `js/admin-species.js`, loaded before chronicles and media so shared species state remains available.

- **2026-05-02:** Admin chronicle, announcement, and chronicle-staging code was split from `js/admin.js` into `js/admin-chronicles.js`; Media remains in `js/admin-media.js` and loads after chronicles.

- **2026-05-02:** Admin Media Library code was split from `js/admin.js` into `js/admin-media.js`, with `index.html`, `AGENTS.md`, and app docs updated for the new script order.

- **2026-05-02:** Legacy `core.js` story thread status, task status, and roadmap initiative-step writes now route through `AppAPI`, completing the first pass over obvious raw renderer table-write fetches outside Storage/API helpers.

- **2026-05-02:** Admin species image upload linking now uses `AppAPI.insert` for the `species_images` DB record while keeping WebP upload and Storage cleanup as Storage API primitives.

- **2026-05-02:** Admin Media Library metadata, reviewed-state, and tagging save paths now route through `AppAPI`; local media indexing and Supabase Storage upload/delete primitives remain intentionally separate.

- **2026-05-02:** Admin Chronicles, Announcements, and Chronicle Staging approval/rejection paths now route through `AppAPI`, with chronicle image rollback preserved when DB writes fail after upload.

- **2026-05-02:** Admin Biosphere and Biome save/delete paths now route through `AppAPI`, preserving WebP image rollback behavior when a DB write fails after upload.

- **2026-05-02:** Admin Species create/update/delete and Observed Today actions now route through `AppAPI`; storage-backed species image upload/linking remains intentionally separate for a later upload-focused pass.

- **2026-05-02:** CRM mutation paths now use shared `AppAPI` helpers for contacts, partner opportunities, and activities, removing CRM raw Supabase REST fetches while preserving the existing UI flow.

- **2026-05-02:** Fixed AppAPI load regression by exposing Supabase config constants from `js/config.js` onto `globalThis`; Planner/AppAPI requests now resolve to the real Supabase REST URL again.

- **2026-05-02:** Second refactor pass added shared Supabase REST helpers (`js/api-client.js`), routed selected Planner/Admin mutations through them, and documented the `ELECTRON_RUN_AS_NODE` startup watchout after a read-only launch smoke test.

- **2026-05-02:** First app refactor pass added shared renderer UI helpers (`js/ui.js`), updated script-order docs, fixed admin inline-handler escaping for species image actions, and fixed Planner project edits so clearing optional content fields persists nulls.

- **2026-05-01:** Removed the Story Dashboard from primary navigation and made Planner the default startup page; story-source review/action now lives in Planner Sources while legacy story helper code remains dormant for transition safety.
- **2026-05-01:** Planner gained a Sources workspace that expands story threads, open loops, observations, and tasks into actionable sections with Details, Plan, Task, and thread ready/unmark actions.
- **2026-05-01:** Planner smoke test passed for load, source details, Plan Project, Attach Source, Open Project, source role/note persistence, project role chips, calendar task done/reopen, task/project creation, and Story Dashboard loading.
- **2026-04-30:** Planner source detail project rows now include Open Project, jumping directly to the linked project's Production source map for review/editing.
- **2026-04-30:** Added the original app feature/workflow manual for future AI agents and operators, covering tabs, Planner source-map semantics, migrations, safety rules, and smoke tests; that material was later absorbed into App memory, skills, skill references, and archive.
- **2026-04-30:** Planner direct source-to-existing-project attachment now mirrors thread and loop IDs back to legacy content_calendar array fields after the join-table link succeeds.
- **2026-04-30:** Planner source detail now supports attaching a thread, loop, or observation directly to an existing project with relationship role and link note metadata.
- **2026-04-30:** Planner project cards and source detail project rows now surface saved source relationship roles and link notes for faster source-map review.
- **2026-04-30:** Planner project source links now expose relationship role and link-note controls in the Production source map and persist that metadata to the content-calendar join tables.
- **2026-04-30:** Planner source cards now open a detail modal with Story Dashboard context: metadata, linked observations, related loops/threads, existing project links, and a direct Plan Project action.
- **2026-04-30:** Fixed Planner Calendar one-off task Done/Reopen actions so they redraw the active Week/Month calendar instead of switching through the Planner Inbox flow.
- **2026-04-30:** Fixed Planner Calendar Done Tasks visibility so completed one-off scheduled tasks can be hidden and restored by the calendar toggle instead of disappearing permanently from the view.
- **2026-04-30:** Planner Calendar view now has visibility toggles for Projects, Tasks, and completed task occurrences so Week/Month can be scanned by item type.
- **2026-04-30:** Planner Calendar task items now open the task editor from Week and Month views; Week view keeps Done/Reopen as a separate occurrence action.
- **2026-04-30:** Planner Calendar week/month day cells now expose separate Task and Project add actions so tasks can be created directly on a chosen date.
- **2026-04-30:** Planner Inbox now has task-domain filters so ordinary tasks can be narrowed by Company Ops, Financials, Ecosystem, Content, Engineering, Sales, Web, and related domains.
- **2026-04-30:** Planner header actions now group New Task and New Project together, and task cards can open the New Task modal in edit mode with save/delete support.
- **2026-04-30:** Planner and Tasks now expose a dedicated New Task modal, keeping ordinary task creation separate from video/project creation while supporting optional scheduling fields when migration 005 is active.
- **2026-04-30:** Planner task scheduling controls now expose scheduled date, scheduled time, recurrence rule, interval, and recurrence end date directly on task cards.
- **2026-04-30:** Planner task cards now keep completed tasks recoverable by switching to Tasks/Done after completion, and scheduling now uses an inline date picker with Clear Date instead of a Today-only shortcut.
- **2026-04-30:** Planner gained task scheduling groundwork with migration 005 for task scheduled dates, recurrence metadata, and occurrence-based recurring-task completions; Calendar views can render scheduled task occurrences once the migration is run.
- **2026-04-30:** Planner Inbox now includes ordinary tasks as work items alongside story sources, with task filtering and open/done toggles from the unified planning surface.
- **2026-04-30:** Planner board project cards now support quick status transitions from Planned to In Production to Published, with Reopen for published projects still visible on the board.
- **2026-04-30:** Planner project modal now includes a Production Source Map that summarizes selected threads, observations, and loops with remove controls before save.
- **2026-04-30:** Planner Inbox gained filter parity controls for source type, biome, system, species, status, year, and unplanned/show-planned visibility, with planned/in-production indicators and observation-count badges on source cards.
- **2026-04-30:** Content Calendar tab reframed as Planner with workflow board columns, source filters, and a Story Inbox that can turn threads, loops, or observations into draft projects.
- **2026-04-30:** Content Calendar story-source schema upgraded with join tables for calendar-entry links to story threads, open loops, and direct observations; app integration now reads/writes those links and keeps legacy arrays as a compatibility mirror.
- **2026-04-30:** `miniBIOTA_App` promoted to a Brain-managed domain with this App Operations brief; App sessions report strategic state changes here.
- **2026-04-30:** `miniBIOTA_App` initialized for Codex-first operation with `AGENTS.md`, the original agent protocol material, Codex session helpers, and README. Legacy assistant-specific files were later moved into archive.
- **2026-04-29:** Backend WebP image upload pipeline implemented with Electron main-process Sharp conversion and Supabase Storage upload.
- **2026-04-25:** Monitoring tab live with direct MQTT readings and healthy/stale/offline chip status.
- **2026-04-23:** Media Library/tagging system added for local media asset indexing and review.

## Known Risks & Blockers

- CRM relationship-system tables are live with RLS enabled and no policies. Runtime access must stay on the internal main-process secret-key bridge unless a separate RLS policy pass is approved; backfill from legacy CRM rows remains a separate reviewed migration/write task. Legacy CRM contact links now use `crm_contact_links` after migration 014; additional link writes remain live CRM data changes.
- The app has Supabase secret-key access in main-process/local tooling; accidental public or renderer exposure would be a security risk.
- Real admin image upload to Supabase Storage still needs careful live verification with approval if not already completed.
- Packaged build behavior with Sharp/native dependencies should be verified before relying on distributable `.exe` builds.
- Monitoring setpoint/control writes affect the live biosphere and require explicit confirmation before changes.
- App source repo memory and skills must stay current as app architecture, schema assumptions, safety rules, and workflow playbooks change.
- Field Observer authenticated catalog reads are enabled through migration 009. Signed release APK generation and any live sighting saves remain unverified and require explicit approval before use against production data. Mobile web-source edits require `npm.cmd run cap:sync`, debug build, and device install/relaunch before they are visible on-phone.
- Planner task hierarchy paths have now been visually smoke tested for the Aquatic Club Week-view case, and Today/task-modal hierarchy inspection was tightened on 2026-05-13. The initial App quality-system rollout added Planner production scheduling services, fixture tests, selectors, write-plan persistence, and UI-system guardrails, but broader daily-use coverage across Month, Timeline, content production, and live creation/edit flows remains worth watching. Ordinary Planner single-row patch paths now use write-plan persistence/readback beyond the production-run pilot; Programs/Operations write-plan coverage remains separately scoped.
- Planner Programs/Operations schema and live Program records exist after
  migration 010, but Program UI create/edit/link behavior still needs
  interactive smoke verification before daily reliance.
- Prompt Library schema is live after migration 012, but create/edit/copy/archive flows still need interactive app smoke verification before daily reliance.
- Operation Living Intelligence Wave 1 graph tooling is local, manual, and
  disposable only. The live SQL metadata gap has been reviewed for the current
  Wave 1 proof, but durable graph automation, persistent Memgraph
  infrastructure, App runtime integration, public output, and canonical
  writeback still require separate approval, credential/read-scope design,
  drift checks, and security review.
- Operation Living Intelligence Wave 5 retrieval now has approved App-owned
  local helper tooling and ignored local output under
  `out/operation_living_intelligence/wave_5_retrieval_layer/company_corpus/`.
  The current baseline is manifest/chunk/keyword-readback only and has been
  usefulness-reviewed as a local citation/retrieval aid. Josue approved the
  expected-status helper update, and the helper now has expected-status support
  and passes `15 / 15` local evaluation questions.
  Company accepted that readback as the current local baseline and completed
  the vector/embedding decision brief, prepared the App design-review packet,
  and completed App docs-only review. Josue approved the local-file-only
  vector-proxy helper boundary; App added
  `tools/run-oli-wave5-local-vector-evaluation.js` and
  `docs/operation-living-intelligence-wave5-vector-eval-config.example.json`.
  First run wrote only ignored validation output under
  `out/operation_living_intelligence/wave_5_retrieval_layer/company_corpus/vector_eval/`
  and returned `blocked_baseline_stale_no_vector_evaluation`, because `6`
  source hashes were stale and `6` OLI source candidates were unmanifested.
  Treat this as a successful guardrail, not a semantic retrieval pass. The
  baseline was then regenerated and accepted with `108` documents, `1543`
  chunks, and `15 / 15` expected-status questions passing; the vector-proxy
  helper reran with `75` candidate rows and `15 / 15` result rows passing.
  Company accepted the no-embedding comparison. Semantic/vector retrieval
  should move next only if a concrete need justifies true local/offline
  embeddings; pgvector remains deferred.
- Operation Living Intelligence Wave 6 media/visual AI remains readiness-only.
  Phase A filesystem-only, Phase B stream metadata, model-route feasibility,
  official route-selection, Qwen3-VL still-image pilot, prompt hardening
  review, and prompt-hardened still-image rerun readbacks are complete. The
  selected route for a future proposal is `Qwen/Qwen3-VL-2B-Instruct`
  local/offline; Nemotron 3 Nano Omni remains the strategic quality target once
  hardware/runtime gates are solved. The final prompt-hardened rerun used the
  existing local runtime/cache, did not attempt dependency install or model
  download, produced parsed candidate-only output, removed the earlier
  environment-quality judgment issue, and confirmed the raw parent folder
  unchanged. The video/GPU runtime decision packet, Company-to-App packet, App
  docs-only review, Company runtime/backend preflight approval packet,
  runtime/backend preflight readback, CPU-only short-video implementation
  approval packet, blocked CPU-only short-video readback, Decord backend
  approval packet, and approved Decord short-video readback are complete. The
  same `torchvision` route should not be rerun; further video work should start
  with a Decord usefulness review or another separate backend/runtime or
  preprocessing/frame-sampling packet. Company completed the Decord usefulness
  review, the GPU/CUDA runtime proof decision packet, the GPU/CUDA App
  design-review packet, and App's docs-only GPU/CUDA runtime proof review.
  App requires a separate ignored GPU runtime and exact package gates. The
  no-video/no-model GPU/CUDA runtime proof passed, the GPU Qwen3-VL stack
  proof reached the expected `torchvision` dependency blocker, the GPU
  `torchvision` compatibility proof passed, and the no-media/no-download GPU
  model-load proof passed, and the GPU still-image inference proof passed.
  Additional video input, dependency/backend changes beyond installed Decord
  and the isolated GPU runtime stack, preprocessing, Raw Footage
  cache/no-side-effect policy beyond metadata, Research wording, Financials
  cost/spend approval, generated annotations beyond candidate readback, Media
  Library metadata, public output, and canonical writeback remain blocked.
- Operation Living Intelligence Wave 7 Planner/agent routing is design-only.
  Any future App helper must preserve Planner/Supabase as live task truth and
  stay no-write unless separately approved. Do not let generated ownership,
  blocker, approval, or handoff routes mark tasks done, change schedules,
  relink projects/programs, alter App runtime behavior, or become canonical.
  App completed the docs-only design review and accepts the future no-write
  routing boundary in principle, but live Planner reads, output/helper work,
  Planner writes, graph runtime, App runtime behavior, automation, public
  output, and canonical writeback remain unapproved.
- Operation Living Intelligence Wave 8 telemetry summaries are docs-only.
  Any helper, live telemetry read, generated output, App Monitoring change,
  App runtime integration, scheduled job, schema change, public telemetry
  change, or canonical writeback needs separate approval. Company completed
  source/readiness review, prepared the no-write Hardware/App/Web design-review
  packet, and prepared a Company domain review synthesis. App docs-only
  acceptance remains pending; default Company sequencing is to pause Wave 8 and
  continue Wave 9 docs-only unless App review is explicitly chosen now.
- Operation Living Intelligence Wave 9 sensitive-domain projection is
  docs-only. App should not implement helpers, read live CRM/Financials/public
  intake rows, generate output, add graph/vector projection, change protected
  reads, change schema/runtime behavior, or expose sensitive data without
  owner-approved scope and separate App approval.

## Cross-Domain Notes

- **Website:** Public website should remain read-only observability. Operator/admin workflows belong in the desktop app.
- **Website:** Field Observer sessions are intended to update `species.date_last_observed` only after a reviewed session save so the public website can show "seen today" immediately without auto-changing curated population fields.
- **Content:** Planner is now the app production surface for story sources and scheduled content. Calendar entries use join-table links to story beats, story threads, open loops, and direct observations; thread and loop legacy array fields remain during transition. Migration 007 adds the live general project-management layer, content projects can now be assigned to general work projects through `content_calendar.work_project_id`, and tasks can be organized under parent tasks through `tasks.parent_task_id`. For scheduled content production, the Company agent should treat the blue `content_calendar` entry as the content due/close record and the teal parent production task plus subtasks as the execution schedule. When a required production subtask moves later than the content date, the content date should move later too.
- **Planner:** Week/Month should read as daily action schedules. Generic
  `work_projects` provide milestone/context visibility instead of flooding
  every day in their date range, and parent task containers with scheduled
  children render the child task as the primary title only on dates with child
  work. Parent/container task deadlines belong in `tasks.due_date`; scheduled
  date, scheduled time, and span end date should represent concrete work
  occurrences.
- **All domains:** Prompt Library now stores reusable prompt records in `prompt_library`. These prompts can mature into workflow templates, but create/edit/favorite/archive/restore actions are live app data writes and should be treated as operational records.
- **All domains:** App Planner/Supabase is the shared project/task runtime for
  domain-agent rollout. App's own work lives under the App domain, while each
  domain agent still owns its local wiring verification before being called
  Planner-ready. Programs/Operations are cross-domain umbrellas above projects;
  they coordinate domain-owned projects without overriding domain
  source-of-truth, approval rules, or task/project ownership.
- **Growth:** Growth owns CRM as a commercial relationship system; App owns the CRM operator surface, Supabase-backed workflow implementation, validation, and runtime behavior when CRM features are scoped. Migration 013 is live as the additive relationship-system foundation, but relationship records, backfills, outreach, approvals, and commitments still require separately scoped Growth/App approval.
- **Financials:** Financials tab reads `revenue_streams`, `operating_expenses`, `liabilities`, and `planned_purchases`.
- **Hardware:** Monitoring tab reads live biome MQTT data. Internal App/operator display includes `liq_t` heat-exchanger/liquid temperature and `pump_pct` pump run percentage for sensor biomes 2-5; those fields should remain out of Web/public telemetry unless separately scoped. Monitoring may later integrate Supabase telemetry snapshot fallback and setpoint controls.
- **Ecosystem/Data:** Species and chronicle admin changes in the app affect public ecology records. Field Observer sighting counts/details should remain history datapoints; curated species population fields remain manually maintained.

## Domain Reference

Full app repo: `M:\miniBIOTA\miniBIOTA_App\`
Historical Brain brief: `11. miniBIOTA_App\app_brief.md`
Historical Brain overview: `11. miniBIOTA_App\app_overview.md`

Brain no longer mirrors App docs. Load active App detail from the source repo:

| File | Contents |
|---|---|
| `AGENTS.md` | App Agent entry point, source-of-truth hierarchy, safety rules, and skill routing |
| `memory/00-index.md` | Memory index, read order, migration status, and archived-doc routing |
| `memory/01-agent-purpose.md` | What the App Agent owns and does not own |
| `memory/02-app-safety-rules.md` | Live data, app launch, telemetry, Storage, migration, and write safety rules |
| `memory/03-app-architecture.md` | Stable app architecture and runtime source-of-truth routing |
| `memory/04-runtime-surfaces.md` | App tabs, major surfaces, and behavior ownership |
| `memory/05-supabase-and-storage-rules.md` | Secret-key, schema, migration, Storage, and rollback constraints |
| `memory/06-renderer-manifest-rules.md` | Renderer script manifest and load-order rules |
| `memory/07-cross-agent-relationships.md` | Brain and domain-agent relationship rules |
| `memory/08-recurring-decisions.md` | Durable recurring decisions and unresolved app decisions |
| `skills/implement-app-feature/SKILL.md` | Playbook for adding or fixing UI/app features |
| `memory/10-field-observer.md` | Private Android Field Observer routing, data contract, install path, and safety notes |
| `memory/11-app-quality-system.md` | Durable App quality-system direction inspired by miniBIOTA_Web: tokens, primitives, fixture tests, lints, UI Lab, services/selectors, and write plans |
| `skills/refactor-renderer-module/SKILL.md` | Playbook for renderer module refactors |
| `skills/refactor-renderer-module/reference/app-module-map.md` | Current module ownership map and refactor boundaries |
| `skills/refactor-renderer-module/reference/refactor-roadmap.md` | Current refactor status, stop conditions, and maintenance-mode guidance |
| `skills/validate-renderer-manifest/SKILL.md` | Playbook for validating renderer file and manifest changes |
| `skills/validate-renderer-manifest/reference/renderer-manifest.md` | Exact renderer script load-order reference |
| `skills/electron-smoke-test/SKILL.md` | Playbook for app smoke testing when launch/testing is approved |
| `skills/electron-smoke-test/reference/app-smoke-tests.md` | Tab and workflow smoke-test checklist |
| `skills/supabase-safety-review/SKILL.md` | Playbook for Supabase, Storage, telemetry, schema, migration, and secret-key work |
| `skills/supabase-safety-review/reference/schema-migrations.md` | App migration and schema reference |
| `skills/image-pipeline-review/SKILL.md` | Playbook for Site Admin and Media Library image pipeline work |
| `skills/image-pipeline-review/reference/image-pipeline.md` | WebP, Sharp, Supabase Storage, rollback, and packaging guidance |
| `skills/app-doc-closeout/SKILL.md` | Playbook for deciding whether App memory/Brain updates are required at closeout |
| `skills/update-app-memory/SKILL.md` | Playbook for promoting durable App decisions, hazards, and architecture rules into memory |
| `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave3-design-review.md` | App-side docs-only Operation Living Intelligence Wave 3 design review |
| `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave5-design-review.md` | App-side docs-only Operation Living Intelligence Wave 5 design review |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_5_retrieval_baseline_usefulness_review_2026-05-15.md` | Company Wave 5 retrieval baseline usefulness review |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_5_evaluation_tuning_plan_2026-05-15.md` | Company Wave 5 retrieval evaluation tuning plan |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_5_expected_status_helper_update_proposal_2026-05-15.md` | Company Wave 5 expected-status helper update proposal |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_5_expected_status_helper_update_2026-05-15.md` | Company Wave 5 expected-status helper update record |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_5_expected_status_readback_review_2026-05-15.md` | Company Wave 5 expected-status readback review |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_5_vector_embedding_decision_brief_2026-05-16.md` | Company Wave 5 vector/embedding decision brief |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_5_vector_embedding_app_design_review_packet_2026-05-16.md` | Company Wave 5 vector/embedding App design-review packet |
| `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave5-vector-embedding-design-review.md` | App-side Wave 5 vector/embedding docs-only review |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_5_vector_embedding_app_review_synthesis_2026-05-16.md` | Company synthesis of App Wave 5 vector/embedding review |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_5_local_vector_evaluation_helper_proposal_2026-05-16.md` | Company Wave 5 local vector evaluation helper proposal |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_5_local_vector_evaluation_helper_2026-05-16.md` | Company Wave 5 local vector evaluation helper implementation and stale-baseline guardrail record |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_5_local_vector_proxy_readback_review_2026-05-16.md` | Company Wave 5 local vector-proxy readback review and no-embedding comparison acceptance |
| `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave5-vector-eval-config.example.json` | Example-only Wave 5 local vector evaluation config posture |
| `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-design-review.md` | App-side docs-only Operation Living Intelligence Wave 6 design review |
| `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-model-route-design-review.md` | App-side docs-only Operation Living Intelligence Wave 6 model-route design review |
| `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave7-design-review.md` | App-side docs-only Operation Living Intelligence Wave 7 design review |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_7_planner_agent_routing_graph_design_2026-05-15.md` | Company Wave 7 docs-only Planner And Agent Routing Graph design |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_7_source_readiness_review_2026-05-15.md` | Company Wave 7 source/readiness review |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_7_app_design_review_packet_2026-05-15.md` | Company-to-App Wave 7 design review packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_8_telemetry_summaries_design_2026-05-15.md` | Company Wave 8 docs-only Telemetry Summaries design |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_8_source_readiness_review_2026-05-15.md` | Company Wave 8 telemetry source/readiness review |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_8_hardware_app_web_design_review_packet_2026-05-15.md` | Company Wave 8 Hardware/App/Web design review packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_8_domain_review_synthesis_2026-05-15.md` | Company Wave 8 domain review synthesis |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_9_crm_financials_sensitive_domains_design_2026-05-15.md` | Company Wave 9 docs-only CRM, Financials, and Sensitive Domains design |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_9_source_privacy_readiness_review_2026-05-15.md` | Company Wave 9 source privacy readiness review |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_9_growth_financials_app_web_owner_review_packet_2026-05-15.md` | Company Wave 9 Growth/Financials/App/Web owner-review packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_9_owner_review_synthesis_2026-05-15.md` | Company Wave 9 owner-review synthesis |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_media_visual_ai_readiness_design_2026-05-15.md` | Company Wave 6 docs-only Media And Visual AI Readiness design |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_source_runtime_readiness_review_2026-05-15.md` | Company Wave 6 source and runtime readiness review |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_app_design_review_packet_2026-05-15.md` | Company-to-App Wave 6 source/runtime readiness design review packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_media_preflight_policy_and_tooling_proposal_2026-05-16.md` | Company Wave 6 media preflight policy and tooling proposal |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_preflight_implementation_readiness_checklist_2026-05-16.md` | Company Wave 6 preflight implementation readiness checklist |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_phase_a_media_preflight_helper_2026-05-16.md` | Company Wave 6 approved Phase A media preflight helper and readback |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_phase_b_media_stream_metadata_approval_packet_2026-05-16.md` | Company Wave 6 Phase B media stream metadata approval packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_phase_b_media_stream_metadata_readback_2026-05-16.md` | Company Wave 6 approved Phase B media stream metadata readback |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_model_route_decision_packet_2026-05-16.md` | Company Wave 6 model-route decision packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_model_route_app_design_review_packet_2026-05-16.md` | Company Wave 6 model-route App design-review packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_model_route_feasibility_preflight_approval_packet_2026-05-16.md` | Company Wave 6 model-route feasibility preflight approval packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_model_route_feasibility_preflight_readback_2026-05-16.md` | Company Wave 6 model-route feasibility preflight readback |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_official_route_recheck_and_route_selection_packet_2026-05-16.md` | Company Wave 6 official route recheck and route-selection packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_qwen3_vl_local_pilot_implementation_approval_packet_2026-05-16.md` | Company Wave 6 Qwen3-VL local pilot implementation approval packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_qwen3_vl_local_pilot_readback_2026-05-16.md` | Company Wave 6 Qwen3-VL still-image local pilot readback |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_qwen3_vl_prompt_hardening_usefulness_review_2026-05-16.md` | Company Wave 6 Qwen3-VL prompt hardening and usefulness review |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_qwen3_vl_prompt_hardened_rerun_readback_2026-05-16.md` | Company Wave 6 Qwen3-VL prompt-hardened still-image rerun readback |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_video_gpu_runtime_decision_packet_2026-05-16.md` | Company Wave 6 video/GPU runtime decision packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_video_gpu_runtime_app_design_review_packet_2026-05-16.md` | Company Wave 6 video/GPU runtime App design-review packet |
| `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-video-gpu-runtime-design-review.md` | App-side docs-only Wave 6 video/GPU runtime design review |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_runtime_backend_preflight_approval_packet_2026-05-16.md` | Company Wave 6 runtime/backend preflight approval packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_runtime_backend_preflight_readback_2026-05-16.md` | Company Wave 6 runtime/backend preflight readback |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_cpu_only_short_video_implementation_approval_packet_2026-05-16.md` | Company Wave 6 CPU-only short-video implementation approval packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_cpu_only_short_video_pilot_readback_2026-05-16.md` | Company Wave 6 CPU-only short-video blocked pilot readback |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_decord_backend_short_video_approval_packet_2026-05-16.md` | Company Wave 6 Decord backend short-video approval packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_decord_backend_short_video_pilot_readback_2026-05-16.md` | Company Wave 6 Decord backend short-video pilot readback |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_decord_short_video_usefulness_review_2026-05-16.md` | Company Wave 6 Decord short-video usefulness review |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_cuda_runtime_proof_decision_packet_2026-05-16.md` | Company Wave 6 GPU/CUDA runtime proof decision packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_cuda_runtime_proof_app_design_review_packet_2026-05-16.md` | Company Wave 6 GPU/CUDA runtime proof App design-review packet |
| `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-gpu-cuda-runtime-proof-design-review.md` | App-side docs-only Wave 6 GPU/CUDA runtime proof design review |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_no_video_gpu_cuda_runtime_proof_approval_packet_2026-05-16.md` | Company Wave 6 no-video GPU/CUDA runtime proof approval packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_no_video_gpu_cuda_runtime_proof_readback_2026-05-16.md` | Company Wave 6 no-video GPU/CUDA runtime proof readback |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_qwen3_vl_stack_proof_approval_packet_2026-05-16.md` | Company Wave 6 GPU Qwen3-VL stack proof approval packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_qwen3_vl_stack_proof_readback_2026-05-16.md` | Company Wave 6 GPU Qwen3-VL stack proof readback |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_torchvision_compat_proof_readback_2026-05-16.md` | Company Wave 6 GPU torchvision compatibility proof readback |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_model_load_proof_readback_2026-05-16.md` | Company Wave 6 GPU model-load proof readback |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_still_image_inference_approval_packet_2026-05-16.md` | Company Wave 6 GPU still-image inference approval packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_still_image_inference_readback_2026-05-16.md` | Company Wave 6 GPU still-image inference readback |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_still_image_usefulness_performance_review_2026-05-16.md` | Company Wave 6 GPU still-image usefulness and performance review |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_short_video_implementation_approval_packet_2026-05-16.md` | Company Wave 6 GPU short-video implementation approval packet |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_short_video_proof_readback_2026-05-16.md` | Company Wave 6 GPU short-video proof readback |
| `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_wave_6_gpu_short_video_usefulness_performance_review_2026-05-16.md` | Company Wave 6 GPU short-video usefulness and performance review |
| `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-gpu-cuda-runtime-proof.js` | Local ignored-output Wave 6 no-video GPU/CUDA runtime proof helper |
| `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-gpu-qwen3-vl-stack-proof.js` | Local ignored-output Wave 6 GPU Qwen3-VL stack proof helper |
| `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-gpu-torchvision-compat-proof.js` | Local ignored-output Wave 6 GPU torchvision compatibility proof helper |
| `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-gpu-model-load-proof.js` | Local ignored-output Wave 6 GPU model-load proof helper |
| `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-gpu-still-image-proof.js` | Local ignored-output Wave 6 GPU still-image inference proof helper |
| `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-qwen3-vl-local-pilot.js` | Local ignored-output Wave 6 Qwen3-VL still-image pilot helper |
| `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-runtime-backend-preflight.js` | Local ignored-output Wave 6 runtime/backend preflight helper |
| `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-qwen3-vl-short-video-pilot.js` | Local ignored-output Wave 6 CPU-only short-video pilot helper |
| `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-model-route-feasibility.js` | Local ignored-output Wave 6 model-route feasibility helper |
| `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-media-preflight.js` | Local ignored-output Wave 6 Phase A/B media preflight helper |
| `M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave3-species-public-history-jsonl.js` | Local ignored-output Operation Living Intelligence Wave 3 JSONL generator |
| `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave3-species-public-history-readback.js` | Local no-Docker Operation Living Intelligence Wave 3 readback helper |
| `M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave5-retrieval-manifest.js` | Local ignored-output Operation Living Intelligence Wave 5 retrieval manifest/chunk generator |
| `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave5-retrieval-readback.js` | Local no-embedding Operation Living Intelligence Wave 5 keyword/readback helper |
| `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave5-local-vector-evaluation.js` | Local no-embedding Wave 5 vector-proxy evaluation guardrail helper |

