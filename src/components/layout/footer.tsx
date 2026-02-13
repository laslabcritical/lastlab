import Link from "next/link";
import type { LocaleContent } from "@/content/schema";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
  content: LocaleContent;
}

export function Footer({ locale, content }: FooterProps) {
  const linkedIn = content.pages.contact.socialLinks.find((social) =>
    social.label.toLowerCase().includes("linkedin")
  );

  return (
    <footer className="mt-16 border-t border-brand-100 bg-white/90">
      <div className="container-shell flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted">
          <span className="font-semibold text-ink">&copy; LAST Lab for Critical AI</span> - {content.ui.footerRights}
        </p>
        <nav aria-label="Footer links" className="flex flex-wrap items-center gap-4">
          {content.footerLinks.map((pageKey) => (
            <Link
              key={pageKey}
              href={getLocalizedPath(locale, pageKey)}
              className="text-sm font-semibold text-brand-700 transition hover:text-brand-900"
            >
              {content.navLabels[pageKey]}
            </Link>
          ))}
          {linkedIn ? (
            <Link
              href={linkedIn.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-brand-700 transition hover:text-brand-900"
            >
              LinkedIn
            </Link>
          ) : null}
        </nav>
      </div>
    </footer>
  );
}
