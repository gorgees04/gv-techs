import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Services Melbourne | Get Found on Google",
  description:
    "Get found on Google. G.V. TECHS manages on-page SEO, local SEO, keyword research, and Google Business Profile for Melbourne businesses.",
  alternates: { canonical: "https://www.gv-techs.com/services/seo-management" },
  openGraph: {
    url: "https://www.gv-techs.com/services/seo-management",
    title: "SEO Services Melbourne | Get Found on Google | G.V. TECHS",
    description:
      "On-page SEO, local SEO, and Google Business Profile management for Melbourne businesses.",
  },
};

const included = [
  "On-page SEO optimisation across all pages",
  "Keyword research targeting your local Melbourne market",
  "Google Business Profile setup and management",
  "Meta titles, descriptions, and structured data",
  "Monthly performance and ranking reports",
  "Local SEO to get found in your Melbourne service area",
];

const faqs = [
  {
    q: "How long does it take to rank on Google?",
    a: "For most Melbourne businesses, you'll see meaningful ranking improvements within 3–6 months. Local searches — like your service plus your suburb — can rank faster, especially with a strong Google Business Profile.",
  },
  {
    q: "What's the difference between SEO and Google Ads?",
    a: "Google Ads gives you instant visibility but you pay for every click. SEO builds organic rankings that drive free, compounding traffic over time. For most Melbourne small businesses, SEO delivers a better long-term return.",
  },
  {
    q: "Do I need SEO if I already have a Google Business Profile?",
    a: "Yes — your Google Business Profile and your website work together. A well-optimised website directly boosts your Business Profile rankings in Maps and local search. You need both to dominate local results in Melbourne.",
  },
  {
    q: "What if I've tried SEO before and it didn't work?",
    a: "Most failed SEO efforts come from generic, low-effort work that ignores what Google actually rewards: relevant local content, proper technical setup, and consistent citations. We focus on what actually moves the needle for Melbourne businesses.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.gv-techs.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.gv-techs.com/services" },
    { "@type": "ListItem", position: 3, name: "SEO Management", item: "https://www.gv-techs.com/services/seo-management" },
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

export default function SEOManagementPage() {
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
            SEO Services Melbourne — Get Found on Google
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Get found on Google by Melbourne customers who are already searching for
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
            Our SEO management service covers everything your Melbourne business needs to
            rank on Google and attract local customers — including Google Business Profile
            setup and optimisation. We handle on-page SEO, keyword research, local citations,
            and monthly reporting, all in one ongoing service.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            No lock-in contracts. No confusing jargon. Just clear, consistent
            work that builds your visibility over time and brings in more
            enquiries from people in Melbourne who are already looking for what you offer.
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
            Why SEO Matters for Your Melbourne Business
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            Most people searching for a local business start on Google. If your
            business doesn&apos;t appear in the results, that customer goes to
            a competitor. SEO is how you make sure your business shows up when
            it counts — without paying for every click like you do with ads.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Local SEO is especially important for Melbourne service businesses.
            Appearing in Google&apos;s local pack and Maps results puts your
            business in front of people in your area at exactly the moment
            they&apos;re ready to hire someone. We optimise your Google
            Business Profile, build local citations, and target the keywords
            your Melbourne customers are actually searching.
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
            exactly where your Melbourne business stands in search results.
          </p>
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
            Ready to get found on Google?
          </h2>
          <p className="text-slate-400 mb-8">
            Let&apos;s talk about your Melbourne business and build a local SEO strategy
            that brings in real enquiries.
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
