# Company Agent Exports

This folder contains Company-side export tooling and generated exports for the Brain retirement migration.

## Files

- `build_company_exports.ps1`: primary Company export builder. Reads Company `domains/` reports only.
- `build_ceo_exports.ps1`: compatibility wrapper that calls `build_company_exports.ps1`.
- `miniBIOTA_company_master_context.md`: Company-named master context export.
- `miniBIOTA_company_executive_brief.md`: Company-named executive brief export.
- `miniBIOTA_master_context.md`: compatibility export name with the same Company-generated master context content.
- `miniBIOTA_ceo_brief.md`: compatibility export name with the same Company-generated executive brief content.

## Transition Rule

These are the active Company exports during Phase 11 Brain retirement probation. They read Company `domains/` reports only. Brain exports are historical/archive artifacts. Do not use export generation as authorization for Planner, Supabase, app, web, firmware, finance, sponsor, legal, public, or roadmap-commitment changes.
