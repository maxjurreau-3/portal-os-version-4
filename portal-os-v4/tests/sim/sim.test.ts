// portal-os-v4/tests/sim/sim.test.ts

import { loadSimSpecs } from '../../sim/specLoader';
import { syncSimMode } from '../../sim/modeSync';
import { getMode } from '../../kernel/modeManager';

describe('SIM Bridge', () => {
  test('spec loader returns specs', () => {
    const specs = loadSimSpecs();
    expect(specs.length).toBeGreaterThan(0);
  });

  test('mode sync updates kernel mode', () => {
    syncSimMode('TEST.MODE');
    expect(getMode()).toBe('TEST.MODE');
  });
});
