---
name: sync-domain-context
description: Use to verify, route, or migrate domain context between Company reports, active domain repos, and Brain archive/provenance surfaces.
---
# Sync Domain Context

## Trigger Phrases
- "sync domain context"
- "refresh context"
- "check reports"
- "domain context migration"
- "Brain archive lookup"
- "Company reporting"
- "mirror cleanup"

## Required Memory Files
- `memory/00-index.md`
- `memory/06-source-of-truth-rules.md`
- `memory/08-agent-operating-architecture.md`
- `memory/09-source-of-truth-and-routing.md`
- `_system/agent_repo_registry.md`
- `domains/README.md`
- Brain retirement plan when migration phase or activation status matters

## Workflow
1. Identify the domain and whether the request is verification, migration, reporting update, or cleanup.
2. Confirm whether the domain uses active repo-local `AGENTS.md`, `memory/`, `skills/`, and `skills/*/reference/` sources.
3. Check the active Company report under `domains/` and Brain archive/provenance paths only as needed.
4. Route detailed domain truth to the active domain repo; route manager-facing reporting to Company reports only when scoped.
5. Domain-agent references should use Company reporting paths for normal reporting after Phase 10 activation.
6. If Company report files change, rebuild Company exports.
7. Do not change Brain vault sources during normal reporting; Brain is historical/archive lookup unless explicit transition maintenance is scoped.
8. Report any drift, active dependency, or owner follow-up clearly.

## Do-Not-Do Boundaries
- Do not recreate disabled docs mirrors.
- Do not copy domain-specific detailed docs into Company memory.
- Do not edit domain repos unless explicitly scoped.
- Do not reactivate Brain as the active reporting target.
