import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import GhostFibers from './components/GhostFibers';
import Lenis from 'lenis';

function App() {
  // Lenis smooth scroll logic
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId: number;
    
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-white font-sans selection:bg-black selection:text-white overflow-x-hidden">
      {/* Ghost Fibers Background */}
      <div className="fixed inset-0 -z-10 bg-white">
        <GhostFibers
          lineColor="#94a3b8"
          glowColor="#e2e8f0"
          speed={0.3}
          scale={2.5}
          layers={6}
          lightMode={true}
          vignette={0.4}
        />
      </div>

      <Navbar />
      
      <div className="w-full flex flex-col items-center">
        <Hero />
        
        <div className="w-full max-w-[1400px] flex flex-col gap-24 md:gap-40 px-6 md:px-12 pb-32 z-10 relative">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;
