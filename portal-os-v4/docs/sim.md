# SIM Bridge Layer

Portal‑OS v4 does not contain SIM or SIMVS internally.
Instead, it includes a thin bridge layer that allows Portal‑OS v4 to:

- Load SIM specs
- Apply SIM metadata
- Sync SIM modes
- Display SIM information in the Shell

## Files

- `sim/specLoader.ts`
- `sim/bridge.ts`
- `sim/modeSync.ts`
- `shell/simPanel.tsx`
