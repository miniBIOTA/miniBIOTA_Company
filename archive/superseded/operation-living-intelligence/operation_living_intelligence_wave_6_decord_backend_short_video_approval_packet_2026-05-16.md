---
id: operation_living_intelligence_wave_6_decord_backend_short_video_approval_packet_2026-05-16
title: Operation Living Intelligence Wave 6 Decord Backend Short-Video Approval Packet
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, qwen3-vl, decord, video-backend, short-video, approval-required, no-write]
status: approval_packet_ready_user_approval_required
---
# Operation Living Intelligence Wave 6 Decord Backend Short-Video Approval Packet

## Purpose

This packet defines the next possible Wave 6 video step after the approved CPU-only `torchvision` route blocked safely.

This packet is docs-only. It does not install `decord`, run video, run the model, change the runtime, use `ffmpeg`, preprocess media, write Media Library/App runtime/Supabase/Planner/Storage/schema records, publish output, or create canonical writeback.

## Why This Packet Exists

The approved CPU-only short-video helper blocked at:

```text
domains/company/operation_living_intelligence_wave_6_cpu_only_short_video_pilot_readback_2026-05-16.md
```

Blocked reason:

```text
module 'torchvision.io' has no attribute 'read_video'
```

The helper stayed inside the approved boundary:

- exact input: `TEST_398_02_FIELD_SAMPLING`;
- existing local/offline Qwen3-VL runtime/cache;
- CPU only;
- `torchvision` only;
- no dependency/backend/model-cache changes;
- no `ffmpeg`;
- no preprocessing;
- raw parent folder unchanged at `967 / 967`;
- model cache unchanged;
- no accepted candidate generated.

## Local Backend Evidence

Installed `qwen_vl_utils` video reader logic at:

```text
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_runtime\python-venv\Lib\site-packages\qwen_vl_utils\vision_process.py
```

Local code evidence:

- `VIDEO_READER_BACKENDS` includes `decord`, `torchvision`, and `torchcodec`.
- If `FORCE_QWENVL_VIDEO_READER` is set, that backend is selected first.
- Without a forced backend, the local priority is `torchcodec`, then `decord`, then `torchvision`.
- The `decord` route calls `decord.VideoReader(video_path)`.
- The `torchcodec` route calls `torchcodec.decoders.VideoDecoder(...)`.
- The failed route called `torchvision.io.read_video(...)`, which is missing in this installed `torchvision`.

## Route Decision

Recommended next route:

```text
local decord backend short-video pilot
```

Reason:

- it directly addresses the failed backend layer;
- it avoids repeating the known-bad `torchvision` route;
- it avoids GPU/CUDA runtime change;
- it avoids the `torchcodec` route for now because the existing Wave 6 decision packet already flags `torchcodec`/FFmpeg coupling as a separate decoder-policy concern;
- it can be scoped to the existing ignored App Python runtime and output tree;
- it can keep the same one-video, candidate-only, public-blocked, noncanonical output contract.

Rejected for this packet:

| Route | Why not this packet |
|---|---|
| Repeat `torchvision` | Already blocked because `torchvision.io.read_video` is missing. |
| `torchcodec` | Separate decoder policy needed because torchcodec uses a VideoDecoder route with FFmpeg coupling concerns. |
| preprocessing/frame extraction | Requires a preprocessing policy packet first. |
| GPU/CUDA | Requires runtime-change approval first. |
| hosted/cloud/API | Requires privacy, cost, credential, upload, and retention approval first. |

## Approval Need

The next step needs explicit Josue approval because it would cross into local dependency/backend change and video/model execution territory.

Without approval, stop here.

## Proposed Future Implementation

If explicitly approved later, App would update the existing helper:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-qwen3-vl-short-video-pilot.js
```

The helper may add one new mode:

```text
--backend decord --allow-local-decord-install
```

Proposed ignored output path:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\qwen3_vl_short_video_pilot_decord\
```

Proposed generated files:

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

## Exact Proposed Scope

| Boundary | Approved only if Josue approves this packet |
|---|---|
| Model | `Qwen/Qwen3-VL-2B-Instruct` |
| Route | local/offline only |
| Runtime | existing ignored App Python runtime only |
| Dependency change | install/use `decord` only in the existing ignored App venv |
| Model cache | existing ignored App model cache only; no model download/cache change |
| Device | CPU only |
| GPU/CUDA | blocked |
| Video backend | `decord` only |
| `torchvision` | not used for video decode |
| `torchcodec` | blocked |
| `ffmpeg` | blocked |
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

## Dependency Boundary

Approved only if Josue approves:

```text
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_runtime\python-venv\Scripts\python.exe -m pip install decord
```

Required dependency constraints:

- install only into the existing ignored App venv;
- do not install global Python packages;
- do not change system packages;
- do not change CUDA/GPU/Torch/Transformers/qwen-vl-utils;
- do not install `torchcodec`;
- do not install or run `ffmpeg`;
- do not download or change model cache;
- stop if `decord` installation asks for broader system changes or fails.

## Proposed Runtime And Video Budget

Use the same small budget as the blocked CPU-only packet:

| Setting | Proposed value |
|---|---|
| sample FPS | `0.25` |
| maximum sampled frames | `4` |
| `min_pixels` | `256 * 28 * 28` |
| `max_pixels` | `512 * 28 * 28` |
| generation max new tokens | `384` |
| timeout | stop before accepting output if the model run exceeds a bounded helper timeout |
| raw response | write only under ignored App `out/` |

If `decord` returns more than the approved frame budget or requires preprocessing, the helper must stop and write a blocked readback.

## Proposed Prompt Boundary

Use the same prompt boundary as the CPU-only short-video packet:

```text
Describe only broad visible changes in the short video.
Do not identify species.
Do not judge environment quality, care, health, suitability, success, failure, improvement, or decline.
Do not make ecological claims.
Do not produce public captions, alt text, species-card copy, chronicle copy, proof language, or timecoded evidence.
Return compact candidate-only JSON with review_required=true, public_use_status=blocked, metadata_write_status=not_approved, canonical_writeback=none, species_claim_status=not_a_species_identification, and timecode_claim_status=not_a_timecoded_evidence_record.
```

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
- `decord` is the selected video backend;
- `torchvision` is not used for video decode;
- `torchcodec` is not installed or used;
- no dependency change occurs except local ignored-venv `decord`;
- no model download/cache change occurs;
- no `ffmpeg`, preprocessing, clip extraction, frame extraction, resizing, transcode, thumbnail, proxy, sidecar, checksum, derivative, or temp media beside source occurs;
- no audio processing occurs;
- no API call or cloud upload occurs;
- no credentials, account, payment method, rented compute, or hosted service is used;
- no Media Library metadata, reviewed state, App runtime behavior, Supabase, Planner, Storage, schema, migration, graph/vector, Web, Content, Research, public, or canonical write occurs;
- generated output is candidate-only and public-use-blocked.

## Required Stop Conditions

Stop immediately and write a blocked readback if:

- `decord` cannot be installed locally into the ignored App venv;
- installing `decord` requires broader system changes;
- installing or using `decord` attempts to install `torchcodec`, CUDA, Torch, Transformers, qwen-vl-utils, or global packages;
- the existing local Qwen3-VL runtime/cache is missing;
- the model cannot run locally/offline from the existing cache;
- the video path triggers model download, model cache change, runtime change, CUDA/GPU use, or backend install beyond `decord`;
- the backend requires `ffmpeg`;
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
2. exact `decord` install command and version installed;
3. exact source file used;
4. exact Python executable and runtime path;
5. exact model/cache path and model revision if available;
6. confirmation CPU-only and CUDA/GPU not used;
7. confirmation selected video backend is `decord`;
8. confirmation `torchcodec`/`ffmpeg` not used;
9. exact video budget settings and sampled frame count;
10. parent-folder before/after side-effect proof;
11. model-cache before/after proof;
12. generated output file list;
13. candidate JSON and Markdown summary if accepted;
14. validation report;
15. confirmation of no model-cache changes;
16. confirmation of no preprocessing, source-folder writes, API/cloud/upload/credentials/account/payment;
17. confirmation of no Media Library/App runtime/Supabase/Planner/Storage/public/canonical writes.

## Not Approved Yet

This packet does not approve:

- App code edits;
- helper implementation;
- dependency install/change;
- `decord` install/use;
- video input;
- model execution;
- GPU/CUDA runtime change;
- GPU/CUDA inference;
- model download/cache change;
- `torchcodec`;
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
Approve Wave 6 Decord backend Qwen3-VL short-video local pilot implementation only: update the App helper `tools/run-oli-wave6-qwen3-vl-short-video-pilot.js` to support a `decord` backend run, install/use only `decord` inside the existing ignored App venv at `out/oli_w6_qwen3_runtime/python-venv`, use existing local/offline `Qwen/Qwen3-VL-2B-Instruct` runtime/cache only, use CPU only with no GPU/CUDA, start only with `TEST_398_02_FIELD_SAMPLING`, ignore audio, use the same bounded video budget from the Company packet, write ignored generated candidate/readback output only under `out/operation_living_intelligence/wave_6_media_visual_ai_readiness/qwen3_vl_short_video_pilot_decord/`, keep output candidate-only/public-use-blocked/noncanonical, verify raw parent folder and model cache unchanged, and perform no model download/cache change, no `torchcodec`, no ffmpeg/preprocessing/frame extraction/clip extraction/resizing/transcoding/source-folder temp files, no API/cloud/upload/credentials/account/payment, no Media Library/App runtime/Supabase/Planner/Storage/schema/public/canonical writes. Stop and write a blocked readback if `decord` cannot install or video cannot run within those exact limits.
```

## Verification

- Read Wave 6 CPU-only short-video blocked readback.
- Read Wave 6 CPU-only short-video implementation approval packet.
- Read Wave 6 video/GPU runtime decision packet.
- Read generated short-video candidate blocked readback JSON.
- Inspected installed `qwen_vl_utils` local video backend code.

No app behavior, database record, Planner record, Storage object, public site behavior, public output, schema, migration, dependency install, model install/download/run, video input, GPU/CUDA runtime change, decoder/backend install/use, API call, media preprocessing, generated annotation expansion, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical source-of-truth record changed.
