const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const COMPANY_ROOT = path.resolve(__dirname, '..');
const DEFAULT_OUTPUT = path.join(COMPANY_ROOT, 'out', 'operation_living_intelligence', 'local_vector_layer', 'company_corpus');
const GENERATED_BY = 'miniBIOTA_Company tools/build-oli-local-vector-index.js';
const INDEX_ID = 'oli_local_vector_layer_company_corpus_v1';
const DIMENSIONS = 384;
const MAX_CHUNK_LINES = 80;
const OVERLAP_LINES = 8;

const ROOT_ALLOWLIST = [
  'AGENTS.md',
  'COMPANY_AGENT_PROTOCOL.md',
  'README.md',
  '_system',
  'memory',
  'skills',
  'domains',
  'audits/living_atlas'
];

const DIR_EXCLUDES = new Set([
  '.git',
  '.vscode',
  'archive',
  'out',
  'node_modules',
  '__pycache__',
  '.pytest_cache',
  '.mypy_cache',
  '.ruff_cache'
]);

const FILE_EXCLUDES = new Set([
  '.env'
]);

const TOKEN_STOPWORDS = new Set([
  'the', 'and', 'for', 'with', 'that', 'this', 'from', 'into', 'when', 'then',
  'than', 'they', 'their', 'there', 'where', 'what', 'which', 'will', 'would',
  'could', 'should', 'have', 'has', 'had', 'are', 'was', 'were', 'not', 'but',
  'use', 'uses', 'using', 'only', 'must', 'may', 'can', 'all', 'any', 'each',
  'its', 'our', 'you', 'your', 'under', 'over', 'after', 'before'
]);

function usage() {
  console.log([
    'Usage:',
    '  node tools/build-oli-local-vector-index.js [--output <dir>]',
    '',
    'Builds a local, ignored, deterministic vector index from active Company Markdown.',
    'No model/API calls, Supabase writes, Memgraph changes, App runtime changes, public output, paid embedding path, or canonical writeback occur.'
  ].join('\n'));
}

function parseArgs(argv) {
  const options = { output: DEFAULT_OUTPUT };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if ((arg === '--output' || arg === '-o') && argv[i + 1]) {
      options.output = path.resolve(process.cwd(), argv[i + 1]);
      i += 1;
    } else {
      throw new Error('Unknown argument: ' + arg);
    }
  }
  return options;
}

function slash(value) {
  return String(value || '').replace(/\\/g, '/');
}

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function hashInt(value) {
  return crypto.createHash('sha256').update(value).digest().readUInt32BE(0);
}

function isInside(base, target) {
  const relative = path.relative(base, target);
  return Boolean(relative) && !relative.startsWith('..') && !path.isAbsolute(relative);
}

function ensureOutputAllowed(outputDir) {
  const resolved = path.resolve(outputDir);
  const defaultResolved = path.resolve(DEFAULT_OUTPUT);
  if (resolved !== defaultResolved || !isInside(COMPANY_ROOT, resolved)) {
    throw new Error('Output must be the approved ignored Company vector path: ' + DEFAULT_OUTPUT);
  }
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function gitignoreIgnoresOut() {
  const gitignorePath = path.join(COMPANY_ROOT, '.gitignore');
  if (!fs.existsSync(gitignorePath)) return false;
  return fs.readFileSync(gitignorePath, 'utf8')
    .split(/\r?\n/)
    .some((line) => ['out', 'out/', '/out/'].includes(line.trim()));
}

function allowedRoot(relativePath) {
  const normalized = slash(relativePath);
  return ROOT_ALLOWLIST.some((root) => normalized === root || normalized.startsWith(root + '/'));
}

function shouldSkipDir(dirName) {
  return DIR_EXCLUDES.has(dirName);
}

function shouldIndexFile(filePath) {
  const relative = slash(path.relative(COMPANY_ROOT, filePath));
  const base = path.basename(filePath);
  if (FILE_EXCLUDES.has(base)) return false;
  if (!allowedRoot(relative)) return false;
  if (!/\.md$/i.test(base)) return false;
  return true;
}

function walk(dirPath, files = []) {
  if (!fs.existsSync(dirPath)) return files;
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (shouldSkipDir(entry.name)) continue;
      walk(fullPath, files);
    } else if (shouldIndexFile(fullPath)) {
      files.push(fullPath);
    }
  }
  return files;
}

