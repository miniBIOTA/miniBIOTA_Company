---
id: operation_living_intelligence_wave_8_source_readiness_review_2026-05-15
title: Operation Living Intelligence Wave 8 Source Readiness Review
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-8, telemetry, source-readiness, hardware, app, web, no-write]
status: source_readiness_review_complete
---
# Operation Living Intelligence Wave 8 Source Readiness Review

## Purpose

This review checks whether **Operation Living Intelligence Wave 8: Telemetry Summaries** has enough source shape for a future no-write design-review packet.

Wave 8 is still docs-only. This review does not approve a helper, generated output, live Supabase reads, live telemetry table reads, MQTT subscription, MQTT publish, telemetry schema changes, Hardware service changes, firmware changes, App Monitoring changes, Web/public telemetry changes, scheduled jobs, time-series infrastructure, graph/vector runtime, paid services, public claims, or canonical writeback.

## Readiness Result

```text
source_shape_ready_live_read_deferred_packet_ready_retention_open
```

Meaning:

- local source/docs shape is ready for a no-write cross-domain design-review packet;
- public/private telemetry boundaries are explicit enough for review;
- live row samples, row counts, current retention, and current freshness windows were not checked;
- retention policy for `biome_telemetry` remains open;
- no implementation, helper, generated output, live read, write, or runtime behavior is approved.

## Sources Reviewed

Company sources:

| Source | Finding |
|---|---|
| `domains/company/operation_living_intelligence_wave_8_telemetry_summaries_design_2026-05-15.md` | Establishes Wave 8 as derived telemetry summaries only, with source/readiness review required before helper or live read. |
| `domains/hardware/hardware_brief.md` and `domains/hardware/hardware_overview.md` | Confirm Hardware owns telemetry producer, MQTT, firmware, service deployment, schema/control safety, and internal history boundaries. |
| `domains/app/app_brief.md` and `domains/app/app_overview.md` | Confirm App Monitoring remains internal/operator-only and any helper/read path needs separate approval. |
| `domains/web/web_brief.md` and `domains/web/web_overview.md` | Confirm Web owns public read-only telemetry surfaces and public-safe field language. |
| `_system/agent_repo_registry.md` | Routes Hardware, App, Web, and Company ownership correctly for telemetry, public surfaces, and live-system risk. |
| `_system/database_awareness.md` and `memory/05-database-access.md` | Reinforce read/write approval boundaries for structured records and telemetry. |

Hardware source references:

| Source | Finding |
|---|---|
| `M:\miniBIOTA\miniBIOTA_Hardware\services\schema\biome_telemetry_schema_2026-05-13.sql` | `biome_telemetry` schema is documented as applied. Columns support per-biome recorded samples for biome air, atmosphere air, liquid/heat-exchanger temperature, pump percentage, and target temperature. RLS is enabled. |
| `M:\miniBIOTA\miniBIOTA_Hardware\memory\05-telemetry-and-data-flow.md` | Current flow is ESP32 -> Mosquitto/Wyse -> App Monitoring, `telemetry_snapshot`, public Web, and `biome_telemetry` internal history. Coordinator writes snapshot about every 15 seconds and history about every 60 seconds when configured. |
| `M:\miniBIOTA\miniBIOTA_Hardware\skills\telemetry-coordinator\reference\telemetry-pipeline-plan.md` | Confirms `telemetry_snapshot` row `id=1`, `biome_telemetry` internal history, sensor biomes 2-5, public node allowlist, public-field exclusion, and open retention decision. |
| `M:\miniBIOTA\miniBIOTA_Hardware\0. Hardware Systems\5. Control System\mqtt-topics.md` | Confirms MQTT payload fields `atmo_t`, `atmo_h`, `bio_t`, `bio_h`, `liq_t`, `pump_pct`, and `target_t`; publishing setpoints is live-control and requires approval. |
| `M:\miniBIOTA\miniBIOTA_Hardware\services\telemetry_coordinator.py` | Source supports expected telemetry fields, sensor-biome map, public snapshot builder, history rows, and no MQTT publishing/control behavior in the coordinator. |
| `M:\miniBIOTA\miniBIOTA_Hardware\services\tests\test_telemetry_coordinator.py` | Tests confirm public nodes exclude `liq_t`, `liquid_temp_c`, `pump_pct`, `relay`, `command_queue`, and `actuator`; history rows include internal climate-analysis fields. |

