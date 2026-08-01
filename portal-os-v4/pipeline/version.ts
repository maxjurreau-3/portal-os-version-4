// portal-os-v4/pipeline/version.ts

import { setStageState, appendStageLog } from './store';

export async function runVersion(tag: string) {
  setStageState('VERSION', 'running');
  appendStageLog('VERSION', `Tagging release as ${tag}…`);

  // Placeholder: write version metadata, git tag, etc.
  await new Promise((resolve) => setTimeout(resolve, 300));

  appendStageLog('VERSION', `Version ${tag} recorded.`);
  setStageState('VERSION', 'done');
}
