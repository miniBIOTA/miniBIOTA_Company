---
title: Operation Living Atlas Source Packet Scaffold - Pipeline 338 / Chronicle 30
date: 2026-05-12
domain: company
packet_status: source_packet_created
source_pipeline_id: 338
chronicle_id: 30
tags: [operation-living-atlas, source-packet, coverage-gap, lake-post-seal, content-task-140]
---
# Operation Living Atlas Source Packet Scaffold - Pipeline 338 / Chronicle 30

## Packet Intent

This is a Company-created coordination scaffold for the first Operation Living Atlas model source. The canonical working packet belongs to the Content repo/domain before evidence extraction continues.

This scaffold is a coverage/gap packet, not a duplicate database mirror.

The goal is to show what is already verified in structured records, what is missing or uncertain, and what may need proposed writes after Content and Research review.

No live records were changed by this packet.

Ownership correction:
- Company owns the model-packet scope, cross-domain sequencing, approval gates, and review posture.
- Content owns the working source packet and evidence-extraction task sequence.
- Content has adopted the canonical working packet at `M:\miniBIOTA\miniBIOTA_Content\audits\living_atlas\source_packets\pipeline_338_chronicle_30_lake_post_seal_2026-05-12.md`.
- This Company copy is now a reference/scaffold only.

## Source

Source:
- Type: published longform video / Content pipeline record.
- Pipeline ID: `338`.
- Title: `My Lake Went Completely Opaque. So I Removed the Fish.`
- Published date: `2026-04-17`.
- Published URL: `https://youtu.be/lgmPWX9e-A0`.
- Content project source: `M:\miniBIOTA\miniBIOTA_Content\video_projects\archive\2026-04_biome_lake-post-seal.md`.
- Confidence: high for source identity, publication record, chronicle link, and existing structured coverage; mixed for ecological event-date interpretation pending Research/Content review.

Primary chronicle:
- Chronicle ID: `30`.
- Title: `Fish removal reopens the lake food web`.
- Current event date: `2026-04-17`.
- Source pipeline: `338`.
- Scope: Freshwater Lake biome.

Event date note:
- The current chronicle event date matches the publish date.
- The ecological event range appears closer to `2026-03-12` through `2026-04-08`, covering the bulb replacement / light-load return, opacity escalation, flagfish removal, Daphnia magna failure, field collection, and Daphnia/ostracod/Mesostoma introduction.
- Do not change this now. Treat it as a proposed-write/open-question candidate after Research and Content review.

## Primary Subject

Scope:
- Freshwater Lake food-web reset after algae opacity escalated and the flagfish was removed.

Primary biome/system:
- Freshwater Lake biome.

Primary species:
- Flagfish, species `24`.
- Daphnia, species `164`.
- Ghost Shrimp, species `67`.

Why this is primary:
- Pipeline `338` explains why the lake went opaque, why the flagfish was removed, and why the food-web strategy shifted toward an algae -> microcrustacean -> shrimp/crayfish bridge.

## Source Packet Summary

Source:
- Type: published longform video / Content pipeline record.
- ID/path/URL: pipeline `338`; `https://youtu.be/lgmPWX9e-A0`; `M:\miniBIOTA\miniBIOTA_Content\video_projects\archive\2026-04_biome_lake-post-seal.md`.
- Published date: `2026-04-17`.
- Event date or date range: proposed review range `2026-03-12` through `2026-04-08`; current chronicle `event_date` is `2026-04-17`.
- Confidence: high for source identity and current structured links; needs review for event-date semantics and public Daphnia/Mesostoma handling.

Primary subject:
- Scope: Freshwater Lake food-web reset.
- Species/biome/system: Freshwater Lake biome, Flagfish `24`, Daphnia `164`, Ghost Shrimp `67`.
- Why this is primary: the video and chronicle document the fish-removal decision and the attempt to reopen the algae -> microcrustacean -> shrimp/crayfish energy pathway.

Affected subjects:
- Freshwater Lake biome: primary; public chronicle.
- Flagfish `24`: major impact; public species profile / related event.
- Daphnia `164`: major impact; public species profile candidate needing Research review.
- Ghost Shrimp `67`: major impact; public species profile / related event.
- Freshwater amphipods `66`: context; related event only.
- Calanoid copepods `65`: context; related event only.
- Cyclopoid copepods `169`: context; related event only.
- Slough Crayfish `25`: context; related event only.
- Mesostoma `167`: context/open-loop pressure; internal research note or possible related event pending Research review.

