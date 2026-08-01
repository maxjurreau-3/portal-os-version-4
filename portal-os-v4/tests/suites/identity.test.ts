// portal-os-v4/tests/suites/identity.test.ts

import { loadIdentity, startVerificationFlow } from '../../suites/identity/api';

describe('Identity Suite', () => {
  test('identity loads', () => {
    const id = loadIdentity();
    expect(id).toHaveProperty('email');
  });

  test('verification updates identity', () => {
    startVerificationFlow({});
    const id = loadIdentity();
    expect(id.verified).toBe(true);
  });
});
