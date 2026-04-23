"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Globe, Code2, ShieldCheck, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Whether you need a landing page, a multi-page business site, or a full e-commerce store, we design and develop with performance and conversion in mind.",
    features: [
      "Responsive design for all devices",
      "SEO-optimized structure",
      "Fast load times",
      "Modern, clean aesthetics",
      "Content management integrations",
    ],
  },
  {
    icon: Code2,
    title: "Custom Coded Websites",
    description:
      "For businesses with unique requirements, we hand-code bespoke solutions using the latest technologies — no page builders, no bloat.",
    features: [
      "JavaScript & TypeScript",
      "Next.js & React",
      "Tailwind CSS",
      "Python backends",
      "API integrations",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Website Maintenance",
    description:
      "A great website needs ongoing care. We handle updates, security monitoring, backups, and performance tuning so you can focus on your business.",
    features: [
      "Regular software updates",
      "Security monitoring",
      "Performance optimization",
      "Content updates",
      "Monthly reports",
    ],
  },
];

function ServiceBlock({
  icon: Icon,
  title,
  description,
  features,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`grid lg:grid-cols-2 gap-12 items-center py-16 border-b border-slate-100 last:border-0 ${
        !isEven ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="space-y-5">
        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
          <Icon className="text-blue-600" size={26} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        <p className="text-slate-600 text-lg leading-relaxed">{description}</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
        >
          Get a Quote <ArrowRight size={15} />
        </Link>
      </div>
      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
        <h3 className="font-semibold text-slate-900 mb-5 text-sm uppercase tracking-wide">
          What&apos;s Included
        </h3>
        <ul className="space-y-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <CheckCircle size={18} className="text-blue-500 shrink-0 mt-0.5" />
              <span className="text-slate-700">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Page hero */}
      <div className="bg-[#040D21] pt-32 pb-20 text-center">
        <div ref={heroRef} className="max-w-3xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="text-blue-400 font-semibold text-sm tracking-widest uppercase"
          >
            What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold text-white mt-3 mb-5"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Tailored web solutions for businesses of every size. We build with
            purpose, performance, and your goals in mind.
          </motion.p>
        </div>
      </div>

      {/* Services list */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {services.map((service, i) => (
          <ServiceBlock key={service.title} {...service} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-slate-50 py-20 text-center border-t border-slate-100">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Not sure what you need?
          </h2>
          <p className="text-slate-600 mb-8">
            Let&apos;s chat. We&apos;ll figure out the best solution for your business together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
