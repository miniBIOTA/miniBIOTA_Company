---
id: operation_living_intelligence_wave_6_gpu_short_video_implementation_approval_packet_2026-05-16
title: Operation Living Intelligence Wave 6 GPU Short-Video Implementation Approval Packet
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, qwen3-vl, gpu, cuda, short-video, approval-required]
status: approval_packet_ready_user_approval_required
---
# Operation Living Intelligence Wave 6 GPU Short-Video Implementation Approval Packet

## Purpose

This packet defines the next possible Wave 6 implementation gate after the GPU still-image usefulness/performance review.

This packet is docs-only. It does not implement anything.

No App code was changed by this packet. No model was run. No video, image, or raw media was opened. No generated runtime output, App runtime state, Media Library metadata, Supabase/Planner/Storage/schema record, public output, or canonical writeback is approved by creating this packet.

## Prior Gates

Completed relevant proof chain:

```text
CPU Decord short-video proof passed for TEST_398_02_FIELD_SAMPLING
GPU/CUDA runtime proof passed
GPU Qwen3-VL stack/import proof completed
GPU torchvision compatibility proof passed
GPU model-load proof passed
GPU still-image inference proof passed
GPU still-image usefulness/performance review completed
```

Latest review:

```text
domains/company/operation_living_intelligence_wave_6_gpu_still_image_usefulness_performance_review_2026-05-16.md
```

Decision from that review:

```text
GPU still-image is useful for local visual-AI readiness, but it does not approve GPU video execution.
Prepare a docs-only GPU short-video implementation approval packet before any helper or video run.
```

## Why This Gate Is Narrow

Wave 6 has already proven two separate things:

- CPU Decord can read the first selected short video and produce candidate-only Qwen3-VL JSON.
- The isolated GPU runtime can load and run Qwen3-VL against one still image.

It has not proven:

- GPU short-video inference works;
- GPU short-video inference is faster or stable enough to repeat;
- video candidate language is safe enough for Media Library metadata, public use, Research evidence, or Content copy;
- any additional video scope is justified.

Therefore, the only reasonable implementation proposal is one bounded GPU short-video proof, not an annotation workflow, not a batch pipeline, and not Media Library integration.

## Exact Proposed Scope

If explicitly approved later, App may update or add one narrow local helper path:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-gpu-short-video-proof.js
```

Preferred helper posture:

```text
new helper preferred over modifying the accepted CPU/Decord helper
```

The helper may use only the existing ignored GPU runtime:

```text
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_gpu_runtime\python-venv\
```

The helper may use only the existing local/offline model cache:

```text
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_model_cache\huggingface\
```

It may use exactly one source video:

```text
TEST_398_02_FIELD_SAMPLING
M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026\20260408_112606.mp4
```

Known source facts from prior readback:

```text
h264 3840x2160, 11.47s, audio present
```

Audio must be ignored.

The future helper may write ignored generated output only under:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\gpu_short_video_proof\
```

Suggested generated files:

```text
gpu_short_video_manifest.json
gpu_short_video_candidate.json
gpu_short_video_readback.md
validation_report.json
```

## Runtime And Backend Boundary

The future helper may use:

- existing isolated GPU runtime;
- existing local/offline Qwen3-VL model cache;
- existing Qwen3-VL Python stack already present in the GPU runtime;
- existing `torch 2.7.0+cu128`;
- existing `torchvision 0.22.0+cu128`;
- Qwen processor/model video handling if it can run within the existing stack without new dependency installation or external preprocessing.

The future helper must not install or use new dependencies by default.

Specifically, this packet does not approve:

- installing `decord` into the GPU runtime;
- installing or using `torchcodec`;
- installing or using `torchaudio`;
- installing or using `ffmpeg`;
- installing or changing Torch, torchvision, transformers, qwen-vl-utils, accelerate, safetensors, or any other package;
- mutating the accepted CPU runtime;
- mutating the model cache.

If the helper cannot process the video using only the existing GPU runtime stack, it must stop and write a blocked readback. It must not fall back to package installation, CPU Decord, `ffmpeg`, frame extraction, resizing, transcoding, or source-folder temp files.

## Prompt Boundary

The future helper must use a prompt-hardened short-video candidate posture equivalent to the accepted still-image hardening.

Candidate output must remain:

- candidate-only;
- review-required;
- public-use-blocked;
- metadata-write-not-approved;
- noncanonical;
- canonical-writeback-none;
- not a species identification;
- not a timecoded evidence record;
- not ecological proof;
- not public copy.

The helper must reject or mark blocked any output that introduces:

- species certainty;
- timecoded proof claims;
- ecological claims;
- water-quality judgments;
- environment-quality judgments;
- care-quality judgments;
- health/suitability judgments;
- cause/effect claims;
- public captions, species-card copy, chronicle copy, or proof language.

Preferred wording should describe visible non-evaluative features only.

## Required Runtime Boundary

The future helper may:

1. snapshot the approved video parent folder before and after the run;
2. snapshot the existing model cache before and after the run;
3. snapshot the accepted CPU runtime before and after the run;
4. set `HF_HUB_OFFLINE=1`, `TRANSFORMERS_OFFLINE=1`, and `local_files_only=True`;
5. load the existing local Qwen3-VL processor and model from cache;
6. run one bounded short-video prompt against `TEST_398_02_FIELD_SAMPLING`;
7. ignore audio;
8. generate one candidate JSON readback;
9. validate prompt-version and public/canonical guardrails;
10. clear GPU cache after the run if the helper can do so inside Python.

