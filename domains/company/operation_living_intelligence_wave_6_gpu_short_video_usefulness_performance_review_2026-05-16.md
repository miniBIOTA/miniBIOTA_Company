---
id: operation_living_intelligence_wave_6_gpu_short_video_usefulness_performance_review_2026-05-16
title: Operation Living Intelligence Wave 6 GPU Short-Video Usefulness And Performance Review
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, qwen3-vl, gpu, cuda, short-video, usefulness-review, performance-review, next-route-decision, no-write]
status: gpu_short_video_useful_as_local_baseline_more_video_deferred
---
# Operation Living Intelligence Wave 6 GPU Short-Video Usefulness And Performance Review

## Purpose

This reviews the approved GPU short-video proof for usefulness, performance, and next-route decisions before any additional video input, generated annotation workflow, Media Library integration, public output, canonical writeback, runtime/package change, preprocessing, or App runtime behavior.

This is docs-only. It does not rerun the model.

## Inputs Reviewed

```text
domains/company/operation_living_intelligence_wave_6_gpu_short_video_proof_readback_2026-05-16.md
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\gpu_short_video_proof\gpu_short_video_readback.md
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\gpu_short_video_proof\gpu_short_video_candidate.json
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\gpu_short_video_proof\validation_report.json
domains/company/operation_living_intelligence_wave_6_decord_short_video_usefulness_review_2026-05-16.md
domains/company/operation_living_intelligence_wave_6_gpu_still_image_usefulness_performance_review_2026-05-16.md
```

## Current Finding

The GPU short-video proof is useful enough to accept as the current local Wave 6 visual-AI video baseline.

It is not useful enough to approve more videos, generated annotation workflows, Media Library metadata, public use, canonical writeback, or batch processing by default.

## What Worked

The proof confirmed:

- the existing isolated GPU runtime can process the first selected short video;
- the existing Qwen3-VL model cache was sufficient;
- no dependency install/change was needed;
- no `decord` was installed into the GPU runtime;
- no `torchcodec`, `torchaudio`, `ffmpeg`, or preprocessing was used;
- audio was ignored;
- the approved video was sampled to `4` frames within the packet budget;
- candidate JSON parsed and preserved public/canonical guardrails;
- the raw parent folder, accepted CPU runtime, and model cache stayed unchanged.

Successful readback status:

```text
pass_with_review_required_wave6_gpu_short_video_candidate_ready
```

Candidate guardrails retained:

```text
review_required = true
public_use_status = blocked
metadata_write_status = not_approved
canonical_writeback = none
species_claim_status = not_a_species_identification
timecode_claim_status = not_a_timecoded_evidence_record
```

## Performance Review

GPU short-video readback:

| Metric | Value |
|---|---:|
| Model load elapsed | `2054.06 ms` |
| Generation elapsed | `13215.86 ms` |
| Total validation elapsed | `181311.06 ms` |
| Sampled frames | `4` |

Comparison with earlier Wave 6 media proofs:

| Proof | Runtime signal |
|---|---:|
| Decord CPU short-video, 11.47s source sampled to 4 frames | `112674.74 ms` |
| GPU still image | `86072.27 ms` total; `76587.66 ms` generation |
| GPU short video | `181311.06 ms` total; `13215.86 ms` generation |

Interpretation:

- GPU generation was much faster than the earlier GPU still-image generation and the CPU video proof;
- total helper wall time was still about `3m 01s`, so repeated use should not be assumed without more review;
- the split between quick generation and long total validation/helper time suggests the route is promising, but the helper/runtime overhead should be understood before daily-use tooling or batch annotation.

## Candidate Language Review

The candidate output stayed within the major guardrails:

- no species identification;
- no timecoded evidence record;
- no public copy;
- no metadata approval;
- no canonical writeback.

The candidate still includes visible-feature wording that needs human review:

```text
murky water
visible sediment and debris
```

Company interpretation:

- this is candidate visual language only;
- it is not Research evidence;
- it is not a water-quality judgment;
- it is not animal-care or environment-quality assessment;
- it is not Media Library metadata;
- it is not public copy;
- it is not canonical text.

