---
id: operation_living_intelligence_wave_8_hardware_app_web_design_review_packet_2026-05-15
title: Operation Living Intelligence Wave 8 Hardware App Web Design Review Packet
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, wave-8, telemetry, hardware, app, web, design-review, no-write]
status: design_review_packet_ready
---
# Operation Living Intelligence Wave 8 Hardware App Web Design Review Packet

## Purpose

This packet is the Company-to-Hardware/App/Web design review handoff for **Operation Living Intelligence Wave 8: Telemetry Summaries**.

Company is asking Hardware, App, and Web to review the future no-write boundary for a derived telemetry-summary helper or readback package. The purpose is to let agents reason about current telemetry state, stale/offline conditions, and later climate-summary candidates while preserving live-control safety and public/private telemetry boundaries.

This packet does not approve Hardware service changes, firmware changes, MQTT subscription changes, MQTT publishing, setpoint commands, pump/relay/actuator control, telemetry schema changes, App code changes, App Monitoring changes, App runtime behavior, Web route/API changes, public copy changes, public field expansion, helper implementation, generated output, live Supabase reads, live telemetry table reads, scheduled jobs, time-series infrastructure, graph/vector runtime, paid services, public claims, Research conclusions, Planner/Supabase writes, domain repo edits, Brain mirror edits, or canonical writeback.

## Design Inputs

Hardware, App, and Web should review these Company sources:

| Source | Path |
|---|---|
| Wave 8 design | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_8_telemetry_summaries_design_2026-05-15.md` |
| Wave 8 source/readiness review | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_8_source_readiness_review_2026-05-15.md` |
| Projection matrix | `M:\miniBIOTA\miniBIOTA_Company\skills\coordinate-cross-domain-priorities\reference\operation-living-intelligence-data-projection-matrix.md` |
| Session closeout | `M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_session_closeout_2026-05-15.md` |
| Company brief | `M:\miniBIOTA\miniBIOTA_Company\domains\company\company_brief.md` |
| Hardware brief | `M:\miniBIOTA\miniBIOTA_Company\domains\hardware\hardware_brief.md` |
| App brief | `M:\miniBIOTA\miniBIOTA_Company\domains\app\app_brief.md` |
| Web brief | `M:\miniBIOTA\miniBIOTA_Company\domains\web\web_brief.md` |
| Company registry | `M:\miniBIOTA\miniBIOTA_Company\_system\agent_repo_registry.md` |
| Company database awareness | `M:\miniBIOTA\miniBIOTA_Company\_system\database_awareness.md` |

## Current Readiness Finding

Company's current readiness result is:

```text
source_shape_ready_live_read_deferred_packet_ready_retention_open
```

Confirmed by source inspection:

- `telemetry_snapshot` has a clear public read model: singleton row `id=1`, `updated_at`, and `payload`.
- Web source expects a public snapshot payload with source metadata, summary state, coordinator/upstream status, setpoint-channel state, and public allowlisted nodes.
- Public node fields are explicit: `id`, `name`, `role`, `state`, `chip_state`, `status_label`, `label`, `detail`, `last_seen`, `temperature_c`, `humidity_pct`, and `target_temperature_c`.
- `biome_telemetry` has a documented internal history schema for sensor biomes with biome/atmosphere climate, liquid/heat-exchanger temperature, pump percentage, and target temperature.
- Hardware source documents about 15-second `telemetry_snapshot` cadence and about 60-second `biome_telemetry` cadence when the coordinator is configured.
- Hardware tests prove public snapshot nodes exclude `liq_t`, `liquid_temp_c`, `pump_pct`, `relay`, `command_queue`, and `actuator`.
- App Monitoring source confirms `liq_t`, `pump_pct`, and `target_t` are internal/operator context, not public Web output.
- Web source confirms stale/offline semantics and public read-only telemetry boundaries.

Still deferred:

