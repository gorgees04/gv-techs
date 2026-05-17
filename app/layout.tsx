import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.gv-techs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "G.V. TECHS — Web Design & SEO for Australian Businesses",
    template: "%s | G.V. TECHS",
  },
  description:
    "G.V. TECHS builds fast, modern websites and manages SEO for Australian businesses. Custom web design, on-page SEO & Google Business Profile management. Get a free quote today.",
  keywords: [
    "web design Melbourne",
    "web designer Melbourne",
    "website design small business Melbourne",
    "affordable web design Melbourne",
    "SEO Melbourne",
    "SEO services Melbourne",
    "local SEO Melbourne",
    "web design and SEO Melbourne",
    "Google Business Profile management Melbourne",
    "custom website Melbourne",
    "web design Australia",
    "SEO management Australia",
    "GV Techs",
  ],
  authors: [{ name: "Gorgees Odisho", url: siteUrl }],
  creator: "G.V. TECHS",
  publisher: "G.V. TECHS",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "o7uDmAV_fVFclOyXtGyHilRxPtwUZ5BYCAk5thIdCtk",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "G.V. TECHS",
    title: "G.V. TECHS — Web Design & SEO for Australian Businesses",
    description:
      "Fast, modern websites and SEO management for Australian businesses. One-on-one attention, custom solutions, real results.",
    images: [
      {
        url: "/logo/gv-techs-logo-white-black-bg.png",
        width: 1200,
        height: 630,
        alt: "G.V. TECHS — Web Design & SEO Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "G.V. TECHS — Web Design & SEO for Australian Businesses",
    description:
      "Fast, modern websites and SEO management for Australian businesses. Custom solutions, real results.",
    images: ["/logo/gv-techs-logo-white-black-bg.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "G.V. TECHS",
  url: siteUrl,
  logo: `${siteUrl}/logo/gv-techs-logo-white-tb.svg`,
  telephone: "+61477771207",
  email: "info@gv-techs.com",
  description:
    "G.V. TECHS builds fast, modern websites for Melbourne businesses and manages SEO to get them found on Google.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: [
    { "@type": "City", name: "Melbourne" },
    { "@type": "State", name: "Victoria" },
    { "@type": "Country", name: "Australia" },
  ],
  priceRange: "$$",
  hasMap: "https://www.google.com/maps/place/G.V.+TECHS/@-32.205415,136.1073692,4z/data=!4m15!1m8!3m7!1s0x4dd43052bb9be955:0xaf2a1dde7d43cbfc!2sG.V.+TECHS!8m2!3d-32.205415!4d136.1073692!10e5!16s%2Fg%2F11zbffdj4b!3m5!1s0x4dd43052bb9be955:0xaf2a1dde7d43cbfc!8m2!3d-32.205415!4d136.1073692!16s%2Fg%2F11zbffdj4b",
  sameAs: [
    "https://www.instagram.com/gvtechs",
    "https://www.google.com/maps/place/G.V.+TECHS/@-32.205415,136.1073692,4z/data=!4m15!1m8!3m7!1s0x4dd43052bb9be955:0xaf2a1dde7d43cbfc!2sG.V.+TECHS!8m2!3d-32.205415!4d136.1073692!10e5!16s%2Fg%2F11zbffdj4b!3m5!1s0x4dd43052bb9be955:0xaf2a1dde7d43cbfc!8m2!3d-32.205415!4d136.1073692!16s%2Fg%2F11zbffdj4b",
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "G.V. TECHS",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c") }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