function collectFiles() {
  const files = [];
  ROOT_ALLOWLIST.forEach((root) => {
    const target = path.join(COMPANY_ROOT, root);
    if (!fs.existsSync(target)) return;
    const stat = fs.statSync(target);
    if (stat.isFile() && shouldIndexFile(target)) files.push(target);
    if (stat.isDirectory()) walk(target, files);
  });
  return Array.from(new Set(files.map((file) => path.resolve(file)))).sort();
}

function sourceFamily(relativePath) {
  if (relativePath === 'AGENTS.md' || relativePath === 'COMPANY_AGENT_PROTOCOL.md') return 'company_agent_rules';
  if (relativePath.startsWith('_system/')) return 'company_system';
  if (relativePath.startsWith('memory/')) return 'company_memory';
  if (relativePath.startsWith('skills/')) return 'company_skill_or_reference';
  if (relativePath.startsWith('domains/')) return 'company_domain_report';
  if (relativePath.startsWith('audits/')) return 'company_audit_source_packet';
  return 'company_markdown';
}

function domainOwner(relativePath) {
  const domainMatch = relativePath.match(/^domains\/([^/]+)/);
  if (domainMatch) return domainMatch[1].replace(/-/g, '_');
  if (relativePath.startsWith('audits/living_atlas/')) return 'research_content_company';
  return 'company';
}

function publicness(relativePath, text) {
  const haystack = (relativePath + '\n' + text).toLowerCase();
  if (haystack.includes('private') || haystack.includes('internal') || haystack.includes('sensitive')) return 'internal_or_review_required';
  return 'internal_default';
}

function canonicality(relativePath) {
  if (relativePath.startsWith('domains/') || relativePath.startsWith('memory/') || relativePath === 'AGENTS.md' || relativePath === 'COMPANY_AGENT_PROTOCOL.md') {
    return 'canonical_markdown_context';
  }
  if (relativePath.startsWith('skills/')) return 'workflow_or_reference_context';
  return 'source_context';
}

