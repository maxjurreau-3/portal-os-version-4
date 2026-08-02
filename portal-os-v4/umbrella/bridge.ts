// portal-os-v4/umbrella/bridge.ts

import { dispatchEvent } from '../kernel/eventBus';
import { setMode } from '../kernel/modeManager';

export type UmbrellaSignal =
  | 'UMBRELLA.SIGNAL.BOOT'
  | 'UMBRELLA.SIGNAL.ID_REFRESH'
  | 'UMBRELLA.SIGNAL.PIPELINE_TRIGGER'
  | 'UMBRELLA.SIGNAL.SUITE_SYNC';

export function receiveUmbrellaSignal(signal: UmbrellaSignal, payload: unknown = null) {
  console.log(`[Umbrella] Received signal: ${signal}`, payload);

  switch (signal) {
    case 'UMBRELLA.SIGNAL.BOOT':
      dispatchEvent('umbrella.boot');
      setMode('PORTAL.MODE');
      break;

    case 'UMBRELLA.SIGNAL.ID_REFRESH':
      dispatchEvent('umbrella.identity.refresh');
      break;

    case 'UMBRELLA.SIGNAL.PIPELINE_TRIGGER':
      dispatchEvent('umbrella.pipeline.trigger');
      break;

    case 'UMBRELLA.SIGNAL.SUITE_SYNC':
      dispatchEvent('umbrella.suite.sync');
      break;
  }
}
