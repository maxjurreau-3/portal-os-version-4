// portal-os-v4/suites/quantum/index.ts

export const QuantumSuite = {
  id: 'suite.quantum',
  processes: ['quantum-solver', 'quantum-visualizer'],
  modes: ['QUANTUM.MODE'],
  tiers: ['FREE', 'VERIFIED'],
};
