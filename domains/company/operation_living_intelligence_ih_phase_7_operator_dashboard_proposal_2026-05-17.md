---
id: operation_living_intelligence_ih_phase_7_operator_dashboard_proposal_2026-05-17
title: Operation Living Intelligence Intelligent Harness Phase 7 Operator Dashboard Proposal
domain: company_operations
last_updated: 2026-05-17
tags: [operation-living-intelligence, intelligent-harness, phase-7, operator-dashboard, local-dashboard, no-write, lake-post-seal]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 7 Operator Dashboard Proposal

## Purpose

This proposal defines the first practical operator dashboard for the approved Lake Post-Seal Intelligent Harness.

The goal is to let Josue use the harness without digging through JSON files. The dashboard should answer:

- What changed today?
- What needs review?
- What is blocked?
- What can I use internally?
- What media needs review?
- What story paths are forming?
- What should each owner/domain review next?
- What remains no-action safe context?
- What should not be said publicly?
- What phase/output is stale or needs refresh?

This proposal does not approve implementation. It does not approve App runtime changes, UI integration, Supabase writes, Planner writes, pgvector, public output, media metadata writes, canonical writeback, dependency changes, scheduled jobs, or expansion beyond the Lake Post-Seal Core Seed.

## Recommendation

Build a static local dashboard first, not an App-integrated dashboard.

Recommended approach:

```text
local static dashboard generated from Phase 6 output
```

The first dashboard should be a generated internal HTML page plus Markdown and JSON summaries under App `out/`. This gives Josue a readable operator surface while preserving the current no-write harness guarantees.

Why static first:

- avoids App runtime behavior changes;
- avoids routing, auth, deployment, and UI state questions;
- keeps the dashboard local and internal;
- can be generated from the already-passing Phase 6 review queue;
- makes stale/refresh status visible before any live product integration;
- creates a reviewable dashboard contract before App UI work is considered.

App-integrated dashboard work should be a later, separate approval gate after the static dashboard proves useful.

## Source Baseline

Use the existing Phase 6 review queue output:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_6_review_queue\lake_post_seal
```

Required Phase 6 input files:

```text
review_queue.json
proposed_actions.json
validation_report.json
review_queue_manifest.json
```

Optional Phase 6 input files when present:

```text
review_items.jsonl
owner_routes.json
blocked_actions.json
no_action_items.json
review_queue.md
```

Phase 6 validation baseline:

```text
status: pass_phase6_review_queue_ready
review_items_total: 58
claim_review: 9
media_review: 26
story_review: 2
source_link_review: 2
public_safety_review: 4
owner_routing: 13
no_action_safe_context: 2
owner_route_count: 13
blocked_action_count: 11
proposed_action_count: 58
no_action_safe_context_count: 2
writeback: none
public_output_allowed: false
canonical_writeback: none
```

## Proposed App Files

Create only this App helper after explicit implementation approval:

```text
M:\miniBIOTA\miniBIOTA_App\tools\build-oli-ih-phase7-operator-dashboard.js
```

Do not edit App runtime files. Do not edit `package.json`. Do not add dependencies unless separately approved.

The helper should read only Phase 6 generated files and write a local derived dashboard under App `out/`. It must not query or write Supabase, write Planner, modify App runtime behavior, query/import/reset Memgraph, add pgvector, create public output, write media metadata, or perform canonical writeback.

## Proposed Generated Output

Write generated output only under App ignored `out/`:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_7_operator_dashboard\lake_post_seal
```

Required generated files:

```text
dashboard.html
dashboard.md
dashboard_data.json
validation_report.json
operator_dashboard_manifest.json
```

Optional generated files:

```text
sections.json
owner_routes.md
blocked_actions.md
media_review.md
refresh_status.json
```

No generated file is public output. The dashboard is local, internal, derived, and review-only.

## Dashboard Format

The first dashboard should produce all three formats:

| Format | Purpose |
|---|---|
| `dashboard.html` | Primary operator view for local browser use |
| `dashboard.md` | Fast readable fallback for Codex/terminal review |
| `dashboard_data.json` | Machine-readable dashboard state and validation substrate |

The HTML should be a static file with no external network dependencies and no bundled App runtime. It may include simple inline CSS and table/filter anchors. It should not require a dev server.

## Dashboard Sections

The dashboard should include these sections in this order:

