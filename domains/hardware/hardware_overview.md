---
id: hardware_overview
title: 6. miniBIOTA_Hardware
domain: engineering_and_hardware
last_updated: 2026-05-11
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
- As of 2026-05-11, the Wyse is remotely maintainable over SSH from Josue's PC and runs Mosquitto plus the read-only telemetry coordinator on the Opal network at `192.168.8.228`.
- The biosphere is a fully closed working concept, but airtight closure is not yet achieved.
- All 6 biome ESP32 nodes have live firmware; OTA is operational going forward.
- Biomes 2-5 report through the App Monitoring tab; Biome 1 has no sensors and Biome 6 is wave-motor-only.
- The first read-only Wyse telemetry coordinator is deployed and running as `minibiota-telemetry.service`, upserting Supabase `telemetry_snapshot` row `id=1` about every 15 seconds for website live monitoring.
- Hardware rewire is planned for biomes 2-5 to resolve sensor wiring, water-damage, and connection-quality faults; connector standard remains open.
- The source repo now uses repo-local biome folders, `0. Hardware Systems/`, memory, and skills as active detailed context: `AGENTS.md`, biome folders, `0. Hardware Systems/`, `memory/`, `skills/`, and `skills/*/reference/`.
- Brain no longer keeps a Hardware `docs/` mirror; use the source repo's biome folders, `0. Hardware Systems/`, memory, and skills structure for detailed Hardware Agent context.

## Key Facts
- ESP32 nodes own local thermostat hysteresis and pump switching.
- The Opal router hosts the local control network, with the Dell Wyse coordinating MQTT and telemetry publication.
- The website and app should consume read-only telemetry views; direct live-control assumptions require explicit Hardware approval.
- Standardized public system names are Climate System, Rain System, Lighting System, Wave & Tide System, Control System, and Enclosure.

## Priorities
- Complete sealing and infrastructure upgrades to reach airtight closed-system standard.
- Execute biomes 2-5 rewire to resolve sensor faults and stabilize readings.
- Validate public website rendering against the live Supabase `telemetry_snapshot` row and keep historical telemetry/command queues deferred until explicitly scoped.
- Keep Hardware durable detail in source repo biome folders, `0. Hardware Systems/`, memory, playbooks, and skill references.

## Risks / Gaps
- Biomes 2-5 have SHT31 wiring, water-damage, and connection-quality risks until the rewire is complete.
- Biome 1 has no sensors and remains expected-offline until hardware is installed.
- Website-side rendering and stale/offline handling should be validated against the live `telemetry_snapshot`; history logging and command queues remain deferred.
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
- Last verified: 2026-05-11
- Known divergences: no active Hardware docs mirror remains in Brain.
- Next sync check: use Hardware repo biome folders, `0. Hardware Systems/`, memory, and skills directly when Hardware detail is needed.
