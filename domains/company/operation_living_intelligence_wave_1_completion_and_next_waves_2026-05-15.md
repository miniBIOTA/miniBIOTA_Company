---
id: operation_living_intelligence_wave_1_completion_and_next_waves_2026-05-15
title: Operation Living Intelligence Wave 1 Completion And Next Waves
domain: company_operations
last_updated: 2026-05-15
tags: [operation-living-intelligence, graph, wave-1, next-waves, cross-domain-coordination]
status: completed
---
# Operation Living Intelligence Wave 1 Completion And Next Waves

## Current State

Operation Living Intelligence Wave 1 is complete as a local proof.

The proof showed that miniBIOTA can project a bounded Lake Post-Seal source packet from canonical Supabase/domain records into a derived graph package, validate it locally, optionally import it into disposable Memgraph, and tear the runtime back down without changing canonical systems.

Verified Wave 1 result:

```text
67 nodes
96 normal edges
13 blocked edges
109 total relationships with blocked guardrails
10 / 10 Stage 3 pilot questions pass or provisionally pass
public reuse remains review_required
canonical_writeback remains none
```

The current default operator path is the App manual helper:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-wave1-manual-projection.js
```

That helper regenerates the local JSONL package, runs no-Docker readback, generates the public reuse sidecar, reruns readback with the sidecar present, generates the Cypher file, and writes a local operator report.

## Decision

Pause graph infrastructure here.

Wave 1 is successful enough to inform the next Operation Living Intelligence planning decision. It does not justify persistent graph infrastructure yet.

Approved posture:

- Supabase and domain repos remain canonical.
- Wave 1 graph outputs remain local, ignored, rebuildable, and derived.
- The manual helper is the safe internal projection path when a fresh readback is needed.
- Docker/Memgraph remains optional, local, disposable, and test-only.
- Public reuse candidates remain review-gated.

Not approved:

- persistent Memgraph service;
- scheduled graph sync;
- App runtime integration;
- public graph output;
- Web route changes;
- Content copy/caption changes;
- Research claim changes;
- media metadata writes;
- Supabase/Planner writes;
- Storage writes;
- schema/RLS/grant changes;
- paid graph services;
- source-of-truth migration;
- canonical writeback.

## What Wave 1 Proved

Wave 1 proved useful graph value in five places:

1. Provenance: agents can see which species, observations, chronicles, content items, media candidates, and source packets are connected.
2. Claim safety: blocked Daphnia, Ghost Shrimp, Mesostoma, and Moina paths stay visible instead of being silently dropped or overclaimed.
3. Review routing: public reuse surfaces can be named as candidates while still showing Research, Content, Web, and media-review gates.
4. Operator safety: the no-Docker readback catches missing endpoints, direct source-link mistakes, publicness drift, and writeback violations.
5. Infrastructure restraint: the useful part can run as local derived files before any permanent graph database exists.

## Cross-Domain Impact

| Domain | Impact | Next Need |
|---|---|---|
| Company | Owns the Wave 1 completion decision and next-wave sequencing. | Keep OLI as derived/read-first infrastructure; do not let the proof become a source-of-truth move. |
| App | Owns helper/runtime implementation and any future operator surface. | Keep the manual helper as the only approved path; future App UI/automation requires a separate proposal. |
| Research | Owns ecological claims, uncertainty labels, and public-safe interpretation. | Use Wave 1 outputs only as evidence paths and review prompts, not as claim approval. |
| Content | Owns story reuse, source packets, scripts, captions, and public narrative. | Treat public reuse sidecar outputs as candidate story/public-surface leads only. |
| Web | Owns public rendering and public source-of-truth surfaces. | No Web changes from Wave 1; future Web use requires curated, reviewed output. |
| Financials | Owns paid-tool and recurring-cost review. | No paid graph service justified yet. |
| Growth/Brand | Own public positioning, audience meaning, and commitment discipline. | No public claims, launch framing, or sponsor language is created by the proof. |

## Recommended Next Waves

Recommended next planning order:

1. **Wave 2: Content Story Graph**.
   This is the best next small wave because it directly builds on the proven graph pattern and answers a practical agent question: what story is this part of, what has already been published, what is planned, and what is only candidate material?

2. **Wave 3: Species And Public History Expansion**.
   This should follow once the story graph boundary is clearer. It expands from one Lake Post-Seal packet toward species/biome public history and safe species-card/public-page improvement candidates.

3. **Wave 6: Media And Visual AI Readiness**.
   This remains important, especially for proof assets and clip pull sheets, but should stay behind the graph/story/publicness guardrails so visual AI annotations do not become public claims or media metadata by accident.

Hold for later:

- persistent graph runtime;
- Planner/agent routing graph;
- vector retrieval;
- analytics warehouse;
- CRM/Financials projections;
- telemetry summaries beyond current Supabase/Postgres paths.

## Recommended Next Action

Do a docs-only Wave 2 design pass before building more tooling.

The Wave 2 pass should define:

- source scope for `story_threads`, `open_loops`, `story_beats`, `content_pipeline`, `chronicles`, `content_calendar`, and observations;
- how to distinguish published content, planned content, draft content, public history, and private source notes;
- which graph questions need to be answered better than Markdown/Supabase lookup;
- which outputs are allowed as internal readback only;
- which Content/Web/Research approvals block public use;
- whether the existing Wave 1 helper pattern can be reused with a new bounded output folder.

This is a planning handoff only. It does not approve implementation, App helper changes, database writes, public output, automation, or persistent infrastructure.
