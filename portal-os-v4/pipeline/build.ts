// portal-os-v4/pipeline/build.ts

import { setStageState, appendStageLog } from './store';

export async function runBuild() {
  setStageState('BUILD', 'running');
  appendStageLog('BUILD', 'Starting build…');

  // Placeholder: real build (webpack/vite/etc.) would run here
  await new Promise((resolve) => setTimeout(resolve, 500));

  appendStageLog('BUILD', 'Build completed.');
  setStageState('BUILD', 'done');
}

