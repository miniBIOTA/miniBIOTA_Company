---
id: operation_living_intelligence_wave_6_model_route_app_design_review_packet_2026-05-16
title: Operation Living Intelligence Wave 6 Model Route App Design-Review Packet
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, app-design-review, model-route, visual-ai, nemotron, qwen, no-write]
status: app_design_review_packet_ready_no_implementation_approved
---
# Operation Living Intelligence Wave 6 Model Route App Design-Review Packet

## Purpose

This packet asks App for docs-only review of the next Wave 6 model-route gate.

Company is not asking App to implement anything yet. The requested App decision is whether the local/private-first model-route posture is feasible and what App would require before any later model-route implementation proposal.

This packet does not approve App code changes, model installation, model download, model execution, API/model calls, NVIDIA hosted API/NIM setup, Hugging Face/model download, Qwen install/run, Twelve Labs account/API key/upload/index/benchmark, cloud upload, `ffmpeg` execution, media preprocessing, clip/frame extraction, thumbnails, proxies, sidecars, caches, checksums, derivatives, generated annotations, Media Library metadata, App runtime behavior, Supabase/Planner/Storage writes, public output, paid service, or canonical writeback.

## Company Decision Input

Company completed the model-route decision packet:

```text
domains/company/operation_living_intelligence_wave_6_model_route_decision_packet_2026-05-16.md
```

Decision posture:

```text
Local/private-first.
Nemotron preferred if feasible.
Qwen local fallback/benchmark if Nemotron is blocked.
Hosted/cloud routes deferred until separate account/key/upload/privacy/cost approval.
```

## Current Evidence

Phase B metadata readback passed:

```text
domains/company/operation_living_intelligence_wave_6_phase_b_media_stream_metadata_readback_2026-05-16.md
```

Relevant media facts:

| Test item | Metadata | App review implication |
|---|---|---|
| `TEST_398_01_OPAQUE_LAKE_STILL` | `mjpeg 4000x2252`, no audio | Still-image route must support high-resolution stills or safe resizing. |
| `TEST_398_02_FIELD_SAMPLING` | `h264 3840x2160`, `11.47s`, audio present | Short 4K video can be the first video-readiness case. |
| `TEST_398_03_SAMPLE_INTRODUCTION` | `h264 3840x2160`, `108.19s`, audio present | Long input likely needs clip-window/frame-sampling policy before model execution. |
| `TEST_398_04_MICROCRUSTACEAN_BLOCKING` | `h264 3840x2160`, `79.46s`, audio present | ID-sensitive case must remain candidate-only and Research-reviewed. |

Phase B also proved:

- exact four task `398` files exist;
- `ffprobe` metadata readback works;
- immediate parent folders remained unchanged;
- ignored App `out/` output is the right generated-output boundary;
- no `ffmpeg`, model/API/cloud, Media Library metadata, database, public output, or canonical write occurred.

## Requested App Review

App should answer these design-only questions:

| Question | Needed App answer |
|---|---|
| Local/private route feasibility | Is any local/private Nemotron route realistic on the current machine or an approved local runtime? |
| Fallback route | Is a Qwen2.5-VL local fallback practical enough for a bounded first pilot if Nemotron is blocked? |
| Hosted route boundary | What would App require before NVIDIA hosted API, self-hosted NIM requiring credentials, or Twelve Labs could be considered? |
| Hardware/storage | What GPU VRAM, system RAM, disk, model-cache, and temporary-output proof is needed before implementation? |
| Input handling | Do the `4K` videos and `108.19s` long clip require resizing, clip windows, frame sampling, audio handling, or file staging? |
| Preprocessing boundary | Would preprocessing require `ffmpeg`, generated frame files, temp clips, sidecars, or caches, and where would those be safely located if ever approved? |
| Output shape | Should first-run output be candidate annotations only, with no Media Library/database/App runtime path? |
| Validation/readback | What checks prove model output stayed candidate-only, bounded, noncanonical, and review-gated? |
| Credential/cache handling | What ignored/local path and deletion/regeneration rules should be required for configs, model caches, API keys, or tokens if any route later needs them? |
| Stop conditions | What should stop implementation before any model run, generated annotation, public output, or write path? |

## Recommended App Safety Position

