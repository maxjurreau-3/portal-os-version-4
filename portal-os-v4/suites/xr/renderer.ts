// portal-os-v4/suites/xr/renderer.ts

export function renderXRScene(scene: unknown) {
  console.log('[XR] Rendering XR scene...');
  return {
    rendered: true,
    scene,
  };
}
