'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-[#0a0f1e]/80 border-b border-white/5' : ''
      }`}
    >
      <a href="#" className="font-serif text-lg text-[#f0ede8] tracking-tight">CS</a>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm text-[#f0ede8]/70 hover:text-[#2dd4bf] transition-colors duration-200"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="/christian-schou-cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center gap-2 text-sm px-4 py-2 border border-[#2dd4bf]/40 text-[#2dd4bf] rounded-full hover:bg-[#2dd4bf]/10 transition-all duration-200"
      >
        Download CV ↓
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-[#f0ede8] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-[#f0ede8] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-[#f0ede8] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0a0f1e]/95 backdrop-blur-md border-b border-white/5 flex flex-col p-6 gap-6 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#f0ede8]/80 text-lg hover:text-[#2dd4bf] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/christian-schou-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2dd4bf] text-sm"
          >
            Download CV ↓
          </a>
        </div>
      )}
    </motion.nav>
  );
}
