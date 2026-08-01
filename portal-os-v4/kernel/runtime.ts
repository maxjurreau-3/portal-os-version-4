// portal-os-v4/kernel/runtime.ts

import { KernelMain } from './index';
import { dispatchEvent } from './eventBus';

export function bootKernel() {
  KernelMain.state = 'running';
  dispatchEvent('kernel.boot');
  console.log('[PK4] Kernel booted.');
}

export function shutdownKernel() {
  KernelMain.state = 'paused';
  dispatchEvent('kernel.shutdown');
  console.log('[PK4] Kernel paused.');
}