Web source references:

| Source | Finding |
|---|---|
| `M:\miniBIOTA\miniBIOTA_Web\utils\telemetry.py` | Web reads `telemetry_snapshot` by default when configured, allows local JSON fallback, uses singleton row `id=1`, applies stale guards, allowlists public sensor nodes, and normalizes public node fields. |
| `M:\miniBIOTA\miniBIOTA_Web\skills\work-with-public-telemetry\reference\technical-architecture.md` | Defines `/api/telemetry/overview`, `/live-monitoring`, public node allowlist, public fields, stale semantics, and no-control boundary. |
| `M:\miniBIOTA\miniBIOTA_Web\memory\05-data-and-telemetry-boundaries.md` | Confirms public telemetry is read-only observability and must not imply pump switching, relay control, or desktop operator parity. |

App source references:

| Source | Finding |
|---|---|
| `M:\miniBIOTA\miniBIOTA_App\js\monitoring\monitoring.js` | App Monitoring consumes local MQTT telemetry fields including `liq_t`, `pump_pct`, and `target_t`; stale/offline display is operator-side. |
| `M:\miniBIOTA\miniBIOTA_App\skills\implement-app-feature\reference\monitoring.md` | Confirms App Monitoring is a live biosphere-facing surface; `liq_t` and `pump_pct` are operator-only; Supabase telemetry fallback reads need care. |
| `M:\miniBIOTA\miniBIOTA_App\memory\08-recurring-decisions.md` | Confirms Monitoring controls/setpoints are live biosphere-affecting; internal telemetry fields must not be added to Web/public output without separate scope. |
| `M:\miniBIOTA\miniBIOTA_App\memory\05-supabase-and-storage-rules.md` | Confirms telemetry state, MQTT behavior, controls, and runtime control paths require explicit approval before changes or live tests. |

## Source Shape Findings

### Ready For Design Review

- `telemetry_snapshot` has a clear public read model: singleton row `id=1`, `updated_at`, and `payload`.
- Web source expects `payload` with `schema_version`, `generated_at`, `refresh_interval_seconds`, `source`, `summary`, `coordinator`, `upstream`, `setpoint_channel`, and `nodes`.
- Public node allowlist is explicit for sensor biomes 2-5 and atmosphere nodes for biomes 2-5.
- Public node fields are explicit: `id`, `name`, `role`, `state`, `chip_state`, `status_label`, `label`, `detail`, `last_seen`, `temperature_c`, `humidity_pct`, and `target_temperature_c`.
- `biome_telemetry` has a documented applied schema for internal history rows with `biome_id`, `recorded_at`, biome/atmosphere temperature and humidity, `liquid_temp_c`, `pump_pct`, and `target_temp_c`.
- Coordinator cadence is documented as about 15 seconds for `telemetry_snapshot` and about 60 seconds for `biome_telemetry`.
- Hardware tests prove public snapshot nodes exclude operator/control fields, while history rows preserve internal fields.
- Web stale/offline semantics are source-backed: row `updated_at`, payload `generated_at`, node `last_seen`, required public readings, and configured maximum age.
- App Monitoring source confirms internal operator fields already exist in MQTT/App context without needing public Web exposure.

### Not Ready For Implementation

- Live `telemetry_snapshot` row payload was not read.
- Live `biome_telemetry` rows, row counts, latest timestamps, and sample quality were not read.
- Current retention policy is not decided. Hardware reference notes likely 90-day rolling delete as an open item, not an approved policy.
- RLS/policy state for current live telemetry tables was not verified in this review.
- Source volume and storage growth for history rows were not measured.
- No safe read helper or output validation helper exists for Wave 8.
- No App, Hardware, or Web design-review packet has accepted the helper/read path.
- No public reuse of internal fields is approved.

## Public / Internal Field Classification

