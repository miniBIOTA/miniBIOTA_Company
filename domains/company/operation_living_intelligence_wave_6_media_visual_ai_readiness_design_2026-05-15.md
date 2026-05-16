---
id: operation_living_intelligence_wave_6_media_visual_ai_readiness_design_2026-05-15
title: Operation Living Intelligence Wave 6 Media And Visual AI Readiness Design
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-6, visual-ai, media, nemotron, codex, raw-footage, no-write]
status: docs_only_design
---
# Operation Living Intelligence Wave 6 Media And Visual AI Readiness Design

## Purpose

Wave 6 designs the review-safe path for using visual AI on miniBIOTA media without turning model output into media metadata, public claims, source-of-truth records, or production edits.

This is a docs-only Company design pass. It does not approve model installation, model download, model execution, API calls, cloud upload, media scan, media move, frame extraction, thumbnail generation, sidecar generation, App helper implementation, App runtime behavior, Media Library integration, DaVinci project work, Content publication, Research claim changes, Supabase writes, Planner writes, Storage writes, graph/vector writes, paid services, public output, or canonical writeback.

## Current Official Model Check

Current official/source docs checked on 2026-05-15:

| Source | Current relevance |
|---|---|
| NVIDIA technical blog, "NVIDIA Nemotron 3 Nano Omni Powers Multimodal Agent Reasoning in a Single Efficient Open Model" (`https://developer.nvidia.com/blog/nvidia-nemotron-3-nano-omni-powers-multimodal-agent-reasoning-in-a-single-efficient-open-model`) | Positions Nemotron 3 Nano Omni as a unified image, video, audio, and text reasoning model. |
| NVIDIA NIM VLM docs, "Query the NVIDIA Nemotron 3 Nano Omni API" (`https://docs.nvidia.com/nim/vision-language-models/1.7.0/examples/nemotron-3-nano-omni-30b-a3b-reasoning/api.html`) | Shows an OpenAI-compatible chat-completions style API pattern for `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`, including video input and audio-in-video options. |
| NVIDIA NeMo Megatron Bridge docs, "Nemotron-3 Nano Omni" (`https://docs.nvidia.com/nemo/megatron-bridge/nightly/models/vlm/nemotron-3-omni.html`) | Describes the model as a 30B-A3B MoE multimodal reasoning model for image, video, audio, and text, with conversion/fine-tuning workflows. |
| NVIDIA NeMo AutoModel docs, "Nemotron-3-Nano-Omni" and "Omni Models" (`https://docs.nvidia.com/nemo/automodel/nightly/model-coverage/omni/nvidia/nemotron-omni.html`, `https://docs.nvidia.com/nemo/automodel/nightly/model-coverage/omni/index.html`) | Confirms the Nemotron Omni model family and current training/fine-tuning support, but some pages emphasize text/image/audio coverage; implementation must verify video support for the exact route used. |
| NVIDIA DGX Spark LM Studio and vLLM docs (`https://build.nvidia.com/spark/lm-studio/overview`, `https://build.nvidia.com/spark/vllm/instructions`) | Indicate local-style routes exist on DGX Spark-class hardware, with documented memory/storage requirements far above the current 16GB workstation GPU assumption. |
| Twelve Labs docs (`https://docs.twelvelabs.io/`, `https://docs.twelvelabs.io/docs/search`, `https://docs.twelvelabs.io/api-reference/create-embeddings-v2`, `https://docs.twelvelabs.io/v1.3/api-reference/upload-content/direct-uploads/create`) | Confirm Twelve Labs remains a video-understanding platform with Search, Analyze, and Embed capabilities, API-key use, upload requirements, retention constraints for async embeddings, and model/version migration considerations. |

Implementation-time rule:

```text
Do not assume a Nemotron route is usable until the exact route proves
availability, license/commercial terms, input limits, privacy/retention,
cost, hardware/storage needs, and video/audio support for the selected files.
```

## Design Decision

Proceed with Wave 6 as a **readiness design**, not implementation.

The preferred future lane remains:

```text
Codex orchestrates the local/private candidate-annotation workflow.
NVIDIA Nemotron 3 Nano Omni, or the best current Nemotron omni/video-capable
deployment, is the first analysis engine if it can satisfy the gates.
Qwen remains fallback/benchmark only.
Twelve Labs remains a later cloud benchmark only after local/private output
shows a specific gap and cloud-upload approval is granted.
```

## Bounded Media Set

Wave 6 inherits the already selected task `398` media set. Do not expand it during the first run protocol.

