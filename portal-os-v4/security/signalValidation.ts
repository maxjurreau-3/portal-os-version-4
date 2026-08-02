// portal-os-v4/security/signalValidation.ts

export function validateSignal(signal: string) {
  if (!signal.startsWith('UMBRELLA.SIGNAL.') && !signal.startsWith('SIM.SIGNAL.')) {
    throw new Error(`Invalid signal: ${signal}`);
  }
  return true;
}
