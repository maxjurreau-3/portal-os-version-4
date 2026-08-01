// portal-os-v4/suites/quantum/visualizer.ts

import { QuantumState } from './types';

export function visualizeQuantumState(state: QuantumState) {
  return {
    bars: state.amplitudes.map((a) => a * 100),
    collapsed: state.collapsed,
  };
}
