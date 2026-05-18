const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const COMPANY_ROOT = path.resolve(__dirname, '..');
const CONTENT_ROOT = path.resolve(COMPANY_ROOT, '..', 'miniBIOTA_Content');
const APP_ROOT = path.resolve(COMPANY_ROOT, '..', 'miniBIOTA_App');
const READBACK_DIR = path.join(COMPANY_ROOT, 'domains', 'company');

const CONTENT_PARSER = path.join(CONTENT_ROOT, 'tools', 'parse-oli-raw-observation-intake.js');
const APP_BRIDGE = path.join(APP_ROOT, 'tools', 'bridge-oli-content-audit-to-phase13-input.js');
const PHASE13_RUNNER = path.join(APP_ROOT, 'tools', 'run-oli-ih-phase13-observation-input-runner.js');
const PHASE13_LATEST_POINTER = path.join(APP_ROOT, 'out', 'operation_living_intelligence', 'intelligent_harness', 'phase_13_observation_input_runner', 'lake_post_seal', 'latest_suggestion_run.json');

const PASS_STATUS = 'pass_phase19_local_observation_intake_pipeline_ready';
const HELPER_VERSION = '2026-05-18.phase19-local-observation-intake-pipeline.v1';
const GENERATED_BY = 'miniBIOTA_Company tools/run-oli-ih-phase19-local-observation-intake-pipeline.js';

function usage() {
  return [
    'Usage:',
    '  node tools/run-oli-ih-phase19-local-observation-intake-pipeline.js --input M:\\path\\raw_observation.md --session-date YYYY-MM-DD --mode checklist',
    '  node tools/run-oli-ih-phase19-local-observation-intake-pipeline.js --input M:\\path\\raw_observation.md --session-date YYYY-MM-DD --mode run-local',
    '',
    'Optional:',
    '  --text "raw observation text"',
    '  --source-context "short context"',
    '  --media-note "short media note"',
    '  --media-file-or-path "local path or id"',
    '',
    'File input is preferred. Use either --input or --text, not both.'
  ].join('\n');
}

