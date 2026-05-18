---
id: operation_living_intelligence_wave_6_gpu_still_image_inference_approval_packet_2026-05-16
title: Operation Living Intelligence Wave 6 GPU Still-Image Inference Approval Packet
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, gpu, cuda, qwen3-vl, still-image, inference, approval-required]
status: approval_packet_ready_user_approval_required
---
# Operation Living Intelligence Wave 6 GPU Still-Image Inference Approval Packet

## Purpose

This packet defines the next possible Wave 6 implementation gate after the no-media/no-download GPU model-load proof passed.

This packet is docs-only. It does not implement anything.

No App code was changed by this packet. No model was run. No image, video, or raw media was opened. No generated runtime output, App runtime state, Media Library metadata, Supabase/Planner/Storage/schema record, public output, or canonical writeback is approved by creating this packet.

## Prior Gates

Completed GPU proof chain:

```text
GPU/CUDA runtime proof passed
GPU Qwen3-VL stack/import proof completed
GPU torchvision compatibility proof passed
GPU model-load proof passed
```

Latest readback:

```text
domains/company/operation_living_intelligence_wave_6_gpu_model_load_proof_readback_2026-05-16.md
```

Verified model-load result:

| Field | Value |
|---|---|
| GPU runtime | `M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_gpu_runtime\python-venv\` |
| Model cache | `M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_model_cache\huggingface\` |
| Model | `Qwen/Qwen3-VL-2B-Instruct` |
| Torch | `2.7.0+cu128` |
| CUDA | `12.8` |
| GPU | `NVIDIA GeForce RTX 5060 Ti` |
| Processor loaded | `true` |
| Model loaded | `true` |
| Parameter device sample | `cuda:0` |
| Existing CPU runtime unchanged | `true` |
| Existing model cache unchanged | `true` |

What this proves:

```text
The local Qwen3-VL model can load from the existing cache in the isolated GPU runtime.
```

What this does not prove:

```text
The prompt-hardened still-image candidate can run successfully on GPU.
The GPU still-image output matches the accepted public-use-blocked guardrails.
Video inference is practical or approved.
```

## Decision

Recommended next step:

```text
Prepare, and only after explicit approval implement, a GPU still-image inference proof.
```

This is the smallest useful media-inference step after the GPU model-load proof. It uses the already accepted still-image source and the already accepted prompt-hardened guardrails, but moves inference from CPU to the isolated GPU runtime.

Do not proceed directly to short-video GPU inference.

## Exact Proposed Scope

If explicitly approved later, App would add one narrow local helper:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-gpu-still-image-proof.js
```

It would use only the existing ignored GPU runtime:

```text
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_gpu_runtime\python-venv\
```

It would use only the existing local/offline model cache:

```text
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_model_cache\huggingface\
```

It would use exactly one source image:

```text
TEST_398_01_OPAQUE_LAKE_STILL
M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Other Photos & Videos\Biomes\Freshwater Lake\20260408_082108.jpg
```

