// portal-os-v4/shell/useKernel.ts

import { setMode } from '../kernel/modeManager';
import { dispatchEvent } from '../kernel/eventBus';

export function openView(view: string) {
  setMode(`SHELL.MODE.${view}`);
  dispatchEvent(`shell.open.${view.toLowerCase()}`);
}
