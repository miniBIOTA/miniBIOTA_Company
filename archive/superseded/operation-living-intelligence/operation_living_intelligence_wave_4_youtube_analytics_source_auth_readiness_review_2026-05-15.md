---
id: operation_living_intelligence_wave_4_youtube_analytics_source_auth_readiness_review_2026-05-15
title: Operation Living Intelligence Wave 4 YouTube Analytics Source And Auth Readiness Review
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-4, youtube-analytics, source-availability, auth-readiness, docs-only]
status: source_available_auth_not_ready
---
# Operation Living Intelligence Wave 4 YouTube Analytics Source And Auth Readiness Review

## Purpose

This review checks whether Wave 4 can move from docs-only analytics warehouse design into a first bounded implementation proposal.

The review asks:

```text
Do we have enough source identity, ownership clarity, auth posture, privacy posture, and first-report scope to propose a no-write YouTube analytics packet?
```

Result:

```text
source_available_auth_not_ready_implementation_deferred
```

The first source identity is available for a future proposal, but analytics data access is not ready. The next implementation step should be a no-write App proposal only after Josue chooses either a manual YouTube Studio export path or an approved targeted YouTube Analytics API path.

## Scope Boundary

This is docs-only.

Not performed or approved:

- YouTube Studio export;
- YouTube Analytics API call;
- YouTube Reporting API job;
- YouTube Data API call;
- Google Cloud project, API enablement, OAuth consent screen, client secret, or credential change;
- token storage;
- App helper;
- warehouse file;
- DuckDB, MotherDuck, BigQuery, or other warehouse setup;
- scheduled job;
- public dashboard or public claim;
- Content calendar/pipeline change;
- Growth outreach or sponsor claim;
- Financials revenue analysis;
- Planner/Supabase write;
- paid service;
- canonical writeback.

## Inputs Reviewed

| Input | Use |
|---|---|
| `domains/company/operation_living_intelligence_wave_4_youtube_analytics_warehouse_design_2026-05-15.md` | Wave 4 design, API posture, report shape, and guardrails |
| `archive/superseded/operation-living-intelligence/operation_living_intelligence_task_409_schema_data_audit_2026-05-15.md` | Source identity for `content_pipeline.id = 338` and `chronicles.id = 30` |
| `domains/content/content_brief.md` | Content-facing publication context and recent published YouTube source list |
| `skills/coordinate-cross-domain-priorities/reference/operation-living-intelligence-data-projection-matrix.md` | OLI projection-first analytics warehouse rules |
| Official Google/YouTube docs checked in the Wave 4 design pass | Current API/reporting posture and scope implications |

## Source Availability Result

The first Wave 4 source packet is available as a source-identity packet, not as an analytics-data packet.

| Source item | Status | Notes |
|---|---|---|
| `content_pipeline.id = 338` | Available | Prior audit records title, status `published`, `published_date = 2026-04-17`, `published_url = https://youtu.be/lgmPWX9e-A0`, `biome_id = 1`, and `chronicle_entry_id = 30`. |
| `chronicles.id = 30` | Available | Prior audit records title `Fish removal reopens the lake food web`, `event_date = 2026-04-17`, `source_pipeline_id = 338`, `media_type = youtube_horizontal`, and matching YouTube URL. |
| YouTube video id | Derivable | `lgmPWX9e-A0` can be derived from the published URL. A future helper should still validate URL parsing and store the original URL. |
| Content brief context | Available | Content brief confirms Lake Post-Seal longform published on 2026-04-17 as pipeline `338`. |
| Analytics export/API data | Not available in repo | No YouTube analytics export, raw response, report job, local warehouse file, or readback exists. |
| Additional published videos | Candidate only | The Content brief lists recent published shorts, but Wave 4 should not expand beyond the first Lake Post-Seal source without a fresh source selection/readiness pass. |

Source availability decision:

```text
first_source_identity_available
analytics_source_data_unavailable_until_export_or_api_approval
```

## Auth Readiness Result

Wave 4 is not auth-ready.

| Auth item | Status | Required before implementation |
|---|---|---|
| YouTube channel/account owner | Not checked | Josue must confirm the account/channel that owns the analytics data. |
| Manual YouTube Studio export path | Not checked | Josue can choose this as the first path if it is faster than OAuth/API setup. |
| Google Cloud project | Not approved | Any project/API enablement change needs explicit approval. |
| OAuth consent/client | Not approved | Any OAuth setup, client secret, or token handling needs explicit approval and App review. |
| Read-only analytics scope | Candidate only | A future targeted Analytics API path should use the narrowest practical read-only scope. |
| Monetary scope | Blocked | Do not request monetary/revenue analytics scope unless Financials approves revenue analysis. |
| Credential storage | Not designed | App must review ignored local credential storage or another approved credential path before any token exists. |
| Reporting API job | Not ready | Bulk jobs should wait until recurrence, dedupe, backfill handling, and report consumers are known. |

Auth readiness decision:

```text
not_auth_ready
manual_export_or_oauth_choice_required
```

## Recommended First Path

Default recommendation:

```text
Manual export first if Josue can get the file quickly.
Targeted Analytics API first only if Josue wants reusable API setup now.
Reporting API bulk jobs later.
```

Rationale:

- Manual export avoids premature OAuth, Google Cloud, credential storage, and helper design.
- Targeted Analytics API is the right reusable first API shape, but only after auth is approved.
- Reporting API bulk jobs are heavier than the first packet needs.
- YouTube Data API is unnecessary for the first packet because `content_pipeline` already holds the needed source identity.

## First Report Candidate

If implementation is later approved, start with one video:

| Field | Candidate value |
|---|---|
| Internal content id | `content_pipeline:338` |
| Chronicle id | `chronicle:30` |
| YouTube video id | `lgmPWX9e-A0` |
| Published date | `2026-04-17` |
| Candidate date range | `2026-04-17` through latest fully available analytics day at run time |
| First grain | `video + day` |
| First report status label | `private_internal_analytics_review` |

Candidate non-monetary metrics:

- `views`
- `estimatedMinutesWatched`
- `averageViewDuration`
- `averageViewPercentage`
- `likes`
- `comments`
- `shares`
- `subscribersGained`
- `subscribersLost`

Candidate optional dimensions after the base report:

- `country`
- `deviceType`
- `subscribedStatus`
- `insightTrafficSourceType`

Do not request or import monetary metrics during the first packet.

## Proposed Future Output Shape

If a no-write implementation proposal is later approved, use App's ignored local output tree:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_4_youtube_analytics_warehouse\
```

Minimum output family:

| File | Required? | Notes |
|---|---|---|
| `source_manifest.json` | Yes | Source ids, YouTube id, date range, run mode, auth/export path, and owner |
| `video_identity.jsonl` | Yes | One internal-to-YouTube identity row for the seed packet |
| `daily_video_metrics.jsonl` | Yes after analytics source exists | Normalized daily metrics by video |
| `raw_exports_manifest.jsonl` | Yes after analytics source exists | Inventory of raw private analytics files/responses without committing raw private data |
| `validation_report.json` | Yes | Date coverage, duplicate keys, required fields, no monetary scope, source separation |
| `youtube_analytics_readback_report.md` | Yes | Human interpretation with caveats, owner routing, and blocked inferences |

Raw private analytics exports should remain local and ignored unless Josue explicitly approves a different storage plan. If fixtures are needed, use synthetic data.

## Approval Gates Before Any Implementation

| Gate | Owner | Required decision |
|---|---|---|
| Source scope | Company + Content | Confirm first video only or explicitly add more published videos |
| Analytics access path | Josue + App | Choose manual export or targeted API |
| YouTube account/channel | Josue | Confirm the analytics-owning account/channel |
| Credential path | App | Approve local ignored token/secret path or no-token manual-export path |
| Monetary scope | Financials | Required only if revenue metrics are ever requested |
| Warehouse runtime | App + Company + Financials if paid | Approve local DuckDB or defer warehouse runtime |
| Public use | Brand + Web + Content + Company | Required before any private analytics becomes public language or dashboard output |

## Guardrails For The Future Proposal

- Analytics rows are derived performance history, not Content source truth.
- Do not update `content_pipeline`, `content_calendar`, `chronicles`, story records, species records, Web pages, Planner tasks, or Supabase tables from analytics output.
- Do not use private analytics to make public claims about reach, audience, sponsor value, or revenue without explicit approval.
- Do not treat one video or a short early window as a strategy mandate.
- Do not compare older longforms to recent shorts without normalizing format, age, and distribution context.
- Do not store OAuth secrets or refresh tokens in committed files.
- Do not request monetary/revenue scope by default.
- Do not schedule recurring jobs until the first manual run proves repeated value and consumers.

## Downstream Owner Notes

| Domain | Readiness note |
|---|---|
| Company | Source identity is ready for proposal; auth and analytics data are not ready. |
| App | Needs to review any helper, token path, output path, validation/readback shape, and local warehouse runtime. |
| Content | Needs to confirm whether Wave 4 starts with only pipeline `338` or includes additional published videos after a fresh selection. |
| Growth | Needs to frame audience questions as signals, not outreach or sponsor commitments. |
| Financials | Keeps revenue metrics out until monetary scope is explicitly approved. |
| Brand | Needs to block overconfident public performance language. |
| Web | No public dashboard or tracking changes are implied. |

## Decision

Wave 4 can advance to a no-write implementation proposal only after Josue chooses the first access path:

1. manual YouTube Studio export, or
2. targeted YouTube Analytics API with approved OAuth/credential handling.

Until then, Wave 4 should remain docs-only.

## Recommended Next Step

Prepare one of these, depending on Josue's direction:

| Choice | Next artifact |
|---|---|
| Manual export first | `Operation Living Intelligence Wave 4 Manual Export Packet Proposal` |
| Targeted API first | `Operation Living Intelligence Wave 4 No-Write App Implementation Proposal` |
| Defer | Keep Wave 4 at design/readiness state and continue to Wave 5 Retrieval Layer docs-only |

Default recommendation is manual export first if Josue can obtain the YouTube Studio export quickly; otherwise use a no-write App proposal for a targeted Analytics API query.
