import { spawnSync } from 'node:child_process';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const siteUrl = process.env.GH_PAGES_SITE ?? 'https://bagasabdullah05-blip.github.io';
const basePath = process.env.GH_PAGES_BASE ?? '/citamabangungmandiri';
const distDir = path.resolve('dist');

process.env.SITE_URL = siteUrl;
process.env.BASE_PATH = basePath;

const build = spawnSync('astro', ['build'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
  env: process.env,
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

const textExt = new Set([
  '.html',
  '.css',
  '.js',
  '.json',
  '.xml',
  '.txt',
  '.webmanifest',
  '.svg',
]);

const baseKey = basePath.replace(/^\//, '');
const origin = `${siteUrl}/`;
const originWithBase = `${siteUrl}${basePath}/`;
const legacyOrigin = 'https://citrabangunmandiri.com/';

const escape = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const rootAttr = new RegExp(
  `(\\b(?:href|src|action|poster)=")\\/(?!\\/|${escape(baseKey)}\\/)`,
  'g',
);
const cssUrl = new RegExp(`url\\(\\/(?!\\/|${escape(baseKey)}\\/)`, 'g');
const legacy = new RegExp(escape(legacyOrigin), 'g');
const originOnly = new RegExp(`${escape(origin)}(?!${escape(baseKey)}\\/)`, 'g');

function rewrite(text) {
  return text
    .replace(rootAttr, `$1${basePath}/`)
    .replace(cssUrl, `url(${basePath}/`)
    .replace(legacy, originWithBase)
    .replace(originOnly, originWithBase);
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }
  return files;
}

const files = await walk(distDir);
let changed = 0;

for (const file of files) {
  if (!textExt.has(path.extname(file))) continue;
  const text = await readFile(file, 'utf8');
  const next = rewrite(text);
  if (next !== text) {
    await writeFile(file, next, 'utf8');
    changed += 1;
  }
}

console.log(`GitHub Pages build ready: ${basePath} (${changed} files adjusted)`);
