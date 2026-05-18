---
title: Planner Task Relevance Consolidation
date: 2026-05-12
owner: Company Agent
status: working_consolidation
source: domain-agent Planner review replies
---
# Planner Task Relevance Consolidation - 2026-05-12

## Purpose

This working document captures domain-agent replies from the cross-domain Planner task relevance and grouping review.

Planner/Supabase remains the live source of truth for task/project records. This document is a consolidation surface for review, proposed cleanup batches, grouping decisions, handoffs, and later scheduling recommendations.

No Planner writes are implied by this document. Project changes, task edits, relinks, scheduling, completion, archive, or handoff writes require explicit approval before execution.

## Consolidation Status

| Domain | Reply captured | Consolidated | Approved writes identified |
|---|---:|---:|---:|
| Brand | Yes | Yes | Batches 1-6 plus unresolved cleanup applied |
| Content | Yes | Yes | Batches 1-6 plus unresolved cleanup applied |
| Research/Ecosystem | Yes | Yes | Batches 1-6 plus unresolved cleanup applied |
| Hardware/Engineering | Yes | Yes | Batches 1-6 plus unresolved cleanup applied |
| Growth/Sales | Yes | Yes | Batches 1-6 plus unresolved cleanup applied |
| Financials | Yes | Yes | Batches 1-6 plus unresolved cleanup applied |
| Web | Yes | Yes | Batches 1-6 plus unresolved cleanup applied |
| App | Yes | Yes | Batches 1-6 plus unresolved cleanup applied |

## Consolidated Approval Batches

This section converts the eight domain-agent replies into proposed approval batches. It is not an instruction to write Planner records. Each batch below still requires explicit approval before any live Planner/Supabase change.

### Batch 1 - Safe Status And Container Cleanup

Lowest-risk cleanup candidates. These mostly mark already-satisfied setup work complete, make parent tasks act like containers, or keep completed history closed.

Status: **Applied on 2026-05-12 with Josue approval.**

Applied writes:
- App: completed tasks `169`, `170`, and `171`, then marked/archived project `11` (`App Agent Project-Management Wiring`) as done.
- App: made task `279` a due-only Aquatic Club App support container by clearing its scheduled date/time/span and keeping `due_date = 2026-06-12`.
- App: made task `166` a subtask of `165` while preserving its scheduled smoke-check block.
- Hardware: completed task `161` as the already-verified Wyse Python/runtime environment check.
- Content, Financials, Web, Brand, Research/Ecosystem, and Growth: already-completed history remained closed.

Proposed changes:
- App: complete tasks `169`, `170`, and `171`; then mark/archive project `11` (`App Agent Project-Management Wiring`) if those completions are approved.
- App: make task `279` a due-only Aquatic Club App support container by clearing its scheduled date/time/span and keeping `due_date = 2026-06-12`.
- App: merge task `166` into `165`, or make `166` a subtask of `165`.
- Hardware: mark task `161` complete if the deployed Wyse Python/runtime environment is accepted as verified.
- Content: leave already-done tasks `142` and `248` closed.
- Financials: leave already-done tasks `7` and `10` closed.
- Web: keep completed Web tasks closed and keep archived project `42` archived.
- Brand/Research/Growth: leave completed/history tasks closed unless a domain owner later asks for archive cleanup.

Approval caution:
- Completion/archive writes are still live Planner writes.
- Financial completion candidates `96`, `97`, and `99` should wait for financial-table readback.
- Hardware task `132` should be split before any completion write so only the deployed read-only snapshot portion is treated as done.

### Batch 2 - Domain Ownership And Handoff Cleanup

Records that appear to be in the wrong domain, or need explicit handoff notes before scheduling.

Status: **Applied on 2026-05-12 with Josue approval.**

Applied writes:
- Moved Hardware projects `1`-`8` from legacy `domain_id=6` / Engineering to current `domain_id=10` / Hardware.
- Moved all tasks under Hardware projects `1`-`8` to `domain_id=10`, `domain=hardware`, and `domain_label=Hardware`.
- Added handoff/clarification notes to tasks `12`, `20`, `33`, `35`, `90`, `109`, `130`, `134`, `135`, `233`, `234`, and `345`.

Still pending:
- Actual task moves/splits into new target projects where the correct destination does not yet exist.
- Scheduling, completion, archive, project rename, and task-title cleanup batches.
- Any CRM/schema/app-runtime/public-site/live-control/financial-record implementation.

Proposed changes:
- Hardware: move projects `1`-`8` from legacy `domain_id=6` / Engineering to current `domain_id=10` / Hardware, if you approve the domain migration.
- Growth/App: move or hand off Growth tasks `134` and `135` to App-owned CRM/schema/runtime implementation, while keeping Growth-owned CRM meaning/model work under Growth.
- Financials/Growth: flag or rewrite Financials task `12` so Financials tracks closed revenue only; Growth/Sales owns sponsor/partner pipeline strategy.
- Web/Research/App: split or hand off Web tasks `233` and `234` because SQL packet preparation/apply crosses Research/App/Supabase write boundaries.
- Brand/Web/Growth: flag Brand tasks `20`, `33`, and platform-execution portions of `35` as Web/Growth handoffs.
- Hardware/App: split Hardware task `130`; App owns UI/runtime implementation, Hardware owns live-control safety boundary.
- Web/Growth: clarify Web tasks `90` and `109` before scheduling because Discord membership and course waitlist decisions are Growth/business decisions.
- App/Web/Growth: keep App task `345` in App but flag Web/Growth coordination for QR/contact capture.

Approval caution:
- Moving records between domains is a live Planner write and affects ownership.
- No CRM, sponsor, public, schema, SQL, app-runtime, or live-control implementation is approved by this cleanup.

### Batch 3 - Project Structure And Rename Cleanup

Project-level cleanup that would make later scheduling easier.

Status: **Recommended first items applied on 2026-05-12 with Josue approval.**

Applied writes:
- Brand: created project `72` (`Core Messaging & Public Identity System`).
- Brand: renamed project `55` to `Speaking Track & Event Outreach`.
- Brand: renamed project `51` to `Earned Media & Guest Outreach`, moved project `52` tasks into project `51`, aligned merged task group labels, and archived project `52`.
- Growth: renamed project `27` to `Sponsorship Research & Approved Outreach Pipeline`.
- Growth: renamed project `29` to `CRM Relationship Model & App Handoff`.
- Research/Ecosystem: set project `66` (`Aquatic Club Talk Research Claim Review`) to `active`.
- Hardware: renamed project `4` to `Biomes 2-5 Sensor/Controller Rewire & Reliability`.
- Hardware: renamed project `8` to `Long Horizon Closed-System Options`.
- Content: created project `73` (`[Working Title] The Seagrass Meadow Started Fighting Back`) as an active Content project with target `2026-05-14`.

Additional unresolved-question cleanup applied:
- Kept `Operation Living Web` as a distinct workstream name instead of renaming it under `Operation Living Atlas`.
- Created Hardware project `74` (`Future Sensor Expansion`) and moved tasks `48` and `80` into it.
- Renamed App project `10` to `Planner Sources, Content Workflow & Recurring Task Polish`.
- Renamed Web project `36` to `Public Site Core & About/Proof Page`.
- Renamed Web project `38` to `Community, Events & Revenue Conversion Surfaces`.
- Updated Content project `62` owner to `Content Agent` and target date to `2026-05-12`.

Recommended first:
- Brand: create `Core Messaging & Public Identity System`.
- Brand: rename project `55` to `Speaking Track & Event Outreach`.
- Brand: merge projects `51` and `52` into `Earned Media & Guest Outreach`.
- Growth: rename project `27` to `Sponsorship Research & Approved Outreach Pipeline`.
- Growth: rename project `29` to `CRM Relationship Model & App Handoff`.
- Research: set project `66` (`Aquatic Club Talk Research Claim Review`) to active.
- Hardware: rename project `4` to `Biomes 2-5 Sensor/Controller Rewire & Reliability`.
- Hardware: rename project `8` to `Long Horizon Closed-System Options`.
- Content: create a dedicated Content project for `content_calendar` id `3`: `[Working Title] The Seagrass Meadow Started Fighting Back`, target `2026-05-14`.

Resolved optional decisions:
- Research/Web: `Operation Living Web` remains distinct from `Operation Living Atlas`.
- Hardware: `Future Sensor Expansion` now exists for tasks `48` and `80`.
- Web: optional project renames for `36` and `38` were applied.
- Content: project `62` owner/target cleanup was applied.
- App: project `10` optional rename was applied.

### Batch 4 - Task Title, Split, And Clarification Cleanup

Tasks that are relevant but too broad, stale, misleading, commitment-prone, or not schedule-ready as written.

Status: **Applied on 2026-05-12 with Josue approval.**

Applied writes:
- Updated 54 existing task rows across Brand, Content, Research/Ecosystem, Hardware, Growth/Sales, Financials, Web, and App.
- Created 16 split follow-up tasks so draft/research/decision work is separated from send/apply/configure/platform/action work.
- Moved Brand tasks `32`, `199`, and `200` into project `72` (`Core Messaging & Public Identity System`).
- Moved Content task `128` into project `73` (`[Working Title] The Seagrass Meadow Started Fighting Back`).
- Relinked Content task `213` under task `140`.
- Moved Research task `221` into project `60` (`Operation Living Atlas Evidence Integrity`).
- Parented Web task `351` under task `127` and moved it into the About/supporter acknowledgment surface.
- Renamed/clarified Financials tasks `96`, `97`, and `99` as verification tasks instead of completing them, because finance-table readback remains required.
- Left all new split tasks unscheduled and approval-gated.

Still pending:
- None for this batch. Later domain-specific refinement can still occur as new facts arrive.

High-value cleanup:
- Brand: split or rename `18`, `22`, `24`, `29`, `30`, `31`, `34`, and `35`.
- Brand: move `32`, `199`, and `200` to the new core messaging project.
- Brand: move `25`, `26`, and `203` into the merged earned-media project.
- Content: rename `128`, `258`, and `261`; set tasks `270`-`308` group label to `Aquatic Club Talk`.
- Content: relink task `213` as a child of task `140`.
- Research: rename `14` and `15`; move `221` from project `44` to project `60`.
- Hardware: fix group labels for `38` and `41`; clarify `40`; rename/split `130`, `131`, and `132`; rename `83` and optionally `84` to less commitment-like wording.
- Growth: rename `85`, `86`, `102`, `103`, `104`, `105`, `106`, `183`, `184`, and `341`.
- Growth: split task `185` into separate course, sponsor, Kickstarter, and merch decision tasks.
- Financials: split task `11`; rename or complete `96`, `97`, and `99` after finance readback.
- Web: rename `88` and `127`; merge/parent `351` with `127`; clarify `90`, `109`, `233`, `234`, `353`, and `354`.
- App: rename `245`; optionally rename `168`; update `279` notes.

Approval caution:
- Splitting tasks may require creating new tasks and archiving/replacing old omnibus tasks.
- Use approval-gated wording for sponsor, outreach, public copy, support platforms, live-control, tax, and finance-sensitive tasks.

### Batch 5 - Schedule Now / Soon

Tasks that look ready for near-term scheduling or immediate review, subject to capacity and live-write approval.

Status: **Applied on 2026-05-12 with Josue approval to continue.**

