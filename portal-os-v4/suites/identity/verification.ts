// portal-os-v4/suites/identity/verification.ts

import { setIdentity, getIdentity } from './store';

export function requestVerification(document: unknown) {
  console.log('[Identity] Verification requested with document:', document);
  // placeholder: auto-verify
  const identity = getIdentity();
  setIdentity({ verified: true, tier: 'VERIFIED' });
  return {
    success: true,
    previousTier: identity.tier,
    newTier: 'VERIFIED',
  };
}