- live `telemetry_snapshot` payload read;
- live `biome_telemetry` row samples, counts, latest timestamps, and source volume;
- current RLS/policy readback for telemetry tables;
- current freshness and sample quality checks;
- retention policy for `biome_telemetry`;
- helper implementation;
- generated telemetry output;
- public summary reuse;
- App, Web, or Hardware runtime integration;
- any live write, control, schema, or canonical record.

## Requested Cross-Domain Decision

Company is asking Hardware, App, and Web to answer design questions only:

| Question | Needed answer |
|---|---|
| No-write helper boundary | Is a future read-only telemetry-summary helper acceptable in principle if it cannot write Supabase, publish MQTT, change runtime behavior, or become canonical? |
| Read path | Should a future helper use App-owned protected reads, Hardware-owned read-only helper paths, MCP/read-only awareness, a local exported snapshot, or another explicit path? |
| Live read gate | What exact approval and readback should be required before live `telemetry_snapshot` or `biome_telemetry` rows are read for generated output? |
| First source scope | Should the first helper use `telemetry_snapshot` only, leaving `biome_telemetry` history rollups for a later retention/cadence gate? |
| Output boundary | Is `M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_8_telemetry_summaries\` acceptable for future ignored, rebuildable output if later approved? |
| Public/internal separation | What validation should prove internal fields cannot leak into public-safe summaries? |
| Retention/cadence | What retention policy and cadence assumptions should exist before hourly/daily history rollups are generated? |
| Web reuse | What public-safe field and language boundary must Web approve before any summary appears in Web-facing output? |
| App boundary | What should prove a helper cannot change App Monitoring, App runtime behavior, or protected-read secrets? |
| Hardware boundary | What should prove a helper cannot change producer services, firmware, MQTT behavior, command queues, setpoints, or device controls? |
| Stop conditions | What should stop a future Wave 8 packet before implementation? |

## Domain Review Questions

### Hardware

- Does the source/readiness review correctly represent `telemetry_snapshot`, `biome_telemetry`, MQTT payload fields, and Wyse coordinator behavior?
- Should first implementation, if later approved, read `telemetry_snapshot` only before touching internal history rows?
- What live-read approval is needed before `biome_telemetry` row samples, counts, latest timestamps, and source volume are checked?
- What retention rule should govern `biome_telemetry` before any hourly/daily rollups exist?
- What validation should prove a helper does not publish MQTT, enqueue setpoints, change firmware, change the coordinator service, alter schema, or affect live controls?

### App

- Is the candidate ignored output path under App `out/operation_living_intelligence/wave_8_telemetry_summaries/` acceptable if implementation is later approved?
- Should future reads route through App-owned protected reads, Company read-only helper context, Hardware helper context, or another safe path?
- What validation should prove no App Monitoring behavior, App runtime integration, secret-key exposure, scheduled sync, or App-side mutation helper is introduced?
- Should App require `telemetry_snapshot`-only readback before any internal `biome_telemetry` rollups?
- What readback report shape would be useful for operator context without becoming App runtime truth?

### Web

- Are the proposed public-safe fields aligned to the existing public telemetry contract?
- What fields or phrases should be blocked from Web-facing summary reuse?
- What stale/offline language should a future public-safe summary preserve?
- What validation should prove `liquid_temp_c`, `pump_pct`, MQTT `liq_t`, relay, command queue, actuator, and other internal/control fields cannot reach public summary output?
- What separate Web approval should be required before any route/API/copy/field-boundary change?

## Recommended Safety Position

Company recommends the domains classify the next stage as:

| Surface | Classification |
|---|---|
| Hardware/App/Web review | Allowed as docs-only review. |
| Future helper | Proposal only; not approved by this packet. |
| First source scope | Prefer `telemetry_snapshot` only until live-read and retention gates are accepted. |
| `biome_telemetry` history rollups | Deferred until retention/cadence/source-volume decisions are reviewed. |
| Local ignored output | Acceptable candidate boundary if App agrees; creating output still needs approval. |
| Live telemetry reads | Deferred until explicit read-only scope/approval. |
| Telemetry writes or schema changes | Not approved. |
| MQTT publishing or setpoint commands | Not approved. |
| Device control, pump/relay/actuator behavior | Not approved. |
| Hardware firmware/service changes | Not approved. |
| App Monitoring/runtime behavior | Not approved. |
| Web route/API/copy/public-field changes | Not approved. |
| Scheduled jobs or durable infrastructure | Not approved. |
| Public claims or Research conclusions | Not approved. |
| Canonical writeback | Must remain `none`. |

## Proposed Future Output

If Hardware, App, and Web later accept the design and Josue separately approves implementation, Company recommends the ignored output folder:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_8_telemetry_summaries\
```