| Test item | File/timecode | Role | Boundary |
|---|---|---|---|
| `TEST_398_01_OPAQUE_LAKE_STILL` | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Other Photos & Videos\Biomes\Freshwater Lake\20260408_082108.jpg`; still image | Easy context | Public candidate opacity context only; blocks Daphnia-causation, failure framing, metadata, species-image promotion, and public caption approval. |
| `TEST_398_02_FIELD_SAMPLING` | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026\20260408_112606.mp4`; `00:02-00:11` | Easy context | Public candidate sampling context only; blocks organism ID, public species claim, and claims that this sample produced the introduced Daphnia. |
| `TEST_398_03_SAMPLE_INTRODUCTION` | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026\20260408_140153.mp4`; `00:45-00:55` | Event context | Public candidate sample-introduction context only; blocks establishment, reproduction, clearing, completed-food-web, and metadata-write claims. |
| `TEST_398_04_MICROCRUSTACEAN_BLOCKING` | `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos\2026\20260408_121519.mp4`; `00:06-01:13` | ID-sensitive blocking test | Review-needed raw evidence only; blocks `Daphnia ambigua`, establishment, reproduction, clearing, public Daphnia proof, and species-image/caption use. |

Do not include held-out, excluded, Mesostoma, zoea, handling, later-comparison, full-library, or newly discovered media unless a domain owner explicitly reopens the media set.

## Owner Boundaries

| Owner | Wave 6 role |
|---|---|
| Company | Coordinates readiness gates, source-of-truth boundaries, downstream owner routing, and approval posture. |
| Raw Footage | Confirms exact source paths/timecodes, read-only handling, no file moves, no source-folder side effects, and temporary cache policy. |
| App | Owns any future helper/runtime boundary, local output path, credential handling, model runner integration, Media Library separation, and proof of no live writes. |
| Content | Owns production usefulness, story role labels, pull-sheet/rough-sequence review, DaVinci use decisions, and publication separation. |
| Research | Owns organism/claim safety, uncertainty wording, and rejection/downgrade of model over-identification. |
| Financials | Reviews local compute/storage burden, cloud/API usage, Twelve Labs free/paid threshold, and any purchase/subscription question. |
| Web/Brand/Growth | Consume only reviewed, public-safe outputs later; no Wave 6 output is public messaging. |

## Candidate Annotation Shape

Future output, if approved later, should be noncanonical and review-first.

Minimum candidate annotation fields:

| Field | Required |
|---|---|
| `candidate_id` | Yes |
| `test_item_id` | Yes |
| `source_path` | Yes |
| `source_timecode_start` | Yes for video |
| `source_timecode_end` | Yes for video |
| `source_kind` | Yes |
| `source_publicness_label` | Yes |
| `model_provider` | Yes |
| `model_name` | Yes |
| `model_version_or_route` | Yes |
| `prompt_version` | Yes |
| `run_timestamp` | Yes |
| `plain_visual_description` | Yes |
| `broad_candidate_label` | Yes |
| `candidate_species_label` | Optional and review-blocked |
| `claim_support_type` | Yes |
| `advisory_confidence` | Yes |
| `story_role` | Yes |
| `quality_usefulness_label` | Yes |
| `evidence_caveats` | Yes |
| `blocked_public_uses` | Yes |
| `raw_footage_review_status` | Yes |
| `content_review_status` | Yes |
| `research_review_status` | Yes |
| `metadata_write_status` | Must be `not_approved` |
| `public_use_status` | Must be `blocked` |
| `canonical_writeback` | Must be `none` |

Future local files, if implementation is later approved, should live under App's ignored `out/` tree, not in raw media folders:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\
```

Suggested future file names:

```text
media_test_set_manifest.json
model_route_readiness.md
candidate_annotations.jsonl
candidate_pull_sheet.md
rough_sequence_review.md
validation_report.json
readback_report.md
```

This file list is a design recommendation only. It does not approve helper creation or generated output.

## Model Route Readiness Gates

Before any model run, the future App/Company handoff must answer:

| Gate | Required proof |
|---|---|
| Exact model route | Hosted NIM/API, self-hosted NIM, Hugging Face/local/vLLM, DGX/Spark-style, Qwen fallback, or other named route. |
| Video/audio support | The chosen route accepts the selected still/video/audio inputs and preserves timestamps enough for pull sheets. |
| Hardware/storage | Required GPU VRAM, system RAM, disk, model-cache size, video preprocessing needs, and temporary output footprint are known. |
| License/commercial terms | Terms are acceptable for internal miniBIOTA workflow testing. |
| Privacy/retention | No raw media leaves local/private boundaries unless explicitly approved; hosted routes document retention/deletion behavior. |
| Credential path | Any API key/OAuth/token path is ignored/local/App-owned and not committed. |
| Cost | No payment method, paid plan, usage billing, or subscription is introduced without Financials review and user approval. |
| Input constraints | Clip duration, frame sampling, file size, format, and audio-in-video behavior are known before selecting the command shape. |
| Failure behavior | The run stops rather than broadening media scope, writing metadata, uploading extra files, or silently dropping labels. |

