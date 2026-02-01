# Implementation Plan - Monorepo Initialization

## Phase 1: Foundation & Infrastructure

- Monorepo Init: TurboRepo + pnpm for client (Next.js) & server (NestJS)
- Root package.json → scripts & workspace paths
- pnpm-workspace.yaml → apps/_ and packages/_
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
- Env Validation: @nestjs/config installed in server
- Schema: apps/server/src/env.validation.ts (Zod)
- Integration: AppModule.forRoot({ validate, isGlobal: true })
- Docker Setup: infra/docker/docker-compose.yml created
- Services: Postgres 16 (port 5432), Redis 7 (port 6379)
- Config: Local .docker-data/ persistence, .gitignore updated
- CI/CD: .github/workflows/ci.yml created (Push/PR triggers)
- Turbo: Added 'test' task pipeline
- Verification: pnpm test passes locally (Unit tests fixed)
- Refactor: Scope renamed to `@canstyres`. Verified via `turbo run build` and `turbo run test`.

# Phase 2: Backend Core

## Goal Description

Build the backend engine using NestJS, focusing on Postgres schema, Secure Auth, and Catalog API.

## Proposed Changes

### [NEW] [Postgres Schema]

- Design schema for Products, Services, Orders, Users using Prisma.

### [NEW] [Auth Module]

- Implement JWT-based authentication.

### [NEW] [Catalog Module]

- CRUD endpoints for Products and Services.
