---
id: operation_living_intelligence_ih_phase_8_app_integrated_intelligence_tab_proposal_2026-05-17
title: Operation Living Intelligence Intelligent Harness Phase 8 App-Integrated Intelligence Tab Proposal
domain: company_operations
last_updated: 2026-05-17
tags: [operation-living-intelligence, intelligent-harness, phase-8, app-integration, intelligence-tab, read-only, lake-post-seal]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 8 App-Integrated Intelligence Tab Proposal

## Purpose

The Phase 7 static dashboard proved the operator surface is useful, but the long-term operator home should be the existing miniBIOTA desktop app, not a separate HTML file.

This proposal defines a read-only `Intelligence` top-level tab in the existing desktop app. The first version should load the already-generated Phase 7 `dashboard_data.json` and render the useful dashboard sections in the app shell.

This proposal does not approve implementation. It does not approve App runtime changes, UI files, Supabase writes, Planner writes, pgvector, Memgraph queries/modification, public output, media metadata writes, canonical writeback, scheduled jobs, dashboard automation, or expansion beyond Lake Post-Seal Core Seed.

## Source

Use the Phase 7 dashboard data as the first App-integrated source:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_7_operator_dashboard\lake_post_seal\dashboard_data.json
```

Required source status:

```text
pass_phase7_operator_dashboard_ready
```

The App tab should be a read-only visualization of this local derived file. It should not query Supabase, Planner, Memgraph, pgvector, or media metadata.

## Recommended App Placement

Add a new top-level tab called:

```text
Intelligence
```

Placement:

```text
Financials | CRM | Roadmap | Intelligence | Prompts | Planner | Site Admin | Monitoring
```

This places the harness beside other operator/strategy surfaces, not inside Planner or Site Admin.

Reason:

- the harness is cross-domain, spanning Research, Content, Raw Footage/App, Company, and App;
- it is not a Planner task board;
- it is not an admin CRUD surface;
- it is an operator intelligence/review surface.

Page title:

```text
Living Intelligence
```

Initial scope selector:

```text
Lake Post-Seal
```

The scope selector should be visually present but locked/disabled in the first implementation. Scope expansion is not approved.

Status strip:

```text
Local
Derived
No writeback
Public output blocked
Canonical writeback: none
Source: Phase 7 dashboard_data.json
```

## Existing Files Likely To Edit

Based on the current App shell structure, first implementation would likely edit:

```text
M:\miniBIOTA\miniBIOTA_App\js\shell\app-shell-layout.js
M:\miniBIOTA\miniBIOTA_App\js\shell\app-shell.js
M:\miniBIOTA\miniBIOTA_App\js\shared\core.js
M:\miniBIOTA\miniBIOTA_App\js\app-script-manifest.js
M:\miniBIOTA\miniBIOTA_App\css\app.css
```

Expected changes by file:

| File | Purpose |
|---|---|
| `js/shell/app-shell-layout.js` | Add `tab-intelligence` between Roadmap and Prompts |
| `js/shell/app-shell.js` | Insert the Intelligence page shell after Roadmap and before Prompts |
| `js/shared/core.js` | Add `intelligence` to page switching and call `loadIntelligenceDashboard()` |
| `js/app-script-manifest.js` | Load the new shell page and dashboard renderer modules in the right order |
| `css/app.css` | Import the new Intelligence CSS file |

No `package.json` edits should be needed.

## New Files Likely To Create

Recommended new files:

```text
M:\miniBIOTA\miniBIOTA_App\js\shell\intelligence\app-shell-intelligence-page.js
M:\miniBIOTA\miniBIOTA_App\js\intelligence\intelligence-dashboard.js
M:\miniBIOTA\miniBIOTA_App\js\intelligence\intelligence-dashboard-render.js
M:\miniBIOTA\miniBIOTA_App\css\app-intelligence.css
```

Optional only if direct local JSON loading is blocked in Electron:

```text
M:\miniBIOTA\miniBIOTA_App\main.js
M:\miniBIOTA\miniBIOTA_App\preload.js
```

The optional fallback would expose a narrow read-only IPC method for approved harness JSON files under App `out/`. That fallback should require separate implementation approval because it touches Electron main/preload boundaries.

## First Version Data Loading

The first version should try to remain renderer-only:

```text
fetch("out/operation_living_intelligence/intelligent_harness/phase_7_operator_dashboard/lake_post_seal/dashboard_data.json")
```

This keeps the implementation:

- read-only;
- local;
- derived;
- no Supabase query;
- no Planner query/write;
- no Memgraph query;
- no package/dependency change.

Implementation review must verify whether Electron's file-backed renderer can fetch the local JSON reliably. If not, stop and request separate approval for a minimal read-only preload/main IPC path.

## Page Layout

The page should feel like a dense operator workspace, not a marketing page.

Recommended layout:

```text
Living Intelligence
[Lake Post-Seal locked] [Local] [Derived] [No writeback] [Public output blocked] [Canonical writeback: none]

