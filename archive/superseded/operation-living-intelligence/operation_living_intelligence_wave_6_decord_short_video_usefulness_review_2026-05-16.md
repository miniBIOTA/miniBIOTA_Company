---
id: operation_living_intelligence_wave_6_decord_short_video_usefulness_review_2026-05-16
title: Operation Living Intelligence Wave 6 Decord Short-Video Usefulness Review
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, qwen3-vl, decord, short-video, usefulness-review, next-route-decision, no-write]
status: decord_short_video_useful_as_local_cpu_baseline_more_video_deferred
---
# Operation Living Intelligence Wave 6 Decord Short-Video Usefulness Review

## Purpose

This reviews the approved Qwen3-VL Decord short-video pilot for usefulness and next-route decisions before any additional video input, GPU/CUDA runtime work, decoder/backend change, preprocessing, Media Library integration, generated annotation workflow, public output, or canonical writeback.

This is docs-only. It does not rerun the model.

## Inputs Reviewed

```text
domains/company/operation_living_intelligence_wave_6_decord_backend_short_video_pilot_readback_2026-05-16.md
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\qwen3_vl_short_video_pilot_decord\validation_report.json
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\qwen3_vl_short_video_pilot_decord\decord_short_video_candidate_readback.json
```

## Current Finding

The Decord short-video pilot is useful enough to keep as the first local CPU video baseline.

It is not useful enough to approve more video expansion, public/canonical use, Media Library metadata, generated annotation workflows, GPU/CUDA runtime changes, or larger media scopes.

## What Worked

The pilot proved:

- local Decord can read the first approved short-video source;
- Qwen3-VL can process a bounded short-video candidate locally from the existing model cache;
- candidate JSON can be parsed and validated;
- output can remain under ignored App `out/`;
- raw media parent folders can stay unchanged;
- model cache can stay unchanged;
- output can preserve public/canonical guardrails;
- the model can summarize broad visible sequence features without species identification or timecoded-evidence claims.

Successful readback status:

```text
pass_with_review_required_wave6_qwen3_vl_decord_short_video_candidate_ready
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

## What Did Not Yet Work

The pilot did not prove:

- GPU/CUDA execution;
- practical runtime speed for repeated video review;
- larger or longer videos;
- ID-sensitive videos;
- accurate temporal evidence;
- public captions, alt text, species-card copy, chronicle copy, or proof language;
- Media Library metadata suitability;
- Research acceptance;
- Raw Footage acceptance for generated annotations;
- Content acceptance for pull sheets or rough sequences;
- App runtime integration.

The final CPU readback elapsed time was approximately:

```text
112674.74 ms
```

Interpretation:

```text
about 1 minute 53 seconds for one 11.47s video sampled to 4 frames
```

That is acceptable for a one-off proof, but too slow to assume practical repeated use.

## Candidate Language Review

The output avoided the earlier still-image issue of judging the environment as `non-ideal`.

The candidate did include visual turbidity-style wording:

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

Future prompt hardening should prefer non-evaluative visible-feature phrasing such as:

```text
cloudy-looking liquid
visible suspended particles
visible sediment-like material
opaque-looking sample
```

Future prompts should avoid wording that could be read as water quality, care quality, habitat quality, or environmental condition unless Research explicitly reviews it.

## Cross-Domain Impact

| Domain | Impact | Next need |
|---|---|---|
| Company | Owns Wave 6 sequencing and approval boundaries. | Keep Decord as a proven local CPU baseline, but pause more implementation until a concrete next need exists. |
| App | Owns helper code, ignored output, runtime/cache boundaries, and any future App integration. | Do not integrate into runtime or Media Library. If work continues, require a new exact approval packet. |
| Raw Footage | Owns source media safety and archival proof boundaries. | Decord route preserved parent-folder side-effect checks; future generated annotation policies still need owner review. |
| Research | Owns species, ecological, water-quality, and evidence interpretation. | No action unless candidate text will be reviewed for Research meaning or ID-sensitive media is proposed. |
| Content | Owns public/editorial use and pull-sheet usefulness. | No action unless a future candidate-readback review is scoped for pull-sheet or rough-sequence planning. |
| Web | Owns public surfaces and public media/copy. | No action; public use remains blocked. |
| Financials | Owns spend and paid-tool adoption. | No action while local/free; required before paid/cloud/rented compute. |

## Decision

Accept Decord as the current local CPU short-video baseline for Wave 6.

Do not expand Wave 6 implementation by default.

This means:

- keep the Decord helper as a bounded local proof;
- do not repeat the failed `torchvision` route;
- do not run more videos without a new exact approval;
- do not move to GPU/CUDA without a separate runtime proof/approval gate;
- do not add `torchcodec`, `ffmpeg`, preprocessing, frame extraction, or Media Library integration without separate approval;
- do not treat the candidate output as public, Research, Raw Footage, Content, Media Library, or canonical truth.

## Recommended Next Gate

Recommended next Wave 6 gate, only if continuing media/visual AI work:

```text
Wave 6 GPU/CUDA runtime proof decision packet
```

Reason:

- Decord now proves the video backend path;
- CPU runtime is slow enough that repeated local video work may be impractical;
- GPU/CUDA remains unproven in the helper runtime;
- a docs-only decision packet can decide whether GPU/CUDA proof is worth proposing, while still avoiding another model run by default.

Alternative safe path:

```text
Stop Wave 6 implementation here and return to another deferred OLI gate.
```

This is also valid because Decord has already answered the immediate video-backend question.

## Not Approved

This review does not approve:

- model rerun;
- additional videos;
- `TEST_398_03_SAMPLE_INTRODUCTION`;
- `TEST_398_04_MICROCRUSTACEAN_BLOCKING`;
- GPU/CUDA runtime changes;
- GPU/CUDA inference;
- `torchcodec`;
- `ffmpeg`;
- preprocessing;
- frame extraction;
- clip extraction;
- resizing;
- transcoding;
- media derivatives;
- generated annotation workflows;
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

- Read the Decord short-video Company readback.
- Read generated `validation_report.json`.
- Read generated `decord_short_video_candidate_readback.json`.
- Applied Company cross-domain coordination review.

No App code, model run, dependency change, video input, GPU/CUDA runtime change, `torchcodec`, `ffmpeg`, preprocessing, media export, generated annotation workflow, API/cloud/upload/credential/account/payment setup, Media Library metadata, App runtime behavior, Supabase/Planner/Storage/schema write, public output, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, raw media change, model cache change, or canonical writeback changed.
