---
title: Aquatic Club Talk Hardware Show Points
date: 2026-05-19
status: internal-planning-note
related_program: Aquatic Club Talk Readiness
related_hardware_task: 325
---
# Aquatic Club Talk Hardware Show Points

This is an internal Company-side support note for the 2026-06-13 Aquatic Club talk. It lists hardware milestones and engineering facts worth showing. It is not final slide copy, public copy, a hardware source-of-truth update, a launch commitment, a sponsor promise, or approval for firmware, live-control, telemetry, schema, or physical hardware changes.

## Best Hardware Story

The hardware story should show that miniBIOTA is not just a decorated aquarium. It is a physical, modular, engineered biosphere made from tanks, cabinets, ports, atmosphere chambers, cooling, rainfall, wave motion, local controllers, and telemetry.

The strongest talk framing is:

- A room-sized living system was built from six connected biome tanks and four atmosphere chambers.
- The design tries to make ecological processes visible: airflow, condensation, rainfall, temperature gradients, water movement, light, and long-term organism response.
- The system has already worked as a closed working concept, while airtight closure remains an active engineering target.
- The control network is real and operational, but it is intentionally local-first and safety-gated.

## Show-Worthy Milestones

1. **Six-biome physical sequence is built**
   - Six 29-gallon biome tanks form the ecological sequence: Freshwater Lake, Lakeshore, Lowland Meadow, Mangrove Forest, Marine Shore, and Seagrass Meadow.
   - The cabinets intentionally vary elevation to support water, air, terrain, and hydrological logic.

2. **Four atmosphere chambers are integrated**
   - Four vertical 29-gallon atmosphere tanks sit above the terrestrial/coastal biomes.
   - They are atmosphere-processing chambers, not separate biomes.

3. **Modular enclosure architecture exists**
   - Each biome has drilled 3-inch ports, rigid PVC sections, Fernco couplers, and top/side/bottom routing.
   - This is useful visually because it makes the system feel engineered and expandable rather than improvised.

4. **Closed working concept has been tested**
   - The system is a fully closed working concept, but not yet airtight.
   - Use this carefully: say "closed working concept" and "airtight closure is still an active engineering target."

5. **Climate System creates condensation**
   - A shared chiller/coolant loop and four rear-glass atmospheric heat exchangers cool atmosphere chambers so humid air condenses.
   - Biomes 2-5 each have a pump branch and DS18B20 coolant probe in the heat exchanger path.
   - Current caveat: the chiller is under repair.

6. **Rain System turns condensation into rainfall**
   - Condensate collects in cloud reservoirs inside atmosphere tanks.
   - The reservoirs tip by gravity and release rain.
   - Observed cadence is roughly every 2-3 weeks depending on settings and ambient conditions.

7. **Wave & Tide System exists on the marine side**
   - Biome 6 / Seagrass Meadow uses an ESP32-controlled stepper-driven swash mechanism.
   - It vertically oscillates a water-filled PVC chamber to move water in and out of the marine side.
   - MQTT control for this is future work, not current capability.

8. **All six ESP32 nodes have live firmware**
   - All six biome nodes were USB-flashed on 2026-04-25.
   - OTA is operational going forward.
   - Firmware fixes already addressed WiFi hang timeout, blocking MQTT reconnect, and invalid `nan` telemetry serialization.

9. **App Monitoring is live**
   - The Electron App Monitoring tab shows real-time biome telemetry.
   - It consumes internal hardware fields such as liquid/heat-exchanger temperature and pump percentage for operator context.

10. **Read-only website telemetry path is running**
    - Dell Wyse / Mosquitto / telemetry coordinator receives local MQTT for sensor biomes 2-5.
    - The coordinator upserts public-safe `telemetry_snapshot` row `id=1` about every 15 seconds.
    - It also writes internal `biome_telemetry` history about every minute for climate/control analysis.
    - The coordinator does not publish commands or control actuators.

## Best Visuals To Ask Hardware/App/Content For

- Wide shot of the full six-biome sequence.
- Angle showing elevation differences across cabinets.
- Close-up of the 3-inch ports, Fernco couplers, and inter-biome routing.
- Atmosphere chamber shot showing cloud reservoirs or condensation path.
- Climate System visual: heat exchanger / coolant loop / pump branch, if visually understandable.
- Rain System visual: cloud reservoir or rain manifold detail.
- Seagrass Meadow wave/tide mechanism shot.
- ESP32/control board photo with labels kept simple.
- App Monitoring screenshot or short screen recording showing live telemetry.
- Website live-monitoring screenshot only if it stays public-safe and read-only.

## Claim Boundaries For Script And Slides

Safe language:

- "Fully closed working concept."
- "Airtight closure is still an engineering target."
- "Local-first control network."
- "Read-only telemetry coordinator."
- "Public-safe telemetry snapshot."
- "Internal operator telemetry includes fields that are not public website data."
- "Rain is gravity-released from condensate reservoirs."

Avoid or qualify:

- Do not say the system is fully airtight today.
- Do not imply no passive leakage remains.
- Do not imply command queues, public live controls, or centralized actuator control are active.
- Do not imply Biome 1 has sensors installed.
- Do not imply Biome 6 is part of the sensor telemetry set; it is currently wave/tide control.
- Do not describe current deployed sensors as SHT4x; current sensor nodes use SHT31-D. SHT4x is future/production-standard wording unless upgraded.
- Do not imply the chiller is fully operational while it is under repair.

## Suggested Talk Use

Use hardware as proof that the project is physically real and disciplined:

- Early talk: show the six-biome physical system to move the audience from "aquarium" to "engineered living system."
- Middle talk: show condensation/rain/wave/control examples to explain why the system behaves like a world rather than a display.
- Later talk: show telemetry and current caveats to build credibility through honesty.

The most important emotional move is not "look how complicated this is." It is: "this is what it takes to make a small living world behave enough like a system that it can teach us back."

## Follow-Up Needed

- Hardware should confirm the exact visuals available for Climate, Rain, Enclosure, Control, and Wave & Tide before slide assembly.
- Content should choose only the visuals that support the story spine.
- Research should review any ecological interpretation that depends on hardware behavior.
- Web/Growth should not use hardware claims publicly until Brand/Hardware/Company approve the wording.

