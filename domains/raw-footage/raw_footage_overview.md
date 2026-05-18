---
id: raw_footage
title: 8. Raw Footage
domain: raw_footage
last_updated: 2026-05-18
tags: [raw-footage, media-assets, storage, tagging, retrieval, supabase, media-library]
reporting_status: company_active
reporting_phase: phase_10_reporting_active
source_repo: miniBIOTA_Brain
source_path: "M:\\miniBIOTA\\miniBIOTA_Brain\\8. Raw Footage\\raw_footage_overview.md"
copied_on: 2026-05-09
brain_transition_status: "Company reporting active; Brain source historical/archive lookup only."
---
# 8. Raw Footage

## Phase 9 Ownership Decision

Company owns active routing for this surface. Raw Footage remains split by responsibility:

- Company owns cross-domain proof/archive strategy and this manager-facing overview.
- App owns Media Library runtime, schema, indexing, local-file access, and write behavior.
- Content owns production use of footage, selected clips, story proof/context, and publishing workflow.
- Research owns ecological interpretation and claim discipline for what footage can prove.
- Raw media files remain outside git under `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos`.

Brain keeps the original `8. Raw Footage` copy as transition/history until archive freeze. This note does not authorize media indexing, Supabase writes, file moves, App changes, or public publication.

## Recent Company Coordination

- **2026-05-18:** Operation Living Intelligence Wave 6 Raw Footage provenance has been archived under `archive/superseded/operation-living-intelligence/`. Those records preserve the media preflight, stream metadata, local/offline visual-AI, and raw-folder side-effect proof history, but they are not active Raw Footage operating instructions.
- Raw Footage's active boundary remains unchanged: source media stay outside git, raw source folders are read-only unless explicitly scoped, and any future media inspection, frame/clip extraction, model input, cache, Media Library metadata, public output, or canonical writeback still needs separate approval.

> Phase 3 transition note: This Company report was originally copied from `M:\miniBIOTA\miniBIOTA_Brain\8. Raw Footage\raw_footage_overview.md` on 2026-05-09. As of Phase 10, this Company path is the active reporting target; the Brain source is historical/archive lookup only.

## Scope
Documentation for the miniBIOTA media asset system â€” how raw photos and videos are stored, indexed, tagged, and retrieved. The media tagging and review workflow lives in the Electron desktop app (Site Admin â†’ Media Library tab).

---

## Architecture: Option A (Local Files + Supabase Metadata)

All media files stay on disk at their original paths. Supabase stores metadata and relationship pointers only. No files are uploaded to Supabase Storage â€” the desktop Electron app reads them directly via `file://` protocol.

**Media root:** `M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos`

**Why this architecture:** ~2TB of content. Uploading to cloud storage is impractical at that scale. Supabase holds path pointers, dates, tags, and relationships. The desktop app renders images and plays videos from disk using Electron's Chromium renderer.

---

## Supabase Schema â€” 9 Tables

### Core table: `media_assets`

| Column | Type | Notes |
|---|---|---|
| `id` | bigint PK | auto |
| `filename` | text | base filename only |
| `local_path` | text UNIQUE | full absolute disk path â€” uniqueness constraint makes re-indexing idempotent |
| `file_type` | text | `photo` or `video` |
| `size_bytes` | bigint | |
| `captured_date` | date | parsed from filename or file mtime (see indexer logic) |
| `date_parse_source` | text | `filename`, `file_mtime`, or `unparsed` |
| `description` | text | what's in the clip â€” main field for search + chronicle writing |
| `notes` | text | internal production notes â€” camera angles, quality flags, re-shoot ideas |
| `reviewed` | boolean | DEFAULT false â€” explicit completion tracking for tagging workflow |
| `created_at` | timestamptz | |

### Junction tables (many-to-many relationships)

| Table | Columns | Purpose |
|---|---|---|
| `media_species` | `(media_id, species_id)` FK + CASCADE | tag which species appear in this clip |
| `media_biomes` | `(media_id, biome_id)` FK + CASCADE | tag which biome environment is shown |
| `media_systems` | `(media_id, system_id)` FK + CASCADE | tag physical infrastructure shown (lighting, wave, etc.) |
| `media_chronicles` | `(media_id, chronicle_id)` FK + CASCADE | link to a chronicle entry this clip documents |
| `media_tag_links` | `(media_id, tag_id)` FK + CASCADE | free-form tag associations |

### Tag tables

| Table | Columns | Notes |
|---|---|---|
| `media_tags` | `id`, `name` UNIQUE, `category` | global tag registry; category is optional (e.g. "behavior", "substrate") |
| `media_projects` | `id`, `name`, `description` | grouping concept for production projects |
| `media_project_assets` | `(media_id, project_id)` | many-to-many project grouping |

**All FK columns are indexed.** Additional indexes on `captured_date`, `file_type`.

---

## Indexing System

### How files get into the database

Run the CLI indexer or use the Re-index button in the app UI. Both use the same core module.

