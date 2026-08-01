// portal-os-v4/suites/xr/index.ts

export const XRSuite = {
  id: 'suite.xr',
  processes: ['xr-renderer', 'xr-tracker'],
  modes: ['XR.MODE'],
  tiers: ['FREE', 'VERIFIED'],
};
