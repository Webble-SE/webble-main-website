import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileDock } from "@/components/MobileDock";
import { site } from "@/lib/site";
import "./globals.css";

const display = localFont({
  src: "../fonts/ArcaMajora.woff2",
  variable: "--font-arca",
  display: "swap",
});

const sans = localFont({
  src: "../fonts/Geomanist.woff2",
  variable: "--font-geomanist",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "webbyrå",
    "hemsida",
    "webbyrå Sverige",
    "Next.js",
    "e-handel",
    "SEO",
    "Webble",
    "CMS",
    "serverrendering",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "business",
  formatDetection: { telephone: true, email: true },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${display.variable} ${sans.variable} h-full antialiased`}>
      <body className="min-h-full overflow-x-hidden bg-paper text-ink">
        <a
          href="#innehall"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-red focus:px-4 focus:py-2 focus:text-white"
        >
          Hoppa till innehåll
        </a>
        <JsonLd />
        <Header />
        <main id="innehall" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileDock />
      </body>
    </html>
  );
}
