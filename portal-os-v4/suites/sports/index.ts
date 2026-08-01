// portal-os-v4/suites/sports/index.ts

export const SportsSuite = {
  id: 'suite.sports',
  processes: ['sports-edge', 'sports-exposure', 'sports-dashboard'],
  modes: ['SPORTS.MODE'],
  tiers: ['FREE', 'ACCUMULATION', 'VERIFIED'],
};
