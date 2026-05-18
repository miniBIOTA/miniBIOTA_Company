---
id: operation_living_intelligence_ih_phase_17_content_raw_observation_intake_command_proposal_2026-05-18
title: Operation Living Intelligence Intelligent Harness Phase 17 Content Raw Observation Intake Command Proposal
domain: company_operations
last_updated: 2026-05-18
tags: [operation-living-intelligence, intelligent-harness, phase-17, content-agent, raw-observation-intake, parser-only, local, no-write]
status: proposal_ready_for_review_not_approved_for_implementation
---
# Operation Living Intelligence Intelligent Harness Phase 17 Content Raw Observation Intake Command Proposal

## Purpose

Phase 15 proved that a Content-owned parser draft can preserve Josue's raw wording, extract reviewable hints, and keep every write/public/canonical status blocked. Phase 16 proved that an approved Content audit draft can be bridged into a Phase 13 App input. Phase 13 then generated suggestions that the Intelligence tab can display.

The missing usability step is the very first action:

```text
raw pasted observation -> Content audit draft JSON + Markdown
```

Phase 17 should make that step simple enough for day-to-day use without requiring manual JSON editing.

## Recommendation

Use both:

- a Content-owned CLI helper as the actual parser;
- a small Markdown intake template as an optional paste aid.

The CLI helper is the recommended first implementation because it can validate fields, split multiple events, name files consistently, and produce JSON plus Markdown readback. The Markdown template is optional operator ergonomics: it gives Josue a plain place to paste text and add session context, but it should not become a second source of truth.

## Proposed Workflow

```text
Josue pastes raw observation text
-> Content CLI parser receives raw text plus optional context
-> parser preserves raw_text exactly
-> parser creates one Content audit draft per discrete observation event
-> parser creates matching Markdown readback
-> App bridge remains manual
-> Phase 13 remains manual
```

The first version remains Content-owned, local, parser-only, and no-write.

## How To Provide Raw Observation Text

Recommended input methods for the CLI:

1. `--text "raw observation text"` for quick one-off use.
2. `--input path\to\raw_observation.txt` for longer notes.
3. Optional `--session-date YYYY-MM-DD`.
4. Optional `--source-context "short context"`.
5. Optional `--media-note "short media note"`.

Example:

```powershell
node tools/parse-oli-raw-observation-intake.js `
  --text "May 16: I observed that the grasshopper is confirmed eating the legume vine in the lowland meadow. I captured video of it. There are now three grasshoppers in the biome, including a younger nymph that looks close to molting." `
  --session-date 2026-05-18 `
  --source-context "Content agent pasted observation" `
  --media-note "captured video"
```

If both `--text` and `--input` are provided, the helper should stop and ask for one source only.

## Proposed Helper And Template Files

Create in a later implementation approval:

```text
M:\miniBIOTA\miniBIOTA_Content\tools\parse-oli-raw-observation-intake.js
```

Optional template:

```text
M:\miniBIOTA\miniBIOTA_Content\audits\observation_intake\raw_observation_intake_template.md
```

The template should be optional. It should not be required for CLI use.

## Output Location

Write Content audit drafts to:

```text
M:\miniBIOTA\miniBIOTA_Content\audits\observation_intake\
```

Each parsed observation should create:

```text
YYYY-MM-DD_<slug>.json
YYYY-MM-DD_<slug>.md
```

The `YYYY-MM-DD` prefix should use `observed_at_candidate` when present. If no date candidate can be resolved, use the session date plus a clear slug, and set `date_review_required: true`.

## File Naming

Naming rule:

```text
<observed_at_candidate_or_session_date>_<observation_title_slug>.json
<observed_at_candidate_or_session_date>_<observation_title_slug>.md
```

If the file exists, do not overwrite it. Add a numeric suffix:

```text
2026-05-16_grasshopper_legume_vine_followup_02.json
```

## Multiple Observations In One Paste

The helper should detect obvious multiple discrete events and produce one draft per event.

Split signals include:

- separate dates;
- separate organism/biome events;
- separate media/capture notes tied to different events;
- list-style entries;
- phrases such as "also", "later", "another observation", or separate timestamp lines.

If splitting is ambiguous, the helper should:

- create a single draft;
- set `split_review_required: true`;
- include a `split_note`;
- avoid silently inventing multiple observations.

Each generated draft must preserve the full original pasted text in `raw_text`, and may include `raw_text_event_excerpt` for the specific event.

## Required Schema

Every JSON draft should include:

```json
{
  "source_type": "content_agent_raw_observation_intake",
  "parser_status": "pass_phase17_content_raw_observation_intake_draft_ready",
  "raw_text": "",
  "text": "",
  "observation_title": "",
  "observed_at_candidate": null,
  "observed_at_raw_phrase": null,
  "date_resolution_note": "",
  "date_review_required": true,
  "biome_hint": null,
  "species_hint": null,
  "behavior_hint": null,
  "plant_or_object_hint": null,
  "media_note": null,
  "possible_story_thread_hint": null,
  "possible_open_loop_hint": null,
  "claim_cautions": [],
  "uncertainty": [],
  "duplicate_check_required": true,
  "routing_review_required": true,
  "research_review_required": false,
  "supabase_write_status": "not_approved",
  "planner_write_status": "not_approved",
  "canonical_write_status": "not_approved",
  "public_use_status": "blocked",
  "app_fixture_output_status": "deferred",
  "phase13_trigger_status": "not_triggered"
}
```

