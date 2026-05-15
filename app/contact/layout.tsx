import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Ready to grow your business online? Contact G.V. TECHS for a free quote on web design, SEO, and digital marketing services.",
  alternates: { canonical: "https://www.gv-techs.com/contact" },
  openGraph: {
    url: "https://www.gv-techs.com/contact",
    title: "Get a Free Quote | G.V. TECHS",
    description:
      "Ready to grow your business online? Get a free, no-obligation quote for web design or SEO management. We respond within 24 hours.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
