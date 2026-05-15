import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Services for Australian Businesses",
  description:
    "Google Ads, social media management, and digital strategy for Australian businesses. Coming soon from G.V. TECHS.",
  alternates: { canonical: "https://www.gv-techs.com/services/digital-marketing" },
  openGraph: {
    url: "https://www.gv-techs.com/services/digital-marketing",
    title: "Digital Marketing Services for Australian Businesses | G.V. TECHS",
    description:
      "Google Ads and social media management for Australian businesses. Coming soon from G.V. TECHS.",
  },
};

export default function DigitalMarketingPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#040D21] pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest bg-white/10 text-slate-300 px-3 py-1 rounded-full mb-4">
            <Clock size={11} />
            Coming Soon
          </div>
          <h1 className="text-5xl font-bold text-white mt-3 mb-5">
            Digital Marketing for Australian Businesses
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Google Ads and social media management to amplify your reach and
            bring in more customers — launching soon.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              Stay Updated <ArrowRight size={16} />
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

        {/* What's Coming */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What&apos;s Coming
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            We&apos;re currently developing our digital marketing offering to
            complement our web design and SEO services. The goal is simple:
            give Australian businesses a single point of contact for everything
            they need to grow online — from their website to their ad campaigns.
          </p>
          <p className="text-slate-600 leading-relaxed">
            If you&apos;re interested in being one of the first to access our
            digital marketing services, register your interest via the contact
            form below and we&apos;ll get in touch as soon as it launches.
          </p>
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
            Our upcoming Google Ads service will cover campaign setup, keyword
            targeting, ad copywriting, bid management, and regular reporting —
            so you always know what your budget is delivering and where it&apos;s
            going.
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
            businesses, it&apos;s also one of the most effective ways to stay
            front of mind with your community.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Our social media management service will handle content creation,
            scheduling, and engagement across the platforms that matter most for
            your business — so you can stay active online without having to do
            it yourself.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="bg-[#040D21] py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Register your interest
          </h2>
          <p className="text-slate-400 mb-8">
            Be the first to know when our digital marketing services launch.
            Get in touch and we&apos;ll add you to our early access list.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            Stay Updated <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
