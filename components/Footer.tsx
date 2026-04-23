import Link from "next/link";
import { Share2, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#040D21] text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="text-white">G.V.</span>
              <span className="text-blue-400"> TECHS</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Clean, fast, and modern websites designed to help your business grow.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Get in Touch</h3>
            <a
              href="mailto:info@gv-techs.com"
              className="flex items-center gap-2.5 text-sm hover:text-white transition-colors mb-4"
            >
              <Mail size={15} />
              info@gv-techs.com
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
            >
              <Share2 size={15} />
              Follow on Instagram
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p>© {new Date().getFullYear()} G.V. TECHS. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