Applied writes:
- Scheduled 54 task rows across Content, App, Financials, Hardware, Web, Growth/Sales, Research/Ecosystem, and Brand.
- Realigned the amphipod short production task `247` and upload subtasks `249`-`254` to 2026-05-12, with closeout tasks `255`-`261` on 2026-05-13.
- Scheduled seagrass longform title-lock task `128` on 2026-05-13.
- Scheduled near-term App smoke/safety checks `165`, `166`, `176`, and `178`.
- Scheduled Financials checks `8`, `9`, and `182`.
- Scheduled Hardware documentation/parts/standards tasks `42`, `43`, `147`, `148`, `151`, `152`, `155`, and `156`.
- Scheduled Web public-readiness tasks `88`, `94`, `127`, `263`, `264`, `351`, and `352`.
- Scheduled Growth asset drafts `85` and `86`.
- Scheduled Research tasks `129`, `192`, `221`, `222`, and `237`-`243`, with Operation Living Atlas/Web relationship work placed after the 2026-06-13 talk hard window.
- Scheduled Brand research/boundary tasks `21`, `23`, `25`, and `202`, with outreach research after the talk hard window.
- Added scheduling notes preserving separate approval gates for external sends, publishing, live-control, finance-sensitive writes, public claims, sponsor commitments, and roadmap commitments.

Still pending:
- None for this batch. Later domain-specific refinement can still occur as new facts arrive.

Keep already scheduled:
- Aquatic Club tasks across Brand, Content, Research, Hardware, Growth, Financials, Web, and App.
- Especially scheduled hard-window work through the 2026-06-13 talk and 2026-06-14 closeout.

Schedule soon candidates:
- Brand: `21`, `23`, `25`, `202` after Aquatic-specific copy work or as light research blocks.
- Content: amphipod short tasks `247`, `249`, `250`, and upload/closeout tasks `251`-`261`, aligned to the May 12 `content_calendar` row and dependencies.
- Content: seagrass longform task `128` after the new project is created.
- Research: keep Aquatic claim-safety schedule; schedule `129`, `192`, `221`, `222`, and `237`-`243` only after dependencies.
- Hardware: `147`, `148`, `151`, `152`, `155`, `156`, `42`, and `43`.
- Growth: `85` and `86` after Brand/Content/business inputs are ready enough for v1 drafts.
- Financials: `8`, `9`, and `182`.
- Web: `88`, `94`, `127`/`351`, `263`, `264`, and `352`.
- App: `165`/`166`, `176`, and `178`.

Approval caution:
- Scheduling is a live Planner write.
- Do not schedule external outreach, direct asks, publish/send actions, schema/control work, or finance-sensitive writes before the prerequisites and approvals are present.

### Batch 6 - Defer Or Target-Only

Work that should remain visible but should not be placed onto the daily calendar yet.

Status: **Applied on 2026-05-12 with Josue approval.**

Applied writes:
- Added target-only `due_date` values and deferral notes to 166 open tasks.
- Did not add any `scheduled_date` or `scheduled_time` values.
- Target groups:
  - `2026-06-26`: Research parent Living Web curation pass `236`.
  - `2026-06-30`: Financials setup/readback targets `6`, `12`, `96`-`101`.
  - `2026-07-03`: Brand newsletter, support, social, speaking, and approval-gated public/action follow-ups.
  - `2026-07-10`: Content Atlas/revenue-support targets, Web clarification/target-only work, Growth outreach/decision targets.
  - `2026-07-15`: Financial tax/accountant targets, Growth CRM/App handoff targets, App deferred support targets.
  - `2026-07-31`: Research long-running ID/outcome targets, Web after-packet targets, App write-gated targets, Hardware physical/dependency-heavy targets.
  - `2026-08-31`: Hardware future expansion, long-horizon options, telemetry/control/schema/history targets.
- Added notes clarifying that due dates are review targets, not daily calendar scheduling and not approval for external sends, applications, public changes, live-control, physical work, finance-sensitive writes, schema/app work, sponsor commitments, or roadmap commitments.

Target-only or later-review candidates:
- Brand: external posting, sending, applying, sponsor/support platform configuration, and speaking commitments.
- Content: Operation Living Atlas and revenue-support work after current production and Aquatic hard-window work.
- Research: long-running ID gaps and uncertainty/outcome tasks, unless needed for the talk or approved packets.
- Hardware: physical installs/rebuilds after design, parts, ecology input, and physical-work approval; long-horizon closed-system options.
- Growth: direct sponsor outreach/application tasks, revenue sequencing, and split campaign/course/merch decisions.
- Financials: broad tax/revenue-target tasks and finance setup completion candidates until readback.
- Web: `90`, `109`, `233`, and `234` until ownership and approval boundaries are clarified.
- App: live sighting save, storage upload/rollback, Living Atlas queue work, Living Web editor work, and setpoint/control UI ownership.

### Batch 7 - Report And Memory Follow-Up

These are docs/report implications, not Planner writes.

Status: **Company brief updated on 2026-05-12 after live Planner cleanup readback.**

Candidates:
- Growth Company report appeared stale versus live Planner count.
- App Company report appeared stale versus live Planner count.
- Hardware/Engineering label cleanup affected Company manager-facing routing after the legacy domain migration was approved.
- Financial verification tasks needed readback before completion.
- If the final scheduling strategy becomes a recurring Company operating rule, update Company memory after approval.

Applied follow-up:
- Updated active Company domain briefs for Brand, Content, Research/Ecosystem, Hardware, Growth/Sales, Financials, Web, and App with current Planner counts/status and 2026-05-12 cleanup notes.
- Marked Financials tasks `96` and `97` complete after readback verified account balance snapshots, expense transactions, and planned-purchase closeout links.
- Marked Financials task `99` complete after Josue confirmed April financials were entered and readback confirmed monthly close `id=1` is closed for `close_month = 2026-04-01` with April cash receipts entered.

Recommended sequence:
1. Batch 2 ownership cleanup was approved and applied on 2026-05-12.
2. Batch 3 recommended project structure cleanup was approved and applied on 2026-05-12.
3. Batch 4 task title/split/relink cleanup was approved and applied on 2026-05-12.
4. Batch 5 strategic scheduling was approved and applied on 2026-05-12.
5. Batch 6 defer/target-only cleanup was approved and applied on 2026-05-12.
6. Batch 1 completion/container cleanup was approved and applied on 2026-05-12.
7. Optional Batch 3 project decisions were resolved and applied on 2026-05-12.
8. Hardware duplicate sealing tasks `55`, `63`, `69`, and `74` were administratively closed as duplicates of `54`, `59`, `66`, and `71`; the canonical sealing tasks remain open and no physical work was marked complete.
9. Financials tasks `96`, `97`, and `99` were verified and completed.
10. Active Company domain briefs were refreshed with current Planner counts and cleanup state.
11. Remaining work is normal domain follow-through, not unresolved consolidation cleanup.

Second cleanup pass prep:
- Josue plans to prompt for a second cleanup pass after this session.
- Start that pass from live Planner/Supabase readback rather than this document alone.
- Recommended focus: verify whether scheduled May 12-14 production/readiness tasks moved as expected, review any tasks that became complete during execution, inspect remaining target-only tasks for stale due dates, and check whether new cross-domain blockers emerged after the first scheduling pass.
- Preserve the same gates: no external sends, public copy, physical hardware work, finance-sensitive writes, schema/app work, live-control, sponsor commitments, launch/legal commitments, or roadmap commitments without explicit approval.

Second cleanup pass readback - 2026-05-12:
- Live readback found 26 tasks scheduled from 2026-05-12 through 2026-05-14. They remain open, which is expected for same-day/near-window execution unless a domain has already completed them.
- Content calendar `13` (`Thousands of Amphipods Appeared Under the Algae`) is linked to work project `62`; its scheduled production/upload/closeout task ladder remains open.
- Content calendar `3` (`[Working Title] The Seagrass Meadow Started Fighting Back`) is still not linked to work project `73`, even though project `73` was created for it.
- Content calendar `12` (`The ghost shrimp larvae disappeared`) is planned for 2026-05-13 and has no linked work project. This is a future production-planning check, not an automatic project creation recommendation.
- Task `161` is done but still carries `due_date = 2026-08-31`; this is stale after the first cleanup pass.
- Archived projects `42` and `52` still have `status = planned`; project `11` is archived with `status = done`. Project archive behavior is supported by `archived_at`, but setting archived cleanup projects to `done` would make status reporting cleaner.
- Aquatic Club linked projects `67`, `68`, `69`, `70`, and `71` still have `status = planned` even though their program is active and their task ladders are scheduled toward the 2026-06-13 readiness window. Projects `63`, `64`, `65`, and `66` are already active.
- Target-only open task counts remain intentionally deferred: `2026-06-12` (1), `2026-06-26` (1), `2026-06-30` (5), `2026-07-03` (22), `2026-07-10` (30), `2026-07-15` (14), `2026-07-31` (61), and `2026-08-31` (25).

Second cleanup pass proposed Planner writes:
- Link `content_calendar.id = 3` to `work_projects.id = 73`.
- Clear stale `due_date` from completed task `161`.
- Set archived projects `42` and `52` to `status = done`, preserving `archived_at` and notes.
- Set Aquatic Club linked projects `67`, `68`, `69`, `70`, and `71` to `status = active`.
- Do not create a work project for content calendar `12` without a separate Content production-planning decision.
- Do not mark any 2026-05-12 through 2026-05-14 scheduled task complete without domain execution evidence or user confirmation.

## Brand Agent Reply

As of **May 12, 2026**, I reviewed live Brand Planner records under `domain_id = 4`: **9 projects** and **37 tasks/checklist items**. I made **no Planner writes**.

**Domain Summary**
Biggest issue: Brand has one very concrete, already scheduled Aquatic Club project, but several older projects are broad strategy buckets with tasks that imply execution before research, approval, or domain handoff.

Obvious issues:
- `51` Press and `52` Podcast likely belong in one earned-media/outreach grouping.
- `55` Speaking contains broader core messaging tasks that should be split into a core messaging project.
- Some tasks imply external action too early: sending pitches, posting weekly, signing up for talks, importing lists, configuring public/support platforms.
- `20`, `33`, and parts of `35` are Web/Growth/platform execution handoffs, not pure Brand implementation.
- Aquatic Club project `65` is the nearest hard readiness window and is already scheduled through **2026-06-05** ahead of **2026-06-13**.

**Project Review**

| ID | Project | Recommendation | Why | Supports |
|---:|---|---|---|---|
| 49 | Newsletter & Substack Foundation | Keep, possible rename | Relevant, but has Web/list/import dependencies and public-send approvals | Public readiness, infrastructure |
| 50 | Reddit & Organic Community Discovery | Keep | Research-first project is correctly scoped | Backlog, public readiness |
| 51 | Press & Science Media Outreach | Merge candidate | Overlaps with podcast and shared pitch packet | Public readiness, business planning |
| 52 | Podcast Guest Outreach | Merge into 51 candidate | Same research/pitch workflow as earned media | Public readiness, business planning |
| 53 | YouTube Community & Support Link Template | Keep | Useful maintenance/public channel project | Maintenance, public readiness |
| 54 | Patreon, Discord & Support Channel Activation | Keep, split handoffs | Brand owns boundaries/copy, not all platform implementation | Business planning, public readiness, infrastructure |
| 55 | Speaking & Founder Pitch | Split | Keep speaking work here, move core narrative tasks out | Aquatic, public readiness, business planning |
| 56 | Public Profile & Social Presence Refresh | Keep, split task | Relevant but too broad as one task | Public readiness |
| 65 | Aquatic Club Talk Brand & Messaging | Keep | Concrete, active, scheduled around 2026-06-13 | Aquatic Club, public readiness |

**Task Review**

