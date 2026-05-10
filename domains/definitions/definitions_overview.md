---
id: definitions
title: 10. Definitions
domain: definitions
last_updated: 2026-04-03
tags: [glossary, definitions, terminology, operations, engineering]
reporting_status: company_active
reporting_phase: phase_10_reporting_active
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\10. Definitions\\definitions_overview.md"
copied_on: 2026-05-09
brain_transition_status: "Company reporting active; Brain source historical/archive lookup only."
---
# 10. Definitions

## Phase 9 Ownership Decision

Company owns active shared vocabulary routing for Definitions. The central active glossary lives at `domains/definitions/glossary.md`.

Domain-specific extension paths:

- Research owns scientific/ecological precision and uncertainty labels.
- Hardware owns firmware, control-network, sensor, telemetry producer, and engineering terms.
- App owns Planner/runtime/schema/UI and internal tool terms.
- Web owns public route, public data contract, and public interface terms.
- Content owns production, story, source-map, and publishing terms.
- Brand owns public copy and claim-safety phrasing.
- Financials and Growth own finance, sponsor, partner, sales, CRM, and commercial terms.

Brain keeps the original `10. Definitions` copy as transition/history until archive freeze. This note does not authorize Supabase writes, public copy changes, or domain implementation changes.


> Phase 3 transition note: This Company report was originally copied from `M:\miniBIOTA\miniBIOTA_Brain\10. Definitions\definitions_overview.md` on 2026-05-09. As of Phase 10, this Company path is the active reporting target; the Brain source is historical/archive lookup only.

## Scope
- Maintains the glossary of system terms used across ecology, engineering, and platform documentation.
- Provides a shared vocabulary layer so technical, operational, and public-facing materials stay aligned.

## Current State
- Core ecological and hardware terms are defined in `glossary.md`.
- The glossary needs to keep pace with distributed-control, MQTT, and micro-network language as those systems become canonical.
- Business, telemetry, and content terms are underrepresented.

## Key Facts
- The glossary covers foundational system concepts: atmosphere, biome, closure, rain cycle, processor, freshwater side, marine side, estuary, hydrological continuity.
- It also covers current operational terms: WISP, micro-network, distributed control, target temperature/setpoint, local safe state, SHT4x, single-I2C wiring.
- Terminology is especially important because miniBIOTA combines scientific, engineering, and product-language layers in one operating system.
- A stable glossary reduces ambiguity for both human operators and AI agents consuming exported context.

## Priorities
- Keep glossary terminology synchronized with canonical source notes across all domains.
- Expand the glossary to include business, telemetry, and content terms.
- Distinguish clearly between active terms and planned concepts so downstream use does not overstate future-state capabilities.
- Refer to the central local node as "Local MQTT Coordinator" or "Thin Client," not "Raspberry Pi."

## Risks / Gaps
- If glossary language lags behind hardware architecture, downstream use may assume centralized pump control or outdated sensor/network standards.
- Missing business and digital terms can create inconsistent wording.
- Planned concepts like estuary behavior may be interpreted as current-state reality if not labeled.

## Files In This Folder
- `glossary.md` â€” complete terminology reference


## Vault Sync Status
- Last verified: â€”
- Known divergences: none noted
- Next sync check: flag during relevant domain session
