---
id: operation_living_intelligence_wave_6_media_preflight_policy_and_tooling_proposal_2026-05-16
title: Operation Living Intelligence Wave 6 Media Preflight Policy And Tooling Proposal
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, media-preflight, raw-footage, app-helper-proposal, no-write, no-model]
status: proposal_ready_implementation_not_approved
---
# Operation Living Intelligence Wave 6 Media Preflight Policy And Tooling Proposal

## Purpose

This proposal defines the smallest safe internal test gate for Wave 6 before any visual AI model, cloud upload, media annotation, App runtime work, Media Library metadata, or database-backed migration.

The goal is not to analyze the media yet. The goal is to prove that a future helper can inspect the four selected task `398` files read-only, write a local preflight/readback report under ignored App `out/`, and leave the raw footage folders untouched.

## Current State

Wave 6 already has:

```text
domains/company/operation_living_intelligence_wave_6_media_visual_ai_readiness_design_2026-05-15.md
domains/company/operation_living_intelligence_wave_6_source_runtime_readiness_review_2026-05-15.md
domains/company/operation_living_intelligence_wave_6_app_design_review_packet_2026-05-15.md
M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave6-design-review.md
```

Current readiness result:

```text
source_available_runtime_partially_ready_model_route_not_ready_implementation_deferred
```

Confirmed:

- the four task `398` source paths existed during the readiness review;
- App `out/` is ignored;
- Node and npm are available;
- NVIDIA driver tooling was visible;
- App accepts a future preflight-only boundary in principle.

Still unresolved:

- `ffprobe`, `ffmpeg`, and `mediainfo` were not available on PATH in the readiness shell;
- storage-free proof was denied;
- exact Nemotron route is not selected;
- Raw Footage no-side-effect/cache policy is not yet accepted;
- Research wording for the ID-sensitive microcrustacean item is not yet accepted;
- Financials has not accepted any spend, paid route, cloud usage, or large model/cache burden.

## Bounded Media Set

The first preflight must stay limited to the four task `398` source items:

| Test item | Source path / timecode | Preflight purpose |
|---|---|---|
| `TEST_398_01_OPAQUE_LAKE_STILL` | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Other Photos & Videos\Biomes\Freshwater Lake\20260408_082108.jpg` | Still-image existence and basic metadata only. |
| `TEST_398_02_FIELD_SAMPLING` | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026\20260408_112606.mp4`; `00:02-00:11` | Video existence, size, and future duration/codec readiness only. |
| `TEST_398_03_SAMPLE_INTRODUCTION` | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026\20260408_140153.mp4`; `00:45-00:55` | Large-video input-limit planning only. |
| `TEST_398_04_MICROCRUSTACEAN_BLOCKING` | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026\20260408_121519.mp4`; `00:06-01:13` | ID-sensitive blocking and Research-review reminder only. |

Do not expand to nearby folders, held-out clips, Mesostoma, zoea, later comparison media, full-library scans, or newly discovered files.

## Proposed Future Helper Scope

If Josue later approves implementation, the smallest helper should be:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-media-preflight.js
```

Proposed ignored output path:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\preflight\
```

Proposed generated files:

```text
media_test_set_manifest.json
media_preflight_report.json
media_preflight_readback.md
tooling_readiness_report.json
validation_report.json
```

Generated output must be labeled:

```text
preflight_readback_only
generated_derived
noncanonical
metadata_write_status = not_approved
public_use_status = blocked
canonical_writeback = none
```

## Helper Phases

### Phase A: Filesystem-Only Preflight

Allowed only after implementation approval:

- read the exact four configured paths;
- record existence, extension, file size, file modified time, and requested timecode range;
- confirm output path is under ignored App `out/`;
- detect whether `ffprobe`, `ffmpeg`, and `mediainfo` are available;
- write a preflight/readback report under ignored App `out/`;
- report blockers without touching media folders.

Do not read entire large video files for checksums by default. Full-file hashing of raw videos should require separate approval because it can be slow and looks more like media processing than a lightweight preflight.

### Phase B: Read-Only Stream Metadata

Allowed only if the exact inspection tool path and command flags are separately approved:

- run read-only `ffprobe` or equivalent against the exact four files only;
- record duration, codec, dimensions, frame rate, stream list, and audio-track presence;
- write output only under ignored App `out/`;
- stop if the tool writes sidecars, thumbnails, frame extracts, cache files, or source-folder artifacts.