Summary cards

Main column:
  Needs Review
  Media Review
  Story Paths
  Proposed Actions

Right rail:
  Do Not Say Publicly
  Owner Routes
  Source Freshness
  Safety Boundaries

Secondary lower section:
  No-Action Safe Context
```

Use app-native styling patterns:

- compact stat cards;
- tables/lists for review items;
- badges for owner, review status, publicness, and writeback;
- filter/toggle controls where helpful;
- restrained colors with high scan value;
- no nested cards.

## First View Sections

### Summary

Main top section.

Show:

- review item count;
- blocked action count;
- proposed action count;
- owner route count;
- no-action safe context count;
- writeback status;
- public output status;
- canonical writeback status.

### Needs Review

Main content.

Source:

```text
dashboard_data.sections.review_queue
```

Display:

- grouped review items by type;
- review item ID;
- owner domain;
- action state;
- publicness;
- review status;
- claim status;
- source IDs/source paths where available;
- proposed action.

### Do Not Say Publicly

Right rail, high visibility.

Source:

```text
dashboard_data.sections.do_not_say_publicly
```

Display:

- blocked claim;
- owner domain;
- blocked/review status;
- reason;
- writeback none.

This section should be visually stronger than ordinary tables.

### Media Review

Main content.

Source:

```text
dashboard_data.sections.media_review
```

Display:

- media review item ID;
- source IDs/source paths where available;
- owner domain;
- review status;
- claim status;
- explicit warning: candidate media is not proof.

### Owner Routes

Right rail.

Source:

```text
dashboard_data.sections.owner_routes
```

Display:

- owner/domain;
- linked review item;
- source tables;
- source IDs/source paths;
- next review focus.

Owner routing should not create Planner tasks in this version.

### Story Paths

Main content.

Source:

```text
dashboard_data.sections.story_story_continuity
```

Display:

- story review items;
- owner domain;
- source citations/source fields;
- note that derived graph relationships are context, not canonical proof;
- public narrative requires review.

### Proposed Actions

Main content, below Needs Review.

Source:

```text
dashboard_data.sections.proposed_actions
```

Display:

- proposed action ID;
- action type;
- owner domain;
- title/description;
- blocked-by references;
- local/unapproved/no-write status.

All proposed actions must be labeled:

```text
Local candidate only. Not a Planner task. Not approved writeback.
```

### No-Action Safe Context

Secondary lower section.

Source:

```text
dashboard_data.sections.no_action_safe_context
```

Display:

- item ID;
- owner domain;
- source references;
- why it remains untouched;
- writeback none.

### Source Freshness

Right rail.

Source:

```text
dashboard_data.sections.source_freshness_refresh_status
```

Display:

- Phase 6 generated timestamp;
- Phase 7 generated timestamp;
- source file status;
- stale warning;
- refresh guidance.

No refresh/rebuild button in the first implementation.

## Main Content Versus Right Rail Versus Secondary

Main content:

- Summary;
- Needs Review;
- Media Review;
- Story Paths;
- Proposed Actions.

Right rail:

- Do Not Say Publicly;
- Owner Routes;
- Source Freshness;
- Safety Boundaries.

Secondary lower section:

- No-Action Safe Context;
- optional raw source/reference details if needed later.

## Preserved Safety Boundaries

The page must preserve and display:

- local only;
- derived only;
- no writeback;
- public output blocked;
- canonical writeback none;
- source is Phase 7 `dashboard_data.json`;
- Lake Post-Seal scope only.

The renderer should not include controls that imply approval, publication, writeback, task creation, media metadata editing, or source expansion.

## Deferred Features

Do not include in the first App-integrated version:

- refresh/rebuild buttons;
- run helper buttons;
- Planner task creation;
- Planner writes;
- Supabase writes;
- Supabase queries;
- approved writeback;
- media metadata writes;
- public output;
- pgvector;
- Memgraph query/import/reset;
- dashboard automation;
- scheduled jobs;
- scope expansion beyond Lake Post-Seal.

These should remain separate proposal/approval gates.

## Validation And Readback Checks

Recommended implementation validation:

```text
npm run validate:renderer
npm run lint:css-quality
npm run validate:app
```

Additional Phase 8 readback checks should confirm:

- `tab-intelligence` exists between Roadmap and Prompts;
- `page-intelligence` exists and is hidden by default;
- `showPage("intelligence")` displays only the Intelligence page and activates only the Intelligence tab;
- page title is `Living Intelligence`;
- scope selector displays `Lake Post-Seal` and is disabled/locked;
- status strip displays Local, Derived, No writeback, Public output blocked, Canonical writeback: none, and Source: Phase 7 dashboard_data.json;
- `dashboard_data.json` loads successfully from the approved local path;
- all first-view sections render;
- review item count is `58`;
- blocked action count is `11`;
- proposed action count is `58`;
- owner route count is `13`;
- public output remains false;
- writeback remains none;
- canonical writeback remains none;
- no Supabase request is made by the Intelligence page;
- no Planner write controls are present;
- no App route performs writeback or rebuild;
- no package/dependency changes are required.

If local JSON loading is blocked, validation should stop before fallback implementation and request separate approval for a narrow read-only local file IPC.

## Risks

Primary risks:

- Electron renderer may not reliably fetch local `out/` JSON from file-backed app context;
- adding a top-level tab touches global navigation and page switching;
- large review tables could become visually noisy;
- proposed actions could look like approved actions if labels are weak;
- owner routes could be mistaken for Planner tasks;
- future dashboard refresh behavior could accidentally blur into writeback automation if not kept separate.

Mitigations:

- first version is read-only and local-file backed;
- no buttons for writeback, publish, refresh, task creation, or approval;
- strong labels for blocked/public safety states;
- source freshness shown as status only;
- direct count checks against Phase 7 data;
- implementation gated separately.

## Stop Conditions

Stop implementation if:

- Phase 7 `dashboard_data.json` is missing or not passing;
- local JSON loading is blocked and no separate read-only IPC approval exists;
- adding the page requires package/dependency changes;
- App shell/nav changes break existing tabs;
- any section loses owner domain, source references, publicness, review status, claim status, writeback, or canonical writeback fields;
- any UI label implies public approval;
- any UI label implies approved writeback;
- any control writes Supabase, Planner, media metadata, or canonical records;
- any control queries/modifies Memgraph;
- any behavior expands beyond Lake Post-Seal;
- any implementation creates public output.

## Implementation Approval Needed

Implementation is ready for approval from a planning perspective, but it must be explicitly approved because it modifies App runtime/navigation.

Recommended approval wording:

```text
Approve Phase 8 implementation of the read-only App-integrated Intelligence tab using local Phase 7 dashboard_data.json only.
```

Until that approval, do not:

- edit App shell/nav/runtime files;
- create UI files;
- write Supabase;
- write Planner;
- add pgvector;
- query or modify Memgraph;
- create public output;
- write media metadata;
- perform canonical writeback;
- expand beyond Lake Post-Seal Core Seed.
