// portal-os-v4/suites/sports/dashboard.tsx

import React from 'react';
import { calculateExposure } from './exposure';

export default function SportsDashboard() {
  const sample = [10, 20, 30, 40];
  const exposure = calculateExposure(sample);

  return (
    <div>
      <h2>Sports Dashboard</h2>
      <p>Average Exposure: {exposure.average}</p>
      <p>Max: {exposure.max}</p>
      <p>Min: {exposure.min}</p>
    </div>
  );
}
