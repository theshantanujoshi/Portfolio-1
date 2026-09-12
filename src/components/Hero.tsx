import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import Magnetic from './Magnetic';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const textRight = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col justify-between h-full min-h-[70vh]">
        
        {/* Massive Typography with Scroll Parallax */}
        <div className="flex flex-col gap-2 w-full cursor-default">
          <motion.h1 
            style={{ x: textLeft, opacity: opacityFade }}
            className="group relative w-fit overflow-hidden text-[15vw] md:text-[12vw] leading-[0.85] font-black tracking-tighter text-black dark:text-white uppercase -ml-[0.05em] whitespace-nowrap"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Harsh
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-black/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none mix-blend-overlay blur-sm" />
          </motion.h1>
          <motion.h1 
            style={{ x: textRight, opacity: opacityFade }}
            className="group relative w-fit self-end overflow-hidden text-[15vw] md:text-[12vw] leading-[0.85] font-black tracking-tighter text-black dark:text-white uppercase text-right -mr-[0.05em] whitespace-nowrap"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Pratap
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-black/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none mix-blend-overlay blur-sm" />
          </motion.h1>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "linear" }}
          className="mt-20 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-12"
        >
          <p className="max-w-md text-lg md:text-xl font-medium text-black dark:text-white/70 leading-relaxed text-balance">
            AI & Data Science engineering student focused on building intelligent systems and exploring deep technical architecture.
          </p>

          <Magnetic intensity={0.4}>
            <a 
              href="#about"
              className="group flex items-center justify-center w-24 h-24 rounded-full border border-black dark:border-white/10 hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white transition-colors duration-500"
            >
              <ArrowDown size={32} strokeWidth={1} className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500" />
            </a>
          </Magnetic>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
