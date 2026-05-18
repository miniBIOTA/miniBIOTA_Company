---
id: operation_living_intelligence_wave_6_app_design_review_packet_2026-05-15
title: Operation Living Intelligence Wave 6 App Design Review Packet
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-6, app-design-review, visual-ai, media, runtime-readiness, no-write]
status: design_review_packet_ready
---
# Operation Living Intelligence Wave 6 App Design Review Packet

## Purpose

This packet is the Company-to-App design review handoff for **Operation Living Intelligence Wave 6: Media And Visual AI Readiness**.

This is a source/runtime readiness review packet only. Company is asking App to review the safe preflight boundary before any model run, helper implementation, generated output, media operation, or App runtime integration.

It does not approve App code changes, helper implementation, model installation, model download, model execution, NVIDIA NIM setup, Hugging Face/local weight download, API/model calls, Qwen benchmark, Twelve Labs account/API key/upload/benchmark/index/paid plan, cloud media upload, media scan, clip extraction, frame extraction, thumbnail/proxy/sidecar generation, generated output, App runtime behavior, Media Library integration, DaVinci work, Content publication, Research claim changes, media metadata writes, Web/public behavior, Supabase writes, Planner writes, Storage writes, graph/vector writes, paid services, public captions/alt text/species cards/chronicle copy, sponsor language, financial commitment, legal decision, launch target, roadmap commitment, or canonical writeback.

## App Context Read

Company checked App context read-only on 2026-05-15.

| App source | Finding |
|---|---|
| `M:\miniBIOTA\miniBIOTA_App\AGENTS.md` | App owns internal app behavior, Planner runtime/schema/UI, Media Library runtime/schema/indexing, Supabase access paths, migrations, secret-key paths, and App-owned implementation decisions. App launch, live actions, Supabase writes, Storage writes, schema/migration work, telemetry controls, and App behavior changes require explicit approval when relevant. |
| `M:\miniBIOTA\miniBIOTA_App\.gitignore` | `out/` is ignored. Local outputs should stay under ignored output paths and out of raw media folders. |
| `M:\miniBIOTA\miniBIOTA_App\memory\05-supabase-and-storage-rules.md` | Media Library edits, reviewed-state changes, media tags, media links, Storage changes, schema work, Planner writes, Site Admin writes, and telemetry controls are live operational write risks. |
| Existing OLI App pattern | Earlier OLI helper work used ignored `out/operation_living_intelligence/` output and local validation/readback only after separate approval. |
| Wave 5 App review | App accepted ignored `out/` output for a future separately approved helper, while keeping generated output, API/model calls, runtime behavior, and canonical writeback unapproved. |

## Design Inputs

App should review these Company sources:

| Source | Path |
|---|---|
| Wave 6 design | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_6_media_visual_ai_readiness_design_2026-05-15.md` |
| Wave 6 source/runtime readiness review | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_6_source_runtime_readiness_review_2026-05-15.md` |
| Projection matrix | `M:\miniBIOTA\miniBIOTA_Company\skills\coordinate-cross-domain-priorities\reference\operation-living-intelligence-data-projection-matrix.md` |
| Session closeout | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_session_closeout_2026-05-15.md` |
| Company brief | `M:\miniBIOTA\miniBIOTA_Company\domains\company\company_brief.md` |
| App brief | `M:\miniBIOTA\miniBIOTA_Company\domains\app\app_brief.md` |
| Raw Footage overview | `M:\miniBIOTA\miniBIOTA_Company\domains\raw-footage\raw_footage_overview.md` |

## Current Readiness Finding

Company's current readiness result is:

```text
source_available_runtime_partially_ready_model_route_not_ready_implementation_deferred
```

Confirmed:

- the four task `398` source files exist;
- App `out/` is ignored;
- the proposed Wave 6 output path does not exist yet;
- Node `v24.14.1` is available;
- `npm.cmd 11.11.0` is available;
- `nvidia-smi` is available;
- `nvidia-smi` reports `NVIDIA GeForce RTX 5060 Ti`, `16311 MiB`, driver `595.79`.

Blocked or unresolved:

- `ffprobe`, `ffmpeg`, and `mediainfo` are not on PATH;
- storage-free checks were denied;
- exact Nemotron route is not selected;
- local 16GB VRAM does not prove full Nemotron local feasibility;
- route-specific license/commercial terms are unresolved;
- route-specific input limits are unresolved;
- route-specific audio-in-video support is unresolved;
- route-specific privacy/retention terms are unresolved;
- route-specific credential path is unresolved;
- route-specific cost and payment-method posture is unresolved;
- Research wording for the ID-sensitive microcrustacean item is still needed before model output review;
- Raw Footage no-side-effect/cache policy is still needed before any run.

## Requested App Decision

Company is asking App to answer design questions only:

| Question | Needed App answer |
|---|---|
| Read-only media inspection | Should App own a preflight-only media inspection helper or dependency check before any model call? |
| `ffprobe` or equivalent | Is `ffprobe`/`ffmpeg` an acceptable future dependency for duration/codec/stream readback, or should App prefer another read-only inspection path? |
| Output boundary | Is `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\` acceptable for future ignored, rebuildable preflight/readback output? |
| Raw media boundary | What should App require to prove no raw media folder writes, source-folder sidecars, thumbnails, proxies, extracted frames, checksum sweeps, or file moves? |
| Helper sequencing | Should the first future helper be preflight/readback-only before any model-route selection or model call? |
| Model route separation | How should App keep media preflight, model route selection, credentials, generated annotations, Media Library metadata, and App runtime behavior separated? |
| Credential handling | What App-owned ignored/local path should be required before any hosted/API/NIM route is considered? |
| Generated output | What validation should block candidate annotations from becoming Media Library metadata, public copy, Research claims, graph/vector data, or canonical truth? |
| Storage posture | What minimum storage-free proof or cache policy should App require before model downloads, model caches, or generated derivatives are proposed? |
| Stop conditions | What should stop a future App packet before it becomes implementation? |

## Recommended App Safety Position

Company recommends App classify the next stage as:

| Surface | Classification |
|---|---|
| App design review | Allowed as docs-only review. |
| Source file existence | Already checked by Company; App may review the evidence without touching media. |
| Read-only media inspection helper | Future proposal only; not approved by this packet. |
| Local ignored output path | Acceptable candidate boundary if App agrees; creating output still needs approval. |
| `ffprobe`/media inspection dependency | Needs App review before install, vendoring, or helper use. |
| Model route selection | Deferred; not required for the readiness packet. |
| Model install/download/run | Not approved. |
| External API/model call | Not approved. |
| Cloud upload | Not approved. |
| Generated candidate annotations | Not approved. |
| Media Library integration | Not approved. |
| Media metadata writes | Not approved. |
| Supabase/Planner/Storage writes | Not approved. |
| App runtime behavior | Not approved. |
| DaVinci/Content workflow execution | Not approved. |
| Public/Web behavior | Not approved. |
| Canonical writeback | Must remain `none`. |

## Bounded Media Set

App should treat the task `398` set as the maximum source set for readiness review.

| Test item | Source path / timecode | App review point |
|---|---|---|
| `TEST_398_01_OPAQUE_LAKE_STILL` | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Other Photos & Videos\Biomes\Freshwater Lake\20260408_082108.jpg` | Still-image source exists; no metadata/public use approved. |
| `TEST_398_02_FIELD_SAMPLING` | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026\20260408_112606.mp4`; `00:02-00:11` | Video source exists; duration/codec not proven. |
| `TEST_398_03_SAMPLE_INTRODUCTION` | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026\20260408_140153.mp4`; `00:45-00:55` | Video source exists; large file size makes route input limits important. |
| `TEST_398_04_MICROCRUSTACEAN_BLOCKING` | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026\20260408_121519.mp4`; `00:06-01:13` | ID-sensitive blocking test; Research wording required before model output review. |

Do not expand the set during App review.

## Proposed Future Preflight Output

If App later approves a preflight-only helper and Josue separately approves implementation, Company recommends the ignored output folder:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\
```

