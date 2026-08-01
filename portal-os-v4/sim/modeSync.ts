// portal-os-v4/sim/modeSync.ts

import { setMode } from '../kernel/modeManager';

export function syncSimMode(mode: string) {
  console.log('[SIM Bridge] Syncing mode from SIM:', mode);
  setMode(mode);
}
