---
id: hardware_brief
title: Hardware Brief
domain: engineering_and_hardware
last_updated: 2026-05-11
tags: [engineering, hardware, controls, sensors, strategy-brief]
reporting_status: company_active
reporting_phase: phase_10_reporting_active
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\6. miniBIOTA_Hardware\\hardware_brief.md"
copied_on: 2026-05-09
brain_transition_status: "Company reporting active; Brain source historical/archive lookup only."
---
# Hardware Brief

> Phase 3 transition note: This Company report was originally copied from `M:\miniBIOTA\miniBIOTA_Brain\6. miniBIOTA_Hardware\hardware_brief.md` on 2026-05-09. As of Phase 10, this Company path is the active reporting target; the Brain source is historical/archive lookup only.

*Maintained by: Hardware Agent | Update trigger: end of any hardware session where system state, priorities, milestones, risks, or cross-domain dependencies changed*

## System State
- The biosphere is a fully closed working concept, but airtight closure is not yet achieved. Minor passive air leakage and several biome rebuild and sealing tasks remain open.
- All 6 biome ESP32 nodes have live firmware (USB flashed 2026-04-25; OTA operational going forward).
- Biomes 2-5: Sensor/controller hardware is documented in each biome folder. Biome 2 and 3 atmosphere SHT31 modules are unreliable, Biome 4 biome SHT31 appears water damaged and its biome screen is off, and Biome 5 is mostly working with a humidity display artifact. Biome 1: no sensors (expected offline). Biome 6: wave-motor-only.
- App Monitoring tab (Phase 4) is live as of 2026-04-25: real-time telemetry for all 6 biomes via direct MQTT to Electron.
- First read-only Wyse-side telemetry coordinator is deployed on the Dell Wyse and running as `minibiota-telemetry.service`; it subscribes to local MQTT for sensor biomes 2-5 and upserts the website-compatible Supabase `telemetry_snapshot` singleton row `id=1` about every 15 seconds. It does not write history rows or control commands.
- Hardware rewire planned for biomes 2-5 to resolve SHT31 wiring, water-damage, and connection-quality faults. Connector standard remains open; XT30 power and JST-XH 2.54mm signal connectors are candidates, not settled requirements.
- Hardware repo now uses the federated memory/skills architecture plus a `0. Hardware Systems/` documentation layer: `AGENTS.md`, biome folders, `0. Hardware Systems/`, `memory/`, `skills/`, `skills/*/reference/`, `services/`, `deploy/`, and `_system/` helpers. The old `docs/` mirror pattern is retired. Hardware project management now lives in App Planner/Supabase under Engineering / `Engineering & Hardware` projects and tasks.

## Active Priorities
- Complete sealing and infrastructure upgrades to reach airtight closed-system standard.
- Execute biomes 2-5 hardware rewire to resolve wiring faults, replace damaged SHT31 modules where needed, and stabilize sensor readings.
- Maintain the live website telemetry path now reading the Wyse-produced Supabase `telemetry_snapshot` row. History logging and command queues remain deferred. See `miniBIOTA_Hardware/skills/telemetry-coordinator/reference/telemetry-pipeline-plan.md`.
- Keep Hardware durable detail in repo-local biome folders, `0. Hardware Systems/`, memory, playbooks, and skill references. Use App Planner/Supabase for Hardware work tracking and task completion status. Company carries active strategy-level Hardware reporting and cross-domain coordination; Brain is historical/archive lookup only.

## Recent Milestones
- 2026-05-11: Deployed the read-only Wyse telemetry coordinator as a persistent user service with SSH maintenance access, live MQTT ingestion, local debug snapshot output, and successful Supabase `telemetry_snapshot` row `id=1` upserts for website live monitoring.
- 2026-05-09: Organized Hardware project management in App Planner/Supabase: 8 Engineering & Hardware work projects now track 72 linked Hardware tasks, including existing biome/system work and documentation follow-ups.
- 2026-05-09: Created the Hardware `0. Hardware Systems/` documentation layer for the six canonical public systems: Climate System, Rain System, Lighting System, Wave & Tide System, Control System, and Enclosure.
- 2026-05-09: Added exact `biome_hardware.md` hardware specifications for Biomes 2-5 in the Hardware repo, including shared sensor-node BOM, power architecture, GPIO map, current sensor/display status, and open connector/fusing/wire-color items.
- 2026-05-05: Brain Hardware folder converted to the repo-named memory/skills pattern. Brain folder is now `6. miniBIOTA_Hardware`; active detailed context is `AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/`; tracked Hardware `docs/` files were removed after migration; Brain `sync_docs.ps1` no longer mirrors Hardware docs and removes stale Brain Hardware docs if present.
- 2026-05-02: First read-only telemetry coordinator producer implemented in Hardware: MQTT subscribe-only cache for biomes 2-5, website-compatible snapshot builder, Supabase singleton upsert, optional atomic local JSON output, systemd example, and focused tests. No firmware, schema, MQTT publishing, or live-control behavior changed.
- 2026-04-30: `miniBIOTA_Hardware` initialized for Codex-first operation with `AGENTS.md`, Codex session helpers, root `.gitignore`, and README.
- 2026-04-25: Phase 4 complete: App Monitoring tab live in Electron app with real-time biome telemetry and chip status.
- 2026-04-25: All 6 ESP32 nodes flashed with current firmware. Three bugs fixed: WiFi hang, blocking MQTT reconnect, NaN-to-null in telemetry JSON.

