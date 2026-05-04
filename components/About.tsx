'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const TIMELINE = [
  { year: '2025', event: 'IT Business Partner, DP World' },
  { year: '2023', event: 'Joined Maersk — Fleet Management & Technology' },
  { year: '2022', event: 'MSc IT, Communication & Organisation, Aarhus BSS (GPA: 10.4)' },
  { year: '2018', event: 'Co-Founded Høi Projekter' },
  { year: '2017', event: 'Bachelor, Aarhus University' },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-16 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <p className="text-[#2dd4bf] text-sm tracking-widest uppercase mb-4">About</p>
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#f0ede8]">The person behind the work.</h2>
      </motion.div>

      {/* Two-column layout */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
            {/* Gradient ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 180deg, #2dd4bf40, #60a5fa30, #a78bfa20, #2dd4bf40)',
                padding: '3px',
                borderRadius: '50%',
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0d1526]">
                <Image
                  src="/christian-schou.jpg"
                  alt="Christian Schou"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-[#2dd4bf]/8 blur-2xl -z-10 scale-110" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <p className="text-[#f0ede8]/75 text-xl leading-relaxed mb-6">
            I&apos;m a Product Owner and AI consultant based in Aarhus. I&apos;ve spent years driving digital transformation at Maersk and DP World — and building my own ventures.
          </p>
          <p className="text-[#f0ede8]/75 text-xl leading-relaxed mb-10">
            I&apos;m at my best when technology meets business strategy, and when AI becomes a real tool, not just a buzzword. The best IT solutions start with thorough analysis — and that&apos;s exactly where I focus.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Product Owner', 'AI Strategy', 'Data-Driven', 'Agile', 'Builder'].map((tag) => (
              <span
                key={tag}
                className="px-5 py-2 rounded-full text-sm border border-[#2dd4bf]/25 text-[#2dd4bf]/80 bg-[#2dd4bf]/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-serif text-3xl text-[#f0ede8] mb-10">Journey</h3>
        <div className="relative border-l-2 border-[#2dd4bf]/15 pl-10 flex flex-col gap-10">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[2.6rem] top-1.5 w-4 h-4 rounded-full bg-[#2dd4bf] ring-4 ring-[#0a0f1e]" />
              <span className="text-[#2dd4bf] text-sm font-mono font-bold">{item.year}</span>
              <p className="text-[#f0ede8]/65 text-base mt-1 leading-snug">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
