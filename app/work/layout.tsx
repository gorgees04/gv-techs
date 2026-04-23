import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Web Design Portfolio | G.V. TECHS",
  description:
    "See the websites G.V. TECHS has built for Australian businesses. Custom web design, fast performance, and results-driven development. View our portfolio.",
  alternates: { canonical: "https://www.gv-techs.com/work" },
  openGraph: {
    url: "https://www.gv-techs.com/work",
    title: "Our Work — Web Design Portfolio | G.V. TECHS",
    description:
      "Custom websites built for Australian businesses. View our portfolio of web design and development projects.",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
