import type { ReactNode } from "react";
import type { LocaleContent } from "@/content/schema";
import type { Locale, PageKey } from "@/lib/i18n";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

interface SiteLayoutProps {
  locale: Locale;
  pageKey: PageKey;
  content: LocaleContent;
  children: ReactNode;
}

export function SiteLayout({ locale, pageKey, content, children }: SiteLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(63,111,181,0.12),_transparent_55%),radial-gradient(circle_at_80%_22%,_rgba(177,138,75,0.10),_transparent_40%)]" />
      <Navbar locale={locale} pageKey={pageKey} content={content} />
      <main className="container-shell flex-1 py-8 md:py-12">{children}</main>
      <Footer locale={locale} content={content} />
    </div>
  );
}
