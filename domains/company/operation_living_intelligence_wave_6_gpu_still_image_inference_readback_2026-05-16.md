---
id: operation_living_intelligence_wave_6_gpu_still_image_inference_readback_2026-05-16
title: Operation Living Intelligence Wave 6 GPU Still-Image Inference Readback
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, gpu, cuda, qwen3-vl, still-image, inference, readback]
status: pass_with_review_required_wave6_gpu_still_image_candidate_ready
---
# Operation Living Intelligence Wave 6 GPU Still-Image Inference Readback

## Result

Approved implementation completed and passed with review required.

App helper added:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-gpu-still-image-proof.js
```

Generated ignored App output:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\gpu_still_image_proof\
```

Final App readback status:

```text
pass_with_review_required_wave6_gpu_still_image_candidate_ready
```

## Scope

The helper used only:

```text
TEST_398_01_OPAQUE_LAKE_STILL
M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Other Photos & Videos\Biomes\Freshwater Lake\20260408_082108.jpg
```

The helper used only the existing ignored GPU runtime:

```text
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_gpu_runtime\python-venv\
```

The helper used only the existing local Qwen3-VL model cache:

```text
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_model_cache\huggingface\
```

The helper used the accepted prompt-hardened guardrail version:

```text
wave6_qwen3_vl_still_image_candidate_v2_prompt_hardened_no_environment_judgment
```

## Runtime Readback

| Field | Value |
|---|---|
| Model | `Qwen/Qwen3-VL-2B-Instruct` |
| Torch | `2.7.0+cu128` |
| CUDA available | `true` |
| CUDA version | `12.8` |
| GPU device | `NVIDIA GeForce RTX 5060 Ti` |
| Parameter device sample | `cuda:0` |
| Model load elapsed | `2016.33 ms` |
| Generation elapsed | `76587.66 ms` |
| Candidate parse status | `parsed_json` |
| Failed validation checks | `none` |

## Parsed Candidate

```json
{
  "prompt_version": "wave6_qwen3_vl_still_image_candidate_v2_prompt_hardened_no_environment_judgment",
  "plain_description": "A rectangular aquarium with murky, yellowish-green water, containing aquatic plants and a small snail.",
  "candidate_visual_labels": [
    "aquarium",
    "water",
    "plants",
    "snail",
    "aquatic environment",
    "aquatic plant",
    "aquatic life"
  ],
  "confidence_notes": "The snail is small and its species is not clearly identifiable.",
  "species_claim_status": "not_a_species_identification",
  "review_required": true,
  "raw_footage_review_status": "review_required",
  "research_review_status": "review_required",
  "content_review_status": "review_required",
  "public_use_status": "blocked",
  "metadata_write_status": "not_approved",
  "canonical_writeback": "none"
}
```

Interpretation:

- the GPU still-image proof produced the same useful broad candidate shape as the accepted prompt-hardened CPU still-image rerun;
- the candidate remains a visual description, not a species identification;
- the candidate remains review-required, public-use-blocked, metadata-write-not-approved, noncanonical, and canonical-writeback-none;
- the hardened prompt validation passed with no environment-quality judgment terms detected.

## Side-Effect Checks

| Check | Result |
|---|---|
| Raw parent folder unchanged | `true` |
| Raw parent entries before/after | `430 / 430` |
| Existing CPU runtime unchanged | `true` |
| CPU runtime files before/after | `30064 / 30064` |
| Existing model cache unchanged | `true` |
| Model cache files before/after | `18 / 18` |

## Boundary Kept

The helper did not:

- install dependencies;
- change Torch, torchvision, transformers, qwen-vl-utils, accelerate, safetensors, or any package;
- download a model;
- mutate the existing model cache;
- read additional images;
- read video;
- use `decord`, `torchcodec`, `torchaudio`, or `ffmpeg`;
- perform external preprocessing, frame extraction, clip extraction, resizing, transcoding, or source-folder temp file creation;
- create raw-source sidecars, thumbnails, proxies, checksums, or derivatives;
- use API, cloud upload, credentials, account/payment, or paid service;
- change Media Library metadata, App runtime behavior, Supabase, Planner, Storage, schema, public output, or canonical writeback.

## Next Gate

Recommended next gate:

```text
Complete a GPU still-image usefulness/performance review before any GPU short-video approval packet.
```

Do not jump directly to GPU video. The still-image inference now works and preserves guardrails, but generation time, memory behavior, review value, and whether it materially improves the CPU result should be reviewed before adding video complexity.

## Verification

- Ran `node --check tools\run-oli-wave6-gpu-still-image-proof.js`.
- Ran `node tools\run-oli-wave6-gpu-still-image-proof.js`.
- Read App generated `gpu_still_image_readback.md`.
- Read App generated `gpu_still_image_candidate.json`.
- Read App generated `validation_report.json`.

No video input, additional image input, dependency install/change, model download/cache mutation, external preprocessing, source-folder temp files, Media Library metadata, App runtime behavior, Supabase/Planner/Storage/schema write, public output, cloud upload, account/payment, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical writeback changed.
