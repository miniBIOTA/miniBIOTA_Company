---
id: company_operations
title: 1. Company Operations
domain: company_operations
last_updated: 2026-04-17
tags: [operations, strategy, roadmap, business-planning, governance]
---
# 1. Company Operations

## Scope
- Defines the company's mission, vision, strategic direction, and operating priorities for the miniBIOTA program.
- Serves as the top-level business context for downstream engineering, content, brand, and web execution.

## Current State
- miniBIOTA has already been tested as a fully closed working concept in Q1 2026.
- The near-term operating agenda is still being formalized; the business plan is not yet assembled.
- Strategic roadmap detail is thin beyond early 2026. Q2 goals are not yet defined.
- Tasks are tracked in the Supabase `tasks` table, queryable by domain. See `agent_memory.md` for query patterns.
- `miniBIOTA_Brain` is the shared source of truth. Claude Code and Codex are equal-peer operating interfaces. Current-state updates should be authored in the vault and committed to git.
- The operating model uses topic-based knowledge folders (numbered 1-10), each containing an overview file and focused knowledge documents. No executive persona framing is used.

## Key Facts
- Mission: make Earth's ecological complexity visible and accessible on a human scale through engineered, documented closed biospheres.
- Vision: build an ever-growing living biosphere that functions as an interactive physical model of Earth's ecosystems while generating new ecological knowledge.
- Design trajectory is shifting from an emergent mixed-origin ecosystem toward a measurable, intentionally structured ecological architecture.
- Current design priorities include climate control precision, atmospheric sealing, freshwater-marine integration, producer efficiency, sensor expansion, and standardized food web architecture.

## Priorities
- Build a business plan that aligns operations, funding, storytelling, and hardware development.
- Complete the content strategy and story arc so public communication matches the current stage of the project.
- Finish species card coverage and finalize species information for public-facing use.
- Expand the roadmap beyond Q1 2026 into decision-ready quarterly objectives.

## Risks / Gaps
- The roadmap is mostly unfilled after the first confirmed milestone, limiting strategic visibility.
- Core business planning is not yet documented in a single operating plan.
- Q2 goals are not yet defined in `Strategic Roadmap.md` — this is the most urgent planning gap.
- Task priorities and quarter targets were assigned by Brain Agent during migration and need Josue's review.

## Files In This Folder
- `ai_operating_interface_guide.md` — practical guidance for when to use Claude Code vs Codex
- `Strategic Roadmap.md` — quarterly milestone planning (tasks now in Supabase, not a tasks.md file)


## Vault Sync Status
- Last verified: —
- Known divergences: none noted
- Next sync check: flag during relevant domain session