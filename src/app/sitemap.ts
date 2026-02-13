import type { MetadataRoute } from "next";
import { getAllLocalizedPaths } from "@/lib/i18n";
import { withBasePath } from "@/lib/base-path";
import { getSiteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const localized = getAllLocalizedPaths().map((path) => ({
    url: new URL(withBasePath(path), siteUrl).toString(),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path.endsWith("/es") || path.endsWith("/en") ? 1 : 0.8
  }));

  return [
    {
      url: new URL(withBasePath("/"), siteUrl).toString(),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1
    },
    ...localized
  ];
}
