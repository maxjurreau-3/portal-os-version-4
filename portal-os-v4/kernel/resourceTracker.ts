// portal-os-v4/kernel/resourceTracker.ts

export function trackResources(cpu: number, memory: number, io: number) {
  return {
    cpu: Math.min(cpu, 1),
    memory: Math.min(memory, 1),
    io: Math.min(io, 1),
  };
}
