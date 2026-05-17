---
id: operation_living_intelligence_wave_6_gpu_short_video_proof_readback_2026-05-16
title: Operation Living Intelligence Wave 6 GPU Short-Video Proof Readback
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, qwen3-vl, gpu, cuda, short-video, readback]
status: pass_with_review_required_wave6_gpu_short_video_candidate_ready
---
# Operation Living Intelligence Wave 6 GPU Short-Video Proof Readback

## Result

Approved implementation completed and passed with review required.

App helper added:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-gpu-short-video-proof.js
```

Generated ignored App output:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\gpu_short_video_proof\
```

Final App readback status:

```text
pass_with_review_required_wave6_gpu_short_video_candidate_ready
```

## Scope

The helper used only:

```text
TEST_398_02_FIELD_SAMPLING
M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026\20260408_112606.mp4
```

Known source facts from prior Phase B readback:

```text
h264 3840x2160, 11.47s, audio present
```

Audio was ignored.

The helper used only the existing ignored GPU runtime:

```text
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_gpu_runtime\python-venv\
```

The helper used only the existing local Qwen3-VL model cache:

```text
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_model_cache\huggingface\
```

The helper used prompt-hardened short-video guardrails:

```text
wave6_qwen3_vl_gpu_short_video_candidate_v1_no_environment_judgment
```

Video budget:

| Field | Value |
|---|---:|
| FPS | `0.25` |
| Max frames | `4` |
| Min pixels | `200704` |
| Max pixels | `401408` |
| Max new tokens | `384` |

## Runtime Readback

| Field | Value |
|---|---|
| Model | `Qwen/Qwen3-VL-2B-Instruct` |
| Torch | `2.7.0+cu128` |
| CUDA available | `true` |
| CUDA version | `12.8` |
| GPU device | `NVIDIA GeForce RTX 5060 Ti` |
| Torchvision | `0.22.0+cu128` |
| Decord in GPU runtime | `false` |
| Torchcodec | `false` |
| Torchaudio | `false` |
| Parameter device sample | `cuda:0` |
| Model load elapsed | `2054.06 ms` |
| Video processing completed | `true` |
| Sampled frame count | `4` |
| Generation elapsed | `13215.86 ms` |
| Total validation elapsed | `181311.06 ms` |
| Candidate parse status | `parsed_json` |
| Failed validation checks | `none` |

Interpretation:

- the existing GPU runtime and existing Qwen3-VL stack can process the first bounded short-video proof;
- no new video backend was installed into the GPU runtime;
- the output remained candidate-only and review-required;
- runtime is much better at generation than the earlier CPU video run, but total wall time still needs review before any repeated use is assumed.

## Parsed Candidate

```json
{
  "prompt_version": "wave6_qwen3_vl_gpu_short_video_candidate_v1_no_environment_judgment",
  "source_item_id": "TEST_398_02_FIELD_SAMPLING",
  "model_route": "qwen3_vl_local_gpu_short_video",
  "model_name": "Qwen/Qwen3-VL-2B-Instruct",
  "plain_sequence_description": "A hand holds a jar of murky water with visible sediment and debris, with a background of lush green aquatic plants.",
  "candidate_visual_labels": [
    "water sample",
    "hand",
    "jar",
    "aquatic plants"
  ],
  "temporal_observations": [
    "a hand holding a jar of water",
    "the jar is filled with murky water"
  ],
  "confidence_notes": "The visual evidence is consistent with a water sample, but the species identification is not possible.",
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

- the candidate remains a broad visual sequence description, not a species identification;
- the candidate is not a timecoded evidence record;
- `murky water`, `visible sediment`, and `debris` are review-required visual wording only, not Research fact, water-quality judgment, animal-care judgment, public copy, Media Library metadata, or canonical text;
- public use remains blocked;
- metadata write remains not approved;
- canonical writeback remains none.

## Side-Effect Checks

| Check | Result |
|---|---|
| Raw parent folder unchanged | `true` |
| Raw parent entries before/after | `967 / 967` |
| Existing CPU runtime unchanged | `true` |
| CPU runtime files before/after | `30064 / 30064` |
| Existing model cache unchanged | `true` |
| Model cache files before/after | `18 / 18` |

## Boundary Kept

The helper did not:

- install dependencies;
- install `decord` into the GPU runtime;
- install or use `torchcodec`, `torchaudio`, or `ffmpeg`;
- change Torch, torchvision, transformers, qwen-vl-utils, accelerate, safetensors, or any package;
- download a model;
- mutate the existing model cache;
- read additional videos;
- read additional images;
- perform external preprocessing, frame extraction, clip extraction, resizing, transcoding, or source-folder temp file creation;
- create raw-source sidecars, thumbnails, proxies, checksums, derivatives, or temp media beside source files;
- use API, cloud upload, credentials, account/payment, or paid service;
- change Media Library metadata, App runtime behavior, Supabase, Planner, Storage, schema, public output, or canonical writeback.

## Next Gate

Recommended next gate:

```text
Complete a GPU short-video usefulness/performance review before any additional video input, annotation workflow, Media Library integration, public use, or canonical writeback.
```

Do not jump directly to more video. The GPU short-video proof now works and preserves guardrails, but candidate language, total elapsed time, repeated-use practicality, and domain-review value should be reviewed before any expansion.

## Verification

- Ran `node --check tools\run-oli-wave6-gpu-short-video-proof.js`.
- Ran `node tools\run-oli-wave6-gpu-short-video-proof.js`.
- Read App generated `gpu_short_video_readback.md`.
- Read App generated `gpu_short_video_candidate.json`.
- Read App generated `validation_report.json`.
- Read App generated `gpu_short_video_manifest.json`.

No dependency install/change, model download/cache mutation, additional video input, additional image input, external preprocessing, source-folder temp files, Media Library metadata, App runtime behavior, Supabase/Planner/Storage/schema write, public output, cloud upload, account/payment, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical writeback changed.
