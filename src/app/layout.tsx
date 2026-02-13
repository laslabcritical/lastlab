import type { Metadata } from "next";
import { Merriweather, Source_Sans_3 } from "next/font/google";
import "@/app/globals.css";
import { getSiteUrl } from "@/lib/seo";

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

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "LAST Lab for Critical AI",
    template: "%s | LAST Lab"
  },
  description:
    "LAST Lab for Critical AI: red latinoamericana multinodal de investigación, innovación e incidencia sobre inteligencia artificial y tecnologías digitales.",
  openGraph: {
    type: "website",
    siteName: "LAST Lab for Critical AI",
    url: siteUrl,
    images: [
      {
        url: "/brand/og-image.svg",
        width: 1200,
        height: 630,
        alt: "LAST Lab for Critical AI"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/brand/og-image.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${heading.variable} ${body.variable} font-body antialiased`}>{children}</body>
    </html>
  );
}
