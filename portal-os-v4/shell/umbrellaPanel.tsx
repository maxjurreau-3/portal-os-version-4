import React from 'react';
import { getUmbrellaState } from '../umbrella/state';
import { syncUmbrella } from '../umbrella/sync';

export default function UmbrellaPanel() {
  const state = getUmbrellaState();

  async function handleSync() {
    await syncUmbrella();
  }

  return (
    <div>
      <h2>Umbrella Ecosystem</h2>

      <p>Ecosystem Ready: {state.ecosystemReady ? 'Yes' : 'No'}</p>
      <p>Last Sync: {new Date(state.lastSync).toLocaleString()}</p>

      <button onClick={handleSync}>Sync Umbrella</button>
    </div>
  );
}
