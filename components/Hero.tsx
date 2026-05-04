'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TITLES = ['Product Owner', 'AI Consultant', 'Digital Transformation', 'Business & Tech'];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setTitleIndex((i) => (i + 1) % TITLES.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  // Particle mesh animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const COUNT = 60;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(45, 212, 191, 0.35)';
        ctx.fill();
      });

      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(45, 212, 191, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="grain-overlay relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#0a0f1e]"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ zIndex: 0 }}
      />

      {/* Open to roles badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute top-24 right-6 md:right-12 flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/5 text-xs text-[#2dd4bf] z-10"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
        Open to new roles · Aarhus
      </motion.div>

      <div className="relative z-10 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#2dd4bf] text-sm font-medium tracking-widest uppercase mb-4"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-black text-[#f0ede8] leading-none mb-6"
        >
          Christian<br />Schou
        </motion.h1>

        {/* Animated subtitle */}
        <div className="h-10 flex items-center justify-center mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={titleIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="font-serif italic text-2xl md:text-3xl text-[#2dd4bf]"
            >
              {TITLES[titleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="text-[#f0ede8]/60 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I bridge business and technology — and I make AI work in the real world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#work"
            className="px-7 py-3.5 bg-[#2dd4bf] text-[#0a0f1e] font-semibold rounded-full hover:bg-[#2dd4bf]/90 transition-all duration-200 hover:scale-105"
          >
            See my work ↓
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 border border-[#f0ede8]/20 text-[#f0ede8] rounded-full hover:border-[#2dd4bf]/50 hover:text-[#2dd4bf] transition-all duration-200"
          >
            Contact me
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#f0ede8]/20 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-[#2dd4bf] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
