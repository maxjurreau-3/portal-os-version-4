# Portal‑Kernel v4 (PK4)

PK4 is the core runtime of Portal‑OS v4. It manages:

- Process lifecycle
- Mode switching
- Event dispatching
- Resource tracking
- Kernel boot/shutdown

## Files

- `kernel/index.ts` — main kernel process
- `kernel/runtime.ts` — boot/shutdown logic
- `kernel/processManager.ts` — process registry
- `kernel/eventBus.ts` — event dispatch system
- `kernel/resourceTracker.ts` — CPU/memory/IO tracker
- `kernel/modeManager.ts` — mode switching
- `kernel/bootstrap.ts` — Portal‑OS startup entry
