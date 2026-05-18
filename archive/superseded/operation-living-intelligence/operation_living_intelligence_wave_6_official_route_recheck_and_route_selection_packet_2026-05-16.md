---
id: operation_living_intelligence_wave_6_official_route_recheck_and_route_selection_packet_2026-05-16
title: Operation Living Intelligence Wave 6 Official Route Recheck And Route Selection Packet
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, model-route, official-route-recheck, route-selection, qwen3-vl, nemotron, no-model-run, no-write]
status: route_selection_packet_ready_no_model_execution_approved
---
# Operation Living Intelligence Wave 6 Official Route Recheck And Route Selection Packet

## Purpose

This packet completes the docs-only official route recheck recommended by the Wave 6 model-route feasibility readback.

It selects the next **proposal route** for a future Wave 6 implementation packet. It does not approve implementation.

No model was installed, downloaded, or run. No API call, cloud upload, credential use, media preprocessing, generated annotation, Media Library metadata write, App runtime change, Supabase/Planner/Storage write, public output, or canonical writeback is approved by this packet.

## Current Local Facts

The approved feasibility helper recorded:

```text
domains/company/operation_living_intelligence_wave_6_model_route_feasibility_preflight_readback_2026-05-16.md
```

Relevant local readiness facts:

| Item | Current fact |
|---|---|
| GPU | `NVIDIA GeForce RTX 5060 Ti` |
| VRAM | `16311 MiB` total; `14195 MiB` free at readback |
| CPU | `Intel(R) Core(TM) i5-14600K` |
| RAM | `34116222976` bytes total |
| Source scope | exact four task `398` files only |
| Raw parent folders | unchanged after helper |

Phase B media facts:

| Test item | Media facts | Route implication |
|---|---|---|
| `TEST_398_01_OPAQUE_LAKE_STILL` | still image, `4000x2252` | route must handle high-resolution still input or later approved resize policy |
| `TEST_398_02_FIELD_SAMPLING` | `h264 3840x2160`, `11.47s`, audio present | best first video candidate if a future run is approved |
| `TEST_398_03_SAMPLE_INTRODUCTION` | `h264 3840x2160`, `108.19s`, audio present | likely needs input-limit, clip-window, or frame-sampling policy |
| `TEST_398_04_MICROCRUSTACEAN_BLOCKING` | `h264 3840x2160`, `79.46s`, audio present | ID-sensitive; Research wording required before interpretation |

## Official Recheck Summary

Checked on 2026-05-16:

| Route | Official/current finding | Wave 6 implication |
|---|---|---|
| NVIDIA Nemotron 3 Nano Omni | NVIDIA positions Nemotron 3 Nano Omni as an open multimodal model for text, image, video, and audio. NVIDIA's NIM VLM docs include the `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` API path, with image/video/audio-in-video request patterns. | Strong strategic target, but current local NIM route is not practical on the 16GB VRAM workstation. |
| NVIDIA NIM local/self-host route | NIM VLM support matrix lists generic requirements for Nemotron 3 Nano Omni at compute capability `>= 9.0`, `>=80` GB total GPU memory, BF16 precision, and about `80` GB disk; the matrix also lists supported input codecs/formats including H264 MP4. | Block local NIM implementation on this workstation unless hardware/runtime changes. |
| NVIDIA hosted/NIM API route | Official NIM examples support OpenAI-compatible request patterns, including `video_url` and audio-in-video options. | Defer because it requires account/key, remote media access or upload, privacy/retention, and cost review. |
| Qwen3-VL local route | Qwen's official Qwen3-VL repo describes current models from edge to cloud, with 2B, 4B, 8B, 30B-A3B, 32B, and 235B-A22B variants. Hugging Face model cards for `Qwen/Qwen3-VL-2B-Instruct` list Apache-2.0 licensing and local/serving options. | Best first practical local/offline pilot candidate if later implementation is approved. |
| Qwen2.5-VL | Still historically valid, but Qwen3-VL is newer and has official 2B/4B/8B release paths. | Replace Qwen2.5-VL as the named fallback with Qwen3-VL unless App later finds a runtime reason to prefer Qwen2.5-VL. |
| Twelve Labs | Official docs describe hosted video understanding models: Marengo for search/embeddings and Pegasus for text analysis. Docs require API keys and upload/index workflows for video tasks; video embedding docs state local file or URL upload, size limits, and retention behavior for embeddings. | Keep as later cloud benchmark only after local/private gap is proven and upload/privacy/cost/deletion approval exists. |

