import React from 'react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  return (
    <div className="w-full min-h-[85vh] flex items-center justify-center p-4 md:p-6 bg-[#f0f0f0] dark:bg-[#0a0a0a] transition-colors duration-500">
      <section className="relative w-full max-w-[1400px] min-h-[75vh] rounded-[2rem] overflow-hidden flex flex-col items-center bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-sm border border-white/20 dark:border-white/10 transition-colors duration-500">
        
        {/* Video Background */}
        <div className="absolute inset-0 z-0 bg-black/40 dark:bg-black/60 transition-colors duration-500"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-80 scale-105 -z-10 pointer-events-none"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4" />
        </video>

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 text-center my-auto min-h-[75vh]">
          
          <div className="max-w-4xl flex flex-col items-center">
            {/* Heading */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-bold text-white leading-[0.95] mb-6 tracking-tighter drop-shadow-xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Harsh Pratap Singh
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-2xl leading-relaxed drop-shadow-md font-medium tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              AI & Data Science Student @ IIT Jodhpur. Building intelligent systems and data-driven solutions.
            </motion.p>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Hero;