function parseArgs(argv) {
  const args = {
    mode: 'checklist',
    input: null,
    text: null,
    sessionDate: '2026-05-18',
    sourceContext: 'Phase 19 local observation intake pipeline',
    mediaNote: null,
    mediaFileOrPath: null
  };

  for (let index = 2; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = argv[index + 1];
    if (arg === '--help' || arg === '-h') {
      args.help = true;
      continue;
    }
    if (arg === '--mode') {
      args.mode = next;
      index += 1;
      continue;
    }
    if (arg === '--input') {
      args.input = path.resolve(next);
      index += 1;
      continue;
    }
    if (arg === '--text') {
      args.text = next;
      index += 1;
      continue;
    }
    if (arg === '--session-date') {
      args.sessionDate = next;
      index += 1;
      continue;
    }
    if (arg === '--source-context') {
      args.sourceContext = next;
      index += 1;
      continue;
    }
    if (arg === '--media-note') {
      args.mediaNote = next;
      index += 1;
      continue;
    }
    if (arg === '--media-file-or-path') {
      args.mediaFileOrPath = next;
      index += 1;
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  if (args.help) return args;
  if (!['checklist', 'run-local'].includes(args.mode)) throw new Error('--mode must be checklist or run-local.');
  if (args.input && args.text) throw new Error('Use either --input or --text, not both.');
  if (!args.input && !args.text) throw new Error('Provide --input or --text.');
  if (args.input && !fs.existsSync(args.input)) throw new Error(`Input file not found: ${args.input}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(args.sessionDate)) throw new Error('--session-date must use YYYY-MM-DD.');
  return args;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function timestampSlug(date = new Date()) {
  return date.toISOString().replace(/[-:]/g, '').replace(/\..+$/, '').replace('T', '_');
}

function extractLineValue(stdout, label) {
  const pattern = new RegExp(`^${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}:\\s*(.+)$`, 'mi');
  const match = String(stdout || '').match(pattern);
  return match ? match[1].trim() : null;
}

function runNode(scriptPath, args, cwd) {
  const result = spawnSync(process.execPath, [scriptPath, ...args], {
    cwd,
    encoding: 'utf8',
    windowsHide: true
  });

  return {
    command: ['node', path.relative(cwd, scriptPath), ...args],
    cwd,
    exit_code: result.status,
    stdout: result.stdout || '',
    stderr: result.stderr || '',
    success: result.status === 0
  };
}

function safetyBlock() {
  return {
    local_only: true,
    no_write_pipeline: true,
    suggestion_only: true,
    separately_reviewable: true,
    supabase_queries: false,
    supabase_writes: false,
    planner_writes: false,
    app_runtime_changes: false,
    memgraph_queries: false,
    memgraph_writes: false,
    pgvector: false,
    public_output: false,
    media_metadata_writes: false,
    canonical_writeback: 'none',
    approve_reject_correct_actions: false,
    app_auto_open_or_refresh: false
  };
}

function assertBlockedStatuses(label, data, errors) {
  const writeback = data.writeback || data.safety?.writeback;
  const publicOutput = data.public_output ?? data.safety?.public_output ?? data.safety?.public_output_occurs;
  const canonicalWriteback = data.canonical_writeback || data.safety?.canonical_writeback;

  if (writeback !== undefined && writeback !== 'none') errors.push(`${label}: writeback is not none`);
  if (publicOutput !== undefined && publicOutput !== false) errors.push(`${label}: public_output is not false`);
  if (canonicalWriteback !== undefined && canonicalWriteback !== 'none') errors.push(`${label}: canonical_writeback is not none`);

  ['supabase_writes', 'planner_writes', 'memgraph_writes', 'media_metadata_writes'].forEach((field) => {
    if (data.safety && data.safety[field] !== undefined && data.safety[field] !== false) {
      errors.push(`${label}: ${field} is not false`);
    }
  });
}

function validateContentDraft(jsonPath, mdPath, errors) {
  if (!jsonPath || !fs.existsSync(jsonPath)) errors.push('Content parser JSON output missing');
  if (!mdPath || !fs.existsSync(mdPath)) errors.push('Content parser Markdown output missing');
  if (!jsonPath || !fs.existsSync(jsonPath)) return null;

  const draft = readJson(jsonPath);
  const accepted = [
    'pass_phase17_content_raw_observation_intake_draft_ready',
    'pass_phase18_content_raw_observation_intake_draft_ready'
  ];
  if (!accepted.includes(draft.parser_status)) errors.push(`Content parser status not accepted: ${draft.parser_status}`);
  if (draft.supabase_write_status !== 'not_approved') errors.push('Content draft supabase_write_status is not not_approved');
  if (draft.planner_write_status !== 'not_approved') errors.push('Content draft planner_write_status is not not_approved');
  if (draft.canonical_write_status !== 'not_approved') errors.push('Content draft canonical_write_status is not not_approved');
  if (draft.public_use_status !== 'blocked') errors.push('Content draft public_use_status is not blocked');
  if (draft.app_fixture_output_status !== 'deferred') errors.push('Content draft app_fixture_output_status is not deferred');
  if (draft.phase13_trigger_status !== 'not_triggered') errors.push('Content draft phase13_trigger_status is not not_triggered');
  return draft;
}

function validateBridge(outputPath, readbackPath, errors) {
  if (!outputPath || !fs.existsSync(outputPath)) errors.push('App bridge output missing');
  if (!readbackPath || !fs.existsSync(readbackPath)) errors.push('App bridge readback JSON missing');
  if (!outputPath || !fs.existsSync(outputPath)) return null;

  const bridgeInput = readJson(outputPath);
  if (bridgeInput.bridge_status !== 'pass_phase18_content_audit_to_phase13_bridge_ready') {
    errors.push(`Bridge status not passing: ${bridgeInput.bridge_status}`);
  }
  if (bridgeInput.writeback !== 'none') errors.push('Bridge output writeback is not none');
  if (bridgeInput.supabase_write_status !== 'not_approved') errors.push('Bridge output supabase_write_status is not not_approved');
  if (bridgeInput.planner_write_status !== 'not_approved') errors.push('Bridge output planner_write_status is not not_approved');
  if (bridgeInput.canonical_write_status !== 'not_approved') errors.push('Bridge output canonical_write_status is not not_approved');
  if (bridgeInput.public_use_status !== 'blocked') errors.push('Bridge output public_use_status is not blocked');
  if (bridgeInput.phase13_trigger_status !== 'not_triggered') errors.push('Bridge output phase13_trigger_status is not not_triggered');
  return bridgeInput;
}

function validatePhase13(runId, outputPath, latestPointerPath, errors) {
  if (!runId) errors.push('Phase 13 run ID missing');
  if (!outputPath || !fs.existsSync(outputPath)) errors.push('Phase 13 output path missing');
  if (!latestPointerPath || !fs.existsSync(latestPointerPath)) errors.push('latest_suggestion_run.json missing');
  if (!outputPath || !fs.existsSync(outputPath)) return null;

  const validationPath = path.join(outputPath, 'validation_report.json');
  if (!fs.existsSync(validationPath)) {
    errors.push('Phase 13 validation_report.json missing');
    return null;
  }

  const validation = readJson(validationPath);
  if (validation.status !== 'pass_phase13_observation_input_runner_ready') {
    errors.push(`Phase 13 validation status not passing: ${validation.status}`);
  }
  assertBlockedStatuses('Phase 13 validation', validation, errors);
  if (validation.checks?.canonical_write_occurs !== false) errors.push('Phase 13 canonical_write_occurs is not false');
  if (validation.checks?.public_output_occurs !== false) errors.push('Phase 13 public_output_occurs is not false');
  if (validation.checks?.supabase_writes !== false) errors.push('Phase 13 supabase_writes is not false');
  if (validation.checks?.planner_writes !== false) errors.push('Phase 13 planner_writes is not false');
  if (validation.checks?.memgraph_writes !== false) errors.push('Phase 13 memgraph_writes is not false');
  if (validation.checks?.media_metadata_writes !== false) errors.push('Phase 13 media_metadata_writes is not false');

  const latest = fs.existsSync(latestPointerPath) ? readJson(latestPointerPath) : null;
  if (latest && latest.latest_run_id !== runId) {
    errors.push(`latest_suggestion_run.json points to ${latest.latest_run_id}, not ${runId}`);
  }
  if (latest) assertBlockedStatuses('Latest pointer', latest, errors);
  return { validation, latest };
}

function checklist(args) {
  const parserArgs = [];
  if (args.input) parserArgs.push('--input', args.input);
  if (args.text) parserArgs.push('--text', '<raw observation text>');
  parserArgs.push('--session-date', args.sessionDate);
  if (args.sourceContext) parserArgs.push('--source-context', args.sourceContext);
  if (args.mediaNote) parserArgs.push('--media-note', args.mediaNote);
  if (args.mediaFileOrPath) parserArgs.push('--media-file-or-path', args.mediaFileOrPath);

  return {
    mode: 'checklist',
    steps: [
      {
        step: 'content_parser',
        cwd: CONTENT_ROOT,
        command: ['node', path.relative(CONTENT_ROOT, CONTENT_PARSER), ...parserArgs],
        review_boundary: 'parser_draft_only'
      },
      {
        step: 'app_bridge',
        cwd: APP_ROOT,
        command: ['node', path.relative(APP_ROOT, APP_BRIDGE), '--input', '<content_audit_json_path>'],
        review_boundary: 'bridge_fixture_only'
      },
      {
        step: 'phase13_runner',
        cwd: APP_ROOT,
        command: ['node', path.relative(APP_ROOT, PHASE13_RUNNER), '--input', '<bridged_app_input_json_path>'],
        review_boundary: 'suggestions_only'
      },
      {
        step: 'intelligence_tab',
        action: 'Refresh the Intelligence tab manually to view the latest suggestion run.',
        review_boundary: 'latest_display_pointer_only'
      }
    ]
  };
}

function writeReadbacks(readback) {
  fs.mkdirSync(READBACK_DIR, { recursive: true });
  const base = `operation_living_intelligence_ih_phase_19_pipeline_readback_${readback.pipeline_id}`;
  const jsonPath = path.join(READBACK_DIR, `${base}.json`);
  const mdPath = path.join(READBACK_DIR, `${base}.md`);
  fs.writeFileSync(jsonPath, `${JSON.stringify(readback, null, 2)}\n`, 'utf8');
  fs.writeFileSync(mdPath, markdownReadback(readback), 'utf8');
  return { jsonPath, mdPath };
}

function markdownReadback(readback) {
  const lines = [];
  lines.push('# OLI Phase 19 Local Observation Intake Pipeline Readback');
  lines.push('');
  lines.push(`Status: \`${readback.status}\``);
  lines.push(`Pipeline ID: \`${readback.pipeline_id}\``);
  lines.push(`Generated: \`${readback.generated_at}\``);
  lines.push('');
  lines.push('## Input');
  lines.push('');
  lines.push(`- Input mode: \`${readback.input.input_mode}\``);
  lines.push(`- Input path: \`${String(readback.input.input_path)}\``);
  lines.push('');
  lines.push('## Outputs');
  lines.push('');
  lines.push(`- Content audit JSON: \`${String(readback.outputs.content_audit_json_path)}\``);
  lines.push(`- Content audit Markdown: \`${String(readback.outputs.content_audit_markdown_path)}\``);
  lines.push(`- App bridge output: \`${String(readback.outputs.app_bridge_output_path)}\``);
  lines.push(`- App bridge readback: \`${String(readback.outputs.app_bridge_readback_json_path)}\``);
  lines.push(`- Phase 13 run ID: \`${String(readback.outputs.phase13_run_id)}\``);
  lines.push(`- Phase 13 output: \`${String(readback.outputs.phase13_output_path)}\``);
  lines.push(`- Latest pointer: \`${String(readback.outputs.latest_suggestion_run_path)}\``);
  lines.push('');
  lines.push('## Review Boundaries');
  lines.push('');
  Object.entries(readback.review_boundaries).forEach(([key, value]) => {
    lines.push(`- \`${key}\`: \`${value}\``);
  });
  lines.push('');
  lines.push('## Safety');
  lines.push('');
  Object.entries(readback.safety).forEach(([key, value]) => {
    lines.push(`- \`${key}\`: \`${String(value)}\``);
  });
  lines.push('');
  if (readback.errors.length) {
    lines.push('## Errors');
    lines.push('');
    readback.errors.forEach((error) => lines.push(`- ${error}`));
    lines.push('');
  }
  lines.push('Refresh the Intelligence tab manually to view the latest suggestion run.');
  lines.push('');
  return lines.join('\n');
}

function runLocal(args) {
  const errors = [];
  const commands = [];
  const parserArgs = [];
  if (args.input) parserArgs.push('--input', args.input);
  if (args.text) parserArgs.push('--text', args.text);
  parserArgs.push('--session-date', args.sessionDate);
  if (args.sourceContext) parserArgs.push('--source-context', args.sourceContext);
  if (args.mediaNote) parserArgs.push('--media-note', args.mediaNote);
  if (args.mediaFileOrPath) parserArgs.push('--media-file-or-path', args.mediaFileOrPath);

  const parserRun = runNode(CONTENT_PARSER, parserArgs, CONTENT_ROOT);
  commands.push({ step: 'content_parser', ...parserRun });
  if (!parserRun.success) errors.push('parser fails');
  const contentJsonPath = extractLineValue(parserRun.stdout, 'JSON');
  const contentMdPath = extractLineValue(parserRun.stdout, 'Markdown');
  validateContentDraft(contentJsonPath, contentMdPath, errors);
  if (errors.length) return finalize(args, commands, errors, { contentJsonPath, contentMdPath });

  const bridgeRun = runNode(APP_BRIDGE, ['--input', contentJsonPath], APP_ROOT);
  commands.push({ step: 'app_bridge', ...bridgeRun });
  if (!bridgeRun.success) errors.push('bridge validation fails');
  const bridgeOutputPath = extractLineValue(bridgeRun.stdout, 'Output');
  const bridgeReadbackJsonPath = extractLineValue(bridgeRun.stdout, 'Readback JSON');
  const bridgeReadbackMdPath = extractLineValue(bridgeRun.stdout, 'Readback Markdown');
  validateBridge(bridgeOutputPath, bridgeReadbackJsonPath, errors);
  if (errors.length) return finalize(args, commands, errors, { contentJsonPath, contentMdPath, bridgeOutputPath, bridgeReadbackJsonPath, bridgeReadbackMdPath });

  const phase13RelativeInput = path.relative(APP_ROOT, bridgeOutputPath);
  const phase13Run = runNode(PHASE13_RUNNER, ['--input', phase13RelativeInput], APP_ROOT);
  commands.push({ step: 'phase13_runner', ...phase13Run });
  if (!phase13Run.success) errors.push('Phase 13 validation fails');
  const phase13RunId = extractLineValue(phase13Run.stdout, 'Run ID');
  const phase13OutputPath = extractLineValue(phase13Run.stdout, 'Output');
  const latestPointerPath = extractLineValue(phase13Run.stdout, 'Latest pointer') || PHASE13_LATEST_POINTER;
  validatePhase13(phase13RunId, phase13OutputPath, latestPointerPath, errors);

  return finalize(args, commands, errors, {
    contentJsonPath,
    contentMdPath,
    bridgeOutputPath,
    bridgeReadbackJsonPath,
    bridgeReadbackMdPath,
    phase13RunId,
    phase13OutputPath,
    latestPointerPath
  });
}

function finalize(args, commands, errors, outputs = {}) {
  const readback = {
    generated_at: new Date().toISOString(),
    generator: GENERATED_BY,
    helper_version: HELPER_VERSION,
    status: errors.length ? 'fail_phase19_local_observation_intake_pipeline' : PASS_STATUS,
    pipeline_id: timestampSlug(),
    input: {
      input_mode: args.input ? 'file' : 'text',
      input_path: args.input || null,
      text_source: args.text ? 'inline_text_argument' : null,
      session_date: args.sessionDate,
      source_context: args.sourceContext,
      media_note: args.mediaNote,
      media_file_or_path: args.mediaFileOrPath
    },
    commands,
    outputs: {
      content_audit_json_path: outputs.contentJsonPath || null,
      content_audit_markdown_path: outputs.contentMdPath || null,
      app_bridge_output_path: outputs.bridgeOutputPath || null,
      app_bridge_readback_json_path: outputs.bridgeReadbackJsonPath || null,
      app_bridge_readback_markdown_path: outputs.bridgeReadbackMdPath || null,
      phase13_run_id: outputs.phase13RunId || null,
      phase13_output_path: outputs.phase13OutputPath || null,
      latest_suggestion_run_path: outputs.latestPointerPath || null
    },
    review_boundaries: {
      content_parser: 'parser_draft_only',
      app_bridge: 'bridge_fixture_only',
      phase13_runner: 'suggestions_only',
      intelligence_tab: 'latest_display_pointer_only'
    },
    safety: safetyBlock(),
    errors
  };
  const paths = writeReadbacks(readback);
  readback.pipeline_readback_json_path = paths.jsonPath;
  readback.pipeline_readback_markdown_path = paths.mdPath;
  fs.writeFileSync(paths.jsonPath, `${JSON.stringify(readback, null, 2)}\n`, 'utf8');
  return readback;
}

function main() {
  try {
    const args = parseArgs(process.argv);
    if (args.help) {
      console.log(usage());
      return;
    }

    if (args.mode === 'checklist') {
      const result = {
        generated_at: new Date().toISOString(),
        generator: GENERATED_BY,
        helper_version: HELPER_VERSION,
        status: 'pass_phase19_checklist_ready',
        input: {
          input_mode: args.input ? 'file' : 'text',
          input_path: args.input || null,
          session_date: args.sessionDate
        },
        checklist: checklist(args),
        safety: safetyBlock()
      };
      console.log(JSON.stringify(result, null, 2));
      return;
    }

    const readback = runLocal(args);
    console.log('OLI Phase 19 local observation intake pipeline complete.');
    console.log('Status: ' + readback.status);
    console.log('Pipeline ID: ' + readback.pipeline_id);
    console.log('Content audit JSON: ' + readback.outputs.content_audit_json_path);
    console.log('Content audit Markdown: ' + readback.outputs.content_audit_markdown_path);
    console.log('App bridge output: ' + readback.outputs.app_bridge_output_path);
    console.log('Phase 13 run ID: ' + readback.outputs.phase13_run_id);
    console.log('Phase 13 output: ' + readback.outputs.phase13_output_path);
    console.log('Latest pointer: ' + readback.outputs.latest_suggestion_run_path);
    console.log('Pipeline readback JSON: ' + readback.pipeline_readback_json_path);
    console.log('Pipeline readback Markdown: ' + readback.pipeline_readback_markdown_path);
    if (readback.errors.length) {
      readback.errors.forEach((error) => console.error('- ' + error));
      process.exitCode = 1;
    }
  } catch (error) {
    console.error('OLI Phase 19 local observation intake pipeline failed: ' + error.message);
    console.error('');
    console.error(usage());
    process.exitCode = 1;
  }
}

main();
