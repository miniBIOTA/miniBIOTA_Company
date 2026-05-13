---
id: operation_living_atlas_plan
title: Operation Living Atlas Plan
domain: company_operations
last_updated: 2026-05-12
tags: [operation-living-atlas, backfill, species, chronicles, observations, media, multi-agent]
---
# Operation Living Atlas

Operation Living Atlas is the coordinated backfill and enrichment program for turning miniBIOTA's past videos, observations, photos, species records, and ecological memory into a connected living record.

## Purpose

The goal is to make every important public and internal ecological story traceable:

- What happened?
- When did it happen?
- What evidence supports it?
- Which species, biomes, and systems did it affect?
- What should appear publicly on the website?
- What should remain as internal research context?
- What photos or video clips prove or illustrate it?

This is not just a website content cleanup. It is the process of building miniBIOTA's ecological knowledge graph from historical evidence.

## Operating Model

Company is the program coordination layer. Domain agents contribute in parallel:

| Agent | Owns |
|---|---|
| Company | Overall plan, priorities, record routing, Programs/Operations governance, dependency mapping, review rhythm, cross-domain coordination, source-of-truth discipline |
| Research | Species histories, ecological interpretation, interaction mapping, confidence language, public/private judgment support |
| Content | Pipeline-by-pipeline extraction, transcript/video context, story arcs, publish chronology |
| Web | Public rendering rules, chronicle relationship display, SEO/public page behavior |
| App | Planner/runtime support, schema/UI implementation, and future data-entry or review workflow if the process needs an operator UI |
| Raw Footage | Media discovery, photo/video evidence selection, tagging readiness |
| Brain | Archive/recovery context and retirement provenance only during Phase 11 probation |

## Source Of Truth

Use this hierarchy during Operation Living Atlas:

1. Current user direction.
2. This plan.
3. Supabase structured records.
4. Company/domain reports and domain docs.
5. Existing observations, content pipeline records, chronicles, and media records.
6. Historical notes, transcripts, photos, and memory.

If a discovered fact is durable, it must be written to Supabase or an appropriate vault note. Do not leave durable species history only in chat.

## Core Records

| Record | Purpose |
|---|---|
| `content_pipeline` | Published content source list. Start here for video backfill. |
| `chronicles` | Public historical event records. One primary chronicle/video home per publishing event. |
| `chronicle_subject_links` | Relationship graph between a chronicle event and affected subjects. |
| `species` | Current public species profile and structured ecological fields. |
| `observations` | Raw or interpreted evidence records tied to species/biomes/pipeline items. |
| `observation_thread_links` | Links observations to internal story threads. |
| `observation_loop_links` | Links observations to audience-facing open loops only when they advance the loop. |
| `species_images` | Public species gallery images and captions. |
| `media_assets` and media link tables | Internal media inventory and tagging workflow. |
| `story_threads` | Internal developing ecological arcs. |
| `open_loops` | Audience-facing unresolved questions seeded by published videos. |

## Publicness Tiers

Every extracted fact or event should be classified before writing public-facing records.

| Tier | Use When | Destination |
|---|---|---|
| Public chronicle | Durable event, major change, introduction/removal, reproduction, collapse, milestone, or story beat visitors should understand | `chronicles` plus `chronicle_subject_links` |
| Public species profile | Stable fact about identity, status, ecological role, microhabitat, diet, reproduction, history, or public summary | `species` fields and `species_images` |
| Related event only | Important context for a species/biome/system, but not enough for a full page-specific chronicle | `chronicle_subject_links` |
| Internal research note | Useful interpretation, hypothesis, uncertainty, or private planning detail not ready for public display | Research docs, observations, story threads |
| Raw evidence only | Photo/video/observation evidence that supports future work but does not need narrative now | `observations`, `media_assets`, media tags |

## Chronology Rules

Processing order can be messy. Historical order must not be.

- `event_date` is when the ecological event happened or was observed.
- `published_date` is when a video was published.
- `created_at` is only when the database row was created.
- Backfilled chronicles must use the best known historical `event_date`, not the day of data entry.
- If the date is approximate, use the best available date and record uncertainty in notes/content.
- Do not force everything into public chronicles just because it was discovered during a backfill session.

## Standard Source Packet

Each reviewed source should produce a packet before writes begin.

```markdown
## Source Packet

Source:
- Type:
- ID/path/URL:
- Published date:
- Event date or date range:
- Confidence:

Primary subject:
- Scope:
- Species/biome/system:
- Why this is primary:

Affected subjects:
- Subject:
- Relationship: primary / major_impact / context / mentioned
- Why it matters:
- Publicness tier:

Evidence:
- Observations:
- Pipeline records:
- Photos/videos:
- Transcript notes:

Writes proposed:
- content_pipeline:
- observations:
- species:
- chronicles:
- chronicle_subject_links:
- media/species_images:
- story_threads/open_loops:

Open questions:
- Item:
```

