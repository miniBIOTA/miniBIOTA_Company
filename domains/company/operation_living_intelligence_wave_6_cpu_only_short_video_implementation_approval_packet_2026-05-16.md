---
id: operation_living_intelligence_wave_6_cpu_only_short_video_implementation_approval_packet_2026-05-16
title: Operation Living Intelligence Wave 6 CPU-Only Short-Video Implementation Approval Packet
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, qwen3-vl, short-video, cpu-only, implementation-approval, visual-ai, no-write, approval-required]
status: approval_packet_ready_user_approval_required
---
# Operation Living Intelligence Wave 6 CPU-Only Short-Video Implementation Approval Packet

## Purpose

This packet defines the next possible Wave 6 implementation step after the runtime/backend preflight reported that a CPU-only short-video packet is possible to propose.

This packet is docs-only. It does not implement anything.

No video was opened. No model was run. No dependency, backend, runtime, CUDA, model cache, Media Library metadata, App runtime behavior, Supabase/Planner/Storage/schema record, public output, or canonical writeback is approved by creating this packet.

## Approval Need

The next step needs explicit Josue approval because it would cross into video input, video backend use, and model execution.

Without approval, stop here.

## Prior Gate

Runtime/backend preflight:

```text
domains/company/operation_living_intelligence_wave_6_runtime_backend_preflight_readback_2026-05-16.md
```

Key facts:

| Field | Current result |
|---|---|
| Proposed input | `TEST_398_02_FIELD_SAMPLING` only |
| Source | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026\20260408_112606.mp4` |
| Media facts | `h264 3840x2160`, `11.47s`, audio present |
| Python runtime | `M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_runtime\python-venv` |
| Python executable | `M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_runtime\python-venv\Scripts\python.exe` |
| Model cache path | `M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_model_cache\huggingface` |
| Model route | `Qwen/Qwen3-VL-2B-Instruct` local/offline |
| Torch | `2.12.0+cpu` |
| CUDA available to Torch | `false` |
| Available video backend | `torchvision` |
| Missing video backends | `torchcodec`, `decord` |
| Raw parent folder check | unchanged at `967 / 967` |

Interpretation:

- GPU/CUDA is blocked.
- `torchcodec`/`decord` backend routes are blocked unless separately approved.
- A CPU-only attempt using the existing local runtime/cache and already-present `torchvision` package is possible to propose.
- Backend capability is not proven until implementation; the helper must stop if `torchvision` cannot handle the video path without dependency changes, `ffmpeg`, preprocessing, or source-folder side effects.

## Proposed Future Implementation

If explicitly approved later, App would add a narrow local helper:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-qwen3-vl-short-video-pilot.js
```

