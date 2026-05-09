"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, SearchCheck, HeadphonesIcon } from "lucide-react";

// Testimonials hidden until real client reviews are collected.
// const testimonials = [
//   {
//     text: "We needed a site quickly before our peak season and Gorgees turned it around fast. It loads way quicker than our old one and we've already had a few new enquiries come through the contact form.",
//     author: "Marcus Bennett",
//     role: "Owner, MB Plumbing & Gas",
//     location: "Melbourne, VIC",
//     initial: "M",
//   },
//   {
//     text: "I'd been putting off getting a proper website for years. Gorgees made the whole process straightforward — he handled the design and Google setup and kept me in the loop the whole time. Really happy with how it turned out.",
//     author: "Priya Nair",
//     role: "Founder, Bloom Skin Studio",
//     location: "Melbourne, VIC",
//     initial: "P",
//   },
//   {
//     text: "Honest, responsive, and the work was done properly. Our Google ranking has improved and customers can actually find us now. Would recommend to any local business looking to get online.",
//     author: "Tom Richardson",
//     role: "Director, Ridgeline Landscaping",
//     location: "Sydney, NSW",
//     initial: "T",
//   },
// ];

const promises = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    body: "Most projects are delivered within 5–7 business days. No long waiting lists, no drawn-out timelines — your site goes live while the work is still fresh in your mind.",
  },
  {
    icon: SearchCheck,
    title: "Google-Ready from Day One",
    body: "Every site is built with on-page SEO, fast load times, and Google Business Profile setup included. You won't need to hire a separate SEO agency just to be found locally.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support After Launch",
    body: "Once your site is live, you're not on your own. Updates, tweaks, and questions are handled promptly — because a website that sits untouched quickly becomes a liability.",
  },
];

function PromiseCard({
  icon: Icon,
  title,
  body,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
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
      className="bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col"
    >
      <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center mb-6 shrink-0">
        <Icon size={20} className="text-blue-600" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm flex-1">{body}</p>
    </motion.div>
  );
}

export default function Testimonials() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="py-28 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-blue-600 font-semibold text-sm tracking-widest uppercase"
          >
            What You Can Expect
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 mt-3"
          >
            The G.V. Techs Standard
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 mt-4 max-w-xl mx-auto"
          >
            Every project is held to the same standard — regardless of size or
            budget.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {promises.map((p, i) => (
            <PromiseCard key={p.title} {...p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
