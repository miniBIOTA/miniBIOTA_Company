---
id: operation_living_intelligence_wave_6_gpu_torchvision_compat_proof_readback_2026-05-16
title: Operation Living Intelligence Wave 6 GPU Torchvision Compatibility Proof Readback
domain: company_operations
last_updated: 2026-05-16
tags: [operation-living-intelligence, wave-6, gpu, cuda, pytorch, torchvision, qwen3-vl, model-stack, readback]
status: gpu_torchvision_compat_proof_passed
---
# Operation Living Intelligence Wave 6 GPU Torchvision Compatibility Proof Readback

## Result

Approved implementation completed and passed.

App helper added:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave6-gpu-torchvision-compat-proof.js
```

Generated ignored App output:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_6_media_visual_ai_readiness\gpu_torchvision_compat_proof\
```

Final App readback status:

```text
pass_wave6_gpu_torchvision_compat_proof_ready
```

## Package Route

The package route was selected from the official PyTorch previous-version table, which pairs `torch==2.7.0`, `torchvision==0.22.0`, and the CUDA 12.8 wheel index for Linux/Windows:

```text
https://pytorch.org/get-started/previous-versions/
```

The helper used only the existing ignored GPU runtime:

```text
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_gpu_runtime\python-venv\
```

The helper used only the existing ignored pip cache:

```text
M:\miniBIOTA\miniBIOTA_App\out\oli_w6_qwen3_gpu_runtime\pip-cache\
```

Approved install request:

```text
torchvision==0.22.0 --index-url https://download.pytorch.org/whl/cu128
```

Final package result:

| Field | Value |
|---|---|
| Install exit code | `0` |
| Torch before | `2.7.0+cu128` |
| Torch after | `2.7.0+cu128` |
| Installed torchvision | `0.22.0+cu128` |
| Torch CUDA version | `12.8` |

## CUDA And Import Proof

Verified passing checks:

| Check | Result |
|---|---|
| Torch import | `true` |
| CUDA available | `true` |
| Tiny CUDA tensor check | `passed` |
| GPU device | `NVIDIA GeForce RTX 5060 Ti` |
| `torchvision` import | `true`, version `0.22.0+cu128` |
| `qwen_vl_utils` import | `true` |
| `transformers` import | `true`, version `5.8.1` |
| `AutoProcessor` import | `true` |
| `Qwen3VLForConditionalGeneration` import | `true` |
| `PIL` import | `true`, version `12.2.0` |
| `accelerate` import | `true`, version `1.13.0` |
| `safetensors` import | `true`, version `0.7.0` |
| `torchaudio` importable | `false` |
| `decord` importable | `false` |
| `torchcodec` importable | `false` |
| Existing CPU proof runtime unchanged | `true` |
| Existing model cache unchanged | `true` |
| Failed validation checks | `none` |

The prior GPU Qwen3-VL stack blocker is resolved at the import level: `qwen_vl_utils` now imports inside the ignored GPU runtime.

## Boundary Kept

The helper did not call:

- `from_pretrained(...)`;
- `AutoProcessor.from_pretrained(...)`;
- any model load;
- any model download;
- any model cache mutation;
- any image/video/raw-media read;
- any media preprocessing;
- `torchaudio`;
- `decord`;
- `torchcodec`;
- `ffmpeg`.

No driver, CUDA toolkit, system Python, global PATH, admin installer, API, cloud upload, credentials, account/payment, Media Library, App runtime behavior, Supabase, Planner, Storage, schema, public output, or canonical writeback changed.

## Next Gate

Recommended next gate:

```text
Prepare a no-media/no-download GPU model-load proof using only the existing local Qwen3-VL model cache.
```

That next gate should load the model only if it can prove offline/cache-only behavior first, keep image/video input excluded, write generated readback output only under ignored App `out/`, and stop with a blocked readback if the runtime attempts network/model-cache mutation or exceeds the approved boundary.

Do not jump directly to still-image or short-video GPU inference from this readback. The dependency stack is now import-ready, but model memory behavior and offline cache-only loading remain unproven.

## Verification

- Ran `node --check tools\run-oli-wave6-gpu-torchvision-compat-proof.js`.
- Ran `node tools\run-oli-wave6-gpu-torchvision-compat-proof.js`; first sandboxed run wrote a blocked install readback due socket/network permission.
- Reran the same helper with approved escalation for the local `torchvision` CUDA wheel install inside the ignored GPU runtime only.
- Read App generated `gpu_torchvision_compat_readback.md`.
- Read App generated `gpu_torchvision_compat_readiness.json`.
- Checked official PyTorch previous-version package route for `torch==2.7.0`, `torchvision==0.22.0`, and CUDA 12.8.

No video, image, raw media, model run, model load, model download, model cache mutation, existing CPU runtime mutation, Torch mutation, App runtime behavior, Media Library metadata, Supabase/Planner/Storage/schema write, public output, cloud upload, account/payment, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical writeback changed.
