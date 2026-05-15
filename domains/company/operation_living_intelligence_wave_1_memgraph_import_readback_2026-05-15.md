---
id: operation_living_intelligence_wave_1_memgraph_import_readback_2026-05-15
title: Operation Living Intelligence Wave 1 Memgraph Import Readback
domain: company_operations
date: 2026-05-15
status: disposable_import_smoke_test_passed
tags: [operation-living-intelligence, memgraph, docker, graph-seed, readback]
---
# Operation Living Intelligence Wave 1 Memgraph Import Readback

## Purpose

This records the first actual local Memgraph import/readback test for the Wave 1 Lake Post-Seal graph seed.

Result: **the disposable local import worked and the safety readbacks passed.**

## Runtime

Docker Desktop was installed through the official `winget` package:

```powershell
winget install --id Docker.DockerDesktop -e --source winget --accept-package-agreements --accept-source-agreements
```

Docker CLI version after install:

```text
Docker version 29.4.3
```

WSL was required for Docker Desktop. An elevated `wsl --install --no-distribution` command was launched; after Docker Desktop initialized its `docker-desktop` WSL distribution, Docker became usable.

Disposable Memgraph container:

```text
name: minibiota-oli-memgraph
image: memgraph/memgraph-mage:latest
reported version: Memgraph v3.10.1
port: 127.0.0.1:7687 -> 7687
```

The container was stopped and removed after the smoke test.

## Import

Input file:

```text
M:\miniBIOTA\miniBIOTA_App\out\operation_living_intelligence\wave_1_lake_post_seal\import.cypher
```

The first direct `mgconsole` import failed before writing data because `mgconsole` treated the header comment block as an empty query. A pre-check confirmed `0` nodes after that failure.

The import was rerun by piping the same generated file with comment-only lines stripped for `mgconsole` compatibility.

Imported result:

```text
Nodes: 67
Relationships: 109
```

Follow-up compatibility fix: App updated `tools/generate-oli-wave1-cypher.js` so regenerated `import.cypher` starts directly with executable Cypher instead of a comment-only header. A fresh disposable Memgraph container then imported the regenerated file directly with no comment stripping. Compact readback again returned `67` nodes, `109` relationships, expected blocked-claim paths, `13` media candidates requiring review, `0` direct observation source links, and `0` non-`none` canonical writebacks.

Follow-up repeatability helper: App added `tools/run-oli-wave1-memgraph-smoke.js`. The helper starts a disposable `memgraph/memgraph-mage:latest` container, imports `import.cypher`, runs compact safety readbacks, and removes the container. Verified output: `67` nodes, `109` relationships, blocked claims/media/source-link/writeback checks passed. Detailed record:

```text
M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_1_memgraph_smoke_helper_2026-05-15.md
```

## Readback Results

Node type counts:

| Node type | Count |
|---|---:|
| BiomeContext | 1 |
| BlockedClaim | 10 |
| Chronicle | 1 |
| ContentItem | 1 |
| GraphSeed | 1 |
| MediaCandidate | 13 |
| Observation | 9 |
| OpenLoopContext | 5 |
| OutOfSeedChronicleSpeciesContext | 3 |
| OutOfSeedSpeciesContext | 2 |
| ResearchReview | 4 |
| ReviewGate | 7 |
| SourcePacket | 1 |
| Species | 6 |
| StoryThreadContext | 3 |

Relationship type counts:

| Relationship type | Count |
|---|---:|
| BLOCKS_PUBLIC_USE_OF | 10 |
| CHRONICLE_SUBJECT_CONTEXT | 5 |
| MEDIA_CANDIDATE_FOR_REVIEW | 13 |
| OBSERVATION_LINKED_TO_LOOP_CONTEXT | 13 |
| OBSERVATION_LINKED_TO_THREAD_CONTEXT | 12 |
| OBSERVATION_SPECIES_CONTEXT | 5 |
| OUT_OF_SEED_CHRONICLE_CONTEXT | 3 |
| PACKET_CONTEXT_FOR | 9 |
| SEED_INCLUDES | 18 |
| SEED_INCLUDES_CONTEXT | 5 |
| SEED_INCLUDES_MEDIA_CANDIDATE | 13 |
| SOURCE_FILE_FOR | 2 |
| SOURCE_RECORD_FOR | 1 |

