// portal-os-v4/kernel/processManager.ts

import { KernelProcess } from './index';

const processes: Record<string, KernelProcess> = {};

export function registerProcess(proc: KernelProcess) {
  processes[proc.id] = proc;
  console.log(`[PK4] Registered process: ${proc.id}`);
}

export function getProcess(id: string) {
  return processes[id];
}

export function setProcessState(id: string, state: KernelProcess['state']) {
  if (processes[id]) {
    processes[id].state = state;
    console.log(`[PK4] Process ${id} state → ${state}`);
  }
}
