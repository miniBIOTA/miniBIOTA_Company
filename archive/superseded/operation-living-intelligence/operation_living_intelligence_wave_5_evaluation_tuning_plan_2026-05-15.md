---
id: operation_living_intelligence_wave_5_evaluation_tuning_plan_2026-05-15
title: Operation Living Intelligence Wave 5 Evaluation Tuning Plan
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-5, retrieval, evaluation, no-embedding, no-write]
status: evaluation_tuning_ready_for_future_helper_update
---
# Operation Living Intelligence Wave 5 Evaluation Tuning Plan

## Purpose

This plan defines the next docs-only tuning target for the Wave 5 retrieval baseline before any embeddings, pgvector, vector index, public search, scheduled refresh, App runtime integration, live reads, expanded corpus scope, or canonical writeback.

It does not change the App helper, generated output, evaluation JSONL, App runtime, Supabase, Planner, Web, Content, Research, or public behavior.

## Current Baseline

Reviewed generated snapshot:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_5_retrieval_layer\company_corpus\
generated_at = 2026-05-16T00:37:29.854Z
```

Current result:

| Item | Result |
|---|---:|
| Documents | `98` |
| Chunks | `1427` |
| Evaluation questions | `10` |
| Evaluation questions passed | `9 / 10` |
| Required keyword terms found | `6 / 6` |
| Sensitive path matches | `0` |

Current review decision:

```text
The helper is useful locally. Vector/embedding work remains unapproved.
```

## Tuning Objective

The next evaluation pass should distinguish:

- an answerable internal coordination question;
- a review-required public claim question;
- a blocked answer where the corpus should refuse authority;
- generated-derived context that can be cited but not treated as canonical;
- owner-routing questions where the best answer is a handoff boundary, not new implementation.

The current Daphnia publicness-guardrail case should not be treated as a failure if the readback returns a source-cited `review_required` answer with the correct Research/Content/Web caveat.

## Acceptance Rule Change

Future readback evaluation should support an expected status per question.

Recommended evaluation fields:

```json
{
  "expected_status": "answerable_with_citation | review_required | blocked",
  "required_caveats": [],
  "expected_source_fragments": [],
  "blocked_if_source_families_present": [],
  "owner_review_required": []
}
```

Minimum acceptance rules:

| Expected status | Pass condition |
|---|---|
| `answerable_with_citation` | Readback cites an expected source and includes required caveats. |
| `review_required` | Readback cites candidate sources, preserves publicness/claim-status labels, and names required owner review. |
| `blocked` | Readback does not produce an authoritative answer and explains the missing approval/source boundary. |

## Current Evaluation Item To Retain

Keep this current item but change its expected status:

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

This should pass only when the readback preserves the review boundary. It should fail if the readback produces public species-card copy, removes uncertainty, skips owner review, or cites generated-derived output as canonical public truth.

## Proposed Additional Evaluation Questions

Add these before any vector/embedding decision brief.

| ID | Question | Expected status | Required behavior |
|---|---|---|---|
| `eval_public_species_card_blocked_without_owner_review` | Can this corpus directly publish a Daphnia species-card paragraph? | `blocked` | Must refuse public wording and route to Research, Content, and Web review. |
| `eval_generated_derived_not_canonical_source` | Can generated Wave 2 or Wave 3 readback output overwrite source-of-truth Markdown or Supabase records? | `blocked` | Must say generated-derived output cannot overwrite canonical sources. |
| `eval_owner_routing_for_corpus_expansion` | Who must approve expanding Wave 5 beyond Company/report-level sources into deep Research or Content docs? | `answerable_with_citation` | Must cite Wave 5 corpus inventory/proposal and name Research/Content owner scope. |
| `eval_private_source_family_exclusion` | Should Wave 5 include CRM contacts, raw financial rows, private analytics, credentials, raw media, or App runtime logs? | `blocked` | Must preserve sensitive-source exclusion. |
| `eval_stale_generated_snapshot_caveat` | How should an agent treat the ignored generated retrieval output after Company docs change? | `answerable_with_citation` | Must call it rebuildable, local, and noncanonical; stale output should trigger regeneration before relying on counts. |

## Stop Conditions

Stop before vector/embedding implementation if:

- review-required questions are counted as failures even when they preserve the correct owner boundary;
- public species-card questions produce publishable language without owner review;
- generated-derived outputs are treated as canonical truth;
- sensitive/private source families appear in the corpus;
- evaluation results rely on stale generated counts without a rebuild note;
- any App helper change would be needed without explicit approval.

## Decision

Wave 5 evaluation tuning is ready as a docs-only specification.

Next implementation, if later approved, would be an App helper/evaluation-set update that changes expected-status handling and adds the proposed questions. That future update is not approved by this document.

## Verification

- Read the current `retrieval_evaluation_set.jsonl`.
- Read the current `retrieval_readback_report.json`.
- Read the Wave 5 baseline usefulness review.

No App code, generated output, App runtime behavior, database record, Planner record, Storage object, public site behavior, public output, schema, migration, embedding job, vector index, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, or canonical source-of-truth record changed.