1. `summary`
2. `source_freshness_refresh_status`
3. `what_changed_today`
4. `review_queue`
5. `blocked_actions`
6. `proposed_actions`
7. `owner_routes`
8. `no_action_safe_context`
9. `media_review`
10. `public_safety`
11. `story_story_continuity`
12. `do_not_say_publicly`
13. `safety_boundaries`

## Section Contracts

### Summary

Plain-language display:

- Phase 7 dashboard status;
- source Phase 6 status;
- total review items;
- item count by type;
- blocked action count;
- proposed action count;
- owner route count;
- no-action safe context count;
- writeback status;
- public output status;
- canonical writeback status.

The summary should make the dashboard's safety state obvious before any detail view.

### Source Freshness / Refresh Status

Plain-language display:

- Phase 6 generated timestamp;
- Phase 7 generated timestamp;
- source files read;
- missing source files, if any;
- stale warning if Phase 6 validation is not passing;
- stale warning if required Phase 6 files are older than a configurable local threshold;
- stale warning if the dashboard was generated from failed or partial input;
- refresh instruction: rerun Phase 6 before Phase 7 when source status is stale.

This section answers: what phase/output is stale or needs refresh?

### What Changed Today

Plain-language display:

- dashboard generated today;
- Phase 6 source generated today or not;
- new/changed local output files compared to the dashboard manifest when available;
- review item counts now visible to the operator;
- no claim that upstream facts changed unless source manifests prove it.

The first implementation should treat "changed today" as local harness output freshness, not as live Supabase or Planner change detection.

### Review Queue

Plain-language display:

- grouped review items by type;
- review item ID;
- owner/domain;
- action state;
- publicness;
- review status;
- claim status;
- writeback;
- source IDs/source paths when available;
- concise proposed action.

This section answers: what needs review?

### Blocked Actions

Plain-language display:

- blocked review item ID;
- blocked claim or blocked action summary;
- blocked reason when available;
- owner/domain;
- source references;
- must-not-do warnings;
- writeback none.

This section answers: what is blocked and what should not be said publicly?

### Proposed Actions

Plain-language display:

- local proposed action ID;
- review item ID;
- action type;
- owner/domain;
- title;
- description;
- blocked-by references;
- writeback none;
- public output false;
- canonical writeback none.

This section answers: what possible changes could be proposed later?

It must clearly label all proposed actions as local review candidates only. They are not Planner tasks, not approved writebacks, and not public outputs.

### Owner Routes

Plain-language display:

- owner/domain;
- review item ID;
- source tables;
- source IDs/source paths;
- count of associated items;
- next review focus.

This section answers: what should each owner/domain review next?

Owner routing is coordination context only. It must not create Planner tasks.

### No-Action Safe Context

Plain-language display:

- no-action item ID;
- internal-use context summary;
- owner/domain;
- source references;
- why it should remain untouched;
- writeback none.

This section answers: what can I use internally and what should remain no-action safe context?

### Media Review

Plain-language display:

- media review item ID;
- media source ID/source path when available;
- owner/domain;
- publicness;
- review status;
- claim status;
- warning that candidate media is not proof;
- no media metadata writes.

This section answers: what media needs review?

### Public Safety

Plain-language display:

- public safety review items;
- blocked claims;
- do-not-say warnings;
- public output false;
- blocked until owner review;
- source references.

This section answers: what is not public-safe?

### Story / Story-Continuity

Plain-language display:

- story review item IDs;
- story support and continuity summaries;
- source citations;
- owner/domain;
- reminder that derived Memgraph relationships are context, not canonical proof;
- public narrative still requires Content/Company review.

This section answers: what story paths are forming?

### Do Not Say Publicly

Plain-language display:

- blocked public claims;
- unsupported or review-required claims;
- candidate media cannot be public proof;
- stability/self-sustaining claims remain blocked;
- completion claims remain blocked;
- claim review owner/domain.

This should be a high-visibility section, not buried at the bottom of raw blocked-action tables.

### Safety Boundaries

Plain-language display:

- local only;
- derived only;
- no Supabase writes;
- no Supabase queries;
- no Planner writes;
- no App runtime behavior change;
- no pgvector;
- no Memgraph query/import/reset;
- no public output;
- no media metadata writes;
- no canonical writeback.

## Dashboard Data Shape

