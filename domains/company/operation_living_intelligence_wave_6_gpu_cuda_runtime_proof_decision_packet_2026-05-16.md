---
id: operation_living_intelligence_wave_6_gpu_cuda_runtime_proof_decision_packet_2026-05-16
title: Operation Living Intelligence Wave 6 GPU/CUDA Runtime Proof Decision Packet
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, gpu, cuda, qwen3-vl, runtime-proof, docs-only, no-write]
status: gpu_cuda_runtime_proof_worth_planning_no_runtime_change_approved
---
# Operation Living Intelligence Wave 6 GPU/CUDA Runtime Proof Decision Packet

## Purpose

This packet decides whether Wave 6 should continue from the approved Decord CPU short-video proof toward a GPU/CUDA runtime proof.

This is docs-only. It does not approve or perform App code edits, model reruns, additional video input, GPU/CUDA runtime changes, CUDA/Torch/package installs, model download/cache changes, `torchcodec`, `ffmpeg`, preprocessing, generated annotation expansion, App runtime behavior, Media Library metadata, Supabase/Planner/Storage/schema writes, public output, paid service, or canonical writeback.

## Current Proof State

Completed local proofs:

```text
domains/company/operation_living_intelligence_wave_6_qwen3_vl_prompt_hardened_rerun_readback_2026-05-16.md
domains/company/operation_living_intelligence_wave_6_cpu_only_short_video_pilot_readback_2026-05-16.md
domains/company/operation_living_intelligence_wave_6_decord_backend_short_video_pilot_readback_2026-05-16.md
domains/company/operation_living_intelligence_wave_6_decord_short_video_usefulness_review_2026-05-16.md
```

What is now proven:

- Qwen3-VL can run locally on CPU for one still image;
- the prompt-hardened still-image output can avoid environment-quality judgment language;
- `torchvision` is not a viable video backend in the current runtime because `torchvision.io.read_video` is unavailable;
- Decord can read the first approved short-video source locally;
- Qwen3-VL can produce parseable candidate JSON from a bounded Decord short-video run;
- the helper can preserve candidate-only, review-required, public-use-blocked, metadata-write-not-approved, and noncanonical output;
- raw media parent folders can remain unchanged;
- model cache can remain unchanged.

What is not proven:

- GPU/CUDA execution inside the helper runtime;
- practical repeated video review speed;
- CUDA package compatibility with the local GPU;
- a safe Torch/CUDA install or alternate runtime path;
- GPU memory behavior for video;
- additional videos, longer videos, or ID-sensitive media;
- generated annotation workflow usefulness;
- Media Library, Research, Raw Footage, Content, or public-use acceptance.

## Runtime Facts

Current local Qwen3-VL runtime fact:

```text
Torch = 2.12.0+cpu
torch_cuda_available = false
device = cpu
```

Local hardware fact from the model-route feasibility readback:

```text
GPU = NVIDIA GeForce RTX 5060 Ti
VRAM = 16311 MiB total, 14195 MiB free at readback
```

CPU video performance from the Decord readback:

```text
112674.74 ms for TEST_398_02_FIELD_SAMPLING sampled to 4 frames
```

Interpretation:

- the workstation hardware may be plausible for local visual-AI acceleration;
- the current Qwen3-VL Python runtime is CPU-only and does not prove CUDA;
- using GPU/CUDA would require a runtime/package boundary decision, not just a command flag;
- CPU-only video is acceptable for a proof but likely too slow for repeated media review.

## Decision

GPU/CUDA runtime proof is worth planning.

GPU/CUDA runtime proof is not approved for implementation yet.

Reason:

- Decord answered the immediate video-backend question;
- CPU video is slow enough that repeated video use probably needs acceleration;
- a local GPU route could materially improve Wave 6 usefulness if it can be isolated and verified safely;
- the current runtime is CPU-only, so any CUDA path could change Torch/runtime dependencies and must be treated as a separate App-owned approval boundary.

## Recommended Next Gate

Prepare a docs-only App design-review packet:

```text
Wave 6 GPU/CUDA runtime proof App design-review packet
```

That packet should ask App to review the safest future proof shape, not execute it.

Questions for App:

| Area | Question |
|---|---|
| Runtime isolation | Should a GPU/CUDA proof use a separate ignored App runtime instead of changing the existing CPU proof runtime? |
| Dependency boundary | What exact Torch/CUDA package path would be required, and can it avoid global/system changes? |
| CUDA availability | Can CUDA be proven without running Qwen3-VL inference first? |
| Model cache | Can the existing model cache be reused read-only without model download/cache mutation? |
| Video input | Should the first GPU proof be no-video/no-model, still-image-only, or the same Decord short-video candidate after runtime proof? |
| Output path | Can all generated runtime/proof output stay under ignored App `out/`? |
| Stop conditions | What must block immediately: driver/toolkit requirement, Torch reinstall risk, model-cache mutation, CUDA package conflict, memory pressure, source-folder side effect, or global environment change? |
| Fallback | If CUDA proof fails, should Decord CPU remain the baseline without further work? |

## Smallest Later Implementation, If Separately Approved

If App accepts the design and Josue later explicitly approves implementation, the smallest implementation should be no-video first:

| Boundary | Recommended first proof |
|---|---|
| Scope | GPU/CUDA runtime availability proof only |
| Runtime | separate ignored App runtime if App recommends it |
| Model | no model run unless separately approved |
| Video | no video input |
| Media | no source media access required |
| Output | ignored App `out/` readback only |
| Writes | no App runtime, Media Library, Supabase, Planner, Storage, schema, public, or canonical writes |

Only after a no-video CUDA/runtime proof passes should a future packet consider a bounded model proof.

If a model proof is later approved, the safest order is:

1. still-image GPU proof using `TEST_398_01_OPAQUE_LAKE_STILL`;
2. Decord short-video GPU proof using `TEST_398_02_FIELD_SAMPLING`;
3. usefulness review before any additional videos.

## Stop Conditions

Stop before any step that would:

- install or change CUDA/Torch/runtime packages without exact approval;
- change global Python, system packages, drivers, or CUDA toolkit;
- mutate the existing CPU proof runtime if App recommends a separate runtime;
- download or change model cache;
- run Qwen3-VL inference;
- access video input;
- install/use `torchcodec`;
- use `ffmpeg` or preprocessing;
- create media derivatives;
- write beside raw media;
- create credentials, accounts, payment methods, rented compute, hosted services, or uploads;
- write Media Library metadata, App runtime state, Supabase, Planner, Storage, schema, Web, Content, Research, public, or canonical records.

## Cross-Domain Impact

| Domain | Why implicated | What it needs next |
|---|---|---|
| Company | Owns Wave 6 sequencing, approval gates, and cross-domain coordination. | Route next step as App docs-only review, not implementation. |
| App | Owns runtime, helper code, local cache/output behavior, and dependency safety. | Review whether a GPU/CUDA proof can be isolated and what exact approval boundary is safe. |
| Raw Footage | Owns source media safety. | No action for no-video runtime proof; required again before any future media input. |
| Research | Owns species/ecological interpretation. | No action for runtime proof; required before ID-sensitive media or Research wording. |
| Content | Owns public/editorial use and pull-sheet workflows. | No action until candidate usefulness is reviewed for Content use. |
| Financials | Owns spend/paid tool/rented compute decisions. | No action while local-only; required before paid GPU/cloud/rented compute. |
| Web | Owns public surfaces. | No action; public output remains blocked. |

## Not Approved

This packet does not approve:

- App code edits;
- helper implementation;
- runtime/package install or change;
- CUDA/Torch package changes;
- driver, system, or global Python changes;
- model run;
- additional video input;
- GPU/CUDA inference;
- model download/cache change;
- `torchcodec`;
- `ffmpeg`;
- preprocessing;
- media export;
- frame extraction;
- clip extraction;
- resizing;
- transcoding;
- generated annotations;
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

- Read Wave 6 Decord short-video usefulness review.
- Read Wave 6 runtime/backend preflight readback.
- Read Wave 6 video/GPU runtime decision packet.
- Read App Wave 6 video/GPU runtime design review.

No App code, model run, dependency change, video input, GPU/CUDA runtime change, `torchcodec`, `ffmpeg`, preprocessing, media export, generated annotation workflow, API/cloud/upload/credential/account/payment setup, Media Library metadata, App runtime behavior, Supabase/Planner/Storage/schema write, public output, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, raw media change, model cache change, or canonical writeback changed.
