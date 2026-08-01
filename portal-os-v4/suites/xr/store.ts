// portal-os-v4/suites/xr/store.ts

import { XRPosition, XRScene } from './types';

let currentPosition: XRPosition = { x: 0, y: 0, z: 0 };
let currentScene: XRScene = {
  id: 'scene-1',
  name: 'Default XR Scene',
  objects: ['cube', 'sphere', 'plane'],
};

export function getXRPosition(): XRPosition {
  return currentPosition;
}

export function setXRPosition(pos: XRPosition) {
  currentPosition = pos;
  console.log('[XR] Updated position:', currentPosition);
}

export function getXRScene(): XRScene {
  return currentScene;
}

export function setXRScene(scene: XRScene) {
  currentScene = scene;
  console.log('[XR] Updated scene:', currentScene);
}
