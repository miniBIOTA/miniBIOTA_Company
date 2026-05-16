---
id: operation_living_intelligence_wave_6_qwen3_vl_local_pilot_readback_2026-05-16
title: Operation Living Intelligence Wave 6 Qwen3-VL Local Pilot Readback
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, qwen3-vl, local-pilot, visual-ai, still-image, candidate-output, no-write]
status: pass_with_review_required_wave6_qwen3_vl_still_image_candidate_ready
---
# Operation Living Intelligence Wave 6 Qwen3-VL Local Pilot Readback

## Purpose

This records the approved Wave 6 Qwen3-VL still-image local pilot implementation and readback.

The pilot tested one local/offline model route on one approved still image and wrote ignored candidate/readback output only. It did not use video, `ffmpeg`, preprocessing, API calls, cloud upload, credentials, account/payment setup, Media Library metadata, App runtime behavior, Supabase/Planner/Storage writes, public output, or canonical writeback.

## Approval

Josue approved:

```text
Approve Wave 6 Qwen3-VL still-image local pilot implementation only: add an App helper at `tools/run-oli-wave6-qwen3-vl-local-pilot.js`, use `Qwen/Qwen3-VL-2B-Instruct` local/offline, start only with `TEST_398_01_OPAQUE_LAKE_STILL`, write ignored generated candidate/readback output only under `out/operation_living_intelligence/wave_6_media_visual_ai_readiness/qwen3_vl_pilot/`, keep output candidate-only/public-use-blocked/noncanonical, verify raw parent folders unchanged, and perform no API/cloud/upload/credentials/account/payment, no video input, no ffmpeg/preprocessing, no Media Library/App runtime/Supabase/Planner/Storage/schema/public/canonical writes. Dependency/model download/cache steps must be local, named in the readback, and stop if they require broader system changes.
```

## App Helper

Added helper:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-qwen3-vl-local-pilot.js
```

Verified syntax:

```powershell
node --check tools\run-oli-wave6-qwen3-vl-local-pilot.js
```

Final successful command:

```powershell
node tools\run-oli-wave6-qwen3-vl-local-pilot.js --run --allow-dependency-install --allow-model-download
```

Generated candidate/readback output:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\qwen3_vl_pilot\
```

Local runtime/cache paths:

```text
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_runtime\
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_model_cache\
```

These paths are ignored by App `.gitignore` through the `out/` rule.

## Run Result

Status:

```text
pass_with_review_required_wave6_qwen3_vl_still_image_candidate_ready
```

Validation summary:

| Check | Result |
|---|---:|
| Output path under ignored App `out/` | `true` |
| Exact one still-image scope | `true` |
| Source path exists | `true` |
| Raw parent folder unchanged | `true` |
| No video input | `true` |
| No `ffmpeg` or preprocessing | `true` |
| No API/cloud/upload/credentials/account/payment | `true` |
| No Media Library/App runtime/Supabase/Planner/Storage/schema/public/canonical writes | `true` |
| Candidate output generated | `true` |
| Candidate guardrails present | `true` |
| Dependency install local to ignored `out/` | `true` |
| Model cache local to ignored `out/` | `true` |

Failed checks:

```text
none
```

## Runtime Facts

| Item | Result |
|---|---|
| Model | `Qwen/Qwen3-VL-2B-Instruct` |
| Runtime | local Python venv under ignored App `out/` |
| Dependencies installed | `torch`, `torchvision`, `accelerate`, `safetensors`, `pillow`, `qwen-vl-utils`, `transformers>=4.57.0` |
| Model cache | ignored App `out\oli_w6_qwen3_model_cache\huggingface` |
| Device reported by model | `cpu` |
| Torch CUDA available | `false` |
| Runtime path size | `930125850` bytes |
| Model cache size | `4266640541` bytes |
| Candidate/readback output path size | `86398718` bytes |

The still-image pilot succeeded locally, but it ran on CPU, not the RTX GPU. Future video work should not be assumed feasible from this run; it needs a separate runtime/GPU decision.

## Source Boundary

Only this approved source item was used:

| Test item | Source path |
|---|---|
| `TEST_398_01_OPAQUE_LAKE_STILL` | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Other Photos & Videos\Biomes\Freshwater Lake\20260408_082108.jpg` |

Raw parent-folder side-effect proof:

| Parent folder | Entries before | Entries after | Unchanged |
|---|---:|---:|---:|
| `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Other Photos & Videos\Biomes\Freshwater Lake` | `430` | `430` | `true` |

## Candidate Output Summary

The model returned parseable JSON with the required guardrails:

| Field | Result |
|---|---|
| `review_required` | `true` |
| `species_claim_status` | `not_a_species_identification` |
| `public_use_status` | `blocked` |
| `metadata_write_status` | `not_approved` |
| `canonical_writeback` | `none` |

Candidate visual labels:

```text
aquarium
water
aquatic plants
substrate
small object
condensation
lighting
```

Plain-language candidate summary:

```text
The model described a rectangular aquarium with yellowish-green opaque water, aquatic plants, substrate, condensation, overhead lighting, and a small dark spiral-shelled object.
```

## Review Caveat

The candidate output stayed nonpublic and noncanonical, but it included an evaluative phrase suggesting a "non-ideal environment." Treat that phrase as review-required model language, not Research evidence, not animal-care judgment, not public copy, and not a Company claim.

Future prompt hardening should explicitly block environment-quality judgments such as "healthy," "unhealthy," "ideal," "non-ideal," "good," "bad," "suitable," or "unsuitable" unless Research has approved the wording.

## What This Proves

This proves:

- the App can run a local Qwen3-VL still-image pilot under ignored output;
- the first candidate-output schema can be parsed as JSON;
- the candidate guardrails can be carried in model output;
- raw source folders can remain unchanged;
- dependency install and model cache can stay local and ignored.

This does not prove:

- GPU acceleration is ready;
- video input is feasible;
- `ffmpeg` or preprocessing is approved;
- the model's visual description is accurate enough for public or canonical use;
- any species or environment-quality claim is approved;
- Media Library integration is approved.

## Not Changed

No video input, `ffmpeg`, preprocessing, API call, cloud upload, credential use, account/payment setup, Media Library metadata, App runtime behavior, Supabase, Planner, Storage, schema, migration, Web, Content, Research, public output, paid service, or canonical writeback changed.

## Recommended Next Gate

Stop here before video.

The next safe Wave 6 gate, if continuing, is a **Qwen3-VL prompt hardening and still-image rerun approval packet** or a docs-only review of whether the still-image pilot is useful enough to justify a video/gpu-runtime packet.

Do not proceed to video input, GPU/CUDA runtime changes, `ffmpeg`, preprocessing, generated annotation workflow, Media Library metadata, App runtime behavior, public output, or canonical writeback without a later explicit approval.

## Verification

- Ran `node --check tools\run-oli-wave6-qwen3-vl-local-pilot.js`.
- Ran approved helper command.
- Read generated `validation_report.json`, `qwen3_vl_candidate_readback.json`, `qwen3_vl_runtime_readiness.json`, and `qwen3_vl_candidate_readback.md`.
- Confirmed generated candidate/readback output, local runtime, and model cache paths are ignored by App `.gitignore`.
- Confirmed raw parent folder stayed unchanged.

No app behavior, database record, Planner record, Storage object, public site behavior, public output, schema, migration, API call, media preprocessing, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical source-of-truth record changed.
