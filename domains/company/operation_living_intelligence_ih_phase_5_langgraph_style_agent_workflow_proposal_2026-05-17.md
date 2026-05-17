---
id: operation_living_intelligence_ih_phase_5_langgraph_style_agent_workflow_proposal_2026-05-17
title: Operation Living Intelligence Intelligent Harness Phase 5 LangGraph-Style Agent Workflow Proposal
domain: company_operations
last_updated: 2026-05-17
tags: [operation-living-intelligence, intelligent-harness, phase-5, langgraph-style, agent-workflow, no-write, lake-post-seal]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 5 LangGraph-Style Agent Workflow Proposal

## Purpose

This proposal defines the first controlled agent workflow that uses the passed GraphRAG context packet for the Lake Post-Seal Core Seed.

The workflow should accept practical miniBIOTA questions, classify the question type, select relevant context packet sections, assemble a source-backed answer packet, attach review warnings and blocked claims, route owner/domain responsibility, and stop before any writeback.

This proposal does not approve implementation. It does not approve installing LangGraph, adding dependencies, Supabase writes, Supabase queries, Planner writes, App runtime changes, pgvector, public output, media metadata writes, canonical writeback, Memgraph import/reset/query, scheduled jobs, dashboard behavior, or expansion beyond the Lake Post-Seal Core Seed.

## Recommendation

Use a LangGraph-style local workflow helper first. Do not install actual LangGraph yet.

Recommended approach:

```text
local deterministic workflow helper
-> explicit state object
-> named workflow steps
-> question classifier
-> context section selector
-> review-gated answer packet assembler
-> validation/readback
```

Why not actual LangGraph yet:

- The first value is proving the state contract and review-gated answer shape, not orchestration infrastructure.
- A local helper can run without package changes or dependency approval.
- The workflow is still bounded to one context packet and a small set of question types.
- The step names and state object can be made LangGraph-compatible later.
- Avoiding a dependency now keeps Phase 5 local, derived, no-write, and easy to review.

When to add actual LangGraph later:

- after answer packets prove useful;
- after there are multiple tools or branches that need orchestration;
- after human-review pauses or proposed-writeback bundles need real state-machine behavior;
- only with explicit approval for dependency changes.

## Source Baseline

Use the existing Phase 4 GraphRAG context packet output:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_4_graphrag_context\lake_post_seal
```

Required Phase 4 files:

```text
context_packet.json
context_packet.md
validation_report.json
context_builder_manifest.json
```

Phase 4 validation baseline:

```text
status: pass_phase4_graphrag_context_packet_ready
canonical_source_rows: 52
derived_relationships: 87
markdown_governance_context: 11
candidate_media: 13
review_gates: 9
blocked_claims: 9
citations_checked: 188
writeback: none
phase3_public_output_nodes: 0
phase3_canonical_write_nodes: 0
```

## Proposed App Helper Files

Create only this App helper after explicit implementation approval:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-ih-phase5-agent-workflow.js
```

Do not edit App runtime files. Do not edit `package.json`. Do not add dependencies unless separately approved.

The helper should accept a question through CLI arguments and write an internal answer packet. Proposed interface:

```powershell
node tools/run-oli-ih-phase5-agent-workflow.js --question "What supports the Lake Post-Seal story?"
node tools/run-oli-ih-phase5-agent-workflow.js --sample-all
```

Optional flags:

```text
--question-type <type>
--output <approved phase 5 output path>
```

The helper should not call an LLM in the first implementation. It should assemble structured, source-backed answer packets deterministically from `context_packet.json`. A later phase can add model synthesis after the answer packet guardrails are proven.

## Proposed Generated Output

