---
title: Agent Operating Architecture
last_updated: 2026-05-09
---
# Agent Operating Architecture

## Current Model

Company is the active top-level operating coordination repo for miniBIOTA.

Company owns:
- Planning strategy.
- Programs/Operations governance.
- Roadmap cadence.
- Dependency mapping.
- Cross-domain operating memory.
- Operating review rhythm.
- Coordination rules that decide who owns what next.

Brain remains a transition and guardrail repo while migration is underway. It keeps transition protocol, Brain-side registry references, domain briefs/exports, archive context, and Brain retirement notes until Company-owned replacements are created and verified. Active repo/domain routing now lives in `_system/agent_repo_registry.md`.

App owns Planner runtime, schema, UI, migrations, and Supabase-backed workflow behavior.

Domain repos own their implementation truth.

## Operating Split

| Layer | Owner | What It Means |
|---|---|---|
| Company strategy and coordination | Company | Cross-domain decisions, dependencies, Programs/Operations governance, roadmap cadence, and review rhythm |
| Planner runtime | App | UI, schema, migrations, workflow behavior, and service-role paths |
| Domain implementation | Domain repos | Domain memory, skills, code, source docs, and domain-owned records |
| Structured operational truth | Supabase/App Planner | Queryable projects, tasks, records, observations, finance records, content records, telemetry snapshots, and other tables |
| Transition/archive | Brain | Brain-side registry references, briefs, exports, protocol, archive, and retirement guardrails until replaced or frozen |

## Company Does Not Own

Company does not own:
- Firmware, sensors, MQTT, or live controls.
- Public website implementation.
- App schema/runtime behavior.
- Financial records or tax facts.
- Ecological truth or species records.
- Publishing database records or story execution.
- Sponsor commitments or public promises without explicit approval.
- Domain-local source-of-truth files except when a migration phase explicitly scopes cross-repo edits.

## Brain Retirement Direction

The Brain retirement plan moves active Brain responsibilities into Company in phases:

1. Inventory active Brain dependencies.
2. Create Company protocol and operating memory.
3. Move registry/routing.
4. Move domain reporting.
5. Move exports.
6. Move or split helper tooling.
7. Move useful Brain skills.
8. Update domain agents.
9. Align Planner Programs/Operations.
10. Assign Raw Footage and Definitions owners.
11. Freeze Brain as archive.
12. Run probation, then final retirement.

Do not skip ahead. Each phase should leave a fresh agent able to continue using durable files alone.

## Fresh-Agent Test

After any migration work, ask:

Could a fresh Company Agent answer these questions from durable files?

- Who owns this work?
- What source is authoritative?
- What is still Brain-owned temporarily?
- What requires explicit approval?
- What domain or App surface must not be touched?
- What is the next migration phase?

If not, update Company memory or the migration notes before closing.
