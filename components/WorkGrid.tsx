'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const JOBS = [
  {
    id: 1,
    years: '2025 – Now',
    company: 'DP World',
    role: 'IT Business Partner',
    tags: ['ERP Strategy', 'AI Opportunities', 'Data Governance'],
    color: '#2dd4bf',
    highlights: [
      'Leads roadmap & backlog for Automation Development and Data & Analytics teams',
      'Built first integration for DP World\'s new integration engine + staging database',
      'Drove discovery process for new data platform; led AI-driven data integration',
    ],
    caseStudy: `As IT Business Partner at DP World, I prioritize the roadmap and backlog for two development teams: Automation Development and Data & Analytics. I led a complex data integration process involving AI and technical debt, and drove the discovery process to identify the biggest gaps for a new data platform. I also developed the first application and integration for DP World's new integration engine, including a staging database to ensure consistent data availability across the new data environment.`,
  },
  {
    id: 2,
    years: '2023 – 2025',
    company: 'A.P. Moller - Maersk',
    role: 'Functional Product Owner',
    tags: ['Process Mining', 'ERP Transformation', 'Change Management'],
    color: '#60a5fa',
    highlights: [
      'Bridge between business & IT in global ERP transformation (13,000+ users)',
      'Designed data metrics with 63% improvement potential',
      'Developed AI camera solution for diagnosing ship structures',
    ],
    caseStudy: `At Maersk I served as the bridge between business and IT in a global ERP transformation, securing implementation and adoption of new processes across 13,000+ users. Key achievements include designing data metrics with a 63% improvement potential, developing an AI camera solution for diagnosing ship structure issues, and translating complex business requirements into concrete epics and user stories that development teams could execute on.`,
  },
  {
    id: 3,
    years: '2022 – 2023',
    company: 'A.P. Moller - Maersk',
    role: 'Change Management Partner',
    tags: ['Digital Adoption', 'Crew Feedback', 'Fleet Tech'],
    color: '#a78bfa',
    highlights: [
      'Drove digital adoption across Maersk\'s fleet management division',
      'Gathered crew feedback to anchor technology in real user needs',
      'Turned organizational complexity into actionable change initiatives',
    ],
    caseStudy: `In this role I focused on driving digital adoption across Maersk's fleet management and technology division. I worked closely with crew and operational teams to gather feedback on digital tools, ensuring that new technology implementations were anchored in actual user needs. This role sharpened my ability to turn organizational complexity into actionable change initiatives.`,
  },
  {
    id: 4,
    years: '2018 – 2025',
    company: 'Høi Projekter',
    role: 'Co-Founder',
    tags: ['Innovation Fund', 'Festival Tech', '1M+ DKK Revenue'],
    color: '#f59e0b',
    highlights: [
      '7 years building festival technology and innovation products',
      'Secured Innovation Fund backing',
      'Grew to 1M+ DKK in revenue',
    ],
    caseStudy: `Co-founded Høi Projekter, a startup operating in the innovation and events space. Over seven years we built festival technology, secured Innovation Fund backing, and grew to 1M+ DKK in revenue. Operating in an innovation ecosystem gave us access to networks and ideas that wouldn't have emerged in isolation — shaping how I think about product development and entrepreneurship to this day.`,
  },
];

export default function WorkGrid() {
  const [activeCase, setActiveCase] = useState<(typeof JOBS)[0] | null>(null);

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
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#f0ede8]">Where I&apos;ve shipped.</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {JOBS.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            onClick={() => setActiveCase(job)}
            className="group relative p-8 md:p-10 rounded-3xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 cursor-pointer transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <span
                className="text-xs font-mono px-3 py-1.5 rounded-full font-medium"
                style={{ background: `${job.color}18`, color: job.color }}
              >
                {job.years}
              </span>
              <span className="text-[#f0ede8]/25 text-xs group-hover:text-[#2dd4bf] transition-colors duration-300">
                Read more →
              </span>
            </div>

            <h3 className="font-serif text-3xl font-bold text-[#f0ede8] mb-1">{job.company}</h3>
            <p className="text-[#f0ede8]/50 text-base mb-6">{job.role}</p>

            <ul className="flex flex-col gap-2 mb-8">
              {job.highlights.map((h, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm text-[#f0ede8]/55 leading-snug">
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: job.color }} />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-[#f0ede8]/45 border border-white/8"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              className="absolute bottom-0 left-0 right-0 h-px rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(90deg, transparent, ${job.color}, transparent)` }}
            />
          </motion.div>
        ))}
      </div>

      {/* Case study modal */}
      <AnimatePresence>
        {activeCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setActiveCase(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0d1526] border border-white/10 rounded-3xl p-10 max-w-2xl w-full shadow-2xl"
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-xs font-mono mb-2" style={{ color: activeCase.color }}>{activeCase.years}</p>
                  <h3 className="font-serif text-3xl font-bold text-[#f0ede8]">{activeCase.company}</h3>
                  <p className="text-[#f0ede8]/50 text-base mt-1">{activeCase.role}</p>
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
                  <span
                    key={tag}
                    className="text-xs px-4 py-1.5 rounded-full font-medium"
                    style={{ background: `${activeCase.color}18`, color: activeCase.color }}
                  >
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
