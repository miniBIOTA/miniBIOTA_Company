---
id: app_operations
title: 11. miniBIOTA_App
domain: app_operations
last_updated: 2026-05-16
tags: [app, electron, operations, planner, monitoring, internal-tools]
reporting_status: company_active
reporting_phase: phase_10_reporting_active
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\11. miniBIOTA_App\\app_overview.md"
copied_on: 2026-05-09
brain_transition_status: "Company reporting active; Brain source historical/archive lookup only."
---
# 11. miniBIOTA_App

> Phase 3 transition note: This Company report was originally copied from `M:\miniBIOTA\miniBIOTA_Brain\11. miniBIOTA_App\app_overview.md` on 2026-05-09. As of Phase 10, this Company path is the active reporting target; the Brain source is historical/archive lookup only.

## Scope
- Owns the internal Electron desktop app used for miniBIOTA operations.
- Provides operator workflows for Planner, financials, CRM, roadmap, Prompt Library, Site Admin, media management, and monitoring.
- Remains an internal secret-key-capable tool, not a public product or public website surface.

## Current State
- CRM relationship-system migration 013 is live after user-applied Supabase SQL on 2026-05-12. It added 33 additive tables beside the legacy CRM tables, with read-only verification showing all new tables empty and legacy counts unchanged. The CRM tab now includes a read-only Relationship view for schema/table counts and review queues through the internal main-process secret-key bridge. Migration 014 is live as of 2026-05-13, adding flexible labeled `crm_contact_links` rows for legacy CRM contact websites/social/reference links.
- `miniBIOTA_App` is the active desktop operator surface for miniBIOTA.
- Active tabs are Planner, Financials, CRM, Roadmap, Prompt Library, Site Admin, and Monitoring.
- Planner project-manager schema foundation is live after migration 007, and
  former top-level Weekly Checklist and Tasks behavior has been consolidated
  into Planner replacement surfaces.
- Planner card accents now use domain identity as the stable visual signal:
  project/content cards use the full domain color, tasks/subtasks use softer
  versions of the same color, and status remains separate as badges, text,
  actions, or columns. The shared palette intentionally gives Company Ops,
  Financials, Ecosystem, Brand, Content, Engineering, Sales, Web, App, and
  Hardware distinct color lanes.
- The supplemental App quality-system token cleanup on 2026-05-15 promoted
  Planner domain palette values into `css/shared/app-tokens.css` as
  `--app-domain-*` tokens, kept `shared-domain-colors.css` as the
  class-to-semantic-variable mapping layer, and left the scoped token/CSS
  quality lints passing across 69 CSS files after focused Planner, Roadmap,
  CRM, and Admin Media cleanup. Prompt Library was checked and was already
  token-clean.
- The second scanner-driven cleanup pass on 2026-05-15 finished Site Admin's
  CSS token pilot beyond Media Library. Shared Admin navigation/status/action
  controls, detail disclosures, form actions, species filters/search, image
  grids, tables/forms, and Media Library styles now scan clean for raw colors
  and scoped CSS quality drift. The token/CSS quality lint pilot now covers 74
  CSS files.
- Planner Programs/Operations schema is live after migration 010, adding
  `work_programs` and `work_program_projects` as the cross-domain umbrella
  layer above domain-owned projects. Live Program records now include
  `Operation Living Atlas` (`work_programs.id = 1`), `Operation Living Web`
  (`work_programs.id = 2`), and `Aquatic Club Talk Readiness`
  (`work_programs.id = 3`), with domain-owned projects linked through
  `work_program_projects`.
- App project management is now organized in App Planner/Supabase under the
  App domain. The newest App-owned project is `Mobile Field Observer Quality System` (`work_projects.id = 84`), created on 2026-05-15 and scheduled for 2026-05-16 with 6 phase parent tasks and 33 child tasks. The previous `App Quality System Roadmap` (`work_projects.id = 82`) is complete with all 72 roadmap task rows done.
