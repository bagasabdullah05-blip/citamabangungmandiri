import { spawnSync } from 'node:child_process';
import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const owner = process.env.GH_OWNER ?? 'bagasabdullah05-blip';
const repo = process.env.GH_REPO ?? 'citamabangungmandiri';
const work = path.resolve('.gh-pages');
const dist = path.resolve('dist');

const run = (args, env = process.env) => {
  const result = spawnSync('git', args, {
    cwd: work,
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env,
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
};

await rm(work, { recursive: true, force: true });
await mkdir(work, { recursive: true });
await cp(dist, work, { recursive: true });
await writeFile(path.join(work, '.nojekyll'), '');

run(['init', '-q', '-b', 'gh-pages']);
run(['add', '-A']);
run(['commit', '-q', '-m', 'Deploy'], {
  ...process.env,
  GIT_AUTHOR_NAME: 'Bagas Abdullah',
  GIT_AUTHOR_EMAIL: 'bagasabdullah69@gmail.com',
  GIT_COMMITTER_NAME: 'Bagas Abdullah',
  GIT_COMMITTER_EMAIL: 'bagasabdullah69@gmail.com',
});
run(['remote', 'add', 'origin', `https://github.com/${owner}/${repo}.git`]);
run(['push', '-f', 'origin', 'gh-pages']);

console.log(`Tayang: https://${owner}.github.io/${repo}/`);
