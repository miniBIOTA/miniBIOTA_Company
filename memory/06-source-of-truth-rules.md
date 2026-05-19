---
title: Source Of Truth Rules
last_updated: 2026-05-19
---
# Source Of Truth Rules

## Hierarchy
Use this order when sources disagree:
1. User direction in the current session.
2. `AGENTS.md` for hard Company Agent operating rules.
3. `COMPANY_AGENT_PROTOCOL.md` for Company-level operating protocol.
4. `_system/agent_repo_registry.md` for active repo/domain routing, risk levels, reporting-path transition state, and Supabase responsibility boundaries.
5. `memory/` for durable company purpose, strategy, governance, roadmap principles, cross-domain relationships, and recurring decisions.
6. Relevant `skills/*/SKILL.md` files for repeatable workflow rules.
7. Company `domains/company/company_brief.md` for manager-facing strategy-level current state.
8. Supabase/App Planner for structured/queryable projects, tasks, milestones, and operational records when relevant.
9. Operation Living Intelligence derived layers, including Memgraph relationship projections, Company local vector retrieval, and future approved retrieval layers, for noncanonical relationship context and semantic source discovery only.
10. `skills/*/reference/` files for exact workflow reference material.
11. Historical Brain company brief and compiled Brain exports as archive reference artifacts only.

Chat history and private model memory are never durable project truth.
Memgraph, vector indexes, retrieval manifests, embeddings, generated readbacks, and other OLI outputs are derived awareness layers. They can help agents find context, but consequential claims must be verified against Markdown, Supabase, domain source docs, or approved source records.

## AI Interface And Handoff Rules
Treat the repo, Company report, domain reports, and structured records as the real memory. If work moves between interfaces or agents, write durable conclusions back to the appropriate source before treating the handoff as complete.

Old Claude-specific routing guidance is historical. Codex is the active Company Agent interface for repo-heavy execution, direct file changes, scripts, tooling, and multi-step implementation work in this repo.

## Final Structure
- `AGENTS.md`: hard operating rules, startup/routing, source-of-truth order, write policy, safety rules, and closeout format.
- `COMPANY_AGENT_PROTOCOL.md`: Company-owned top-level operating protocol.
- `_system/agent_repo_registry.md`: active repo/domain routing, reporting-path transition state, risk levels, and Supabase responsibility boundaries.
- `memory/`: durable company context, governance rules, roadmap principles, cross-domain relationships, source boundaries, and recurring decisions.
- `skills/`: active repeatable Company Agent workflows.
- `skills/*/reference/`: exact workflow reference material, including `skills/review-roadmap-implications/reference/strategic-roadmap.md`.
- `archive/superseded/`: historical docs only; do not use archive files as active operating instructions.
- Company report: manager-facing strategy-level summary under `domains/company/company_brief.md`.
- Supabase/App Planner: structured records only when current projects, tasks, milestones, or operational records matter.
- Operation Living Intelligence derived layers: Memgraph for noncanonical relationship/provenance traversal and Company local vector retrieval for semantic source discovery. Supabase `vector` is available, but OpenAI/API-key-dependent pgvector embedding is not approved after cost/credential review. Broader pgvector tables, indexes, schedules, runtime integration, Memgraph coupling, public search, sensitive sources, and canonical writeback remain separately approval-gated. These layers do not approve canonical writeback, public claims, Planner records, media metadata, or app behavior.

## Operating Ownership Split
Company is the active owner for cross-domain operating coordination: planning strategy, Programs/Operations governance, roadmap cadence, dependency mapping, cross-domain operating memory, and review rhythm.

Company owns the active repo/domain routing registry. Brain remains history/recovery, retired brief/export archive, and retirement-provenance context during probation. Historical Brain briefs are archive lookup only, not the detailed operating workspace.

App owns Planner runtime behavior, schema, UI, and Supabase-backed workflow implementation. Company owns how Company uses Planner for strategy, governance, cadence, and coordination.

## Supabase Boundaries
Company projects and tasks are structured records in App Planner/Supabase. Company-owned Planner records live under `work_domains.key = company_ops` / `domain_id = 1` in `work_projects` and `tasks`. Do not recreate task state in Markdown as an active source of truth. Do not write to Supabase unless explicitly scoped.

Planner project/task create, edit, status, done/reopen, archive, delete, project-link, subtask, schedule, or recurrence changes are live Supabase writes and require explicit user approval.

## Planner Versus Commitments
Planner workflow state is operational task/project status. It does not create roadmap commitments, public promises, business commitments, launch targets, financial commitments, sponsor obligations, or legal decisions. Those require explicit user approval and the appropriate strategy or domain source update.

## Domain Ownership
Company coordinates planning and cross-domain sequencing. It does not replace domain-owned implementation queues, source docs, codebases, briefs, or structured records. When a Company Planner task depends on domain execution, identify the downstream owner and durable handoff surface.

## Docs Status
Original Company docs have been absorbed into `memory/`, `skills/`, skill reference files, or `archive/superseded/`. No active Company docs remain as workflow authorities. If a future exact-reference need appears, place it in the relevant `skills/*/reference/` folder unless explicitly scoped otherwise.

## Structured Records
Do not write to Supabase or structured records unless explicitly asked. If a recommendation depends on current structured state, verify it before answering in depth and report any live-check limitation.

## Derived Intelligence Layers
Use Memgraph and vector retrieval as helper context only. A graph edge, similarity hit, generated readback, or embedding result does not create a canonical relationship, public-safe claim, Planner state, media metadata state, or approved App/Web/domain behavior. Refreshes, imports, embedding jobs, vector index changes, scheduled sync, and writeback require explicit approval unless a scoped approved helper or closeout rule already covers the exact action. The OpenAI/API-key-dependent pgvector helper path is not approved; the no-cost local retrieval helper requires source verification before consequential use.

## Brain Mirrors
Brain no longer keeps an active Company docs mirror after the Company restructure. Active workflow authority lives in this repo memory/skills architecture. Do not edit, sync, or recreate retired Brain docs mirrors.
