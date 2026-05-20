import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Melbourne | Google Ads & Social Media",
  description:
    "Google Ads and social media management for Melbourne small businesses and local tradies. G.V. TECHS helps you reach more customers online.",
  alternates: { canonical: "https://www.gv-techs.com/services/digital-marketing" },
  openGraph: {
    url: "https://www.gv-techs.com/services/digital-marketing",
    title: "Digital Marketing Melbourne | Google Ads & Social Media | G.V. TECHS",
    description:
      "Google Ads and social media management for Melbourne small businesses and local tradies.",
  },
};

const included = [
  "Google Ads campaign setup and management",
  "Keyword research and bid optimisation",
  "Ad copywriting and creative",
  "Social media content creation and scheduling",
  "Audience targeting across Facebook and Instagram",
  "Regular performance and spend reports",
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.gv-techs.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.gv-techs.com/services" },
    { "@type": "ListItem", position: 3, name: "Digital Marketing", item: "https://www.gv-techs.com/services/digital-marketing" },
  ],
};

export default function DigitalMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

      {/* Hero */}
      <div className="bg-[#040D21] pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">
            Our Services
          </span>
          <h1 className="text-5xl font-bold text-white mt-3 mb-5">
            Digital Marketing for Melbourne Businesses
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Google Ads and social media management to put your business in front
            of the right people — more reach, more enquiries, without wasting budget.
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
          <p className="text-slate-500 text-sm mt-4">We respond within 24 hours.</p>
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
            Our digital marketing service covers both paid search and social
            media — giving Melbourne small businesses and local tradies a
            complete online presence that drives real enquiries.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            No lock-in contracts. No confusing jargon. Just clear, consistent
            work that puts your business in front of people who are already
            looking for what you offer.
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

        {/* Google Ads */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Google Ads Management
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            Google Ads places your business at the top of search results for
            the exact terms your customers are searching — immediately, without
            waiting for organic SEO to kick in. Managed correctly, it delivers
            a strong return. Managed poorly, it burns budget fast.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We handle campaign setup, keyword targeting, ad copywriting, bid
            management, and regular reporting — so you always know what your
            budget is delivering and where it&apos;s going.
          </p>
        </section>

        {/* Social Media */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Social Media Management
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            A consistent, professional social media presence builds trust with
            potential customers before they even contact you. For local
            Melbourne businesses, it&apos;s also one of the most effective ways
            to stay front of mind with your community.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We handle content creation, scheduling, and engagement across the
            platforms that matter most for your business — so you can stay
            active online without having to do it yourself.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="bg-[#040D21] py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to reach more customers?
          </h2>
          <p className="text-slate-400 mb-8">
            Tell us about your Melbourne business and we&apos;ll put together a
            digital marketing plan that fits your goals and budget.
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
