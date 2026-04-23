import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

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