Company recommends App classify the route families this way:

| Route | App posture to review |
|---|---|
| Nemotron local/private | Preferred target only if route, runtime, hardware, storage, input limits, license/commercial terms, and no-write output can be proven. |
| Qwen2.5-VL local | Fallback/local benchmark if Nemotron is too heavy, unavailable, key-dependent, or not safe to test first. |
| NVIDIA hosted API | Defer until Josue approves account/key handling, raw media upload/remote access, privacy/retention, cost, and exact bounded media scope. |
| Self-hosted NIM with credentials | Defer until App proves runtime, NGC/API-key handling, cache/storage, local media access, and no-write output. |
| Twelve Labs | Later benchmark only after a local/private attempt reveals a specific gap and after cloud upload/key/retention/cost approval. |

## Proposed Future Output Boundary

If a later implementation proposal is approved, all generated route feasibility and model-output files should stay under ignored App `out/` paths, likely:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\
```

Candidate future files, not approved by this packet:

```text
model_route_feasibility_report.json
model_route_feasibility_readback.md
candidate_annotations.jsonl
candidate_pull_sheet.md
validation_report.json
```

If preprocessing is ever approved, App must separately name and constrain the preprocessing output path, cache path, deletion behavior, and parent-folder side-effect checks.

## Required Guardrails

App should reject any future implementation proposal unless it can preserve:

- exact four task `398` source scope;
- ignored local output only;
- no raw media folder writes;
- no source-folder sidecars, frame extracts, clips, thumbnails, proxies, caches, checksums, derivatives, or transcodes unless separately approved;
- no broad media scan;
- no generated annotation mistaken for Media Library metadata;
- no App runtime integration;
- no Supabase, Planner, Storage, schema, migration, graph, vector, Web, Content, Research, public, or canonical writes;
- no public captions, alt text, species-card copy, chronicle copy, or claim language;
- no paid route without Financials review and explicit approval;
- no credentials in git or visible docs;
- model output labels: `metadata_write_status = not_approved`, `public_use_status = blocked`, `canonical_writeback = none`;
- Research review requirement for ID-sensitive outputs.

## Handoff Message For App

Use this message when opening the App review:

```text
Please review the Company Operation Living Intelligence Wave 6 model-route packet as a docs-only App design review.

Company is not asking for implementation. The requested decision is whether App accepts the local/private-first model-route posture and what App would require before any later implementation proposal.

Decision posture to review:
- Nemotron/Codex remains the preferred target if a local/private or safely bounded route is feasible.
- Qwen2.5-VL local remains fallback/benchmark if Nemotron is too heavy, unavailable, key-dependent, or slower to make safe.
- Hosted/cloud routes, including NVIDIA hosted API and Twelve Labs, remain deferred until separate account, API-key, upload, privacy, retention, and cost approval.

Please answer:
- Is local/private Nemotron feasible enough to design around now?
- Is Qwen2.5-VL local a practical fallback for a bounded first pilot?
- What preprocessing, if any, would be required for the 4K videos and 108.19s long clip?
- What output/cache/config/credential paths should be required?
- What validation/readback should block candidate annotations from becoming Media Library metadata, database records, public claims, or canonical truth?

Not approved:
- No App code changes.
- No model install/download/run.
- No API/model call.
- No cloud upload.
- No ffmpeg/preprocessing execution.
- No generated annotations.
- No Media Library metadata.
- No App runtime behavior.
- No Supabase/Planner/Storage writes.
- No public output.
- No canonical writeback.
```

## Next Company Action

After this packet, the next safe step is App docs-only review.

Do not implement a model helper, install/download a model, run a model, request API keys, upload media, execute preprocessing, generate annotations, change Media Library metadata, change App runtime behavior, write to Supabase/Planner/Storage, create public output, or write canonical records without a later explicit approval.

## Verification

- Read Wave 6 model-route decision packet.
- Read Wave 6 Phase B media stream metadata readback.
- Read prior Wave 6 App design-review packet.
- Read Wave 5 App design-review packet for packet pattern.

No app behavior, database record, Planner record, Storage object, public site behavior, public output, schema, migration, model install/download/run, API call, media preprocessing, generated annotation, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical source-of-truth record changed.
