---
id: operation_living_intelligence_wave_6_preflight_implementation_readiness_checklist_2026-05-16
title: Operation Living Intelligence Wave 6 Preflight Implementation Readiness Checklist
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, media-preflight, implementation-readiness, approval-gate, no-write]
status: checklist_ready_implementation_not_approved
---
# Operation Living Intelligence Wave 6 Preflight Implementation Readiness Checklist

## Purpose

This checklist turns the Wave 6 media preflight proposal into a clean approval gate for a future implementation session.

It does not approve implementation. It defines the exact smallest helper boundary that would be safe to approve later, and separates that boundary from media processing, visual AI, database migration, Media Library writes, and public output.

## Plain-Language Summary

The next useful Wave 6 internal test is not visual AI yet.

The next useful test is a local checklist helper that answers:

```text
Can we safely find the four chosen media files, record basic file facts, write a readback report somewhere ignored, and prove we did not leave anything beside the raw media?
```

That helps the later database/projection work because it proves source paths, output boundaries, generated-derived labels, and no-side-effect behavior before any media-derived annotation is trusted or routed into another layer.

## Approved So Far

Approved only as docs/planning:

- Wave 6 media/visual AI readiness design;
- source/runtime readiness review;
- Company-to-App design review packet;
- App docs-only design review;
- media preflight policy/tooling proposal;
- this implementation readiness checklist.

No App helper, generated output, media inspection command, model route, database write, Media Library write, public output, or canonical writeback is approved by those records.

## Future Helper Boundary

If Josue later approves implementation, the first helper should be limited to:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-media-preflight.js
```

Allowed future output, only after approval:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\preflight\
```

Allowed future generated files:

```text
media_test_set_manifest.json
media_preflight_report.json
media_preflight_readback.md
tooling_readiness_report.json
validation_report.json
```

## Minimum Phase A Scope

The first implementation should be Phase A only unless Josue explicitly approves a media-inspection tool command.

Phase A may:

- read only the exact four task `398` paths;
- record existence, extension, file size, modified time, and requested timecode range;
- detect whether `ffprobe`, `ffmpeg`, or `mediainfo` are available;
- confirm output is under ignored App `out/`;
- compare immediate parent folders before and after the helper run;
- write only the generated preflight/readback files under ignored App `out/`.

Phase A must not:

- open, decode, transcode, clip, frame-extract, thumbnail, proxy, normalize, or upload media;
- hash full large video files by default;
- install or run media inspection tooling;
- create anything beside source media;
- scan the full raw footage library;
- call a model, API, credential, cloud service, or paid route;
- write Media Library metadata, Supabase/Planner/Storage records, schema, migrations, App runtime behavior, Web output, Content output, Research claims, graph/vector records, or canonical source files.

## Phase B Requires Separate Approval

Phase B means read-only stream metadata through `ffprobe` or an equivalent tool.

Phase B is not part of the first approval unless the approval explicitly names:

- the exact tool path or command;
- the exact flags;
- the exact four input paths;
- the exact ignored output folder;
- the stop rule if the tool tries to write sidecars, thumbnails, caches, frame extracts, or other source-folder artifacts.

## Success Criteria For A Future Phase A Run

A future approved Phase A run succeeds only if:

| Check | Required result |
|---|---|
| Source set | Exactly four task `398` paths; no expansion. |
| Source existence | All four paths exist, or missing paths are reported as blockers. |
| Output boundary | All generated files are under ignored App `out/`. |
| Source-folder side effects | Immediate parent folder listings are unchanged except normal filesystem timestamp behavior outside the helper's control. |
| Tooling state | `ffprobe`, `ffmpeg`, and `mediainfo` availability is reported, not fixed. |
| Media processing | None. |
| Model/API/cloud | None. |
| Structured writes | None. |
| Public/canonical output | None. |
| Labels | `preflight_readback_only`, `generated_derived`, `noncanonical`, `metadata_write_status = not_approved`, `public_use_status = blocked`, `canonical_writeback = none`. |

## Stop Conditions For A Future Implementation Session

Stop before or during implementation if:

- the helper would need to write outside ignored App `out/`;
- the helper would need to write beside the raw media;
- the helper would need broad folder scans;
- media inspection tooling is required but not separately approved;
- installing tooling is required;
- storage-free proof is required but unavailable;
- a model route, API key, cloud upload, credential, or payment method becomes necessary;
- Research wording is needed for an ID-sensitive media result;
- any output could be mistaken for an annotation, species identification, Content asset, public caption, Media Library record, or canonical truth.

## Recommended Approval Text

Use this only if implementation should actually begin:

```text
Approve Wave 6 Phase A preflight helper only: add `tools/run-oli-wave6-media-preflight.js`, read only the exact four task 398 source paths, write only `media_test_set_manifest.json`, `media_preflight_report.json`, `media_preflight_readback.md`, `tooling_readiness_report.json`, and `validation_report.json` under ignored `out/operation_living_intelligence/wave_6_media_visual_ai_readiness/preflight/`, detect but do not install/use media inspection tools, perform immediate parent-folder side-effect checks only, perform no model/API/cloud/credential/media-processing work, write no Media Library/App runtime/Supabase/Planner/Storage/public/canonical records, and run validation/readback.
```

## Current Recommendation

Do not move to visual AI, model route selection, cloud benchmarks, annotations, or database-backed media migration yet.

The next implementation step, if approved, should be the Phase A filesystem-only preflight helper. If approval is not given, Wave 6 should stay parked as a deferred return gate.

## Verification

- Based on the Wave 6 media preflight policy/tooling proposal.
- Based on the Wave 6 source/runtime readiness review and App docs-only review.
- No App repo file, generated output, raw media file, media metadata, model route, API/cloud credential, Supabase/Planner/Storage record, public behavior, database migration, or canonical source changed.
