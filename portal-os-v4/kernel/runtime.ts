// portal-os-v4/kernel/runtime.ts

import { KernelMain } from './index';
import { KernelEvents } from './events';

export function bootKernel() {
  KernelMain.state = 'running';
  console.log(`[PK4] Boot event: ${KernelEvents.boot}`);
}

export function shutdownKernel() {
  KernelMain.state = 'paused';
  console.log(`[PK4] Shutdown event: ${KernelEvents.shutdown}`);
}
