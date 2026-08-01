// portal-os-v4/suites/identity/index.ts

export const IdentitySuite = {
  id: 'suite.identity',
  processes: ['identity-core', 'identity-verification'],
  modes: ['IDENTITY.MODE'],
  tiers: ['VERIFIED'],
};
