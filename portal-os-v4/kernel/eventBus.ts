// portal-os-v4/kernel/eventBus.ts

type EventPayload = unknown;

export function dispatchEvent(type: string, payload: EventPayload = null) {
  console.log(`[PK4] Event dispatched: ${type}`, payload);
}
