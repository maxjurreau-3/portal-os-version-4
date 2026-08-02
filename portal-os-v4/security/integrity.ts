// portal-os-v4/security/integrity.ts

export function verifyIntegrity(payload: unknown) {
  const ok = payload !== null && payload !== undefined;
  if (!ok) throw new Error('Integrity check failed.');
  return true;
}
