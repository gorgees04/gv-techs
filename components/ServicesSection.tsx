"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Globe, Search, ShieldCheck, Megaphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Custom-built websites for Australian businesses — fast, modern, and designed to turn visitors into customers.",
    comingSoon: false,
  },
  {
    icon: Search,
    title: "SEO Management",
    description:
      "Get found on Google. We handle on-page SEO and Google Business Profile so local customers can discover your business.",
    comingSoon: false,
  },
  {
    icon: ShieldCheck,
    title: "Website Maintenance",
    description:
      "We keep your site fast, secure, and up to date — so you can focus on running your business, not managing your website.",
    comingSoon: false,
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Google Ads and social media management to amplify your reach and bring in more customers — coming soon.",
    comingSoon: true,
  },
];

function ServiceCard({
  icon: Icon,
  title,
  description,
  delay,
  comingSoon,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
  comingSoon: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`group relative bg-white border rounded-2xl p-8 flex flex-col transition-all duration-300 ${
        comingSoon
          ? "border-slate-100 opacity-70"
          : "border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50"
      }`}
    >
      {comingSoon && (
        <span className="absolute top-5 right-5 text-[10px] font-semibold uppercase tracking-widest bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full">
          Coming Soon
        </span>
      )}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
          comingSoon
            ? "bg-slate-50"
            : "bg-blue-50 group-hover:bg-blue-600"
        }`}
      >
        <Icon
          className={`transition-colors duration-300 ${
            comingSoon
              ? "text-slate-400"
              : "text-blue-600 group-hover:text-white"
          }`}
          size={22}
        />
      </div>
      <h3 className={`text-xl font-bold mb-3 ${comingSoon ? "text-slate-500" : "text-slate-900"}`}>
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed flex-1">{description}</p>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="py-28 bg-slate-50" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-blue-600 font-semibold text-sm tracking-widest uppercase"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 mt-3 mb-4"
          >
            Everything Your Business Needs Online
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-lg max-w-xl mx-auto"
          >
            From your first website to ranking on Google — we handle it all, so you can focus on your business.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} delay={i * 0.1} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
          >
            View all services
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
