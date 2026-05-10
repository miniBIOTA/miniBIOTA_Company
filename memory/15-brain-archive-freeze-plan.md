---
id: company_brain_archive_freeze_plan
title: Brain Archive Freeze Plan
domain: company
last_updated: 2026-05-09
tags: [brain, company, migration, archive, freeze, phase-10]
---
# Brain Archive Freeze Plan

## Purpose

This file is the Phase 10 planning layer for freezing `miniBIOTA_Brain` as a read-only historical archive after active dependencies have been moved or explicitly retained as historical/archive lookups.

Phase 10 archive warnings and active-routing replacements are now applied. This did not delete Brain, move folders, make the repo physically read-only, write live Planner/Supabase records, run migrations, or make public/financial/legal/roadmap commitments.

## Current State

As of 2026-05-09, Company owns active cross-domain operating coordination, repo/domain routing, Programs/Operations governance, dependency mapping, operating cadence, active Company reports, and Company-generated exports. Brain is archive/recovery context for historical lookup, retirement provenance, old protocol, retired briefs/exports, and explicitly scoped transition checks.

A Phase 10 reference snapshot on 2026-05-09 found remaining Brain references in active repos. These counts include acceptable transition/history references, not just blockers.

| Repo | Files with Brain-reference matches |
|---|---:|
| `miniBIOTA_Company` | 36 |
| `miniBIOTA_Financials` | 6 |
| `miniBIOTA_Research` | 8 |
| `miniBIOTA_Brand` | 6 |
| `miniBIOTA_Content` | 6 |
| `miniBIOTA_Hardware` | 6 |
| `miniBIOTA_Growth` | 6 |
| `miniBIOTA_Web` | 8 |
| `miniBIOTA_App` | 8 |
| `YouTube_Extraction` | 3 |


## User Decisions On 2026-05-09

- Approved updating domain startup/closeout scripts away from Brain paths.
- Approved activating Company `domains/` reports as the normal manager-facing reporting target.
- Approved retiring Brain helper use from normal workflows while preserving Brain helper code for historical/recovery inspection.
- Approved updating App Team source-pack behavior so Brain appears as archive/recovery context, not the active Strategy Agent.
- Assigned `YouTube_Extraction` ownership to Content.
- Approved proceeding with Brain archive/freeze edits, while still not deleting, moving, or physically archiving Brain folders.
## Freeze States

| State | Meaning | Allowed work | Approval needed |
|---|---|---|---|
| Planning only | Freeze criteria and blocker scans are defined, but Brain remains transition-active where documented. | Docs-only planning, scans, issue classification, replacement-path design. | No live writes; normal docs-only approval policy. |
| Candidate freeze ready | Active blockers are removed or explicitly retained as transition/archive references. | Final read-throughs, final scan classification, proposed archive warnings. | User approval before marking Brain archive-only. |
| Read-only archive active | Brain is clearly marked historical/read-only and no fresh agent should start active work from Brain. | Historical lookup, recovery, provenance, read-only export/reference access. | Explicit user approval for archive/freeze edits. |
| Final retirement | Brain is no longer an active dependency and may be removed from normal startup/routing. | Archive lookup only; optional final tag or workspace removal. | Explicit user approval; do not delete unless separately approved. |

## Archive-Only Definition

Brain is archive-only when all of the following are true:

- Fresh Company and domain agents start from Company or their domain repo, not Brain.
- Domain agents report durable cross-domain state to Company reporting paths, not Brain briefs.
- Company exports are the active broad cold-start exports.
- Brain exports are historical or transition artifacts only.
- Brain `_system` scripts are inactive for normal operations, except explicitly retained archive-read helpers.
- Brain `_system/minibiota_tools.py` is no longer a primary helper dependency for active repo workflows.
- App Team source-pack and agent-launch surfaces do not present Brain as the active Strategy Agent.
- External tooling either no longer imports Brain helpers or has an explicit owner-approved exception.
- Brain remains searchable for provenance, old decisions, and recovery context.

## Freeze Blocker Classes

| Blocker class | Examples | Required disposition before freeze |
|---|---|---|
| Startup and closeout scripts | Domain `_system/codex_session_start.ps1` or `_system/codex_session_close.ps1` hardcoded to `M:\miniBIOTA\miniBIOTA_Brain` | Update to Company/domain paths, or explicitly classify as historical/inactive. |
| Active reporting paths | Instructions to update Brain briefs after domain sessions | Replace with Company `domains/` reporting paths after Company reporting activation is verified. |
| Helper fallback paths | References to Brain `_system/minibiota_tools.py` as fallback helper | Replace with Company/domain helper ownership, MCP/read-only awareness, or an explicit approved retained fallback. |
| Brain as active agent identity | `Strategy Agent`, `Brain Agent`, or App Team data presenting Brain as active coordinator | Replace with Company-first coordination and mark Brain historical/archive. |
| Export dependency | Active startup from Brain `0. Agent Exports/` | Use Company-generated exports and mark Brain exports historical. |
| External tool dependency | `YouTube_Extraction` importing Brain helper or returning handoff to Brain Agent | Assign owner and update handoff/helper routing, or explicitly freeze with a known exception. |
| Generated transition notes | Company `domains/` files copied from Brain with transition provenance | Keep as provenance if clearly labeled; update when reporting activation flips. |

## Allowed Remaining Brain References After Freeze

The following references may remain after freeze if clearly labeled:

- Historical provenance paths showing where a Company or domain report was copied from.
- Archive lookup instructions for old protocol, old decisions, and retired exports.
- Recovery-only notes explaining how to inspect Brain if Company context is missing.
- Migration history explaining how Brain retirement happened.
- Git history, archived migration files, and old migration provenance.

