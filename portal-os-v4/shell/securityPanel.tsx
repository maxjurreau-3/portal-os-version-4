import React from 'react';
import { guard } from '../security/guard';

export default function SecurityPanel() {
  const ok = guard();

  return (
    <div>
      <h2>Security Status</h2>
      <p>Guard Active: {ok ? 'Yes' : 'No'}</p>
    </div>
  );
}