| ID | Task | Project | Rec | Reason | Proposed group | Scheduling | Blocker/approval |
|---:|---|---|---|---|---|---|---|
| 16 | Import existing Supabase email_signups list to Substack | 49 | split/clarify | Count and consent may be stale | 49 | after dependency | verify list, approve import |
| 17 | Draft and configure Substack welcome email | 49 | keep | Valid, but configure is platform action | 49 | after 16 | approve public copy/config |
| 18 | Write and send introductory Substack post | 49 | split | Draft and send need separate approval | 49 | after 16/17 | approve send |
| 19 | Begin weekly dispatch through Substack | 49 | defer | Cadence needs content capacity | 49 | defer/review later | Content cadence |
| 20 | Rewire website signup form to post directly to Substack | 49 | wrong domain | Web implementation | Web handoff | after dependency | Web approval |
| 21 | Research target subreddits and post format | 50 | keep | Correct research-first task | 50 | schedule after Aquatic | none |
| 22 | Begin posting once per week | 50 | rename/defer | Execution before research approval | 50 | after dependency | approve Reddit pilot |
| 23 | Build press outreach list | 51 | keep | Research task is valid | merged earned media | schedule after Aquatic | storage location for list |
| 24 | Send 3-5 cold pitches | 51 | rename/split | Sending needs approved pitch | merged earned media | after dependency | approve outreach |
| 25 | Research relevant podcasts | 52 | keep/move | Fits merged earned-media workflow | merged earned media | schedule after Aquatic | none |
| 26 | Prepare a guest pitch | 52 | keep/move | Depends on positioning packet | merged earned media | after dependency | claim-safety review |
| 27 | Activate YouTube Community tab | 53 | keep | Valid, but platform status unknown | 53 | after dependency | verify channel access |
| 28 | Add Ko-fi and Patreon support links to description template | 53 | keep | Good maintenance copy task | 53 | after 202 | approve support wording |
| 29 | Add Discord to Patreon memberships | 54 | split/clarify | Benefit/configuration boundary | 54 plus platform handoff | after 202 | approve benefits/config |
| 30 | Look up 1 Million Cups and sign up | 55 | split/defer | Research ok, signup is commitment | 55 | defer/review later | approve application |
| 31 | Begin speaking at events and pitching | 55 | split | Too broad and commitment-prone | 55 | defer/review later | scope specific events |
| 32 | Rewrite one-sentence pitch first-person | 55 | move | Core narrative, Aquatic-adjacent | new core messaging | after 273/310 | claim-safety review |
| 33 | Integrate Throne onto website/social | 54 | wrong domain | Web/social implementation and support policy | Web/Growth handoff | defer/review later | approve platform strategy |
| 34 | Update social media photos and messages | 56 | split | Too broad | 56 | after core messaging | platform owner approval |
| 35 | Link Patreon to Facebook/social sites | 54 | split/handoff | Brand copy plus platform execution | 54 plus Growth/Web | after 202 | approve support placement |
| 199 | Build messaging pillars and snippets | 55 | move | Broader than speaking | new core messaging | after Aquatic first pass | public-use approval |
| 200 | Draft solo-founder narrative and bio | 55 | move | Core identity, also feeds profiles/talks | new core messaging | after 273/311 | public-use approval |
| 201 | Create campaign and announcement template pack | 49 | keep/rename group | Broader than newsletter but related | 49 renamed | after core messaging | claim-safety review |
| 202 | Review support/sponsorship boundaries | 54 | keep | Good prerequisite for support tasks | 54 | schedule after Aquatic or before 274 if needed | none |
| 203 | Create outreach-ready pitch packet | 51 | move/merge | Feeds press, podcasts, speaking | merged earned media | after core messaging | claim-safety review |
| 273 | Create talk title, tagline, promise, bio, visual direction | 65 | keep | Core Aquatic parent task | 65 | already scheduled | approve public use |
| 274 | Prepare sponsor-safe public language and talk copy | 65 | keep | Correct second Aquatic phase | 65 | already scheduled | sponsor/public approval |
| 309 | Generate talk title options | 65 | keep | Concrete Aquatic subtask | 65 | already scheduled | choose working title |
| 310 | Draft one-liner and 30-sec explanation | 65 | keep | Concrete Aquatic subtask | 65 | already scheduled | claim-safety review |
| 311 | Write speaker bio and event description draft | 65 | keep | Concrete Aquatic subtask | 65 | already scheduled | public approval |
| 312 | Define visual tone for slides | 65 | keep | Correct Brand support task | 65 | already scheduled | none |
| 313 | Review title/tagline/one-liner/bio package | 65 | keep | Good review gate | 65 | already scheduled | approve package |
| 314 | Draft sponsor-safe guardrails | 65 | keep | Correct boundary task | 65 | already scheduled | sponsor approval |
| 315 | Write reusable short description | 65 | keep | Useful talk/web/social copy | 65 | already scheduled | public approval |
| 316 | Draft audience call-to-action language | 65 | keep | Needs care, but relevant | 65 | already scheduled | approve CTA |
| 317 | Review sponsor-facing wording | 65 | keep | Correct claim-safety gate | 65 | already scheduled | sponsor/public approval |
| 318 | Finalize public copy packet | 65 | keep | Correct closeout task | 65 | already scheduled | final approval |

**Proposed Planner Writes**

Project changes:
- Create new project: `Core Messaging & Public Identity System`.
- Rename `55` to `Speaking Track & Event Outreach`.
- Merge `51` and `52` into one earned-media project, suggested title: `Earned Media & Guest Outreach`.
- Optional rename `49` to `Newsletter & Announcement Foundation`.

Task title/description changes:
- `18`: split into draft vs send/publish.
- `22`: rename to a Reddit pilot plan after research.
- `24`: split draft pitch vs send approved pitches.
- `29`: split benefit language from platform configuration.
- `30`: split chapter research from signup/application.
- `31`: split into concrete speaking targets.
- `34`: split into profile audit, copy refresh, image refresh, platform updates.
- `35`: split Brand support placement guidance from platform linking.

Task moves/relinks:
- Move `32`, `199`, `200` to new `Core Messaging & Public Identity System`.
- Move `25`, `26`, `203` into merged earned-media project.
- Flag `20` for Web handoff.
- Flag `33` for Web/Growth handoff.
- Flag platform-execution portions of `35` for Growth/Web handoff.

Archive/complete candidates:
- Archive `52` only if its tasks are moved into merged earned-media project.
- No task looked safely complete from Planner data alone.
- No archive candidates beyond merge cleanup.

Scheduling candidates:
- Keep all Aquatic Club project `65` scheduled items as-is.
- Schedule old broad Brand work only after Aquatic-specific copy work is complete, except optional research-only tasks.
- Good post-Aquatic candidates: `21`, `23`, `25`, `202`.
- Do not schedule external action tasks until prerequisites and approvals are complete: `18 send`, `22`, `24`, `29 config`, `30 signup`, `31`, `33`, `35`.

Changed files:
- None

Verification:
- Ran Brand startup script.
- Read AGENTS, Brand memory, relevant Brand skills/references, Company routing/database-awareness docs, and Company Brand brief.
- Read live Brand Planner domain, projects, and tasks through Company Supabase helper with protected read-only queries.
- Ran `git diff --name-only`.
- Ran `git status --short --branch`.

Not changed:
- No Planner/Supabase records changed.
- No files changed.
- No Company reports changed.
- No public site, app behavior, public channels, support platforms, or external outreach changed.

Unresolved questions:
- Which proposed Planner changes do you approve: project changes, title/split edits, task moves/handoffs, archive cleanup, and scheduling candidates?

## Content Agent Reply

**Domain Summary**

Reviewed live Content Planner data under `work_domains.key='content'` / `domain_id=5`: **7 work projects** and **48 tasks/checklist items**. I also checked linked `content_calendar` rows **3** and **13** for production context.

Biggest issues:
- The **May 12, 2026 amphipod short** has execution tasks still dated **May 11**, while `content_calendar` id 13 is scheduled for **May 12**.
- The active seagrass longform has only one stale ordinary task titled around "Grant Field Trip," while the active project docs and calendar now frame it as **The Seagrass Meadow Started Fighting Back** with target **May 14, 2026**.
- Aquatic Club Talk tasks are well scheduled, but many have `group_label=null`.
- Project 33 has only a completed task, but the project itself is still useful as a standing maintenance bucket.
- No obvious cross-domain wrong-domain tasks, but several items need Growth/Brand/Web/Research/Financials wording or handoff before execution.

**Project Review**

| Project ID | Project | Recommendation | Why | Supports |
|---:|---|---|---|---|
| 31 | Operation Living Atlas Backfill | Keep | Relevant, coherent, sequence needs scheduling later; task 213 should probably be nested under packet task 140. | Operation Living Atlas, public-readiness, backlog |
| 32 | Public History & Retired Biomes | Keep | Content owns story/design framing; Web owns implementation later. | Public-readiness, backlog |
| 33 | Story Beats & Planner Source Maps | Keep as maintenance | Only task is done, but project is a durable workflow bucket. | Infrastructure, maintenance |
| 34 | Revenue-Support Content | Keep, needs clarification | Content can produce assets, but CTA/sponsor/revenue claims need Growth/Brand alignment. | Business planning |
| 35 | Active Longform Production | Split / needs new project | Current task is stale against seagrass longform docs; create a dedicated work project for calendar id 3. | Active production |
| 62 | Thousands of Amphipods Appeared Under the Algae | Keep, fix metadata/schedule | Linked short production exists, but dates lag behind calendar id 13. | Active production |
| 64 | Aquatic Club Talk Deck, Script & Rehearsal | Keep | Strongly structured and already scheduled toward June 13 hard window. | Aquatic Club, public-readiness, business planning |

**Task Review**

| ID | Task | Project | Recommendation | Proposed group | Scheduling posture | Blocker / approval |
|---:|---|---|---|---|---|---|
| 36 | Cross-reference historical observations... | 31 | Keep | Operation Living Atlas Backfill | Defer/review later | Needs scoped source session |
| 37 | Design Retired Biomes section... | 32 | Keep | Public History & Retired Biomes | Defer/review later | Web handoff before implementation |
| 108 | Record Patreon push video... | 34 | Needs clarification | Revenue-Support Content | Schedule after dependency | Growth/Brand CTA approval |
| 128 | Lock working title for Grant Field Trip longform... | 35 | Rename/move | New seagrass longform project | Schedule now | Rename and relink approval |
| 140 | Create first Source Packet for pipeline 338... | 31 | Keep | Operation Living Atlas Backfill | Assign target only | Backfill approval before writes |
| 142 | Add intervention to story_beats... | 33 | Complete candidate | Story Beats & Planner Source Maps | Do not schedule | Already done |
| 210 | Extract evidence from pipeline 338... | 31 | Keep | Child of 140 | Schedule after dependency | Source packet sequencing |
| 211 | Route each pipeline 338 fact... | 31 | Keep | Child of 140 | Schedule after 210 | Publicness approval later |
| 212 | Prepare proposed pipeline 338 writes... | 31 | Keep | Child of 140 | Schedule after 211 | Structured-write approval later |
| 213 | Review/select media evidence... | 31 | Move/relink | Child of 140 | Schedule after 210 | Relink approval |
| 214 | Close pipeline 338 Source Packet... | 31 | Keep | Child of 140 | Schedule after dependency | Packet completion depends on 210-212 |
| 247 | Produce short: Thousands of Amphipods... | 62 | Keep/reschedule | Amphipod short project | Schedule now | Align to calendar id 13 |
| 248 | Filmed | 62 | Keep completed | Amphipod short project | Do not schedule | Already done |
| 249 | Edited to under 60 seconds | 62 | Keep | Amphipod short project | Schedule now | None |
| 250 | Caption written | 62 | Keep | Amphipod short project | Schedule now | None |
| 251 | YouTube Shorts uploaded | 62 | Keep/reschedule | Amphipod short project | Schedule after dependency | Needs edit/caption |
| 252 | Instagram Reels uploaded | 62 | Keep/reschedule | Amphipod short project | Schedule after dependency | Needs edit/caption |
| 253 | TikTok uploaded | 62 | Keep/reschedule | Amphipod short project | Schedule after dependency | Needs edit/caption |
| 254 | Facebook Reels native upload | 62 | Keep/reschedule | Amphipod short project | Schedule after dependency | Needs edit/caption |
| 255 | Pipeline record created | 62 | Keep | Amphipod short closeout | Schedule after publish | Publish closeout approval |
| 256 | Content calendar updated | 62 | Keep | Amphipod short closeout | Schedule after publish | Planner write approval |
| 257 | Open loops seeded | 62 | Keep | Amphipod short closeout | Schedule after publish | Open-loop approval |
| 258 | Story threads - no action needed | 62 | Rename | Amphipod short closeout | Schedule after publish | Rename to review wording |
| 259 | Biome/species/system notes updated | 62 | Keep | Amphipod short closeout | Schedule after publish | Structured-write approval |
| 260 | Chronicles - promote if warranted | 62 | Keep | Amphipod short closeout | Schedule after publish | Chronicle approval |
| 261 | Confirm | 62 | Rename | Amphipod short closeout | Schedule last | Rename/readback approval |
| 270 | Build TED-style talk arc... | 64 | Keep | Aquatic Club Talk | Already scheduled | None |
| 271 | Produce slide deck/proof-media package | 64 | Keep | Aquatic Club Talk | Already scheduled | Depends on outline/proof media |
| 272 | Run timed rehearsals/Q&A prep | 64 | Keep | Aquatic Club Talk | Already scheduled | Needs approved cost/sponsor language |
| 290-295 | Talk arc/script child tasks | 64 | Keep | Aquatic Club Talk | Already scheduled | None |
| 296-302 | Deck/media child tasks | 64 | Keep | Aquatic Club Talk | Already scheduled | Proof media availability |
| 303-308 | Rehearsal/Q&A child tasks | 64 | Keep | Aquatic Club Talk | Already scheduled | Q&A claims need domain-safe language |