`dashboard_data.json` should use this top-level shape:

```json
{
  "dashboard_id": "operation_living_intelligence_ih_phase7_lake_post_seal_operator_dashboard",
  "generated_at": "...",
  "status": "pass_phase7_operator_dashboard_ready",
  "scope": {
    "bounded_graph": "lake_post_seal_core_seed",
    "local_only": true,
    "derived_only": true,
    "writeback": "none",
    "public_output_allowed": false,
    "canonical_writeback": "none"
  },
  "input": {
    "phase6_output": "...",
    "phase6_validation_status": "pass_phase6_review_queue_ready",
    "source_files": []
  },
  "sections": {},
  "safety": {}
}
```

Every displayed item should preserve, where available:

- review item ID;
- proposed action ID;
- owner/domain;
- source IDs;
- source paths;
- source tables;
- publicness;
- review status;
- claim status;
- action state;
- writeback;
- public output state;
- canonical writeback state.

## Validation And Readback Checks

The helper should pass only if:

- Phase 6 `validation_report.json` exists and has `status = pass_phase6_review_queue_ready`;
- Phase 6 `review_queue.json` exists;
- Phase 6 `proposed_actions.json` exists;
- Phase 6 `review_queue_manifest.json` exists;
- all required dashboard sections are generated;
- `dashboard.html`, `dashboard.md`, `dashboard_data.json`, `validation_report.json`, and `operator_dashboard_manifest.json` are written under the approved Phase 7 output path;
- total review item count matches Phase 6;
- review item count by type matches Phase 6;
- blocked action count matches Phase 6;
- proposed action count matches Phase 6;
- owner route count matches Phase 6;
- no-action safe context count matches Phase 6;
- all displayed review items preserve owner/domain;
- displayed source IDs/source paths/source tables are preserved where available;
- candidate media is not presented as proof;
- derived graph relationships are not presented as canonical proof;
- local proposed actions are not presented as approved tasks or approved writebacks;
- public output allowed is false everywhere;
- writeback is `none` everywhere;
- canonical writeback is `none` everywhere;
- no Supabase query/write, Planner write, App runtime change, Memgraph query/import/reset, pgvector, media metadata write, public output, dependency change, or canonical writeback occurs;
- generated output stays under the approved Phase 7 App `out/` folder.

Recommended validation status:

```text
pass_phase7_operator_dashboard_ready
```

## Stop Conditions

Stop before writing a passing dashboard if:

- Phase 6 validation is missing or not passing;
- required Phase 6 files are missing;
- review item counts do not match Phase 6;
- blocked action, proposed action, owner route, or no-action counts do not match Phase 6;
- any required dashboard section is missing;
- any dashboard section loses owner/domain, source IDs/source paths/source tables where available, publicness, review status, claim status, action state, writeback, public output state, or canonical writeback state;
- any generated display implies public approval;
- any generated display implies approved writeback;
- any generated display treats candidate media as proof;
- any generated display treats derived relationships as canonical proof;
- any action would write Supabase, write Planner, write media metadata, modify App runtime behavior, query/import/reset Memgraph, add pgvector, create public output, add dependencies, or perform canonical writeback;
- any action expands beyond the Lake Post-Seal Core Seed;
- output path resolves outside the approved Phase 7 App `out/` folder.

## Explicitly Not Allowed

Phase 7 does not allow:

- Supabase writes;
- Supabase queries;
- Planner writes;
- App runtime changes unless separately approved later;
- App-integrated UI routing;
- public output;
- pgvector;
- Memgraph query/import/reset;
- media metadata writes;
- canonical writeback;
- package/dependency edits;
- scheduled jobs;
- dashboard publishing;
- expansion beyond Lake Post-Seal Core Seed.

## Confirmed Boundaries

Phase 7 remains:

- local;
- derived only;
- no-write to canonical systems;
- bounded to the Lake Post-Seal Core Seed;
- static local dashboard first;
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
Approve implementation of the Phase 7 static local operator dashboard helper and generated internal dashboard only.
```

Until that approval, do not:

- create the App helper;
- generate dashboard files;
- create App UI routes/components;
- write Supabase;
- write Planner;
- modify App runtime behavior;
- add pgvector;
- query/import/reset Memgraph;
- create public output;
- write media metadata;
- perform canonical writeback;
- expand beyond Lake Post-Seal Core Seed.
