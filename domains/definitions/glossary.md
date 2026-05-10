---
id: company_glossary
title: Company Glossary
domain: definitions
last_updated: 2026-05-09
tags: [glossary, terminology, definitions, company, cross-domain]
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\10. Definitions\\glossary.md"
phase_9_status: company_active_copy
---
# Company Glossary

Shared vocabulary for the miniBIOTA system. Active terms describe current-state reality. Planned terms are labeled explicitly.

## Ownership Rule

Company owns cross-domain operating vocabulary. Domain repos own domain-specific implementation detail and should extend or correct the glossary when a term becomes stable enough for shared use.

## Ecological Terms

- **Atmosphere** - A vertical 29-gallon tank that cools humid air, condenses water, and generates rain.
- **Biome** - A distinct ecological module housed within a 29-gallon tank.
- **Closed System** - A system with no mass entering or leaving once sealed.
- **Sealed** - Mechanical state where all ports are physically closed.
- **Closure** - Conceptual condition of complete internal matter cycling.
- **Cloud** - Tipping reservoir that releases rain.
- **Rain Cycle** - Evaporation, condensation, tipping, rainfall redistribution loop.
- **Processor** - Atmosphere acting as condensation node.
- **Freshwater Side** - Lake, Lakeshore, and Grassland interconnected hydrology.
- **Marine Side** - Beach and Seagrass interconnected saltwater system.
- **Estuary (Planned)** - Future density-based freshwater-marine integration system.
- **Riser Pipe** - PVC conduit routing humid air upward into atmosphere.
- **Hydrological Continuity** - Gravity-based water level equalization across connected tanks.
- **Detritus Basin** - Biome accumulating organic matter over time.
- **Nutrient Compression** - Accumulation of organic material in closed conditions.
- **Primary Producer Efficiency** - Effectiveness of plants converting light to usable biomass.
- **Engineered Constraint** - Deliberate limits imposed to observe ecological emergence.
- **Instability Variable** - Physical or ecological factor posing balance risk.

## Hardware Terms

- **Port** - Permanent 3-inch bulkhead connection.
- **Coupler** - Rubber Fernco connector joining ports.

## Network And Control Terms

- **WISP** - Wireless Client Router mode used by the GL.iNet Opal so one radio can connect upstream while the router serves a separate local subnet.
- **Micro-Network** - The isolated local miniBIOTA network hosted by the Opal router for ESP32 nodes and the thin client.
- **Distributed Control** - Architecture where each ESP32 makes its own local control decisions instead of relying on centralized actuator commands.
- **Target Temperature** - The desired control temperature published to an ESP32 node; also referred to as the setpoint.
- **Setpoint** - The target temperature value that the thin client or dashboard publishes over MQTT for a node to maintain.
- **Local Safe State** - Continued local control using the last known target temperature when an ESP32 loses connection to the thin client.
- **Local-First MQTT** - Telemetry and setpoint messaging that continues on the miniBIOTA micro-network even if upstream internet is unavailable.
- **SHT4x** - Production-standard air temperature and humidity sensor family for miniBIOTA control nodes.
- **SHT31-D** - Prototype-era air temperature and humidity sensor used during earlier testing. Legacy hardware.
- **Single I2C Bus** - The active node wiring topology in which each control node uses one shared I2C bus for its local sensors.
- **Local MQTT Coordinator** - The Dell Wyse 3040 thin client that brokers MQTT messages and logs telemetry on the local network.
- **Thin Client** - Synonym for Local MQTT Coordinator. Do not refer to this node as Raspberry Pi.

## Operating System Terms

- **Company Agent** - The active top-level operating coordination role for miniBIOTA strategy, governance, routing, dependency mapping, and review rhythm.
- **Brain** - The former top-level strategy vault, now transition/archive infrastructure until Brain retirement is complete.
- **Operating Interface** - The AI environment currently acting on a repo. Codex is the primary miniBIOTA operating interface.
- **Vault** - A durable Markdown repository used as project memory and source routing context.
- **Canonical Note** - An overview file that serves as an entry point for a domain or reporting surface.
- **Domain** - A miniBIOTA responsibility area with local source truth, memory, skills, code, or structured records.
- **Supabase** - The live database backend for structured, queryable records.
- **App Planner** - The internal App/Supabase project, task, program, schedule, and operational workflow surface.
