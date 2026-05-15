import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Management Services for Australian Businesses",
  description:
    "Get found on Google. G.V. TECHS manages on-page SEO, keyword research, and Google Business Profile for Australian businesses.",
  alternates: { canonical: "https://www.gv-techs.com/services/seo-management" },
  openGraph: {
    url: "https://www.gv-techs.com/services/seo-management",
    title: "SEO Management Services for Australian Businesses | G.V. TECHS",
    description:
      "On-page SEO, keyword research, and Google Business Profile management for Australian businesses.",
  },
};

const included = [
  "On-page SEO optimisation across all pages",
  "Keyword research targeting your local market",
  "Google Business Profile setup and management",
  "Meta titles, descriptions, and structured data",
  "Monthly performance and ranking reports",
  "Local SEO to get found in your service area",
];

export default function SEOManagementPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#040D21] pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">
            Our Services
          </span>
          <h1 className="text-5xl font-bold text-white mt-3 mb-5">
            SEO Management Services for Australian Businesses
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Get found on Google by the customers who are already searching for
            what you offer — without spending a cent on ads.
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
            Our SEO management service covers everything your business needs to
            rank on Google and attract local customers. We handle on-page
            optimisation, keyword research, Google Business Profile management,
            and monthly reporting — all in one ongoing service.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            No lock-in contracts. No confusing jargon. Just clear, consistent
            work that builds your visibility over time and brings in more
            enquiries from people who are already looking for what you offer.
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

        {/* Why SEO Matters */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Why SEO Matters for Your Business
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            Most people searching for a local business start on Google. If your
            business doesn&apos;t appear in the results, that customer goes to
            a competitor. SEO is how you make sure your business shows up when
            it counts — without paying for every click like you do with ads.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Local SEO is especially important for Australian service businesses.
            Appearing in Google&apos;s local pack and Maps results puts your
            business in front of people in your area at exactly the moment
            they&apos;re ready to hire someone. We optimise your Google
            Business Profile, build local citations, and target the keywords
            your customers are actually searching.
          </p>
        </section>

        {/* Our SEO Process */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Our SEO Process
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            We start with a full audit of your current online presence —
            identifying gaps in your on-page SEO, missing keywords, and
            opportunities in your Google Business Profile. From there, we
            build a clear plan and get to work.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Every month you receive a straightforward report showing how your
            rankings and visibility are improving. We explain what we did,
            what&apos;s working, and what&apos;s next — so you always know
            exactly where your business stands.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="bg-[#040D21] py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get found on Google?
          </h2>
          <p className="text-slate-400 mb-8">
            Let&apos;s talk about your business and build a local SEO strategy
            that brings in real enquiries.
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
