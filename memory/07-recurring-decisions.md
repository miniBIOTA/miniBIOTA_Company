---
title: Recurring Decisions
last_updated: 2026-05-05
---
# Recurring Decisions

## Active Decisions
- Codex is the primary operating interface for `miniBIOTA_Company`.
- Claude-specific guidance is legacy reference unless Josue explicitly reactivates it.
- The Company Agent architecture is moving toward `AGENTS.md`, `memory/`, `skills/`, `skills/*/reference/`, and `archive/`.
- `docs/agent_protocol.md` was absorbed into active architecture during Phase 2 Batch 1 and archived at `archive/superseded/agent_protocol.md`.
- `docs/company_operations_overview.md` was absorbed into active memory and skills during Phase 2 Batch 2 and archived at `archive/superseded/company_operations_overview.md`.
- `docs/ai_operating_interface_guide.md` was absorbed into active memory and skills during Phase 2 Batch 3 and archived at `archive/superseded/ai_operating_interface_guide.md`.
- Remaining old `docs/` files stay in place until explicitly scoped for migration.
- Brain company brief updates are for manager-facing state changes, not every working note.
- Company planning must identify downstream domains when decisions affect Research, Hardware, Content, Brand, Growth, Financials, Web, App, Raw Footage, or Brain.
- Commit/push and Brain docs sync are not hard closeout rules. They happen only when explicitly scoped or requested, because migration is moving active context out of mirrored docs and git publication should remain user-directed.
- No executive persona framing is used for Company memory or planning.
- Supabase tasks are the structured source for task state when current operating status matters; do not recreate task truth in Markdown.
- Cross-interface and cross-agent handoffs must use durable files, briefs, or structured records as the handoff surface. Chat history alone is not enough.

## Recurring Constraints
- Do not create business commitments, public promises, financial commitments, launch targets, legal decisions, sponsor obligations, or roadmap commitments without explicit user direction.
- Do not write to Supabase or structured records unless explicitly scoped.
- Do not change app behavior or public site behavior unless explicitly scoped.
- Keep current, planned, proposed, and aspirational states separate.

## Candidate Future Decisions
Use `memory/inbox.md` for candidate durable decisions that need review before becoming active memory.