## Future Run Protocol

A future run can be proposed only after the readiness gates above are answered.

Recommended future protocol:

1. Confirm the four-item media manifest.
2. Confirm no source paths are inside a git repo and no outputs are inside raw media folders.
3. Generate an operator preflight report only; no model call yet.
4. If approved, run the model on the four exact items and timecodes only.
5. Write candidate annotations and a human-readable pull sheet to ignored local App output only.
6. Validate that publicness labels, blocked uses, review owners, and `not_approved` metadata status survived.
7. Read back the output for Company, Raw Footage, Content, Research, App, and Financials review.
8. Stop before any metadata, App, Web, Content, Research, graph, vector, Supabase, Planner, Storage, public, DaVinci, or canonical write.

## Pull-Sheet And Rough-Sequence Boundary

A future pull sheet may propose:

- source item;
- in/out time;
- broad visual description;
- story role;
- quality/usefulness label;
- caveats;
- review owner;
- blocked uses.

A future rough sequence may suggest this review order:

1. Opaque lake still.
2. Field sampling.
3. Sample introduction.
4. Microcrustacean uncertainty/blocking test.

The rough sequence must not imply causation, Daphnia establishment, reproduction, clearing, completed food web, publication readiness, or public proof.

This does not approve opening DaVinci, editing a timeline, importing media, creating proxies, extracting frames, making thumbnails, publishing, or changing Content/Media records.

## Twelve Labs Boundary

Twelve Labs remains a later benchmark, not the first implementation lane.

Current official docs confirm Twelve Labs can support video search, analysis, embeddings, uploads, and API-key workflows, but that also means it introduces cloud upload, credential, retention, index, model-version, and possible billing questions.

No Twelve Labs account/API key/upload/benchmark is approved now.

A future Twelve Labs benchmark would require:

- a completed and reviewed Nemotron/Codex run first;
- a specific gap to test, such as timestamp precision, segmentation, recall, search usefulness, structured metadata usefulness, or rough-sequence usefulness;
- approval for the exact four files/timecodes only;
- account/API-key handling plan;
- upload/retention/deletion readback;
- free-tier usage and payment-method readback;
- proof outputs remain noncanonical;
- Financials review before any paid plan or payment method.

## Stop Conditions

Stop immediately if any future step would:

- scan beyond the four selected items;
- upload raw media without explicit cloud-upload approval;
- require a payment method, subscription, paid API, or usage billing without Financials approval;
- install/download a large model without approval;
- write to raw media folders;
- create persistent extracted frames, thumbnails, proxies, sidecars, or checksums outside an approved ignored output path;
- write to Supabase, Planner, Storage, graph, vector, App runtime, Web, Content, Research, or Media Library records;
- mark media as reviewed;
- create public captions, alt text, species card copy, chronicle copy, or publication notes;
- treat candidate species IDs as Research-approved;
- imply Daphnia establishment, reproduction, clearing, completed food web, or public proof;
- store credentials in git or visible docs;
- fail to preserve source path/timecode, publicness labels, blocked uses, review owner, metadata status, public-use status, or canonical-writeback status.

## Recommended Next Step

Prepare a **Wave 6 source/runtime readiness review** before any App design-review packet or helper proposal.

That review should verify:

- the four selected file paths still exist;
- exact file sizes/durations/codecs can be checked read-only;
- App `out/` remains ignored;
- local `ffprobe`/`ffmpeg` or equivalent inspection tools are available or explicitly deferred;
- current workstation GPU/storage assumptions are still true;
- a concrete Nemotron route is selected or explicitly blocked;
- any hosted/API route has privacy, retention, upload, credential, and cost answers;
- Research has allowed/blocked wording for the ID-sensitive item;
- Raw Footage confirms no source-folder side effects;
- Financials confirms no spend or payment method is involved.

Do not proceed to a model run from this design alone.

## Not Approved

This design does not approve:

- model installation;
- model download;
- model execution;
- API/model calls;
- NVIDIA NIM setup;
- Hugging Face download;
- Qwen benchmark;
- Twelve Labs account, API key, upload, benchmark, index, or paid plan;
- cloud media upload;
- media scan;
- media file move/copy;
- frame extraction;
- thumbnail/proxy/sidecar generation;
- generated output;
- App helper implementation;
- App runtime behavior;
- Media Library integration;
- DaVinci project open/edit/export;
- Content publication;
- Research claim changes;
- Web/public behavior;
- Supabase writes;
- Planner writes;
- Storage writes;
- graph/vector writes;
- media metadata writes;
- public captions, alt text, species cards, chronicle copy, sponsor language, financial commitment, legal decision, launch target, roadmap commitment, or canonical writeback.
