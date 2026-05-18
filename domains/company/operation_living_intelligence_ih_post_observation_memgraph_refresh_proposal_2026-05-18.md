---
id: operation_living_intelligence_ih_post_observation_memgraph_refresh_proposal_2026-05-18
title: Operation Living Intelligence Intelligent Harness Post-Observation Memgraph Refresh Proposal
domain: company_operations
last_updated: 2026-05-18
tags: [operation-living-intelligence, intelligent-harness, memgraph, observation-workflow, content-agent, app, derived-refresh, no-write]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Post-Observation Memgraph Refresh Proposal

## Purpose

Josue should not have to manually request a Memgraph refresh after every approved observation write.

After the Content agent writes and reads back one approved `public.observations` row, the normal workflow should automatically run a derived local graph refresh so the new canonical observation can be used for follow-up questions about story threads, open loops, beats, media, and content potential.

This proposal does not create a new numbered Intelligent Harness phase. It is a cross-phase workflow proposal that connects the approved observation writeback path to the derived graph refresh path.

This is a proposal only. It does not approve implementation, Supabase writes, Planner writes, story links, open loop links, beats, chronicles, media metadata, public output, Memgraph changes, pgvector, or canonical writeback.

## Core Rule

Supabase remains canonical.

Memgraph is derived, local, rebuildable context.

The refresh may make a new canonical observation visible inside the graph, but it must not approve any relationship, public claim, content decision, media link, Planner item, story beat, chronicle, or canonical record.

## Recommended Ownership

| Step | Owner | Reason |
|---|---|---|
| Approved observation insert | Content | Content owns `log-daily-observation` and the approved observation writeback path. |
| Post-write refresh trigger | Content | The trigger happens after Content has inserted and read back the new observation. |
| Refresh helper implementation | App | App owns graph/runtime helpers, local `out/` generated data, Docker/Memgraph interaction, and source projection tooling. |
| Refresh policy and approval gates | Company | Company owns cross-domain boundaries and derived-vs-canonical rules. |
| Ecological meaning and species/biome interpretation | Research | Graph context must not override Research truth. |
| Follow-up conversation | Content | Content asks the next story/open-loop/media/content questions after refresh. |

## 1. Which Agent Owns The Refresh Trigger

Recommended:

```text
Content owns the trigger in the normal observation workflow.
```

The trigger should run only after:

1. Josue approved the exact observation insert.
2. Content inserted exactly one `public.observations` row.
3. Content read back the inserted row by returned `id`.
4. The writeback readback confirms no bundled story/thread/open-loop/beat/chronicle/Planner/media/public writes occurred.

Content should not ask Josue, "Should I refresh Memgraph?" every time. The refresh should be part of the standard post-write routine once the workflow is approved.

Content should still report that the graph refresh was attempted and whether it succeeded.

## 2. Which Repo Owns The Refresh Helper

Recommended:

```text
miniBIOTA_App owns the refresh helper.
```

Reason:

- Existing Memgraph helpers live in App.
- App owns runtime/helper infrastructure.
- App owns local ignored `out/operation_living_intelligence/` generated artifacts.
- App owns Docker/Memgraph interaction and graph import/query helper contracts.
- Company should not own graph implementation code.
- Content should not duplicate projection or Memgraph logic.

Content should call the approved App helper after its writeback readback succeeds.

## 3. Should Refresh Run After Every Approved Observation Insert

Recommended:

```text
Yes, after every approved observation insert, by default.
```

This should become normal workflow behavior after implementation is approved.

Reason:

- a new canonical observation is immediately useful for follow-up routing;
- Josue should not need to remember a graph-maintenance step;
- the refresh is derived-only and should be safe when implemented with strict guards;
- Content's next conversational questions are better when the graph context includes the new observation.

Exception:

If Memgraph/Docker is unavailable, the workflow should not block the completed observation write. Content should report the refresh failure and continue using Supabase relationship tables and the Content audit/writeback readback as the source of truth.

## 4. Helper That Needs To Exist Or Be Updated

Current App helpers are not enough for this normal workflow as-is.

Existing helpers include:

```text
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-ih-phase1-core-seed-jsonl.js
M:\miniBIOTA\miniBIOTA_App\tools\generate-oli-ih-phase2-core-seed-cypher.js
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-ih-phase2-memgraph-pilot.js
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-ih-phase3-query-harness.js
```

But the current Phase 1 generator is bounded to Lake Post-Seal hardcoded IDs. It is not a general "refresh the graph after observation `253`" helper.

Recommended App-side design first:

```text
M:\miniBIOTA\miniBIOTA_App\docs\operation-living-intelligence-post-observation-memgraph-refresh-design-review.md
```

Recommended future App helper:

```text
M:\miniBIOTA\miniBIOTA_App\tools\refresh-oli-ih-post-observation-memgraph.js
```

Recommended command shape:

```powershell
node tools/refresh-oli-ih-post-observation-memgraph.js --observation-id 253 --mode post-write --keep-running false
```

Recommended helper behavior:

1. Read canonical `public.observations` row by `--observation-id`.
2. Read linked canonical context needed for graph projection:
   - `species`;
   - `biomes`;
   - existing `observation_thread_links`;
   - existing `observation_loop_links`;
   - relevant story threads;
   - relevant open loops;
   - relevant story beat observation links if they already exist;
   - relevant media/context only through already-approved source tables, without writing media metadata.
3. Generate derived graph update input under App ignored `out/`.
4. Import or merge the derived observation node and approved existing relationships into local Memgraph.
5. Verify the new observation ID appears in Memgraph.
6. Run a small follow-up query set for Content.
7. Write one compact status/readback JSON under App `out/`.

No App runtime files should be changed for the first version.

## 5. Data To Project Into Memgraph

Minimum node to project:

```text
Observation node
```

Properties:

- `id = observation:<new_id>`;
- `source_table = observations`;
- `source_id = <new_id>`;
- `observed_at`;
- `species_id`;
- `biome_id`;
- `has_video`;
- `video_description`;
- `note` or a safe excerpt;
- `pipeline_id`;
- `chronicle_id`;
- `promoted_to_chronicle`;
- `owner_domain = Research/Content`;
- `canonicality = canonical_source_row`;
- `publicness = internal_source_context`;
- `review_status = source_observation_written_review_links_separate`;
- `claim_status = observed_event_only`;
- `writeback = none`.

Minimum relationships to project when canonical source rows exist:

- observation -> species: `OBSERVED_SPECIES` or existing established relationship name if App standardizes one;
- observation -> biome: `OBSERVED_IN`;
- observation -> story thread only from existing `observation_thread_links`, never from suggestions;
- observation -> open loop only from existing `observation_loop_links`, never from suggestions;
- story beat -> observation only from existing story beat observation link tables, never from suggestions;
- review/blocked-public guardrail relationships where generated by approved projection rules.

Do not project suggested story/open-loop/media links as approved relationships.

Suggestions from Phase 13 may be used as candidate context for the Content conversation, but they must remain suggestion-only unless a separate approved link write has happened in Supabase.

## 6. How To Verify The New Observation ID Appears In Memgraph

Required readback query:

```cypher
MATCH (o)
WHERE o.source_table = "observations"
  AND o.source_id = <new_observation_id>
RETURN o.id AS graph_id,
       o.source_table AS source_table,
       o.source_id AS source_id,
       o.observed_at AS observed_at,
       o.species_id AS species_id,
       o.biome_id AS biome_id,
       o.writeback AS writeback,
       o.publicness AS publicness,
       o.review_status AS review_status,
       o.claim_status AS claim_status;
```

Expected:

```text
exactly 1 row
writeback = none
publicness is not public_approved
claim_status does not approve a public/ecological conclusion
```

Relationship safety readback:

```cypher
MATCH (o)-[r]->(target)
WHERE o.source_table = "observations"
  AND o.source_id = <new_observation_id>
RETURN type(r) AS relationship_type,
       target.id AS target_id,
       target.source_table AS target_source_table,
       target.source_id AS target_source_id,
       r.source_table AS relationship_source_table,
       r.source_id AS relationship_source_id,
       r.writeback AS writeback,
       r.review_status AS review_status
ORDER BY relationship_type, target_id;
```

Expected:

- species/biome context appears when IDs exist;
- story/open-loop/beat relationships appear only if existing canonical link rows exist;
- no relationship has `writeback` other than `none`;
- no suggestion-only link appears as an approved graph relationship.

Post-refresh status:

```text
pass_post_observation_memgraph_refresh_ready
```

## 7. If Docker Or Memgraph Is Not Running

Memgraph refresh failure must not undo or obscure the approved observation insert.

Recommended behavior:

1. Content reports that the canonical observation write succeeded.
2. Content reports that the derived graph refresh could not run.
3. Content names the reason if available:
   - Docker unavailable;
   - Memgraph container not running;
   - mgconsole unavailable;
   - import failed;
   - readback did not find the new observation ID;
   - helper missing or design not implemented.
4. Content continues with Supabase-backed or file-backed follow-up:
   - the inserted observation readback;
   - existing Supabase relationship tables if readable;
   - Phase 13 suggestions;
   - Content audit/writeback packet.
5. Content must not pretend graph context was refreshed.

Recommended wording:

```text
The observation write succeeded and read back as observation <id>. I tried the derived Memgraph refresh, but Memgraph is not available right now, so I am continuing from the canonical Supabase readback and existing relationship tables. I will not claim the graph has been refreshed.
```

If refresh fails after partial graph import, the helper should report `refresh_status = failed_or_partial_not_trusted` and Content should use Supabase/readback context instead of partial graph context.

## 8. What Content Should Say After Successful Refresh

Recommended wording:

```text
Observation <id> was written and read back from Supabase. I refreshed the local derived Memgraph context, and the new observation now appears in the graph as `observation:<id>`.

This refresh did not approve any story links, open loop links, beats, chronicles, Planner tasks, media metadata, public output, or canonical records. It only made the approved observation available for relationship/context follow-up.

Now I can look at possible story thread, open loop, media, beat, and content-routing questions.
```

