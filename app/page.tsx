import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Web Design & SEO Services Melbourne",
  description:
    "G.V. TECHS builds fast, modern websites for Melbourne businesses and manages SEO to get you found on Google. Custom web design, local SEO & Google Business Profile management. Get a free quote.",
  alternates: { canonical: "https://www.gv-techs.com" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <About />
      <Testimonials />
      <CTA />
    </>
  );
}
