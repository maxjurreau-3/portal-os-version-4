import { authenticate } from './auth';

export function guard() {
  return authenticate();
}
