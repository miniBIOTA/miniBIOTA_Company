---
id: operation_living_intelligence_wave_6_decord_backend_short_video_pilot_readback_2026-05-16
title: Operation Living Intelligence Wave 6 Decord Backend Short-Video Pilot Readback
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, qwen3-vl, decord, short-video, local-output, public-use-blocked, noncanonical]
status: pass_with_review_required_wave6_qwen3_vl_decord_short_video_candidate_ready
---
# Operation Living Intelligence Wave 6 Decord Backend Short-Video Pilot Readback

## Purpose

This records the approved Wave 6 Decord backend Qwen3-VL short-video local pilot.

Approved boundary:

```text
App helper only
install/use only decord inside the existing ignored App venv
existing local/offline Qwen/Qwen3-VL-2B-Instruct runtime/cache only
CPU only
no GPU/CUDA
TEST_398_02_FIELD_SAMPLING only
audio ignored
same bounded video budget as the Company packet
ignored App out/ candidate/readback output only
candidate-only / review-required / public-use-blocked / noncanonical
no model download/cache change
no torchcodec
no ffmpeg/preprocessing/frame extraction/clip extraction/resizing/transcoding/source-folder temp files
no API/cloud/upload/credentials/account/payment
no Media Library/App runtime/Supabase/Planner/Storage/schema/public/canonical writes
```

## Files And Output

App helper:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-qwen3-vl-short-video-pilot.js
```

Generated ignored output:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\qwen3_vl_short_video_pilot_decord\
```

Readback files:

```text
decord_backend_install_readiness.json
decord_short_video_manifest.json
decord_short_video_runtime_readiness.json
decord_short_video_prompt_packet.md
decord_short_video_candidate_readback.json
decord_short_video_candidate_readback.md
decord_short_video_pilot_readback.md
validation_report.json
```

## Commands Run

Syntax check:

```powershell
node --check tools/run-oli-wave6-qwen3-vl-short-video-pilot.js
```

First sandboxed Decord run:

```powershell
node tools/run-oli-wave6-qwen3-vl-short-video-pilot.js --backend decord --allow-local-decord-install
```

Result:

```text
blocked_decord_install_failed
```

The first run stopped before model/video execution because sandboxed pip could not reach the package index.

Approved escalated rerun for package-index access:

```powershell
node tools/run-oli-wave6-qwen3-vl-short-video-pilot.js --backend decord --allow-local-decord-install
```

Result:

```text
pass_with_review_required_wave6_qwen3_vl_decord_short_video_candidate_ready
```

Final readback rerun after helper readback-polish syntax check:

```powershell
node --check tools/run-oli-wave6-qwen3-vl-short-video-pilot.js
node tools/run-oli-wave6-qwen3-vl-short-video-pilot.js --backend decord --allow-local-decord-install
```

The final rerun did not reinstall `decord`; it recorded `decord_already_present`.

## Dependency Readback

Approved dependency change:

```text
decord only
```

Installed package:

```text
decord 0.6.0
```

Install target:

```text
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_runtime\python-venv
```

Pip cache path named by the helper:

```text
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_runtime\pip-cache
```

No `torchcodec`, CUDA/GPU package, Torch, Transformers, qwen-vl-utils, global Python package, system package, model download, or model cache change was installed or changed by the approved final route.

## Final Readback Result

Status:

```text
pass_with_review_required_wave6_qwen3_vl_decord_short_video_candidate_ready
```

Runtime:

| Field | Result |
|---|---|
| Model | `Qwen/Qwen3-VL-2B-Instruct` |
| Python | `3.13.7` |
| Device | `cpu` |
| CUDA available | `false` |
| Torch | `2.12.0+cpu` |
| Transformers | `5.8.1` |
| qwen_vl_utils | importable |
| Decord | `0.6.0` |
| Torchcodec | not installed |
| Selected video backend | `decord` |
| Candidate parse status | `parsed_json` |
| Sampled frame count | `4` |
| Failed validation checks | `0` |

Final validation checks included:

```text
output_path_is_app_ignored_out_tree = true
app_gitignore_ignores_out = true
exact_TEST_398_02_FIELD_SAMPLING_scope = true
source_path_exists = true
raw_parent_folder_unchanged = true
model_cache_unchanged = true
existing_runtime_only = true
cpu_only_mode = true
cuda_gpu_not_used = true
decord_selected_video_backend = true
decord_installed_or_already_present_in_ignored_venv = true
decord_install_limited_to_existing_ignored_venv = true
torchvision_not_used_for_video_decode = true
torchcodec_not_used_or_installed = true
dependency_install_attempted_only_decord = true
model_download_or_cache_change_attempted = false
ffmpeg_or_preprocessing_attempted = false
audio_ignored = true
no_api_cloud_upload_credentials_account_payment = true
no_media_library_app_runtime_supabase_planner_storage_schema_public_canonical_writes = true
video_budget_within_packet = true
candidate_output_generated_if_run_succeeded = true
candidate_output_guardrails_present = true
candidate_output_no_blocked_judgment_terms = true
```

## Candidate Summary

Parsed candidate JSON summary:

```json
{
  "prompt_version": "wave6_qwen3_vl_short_video_candidate_v1_decord_cpu_only_no_environment_judgment",
  "source_item_id": "TEST_398_02_FIELD_SAMPLING",
  "model_route": "qwen3_vl_local_cpu_decord_short_video",
  "model_name": "Qwen/Qwen3-VL-2B-Instruct",
  "plain_sequence_description": "A hand holds a jar of murky water with visible sediment and debris, with a background of lush green aquatic plants and foliage.",
  "candidate_visual_labels": [
    "water sample",
    "hand",
    "jar",
    "aquatic plants",
    "forest background"
  ],
  "temporal_observations": [
    "a hand holding a jar",
    "the jar contains murky water",
    "the background is a forested area with green plants"
  ],
  "confidence_notes": "The visual evidence is consistent with a water sample being held in a jar, with a natural background of vegetation.",
  "species_claim_status": "not_a_species_identification",
  "timecode_claim_status": "not_a_timecoded_evidence_record",
  "review_required": true,
  "raw_footage_review_status": "pending",
  "research_review_status": "pending",
  "content_review_status": "pending",
  "public_use_status": "blocked",
  "metadata_write_status": "not_approved",
  "canonical_writeback": "none"
}
```

Interpretation:

- the Decord backend route can read the first approved short-video source locally;
- the helper generated parseable candidate JSON;
- the candidate stayed broad, review-required, public-use-blocked, metadata-write-not-approved, and noncanonical;
- the candidate did not make species-identification or timecoded-evidence claims;
- the phrase `murky water` is retained only as review-required candidate visual wording, not Research fact, care/water-quality judgment, public copy, or Media Library metadata.

## Raw Footage And Cache Side-Effect Check

Source:

```text
TEST_398_02_FIELD_SAMPLING
M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026\20260408_112606.mp4
```

Known media facts:

```text
h264 3840x2160, 11.47s, audio present
```

Side-effect result:

| Field | Result |
|---|---:|
| Raw parent entry count before | `967` |
| Raw parent entry count after | `967` |
| Raw parent entries hash changed | `false` |
| Raw parent folder unchanged | `true` |
| Model cache entry count before | `31` |
| Model cache entry count after | `31` |
| Model cache entries hash changed | `false` |
| Model cache unchanged | `true` |

No raw media files, folders, names, metadata, thumbnails, proxies, sidecars, frame exports, clips, transcodes, checksums, temp media, or derivatives were created or changed.

## Decision

Wave 6 now has a bounded local short-video candidate proof using the Decord backend.

This proves:

- the approved local Decord backend can read the first short video;
- the existing local Qwen3-VL model cache can be reused for video without model-cache change;
- candidate output can remain ignored, local, review-required, public-use-blocked, and noncanonical;
- raw media parent-folder side-effect checks can pass for the Decord route.

This does not approve:

- public or canonical use of the candidate;
- Media Library metadata or generated annotation workflows;
- Research claims, species identification, timecoded evidence, or public captions;
- additional videos, larger video scopes, or ID-sensitive media;
- GPU/CUDA runtime changes;
- `torchcodec`;
- `ffmpeg` or preprocessing;
- App runtime integration;
- Supabase/Planner/Storage/schema/Web/Content/Research writes.

## Recommended Next Gate

Stop Wave 6 implementation here and review usefulness.

Recommended next safe gate:

```text
Wave 6 Decord short-video usefulness review and next-route decision
```

That review should decide whether the bounded Decord candidate is useful enough to:

- keep Decord as the local CPU video baseline;
- add stricter wording around visual turbidity terms such as `murky`;
- stop before more video because CPU runtime is slow;
- propose GPU/CUDA runtime proof separately;
- or defer video until a concrete Raw Footage, Research, Content, or Media Library need appears.

## Not Approved

This readback does not approve:

- additional dependency install/change;
- model download/cache change;
- additional model runs beyond the approved final readback;
- additional videos;
- `TEST_398_03_SAMPLE_INTRODUCTION`;
- `TEST_398_04_MICROCRUSTACEAN_BLOCKING`;
- GPU/CUDA runtime change;
- GPU/CUDA inference;
- `torchcodec`;
- `ffmpeg`;
- preprocessing;
- frame extraction;
- clip extraction;
- resizing;
- transcoding;
- thumbnails, proxies, sidecars, caches beside source media, checksums, derivatives, or temp media;
- accepted generated annotations;
- Media Library metadata;
- App runtime behavior;
- Supabase writes;
- Planner writes;
- Storage writes;
- schema or migration work;
- public output;
- paid service;
- canonical writeback.

## Verification

- Read App AGENTS and App safety memory.
- Read Wave 6 Decord backend approval packet.
- Updated the existing App short-video helper with a Decord mode.
- Ran helper syntax checks.
- Ran the helper once in sandbox; it blocked before model/video execution because package-index access was unavailable.
- Reran the helper with approved escalation for Decord package-index access only.
- Confirmed `decord 0.6.0` installed into the ignored App venv.
- Reran the helper after readback polish; Decord was already present and no reinstall occurred.
- Read generated `validation_report.json`.
- Read generated `decord_short_video_candidate_readback.json`.
- Read generated `decord_backend_install_readiness.json`.
- Confirmed generated Decord output path is ignored by App `.gitignore`.

No model download/cache change, GPU/CUDA inference, `torchcodec`, `ffmpeg`, preprocessing, media export, frame extraction, thumbnail/proxy/sidecar/cache/checksum/derivative beside source media, API/cloud/upload/credential/account/payment setup, Media Library metadata, App runtime behavior, Supabase/Planner/Storage/schema write, public output, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, raw media change, model cache change, or canonical writeback changed.
