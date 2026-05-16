---
id: operation_living_intelligence_wave_6_model_route_decision_packet_2026-05-16
title: Operation Living Intelligence Wave 6 Model Route Decision Packet
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, model-route, visual-ai, nemotron, qwen, twelve-labs, no-write]
status: decision_packet_ready_no_model_execution_approved
---
# Operation Living Intelligence Wave 6 Model Route Decision Packet

## Purpose

This packet decides the next safe model-route posture for Wave 6 after Phase B media stream metadata passed.

This is docs-only. It does not approve model installation, model download, model execution, API/model calls, cloud upload, account setup, API keys, credentials, payment method, media export, clip/frame extraction, thumbnails, proxies, sidecars, caches, checksums, derivatives, generated annotations, Media Library metadata, App runtime behavior, Supabase/Planner/Storage writes, public output, or canonical writeback.

## Current State

Wave 6 has completed:

- docs-only media/visual AI readiness design;
- source/runtime readiness review;
- App docs-only design review;
- Phase A filesystem-only preflight helper;
- Phase B approved `ffprobe` stream metadata readback.

Phase B result:

```text
pass_with_review_required_wave6_phase_b_stream_metadata_ready
```

The exact four task `398` media items are now known enough to make a model-route decision:

| Test item | Media facts | Route implication |
|---|---|---|
| `TEST_398_01_OPAQUE_LAKE_STILL` | Still image, `mjpeg`, `4000x2252`, no audio | Any first route must support high-resolution still-image input or safe resizing later. |
| `TEST_398_02_FIELD_SAMPLING` | Video, `h264`, `3840x2160`, `11.47s`, audio present | Short 4K video; good first video-readiness case. |
| `TEST_398_03_SAMPLE_INTRODUCTION` | Video, `h264`, `3840x2160`, `108.19s`, audio present | Longest input; likely requires clip-window or frame-sampling policy before model execution. |
| `TEST_398_04_MICROCRUSTACEAN_BLOCKING` | Video, `h264`, `3840x2160`, `79.46s`, audio present | ID-sensitive case; Research wording must be ready before any model-derived identification leaves candidate status. |

No model route is currently selected or approved.

## Current Official Route Check

Official/source docs were checked on 2026-05-16 for current route posture:

| Route family | Current relevance |
|---|---|
| NVIDIA Nemotron 3 Nano Omni | NVIDIA positions Nemotron 3 Nano Omni as a multimodal reasoning model for text, image, video, and audio workflows. NVIDIA NIM VLM documentation shows an OpenAI-compatible chat-completions style API pattern for `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`, including video/audio-in-video examples. |
| NVIDIA local/self-hosted NIM or related local deployment | Plausible target for a private/local route, but it still needs exact hardware, storage, runtime, model access, NGC/API-key, cache, input-limit, and license/commercial checks before any implementation. |
| Qwen local fallback/benchmark | Qwen's official Qwen2.5-VL material describes vision-language models with image and video understanding and smaller model sizes such as 3B/7B/72B. This is a practical local/offline fallback candidate if Nemotron is too heavy, unavailable, or key-dependent for the first bounded pilot. |
| Twelve Labs hosted/cloud benchmark | Twelve Labs remains relevant for video understanding/search/analyze/embedding comparisons, but it requires API-key, upload, retention/deletion, usage/cost, and external-index review. It should not be the first Wave 6 route. |

References:

- NVIDIA Nemotron 3 Nano Omni technical blog: `https://developer.nvidia.com/blog/nvidia-nemotron-3-nano-omni-powers-multimodal-agent-reasoning-in-a-single-efficient-open-model`
- NVIDIA NIM VLM Nemotron API example: `https://docs.nvidia.com/nim/vision-language-models/1.7.0/examples/nemotron-3-nano-omni-30b-a3b-reasoning/api.html`
- NVIDIA NeMo Megatron Bridge Nemotron Omni docs: `https://docs.nvidia.com/nemo/megatron-bridge/nightly/models/vlm/nemotron-3-omni.html`
- Qwen2.5-VL official blog/docs: `https://qwenlm.github.io/blog/qwen2.5-vl/`
- Qwen2.5-VL GitHub: `https://github.com/QwenLM/Qwen2.5-VL`
- Twelve Labs docs: `https://docs.twelvelabs.io/`