Phase B is not approved by this proposal unless implementation approval explicitly includes the inspection tool and command boundary.

## No-Side-Effect Policy

Before any helper runs, Raw Footage/App policy should require:

- no source media move, copy, rename, normalize, transcode, re-encode, or deletion;
- no source-folder sidecars, thumbnails, proxies, frame extracts, clip extracts, checksum files, cache folders, or generated derivatives;
- no broad folder scan beyond the exact configured four paths and their immediate parent-directory side-effect check;
- no Media Library metadata, reviewed-state, tag, species, biome, system, chronicle, or project writes;
- no Supabase, Planner, Storage, schema, migration, graph, vector, App runtime, Web, Content, Research, DaVinci, public-output, or canonical writes;
- no model install, model download, model execution, API/model call, cloud upload, credential use, paid service, or payment method;
- no public captions, alt text, species-card copy, chronicle copy, Daphnia proof, establishment/reproduction/clearing claim, or media publication implication.

The future helper should prove no source-folder side effects by checking only the immediate parent folders of the four selected source files before and after the preflight. It should not scan the full raw footage library.

## Validation Requirements

A future preflight passes only if:

- every configured source path exists;
- every source path matches the approved task `398` set;
- output path stays under ignored App `out/`;
- no output is written beside raw media;
- immediate parent-folder side-effect checks are unchanged;
- no derivative media files are created;
- no model/API/cloud/credential path is used;
- no Media Library, Supabase, Planner, Storage, schema, migration, App runtime, Web, Content, Research, graph, vector, DaVinci, public-output, or canonical write occurs;
- every result is labeled preflight-only, generated-derived, noncanonical, public-use blocked, and metadata-write not approved;
- unresolved `ffprobe`/tooling, storage, model-route, Research wording, Raw Footage policy, and Financials cost gates remain explicit blockers.

## Stop Conditions

Stop before implementation if:

- App does not approve the helper path or ignored output boundary;
- Raw Footage no-side-effect/cache policy is not accepted;
- the helper would need broad folder scans;
- the helper would write beside source media;
- the helper would create frames, clips, thumbnails, proxies, sidecars, checksums, caches, or derivatives;
- inspection tooling is missing and the proposed run requires duration/codec proof;
- installing or using inspection tooling requires broad system changes;
- a model route, cloud upload, API call, credential, or payment method is needed;
- Research wording is required for ID-sensitive output;
- any output could be mistaken for model annotation, Research claim, Content asset, Media Library metadata, public copy, or canonical truth.

## Recommended Next Gate

Approve or revise only the preflight helper proposal if Wave 6 should continue as an internal test.

Recommended approval wording:

```text
Approve Wave 6 preflight helper only: add `tools/run-oli-wave6-media-preflight.js`, read only the exact four task 398 source paths, write generated preflight/readback output only under ignored `out/operation_living_intelligence/wave_6_media_visual_ai_readiness/preflight/`, perform no model/API/cloud/credential/media-processing work, create no source-folder side effects, write no Media Library/App/Supabase/Planner/Storage/public/canonical records, and run validation/readback.
```

Without that approval, do not edit App helper files, create Wave 6 generated output, run media-inspection tooling, install tools, process media, or touch raw media folders.

## Not Approved

This proposal does not approve:

- App code edits;
- helper implementation;
- generated output;
- `ffprobe`, `ffmpeg`, `mediainfo`, or dependency installation/use;
- model installation, download, execution, or route selection;
- API/model calls;
- cloud upload;
- credentials;
- paid services;
- broad media scans;
- clip/frame extraction;
- thumbnails, proxies, sidecars, caches, checksums, or derivatives;
- Media Library metadata or reviewed-state writes;
- Supabase, Planner, Storage, schema, migration, graph, vector, App runtime, Web, Content, Research, DaVinci, public-output, or canonical writes;
- public captions, alt text, species cards, chronicle copy, Daphnia proof, publication claims, sponsor language, financial commitment, legal decision, launch target, roadmap commitment, or canonical writeback.

## Verification

- Read Wave 6 design, source/runtime readiness review, Company-to-App packet, and App docs-only review.
- Read Raw Footage overview.
- Checked that `ffprobe`, `ffmpeg`, and `mediainfo` are still not available in the current shell.

No App repo file, raw media file, generated output, media metadata, model route, API, cloud upload, Supabase/Planner/Storage record, public behavior, or canonical source changed.
