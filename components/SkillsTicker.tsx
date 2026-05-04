'use client';

import { motion } from 'framer-motion';

const SKILLS = [
  'Product Ownership',
  'AI Strategy',
  'Process Transformation',
  'Agile',
  'SAP Signavio',
  'Change Management',
  'ERP',
  'Stakeholder Management',
  'Business Analysis',
  'LLMs',
  'Prompt Engineering',
  'Innovation',
  'Workshop Facilitation',
  'Backlog Management',
  'Digital Strategy',
  'Data Governance',
  'API Integration',
  'Jira & Confluence',
];

function TickerRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...SKILLS, ...SKILLS, ...SKILLS];
  return (
    <div className="overflow-hidden py-2.5">
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: reverse ? ['-33.33%', '0%'] : ['0%', '-33.33%'] }}
        transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
      >
        {items.map((skill, i) => (
          <span
            key={i}
            className="px-6 py-2.5 rounded-full border border-[#2dd4bf]/15 text-[#f0ede8]/55 text-sm font-medium bg-white/[0.02] hover:border-[#2dd4bf]/50 hover:text-[#2dd4bf] hover:bg-[#2dd4bf]/5 transition-all duration-200 cursor-default flex-shrink-0"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function SkillsTicker() {
  return (
    <section className="py-14 bg-[#0a0f1e] border-y border-white/5 overflow-hidden">
      <TickerRow />
      <TickerRow reverse />
    </section>
  );
}