Claim-safety readbacks:

| Subject | Blocked result |
|---|---|
| Daphnia | Blocks species-level ID stronger than `Daphnia sp.`, establishment, and lake-clearing claim |
| Ghost Shrimp | Blocks juvenile recruitment confirmation |
| Mesostoma | Blocks public-primary explanation |
| Moina | Blocks establishment claim |
| Media | `13` media candidates, all `review_state = media_review_required`, all `reviewed = false` |
| Direct observation links | `0` direct links from observations `170-178` to `content_pipeline:338` or `chronicle:30` |
| Canonical writeback | `0` nodes and `0` relationships with `canonical_writeback` other than `none` |

## Safety Boundary

This test did not write Supabase, Planner, Storage, media metadata, public site records, App runtime/schema/migration/package files, source-of-truth records outside this Company note, cloud services, paid services, or automation.

The local Memgraph graph was disposable. The container was stopped and removed after readback.

Docker Desktop remains installed on the machine, but Docker Desktop was stopped after the test; no persistent Memgraph container remains.

## Interpretation

The graph seed passed the first real test of its core value:

- It imported into Memgraph.
- It preserved source IDs and local provenance.
- It made blocked claims queryable rather than relying on prose warnings.
- It kept unreviewed media from becoming proof.
- It kept packet-associated observations from becoming canonical direct content/chronicle links.
- It preserved `canonical_writeback = none`.

This is enough to keep Memgraph as a real Wave 1 pilot dependency, but only as a local disposable runtime around the verified App helpers. Company recorded the dependency-policy decision at:

```text
M:\miniBIOTA\miniBIOTA_Company\domains\company\operation_living_intelligence_wave_1_pilot_dependency_decision_2026-05-15.md
```

The next **design** step is App helper polish/documentation and resolving task `409`'s live SQL metadata gap before any durable implementation, automation, or canonical writeback.

## Follow-Up Needed

Resolved for Wave 1:

1. Docker Desktop is acceptable only as a local disposable pilot dependency.
2. Memgraph remains disposable/rebuild-only for the pilot.
3. The verified App smoke helper is the maintained local pilot workflow.
4. `import.cypher` should stay headerless for direct `mgconsole` compatibility; import metadata belongs in Markdown/readback files.
5. Task `409`'s live SQL metadata gap still blocks durable automation.

Follow-up needed before durable graph infrastructure:

- Resolve live SQL metadata inspection.
- Define a durable runtime policy if Memgraph should ever run persistently.
- Separately approve any automation, canonical writeback, public output, or App runtime/schema change.

## Verification

- Installed Docker Desktop from the official `winget` package.
- Verified Docker CLI version `29.4.3`.
- Started disposable `memgraph/memgraph-mage:latest` container.
- Verified `mgconsole` connectivity with `RETURN 1 AS ok`.
- Confirmed failed comment-header import left `0` nodes.
- Imported comment-stripped `import.cypher`.
- Ran node/relationship counts.
- Ran node-type and relationship-type counts.
- Ran blocked-claim readbacks for Daphnia, Ghost Shrimp, Mesostoma, and Moina.
- Ran media candidate review-state check.
- Ran direct observation source-link check.
- Ran canonical writeback checks.
- Stopped and removed the disposable container.
- Stopped Docker Desktop after the test.
- Regenerated `import.cypher` without the leading comment-only header.
- Verified direct `mgconsole` import in a fresh disposable container.
- Re-ran compact safety readback after direct import.
- Stopped/removed the second disposable container and stopped Docker Desktop again.
- Added and verified App Memgraph smoke-test helper.
