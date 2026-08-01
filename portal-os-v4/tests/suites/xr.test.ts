// portal-os-v4/tests/suites/xr.test.ts

import { trackXRPosition } from '../../suites/xr/tracker';

describe('XR Suite', () => {
  test('position tracking works', () => {
    const result = trackXRPosition({ x: 1, y: 2, z: 3 });
    expect(result.x).toBe(1);
    expect(result.y).toBe(2);
    expect(result.z).toBe(3);
  });
});
