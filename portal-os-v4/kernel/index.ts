// portal-os-v4/kernel/index.ts

export type KernelProcessState = 'idle' | 'running' | 'paused' | 'error';

export interface KernelProcess {
  id: string;
  state: KernelProcessState;
  resources: {
    cpu: number;
    memory: number;
    io: number;
  };
}

export const KernelMain: KernelProcess = {
  id: 'pk4-main',
  state: 'idle',
  resources: {
    cpu: 0,
    memory: 0,
    io: 0,
  },
};