- Monitoring reads direct MQTT telemetry from the local biome network when connected to `mB2.4`, including internal-only heat-exchanger/liquid temperature (`liq_t`) and pump run percentage (`pump_pct`) display for sensor biomes 2-5.
- Site Admin supports species, biosphere, biome, chronicle, announcement, staging, and media-library workflows.
- Media Library/tagging, Species-style media search/filtering, local thumbnail-cache preview browsing, and backend WebP image upload pipeline are implemented in the app. A read-only Electron smoke on 2026-05-15 passed for search/filter/thumbnail/grid inspection, with the caveat that sampled realm/biome chips only verified empty-state filtering because they returned `0 results` in current data.
- Prompt Library has replaced the old static Team reference surface. Migration 012 was applied successfully by the user on 2026-05-11, making `prompt_library` live for reusable prompt records and future workflow-template use.
- The app source repo now uses repo-local memory and skills as active detailed context: `AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`. `memory/11-app-quality-system.md` and `planning/app_quality_system_roadmap.md` capture the completed initial App quality-system rollout inspired by miniBIOTA_Web, and `planning/mobile_field_observer_quality_system_project.md` captures the planned mobile Field Observer quality-system follow-up.
- Operation Living Intelligence Wave 1 now has App-owned local helper tooling
  and documentation for the Lake Post-Seal graph pilot:
  `tools/generate-oli-wave1-jsonl.js`, `tools/generate-oli-wave1-cypher.js`,
  `tools/run-oli-wave1-jsonl-readback.js`,
  `tools/run-oli-wave1-memgraph-smoke.js`, and
  `docs/operation-living-intelligence-wave1.md`. The workflow is local,
  ignored-output, no-Docker JSONL readback first, and disposable Memgraph
  smoke testing only when intentionally needed; it does not change App runtime
  behavior, schema, Supabase records, public website behavior, or canonical
  source-of-truth ownership.
- Operation Living Intelligence Wave 3 now has App-owned local helper tooling
  for the Lake Post-Seal species/public-history packet:
  `tools/generate-oli-wave3-species-public-history-jsonl.js` and
  `tools/run-oli-wave3-species-public-history-readback.js`. The workflow is
  local, ignored-output, JSONL/readback-first, and no-Docker; verified output
  produced `114` nodes, `222` normal edges, `49` blocked edges, and readback
  status `pass_with_review_required_species_public_history_readback_ready`.
  It does not change App runtime behavior, schema, Supabase records, public
  website behavior, media metadata, species images, or canonical source-of-truth
  ownership.
- Operation Living Intelligence Wave 5 now has App-owned local helper tooling:
  `tools/generate-oli-wave5-retrieval-manifest.js` and
  `tools/run-oli-wave5-retrieval-readback.js`. The helpers write ignored
  manifest/chunk/readback output under
  `out/operation_living_intelligence/wave_5_retrieval_layer/company_corpus/`
  with line-aware citations, source/owner/role/canonicality/publicness/claim
  metadata, no-embedding keyword baseline, validation/readback gates, and
  `none` canonical writeback. The verified baseline generated `98` documents,
  `1427` chunks, `10` evaluation questions, and readback status
  `pass_with_review_required_retrieval_readback_ready`. Embeddings, vector
  index, pgvector, App runtime integration, live reads, public search,
  automation, scheduled refresh, or canonical writeback remain separately
  gated. Company's usefulness review keeps the helper as a local citation and
  retrieval aid. Josue approved the expected-status helper update, and the
  helper now verifies `101` documents, `1463` chunks, `15` expected-status
  evaluation questions, and `15 / 15` passes without embeddings, live reads,
  runtime behavior, public search, or canonical writeback. Company accepted the
  expected-status readback as the current local baseline, completed the
  vector/embedding decision brief, prepared the App design-review packet, and
  completed App docs-only review. App recommends local-file-only vector
  evaluation first if separately approved, with pgvector deferred until local
  value and safety are proven. Company prepared the local vector evaluation
  helper proposal, and Josue approved the helper boundary. App added
  `tools/run-oli-wave5-local-vector-evaluation.js` plus the example config doc,
  wrote only ignored validation output under
  `out/operation_living_intelligence/wave_5_retrieval_layer/company_corpus/vector_eval/`,
  and returned `blocked_baseline_stale_no_vector_evaluation` because the
  accepted baseline is stale. Treat this as a guardrail pass, not a semantic
  retrieval pass. The baseline was then refreshed and accepted with `108`
  documents, `1543` chunks, and `15 / 15` expected-status questions passing;
  the vector-proxy helper reran with `75` candidate rows and `15 / 15` result
  rows passing. This is now an accepted no-embedding comparison; true
  embeddings and pgvector remain deferred.
