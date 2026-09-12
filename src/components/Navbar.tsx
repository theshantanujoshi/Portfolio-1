import React, { useState } from 'react';
import { Download, Menu, X, Moon, Sun } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 pt-8"
      initial={{ y: -50, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-fit mx-auto glass-panel rounded-full px-8 py-3 flex items-center justify-between gap-12">
        
        {/* Left: Logo */}
        <a href="#" className="flex items-center hover:opacity-70 transition-opacity">
          <img src={`${import.meta.env.BASE_URL}h_logo.png`} alt="Logo" className="w-6 h-6 object-contain invert dark:invert-0" />
        </a>

        {/* Center: Links (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase text-black dark:text-white/70">
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-black dark:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-black dark:text-white hover:opacity-70 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a 
            href={`${import.meta.env.BASE_URL}resume.pdf`} 
            download="HARSH_PRATAP_SINGH_Resume.pdf"
            className="hidden sm:flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black dark:bg-white/80 transition-all hover:scale-105 active:scale-95"
          >
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-black dark:text-white hover:opacity-70 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:hidden mt-4 mx-auto max-w-[90%] glass-panel rounded-3xl p-6 flex flex-col gap-6 text-center"
        >
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-black dark:text-white/70 hover:text-black dark:text-white font-bold text-lg tracking-tight uppercase"
            >
              {item}
            </a>
          ))}
          <a 
            href={`${import.meta.env.BASE_URL}resume.pdf`} 
            download="HARSH_PRATAP_SINGH_Resume.pdf"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-5 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest mt-2"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
