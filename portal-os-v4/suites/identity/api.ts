// portal-os-v4/suites/identity/api.ts

import { getIdentity, setIdentity } from './store';
import { requestVerification } from './verification';
import { UserIdentity } from './types';

export function loadIdentity(): UserIdentity {
  return getIdentity();
}

export function updateDisplayName(name: string) {
  setIdentity({ displayName: name });
}

export function startVerificationFlow(document: unknown) {
  return requestVerification(document);
}
