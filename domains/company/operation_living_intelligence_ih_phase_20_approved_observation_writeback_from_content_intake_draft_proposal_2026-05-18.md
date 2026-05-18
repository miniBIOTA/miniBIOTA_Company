---
id: operation_living_intelligence_ih_phase_20_approved_observation_writeback_from_content_intake_draft_proposal_2026-05-18
title: Operation Living Intelligence Intelligent Harness Phase 20 Approved Observation Writeback From Content Intake Draft Proposal
domain: company_operations
last_updated: 2026-05-18
tags: [operation-living-intelligence, intelligent-harness, phase-20, observation-writeback, content-agent, supabase, approval-gated]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 20 Approved Observation Writeback From Content Intake Draft Proposal

## Purpose

Phases 17-19 prove the local no-write observation intake chain:

```text
raw observation -> Content audit draft -> App bridge -> Phase 13 suggestions -> Intelligence tab
```

The next source-of-truth step is defining how an approved Content observation intake draft becomes a canonical Supabase observation record.

This proposal does not approve any Supabase write. It defines an approval-gated writeback path.

## Recommended Owner

Recommended owner:

```text
Content agent owns canonical observation writes through the existing log-daily-observation workflow.
```

Reason:

- Content already owns raw observation intake, wording preservation, footage status, and story routing.
- `log-daily-observation` already defines the right sequence: propose first, check duplicates, ask approval, write only approved observations, and keep story/open-loop/beat/chronicle/Planner/pipeline actions separate.
- App owns runtime and helper infrastructure, but the canonical content observation decision belongs to Content.
- Company owns the cross-domain policy and approval gate.

## Approved Writeback Shape

The canonical target table should be:

```text
public.observations
```

Known locally referenced observation fields:

```text
id, observed_at, created_at, biome_id, species_id, pipeline_id, chronicle_id, promoted_to_chronicle, has_video, video_description, note
```

Before implementation, the write helper should confirm the live table metadata/read path for these fields. Do not guess fields beyond this local contract.

## First Real Example

Source observation:

```text
2026.05.06
Video: Footage showing disturbed substrate and excavated piles of gray, bacteria-rich sand spread across the coastal biome, with the Gulf marsh crab positioned at the center of the excavation area.
Notes: Today I observed significant excavation activity by the Gulf marsh crab within the coastal biome. Large clumps of gray, bacteria-rich sand from beneath the surface have been brought upward and scattered across the beach area, with the crab located directly within the disturbed region. This level of digging represents a substantial amount of sediment turnover for the biome. The activity may provide benefits by aerating and redistributing material through the substrate, but it also raises the possibility of accelerated erosion within the coastal structure. Continued observation will be needed to determine whether the long-term effects of this digging are stabilizing or destabilizing for the biome.
```

Proposed observation meaning:

- observed event: Gulf marsh crab excavation and sediment turnover in the coastal biome;
- footage exists;
- causality and long-term outcome are uncertain;
- stabilization/erosion effects require continued observation;
- no story/thread/open-loop/beat/chronicle/Planner/media metadata writes are bundled.

## Proposed Supabase Fields

Proposed insert into `public.observations`:

| Field | Proposed value | Notes |
|---|---|---|
| `observed_at` | `2026-05-06` | Date is explicit in the note header. |
| `species_id` | confirmed Gulf marsh crab species row ID | Must be read/confirmed before proposal is approvable. |
| `biome_id` | confirmed coastal biome row ID | Must be read/confirmed before proposal is approvable. |
| `has_video` | `true` | Footage is described in the source. |
| `video_description` | concise description of visible footage | Preserve visual evidence without creating media metadata links. |
| `note` | cleaned observation note with uncertainty and caution preserved | Must not overstate causality or long-term effects. |
| `pipeline_id` | `null` | Do not write deprecated/direct pipeline relationship for unpublished observation. |
| `chronicle_id` | `null` | Chronicle decision is separate. |
| `promoted_to_chronicle` | `false` | Chronicle promotion is separate and not approved. |