**CLI:** `node tools/index-media.js "M:\miniBIOTA\miniBIOTA_Files\8. Raw Footage\Photos & Videos"`

**In-app:** Site Admin â†’ Media Library â†’ "Re-index folder" button (prompts for folder path, shows live progress, auto-reloads list on completion).

### `tools/indexer-core.js` â€” the shared module

Exported as `async function indexMedia(folder, onProgress) â†’ { total, newFiles }`.

Used by both the CLI script and the Electron IPC handler. Logic:
1. Recursively walks the folder (`walkDir`)
2. Filters for photo and video extensions (PHOTO_EXTS, VIDEO_EXTS sets)
3. Parses capture date from filename â€” two patterns tried:
   - `YYYY-MM-DD` or `YYYY_MM_DD` separator variants
   - Compact `YYYYMMDD` (constrained to 2010â€“2035 range)
   - Falls back to file `mtime` if no filename date found
4. Records `date_parse_source`: `filename`, `file_mtime`, or `unparsed`
5. Batch inserts 100 records at a time with `Prefer: resolution=ignore-duplicates` â€” fully idempotent, safe to re-run at any time without creating duplicates

### `tools/index-media.js` â€” CLI wrapper

Standalone Node.js script (no npm deps â€” uses only built-in `fs`, `path`, `https`). After indexing writes two review files to the same folder:
- `review-mtime-dates.txt` â€” files where date came from mtime (less reliable)
- `review-no-dates.txt` â€” files with no parseable date at all

### Electron IPC bridge

Because `nodeIntegration: false` / `contextIsolation: true`, the renderer (browser) cannot call Node.js directly. The bridge:

- **`preload.js`** â€” exposes `window.electronAPI` via `contextBridge`:
  - `reindexMedia(folder)` â†’ IPC invoke â†’ returns `{ success, total, newFiles }` or `{ success: false, error }`
  - `onReindexProgress(cb)` â†’ listens for `reindex-progress` events with `{ done, total }`
  - `removeReindexProgress()` â†’ cleans up listener after re-index completes

- **`main.js`** â€” IPC handler `reindex-media` calls `indexer-core.js`, sends progress events back to renderer via `event.sender.send('reindex-progress', progress)`

---

## Media Library UI â€” Site Admin Tab

**Location:** Desktop app â†’ Site Admin â†’ Media Library (subnav button)

### Filter bar

| Control | Behavior |
|---|---|
| Search input | Filename `ilike` search, 350ms debounce |
| All / Photos / Videos | `file_type` filter |
| Year select | `captured_date` range filter (YYYY-01-01 to YYYY-12-31) |
| Unreviewed only | Toggles `reviewed=eq.false` â€” yellow button turns active when on |
| Re-index folder | Prompts for path, runs indexer, shows live progress in button text |

### List column (left, 38% width)

Paginated 50 per page. Each row shows:
- Colored dot (green = photo, blue = video)
- Filename (truncated at 38 chars)
- Capture date
- `ph`/`vd` type badge
- Status badge: **âœ“** (green, `media-row-reviewed`) Â· **â—‘** (yellow, `media-row-partial`, has species tags but not reviewed) Â· blank (untouched)

### Panel column (right) â€” Two-tab design

**Always visible above tabs:** preview (image renders inline; video plays with controls via `<video controls preload="metadata">`), file info block (filename, date, size, file type, local path).

**Tab 1 â€” View (default)**
Read-only. Shows all tagged data as chips:
- Species chips (teal)
- Biomes chips (teal)
- Systems chips (teal)
- Chronicle chip (blue, different shade)
- Free-form tags chips (green tint)
- Description text (if set)
- Notes text (if set, italic)
- "Edit Tags â†’" button to switch to edit tab

**Tab 2 â€” Edit Tags**
Full form with sticky save bar at top. Each field has a short italic hint explaining its purpose:

| Field | Hint shown |
|---|---|
| Captured Date | When this was captured â€” used to group files by timeline |
| Species | Which species appear in or are relevant to this clip. Multiple allowed. |
| Biomes | The biome environment visible or relevant â€” e.g. Tidal Marsh, Brine Pool, Open Ocean |
| Systems | Physical infrastructure shown â€” lighting rigs, wave generators, climate systems, enclosure hardware |
| Chronicle | Link to an existing chronicle entry â€” useful when this clip documents a specific milestone or event |
| Free-form Tags | Custom search keywords. Category optional â€” e.g. tag: spawning, category: behavior |
| Description | What's happening in the clip â€” key moments, subject focus, environmental context. Main field for search and future chronicle writing. |
| Notes | Internal production notes â€” camera angles, lighting conditions, re-shoot ideas, clip quality flags |

### Reviewed toggle

Lives in the panel header, always visible regardless of tab:
- **Unreviewed state:** dim button "Mark as Reviewed", hover turns green
- **Reviewed state:** green button "âœ“ Reviewed â€” click to undo", hover turns red

Clicking does an immediate PATCH to `media_assets.reviewed` (no save required). Updates the list row badge in-place without reloading. When un-reviewing a file that has species tags, the badge correctly reverts to â—‘.