Write generated output only under App ignored `out/`:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_5_agent_workflow\lake_post_seal
```

Required generated files:

```text
answer_packet.json
answer_packet.md
validation_report.json
workflow_manifest.json
```

Optional generated files:

```text
sample_answers.json
sample_answers.md
workflow_trace.json
```

No generated output should be public output. The answer packet is internal, derived, review-gated agent context only.

## Workflow State

The local helper should use an explicit state object that can later map cleanly into LangGraph state:

```json
{
  "workflow_id": "operation_living_intelligence_ih_phase5_lake_post_seal_agent_workflow",
  "question": "...",
  "question_type": "...",
  "context_packet_status": "pass_phase4_graphrag_context_packet_ready",
  "selected_context_sections": [],
  "source_citations": [],
  "review_warnings": [],
  "blocked_claims": [],
  "owner_domain_routes": [],
  "uncertainty": [],
  "answer_packet": {},
  "writeback": "none",
  "stop_before_writeback": true
}
```

## Workflow Steps

### 1. Receive Question

Inputs:

- user question string;
- optional explicit question type;
- approved Phase 4 context packet path.

Rules:

- do not call Supabase;
- do not call Planner;
- do not query Memgraph;
- do not call pgvector;
- do not create public output.

### 2. Classify Question Type

First supported question types:

| Question type | Example prompt | Primary context sections |
|---|---|---|
| `story_support` | What supports the Lake Post-Seal story? | `story_support`, `story_continuity`, `relationship_classes` |
| `public_safety` | What can I safely say publicly? | `public_claim_safety`, `answer_rules`, `uncertainty` |
| `blocked_claims` | What claims are blocked? | `public_claim_safety`, `blocked_claims`, `answer_rules` |
| `media_candidates` | What media candidates are available? | `media_review`, `public_claim_safety`, `answer_rules` |
| `review_needs` | What needs review? | `public_claim_safety`, `open_loops`, `species_observation_links`, `uncertainty` |
| `story_continuity` | What story-continuity paths are strongest? | `story_continuity`, `story_support`, `open_loops` |
| `avoid_saying` | What should I avoid saying? | `answer_rules`, `public_claim_safety`, `uncertainty` |
| `source_routing` | What source IDs and owner domains should I cite? | all relevant source layers, `relationship_classes` |

Classifier should be deterministic keyword/rule based in the first implementation. If no type matches, return `unsupported_or_needs_review` and include safe fallback guidance.

### 3. Load Context Packet

Load:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_4_graphrag_context\lake_post_seal\context_packet.json
```

Require:

```text
status: pass_phase4_graphrag_context_packet_ready
scope.writeback: none
safety.local_only: true
safety.derived_only: true
safety.pgvector: false
safety.supabase_queries: false
safety.supabase_writes: false
safety.planner_writes: false
safety.public_output: false
safety.canonical_writeback: none
```

### 4. Select Relevant Context Sections

Select by question type. Always include:

- `answer_rules`;
- `uncertainty`;
- relevant blocked claims;
- relevant review gates;
- source citations for every answer claim.

Never include candidate media as proof. Candidate media can only be included as `available_internal_media_candidates_review_required`.

### 5. Assemble Source-Backed Answer Packet

`answer_packet.json` should include:

```json
{
  "status": "pass_phase5_agent_workflow_answer_packet_ready",
  "question": "...",
  "question_type": "...",
  "answer_mode": "internal_review_gated_context_answer",
  "short_answer": "...",
  "supporting_points": [],
  "source_citations": [],
  "review_warnings": [],
  "blocked_claims": [],
  "owner_domain_routes": [],
  "uncertainty": [],
  "public_safety": {
    "public_output_allowed": false,
    "public_claims_allowed": [],
    "public_claims_blocked": [],
    "why": []
  },
  "writeback": "none",
  "next_review_actions": []
}
```

`answer_packet.md` should be the readable companion with:

- question;
- question type;
- short internal answer;
- supporting evidence;
- source references;
- review warnings;
- blocked claims;
- owner/domain routing;
- uncertainty;
- explicit "not public output" warning.

### 6. Include Review Warnings

Every answer should carry warnings from:

- `context_sections.answer_rules.do_not_claim_publicly`;
- blocked claims relevant to the selected question type;
- review gates relevant to the selected question type;
- candidate media status if media is mentioned;
- uncertainty labels.

### 7. Include Blocked Claims

Blocked claims should preserve:

- blocked claim ID;
- claim text;
- blocked reason;
- owner domain;
- review status;
- claim status;
- blocking source node IDs;
- blocking relationship IDs;
- writeback = `none`.

### 8. Include Owner/Domain Routing

The answer packet should route review responsibility:

| Subject | Owner/domain route |
|---|---|
| species identification, establishment, ecological causation | Research |
| story framing, content usage, public narrative | Content |
| media review and local media proof status | Raw Footage/App |
| governance, public-safe boundaries, cross-domain approval | Company |
| runtime helper behavior and generated App outputs | App |

The helper should derive owner routes from cited source `owner_domain` values and from blocked/review gate records.

### 9. Stop Before Writeback

Every workflow path must terminate before any writeback. The output must state:

```text
writeback: none
canonical_writeback: none
proposed_writeback_created: false
```