| Field family | Classification | Notes |
|---|---|---|
| Biome identity and public node IDs | Public-safe candidate | Already part of Web public telemetry contract for sensor biomes 2-5. |
| `temperature_c`, `humidity_pct` in public nodes | Public-safe candidate | Public weather/context fields already rendered by Web when available. |
| `last_seen`, node state, chip/status labels | Public-safe candidate | Useful for stale/offline summaries and public availability language. |
| `target_temperature_c` | Public informational only | Missing target does not degrade public weather chip. Must not imply Web control. |
| `bio_temp_c`, `bio_humidity_pct`, `atmo_temp_c`, `atmo_humidity_pct` in history | Internal analysis, public-derived summary possible only after review | Row-level history is internal; aggregate public summaries require Web/Hardware review. |
| `liquid_temp_c`, `pump_pct` | Internal-only | Operator/control-analysis fields. Do not expose publicly without separate Web/Hardware/App approval. |
| MQTT `liq_t`, `pump_pct`, `target_t` | Internal/operator or firmware telemetry | Source fields for App/Hardware context; not public Web output by default. |
| Relay, command queue, actuator/control fields | Blocked from Wave 8 summaries | Not present in public snapshot and should not enter generated summaries. |

## Completed Next Packet

Company prepared the no-write **Wave 8 Hardware/App/Web design-review packet** before any helper or live read:

```text
domains/company/operation_living_intelligence_wave_8_hardware_app_web_design_review_packet_2026-05-15.md
```

That packet asks:

1. Should the first Wave 8 source read use App-owned protected reads, Hardware-owned read-only helper paths, MCP/read-only awareness, or another explicit path?
2. Is the candidate ignored output path acceptable if later approved?
3. Should first output be JSONL plus Markdown readback, or remain design-only until retention is decided?
4. What exact live-read approval is needed for `telemetry_snapshot` and `biome_telemetry`?
5. Should summaries include only current-state public snapshot fields at first, leaving history rollups for a later gate?
6. What retention/cadence policy should govern `biome_telemetry` before rollups are generated?
7. What validation proves internal fields cannot leak into public summaries?
8. What validation proves no MQTT publish, setpoint command, schema change, App Monitoring change, Web route/API change, or Hardware service change occurs?

Company then prepared the domain review synthesis:

```text
domains/company/operation_living_intelligence_wave_8_domain_review_synthesis_2026-05-15.md
```

Synthesis result:

```text
company_review_synthesis_ready_domain_acceptance_pending
```

The recommended default is to pause Wave 8 before implementation and continue Wave 9 docs-only unless Josue explicitly chooses Hardware/App/Web domain-owned review notes now.

## Candidate Future Output

If later approved, keep output ignored, rebuildable, and noncanonical:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_8_telemetry_summaries\
```

Candidate files remain:

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

Recommendation for first helper, if later approved: start with `telemetry_snapshot` only and a Markdown/JSON validation report before attempting `biome_telemetry` history rollups.

## Stop Conditions

Stop before implementation if:

- a live read path is not explicitly approved;
- current row shape does not match the documented source contract;
- retention/cadence policy is still needed for history rollups;
- generated output cannot prove public/internal field separation;
- any path requires schema changes, telemetry writes, MQTT publish, command queues, App Monitoring changes, Web behavior changes, Hardware service changes, or scheduled jobs;
- any summary would imply public claims, Research conclusions, live-control recommendations, or canonical telemetry truth.

## Verification

- Read Company Wave 8 design.
- Read Company Hardware/App/Web reports.
- Read Company registry and database-awareness notes.
- Read Hardware telemetry schema, telemetry data-flow memory, pipeline reference, MQTT topic map, coordinator source, and coordinator tests.
- Read Web telemetry adapter, public telemetry architecture reference, and Web telemetry boundary memory.
- Read App Monitoring source, App Monitoring reference, App telemetry recurring decisions, and App Supabase/telemetry safety rules.
- No live telemetry, Supabase, MQTT, App, Web, Hardware, or Planner reads were performed.
- No helper was implemented and no generated output was created.
- No App, Web, Hardware, firmware, MQTT, telemetry schema, live-control, database, Planner, public site, graph/vector runtime, automation, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, source-of-truth record, or canonical writeback changed.
