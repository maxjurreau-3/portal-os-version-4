// portal-os-v4/tests/pipeline/pipeline.test.ts

import { runFullPipeline } from '../../pipeline/index';
import { getAllStages } from '../../pipeline/store';

describe('Pipeline Runtime', () => {
  test('runs full pipeline', async () => {
    await runFullPipeline('v0.1.0');
    const stages = getAllStages();
    stages.forEach((s) => expect(s.state).toBe('done'));
  });
});