Proposed ignored output path:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\qwen3_vl_short_video_pilot\
```

Proposed generated files:

```text
short_video_pilot_manifest.json
short_video_runtime_readiness.json
short_video_prompt_packet.md
short_video_candidate_readback.json
short_video_candidate_readback.md
validation_report.json
```

## Exact Proposed Scope

| Boundary | Approved only if Josue approves this packet |
|---|---|
| Model | `Qwen/Qwen3-VL-2B-Instruct` |
| Route | local/offline only |
| Runtime | existing ignored App Python runtime only |
| Model cache | existing ignored App model cache only |
| Device | CPU only |
| GPU/CUDA | blocked |
| Video backend | already-present `torchvision` only |
| Dependency changes | blocked |
| Input | `TEST_398_02_FIELD_SAMPLING` only |
| Audio | ignored |
| Preprocessing | blocked |
| Output | ignored local candidate/readback only |
| Public/canonical status | public-use-blocked / noncanonical |

Do not include:

- `TEST_398_03_SAMPLE_INTRODUCTION`;
- `TEST_398_04_MICROCRUSTACEAN_BLOCKING`;
- any media outside task `398`;
- any broad raw-media folder scan;
- any public/canonical write surface.

## Proposed Runtime And Video Budget

The future helper should use the smallest practical video budget:

| Setting | Proposed value |
|---|---|
| sample FPS | `0.25` if accepted by the processor utility |
| maximum sampled frames | `4` |
| `min_pixels` | `256 * 28 * 28` |
| `max_pixels` | `512 * 28 * 28` |
| generation max new tokens | `384` |
| timeout | stop before accepting output if the model run exceeds a bounded helper timeout |
| raw response | write only under ignored App `out/` |

If the Qwen3-VL processor utility does not accept these exact budget controls for video, the helper must stop and write a blocked readback rather than improvising a new route.

## Proposed Prompt Boundary

Candidate prompt intent:

```text
Describe only broad visible changes in the short video.
Do not identify species.
Do not judge environment quality, care, health, suitability, success, failure, improvement, or decline.
Do not make ecological claims.
Do not produce public captions, alt text, species-card copy, chronicle copy, proof language, or timecoded evidence.
Return compact candidate-only JSON with review_required=true, public_use_status=blocked, metadata_write_status=not_approved, canonical_writeback=none, species_claim_status=not_a_species_identification, and timecode_claim_status=not_a_timecoded_evidence_record.
```

## Candidate Output Contract

Any future generated candidate output should include:

| Field | Requirement |
|---|---|
| `source_path` | exact approved source path |
| `source_item_id` | `TEST_398_02_FIELD_SAMPLING` |
| `model_route` | `qwen3_vl_local_cpu_short_video` |
| `model_name` | `Qwen/Qwen3-VL-2B-Instruct` |
| `model_version_or_revision` | exact resolved version/revision if available |
| `prompt_version` | `wave6_qwen3_vl_short_video_candidate_v1_cpu_only_no_environment_judgment` |
| `plain_sequence_description` | broad visible-feature summary only |
| `candidate_visual_labels` | broad labels only |
| `temporal_observations` | broad non-timecoded observations only |
| `confidence_notes` | ambiguity only |
| `species_claim_status` | `not_a_species_identification` |
| `timecode_claim_status` | `not_a_timecoded_evidence_record` |
| `review_required` | `true` |
| `raw_footage_review_status` | `pending` |
| `research_review_status` | `pending` |
| `content_review_status` | `pending` |
| `public_use_status` | `blocked` |
| `metadata_write_status` | `not_approved` |
| `canonical_writeback` | `none` |

## Required Validation

The future helper must fail if any of these are false:

- output path is under ignored App `out/`;
- generated output path is ignored by App `.gitignore`;
- source set is exact task `398` scope;
- input is only `TEST_398_02_FIELD_SAMPLING`;
- source path exists before use;
- raw parent folder entry counts and hashes are unchanged before/after;
- no source-folder write occurs;
- no broad raw-media scan occurs;
- CPU-only mode is used;
- CUDA/GPU is not used;
- `torchvision` is the only video backend attempted;
- `torchcodec` and `decord` are not installed or used;
- no dependency install/change occurs;
- no model download/cache change occurs;
- no `ffmpeg`, preprocessing, clip extraction, frame extraction, resizing, transcode, thumbnail, proxy, sidecar, checksum, derivative, or temp media beside source occurs;
- no audio processing occurs;
- no API call or cloud upload occurs;
- no credentials, account, payment method, rented compute, or hosted service is used;
- no Media Library metadata, reviewed state, App runtime behavior, Supabase, Planner, Storage, schema, migration, graph/vector, Web, Content, Research, public, or canonical write occurs;
- generated output is candidate-only and public-use-blocked.

## Required Stop Conditions

Stop immediately and write a blocked readback if:

- the existing local Qwen3-VL runtime/cache is missing;
- the model cannot run locally/offline from the existing cache;
- the video path triggers dependency install, model download, model cache change, runtime change, CUDA/GPU use, or backend install;
- `torchvision` cannot serve the video input without new dependencies or `ffmpeg`;
- the processor requires preprocessing, frame extraction, resizing, clipping, transcode, or source-adjacent temp files;
- CPU runtime is too slow or exceeds the helper timeout;
- memory/resource pressure prevents a bounded run;
- the model output is malformed after one bounded attempt;
- output contains species certainty, environment/care/health judgment, ecological claim, public copy, proof language, or timecoded evidence;
- any command would write beside source media;
- any command would write Media Library, Supabase, Planner, Storage, App runtime, Web, Content, Research, public, or canonical records.

## Expected Readback If Approved

The future readback must include:

1. exact commands run;
2. exact source file used;
3. exact Python executable and runtime path;
4. exact model/cache path and model revision if available;
5. exact video backend used;
6. confirmation CPU-only and CUDA/GPU not used;
7. exact video budget settings;
8. parent-folder before/after side-effect proof;
9. generated output file list;
10. candidate JSON and Markdown summary;
11. validation report;
12. confirmation of no dependency/backend/model-cache changes;
13. confirmation of no `ffmpeg`, preprocessing, source-folder writes, API/cloud/upload/credentials/account/payment;
14. confirmation of no Media Library/App runtime/Supabase/Planner/Storage/public/canonical writes.

## Not Approved Yet

This packet does not approve:

- App code edits;
- helper implementation;
- video input;
- model execution;
- GPU/CUDA runtime change;
- GPU/CUDA inference;
- dependency install/change;
- model download/cache change;
- `torchcodec` or `decord`;
- video backend install/change;
- `ffmpeg`;
- preprocessing;
- clip extraction;
- frame extraction;
- resizing;
- transcoding;
- thumbnails, proxies, sidecars, caches beside source media, checksums, derivatives, or temp media;
- generated annotations beyond future ignored candidate/readback output;
- Media Library metadata;
- App runtime behavior;
- Supabase writes;
- Planner writes;
- Storage writes;
- schema or migration work;
- public output;
- paid service;
- canonical writeback.

## Suggested Approval Wording

Use this only if Josue wants to proceed:

```text
Approve Wave 6 CPU-only Qwen3-VL short-video local pilot implementation only: add an App helper at `tools/run-oli-wave6-qwen3-vl-short-video-pilot.js`, use existing local/offline `Qwen/Qwen3-VL-2B-Instruct` runtime/cache only, use CPU only with no GPU/CUDA, use only the already-present `torchvision` video backend, start only with `TEST_398_02_FIELD_SAMPLING`, ignore audio, use the smallest bounded video budget from the Company packet, write ignored generated candidate/readback output only under `out/operation_living_intelligence/wave_6_media_visual_ai_readiness/qwen3_vl_short_video_pilot/`, keep output candidate-only/public-use-blocked/noncanonical, verify raw parent folder unchanged, and perform no dependency install/change, no model download/cache change, no `torchcodec`/`decord`, no ffmpeg/preprocessing/frame extraction/clip extraction/resizing/transcoding/source-folder temp files, no API/cloud/upload/credentials/account/payment, no Media Library/App runtime/Supabase/Planner/Storage/schema/public/canonical writes. Stop and write a blocked readback if video cannot run within those exact limits.
```

## Verification

- Read Wave 6 runtime/backend preflight readback.
- Read App Wave 6 video/GPU runtime design review.
- Read Wave 6 video/GPU runtime decision packet.
- Read Wave 6 prompt-hardened still-image rerun readback.
- Read Wave 6 Phase B media stream metadata readback.

No app behavior, database record, Planner record, Storage object, public site behavior, public output, schema, migration, model install/download/run, video input, GPU/CUDA runtime change, dependency change, decoder/backend install/use, API call, media preprocessing, generated annotation expansion, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical source-of-truth record changed.
