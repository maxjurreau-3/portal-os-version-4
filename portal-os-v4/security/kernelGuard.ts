// portal-os-v4/security/kernelGuard.ts

import { getMode } from '../kernel/modeManager';

export function ensureKernelMode(expected: string) {
  const mode = getMode();
  if (mode !== expected) {
    throw new Error(`Kernel mode mismatch: expected ${expected}, got ${mode}`);
  }
}
