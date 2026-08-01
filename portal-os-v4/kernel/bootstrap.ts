// portal-os-v4/kernel/bootstrap.ts

import { bootKernel } from './runtime';

export function startPortalOS() {
  console.log('[Portal‑OS v4] Booting kernel...');
  bootKernel();
}
