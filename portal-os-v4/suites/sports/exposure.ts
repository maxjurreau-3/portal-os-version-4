// portal-os-v4/suites/sports/exposure.ts

export function calculateExposure(data: number[]) {
  console.log('[Sports] Exposure engine running...');
  const avg = data.reduce((a, b) => a + b, 0) / data.length;
  return {
    average: avg,
    max: Math.max(...data),
    min: Math.min(...data),
  };
}