## Sources Checked

| Source | Used for |
|---|---|
| `https://developer.nvidia.com/blog/nvidia-nemotron-3-nano-omni-powers-multimodal-agent-reasoning-in-a-single-efficient-open-model` | Nemotron 3 Nano Omni model posture, modalities, local/cloud deployment options, and open-weight posture |
| `https://docs.nvidia.com/nim/vision-language-models/1.7.0/examples/nemotron-3-nano-omni-30b-a3b-reasoning/api.html` | NIM API route, image/video/audio-in-video request posture |
| `https://docs.nvidia.com/nim/vision-language-models/1.7.0/support-matrix.html` | NIM hardware/disk requirements and video codec/format support |
| `https://github.com/QwenLM/Qwen3-VL` | Current Qwen3-VL release family, model sizes, video understanding claims, and deployment paths |
| `https://huggingface.co/Qwen/Qwen3-VL-2B-Instruct` | Qwen3-VL-2B local model card, Apache-2.0 license, and local serving options |
| `https://huggingface.co/docs/transformers/model_doc/qwen3_vl` | Transformers support for Qwen3-VL image/video inputs |
| `https://docs.twelvelabs.io/docs/video-understanding-models` | Twelve Labs Marengo/Pegasus route families |
| `https://docs.twelvelabs.io/v1.3/api-reference/create-embeddings-v1/video-embeddings/create-video-embedding-task` | Twelve Labs upload/API-key/embedding task constraints |
| `https://docs.twelvelabs.io/api-reference/analyze-videos/analyze` | Twelve Labs Pegasus analysis route, API key, input requirements, and model names |

## Route Selection

Select this route for the **next future implementation proposal**:

```text
First practical local pilot candidate:
Qwen/Qwen3-VL-2B-Instruct, local/offline, ignored-output, no-write.
```

This selection is limited to a future proposal. It does not approve model download, install, runtime setup, inference, preprocessing, annotation output, or App integration.

Recommended route posture:

| Priority | Route | Decision |
|---:|---|---|
| 1 | `Qwen/Qwen3-VL-2B-Instruct` local/offline | Select as the first practical local pilot candidate for a future approval packet. |
| 2 | `Qwen/Qwen3-VL-4B-Instruct` or `Qwen/Qwen3-VL-8B-Instruct` | Keep as upgrade candidates only if App later proves 2B is too weak and hardware/storage/runtime can handle a larger model. |
| 3 | NVIDIA Nemotron 3 Nano Omni local/self-hosted | Retain as preferred strategic quality target, but block current NIM local route on documented hardware requirements. |
| 4 | NVIDIA hosted/NIM API | Defer until account/key/upload/privacy/retention/cost approval. |
| 5 | Twelve Labs Marengo/Pegasus | Defer as later cloud benchmark after local/private output reveals a named gap. |

## Why Qwen3-VL-2B Is The First Practical Route

The current workstation has about 16GB VRAM. NVIDIA's NIM support matrix for Nemotron 3 Nano Omni lists a much larger local NIM GPU-memory floor than the current machine provides. That does not make Nemotron a poor model; it makes the local NIM route the wrong first implementation on this workstation.

Qwen3-VL-2B is the most conservative current local/offline pilot candidate because:

- it is a current official Qwen3-VL model, not the older Qwen2.5 route;
- it has an Apache-2.0 model card;
- it has local Transformers, vLLM, SGLang, and local app route examples;
- it supports the same image/video family of inputs needed for the four-file Wave 6 set;
- it lets App prove the no-write, candidate-only, local-output workflow before higher-quality/heavier routes are introduced.

This is a safety and sequencing choice, not a permanent quality ceiling.

## Quality Guardrail

This route selection does not degrade the required output quality because no model output becomes truth.

Future outputs, if later approved, must remain:

```text
candidate-only + source/timecode-bound + model/prompt-versioned +
review-required + public-use-blocked + metadata-write-not-approved +
canonical-writeback-none
```

