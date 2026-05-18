---
id: operation_living_intelligence_ih_phase_15_content_agent_observation_parser_to_phase_13_input_proposal_2026-05-18
title: Operation Living Intelligence Intelligent Harness Phase 15 Content Agent Observation Parser To Phase 13 Input Proposal
domain: company_operations
last_updated: 2026-05-18
tags: [operation-living-intelligence, intelligent-harness, phase-15, content-agent, observation-parser, phase-13-input, local, no-write]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 15 Content Agent Observation Parser To Phase 13 Input Proposal

## Purpose

Phase 13 created a local Observation Input Runner. Phase 14 taught the Intelligence tab to display the latest Phase 13 suggestion run. The next missing workflow is turning raw observation notes into the structured JSON input that Phase 13 expects.

Goal:

```text
raw observation pasted to Content agent -> structured local JSON input -> explicit Phase 13 run -> Intelligence tab displays suggestions
```

This phase remains local, parser-only, no-write, and suggestion-prep only. It does not write Supabase, Planner, Memgraph, media metadata, public output, or canonical records.

## Recommendation

Start as a Content-side local helper or Content-agent workflow, not an App-side helper.

Reason:

- The input is a raw narrative note, which belongs closest to Content's drafting/parsing workflow.
- The parser is language and editorial interpretation, not App runtime behavior.
- It keeps the desktop app from becoming an execution surface too early.
- It lets Josue paste messy notes and get a structured file without creating canonical records.
- Phase 13 can remain the explicit App-side suggestion runner.

Recommended implementation shape:

```text
Content agent creates a local JSON file compatible with Phase 13.
Josue or Codex runs Phase 13 explicitly using that JSON file.
```

Do not trigger Phase 13 automatically in the first version.

## Input

Raw observation note pasted to the Content agent.

Example:

```text
May 16: I observed that the grasshopper is confirmed eating the legume vine in the lowland meadow. I captured video of it. There are now three grasshoppers in the biome, including a younger nymph that looks close to molting.
```

## Structured Output Schema

The parser should produce Phase 13-compatible JSON plus parser-specific hint fields:

```json
{
  "source_type": "content_agent_parsed_observation",
  "observation_title": "Grasshopper Legume Vine Followup",
  "observed_at": "2026-05-16",
  "text": "May 16: I observed that the grasshopper is confirmed eating the legume vine in the lowland meadow. I captured video of it. There are now three grasshoppers in the biome, including a younger nymph that looks close to molting.",
  "biome_hint": "lowland meadow",
  "species_hint": "grasshopper / unknown grasshopper group",
  "behavior_hint": "feeding on legume vine",
  "plant_or_object_hint": "legume vine",
  "media_note": "captured video",
  "media_file_or_path": null,
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
      "note": "Common name only; species identity unresolved."
    },
    {
      "field": "possible_open_loop_hint",
      "note": "Nymph and near-molting language suggests review need but does not prove reproduction."
    }
  ],
  "parser_notes": "Local parsed draft for Phase 13 suggestion generation only.",
  "writeback": "none"
}
```

## Required Fields

Required:

- `source_type`;
- `observation_title`;
- `observed_at`;
- `text`;
- `writeback: none`.

These are the minimum needed for Phase 13.

## Optional Fields

Optional but recommended:

- `biome_hint`;
- `species_hint`;
- `behavior_hint`;
- `plant_or_object_hint`;
- `media_note`;
- `media_file_or_path`;
- `possible_story_thread_hint`;
- `possible_open_loop_hint`;
- `claim_cautions`;
- `uncertainty`;
- `parser_notes`.

Phase 13 should tolerate these extra fields. It can use the core fields immediately and later consume richer hints as the runner improves.

## Output Location

Recommended output path in App fixtures, because Phase 13 reads App-side local input files:

```text
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_15_content_agent_observation_parser\lake_post_seal\parsed_inputs
```

Recommended filename:

```text
<YYYYMMDD>_<slugified_observation_title>.json
```

Example:

```text
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_15_content_agent_observation_parser\lake_post_seal\parsed_inputs\20260516_grasshopper_legume_vine_followup.json
```

The parser may also create a markdown readback beside the JSON:

```text
20260516_grasshopper_legume_vine_followup.md
```

The markdown readback is recommended because it gives Josue a quick human check before Phase 13 runs.

## JSON Only Or Markdown Too

Recommendation:

```text
Create both JSON and markdown readback.
```

JSON is the machine input for Phase 13. Markdown is the human review surface before suggestion generation.

The markdown should show:

