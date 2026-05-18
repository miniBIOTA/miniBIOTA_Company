---
id: operation_living_intelligence_wave_3_app_design_review_packet_2026-05-15
title: Operation Living Intelligence Wave 3 App Design Review Packet
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-3, app-design-review, species, public-history, no-write, lake-post-seal]
status: local_helper_completed
---
# Operation Living Intelligence Wave 3 App Design Review Packet

## Purpose

This packet is the Company-to-App design review handoff for **Operation Living Intelligence Wave 3: Species And Public History Expansion**.

The user approved continuing to the App design-review gate on 2026-05-15. Company interprets that as approval to prepare the App design-review handoff, not as approval to edit App helper files, generate graph output, write live records, or change public behavior.

This packet asks App to review the future no-write local JSONL/readback shape only.

It does not approve App helper implementation, graph generation, Memgraph/Docker use, Supabase/Planner writes, schema changes, Storage changes, species/image/media metadata changes, public site behavior, Content copy, Research claim changes, automation, paid services, durable graph runtime, canonical writeback, or source-of-truth migration.

App completed the docs-only review note on 2026-05-15:

```text
M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave3-design-review.md
```

Result: App accepted the proposed ignored `out/operation_living_intelligence/wave_3_species_public_history/lake_post_seal/` output path, JSONL/readback-first package shape, blocked-edge guardrails, validation/readback posture, and `none` canonical writeback boundary for a future separately approved helper. The next gate is explicit implementation approval for the smallest local helper and generated ignored output.

Josue later approved that smallest implementation gate. App added and verified the local helper and Company recorded the result here:

```text
domains/company/operation_living_intelligence_wave_3_jsonl_readback_helper_2026-05-15.md
domains/company/operation_living_intelligence_wave_3_readback_review_2026-05-15.md
```

## App Context Read

Company checked App context read-only on 2026-05-15.

| App source | Finding |
|---|---|
| `M:\miniBIOTA\miniBIOTA_App\AGENTS.md` | App owns internal app behavior, Planner runtime/schema/UI, Supabase access paths, Media Library runtime/schema/indexing, migrations, secret-key paths, and App-owned implementation decisions. Live app actions, Supabase writes, Storage writes, telemetry controls, and migrations require explicit approval. |
| `M:\miniBIOTA\miniBIOTA_App\.gitignore` | `out/` is ignored; `.env`, `.env.local`, local config, secrets, logs, and temp files are ignored. |
| `M:\miniBIOTA\miniBIOTA_App\memory\00-index.md` | Supabase remains structured-record/schema truth when current live records matter; App memory/skills route implementation work. |
| `M:\miniBIOTA\miniBIOTA_App\memory\05-supabase-and-storage-rules.md` | Default posture is no writes without approval. Planner, Source Map links, story beats, story threads, loops, observations, media review state, public/admin records, Storage, schema, and telemetry are live operational write areas. |
| `M:\miniBIOTA\miniBIOTA_App\skills\supabase-safety-review\SKILL.md` | Supabase/Storage/schema/secret-key/telemetry work is read-only by default and requires explicit approval before any write. |
| `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave2-design-review.md` | Wave 2 established the App-side docs-only review pattern and accepted JSONL/readback-first, ignored-output, no-write implementation as the correct next-helper shape after separate approval. |

## Design Inputs

App should review these Company sources:

| Source | Path |
|---|---|
| Wave 3 design | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_3_species_public_history_design_2026-05-15.md` |
| Source availability review | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_3_lake_post_seal_source_availability_review_2026-05-15.md` |
| No-write App proposal | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_3_no_write_app_implementation_proposal_2026-05-15.md` |
| Wave 1 public reuse sidecar boundary | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_1_public_reuse_boundary_2026-05-15.md` |
| Wave 1 public reuse sidecar generation | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_1_1_public_reuse_sidecar_generation_2026-05-15.md` |
| Wave 2 readback review | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_2_readback_review_2026-05-15.md` |
| Task `409` schema/data audit | `M:\miniBIOTA\miniBIOTA_Company\archive\superseded\operation-living-intelligence\operation_living_intelligence_task_409_schema_data_audit_2026-05-15.md` |
| Projection matrix | `M:\miniBIOTA\miniBIOTA_Company\skills\coordinate-cross-domain-priorities\reference\operation-living-intelligence-data-projection-matrix.md` |

## Requested App Decision

Company is asking App to answer design questions only:

| Question | Needed App answer |
|---|---|
| Output path | Is `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_3_species_public_history\lake_post_seal\` acceptable for future ignored, rebuildable output? |
| First implementation shape | Should Wave 3 stay JSONL/readback-only before any Cypher/Memgraph work? |
| Source refresh pattern | Should a future helper mirror the Wave 1/Wave 2 protected read pattern, or use another App-owned read-only path? |
| Source manifest | Are the selected source families and excluded families appropriate for App's safety model? |
| Species/public-history modeling | Are primary, public-context, and internal/review-required species separated clearly enough? |
| Public surface modeling | Are candidate public surfaces modeled as review-required without implying Web output? |
| Media/image modeling | Is the distinction between review-required packet media and existing display images strong enough? |
| Claim guardrails | Are the required blocked inferences sufficient, especially Daphnia, Ghost Shrimp, Flagfish, Mesostoma, Moina, chronology, media proof, and public-output paths? |
| Readback checks | What App-owned validation/readback checks should be mandatory before local output is considered useful? |
| Stop conditions | What should stop a future helper before it writes generated local files? |

## Recommended App Safety Position

Company recommends App classify the next stage as:

| Surface | Classification |
|---|---|
| App design review | Allowed as docs-only review. |
| Supabase source reads | Future read-only generation should be bounded to the selected packet and approval-gated at run time. |
| Local output files | Future implementation approval required; acceptable candidate location is App ignored `out/`. |
| App code/helper changes | Not approved. |
| Graph generation | Not approved. |
| Cypher/Memgraph/Docker | Deferred and not approved. |
| Supabase/Planner writes | Not approved. |
| Species, chronicle, observation, story, Source Map, media, or Web writes | Not approved. |
| Public website behavior | Not approved. |
| Automation/scheduled sync | Not approved. |

## Proposed Future Output

If App later approves implementation and Josue separately approves the helper, Company recommends the ignored output folder:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_3_species_public_history\lake_post_seal\
```

Expected future generated files:

```text
source_manifest.json
nodes.jsonl
edges.jsonl
blocked_edges.jsonl
validation_report.json
species_public_history_readback_report.json
species_public_history_readback_report.md
readback_examples.md
```

## Required Review Guardrails

App should reject the future helper design if it cannot prove:

- no Supabase, Planner, Storage, App runtime, Web, Content, Research, media metadata, species image, Markdown source-of-truth, or public-output writes;
- output path stays under ignored `out/`;
- every generated node/edge has source provenance;
- primary species, public chronicle context species, and internal/review-required source-context species are clearly separated;
- Daphnia remains `Daphnia sp.` and ID/establishment/clearing claims remain blocked;
- Ghost Shrimp breeding/recruitment/establishment claims preserve uncertainty;
- Flagfish removal avoids default failure framing;
- Mesostoma and Moina are not inferred as chronicle `30` public subjects;
- observations are not treated as public copy;
- planned or unseen story material is not treated as published history;
- existing display images are not treated as packet proof;
- unreviewed packet media is not treated as proof, captions, or alt text;
- public Web reuse remains blocked pending Web/Content/Research/App/media review;
- chronology changes remain review-gated;
- canonical writeback remains `none`.

## Handoff Message For App

Use this message when opening the App design review:

```text
Please review the Company Operation Living Intelligence Wave 3 no-write App implementation proposal as a design-only App review.

At this gate, Company is not asking for implementation. The requested decision is whether the proposed ignored output path, JSONL/readback-first package, source manifest, species/public-history modeling, media/display-asset distinction, blocked-inference guardrails, validation checks, and stop conditions are acceptable for a future separately approved no-write helper.

Key App questions:
- Is `out/operation_living_intelligence/wave_3_species_public_history/lake_post_seal/` acceptable?
- Should Wave 3 stay JSONL/readback-only before Cypher/Memgraph?
- What App-owned source refresh pattern should be used?
- What validation/readback checks are mandatory?
- What stop conditions should prevent generated local output?

Not approved:
- No App code changes.
- No graph generation.
- No Docker/Memgraph use.
- No Supabase/Planner writes.
- No schema/migration work.
- No Storage writes.
- No media metadata changes.
- No species image changes.
- No public behavior.
- No Research/Content/Web record changes.
- No automation.
```

## Next Company Action

Do not create App Planner tasks, implement helpers, run source refreshes, run Cypher/Memgraph, integrate with App runtime, create public output, automate runs, or perform live Supabase/Planner writes from Company without explicit approval for that specific action.

After implementation approval, App added and verified the smallest local JSONL/readback helper. Recommended options now are:

1. Keep Wave 3 closed as a no-Docker local proof unless a future query needs graph-runtime behavior.
2. Prepare Wave 4 YouTube Analytics Warehouse as a docs-only design pass if the sequence continues.
3. If live work tracking matters, ask for explicit approval before creating/updating any App-domain Planner task.

## Verification

- Read App `AGENTS.md`.
- Read App `.gitignore`.
- Read App `memory/00-index.md`.
- Read App `memory/05-supabase-and-storage-rules.md`.
- Read App `skills/supabase-safety-review/SKILL.md`.
- Read App Wave 2 OLI design review note.
- App docs-only review note was created at `M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-wave3-design-review.md`.
- App local helper and readback were verified and recorded in `domains/company/operation_living_intelligence_wave_3_jsonl_readback_helper_2026-05-15.md`.
- No Supabase/Planner writes were performed.
- No App runtime, schema, public site behavior, graph database, export/import job, media metadata, species image, model run, cloud upload, paid tool, automation, source-of-truth record, public promise, sponsor commitment, financial commitment, legal decision, launch target, or roadmap commitment changed.
