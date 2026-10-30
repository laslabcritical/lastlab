import type { Metadata } from "next";
import "@/app/local-fonts.css";
import "@/app/globals.css";
import { getSiteUrl } from "@/lib/seo";
import { withBasePath } from "@/lib/base-path";

const siteUrl = getSiteUrl();
const siteName = "LAST Lab for Critical AI & Digital Technologies";
const siteDescription =
  "Red multinodal latinoamericana de investigación crítica, experimentación y acción sobre inteligencia artificial y tecnologías digitales.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  icons: {icon: withBasePath("/brand/favicon.svg")},
  title: {
    default: siteName,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName,
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: withBasePath("/brand/og-image.svg"),
        width: 1200,
        height: 630,
        alt: siteName
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [withBasePath("/brand/og-image.svg")]
  }
};

export default async function RootLayout({
  children, params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{lang?: string}>;
}>) {
  const {lang} = await params;
  return (
    <html lang={lang === "en" ? "en" : "es"} suppressHydrationWarning>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

