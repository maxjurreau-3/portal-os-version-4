// portal-os-v4/tests/umbrella/umbrella.test.ts

import { syncUmbrella } from '../../umbrella/sync';
import { getUmbrellaState } from '../../umbrella/state';

describe('Umbrella Integration', () => {
  test('sync updates ecosystem state', async () => {
    await syncUmbrella();
    const state = getUmbrellaState();
    expect(state.ecosystemReady).toBe(true);
  });
});
