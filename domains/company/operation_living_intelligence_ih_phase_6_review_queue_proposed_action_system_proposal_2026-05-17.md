---
id: operation_living_intelligence_ih_phase_6_review_queue_proposed_action_system_proposal_2026-05-17
title: Operation Living Intelligence Intelligent Harness Phase 6 Review Queue And Proposed Action System Proposal
domain: company_operations
last_updated: 2026-05-17
tags: [operation-living-intelligence, intelligent-harness, phase-6, review-queue, proposed-actions, no-write, lake-post-seal]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 6 Review Queue And Proposed Action System Proposal

## Purpose

This proposal defines a local review queue and proposed action layer for the approved Lake Post-Seal Core Seed.

The goal is to turn Phase 5 internal answer packets into reviewable next actions without automatically writing to any canonical system. The layer should answer:

- What needs review?
- Who owns the review?
- What is blocked?
- What can be used internally?
- What is not public-safe?
- What possible changes could be proposed later?
- What should remain untouched?

This proposal does not approve implementation. It does not approve Supabase writes, Planner writes, App runtime changes, pgvector, public output, media metadata writes, canonical writeback, Memgraph import/reset/query, dependency changes, scheduled jobs, dashboard behavior, or expansion beyond the Lake Post-Seal Core Seed.

## Source Baseline

Use the existing Phase 5 answer packet output:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_5_agent_workflow\lake_post_seal
```

Required Phase 5 input files:

```text
workflow_manifest.json
answer_packets.json
answer_packets.md
validation_report.json
```

Phase 5 validation baseline:

```text
status: pass_phase5_agent_workflow_answer_packet_ready
answer_packets_created: 9
blocked_claims_available: 9
review_gates_available: 9
blocked_claims_carried_forward: true
review_warnings_carried_forward: true
candidate_media_treated_as_proof: false
derived_relationships_treated_as_canonical: false
writeback: none
public_output_allowed: false
phase4_public_output_nodes: 0
phase4_canonical_write_nodes: 0
actual_langgraph_dependency_used: false
```

## Proposed App Helper Files

Create only this App helper after explicit implementation approval:

```text
M:\miniBIOTA\miniBIOTA_App\tools\build-oli-ih-phase6-review-queue.js
```

Do not edit App runtime files. Do not edit `package.json`. Do not add dependencies unless separately approved.

The helper should read only Phase 5 generated files and write a local derived review queue under App `out/`. It must not query or write Supabase, write Planner, modify App runtime behavior, query/import/reset Memgraph, add pgvector, create public output, write media metadata, or perform canonical writeback.

## Proposed Generated Output

Write generated output only under App ignored `out/`:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_6_review_queue\lake_post_seal
```

Required generated files:

```text
review_queue.json
review_queue.md
proposed_actions.json
validation_report.json
review_queue_manifest.json
```

Optional generated files:

```text
review_items.jsonl
owner_routes.json
blocked_actions.json
no_action_items.json
```

No generated file is public output. The queue is local, internal, derived, and review-only.

## Review Queue Structure

`review_queue.json` should use this top-level shape:

```json
{
  "queue_id": "operation_living_intelligence_ih_phase6_lake_post_seal_review_queue",
  "generated_at": "...",
  "status": "pass_phase6_review_queue_ready",
  "scope": {
    "bounded_graph": "lake_post_seal_core_seed",
    "local_only": true,
    "derived_only": true,
    "writeback": "none"
  },
  "input": {
    "phase5_output": "...",
    "answer_packets": 9
  },
  "review_items": [],
  "proposed_actions": [],
  "blocked_actions": [],
  "owner_routes": [],
  "no_action_safe_context": [],
  "safety": {}
}
```

`review_queue.md` should summarize:

- review item count by type;
- owner/domain route count;
- blocked actions;
- internal-use-only context;
- future proposed writeback candidates, still blocked;
- explicit no-write status.

## Review Item Types

First implementation should support these review item types:

| Type | Purpose | Typical owner |
|---|---|---|
| `claim_review` | Review a candidate/blocked claim before any public or canonical use | Research, Content, Company |
| `media_review` | Review candidate media before using as evidence or public proof | Raw Footage/App, Content |
| `story_review` | Review story framing, continuity, and narrative use | Content, Company |
| `source_link_review` | Review source/citation relationships, source IDs, source paths, and owner routing | App, Company, source owner |
| `public_safety_review` | Review whether anything may be said publicly later | Company, Content, Research |
| `owner_routing` | Route review responsibility to the right domain | Company plus owner domain |
| `no_action_safe_context` | Preserve internal context that requires no action and no writeback | App/Company |

