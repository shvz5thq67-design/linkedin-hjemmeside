'use client';

import { motion } from 'framer-motion';
import ChatWidget from './ChatWidget';

export default function AISection() {
  return (
    <section id="ai" className="py-32 px-6 md:px-16 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2dd4bf]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#2dd4bf] text-sm tracking-widest uppercase mb-4">AI in Action</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#f0ede8] mb-6">
            I don&apos;t just advise on AI.<br />I build with it.
          </h2>
          <p className="text-[#f0ede8]/50 text-xl max-w-xl mx-auto leading-relaxed">
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