Possible future preflight files:

```text
media_test_set_manifest.json
media_inspection_report.json
media_inspection_readback.md
runtime_readiness_report.md
validation_report.json
```

These files are not approved by this packet.

Candidate annotations, pull sheets, rough-sequence reviews, model outputs, or generated media derivatives should remain out of scope until after preflight/design review.

## Required App Review Guardrails

App should reject a future helper design if it cannot prove:

- output path stays under ignored `out/`;
- no raw media folder writes;
- no source-folder sidecars, thumbnails, proxies, extracted frames, or generated derivatives;
- no file moves or copies;
- no broad media scans;
- no Media Library metadata writes;
- no media reviewed-state writes;
- no species/biome/system/chronicle/tag links;
- no Supabase, Planner, Storage, schema, migration, graph, vector, App runtime, Web, Content, Research, DaVinci, public-output, or canonical writes;
- no model installation, download, execution, API call, hosted route, credential use, or upload;
- no paid service or payment method;
- every source path/timecode remains exact and bounded to the task `398` set;
- media inspection output cannot be mistaken for candidate annotation or public proof;
- future candidate annotations must preserve `metadata_write_status = not_approved`, `public_use_status = blocked`, and `canonical_writeback = none`;
- stop conditions fire when inspection tooling, storage, route, credential, privacy, Research wording, Raw Footage cache policy, or Financials cost posture is unresolved.

## Handoff Message For App

Use this message when opening the App design review:

```text
Please review the Company Operation Living Intelligence Wave 6 source/runtime readiness packet as a design-only App review.

At this gate, Company is not asking for implementation. The requested decision is whether App accepts the proposed source/runtime readiness boundary for a future preflight-only helper or review step.

Key App questions:
- Should Wave 6 have a preflight-only media inspection step before any model route or model call?
- Is ffprobe/ffmpeg acceptable for read-only duration/codec/stream metadata, or should another inspection path be used?
- Is out/operation_living_intelligence/wave_6_media_visual_ai_readiness/ acceptable for ignored preflight/readback output if later approved?
- What must App require to prove no raw media folder writes, sidecars, thumbnails, proxies, frame extraction, Media Library metadata, Supabase/Planner/Storage writes, App runtime behavior, cloud upload, or canonical writeback?
- Should model route selection stay deferred until after preflight?

Not approved:
- No App code changes.
- No helper implementation.
- No generated output.
- No model install/download/run.
- No NVIDIA NIM setup.
- No Hugging Face/local weight download.
- No API/model call.
- No Qwen benchmark.
- No Twelve Labs account/key/upload/benchmark/index/paid plan.
- No media scan beyond exact source-readiness evidence.
- No clip/frame extraction.
- No thumbnails, proxies, or sidecars.
- No Media Library metadata or reviewed-state writes.
- No Supabase/Planner/Storage writes.
- No App runtime behavior.
- No DaVinci work.
- No public output.
- No canonical writeback.
```

## Next Company Action

Do not implement an App helper, install media inspection tooling, generate output, select a model route, run a model, upload media, or create Planner/Supabase/App changes from Company without explicit approval for that specific action.

If Josue approves the next move after this packet, recommended options are:

1. Ask App to perform a docs-only design review note for Wave 6 source/runtime readiness.
2. Resolve the media-inspection tooling question first.
3. Resolve the exact Nemotron route question first.
4. Pause Wave 6 implementation and continue to Wave 7 docs-only.

## Verification

- Read App `AGENTS.md`.
- Read App `memory/05-supabase-and-storage-rules.md`.
- Read App Wave 5 design review note for local ignored-output precedent.
- Read Wave 6 media/visual AI design and source/runtime readiness review.
- No App repo files were changed.
- No generated output was created.
- No media files were moved, copied, processed, scanned beyond file existence metadata, or written.
- No model install/download/run, API call, cloud upload, Media Library metadata, Supabase/Planner/Storage write, App runtime behavior, DaVinci work, graph/vector data, paid service, public output, commitment, or canonical writeback changed.