## Species Historical Dossier Template

Use this when a species needs deeper historical reconstruction.

```markdown
## Species Historical Dossier

Species:
- ID:
- Common name:
- Scientific name:
- Public slug:
- Current status:
- Biomes:

Timeline:
- Date:
- Event:
- Evidence:
- Confidence:
- Publicness tier:

Ecological role:
- Trophic role:
- Functional role in miniBIOTA:
- Interactions:
- Dependencies:
- Risks/uncertainties:

Public profile updates needed:
- Field:
- Proposed value:
- Evidence:

Chronicle/event links:
- Primary chronicles:
- Major impacts:
- Context links:

Media:
- Candidate public images:
- Internal reference media:
- Caption needs:

Open questions:
- Item:
```

## Processing Workflow

1. Select a bounded source set.
   - One video, one species, one biome arc, or one photo folder.
   - Avoid broad "clean all history" sessions.

2. Build source packets.
   - Extract facts before writing.
   - Keep evidence and interpretation separate.

3. Route facts by publicness tier.
   - Decide what becomes public, related-only, internal, or raw evidence.

4. Write structured records in layers.
   - Observations/evidence first.
   - Species profile updates next.
   - Chronicle and relationship links after primary ownership is clear.
   - Media links/captions after public surface decisions are made.

5. Verify every write.
   - Read back Supabase records.
   - Check relevant public pages when website output changes.
   - Link back to source packets or notes.

6. Close the packet.
   - Mark status.
   - Record unresolved questions.
   - Create follow-up tasks only for actionable next work.
   - Refresh the Company dependency map and next review point when coordination changed.

## Statuses

Use these statuses for queues, docs, or future tables:

- `not_started`
- `source_reviewed`
- `evidence_extracted`
- `records_updated`
- `chronicle_linked`
- `media_attached`
- `public_reviewed`
- `done`
- `deferred`

## Recommended First Workstream

Start with the Lake Post-Seal arc because it already proved the relationship model:

1. Pipeline 338 - "My Lake Went Completely Opaque. So I Removed the Fish."
2. Chronicle 30 - "Fish removal reopens the lake food web."
3. Species dossier: Flagfish (id 24).
4. Species dossier: Ghost Shrimp (id 67).
5. Species dossier: Daphnia (id 164, public review needed).
6. Related context: freshwater amphipods, copepods, Slough Crayfish.
7. Media review: lake opacity, fish removal, post-removal microcrustacean/shrimp footage.

This arc should become the model packet for future backfill work.

## Kickoff Decision - 2026-05-12

The first active kickoff confirmed the Lake Post-Seal arc as the model packet and confirmed the order of operations:

1. Source packet first.
2. Evidence extraction second.
3. Publicness-tier routing third.
4. Research validation and uncertainty labeling before public-facing claims.
5. Proposed structured writes only after the packet is coherent.
6. Explicit approval before any Supabase, Planner, App, Web, public-surface, or schema write.
7. Readback and public rendering review after approved writes.

For the pilot, do not create a dedicated Living Atlas queue table. Use Markdown source packets plus existing Planner tasks until the first packet proves whether a structured queue or App workflow is necessary.

Revisit a dedicated queue table only if multiple packets run at once, handoffs become hard to trust, packet status needs filtering or assignment, proposed writes need a structured approval queue, or the manual workflow proves useful but too slow. If needed later, App owns schema/runtime implementation while Company defines governance semantics and Research/Content/Web define their domain-owned fields and review needs.

## Strategic Questions To Answer Early

- Should Operation Living Atlas use a new Supabase queue table, or are Markdown packets plus existing tasks enough for now? Kickoff answer for pilot: Markdown packets plus existing Planner tasks are enough for now; revisit after the first model packet.
- Which species records are public-ready versus research-only?
- What is the minimum image/caption quality for public species galleries?
- How much historical uncertainty can appear publicly, and how should it be phrased?
- Should the desktop app eventually include a dedicated Living Atlas review workflow?
- What cadence should Company use for packet review, dependency refresh, and cross-domain blocker checks?

## Guardrails

- Do not duplicate videos across multiple chronicle rows.
- Do not make every mention into a public event.
- Do not overwrite uncertain species history with confident language.
- Do not use public pages as raw research notebooks.
- Do not let backfill order distort ecological chronology.
- Do not create app or web UI changes until the data-entry workflow is proven.

## Agent Handoffs

Use these handoff packets for parallel work:

- `0. Agent Exports/operation_living_atlas_research_handoff.md`
- `0. Agent Exports/operation_living_atlas_content_handoff.md`
- `0. Agent Exports/operation_living_atlas_web_handoff.md`
- `0. Agent Exports/operation_living_atlas_app_handoff.md`
