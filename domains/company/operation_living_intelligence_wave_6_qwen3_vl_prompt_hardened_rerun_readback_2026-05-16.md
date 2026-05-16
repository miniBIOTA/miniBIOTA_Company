---
id: operation_living_intelligence_wave_6_qwen3_vl_prompt_hardened_rerun_readback_2026-05-16
title: Operation Living Intelligence Wave 6 Qwen3-VL Prompt-Hardened Rerun Readback
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, qwen3-vl, prompt-hardened-rerun, visual-ai, local-output, public-use-blocked, noncanonical]
status: pass_with_review_required_wave6_qwen3_vl_prompt_hardened_still_image_candidate_ready
---
# Operation Living Intelligence Wave 6 Qwen3-VL Prompt-Hardened Rerun Readback

## Purpose

This records the approved prompt-hardened still-image rerun for the Wave 6 Qwen3-VL local pilot.

Approval was interpreted as limited to the existing still-image pilot boundary:

```text
TEST_398_01_OPAQUE_LAKE_STILL only
existing local Qwen/Qwen3-VL-2B-Instruct runtime/cache only
ignored App candidate/readback output only
candidate-only / review-required / public-use-blocked / noncanonical
no video input
no GPU/CUDA runtime change
no ffmpeg or preprocessing
no API/cloud/upload/credentials/account/payment
no Media Library/App runtime/Supabase/Planner/Storage/schema/public/canonical writes
```

## Files And Output

App helper:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-qwen3-vl-local-pilot.js
```

Generated candidate/readback output:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\qwen3_vl_pilot\
```

Existing local runtime:

```text
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_runtime\
```

Existing local model cache:

```text
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_model_cache\
```

Input source:

```text
TEST_398_01_OPAQUE_LAKE_STILL
M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Other Photos & Videos\Biomes\Freshwater Lake\20260408_082108.jpg
```

## Helper Update

The App helper prompt was hardened to block:

- environment-quality judgments;
- care-quality judgments;
- health/suitability judgments;
- causal explanations;
- species certainty;
- public-facing copy;
- metadata or canonical writeback.

The helper now records:

```text
prompt_version = wave6_qwen3_vl_still_image_candidate_v2_prompt_hardened_no_environment_judgment
```

The helper validation also now checks that the parsed candidate does not contain environment-quality judgment terms in the candidate fields.

## Commands Run

Syntax check:

```powershell
node --check tools\run-oli-wave6-qwen3-vl-local-pilot.js
```

First prompt-hardened rerun:

```powershell
node tools\run-oli-wave6-qwen3-vl-local-pilot.js --run
```

The first prompt-hardened rerun stayed inside the approved boundary, but the model response was truncated before valid JSON closed. Validation blocked the output with:

```text
blocked_wave6_qwen3_vl_local_pilot_readback_only
```

The prompt was then tightened to ask for compact JSON and the generation token cap was raised to `512`.

Second prompt-hardened rerun:

```powershell
node tools\run-oli-wave6-qwen3-vl-local-pilot.js --run
```

The second rerun passed with review required.

## Final Readback Result

Status:

```text
pass_with_review_required_wave6_qwen3_vl_still_image_candidate_ready
```

Runtime:

| Field | Result |
|---|---|
| Model | `Qwen/Qwen3-VL-2B-Instruct` |
| Device | `cpu` |
| CUDA available | `false` |
| Runtime status | `venv_already_present` |
| Dependency install attempted | `false` |
| Dependency status | `dependencies_already_present` |
| Candidate parse status | `parsed_json` |
| Failed validation checks | `0` |

Final validation checks included:

```text
output_path_is_app_ignored_out_tree = true
app_gitignore_ignores_out = true
exact_one_still_image_scope = true
source_path_exists = true
raw_media_parent_folder_unchanged = true
no_video_input = true
no_ffmpeg_or_preprocessing = true
no_api_cloud_upload_credentials_account_payment = true
no_media_library_app_runtime_supabase_planner_storage_schema_public_canonical_writes = true
candidate_output_generated_if_run_succeeded = true
candidate_output_guardrails_present = true
candidate_output_prompt_hardened_no_environment_quality_judgment = true
dependency_install_local_to_ignored_out_if_attempted = true
model_cache_local_to_ignored_out = true
```

## Candidate Summary

Parsed candidate JSON:

```json
{
  "prompt_version": "wave6_qwen3_vl_still_image_candidate_v2_prompt_hardened_no_environment_judgment",
  "plain_description": "A rectangular aquarium with murky, yellowish-green water, containing aquatic plants and a small snail.",
  "candidate_visual_labels": [
    "aquarium",
    "water",
    "plants",
    "snail",
    "aquatic environment",
    "aquatic plant",
    "aquatic life"
  ],
  "confidence_notes": "The snail is small and its species is not clearly identifiable.",
  "species_claim_status": "not_a_species_identification",
  "review_required": true,
  "public_use_status": "blocked",
  "metadata_write_status": "not_approved",
  "canonical_writeback": "none"
}
```

Interpretation:

- the hardened prompt removed the earlier environment-quality judgment issue;
- the candidate remains broad visual description, not a species identification;
- output remains review-required, public-use-blocked, metadata-write-not-approved, and canonical-writeback-none;
- the result is useful as a local candidate-output proof only.

## Raw Footage Side-Effect Check

Raw parent folder:

```text
M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Other Photos & Videos\Biomes\Freshwater Lake
```

Side-effect result:

| Field | Result |
|---|---:|
| Entry count before | `430` |
| Entry count after | `430` |
| Entries hash changed | `false` |
| Parent folder unchanged | `true` |

No raw media files, folders, names, metadata, thumbnails, proxies, sidecars, frame exports, clips, transcodes, checksums, or derivatives were created or changed.

## Decision

Wave 6 still-image local visual-AI candidate output is now useful enough to retain as a bounded local proof.

It is not enough to approve video, GPU/CUDA runtime changes, preprocessing, model-derived Media Library metadata, Research wording, public copy, public species cards, generated annotation workflows, App runtime integration, or canonical writeback.

## Recommended Next Gate

Stop before video.

If Wave 6 continues, the next safe gate should be docs-only:

```text
Wave 6 video/GPU/runtime decision packet or owner review of still-image candidate usefulness
```

Any video input, GPU/CUDA runtime change, dependency/model-cache change, preprocessing, generated annotation expansion, Media Library/App runtime/database/public/canonical write, cloud/API route, upload, account, credential, payment, or paid service still requires separate explicit approval.

## Verification

- Ran App helper syntax check.
- Ran the prompt-hardened still-image helper twice within the approved local boundary.
- Read generated `validation_report.json`.
- Read generated `qwen3_vl_candidate_readback.json`.
- Confirmed final candidate parsed as JSON.
- Confirmed final candidate retained required public/canonical guardrails.
- Confirmed raw parent folder stayed unchanged at `430 / 430` entries.

No video input, GPU/CUDA runtime change, `ffmpeg`, preprocessing, media export, frame extraction, thumbnail/proxy/sidecar/cache/checksum/derivative, API/model call outside local cache, cloud upload, credential, account/payment setup, Media Library metadata, App runtime behavior, Supabase/Planner/Storage/schema write, public output, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical writeback changed.