Fields that should remain database-generated or unset:

- `id`: database-generated;
- `created_at`: database default, if present;
- `system_id`: unavailable in current observation metadata and should not be required;
- any story/thread/open-loop/beat/chronicle/Planner/media fields outside `observations`.

## Draft Note Wording

Recommended `note` draft:

```text
Observed significant excavation activity by the Gulf marsh crab within the coastal biome. Large clumps of gray, bacteria-rich sand from beneath the surface had been brought upward and scattered across the beach area, with the crab located directly within the disturbed region. This appears to represent substantial sediment turnover for the biome. Possible effects include substrate aeration or redistribution, but accelerated erosion is also a concern. Continued observation is needed before making any claim about whether the digging is stabilizing or destabilizing the biome.
```

This preserves the observed event and the uncertainty while avoiding causal overclaiming.

Recommended `video_description` draft:

```text
Footage shows disturbed substrate and excavated piles of gray, bacteria-rich sand spread across the coastal biome, with the Gulf marsh crab positioned at the center of the excavation area.
```

## Required Approvals Before Writing

Before any Supabase write, require explicit approval for:

1. The exact Content audit draft or raw observation being promoted.
2. The exact `public.observations` table target.
3. The exact `observed_at` date.
4. The exact `species_id` for Gulf marsh crab.
5. The exact `biome_id` for coastal biome.
6. The exact `has_video` value.
7. The exact `video_description`.
8. The exact `note`.
9. Confirmation that `pipeline_id = null`.
10. Confirmation that `chronicle_id = null`.
11. Confirmation that `promoted_to_chronicle = false`.
12. Confirmation that no story/thread/open-loop/beat/chronicle/Planner/media metadata/public/canonical extras are included.

Approval should name the proposed record, not just say "go ahead" broadly.

## Species And Biome ID Confirmation

Do not guess IDs.

Required first read-only checks before proposing the write:

- read or otherwise confirm the canonical `species` row for Gulf marsh crab;
- read or otherwise confirm the canonical `biomes` row for coastal biome;
- confirm the species belongs to, or can validly be observed in, that biome when a relationship exists;
- if multiple candidate rows exist, stop and ask Josue to choose;
- if no candidate row exists, stop and route to Research/App schema ownership before any observation write.

If either ID is uncertain, the proposed observation record should stay in draft/read-only state.

## Video Handling

Set:

```text
has_video = true
```

Only write `video_description` as a textual description of the observed footage.

Do not write:

- `media_assets`;
- `media_species`;
- `media_biomes`;
- media review status;
- media metadata;
- public proof claims;
- file/path links;
- captions.

Media linking and media metadata are separate approval layers owned by Raw Footage/App/Content as appropriate.

## Separate Layers Not Bundled

After the observation write, these remain separate:

- `observation_thread_links`;
- `observation_loop_links`;
- story threads;
- open loops;
- story beats;
- chronicles;
- Planner tasks;
- media metadata links;
- content pipeline records;
- public output;
- Intelligence Harness graph refresh.

The observation write can create a canonical event row. It does not approve any story, public, schedule, media, or graph writeback.

## Proposed Workflow

Phase 20 should be implemented in two gates.

### Gate 1: Prepare Proposed Observation Record

Create a Content-owned helper or command that:

- reads a Content audit draft or explicit raw observation package;
- confirms the draft is not canonical yet;
- performs read-only species/biome ID confirmation;
- prepares a proposed `public.observations` insert object;
- writes a local proposal/readback JSON and Markdown;
- asks for explicit approval before any write.

Recommended future helper:

```text
M:\miniBIOTA\miniBIOTA_Content\tools\prepare-approved-observation-writeback-proposal.js
```

Recommended proposal/readback output:

```text
M:\miniBIOTA\miniBIOTA_Content\audits\observation_writeback\YYYY-MM-DD_<slug>.writeback_proposal.json
M:\miniBIOTA\miniBIOTA_Content\audits\observation_writeback\YYYY-MM-DD_<slug>.writeback_proposal.md
```

