"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Globe, Search, ShieldCheck, Megaphone, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    href: "/services/web-design",
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
    href: "/services/seo-management",
    title: "SEO Management",
    description:
      "A great website means nothing if no one can find it. We optimise your online presence so Melbourne customers discover your business on Google — including Google Business Profile setup and optimisation.",
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
    href: "/services/website-maintenance",
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
  {
    icon: Megaphone,
    href: "/services/digital-marketing",
    title: "Digital Marketing",
    description:
      "Google Ads and social media management to put your business in front of the right people — at the right time. More reach, more enquiries, without wasting budget.",
    features: [
      "Google Ads campaign setup & management",
      "Keyword targeting & bid optimisation",
      "Social media content & scheduling",
      "Ad copywriting & creative",
      "Regular performance reporting",
    ],
  },
];

function ServiceBlock({
  icon: Icon,
  href,
  title,
  description,
  features,
  index,
}: {
  icon: React.ElementType;
  href: string;
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
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
          >
            Get a Quote <ArrowRight size={15} />
          </Link>
          <Link
            href={href}
            className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full transition-colors text-sm"
          >
            View Details <ArrowRight size={15} />
          </Link>
        </div>
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Design and SEO Services",
  provider: {
    "@type": "LocalBusiness",
    name: "G.V. TECHS",
    url: "https://www.gv-techs.com",
  },
  areaServed: "Australia",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "G.V. TECHS Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design & Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Maintenance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
    ],
  },
};

export default function ServicesPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }}
      />
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
            Our Web Design, SEO &amp; Digital Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Custom web design, SEO management, and digital solutions for
            Melbourne small businesses and local tradies. No generic packages — just the right
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
          <p className="text-slate-500 text-sm mt-4">We respond within 24 hours.</p>
        </div>
      </div>
    </>
  );
}
