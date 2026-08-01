// portal-os-v4/sim/specLoader.ts

export type SimSpec = {
  id: string;
  kind: 'kernel' | 'suite' | 'shell' | 'pipeline';
  mode: string;
};

const specs: SimSpec[] = [
  { id: 'pk4-main', kind: 'kernel', mode: 'PORTAL.MODE' },
  { id: 'suite.sports', kind: 'suite', mode: 'SPORTS.MODE' },
  { id: 'suite.quantum', kind: 'suite', mode: 'QUANTUM.MODE' },
  { id: 'suite.xr', kind: 'suite', mode: 'XR.MODE' },
  { id: 'suite.identity', kind: 'suite', mode: 'IDENTITY.MODE' },
];

export function loadSimSpecs(): SimSpec[] {
  return specs;
}