Expected future generated files:

```text
telemetry_source_manifest.json
telemetry_snapshot_summary.json
telemetry_snapshot_readback_report.md
telemetry_public_safe_summary.md
telemetry_internal_review_summary.md
validation_report.json
```

History-rollup files should stay deferred until `biome_telemetry` live-read, retention, cadence, and source-volume gates are accepted:

```text
telemetry_rollups_hourly.jsonl
telemetry_rollups_daily.jsonl
telemetry_stale_offline_intervals.jsonl
```

Generated output should stay local, ignored, rebuildable, and explicitly noncanonical.

## Proposed First Source Set

Recommended first structured source set, if later approved:

```text
telemetry_snapshot
```

Candidate later structured source set:

```text
biome_telemetry
```

First Markdown/source-reference set:

```text
M:\miniBIOTA\miniBIOTA_Hardware\services\schema\biome_telemetry_schema_2026-05-13.sql
M:\miniBIOTA\miniBIOTA_Hardware\memory\05-telemetry-and-data-flow.md
M:\miniBIOTA\miniBIOTA_Hardware\skills\telemetry-coordinator\reference\telemetry-pipeline-plan.md
M:\miniBIOTA\miniBIOTA_Hardware\0. Hardware Systems\5. Control System\mqtt-topics.md
M:\miniBIOTA\miniBIOTA_Web\utils\telemetry.py
M:\miniBIOTA\miniBIOTA_Web\skills\work-with-public-telemetry\reference\technical-architecture.md
M:\miniBIOTA\miniBIOTA_Web\memory\05-data-and-telemetry-boundaries.md
M:\miniBIOTA\miniBIOTA_App\js\monitoring\monitoring.js
M:\miniBIOTA\miniBIOTA_App\skills\implement-app-feature\reference\monitoring.md
```

Excluded from first packet:

- `setpoint_commands`;
- MQTT publish/control paths;
- firmware or service deployment paths;
- raw MQTT live subscriptions unless separately approved;
- relay, command queue, actuator, pump-control, and device-control data;
- raw internal history row exposure to public output;
- credentials and secret-key material;
- public Web route/API/copy changes;
- App runtime integration;
- scheduled jobs or persistent infrastructure.

## Required Review Guardrails

Hardware, App, and Web should reject a future helper design if it cannot prove:

- output path stays under ignored `out/`;
- source table, source row ID, source timestamp, and read timestamp are preserved for every derived summary;
- public-safe summaries use allowlisted fields only;
- internal fields stay out of public-facing output unless a separate Web/Hardware/App decision approves a new contract;
- `liquid_temp_c`, `pump_pct`, MQTT `liq_t`, relay, command queue, actuator, and control fields are blocked from public summaries;
- generated output cannot write Supabase, publish MQTT, enqueue setpoints, change schema, or touch device controls;
- generated output cannot modify App Monitoring, Web public surfaces, Hardware services, firmware, or scheduled jobs;
- generated output cannot make Research conclusions, public claims, health claims, sponsor claims, launch claims, or control recommendations;
- generated output remains derived, local, rebuildable, and noncanonical;
- retention/cadence assumptions are labeled and not invented from stale memory.