function headingForLine(lines, index) {
  for (let i = index; i >= 0; i -= 1) {
    const match = lines[i].match(/^(#{1,6})\s+(.+)$/);
    if (match) return match[2].trim();
  }
  return 'Document';
}

function chunkDocument(filePath, content) {
  const relativePath = slash(path.relative(COMPANY_ROOT, filePath));
  const lines = content.split(/\r?\n/);
  const chunks = [];
  let start = 0;
  while (start < lines.length) {
    const end = Math.min(lines.length, start + MAX_CHUNK_LINES);
    const chunkLines = lines.slice(start, end);
    const chunkText = chunkLines.join('\n').trim();
    if (chunkText) {
      chunks.push({
        chunk_id: sha256(relativePath + ':' + (start + 1) + ':' + end + ':' + chunkText).slice(0, 24),
        source_path: relativePath,
        source_heading: headingForLine(lines, start),
        source_line_start: start + 1,
        source_line_end: end,
        source_family: sourceFamily(relativePath),
        domain_owner: domainOwner(relativePath),
        publicness: publicness(relativePath, chunkText),
        canonicality: canonicality(relativePath),
        claim_status: 'source_context_requires_owner_review_for_public_claims',
        text_hash: sha256(chunkText),
        chunk_text: chunkText
      });
    }
    if (end === lines.length) break;
    start = Math.max(end - OVERLAP_LINES, start + 1);
  }
  return chunks;
}

function tokenize(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[`*_#[\]()>.:,;!?{}|\\/+=~"'$%^&@]+/g, ' ')
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 2 && !TOKEN_STOPWORDS.has(token));
}

function embed(text) {
  const vector = new Array(DIMENSIONS).fill(0);
  tokenize(text).forEach((token) => {
    const raw = hashInt(token);
    const index = raw % DIMENSIONS;
    const sign = raw % 2 === 0 ? 1 : -1;
    vector[index] += sign;
  });
  const norm = Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0)) || 1;
  return vector.map((value) => Number((value / norm).toFixed(6)));
}

function chunkEmbeddingText(chunk) {
  return [
    chunk.source_path,
    chunk.source_heading,
    chunk.source_family,
    chunk.domain_owner,
    chunk.publicness,
    chunk.canonicality,
    chunk.claim_status,
    chunk.chunk_text
  ].join('\n');
}

function writeJson(filePath, payload) {
  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2) + '\n', 'utf8');
}

function writeJsonl(filePath, rows) {
  fs.writeFileSync(filePath, rows.map((row) => JSON.stringify(row)).join('\n') + (rows.length ? '\n' : ''), 'utf8');
}

function buildMarkdownReport(payload) {
  return [
    '# OLI Local Vector Layer Readback',
    '',
    '## Status',
    '',
    '`' + payload.status + '`',
    '',
    '## Boundary',
    '',
    '- Local ignored file-vector index only.',
    '- Deterministic hashed lexical vectors; no external embedding model.',
    '- No Supabase, Planner, Memgraph, App runtime, public output, scheduled refresh, paid embedding path, or canonical writeback.',
    '',
    '## Counts',
    '',
    '| Item | Count |',
    '|---|---:|',
    '| Documents | `' + payload.counts.documents + '` |',
    '| Chunks | `' + payload.counts.chunks + '` |',
    '| Dimensions | `' + payload.counts.dimensions + '` |',
    '',
    '## Next Gate',
    '',
    'Use `node tools/query-oli-local-vector-index.js "question"` for local cited retrieval. Real embeddings, external/vector database retrieval, expanded corpus, App integration, scheduled refresh, or public search remain separate approval gates.'
  ].join('\n') + '\n';
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    usage();
    return;
  }
  ensureOutputAllowed(options.output);
  ensureDir(options.output);

  const files = collectFiles();
  const documents = [];
  const chunks = [];

  files.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const stat = fs.statSync(filePath);
    const relativePath = slash(path.relative(COMPANY_ROOT, filePath));
    const docChunks = chunkDocument(filePath, content);
    documents.push({
      source_path: relativePath,
      source_family: sourceFamily(relativePath),
      domain_owner: domainOwner(relativePath),
      canonicality: canonicality(relativePath),
      publicness_default: publicness(relativePath, content),
      content_hash: sha256(content),
      last_modified: stat.mtime.toISOString(),
      chunk_count: docChunks.length
    });
    chunks.push(...docChunks);
  });

  const vectorRows = chunks.map((chunk) => ({
    ...chunk,
    embedding_model: 'local_hashing_vector_v1',
    embedding_dimensions: DIMENSIONS,
    embedding: embed(chunkEmbeddingText(chunk))
  }));

  const manifest = {
    id: INDEX_ID,
    generated_at: new Date().toISOString(),
    generated_by: GENERATED_BY,
    status: 'pass_with_review_required_local_vector_index_ready',
    output_dir: slash(path.relative(COMPANY_ROOT, options.output)),
    corpus_scope: 'active Company Markdown allowlist only',
    vector_route: 'local_file_jsonl_hashing_vector_no_external_model',
    embedding_model: 'local_hashing_vector_v1',
    embedding_dimensions: DIMENSIONS,
    source_of_truth: 'derived index only; verify against source_path and canonical owner',
    approval_boundary: {
      supabase_writes: false,
      planner_writes: false,
      external_vector_schema_or_index: false,
      memgraph_refresh: false,
      app_runtime_changes: false,
      public_output: false,
      scheduled_refresh: false,
      canonical_writeback: false
    },
    counts: {
      documents: documents.length,
      chunks: chunks.length,
      dimensions: DIMENSIONS
    }
  };

  writeJson(path.join(options.output, 'vector_manifest.json'), manifest);
  writeJsonl(path.join(options.output, 'vector_documents.jsonl'), documents);
  writeJsonl(path.join(options.output, 'vector_chunks.jsonl'), vectorRows);

  const validation = {
    generated_at: new Date().toISOString(),
    generated_by: GENERATED_BY,
    status: manifest.status,
    counts: manifest.counts,
    checks: {
      company_gitignore_ignores_out: gitignoreIgnoresOut(),
      output_under_company_out: slash(path.relative(COMPANY_ROOT, options.output)).startsWith('out/'),
      no_external_model_or_api: true,
      no_supabase_planner_external_vector_memgraph_app_runtime_public_or_canonical_writes: true,
      source_paths_present: vectorRows.every((row) => row.source_path && row.source_line_start && row.source_line_end),
      metadata_present: vectorRows.every((row) => row.source_family && row.domain_owner && row.publicness && row.canonicality && row.claim_status),
      embeddings_present: vectorRows.every((row) => Array.isArray(row.embedding) && row.embedding.length === DIMENSIONS)
    }
  };
  validation.failed_checks = Object.entries(validation.checks)
    .filter((entry) => entry[1] !== true)
    .map((entry) => entry[0]);

  writeJson(path.join(options.output, 'vector_validation_report.json'), validation);
  fs.writeFileSync(path.join(options.output, 'vector_readback_report.md'), buildMarkdownReport(manifest), 'utf8');

  console.log(manifest.status);
  console.log('Documents: ' + documents.length);
  console.log('Chunks: ' + chunks.length);
  console.log('Output: ' + options.output);
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
