// portal-os-v4/suites/xr/dashboard.tsx

import React, { useState } from 'react';
import { getXRPosition, getXRScene } from './store';
import { trackXRPosition } from './tracker';
import { renderXRScene } from './renderer';

export default function XRDashboard() {
  const [pos, setPos] = useState(getXRPosition());
  const scene = getXRScene();
  const renderInfo = renderXRScene(scene);

  function move(dx: number, dy: number, dz: number) {
    const newPos = {
      x: pos.x + dx,
      y: pos.y + dy,
      z: pos.z + dz,
    };
    const tracked = trackXRPosition(newPos);
    setPos({ x: tracked.x, y: tracked.y, z: tracked.z });
  }

  return (
    <div>
      <h2>XR Suite</h2>

      <h3>Scene</h3>
      <p>ID: {scene.id}</p>
      <p>Name: {scene.name}</p>
      <p>Objects: {scene.objects.join(', ')}</p>
      <p>Rendered: {renderInfo.rendered ? 'Yes' : 'No'}</p>
      <p>Object Count: {renderInfo.objectCount}</p>

      <h3>Position</h3>
      <p>
        x: {pos.x}, y: {pos.y}, z: {pos.z}
      </p>

      <div>
        <button onClick={() => move(1, 0, 0)}>Move +X</button>
        <button onClick={() => move(-1, 0, 0)}>Move -X</button>
        <button onClick={() => move(0, 1, 0)}>Move +Y</button>
        <button onClick={() => move(0, -1, 0)}>Move -Y</button>
        <button onClick={() => move(0, 0, 1)}>Move +Z</button>
        <button onClick={() => move(0, 0, -1)}>Move -Z</button>
      </div>
    </div>
  );
}
