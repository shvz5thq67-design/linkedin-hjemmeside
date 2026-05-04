'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function EasterEgg() {
  const [triggered, setTriggered] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    let buffer = '';
    const target = 'hire christian';

    const onKey = (e: KeyboardEvent) => {
      buffer = (buffer + e.key).toLowerCase().slice(-target.length);
      if (buffer === target && !triggered) {
        setTriggered(true);
        setToast(true);
        launchConfetti();
        setTimeout(() => setToast(false), 4000);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [triggered]);

  const launchConfetti = async () => {
    const confetti = (await import('canvas-confetti')).default;
    confetti({ particleCount: 160, spread: 90, origin: { y: 0.6 }, colors: ['#2dd4bf', '#f0ede8', '#60a5fa'] });
  };

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9998] px-6 py-3.5 rounded-2xl bg-[#2dd4bf] text-[#0a0f1e] font-semibold text-sm shadow-2xl"
        >
          Great taste! 🎉 Christian is ready when you are.
        </motion.div>
      )}
    </AnimatePresence>
  );
}
