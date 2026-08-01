// portal-os-v4/tests/suites/sports.test.ts

import { getSportsExposure } from '../../suites/sports/exposure';

describe('Sports Suite', () => {
  test('exposure returns valid number', () => {
    const value = getSportsExposure();
    expect(typeof value).toBe('number');
  });
});
