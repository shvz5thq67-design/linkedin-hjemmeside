'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const JOBS = [
  {
    id: 1,
    num: '01',
    years: '2025 – Now',
    company: 'DP World',
    role: 'IT Business Partner',
    tags: ['ERP Strategy', 'AI', 'Data Governance'],
    color: '#2dd4bf',
    highlights: [
      'Leads roadmap & backlog for Automation Development and Data & Analytics teams',
      'Built first integration for DP World\'s new integration engine + staging database',
      'Led complex AI-driven data integration and drove discovery for new data platform',
    ],
    caseStudy: `As IT Business Partner at DP World, I prioritize the roadmap and backlog for two development teams: Automation Development and Data & Analytics. I led a complex data integration process involving AI and technical debt, and drove the discovery process to identify the biggest gaps for a new data platform. I also developed the first application and integration for DP World's new integration engine, including a staging database to ensure consistent data availability across the new data environment.`,
  },
  {
    id: 2,
    num: '02',
    years: '2023 – 2025',
    company: 'A.P. Moller - Maersk',
    role: 'Functional Product Owner',
    tags: ['ERP Transformation', 'Process Mining', 'Change Management'],
    color: '#60a5fa',
    highlights: [
      'Bridge between business & IT in global ERP transformation across 13,000+ users',
      'Designed data metrics with 63% improvement potential',
      'Developed AI camera solution for diagnosing ship structures',
    ],
    caseStudy: `At Maersk I served as the bridge between business and IT in a global ERP transformation, securing implementation and adoption of new processes across 13,000+ users. Key achievements include designing data metrics with a 63% improvement potential, developing an AI camera solution for diagnosing ship structure issues, and translating complex business requirements into concrete epics and user stories.`,
  },
  {
    id: 3,
    num: '03',
    years: '2022 – 2023',
    company: 'A.P. Moller - Maersk',
    role: 'Change Management Partner',
    tags: ['Digital Adoption', 'Fleet Tech', 'Crew Feedback'],
    color: '#a78bfa',
    highlights: [
      'Drove digital adoption across Maersk\'s fleet management division',
      'Gathered crew feedback to anchor technology in real user needs',
      'Turned organizational complexity into actionable change initiatives',
    ],
    caseStudy: `In this role I focused on driving digital adoption across Maersk's fleet management and technology division. I worked closely with crew and operational teams to gather feedback on digital tools, ensuring that new technology implementations were anchored in actual user needs.`,
  },
  {
    id: 4,
    num: '04',
    years: '2018 – 2025',
    company: 'Høi Projekter',
    role: 'Co-Founder',
    tags: ['Innovation Fund', 'Festival Tech', '1M+ DKK Revenue'],
    color: '#f59e0b',
    highlights: [
      '7 years building festival technology and innovation products',
      'Secured Innovation Fund backing',
      'Grew to 1M+ DKK in revenue from scratch',
    ],
    caseStudy: `Co-founded Høi Projekter, a startup in the innovation and events space. Over seven years we built festival technology, secured Innovation Fund backing, and grew to 1M+ DKK in revenue. Operating in an innovation ecosystem gave us access to networks and ideas that shaped how I think about product development to this day.`,
  },
];

export default function WorkGrid() {
  const [activeCase, setActiveCase] = useState<(typeof JOBS)[0] | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 px-6 md:px-16 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <p className="text-[#2dd4bf] text-sm tracking-widest uppercase mb-4">Experience</p>
        <h2 className="font-serif font-bold text-[#f0ede8]" style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
          Where I&apos;ve shipped.
        </h2>
      </motion.div>

      {/* List-style work items */}
      <div className="flex flex-col divide-y divide-white/6">
        {JOBS.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onMouseEnter={() => setHovered(job.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setActiveCase(job)}
            className="group py-8 md:py-10 cursor-pointer transition-all duration-300"
            style={{
              opacity: hovered !== null && hovered !== job.id ? 0.4 : 1,
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              {/* Number */}
              <span className="text-[#f0ede8]/15 font-mono text-sm w-8 flex-shrink-0">{job.num}</span>

              {/* Company */}
              <h3
                className="font-serif font-bold text-[#f0ede8] group-hover:text-[#2dd4bf] transition-colors duration-300 flex-1"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1 }}
              >
                {job.company}
              </h3>

              {/* Role + tags */}
              <div className="flex flex-col md:items-end gap-2 md:min-w-[280px]">
                <p className="text-[#f0ede8]/50 text-sm">{job.role}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-[#f0ede8]/40 border border-white/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Year + arrow */}
              <div className="flex items-center gap-3 md:min-w-[120px] md:justify-end">
                <span
                  className="text-xs font-mono px-3 py-1.5 rounded-full flex-shrink-0"
                  style={{ background: `${job.color}15`, color: job.color }}
                >
                  {job.years}
                </span>
                <span className="text-[#f0ede8]/20 group-hover:text-[#2dd4bf] transition-all duration-300 group-hover:translate-x-1 inline-block">
                  →
                </span>
              </div>
            </div>

            {/* Expandable bullets on hover */}
            <AnimatePresence>
              {hovered === job.id && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden mt-5 ml-0 md:ml-16 flex flex-col gap-2"
                >
                  {job.highlights.map((h, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.06 }}
                      className="flex items-start gap-2.5 text-sm text-[#f0ede8]/55"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: job.color }} />
                      {h}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setActiveCase(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0d1526] border border-white/10 rounded-3xl p-10 max-w-2xl w-full shadow-2xl"
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-xs font-mono mb-2" style={{ color: activeCase.color }}>{activeCase.years}</p>
                  <h3 className="font-serif text-3xl font-bold text-[#f0ede8]">{activeCase.company}</h3>
                  <p className="text-[#f0ede8]/50 mt-1">{activeCase.role}</p>
                </div>
                <button
                  onClick={() => setActiveCase(null)}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-[#f0ede8]/40 hover:text-[#f0ede8] hover:bg-white/10 transition-all"
                >
                  ✕
                </button>
              </div>
              <p className="text-[#f0ede8]/70 leading-relaxed text-base mb-8">{activeCase.caseStudy}</p>
              <div className="flex flex-wrap gap-2">
                {activeCase.tags.map((tag) => (
                  <span key={tag} className="text-xs px-4 py-1.5 rounded-full font-medium"
                    style={{ background: `${activeCase.color}18`, color: activeCase.color }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
