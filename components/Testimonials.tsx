"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Clean, fast and professional — the custom website met our exact specifications. Couldn't be happier with the result.",
    author: "John Doe",
    role: "Business Owner",
    initial: "J",
  },
  {
    text: "Very professional and easy to work with. Gorgees delivered a custom website that truly represents our brand and vision.",
    author: "Sarah T.",
    role: "Entrepreneur",
    initial: "S",
  },
  {
    text: "Handled everything — design, setup, and SEO. Our online presence has improved massively since launch.",
    author: "Lisa K.",
    role: "Small Business Owner",
    initial: "L",
  },
];

function TestimonialCard({
  text,
  author,
  role,
  initial,
  delay,
}: {
  text: string;
  author: string;
  role: string;
  initial: string;
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
      <div className="flex gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-slate-700 leading-relaxed flex-1 mb-6">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
          <span className="text-blue-600 font-bold text-sm">{initial}</span>
        </div>
        <div>
          <p className="font-semibold text-slate-900 text-sm">{author}</p>
          <p className="text-slate-500 text-xs mt-0.5">{role}</p>
        </div>
      </div>
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
            Client Feedback
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 mt-3"
          >
            What Clients Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.author} {...t} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