## First Readback Questions

A future `telemetry_snapshot_readback_report.md` should answer:

1. Is the public telemetry snapshot currently available, stale, offline, or malformed?
2. Which sensor biomes have public-safe temperature and humidity readings?
3. Which nodes are stale or missing `last_seen` values?
4. What coordinator/upstream status is visible in the public snapshot?
5. Which fields were excluded as internal-only or control-adjacent?
6. What source timestamp and read timestamp support each answer?
7. What prevents this summary from becoming public copy, App runtime truth, or Hardware control guidance?
8. What approval is still needed before reading `biome_telemetry` history rows?

The readback should cite source table/row/timestamp or source path for every answer.

## Handoff Message For Hardware App Web

Use this message when opening the cross-domain design review:

```text
Please review the Company Operation Living Intelligence Wave 8 Telemetry Summaries packet as a design-only Hardware/App/Web review.

At this gate, Company is not asking for implementation. The requested decision is whether Hardware, App, and Web accept the proposed no-write boundary for a future telemetry-summary helper or readback package.

Key questions:
- Is a no-write telemetry-summary helper acceptable in principle?
- Should the first helper, if later approved, read telemetry_snapshot only before any biome_telemetry history rollups?
- What explicit live-read approval is needed for telemetry_snapshot and biome_telemetry?
- Is out/operation_living_intelligence/wave_8_telemetry_summaries/ acceptable for ignored output if later approved?
- What validation proves internal fields cannot leak into public-safe summaries?
- What retention/cadence policy is needed before history rollups?
- What proves the helper cannot publish MQTT, enqueue setpoints, change firmware/services/schema, change App Monitoring, change Web routes/APIs/copy, or create scheduled jobs?

Not approved:
- No Hardware service or firmware changes.
- No MQTT publish, command queue, setpoint, pump, relay, actuator, or device-control work.
- No telemetry schema changes.
- No App code, App Monitoring, App runtime, or secret-path changes.
- No Web route, API, public copy, runtime, or field-boundary changes.
- No helper implementation.
- No generated output.
- No live telemetry table reads yet.
- No scheduled jobs or durable infrastructure.
- No public claims or Research conclusions.
- No canonical writeback.
```

## Next Company Action

Do not implement a telemetry helper, read live telemetry tables, generate output, perform MQTT actions, change App/Web/Hardware behavior, alter telemetry schema, create scheduled jobs, or build durable infrastructure from Company without explicit approval for that specific action.

Company prepared a follow-up domain review synthesis at:

```text
domains/company/operation_living_intelligence_wave_8_domain_review_synthesis_2026-05-15.md
```

If Josue approves the next move after this packet and synthesis, recommended options are:

1. Ask Hardware, App, and Web to perform docs-only design review notes for the Wave 8 telemetry summaries packet.
2. Pause Wave 8 before domain review and continue Wave 9 docs-only.
3. Return to deferred Wave 4, Wave 5, Wave 6, or Wave 7 gate work if implementation readiness becomes more urgent.

## Verification

- Read Wave 8 design and source/readiness review.
- Read Company database-awareness and database-access rules.
- Read Company repo registry.
- Read Hardware telemetry schema, telemetry data-flow memory, pipeline reference, MQTT topic map, coordinator source, and coordinator tests.
- Read Web telemetry adapter, public telemetry architecture reference, and Web telemetry boundary memory.
- Read App Monitoring source, App Monitoring reference, App telemetry recurring decisions, and App Supabase/telemetry safety rules.
- No Hardware, App, or Web repo files were changed.
- No live telemetry, Supabase, MQTT, App, Web, Hardware, or Planner reads were performed.
- No generated output was created.
- No App, Web, Hardware, firmware, MQTT, telemetry schema, live-control, database, Planner, public site, graph/vector runtime, automation, paid service, public promise, sponsor commitment, financial commitment, legal decision, launch target, roadmap commitment, source-of-truth record, or canonical writeback changed.
