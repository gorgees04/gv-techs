import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Maintenance Melbourne | Security & Support",
  description:
    "Keep your website fast, secure, and up to date. G.V. TECHS provides ongoing maintenance, security monitoring, and support for Melbourne businesses.",
  alternates: { canonical: "https://www.gv-techs.com/services/website-maintenance" },
  openGraph: {
    url: "https://www.gv-techs.com/services/website-maintenance",
    title: "Website Maintenance Melbourne | Security & Support | G.V. TECHS",
    description:
      "Ongoing website maintenance, security monitoring, and support for Melbourne businesses.",
  },
};

const included = [
  "Regular software, plugin, and dependency updates",
  "Security monitoring and vulnerability scanning",
  "Automated backups with easy restore options",
  "Uptime monitoring and rapid issue response",
  "Performance optimisation and speed checks",
  "Monthly maintenance reports",
];

const monitored = [
  "Uptime and server response times",
  "Security vulnerabilities and malware",
  "Broken links and 404 errors",
  "Page speed and Core Web Vitals",
  "SSL certificate validity",
  "Plugin and software version status",
];

const faqs = [
  {
    q: "What happens if my website breaks or goes down?",
    a: "We monitor uptime continuously. If your site goes down, we're alerted automatically and work to restore it as quickly as possible — usually before your customers even notice.",
  },
  {
    q: "How often do you perform maintenance?",
    a: "Updates, security scans, and performance checks run on a regular schedule. You receive a monthly report summarising everything we've done and the current health status of your site.",
  },
  {
    q: "Do I need maintenance for a new website?",
    a: "Yes. Even brand-new websites need regular maintenance. Security updates are released constantly for plugins, frameworks, and hosting environments — ignoring them is how sites get hacked or broken.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.gv-techs.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.gv-techs.com/services" },
    { "@type": "ListItem", position: 3, name: "Website Maintenance", item: "https://www.gv-techs.com/services/website-maintenance" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function WebsiteMaintenancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />

      {/* Hero */}
      <div className="bg-[#040D21] pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">
            Our Services
          </span>
          <h1 className="text-5xl font-bold text-white mt-3 mb-5">
            Website Maintenance &amp; Support for Melbourne Businesses
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Keep your website fast, secure, and working properly — without
            having to think about it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium px-8 py-3.5 rounded-full transition-colors"
            >
              <ArrowLeft size={16} /> All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-20">

        {/* What's Included */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What&apos;s Included
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            A website that&apos;s left untouched quickly becomes a liability —
            outdated plugins create security holes, slow load times frustrate
            visitors, and broken pages cost you enquiries. Our maintenance
            service keeps everything running smoothly in the background.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            We handle all the technical upkeep so you can focus entirely on
            running your Melbourne business. Updates, backups, security monitoring, and
            performance checks are all taken care of on a regular schedule.
          </p>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <ul className="grid sm:grid-cols-2 gap-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why Maintenance Matters */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Why Maintenance Matters
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            Websites aren&apos;t set-and-forget. Software gets outdated,
            security vulnerabilities emerge, and performance can degrade over
            time without regular attention. A single hacked or broken website
            can cost more to fix than months of maintenance would have cost to
            prevent.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Regular maintenance also keeps your site performing at its best —
            fast load times, clean code, and no broken links all contribute to
            a better experience for your visitors and better rankings on Google.
            Peace of mind is worth it.
          </p>
        </section>

        {/* What We Monitor */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What We Monitor
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Our ongoing monitoring keeps an eye on the things that matter most
            to your site&apos;s health, security, and performance. If something
            needs attention, we handle it before it becomes a problem for you
            or your visitors.
          </p>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <ul className="grid sm:grid-cols-2 gap-4">
              {monitored.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-slate-100 pb-6">
                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="bg-[#040D21] py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let us handle the technical side
          </h2>
          <p className="text-slate-400 mb-8">
            Focus on running your business — we&apos;ll keep your website fast,
            secure, and working properly.
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
