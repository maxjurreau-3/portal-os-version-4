// portal-os-v4/pipeline/store.ts

import { PipelineStage, PipelineStageId } from './types';

const stages: Record<PipelineStageId, PipelineStage> = {
  BUILD: { id: 'BUILD', state: 'idle', log: [] },
  DEPLOY: { id: 'DEPLOY', state: 'idle', log: [] },
  EXECUTE: { id: 'EXECUTE', state: 'idle', log: [] },
  VERSION: { id: 'VERSION', state: 'idle', log: [] },
};

export function getStage(id: PipelineStageId): PipelineStage {
  return stages[id];
}

export function setStageState(id: PipelineStageId, state: PipelineStage['state']) {
  stages[id].state = state;
  stages[id].log.push(`state → ${state}`);
  console.log(`[Pipeline] ${id} state → ${state}`);
}

export function appendStageLog(id: PipelineStageId, message: string) {
  stages[id].log.push(message);
  console.log(`[Pipeline] ${id}: ${message}`);
}

export function getAllStages(): PipelineStage[] {
  return Object.values(stages);
}
