---
id: operation_living_intelligence_wave_6_video_gpu_runtime_app_design_review_packet_2026-05-16
title: Operation Living Intelligence Wave 6 Video/GPU Runtime App Design Review Packet
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, app-review-packet, video, gpu-runtime, qwen3-vl, no-write, no-execution]
status: app_design_review_packet_ready_no_video_execution_approved
---
# Operation Living Intelligence Wave 6 Video/GPU Runtime App Design Review Packet

## Purpose

This packet asks App for a docs-only review of the next possible Wave 6 step: a local Qwen3-VL short-video/GPU runtime pilot.

It does not approve implementation.

No App code, video input, model rerun, GPU/CUDA runtime change, dependency change, video decoder install/use, `ffmpeg`, preprocessing, generated annotation expansion, Media Library metadata, App runtime behavior, Supabase/Planner/Storage/schema write, public output, or canonical writeback is approved.

## Company Decision Context

Company completed the video/GPU runtime decision packet:

```text
domains/company/operation_living_intelligence_wave_6_video_gpu_runtime_decision_packet_2026-05-16.md
```

Decision:

```text
Do not run video yet.
Ask App for docs-only short-video/GPU runtime review first.
```

Reason:

- the prompt-hardened still-image rerun passed, but it was CPU-only;
- official Qwen3-VL docs support video, but video introduces processor-budget, sample-frame/FPS, decoder/backend, and memory decisions;
- Raw Footage side-effect proof must be preserved;
- output must remain candidate-only, review-required, public-use-blocked, metadata-write-not-approved, and canonical-writeback-none.

## Review Scope For App

Please review whether a future implementation packet could safely target:

```text
Model: Qwen/Qwen3-VL-2B-Instruct
Input: TEST_398_02_FIELD_SAMPLING only
Mode: local/offline short-video candidate readback
Output: ignored App out/ only
Status: candidate-only / public-use-blocked / noncanonical
```

Input facts:

| Field | Value |
|---|---|
| Test item | `TEST_398_02_FIELD_SAMPLING` |
| Source path family | Raw Footage task `398` media set |
| Format | `h264 3840x2160` |
| Duration | `11.47s` |
| Audio | present |
| Why selected | shortest video in the bounded Wave 6 set |

Do not include:

- `TEST_398_03_SAMPLE_INTRODUCTION`;
- `TEST_398_04_MICROCRUSTACEAN_BLOCKING`;
- any media outside task `398`;
- any public/canonical write surface.

## Questions For App

| Review area | Question |
|---|---|
| Runtime | Can the existing ignored local runtime/cache be reused, or would video require dependency/runtime changes? |
| GPU/CUDA | Can GPU/CUDA be attempted without broader system changes? If not, should first video remain CPU-only or pause? |
| Video backend | Which backend would Qwen3-VL use for local video input, and would that require `torchcodec`, `decord`, `torchvision`, `ffmpeg`, or another decoder dependency? |
| Preprocessing | Can the first video run avoid explicit preprocessing, clip extraction, frame extraction, resizing, or transcode? |
| Token/frame budget | What `fps`, frame count, `min_pixels`, `max_pixels`, token budget, and generation token cap should be used for the 11.47s 4K source? |
| Audio | Should audio be ignored for this first video gate? If not, what new boundary would audio introduce? |
| Output shape | Can the still-image candidate JSON schema be reused with video-specific fields such as `visible_sequence_summary`, `temporal_observations`, and `timecode_claim_status`? |
| Guardrails | How should the helper validate no species certainty, no environment/care/health judgment, no ecological claim, no public copy, and no canonical writeback? |
| Raw Footage | How will the helper prove the raw parent folder stayed unchanged before/after the run? |
| Cache/deletion | Where would any video runtime cache live, and can it remain under ignored App `out/`? |
| Stop conditions | What exact failure or resource signals should block the run before generated output is accepted? |

## Proposed Candidate Output Contract

If a future implementation is later approved, App should evaluate whether output can stay in this shape:

```json
{
  "prompt_version": "wave6_qwen3_vl_short_video_candidate_v1_no_environment_judgment",
  "source_item_id": "TEST_398_02_FIELD_SAMPLING",
  "plain_sequence_description": "short visible-feature summary only",
  "candidate_visual_labels": [],
  "temporal_observations": [],
  "confidence_notes": "ambiguity only",
  "species_claim_status": "not_a_species_identification",
  "timecode_claim_status": "not_a_timecoded_evidence_record",
  "review_required": true,
  "public_use_status": "blocked",
  "metadata_write_status": "not_approved",
  "canonical_writeback": "none"
}
```

No field should become:

- Research evidence;
- Media Library metadata;
- public caption or alt text;
- species-card copy;
- chronicle copy;
- canonical source-of-truth text.

## Required Stop Conditions

App should reject implementation or require a new Company packet if video would require:

- broad Python/CUDA/Torch changes outside the ignored local runtime;
- system-level package changes;
- video decoder install/use that cannot be named and contained;
- `ffmpeg` or preprocessing;
- clip/frame/thumbnail/proxy/sidecar/cache/checksum/derivative creation beside source media;
- raw media source-folder writes;
- hosted API/cloud upload;
- credentials, accounts, payment methods, rented compute, or paid services;
- more than `TEST_398_02_FIELD_SAMPLING`;
- Research interpretation or ID-sensitive media;
- App runtime behavior or Media Library writes;
- public/canonical output.

## App Review Deliverable

Requested App docs-only deliverable:

```text
M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-video-gpu-runtime-design-review.md
```

The review should return one of:

| Status | Meaning |
|---|---|
| `app_review_accepts_short_video_gpu_design_with_conditions` | App can define a later narrow implementation packet. |
| `app_review_accepts_cpu_only_short_video_design_with_conditions` | App recommends first video stay CPU-only. |
| `app_review_blocks_video_until_runtime_changes_are_approved` | App finds video needs runtime/dependency/backend changes that require a separate approval gate. |
| `app_review_blocks_video_until_preprocessing_policy_exists` | App finds preprocessing/frame sampling is unavoidable and must be reviewed first. |

## Not Approved

This packet does not approve:

- App code edits;
- helper implementation;
- video input;
- GPU/CUDA runtime change;
- dependency install/change;
- decoder/backend install/use;
- model download/cache change;
- model execution;
- `ffmpeg` or preprocessing;
- generated annotation output;
- Media Library metadata;
- App runtime behavior;
- Supabase/Planner/Storage/schema/migration/Web writes;
- public output;
- paid service;
- canonical writeback.

## Verification

- Read Wave 6 video/GPU runtime decision packet.
- Read Wave 6 prompt-hardened still-image rerun readback.
- Read Wave 6 Phase B media stream metadata readback.
- Read official Qwen3-VL docs used in the decision packet.

No app behavior, database record, Planner record, Storage object, public site behavior, public output, schema, migration, model install/download/run, video input, GPU/CUDA runtime change, dependency change, decoder/backend install/use, API call, media preprocessing, generated annotation expansion, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical source-of-truth record changed.
