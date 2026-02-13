"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { LocaleContent } from "@/content/schema";
import {
  NAV_ORDER,
  getLocalizedPath,
  type Locale,
  type PageKey
} from "@/lib/i18n";
import { withBasePath } from "@/lib/base-path";

interface NavbarProps {
  locale: Locale;
  pageKey: PageKey;
  content: LocaleContent;
}

export function Navbar({ locale, pageKey, content }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = useMemo(
    () =>
      NAV_ORDER.map((key) => ({
        key,
        label: content.navLabels[key],
        href: getLocalizedPath(locale, key)
      })),
    [content.navLabels, locale]
  );

  const targetLocale: Locale = locale === "es" ? "en" : "es";
  const languageHref = getLocalizedPath(targetLocale, pageKey);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-100/70 bg-[#f4f7fb]/95 backdrop-blur">
      <div className="container-shell py-4">
        <div className="flex items-center gap-4">
          <Link href={getLocalizedPath(locale, "home")} className="flex min-w-0 items-center gap-3">
            <Image src={withBasePath("/brand/logo.svg")} alt="LAST Lab" width={42} height={42} className="rounded-full bg-white p-1" priority />
            <div className="min-w-0">
              <p className="truncate font-heading text-lg font-bold text-ink">LAST Lab</p>
              <p className="truncate text-xs font-medium uppercase tracking-[0.15em] text-brand-600">
                Critical AI
              </p>
            </div>
          </Link>

          <nav aria-label="Main navigation" className="ml-auto hidden xl:flex xl:items-center xl:gap-1">
            {links.map((item) => {
              const active = item.key === pageKey;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-brand-700 text-white"
                      : "text-ink hover:bg-brand-100 hover:text-brand-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href={languageHref}
            className="hidden rounded-md border border-brand-300 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700 transition hover:bg-brand-100 xl:inline-flex"
          >
            {targetLocale.toUpperCase()}
          </Link>

          <button
            type="button"
            className="ml-auto inline-flex rounded-md border border-brand-300 px-3 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-100 xl:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {content.ui.menuLabel}
          </button>
        </div>

        {menuOpen ? (
          <nav id="mobile-nav" aria-label="Mobile navigation" className="mt-4 grid gap-2 xl:hidden">
            {links.map((item) => {
              const active = item.key === pageKey;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm font-semibold ${
                    active ? "bg-brand-700 text-white" : "bg-white text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={languageHref}
              onClick={() => setMenuOpen(false)}
              className="rounded-md border border-brand-300 px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-brand-700"
            >
              {targetLocale.toUpperCase()} - {content.ui.switchTo[targetLocale]}
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
