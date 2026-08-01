// portal-os-v4/pipeline/deploy.ts

import { setStageState, appendStageLog } from './store';

export async function runDeploy() {
  setStageState('DEPLOY', 'running');
  appendStageLog('DEPLOY', 'Starting deploy to Cloudflare Pages…');

  // Placeholder: Cloudflare Pages deploy hook would run here
  await new Promise((resolve) => setTimeout(resolve, 500));

  appendStageLog('DEPLOY', 'Deploy completed.');
  setStageState('DEPLOY', 'done');
}