**Proposed Planner Writes**

Project changes:
- Create a dedicated Content work project for `content_calendar` id 3: `[Working Title] The Seagrass Meadow Started Fighting Back`, status `active`, target `2026-05-14`.
- Keep project 35 as the generic `Active Longform Production` bucket.
- Update project 62 owner from `Company Agent` to `Content Agent`.
- Align project 62 target date to `2026-05-12`.

Task title/description changes:
- Rename task 128 to `Lock working title for The Seagrass Meadow Started Fighting Back`.
- Rename task 258 to `Review story-thread impacts during short closeout`.
- Rename task 261 to `Read back closeout changes and confirm`.
- Set Aquatic Club Talk tasks 270-308 `group_label` to `Aquatic Club Talk`.

Task moves/relinks:
- Move task 128 into the new seagrass longform production project.
- Relink task 213 as a child of task 140.

Archive/complete candidates:
- No archive writes recommended now.
- Task 142 and task 248 are already done; leave as completed history.
- Tasks 247 and 251-261 become complete candidates only if you confirm the amphipod short was published and closeout facts are ready.

Scheduling candidates:
- Reschedule task 247 and upload/closeout children 251-261 from May 11 to match the May 12 calendar row, with upload after tasks 249-250.
- Keep Aquatic Club Talk schedule as-is.
- Do not schedule Operation Living Atlas or revenue-support work until after current hard-window work is protected.

Changed files:
- None

Verification:
- Read `AGENTS.md`, startup output, relevant memory/playbook files, Company routing/database docs, Company Content reports, active video project docs.
- Read-only Supabase queries for `work_domains`, `work_projects`, `tasks`, and linked `content_calendar` rows.
- Ran `git diff --name-only` and `git status --short --branch`.

Not changed:
- No Planner/Supabase records.
- No repo files.
- No app behavior, public records, publish status, open loops, story threads, chronicles, or calendar records.

Unresolved questions:
- Which proposed Planner changes do you approve?

## Research/Ecosystem Agent Reply

I reviewed the live Research/Ecosystem Planner domain read-only: `work_domains.key = ecosystem`, `domain_id = 3`.

**Domain Summary**
Reviewed: 9 projects and 38 tasks.

Biggest issues:
- Project `66` is the nearest hard-readiness project for the Aquatic Club Talk on `2026-06-13`; it has scheduled work but project status is still `planned`, so I recommend making it active if you approve.
- Task `221` appears misplaced in species dossiers; it is a Living Atlas fact-review task and fits better under project `60`.
- Project naming has a possible mismatch: `Operation Living Web Relationship Curation` may be a feature/workstream under Operation Living Atlas, but I would only rename if you want Planner naming standardized.
- Tasks `14` and `15` contain dated implementation notes in the title; they are still relevant but should be cleaned up.
- Task `13` is already done; no action needed unless you want done tasks archived later.

**Project Review**

| Project | Recommendation | Why | Supports |
|---|---|---|---|
| 43 Species Identification & Taxonomy Gaps | Keep | Clear Research-owned ID backlog; useful for claim safety. | Aquatic Club, public-readiness, backlog |
| 44 Species Data Foundation & Historical Dossiers | Keep | Coherent dossier bucket, but task `221` is misplaced. | Living Atlas, public-readiness, backlog |
| 45 Biome Profiles & Website Data Model | Keep | Still relevant for Website/App public data surfaces. | Operation Living Atlas, public-readiness |
| 46 Observation, Thread & Open Loop Integrity | Keep | General link-integrity maintenance distinct from packet-specific Atlas work. | Maintenance, infrastructure |
| 47 Ecological Uncertainty & Population Outcomes | Keep | Core Research risk/claim-safety bucket. | Aquatic Club, public-readiness, backlog |
| 48 Measurement Gaps & Experiment Background | Keep | Research handoff work; implementation belongs to Hardware/App later. | Infrastructure, roadmap planning |
| 58 Operation Living Web Relationship Curation | Keep / rename candidate | Coherent relationship-curation project; rename only if "Living Web" should standardize under Living Atlas. | Operation Living Atlas, Website |
| 60 Operation Living Atlas Evidence Integrity | Keep | Good packet-specific evidence-integrity bucket; could receive task `221`. | Operation Living Atlas |
| 66 Aquatic Club Talk Research Claim Review | Keep; activate candidate | Nearest hard readiness window, already has scheduled work. | Aquatic Club |

**Task Review**

| ID | Task | Project | Rec | Reason | Proposed group | Scheduling posture | Blocker/approval |
|---:|---|---|---|---|---|---|---|
| 13 | Organize species sheets data | 44 | Keep done / archive candidate | Already completed. | 44 | Do not schedule | Archive only if desired |
| 14 | Reconcile legacy biome descriptions... | 45 | Rename | Relevant, title has dated note. | 45 | Defer/review later | Approve title cleanup |
| 15 | Populate observation_loop_links going forward... | 46 | Rename | Relevant maintenance, title embeds old state. | 46 | Assign due/target only | Approve title cleanup |
| 110 | Identify water beetle species... | 43 | Keep | Valid unresolved ID. | 43 | Defer/review later | Needs evidence/microscopy |
| 111 | Confirm amber snail ID... | 43 | Keep | Valid unresolved ID. | 43 | Defer/review later | Needs evidence/expert confidence |
| 129 | Identify aquatic amphipod species... | 43 | Keep | Valid ID gap, possibly public-relevant. | 43 | Schedule after dependency | Needs usable media/specimens |
| 139 | Create Lake Post-Seal dossiers... | 44 | Keep | Good parent task. | 44 | Schedule after child sequence | None |
| 191 | Unknown terrestrial isopod ID | 43 | Keep | Valid uncertainty-preserving task. | 43 | Defer/review later | Needs evidence |
| 192 | Confirm Apple Snail ID/status | 43 | Keep | Public-claim relevant. | 43 | Schedule after dependency | Verify live records/evidence |
| 193 | Biome-profile fill-plan decisions | 45 | Keep | Still useful for Website/App display. | 45 | Defer/review later | Needs current-state check |
| 194 | Audit observation/thread/loop/chronicle links | 46 | Keep | General integrity task. | 46 | Assign due/target only | Needs approved write path if fixing |
| 195 | Ghost shrimp juvenile recruitment | 47 | Keep | Important unresolved claim boundary. | 47 | Assign due/target only | Needs observations |
| 196 | Mesostoma/ostracod outcome | 47 | Keep | Important causal-claim boundary. | 47 | Assign due/target only | Needs observations |
| 197 | Macroalgae/urchin trajectory | 47 | Keep | Important unresolved outcome. | 47 | Assign due/target only | Needs observations |
| 198 | Measurement-gap handoff | 48 | Keep | Research owns handoff; Hardware/App own implementation. | 48 | Defer/review later | Cross-domain dependency |
| 215 | Flagfish dossier | 44 | Keep | Good child dossier. | 44 | Schedule after dependency | None |
| 216 | Ghost Shrimp dossier | 44 | Keep | Good child dossier. | 44 | Schedule after dependency | Preserve recruitment uncertainty |
| 217 | Daphnia dossier/review | 44 | Keep | Good child dossier. | 44 | Schedule after dependency | Preserve establishment uncertainty |
| 218 | Freshwater amphipod dossier | 44 | Keep | Good child dossier. | 44 | Schedule after dependency | ID uncertainty |
| 219 | Copepod context dossier | 44 | Keep | Good child dossier. | 44 | Schedule after dependency | None |
| 220 | Slough Crayfish dossier | 44 | Keep | Good child dossier. | 44 | Schedule after dependency | None |
| 221 | Review Living Atlas extracted facts | 44 | Move | Fits Atlas evidence integrity, not species dossiers. | 60 | Schedule after dependency | Approve relink |
| 222 | Verify links for first Atlas packet | 60 | Keep | Correct packet-specific integrity task. | 60 | Schedule after dependency | Packet materials needed |
| 236 | Run next Living Web curation pass | 58 | Keep / rename candidate | Valid parent task. | 58 | Defer/review later | Naming approval if renamed |
| 237 | Select bounded cluster | 58 | Keep | First child action. | 58 | Schedule after dependency | Needs curation priority |
| 238 | Prepare relationship rows | 58 | Keep | Depends on cluster selection. | 58 | Schedule after dependency | Needs `237` |
| 239 | Review confidence/status | 58 | Keep | Required claim discipline. | 58 | Schedule after dependency | Needs rows |
| 240 | Separate observed/general ecology | 58 | Keep | Required claim discipline. | 58 | Schedule after dependency | Needs rows |
| 241 | Defer weak rows | 58 | Keep | Required safety gate. | 58 | Schedule after dependency | Needs rows |
| 242 | Hand approved rows to Web | 58 | Keep | Correct handoff boundary. | 58 | Schedule after dependency | User approval required |
| 243 | Verify evidence links for approved batches | 58 | Keep | Belongs with relationship batches. | 58 | Schedule after dependency | Approved batch needed |
| 275 | Review ecological claims/Q&A risks | 66 | Keep | Core Aquatic Club Research work. | 66 | Schedule now | Already scheduled |
| 319 | Inventory core ecological claims | 66 | Keep | Correct first checklist item. | 66 | Schedule now | Already scheduled |
| 320 | Review milestone wording | 66 | Keep | Good claim-safety task. | 66 | Schedule now | Already scheduled |
| 321 | Review species/population claims | 66 | Keep | High-value for talk readiness. | 66 | Schedule now | Already scheduled |
| 322 | Create uncertainty labels | 66 | Keep | Required Research discipline. | 66 | Schedule now | Already scheduled |
| 323 | Draft Q&A-safe answers | 66 | Keep | Good public-readiness task. | 66 | Schedule now | Already scheduled |
| 324 | Final claim-safety pass | 66 | Keep | Correct final gate. | 66 | Schedule now | Already scheduled |

**Proposed Planner Writes**

Project changes:
- Set project `66` status from `planned` to `active`.
- Optional: rename project `58` from `Operation Living Web Relationship Curation` to `Operation Living Atlas Relationship Curation` if you want naming standardized.

Task title/description changes:
- Rename task `14` to: `Reconcile legacy biome descriptions against current species and biome records`.
- Rename task `15` to: `Maintain observation-to-open-loop links for new qualifying observations`.
- Optional rename task `236` to use `Operation Living Atlas` instead of `Operation Living Web` if project `58` is renamed.

Task moves/relinks:
- Move task `221` from project `44` to project `60`.

