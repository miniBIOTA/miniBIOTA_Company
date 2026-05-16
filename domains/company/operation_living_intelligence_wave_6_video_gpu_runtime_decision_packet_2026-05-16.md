---
id: operation_living_intelligence_wave_6_video_gpu_runtime_decision_packet_2026-05-16
title: Operation Living Intelligence Wave 6 Video/GPU Runtime Decision Packet
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, video, gpu-runtime, qwen3-vl, raw-footage, app-boundary, docs-only, no-write]
status: video_gpu_runtime_decision_packet_ready_no_video_execution_approved
---
# Operation Living Intelligence Wave 6 Video/GPU Runtime Decision Packet

## Purpose

This packet decides whether Wave 6 is ready to move from the prompt-hardened Qwen3-VL still-image proof into video/GPU runtime work.

This is docs-only. It does not approve or perform video input, GPU/CUDA runtime changes, dependency changes, model reruns, `ffmpeg`, preprocessing, generated annotation expansion, App runtime behavior, Media Library metadata, Supabase/Planner/Storage/schema writes, public output, or canonical writeback.

## Current Proof State

Completed proof:

```text
domains/company/operation_living_intelligence_wave_6_qwen3_vl_prompt_hardened_rerun_readback_2026-05-16.md
```

What it proved:

- `Qwen/Qwen3-VL-2B-Instruct` can run locally for one still image;
- output can be kept under ignored App `out/`;
- prompt hardening removed the earlier environment-quality judgment issue;
- generated output can be parsed as candidate JSON;
- required guardrails can be retained: `review_required`, `public_use_status = blocked`, `metadata_write_status = not_approved`, and `canonical_writeback = none`;
- raw media parent folders can remain unchanged during a bounded still-image run.

What it did not prove:

- video input works locally;
- GPU/CUDA execution works locally;
- video decoder backends are installed and safe;
- 4K video token/frame budgets are safe;
- generated temporal notes will stay factual and non-evaluative;
- App runtime or Media Library integration is appropriate;
- Research, Raw Footage, Content, Web, or public-use acceptance exists.

## Official Runtime Findings

Checked on 2026-05-16:

| Source | Finding | Wave 6 implication |
|---|---|---|
| Hugging Face `Qwen/Qwen3-VL-2B-Instruct` model card | The model card describes Qwen3-VL as supporting image/video understanding and shows local/serving routes including Transformers, vLLM, SGLang, and Docker-based options. It also recommends acceleration/memory-saving attention options for multi-image and video scenarios. | Video is supported as a model family capability, but runtime route and GPU behavior still need App-owned design review before execution. |
| QwenLM/Qwen3-VL GitHub | Official docs describe separate image and video processor budgets, including video token/pixel-budget controls, sample FPS/frame controls, and multiple video decoder backends. It notes backend-specific constraints, including `torchcodec` depending on FFmpeg for decoding. | Video use introduces a new input-budget and decoder-policy surface; it is not just "the still-image helper with a video path." |
| Hugging Face Transformers Qwen3-VL docs | The processor/model API exposes video fields such as `pixel_values_videos` and `video_grid_thw`, and the docs include video feature methods. | Transformers can carry video inputs, but App must decide exact processor call shape, backend, token budget, and validation. |

Official sources used:

```text
https://huggingface.co/Qwen/Qwen3-VL-2B-Instruct
https://github.com/QwenLM/Qwen3-VL
https://huggingface.co/docs/transformers/model_doc/qwen3_vl
```

## Local Media Facts

Phase B metadata is the current source for input sizing:

```text
domains/company/operation_living_intelligence_wave_6_phase_b_media_stream_metadata_readback_2026-05-16.md
```

| Test item | Media facts | Decision |
|---|---|---|
| `TEST_398_01_OPAQUE_LAKE_STILL` | still image, `4000x2252` | Already tested as still image. |
| `TEST_398_02_FIELD_SAMPLING` | `h264 3840x2160`, `11.47s`, audio present | Best first video candidate if video is later approved. |
| `TEST_398_03_SAMPLE_INTRODUCTION` | `h264 3840x2160`, `108.19s`, audio present | Too long for first video step; likely needs clip/window/frame policy. |
| `TEST_398_04_MICROCRUSTACEAN_BLOCKING` | `h264 3840x2160`, `79.46s`, audio present | ID-sensitive; do not use before Research wording and stronger review policy. |

## Local Hardware Facts

The model-route feasibility readback recorded:

```text
domains/company/operation_living_intelligence_wave_6_model_route_feasibility_preflight_readback_2026-05-16.md
```

Relevant local facts:

| Item | Current fact |
|---|---|
| GPU | `NVIDIA GeForce RTX 5060 Ti` |
| VRAM | `16311 MiB` total; `14195 MiB` free at readback |
| CPU | `Intel(R) Core(TM) i5-14600K` |
| RAM | `34116222976` bytes total |
| Current Qwen3-VL still-image runtime | CPU-only |
| Current CUDA proof for Qwen3-VL helper | not proven |

Interpretation:

- the workstation may be plausible for a small local model route;
- the current helper has not proved CUDA execution;
- video adds token budget and decoder concerns on top of model memory;
- GPU/CUDA should be treated as its own approval boundary, not assumed from hardware availability.

