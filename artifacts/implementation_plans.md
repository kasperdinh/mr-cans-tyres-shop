# Implementation Plan - Monorepo Initialization

- Monorepo Init: TurboRepo + pnpm for client (Next.js) & server (NestJS)
- Root package.json → scripts & workspace paths
- pnpm-workspace.yaml → apps/* and packages/*
- turbo.json → pipeline: build, test, lint, dev
- Apps: apps/client → Next.js init, remove git; apps/server → NestJS init via CLI
- Packages: packages/config, packages/types created
- Verification: pnpm build works, pnpm dev runs both apps, folder structure correct
- Code Quality: centralize ESLint + Prettier in packages/config
- ESLint: eslint/index.mjs shared config; Prettier: prettier/index.mjs
- Apps extend shared config: server, client, shared
- Husky + lint-staged pre-commit hook setup
- Verification: turbo lint passes all packages
- Shared DTOs: @mr-cans/shared for Types, Interfaces, Zod Schemas
- packages/shared: package.json with zod, tsconfig.json, src/index.ts
- Apps integration: server + client depend on @mr-cans/shared & zod
- Verification: turbo run build → packages build/link; runtime import tested in server
