// portal-os-v4/shell/useIdentity.ts

import { useEffect, useState } from 'react';
import { loadIdentity, updateDisplayName, startVerificationFlow } from '../suites/identity/api';
import { UserIdentity } from '../suites/identity/types';

export function useIdentity() {
  const [identity, setIdentityState] = useState<UserIdentity | null>(null);

  useEffect(() => {
    setIdentityState(loadIdentity());
  }, []);

  function setName(name: string) {
    updateDisplayName(name);
    setIdentityState(loadIdentity());
  }

  function verify() {
    const result = startVerificationFlow({ doc: 'placeholder' });
    setIdentityState(loadIdentity());
    return result;
  }

  return { identity, setName, verify };
}