Implementation-time rule:

```text
Recheck exact docs, model names, terms, limits, hardware, privacy, and costs
immediately before any model install, download, API call, or upload.
```

## Decision

Choose a **local/private-first model-route posture** for the next Wave 6 gate.

Do not run a model yet.

Recommended sequencing:

1. Keep **Nemotron/Codex** as the preferred strategic target route if a local/private or acceptably bounded route is practical.
2. Prepare an App design-review packet for a **local/private model-route feasibility pass**, not a model run.
3. In that packet, ask App to compare two first-run implementation candidates:
   - **Primary target:** Nemotron 3 Nano Omni or the best current Nemotron omni/video-capable deployment, only if route, hardware, input, privacy, license, and cost gates pass.
   - **Fallback/local benchmark:** Qwen2.5-VL small local route, likely `7B` or smaller, if Nemotron is too heavy, unavailable, key-dependent, or slower to make safe.
4. Defer hosted/cloud routes, including NVIDIA hosted API and Twelve Labs, until Josue separately approves account/key/upload/privacy/cost handling.

This keeps the original Nemotron-first direction intact while preventing Wave 6 from getting stuck on a heavy or credential-bound route.

## Options Considered

| Option | Decision | Reason |
|---|---|---|
| Run hosted NVIDIA/Nemotron API next | Defer | Likely fastest technically, but requires key/account/cloud upload or remote media access, privacy/retention review, and cost/terms approval. |
| Self-host/local Nemotron first | Preferred target if feasible | Best alignment with the local/private posture and multimodal goal, but must prove hardware, storage, runtime, access, input limits, and terms before implementation. |
| Local Qwen2.5-VL first-run fallback | Recommended fallback/benchmark | More practical as a bounded local visual pilot if Nemotron cannot be made safe quickly. It should remain fallback/benchmark, not a source-of-truth downgrade. |
| Twelve Labs first | Defer | Strong video platform candidate, but cloud upload, API key, retention, external index, and cost issues make it a later benchmark after a local/private attempt. |
| Skip visual AI for now | Keep as stop option | Valid if implementation friction outweighs near-term usefulness, but Phase B now gives enough metadata to continue planning safely. |

## Why This Does Not Degrade Output Quality

This decision does not lower the quality bar.

It separates **model target quality** from **implementation risk**:

- Nemotron remains the preferred strategic target if it can be used safely.
- Qwen is only a fallback/benchmark if Nemotron is blocked by hardware, access, cost, or privacy friction.
- Twelve Labs remains a later external benchmark if local/private results reveal a specific gap.
- Any model output remains candidate annotation only until Raw Footage, Research, Content, and Company review it.

The quality guardrail is not "trust the first model." The quality guardrail is:

```text
bounded media set + exact provenance + candidate-only output +
blocked public uses + human review + no metadata/writeback by default
```

## App Design-Review Questions

Ask App to review:

- whether a local/private Nemotron route is available on the current machine or needs a different runtime;
- whether the current machine can support any selected local model without destabilizing App work;
- whether a Qwen2.5-VL local fallback is practical for still image plus short/clip-window video candidate annotations;
- whether Phase B metadata implies preprocessing is required before model input;
- whether any preprocessing would require `ffmpeg`, frame sampling, clip extraction, resizing, temporary files, or cache policy;
- whether first-run output should be candidate annotations only, with no Media Library or database write path;
- how to keep model cache, config, credentials, and generated output ignored/local;
- how to prove no raw media parent folder side effects before and after any future model run;
- what validation/readback should prove before Company accepts any output.

## Cross-Domain Impact Map

