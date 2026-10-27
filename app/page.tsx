export default function Home() {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Buildora</h1>
      <p className="mt-3 text-lg text-zinc-600">
        Frontend base del camino dorado 1: Next.js + Tailwind. El
        backend (NestJS + Prisma + PostgreSQL + Redis) vive en el
        repo buildora-backend.
      </p>
      <dl className="mt-8 space-y-2 text-sm">
        <div className="flex gap-3">
          <dt className="w-40 shrink-0 font-semibold">API backend</dt>
          <dd className="break-all text-zinc-600">{apiUrl}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-40 shrink-0 font-semibold">Variable</dt>
          <dd className="text-zinc-600">
            NEXT_PUBLIC_API_URL (ver .env.example)
          </dd>
        </div>
      </dl>
      <p className="mt-8 text-sm text-zinc-500">
        Esta es la base, no el producto terminado: sobre ella van
        auth, páginas y la conexión real con el backend.
      </p>
    </main>
  );
}