Reviewed status is intentionally **independent of the tag save** â€” clearing all tags and saving does NOT un-review a file. They are separate actions by design.

### Save behavior

On save:
1. PATCHes `media_assets` (captured_date, description, notes)
2. Delete-inserts all junction table rows (species, biomes, systems, chronicles, tag_links) â€” delete all for this media_id, then re-insert checked values
3. Upserts any new free-form tags into `media_tags` by name (merge-duplicates)
4. Updates `mediaCurrentState` in memory
5. Re-renders the View tab immediately (chips update without re-clicking the file)
6. Reloads the list (refreshes badges)

### Systems reference (hardcoded in UI)

The `media_systems` junction uses integer IDs that map to physical infrastructure:

| system_id | Name |
|---|---|
| 1 | Climate |
| 2 | Rain |
| 3 | Lighting |
| 4 | Wave & Tide |
| 5 | Control System |
| 6 | Enclosure |

These match the system IDs used throughout the rest of the app (observations, story threads, etc.).

---

## Key Technical Notes for Future Agents

- **Re-indexing is always safe.** The `local_path UNIQUE` constraint + `resolution=ignore-duplicates` means running the indexer on the same folder twice creates no duplicates. Run it any time new content is added to the folder.

- **Videos play inline in Electron.** Chromium supports `.mp4`, `.mov`, `.m4v` natively. Exotic formats (`.mts`, `.m2ts`, `.wmv`) may not play â€” the player shows a fallback message with the path so the user can open in an external player.

- **Reviewed â‰  tagged.** A file can be reviewed without tags (empty note), and tagged without being reviewed. The three-state badge system (âœ“ / â—‘ / blank) reflects this distinction. Use the "Unreviewed only" filter to find files still needing review.

- **Description vs. Notes distinction:** `description` is audience-facing context (what's in the clip â€” feeds future chronicle writing). `notes` is internal/production (camera quality, re-shoot flags). Keep them separate.

- **Chronicles link:** The `media_chronicles` junction links a clip to an existing chronicle entry. This is a forward reference â€” it marks that the clip documents a specific event. It does NOT create a chronicle; chronicles still need to be created separately in the Chronicles section of admin.

- **Free-form tags are global.** `media_tags` is a shared registry. If you add tag name "spawning" on one clip, the same tag ID is reused on any other clip that gets that tag. Category is optional metadata on the tag itself (not per-use).

- **mediaCurrentState** â€” the JS state object kept in memory while a panel is open: `{ asset, taggedSpecies (Set), taggedBiomes (Set), taggedSystems (Set), taggedChronicle }`. This is what powers the View tab chip rendering without re-fetching after save. It is cleared when a new file is selected.

---

## File Map

| File | Purpose |
|---|---|
| `M:\miniBIOTA\miniBIOTA_App\migrations\001_media_schema.sql` | Creates all 9 tables + indexes |
| `M:\miniBIOTA\miniBIOTA_App\tools\indexer-core.js` | Shared indexer logic (used by IPC + CLI) |
| `M:\miniBIOTA\miniBIOTA_App\tools\index-media.js` | CLI runner for terminal indexing |
| `M:\miniBIOTA\miniBIOTA_App\preload.js` | Electron IPC bridge (`window.electronAPI`) |
| `M:\miniBIOTA\miniBIOTA_App\main.js` | IPC handler `reindex-media` + preload config |
| `M:\miniBIOTA\miniBIOTA_App\js\admin.js` | All media library UI logic (functions starting with `media`) |
| `M:\miniBIOTA\miniBIOTA_App\css\dashboard.css` | All media library styles (classes starting with `.media-`) |
| `M:\miniBIOTA\miniBIOTA_App\index.html` | Media Library section HTML (`#admin-sec-media`) |

---

## Workflow: Using the Media Library

1. **First-time setup:** Run the CLI indexer or click Re-index to populate `media_assets` from disk.
2. **Re-index after adding content:** Click "Re-index folder" in the filter bar any time new photos/videos are added to the folder.
3. **Tagging workflow:** Click a file in the list â†’ it opens on the View tab. Switch to Edit Tags to add species, biomes, systems, chronicle link, free-form tags, description, notes. Save.
4. **Mark as reviewed:** Once you're satisfied with a file's tags, click "Mark as Reviewed" in the panel header. The list badge turns green âœ“.
5. **Track progress:** Use "Unreviewed only" filter to see remaining work. â—‘ = has some tags but not marked complete. Blank = untouched.

---

## Planned / Deferred

- **Chronicles note field:** The user wants a rough-notes field on media assets specifically for chronicle writing context (separate from `notes`). More discussion needed before implementing â€” held off intentionally.
- **Phase 3 PWA / Phase 4 Android:** Mobile field logging (`log.html`, `manifest.json`, `service-worker.js`, Capacitor `.apk`) â€” separate future phase.
- **`media_projects` table:** Created in schema but not yet wired to any UI. Future use for grouping clips by production project.
