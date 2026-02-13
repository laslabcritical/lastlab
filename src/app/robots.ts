import type { MetadataRoute } from "next";
import { withBasePath } from "@/lib/base-path";
import { getSiteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: new URL(withBasePath("/sitemap.xml"), siteUrl).toString(),
    host: siteUrl.origin
  };
}