- Operation Living Intelligence Wave 6 media/visual AI now has Company
  docs-only design, source/runtime readiness review, Company-to-App packet,
  App docs-only design review, media preflight policy/tooling proposal, and
  implementation readiness checklist records. Josue approved Phase A, and App
  added `tools/run-oli-wave6-media-preflight.js` as a local ignored-output
  helper. Readback returned
  `pass_with_review_required_wave6_phase_a_preflight_ready`: the four selected
  source files exist, App `out/` is ignored, immediate raw-media parent folders
  were unchanged, `ffprobe`/`ffmpeg` were detected by PATH probe only, no media
  tools were executed, and no media processing/model/API/cloud/Media
  Library/Supabase/Planner/Storage/App runtime/public/canonical write occurred.
  Company prepared the Phase B media stream metadata approval packet, Josue
  approved it, and App ran only the approved `ffprobe.exe -v error
  -print_format json -show_format -show_streams` readback against the exact
  four task `398` files. Result:
  `pass_with_review_required_wave6_phase_b_stream_metadata_ready`; all `4 / 4`
  commands exited `0`, metadata parsed, parent folders remained unchanged, and
  output stayed under ignored `out/`. Exact model route, generated annotations,
  Media Library integration, App runtime behavior, public output, and canonical
  writeback remain unapproved. Company then completed the Wave 6 model-route
  decision packet, recommending local/private-first feasibility review: keep
  Nemotron as preferred target if feasible, use Qwen as fallback/local
  benchmark if needed, and defer hosted/cloud routes until separate
  account/key/upload/privacy/cost approval. Company then prepared the Wave 6
  App model-route design-review packet, and App completed the docs-only review
  at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-model-route-design-review.md`.
  App accepts the local/private-first planning posture, but the next
  App-facing step, if any, is a separately approved model-route feasibility
  preflight, not model execution. Company prepared that feasibility preflight
  approval packet at
  `domains/company/operation_living_intelligence_wave_6_model_route_feasibility_preflight_approval_packet_2026-05-16.md`;
  Josue approved the helper boundary, and App added
  `tools/run-oli-wave6-model-route-feasibility.js`. The helper writes ignored
  feasibility/readback output under
  `out/operation_living_intelligence/wave_6_media_visual_ai_readiness/model_route_feasibility/`.
  Readback returned
  `pass_with_review_required_wave6_model_route_feasibility_preflight_ready`
  with local CPU/RAM/GPU/disk readiness, all `4 / 4` sources present, parent
  folders unchanged, and no model/preprocessing/write activity. Company then
  completed the official route recheck and route-selection packet at
  `domains/company/operation_living_intelligence_wave_6_official_route_recheck_and_route_selection_packet_2026-05-16.md`.
  App implication: the next future implementation proposal route is
  `Qwen/Qwen3-VL-2B-Instruct` local/offline, while Nemotron 3 Nano Omni remains
  the strategic quality target once hardware/runtime gates are solved and
  hosted/cloud routes remain deferred. Company then prepared the Qwen3-VL local
  pilot implementation approval packet at
  `domains/company/operation_living_intelligence_wave_6_qwen3_vl_local_pilot_implementation_approval_packet_2026-05-16.md`.
  App implication: explicit approval is now required before App code,
  dependency install, model download/cache, or model run. Josue approved the
  packet, and App completed the still-image pilot with
  `tools/run-oli-wave6-qwen3-vl-local-pilot.js`. Readback is recorded at
  `domains/company/operation_living_intelligence_wave_6_qwen3_vl_local_pilot_readback_2026-05-16.md`.
  Result: `pass_with_review_required_wave6_qwen3_vl_still_image_candidate_ready`;
  output is candidate-only, parsed JSON, public-use-blocked, noncanonical, and
  the raw parent folder remained unchanged. Runtime was CPU-only. Company then
  completed the prompt hardening/usefulness review at
  `domains/company/operation_living_intelligence_wave_6_qwen3_vl_prompt_hardening_usefulness_review_2026-05-16.md`.
  Josue then approved the prompt-hardened still-image rerun. App updated and
  reran `tools/run-oli-wave6-qwen3-vl-local-pilot.js` using the existing local
  runtime/cache under ignored App `out/`. Company recorded the readback at
  `domains/company/operation_living_intelligence_wave_6_qwen3_vl_prompt_hardened_rerun_readback_2026-05-16.md`.
  Result: `pass_with_review_required_wave6_qwen3_vl_still_image_candidate_ready`;
  output is prompt-versioned parsed JSON, candidate-only, public-use-blocked,
  noncanonical, and free of the earlier environment-quality judgment. No
  dependency install or model download was attempted during the final rerun,
  and the raw parent folder stayed unchanged at `430 / 430`. App implication:
  stop before video; video and GPU/CUDA runtime work remain deferred. Company
  then completed the video/GPU runtime decision packet at
  `domains/company/operation_living_intelligence_wave_6_video_gpu_runtime_decision_packet_2026-05-16.md`.
  App implication: the next safe App-facing gate is docs-only review of the
  short-video/GPU runtime boundary for `TEST_398_02_FIELD_SAMPLING`; no video
  execution, GPU/CUDA runtime change, decoder/backend change, preprocessing, or
  generated annotation expansion is approved. Company then prepared the App
  design-review packet at
  `domains/company/operation_living_intelligence_wave_6_video_gpu_runtime_app_design_review_packet_2026-05-16.md`.
  App implication: App may now review that packet as docs-only; implementation
  remains unapproved. App completed that docs-only review at
  `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-video-gpu-runtime-design-review.md`.
  Result: `app_review_blocks_video_until_runtime_changes_are_approved`.
  App blocks video until runtime/backend details are approved and recommends a
  no-execution runtime/backend preflight or exact implementation approval
  packet before any short-video run.
  Company then prepared the runtime/backend preflight approval packet at
  `domains/company/operation_living_intelligence_wave_6_runtime_backend_preflight_approval_packet_2026-05-16.md`.
  App implication: the next possible implementation, if explicitly approved,
  is no-execution local runtime/cache/package/CUDA/backend availability
  readback only, not video or model execution.
  Josue approved that helper, and App added
  `tools/run-oli-wave6-runtime-backend-preflight.js`. Readback is recorded at
  `domains/company/operation_living_intelligence_wave_6_runtime_backend_preflight_readback_2026-05-16.md`.
  Result: `pass_runtime_backend_preflight_cpu_only_video_packet_possible`.
  The existing runtime is CPU-only from Torch's view, `torchvision` is
  importable, and the raw video parent folder stayed unchanged at `967 / 967`.
  Company then prepared the CPU-only short-video implementation approval packet
  at
  `domains/company/operation_living_intelligence_wave_6_cpu_only_short_video_implementation_approval_packet_2026-05-16.md`.
  App implication: implementation is still not approved, but the packet names
  the exact possible future helper boundary: existing local/offline runtime and
  cache only, CPU only, `torchvision` only, `TEST_398_02_FIELD_SAMPLING` only,
  audio ignored, bounded video budget, ignored App `out/` candidate/readback,
  and blocked readback if any runtime/backend/preprocessing expansion is needed.
  App completed that approved helper at
  `tools/run-oli-wave6-qwen3-vl-short-video-pilot.js`. Company readback is
  recorded at
  `domains/company/operation_living_intelligence_wave_6_cpu_only_short_video_pilot_readback_2026-05-16.md`.
  Result: `blocked_wave6_qwen3_vl_cpu_short_video_readback_only`. The helper
  stayed inside the approved boundary, but `torchvision.io` has no `read_video`,
  so no candidate was accepted. Raw parent folder and model cache stayed
  unchanged.
  Company then prepared the Decord backend short-video approval packet at
  `domains/company/operation_living_intelligence_wave_6_decord_backend_short_video_approval_packet_2026-05-16.md`.
  App implication: implementation remains unapproved, but the next possible
  video route is a local `decord` backend run limited to the existing ignored
  App venv, CPU-only, exact `TEST_398_02_FIELD_SAMPLING` scope, existing model
  cache, ignored output, and no `torchcodec`, `ffmpeg`, preprocessing, GPU/CUDA,
  public, or canonical writes.
  App then completed that approved Decord helper at
  `tools/run-oli-wave6-qwen3-vl-short-video-pilot.js`. Company readback is
  recorded at
  `domains/company/operation_living_intelligence_wave_6_decord_backend_short_video_pilot_readback_2026-05-16.md`.
  Result:
  `pass_with_review_required_wave6_qwen3_vl_decord_short_video_candidate_ready`.
  The helper installed/used `decord 0.6.0` only inside the existing ignored App
  venv, reused the existing local/offline Qwen3-VL model cache, ran CPU-only on
  `TEST_398_02_FIELD_SAMPLING`, sampled `4` frames, wrote candidate-only
  ignored output, and kept raw parent folder and model cache unchanged. No
  `torchcodec`, `ffmpeg`, preprocessing, GPU/CUDA, Media Library metadata, App
  runtime behavior, Supabase/Planner/Storage/schema/public write, or canonical
  writeback changed.
- Operation Living Intelligence Wave 7 Planner/agent routing now has a
  Company docs-only design record, source/readiness review, Company-to-App
  design-review packet, and App docs-only design review. App accepts the
  future no-write routing boundary in principle: ignored output,
  manifest/readback-first shape, Planner/Supabase as live task truth, Company
  registry/domain reports as routing context, and deferred return gates
  preserved. Any future helper must avoid Planner writes, generated task truth,
  App runtime behavior, schema changes, persistent graph runtime, automation,
  public output, and canonical writeback. Wave 7 implementation remains
  deferred.
- Operation Living Intelligence Wave 8 telemetry summaries now have a Company
  docs-only design record, source/readiness review, and Hardware/App/Web
  design-review packet, plus a Company domain review synthesis. App-relevant
  result: App acceptance of the future no-write helper boundary, ignored output
  path, protected read path, snapshot-first recommendation, validation/report
  shape, and runtime exclusion remains pending; any telemetry helper, live
  telemetry read, generated output, App Monitoring change, App runtime
  integration, scheduled job, or public telemetry behavior change remains
  blocked until separate approval.
- Operation Living Intelligence Wave 9 is Company docs-only design for CRM,
  Financials, and sensitive domains. App-relevant result: future helper/output
  paths are candidate-only and require Growth/Financials/Web owner scope plus
  App protected-read/output review before any live sensitive reads, generated
  output, CRM/Financials runtime behavior, schema/migration work, graph/vector
  projection, or sensitive data exposure. Company source/privacy readiness,
  the Growth/Financials/App/Web owner-review packet, and Company owner-review
  synthesis are complete, but App-owned acceptance remains pending.
- App also has a prepared read-only SQL metadata gate packet for Operation
  Living Intelligence:
  `docs/operation-living-intelligence-sql-metadata-check.md` and
  `tools/inspect-oli-wave1-sql-metadata.sql`, with optional local runner
  `tools/run-oli-wave1-sql-metadata-check.ps1`. It is not a migration and
  should only be run through an approved SQL-capable read-only path.
- Brain no longer keeps an App `docs/` mirror; use the source repo's memory/skills structure for detailed App Agent context.

## Key Facts
- CRM relationship-system tables from migration 013 are live, RLS-enabled, and policy-free; first runtime access must use the internal main-process secret-key bridge. No legacy CRM records have been backfilled into the new tables. Legacy CRM Contacts now support multiple labeled links through `crm_contact_links` rather than one column per social platform.
- The app uses Supabase publishable keys in renderer/browser-facing config and secret keys only in Electron main-process services or local admin tooling. Internal renderer REST helpers route through an Electron IPC bridge when secret-key access is needed, without exposing the secret key to browser code.
- Public website surfaces should remain read-only observability; operator/admin workflows belong in the desktop app.
- App owns CRM as software/runtime/schema/UI implementation. Growth owns CRM
  relationship meaning, lifecycle strategy, follow-up rules, opportunity
  context, and commercial commitment discipline.
- Planner is the main production workflow surface for story sources, project planning, scheduled content, and ordinary tasks.
- Prompt Library stores reusable prompts in `prompt_library`; prompt create, edit, favorite, archive, and restore actions are live Supabase writes.
- Monitoring internal hardware fields `liq_t` and `pump_pct` are App/operator-only displays over the existing MQTT payload and should not be added to Web/public telemetry without separate scope and approval.
- Planner is the intended unified project-management surface. The live schema
  now includes `work_domains`, `work_projects`, task project-management fields,
  an optional `content_calendar.work_project_id` bridge, and the
  `work_programs` / `work_program_projects` Programs layer.
- Programs/Operations are cross-domain umbrellas. Projects remain domain-owned
  execution units, tasks remain domain/project-owned, and Programs do not
  override domain source-of-truth or approval rules.
- App Agent wiring now treats App Planner/Supabase as the live App work queue:
  App sessions should read Planner projects/tasks when choosing work, and ask
  before marking completed Planner tasks done at closeout.
- Operation Living Intelligence Wave 1 graph outputs are derived-only,
  rebuildable, and local. Durable automation still requires live SQL metadata
  inspection through a SQL-capable database path before any persistent graph
  service, scheduled sync, or canonical writeback is approved.
- Operation Living Intelligence Wave 5 retrieval has a verified local
  manifest/chunk/readback baseline under ignored App `out/` and an approved
  local vector-proxy guardrail helper. After baseline refresh, the helper
  passes `15 / 15` expected-status result rows without embeddings. Embeddings,
  vector index, pgvector table, public search, scheduled refresh, App runtime
  behavior, live reads, expanded corpus, or canonical writeback still need
  separate approval.
- Operation Living Intelligence Wave 6 media/visual AI remains readiness-only;
  Phase A filesystem-only preflight, Phase B approved `ffprobe` stream
  metadata readback, model-route feasibility preflight, official route
  selection, Qwen3-VL still-image pilot, prompt hardening review, and
  prompt-hardened still-image rerun are complete. The selected route for a
  future proposal is `Qwen/Qwen3-VL-2B-Instruct` local/offline; the final
  prompt-hardened rerun used the existing local runtime/cache and did not
  attempt dependency install or model download. The video/GPU runtime decision
  packet, Company-to-App design-review packet, App docs-only review, Company
  runtime/backend preflight approval packet, runtime/backend preflight
  readback, CPU-only short-video implementation approval packet, blocked
  CPU-only short-video readback, Decord backend approval packet, and approved
  Decord short-video readback are complete. The same `torchvision` route should
  not be rerun; further video work should start with a Decord usefulness review
  or another separate backend/runtime/preprocessing packet.
  Company then completed the Decord usefulness review at
  `domains/company/operation_living_intelligence_wave_6_decord_short_video_usefulness_review_2026-05-16.md`;
  Decord is now accepted as the local CPU short-video baseline, but CPU runtime
  is too slow to assume repeated practical use. If Wave 6 continues, the next
  safe App-facing step should be a docs-only GPU/CUDA runtime proof decision or
  a new exact approval packet.
  Company then completed that GPU/CUDA runtime proof decision at
  `domains/company/operation_living_intelligence_wave_6_gpu_cuda_runtime_proof_decision_packet_2026-05-16.md`;
  GPU/CUDA proof is worth planning, but no App code, runtime/package change,
  model run, video input, GPU/CUDA inference, or dependency work is approved.
  The next App-facing step should be docs-only design review of the runtime
  proof boundary.
  Company then prepared that App design-review packet at
  `domains/company/operation_living_intelligence_wave_6_gpu_cuda_runtime_proof_app_design_review_packet_2026-05-16.md`.
  It asks App to review a future no-video GPU/CUDA runtime proof boundary,
  including runtime isolation, exact Torch/CUDA package path, ignored output,
  and stop conditions.
  App completed that docs-only review at
  `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-gpu-cuda-runtime-proof-design-review.md`.
  App requires a separate ignored GPU runtime and exact Torch/CUDA package
  path before install; the first future implementation should be no-video and
  no-model CUDA availability proof only.
  Company then prepared the no-video GPU/CUDA runtime proof approval packet at
  `domains/company/operation_living_intelligence_wave_6_no_video_gpu_cuda_runtime_proof_approval_packet_2026-05-16.md`.
  It names the possible future App helper, separate ignored runtime, and
  `torch==2.7.0` CUDA 12.8 package route, but still requires explicit approval
  before runtime creation, package install, or CUDA checks.
  Josue then approved implementation, and App added
  `tools/run-oli-wave6-gpu-cuda-runtime-proof.js`. The helper created/used the
  separate ignored GPU runtime under App `out/`, installed `torch 2.7.0+cu128`
  from the approved CUDA 12.8 PyTorch wheel index, verified CUDA available on
  `NVIDIA GeForce RTX 5060 Ti`, passed a tiny CUDA tensor check, and confirmed
  the accepted CPU proof runtime and existing model cache unchanged. This proves
  local CUDA runtime readiness only. No additional video input, model execution,
  media preprocessing, generated annotation output, media export/transcode/clip/
  frame/thumbnail/proxy/sidecar/cache/checksum/derivative, upload, Media Library
  integration, media metadata write, App runtime behavior, public output, or
  canonical writeback is approved. The current next App-facing gate, if Wave 6
  continues, is the prepared GPU Qwen3-VL stack proof approval packet at
  `domains/company/operation_living_intelligence_wave_6_gpu_qwen3_vl_stack_proof_approval_packet_2026-05-16.md`.
  That proposed next step is no-media/no-model-load package/import
  compatibility inside the existing ignored GPU runtime before any GPU model
  load, still-image proof, or short-video proof. App then completed the
  approved stack proof with
  `tools/run-oli-wave6-gpu-qwen3-vl-stack-proof.js`: the approved non-Torch
  stack installed, Torch stayed `2.7.0+cu128`, CUDA and the tiny tensor check
  still passed, and Qwen3-VL classes imported, but `qwen_vl_utils` blocked
  because it requires `torchvision`, which was explicitly excluded. The next
  App-facing gate was an exact `torchvision` compatibility proof. Josue then
  approved that proof, and App added
  `tools/run-oli-wave6-gpu-torchvision-compat-proof.js`: the helper installed
  only `torchvision 0.22.0+cu128` from the official PyTorch CUDA 12.8 wheel
  index inside the existing ignored GPU runtime, kept Torch unchanged at
  `2.7.0+cu128`, confirmed CUDA/tiny tensor readiness, confirmed
  `qwen_vl_utils` and Qwen3-VL class imports, left `torchaudio`, `decord`, and
  `torchcodec` absent, and confirmed the accepted CPU runtime plus model cache
  unchanged. The current next App-facing gate, if Wave 6 continues, is a
  no-media/no-download GPU model-load proof using only the existing local
  Qwen3-VL model cache. Josue then approved that proof, and App added
  `tools/run-oli-wave6-gpu-model-load-proof.js`: the helper set offline/cache
  flags plus `local_files_only=True`, loaded `AutoProcessor` and
  `Qwen3VLForConditionalGeneration` from the existing local cache, sampled
  parameters on `cuda:0`, confirmed the accepted CPU runtime and model cache
  unchanged, and did not install dependencies, download a model, read media,
  generate, run a forward pass, change App runtime behavior, or write public/
  canonical/database records. Company then prepared the GPU still-image
  inference approval packet at
  `domains/company/operation_living_intelligence_wave_6_gpu_still_image_inference_approval_packet_2026-05-16.md`.
  Josue approved that boundary, and App added
  `tools/run-oli-wave6-gpu-still-image-proof.js`: the helper used only the
  exact still image, existing ignored GPU runtime, existing local model cache,
  and prompt-hardened guardrails. It generated parsed candidate JSON with
  review-required/public-blocked/noncanonical guardrails intact, kept the raw
  parent folder, accepted CPU runtime, and model cache unchanged, and did not
  install dependencies, download a model, read video, preprocess media, change
  App runtime behavior, or write public/canonical/database records. Company
  then completed the docs-only GPU still-image usefulness/performance review:
  the proof is useful for local visual-AI readiness, but one still image took
  about `86.1s` total, so it does not approve GPU video execution. The current
  next App-facing gate, if Wave 6 continues, is the prepared docs-only GPU
  short-video implementation approval packet at
  `domains/company/operation_living_intelligence_wave_6_gpu_short_video_implementation_approval_packet_2026-05-16.md`.
  Implementation remains unapproved; the packet requires existing ignored GPU
  runtime/cache only, `TEST_398_02_FIELD_SAMPLING` only, audio ignored, no
  dependency changes, no preprocessing, and no App runtime/public/canonical/
  database writes. Josue then approved that boundary, and App added
  `tools/run-oli-wave6-gpu-short-video-proof.js`: the helper used only the
  exact short video, existing ignored GPU runtime, existing local model cache,
  and prompt-hardened short-video guardrails. It ignored audio, sampled `4`
  frames, generated parsed candidate JSON with review-required/public-blocked/
  noncanonical guardrails intact, kept the raw parent folder, accepted CPU
  runtime, and model cache unchanged, and did not install dependencies,
  download a model, preprocess media, change App runtime behavior, or write
  public/canonical/database records. Company then completed the GPU short-video
  usefulness/performance review at
  `domains/company/operation_living_intelligence_wave_6_gpu_short_video_usefulness_performance_review_2026-05-16.md`.
  App implication: GPU short-video is accepted as the current local baseline,
  but Wave 6 implementation should stop here by default. Any prompt refinement,
  owner review, additional media run, annotation workflow, Media Library
  integration, App runtime behavior, public output, database write, or
  canonical writeback needs separate scope and approval.
- Operation Living Intelligence Wave 7 Planner/agent routing remains
  design-only; any App-owned helper, generated routing output, live Planner
  read, Planner write, graph runtime, App runtime integration, scheduled sync,
  public output, or canonical writeback needs separate approval. Company
  source/readiness review, Company packet, and App docs-only design review are
  complete.
- Operation Living Intelligence Wave 8 telemetry summaries remain docs-only;
  any helper, live telemetry read, generated rollup, App Monitoring change,
  App runtime integration, scheduled sync, public telemetry behavior, schema
  change, or canonical writeback needs separate approval. Company completed
  source/readiness review and prepared the no-write Hardware/App/Web
  design-review packet and Company domain review synthesis; App docs-only
  acceptance remains pending if Wave 8 returns before implementation.
- Operation Living Intelligence Wave 9 remains docs-only; App should not read
  live CRM/Financials/public intake rows, implement helpers, generate output,
  change protected reads, change schema/runtime behavior, or expose sensitive
  data without separate owner-approved scope and App approval.
- Planner task UI has initial migration 007 support for live domains, project
  assignment, workflow status, blocked reason, completion timestamp, and
  multi-day task spans.
- Planner task UI supports parent-child task hierarchy through
  `tasks.parent_task_id`, with nested subtasks visible in Planner Tasks, work
  project detail panels, Planner Today child-task drawers, and task modal
  parent/child relationship panels.
- Planner task UI now separates parent/container deadlines from scheduled work:
  `tasks.due_date` is the deadline/target field, while `scheduled_date`,
  `scheduled_time`, and `span_end_date` represent work occurrences.
- Planner has an initial Today task surface for scheduled/spanning, overdue,
  blocked, and active unscheduled work.
- Planner has an initial Tasks board grouped by workflow status with domain
  filtering and existing task edit/done actions.
- Planner has an initial general Projects view over `work_projects`, with
  domain filtering, create/edit/archive, and workflow status movement.
- Work project modals show linked tasks and content entries, with quick open
  actions and New Task preselection for the current project/domain.
- Planner content projects can be assigned to active general work projects through `content_calendar.work_project_id`, with linked project context shown in Planner board/calendar surfaces. Scheduled content production now uses the blue `content_calendar` card as the content due/close marker and a teal parent production task with subtasks as the execution schedule.
- Planner Week/Month calendar views are schedule-first. Generic work projects render as single milestone cards on `target_date`, or `start_date` when no target exists, instead of spanning every day. Parent tasks with children appear only on dates with scheduled child work, and the child task title is the primary visible calendar title while the parent/container title remains context. Today and Timeline follow the same child-led display model for parent/container cards.
- Planner week/month calendar views start on Sunday; Week renders Sunday
  through Saturday and Month uses a Sunday-first grid.
- Planner Today includes initial weekly planning prompts that prefill recurring
  task candidates for longform selection, short-opportunity review, and Sunday
  close.
- Calendar entries use join-table links to story beats, story threads, open loops, and observations; legacy thread and loop array fields remain during transition.
- Renderer JavaScript and CSS were broadly refactored into feature-oriented modules and manifest-managed load order.
- Media Library search matches filename, description, notes, and tagged species
  by common name, scientific name, or alternate names; realm and biome chips
  combine with type, year, and unreviewed filters. The 2026-05-15 read-only
  smoke confirmed filename and tagged-species positive search paths,
  photo/video/unreviewed/year filtering, thumbnail rendering, virtual grid
  browsing, and asset panel view/edit inspection without writes; sampled
  realm/biome chips returned `0 results`, so their positive linked-media path
  remains a future data-backed check if needed.

## Priorities
- Continue the staged CRM relationship-system UI: expand the read-only Relationship summary into People, Organizations, Opportunities, Interactions, Next Actions, Review, Agent Inbox, and reporting surfaces before any write or backfill workflows.
- Continue consolidating story-source execution and project-management behavior into the unified Planner workflow.
- Verify the first Planner Programs/Operations records in the App UI, then
  continue Planner Sources polish, beat closeout ergonomics, and recurring-task
  calendar integration.
- Keep secret-key access internal-only and avoid public exposure of app behavior.
- Verify packaged build behavior for Sharp/WebP image uploads when packaging resumes.
- Keep App memory and skill references current as architecture, schema assumptions, and safety rules change.
- Smoke test Prompt Library create/edit/copy/archive flows after launching the app, now that migration 012 is applied.
- Use App Planner/Supabase for live App task status; keep Markdown focused on context, operating rules, architecture notes, and playbooks.
- Maintain and extend the completed App quality-system rollout (`work_projects.id = 82`) as an active guardrail layer. Execute the planned Mobile Field Observer Quality System project (`work_projects.id = 84`) on 2026-05-16 to bring the Android companion under the same token/component/UI Lab/validation discipline. Ordinary Planner single-row patch paths now use write-plan persistence/readback; Programs/Operations write-plan coverage remains a future separately scoped cross-domain pass if needed.

## Risks / Gaps
- CRM migration 013 created live RLS-protected tables with no policies. Any publishable-key policy design, legacy backfill, or CRM write workflow must be separately approved and tested. Migration 014's `crm_contact_links` table is live for legacy contact links; creating/editing those links remains a live CRM record write.
- Supabase secret-key access would be a major security risk if exposed outside the internal app.
- Real admin image upload to Supabase Storage still needs careful live verification when that work resumes.
- Packaged build behavior with Sharp/native dependencies should be verified before relying on distributable builds.
- Monitoring setpoint/control writes affect the live biosphere and require explicit confirmation before changes.
- Supabase migrations and schema assumptions must be checked before app write paths are changed.
- Planner task hierarchy has been visually smoke tested for the Aquatic Club Week-view case; parent/container due-date support and Today/task-modal hierarchy inspection are in place. The initial App quality-system rollout added Planner production scheduling services, fixture tests, selectors, write-plan persistence, and UI-system guardrails. Broader daily-use coverage across Planner task creation, Timeline, Month, and content production remains worth watching, and ordinary Planner single-row patch paths now use write-plan persistence/readback beyond the production-run pilot; Programs/Operations write-plan coverage remains separately scoped.
- Planner Programs/Operations schema and live Program records are live, but
  Program UI create/edit/link behavior still needs interactive smoke
  verification before daily reliance.
- Prompt Library schema is live after migration 012, but create/edit/copy/archive flows still need interactive app smoke verification before daily reliance.

## Files In This Folder
- `app_brief.md` - active Company manager-facing report brief for App.
- `app_overview.md` - active Company overview for App Operations.

## Source Repo
- App source repo: `M:\miniBIOTA\miniBIOTA_App\`
- Active entry point: `M:\miniBIOTA\miniBIOTA_App\AGENTS.md`
- Memory index: `M:\miniBIOTA\miniBIOTA_App\memory\00-index.md`
- Active skills: `M:\miniBIOTA\miniBIOTA_App\skills\`
- `_system/sync_docs.ps1` keeps App docs mirroring disabled and removes any stale `11. miniBIOTA_App\docs` folder if it appears.

## Vault Sync Status
- Last verified: 2026-05-09
- Known divergences: no active App docs mirror remains in Brain.
- Next sync check: use App repo memory/skills directly when App detail is needed.

