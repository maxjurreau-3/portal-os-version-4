// portal-os-v4/security/guard.ts

import { getAuthState } from './auth';

export function requireAuth() {
  const auth = getAuthState();
  if (!auth.authenticated) {
    throw new Error('Access denied: user not authenticated.');
  }
}

export function requireAdmin() {
  const auth = getAuthState();
  if (auth.role !== 'admin') {
    throw new Error('Access denied: admin role required.');
  }
}
