// portal-os-v4/tests/kernel/kernel.test.ts

import { KernelMain } from '../../kernel/index';
import { bootKernel, shutdownKernel } from '../../kernel/runtime';

describe('PK4 Kernel', () => {
  test('boots correctly', () => {
    bootKernel();
    expect(KernelMain.state).toBe('running');
  });

  test('shuts down correctly', () => {
    shutdownKernel();
    expect(KernelMain.state).toBe('paused');
  });
});
