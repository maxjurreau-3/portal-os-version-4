// portal-os-v4/pipeline/index.ts

export type PipelineStage = 'BUILD' | 'DEPLOY' | 'EXECUTE' | 'VERSION';

export const PipelineStages: PipelineStage[] = [
  'BUILD',
  'DEPLOY',
  'EXECUTE',
  'VERSION',
];
