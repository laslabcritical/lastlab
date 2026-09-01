import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/site-layout";
import { KhipuxQuitoPage } from "@/components/pages/khipux-quito-page";
import { esContent } from "@/content/es";
import { khipuxQuito2026 } from "@/content/khipux-quito-2026";
import { withBasePath } from "@/lib/base-path";

const canonical = withBasePath("/es/khipux-quito");
const previewImage = withBasePath("/khipux/og-image.svg");

export const metadata: Metadata = {
  title: {
    absolute: khipuxQuito2026.seo.title
  },
  description: khipuxQuito2026.seo.description,
  alternates: {
    canonical
  },
  openGraph: {
    title: khipuxQuito2026.seo.title,
    description: khipuxQuito2026.seo.description,
    locale: "es_LA",
    type: "website",
    url: canonical,
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: "KHIPUx Quito 2026"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: khipuxQuito2026.seo.title,
    description: khipuxQuito2026.seo.description,
    images: [previewImage]
  }
};

export default function KhipuxQuitoAliasPage() {
  return (
    <SiteLayout locale="es" pageKey="khipuxQuito" content={esContent}>
      <KhipuxQuitoPage locale="es" page={khipuxQuito2026} />
    </SiteLayout>
  );
}
