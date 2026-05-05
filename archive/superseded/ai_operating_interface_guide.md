---
id: ai_operating_interface_guide
title: AI Operating Interface Guide
domain: company_operations
last_updated: 2026-04-06
tags: [operations, ai, workflow, codex, claude, superseded]
superseded_by:
  - ../../memory/01-agent-purpose.md
  - ../../memory/02-company-safety-rules.md
  - ../../memory/03-strategy-and-governance.md
  - ../../memory/05-cross-domain-relationships.md
  - ../../memory/06-source-of-truth-rules.md
  - ../../memory/07-recurring-decisions.md
  - ../../skills/update-company-memory/SKILL.md
  - ../../skills/company-session-closeout/SKILL.md
archived_on: 2026-05-05
---
# AI Operating Interface Guide

> Superseded: This guide was absorbed into active Company Agent memory and skills during Phase 2 Batch 3. Use `AGENTS.md`, `memory/`, and `skills/` for current operating rules. Claude-specific routing below is historical unless Josue explicitly reactivates it.

## Core Rule
Claude Code and Codex are equal-peer Brain Agent interfaces for `miniBIOTA_Brain`.

Use either one. Treat the vault and database as the real memory.

## 30-Second Cheat Sheet
- Use Claude Code for conversation-heavy synthesis, brainstorming, and existing Claude-centered project flows.
- Use Codex for repo-heavy execution, direct file changes, scripts, tooling, and multi-step implementation work.
- Use either one for reading the vault, updating notes after approval, rebuilding exports, and session closeout.

## Handoff Rule
If one interface starts the work and the other finishes it:
- Treat the vault as the handoff surface.
- Write durable conclusions back into notes, tasks, or approved database records.
- Do not rely on chat history alone.

## Tie-Breaker
- conversation-heavy synthesis -> Claude Code
- repo-heavy execution -> Codex

If the work shifts mid-session, switching interfaces is fine as long as the durable state is written back into the system.
