'use client';

import { motion } from 'framer-motion';
import ChatWidget from './ChatWidget';

export default function AISection() {
  return (
    <section id="ai" className="py-24 px-6 md:px-12 bg-[#0a0f1e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2dd4bf]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#2dd4bf] text-sm tracking-widest uppercase mb-3">AI in Action</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f0ede8] mb-5">
            I don&apos;t just advise on AI.<br />I build with it.
          </h2>
          <p className="text-[#f0ede8]/50 text-lg max-w-lg mx-auto leading-relaxed">
            This chatbot is powered by the Anthropic API and knows my full background. Ask it anything — it&apos;s a live demo of what I do for clients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ChatWidget />
        </motion.div>
      </div>
    </section>
  );
}
