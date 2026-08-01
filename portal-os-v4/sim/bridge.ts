// portal-os-v4/sim/bridge.ts

import { loadSimSpecs } from './specLoader';
import { setMode } from '../kernel/modeManager';
import { dispatchEvent } from '../kernel/eventBus';

export function applySimSpecs() {
  const specs = loadSimSpecs();
  console.log('[SIM Bridge] Applying SIM specs…', specs);

  specs.forEach((spec) => {
    dispatchEvent(`sim.spec.${spec.kind}.${spec.id}`, spec);
  });

  setMode('PORTAL.MODE');
}