Archive/complete candidates:
- Optional archive candidate: task `13`, because it is already `done`. I would leave it alone unless your Planner cleanup convention archives completed work.

Scheduling candidates:
- Keep existing Aquatic Club schedule for tasks `275`, `319`-`324`.
- Schedule later only after dependencies: `129`, `192`, `221`, `222`, `237`-`243`.
- Assign due/target only, not fixed schedule yet: `15`, `194`, `195`, `196`, `197`.
- Defer/review later: `110`, `111`, `139`, `191`, `193`, `198`, `215`-`220`.

Changed files:
- None

Verification:
- Read `AGENTS.md`, required memory/database routing docs, Company registry/database awareness, Company Research reports, and relevant skills.
- Live read-only Supabase checks: `work_domains`, `work_projects`, `tasks` for `domain_id = 3`.
- Ran `git diff --name-only` and `git status --short --branch`.

Not changed:
- No Planner records, Supabase records, repo files, app behavior, database schema, or public site behavior changed.

Unresolved questions:
- Should Planner standardize `Operation Living Web` naming under `Operation Living Atlas`, or keep Living Web as a distinct workstream name?

Which proposed Planner changes do you approve?

## App Agent Reply

**Domain Summary**

Reviewed live App Planner records read-only: **10 projects** and **26 non-archived tasks** under `work_domains.key = app` / `domain_id = 9`.

Biggest issues:
- `App Agent Project-Management Wiring` looks stale/completed: its tasks appear satisfied by current AGENTS/memory/skills routing.
- Aquatic Club project is relevant, but parent task `279` is scheduled/spanning while its child tasks already carry concrete work dates. I’d make `279` a container/due-only task.
- `165` and `166` overlap as Planner read-only smoke checks.
- No unlinked active App tasks. No non-App-domain tasks are linked into App projects.
- Company App report count is stale versus live Planner, but I did not update docs.

**Project Review**

| Project | Recommendation | Why | Supports |
|---|---|---|---|
| 9 Planner Runtime & Cross-Domain Rollout | Keep | Core Planner readiness work remains relevant; one possible task merge. | roadmap planning, infrastructure, maintenance |
| 10 Planner Sources & Content Workflow Polish | Keep, optional rename | Relevant but broad; schedule after higher-readiness work. | Operation Living Atlas, public-readiness, backlog |
| 11 App Agent Project-Management Wiring | Archive candidate after completing tasks | Current repo routing appears already wired. | infrastructure, maintenance |
| 12 Field Observer Mobile Private Beta | Keep | Still real App-owned beta path; needs approval gates. | infrastructure, backlog |
| 13 Site Admin & Media Workflow Reliability | Keep | Important for media reliability and Aquatic asset access. | Aquatic Club, maintenance, public-readiness |
| 14 Monitoring Operator Surface | Keep | Relevant, but setpoint/control ownership needs Hardware/App clarification. | infrastructure, maintenance |
| 70 Aquatic Club Talk Planner & Media Support | Keep | Directly supports June 13 hard readiness window. | Aquatic Club |
| 15 Supabase, Storage & Secret-Key Safety | Keep | Ongoing safety/infrastructure project. | infrastructure, maintenance |
| 59 Operation Living Atlas Review Workflow Support | Keep/defer | Strategic future workflow only; do not schedule until first packet proves need. | Operation Living Atlas, backlog |
| 61 Operation Living Web Review Workflow Support | Keep/defer | Strategic future workflow only; public editing boundary remains important. | public-readiness, backlog |

**Task Review**

| ID | Task | Project | Recommendation | Proposed group | Scheduling posture | Blocker/approval |
|---:|---|---|---|---|---|---|
| 165 | Verify Planner hierarchy with real records | Runtime Rollout | Keep | same | schedule now | read-only smoke only |
| 166 | Verify domain filters | Runtime Rollout | Merge/subtask under 165 | Runtime smoke check | schedule now with 165 | approval to relink/merge |
| 167 | Polish Sources/beat closeout/recurring tasks | Sources Polish | Keep | same | defer/review later | needs feature scope |
| 168 | Decide content closeout loop behavior | Sources Polish | Keep, maybe rename | same | assign due/target only | product decision |
| 169 | Update App Agent docs for Planner queue | Agent Wiring | Complete candidate | same | do not schedule | approval to mark done |
| 170 | Update closeout skill | Agent Wiring | Complete candidate | same | do not schedule | approval to mark done |
| 171 | Run Planner wiring self-check | Agent Wiring | Complete candidate | same | do not schedule | approval to mark done |
| 172 | Verify signed Field Observer APK path | Field Observer | Keep | same | schedule after dependency | release path readiness |
| 173 | Approved live sighting-save test | Field Observer | Keep | same | schedule after dependency | explicit live-write approval |
| 174 | Decide durable watchlist state | Field Observer | Keep | same | defer/review later | product decision |
| 175 | Verify image upload/rollback | Site Admin/Media | Keep | same | schedule after dependency | Storage/write approval |
| 176 | Verify Media Library read-only smoke | Site Admin/Media | Keep | same | schedule now | app launch/smoke approval if interactive |
| 177 | Review Monitoring setpoint UI ownership | Monitoring | Needs clarification | same | defer/review later | Hardware/App ownership |
| 178 | Audit Supabase key boundary | Supabase Safety | Keep | same | schedule now | source audit only unless changed |
| 179 | Remove legacy key fallbacks? | Supabase Safety | Keep | same | schedule after 178/testing | approval for code changes |
| 180 | Verify migration 006 follow-up | Supabase Safety | Keep | same | schedule after dependency | schema/live verification only |
| 225 | Evaluate Living Atlas review workflow need | Living Atlas Support | Keep | same | schedule after dependency | first model packet |
| 226 | Sketch Living Atlas queue requirements | Living Atlas Support | Keep | same | schedule after 225 | depends on 225 |
| 244 | Define Living Web editor needs | Living Web Support | Keep | same | defer/review later | recurring curation need |
| 245 | Keep Living Web editing out of public Flask | Living Web Support | Rename/keep as boundary check | same | assign due/target only | Web/App boundary confirmation |
| 279 | Support media access/Planner visibility/day-of reliability | Aquatic Club | Keep, make container/due-only | same | assign due/target only | approval to clear schedule/span |
| 342 | Verify media/library access path | Aquatic Club | Keep | same | already scheduled | none |
| 343 | Create talk media shortlist | Aquatic Club | Keep | same | already scheduled | may need Content/media input |
| 344 | Check Planner structure renders coherently | Aquatic Club | Keep | same | already scheduled | app smoke approval if interactive |
| 345 | Coordinate QR/contact capture path | Aquatic Club | Keep + handoff flag to Web/Growth | same | already scheduled | Web/Growth ownership |
| 346 | Prepare offline backup assets | Aquatic Club | Keep | same | already scheduled | asset availability |

**Proposed Planner Writes**

Project changes:
- Mark project `11` done or archive it after tasks `169`, `170`, and `171` are approved as complete.
- Optional rename project `10` to "Planner Sources, Content Workflow & Recurring Task Polish."

Task title/description changes:
- Optional rename `168` to "Decide content closeout loop seeding/resolution behavior."
- Rename `245` to an actionable boundary check, e.g. "Confirm Living Web editing remains App-only/private before editor scope."
- Update `279` notes to clarify it is a container for Aquatic Club App support.

Task moves/relinks:
- Merge `166` into `165`, or make `166` a subtask of `165`.
- No wrong-domain task moves recommended. `345` should be flagged for Web/Growth coordination, not moved.

Archive/complete candidates:
- Complete `169`, `170`, `171`.
- Then mark/archive project `11`.

Scheduling candidates:
- Schedule `165`/`166`, `176`, and `178` soon.
- Keep `342`-`346` as currently scheduled for Aquatic Club readiness.
- Clear `279`'s `scheduled_date`, `scheduled_time`, and `span_end_date`; keep `due_date = 2026-06-12` as the container target.
- Defer `173`, `175`, `225`, `226`, `244` until dependencies/approvals exist.

Changed files:
- None

Verification:
- Ran repo startup.
- Read AGENTS/memory/Supabase safety/Planner references.
- Queried live Supabase Planner records read-only.
- Ran `git diff --name-only`.

Not changed:
- No Planner records, database rows, schema, Storage, telemetry, app behavior, or Company reports changed.

Unresolved questions:
- Which proposed Planner changes do you approve?

## Web Agent Reply

I reviewed Web's live Planner records read-only through the approved Company Supabase helper after loading the Web startup rules.

**Domain Summary**

Reviewed 9 Web projects and 61 Web tasks: 29 open, 32 done. The biggest grouping issues are supporter/Patreon overlap, Web-owned public surfaces mixing with Growth/Brand decisions, and Operation Living Web data-apply tasks that cross into Research/Supabase-write territory. The new Aquatic Club readiness project is correctly scoped and already scheduled toward the 2026-06-13 readiness window.

Obvious cleanup candidates: merge or cross-link tasks `127` and `351`; rename/refine `88` because `/faq` already functions as the About surface; clarify or hand off `233` and `234`; keep completed work closed, especially archived legacy project `42`.

**Project Review**

| Project | Recommendation | Why | Supports |
|---|---|---|---|
| 36 Public Site Core & About Page | Keep, minor rename optional | Still core, but About work is really `/faq`/public identity and supporter proof. | Aquatic Club, public-readiness, maintenance |
| 37 Newsletter & Audience Capture | Keep | Substack migration and signup flow are directly Web-owned, with Growth/Content dependency. | Aquatic Club, business planning |
| 38 Community & Revenue Conversion Surfaces | Keep, rename optional | Correct for public conversion surfaces, but pricing/community promises need Growth approval. | Aquatic Club, business planning |
| 39 Engineering Media SEO & Public Telemetry | Keep | Strong Web-owned infrastructure/public telemetry work. | Infrastructure, public-readiness |
| 40 UX Interaction Lab & UI System | Keep | Active dev-gated UX system work; good backlog container. | Infrastructure, maintenance |
| 41 Chronicles, Operation Living Web & Relationship UX | Keep, split data-write tasks out | UX/rendering belongs here; relationship batch creation/apply is not purely Web. | Operation Living Atlas, backlog |
| 42 Legacy/Internal Surface Review | Keep archived | No open work; already quarantined obsolete/private-dashboard tasks. | Maintenance/archive |
| 57 Operation Living Atlas Public Rendering | Keep | Correct public-rendering project for curated Atlas outputs. | Operation Living Atlas, roadmap context |
| 68 Aquatic Club Talk Web & CTA Readiness | Keep | Correct hard-window project for 2026-06-13. | Aquatic Club |

**Open Task Review**

