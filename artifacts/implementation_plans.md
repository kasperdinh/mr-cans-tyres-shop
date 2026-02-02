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
