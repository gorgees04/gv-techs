import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Design Melbourne | Custom Websites for Small Business",
  description:
    "G.V. TECHS designs fast, modern, mobile-ready websites for Melbourne businesses. SEO-ready from day one. Get a free quote.",
  alternates: { canonical: "https://www.gv-techs.com/services/web-design" },
  openGraph: {
    url: "https://www.gv-techs.com/services/web-design",
    title: "Web Design Melbourne | Custom Websites for Small Business | G.V. TECHS",
    description:
      "Fast, modern, mobile-ready websites for Melbourne small businesses. SEO-ready from day one.",
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

const faqs = [
  {
    q: "How much does a website cost for a small business in Melbourne?",
    a: "Every project is different, and we quote based on your specific needs — no generic packages. We focus on delivering real value at an honest price. Get in touch for a free quote and we'll give you a clear number upfront.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most websites are live within 5–7 business days once we have everything we need from you. We'll always give you a clear timeline before we start.",
  },
  {
    q: "Will my website look good on mobile phones?",
    a: "Yes — every website we build is designed mobile-first. It will look and work great on all screen sizes, from phones to large desktop monitors.",
  },
  {
    q: "Does my new website come with SEO built in?",
    a: "Yes. Every website includes a proper SEO foundation: fast load times, clean structure, meta titles, descriptions, and schema markup. You'll be ready to rank on Google from day one.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.gv-techs.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.gv-techs.com/services" },
    { "@type": "ListItem", position: 3, name: "Web Design", item: "https://www.gv-techs.com/services/web-design" },
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

export default function WebDesignPage() {
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
            Web Design Melbourne — Custom Websites for Small Business
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
            Ready to get a new website?
          </h2>
          <p className="text-slate-400 mb-8">
            Tell us about your Melbourne business and we&apos;ll build something that
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