- raw input;
- parsed title/date;
- hints;
- claim cautions;
- uncertainty;
- confirmation: `writeback: none`;
- next command to run Phase 13 manually.

## Date Handling

The parser must make date assumptions explicit.

Current operating date for this proposal is May 18, 2026.

Rules:

- If the note includes a full date, use it.
- If the note says `today`, resolve it to the current local date at parse time and add a date note.
- If the note says `yesterday`, resolve it to current local date minus one day and add a date note.
- If the note says month/day without year, use the current year unless that would create a future date; if it would be future, ask for confirmation or mark `date_uncertain`.
- If date cannot be confidently parsed, set `observed_at` to `null`, add `date_uncertain`, and stop before Phase 13 until corrected.

Example:

```json
"date_notes": {
  "raw_date_text": "May 16",
  "resolved_year": 2026,
  "resolution_basis": "Current year from parser date 2026-05-18",
  "date_uncertain": false
}
```

## Uncertainty Representation

Uncertainty should be first-class and field-specific.

Use:

```json
"uncertainty": [
  {
    "field": "species_hint",
    "note": "Common name only; exact species unresolved."
  }
]
```

Do not hide uncertainty inside prose only. Phase 13 and the Intelligence tab can later surface these as review hints.

## Overclaiming Prevention

The parser must distinguish observation text from claims.

Rules:

- Preserve the raw note exactly in `text`.
- Convert inferred connections into hints, not claims.
- Put risky statements into `claim_cautions`.
- Never set publicness to public.
- Never mark anything approved.
- Always set `writeback: none`.
- Use words like `possible`, `candidate`, `needs review`, and `uncertain` for inferred fields.

For the example note, the parser may infer:

- candidate grasshopper species/group;
- lowland meadow biome hint;
- plant grazing story hint;
- media note.

It must not infer:

- stable population;
- established population;
- reproduction confirmed;
- public-safe media proof.

## Connection To Phase 13

The parser output should be compatible with:

```text
node tools/run-oli-ih-phase13-observation-input-runner.js --input <parsed_json_path>
```

Phase 13 should remain the explicit next step.

Do not automatically run Phase 13 in this phase.

Reason:

- keeps parsing and suggestion generation as separate reviewable steps;
- prevents accidental generation loops;
- avoids App-triggered execution patterns;
- keeps the operator in control before suggestions are created.

## Proposed Files

Content-side or Company-side proposal only now.

Likely implementation files after approval:

```text
M:\miniBIOTA\miniBIOTA_Content\tools\parse-oli-observation-to-phase13-input.js
```

If Content repo does not yet have the right helper/tooling structure, a temporary App-side parser helper may be considered only with explicit approval:

```text
M:\miniBIOTA\miniBIOTA_App\tools\parse-oli-observation-to-phase13-input.js
```

Preferred output files per parsed observation:

```text
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_15_content_agent_observation_parser\lake_post_seal\parsed_inputs\<date>_<slug>.json
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_15_content_agent_observation_parser\lake_post_seal\parsed_inputs\<date>_<slug>.md
```

No App runtime files should be edited.

## Validation Checks

Parser validation should confirm:

- raw observation text is preserved;
- required fields are present;
- `observed_at` is ISO date or explicitly marked uncertain;
- date resolution notes are present when date was inferred;
- `writeback` is `none`;
- source type is parser-local;
- no public output is created;
- no Supabase write/query occurred;
- no Planner write occurred;
- no Memgraph write/query/import/reset occurred;
- no media metadata write occurred;
- no canonical writeback occurred;
- claim cautions exist when population, reproduction, establishment, stability, or public-proof language appears;
- uncertainty is recorded for inferred species, biome, story, or open-loop hints;
- the output JSON can be passed to Phase 13.

Recommended status:

```text
pass_phase15_content_agent_observation_parser_ready
```

## Stop Conditions

Stop implementation if:

- date cannot be parsed confidently and user has not approved the date;
- parser would need Supabase lookup;
- parser would need Planner write;
- parser would need media metadata write;
- parser would need Memgraph;
- parser would publish or format public output;
- parser would automatically run Phase 13;
- parser would mark suggestions approved.

## Recommendation

Implement Phase 15 as a Content-side local parser that writes a Phase 13-compatible JSON file plus a markdown readback. Phase 13 remains a separate explicit command.

This gives Josue the missing day-to-day handoff:

```text
paste raw note -> get structured local input -> run Phase 13 -> see latest suggestions in Intelligence tab
```

It keeps the whole loop local, no-write, parser-only, and human-reviewed.