It would write ignored generated output only under:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\gpu_still_image_proof\
```

Proposed generated files:

```text
gpu_still_image_manifest.json
gpu_still_image_candidate.json
gpu_still_image_readback.md
validation_report.json
```

## Prompt Boundary

The future helper must use the accepted prompt-hardened guardrail posture from the CPU still-image rerun:

```text
prompt_version = wave6_qwen3_vl_still_image_candidate_v2_prompt_hardened_no_environment_judgment
```

Candidate output must remain:

- candidate-only;
- review-required;
- public-use-blocked;
- metadata-write-not-approved;
- noncanonical;
- canonical-writeback-none;
- not a species identification;
- not ecological proof;
- not public copy.

The future helper must reject or mark blocked any output that introduces:

- species certainty;
- ecological claims;
- environment-quality judgments;
- care-quality judgments;
- health/suitability judgments;
- cause/effect claims;
- public captions, species-card copy, chronicle copy, or proof language.

## Required Runtime Boundary

The future helper may:

1. snapshot the approved still-image parent folder before and after the run;
2. snapshot the existing model cache before and after the run;
3. set `HF_HUB_OFFLINE=1`, `TRANSFORMERS_OFFLINE=1`, and `local_files_only=True`;
4. load the existing local Qwen3-VL processor and model from cache;
5. run one still-image prompt against `TEST_398_01_OPAQUE_LAKE_STILL`;
6. generate one candidate JSON readback;
7. validate prompt-version and public/canonical guardrails;
8. clear GPU cache after the run if the helper can do so inside Python.

The future helper must not:

- install dependencies;
- download a model;
- mutate the model cache;
- change Torch, torchvision, transformers, qwen-vl-utils, accelerate, safetensors, or any package;
- read any other image;
- read any video;
- use `decord`, `torchcodec`, `torchaudio`, or `ffmpeg`;
- preprocess, resize, transcode, clip, or extract frames;
- create source-folder temp files, sidecars, thumbnails, proxies, or checksums;
- use API/cloud/upload/credentials/account/payment;
- change Media Library metadata or reviewed state;
- change App runtime behavior;
- write Supabase, Planner, Storage, schema, public, or canonical records.

## Required Validation

The future helper must validate:

- output path is under ignored App `out/`;
- generated output path is ignored by App `.gitignore`;
- exact one still-image source scope;
- raw parent folder unchanged before/after;
- existing model cache unchanged before/after;
- existing CPU runtime unchanged before/after;
- GPU runtime path is the existing ignored App GPU runtime;
- offline/cache-only flags are set;
- model load uses `local_files_only=True`;
- `torch.cuda.is_available()` is true;
- model parameters are on `cuda:0` or the helper records a blocked readback if not;
- one candidate JSON is produced only if all guardrails pass;
- candidate has `public_use_status = blocked`;
- candidate has `metadata_write_status = not_approved`;
- candidate has `canonical_writeback = none`;
- candidate has `review_required = true`;
- no video, preprocessing, Media Library, App runtime, database, public, or canonical write occurs.

## Required Stop Conditions

Stop immediately and write a blocked readback if:

- the approved still-image file is missing;
- the GPU runtime is missing;
- the model cache is missing;
- offline/cache-only model load fails;
- the model attempts network access or cache mutation;
- CUDA is unavailable;
- GPU memory cannot run the still-image inference;
- the helper needs package install/change;
- the helper needs preprocessing, resizing, frame extraction, clip extraction, transcoding, or source-folder temp files;
- the candidate output cannot be parsed as JSON after the approved prompt shape;
- the candidate output fails public/canonical/metadata guardrails;
- raw parent folder, existing CPU runtime, or model cache snapshots change unexpectedly;
- the helper would write outside ignored App `out/`;
- the helper would touch App runtime behavior, Media Library metadata, Supabase, Planner, Storage, schema, public output, or canonical writeback.

## Expected Readback If Approved

The future readback must include:

1. exact command run;
2. exact source item and source path;
3. exact output directory;
4. exact GPU runtime path;
5. exact model cache path;
6. model, Torch, CUDA, and GPU device readback;
7. offline/cache-only flags;
8. prompt version;
9. parsed candidate JSON;
10. raw model response if parsing fails or review requires it;
11. guardrail validation results;
12. raw parent folder before/after unchanged proof;
13. model cache before/after unchanged proof;
14. CPU runtime before/after unchanged proof;
15. confirmation of no video, no dependency install, no model download/cache mutation, no preprocessing, no Media Library/App runtime/Supabase/Planner/Storage/schema/public/canonical write.

## Not Approved Yet

This packet does not approve:

- App code edits;
- helper implementation;
- image inference;
- model run;
- generated candidate output;
- video input;
- additional image input;
- dependency install/change;
- model download/cache mutation;
- preprocessing;
- `ffmpeg`;
- `decord`;
- `torchcodec`;
- Media Library metadata or reviewed-state writes;
- App runtime behavior;
- Supabase writes;
- Planner writes;
- Storage writes;
- schema or migration work;
- public output;
- paid services;
- cloud/API/upload/credential/account/payment use;
- canonical writeback.

## Suggested Approval Wording

Use this only if Josue wants to proceed:

```text
Approve Wave 6 GPU still-image inference proof implementation only: add an App helper at `tools/run-oli-wave6-gpu-still-image-proof.js`, use only the existing ignored App GPU runtime at `out/oli_w6_qwen3_gpu_runtime/python-venv`, use only the existing local/offline `Qwen/Qwen3-VL-2B-Instruct` model cache under `out/oli_w6_qwen3_model_cache/huggingface`, set Hugging Face/Transformers offline flags and `local_files_only=True`, use only `TEST_398_01_OPAQUE_LAKE_STILL` at `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Other Photos & Videos\Biomes\Freshwater Lake\20260408_082108.jpg`, use the accepted prompt version `wave6_qwen3_vl_still_image_candidate_v2_prompt_hardened_no_environment_judgment`, write ignored generated candidate/readback output only under `out/operation_living_intelligence/wave_6_media_visual_ai_readiness/gpu_still_image_proof/`, keep output candidate-only/review-required/public-use-blocked/metadata-write-not-approved/noncanonical/canonical-writeback-none, verify raw parent folder, existing CPU runtime, and model cache unchanged, and perform no dependency install/change, no model download/cache mutation, no additional image/video/raw-media input, no video, no `decord`/`torchcodec`/`torchaudio`/`ffmpeg`, no preprocessing/frame extraction/clip extraction/resizing/transcoding/source-folder temp files, no API/cloud/upload/credentials/account/payment, no Media Library/App runtime/Supabase/Planner/Storage/schema/public/canonical writes. Stop and write a blocked readback if the proof cannot run within those exact limits.
```

## Verification

- Read the Wave 6 GPU model-load proof readback.
- Read the Wave 6 prompt-hardened still-image rerun readback.
- Read the Wave 6 deferred return map.
- Reviewed the prior Wave 6 approval packet pattern.

No App code, package install, model run, model download, model cache mutation, image input, video input, raw media access, GPU inference, `ffmpeg`, preprocessing, generated annotation workflow, API/cloud/upload/credential/account/payment setup, Media Library metadata, App runtime behavior, Supabase/Planner/Storage/schema write, public output, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, raw media change, or canonical writeback changed.
