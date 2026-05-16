---
id: operation_living_intelligence_wave_4_youtube_analytics_warehouse_design_2026-05-15
title: Operation Living Intelligence Wave 4 YouTube Analytics Warehouse Design
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-4, youtube-analytics, analytics-warehouse, docs-only]
status: docs_only_design
---
# Operation Living Intelligence Wave 4 YouTube Analytics Warehouse Design

## Purpose

Wave 4 starts the analytics lane for Operation Living Intelligence with YouTube first.

The operating question is:

```text
How are published videos performing over time, and what patterns should inform Content, Growth, Company, Brand, and Web review without turning analytics into content truth or public promises?
```

This is a docs-only design pass. It does not authorize YouTube API access, OAuth setup, Google Cloud project changes, credential storage, API calls, warehouse files, DuckDB/MotherDuck/BigQuery setup, App helper implementation, scheduled jobs, public dashboards, public claims, Content calendar changes, Planner/Supabase writes, paid services, revenue claims, sponsor commitments, financial commitments, launch targets, legal decisions, roadmap commitments, or canonical writeback.

## Current Source Context

Operation Living Intelligence already has a YouTube-first analytics decision in Company memory and the projection matrix.

Current local proof context:

| Source | Current role |
|---|---|
| Wave 1 Living Atlas Graph Seed | Proven local relationship/provenance graph for Lake Post-Seal source scope |
| Wave 2 Content Story Graph | Proven local story-context packet for Lake Post-Seal |
| Wave 3 Species/Public History | Proven local species/public-history packet for Lake Post-Seal |
| `content_pipeline.id = 338` | Published Lake Post-Seal YouTube source identity |
| `chronicles.id = 30` | Chronicle anchor: `Fish removal reopens the lake food web` |
| `https://youtu.be/lgmPWX9e-A0` | Published YouTube source URL for the first target identity |

The first Wave 4 packet should begin with `content_pipeline.id = 338` and the corresponding YouTube video id derived from its published URL. Additional published rows can be added only after a source-availability review confirms current Content source identity and publication state.

## Current Official API Posture Checked

Checked on 2026-05-15 against official Google/YouTube developer docs.

| Surface | Design implication |
|---|---|
| YouTube Analytics API | Best first fit for targeted, operator-run queries over selected channel/video/date ranges. The `reports.query` endpoint takes channel/content-owner identity, `startDate`, `endDate`, metrics, and optional dimensions/filters. |
| YouTube Reporting API | Better later fit for bulk report jobs and repeatable ingestion. Reports are CSV files for 24-hour periods; jobs must be created before reports are generated and can be retrieved later. |
| YouTube Data API | Useful only if Wave 4 needs extra video/channel metadata not already in `content_pipeline`; it is quota-governed and should not be the default analytics source. |
| OAuth scopes | First implementation should request the narrowest practical read-only analytics scope. Monetary/revenue scope should stay out of the first packet unless Financials explicitly approves revenue analysis. |
| Data availability | Queries and downloaded reports can lag or omit rows. The warehouse must record import time, requested date range, returned rows, and no-data cases instead of assuming full coverage. |

Official references:

- YouTube Analytics and Reporting APIs overview: `https://developers.google.com/youtube/analytics/`
- Analytics `reports.query`: `https://developers.google.com/youtube/analytics/reference/reports/query`
- Analytics dimensions: `https://developers.google.com/youtube/analytics/dimensions`
- Analytics metrics: `https://developers.google.com/youtube/analytics/metrics`
- Reporting API bulk reports: `https://developers.google.com/youtube/reporting/v1/reports`
- YouTube Data API quota/metadata context: `https://developers.google.com/youtube/v3/getting-started`

## API Path Recommendation

Use this order:

1. **Manual export or targeted Analytics API design first**
   - If API auth is not ready, a YouTube Studio manual export may be acceptable for the first source-availability review.
   - If API auth is approved later, use Analytics API `reports.query` for the first bounded report set.

2. **Local file staging second**
   - Store raw responses/exports and normalized JSONL/CSV/Parquet in an ignored local App `out/` path only if separately approved.
   - Do not write analytics rows to Supabase during the first proof.

