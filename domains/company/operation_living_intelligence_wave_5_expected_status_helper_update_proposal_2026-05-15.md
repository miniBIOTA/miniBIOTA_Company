---
id: operation_living_intelligence_wave_5_expected_status_helper_update_proposal_2026-05-15
title: Operation Living Intelligence Wave 5 Expected-Status Helper Update Proposal
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-5, retrieval, app-helper-proposal, expected-status, no-embedding, no-write]
status: proposal_ready_implementation_not_approved
---
# Operation Living Intelligence Wave 5 Expected-Status Helper Update Proposal

## Purpose

This proposal defines the smallest future App helper update that would implement the Wave 5 evaluation tuning plan.

It is docs-only. It does not change App code, generated output, App runtime behavior, Supabase, Planner, Storage, Web, Content, Research, embeddings, pgvector, vector indexes, public search, scheduled refresh, live reads, expanded corpus scope, or canonical writeback.

## Current Helper Shape

Current App helper files:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave5-retrieval-manifest.js
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave5-retrieval-readback.js
```

Current generated output path:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\company_corpus\
```

Current observed behavior:

- generator writes a fixed `10` question `retrieval_evaluation_set.jsonl`;
- readback evaluates questions as `pass` or `review_required`;
- Daphnia publicness remains `review_required`;
- baseline still passes the threshold with `9 / 10` questions passed;
- no embeddings, vector index, model/API calls, live reads, App runtime behavior, public output, or canonical writeback are involved.

## Proposed Future Change

If Josue later approves App helper work, update only the Wave 5 local helper evaluation contract.

Allowed future file scope:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave5-retrieval-manifest.js
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave5-retrieval-readback.js
```

Allowed future generated output scope:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\company_corpus\
```

No other App, Company, Web, Supabase, Planner, Storage, Content, Research, media, telemetry, CRM, Financials, YouTube analytics, graph, vector, or public surface is in scope.

## Generator Update

Future generator update:

1. Add `expected_status` to every evaluation item.
2. Add `owner_review_required` where owner review is the correct answer.
3. Add `blocked_if_source_families_present` for sensitive-source exclusion checks.
4. Increase evaluation count from `10` to `15`.
5. Update validation so `evaluation_questions_present` expects the new count and required fields.

Expected statuses:

```text
answerable_with_citation
review_required
blocked
```

The current Daphnia item should become:

```json
{
  "id": "eval_daphnia_publicness_guardrails",
  "question": "What are the publicness guardrails for Daphnia in the Lake Post-Seal packet?",
  "expected_status": "review_required",
  "owner_review_required": ["Research", "Content", "Web"],
  "required_caveats": [
    "Public species-card wording needs Research, Content, and Web review."
  ]
}
```

Add five evaluation items:

| ID | Expected status | Purpose |
|---|---|---|
| `eval_public_species_card_blocked_without_owner_review` | `blocked` | Prove public species-card copy is refused without Research/Content/Web review. |
| `eval_generated_derived_not_canonical_source` | `blocked` | Prove generated readbacks cannot overwrite canonical sources. |
| `eval_owner_routing_for_corpus_expansion` | `answerable_with_citation` | Prove corpus expansion routes to Research/Content owner scope. |
| `eval_private_source_family_exclusion` | `blocked` | Prove CRM, raw finance, private analytics, credentials, raw media, and App runtime logs stay excluded. |
| `eval_stale_generated_snapshot_caveat` | `answerable_with_citation` | Prove agents know ignored generated output is rebuildable, local, and potentially stale after docs change. |

## Readback Update

Future readback update:

1. Score each item against `expected_status`.
2. Preserve `actual_status` separately from `evaluation_result`.
3. Treat a `review_required` answer as a pass only when expected status is `review_required` and required owner-review/caveat/source labels are present.
4. Treat a `blocked` answer as a pass only when the helper refuses authority and explains the missing approval, source, or publicness boundary.
5. Keep line citations, source path, source family, owner, publicness, claim status, and caveat fields in the readback report.

Recommended result fields:

```json
{
  "expected_status": "review_required",
  "actual_status": "review_required",
  "evaluation_result": "pass",
  "required_owner_review_present": true,
  "required_caveats_present": true,
  "expected_source_hit": true,
  "sensitive_source_family_absent": true
}
```

## Validation Requirements

Future run should pass only if:

- evaluation set has `15` questions;
- every evaluation item has `expected_status`;
- valid statuses are limited to `answerable_with_citation`, `review_required`, and `blocked`;
- Daphnia publicness passes as `review_required`, not as public-copy approval;
- direct public species-card copy is blocked;
- generated-derived writeback is blocked;
- private/sensitive source families remain absent;
- stale generated snapshot handling tells agents to rebuild before relying on counts after docs change;
- output remains under ignored App `out/`;
- no embeddings, vector fields, pgvector/vector index, model/API calls, live reads, App runtime behavior, public output, or canonical writeback occur.

## Stop Conditions

Stop implementation if:

- the helper needs App runtime, Supabase, Planner, Storage, Web, model/API, embedding, vector, telemetry, CRM, Financials, media, or YouTube analytics access;
- evaluation changes would expand the corpus beyond Company/report-level sources;
- a review-required publicness question becomes public-ready text;
- generated-derived output is treated as canonical;
- sensitive/private source families enter the corpus;
- the output path would leave ignored App `out/`;
- any schema, migration, public behavior, structured record, or canonical source would change.

## Approval Boundary

This proposal is ready for a future explicit approval decision.

Approval wording should name the exact scope:

```text
Approve the Wave 5 expected-status evaluation helper update only: update the two Wave 5 App helper files, regenerate ignored local Wave 5 output, and run syntax/readback validation. No embeddings, vectors, live reads, runtime behavior, public output, or canonical writeback.
```

Without that approval, do not edit the App helper or regenerate the Wave 5 output for this tuning change.

## Verification

- Read `domains/company/operation_living_intelligence_wave_5_evaluation_tuning_plan_2026-05-15.md`.
- Read `M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-wave5-retrieval-manifest.js`.
- Read `M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave5-retrieval-readback.js`.

No App code, generated output, App runtime behavior, database record, Planner record, Storage object, public site behavior, public output, schema, migration, embedding job, vector index, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical source-of-truth record changed.
