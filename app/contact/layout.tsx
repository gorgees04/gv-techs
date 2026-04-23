import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Get a Free Quote | G.V. TECHS",
  description:
    "Get in touch with G.V. TECHS for a free quote on web design, SEO management, or website maintenance for your Australian business. We respond within 24 hours.",
  alternates: { canonical: "https://www.gv-techs.com/contact" },
  openGraph: {
    url: "https://www.gv-techs.com/contact",
    title: "Contact G.V. TECHS — Free Quote for Australian Businesses",
    description:
      "Ready to grow your business online? Get a free, no-obligation quote for web design or SEO management. We respond within 24 hours.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
