// portal-os-v4/suites/quantum/dashboard.tsx

import React, { useState } from 'react';
import { getQuantumState } from './store';
import { runQuantumSolver } from './solver';
import { collapseQuantumState } from './collapse';
import { visualizeQuantumState } from './visualizer';

export default function QuantumDashboard() {
  const [state, setState] = useState(getQuantumState());
  const viz = visualizeQuantumState(state);

  function solve() {
    runQuantumSolver();
    setState(getQuantumState());
  }

  function collapse() {
    collapseQuantumState();
    setState(getQuantumState());
  }

  return (
    <div>
      <h2>Quantum Suite</h2>

      <h3>Amplitudes</h3>
      <ul>
        {state.amplitudes.map((a, i) => (
          <li key={i}>Amplitude {i}: {a.toFixed(3)}</li>
        ))}
      </ul>

      <h3>Visualization</h3>
      <ul>
        {viz.bars.map((b, i) => (
          <li key={i}>Bar {i}: {b.toFixed(1)}%</li>
        ))}
      </ul>

      <p>Collapsed: {state.collapsed ? 'Yes' : 'No'}</p>

      <button onClick={solve}>Run Solver</button>
      <button onClick={collapse}>Collapse State</button>
    </div>
  );
}
