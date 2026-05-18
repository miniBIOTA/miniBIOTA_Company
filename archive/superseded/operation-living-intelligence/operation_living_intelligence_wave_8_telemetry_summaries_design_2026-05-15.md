---
id: operation_living_intelligence_wave_8_telemetry_summaries_design_2026-05-15
title: Operation Living Intelligence Wave 8 Telemetry Summaries Design
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-8, telemetry, hardware, app, web, no-write]
status: docs_only_design
---
# Operation Living Intelligence Wave 8 Telemetry Summaries Design

## Purpose

Wave 8 designs how Operation Living Intelligence can use climate and control context without creating a new time-series database, changing live controls, or changing public telemetry behavior.

The goal is to let agents reason about current vs historical biome climate behavior from approved summaries while preserving the Hardware/App/Web boundary:

- Hardware owns telemetry producer behavior, firmware, MQTT, device topology, and live-control safety.
- App owns internal operator monitoring surfaces and App runtime behavior.
- Web owns public read-only telemetry presentation and public-safe language.
- Company owns cross-domain sequencing, approval gates, and derived planning context.

This design does not approve a helper, generated output, live database reads, telemetry schema changes, Hardware service changes, firmware changes, MQTT publishing, command queues, pump/relay/actuator control, App Monitoring changes, Web/public telemetry changes, scheduled jobs, time-series infrastructure, graph/vector runtime, public claims, paid services, or canonical writeback.

## Current Source Shape

Known active telemetry sources from Company domain reports:

| Source | Current role |
|---|---|
| `telemetry_snapshot` | Public website-compatible singleton snapshot row, produced by the Wyse telemetry coordinator and consumed by Web public telemetry surfaces. |
| `biome_telemetry` | Internal history rows for climate/control analysis, produced by the Wyse telemetry coordinator. |
| Local MQTT | Hardware/App internal real-time telemetry path; App Monitoring consumes live MQTT for operator context. |
| Hardware repo telemetry references | Source of truth for producer behavior, command boundaries, sensor topology, and live-control safety rules. |
| Web telemetry memory/playbooks | Source of truth for public-safe read-only telemetry behavior. |
| App Monitoring memory/source | Source of truth for internal operator monitoring surfaces. |

Wave 8 should not assume these sources are complete, clean, or ready for broad indexing until a source/readiness review checks current schema, row shape, retention, cadence, public/private fields, and failure-state semantics.

## Proposed Summary Families

Future derived summaries, if separately approved, should stay rebuildable and noncanonical:

| Summary | Purpose |
|---|---|
| Current biome state | A public/private-safe snapshot summary of biome online/stale/offline and recent climate state. |
| Hourly rollup | Climate range, average, and data-quality summary for each sensor biome. |
| Daily rollup | Longer trend summary for climate stability, missing-data windows, and sensor reliability. |
| Stale/offline intervals | Agent-readable context for missing telemetry and source health. |
| Public-safe Web summary | A restricted summary aligned to Web's public read-only contract, excluding internal pump/liquid/control details. |
| Internal operator summary | App/Hardware-only summary that may include internal fields if App and Hardware approve the read path. |
| Review-required anomalies | Candidate notes for human review, not automatic claims or actions. |

## Field Boundary

Wave 8 must keep public and internal telemetry separate.

Public-safe candidate fields:

- biome identity;
- current availability state;
- public atmosphere/weather-style readings already approved for Web surfaces;
- last updated / freshness status;
- unavailable/stale/malformed state language.

Internal-only candidate fields:

- pump percentage;
- liquid/heat-exchanger temperature;
- target temperature;
- relay/actuator/control details;
- command queue state;
- Hardware diagnostic fields;
- raw internal history rows.

Internal-only fields must not move into public Web output, public copy, Content claims, partner materials, or broad agent summaries without a separate Web/Hardware/App approval path.

## Proposed Future Output Boundary

