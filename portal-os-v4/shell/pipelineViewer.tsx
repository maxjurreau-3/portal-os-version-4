// portal-os-v4/shell/pipelineViewer.tsx

import React, { useState } from 'react';
import { getAllStages } from '../pipeline/store';
import { runFullPipeline } from '../pipeline/index';

export default function PipelineViewer() {
  const [stages, setStages] = useState(getAllStages());
  const [running, setRunning] = useState(false);

  async function run() {
    if (running) return;
    setRunning(true);
    await runFullPipeline('v0.1.0');
    setStages(getAllStages());
    setRunning(false);
  }

  return (
    <div>
      <h2>Pipeline Viewer</h2>
      <button onClick={run} disabled={running}>
        {running ? 'Running…' : 'Run Full Pipeline'}
      </button>

      <ul>
        {stages.map((s) => (
          <li key={s.id}>
            <strong>{s.id}</strong> — state: {s.state}
            <br />
            log: {s.log.join(' | ')}
          </li>
        ))}
      </ul>
    </div>
  );
}
