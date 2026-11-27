import type { Metadata, Viewport } from "next";
import { Inter, Montserrat, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealController } from "@/components/Reveal";
import { site, ui } from "@/content/shared";
import { siteUrl } from "@/lib/metadata";
import "./globals.css";

/** Every page must be fully static: no request-time rendering anywhere in the site. */
export const ensureStatic = "navigation";

// Self-hosted by next/font at build time. Cormorant (scripture) is loaded on /about only.
// Source Serif 4 carries the large editorial headlines.
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: "600",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-source-serif",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: site.name,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "only light",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  parentOrganization: {
    "@type": "Organization",
    name: site.parentName,
    url: site.parentUrl,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG" className={`${montserrat.variable} ${inter.variable} ${sourceSerif.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a href="#main" className="skip-link btn btn-primary">
          {ui.skipLink}
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <RevealController />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
