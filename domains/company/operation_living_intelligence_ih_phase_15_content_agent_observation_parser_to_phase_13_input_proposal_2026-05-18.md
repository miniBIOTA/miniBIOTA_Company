---
id: operation_living_intelligence_ih_phase_15_content_agent_observation_parser_to_phase_13_input_proposal_2026-05-18
title: Operation Living Intelligence Intelligent Harness Phase 15 Content Agent Observation Parser To Phase 13 Input Proposal
domain: company_operations
last_updated: 2026-05-18
tags: [operation-living-intelligence, intelligent-harness, phase-15, content-agent, observation-parser, content-audit, phase-13-input, local, no-write]
status: revised_proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 15 Content Agent Observation Parser To Phase 13 Input Proposal

## Revision Note

This revision incorporates the Content agent's findings:

- raw observations are handled through `log-daily-observation`;
- Josue's wording must be preserved;
- one discrete event should be split per observation;
- uncertainty must be kept explicit;
- observation records are only proposed before approval.

Therefore, the first parser output should be Content-owned first, not written directly into App fixtures as the primary output.

## Revised Workflow

Approved first workflow:

```text
raw observation text
-> Content-owned parser draft
-> Content review artifact
-> later App bridge converts approved draft into Phase 13-compatible input
```

This keeps raw observation interpretation in Content until reviewed. App fixture output is deferred.

## Ownership

Revised ownership:

```text
Content owns the first parser draft and review artifact.
App owns Phase 13 runner inputs only after a later bridge converts an approved Content draft.
```

Reason:

- Content owns narrative observation intake and preservation of wording.
- Content can split one pasted note into discrete observation events before any App-side suggestion generation.
- Content can keep uncertainty and claim caution visible before anything becomes a Phase 13 input.
- App should not become the first landing place for unreviewed raw observations.

## Recommended Output Location

First parser drafts should be written to Content audits:

```text
M:\miniBIOTA\miniBIOTA_Content\audits\observation_intake\YYYY-MM-DD_<slug>.json
M:\miniBIOTA\miniBIOTA_Content\audits\observation_intake\YYYY-MM-DD_<slug>.md
```

Do not put first parser drafts in:

- `memory/`;
- `skills/`;
- `video_projects/`;
- raw media folders;
- App runtime;
- Supabase.

## Tracked Or Ignored

Recommendation:

```text
Track Content observation intake audit drafts in git by default.
```

Reason:

- they are not canonical records;
- they are review artifacts;
- they preserve Josue's wording and parser uncertainty;
- they give the Content agent durable context for later review;
- they create a transparent provenance trail before App/Research/Supabase decisions.

Use ignored/local-only storage only when the note contains private, sensitive, or non-shareable content that should not enter repo history. That should be an explicit exception, not the default.

## Input

Raw observation text pasted to the Content agent.

Example:

```text
May 16: I observed that the grasshopper is confirmed eating the legume vine in the lowland meadow. I captured video of it. There are now three grasshoppers in the biome, including a younger nymph that looks close to molting.
```

## Revised Schema

The Content-owned parser draft should preserve:

```json
{
  "source_type": "content_agent_observation_parser_draft",
  "raw_text": "May 16: I observed that the grasshopper is confirmed eating the legume vine in the lowland meadow. I captured video of it. There are now three grasshoppers in the biome, including a younger nymph that looks close to molting.",
  "text": "May 16: I observed that the grasshopper is confirmed eating the legume vine in the lowland meadow. I captured video of it. There are now three grasshoppers in the biome, including a younger nymph that looks close to molting.",
  "observation_title": "Grasshopper Legume Vine Followup",
  "observed_at_candidate": "2026-05-16",
  "observed_at_raw_phrase": "May 16",
  "date_resolution_note": "Month/day phrase resolved against session context date 2026-05-18; year still requires review unless surrounding context confirms 2026.",
  "date_review_required": true,
  "biome_hint": "lowland meadow",
  "species_hint": "grasshopper / unknown grasshopper group",
  "behavior_hint": "feeding on legume vine",
  "plant_or_object_hint": "legume vine",
  "media_note": "captured video",
  "possible_story_thread_hint": "herbivory / plant grazing / meadow establishment",
  "possible_open_loop_hint": "grasshopper establishment and plant grazing pressure need review",
  "claim_cautions": [
    "do not claim stable population",
    "do not claim established population",
    "do not claim reproduction yet"
  ],
  "uncertainty": [
    {
      "field": "species_hint",
      "note": "Common name only; exact species unresolved."
    },
    {
      "field": "observed_at_candidate",
      "note": "Month/day without year requires review unless context confirms the year."
    }
  ],
  "duplicate_check_required": true,
  "routing_review_required": true,
  "research_review_required": true,
  "supabase_write_status": "not_approved",
  "planner_write_status": "not_approved",
  "canonical_write_status": "not_approved",
  "public_use_status": "blocked"
}
```

## Fields The Parser Must Not Fill

The parser should not infer or fill:

- `species_id`;
- `biome_id`;
- `system_id`;
- `observation_id`;
- `story_thread_id`;
- `story_beat_id`;
- `open_loop_id`;
- `calendar_id`;
- `pipeline_id`;
- `chronicle_id`;
- public claim approval;
- media metadata;
- Research confidence;
- canonical ecology conclusions.

If any of those become needed later, they require a separate reviewed bridge or writeback path.

## Date Policy

Use session date as context.

For this session:

- `today = 2026-05-18`;
- `yesterday = 2026-05-17`.

Rules:

