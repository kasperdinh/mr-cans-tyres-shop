# Implementation Plan - Backend Core (Phase 2)

## Goal

Build the backend engine using NestJS, focusing on Postgres schema and Secure Auth.

## Proposed Changes

### [NEW] Postgres Schema

- **Models**: `User`, `Product`, `Service`, `Vehicle`, `Compatibility`, `AuditLog`.
- **Features**:
  - Rich `///` comments for AI context.
  - Strict Enums (`ProductType`, `VehicleType`) for validation.

### [NEW] Auth Module

- **Components**: `AuthService`, `AuthController`, `JwtStrategy`, `RolesGuard`.
- **Logic**: JWT-based stateless auth with RBAC (`ADMIN` vs `STAFF`).
- **Security**: `bcrypt` hashing, standard Bearer token flow.

## Verification

- **Automated**: `nest build`, `prisma format`, `prisma generate`.
- **Manual**: Test Login/Register endpoints via Swagger/Curl.

# Implementation Plan - Security Hardening (Priority)

## Goal

Fix critical security gaps identified during audit: missing RBAC enforcement and public registration.

## User Review Required

> [!IMPORTANT]
>
> - **Critical Finding**: `RolesGuard` is missing; `ADMIN` vs `STAFF` is not enforced.
> - **Remediation**:
>   1. Implement `RolesGuard`.
>   2. Restrict `/auth/register` to `ADMIN` only (prevent unauthorized staff creation).
>   3. Add `Roles` decorator.

## Proposed Changes

### Backend Layer

#### [NEW] [roles.guard.ts](file:///Users/kasperdinh/Dev/mr-cans-tyres-shop/apps/server/src/auth/guards/roles.guard.ts)

- Logic: Check `context.switchToHttp().getRequest().user.role` against `@Roles()`.

#### [NEW] [roles.decorator.ts](file:///Users/kasperdinh/Dev/mr-cans-tyres-shop/apps/server/src/auth/decorators/roles.decorator.ts)

- Custom decorator to set metadata keys.

#### [MODIFY] [auth.controller.ts](file:///Users/kasperdinh/Dev/mr-cans-tyres-shop/apps/server/src/auth/auth.controller.ts)

- Apply `@UseGuards(JwtAuthGuard, RolesGuard)`.
- Apply `@Roles(UserRole.ADMIN)` to `register` endpoint.
