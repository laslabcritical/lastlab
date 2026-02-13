import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocaleContent } from "@/content";
import { SiteLayout } from "@/components/layout/site-layout";
import { PageContent } from "@/components/pages/page-content";
import {
  LOCALES,
  getLocaleCode,
  getLocalizedPath,
  isLocale,
  type Locale
} from "@/lib/i18n";
import { withBasePath } from "@/lib/base-path";

export const dynamicParams = false;

type Params = {
  lang: string;
};

interface LocalizedHomePageProps {
  params: Promise<Params>;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params
}: LocalizedHomePageProps): Promise<Metadata> {
  const resolvedParams = await params;

  if (!isLocale(resolvedParams.lang)) {
    return {};
  }

  const locale = resolvedParams.lang;
  const content = getLocaleContent(locale);
  const page = content.pages.home;
  const canonical = withBasePath(getLocalizedPath(locale, "home"));

  return {
    title: page.seo.title,
    description: page.seo.description,
    alternates: {
      canonical,
      languages: {
        es: withBasePath(getLocalizedPath("es", "home")),
        en: withBasePath(getLocalizedPath("en", "home"))
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
          url: withBasePath("/brand/og-image.svg"),
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
      images: [withBasePath("/brand/og-image.svg")]
    }
  };
}

export default async function LocalizedHomePage({ params }: LocalizedHomePageProps) {
  const resolvedParams = await params;

  if (!isLocale(resolvedParams.lang)) {
    notFound();
  }

  const locale: Locale = resolvedParams.lang;
  const content = getLocaleContent(locale);

  return (
    <SiteLayout locale={locale} pageKey="home" content={content}>
      <PageContent locale={locale} pageKey="home" content={content} />
    </SiteLayout>
  );
}