| ID | Task | Project | Recommendation | Proposed group | Scheduling posture | Blocker/approval |
|---|---|---|---|---|---|---|
| 88 | Build the About page | 36 | Rename | About/public identity pass | Schedule now | Brand-safe copy approval |
| 90 | Open Patreon Discord for member chats | 38 | Wrong domain / needs clarification | Growth handoff or Web CTA only | Defer/review later | Growth/member-community decision |
| 92 | Rewire website email signup form to post directly to Substack API | 37 | Keep | Substack signup integration | Schedule after dependency | Substack API/access/consent |
| 93 | Remove/archive Supabase-only signup flow once Substack is live | 37 | Keep | Signup retirement | Schedule after dependency | Only after `92`/`352` verified |
| 94 | Populate engineering image filenames | 39 | Keep | Engineering media polish | Schedule now | Public data/image source approval |
| 109 | Build course pre-sale waitlist page | 38 | Needs clarification | Revenue experiments | Defer/review later | Pricing/course promise approval |
| 125 | Extract shared atoms/molecules into partials | 40 | Keep | UI system hardening | Defer/review later | Best after active page passes reveal repeats |
| 127 | Add sponsors/supporters section to About page | 36 | Merge with `351` or parent it | Supporter acknowledgments | Schedule now | Private donor/sponsor data approval |
| 141 | Review related-event UX after first Atlas packet | 57 | Keep | Atlas post-packet QA | Schedule after dependency | First packet beyond chronicle 30 |
| 186 | Review UX Lab plan with Josue | 40 | Keep | UX Lab planning | Assign target only | Owner review needed |
| 223 | Confirm Atlas public pages are curated, not raw notebook | 57 | Keep | Atlas public safety | Schedule after dependency | Approved Atlas packet/content |
| 224 | Smoke-check pages after first-packet writes | 57 | Keep | Atlas QA | Schedule after dependency | Approved writes first |
| 233 | Convert Research batch into dry-review SQL packet | 41 | Wrong domain / split | Research data prep + Web review | Do not schedule as Web until clarified | Research/App/Supabase write boundary |
| 234 | Apply approved relationship batches | 41 | Wrong domain / approval-gated | Research/App apply; Web verify | Do not schedule | Explicit DB write approval required |
| 235 | Run Operation Living Web smoke checks after batch apply | 41 | Keep | Web verification | Schedule after dependency | Batch apply completed |
| 263 | Telemetry hardening and visual QA | 39 | Keep | Live monitoring hardening | Schedule now | None, keep read-only |
| 264 | Define `/events` product pass | 38 | Keep | Events/talk surface | Schedule now | Brand/Growth CTA alignment |
| 265 | Define `/news` product pass | 36 | Keep | News/announcements | Assign target only | Content ownership clarity |
| 266 | Define `/chronicles` product pass | 41 | Keep | Chronicles product pass | Assign target only | Content/Atlas sequencing |
| 277 | Prepare talk-ready Web surfaces and QR/CTA path | 68 | Keep | Aquatic Club parent | Already scheduled | Needs Brand/Growth coordination |
| 331 | Audit QR attendee website path | 68 | Keep | Aquatic Club checklist | Already scheduled 2026-05-19 | None |
| 332 | Draft talk landing destination and CTA flow | 68 | Keep | Aquatic Club checklist | Already scheduled 2026-05-23 | Brand/Growth CTA approval |
| 333 | Define proof/about updates before talk | 68 | Keep | Aquatic Club checklist | Already scheduled 2026-05-28 | Public claims approval |
| 334 | Coordinate contact/newsletter/sponsor path | 68 | Keep | Aquatic Club checklist | Already scheduled 2026-06-02 | Growth/Brand dependency |
| 335 | Final website and QR readiness check | 68 | Keep | Aquatic Club checklist | Already scheduled 2026-06-10 | None |
| 351 | Improve Patreon thank-you area | 38 | Merge/parent with `127` | Supporter acknowledgments | Schedule with `127` | Private supporter data approval |
| 352 | Migrate website email list to Substack | 37 | Keep | Substack migration | Schedule now | Consent/export/import approval |
| 353 | Define weekly update source list | 57 | Keep, maybe move later | Weekly update source list | Assign target only | Content/App source ownership |
| 354 | Build Sunday Substack assembly workflow | 37 | Needs split | Newsletter assembly workflow | Schedule after `353`/`352` | Content/Substack boundary |

Completed tasks reviewed as keep-done/do-not-schedule: `87`, `89`, `91`, `95`, `112`-`124`, `126`, `133`, `137`, `187`, `188`, `189`, `190`, `205`, `206`, `227`-`232`, `355`. No reopen recommendation.

**Proposed Planner Writes**

Project changes:
- Optional rename project `38` to `Community, Events & Revenue Conversion Surfaces`.
- Optional rename project `36` to `Public Site Core & About/Proof Page`.
- No new project required now.
- Keep project `42` archived.

Task title/description changes:
- Rename `88` to `Rework /faq into talk-ready About/public identity page`.
- Rename `127` to `Add public supporter/contributor acknowledgment section to About surface`.
- Rename `351` or merge into `127` as a Patreon-specific subtask.
- Add clarification notes to `90`, `109`, `233`, `234`, `353`, `354` about cross-domain dependencies.

Task moves/relinks:
- Consider linking `351` under `127`, or moving `351` to project `36`.
- Consider moving `353` to project `37` only if newsletter assembly becomes the dominant purpose; otherwise keep under `57`.
- Split/handoff `233` and `234` out of Web-owned execution unless you explicitly want Web to own SQL packet preparation/apply.

Archive/complete candidates:
- No open task is an immediate complete candidate.
- Archive candidates after clarification: `90` if member Discord is no longer intended; `109` if course pre-sale is not approved for planning.
- Keep completed tasks closed.

Scheduling candidates:
- Schedule now: `88`, `94`, `127`/`351`, `263`, `264`, `352`.
- Already scheduled: `277`, `331`, `332`, `333`, `334`, `335`.
- Schedule after dependency: `92`, `93`, `141`, `223`, `224`, `235`, `354`.
- Assign target only: `186`, `265`, `266`, `353`.
- Do not schedule as Web until clarified: `90`, `109`, `233`, `234`.

Changed files:
- None

Verification:
- Read `AGENTS.md`, Web memory, Company routing/database awareness docs, live Planner projects/tasks through read-only Supabase helper, and ran `git diff --name-only`.

Not changed:
- No Planner records, database records, app behavior, public site behavior, routes, templates, CSS, JavaScript, schema, Supabase tables, or Railway config changed.

Unresolved questions:
- Which proposed Planner changes do you approve?

## Financials Agent Reply

**Domain Summary**
Reviewed 7 Financials Planner projects and 19 Financials tasks/checklist items: 17 open, 2 done.

Biggest issues:
- One task is likely wrong-domain: partner pipeline work belongs to Growth/Sales or App runtime, not Financials, though Financials should track closed revenue.
- Several older setup tasks may now be stale or completion candidates after the May 2 close/schema work, but they need financial-table readback before marking done.
- Aquatic Club support is already grouped under a dedicated Financials project with scheduled checklist items before the 2026-06-13 readiness window.
- Missing/weak grouping: no open maintenance task for planned purchase review, and no explicit recurring monthly close task.

**Project Review**

| Project | Recommendation | Why | Supports |
|---|---|---|---|
| Revenue Tracking & Targets | Keep, with one wrong-domain cleanup | Revenue tracking is core Financials; sponsor pipeline task should be handed off/rewritten as revenue handoff only | Business planning, roadmap, backlog |
| Operating Burn & Utilities | Keep | Utility estimates are still relevant and should support cost realism before Aquatic/Atlas planning | Aquatic Club, Operation Living Atlas, infrastructure |
| Debt & Liability Management | Keep | Still needed, but sensitive financial records require readback before analysis/writes | Business planning, maintenance |
| Tax & Deduction Support | Keep, maybe split broad task later | Broad but relevant; tax obligations and filing requirements may need separate tasks/accountant review | Maintenance, business planning |
| Monthly Close, Cash Runway & Forecasting | Keep, possible task cleanup | Right home for cash snapshots/forecasting; some setup tasks may be stale after close schema work | Business planning, roadmap planning, maintenance |
| Planned Purchases & Equipment Spend | Keep; needs new maintenance task | Project is relevant but only has a completed setup task | Aquatic Club, infrastructure, maintenance |
| Aquatic Club Talk Budget & Sponsor Ask Guardrails | Keep | Correct Financials-owned support for the nearest hard readiness window; wording avoids commitments | Aquatic Club, business planning |

**Task Review**

| ID | Task | Project | Rec | Reason | Proposed group | Scheduling posture | Blocker/approval |
|---:|---|---|---|---|---|---|---|
| 6 | Create live revenue tracker... | Revenue Tracking & Targets | Keep | Core financial visibility | Same | Schedule after dependency | May depend on app/table state |
| 7 | Inventory all software... | Operating Burn & Utilities | Keep done | Already completed | Same | Do not schedule | None |
| 8 | Capture utility cost estimates... | Operating Burn & Utilities | Keep | Needed for biome cost realism | Same | Schedule now | Hardware/input estimates |
| 9 | Verify/update debt balances... | Debt & Liability Management | Keep | Prerequisite for payoff planning | Same | Schedule now | Requires finance-table read/write approval |
| 10 | Populate planned_purchases... | Planned Purchases & Equipment Spend | Keep done | Already completed | Same | Do not schedule | None |
| 11 | Document tax obligations... | Tax & Deduction Support | Split/keep | Too broad; filing, obligations, accountant review differ | Same or split | Assign due/target only | Tax review sensitivity |
| 12 | Build sponsor/partner pipeline... | Revenue Tracking & Targets | Wrong domain | `partner_opportunities` belongs Growth/Sales/App; Financials only tracks inflow | Handoff to Growth/Sales | Do not schedule | Cross-domain approval |
| 96 | Add cash balance / bank snapshot table... | Monthly Close... | Complete candidate / rename | Table/workflow may already exist after close work; verify first | Same | Schedule after dependency | Needs Supabase readback; sensitive balances |
| 97 | Create one-time expenses log... | Monthly Close... | Complete candidate / rename | Likely covered by `expense_transactions`/close workflow, but verify | Same | Schedule after dependency | Needs finance-table readback |
| 98 | Add monthly revenue targets... | Revenue Tracking & Targets | Keep | Useful for actuals vs goals, but depends on business targets | Same | Assign due/target only | Needs approved targets |
| 99 | Enter April 2026 revenue... | Revenue Tracking & Targets | Complete candidate | April close/revenue may already be recorded | Same | Schedule after dependency | Verify `revenue_streams`/receipts first |
| 100 | Build debt payoff projection... | Debt & Liability Management | Keep | Valuable but depends on current balances/APRs | Same | Schedule after dependency | Depends on task 9 |
| 101 | Build 3-6 month cash flow projection... | Monthly Close... | Keep | Strategic planning task; depends on snapshot/revenue/burn/liability inputs | Same | Schedule after dependency | Depends on 96/9/98/current records |
| 182 | Review Google $20 charge... | Monthly Close... | Keep | Specific close cleanup item | Same | Schedule now | Needs statement/descriptor confirmation |
| 280 | Draft budget awareness... | Aquatic Club... | Keep | Correct Aquatic finance-support parent task | Same | Schedule now, already scheduled | No commitments |
| 347 | Estimate direct event prep costs... | Aquatic Club... | Keep | Directly supports Aquatic readiness | Same | Schedule now, already scheduled | Purchase approval if spend emerges |
| 348 | Draft sponsor ask assumptions... | Aquatic Club... | Keep | Internal-only numbers fit Financials role | Same | Schedule now, already scheduled | Must remain non-commitment |
| 349 | Review sponsor numbers... | Aquatic Club... | Keep | Good risk-language checkpoint | Same | Schedule now, already scheduled | Growth/Brand inputs |
| 350 | Deliver final finance-sensitive guardrails... | Aquatic Club... | Keep | Correct handoff to Growth/Brand | Same | Schedule now, already scheduled | Cross-domain handoff only |

**Proposed Planner Writes**

Project changes:
- None required now.
- Optional later: add one new task under `Planned Purchases & Equipment Spend` for recurring planned-purchase/equipment-spend review.

Task title/description changes:
- Task 11: split into narrower tax-obligation and filing/accountant-review tasks.
- Task 96: after readback, either mark complete or rename to "Verify account balance snapshot workflow and approved current snapshot."
- Task 97: after readback, either mark complete or rename to "Verify one-time equipment spend capture in expense transactions and planned purchase closeout."
- Task 99: after readback, mark complete or rename to "Confirm April 2026 revenue records are fully entered."

Task moves/relinks:
- Task 12: flag for Growth/Sales handoff or rewrite as a Financials-only "Track sponsorship revenue after closed deals" task. Do not move from Financials without cross-domain approval.

Archive/complete candidates:
- Task 12: archive/complete only after confirming Growth/Sales already owns the pipeline tracker.
- Tasks 96, 97, 99: complete candidates after Supabase financial readback.
- Tasks 7 and 10 are already done; no write needed.

