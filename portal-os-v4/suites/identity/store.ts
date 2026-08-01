// portal-os-v4/suites/identity/store.ts

import { UserIdentity } from './types';

let currentIdentity: UserIdentity = {
  id: 'user-1',
  displayName: 'User',
  email: 'user@example.com',
  tier: 'FREE',
  verified: false,
};

export function getIdentity(): UserIdentity {
  return currentIdentity;
}

export function setIdentity(identity: Partial<UserIdentity>) {
  currentIdentity = { ...currentIdentity, ...identity };
  console.log('[Identity] Updated identity:', currentIdentity);
}
