---
id: operation_living_intelligence_wave_6_qwen3_vl_local_pilot_implementation_approval_packet_2026-05-16
title: Operation Living Intelligence Wave 6 Qwen3-VL Local Pilot Implementation Approval Packet
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, qwen3-vl, local-pilot, implementation-approval, visual-ai, no-write, approval-required]
status: approval_packet_ready_user_approval_required
---
# Operation Living Intelligence Wave 6 Qwen3-VL Local Pilot Implementation Approval Packet

## Purpose

This packet defines the next possible Wave 6 implementation step after the official route recheck selected `Qwen/Qwen3-VL-2B-Instruct` local/offline as the first practical pilot proposal route.

This packet is docs-only. It does not implement anything.

No model was installed, downloaded, or run. No dependency was installed. No API call, cloud upload, credential use, media preprocessing, generated annotation, Media Library metadata write, App runtime change, Supabase/Planner/Storage write, public output, or canonical writeback is approved by creating this packet.

## Approval Need

The next step needs explicit Josue approval because it would cross into model/dependency implementation territory.

Without approval, stop here.

## Proposed Future Implementation

If approved later, App would add a narrow local pilot helper for:

```text
Model route: Qwen/Qwen3-VL-2B-Instruct
Route type: local/offline first
Output status: ignored, local, generated, candidate-only, noncanonical
```

Proposed helper path:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-qwen3-vl-local-pilot.js
```

Proposed ignored output path:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\qwen3_vl_pilot\
```

Proposed generated files:

```text
qwen3_vl_pilot_manifest.json
qwen3_vl_runtime_readiness.json
qwen3_vl_prompt_packet.md
qwen3_vl_candidate_readback.json
qwen3_vl_candidate_readback.md
validation_report.json
```

## Recommended First Input

Start with the lowest-risk media input:

```text
TEST_398_01_OPAQUE_LAKE_STILL
M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Other Photos & Videos\Biomes\Freshwater Lake\20260408_082108.jpg
```

Reason:

- still image only;
- no `ffmpeg`;
- no clip extraction;
- no audio extraction;
- no timecode handling;
- easiest raw-folder side-effect proof;
- enough to validate local model setup, prompt shape, candidate-only output, and readback discipline.

Do not start with the longer videos. Video should remain a later sub-gate after still-image setup proves safe.

## Proposed Future Scope

If approved, the future helper may:

- check for a local Python/runtime path needed to run `Qwen/Qwen3-VL-2B-Instruct`;
- install/download only the explicitly approved model/runtime dependencies, if the approval includes dependency work;
- keep model cache and generated output under explicit local paths;
- run one still-image candidate prompt against `TEST_398_01_OPAQUE_LAKE_STILL`;
- write candidate-only local readback under ignored App `out/`;
- validate no raw media parent-folder side effects;
- validate no Media Library, Supabase, Planner, Storage, App runtime, public, or canonical writes occurred.

## Proposed Future Prompt Boundary

The first prompt should avoid species certainty and avoid public copy.

Candidate prompt intent:

```text
Describe the visible scene in plain language.
List only broad visual candidates or uncertainty notes.
Do not identify species with certainty.
Do not make ecological claims.
Do not produce public captions, alt text, species-card copy, chronicle copy, or proof language.
Return candidate-only JSON with review_required=true, public_use_status=blocked, metadata_write_status=not_approved, and canonical_writeback=none.
```

## Candidate Output Fields

Any future generated candidate output should include:

| Field | Requirement |
|---|---|
| `source_path` | exact approved path |
| `test_item_id` | `TEST_398_01_OPAQUE_LAKE_STILL` for first run |
| `model_route` | `qwen3_vl_local` |
| `model_name` | `Qwen/Qwen3-VL-2B-Instruct` |
| `model_version_or_revision` | exact resolved version/revision if available |
| `prompt_version` | exact local prompt version |
| `plain_description` | nonpublic candidate description |
| `candidate_visual_labels` | broad labels only |
| `species_claim_status` | `not_a_species_identification` unless Research later approves wording |
| `confidence_notes` | plain uncertainty note |
| `review_required` | `true` |
| `raw_footage_review_status` | `pending` |
| `research_review_status` | `pending` |
| `content_review_status` | `pending` |
| `public_use_status` | `blocked` |
| `metadata_write_status` | `not_approved` |
| `canonical_writeback` | `none` |

