import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import SkillsTicker from '@/components/SkillsTicker';
import WorkGrid from '@/components/WorkGrid';
import AISection from '@/components/AISection';
import About from '@/components/About';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';
import EasterEgg from '@/components/EasterEgg';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <EasterEgg />
      <Nav />
      <main>
        <Hero />
        <SkillsTicker />
        <WorkGrid />
        <AISection />
        <About />
        <Contact />
      </main>
      <footer className="py-8 text-center text-[#f0ede8]/20 text-xs border-t border-white/5">
        © {new Date().getFullYear()} Christian Schou · Built with Next.js & Anthropic
      </footer>
    </>
  );
}
