"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const webDesignTiers = [
  {
    name: "Basic",
    originalPrice: "$799",
    price: "$499",
    period: "one-off",
    features: [
      "3 pages",
      "Mobile responsive",
      "Contact form",
      "Basic SEO setup",
    ],
    popular: false,
  },
  {
    name: "Standard",
    originalPrice: "$1,499",
    price: "$999",
    period: "one-off",
    features: [
      "Custom design",
      "5–7 pages",
      "SEO included",
      "5–7 day delivery",
    ],
    popular: true,
  },
  {
    name: "Premium",
    originalPrice: "$2,999",
    price: "$1,800",
    period: "one-off",
    features: [
      "Full custom build",
      "Unlimited pages",
      "SEO + Google Business Profile setup",
      "Priority support",
    ],
    popular: false,
  },
];

const recurringServices = [
  {
    name: "SEO Management",
    originalPrice: "$599",
    price: "$399",
    period: "/month",
    description: "On-page SEO, Google Business Profile management, keyword targeting, and monthly reports.",
    href: "/services/seo-management",
  },
  {
    name: "Website Maintenance",
    originalPrice: "$250",
    price: "$149",
    period: "/month",
    description: "Security monitoring, software updates, backups, performance checks, and monthly reports.",
    href: "/services/website-maintenance",
  },
];

function WebDesignCard({
  name,
  originalPrice,
  price,
  period,
  features,
  popular,
  delay,
}: {
  name: string;
  originalPrice: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`relative rounded-2xl p-8 flex flex-col border ${
        popular
          ? "bg-blue-600 border-blue-600 text-white"
          : "bg-white border-slate-200"
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className={`text-lg font-bold mb-3 ${popular ? "text-white" : "text-slate-900"}`}>
        {name}
      </h3>
      <div className="flex items-baseline gap-2 mb-1">
        <span className={`text-sm line-through ${popular ? "text-blue-300" : "text-slate-400"}`}>
          {originalPrice}
        </span>
        <span className={`text-4xl font-extrabold ${popular ? "text-white" : "text-slate-900"}`}>
          {price}
        </span>
        <span className={`text-sm ${popular ? "text-blue-200" : "text-slate-500"}`}>
          {period}
        </span>
      </div>
      <p className={`text-xs mb-6 ${popular ? "text-blue-200" : "text-slate-400"}`}>
        Launch offer
      </p>
      <ul className="space-y-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <CheckCircle
              size={16}
              className={`shrink-0 mt-0.5 ${popular ? "text-blue-200" : "text-blue-500"}`}
            />
            <span className={`text-sm ${popular ? "text-blue-100" : "text-slate-600"}`}>{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Pricing() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const recurringRef = useRef(null);
  const recurringInView = useInView(recurringRef, { once: true, margin: "-60px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <section className="py-28 bg-slate-50" id="pricing">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-blue-600 font-semibold text-sm tracking-widest uppercase"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 mt-3 mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-lg max-w-xl mx-auto"
          >
            No hidden fees. No lock-in contracts. Pick the tier that fits your business.
          </motion.p>
        </div>

        {/* Web Design tiers */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6 text-center">
            Website Design &amp; Development
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {webDesignTiers.map((tier, i) => (
              <WebDesignCard key={tier.name} {...tier} delay={i * 0.1} />
            ))}
          </div>
        </div>

        {/* Recurring services */}
        <div ref={recurringRef} className="mt-16">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6 text-center">
            Ongoing Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {recurringServices.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 28 }}
                animate={recurringInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col"
              >
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
                  <div className="text-right">
                    <div className="flex items-baseline gap-2 justify-end">
                      <span className="text-sm text-slate-400 line-through">{service.originalPrice}</span>
                      <span className="text-3xl font-extrabold text-slate-900">{service.price}</span>
                      <span className="text-sm text-slate-500">{service.period}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Launch offer</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mt-4">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Single CTA */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-full transition-colors text-base"
          >
            Get a Free Quote <ArrowRight size={17} />
          </Link>
          <p className="text-slate-400 text-xs mt-4">
            Limited time launch offer — only available for a short period.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
