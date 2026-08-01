# Portal‑OS v4 Pipeline

The pipeline executes the four-stage Umbrella deployment flow:

1. BUILD
2. DEPLOY
3. EXECUTE
4. VERSION

Each stage has:

- State (`idle`, `running`, `done`, `error`)
- Log entries
- UI representation in the Shell

## Files

- `pipeline/types.ts`
- `pipeline/store.ts`
- `pipeline/build.ts`
- `pipeline/deploy.ts`
- `pipeline/execute.ts`
- `pipeline/version.ts`
- `pipeline/index.ts` — full pipeline runner
