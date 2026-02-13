import { enContent } from "@/content/en";
import { esContent } from "@/content/es";
import type { LocaleContent } from "@/content/schema";
import type { Locale } from "@/lib/i18n";

export function getLocaleContent(locale: Locale): LocaleContent {
  return locale === "es" ? esContent : enContent;
}
