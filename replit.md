# Todo App Workspace

## Overview

Full-stack Todo application with React frontend, Express backend, PostgreSQL database, and Clerk authentication.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Auth**: Clerk (`@clerk/react@^6.x`, `@clerk/express@^2.x`)
- **Frontend**: React + Vite + Tailwind CSS + shadcn/ui

## Artifacts

### Frontend: `/` (artifacts/todo-app)
- Landing page for unauthenticated users
- `/sign-in` and `/sign-up` Clerk auth pages
- `/tasks` — authenticated task dashboard with:
  - Priority color-coding (low=green, medium=amber, high=red)
  - Filter by priority and completion status
  - Sort by priority/date/title
  - Create, edit, delete, toggle completion
  - Stats summary (total, completed, pending, overdue)

### API Server: `/api` (artifacts/api-server)
- REST API endpoints for tasks
- Clerk authentication middleware
- All tasks are per-user via `userId`

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)

## Database Schema

### tasks
- `id` (serial, PK)
- `userId` (text, NOT NULL) — Clerk user ID
- `title` (text, NOT NULL)
- `description` (text, nullable)
- `priority` (enum: low|medium|high, default: medium)
- `completed` (boolean, default: false)
- `dueDate` (timestamp, nullable)
- `createdAt`, `updatedAt` (timestamps)

## Notes

- `@clerk/*` packages are excluded from minimum release age check in pnpm-workspace.yaml
- Clerk proxy middleware is configured in `artifacts/api-server/src/middlewares/clerkProxyMiddleware.ts`
- `requireAuth` middleware in `artifacts/api-server/src/middlewares/requireAuth.ts` protects all task routes
- The `lib/api-zod/src/index.ts` is overwritten after codegen to avoid duplicate export conflicts
