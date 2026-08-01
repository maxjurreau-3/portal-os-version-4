// portal-os-v4/pipeline/cloudflare.ts

import { runBuild } from './build';
import { runDeploy } from './deploy';

export async function runCloudflarePipeline() {
  runBuild();
  runDeploy();
  console.log('[Pipeline] Cloudflare pipeline complete.');
}
