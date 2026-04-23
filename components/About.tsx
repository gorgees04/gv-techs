"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section className="py-28 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="relative max-w-md">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/imgs/go-profile.png"
                  alt="Gorgees Odisho — Founder of G.V. TECHS"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-blue-600 text-white rounded-2xl px-6 py-4 shadow-lg">
                <p className="text-2xl font-bold leading-none">3+</p>
                <p className="text-xs opacity-80 mt-1">Years building</p>
              </div>
            </div>
          </FadeUp>

          <div className="space-y-5">
            <FadeUp delay={0.1}>
              <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
                Why G.V. TECHS
              </span>
            </FadeUp>

            <FadeUp delay={0.15}>
              <h2 className="text-4xl lg:text-[2.6rem] font-bold text-slate-900 leading-tight">
                A Problem Solver,
                <br />
                Not Just Another Agency
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-slate-600 text-lg leading-relaxed">
                Hi, I&apos;m{" "}
                <span className="font-semibold text-slate-800">
                  Gorgees Odisho
                </span>{" "}
                — founder of G.V. TECHS. I work with Australian businesses
                one-on-one to build websites and manage SEO that actually
                deliver results.
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <p className="text-slate-600 leading-relaxed">
                Every business is different. Before I recommend anything, I take
                time to understand your goals, your industry, and your customers.
                You won&apos;t get a generic package — you&apos;ll get the right
                solution for your specific situation.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
              >
                Work with me
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