| Domain | Impact | Next need |
|---|---|---|
| Company | Owns route decision, approval gates, and sequencing. | Keep current decision as recommendation until Josue approves an implementation packet. |
| App | Owns helper/runtime boundary, local output, credentials, cache, validation/readback, and no-write proof. | Review feasibility packet before any implementation. |
| Raw Footage | Owns source media side-effect boundary and no media-folder write posture. | Confirm policy before any preprocessing, model input staging, temporary files, or cache behavior beyond Phase B metadata. |
| Research | Owns organism ID and claim discipline. | Provide wording guardrails before any ID-sensitive output is interpreted. |
| Content | Owns pull-sheet/rough-sequence usefulness and publication separation. | Review candidate annotations only after a model output exists and remains noncanonical. |
| Financials | Owns cost/spend gate. | Review before hosted API, paid plan, payment method, rented compute, or large paid tooling. |
| Web/Brand/Growth | Downstream only. | No public/public-facing use until Research, Content, Brand/Web review later. |

## Recommended Next Gate

Prepare a **Wave 6 App model-route design-review packet**.

That packet should be docs-only and ask App to review local/private model-route feasibility. It should not approve:

- code implementation;
- model install/download/run;
- API/model call;
- cloud upload;
- `ffmpeg` or preprocessing execution;
- generated candidate annotations;
- Media Library/database/App runtime/public/canonical writes.

Suggested approval wording if Josue wants to proceed:

```text
Approve a docs-only Wave 6 App model-route design-review packet. No model install, model download, model run, API call, cloud upload, media preprocessing, generated annotations, App runtime behavior, Media Library metadata, Supabase/Planner/Storage write, public output, or canonical writeback.
```

## Future Implementation Gate

A later implementation proposal must name:

- exact model route and version;
- whether the route is Nemotron local/private, Qwen local fallback, hosted NVIDIA API, Twelve Labs, or another route;
- exact input files/timecodes;
- exact preprocessing, if any;
- exact output path;
- model cache path and deletion/regeneration rules;
- credential/key handling if any;
- privacy/retention rules;
- cost/spend status;
- validation/readback checks;
- stop conditions.

## Stop Conditions

Stop before any future step that would:

- request or store an API key without explicit approval;
- create a paid account, payment method, subscription, usage billing, or rented compute;
- install/download a model or runtime;
- execute a model;
- upload raw media;
- execute `ffmpeg` or create clips, frames, thumbnails, proxies, sidecars, caches, checksums, derivatives, or transcodes;
- write to raw media folders;
- write generated annotations;
- write Media Library metadata or reviewed state;
- write to Supabase, Planner, Storage, graph, vector, App runtime, Web, Content, Research, public surfaces, or canonical records;
- turn candidate species IDs or model descriptions into public claims;
- imply Daphnia establishment, reproduction, clearing, completed food web, or public proof;
- broaden beyond the exact four task `398` items.

## Not Approved

This packet does not approve:

- App code edits;
- model installation;
- model download;
- model execution;
- API/model calls;
- NVIDIA hosted API/NIM setup;
- Hugging Face/model download;
- Qwen install/run;
- Twelve Labs account/API key/upload/index/benchmark;
- cloud upload;
- `ffmpeg` execution;
- media export/transcode/clip/frame/thumbnail/proxy/sidecar/cache/checksum/derivative;
- generated annotations;
- Media Library metadata;
- App runtime behavior;
- Supabase, Planner, Storage, schema, migration, graph, vector, Web, Content, Research, DaVinci, public, or canonical writes;
- public captions, alt text, species-card copy, chronicle copy, sponsor/financial/legal/launch/roadmap commitments.

## Verification

- Read Wave 6 media/visual AI readiness design.
- Read Wave 6 Phase B media stream metadata readback.
- Read Wave 5 vector/embedding decision brief for packet pattern.
- Checked current official/source model route docs on 2026-05-16.

No app behavior, database record, Planner record, Storage object, public site behavior, public output, schema, migration, model install/download/run, API call, media preprocessing, generated annotation, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical source-of-truth record changed.
