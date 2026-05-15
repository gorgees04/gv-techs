import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design, SEO & Digital Services",
  description:
    "From custom web design to SEO management and website maintenance — G.V. TECHS delivers everything your business needs online.",
  alternates: { canonical: "https://www.gv-techs.com/services" },
  openGraph: {
    url: "https://www.gv-techs.com/services",
    title: "Web Design, SEO & Digital Services | G.V. TECHS",
    description:
      "Custom website design, SEO management & website maintenance for Australian businesses. One-on-one attention, custom solutions.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
