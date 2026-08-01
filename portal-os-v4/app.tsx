// portal-os-v4/app.tsx

import React from 'react';
import Desktop from './shell/desktop';
import SuiteLauncher from './shell/suiteLauncher';
import IdentityPanel from './shell/identityPanel';
import PipelineViewer from './shell/pipelineViewer';

export default function App() {
  return (
    <div>
      <Desktop />
      <SuiteLauncher />
      <IdentityPanel />
      <PipelineViewer />
    </div>
  );
}
