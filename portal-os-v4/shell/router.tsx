// portal-os-v4/shell/router.tsx

import React, { useState } from 'react';

// Shell Views
import Desktop from './desktop';
import SuiteLauncher from './suiteLauncher';
import IdentityPanel from './identityPanel';
import PipelineViewer from './pipelineViewer';
import UmbrellaPanel from './umbrellaPanel';
import SimPanel from './simPanel';
import SecurityPanel from './securityPanel';

// Suite Dashboards
import SportsDashboard from '../suites/sports/dashboard';
import QuantumDashboard from '../suites/quantum/dashboard';
import XRDashboard from '../suites/xr/dashboard';

export default function ShellRouter() {
  const [view, setView] = useState('DESKTOP');

  const views: Record<string, JSX.Element> = {
    DESKTOP: <Desktop />,
    SUITE_LAUNCHER: <SuiteLauncher />,
    IDENTITY_PANEL: <IdentityPanel />,
    PIPELINE_VIEWER: <PipelineViewer />,
    UMBRELLA_PANEL: <UmbrellaPanel />,
    SIM_PANEL: <SimPanel />,
    SECURITY_PANEL: <SecurityPanel />,
    SPORTS_DASHBOARD: <SportsDashboard />,
    QUANTUM_DASHBOARD: <QuantumDashboard />,
    XR_DASHBOARD: <XRDashboard />,
  };

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setView('DESKTOP')}>Desktop</button>
        <button onClick={() => setView('SUITE_LAUNCHER')}>Suites</button>
        <button onClick={() => setView('IDENTITY_PANEL')}>Identity</button>
        <button onClick={() => setView('PIPELINE_VIEWER')}>Pipeline</button>
        <button onClick={() => setView('UMBRELLA_PANEL')}>Umbrella</button>
        <button onClick={() => setView('SIM_PANEL')}>SIM</button>
        <button onClick={() => setView('SECURITY_PANEL')}>Security</button>
        <button onClick={() => setView('SPORTS_DASHBOARD')}>Sports</button>
        <button onClick={() => setView('QUANTUM_DASHBOARD')}>Quantum</button>
        <button onClick={() => setView('XR_DASHBOARD')}>XR</button>
      </nav>

      <div style={{ border: '2px solid red', padding: '20px' }}>
  {views[view] || <div>VIEW NOT FOUND</div>}
</div>

    </div>
  );
}
