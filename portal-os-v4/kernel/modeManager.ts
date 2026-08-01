// portal-os-v4/kernel/modeManager.ts

let currentMode = 'PORTAL.MODE';

export function setMode(mode: string) {
  currentMode = mode;
  console.log(`[PK4] Mode switched → ${mode}`);
}

export function getMode() {
  return currentMode;
}
