"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Share2, Send, CheckCircle, Phone } from "lucide-react";

export default function ContactPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-60px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        name: form.name,
        email: form.email,
        phone: form.phone || "Not provided",
        subject: form.subject || "New contact from GV TECHS website",
        message: form.message,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <>
      <div className="bg-[#040D21] pt-32 pb-20 text-center">
        <div ref={heroRef} className="max-w-3xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="text-blue-400 font-semibold text-sm tracking-widest uppercase"
          >
            Let&apos;s Talk
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold text-white mt-3 mb-5"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Have a project in mind? We&apos;d love to hear from you. Send us a
            message and we&apos;ll get back to you within 24 hours.
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -20 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-5">
                <a
                  href="mailto:info@gv-techs.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Mail size={19} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Email
                    </p>
                    <p className="text-slate-600 text-sm mt-0.5">
                      info@gv-techs.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+61477771207"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Phone size={19} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Phone</p>
                    <p className="text-slate-600 text-sm mt-0.5">+61 477 771 207</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/gvtechs?igsh=MTVkeGtmaWE2enhuOA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Share2 size={19} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Instagram
                    </p>
                    <p className="text-slate-600 text-sm mt-0.5">@gv.techs</p>
                  </div>
                </a>
              </div>

              <div className="mt-10 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Response time
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We typically respond within{" "}
                  <span className="font-semibold text-slate-800">24 hours</span>
                  . For urgent enquiries, email directly.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Message Sent!
                </h3>
                <p className="text-slate-600 max-w-sm">
                  Thanks for reaching out. We&apos;ll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Mobile Number{" "}
                    <span className="text-slate-400 font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="04XXXXXXXX or overseas number"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Service
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option>Website Design &amp; Development</option>
                    <option>Custom Coded Website</option>
                    <option>Website Maintenance</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm resize-none"
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm w-full justify-center sm:w-auto"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
