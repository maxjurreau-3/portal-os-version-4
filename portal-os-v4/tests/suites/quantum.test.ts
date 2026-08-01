// portal-os-v4/tests/suites/quantum.test.ts

import { runQuantumSolver } from '../../suites/quantum/solver';
import { collapseQuantumState } from '../../suites/quantum/collapse';

describe('Quantum Suite', () => {
  test('solver returns amplitudes', () => {
    const result = runQuantumSolver();
    expect(Array.isArray(result)).toBe(true);
  });

  test('collapse produces valid collapsed state', () => {
    const collapsed = collapseQuantumState();
    expect(collapsed.includes(1)).toBe(true);
  });
});
