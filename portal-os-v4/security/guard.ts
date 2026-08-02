// portal-os-v4/security/guard.ts
import { authenticate } from './auth';

export function guard() {
  return authenticate();
}


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
