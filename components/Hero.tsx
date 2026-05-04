'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TITLES = ['Product Owner', 'AI Consultant', 'Digital Transformation', 'Builder'];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTitleIndex((i) => (i + 1) % TITLES.length), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-16 pt-40 pb-16 bg-[#0a0f1e] overflow-hidden">

      {/* Top badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute top-24 right-6 md:right-16 flex items-center gap-2 px-4 py-2 rounded-full border border-[#2dd4bf]/25 bg-[#2dd4bf]/5 text-xs text-[#2dd4bf] z-10"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
        Open to new roles · Aarhus
      </motion.div>

      {/* Main heading — editorial, oversized */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="text-[#f0ede8]/40 text-sm tracking-[0.2em] uppercase mb-6 font-medium">
            Christian Schou
          </p>

          <h1 className="font-serif font-black leading-[0.88] text-[#f0ede8] mb-8"
            style={{ fontSize: 'clamp(72px, 13vw, 200px)' }}
          >
            Bridging<br />
            <span className="text-[#2dd4bf]">Business</span><br />
            & Tech.
          </h1>

          {/* Animated role */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-12 bg-[#2dd4bf]/40" />
            <div className="h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={titleIndex}
                  initial={{ y: 32, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -32, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="font-serif italic text-xl text-[#f0ede8]/60"
                >
                  {TITLES[titleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <p className="text-[#f0ede8]/50 text-lg md:text-xl max-w-lg leading-relaxed mb-12">
            I make AI work in the real world — not just in pitch decks. 4+ years driving digital transformation at Maersk and DP World.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#2dd4bf] text-[#0a0f1e] font-bold rounded-full hover:bg-[#f0ede8] transition-all duration-300 text-sm"
            >
              See my work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#f0ede8]/15 text-[#f0ede8]/70 rounded-full hover:border-[#2dd4bf]/40 hover:text-[#2dd4bf] transition-all duration-300 text-sm"
            >
              Contact me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex items-center justify-between pt-8 border-t border-white/5 mt-8"
      >
        <div className="flex gap-8">
          {['DP World', 'A.P. Moller - Maersk', 'Høi Projekter'].map((c) => (
            <span key={c} className="text-xs text-[#f0ede8]/25 tracking-wider hidden sm:block">{c}</span>
          ))}
        </div>
        <a href="#work" className="text-xs text-[#f0ede8]/30 hover:text-[#2dd4bf] transition-colors">
          Scroll ↓
        </a>
      </motion.div>
    </section>
  );
}
