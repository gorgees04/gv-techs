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
    "web design Australia",
    "website design small business Australia",
    "SEO management Australia",
    "local business website Australia",
    "web design and SEO Australia",
    "affordable website design Australia",
    "SEO services small business Australia",
    "Google Business Profile management Australia",
    "custom website Australia",
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
        url: "/icons/gv-techs-logo-black.png",
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
    images: ["/icons/gv-techs-logo-black.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "G.V. TECHS",
  description:
    "Web design, SEO management, and digital solutions for Australian businesses.",
  url: siteUrl,
  telephone: "+61477771207",
  email: "info@gv-techs.com",
  founder: { "@type": "Person", name: "Gorgees Odisho" },
  address: { "@type": "PostalAddress", addressCountry: "AU" },
  areaServed: "Australia",
  sameAs: ["https://www.instagram.com/gvtechs"],
  serviceType: [
    "Web Design",
    "Web Development",
    "SEO Management",
    "Google Business Profile Management",
    "Website Maintenance",
  ],
  priceRange: "Custom Quote",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