Evidence:
- Observations: `170-178`.
- Pipeline records: `content_pipeline.id = 338`.
- Photos/videos: source project production notes list footage for opacity, fish removal, Daphnia magna introduction, field search, trail-pool discovery, organism introduction, and Mesostoma close-up.
- Transcript notes: archived Content project contains final script and story spine; transcript row on `content_pipeline.id = 338` is currently null.

Writes proposed:
- `content_pipeline`: no immediate write proposed.
- `observations`: no immediate write proposed; review whether later observations after `178` should be linked before packet closeout.
- `species`: Research review needed for Daphnia `164` public readiness and Ghost Shrimp juvenile recruitment language.
- `chronicles`: review chronicle `30` event-date semantics.
- `chronicle_subject_links`: review whether Mesostoma `167` should be linked publicly or remain observation/open-loop context.
- `media/species_images`: media selection needed after Content/Raw Footage/App review.
- `story_threads/open_loops`: review whether the five pipeline `338` open loops are complete/current before closeout.

Open questions:
- Should chronicle `30` use a different event date or explicit event range?
- Is Daphnia `164` public-ready?
- Should Mesostoma `167` be publicly linked to chronicle `30`?
- Which media assets are proof-quality for public use?
- Are later observations needed before proposed writes are prepared?

## Coverage Snapshot

Already structured:

| Area | Current Coverage |
|---|---|
| Pipeline | `content_pipeline.id = 338` is published and linked to chronicle `30`. |
| Chronicle | `chronicles.id = 30` records the fish-removal event as a Freshwater Lake biome chronicle. |
| Subject links | Chronicle `30` already links Freshwater Lake, Flagfish, Daphnia, Ghost Shrimp, freshwater amphipods, calanoid copepods, cyclopoid copepods, and Slough Crayfish. |
| Flagfish | Species `24` is active as a record but population status is `Removed`, current estimated population `0`, last seen `2026-04-05`, with food-web management notes. |
| Ghost Shrimp | Species `67` is `Vulnerable`, confirmed breeding, with juvenile recruitment unresolved. |
| Daphnia | Species `164` is `unreviewed`, `Daphnia sp.`, likely `Daphnia ambigua`, with population status `Uncertain`. |
| Observations | Observations `170-178` cover opacity, plant-structure transition, Daphnia magna failure, field search, duckweed test, trail-pool discovery, introductions, and Mesostoma correction. |
| Open loops | Five open loops are tied to pipeline `338`: Daphnia establishment, Mesostoma pressure, Ghost Shrimp establishment, lake food-web completion, and crayfish checking Mesostoma. |

Coverage gaps:

| Gap | Why It Matters | Owner For Review |
|---|---|---|
| Chronicle `event_date` may be publish-date rather than ecological event date/range | Backfill chronology should not distort ecological timing | Company + Content + Research |
| Daphnia public readiness | Species `164` is still `unreviewed`; likely ID and establishment status remain uncertain | Research |
| Mesostoma role in this packet | It is central to the open loop but not a primary linked subject for chronicle `30` in current subject links | Research + Company |
| Media proof selection | Footage exists in the Content project notes, but public image/video evidence and captions are not selected here | Content + Raw Footage/App |
| Proposed write list | Needs Content/Research packet review before any live updates | Company + Content + Research |

## Affected Subjects And Publicness Tiers

| Subject | Relationship | Current Tier | Notes |
|---|---|---|---|
| Freshwater Lake | primary | Public chronicle | Existing chronicle `30` covers the food-web reset. |
| Flagfish `24` | major impact | Public species profile / related event | Removal is already structured and public-relevant. Avoid framing it as failure; it was a deliberate scale-management decision. |
| Daphnia `164` | major impact | Public species profile candidate, needs Research review | Public value is high, but ID and establishment uncertainty need careful language. |
| Ghost Shrimp `67` | major impact | Public species profile / related event | Important because fish removal changed larval/recruitment context. Juvenile recruitment remains unresolved. |
| Freshwater amphipods `66` | context | Related event only | Part of post-removal microcrustacean layer; do not overstate role without Research review. |
| Calanoid copepods `65` | context | Related event only | Existing context link; avoid turning into standalone public event. |
| Cyclopoid copepods `169` | context | Related event only | Existing context link; avoid turning into standalone public event. |
| Slough Crayfish `25` | context | Related event only | Larger consumer in rebuilt food web; may check Mesostoma, but outcome remains open. |
| Mesostoma `167` | open-loop context | Internal research note / possible related event | Predator-pressure tension is central, but Research should decide whether to link publicly. |
| Duckweed / Daphnia magna / ostracods / water scorpion / planaria / ramshorn / blackworms | evidence/context | Internal research note or raw evidence only | Keep as packet evidence unless Research promotes a specific subject. |

