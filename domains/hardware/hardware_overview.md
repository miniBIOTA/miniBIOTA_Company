---
id: hardware_overview
title: 6. miniBIOTA_Hardware
domain: engineering_and_hardware
last_updated: 2026-05-15
tags: [hardware, engineering, controls, telemetry, sensors, enclosure]
reporting_status: company_active
reporting_phase: phase_10_reporting_active
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\6. miniBIOTA_Hardware\\hardware_overview.md"
copied_on: 2026-05-09
brain_transition_status: "Company reporting active; Brain source historical/archive lookup only."
---
# 6. miniBIOTA_Hardware

> Phase 3 transition note: This Company report was originally copied from `M:\miniBIOTA\miniBIOTA_Brain\6. miniBIOTA_Hardware\hardware_overview.md` on 2026-05-09. As of Phase 10, this Company path is the active reporting target; the Brain source is historical/archive lookup only.

## Scope
- Owns the physical biosphere system, closure model, control network, firmware, telemetry producer path, sensor topology, and hardware safety rules.
- Provides technical grounding for App Monitoring, Web telemetry, Content/Brand terminology, Research measurement gaps, and Company roadmap planning.

## Current State
- As of 2026-05-13, the Wyse is remotely maintainable over SSH from Josue's PC and runs Mosquitto plus the read-only telemetry coordinator on the Opal network at `192.168.8.228`.
- The biosphere is a fully closed working concept, but airtight closure is not yet achieved.
- All 6 biome ESP32 nodes have live firmware; OTA is operational going forward.
- Biomes 2-5 report through the App Monitoring tab; Biome 1 has no sensors and Biome 6 is wave-motor-only. App Monitoring already consumes live MQTT `liq_t` and `pump_pct` as internal operator hardware telemetry.
- The read-only Wyse telemetry coordinator is deployed and running as `minibiota-telemetry.service`, upserting Supabase `telemetry_snapshot` row `id=1` about every 15 seconds for website live monitoring and internal `biome_telemetry` history rows about every minute for climate/control analysis.
- Operation Living Intelligence Wave 8 telemetry summaries are in Company docs-only design with source/readiness review, Hardware/App/Web design-review packet, and Company domain review synthesis complete. Hardware-owned acceptance remains pending before any helper, live telemetry read, generated rollup, schema/runtime change, MQTT publishing, command queue, device control, or public reuse.
- Hardware rewire is planned for biomes 2-5 to resolve sensor wiring, water-damage, and connection-quality faults; connector standard remains open.
- The source repo now uses repo-local biome folders, `0. Hardware Systems/`, memory, and skills as active detailed context: `AGENTS.md`, biome folders, `0. Hardware Systems/`, `memory/`, `skills/`, and `skills/*/reference/`.
- Brain no longer keeps a Hardware `docs/` mirror; use the source repo's biome folders, `0. Hardware Systems/`, memory, and skills structure for detailed Hardware Agent context.

## Key Facts
- ESP32 nodes own local thermostat hysteresis and pump switching.
- The Opal router hosts the local control network, with the Dell Wyse coordinating MQTT and telemetry publication.
- The website and app should consume read-only telemetry views; direct live-control assumptions require explicit Hardware approval. Pump percentage and liquid/heat-exchanger temperature may appear in App/operator views, but not public Web payloads without a separate contract decision.
- Standardized public system names are Climate System, Rain System, Lighting System, Wave & Tide System, Control System, and Enclosure.

## Priorities
- Complete sealing and infrastructure upgrades to reach airtight closed-system standard.
- Execute biomes 2-5 rewire to resolve sensor faults and stabilize readings.
- Maintain public website telemetry against the live Supabase `telemetry_snapshot` row, monitor internal `biome_telemetry` history for climate/control analysis, and keep command queues deferred until explicitly scoped.
- Keep Hardware durable detail in source repo biome folders, `0. Hardware Systems/`, memory, playbooks, and skill references.

## Risks / Gaps
- Biomes 2-5 have SHT31 wiring, water-damage, and connection-quality risks until the rewire is complete.
- Biome 1 has no sensors and remains expected-offline until hardware is installed.
- Website telemetry is reading the live `telemetry_snapshot`; stale/offline handling and public-safe payload semantics should continue to be monitored. Internal `biome_telemetry` history is live for analysis; command queues remain deferred.
- Operation Living Intelligence Wave 8 has a Hardware/App/Web design-review packet and Company domain review synthesis ready, but must not turn telemetry summaries into Hardware control instructions, firmware changes, MQTT publishing, live table reads, helper output, App Monitoring changes, Web/public telemetry changes, or canonical telemetry records without separate approval.
- Airtight closure is not yet achieved; passive air leakage remains across multiple biomes.

## Files In This Folder
- `hardware_brief.md` - active Company manager-facing report brief for Hardware.
- `hardware_overview.md` - active Company overview for Hardware / Engineering.

## Source Repo
- Hardware source repo: `M:\miniBIOTA\miniBIOTA_Hardware\`
- Active entry point: `M:\miniBIOTA\miniBIOTA_Hardware\AGENTS.md`
- Memory index: `M:\miniBIOTA\miniBIOTA_Hardware\memory\00-index.md`
- System docs index: `M:\miniBIOTA\miniBIOTA_Hardware\0. Hardware Systems\README.md`
- Active skills: `M:\miniBIOTA\miniBIOTA_Hardware\skills\`
- Exact Hardware system data sheets live under source-repo `0. Hardware Systems/`; setup/playbook references live under `skills/*/reference/`.
- `_system/sync_docs.ps1` keeps Hardware docs mirroring disabled and removes any stale `6. miniBIOTA_Hardware\docs` folder if it appears.

## Vault Sync Status
- Last verified: 2026-05-13
- Known divergences: no active Hardware docs mirror remains in Brain.
- Next sync check: use Hardware repo biome folders, `0. Hardware Systems/`, memory, and skills directly when Hardware detail is needed.
