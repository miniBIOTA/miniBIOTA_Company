---
title: Operation Living Atlas Queue Table Decision
date: 2026-05-13
domain: company
tags: [operation-living-atlas, queue-table, app-boundary, planner-task-208, governance-decision]
---
# Operation Living Atlas Queue Table Decision

## Decision

Do not create a dedicated Operation Living Atlas Supabase queue table yet.

Continue using Content-owned Markdown source packets, Research validation notes, Company coordination notes, and existing Planner tasks for the next bounded Living Atlas work. Revisit the queue-table decision after the first approval-bundle/write-review cycle or when multiple source packets are active at once.

This decision closes the Company-side question for the first model packet workflow only. It does not approve App schema work, App UI work, Supabase table creation, live ecological writes, public website changes, media records, public captions, sponsor commitments, financial commitments, legal decisions, launch targets, or roadmap commitments.

## Basis

The first model packet reached `verified_with_caveats` after:

- Content task `140`: source packet created/adopted.
- Content task `210`: evidence extracted.
- Content task `211`: publicness-tier routing completed.
- Research task `221`: uncertainty and public/private wording validated.
- Content task `212`: proposed write layers prepared for review only.
- Content task `213`: media evidence recommendation completed.
- Research task `222`: link/evidence verification completed.
- Content task `214`: packet closed as verified with caveats.

The manual workflow proved that Markdown plus Planner can carry one packet through source review, evidence extraction, claim safety, media review, and closeout without losing the core handoff state.

## Why A Table Is Not Needed Yet

- Only one model packet was active, so packet status did not need database-level filtering, assignment, or dashboards.
- The packet itself preserved source evidence, routing, Research caveats, media recommendations, and unresolved questions in one readable place.
- Planner tasks were enough to track the major lane transitions across Content, Research, and Company.
- The process produced useful caveats and proposed bundles without creating accidental live writes.
- The remaining blockers are approval and cleanup decisions, not queue mechanics.

## Friction Observed

The first packet did expose real process pressure:

- Handoffs were chat-heavy and need crisp prompts between agents.
- Proposed writes are now bundled but not yet approved, applied, or read back.
- Some evidence links are indirect: observations `170-178` are not directly linked by `observations.pipeline_id = 338` or `observations.chronicle_id = 30`.
- Follow-up link cleanup may be needed for observations `193`, `194`, and `206`.
- Media candidates can exist on disk without indexed `media_assets` rows.
- Daphnia, Ghost Shrimp zoea, and Mesostoma media need careful Research/Company gates before public use.

These are important caveats, but they do not yet justify adding a new App-owned queue table before the approval/write cycle is tested.

## Revisit Triggers

Reopen the queue-table question if any of these become true:

- Two or more Living Atlas packets are active at the same time and status becomes hard to trust.
- Proposed writes need a structured approval queue with per-target approvals.
- Media candidates need repeatable assignment, status, caption review, and link tracking across packets.
- Packet handoffs are getting lost despite Planner tasks and Markdown closeouts.
- App needs an operator workflow because the manual packet process is repeatedly useful but too slow.
- Company needs filtered dashboards by packet status, owner, blocker, publicness tier, approval state, or linked records.

## Current Operating Rule

For the next packet or approval-bundle pass:

- Use one canonical Content packet.
- Use Research notes for claim safety and link/evidence verification.
- Use Company notes for sequencing, approvals, and cross-domain decisions.
- Use Planner tasks for lane status.
- Keep live structured writes in explicit approval bundles.
- Ask App about schema/workflow only after manual approval/write friction is proven.

## Next Company Work

Company task `209` should close the first model-packet review and create follow-up Planner tasks only for actionable next work, especially:

- Approval-bundle review for proposed species/profile, chronicle, link, media, and open-loop writes.
- Chronology handling for chronicle `30`.
- Direct observation-source link cleanup, if needed.
- Media indexing/caption approval, if needed.
- Daphnia task `217` only before public-readiness promotion, public `Daphnia ambigua`, or establishment/reproduction/clearing claims.
