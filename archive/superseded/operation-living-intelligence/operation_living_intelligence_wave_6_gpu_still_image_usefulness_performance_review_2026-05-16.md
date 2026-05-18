---
id: operation_living_intelligence_wave_6_gpu_still_image_usefulness_performance_review_2026-05-16
title: Operation Living Intelligence Wave 6 GPU Still-Image Usefulness And Performance Review
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, qwen3-vl, gpu, still-image, usefulness-review, performance-review, next-route-decision, no-write]
status: gpu_still_image_useful_gpu_short_video_packet_ready_no_implementation
---
# Operation Living Intelligence Wave 6 GPU Still-Image Usefulness And Performance Review

## Purpose

This reviews the approved GPU still-image inference proof before any GPU short-video approval packet, additional media input, runtime/package change, preprocessing, Media Library integration, generated annotation workflow, public output, or canonical writeback.

This is docs-only. It does not rerun the model.

## Inputs Reviewed

```text
domains/company/operation_living_intelligence_wave_6_gpu_still_image_inference_readback_2026-05-16.md
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\gpu_still_image_proof\gpu_still_image_readback.md
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\gpu_still_image_proof\gpu_still_image_candidate.json
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\gpu_still_image_proof\validation_report.json
domains/company/operation_living_intelligence_wave_6_decord_short_video_usefulness_review_2026-05-16.md
```

## Current Finding

The GPU still-image proof is useful enough to justify preparing a bounded GPU short-video approval packet if Wave 6 continues.

It is not useful enough to approve GPU video execution by itself.

## What Worked

The proof confirmed:

- the isolated ignored GPU runtime can load and run `Qwen/Qwen3-VL-2B-Instruct`;
- inference used CUDA on `NVIDIA GeForce RTX 5060 Ti`;
- the existing local/offline model cache was sufficient;
- the prompt-hardened still-image candidate parsed as JSON;
- the candidate preserved review-required, public-blocked, metadata-not-approved, noncanonical, and canonical-writeback-none guardrails;
- the output avoided the earlier environment-quality judgment issue;
- the raw parent folder, accepted CPU runtime, and model cache stayed unchanged;
- no App runtime behavior, Media Library metadata, database record, public output, or canonical source changed.

Successful readback status:

```text
pass_with_review_required_wave6_gpu_still_image_candidate_ready
```

Useful candidate shape:

```text
plain visual description + broad visual labels + confidence caution
```

Guardrail status:

```text
review_required = true
public_use_status = blocked
metadata_write_status = not_approved
canonical_writeback = none
species_claim_status = not_a_species_identification
```

## Performance Review

GPU readback:

| Metric | Value |
|---|---:|
| Model load elapsed | `2016.33 ms` |
| Generation elapsed | `76587.66 ms` |
| Total validation elapsed | `86072.27 ms` |

Interpretation:

```text
about 1 minute 26 seconds total for one still image, with about 1 minute 17 seconds spent in generation
```

This is workable for a bounded proof and occasional review-required candidate generation. It is not fast enough to assume repeated media processing, batch annotation, or smooth day-to-day operator use.

Compared with the Decord CPU short-video pilot:

| Prior proof | Runtime signal |
|---|---:|
| Decord CPU short-video, 11.47s source sampled to 4 frames | `112674.74 ms` |
| GPU still image | `86072.27 ms` total |

The GPU still-image proof is faster than the earlier CPU short-video proof, but the comparison is not apples-to-apples. The still-image result proves the GPU stack can run the model. It does not prove GPU short-video will be fast, stable, or worthwhile.

## Usefulness Review

The output is useful as a private candidate readback because it gives:

- a plain description suitable for human review;
- broad visual labels useful for search, triage, and future annotation review;
- a confidence caution instead of a species claim;
- preserved public/canonical blocks.

The output is not useful as:

- a species identification;
- Research evidence;
- water-quality or care-quality interpretation;
- Media Library metadata;
- Content copy;
- Web copy;
- public proof;
- canonical database text.

## Cross-Domain Impact

| Domain | Impact | Next need |
|---|---|---|
| Company | Owns Wave 6 sequencing and approval boundaries. | Prepare the next packet only if continuing; keep implementation approval separate. |
| App | Owns helper/runtime/cache behavior. | Do not run GPU video or change runtime packages without a new exact approval boundary. |
| Raw Footage | Owns source media safety and archival proof boundaries. | Keep parent-folder no-side-effect checks mandatory for any future media proof. |
| Research | Owns species, ecological, and water-quality interpretation. | No action unless candidate language is reviewed for Research meaning. |
| Content | Owns editorial/public use. | No action unless candidate text is later reviewed for pull-sheet or rough-sequence planning. |
| Web | Owns public surfaces. | No action; public use remains blocked. |
| Financials | Owns spend and paid-tool adoption. | No action while the path remains local/free; required before cloud/rented compute. |

## Decision

Accept the GPU still-image proof as useful for Wave 6 readiness.

Do not approve GPU short-video execution from this review.

Recommended next gate, only if continuing Wave 6 implementation:

```text
Prepare a docs-only GPU short-video implementation approval packet.
```

That packet should keep the first possible GPU video run tightly bounded:

- exact source: `TEST_398_02_FIELD_SAMPLING`;
- existing ignored GPU runtime only;
- existing local/offline Qwen3-VL model cache only;
- no model download/cache mutation;
- no new package unless the packet explicitly proves one is necessary and names it;
- no `torchcodec`, `ffmpeg`, preprocessing, clip extraction, frame extraction, resizing, transcoding, source-folder temp files, Media Library metadata, App runtime behavior, Supabase, Planner, Storage, schema, public output, or canonical writeback;
- candidate-only/review-required/public-blocked/noncanonical output under ignored App `out/`;
- raw parent folder, accepted CPU runtime, and model cache unchanged checks.

Alternative safe path:

```text
Stop Wave 6 implementation here and keep the GPU still-image proof as the current local visual-AI readiness baseline.
```

## Not Approved

This review does not approve:

- model rerun;
- additional image input;
- video input;
- GPU short-video helper implementation;
- dependency install/change;
- model download/cache mutation;
- `decord` install/use inside the GPU runtime;
- `torchcodec`;
- `ffmpeg`;
- preprocessing;
- frame extraction;
- clip extraction;
- resizing;
- transcoding;
- source-folder temp files;
- media derivatives;
- generated annotation workflow;
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

- Read the GPU still-image Company readback.
- Read generated `gpu_still_image_readback.md`.
- Read generated `gpu_still_image_candidate.json`.
- Read generated `validation_report.json`.
- Read the Decord short-video usefulness review for performance context.
- Applied Company cross-domain coordination review.

No App code, model run, dependency change, additional image input, video input, GPU runtime change, `torchcodec`, `ffmpeg`, preprocessing, media export, generated annotation workflow, API/cloud/upload/credential/account/payment setup, Media Library metadata, App runtime behavior, Supabase/Planner/Storage/schema write, public output, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, raw media change, model cache change, or canonical writeback changed.