The following references should not remain as active instructions after freeze:

- Startup steps requiring Brain before Company or domain work can proceed.
- Closeout rules requiring Brain brief updates for normal domain work.
- Brain helper imports used as the first or normal helper path.
- App/team UI presenting Brain as the active Strategy Agent.
- Domain source-of-truth hierarchies where Brain outranks Company for current operations.
- Unqualified instructions to report to the Brain Agent or Strategy Agent.

## What Must Remain Readable In Brain

Do not delete or move these Brain surfaces during archive freeze without a separate explicit archive-retention decision:

- `AGENTS.md`
- `BRAIN_AGENT_PROTOCOL.md`
- `_system/agent_memory.md`
- `_system/agent_repo_registry.md`
- `_system/mcp_database_awareness.md`
- `_system/minibiota_tools.py`
- `_system/migrations/`
- `memory/`
- `skills/`
- `skills/*/reference/`
- `0. Agent Exports/`
- Brain domain overview and brief folders
- `8. Raw Footage/`
- `10. Definitions/`
- `Archive/` and other historical reference material

## What Can Be Marked Transition-Only Or Historical

These surfaces are candidates for archive labels once blockers are cleared and freeze is approved:

- Brain root `AGENTS.md`
- `BRAIN_AGENT_PROTOCOL.md`
- Brain `memory/` files, except active retirement/probation notes while migration is still underway
- Brain domain overview and brief folders
- Brain `0. Agent Exports/` outputs and old export handoffs
- Brain `_system` session scripts and sync scripts
- Brain playbooks that now have Company equivalents
- Brain-side docs mirrors and superseded docs references

## Approval Gates

Explicit user approval is required before any of the following:

- Marking Brain root files archive-only or inactive.
- Making Brain read-only in practice or changing normal startup scripts to avoid Brain.
- Deleting, moving, renaming, or archiving folders.
- Removing Brain helper imports from active tools when replacement behavior needs testing.
- Changing App Team UI/source-pack behavior.
- Writing live Planner/Supabase records.
- Running raw SQL, migrations, destructive writes, service-role actions, or live-control paths.
- Changing public website behavior, app runtime behavior, firmware/live controls, financial records, sponsor obligations, public commitments, launch targets, legal decisions, or roadmap commitments.

## Verification Scans

Run these scans before declaring candidate freeze readiness. Treat matches as classification work, not automatic failures.

```powershell
$repos = @(
  'M:\miniBIOTA\miniBIOTA_Company',
  'M:\miniBIOTA\miniBIOTA_Financials',
  'M:\miniBIOTA\miniBIOTA_Research',
  'M:\miniBIOTA\miniBIOTA_Brand',
  'M:\miniBIOTA\miniBIOTA_Content',
  'M:\miniBIOTA\miniBIOTA_Hardware',
  'M:\miniBIOTA\miniBIOTA_Growth',
  'M:\miniBIOTA\miniBIOTA_Web',
  'M:\miniBIOTA\miniBIOTA_App',
  'M:\miniBIOTA\YouTube_Extraction'
)
$pattern = 'miniBIOTA_Brain|Brain Agent|Strategy Agent|BRAIN_AGENT_PROTOCOL|_system[/\\]minibiota_tools\.py|0\. Agent Exports|Brain Relationship|Brain Reporting|reports to the Strategy Agent|Brain strategy brief|Brain App Operations brief'
foreach ($repo in $repos) {
  rg -n $pattern --glob '*.md' --glob '*.ps1' --glob '*.py' --glob '*.js' --glob '!**/.git/**' --glob '!**/node_modules/**' --glob '!**/.venv/**' --glob '!**/venv/**' --glob '!**/Archive/**' --glob '!**/archive/**' $repo
}
```

Also scan Brain itself for archive-warning readiness after a freeze edit is approved:

```powershell
rg -n 'archive-only|historical|transition-only|superseded|Company owns active cross-domain' --glob '*.md' --glob '!**/.git/**' M:\miniBIOTA\miniBIOTA_Brain
```

## Freeze Readiness Checklist

- [x] Company reporting activation is verified and domain agents use Company reporting paths for normal closeout.
- [x] Company exports are the active broad cold-start exports.
- [x] Brain exports are labeled historical/archive through root Brain warnings and Company export activation.
- [x] Startup and closeout scripts no longer require Brain for normal domain work.
- [x] Brain helper fallback paths are retired from normal workflows and retained only as historical/recovery code.
- [x] App Team source-pack no longer presents Brain as active Strategy Agent.
- [x] `YouTube_Extraction` handoff/helper ownership is assigned to Content.
- [x] Phase 10 active-reference scans were run; remaining matches are migration/archive/helper-provenance references, not live Brain reporting commands.
- [x] Brain archive warnings are applied to root README, AGENTS, protocol, memory index, and Brain session helpers.
- [x] User explicitly approved archive/freeze edits on 2026-05-09.

## Rollback And Recovery

If a freeze edit causes confusion or strands needed context:

1. Keep Brain readable and searchable.
2. Reopen the specific blocker in this file or the Brain retirement plan.
3. Restore active instructions in Company or the relevant domain repo, not by silently reactivating Brain as the top-level coordinator.
4. Record whether the attempted Brain usage was historical lookup, missing Company replacement, or old habit.
5. Defer final retirement until the missing replacement has been added and verified.

## Recommended Next Work

The next Phase 10 work unit should classify the remaining active references from the 2026-05-09 scan into accepted provenance, historical/archive lookup, and true freeze blockers. It should not mark Brain archive-only until the blocker list is reviewed and explicit freeze approval is given.
