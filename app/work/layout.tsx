import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Portfolio",
  description:
    "See our web design and development portfolio. Custom websites built for restaurants, trades, and local businesses across Australia.",
  alternates: { canonical: "https://www.gv-techs.com/work" },
  openGraph: {
    url: "https://www.gv-techs.com/work",
    title: "Web Design Portfolio | G.V. TECHS",
    description:
      "Custom websites built for restaurants, trades, and local businesses across Australia. View our portfolio.",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
