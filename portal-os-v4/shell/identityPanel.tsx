// portal-os-v4/shell/identityPanel.tsx

import React, { useState } from 'react';
import { useIdentity } from './useIdentity';

export default function IdentityPanel() {
  const { identity, setName, verify } = useIdentity();
  const [newName, setNewName] = useState('');

  if (!identity) return <div>Loading identity...</div>;

  return (
    <div>
      <h2>Identity Panel</h2>
      <p>ID: {identity.id}</p>
      <p>Email: {identity.email}</p>
      <p>Tier: {identity.tier}</p>
      <p>Verified: {identity.verified ? 'Yes' : 'No'}</p>

      <div>
        <h3>Update Display Name</h3>
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New display name"
        />
        <button onClick={() => setName(newName)}>Save</button>
      </div>

      <div>
        <h3>Verification</h3>
        <button
          onClick={() => {
            const result = verify();
            console.log('[Identity] Verification result:', result);
          }}
        >
          Verify Identity
        </button>
      </div>
    </div>
  );
}