## Required Validation

The future helper must fail if any of these are false:

- output path is under ignored App `out/`;
- source set is still exact task `398` scope;
- first run uses only `TEST_398_01_OPAQUE_LAKE_STILL`;
- raw parent folder entry counts and hashes are unchanged before/after;
- no source-folder write occurs;
- no broad raw media scan occurs;
- no video input, `ffmpeg`, frame extraction, clip extraction, audio extraction, resizing, thumbnail/proxy/sidecar/cache beside source media, checksum, derivative, or transcode occurs;
- no API call or cloud upload occurs;
- no credentials, account, payment method, rented compute, or hosted service is used;
- no Media Library metadata, reviewed state, App runtime behavior, Supabase, Planner, Storage, schema, migration, graph/vector, Web, Content, Research, public, or canonical write occurs;
- generated output is candidate-only and public-use-blocked.

## Proposed Future Stop Conditions

Stop immediately if:

- `Qwen/Qwen3-VL-2B-Instruct` cannot be run locally/offline within the approved dependency/cache boundary;
- dependency installation would require broad system changes not named in the approval;
- model cache path cannot be stated and kept local/deletable;
- the still image cannot run without preprocessing;
- any command would write beside source media;
- runtime attempts to use network, cloud, credentials, account, or paid service;
- output looks like public copy or Research evidence;
- output tries to write Media Library, Supabase, Planner, Storage, App runtime, Web, Content, Research, public, or canonical records.

## Not Approved Yet

This packet does not approve:

- App code edits;
- dependency installation;
- Python package installation;
- CUDA/runtime installation;
- model download;
- Hugging Face download;
- model cache creation;
- model execution;
- API/model calls;
- cloud upload;
- credentials;
- account/payment setup;
- video input;
- `ffmpeg` or preprocessing;
- generated annotations;
- Media Library metadata;
- App runtime behavior;
- Supabase/Planner/Storage/schema/migration/Web writes;
- public output;
- canonical writeback.

## Suggested Approval Wording

Use this only if Josue wants to proceed:

```text
Approve Wave 6 Qwen3-VL still-image local pilot implementation only: add an App helper at `tools/run-oli-wave6-qwen3-vl-local-pilot.js`, use `Qwen/Qwen3-VL-2B-Instruct` local/offline, start only with `TEST_398_01_OPAQUE_LAKE_STILL`, write ignored generated candidate/readback output only under `out/operation_living_intelligence/wave_6_media_visual_ai_readiness/qwen3_vl_pilot/`, keep output candidate-only/public-use-blocked/noncanonical, verify raw parent folders unchanged, and perform no API/cloud/upload/credentials/account/payment, no video input, no ffmpeg/preprocessing, no Media Library/App runtime/Supabase/Planner/Storage/schema/public/canonical writes. Dependency/model download/cache steps must be local, named in the readback, and stop if they require broader system changes.
```

## If Approved, Required Readback

The future readback must include:

1. exact commands run;
2. exact dependency/model/cache paths touched;
3. exact model revision if available;
4. exact source file used;
5. parent-folder before/after side-effect proof;
6. generated output file list;
7. candidate JSON/Markdown summary;
8. validation report;
9. confirmation of no API/cloud/upload/credentials/account/payment;
10. confirmation of no Media Library/App runtime/Supabase/Planner/Storage/public/canonical writes.

## Verification

- Read Wave 6 official route recheck and route-selection packet.
- Read Wave 6 model-route feasibility preflight readback.
- Read Wave 6 Phase B stream metadata readback.

No app behavior, database record, Planner record, Storage object, public site behavior, public output, schema, migration, model install/download/run, dependency install, API call, media preprocessing, generated annotation, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical source-of-truth record changed.