## Review Item Fields

Every review item should include:

```json
{
  "review_item_id": "review_item:claim_review:daphnia_established",
  "source_answer_packet": "blocked_claims",
  "question_type": "blocked_claims",
  "item_type": "claim_review",
  "review_state": "pending_review",
  "action_state": "candidate_action",
  "proposed_action": "Review claim before any public or canonical use.",
  "owner_domain": "Research",
  "source_ids": [],
  "source_paths": [],
  "publicness": "blocked",
  "review_status": "blocked_or_review_required",
  "claim_status": "blocked_public_output",
  "blocked_claims": [],
  "uncertainty": [],
  "writeback": "none",
  "canonical_writeback": "none",
  "public_output_allowed": false
}
```

Required fields:

- `review_item_id`;
- `source_answer_packet`;
- `question_type`;
- `item_type`;
- `proposed_action`;
- `owner_domain`;
- `source_ids`;
- `source_paths`;
- `publicness`;
- `review_status`;
- `claim_status`;
- `blocked_claims`;
- `uncertainty`;
- `writeback`.

Recommended additional fields:

- `review_state`;
- `action_state`;
- `canonical_writeback`;
- `public_output_allowed`;
- `source_citations`;
- `review_warnings`;
- `created_from_question`;
- `why_review_needed`;
- `must_not_do`;
- `future_writeback_candidate`;
- `future_writeback_requires_approval`.

## Action State Model

The helper should distinguish:

| Action state | Meaning | Writeback allowed? |
|---|---|---|
| `internal_use_context` | Safe to use internally as context with warnings preserved | No |
| `candidate_action` | May become a proposed action after owner review | No |
| `blocked_action` | Explicitly blocked for public/canonical use | No |
| `future_proposed_writeback` | A possible future proposal package, not created as a canonical write | No |
| `approved_writeback_not_implemented` | Placeholder state for future design only; no Phase 6 item should enter it | No |

Phase 6 must not create approved writeback. Any future proposed writeback remains a local review item with:

```text
writeback: none
future_writeback_requires_approval: true
approved_writeback: false
canonical_writeback: none
```

## Review Item Generation Rules

### Claim Review

Create a `claim_review` item for each blocked claim carried by Phase 5.

Rules:

- action state must be `blocked_action` or `candidate_action`;
- public output remains false;
- owner domain comes from blocked claim owner domain;
- preserve claim text, blocked reason, source IDs/paths, review status, claim status, and writeback.

### Media Review

Create a `media_review` item for candidate media and media-related review warnings.

Rules:

- candidate media is internal review-required media only;
- never call it proof;
- publicness remains internal/blocked until review;
- owner domain routes to Raw Footage/App and Content where relevant;
- no media metadata write.

### Story Review

Create a `story_review` item for story support and story-continuity answer packets.

Rules:

- story continuity may be used internally;
- public narrative still requires Content/Company review;
- derived graph relationships do not become canonical proof;
- keep source IDs and owner domains attached.

### Source Link Review

Create `source_link_review` items when source routing or relationship-class answers identify source/citation review needs.

Rules:

- verify source IDs/source paths are present;
- preserve canonicality;
- distinguish canonical source rows from derived relationship context;
- route to App/Company/source owner;
- no schema or runtime change.

### Public Safety Review

Create `public_safety_review` items for public-safety, avoid-saying, and unsupported/review-required answer packets.

Rules:

- public output stays false;
- blocked claims remain attached;
- review gates remain attached;
- no public-safe approval is created.

### Owner Routing

Create `owner_routing` items by owner domain:

- Research;
- Content;
- Raw Footage/App;
- Company;
- App;
- mixed owner domains as needed.

Owner routing items are coordination context only. They do not create Planner tasks in Phase 6.

### No-Action Safe Context

Create `no_action_safe_context` items for internal-use context that should remain untouched.

Examples:

- source-backed internal context that answers a question but does not imply any change;
- relationship context that should remain derived-only;
- citations retained only for evidence provenance.

## Proposed Actions

`proposed_actions.json` should contain local proposed actions only:

```json
{
  "proposed_action_id": "proposed_action:review_claim:daphnia_established",
  "review_item_id": "review_item:claim_review:daphnia_established",
  "action_type": "review_only",
  "owner_domain": "Research",
  "title": "Review Daphnia establishment claim",
  "description": "Determine whether the claim can remain blocked, be revised, or later become eligible for proposed public/canonical use.",
  "source_ids": [],
  "source_paths": [],
  "blocked_by": [],
  "writeback": "none",
  "public_output_allowed": false,
  "canonical_writeback": "none",
  "future_writeback_requires_approval": true
}
```

Allowed action types:

- `review_only`;
- `route_owner_review`;
- `keep_blocked`;
- `internal_context_only`;
- `future_writeback_candidate_not_approved`;
- `no_action`.

Disallowed action types:

- `write_supabase`;
- `write_planner`;
- `write_media_metadata`;
- `publish_public_output`;
- `canonical_writeback`;
- `mark_approved`.

## Preventing Automatic Canonical Writes

The helper must enforce:

- every review item has `writeback = none`;
- every proposed action has `writeback = none`;
- every generated file has safety flags showing Supabase/Planner/media/canonical writes are false;
- no Supabase client, SQL, RPC, Planner helper, or App runtime path is called;
- no "approved writeback" state is generated;
- every future writeback candidate is explicitly marked not approved and approval-required.

Phase 6 creates a review queue, not a write queue.

## Public Output Blocking

Public output remains blocked by default:

- `public_output_allowed = false` on every review item;
- `public_safe = false` unless a later explicit public-output gate exists;
- candidate media remains not public proof;
- blocked claims remain blocked;
- public-safety review items route to Company/Content/Research and do not approve publication.

The queue may say something is usable internally. It must not say something is approved for public use.

## Validation And Readback Checks

The helper should pass only if:

- Phase 5 `validation_report.json` exists and has `status = pass_phase5_agent_workflow_answer_packet_ready`;
- Phase 5 `answer_packets.json` exists;
- all 9 supported question types are represented;
- blocked claims carried forward count is at least 9;
- review warnings carried forward count is at least 9;
- review queue contains all required item types or records why a type has zero items;
- every review item has required fields;
- every review item has `writeback = none`;
- every proposed action has `writeback = none`;
- public output allowed is false on every review item and proposed action;
- canonical writeback is `none` on every review item and proposed action;
- candidate media is not treated as proof;
- derived graph relationships are not treated as canonical proof;
- no approved writeback item is created;
- no Supabase query/write, Planner write, App runtime change, Memgraph query/import/reset, pgvector, media metadata write, public output, dependency change, or canonical writeback occurs;
- generated output stays under the approved Phase 6 App `out/` folder.

Recommended validation status:

```text
pass_phase6_review_queue_ready
```

## Stop Conditions

Stop before writing a passing review queue if:

- Phase 5 validation is missing or not passing;
- Phase 5 answer packets are missing;
- any supported question type is missing;
- blocked claims or review warnings are missing;
- a review item cannot preserve source IDs/source paths where available;
- a review item cannot preserve owner domain, publicness, review status, claim status, or writeback;
- any item would allow public output;
- any item would approve canonical writeback;
- any item would write Supabase, Planner, media metadata, App runtime, public output, or canonical records;
- any item requires pgvector, Memgraph query/import/reset, dependency install, external service, or App runtime changes;
- any action expands beyond Lake Post-Seal Core Seed;
- output path resolves outside the approved Phase 6 App `out/` folder.

## Confirmed Boundaries

Phase 6 remains:

- local;
- derived only;
- no-write to canonical systems;
- bounded to the Lake Post-Seal Core Seed;
- no pgvector;
- no Supabase writes;
- no Supabase queries;
- no Planner writes;
- no App runtime behavior change;
- no package edits;
- no Memgraph import/reset/query;
- no public output;
- no media metadata writes;
- no canonical writeback.

## Implementation Approval Needed

Recommended next approval:

```text
Approve implementation of the Phase 6 local review queue/proposed action helper and generated internal review queue only.
```

Until that approval, do not:

- create the App helper;
- generate review queue files;
- write Supabase;
- write Planner;
- modify App runtime behavior;
- add pgvector;
- query/import/reset Memgraph;
- create public output;
- write media metadata;
- perform canonical writeback;
- expand beyond Lake Post-Seal Core Seed.