Scheduling candidates:
- Schedule soon: 8, 9, 182.
- Schedule after dependencies: 6, 96, 97, 99, 100, 101.
- Assign target only: 11, 98.
- Keep existing Aquatic scheduled items: 280, 347, 348, 349, 350.

Changed files:
- None

Verification:
- Ran Financials startup script.
- Read `AGENTS.md`, relevant memory/routing files, Company database awareness, Company registry, Financials reports, and closeout skill.
- Read-only Supabase queries for `work_domains`, `work_projects`, and `tasks` under `domain_id=2`.
- Ran `git diff --name-only` and `git status --short --branch`.

Not changed:
- No Planner records, financial records, database schema, app behavior, Company reports, or local files changed.

Unresolved questions:
- Which stale/setup tasks should be verified against finance tables before completion?
- Should Growth/Sales accept task 12 as a handoff?

Which proposed Planner changes do you approve?

## Growth/Sales Agent Reply

**Domain Summary**
Reviewed live Planner records for Growth / `sales` / `domain_id = 7`: 6 active projects and 21 task rows: 20 open, 1 done. No Planner writes were made.

Biggest issues:
- CRM implementation/schema tasks belong to App, while Growth should keep CRM meaning/model/handoff.
- Sponsorship outreach tasks are phrased like execution, but should become approval-gated research/draft tasks.
- `Campaign, Course & Merch Decisions` has one omnibus task that is hard to schedule.
- Newsletter handoff needs Growth workflow definition plus Web/App implementation handoff.
- Done task `107` is still visible as a completed task.
- Company Growth report is stale: it still says 5 projects / 13 tasks, but live Planner now has 6 projects / 21 task rows.

**Project Review**
| Project | Recommendation | Why | Supports |
|---|---|---|---|
| `26` Commercial Assets & Sponsorship Package | Keep | Core Growth asset work; needs dependency-aware scheduling. | Aquatic Club, business planning, public-readiness, backlog |
| `27` Sponsorship Outreach Pipeline | Rename candidate | Keep pipeline, but title/tasks should stress research + approved outreach, not live sending. | Aquatic Club, business planning, backlog |
| `28` Audience Support & Revenue Sequencing | Keep / split task scope | Good grouping; newsletter handoff needs Web/App implementation dependency separated. | infrastructure, business planning, backlog |
| `29` CRM & Relationship Management System | Rename / split / handoff | Growth owns CRM semantics; App owns schema/runtime/UI. Current tasks are App-heavy. | infrastructure, public-readiness |
| `30` Campaign, Course & Merch Decisions | Keep, split task | Good decision bucket, but current task combines four separate decision tracks. | roadmap/Q2, business planning, backlog |
| `69` Aquatic Club Talk Sponsorship & Follow-Up | Keep | Correctly linked to Aquatic Club Talk Readiness program; already scheduled around June 13, 2026. | Aquatic Club, public-readiness |

**Task Review**
| ID | Current task | Project | Rec | Reason | Proposed group | Scheduling posture | Blocker/approval |
|---:|---|---|---|---|---|---|---|
| 85 | Put together a media kit | 26 | Rename/keep | Relevant but too vague for scheduling. | Commercial Assets | Schedule after dependency | Brand/content proof, business context |
| 86 | Put together a sponsorship package | 26 | Rename/keep | Relevant; must stay draft/options until approved. | Commercial Assets | Schedule after dependency | Pricing/benefits approval, financial inputs |
| 102 | Fritz Aquatics reply converting free product offer to paid sponsorship | 27 | Rename/needs clarification | Assumes relationship state and conversion action. | Sponsorship pipeline | Do not schedule as send | Verify contact state; Josue approval |
| 103 | Bambu Lab apply + pitch | 27 | Rename/split | Research/application/pitch are different steps. | Sponsorship pipeline | Schedule after dependency | Program terms, media kit, approval |
| 104 | Seachem cold pitch | 27 | Rename | Live cold pitch requires approval. | Sponsorship pipeline | Defer/review later | Fit review, approval |
| 105 | Autodesk/Fusion 360 contact/apply | 27 | Keep/rename | More research-heavy than outreach-heavy. | Sponsorship pipeline | Schedule after dependency | Correct program/contact, approval |
| 106 | Fluval cold pitch | 27 | Rename | Live cold pitch requires approval. | Sponsorship pipeline | Defer/review later | Fit review, approval |
| 107 | Add Ko-fi link to YouTube descriptions | 28 | Archive candidate | Already `done`. | Audience Support | Do not schedule | None, already completed |
| 183 | Newsletter handoff website to email platform | 28 | Rename/split | Growth workflow plus Web/App implementation. | Audience Support | Schedule after dependency | Platform choice, Web/App handoff |
| 184 | Confirm near-term revenue sequencing | 28 | Keep | Still relevant, but needs current values. | Audience Support | Assign due/target only | Financial/audience verification |
| 185 | Resolve course/sponsor/Kickstarter/merch decisions | 30 | Split | Four decision tracks in one task. | Campaign/Course/Merch | Defer/review later | Josue decisions, Brand/Financials/Hardware input |
| 134 | Run CRM schema migration | 29 | Wrong domain | Schema migration is App/Supabase implementation. | App CRM implementation | Do not schedule in Growth | App owner, schema approval |
| 135 | Build CRM module in miniBIOTA_App | 29 | Wrong domain | App owns module/runtime/UI. | App CRM implementation | Do not schedule in Growth | App implementation approval |
| 278 | Prepare sponsorship and audience follow-up package | 69 | Keep | Correct parent for Aquatic Growth work. | Aquatic Club | Schedule now, already scheduled | Outreach/commitment approval |
| 336 | Define sponsor hypothesis | 69 | Keep | Good pre-talk strategy task. | Aquatic Club | Schedule now, already scheduled | Keep as assumptions |
| 337 | Draft audience follow-up sequence | 69 | Keep | Useful before talk. | Aquatic Club | Schedule now, already scheduled | Approval before use |
| 338 | Draft one-page sponsor/partner brief | 69 | Keep | Strong Aquatic readiness asset. | Aquatic Club | Schedule now, already scheduled | No pricing/claims without approval |
| 339 | Build post-talk outreach list/categories | 69 | Keep | Good post-talk operating prep. | Aquatic Club | Schedule now, already scheduled | Sensitive contact handling |
| 340 | Write post-talk follow-up email templates | 69 | Keep | Useful, but templates are not approval to send. | Aquatic Club | Schedule now, already scheduled | Brand/Josue approval before use |
| 341 | Send or queue approved follow-ups | 69 | Keep/rename | Good post-talk task; "approved" boundary is important. | Aquatic Club | Schedule now, already scheduled | Post-talk notes + explicit approval |

**Proposed Planner Writes**
Project changes:
- Rename project `27` from `Sponsorship Outreach Pipeline` to `Sponsorship Research & Approved Outreach Pipeline`.
- Rename project `29` from `CRM & Relationship Management System` to `CRM Relationship Model & App Handoff`.
- Keep projects `26`, `28`, `30`, and `69` as-is.

Task title/description changes:
- `85` -> `Draft media kit v1 for sponsor, event, and press use`.
- `86` -> `Draft sponsorship package options for internal approval`.
- `102` -> `Verify Fritz Aquatics relationship state and draft approval-gated sponsorship reply`.
- `103` -> `Research Bambu Lab creator program fit and draft approval-gated pitch`.
- `104` -> `Research Seachem sponsor fit and draft approval-gated cold pitch`.
- `105` -> `Find Autodesk/Fusion 360 creator or education contact and prepare approval-gated application/pitch`.
- `106` -> `Research Fluval sponsor fit and draft approval-gated cold pitch`.
- `183` -> `Define newsletter handoff requirements from website capture to external email platform`.
- `184` -> `Confirm near-term revenue sequencing with current financial and audience inputs`.
- `341` -> `Queue approved post-talk follow-ups after reviewing post-talk notes`.

Task moves/relinks:
- Move or hand off `134` to an App-owned CRM/schema project.
- Move or hand off `135` to an App-owned CRM implementation project.
- Keep a Growth-side CRM handoff task under project `29`, such as `Handoff Growth CRM relationship model to App for implementation planning`.

Archive/complete candidates:
- Archive candidate: `107`, since it is already done.
- Replace/split candidate: `185`; after creating separate decision tasks, archive or close the omnibus task.

Scheduling candidates:
- Keep existing Aquatic Club scheduled tasks `278`, `336`-`341`.
- Schedule `85` and `86` only after Brand/content/business-plan inputs are ready enough for a v1 asset.
- Do not schedule direct outreach tasks `102`-`106` as send/apply actions until fit review, asset readiness, and Josue approval are present.
- Schedule `183` only after platform/workflow ownership is clarified.
- Use due/target-only posture for `184` and split `185` decision tasks until Financials/Brand/Hardware/Josue inputs are ready.

Verification:
- Ran Growth startup script.
- Read Growth `AGENTS.md`, memory, relevant skills/references, Company registry/database awareness, and Company Growth reports.
- Used read-only Supabase helper for `work_domains`, Growth `work_projects`, Growth `tasks`, `work_programs`, and `work_program_projects`.
- No files, Planner records, Supabase records, app behavior, public site behavior, or Company reports were changed.

Which proposed Planner changes do you approve?

## Hardware/Engineering Agent Reply

**Domain Summary**

Reviewed **9 projects / 79 tasks**: **1 current Hardware-domain project with 7 tasks**, plus **8 legacy Engineering / Engineering & Hardware projects with 72 Hardware-owned tasks**.

Biggest issue: most Hardware work is still under `domain_id=6` / `Engineering & Hardware` even though the live Hardware domain is `domain_id=10`. The records are otherwise mostly relevant, but several need cleanup before strategic scheduling: duplicate sealing tasks, stale telemetry deployment tasks, a live-control App task mixed into Hardware, and long-horizon items phrased like commitments.

**Project Review**

| Project | Review | Why | Supports |
|---|---|---|---|
| 67 Aquatic Club Talk Hardware Proof Points | Keep | Clean, current, already scoped to 2026-06-13 readiness without live-control promises | Aquatic Club, public-readiness |
| 1 Rain System Manifold Redesign & Replacement | Keep, move to Hardware | Relevant but unscheduled; one task has wrong group label | Infrastructure, maintenance |
| 2 Atmospheric Heat Exchanger & Climate Plumbing | Keep, move to Hardware | Still relevant; mostly dependency-heavy physical validation/docs | Infrastructure, maintenance |
| 3 Lighting System Baseline | Keep, move to Hardware | Good baseline project; one task has wrong group label | Public-readiness, infrastructure |
| 4 Control Sensor Reliability Upgrade | Rename/move | Should become the near-term Biomes 2-5 sensor/controller rewire project; Biome 1/6 sensor expansion should move elsewhere | Aquatic Club, infrastructure, maintenance |
| 5 Atmosphere/Enclosure Sealing & Insulation Pass | Keep, move, dedupe | Important but contains duplicate lid/sealing tasks per biome | Infrastructure, maintenance, public-readiness |
| 6 Biome Physical Rebuilds | Keep, move | Relevant physical work; some tasks need Research/ecology input before scheduling | Maintenance, backlog |
| 7 Telemetry Pipeline & Monitoring Control | Split/rename | Current read-only snapshot service is deployed; future history/control work is mixed with completed/stale scope | Infrastructure, public-readiness, backlog |
| 8 Long Horizon Closed-System Milestones | Rename to options/backlog | Relevant but should avoid implying roadmap commitments | Backlog, Operation Living Atlas context |

**Task Review**