If implementation is later approved, use ignored, rebuildable output only:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_8_telemetry_summaries\
```

Candidate files:

```text
telemetry_source_manifest.json
telemetry_summary_rows.jsonl
telemetry_rollups_hourly.jsonl
telemetry_rollups_daily.jsonl
telemetry_stale_offline_intervals.jsonl
telemetry_public_safe_summary.md
telemetry_internal_review_summary.md
validation_report.json
```

This output path is only a candidate. Creating output, implementing helpers, or reading live telemetry tables still requires separate approval.

## Required Next Review

The Wave 8 source/readiness review was completed at:

```text
domains/company/operation_living_intelligence_wave_8_source_readiness_review_2026-05-15.md
```

Result:

```text
source_shape_ready_live_read_deferred_packet_ready_retention_open
```

The no-write Hardware/App/Web design-review packet is now prepared at:

```text
domains/company/operation_living_intelligence_wave_8_hardware_app_web_design_review_packet_2026-05-15.md
```

The Company domain review synthesis is now prepared at:

```text
domains/company/operation_living_intelligence_wave_8_domain_review_synthesis_2026-05-15.md
```

The next safe step is to pause Wave 8 before implementation and continue Wave 9 docs-only unless Josue explicitly chooses Hardware/App/Web domain-owned review notes now.

The completed source/readiness review answered or deferred:

1. What exact schema and field set currently exist for `telemetry_snapshot` and `biome_telemetry`?
2. Which fields are public-safe, internal-only, or blocked?
3. What cadence and retention exist for `biome_telemetry`?
4. What stale/offline semantics should be preserved?
5. Can source reads happen through an approved read-only path without touching producer/runtime behavior?
6. Should summaries be row-based JSONL, Parquet/CSV, Markdown readback, or postponed?
7. What must stop the packet before implementation?

## Affected Domains

| Domain | Why implicated | Next need |
|---|---|---|
| Hardware | Owns telemetry producer, MQTT, firmware, service deployment, sensor topology, and live-control boundaries. | Confirm source/readiness boundaries and no-control/no-firmware posture before any helper. |
| App | Owns internal operator monitoring surfaces, protected reads, and local ignored-output helper boundaries. | Review any future helper/read path only after source/readiness is clear. |
| Web | Owns public read-only telemetry surface and public-safe language. | Confirm public-safe summary fields before any Web-facing reuse. |
| Company | Owns cross-domain sequencing, risk, and derived planning context. | Keep Wave 8 as docs-only until source/readiness review is complete. |

## Guardrails

- Do not create a new time-series database.
- Do not change `telemetry_snapshot` or `biome_telemetry` schema.
- Do not change Hardware producer services, firmware, MQTT topics, or command queues.
- Do not publish MQTT messages or control pumps, relays, actuators, lights, rain, waves, setpoints, or devices.
- Do not change App Monitoring behavior.
- Do not change Web telemetry behavior or public copy.
- Do not generate summaries from live data without explicit approval.
- Do not treat generated anomaly notes as Research findings, public claims, or control recommendations.
- Do not expose internal pump/liquid/control fields publicly.
- Do not write Supabase, Planner, Storage, schema, App runtime, Web runtime, Hardware repo, domain repos, Brain mirrors, graph/vector runtime, scheduled jobs, paid services, or canonical records.

## Recommended Next Step

Pause Wave 8 as a deferred return gate before implementation and continue Wave 9 docs-only, unless Josue explicitly chooses Hardware/App/Web domain-owned review notes now.

Do not implement helpers, read live telemetry tables, generate output, alter App/Web/Hardware behavior, or create durable infrastructure without separate approval.

## Verification

- Based on active Company Hardware/App/Web reports and the Operation Living Intelligence projection matrix.
- No live telemetry, Supabase, MQTT, App, Web, Hardware, or Planner reads were performed.
- No generated output was created.
- No App, Web, Hardware, firmware, MQTT, telemetry schema, live-control, database, Planner, public site, graph/vector runtime, automation, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, source-of-truth record, or canonical writeback changed.
