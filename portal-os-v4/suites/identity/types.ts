// portal-os-v4/suites/identity/types.ts

export type Tier = 'FREE' | 'ACCUMULATION' | 'VERIFIED';

export type UserIdentity = {
  id: string;
  displayName: string;
  email: string;
  tier: Tier;
  verified: boolean;
};