## Decision

Do not run video yet.

Wave 6 is ready for a docs-only App video/GPU runtime design-review packet, not for immediate video execution.

Reason:

- the still-image proof is useful and safe enough to continue;
- official Qwen3-VL docs support video, but video needs explicit processor budget, decoder backend, runtime, cache, and validation choices;
- the current run was CPU-only;
- the safest first video candidate is known, but no App-owned video/GPU runtime boundary has been reviewed;
- Raw Footage, Research, and public/canonical boundaries remain unapproved.

## Recommended Next Gate

Prepare a Company-to-App docs-only packet:

```text
Wave 6 Qwen3-VL short-video/GPU runtime App design-review packet
```

That packet should ask App to review only:

- whether `TEST_398_02_FIELD_SAMPLING` can be used as the first short-video candidate;
- whether the helper can use local ignored runtime/cache only;
- whether GPU/CUDA can be attempted without broader system changes;
- whether video decoding can avoid new `ffmpeg`/preprocessing approval, or whether video decoding itself requires a separate approval gate;
- what video processor budget, sample FPS/frame count, and token cap are safe;
- how to preserve raw parent-folder side-effect proof;
- how to keep output candidate-only, review-required, public-use-blocked, metadata-write-not-approved, and canonical-writeback-none;
- when to stop before larger or ID-sensitive videos.

## Smallest Later Implementation, If Approved After App Review

If App accepts the design and Josue later explicitly approves implementation, the smallest implementation should be:

| Boundary | Value |
|---|---|
| Model | `Qwen/Qwen3-VL-2B-Instruct` |
| Input | `TEST_398_02_FIELD_SAMPLING` only |
| Source facts | `h264 3840x2160`, `11.47s`, audio present |
| Runtime | existing ignored local runtime/cache if possible |
| GPU | attempt only if App confirms no broader system change is required |
| Video backend | explicit App-reviewed backend only |
| Preprocessing | none unless separately approved |
| Output | ignored candidate/readback output only |
| Public/canonical status | blocked/none |
| Raw media | parent folder unchanged before/after |

Do not include `TEST_398_03_SAMPLE_INTRODUCTION` or `TEST_398_04_MICROCRUSTACEAN_BLOCKING` in the first video step.

## Stop Conditions

Stop before any step that would:

- run video inference;
- change CUDA/GPU/Python/Torch/Transformers/qwen-vl-utils/runtime dependencies;
- install a video decoder backend;
- use `ffmpeg`, clip extraction, frame extraction, resizing, transcoding, thumbnails, proxies, sidecars, checksums, caches beside source media, or derivatives;
- upload media or call hosted APIs;
- create/use credentials, accounts, payment methods, rented compute, or paid services;
- include `TEST_398_03_SAMPLE_INTRODUCTION` or `TEST_398_04_MICROCRUSTACEAN_BLOCKING`;
- generate annotations beyond ignored candidate/readback output;
- write Media Library metadata, App runtime state, Supabase, Planner, Storage, schema, Web, Content, Research, graph/vector, public, or canonical records;
- treat model output as species ID, Research fact, public caption, alt text, species-card copy, chronicle copy, or proof language.

## Cross-Domain Impact

| Domain | Why implicated | What it needs next |
|---|---|---|
| App | Owns helper code, runtime/dependency choices, local cache/output behavior, and Media Library integration boundaries. | Docs-only review of video/GPU runtime shape before implementation. |
| Raw Footage | Owns source media side-effect policy and file safety. | Confirmation that the first video candidate remains read-only and source folders stay unchanged. |
| Research | Owns species/ID-sensitive interpretation. | No action for first short-video candidate unless the output attempts organism ID; required before `TEST_398_04_MICROCRUSTACEAN_BLOCKING`. |
| Content/Web | Own public language and surfaces. | No action yet; output stays public-use-blocked and noncanonical. |
| Financials | Owns spend and paid-tool approvals. | No action while local-only; required before hosted/cloud/rented compute route. |
| Company | Owns sequencing, approval gates, and cross-domain coordination. | Keep Wave 6 paused before video until App review and explicit implementation approval exist. |

## Not Approved

This packet does not approve:

- App code edits;
- helper implementation;
- video input;
- model rerun;
- GPU/CUDA runtime change;
- dependency install/change;
- model download/cache change;
- video decoder install/use;
- `ffmpeg` or preprocessing;
- generated annotations beyond already approved still-image candidate readback;
- Media Library metadata;
- App runtime behavior;
- Supabase/Planner/Storage/schema/migration/Web writes;
- public output;
- paid service;
- canonical writeback.

## Verification

- Read Wave 6 prompt-hardened still-image readback.
- Read Wave 6 Phase B media stream metadata readback.
- Read Wave 6 model-route feasibility readback.
- Read Wave 6 official route recheck and route-selection packet.
- Checked official Qwen3-VL model card, Qwen3-VL GitHub docs, and Hugging Face Transformers Qwen3-VL docs on 2026-05-16.

No app behavior, database record, Planner record, Storage object, public site behavior, public output, schema, migration, model install/download/run, video input, GPU/CUDA runtime change, dependency change, API call, media preprocessing, generated annotation expansion, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical source-of-truth record changed.
