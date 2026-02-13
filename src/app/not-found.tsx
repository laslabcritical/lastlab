import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-shell flex min-h-screen items-center justify-center py-24">
      <div className="max-w-lg rounded-2xl border border-brand-100 bg-white p-8 text-center shadow-panel">
        <h1 className="font-heading text-3xl font-bold text-ink">404</h1>
        <p className="mt-3 text-muted">La pagina solicitada no existe.</p>
        <Link
          href="/es"
          className="mt-6 inline-flex rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          Volver a Inicio
        </Link>
      </div>
    </main>
  );
}
