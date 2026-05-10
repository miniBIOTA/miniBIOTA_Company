---
title: Raw Footage And Definitions Ownership
last_updated: 2026-05-09
---
# Raw Footage And Definitions Ownership

## Purpose

This file records the Phase 9 ownership decision for the two Brain-only surfaces that did not map cleanly to active domain repos during the Brain retirement migration.

Brain keeps historical copies until archive freeze. Company owns active routing and cross-domain coordination for these surfaces after Phase 9.

## Raw Footage Ownership

Raw Footage is not a standalone implementation domain. It is a shared evidence/proof and media-source surface with split ownership:

- Company owns the cross-domain proof/archive strategy, routing rules, and manager-facing overview under `domains/raw-footage/raw_footage_overview.md`.
- App owns Media Library runtime, schema, indexing, local-file access, Supabase media tables, Site Admin UI, IPC, and write behavior.
- Content owns production use of footage: editing workflow, selected clips, source maps, story proof/context, publishing packages, and DaVinci/project organization.
- Research owns ecological interpretation of what footage proves, suggests, or cannot safely claim.
- Brand/Web/Growth consume approved public-safe media context only after the owning domains have reviewed claim safety and public suitability.
- Raw files remain outside git under `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos`.

Do not move large media into Company, Brain, App, Content, or Web repos. Do not treat a Planner source map, media tag, or reviewed flag as public proof by itself.

## Definitions Ownership

Definitions becomes a Company-owned shared vocabulary surface, with domain-specific extension paths:

- Company owns the central operating glossary at `domains/definitions/glossary.md` and the overview at `domains/definitions/definitions_overview.md`.
- Research owns scientific/ecological term precision and uncertainty labels.
- Hardware owns firmware, control-network, sensor, telemetry producer, and live-system engineering terms.
- App owns Planner/runtime/schema/UI terminology and internal tool behavior labels.
- Web owns public route, public data contract, and public interface vocabulary.
- Content owns production, story, source-map, publishing, and audience-facing workflow terms.
- Brand owns public copy and claim-safety phrasing.
- Financials and Growth own finance, sponsor, partner, sales, CRM, and commercial terms.

When a domain-specific term conflicts with the central glossary, use the domain source for implementation detail and update the Company glossary only after the term is stable enough for cross-domain use.

## Brain Transition Rule

Brain `8. Raw Footage` and `10. Definitions` are historical/transition copies after Phase 9. Use them for provenance and recovery during the migration, not as the active update target.

Do not delete, move, or archive the Brain folders until the explicit Brain archive/freeze phase.

## Live Write Boundary

This Phase 9 decision does not authorize:

- Media Library writes.
- Media indexing runs.
- Supabase media, glossary, Planner, or task writes.
- App runtime/schema/UI changes.
- Moving raw media files.
- Public site publication.
- Public, financial, legal, sponsor, launch, or roadmap commitments.
