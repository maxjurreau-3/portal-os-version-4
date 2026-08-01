// portal-os-v4/shell/router.tsx

import React, { useState } from 'react';

// Shell Views
import Desktop from './desktop';
import SuiteLauncher from './suiteLauncher';
import IdentityPanel from './identityPanel';
import PipelineViewer from './pipelineViewer';

// Suite Dashboards
import SportsDashboard from '../suites/sports/dashboard';
import QuantumDashboard from '../suites/quantum/dashboard';

export default function ShellRouter() {
  const [view, setView] = useState('DESKTOP');

  const views: Record<string, JSX.Element> = {
    DESKTOP: <Desktop />,
    SUITE_LAUNCHER: <SuiteLauncher />,
    IDENTITY_PANEL: <IdentityPanel />,
    PIPELINE_VIEWER: <PipelineViewer />,
    SPORTS_DASHBOARD: <SportsDashboard />,
    QUANTUM_DASHBOARD: <QuantumDashboard />,
  };

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setView('DESKTOP')}>Desktop</button>
        <button onClick={() => setView('SUITE_LAUNCHER')}>Suites</button>
        <button onClick={() => setView('IDENTITY_PANEL')}>Identity</button>
        <button onClick={() => setView('PIPELINE_VIEWER')}>Pipeline</button>
        <button onClick={() => setView('SPORTS_DASHBOARD')}>Sports</button>
        <button onClick={() => setView('QUANTUM_DASHBOARD')}>Quantum</button>
      </nav>

      {views[view]}
    </div>
  );
}
