import { authenticate } from './auth';

export function canAccessSuite() {
  return authenticate();
}
