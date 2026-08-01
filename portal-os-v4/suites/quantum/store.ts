// portal-os-v4/suites/quantum/store.ts

import { QuantumState } from './types';

let state: QuantumState = {
  amplitudes: [0.2, 0.5, 0.3],
  collapsed: false,
};

export function getQuantumState(): QuantumState {
  return state;
}

export function setQuantumState(newState: Partial<QuantumState>) {
  state = { ...state, ...newState };
  console.log('[Quantum] Updated state:', state);
}
