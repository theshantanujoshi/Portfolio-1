import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20">
      <div className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col justify-between h-full min-h-[70vh]">
        
        {/* Top Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-between items-end w-full border-b border-black/10 pb-8 mb-12"
        >
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-black/50">
            Portfolio '26
          </p>
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-black/50 text-right">
            Based in India
          </p>
        </motion.div>

        {/* Massive Typography */}
        <div className="flex flex-col gap-2">
          <motion.h1 
            className="text-[12vw] leading-[0.85] font-black tracking-tighter text-black uppercase -ml-[0.05em]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Harsh
          </motion.h1>
          <motion.h1 
            className="text-[12vw] leading-[0.85] font-black tracking-tighter text-black uppercase text-right -mr-[0.05em]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Pratap
          </motion.h1>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "linear" }}
          className="mt-20 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-12"
        >
          <p className="max-w-md text-lg md:text-xl font-medium text-black/70 leading-relaxed text-balance">
            AI & Data Science engineering student focused on building intelligent systems and exploring deep technical architecture.
          </p>

          <a 
            href="#about"
            className="group flex items-center justify-center w-20 h-20 rounded-full border border-black/20 hover:border-black hover:bg-black transition-colors duration-500"
          >
            <ArrowDown size={24} className="text-black group-hover:text-white transition-colors duration-500" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
