const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const COMPANY_ROOT = path.resolve(__dirname, '..');
const DEFAULT_INDEX_DIR = path.join(COMPANY_ROOT, 'out', 'operation_living_intelligence', 'local_vector_layer', 'company_corpus');
const DIMENSIONS = 384;
const GENERATED_BY = 'miniBIOTA_Company tools/query-oli-local-vector-index.js';

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
    '  node tools/query-oli-local-vector-index.js "question" [--limit 8] [--index <dir>] [--json]',
    '',
    'Queries the local ignored OLI vector index. Results are derived context; verify source paths before consequential use.'
  ].join('\n'));
}

function parseArgs(argv) {
  const options = { index: DEFAULT_INDEX_DIR, limit: 8, json: false, queryParts: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if ((arg === '--index' || arg === '-i') && argv[i + 1]) {
      options.index = path.resolve(process.cwd(), argv[i + 1]);
      i += 1;
    } else if ((arg === '--limit' || arg === '-l') && argv[i + 1]) {
      options.limit = Number(argv[i + 1]);
      i += 1;
    } else if (arg === '--json') {
      options.json = true;
    } else {
      options.queryParts.push(arg);
    }
  }
  options.query = options.queryParts.join(' ').trim();
  return options;
}

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function hashInt(value) {
  return crypto.createHash('sha256').update(value).digest().readUInt32BE(0);
}

function slash(value) {
  return String(value || '').replace(/\\/g, '/');
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

function dot(a, b) {
  let score = 0;
  for (let i = 0; i < Math.min(a.length, b.length); i += 1) score += a[i] * b[i];
  return score;
}

function searchText(row) {
  return [
    row.source_path,
    row.source_heading,
    row.source_family,
    row.domain_owner,
    row.publicness,
    row.canonicality,
    row.claim_status,
    row.chunk_text
  ].join('\n').toLowerCase();
}

function lexicalScore(query, row) {
  const terms = tokenize(query);
  if (!terms.length) return 0;
  const haystack = searchText(row);
  const hits = terms.filter((term) => haystack.includes(term)).length;
  let score = hits / terms.length;

  const queryLower = query.toLowerCase();
  if (queryLower.includes('source') && queryLower.includes('truth') && /AGENTS\.md|COMPANY_AGENT_PROTOCOL\.md|memory\/06-source-of-truth-rules\.md/.test(row.source_path)) score += 0.5;
  if (queryLower.includes('memgraph') && queryLower.includes('vector') && /AGENTS\.md|COMPANY_AGENT_PROTOCOL\.md|_system\/database_awareness\.md|_system\/agent_repo_registry\.md|memory\/06-source-of-truth-rules\.md/.test(row.source_path)) score += 0.35;
  if (queryLower.includes('pgvector') && /AGENTS\.md|_system\/database_awareness\.md|_system\/agent_repo_registry\.md|memory\/00-index\.md|memory\/05-database-access\.md|memory\/06-source-of-truth-rules\.md|domains\/company\/company_brief\.md/.test(row.source_path)) score += 0.45;
  if (queryLower.includes('status') && /_system\/database_awareness\.md|_system\/agent_repo_registry\.md|domains\/company\/company_brief\.md/.test(row.source_path)) score += 0.2;
  if (queryLower.includes('approval') && /AGENTS\.md|COMPANY_AGENT_PROTOCOL\.md|memory\/05-database-access\.md|memory\/06-source-of-truth-rules\.md/.test(row.source_path)) score += 0.25;
  if (queryLower.includes('unapproved') && /AGENTS\.md|_system\/database_awareness\.md|memory\/05-database-access\.md|memory\/06-source-of-truth-rules\.md|domains\/company\/company_brief\.md/.test(row.source_path)) score += 0.25;

  return score;
}

function readJson(filePath) {
  if (!fs.existsSync(filePath)) throw new Error('Missing JSON file: ' + filePath);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function readJsonl(filePath) {
  if (!fs.existsSync(filePath)) throw new Error('Missing JSONL file: ' + filePath);
  return fs.readFileSync(filePath, 'utf8')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, index) => {
      try {
        return JSON.parse(line);
      } catch (error) {
        throw new Error(filePath + ':' + (index + 1) + ' is not valid JSON: ' + error.message);
      }
    });
}

function resultExcerpt(text) {
  return String(text || '').replace(/\s+/g, ' ').trim().slice(0, 260);
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help || !options.query) {
    usage();
    return;
  }

  const manifest = readJson(path.join(options.index, 'vector_manifest.json'));
  const rows = readJsonl(path.join(options.index, 'vector_chunks.jsonl'));
  const queryVector = embed(options.query);
  const limit = Number.isFinite(options.limit) && options.limit > 0 ? options.limit : 8;

  const results = rows
    .map((row) => {
      const vectorScore = dot(queryVector, row.embedding);
      const metadataScore = lexicalScore(options.query, row);
      const score = (vectorScore * 0.7) + (metadataScore * 0.3);
      return {
        score: Number(score.toFixed(6)),
        vector_score: Number(vectorScore.toFixed(6)),
        metadata_score: Number(metadataScore.toFixed(6)),
        chunk_id: row.chunk_id,
        source_path: row.source_path,
        source_heading: row.source_heading,
        source_line_start: row.source_line_start,
        source_line_end: row.source_line_end,
        source_family: row.source_family,
        domain_owner: row.domain_owner,
        publicness: row.publicness,
        canonicality: row.canonicality,
        claim_status: row.claim_status,
        excerpt: resultExcerpt(row.chunk_text)
      };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score || a.source_path.localeCompare(b.source_path) || a.source_line_start - b.source_line_start)
    .slice(0, limit);

  const payload = {
    generated_at: new Date().toISOString(),
    generated_by: GENERATED_BY,
    status: 'pass_with_review_required_local_vector_query_ready',
    query: options.query,
    query_hash: sha256(options.query),
    index_id: manifest.id,
    index_generated_at: manifest.generated_at,
    boundary: 'Derived local retrieval only; verify source_path and canonical owner before consequential use.',
    results
  };

  if (options.json) {
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  console.log(payload.status);
  console.log('Query: ' + options.query);
  console.log('Boundary: ' + payload.boundary);
  results.forEach((result, index) => {
    console.log('');
    console.log(String(index + 1) + '. ' + result.source_path + ':' + result.source_line_start);
    console.log('   score=' + result.score + ' vector=' + result.vector_score + ' metadata=' + result.metadata_score + ' owner=' + result.domain_owner + ' family=' + result.source_family);
    console.log('   heading=' + result.source_heading);
    console.log('   ' + result.excerpt);
  });
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
