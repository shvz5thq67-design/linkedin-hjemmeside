'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      }
    } catch {
      // fail silently — form submission is non-critical
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#2dd4bf]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#2dd4bf] text-sm tracking-widest uppercase mb-3">Contact</p>
          <h2 className="font-serif text-5xl md:text-6xl font-black text-[#f0ede8] mb-4">
            Let&apos;s talk.
          </h2>

          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[#f0ede8]/50 text-sm">Currently open to new roles</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:christianschouu@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-[#f0ede8]/70 hover:border-[#2dd4bf]/40 hover:text-[#2dd4bf] transition-all duration-200 text-sm"
            >
              ✉ christianschouu@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/christian-schou-0b7361147"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-[#f0ede8]/70 hover:border-[#2dd4bf]/40 hover:text-[#2dd4bf] transition-all duration-200 text-sm"
            >
              in LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              required
              placeholder="Your name"
              className="px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/8 text-[#f0ede8] placeholder-[#f0ede8]/30 text-sm outline-none focus:border-[#2dd4bf]/40 transition-colors"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/8 text-[#f0ede8] placeholder-[#f0ede8]/30 text-sm outline-none focus:border-[#2dd4bf]/40 transition-colors"
            />
          </div>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="What's on your mind?"
            className="px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/8 text-[#f0ede8] placeholder-[#f0ede8]/30 text-sm outline-none focus:border-[#2dd4bf]/40 transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={loading || sent}
            className="w-full py-3.5 rounded-xl bg-[#2dd4bf] text-[#0a0f1e] font-semibold text-sm hover:bg-[#2dd4bf]/90 transition-all duration-200 disabled:opacity-60"
          >
            {sent ? '✓ Message sent!' : loading ? 'Sending...' : 'Send message →'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
