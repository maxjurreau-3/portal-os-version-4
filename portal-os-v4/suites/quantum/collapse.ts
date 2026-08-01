// portal-os-v4/suites/quantum/collapse.ts

import { getQuantumState, setQuantumState } from './store';

export function collapseQuantumState() {
  const state = getQuantumState();
  const index = Math.floor(Math.random() * state.amplitudes.length);

  const collapsedState = state.amplitudes.map((_, i) => (i === index ? 1 : 0));

  setQuantumState({
    amplitudes: collapsedState,
    collapsed: true,
  });

  return collapsedState;
}
