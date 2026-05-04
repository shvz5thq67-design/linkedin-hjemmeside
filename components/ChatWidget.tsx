'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = { role: 'user' | 'assistant'; content: string };

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Christian's AI assistant. Ask me anything about his background, experience, or what he could bring to your team." },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: 'user', content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages((m) => [...m, { role: 'assistant', content: 'Something went wrong. Try again in a moment.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="rounded-3xl border border-[#2dd4bf]/20 bg-[#0d1526] overflow-hidden shadow-2xl shadow-black/40">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-white/[0.02]">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-4 text-xs text-[#f0ede8]/30 font-mono">christian-schou-ai ~ ask anything</span>
        </div>

        {/* Messages */}
        <div className="p-6 h-80 overflow-y-auto flex flex-col gap-4">
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#2dd4bf] text-[#0a0f1e] font-medium rounded-br-sm'
                      : 'bg-white/5 text-[#f0ede8]/80 border border-white/8 rounded-bl-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {loading && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
              <div className="bg-white/5 border border-white/8 px-5 py-3.5 rounded-2xl rounded-bl-sm flex gap-2 items-center">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#2dd4bf]"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="border-t border-white/5 p-4 flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Ask about Christian's experience..."
            className="flex-1 bg-white/[0.04] border border-white/8 text-sm text-[#f0ede8] placeholder-[#f0ede8]/25 outline-none px-4 py-3 rounded-xl focus:border-[#2dd4bf]/30 transition-colors"
          />
          <button
            onClick={send}
            disabled={loading || !input.trim()}
            className="px-6 py-3 rounded-xl bg-[#2dd4bf] text-[#0a0f1e] text-sm font-bold disabled:opacity-40 hover:bg-[#2dd4bf]/90 transition-all duration-200 flex-shrink-0"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
