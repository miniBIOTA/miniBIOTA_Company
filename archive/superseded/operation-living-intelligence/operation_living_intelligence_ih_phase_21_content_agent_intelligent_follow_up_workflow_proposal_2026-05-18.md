---
id: operation_living_intelligence_ih_phase_21_content_agent_intelligent_follow_up_workflow_proposal_2026-05-18
title: Operation Living Intelligence Intelligent Harness Phase 21 Content Agent Intelligent Follow-Up Workflow Proposal
domain: company_operations
last_updated: 2026-05-18
tags: [operation-living-intelligence, intelligent-harness, phase-21, content-agent, observation-workflow, follow-up, no-write]
status: phase21_content_workflow_proposal_with_supporting_app_helper_improvement_approved
---
# Operation Living Intelligence Intelligent Harness Phase 21 Content Agent Intelligent Follow-Up Workflow Proposal

## Purpose

Phase 21 should make the Content agent the main conversational operator for raw observations.

The current workflow works technically, but still expects Josue to inspect the Intelligence tab and interpret suggestion sections manually. Phase 21 should move that interpretation into the Content agent's normal observation conversation.

Target outcome:

```text
Josue gives a raw observation
-> Content agent runs or requests the existing local intake pipeline
-> Content agent reads the harness outputs
-> Content agent explains the likely observation, links, cautions, and next approvals
-> Josue answers simple follow-up questions
-> Content agent prepares a writeback proposal only when the observation is ready
```

This is a proposal only. It does not approve implementation, Supabase writes, Planner writes, App runtime changes, Memgraph changes, pgvector, public output, media metadata writes, or canonical writeback.

## Current Working System

The proven chain is:

```text
raw observation
-> Content raw observation intake parser
-> Content audit draft JSON/Markdown
-> App bridge to Phase 13 input
-> Phase 13 auto-link suggestions
-> Intelligence tab latest suggestion display
-> Phase 19 local observation intake pipeline
-> Phase 20 approved observation writeback proposal
-> approval-gated Supabase observation writeback
```

Phase 20 has already proven the approved observation writeback path with Supabase observation `253`.

That proof wrote only one canonical observation row. It did not write story thread links, open loop links, story beats, chronicles, Planner tasks, media metadata, public output, content pipeline records, Memgraph updates, or pgvector state.

## Recommendation

Recommended Phase 21 shape:

```text
Content-owned conversational follow-up workflow that reads existing Phase 19 and Phase 13 outputs.
```

The Content agent should not replace the App bridge, Phase 13 runner, Intelligence tab, or Phase 20 writeback helper. It should become the conversational layer that reads their outputs and asks the right next questions.

## 2026-05-18 Approved Improvement Addendum

Josue approved two immediate improvements after reviewing the Planner-driven next step and the Creeping Beggarweed miss:

- make the current observation-to-story workflow the active first operational scope;
- keep Lake Post-Seal as a regression/test fixture instead of the main operator path;
- update the App Phase 13 suggestion runner so species hints are checked against canonical `public.species` with a read-only lookup before being treated as truly missing or only outside-graph.

The App helper improvement is still suggestion-only. It may read `public.species` to disambiguate a species hint, but it must not write Supabase, Planner, App runtime state, Memgraph, pgvector, media metadata, public output, story links, open loop links, beats, chronicles, or canonical records.

Operational example:

```text
If Josue says the species is Creeping Beggarweed, the harness should recognize canonical species_id 97 / Desmodium incanum as a canonical species row even if it is outside the bounded Lake Post-Seal graph.
```

That does not auto-approve the observation. It only lets Content ask the better follow-up question:

```text
I found Creeping Beggarweed as canonical species_id 97, but it is outside the current bounded graph. Can I use that ID in the observation writeback proposal?
```

## 1. Pipeline Ownership: Direct Call Or Request

Recommended first implementation:

```text
Content agent may request or call the existing Phase 19 pipeline through the Company-owned runner, but should not duplicate its logic.
```

Practical rule:

- If a Phase 19 readback already exists for the raw observation, Content should use it.
- If no readback exists, Content should ask Josue whether to run the local Phase 19 intake pipeline.
- If approved or already scoped in the current session, Content may call the Company Phase 19 runner.
- Content should not directly call App helper internals one by one unless the Company runner is unavailable.

Reason:

- Company owns cross-domain orchestration and stop gates.
- Content owns raw observation intake, wording preservation, follow-up conversation, and observation writeback proposal readiness.
- App owns bridge behavior, Phase 13 input, Phase 13 suggestions, and latest suggestion output contracts.

This preserves the existing ownership model while letting Josue experience the workflow through the Content agent.

## 2. Files The Content Agent Should Read

After the pipeline runs, the Content agent should read these files in order:

1. Phase 19 Company pipeline readback:

```text
M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_ih_phase_19_pipeline_readback_<timestamp>.json
M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_ih_phase_19_pipeline_readback_<timestamp>.md
```

2. Content audit draft:

```text
M:\miniBIOTA\miniBIOTA_Content\audits\observation_intake\<slug>.json
M:\miniBIOTA\miniBIOTA_Content\audits\observation_intake\<slug>.md
```

3. App bridge readback:

```text
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\inputs\<slug>.bridge_readback.json
M:\miniBIOTA\miniBIOTA_App\fixtures\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\inputs\<slug>.bridge_readback.md
```

4. Latest suggestion pointer:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\intelligent_harness\phase_13_observation_input_runner\lake_post_seal\latest_suggestion_run.json
```

5. Phase 13 run folder named by the pointer:

```text
<latest_output_path>\auto_link_suggestions.json
<latest_output_path>\validation_report.json
<latest_output_path>\auto_link_manifest.json
<latest_output_path>\blocked_public_claim_warnings.json
<latest_output_path>\evidence_readback.json
<latest_output_path>\auto_link_suggestions.md
```

The JSON files are the machine-readable source. The Markdown files are useful for human audit/readback.

## 3. Which Suggestion Outputs To Read

Recommended:

```text
Read all three layers, with different authority.
```

Use them this way:

| Artifact | Content agent use | Authority |
|---|---|---|
| Phase 19 readback | Confirms which exact parser, bridge, and Phase 13 outputs belong together | Run manifest and safety audit |
| `latest_suggestion_run.json` | Finds the latest run folder and confirms no-write safety flags | Pointer only |
| Phase 13 run outputs | Provides actual suggestions, confidence, reasons, cautions, and blocked-public warnings | Suggestion evidence |

Do not rely on `latest_suggestion_run.json` alone. It is a pointer and summary, not the full review packet.

Do not rely on the Intelligence tab as the machine source. The tab is a display surface.

## 4. What The Content Agent Should Summarize

The Content agent should summarize the harness output in plain language:

- likely canonical observation count;
- cleaned observation meaning;
- observed date and any date uncertainty;
- suggested primary species and whether an ID is known, missing, ambiguous, or outside the current graph;
- suggested primary biome and whether an ID is known, missing, ambiguous, or outside the current graph;
- story thread candidates and whether they should be linked only after the observation exists;
- open loop candidates and whether they are only advanced, not resolved;
- media candidate status and whether media metadata remains unwritten;
- claim cautions and blocked public claims;
- duplicate-check need before canonical writeback;
- whether the observation is ready for a Phase 20 writeback proposal;
- all separate approval layers that remain excluded.

The summary should sound like a useful Content operator, not a raw harness dump.

Example style:

```text
I found one likely canonical observation.

I think the primary species is Gulf marsh crab and the biome is Marine Shore. Can I use species_id 174 and biome_id 5 in a writeback proposal?

This may connect to the coastal substrate turnover story thread, but I would keep that as a separate link after the observation is written.

This may advance the open question about whether crab excavation stabilizes or destabilizes the coastal edge, but I would not mark that resolved.

The erosion/stabilization claim should stay cautious. The observation supports excavation and sediment turnover, not a long-term ecological conclusion.

