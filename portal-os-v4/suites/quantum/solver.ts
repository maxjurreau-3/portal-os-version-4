// portal-os-v4/suites/quantum/solver.ts

import { getQuantumState, setQuantumState } from './store';

export function runQuantumSolver() {
  const state = getQuantumState();

  const newAmplitudes = state.amplitudes.map((a) => {
    const noise = (Math.random() - 0.5) * 0.1;
    return Math.max(0, Math.min(1, a + noise));
  });

  setQuantumState({ amplitudes: newAmplitudes });

  return newAmplitudes;
}