## Evidence Coverage

Existing observation evidence:
- `170`: Lake opacity, maximum energy/light framing, food-web bridge strategy, flagfish removal rationale.
- `171`: Ludwigia vs tapegrass/sagittaria structure and water-column nutrient/light shift.
- `172`: Daphnia magna trial rationale and diagnostic failure framing.
- `173`: Field search for Moina/Daphnia with no target species found in early sites.
- `174`: Duckweed considered as alternative bridge and tested cautiously.
- `175`: Trail-pool discovery of Daphnia-like microcrustaceans and ostracods.
- `176`: Species composition of organisms added, including Daphnia, ostracods, and Mesostoma correction.
- `177`: Introduction of Daphnia/ostracods/associated organisms and small duckweed test.
- `178`: Mesostoma correction and predator-pressure tension.

Content/project evidence:
- Archived video project contains the story spine, final script, production notes, and session log.
- Production notes identify footage for tapegrass bubbling, crayfish behavior, flagfish removal, Daphnia magna introduction, field collection, trail-pool discovery, organism introduction, and Mesostoma close-up.

Open loops tied to pipeline `338`:
- Will Daphnia establish and begin clearing the water?
- Will Mesostoma eat through the Daphnia and ostracod population before they establish?
- Can Ghost Shrimp survive and establish long-term in the lake biome?
- Will the lake food web complete the algae -> microcrustacean -> crayfish/shrimp chain and clear the water without mechanical intervention?
- Will the crayfish population check Mesostoma and allow the microcrustacean layer to hold?

## Proposed Writes For Review Only

Do not apply these without explicit approval.

| Target | Proposed Review Item | Reason |
|---|---|---|
| `chronicles.id = 30` | Review whether `event_date` should remain `2026-04-17` or shift to an event date/range note reflecting `2026-03-12` through `2026-04-08`. | Current date appears to be publish date, not ecological event timing. |
| `chronicle_subject_links` | Review whether Mesostoma `167` needs a context link to chronicle `30`, or should remain only in observations/open loops. | Mesostoma is central to the unresolved predator-pressure tension. |
| `species.id = 164` | Research review for public-readiness, ID confidence, establishment language, and whether `display_status` should remain `unreviewed`. | Daphnia is a primary packet subject but uncertainty is still high. |
| `species.id = 67` | Review whether Ghost Shrimp page should surface juvenile recruitment uncertainty from this packet. | Fish removal affected larval survival context, but recruitment remains unconfirmed. |
| `media/species_images` | Select candidate public images or clips only after Content/Raw Footage review. | Public visuals should be proof-quality and captioned carefully. |
| `story_threads/open_loops` | Check whether existing open loops are complete and current before closing packet. | Several outcomes advanced later but remain unresolved. |

## Open Questions

- Should chronicle `30` use a different event date or include an explicit event range?
- Is Daphnia `164` public-ready, or should it remain unreviewed until ID/establishment confidence improves?
- Should Mesostoma `167` be publicly linked to chronicle `30`, or kept as internal/open-loop context?
- Which media assets are the best proof for opacity, fish removal, field collection, Daphnia/ostracods, and Mesostoma?
- Are any observations after `178` needed before this packet can produce a proposed write list?

## Next Step

Content task `140` was completed from Company after the scaffold was created, but ownership is Content-domain. Content has since adopted the packet in its own repo as the canonical working packet. Do not use this Company copy as the canonical working packet.

The next execution task is Content task `210`: extract evidence from pipeline `338` transcript/video into the Living Atlas Source Packet.

Company should review the packet after evidence extraction and before Research validation or any proposed structured writes are presented for approval.

Company task `208` should remain open until the packet workflow has been worked enough to decide whether Markdown plus Planner is sufficient or a dedicated Supabase queue table is needed.
