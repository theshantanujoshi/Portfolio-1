import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Iridescence from './components/Iridescence';
import Lenis from 'lenis';

function App() {
  // Connection lost title logic
  useEffect(() => {
    let originalTitle = document.title;
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = 'Connection lost... 🔌';
      } else {
        document.title = 'Reconnecting...';
        timeoutId = setTimeout(() => {
          document.title = originalTitle;
        }, 1000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(timeoutId);
    };
  }, []);

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
    <main className="relative w-full min-h-screen bg-transparent font-sans selection:bg-blue-600 dark:selection:bg-white selection:text-white dark:selection:text-black transition-colors duration-500">
      <div className="fixed inset-0 -z-10 bg-[#f0f0f0] dark:bg-[#080808]">
        <Iridescence
          color={[0.15, 0.39, 0.92]}
          mouseReact={true}
          amplitude={0.1}
          speed={0.5}
        />
      </div>

      <Navbar />
      
      <div className="pt-24 pb-12">
        <Hero />
      </div>
      
      <div className="flex flex-col gap-12 pb-24">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}

export default App;
