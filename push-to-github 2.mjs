// One-time script to push all project files to GitHub via the REST API
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const OWNER = 'shvz5thq67-design';
const REPO = 'linkedin-hjemmeside';
const BRANCH = 'main';
const TOKEN = process.env.GH_TOKEN;

const IGNORE = new Set([
  'node_modules', '.git', '.next', 'push-to-github.mjs',
  'public/christian-schou.png', 'public/christian-schou-cv.pdf',
]);

function collectFiles(dir, root = dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const rel = relative(root, full);
    if (IGNORE.has(rel) || IGNORE.has(entry)) continue;
    if (statSync(full).isDirectory()) {
      files.push(...collectFiles(full, root));
    } else {
      files.push(rel);
    }
  }
  return files;
}

async function ghFetch(path, method = 'GET', body = null) {
  const res = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      Authorization: `token ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

async function main() {
  const root = new URL('.', import.meta.url).pathname;
  const files = collectFiles(root);
  console.log(`Pushing ${files.length} files...`);

  // Get current HEAD commit SHA
  const refData = await ghFetch(`/repos/${OWNER}/${REPO}/git/ref/heads/${BRANCH}`);
  const baseCommitSha = refData.object.sha;
  const baseTreeData = await ghFetch(`/repos/${OWNER}/${REPO}/git/commits/${baseCommitSha}`);
  const baseTreeSha = baseTreeData.tree.sha;

  // Create blobs for all files
  const treeItems = [];
  for (const file of files) {
    const content = readFileSync(join(root, file));
    const isText = /\.(ts|tsx|js|mjs|json|css|md|txt|mts|gitignore|env\.local)$/.test(file) ||
                   file.includes('eslint') || file.includes('.npmrc');

    process.stdout.write(`  ${file}...`);
    const blob = await ghFetch(`/repos/${OWNER}/${REPO}/git/blobs`, 'POST', {
      content: isText ? content.toString('utf8') : content.toString('base64'),
      encoding: isText ? 'utf-8' : 'base64',
    });
    treeItems.push({ path: file, mode: '100644', type: 'blob', sha: blob.sha });
    console.log(' ✓');
  }

  // Create tree
  const tree = await ghFetch(`/repos/${OWNER}/${REPO}/git/trees`, 'POST', {
    base_tree: baseTreeSha,
    tree: treeItems,
  });

  // Create commit
  const commit = await ghFetch(`/repos/${OWNER}/${REPO}/git/commits`, 'POST', {
    message: 'Build full portfolio site — Next.js 16, Framer Motion, Anthropic chatbot',
    tree: tree.sha,
    parents: [baseCommitSha],
  });

  // Update branch ref
  await ghFetch(`/repos/${OWNER}/${REPO}/git/refs/heads/${BRANCH}`, 'PATCH', {
    sha: commit.sha,
    force: true,
  });

  console.log(`\n✅ Pushed! https://github.com/${OWNER}/${REPO}`);
}

main().catch(console.error);
