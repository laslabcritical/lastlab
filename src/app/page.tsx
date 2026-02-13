"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/es");
  }, [router]);

  return (
    <main className="container-shell flex min-h-screen items-center justify-center py-24">
      <div className="max-w-lg rounded-2xl border border-brand-100 bg-white p-8 text-center shadow-panel">
        <h1 className="font-heading text-2xl font-bold text-ink">Redirigiendo...</h1>
        <p className="mt-3 text-muted">Si no se redirige automaticamente, usa el enlace de abajo.</p>
        <Link
          href="/es"
          className="mt-6 inline-flex rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          Ir a Espanol
        </Link>
      </div>
    </main>
  );
}
