import { spawnSync } from 'node:child_process';
import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const owner = process.env.GH_OWNER ?? 'bagasabdullah05-blip';
const repo = process.env.GH_REPO ?? 'citamabangungmandiri';
const work = path.resolve('.gh-pages');
const dist = path.resolve('dist');

const run = (args) => {
  const result = spawnSync('git', args, {
    cwd: work,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
};

await rm(work, { recursive: true, force: true });
await mkdir(work, { recursive: true });
await cp(dist, work, { recursive: true });
await writeFile(path.join(work, '.nojekyll'), '');

run(['init', '-q', '-b', 'gh-pages']);
run(['add', '-A']);
run([
  '-c',
  'user.name=Bagas Abdullah',
  '-c',
  'user.email=bagasabdullah69@gmail.com',
  'commit',
  '-q',
  '-m',
  'Deploy situs',
]);
run(['remote', 'add', 'origin', `https://github.com/${owner}/${repo}.git`]);
run(['push', '-f', 'origin', 'gh-pages']);

console.log(`Tayang: https://${owner}.github.io/${repo}/`);
