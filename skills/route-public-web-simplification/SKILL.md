---
name: route-public-web-simplification
description: Use when public-only website simplification, admin removal, route cleanup, or web architecture guardrails need Company routing.
---
# Route Public Web Simplification

## Trigger Phrases
- "site simplification"
- "public-only website"
- "admin removal"
- "route cleanup"
- "private web surface"
- "web simplification plan"
- "public architecture"

## Required Memory Files
- `memory/02-company-safety-rules.md`
- `memory/05-cross-domain-relationships.md`
- `memory/06-source-of-truth-rules.md`
- `memory/08-agent-operating-architecture.md`
- `_system/agent_repo_registry.md`

## Workflow
1. Confirm whether the session is only routing/consulting or explicitly starting Web implementation.
2. Treat Web as owner of routes, templates, styles, tests, redirects, public behavior, and implementation details.
3. Treat App as owner of private operator/admin surfaces.
4. Use Company to preserve public-only strategy, cross-domain implications, approval gates, and downstream owners.
5. If implementation is scoped, switch to the Web repo and load Web `AGENTS.md`, `memory/00-index.md`, relevant Web memory, and matching Web playbooks/references.
6. Keep each simplification unit closeable and verifiable.
7. Update Company or Brain transition context only when strategy-level state changes.

## Do-Not-Do Boundaries
- Do not remove admin, login, routes, templates, CSS, JS, imports, tests, docs, or redirects unless explicitly scoped.
- Do not reintroduce private web product areas.
- Do not modify website behavior from a Company documentation-only session.
- Do not treat old Brain web simplification references as active Web implementation authority without checking Web repo context.