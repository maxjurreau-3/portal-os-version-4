// portal-os-v4/shell/simPanel.tsx

import React, { useState } from 'react';
import { loadSimSpecs } from '../sim/specLoader';
import { applySimSpecs } from '../sim/bridge';
import { syncSimMode } from '../sim/modeSync';

export default function SimPanel() {
  const [specs, setSpecs] = useState(loadSimSpecs());
  const [currentMode, setCurrentMode] = useState('PORTAL.MODE');

  function refreshSpecs() {
    setSpecs(loadSimSpecs());
  }

  function applySpecs() {
    applySimSpecs();
  }

  function setModeFromSim(mode: string) {
    syncSimMode(mode);
    setCurrentMode(mode);
  }

  return (
    <div>
      <h2>SIM Bridge</h2>
      <p>Current Mode: {currentMode}</p>

      <button onClick={refreshSpecs}>Refresh SIM Specs</button>
      <button onClick={applySpecs}>Apply SIM Specs</button>

      <h3>Specs</h3>
      <ul>
        {specs.map((s) => (
          <li key={s.id}>
            <strong>{s.id}</strong> — kind: {s.kind}, mode: {s.mode}{' '}
            <button onClick={() => setModeFromSim(s.mode)}>Set Mode</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
