// portal-os-v4/suites/xr/tracker.ts

import { XRPosition } from './types';
import { setXRPosition } from './store';

export function trackXRPosition(position: XRPosition) {
  setXRPosition(position);
  return {
    ...position,
    timestamp: Date.now(),
  };
}
