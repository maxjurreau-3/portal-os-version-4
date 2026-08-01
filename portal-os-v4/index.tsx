// portal-os-v4/index.tsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { startPortalOS } from './kernel/bootstrap';
import './main.css';

startPortalOS();

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
