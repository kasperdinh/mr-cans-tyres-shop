# Implementation Plan - Monorepo Initialization

## Goal Description

Initialize a modern Monorepo structure using **TurboRepo** and **pnpm** to support the **Next.js** (Frontend) and **NestJS** (Backend) applications as detailed in the `README.md`.

## User Review Required

> [!IMPORTANT]
> This plan assumes using **pnpm** as the package manager for better workspace support and performance.

## Proposed Changes

### Core Structure

#### [NEW] [package.json](file:///Users/kasperdinh/Dev/mr-cans-tyres-shop/package.json)

- Define root scripts and `pnpm` workspaces.

#### [NEW] [pnpm-workspace.yaml](file:///Users/kasperdinh/Dev/mr-cans-tyres-shop/pnpm-workspace.yaml)

- Configure workspace paths: `apps/*`, `packages/*`.

#### [NEW] [turbo.json](file:///Users/kasperdinh/Dev/mr-cans-tyres-shop/turbo.json)

- Configure TurboRepo pipeline (build, test, lint, dev).

### Apps Initialization

#### `apps/client` (Next.js)

- Initialize using `create-next-app` (v14/15 App Router).
- Remove default git initialization.

#### `apps/server` (NestJS)

- Initialize using `nest new` (or manually if Nest CLI is not preferred gloabally, but `npx @nestjs/cli new` is better).

### Structure

```
root
├── apps
│   ├── client (Next.js)
│   └── server (NestJS)
├── packages
│   ├── config (Shared configs)
│   └── types (Shared DTOs)
├── turbo.json
└── package.json
```

## Verification Plan

### Automated Tests

- Run `pnpm build` from valid root to ensure Turbo pipeline works.
- Verify `pnpm dev` starts both client and server in parallel.

### Manual Verification

- Check directory structure matches `README.md`.
- Verify shared packages can be imported (in later steps, but structure needs to exist).

---