Future prompt wording should prefer less evaluative phrasing:

```text
cloudy-looking liquid
visible suspended particles
visible sediment-like material
opaque-looking sample
```

## Usefulness Review

The output is useful as a private candidate readback because it gives:

- a broad sequence description;
- broad visual labels;
- a limited non-timecoded temporal summary;
- a clear species-identification caution;
- retained public/canonical blocks.

The output is not useful as:

- a species identification;
- Research evidence;
- water-quality or care-quality interpretation;
- Media Library metadata;
- Content copy;
- Web copy;
- public proof;
- canonical database text;
- a full annotation workflow;
- a batch-processing baseline.

## Cross-Domain Impact

| Domain | Impact | Next need |
|---|---|---|
| Company | Owns Wave 6 sequencing and approval boundaries. | Accept GPU short-video as the current local baseline; pause expansion unless a concrete owner need appears. |
| App | Owns helper/runtime/cache behavior. | Keep helper local/ignored-output only. Do not integrate into runtime or Media Library. |
| Raw Footage | Owns source media safety and archival proof boundaries. | Parent-folder checks worked; any generated-annotation policy still needs owner review. |
| Research | Owns species, ecological, and water-quality interpretation. | No action unless candidate language is reviewed for Research meaning. |
| Content | Owns editorial/public use. | No action unless a pull-sheet or rough-sequence review is intentionally scoped. |
| Web | Owns public surfaces. | No action; public use remains blocked. |
| Financials | Owns spend and paid-tool adoption. | No action while local/free; required before cloud/rented compute or paid services. |

## Decision

Accept the GPU short-video proof as the current local Wave 6 short-video baseline.

Do not expand Wave 6 implementation by default.

This means:

- keep the GPU helper as a bounded local proof;
- keep the CPU Decord proof as a useful fallback/baseline, not the preferred repeated route;
- do not run more videos without a new exact approval;
- do not add generated annotation workflows, Media Library metadata, App runtime integration, public output, or canonical writeback;
- do not treat the candidate output as Research, Raw Footage, Content, Web, Media Library, or canonical truth.

Recommended next gate, only if Wave 6 continues:

```text
Prepare a docs-only prompt/refinement or owner-review packet, not another implementation run.
```

Best next packet options:

1. **Prompt/refinement packet:** tighten short-video wording away from `murky water`, `debris`, and other terms that may sound like water-quality or care-quality assessment.
2. **Owner-review packet:** ask Raw Footage, Research, and Content what they would need before candidate video readbacks could become useful for review workflows.

Alternative safe path:

```text
Stop Wave 6 implementation here and keep GPU short-video as the current local visual-AI video baseline.
```

## Not Approved

This review does not approve:

- model rerun;
- additional videos;
- additional images;
- generated annotation workflow;
- Media Library metadata;
- App runtime behavior;
- public captions, alt text, species-card copy, chronicle copy, or proof language;
- Research claims;
- Raw Footage annotations;
- Content pull sheets;
- Web output;
- batch processing;
- dependency install/change;
- model download/cache mutation;
- `decord` in the GPU runtime;
- `torchcodec`;
- `torchaudio`;
- `ffmpeg`;
- preprocessing;
- frame extraction;
- clip extraction;
- resizing;
- transcoding;
- source-folder temp files;
- Supabase writes;
- Planner writes;
- Storage writes;
- schema or migration work;
- paid service;
- canonical writeback.

## Verification

- Read the GPU short-video Company readback.
- Read generated `gpu_short_video_readback.md`.
- Read generated `gpu_short_video_candidate.json`.
- Read generated `validation_report.json`.
- Compared against the Decord CPU short-video usefulness review.
- Compared against the GPU still-image usefulness/performance review.
- Applied Company cross-domain coordination review.

No App code, model run, dependency change, additional video input, additional image input, GPU runtime change, `torchcodec`, `torchaudio`, `ffmpeg`, preprocessing, media export, generated annotation workflow, API/cloud/upload/credential/account/payment setup, Media Library metadata, App runtime behavior, Supabase/Planner/Storage/schema write, public output, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, raw media change, model cache change, or canonical writeback changed.