| ID | Current Title | Current Project | Rec | Reason | Proposed Group | Schedule | Blocker/Approval |
|---:|---|---|---|---|---|---|---|
| 276 | Collect engineering proof points, visuals, telemetry examples, and current-vs-future boundaries | Aquatic Club | Keep | Parent task is exactly right for talk readiness | Same | Schedule now | None |
| 325 | List hardware milestones and engineering facts worth showing | Aquatic Club | Keep | Useful proof-pack input | Same | Schedule now | None |
| 326 | Collect enclosure, plumbing, lighting, sensor, and telemetry visuals | Aquatic Club | Keep | Good Content handoff | Same | Schedule now | Needs asset access |
| 327 | Select telemetry or monitoring examples that make the system feel real | Aquatic Club | Keep | Strong public proof point | Same | Schedule now | Use public-safe telemetry only |
| 328 | Write current-vs-future boundaries for engineering claims | Aquatic Club | Keep | Important claim safety | Same | Schedule now | None |
| 329 | Deliver hardware proof pack to Content for deck integration | Aquatic Club | Keep | Correct cross-domain handoff | Same | Schedule now | Content coordination |
| 330 | Final technical proof review for talk deck | Aquatic Club | Keep | Needed before 2026-06-13 | Same | Schedule now | Deck must exist first |
| 38 | Design new rain manifold | Rain System | Keep + group fix | Relevant; group label says Climate | Rain System | Assign target only | Physical design approval |
| 45,52,58,65,70,76 | Replace rain system manifold | Rain System | Keep | Per-biome execution tasks depend on design | Rain System by biome | After dependency | Manifold design, physical work approval |
| 147 | Document current rain manifold hardware | Rain System | Keep | Repo says exact manifold details still missing | Rain System docs | Schedule now/soon | None |
| 148 | Document per-biome rainfall outlet routing | Rain System | Keep | Still missing detail | Rain System docs | Schedule now/soon | None |
| 149 | Document planned rain manifold redesign | Rain System | Keep | Needed before replacement | Rain System docs | After design | None |
| 150 | Identify filming, ecology, and sealing impacts | Rain System | Keep | Correct cross-domain risk task | Rain System impacts | Schedule after design | Content/Research coordination |
| 39 | Replace quick disconnects | Climate Plumbing | Keep | Relevant physical reliability work | Climate System | After dependency | Parts/physical approval |
| 40 | Test heat exchanger with 3mm glass | Climate Plumbing | Clarify/rename | Current docs mention approx 1/4-inch glass; verify intended test | Climate System | After dependency | Clarify glass spec |
| 53,72,79 | Install heat exchanger | Climate Plumbing | Keep | Per-biome physical install tasks | Climate by biome | After dependency | Physical work approval |
| 61,67 | Remove old heat exchanger and install new | Climate Plumbing | Keep | Valid replacement tasks | Climate by biome | After dependency | Physical work approval |
| 143 | Verify atmospheric heat exchanger fitting thread sizes | Climate Plumbing | Keep | Open exact-spec task | Climate System | Assign target only | Physical inspection |
| 144 | Finalize coolant glycol ratio | Climate Plumbing | Keep | Still open in docs | Climate System | After dependency | Safety/material decision |
| 145 | Document chiller-side plumbing | Climate Plumbing | Keep | Still outside current detailed spec | Climate System docs | Schedule later | Chiller access/details |
| 146 | Document future heat exchanger variants for Biomes 1 and 6 | Climate Plumbing | Keep | Not urgent; future scope | Climate backlog | Defer/review later | None |
| 41 | Source lighting system components | Lighting Baseline | Keep + group fix | Group label says Climate | Lighting System | Defer/review later | Budget/requirements |
| 151 | Document current external lighting hardware | Lighting Baseline | Keep | Still listed as missing | Lighting docs | Schedule now/soon | None |
| 152 | Document current photoperiod | Lighting Baseline | Keep | Still listed as missing | Lighting docs | Schedule now/soon | None |
| 153 | Document target spectrum and intensity by biome | Lighting Baseline | Keep | Needs ecology input | Lighting + Research | After dependency | Research input |
| 154 | Decide whether lighting control integrates with ESP32 nodes | Lighting Baseline | Keep | Future control architecture decision | Lighting backlog | Defer/review later | Hardware/App approval if live control |
| 42 | Find better screw-terminal block | Sensor Reliability | Merge/keep | Related to connector standard | Biomes 2-5 rewire | Schedule now | Parts decision |
| 43 | Identify/source weather-resistant sensors | Sensor Reliability | Keep | Directly relevant to SHT31 failures | Biomes 2-5 rewire | Schedule now | Parts decision |
| 44 | Build better sensor housing | Sensor Reliability | Keep | Directly relevant to water damage | Biomes 2-5 rewire | After dependency | Physical design |
| 48 | Add ESP32 and sensors | Sensor Reliability | Move | Freshwater has no sensors; future expansion, not Biomes 2-5 rewire | Future Sensor Expansion | Defer | Scope approval |
| 80 | Add ESP32 and sensors | Sensor Reliability | Move | Seagrass is wave-only; future expansion | Future Sensor Expansion | Defer | Scope approval |
| 155 | Select final connector standard for Biomes 2-5 controller harnesses | Sensor Reliability | Keep | Highest-priority rewire blocker | Biomes 2-5 rewire | Schedule now | Connector decision |
| 156 | Define wire color standard | Sensor Reliability | Keep | Needed before rewire | Biomes 2-5 rewire | Schedule now | None |
| 157 | Add branch fusing/switching/emergency disconnect design | Sensor Reliability | Keep | Safety/reliability design | Biomes 2-5 rewire | After connector decision | Electrical safety approval |
| 158 | Complete Biomes 2-5 rewire and sensor replacement pass | Sensor Reliability | Keep | Core live hardware task | Biomes 2-5 rewire | After dependency | Physical work approval; Content warning |
| 159 | Update Biome 2-5 hardware docs after rewire | Sensor Reliability | Keep | Required closeout | Biomes 2-5 docs | After 158 | None |
| 160 | Confirm screens and sensors display correctly after rework | Sensor Reliability | Keep | Verification task | Biomes 2-5 rewire | After 158 | Read-only verification |
| 46,54,59,66,71,77 | Remove plastic trim and seal glass lid | Enclosure | Keep | Useful per-biome sealing work | Enclosure by biome | Assign target only | Physical work approval |
| 55,63,69,74 | Remove atmosphere plastic trim and seal glass lid | Enclosure | Duplicate | Duplicates same-biome lid/sealing tasks | Merge into 54,59,66,71 | Do not schedule | Approval to merge/archive duplicates |
| 49,81 | Build new atmosphere | Enclosure | Keep | Major physical rebuild work | Enclosure by biome | Defer/review later | Scope/physical approval |
| 50,56,62,68,73,82 | Insulate atmosphere | Enclosure | Keep | Relevant closure/thermal stability work | Enclosure by biome | Assign target only | Physical work approval |
| 47,60 | Remove paint on biome | Physical Rebuilds | Keep | Physical rebuild task | Biome rebuilds | Defer/review later | Physical/ecology context |
| 51 | Add limestone wall | Physical Rebuilds | Needs clarification | Ecological/design implications | Biome rebuilds + Research | After dependency | Research/design input |
| 57,75 | Rebuild terrain | Physical Rebuilds | Keep | Physical implementation, may need ecology input | Biome rebuilds | After dependency | Research input |
| 64 | Replant and rework vegetation | Physical Rebuilds | Needs clarification | Hardware can execute; Research should guide | Research-guided rebuild | After dependency | Research input |
| 78 | Reduce excessive substrate depth | Physical Rebuilds | Keep | Physical maintenance task | Biome rebuilds | Defer/review later | Ecology/physical approval |
| 130 | Phase 4b setpoint controls in Monitoring tab publishes MQTT | Telemetry/Control | Wrong domain/split | App UI plus live-control path; Hardware owns safety boundary | App handoff + Hardware control design | Do not schedule | Explicit live-control approval |
| 131 | Create Supabase tables: biome_telemetry, telemetry_snapshot, setpoint_commands | Telemetry/Control | Split/rename | `telemetry_snapshot` exists; history/commands deferred | Future telemetry schema | Defer/review later | Schema approval |
| 132 | Build Wyse coordinator service incl history + command poller | Telemetry/Control | Split/complete candidate | Read-only snapshot coordinator deployed; history/commands not done | Split current vs future | After split | Schema/control approval for future parts |
| 161 | Confirm Wyse Python/runtime environment | Telemetry/Control | Complete candidate | Deployment is documented as complete on 2026-05-11 | Telemetry snapshot maintenance | Do not schedule | Approval to mark complete |
| 162 | Decide setpoint_commands temperature-only vs future parameters | Telemetry/Control | Keep | Useful future design decision | Future command queue | Defer/review later | Live-control/schema context |
| 163 | Decide biome_telemetry retention policy | Telemetry/Control | Keep | Needed before history logging | Future telemetry history | Defer/review later | Schema/storage policy |
| 164 | Decide wave/tide MQTT control future feature | Telemetry/Control | Keep | Valid future control question | Wave & Tide backlog | Defer/review later | Live-control approval |
| 83 | Build a working estuary system | Long Horizon | Rename | Reads like a commitment; should be exploratory | Long-horizon options | Defer/review later | Strategy approval |
| 84 | Permanently seal miniBIOTA | Long Horizon | Rename/keep | Real goal but depends on many upgrades | Closed-system backlog | Assign target only | All biome upgrades |

**Proposed Planner Writes**

Project changes:
- Move project IDs `1-8` from `domain_id=6` / Engineering to `domain_id=10` / Hardware.
- Rename project `4` to `Biomes 2-5 Sensor/Controller Rewire & Reliability`.
- Split or rename project `7` into current `Telemetry Snapshot Maintenance` plus future `Telemetry History & Command Queue / Control Boundary`.
- Rename project `8` from `Long Horizon Closed-System Milestones` to `Long Horizon Closed-System Options`.
- Optionally create `Future Sensor Expansion` for tasks `48` and `80`.

Task title/description changes:
- Fix group labels for `38` to Rain System and `41` to Lighting System.
- Clarify `40` glass thickness wording.
- Rename/split `130`, `131`, and `132` so completed read-only snapshot work is separate from future schema/control work.
- Rename `83` to exploratory wording, such as `Define estuary-system concept and prerequisites`.
- Optionally rename `84` to `Define prerequisites for permanent airtight closure`.

Task moves/relinks:
- Move `48` and `80` out of Biomes 2-5 rewire scope into `Future Sensor Expansion` or long-horizon backlog.
- Keep `130` as Hardware safety/design only and flag App implementation for App handoff.
- Keep Research-dependent physical/ecology tasks `51`, `57`, `64`, `75`, `78` in Hardware only for physical execution, with Research dependency notes.

Archive/complete candidates:
- Mark `161` complete.
- Split `132`; mark only the deployed read-only `telemetry_snapshot` coordinator portion complete.
- Merge/archive duplicate sealing tasks `55`, `63`, `69`, `74` after confirming they duplicate `54`, `59`, `66`, `71`.

Scheduling candidates:
- Already scheduled and ready: `276`, `325-330`.
- Schedule now or soon: `147`, `148`, `151`, `152`, `155`, `156`, `42`, `43`.
- Schedule after dependency: `44`, `157`, `158`, `159`, `160`, rain manifold replacements, heat exchanger installs, Research-dependent rebuilds.
- Do not schedule yet: `130`, `131`, future control/schema/history tasks, `83`, `84`.

Changed files:
- None

Verification:
- Read `AGENTS.md`, `memory/00-index.md`, Hardware database/cross-agent memory, Company Hardware brief/overview, Company Supabase helper docs, live `work_domains`, `work_projects`, and `tasks`.
- Spot-checked repo docs/services for telemetry, rain, climate, lighting, control, and enclosure state.

Not changed:
- No Planner writes, Supabase writes, firmware, MQTT, schema, OTA, Wyse/router config, deployment, or live-control behavior changed.

Unresolved questions:
- Whether you want the legacy Engineering-labeled Hardware Planner records moved to the live Hardware domain now.
- Whether to create a new `Future Sensor Expansion` project or place Biome 1/6 sensor tasks into long-horizon backlog.

Which proposed Planner changes do you approve?
