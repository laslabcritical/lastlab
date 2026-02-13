import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocaleContent } from "@/content";
import { SiteLayout } from "@/components/layout/site-layout";
import { PageContent } from "@/components/pages/page-content";
import {
  LOCALES,
  PAGE_KEYS,
  ROUTES,
  getLocaleCode,
  getLocalizedPath,
  isLocale,
  type Locale,
  type PageKey
} from "@/lib/i18n";

export const dynamicParams = false;

type Params = {
  lang: string;
  slug: string;
};

interface LocalizedSubpageProps {
  params: Promise<Params>;
}

function resolveSubpage(locale: Locale, slug: string): PageKey | null {
  const found = PAGE_KEYS.find(
    (key) => key !== "home" && ROUTES[locale][key] === slug
  );

  return found ?? null;
}

export function generateStaticParams() {
  const params: Array<{ lang: Locale; slug: string }> = [];

  for (const locale of LOCALES) {
    for (const key of PAGE_KEYS) {
      if (key === "home") {
        continue;
      }

      params.push({ lang: locale, slug: ROUTES[locale][key] });
    }
  }

  return params;
}

export async function generateMetadata({
  params
}: LocalizedSubpageProps): Promise<Metadata> {
  const resolvedParams = await params;

  if (!isLocale(resolvedParams.lang)) {
    return {};
  }

  const locale = resolvedParams.lang;
  const pageKey = resolveSubpage(locale, resolvedParams.slug);

  if (!pageKey) {
    return {};
  }

  const content = getLocaleContent(locale);
  const page = content.pages[pageKey];
  const canonical = getLocalizedPath(locale, pageKey);

  return {
    title: page.seo.title,
    description: page.seo.description,
    alternates: {
      canonical,
      languages: {
        es: getLocalizedPath("es", pageKey),
        en: getLocalizedPath("en", pageKey)
      }
    },
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      locale: getLocaleCode(locale),
      type: "website",
      url: canonical,
      images: [
        {
          url: "/brand/og-image.svg",
          width: 1200,
          height: 630,
          alt: content.siteName
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: page.seo.title,
      description: page.seo.description,
      images: ["/brand/og-image.svg"]
    }
  };
}

export default async function LocalizedSubpage({ params }: LocalizedSubpageProps) {
  const resolvedParams = await params;

  if (!isLocale(resolvedParams.lang)) {
    notFound();
  }

  const locale: Locale = resolvedParams.lang;
  const pageKey = resolveSubpage(locale, resolvedParams.slug);

  if (!pageKey) {
    notFound();
  }

  const content = getLocaleContent(locale);

  return (
    <SiteLayout locale={locale} pageKey={pageKey} content={content}>
      <PageContent locale={locale} pageKey={pageKey} content={content} />
    </SiteLayout>
  );
}