3. **DuckDB local warehouse third**
   - Use DuckDB locally after a repeated report shape is proven.
   - Treat MotherDuck, BigQuery, or recurring cloud warehouse adoption as a later Financials/App/Growth/Company decision.

4. **Reporting API bulk jobs later**
   - Use Reporting API only after the report families, date grain, deduplication, backfill handling, and review consumers are known.

## Proposed First Report Shape

Start with channel/video/day performance for the bounded Lake Post-Seal source.

Candidate dimensions:

| Dimension | Use |
|---|---|
| `day` | Daily time series |
| `video` | Join to `content_pipeline` source identity |
| `country` | Optional audience geography review |
| `deviceType` | Optional viewing-context review if supported for selected report |
| `subscribedStatus` | Optional audience relationship context if supported for selected report |
| `insightTrafficSourceType` | Optional discovery/source context if supported for selected report |

Candidate metrics:

| Metric | Use |
|---|---|
| `views` | Baseline reach |
| `estimatedMinutesWatched` | Watch-time weight |
| `averageViewDuration` | Retention context in seconds |
| `averageViewPercentage` | Retention context as percent |
| `likes` | Lightweight engagement |
| `comments` | Lightweight engagement and review flag |
| `shares` | Audience propagation signal |
| `subscribersGained` | Subscriber movement signal |
| `subscribersLost` | Subscriber movement signal, interpreted cautiously |

Do not include estimated revenue, ad revenue, CPM, playback-based CPM, or other monetary metrics in the first packet. Revenue analysis requires Financials approval, the monetary read-only scope, and explicit separation between platform estimate, cash receipt, earned period, and financial source of truth.

## Proposed Local Warehouse Shape

