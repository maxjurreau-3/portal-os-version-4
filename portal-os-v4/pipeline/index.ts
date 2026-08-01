// portal-os-v4/pipeline/index.ts

import { runBuild } from './build';
import { runDeploy } from './deploy';
import { runExecute } from './execute';
import { runVersion } from './version';
import { getAllStages } from './store';

export async function runFullPipeline(tag: string) {
  console.log('[Pipeline] Full pipeline starting…');

  await runBuild();
  await runDeploy();
  await runExecute();
  await runVersion(tag);

  console.log('[Pipeline] Full pipeline completed.');
  console.table(getAllStages());
}