Then Content should ask follow-up questions in separate approval layers:

- "Do you want to review story thread candidates?"
- "Do you want to review whether this advances an open loop?"
- "Do you want to consider a story beat?"
- "Do you want to keep media as unlinked context for now?"
- "Is this content-shaped enough to route to short, mid, longform, or hold?"

## 9. What Content Should Say If Refresh Fails

Recommended wording:

```text
Observation <id> was written and read back from Supabase. I tried to refresh the local derived Memgraph context, but the refresh failed: <short reason>.

I will continue from the canonical Supabase readback and existing relationship tables instead. I will not treat graph context as current until the refresh succeeds.

Story links, open loop links, beats, chronicles, Planner tasks, media metadata, and public output are still separate approval layers.
```

If the refresh helper is not implemented yet:

```text
Observation <id> was written and read back from Supabase. The automatic post-observation Memgraph refresh helper has not been implemented yet, so graph context may be stale. I can still continue from the canonical observation readback and existing Supabase relationship tables.
```

## 10. Avoiding JSON/Markdown Audit Clutter

Do not create a new Markdown closeout in Company or Content for every graph refresh.

Recommended low-clutter pattern:

1. The Content writeback readback packet records one compact graph-refresh section:

```json
"post_observation_graph_refresh": {
  "attempted": true,
  "status": "pass_post_observation_memgraph_refresh_ready",
  "helper": "miniBIOTA_App tools/refresh-oli-ih-post-observation-memgraph.js",
  "observation_id": 253,
  "graph_node_id": "observation:253",
  "readback_path": "M:\\miniBIOTA\\miniBIOTA_App\\out\\operation_living_intelligence\\intelligent_harness\\post_observation_refresh\\latest_refresh_status.json"
}
```

2. App writes one compact machine-readable status file:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\post_observation_refresh\latest_refresh_status.json
```

3. App may also write a per-run JSON status only when needed for debugging:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\post_observation_refresh\runs\<timestamp>_observation_<id>.json
```

4. Markdown readbacks are optional and should not be generated by default.

5. Company gets a durable proposal/update only when policy changes, not for every routine refresh.

This keeps normal observation logging clean while preserving enough readback to know whether the graph refresh succeeded.

## Normal Post-Write Flow

Recommended future flow:

```text
1. Content prepares local writeback proposal.
2. Josue explicitly approves the exact Supabase observation insert.
3. Content inserts one public.observations row.
4. Content reads back the inserted observation row.
5. Content records canonical writeback readback.
6. Content calls App post-observation Memgraph refresh helper with the new observation ID.
7. App helper reads canonical Supabase data and updates local derived Memgraph context.
8. App helper verifies observation:<id> appears in Memgraph.
9. Content reports refresh success/failure.
10. Content asks separate follow-up questions for story threads, open loops, beats, media, and content potential.
```

## Safety Requirements

The refresh helper must prove:

- it reads canonical Supabase rows but does not write Supabase;
- it writes only local derived App `out/` graph/runtime artifacts;
- it does not write Planner;
- it does not change App runtime behavior;
- it does not create story/open-loop/beat/chronicle/media/content/public records;
- it does not mark suggestions approved;
- it does not create public output;
- it does not create media metadata;
- it does not add pgvector;
- it preserves `writeback = none` on all graph nodes/relationships;
- it can fail gracefully without blocking the already-approved observation writeback.

## Stop Conditions

Stop refresh and report failure if:

- the inserted observation ID is missing;
- the inserted observation readback failed;
- the helper cannot confirm the observation row exists in Supabase;
- Docker is unavailable;
- Memgraph is unavailable;
- the graph import/merge fails;
- the readback query does not find exactly one observation node for the new ID;
- any graph node or relationship would imply approved public output;
- any graph relationship would represent a suggestion as an approved story/open-loop/beat/media link;
- any helper attempts to write Supabase, Planner, media metadata, public output, App runtime files, or canonical records.

## Implementation Readiness

This is not ready for direct implementation in Content alone.

It needs an App-side design/update first because the existing App Memgraph helpers are Lake Post-Seal core-seed helpers. They are useful precedent, but they do not yet provide a general post-observation refresh contract.

Recommended next gate:

```text
Prepare App-side design review for a post-observation derived Memgraph refresh helper.
```

After App design review, implementation can be approved in two narrow steps:

1. App implements the derived refresh helper and compact readback contract.
2. Content updates `log-daily-observation` / approved observation writeback flow to call that helper after successful insert readback.

No Supabase writes, Planner writes, App runtime changes, graph refresh implementation, story links, open loop links, beats, chronicles, media metadata, public output, or canonical writeback are approved by this proposal.

## Recommendation

Adopt automatic post-observation Memgraph refresh as the normal Content observation workflow target.

The refresh trigger should belong to Content because it happens after Content's approved observation writeback. The helper should belong to App because it owns graph/runtime tooling. The result should be invisible maintenance for Josue: after the canonical observation write succeeds, derived graph context refreshes automatically, and Content can continue the conversation from current context without asking Josue to run a separate graph step.
