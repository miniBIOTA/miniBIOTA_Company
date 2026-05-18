---
id: operation_living_intelligence_wave_6_phase_b_media_stream_metadata_approval_packet_2026-05-16
title: Operation Living Intelligence Wave 6 Phase B Media Stream Metadata Approval Packet
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, media-preflight, media-stream-metadata, approval-gate, no-model]
status: superseded_by_approved_phase_b_readback
---
# Operation Living Intelligence Wave 6 Phase B Media Stream Metadata Approval Packet

## Purpose

This packet defines the smallest safe Phase B media stream metadata command boundary after the approved Phase A filesystem-only preflight passed.

Phase B is still not visual AI. It is only a read-only metadata inspection step to answer:

```text
What are the duration, codec, dimensions, frame rate, stream list, and audio-track facts for the exact four task 398 files?
```

That information helps later model-route and database-projection decisions because it tells us whether each source file is technically suitable for bounded visual review, without creating annotations, clips, frames, thumbnails, Media Library metadata, public copy, or canonical records.

## Execution Note

Josue later approved this exact Phase B boundary. App updated and ran the helper, and Company recorded the pass result at:

```text
domains/company/operation_living_intelligence_wave_6_phase_b_media_stream_metadata_readback_2026-05-16.md
```

This packet remains the approval-boundary record. The readback record is the current execution result.

## Current State

Phase A is complete and recorded at:

```text
domains/company/operation_living_intelligence_wave_6_phase_a_media_preflight_helper_2026-05-16.md
```

Phase A result:

```text
pass_with_review_required_wave6_phase_a_preflight_ready
```

Confirmed by Phase A:

- all `4 / 4` exact task `398` source files exist;
- App ignored `out/` output is working;
- immediate raw-media parent folders were unchanged;
- `ffprobe` and `ffmpeg` were detected by PATH filesystem probe only;
- `mediainfo` was not detected;
- no media tools were executed;
- no media processing, model/API/cloud, Media Library metadata, Supabase/Planner/Storage, App runtime, public output, or canonical write occurred.

## Proposed Phase B Tool Boundary

Use `ffprobe` only. Do not use `ffmpeg` for Phase B.

Detected `ffprobe` path from Phase A:

```text
C:\Users\gimbo\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1-full_build\bin\ffprobe.exe
```

Proposed command shape for each approved file:

```text
ffprobe.exe -v error -print_format json -show_format -show_streams "<exact approved source path>"
```

Allowed command intent:

- read container/stream metadata only;
- return JSON to stdout for the helper to capture;
- write only helper output under ignored App `out/`;
- run against the exact four task `398` source paths only.

Not allowed:

- `ffmpeg`;
- clip extraction;
- frame extraction;
- thumbnails;
- proxies;
- sidecars;
- transcode;
- normalize;
- re-encode;
- upload;
- full-library scan;
- model/API/cloud/credential route;
- Media Library metadata write;
- database write;
- public or canonical output.

## Bounded Source Set

Phase B must use the same exact four source files from Phase A.

| Test item | Source path / timecode | Phase B purpose |
|---|---|---|
| `TEST_398_01_OPAQUE_LAKE_STILL` | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Other Photos & Videos\Biomes\Freshwater Lake\20260408_082108.jpg` | Still-image stream/format metadata only. |
| `TEST_398_02_FIELD_SAMPLING` | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026\20260408_112606.mp4`; `00:02-00:11` | Duration, codec, dimensions, frame rate, stream list, and audio-track presence. |
| `TEST_398_03_SAMPLE_INTRODUCTION` | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026\20260408_140153.mp4`; `00:45-00:55` | Duration, codec, dimensions, frame rate, stream list, audio-track presence, and model input-limit planning. |
| `TEST_398_04_MICROCRUSTACEAN_BLOCKING` | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026\20260408_121519.mp4`; `00:06-01:13` | Duration, codec, dimensions, frame rate, stream list, audio-track presence, and ID-sensitive review gating. |

Do not expand this set.

## Proposed App Helper Change

If Phase B is approved, App should update only:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-media-preflight.js
```

The helper should remain Phase A by default. Phase B should require an explicit operator flag, for example:

```text
node tools\run-oli-wave6-media-preflight.js --phase-b-stream-metadata
```

Expected ignored output folder stays:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\preflight\
```

Proposed additional generated files:

```text
media_stream_metadata_report.json
media_stream_metadata_readback.md
ffprobe_command_manifest.json
```

Existing Phase A files may be refreshed only if the helper reruns Phase A side-effect checks before and after Phase B.

## Required Side-Effect Checks

