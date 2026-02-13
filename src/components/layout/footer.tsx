import Image from "next/image";
import Link from "next/link";
import type { LocaleContent } from "@/content/schema";
import { withBasePath } from "@/lib/base-path";
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
      <div className="container-shell flex flex-col gap-5 py-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3">
          <Image
            src={withBasePath("/brand/3.svg")}
            alt="LAST Lab"
            width={600}
            height={203}
            className="h-8 w-auto max-w-[230px]"
          />
          <p className="text-sm text-muted">
            <span className="font-semibold text-ink">&copy; LAST Lab for Critical AI</span> - {content.ui.footerRights}
          </p>
        </div>

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
