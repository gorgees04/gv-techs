import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web Design for Australian Businesses",
  description:
    "G.V. TECHS designs fast, modern, mobile-ready websites for Australian businesses. SEO-ready from day one. Get a free quote.",
  alternates: { canonical: "https://www.gv-techs.com/services/web-design" },
  openGraph: {
    url: "https://www.gv-techs.com/services/web-design",
    title: "Custom Web Design for Australian Businesses | G.V. TECHS",
    description:
      "Fast, modern, mobile-ready websites for Australian businesses. SEO-ready from day one.",
  },
};

const included = [
  "Responsive design for all screen sizes and devices",
  "Fast load times and Core Web Vitals optimised",
  "SEO-ready structure and metadata from day one",
  "Modern, clean aesthetics tailored to your brand",
  "Mobile-first approach with conversion-focused layouts",
  "Content management integrations where needed",
];

export default function WebDesignPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#040D21] pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">
            Our Services
          </span>
          <h1 className="text-5xl font-bold text-white mt-3 mb-5">
            Custom Web Design for Australian Businesses
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Fast, modern, mobile-ready websites built to convert visitors into
            customers — SEO-ready from day one.
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
            Every website we build is a fully custom solution — no templates,
            no page-builder shortcuts. We design and develop each site to match
            your brand, your audience, and your goals, with performance and
            conversion built in from the start.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            From a focused landing page to a full multi-page business site,
            every project includes responsive design, fast load times, and an
            SEO-ready structure so you can rank on Google from launch day.
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

        {/* Why Your Website Matters */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Why Your Website Matters
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            Your website is often the first impression a potential customer has
            of your business. A slow, outdated, or hard-to-navigate site sends
            the wrong signal — visitors leave, and leads go to competitors. A
            fast, professional website builds trust and keeps people engaged.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Google&apos;s Core Web Vitals measure real-world performance metrics
            like loading speed, visual stability, and responsiveness. We build
            every site to pass these benchmarks out of the box — because a site
            that loads in under two seconds is not just better for users, it
            ranks higher in search results too.
          </p>
        </section>

        {/* Our Design Process */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Our Design Process
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            We start every project with a conversation — understanding your
            business, your customers, and what success looks like for you. From
            there, we design a site that reflects your brand and guides visitors
            toward the action that matters most: calling, booking, or buying.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Once the design is approved, we move into development and deliver a
            fully functional, tested site. Most projects are live within 5–7
            business days. After launch, we&apos;re still here — for updates,
            tweaks, and support whenever you need it.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="bg-[#040D21] py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get a new website?
          </h2>
          <p className="text-slate-400 mb-8">
            Tell us about your business and we&apos;ll build something that
            actually works for you.
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