Optional fields:

- `source_context`;
- `session_date`;
- `media_file_or_path`;
- `raw_text_event_excerpt`;
- `split_review_required`;
- `split_note`;
- `generated_at`;
- `generator`;
- `helper_version`.

## Date Policy

Use the provided `--session-date` when present. If omitted, default to the current session date and record that default in `date_resolution_note`.

For this session:

- `today = 2026-05-18`;
- `yesterday = 2026-05-17`.

Rules:

- `today`: resolve to the session date, preserve `observed_at_raw_phrase: today`, and set `date_review_required: false` unless the note itself is ambiguous.
- `yesterday`: resolve to session date minus one day, preserve `observed_at_raw_phrase: yesterday`, and set `date_review_required: false` unless the note itself is ambiguous.
- Month/day without year: may produce a candidate year from session context, but must set `date_review_required: true` unless surrounding context clearly establishes the year.
- No parseable date: set `observed_at_candidate: null`, preserve raw phrase if possible, and set `date_review_required: true`.

Always store the candidate, raw phrase, and date note.

## Overclaiming Controls

The parser must treat every extracted relationship as a hint, not a canonical link.

It must not infer or fill:

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

It must add claim cautions when text could imply:

- stable population;
- established population;
- reproduction;
- recruitment;
- self-sustaining system;
- public proof from unreviewed media;
- causal ecological conclusions.

It must set `research_review_required: true` when ecological, population, reproduction, establishment, species identity, or cause/effect claims are involved.

## Preserving Josue's Original Wording

`raw_text` must be byte-for-byte equivalent to the text provided by Josue, except for shell/terminal transport limitations outside the helper's control.

The helper may create a cleaned `text` field for downstream readability, but it must not replace `raw_text`.

The Markdown readback should show the raw text first, before parsed hints.

## Markdown Readback

For each JSON draft, create a matching `.md` readback with:

- raw text;
- parsed observation title;
- date candidate and date review status;
- extracted hints;
- claim cautions;
- uncertainty;
- split review note if applicable;
- duplicate/routing/research review flags;
- all blocked write/public/canonical statuses;
- explicit statement that this is a Content review artifact, not a canonical observation record.

## Bridge And Phase 13

Do not automatically call the App bridge.

Do not automatically call Phase 13.

Recommendation:

```text
Bridge and Phase 13 remain manual in Phase 17.
```

Reason:

- Josue should be able to inspect the Content audit draft first;
- split/date/research uncertainty should be visible before App fixture conversion;
- the no-write chain stays stepwise and auditable;
- no App runtime or automation behavior is introduced.

Manual next steps after a clean draft:

```text
node tools/bridge-oli-content-audit-to-phase13-input.js --input <content_audit_json>
node tools/run-oli-ih-phase13-observation-input-runner.js --input <bridged_app_input_json>
```

## Validation Checks

Implementation should confirm:

- raw observation input exists;
- exactly one input source was provided (`--text` or `--input`);
- `raw_text` is preserved exactly;
- required schema fields are present;
- one draft is produced per clearly detected discrete event;
- ambiguous multi-event notes set `split_review_required: true`;
- output paths are inside `M:\miniBIOTA\miniBIOTA_Content\audits\observation_intake\`;
- output files do not overwrite existing drafts;
- JSON and Markdown are both created;
- date candidate, raw phrase, and review status follow the date policy;
- uncertainty is present for inferred hints;
- claim cautions are present when population, establishment, reproduction, media-proof, or causal claims appear;
- duplicate, routing, and Research review flags are set correctly;
- Supabase/Planner/canonical statuses are `not_approved`;
- public use is `blocked`;
- App fixture output remains `deferred`;
- Phase 13 trigger status remains `not_triggered`;
- no App bridge was run;
- no Phase 13 runner was run;
- no Supabase, Planner, Memgraph, media metadata, public output, or canonical systems changed.

## Stop Conditions

Stop implementation or parser execution if:

- writing would occur outside the Content audit intake folder;
- the helper would overwrite an existing audit draft without explicit approval;
- parsing requires a Supabase lookup;
- parsing requires Planner, Memgraph, App runtime, pgvector, or media metadata access;
- the helper would assign canonical IDs;
- the helper would approve public use;
- the helper would trigger App bridge or Phase 13 automatically;
- the helper cannot preserve raw wording;
- multiple observations are detected but cannot be safely split or flagged.

## Blocked Work

Phase 17 remains blocked from:

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
- App bridge auto-trigger;
- Phase 13 auto-trigger.

## Recommended Implementation Gate

Next gate:

```text
Approve Phase 17 Content Raw Observation Intake Command implementation.
```

Implementation should create only the Content helper and optional template, then run a first parser test from pasted raw observation text.

The working chain would become:

```text
pasted raw observation
-> Content audit draft JSON + Markdown
-> manual App bridge
-> manual Phase 13 suggestions
-> Intelligence tab latest suggestion run
```