Do you approve preparing the Supabase observation writeback proposal?
```

## 5. Follow-Up Question Sequence

Phase 21 should replace manual Intelligence-tab interpretation with this sequence.

### Step 1: Observation Confirmation

Ask:

```text
I found one likely canonical observation: <short event summary>. Is that the observation you want me to process?
```

If multiple discrete events are detected, ask Josue to split or choose before continuing.

### Step 2: Date Confirmation

Ask only if needed:

```text
I read the observation date as <date>. Is that correct?
```

If the parser says date review is not required, include the date in the summary but do not force an extra question unless the writeback proposal needs confirmation.

### Step 3: Species And Biome Confirmation

Ask:

```text
I think the primary species is <species> and the biome is <biome>. Can I use those IDs for the writeback proposal?
```

If IDs are missing, ambiguous, or outside the current graph, ask:

```text
The harness suggested <label>, but it did not confirm a canonical ID. Should I keep this as review-required, or should we do a read-only ID check before preparing a writeback proposal?
```

### Step 4: Claim Caution

Ask or state:

```text
The observed event is <event>. I would keep <claim> cautious because the harness flagged it as review-required or blocked for public use.
```

Ask for wording approval only when preparing the Phase 20 writeback proposal.

### Step 5: Media Status

Ask:

```text
You mentioned footage/media. Should I include only a text video description in the observation proposal and leave media metadata/linking separate?
```

Default should be yes: text description only, no media metadata write.

### Step 6: Story Thread Candidate

Ask:

```text
This may connect to <story thread candidate>. Do you want to consider linking it after the observation is written?
```

Do not link the thread during the observation writeback proposal.

### Step 7: Open Loop Candidate

Ask:

```text
This may advance <open loop candidate>, but I would not mark it resolved. Should we keep that as a later open-loop review step?
```

Do not resolve or advance loop state during observation writeback.

### Step 8: Writeback Proposal Approval

Ask:

```text
Do you approve preparing the Supabase observation writeback proposal?
```

This question approves only a local proposal packet, not the Supabase insert, unless Josue explicitly approves the exact live write later.

### Step 9: Separate Layers Reminder

State:

```text
Story links, open loop links, story beats, chronicles, Planner tasks, media metadata, public output, and graph refresh stay separate.
```

## 6. Species/Biome ID Confirmation Rule

The Content agent should ask for species/biome ID confirmation when any of these are true:

- preparing a Phase 20 writeback proposal;
- `suggested_target_id` is null;
- the suggestion is marked outside the current graph;
- multiple candidate IDs appear plausible;
- the Content audit says routing review is required;
- the species or biome is inferred from text rather than explicitly named;
- the canonical row has not been read or confirmed recently enough for the writeback packet;
- the observation spans multiple species or biomes.

When the Phase 13 output includes a read-only canonical species match, Content should distinguish these cases:

- `review_required`: species is represented in the current harness graph;
- `canonical_species_found_outside_current_graph_requires_review`: species exists in canonical Supabase but is outside the bounded graph;
- `candidate_outside_current_graph_requires_review`: no canonical species match was found, or the lookup was unavailable.

The Content agent may summarize high-confidence species/biome suggestions without ID confirmation when the conversation is still exploratory and no writeback proposal is being prepared.

Do not guess IDs.

## 7. Ambiguity And Outside-Graph Handling

Outside-graph suggestions should be treated as:

```text
real conversational leads, not canonical records.
```

Rules:

- Label outside-graph species/biome/story/media suggestions plainly.
- Do not convert an outside-graph suggestion into a canonical ID unless a current read-only canonical lookup actually returned that row.
- Ask whether Josue wants a read-only ID/source check when no canonical match appears in the harness output.
- If a canonical match exists but is outside the bounded graph, ask whether to use that ID in the writeback proposal and keep graph/story linking separate.
- If no canonical ID exists, route to Research/App schema ownership before any observation write.
- If the observation can still be logged without a species or biome, follow the `log-daily-observation` rules for null or review-required routing.
- Keep the claim and publicness status blocked or review-required until reviewed.

Example:

```text
The harness recognized "grasshopper" as important, but it is outside the current Lake Post-Seal graph and did not provide a canonical species ID. I can keep it review-required, or we can do a read-only species check before preparing the observation proposal.
```

## 8. Overclaiming Controls

The Content agent should prevent overclaiming by carrying these fields into the conversation:

- `claim_cautions` from the Content audit draft;
- `blocked_claims` from `auto_link_suggestions.json`;
- `blocked_public_claim_warnings.json`;
- `review_status`;
- `publicness`;
- `claim_status`;
- owner domain for each caution.

Plain-language rule:

```text
Only the observed event can become the observation note. Interpretation stays cautious. Public claims stay blocked until reviewed.
```

The Content agent should avoid wording that turns possible effects into conclusions.

Examples:

- Say "may indicate", "possible", "needs follow-up", or "not enough to conclude".
- Do not say "proved", "confirmed", "stabilized", "destabilized", "self-sustaining", "resolved", or "public proof" unless the source record explicitly supports that status.

## 9. Preserve Log-Daily-Observation Writeback Rules

Phase 21 should extend the Content `log-daily-observation` playbook, not bypass it.

Required preserved rules:

- Capture Josue's wording as closely as possible.
- Separate one observation per discrete event.
- Confirm species, biome, or system routing before writing when ambiguous.
- Log the observation only after approval.
- Do not create `content_pipeline` records for unpublished events.
- Keep `observations.pipeline_id = null`.
- Use one staged no-write proposal packet before any insert.
- Run live read-only ID confirmation and duplicate check before insert.
- Insert only after explicit approval of the exact canonical observation record.
- Read back inserted rows after approved write.
- Keep story thread links, open loop links, story beats, chronicles, Planner tasks, media metadata, content pipeline records, and public output separate.

Phase 21 should add a conversational harness-reading step before the existing writeback proposal pattern.

## 10. Files Or Skills Proposed For Update

Initial supporting implementation was approved on 2026-05-18 for the App Phase 13 helper only.

Updated App helper:

```text
M:\miniBIOTA\miniBIOTA_App\tools\run-oli-ih-phase13-observation-input-runner.js
```

Change:

- adds a read-only `public.species` lookup when `species_hint` is present;
- records lookup status, query terms, rows read, match count, and errors in validation output;
- labels canonical matches outside the bounded graph as `canonical_species_found_outside_current_graph_requires_review`;
- keeps all outputs suggestion-only with `writeback = none`.

No Content skill implementation has been made yet.

Likely future Content updates:

```text
M:\miniBIOTA\miniBIOTA_Content\skills\log-daily-observation\SKILL.md
```

Add a Phase 21 subsection:

```text
Intelligent Harness Follow-Up Mode
```

Likely future Content helper, if implementation proves useful:

```text
M:\miniBIOTA\miniBIOTA_Content\tools\summarize-oli-ih-observation-followup.js
```

Purpose:

- read a Phase 19 readback or `latest_suggestion_run.json`;
- load the matching Phase 13 run files;
- produce a local no-write follow-up summary JSON/Markdown;
- output suggested follow-up questions;
- validate no writeback/public/media/Planner/App/Memgraph actions occurred.

Possible output:

```text
M:\miniBIOTA\miniBIOTA_Content\audits\observation_followup\<slug>.followup_summary.json
M:\miniBIOTA\miniBIOTA_Content\audits\observation_followup\<slug>.followup_summary.md
```

Optional later Company update:

```text
M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_ih_observation_workflow_closeout_2026-05-18.md
```

Only update this after Phase 21 is approved and implemented.

App runtime should not change for this phase. The App helper change is a local CLI/output-contract improvement, not a UI/runtime change.

## 11. What Remains Blocked

Phase 21 remains blocked from:

- Supabase writes;
- Planner writes;
- App runtime changes;
- Memgraph reads/writes/import/reset changes;
- pgvector;
- public output;
- media metadata writes;
- story thread link writes;
- open loop link/status writes;
- story beat writes;
- chronicle writes;
- content pipeline writes;
- automatic canonical writeback;
- automatic approval from confidence scores;
- treating the Intelligence tab display as source of truth;
- treating outside-graph suggestions as canonical IDs;
- resolving open loops from raw observations;
- making public ecological claims from candidate suggestions.

## 12. Validation For Correct Harness Use

Implementation should prove:

- Content can accept raw observation text.
- Content can use an existing Phase 19 readback when supplied.
- Content can ask before running the Phase 19 pipeline when no readback exists.
- Content reads the Phase 19 readback and follows the exact output paths.
- Content reads `latest_suggestion_run.json` only as a pointer.
- Content reads the Phase 13 run files for actual suggestions and cautions.
- Content identifies the suggested species, biome, story thread, open loop, media, and claim cautions.
- Content distinguishes suggested links from approved links.
- Content identifies outside-graph suggestions and asks for review or ID checks.
- Content recognizes canonical species matches returned by the Phase 13 read-only lookup and asks for ID confirmation instead of saying the species is missing.
- Content carries blocked-public warnings into the conversational summary.
- Content does not state that suggestions are approved or written.
- Content asks the follow-up questions in the correct order.
- Content only prepares a local writeback proposal after readiness questions are answered.
- Content preserves the Phase 20 approval boundary.
- No Supabase, Planner, App runtime, Memgraph, pgvector, public, media metadata, story, loop, beat, chronicle, content pipeline, or canonical write occurs.

Recommended validation fixtures:

- one clear observation with known species and biome;
- one outside-graph observation with missing species ID;
- one ambiguous multi-event observation that must be split;
- one observation with a tempting causal/public claim that must remain cautious;
- one observation with media mentioned, proving media metadata stays separate.

Recommended validation status:

```text
pass_phase21_content_agent_intelligent_followup_ready
```

## Agent Ownership Map

| Step | Owner | Notes |
|---|---|---|
| Raw observation conversation | Content | Content is the main conversational operator. |
| Raw wording preservation | Content | Preserve Josue's wording in intake draft. |
| Phase 19 orchestration policy | Company | Company owns cross-domain sequencing and stop gates. |
| Phase 19 runner execution | Company or Content by approved handoff | Content may call/request the existing Company runner, not duplicate it. |
| Content audit draft | Content | Draft only, not canonical. |
| App bridge | App | Converts Content audit to Phase 13 input. |
| Phase 13 suggestion runner | App | Produces suggestions and latest pointer. |
| Intelligence tab | App | Read-only display surface, not required for Content interpretation. |
| Harness-output interpretation | Content | New Phase 21 conversational layer. |
| Species/biome ecological truth | Research | Content asks for confirmation when needed; Research owns ecological meaning. |
| Canonical observation proposal | Content | Uses `log-daily-observation` and Phase 20 pattern. |
| Canonical observation write | Content through approved write path | Separate explicit approval required. |
| Story thread links | Content | Separate approval layer. |
| Open loop status/links | Content | Separate approval layer; do not resolve from raw observation. |
| Media metadata/linking | Raw Footage/App/Content as scoped | Separate approval layer. |
| Public output | Content/Web/Brand/Research as scoped | Separate approval layer. |
| Approval gates and cross-domain policy | Company | Company keeps boundaries visible. |

## Recommended Implementation Sequence

If Josue approves implementation later:

1. Update Content `log-daily-observation` skill with Intelligent Harness Follow-Up Mode.
2. Add a small Content no-write summarizer helper or start with a manual checklist if helper scope feels premature.
3. Validate against the existing Phase 19 grasshopper readback.
4. Run one new real observation through Phase 19.
5. Have Content produce the follow-up summary and questions.
6. Prepare a Phase 20 writeback proposal only after Josue confirms the observation, date, species/biome routing, and cautious note direction.
7. Keep downstream linking and public/media layers separate.

## Recommendation

Keep Phase 21 as the next Content workflow implementation proposal, with the supporting App Phase 13 canonical species lookup improvement already approved and added.

The highest-value next build is not more dashboard surface area. It is making the Content agent read the harness output and talk Josue through the next decision naturally.

The Intelligence tab can remain useful as an audit surface, but Josue should not have to inspect it manually to know what the observation workflow needs next.
