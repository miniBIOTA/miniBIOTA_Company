---
name: company-session-start
description: Use to bootstrap a Company-led miniBIOTA coordination session with the lightest safe context.
---
# Company Session Start

## Trigger Phrases
- "start session"
- "bootstrap"
- "initialize"
- "orient"
- "load Company context"
- "Company session"
- "cross-domain startup"

## Required Memory Files
- `AGENTS.md`
- `COMPANY_AGENT_PROTOCOL.md`
- `memory/00-index.md`
- `_system/agent_repo_registry.md` when routing, reporting, risk, or database ownership matters
- `_system/database_awareness.md` and `memory/11-helper-and-database-awareness-migration.md` when database awareness or helper paths matter
- `memory/12-brain-skills-migration.md` when Brain skill replacement or playbook routing matters

## Workflow
1. Run `_system/codex_session_start.ps1` when practical.
2. Read Company startup files in the order defined by `AGENTS.md` and `memory/00-index.md`.
3. Identify whether the request is Company-owned, domain-owned, App-owned, Brain transition/archive, structured-record work, or mixed.
4. Load the smallest relevant memory files, skills, references, domain reports, and domain repo context needed to act safely.
5. Use Company exports only for broad cold starts, cross-domain architecture work, or unclear requests.
6. Use Supabase/App Planner reads only when current structured project, task, milestone, or operational record state matters.
7. State write-mode, approval, sandbox, or environment restrictions that affect the session.

## Do-Not-Do Boundaries
- Do not load broad exports by default for a focused request.
- Do not treat chat history or private model memory as source of truth.
- Do not write live Planner/Supabase records without explicit approval.
- Do not update domain agents, Brain archive status, helper code, app behavior, public site behavior, or domain implementation files unless explicitly scoped.