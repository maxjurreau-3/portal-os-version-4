// portal-os-v4/pipeline/types.ts

export type PipelineStageId = 'BUILD' | 'DEPLOY' | 'EXECUTE' | 'VERSION';

export type PipelineStageState = 'idle' | 'running' | 'done' | 'error';

export type PipelineStage = {
  id: PipelineStageId;
  state: PipelineStageState;
  log: string[];
};