## Known Risks & Blockers
- Biomes 2-5 have SHT31 wiring, water-damage, and connection-quality risks; rewire resolves this but is not yet scheduled.
- Biome 1 has no sensors and will remain offline until hardware is installed.
- Website telemetry is receiving the live `telemetry_snapshot` row; continue monitoring stale/offline handling and public-safe payload semantics. Historical telemetry and command queues remain deferred.
- Airtight closure not yet achieved; passive air leakage still present across multiple biomes.
- Brain and downstream agents must stop looking for Hardware detail in `6. miniBIOTA_Hardware/docs/`; that mirror is intentionally removed.

## Cross-Domain Notes
- During the biomes 2-5 sensor/controller rewire, tanks may need to go offline temporarily; flag to Content Production before scheduling.
- Hardware Agent should consult App Planner tasks/projects when choosing next work and should offer to mark Planner tasks done when completed work maps clearly to an open task.
- Biome status (healthy/stale/offline) is now visible in real-time via the Electron app; relevant for ecology tracking sessions.
- The public website now consumes the coordinator's read-only Supabase `telemetry_snapshot` row `id=1`; Hardware keeps the payload public-safe, including `target_temperature_c: null` for unset targets.
- Standardized system names below are canonical for all content, brand, and partner communications.

## Standardized System Names
These are the canonical public-facing names for all engineered systems. All agents must use these terms.

| Name | What it covers |
|---|---|
| Climate System | Chiller, pumps, plumbing, heat exchangers; delivers thermal energy to drive condensation |
| Rain System | Cloud reservoirs, rain manifolds; collects condensate and distributes rainfall into biomes |
| Lighting System | Photoperiod and spectrum control; currently external timer, ESP32 integration planned |
| Wave & Tide System | Stepper motor and mechanical swash motion; simulates tidal motion on the marine side |
| Control System | ESP32 nodes, air sensors, MQTT broker, Opal router, Dell Wyse thin client; distributed nervous system. Current deployed nodes use SHT31-D; SHT4x remains production/future-standard wording until hardware and firmware are upgraded. |
| Enclosure | Tanks, plywood cabinets, 3-inch ports, Fernco bulkheads, sealing architecture; the physical system boundary |

## Domain Reference

Active Hardware Agent context: `M:\miniBIOTA\miniBIOTA_Hardware\`
Historical Brain brief: `6. miniBIOTA_Hardware\hardware_brief.md`
Historical Brain overview: `6. miniBIOTA_Hardware\hardware_overview.md`

Load order for detailed Hardware work:
1. `AGENTS.md`
2. `memory\00-index.md`
3. Relevant `memory\*.md`
4. Relevant `0. Hardware Systems\*` files for the six system architectures
5. Matching `skills\*\SKILL.md`
6. Exact references under `skills\*\reference\`
7. Affected firmware project, service file, or deployment file

Brain no longer keeps a Hardware `docs\` mirror after the memory/skills migration. App Planner/Supabase is the live Hardware work queue for projects/tasks.

| File | Contents |
|---|---|
| `memory\00-index.md` | Memory file routing and local playbook routing |
| `0. Hardware Systems\README.md` | Six canonical public systems and system documentation routing |
| `0. Hardware Systems\1. Climate System\` | Climate System data sheets: chiller/coolant, pumps/control, atmospheric heat exchanger |
| `0. Hardware Systems\2. Rain System\` | Rain System data sheets: cloud reservoirs and rain manifolds |
| `0. Hardware Systems\3. Lighting System\` | Lighting System placeholder and future fixture/control details |
| `0. Hardware Systems\4. Wave & Tide System\` | Wave & Tide System mechanical and stepper-control summaries |
| `0. Hardware Systems\5. Control System\` | Control System architecture: sensor nodes, control network, MQTT topics |
| `0. Hardware Systems\6. Enclosure\` | Enclosure architecture: tanks/cabinets, ports/bulkheads, sealing boundary |
| `memory\02-system-architecture.md` | Physical, hydrological, climate, rain, and closure summary |
| `memory\03-control-network.md` | Opal, Wyse, Mosquitto, ESP32, MQTT, and sensor topology summary |
| `memory\04-firmware-and-biome-map.md` | Biome project map, firmware status, and build/upload boundaries |
| `memory\05-telemetry-and-data-flow.md` | App Monitoring, Wyse coordinator, Supabase, website, and MQTT flow |
| `memory\06-hardware-safety-rules.md` | Approval gates for firmware, live controls, MQTT, OTA, router/Wyse, schema, and physical actions |
| `memory\08-recurring-decisions.md` | Durable Hardware decisions and rules |
| `skills\firmware-build-and-verify\SKILL.md` | Firmware review/build/change workflow |
| `skills\control-network-setup\SKILL.md` | Opal/Wyse/MQTT/OTA setup and troubleshooting workflow |
| `skills\telemetry-coordinator\SKILL.md` | Wyse telemetry coordinator and snapshot contract workflow |
| `skills\hardware-architecture-reference\SKILL.md` | Physical, hydrological, climate, rain, enclosure, and system-boundary workflow |
| `skills\*\reference\` | Exact setup, architecture, telemetry, and firmware references |
