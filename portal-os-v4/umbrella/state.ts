// portal-os-v4/umbrella/state.ts

export type UmbrellaState = {
  ecosystemReady: boolean;
  lastSync: number;
};

let state: UmbrellaState = {
  ecosystemReady: false,
  lastSync: Date.now(),
};

export function getUmbrellaState(): UmbrellaState {
  return state;
}

export function setUmbrellaState(update: Partial<UmbrellaState>) {
  state = { ...state, ...update };
  console.log('[Umbrella] Updated state:', state);
}
