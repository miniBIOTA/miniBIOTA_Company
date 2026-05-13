---
title: Operation Living Atlas Model Packet Scope
date: 2026-05-12
domain: company
tags: [operation-living-atlas, lake-post-seal, source-packet, execution-plan, planner-task-207]
---
# Operation Living Atlas Model Packet Scope

## Purpose

Start Company Planner task `207`: approve the first Operation Living Atlas model-packet scope and ordered execution plan before Content, Research, Web, App, or structured-record work proceeds.

This note is a Company planning artifact. It does not write Supabase ecological records, change website behavior, change app behavior, create a schema/queue table, or make public, sponsor, financial, legal, launch, or roadmap commitments.

Planner task `207` was completed after Josue approved this scope on 2026-05-12. Content-owned task `140` was started/completed from this scope as a packet scaffold, and the Content Agent has since adopted the canonical working packet at `M:\miniBIOTA\miniBIOTA_Content\audits\living_atlas\source_packets\pipeline_338_chronicle_30_lake_post_seal_2026-05-12.md`.

## Live Structured Snapshot

Protected reads on 2026-05-12 verified the following current records for the first model packet:

| Record | Verified State |
|---|---|
| `content_pipeline.id = 338` | Published longform, title `My Lake Went Completely Opaque. So I Removed the Fish.`, published `2026-04-17`, URL `https://youtu.be/lgmPWX9e-A0`, linked to chronicle `30`. |
| `chronicles.id = 30` | `Fish removal reopens the lake food web`, event date `2026-04-17`, source pipeline `338`, biome scope, primary Freshwater Lake chronicle. |
| `chronicle_subject_links` for chronicle `30` | Freshwater Lake primary; Flagfish, Daphnia, and Ghost Shrimp as major-impact species; freshwater amphipods, calanoid copepods, cyclopoid copepods, and Slough Crayfish as context links. |
| `species.id = 24` | Flagfish, `Jordanella floridae`, population status `Removed`, last seen `2026-04-05`, current estimated population `0`, removal documented as a food-web management decision. |
| `species.id = 67` | Ghost Shrimp, `Palaemon paludosus`, population status `Vulnerable`, confirmed breeding, juvenile recruitment still unresolved. |
| `species.id = 164` | Daphnia, `Daphnia sp.`, display status `unreviewed`, likely `Daphnia ambigua` in description, population status `Uncertain`, last seen `2026-04-13`. |
| `observations.id = 170-178` | Lake opacity, plant-structure transition, Daphnia magna diagnostic failure, field search, duckweed test, trail-pool discovery, Daphnia/ostracod/Mesostoma introductions, and Mesostoma correction are present as evidence records. |
| `open_loops.source_pipeline_id = 338` | Five loops are tied to the packet: Daphnia establishment, Mesostoma pressure, Ghost Shrimp establishment, lake food-web completion, and crayfish checking Mesostoma. |

## Source Scope

Primary source:
- Pipeline `338`: `My Lake Went Completely Opaque. So I Removed the Fish.`
- Content project source: `M:\miniBIOTA\miniBIOTA_Content\video_projects\archive\2026-04_biome_lake-post-seal.md`

Primary chronicle:
- Chronicle `30`: `Fish removal reopens the lake food web.`

Primary subjects:
- Freshwater Lake biome.
- Flagfish, species `24`.
- Daphnia, species `164`.
- Ghost Shrimp, species `67`.

Context subjects:
- Freshwater amphipods, species `66`.
- Calanoid copepods, species `65`.
- Cyclopoid copepods, species `169`.
- Slough Crayfish, species `25`.
- Mesostoma, species `167`, as an important predator-pressure open loop.
- Duckweed, Daphnia magna, ostracods, water scorpion, planaria, ramshorn/leopard ramshorn, and blackworms as evidence/context only unless Research promotes them.

## In Scope For The First Packet