If a later implementation is approved, the first ignored output path should be:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_4_youtube_analytics_warehouse\
```

Recommended files:

| File | Purpose |
|---|---|
| `source_manifest.json` | Requested source ids, YouTube ids, date ranges, API/export path, auth posture, and owner |
| `video_identity.jsonl` | Join keys from `content_pipeline`, `chronicles`, YouTube video id, title/url/date when available |
| `raw_exports_manifest.jsonl` | Raw export/API response inventory without committing raw private analytics |
| `daily_video_metrics.jsonl` | Normalized daily metrics by video |
| `audience_context_metrics.jsonl` | Optional country/device/subscribed-status slices after threshold/privacy review |
| `traffic_source_metrics.jsonl` | Optional traffic-source slices after validation |
| `content_context_links.jsonl` | Derived links to story/species/biome tags from Waves 1-3, not source truth |
| `validation_report.json` | Row counts, required columns, duplicate keys, date coverage, no-data notes, and blocked fields |
| `youtube_analytics_readback_report.md` | Human readback with caveats and review owners |

No raw analytics export should be committed. If example fixtures are needed for docs or tests, use tiny synthetic fixtures clearly labeled as synthetic.

## Join Model

Canonical sources stay canonical:

| Source | Role in Wave 4 |
|---|---|
| `content_pipeline` | Canonical internal published content identity and published URL |
| `chronicles` | Story/history anchor when source rows already link to the published item |
| Wave 1 graph output | Derived ecological/provenance context only |
| Wave 2 story output | Derived story/open-loop context only |
| Wave 3 species/public-history output | Derived species/public-surface context only |
| YouTube Analytics/Reporting export | Derived performance history |

Recommended join keys:

```text
content_pipeline.id -> youtube_video_id -> youtube analytics video dimension
content_pipeline.id -> chronicles.source_pipeline_id
content_pipeline.id -> derived OLI content/story/species context
```

The analytics warehouse must not become the source of truth for publication state, story state, content schedule, species identity, claims, public copy, sponsor value, or revenue.

## Pilot Questions

The first Wave 4 report should answer:

1. How did the Lake Post-Seal video perform by day after publication?
2. What changed when performance is weighted by watch time rather than views?
3. Did average duration or average percentage watched suggest a retention issue or a promising story pattern?
4. Which discovery context, if available, looks worth reviewing without overclaiming?
5. Which audience slices, if available, are large enough to interpret safely?
6. How does the video connect to story threads, species, biomes, and public-history candidates already modeled in Waves 1-3?
7. What should Content, Growth, Brand, Web, and Company inspect next?
8. What should not be inferred from this data?

## Guardrails

- Analytics are performance signals, not ecological truth.
- Analytics do not prove content quality, story truth, species claims, sponsor value, or revenue.
- Analytics must not change `content_pipeline`, `content_calendar`, `chronicles`, species rows, Web pages, Planner records, or public copy automatically.
- Small samples and early-video windows require caution; compare age-normalized windows when possible.
- Revenue metrics are excluded until Financials approves the scope.
- Do not store OAuth client secrets, refresh tokens, API keys, or raw private exports in committed files.
- Do not expose private YouTube analytics on public Web surfaces.
- Do not turn private analytics into public claims such as reach, retention, sponsorship value, or audience demographics without explicit approval.
- Do not create a scheduled sync or warehouse job before manual/source-availability proof is reviewed.
- Do not use YouTube Data API metadata broadly if `content_pipeline` already stores the needed identity.
- Respect YouTube/Google API policies and refresh/delete requirements for stored API metadata at implementation time.

## Downstream Owners

| Domain | Why implicated | Next need |
|---|---|---|
| Company | Owns OLI sequencing, source-of-truth boundary, and cross-domain interpretation | Keep Wave 4 as derived analytics design until implementation is separately approved |
| App | Owns any helper, credential path, local output, warehouse runtime, and future automation | Review auth, secrets, ignored output, local staging, readback, and no-write posture before implementation |
| Content | Owns content identity, publishing context, story interpretation, and editorial response | Confirm first source rows and interpret analytics as editorial signals only |
| Growth | Owns audience movement, funnel interpretation, sponsor-safe context, and follow-up strategy | Define what audience/funnel questions are worth asking without implying commitments |
| Financials | Owns revenue/cost interpretation and paid-tool approval | Keep revenue metrics out of first packet; review any monetary scope or paid warehouse need later |
| Brand | Owns public language around performance, audience, and momentum | Prevent private analytics from becoming overconfident public proof |
| Web | Owns public dashboards, tracking, and public analytics surfaces | No Web changes; later define public/private display rules if needed |

## Validation Requirements

A future implementation must stop unless it can prove:

| Check | Required result |
|---|---|
| Source identity | Every YouTube video id maps to a known `content_pipeline` row or is explicitly marked unmatched |
| Date coverage | Requested and returned date ranges are recorded |
| Grain uniqueness | No duplicate `(video_id, day, dimension set)` rows after normalization |
| Metric typing | Numeric fields parse cleanly and preserve null/no-data cases |
| Source separation | Analytics rows do not overwrite Content/Research/Web/App records |
| Sensitive fields | Monetary metrics, private auth tokens, and raw credential material are excluded |
| Review labels | Output labels interpretation as `signal`, `candidate_pattern`, `review_required`, or `not_enough_data` |
| Readback | Human report names caveats, omitted metrics, and downstream owners |

## Stop Conditions

Stop before implementation or reporting if any of these are true:

- YouTube account/channel ownership or OAuth consent path is unclear.
- Credential storage would require committing secrets or using an unreviewed path.
- The proposed report needs monetary metrics before Financials approval.
- The report would expose private analytics publicly.
- The source video cannot be matched safely to `content_pipeline`.
- The design would require App runtime/schema changes, Supabase writes, Planner writes, or scheduled jobs without approval.
- The first useful answer can be obtained through a manual YouTube Studio export and no API connection is justified yet.

## Recommended Next Step

Prepare a Wave 4 source-availability and auth-readiness review before any implementation:

```text
Operation Living Intelligence Wave 4 YouTube Analytics Source Availability And Auth Readiness Review
```

That review should decide whether the first packet uses:

1. YouTube Studio manual export,
2. YouTube Analytics API targeted query,
3. YouTube Reporting API bulk report job later, or
4. defer because auth, source identity, privacy, or consumer questions are not ready.

The default recommendation is targeted/manual first, local ignored staging second, DuckDB only after the report shape proves repeated value, and no Reporting API bulk jobs until recurrence is justified.