Nemotron remains the preferred strategic benchmark for quality once hardware/runtime/credential gates are solved. Twelve Labs remains a later external benchmark if local/private output reveals a specific named gap.

## Future Implementation Proposal Boundary

The next implementation proposal, if Josue continues Wave 6, should be narrow:

| Boundary | Proposed future value |
|---|---|
| Route | `Qwen/Qwen3-VL-2B-Instruct` local/offline |
| First media input | Prefer `TEST_398_01_OPAQUE_LAKE_STILL` and/or `TEST_398_02_FIELD_SAMPLING` only |
| Output path | ignored App `out/operation_living_intelligence/wave_6_media_visual_ai_readiness/qwen3_vl_pilot/` |
| Output status | generated candidate readback only, noncanonical |
| App changes | helper only, if separately approved |
| Database/App runtime | none |
| Public use | blocked |
| Raw media source folders | must remain unchanged |

The future proposal must decide whether it starts with:

1. still-image-only pilot, safest and simplest;
2. short-video pilot using `TEST_398_02_FIELD_SAMPLING`;
3. still image plus short video, only if App confirms preprocessing and runtime boundaries.

## Future App Questions

Ask App to answer before implementation:

- what exact package/runtime path would be used for `Qwen/Qwen3-VL-2B-Instruct`;
- whether download/cache paths can stay local, ignored, and deletable;
- whether 16GB VRAM is enough for still image and short video without destabilizing App work;
- whether the first run can avoid `ffmpeg` and preprocessing;
- if video input requires frame sampling, whether that becomes a separate preprocessing approval gate;
- where generated candidate output and validation reports would live;
- how to prove raw parent folders remain unchanged before and after the run;
- how to keep all output candidate-only, nonpublic, noncanonical, and blocked from Media Library writes.

## Stop Conditions

Stop before any next step that would:

- install or download a model;
- run inference;
- call an API;
- create/use credentials;
- create an account, payment method, rented compute, or paid plan;
- upload private media;
- execute `ffmpeg` or preprocessing;
- create clips, frames, thumbnails, proxies, sidecars, caches beside source media, checksums, derivatives, or transcodes;
- generate annotations;
- write Media Library metadata, App runtime behavior, Supabase, Planner, Storage, schema, graph/vector, Web, Content, Research, public, or canonical records;
- broaden beyond the exact task `398` source set;
- treat any candidate species label as Research fact or public proof.

## Not Approved

This packet does not approve:

- App code edits;
- model installation;
- model download;
- model execution;
- Hugging Face download;
- `transformers`, `vLLM`, `SGLang`, CUDA, Python, Docker, or dependency installation;
- NVIDIA NIM setup;
- API/model calls;
- cloud upload;
- credentials;
- account/payment setup;
- Twelve Labs upload/index/benchmark;
- preprocessing;
- generated annotations;
- Media Library metadata;
- App runtime behavior;
- Supabase/Planner/Storage/schema/migration/Web writes;
- public output;
- canonical writeback.

## Recommended Next Gate

Prepare a future **Wave 6 Qwen3-VL local pilot implementation approval packet** only if Wave 6 continues.

That future packet should name exact files, exact commands, exact model cache path, exact output path, exact validation/readback, exact deletion/regeneration rules, and exact stop conditions. It should still not implement anything until approved.

Suggested future approval wording:

```text
Approve preparation of a Wave 6 Qwen3-VL local pilot implementation approval packet. No model install/download/run, dependency install, API call, cloud upload, preprocessing, generated annotations, App runtime behavior, Media Library metadata, Supabase/Planner/Storage write, public output, or canonical writeback.
```

## Verification

- Read Wave 6 model-route decision packet.
- Read App Wave 6 model-route docs-only review.
- Read Wave 6 model-route feasibility preflight readback.
- Checked current official NVIDIA Nemotron/NIM docs on 2026-05-16.
- Checked current official Qwen/Qwen3-VL docs on 2026-05-16.
- Checked current Twelve Labs model/API docs on 2026-05-16.

No app behavior, database record, Planner record, Storage object, public site behavior, public output, schema, migration, model install/download/run, API call, media preprocessing, generated annotation, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical source-of-truth record changed.
