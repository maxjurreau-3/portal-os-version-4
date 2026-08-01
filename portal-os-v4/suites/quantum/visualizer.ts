// portal-os-v4/suites/quantum/visualizer.ts

export function renderQuantumState(state: number[]) {
  console.log('[Quantum] Rendering quantum state...');
  return {
    amplitudes: state,
    max: Math.max(...state),
    min: Math.min(...state),
  };
}
