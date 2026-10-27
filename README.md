# buildora-frontend

Frontend base del **camino dorado 1** de Buildora: Next.js (App
Router) + React + Tailwind CSS.

El backend (NestJS + Prisma + PostgreSQL + Redis) vive en el repo
[buildora-backend](https://github.com/yclicourt/buildora-backend).

## Desarrollo local

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

La app corre en http://localhost:3000. La variable
`NEXT_PUBLIC_API_URL` apunta al backend (por defecto,
http://localhost:3001 en desarrollo).

## Scripts

- `pnpm dev` — servidor de desarrollo
- `pnpm build` — build de producción
- `pnpm start` — sirve el build
- `pnpm typecheck` — `tsc --noEmit`

## Flujo de trabajo

Trabajamos por ramas cortas de feature (`feat/<tarea>`), con pull
request, revisión y merge a `main` solo con los checks en verde
(typecheck + build en CI).
