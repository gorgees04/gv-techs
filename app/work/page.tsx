"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Bella Vita Restaurant",
    category: "Restaurant Website",
    description:
      "A modern, appetizing website for a restaurant featuring online reservations, menu display, and a gallery of dishes.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/imgs/bella-vita-restaurant.png",
    link: "https://bella-vita-restaurant-liart.vercel.app/",
  },
  {
    title: "Plumber Pro",
    category: "Service Business",
    description:
      "A professional local service website optimized for search and designed to convert visitors into booked appointments.",
    tech: ["React", "Tailwind CSS", "SEO"],
    image: "/imgs/plumber.png",
    link: "https://plumber-business.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    category: "Portfolio",
    description:
      "A clean developer portfolio showcasing projects, skills, and contact information with smooth animations.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/imgs/personal-portfolio.png",
    link: "https://www.gorgeesodisho.com/",
  },
];

function ProjectCard({
  title,
  category,
  description,
  tech,
  image,
  link,
  delay,
}: {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
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
      className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-100 hover:border-slate-300 transition-all duration-300"
    >
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300" />
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
            aria-label={`View ${title}`}
          >
            <ExternalLink size={15} className="text-slate-700" />
          </a>
        )}
      </div>

      <div className="p-7">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
          {category}
        </span>
        <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      <div className="bg-[#040D21] pt-32 pb-20 text-center">
        <div ref={heroRef} className="max-w-3xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="text-blue-400 font-semibold text-sm tracking-widest uppercase"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold text-white mt-3 mb-5"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            A selection of projects we&apos;ve built — each one crafted with
            care, clean code, and a focus on results.
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} delay={i * 0.08} />
          ))}
        </div>
      </div>

      <div className="bg-slate-50 py-20 text-center border-t border-slate-100">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Have a project in mind?
          </h2>
          <p className="text-slate-600 mb-8">
            We&apos;d love to add your business to our portfolio. Let&apos;s
            build something great together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
