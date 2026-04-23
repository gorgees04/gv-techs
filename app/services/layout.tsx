import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Web Design & SEO for Australian Businesses",
  description:
    "G.V. TECHS offers custom website design, SEO management, and website maintenance for Australian businesses. No generic packages — just the right solution for you. Get a free quote.",
  alternates: { canonical: "https://www.gv-techs.com/services" },
  openGraph: {
    url: "https://www.gv-techs.com/services",
    title: "Services — Web Design & SEO | G.V. TECHS",
    description:
      "Custom website design, SEO management & website maintenance for Australian businesses. One-on-one attention, custom solutions.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