- Build one coverage/gap source packet for pipeline `338` and chronicle `30`.
- Capture what the video says happened, when it happened, and why it matters.
- Separate source evidence, current structured truth, and ecological interpretation.
- Classify facts by publicness tier before proposing writes.
- Identify already-linked subjects and avoid duplicate chronicle rows or duplicate relationship links.
- Confirm which facts are already structured and which need proposed updates.
- Focus on verified coverage, missing coverage, and uncertainty; do not mirror the database into Markdown.
- Preserve uncertainty around Daphnia establishment, Ghost Shrimp juvenile recruitment, Mesostoma pressure, and lake-water clearing.
- Produce proposed writes only as a review packet, not as live changes.

## Out Of Scope For The First Packet

- Creating a dedicated Living Atlas queue table.
- Building App review/editor workflow.
- Changing public website rendering.
- Applying relationship-batch SQL.
- Creating new chronicles before duplicate review.
- Updating species, observations, media, story threads, open loops, or chronicle links without explicit approval.
- Turning unresolved ecological outcomes into confident public claims.
- Broadly cleaning every Lake or Living Web task before this model packet proves the workflow.

## Ordered Execution Plan

1. Content builds the first source packet from pipeline `338`, the archived video project, chronicle `30`, observations `170-178`, open loops tied to pipeline `338`, and current subject links.
2. Company reviews the packet for scope discipline, publicness-tier routing, duplicate-risk, and cross-domain handoff clarity.
3. Research validates ecological interpretation, species IDs, confidence language, unresolved outcomes, and any species dossier needs.
4. Content and Research separate story/source facts from polished public copy; Content owns final audience-facing narrative, Research owns evidence and claim safety.
5. Company prepares or reviews the proposed write list grouped by observations, species fields, chronicles, chronicle links, media/images, story threads, and open loops.
6. Josue approves or rejects live structured writes before any Supabase, Planner, App, Web, schema, or public-surface change.
7. After approved writes, read records back and compare them against the packet.
8. Web reviews public rendering only after curated records exist.
9. Company closes the packet with unresolved questions and the next bounded source recommendation.

## Approval Gates

Explicit approval remains required before:

- Creating or updating Content, Research, Web, App, or Company Planner records.
- Writing Supabase records.
- Updating public website behavior.
- Building App queue/editor workflow or schema.
- Making stronger public claims than Research supports.

## Scope Approval - 2026-05-12

Josue approved this as the model packet scope for Content to start task `140`.

Carry these notes into the packet:

- The packet should be a coverage/gap packet, not a duplicate database mirror. Since many records are already structured, focus on what is verified, what is missing, and what is uncertain.
- Chronicle `30` currently has `event_date = 2026-04-17`, which is also the publish date. The ecological event range appears closer to 2026-03-12 through 2026-04-08. Do not change this now, but include it in possible proposed writes or open questions.

## Recommended Next Work

Content-owned task `140` has a Company-created packet scaffold and a Content-owned canonical working packet. The Company copy is coordination/reference only.

The next real execution task is Content-owned task `210`: extract evidence from pipeline `338` transcript/video into the Living Atlas Source Packet.

Recommended starting prompt for the Content lane:

```text
Create the first Operation Living Atlas Source Packet for pipeline 338 / chronicle 30 using the Company model-packet scope, the archived Lake Post-Seal video project, current content_pipeline and chronicle records, observations 170-178, existing chronicle_subject_links, and open_loops tied to pipeline 338. Do not write live records. Separate evidence, interpretation, publicness tier, proposed writes, and open questions.
```

Company should review the resulting packet before Research validation and before any structured write proposal.

Company task `208` reached its decision point after Content task `214` closed the packet as verified with caveats and Research task `222` verified the link/evidence map. The Company decision on 2026-05-13 is: do not create a dedicated Living Atlas Supabase queue table yet. Continue with Markdown packets plus existing Planner tasks, and revisit after approval/write-cycle friction is proven or multiple packets are active at once.
