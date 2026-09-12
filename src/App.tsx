import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SlicedWaves from './components/SlicedWaves';
import Lenis from 'lenis';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const { theme } = useTheme();

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
    <main className="relative w-full min-h-screen font-sans selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black overflow-x-hidden transition-colors duration-500">
      {/* Sliced Waves Background */}
      <div className="fixed inset-0 -z-10 bg-white dark:bg-black transition-colors duration-500">
        <SlicedWaves
          color1={theme === 'dark' ? '#38bdf8' : '#000000'}
          color2={theme === 'dark' ? '#818cf8' : '#333333'}
          color3={theme === 'dark' ? '#c084fc' : '#666666'}
          columns={16}
          rows={10}
          barThickness={0.15}
          speed={0.4}
          travel={0.8}
          softness={0.1}
          glow={theme === 'dark' ? 0.5 : 0}
          lightMode={theme !== 'dark'}
          opacity={theme === 'dark' ? 0.6 : 0.8}
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
