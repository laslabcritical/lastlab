import type { Metadata } from "next";
import { Merriweather, Montserrat, Source_Sans_3 } from "next/font/google";
import "@/app/globals.css";
import { getSiteUrl } from "@/lib/seo";
import { withBasePath } from "@/lib/base-path";

const heading = Merriweather({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700", "900"]
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

const khipu = Montserrat({
  subsets: ["latin"],
  variable: "--font-khipu",
  weight: ["400", "500", "600", "700", "800"]
});

const siteUrl = getSiteUrl();
const siteName = "LAST Lab for Critical AI & Digital Technologies";
const siteDescription =
  "Red multinodal latinoamericana de investigación crítica, experimentación y acción sobre inteligencia artificial y tecnologías digitales.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${heading.variable} ${body.variable} ${khipu.variable} font-body antialiased`}>{children}</body>
    </html>
  );
}
