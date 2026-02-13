export const LOCALES = ["es", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const PAGE_KEYS = [
  "home",
  "about",
  "network",
  "research",
  "publications",
  "training",
  "governance",
  "cooperation",
  "contact"
] as const;

export type PageKey = (typeof PAGE_KEYS)[number];

export const ROUTES: Record<Locale, Record<PageKey, string>> = {
  es: {
    home: "",
    about: "sobre",
    network: "red",
    research: "investigacion",
    publications: "publicaciones",
    training: "formacion",
    governance: "gobernanza",
    cooperation: "cooperacion",
    contact: "contacto"
  },
  en: {
    home: "",
    about: "about",
    network: "network",
    research: "research",
    publications: "publications",
    training: "training",
    governance: "governance",
    cooperation: "cooperation",
    contact: "contact"
  }
};

export const NAV_ORDER: PageKey[] = [
  "home",
  "about",
  "network",
  "research",
  "publications",
  "training",
  "governance",
  "cooperation",
  "contact"
];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function resolvePageKey(
  locale: Locale,
  slug?: string[]
): PageKey | null {
  if (!slug || slug.length === 0) {
    return "home";
  }

  if (slug.length !== 1) {
    return null;
  }

  const segment = slug[0];
  const found = PAGE_KEYS.find((key) => ROUTES[locale][key] === segment);

  return found ?? null;
}

export function getLocalizedPath(locale: Locale, pageKey: PageKey): string {
  const segment = ROUTES[locale][pageKey];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function getAllLocalizedPaths(): string[] {
  return LOCALES.flatMap((locale) =>
    PAGE_KEYS.map((pageKey) => getLocalizedPath(locale, pageKey))
  );
}

export function getLocaleCode(locale: Locale): string {
  return locale === "es" ? "es_LA" : "en_US";
}
