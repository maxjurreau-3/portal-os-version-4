// portal-os-v4/suites/identity/core.ts

export type UserIdentity = {
  displayName: string;
  email: string;
  tier: 'FREE' | 'ACCUMULATION' | 'VERIFIED';
};

export function loadIdentity(): UserIdentity {
  console.log('[Identity] Loading identity...');
  return {
    displayName: 'User',
    email: 'user@example.com',
    tier: 'FREE',
  };
}
