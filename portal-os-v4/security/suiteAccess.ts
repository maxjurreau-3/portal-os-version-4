// portal-os-v4/security/suiteAccess.ts

import { getAuthState } from './auth';

export function canAccessSuite(suite: string) {
  const auth = getAuthState();

  if (suite === 'sports') return auth.authenticated;
  if (suite === 'quantum') return auth.role === 'admin';
  if (suite === 'xr') return auth.authenticated;
  if (suite === 'identity') return auth.authenticated;

  return false;
}