- If the note says `today`, set `observed_at_candidate` to `2026-05-18`, preserve `observed_at_raw_phrase: today`, and add a date resolution note.
- If the note says `yesterday`, set `observed_at_candidate` to `2026-05-17`, preserve `observed_at_raw_phrase: yesterday`, and add a date resolution note.
- If the note uses month/day without year, store a resolved candidate using session context only when helpful, but set `date_review_required: true` unless context clearly establishes the year.
- If date cannot be parsed, set `observed_at_candidate: null`, preserve the raw phrase if present, and set `date_review_required: true`.

Always store both:

- the resolved candidate;
- the date note.

## Overclaiming Controls

The parser must:

- preserve `raw_text` exactly;
- treat every inferred connection as a hint;
- keep claim cautions explicit;
- mark public use as blocked;
- mark Supabase/Planner/canonical writes as not approved;
- require Research review for ecological or population claims;
- require duplicate and routing review before any bridge.

The parser must not:

- convert "three grasshoppers" into a stable population claim;
- convert "younger nymph" into reproduction confirmation;
- treat captured media as public proof;
- assign IDs;
- create canonical rows;
- create Planner tasks;
- publish anything.

## Markdown Readback

Create a matching `.md` beside the JSON.

The markdown should show:

- raw text;
- parsed observation title;
- date candidate and date review status;
- extracted hints;
- claim cautions;
- uncertainty;
- duplicate/routing/research review flags;
- all write/public statuses;
- explicit next step: Content review first, then later App bridge if approved.

## App Fixture Output Deferred

Do not write first parser drafts directly to App fixtures.

Deferred App bridge target after Content review:

```text
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\inputs
```

The later bridge should only read Content audit drafts that are explicitly approved for conversion. It should convert the Content-owned draft into Phase 13-compatible input fields such as:

- `source_type`;
- `observation_title`;
- `observed_at`;
- `text`;
- `biome_hint`;
- `species_hint`;
- `media_note`;
- `media_file_or_path`;
- `writeback: none`.

## Should Phase 15 Also Create An App Bridge Proposal?

Recommendation:

```text
No. Phase 15 should revise and implement the Content parser first. The App bridge should be a separate Phase 16 proposal after one or more Content audit drafts exist.
```

Reason:

- it keeps raw observation parsing separate from App fixture conversion;
- it avoids prematurely normalizing unreviewed Content drafts;
- it preserves the review step between "what Josue said" and "what the App auto-linker consumes";
- it prevents the App side from becoming a shadow canonical intake system.

## Later App Bridge Read Source

A later App bridge should read from:

```text
M:\miniBIOTA\miniBIOTA_Content\audits\observation_intake\*.json
```

Only drafts with an explicit future approval marker should be eligible, for example:

```json
"content_review_status": "approved_for_phase13_bridge"
```

Do not add that approval marker automatically in Phase 15.

## Exact Files For Phase 15 Implementation

Likely files to create in a future implementation approval:

```text
M:\miniBIOTA\miniBIOTA_Content\tools\parse-oli-observation-to-content-audit.js
M:\miniBIOTA\miniBIOTA_Content\audits\observation_intake\<YYYY-MM-DD>_<slug>.json
M:\miniBIOTA\miniBIOTA_Content\audits\observation_intake\<YYYY-MM-DD>_<slug>.md
```

Possible Content documentation/readme if the repo already uses audit readmes:

```text
M:\miniBIOTA\miniBIOTA_Content\audits\observation_intake\README.md
```

No App runtime files should be edited in Phase 15.

## Blocked Work

Phase 15 remains blocked from:

- Supabase writes;
- Supabase queries;
- Planner writes;
- App runtime changes;
- Memgraph writes;
- Memgraph query/import/reset behavior;
- pgvector;
- public output;
- media metadata writes;
- canonical writeback;
- active approve/reject/correct actions;
- App fixture output as the primary parser output;
- automatic Phase 13 execution;
- ID assignment for species, biome, systems, observations, stories, loops, calendars, pipelines, chronicles, or media.

## Validation Checks

Parser validation should confirm:

- raw text is preserved exactly;
- one discrete event is represented per parser draft;
- required revised schema fields are present;
- no prohibited ID fields are present;
- date candidate and raw phrase are preserved;
- date review flag follows the date policy;
- uncertainty exists for inferred species/story/open-loop fields;
- claim cautions exist for stability, population, establishment, reproduction, and public-proof risks;
- duplicate, routing, and Research review flags are present;
- Supabase, Planner, canonical, and public statuses remain not approved or blocked;
- no App fixture is written;
- no Phase 13 runner is triggered.

Recommended parser status:

```text
pass_phase15_content_observation_parser_audit_draft_ready
```

## Stop Conditions

Stop implementation if:

- the parser would need a Supabase lookup;
- the parser would write to Planner;
- the parser would modify App runtime;
- the parser would write directly to App fixtures as primary output;
- the parser would assign canonical IDs;
- the parser would mark Research confidence;
- the parser would approve public use;
- the parser would create media metadata;
- the parser would automatically run Phase 13;
- the parser would hide date uncertainty.

## Recommendation

Revise Phase 15 to implement only the Content-owned observation parser and Content audit readback.

Recommended next implementation gate:

```text
Approve Phase 15 Content-owned observation parser implementation.
```

After that passes, prepare Phase 16:

```text
Content Audit To Phase 13 App Bridge
```

That later bridge can convert an explicitly approved Content audit draft into a Phase 13-compatible App input file. Until then, App fixture output is deferred.
