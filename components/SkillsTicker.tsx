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
  'Jira',
];

function TickerRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...SKILLS, ...SKILLS];
  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((skill, i) => (
          <span
            key={i}
            className="px-5 py-2 rounded-full border border-[#2dd4bf]/20 text-[#f0ede8]/60 text-sm font-medium bg-white/[0.02] hover:border-[#2dd4bf]/60 hover:text-[#2dd4bf] transition-colors duration-200 cursor-default flex-shrink-0"
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
    <section className="py-16 bg-[#0a0f1e] border-y border-white/5 overflow-hidden">
      <TickerRow />
      <TickerRow reverse />
    </section>
  );
}
