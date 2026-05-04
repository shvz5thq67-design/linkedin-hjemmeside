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
    caseStudy: `As IT Business Partner at DP World, I prioritize the roadmap and backlog for two development teams: Automation Development and Data & Analytics. I led a complex data integration process involving AI and technical debt, and drove the discovery process to identify the biggest gaps for a new data platform. I also developed the first application and integration for DP World's new integration engine, including a staging database to ensure consistent data availability across the new data environment.`,
  },
  {
    id: 2,
    years: '2023 – 2025',
    company: 'A.P. Moller - Maersk',
    role: 'Functional Product Owner',
    tags: ['Process Mining', 'ERP Transformation', 'Change Management'],
    color: '#60a5fa',
    caseStudy: `At Maersk I served as the bridge between business and IT in a global ERP transformation, securing implementation and adoption of new processes across 13,000+ users. Key achievements include designing data metrics with a 63% improvement potential, developing an AI camera solution for diagnosing ship structure issues, and translating complex business requirements into concrete epics and user stories that development teams could execute on.`,
  },
  {
    id: 3,
    years: '2022 – 2023',
    company: 'A.P. Moller - Maersk',
    role: 'Change Management Partner',
    tags: ['Digital Adoption', 'Crew Feedback', 'Fleet Tech'],
    color: '#a78bfa',
    caseStudy: `In this role I focused on driving digital adoption across Maersk's fleet management and technology division. I worked closely with crew and operational teams to gather feedback on digital tools, ensuring that new technology implementations were anchored in actual user needs. This role sharpened my ability to turn organizational complexity into actionable change initiatives.`,
  },
  {
    id: 4,
    years: '2018 – 2025',
    company: 'Høi Projekter',
    role: 'Co-Founder',
    tags: ['Innovation Fund', 'Festival Tech', '1M+ DKK Revenue'],
    color: '#f59e0b',
    caseStudy: `Co-founded Høi Projekter, a startup operating in the innovation and events space. Over seven years we built festival technology, secured Innovation Fund backing, and grew to 1M+ DKK in revenue. Operating in an innovation ecosystem gave us access to networks and ideas that wouldn't have emerged in isolation — shaping how I think about product development and entrepreneurship to this day.`,
  },
];

export default function WorkGrid() {
  const [activeCase, setActiveCase] = useState<(typeof JOBS)[0] | null>(null);

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-[#2dd4bf] text-sm tracking-widest uppercase mb-3">Experience</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f0ede8]">Where I&apos;ve shipped.</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {JOBS.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            onClick={() => setActiveCase(job)}
            className="group relative p-7 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 cursor-pointer transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <span
                className="text-xs font-mono px-2.5 py-1 rounded-full"
                style={{ background: `${job.color}15`, color: job.color }}
              >
                {job.years}
              </span>
              <span className="text-[#f0ede8]/30 text-xs group-hover:text-[#2dd4bf] transition-colors">
                Read case →
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#f0ede8] mb-1">{job.company}</h3>
            <p className="text-[#f0ede8]/50 text-sm mb-5">{job.role}</p>

            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 text-[#f0ede8]/50 border border-white/8"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setActiveCase(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0d1526] border border-white/10 rounded-2xl p-8 max-w-xl w-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p
                    className="text-xs font-mono mb-1"
                    style={{ color: activeCase.color }}
                  >
                    {activeCase.years}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-[#f0ede8]">{activeCase.company}</h3>
                  <p className="text-[#f0ede8]/50 text-sm">{activeCase.role}</p>
                </div>
                <button
                  onClick={() => setActiveCase(null)}
                  className="text-[#f0ede8]/40 hover:text-[#f0ede8] transition-colors text-xl leading-none"
                >
                  ✕
                </button>
              </div>
              <p className="text-[#f0ede8]/70 leading-relaxed text-sm">{activeCase.caseStudy}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {activeCase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ background: `${activeCase.color}15`, color: activeCase.color }}
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