Before running `ffprobe`, the helper must snapshot only the immediate parent folders already used in Phase A:

```text
M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Other Photos & Videos\Biomes\Freshwater Lake
M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026
```

After `ffprobe`, the helper must snapshot them again and fail review if any new, removed, renamed, or modified source-folder entry appears.

Phase B should not scan the full raw footage library.

## Required Metadata Fields

The Phase B report should extract or preserve:

- source item id;
- exact source path;
- requested timecode;
- command path;
- command flags;
- command executed status;
- command exit code;
- `format.duration`;
- `format.format_name`;
- `format.size`;
- stream index;
- stream type;
- codec name;
- codec type;
- width and height when present;
- frame rate when present;
- sample rate when present;
- audio-track presence;
- subtitle/data stream presence;
- unsupported or ambiguous metadata notes;
- side-effect check result;
- generated-derived/noncanonical/public-blocked labels.

## Validation Requirements

Phase B passes only if:

- Phase A checks still pass;
- exact source set remains `4 / 4`;
- `ffprobe` path matches the approved path or the helper stops with review required;
- command flags match the approved flags;
- output stays under ignored App `out/`;
- no source-folder side effects are detected;
- no derivative media files are created;
- no clips, frames, thumbnails, proxies, sidecars, caches, checksums, or transcodes are created;
- no model/API/cloud/credential/paid route is used;
- no Media Library, Supabase, Planner, Storage, schema, migration, App runtime, Web, Content, Research, DaVinci, public-output, graph/vector, or canonical write occurs;
- all output is labeled `media_stream_metadata_readback_only`, `generated_derived`, `noncanonical`, `metadata_write_status = not_approved`, `public_use_status = blocked`, and `canonical_writeback = none`.

## Stop Conditions

Stop before running Phase B if:

- the approved `ffprobe.exe` path is missing;
- command flags would differ from this packet;
- a source path is missing or differs from the approved set;
- the helper would write outside ignored App `out/`;
- the command would create any file beside the source media;
- a full-folder scan, media decode/export, frame/clip extraction, thumbnail/proxy generation, sidecar/cache creation, or upload is needed;
- a model/API/cloud/credential/payment path becomes necessary;
- output could be mistaken for visual annotation, species identification, Research claim, Content asset, Media Library metadata, public copy, or canonical truth.

## What Phase B Would Enable Later

If Phase B passes, later planning can make better decisions about:

- whether a local/private model route can accept the files or exact timecode clips;
- whether the large sample-introduction video exceeds likely input limits;
- whether audio-in-video matters for the first visual AI lane;
- whether still-image and video paths need separate handling;
- whether a future model route packet should use timecode-only review, still frame review, or another bounded approach.

Phase B does not itself approve any of those later steps.

## Recommended Approval Text

Use this only if Phase B should actually run:

```text
Approve Wave 6 Phase B media stream metadata only: update `tools/run-oli-wave6-media-preflight.js` so Phase B requires `--phase-b-stream-metadata`, run only `C:\Users\gimbo\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1-full_build\bin\ffprobe.exe -v error -print_format json -show_format -show_streams` against the exact four task 398 source paths, write only ignored output under `out/operation_living_intelligence/wave_6_media_visual_ai_readiness/preflight/`, prove immediate parent folders unchanged before/after, create no clips/frames/thumbnails/proxies/sidecars/caches/checksums/derivatives, perform no model/API/cloud/credential/paid work, write no Media Library/App runtime/Supabase/Planner/Storage/public/canonical records, and run validation/readback.
```

## Not Approved By This Packet Alone

This packet did not approve execution until Josue separately approved it. Even after the approved Phase B readback, it still does not approve:

- any `ffmpeg` run;
- media decode/export/transcode/clip/frame/thumbnail/proxy/sidecar/cache/checksum/derivative creation;
- model route selection;
- model install, download, or run;
- API/model/cloud/credential/paid route;
- generated annotations;
- Media Library metadata;
- Supabase, Planner, Storage, schema, migration, App runtime, Web, Content, Research, DaVinci, graph/vector, public-output, or canonical writes;
- public captions, alt text, species-card copy, chronicle copy, claim language, sponsor/financial/legal/launch/roadmap commitments, or canonical writeback.

## Verification

- Based on the approved Phase A helper readback.
- Based on the App docs-only Wave 6 design review.
- Based on the Phase A detected `ffprobe` path.
- No App helper file was edited by this packet.
- No `ffprobe`, `ffmpeg`, `mediainfo`, media processing, model/API/cloud/credential route, Media Library metadata, Supabase/Planner/Storage/schema/migration/App runtime/Web/public/canonical write, or raw media source-folder write occurred.