### Gate 2: Execute Approved Observation Write

Only after Josue approves the exact proposal:

- insert exactly one row into `public.observations`;
- read back the inserted row by returned `id`;
- write a local writeback readback JSON/Markdown;
- report the new observation ID.

Recommended future execution helper:

```text
M:\miniBIOTA\miniBIOTA_Content\tools\write-approved-observation-to-supabase.js
```

Do not combine Gate 1 and Gate 2 unless the helper has an explicit `--approved-proposal` input and a clear final approval prompt/process.

## Writeback Proposal Readback

The local proposal/readback should record:

- source Content audit path or raw note path;
- proposed table: `public.observations`;
- proposed field values;
- species ID confirmation source;
- biome ID confirmation source;
- duplicate check result;
- statuses proving no bundled writes;
- explicit approval checkbox/status;
- stop conditions reviewed;
- exact SQL/SDK operation that would be performed if approved;
- no-write status until final approval.

Recommended statuses:

```text
proposal_status = ready_for_explicit_observation_write_approval
supabase_write_status = proposed_not_executed
planner_write_status = not_approved
canonical_writeback_status = observation_row_proposed_only
public_use_status = blocked
```

After an approved insert:

```text
writeback_status = pass_observation_insert_readback_verified
new_observation_id = <returned id>
```

## Stop Conditions

Block the write if:

- Josue has not explicitly approved the exact proposed observation record;
- `species_id` is missing, guessed, or ambiguous;
- `biome_id` is missing, guessed, or ambiguous;
- the target table metadata does not match the expected `observations` fields;
- a possible duplicate observation is found and not resolved;
- the proposed note makes a causal or stability claim beyond the observed event;
- `pipeline_id` would be non-null;
- `chronicle_id` would be non-null;
- `promoted_to_chronicle` would be true;
- the operation would also create story/thread/open-loop/beat/chronicle/Planner/media/content-pipeline records;
- the operation would create public output;
- the operation would write media metadata;
- the operation would require dummy IDs;
- readback after write cannot verify the inserted row.

## Validation After Write

A successful approved write must prove:

- exactly one row was inserted into `public.observations`;
- returned `id` is present;
- `observed_at = 2026-05-06`;
- `species_id` equals the confirmed Gulf marsh crab ID;
- `biome_id` equals the confirmed coastal biome ID;
- `has_video = true`;
- `video_description` matches the approved text;
- `note` matches the approved text;
- `pipeline_id is null`;
- `chronicle_id is null`;
- `promoted_to_chronicle = false`;
- no story/thread/open-loop/beat/chronicle/Planner/media/content-pipeline rows were written;
- no public output was created;
- no media metadata was written;
- no canonical claims beyond the observation row were created.

## Flow Back Into Intelligent Harness

After the observation row is written and read back:

1. Record the new `observation_id` in the local writeback readback.
2. Do not automatically modify Memgraph or existing Phase 13 suggestions.
3. Prepare a later no-write harness refresh that reads the new `observations.id`.
4. Future graph refresh should create a canonical `Observation` node from the Supabase row.
5. Suggested connections remain suggested until separately approved as links.
6. Story/open-loop/beat/chronicle links must use separate approval-gated writes.

The new observation ID becomes a canonical source ID for future local graph/retrieval refreshes, not an automatic approval of any derived relationship.

## Implementation Readiness

Phase 20 is not ready for Supabase write implementation until these are confirmed:

- live metadata for `public.observations`;
- canonical `species_id` for Gulf marsh crab;
- canonical `biome_id` for coastal biome;
- duplicate check against nearby observations;
- exact approved note and video description;
- approved write helper/path for Content-owned Supabase observation insert.

It is ready for a no-write Gate 1 implementation proposal that prepares the local proposed observation record and approval packet.

Recommended next gate:

```text
Approve Phase 20 Gate 1: prepare approved-observation writeback proposal packet, no Supabase write.
```

