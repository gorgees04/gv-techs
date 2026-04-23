"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Globe, Search, ShieldCheck, Megaphone, CheckCircle, ArrowRight, Clock } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Whether you need a landing page, a multi-page business site, or a fully custom-coded solution — we build with performance, speed, and conversion in mind. Every website is tailored to your business, your customers, and your goals.",
    features: [
      "Responsive design for all devices",
      "Fast load times & Core Web Vitals optimised",
      "Modern, clean aesthetics",
      "SEO-ready structure from day one",
      "Content management integrations",
    ],
  },
  {
    icon: Search,
    title: "SEO Management",
    description:
      "A great website means nothing if no one can find it. We optimise your online presence so Australian customers discover your business on Google — driving more traffic and more enquiries.",
    features: [
      "On-page SEO optimisation",
      "Google Business Profile setup & management",
      "Keyword research & targeting",
      "Meta titles, descriptions & structured data",
      "Monthly performance reports",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Website Maintenance",
    description:
      "Your website needs ongoing care to stay fast, secure, and effective. We handle the technical side — updates, security monitoring, and performance tuning — so you can focus entirely on running your business.",
    features: [
      "Regular software & plugin updates",
      "Security monitoring & backups",
      "Performance optimisation",
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
            Custom web design, SEO management, and digital solutions for
            Australian businesses. No generic packages — just the right
            solution for your business.
          </motion.p>
        </div>
      </div>

      {/* Services list */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {services.map((service, i) => (
          <ServiceBlock key={service.title} {...service} index={i} />
        ))}
      </div>

      {/* Coming Soon — Digital Marketing */}
      <div className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-100">
        <div className="bg-slate-50 rounded-2xl p-10 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0">
            <Megaphone className="text-slate-400" size={28} />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest bg-slate-200 text-slate-500 px-3 py-1 rounded-full mb-3">
              <Clock size={11} />
              Coming Soon
            </div>
            <h2 className="text-2xl font-bold text-slate-700 mb-2">
              Digital Marketing
            </h2>
            <p className="text-slate-500 max-w-xl">
              We&apos;re expanding into Google Ads and social media management
              — so your business can dominate search results and social feeds.
              Get in touch to be the first to know when it launches.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-slate-300 hover:border-blue-400 hover:text-blue-600 text-slate-600 font-semibold px-7 py-3 rounded-full transition-colors text-sm shrink-0"
          >
            Stay Updated <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#040D21] py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not sure what you need?
          </h2>
          <p className="text-slate-400 mb-8">
            Tell us about your business. We&apos;ll work out the right solution
            together — no pressure, no generic pitch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