No Supabase, Planner, App runtime, media metadata, or public output write is allowed.

## Supported First Question Types

First implementation should support:

```text
story_support
public_safety
blocked_claims
media_candidates
review_needs
story_continuity
avoid_saying
source_routing
unsupported_or_needs_review
```

The helper should also support a `--sample-all` mode that generates sample internal answer packets for:

- What supports the Lake Post-Seal story?
- What can I safely say publicly?
- What claims are blocked?
- What media candidates are available?
- What needs review?
- What story-continuity paths are strongest?
- What should I avoid saying?

## Preservation Requirements

Every answer packet must preserve:

- source IDs;
- source tables;
- source paths;
- owner domains;
- canonicality;
- publicness;
- review status;
- claim status;
- uncertainty labels;
- writeback = `none`.

Citation records should be copied from the Phase 4 context packet where possible rather than reconstructed from prose.

## Overclaim Prevention

The workflow prevents overclaiming by:

- forcing `answer_mode = internal_review_gated_context_answer`;
- setting `public_output_allowed = false`;
- carrying the `do_not_claim_publicly` list into every answer;
- attaching blocked claims to public-safety and claim-related answers;
- treating candidate media as internal review-required media only;
- treating derived Memgraph relationships as relationship context, not canonical proof by themselves;
- requiring owner/domain routes before a claim can move toward public use;
- stopping before writeback.

The workflow must not answer "yes, public-safe" unless a later approved public-output gate exists. In Phase 5, the safe answer is: internal context only; public claims remain blocked or review-required unless the packet explicitly says otherwise.

## Dependency Decision

No dependency is required for Phase 5 implementation.

Implement without LangGraph now:

- use built-in Node modules;
- represent workflow nodes as functions;
- represent workflow state as JSON;
- generate a trace that mirrors LangGraph-style state transitions.

Actual LangGraph is a later dependency decision. It requires separate approval because it changes dependencies and may influence App architecture.

## Validation And Readback Checks

The helper should pass only if:

- Phase 4 `validation_report.json` exists and has `status = pass_phase4_graphrag_context_packet_ready`;
- Phase 4 `context_packet.json` exists and has passing status;
- all required context sections exist;
- question type is supported or safely classified as `unsupported_or_needs_review`;
- selected context sections exist;
- answer packet includes source citations;
- every citation preserves source ID/table/path where available, owner domain, publicness, review status, claim status, and writeback;
- blocked claims are carried for `public_safety`, `blocked_claims`, `review_needs`, and `avoid_saying`;
- review warnings are present for every question type;
- candidate media is never marked public proof;
- derived relationships are never marked canonical proof by themselves;
- writeback remains `none`;
- public output allowed is `false`;
- Supabase query/write flags remain false;
- Planner write flag remains false;
- App runtime behavior change flag remains false;
- pgvector flag remains false;
- media metadata write flag remains false;
- canonical writeback remains `none`;
- generated output stays under the approved Phase 5 App `out/` folder.

Recommended validation status:

```text
pass_phase5_agent_workflow_answer_packet_ready
```

## Stop Conditions

Stop before writing a passing answer packet if:

- Phase 4 context packet is missing or not passing;
- Phase 4 validation is missing or not passing;
- required context sections are missing;
- selected question type would require data outside Lake Post-Seal Core Seed;
- selected question type would require Supabase, Planner, Memgraph, pgvector, media metadata, App runtime, public output, or canonical writeback access;
- the helper would need to install LangGraph or any dependency;
- the helper would need to call an LLM or external service;
- the answer cannot preserve citations/source fields;
- blocked claims or review gates are missing;
- writeback is anything other than `none`;
- public output is requested;
- public-safe claim approval is requested;
- generated output path resolves outside the approved Phase 5 App `out/` folder.

## Confirmed Boundaries

Phase 5 remains:

- local;
- derived only;
- no-write to canonical systems;
- bounded to the Lake Post-Seal Core Seed;
- current context packet first;
- no actual LangGraph dependency yet;
- no pgvector yet;
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
Approve implementation of the Phase 5 local LangGraph-style agent workflow helper and generated internal answer packet only.
```

Until that approval, do not:

- create the App helper;
- generate answer packets;
- install LangGraph;
- add dependencies;
- query or write Supabase;
- write Planner;
- modify App runtime behavior;
- add pgvector;
- query/import/reset Memgraph;
- write media metadata;
- create public output;
- perform canonical writeback;
- expand beyond Lake Post-Seal Core Seed.