The future helper must not:

- install dependencies;
- download a model;
- mutate the model cache;
- change Torch, torchvision, transformers, qwen-vl-utils, accelerate, safetensors, or any package;
- read any other video;
- read any additional image;
- use `decord`, `torchcodec`, `torchaudio`, or `ffmpeg`;
- preprocess, resize, transcode, clip, or extract frames;
- create source-folder temp files, sidecars, thumbnails, proxies, checksums, media derivatives, or temp media beside source files;
- use API/cloud/upload/credentials/account/payment;
- change Media Library metadata or reviewed state;
- change App runtime behavior;
- write Supabase, Planner, Storage, schema, public, or canonical records.

## Required Validation

The future helper must validate:

- output path is under ignored App `out/`;
- generated output path is ignored by App `.gitignore`;
- exact one short-video source scope;
- raw parent folder unchanged before/after;
- existing model cache unchanged before/after;
- existing CPU runtime unchanged before/after;
- GPU runtime path is the existing ignored App GPU runtime;
- offline/cache-only flags are set;
- model load uses `local_files_only=True`;
- `torch.cuda.is_available()` is true;
- model parameters are on `cuda:0` or the helper records a blocked readback if not;
- audio is ignored;
- one candidate JSON is produced only if all guardrails pass;
- candidate has `public_use_status = blocked`;
- candidate has `metadata_write_status = not_approved`;
- candidate has `canonical_writeback = none`;
- candidate has `review_required = true`;
- candidate has `species_claim_status = not_a_species_identification`;
- candidate has `timecode_claim_status = not_a_timecoded_evidence_record`;
- no preprocessing, Media Library, App runtime, database, public, or canonical write occurs.

## Required Stop Conditions

Stop immediately and write a blocked readback if:

- the approved short-video file is missing;
- the GPU runtime is missing;
- the model cache is missing;
- offline/cache-only model load fails;
- the model attempts network access or cache mutation;
- CUDA is unavailable;
- GPU memory cannot run the short-video proof;
- the helper needs package install/change;
- the helper needs `decord`, `torchcodec`, `torchaudio`, `ffmpeg`, preprocessing, resizing, frame extraction, clip extraction, transcoding, source-folder temp files, or media derivatives;
- the helper would need to write any temp file beside source media;
- the candidate output cannot be parsed as JSON after the approved prompt shape;
- the candidate output fails public/canonical/metadata/species/timecode guardrails;
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
9. video input scope and audio-ignored confirmation;
10. parsed candidate JSON;
11. raw model response if parsing fails or review requires it;
12. guardrail validation results;
13. raw parent folder before/after unchanged proof;
14. model cache before/after unchanged proof;
15. accepted CPU runtime before/after unchanged proof;
16. confirmation of no dependency install/change, no model download/cache mutation, no preprocessing, no Media Library/App runtime/Supabase/Planner/Storage/schema/public/canonical write.

## Not Approved Yet

This packet does not approve:

- App code edits;
- helper implementation;
- video inference;
- model run;
- generated candidate output;
- additional video input;
- additional image input;
- dependency install/change;
- model download/cache mutation;
- preprocessing;
- `ffmpeg`;
- `decord` in the GPU runtime;
- `torchcodec`;
- `torchaudio`;
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
Approve Wave 6 GPU short-video proof implementation only: add an App helper at `tools/run-oli-wave6-gpu-short-video-proof.js`, use only the existing ignored App GPU runtime at `out/oli_w6_qwen3_gpu_runtime/python-venv`, use only the existing local/offline `Qwen/Qwen3-VL-2B-Instruct` model cache under `out/oli_w6_qwen3_model_cache/huggingface`, set Hugging Face/Transformers offline flags and `local_files_only=True`, use only `TEST_398_02_FIELD_SAMPLING` at `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026\20260408_112606.mp4`, ignore audio, use prompt-hardened short-video guardrails, write ignored generated candidate/readback output only under `out/operation_living_intelligence/wave_6_media_visual_ai_readiness/gpu_short_video_proof/`, keep output candidate-only/review-required/public-use-blocked/metadata-write-not-approved/noncanonical/canonical-writeback-none/not-a-species-identification/not-a-timecoded-evidence-record, verify raw parent folder, existing CPU runtime, and model cache unchanged, and perform no dependency install/change, no model download/cache mutation, no additional image/video/raw-media input, no `decord` in the GPU runtime, no `torchcodec`/`torchaudio`/`ffmpeg`, no preprocessing/frame extraction/clip extraction/resizing/transcoding/source-folder temp files, no API/cloud/upload/credentials/account/payment, no Media Library/App runtime/Supabase/Planner/Storage/schema/public/canonical writes. Stop and write a blocked readback if the proof cannot run within those exact limits.
```

## Verification

- Read the Wave 6 GPU still-image usefulness/performance review.
- Read the Wave 6 Decord backend short-video pilot readback.
- Read the Wave 6 GPU still-image inference readback.
- Reviewed the prior Wave 6 approval packet pattern.

No App code, package install, model run, model download, model cache mutation, video input, image input, raw media access, GPU video inference, `ffmpeg`, preprocessing, generated annotation workflow, API/cloud/upload/credential/account/payment setup, Media Library metadata, App runtime behavior, Supabase/Planner/Storage/schema write, public output, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, raw media change, or canonical writeback changed.
