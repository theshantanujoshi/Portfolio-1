import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, Link } from 'lucide-react';
import SignatureAnimation from './SignatureAnimation';
import Magnetic from './Magnetic';

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const signatureX = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const signatureScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section id="contact" ref={containerRef} className="w-full relative py-32 border-t border-black/10 dark:border-white/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          {/* Left: Architectural Label */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-black/40 dark:text-white/40 mb-4 block">
                [ 05 — CONNECTION ]
              </span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black dark:text-white uppercase mb-4 leading-none">
                Get In<br/>Touch
              </h2>
            </div>
          </div>

          {/* Right: Content Grid */}
          <div className="md:col-span-8 flex flex-col gap-12">
            <p className="text-3xl md:text-5xl font-medium text-black dark:text-white/90 leading-[1.1] tracking-tighter text-balance">
              Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full mt-4">
              <Magnetic intensity={0.1}>
                <a href="mailto:wharshsingh@gmail.com" className="group flex-1 bg-white/40 dark:bg-black/40 border border-black/10 dark:border-white/10 p-8 rounded-[2rem] flex items-center gap-6 hover:bg-black dark:hover:bg-white transition-all duration-500 w-full cursor-pointer shadow-sm">
                  <Mail size={32} strokeWidth={1} className="text-black dark:text-white shrink-0 group-hover:text-white dark:group-hover:text-black transition-colors duration-500" />
                  <div className="flex flex-col items-start overflow-hidden">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-black/50 dark:text-white/50 mb-1 group-hover:text-white/70 dark:group-hover:text-black/70 transition-colors duration-500">Personal</span>
                    <span className="text-lg md:text-xl font-bold tracking-tight text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500 truncate">
                      wharshsingh@gmail.com
                    </span>
                  </div>
                </a>
              </Magnetic>

              <Magnetic intensity={0.1}>
                <a href="mailto:b24bs1154@iitj.ac.in" className="group flex-1 bg-white/40 dark:bg-black/40 border border-black/10 dark:border-white/10 p-8 rounded-[2rem] flex items-center gap-6 hover:bg-black dark:hover:bg-white transition-all duration-500 w-full cursor-pointer shadow-sm">
                  <Mail size={32} strokeWidth={1} className="text-black dark:text-white shrink-0 group-hover:text-white dark:group-hover:text-black transition-colors duration-500" />
                  <div className="flex flex-col items-start overflow-hidden">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-black/50 dark:text-white/50 mb-1 group-hover:text-white/70 dark:group-hover:text-black/70 transition-colors duration-500">College</span>
                    <span className="text-lg md:text-xl font-bold tracking-tight text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500 truncate">
                      b24bs1154@iitj.ac.in
                    </span>
                  </div>
                </a>
              </Magnetic>
            </div>

            <div className="w-fit mt-4">
              <Magnetic intensity={0.2}>
                <a 
                  href="mailto:wharshsingh@gmail.com?subject=Hello%20from%20your%20Portfolio!"
                  className="inline-flex items-center gap-4 bg-black dark:bg-white text-white dark:text-black px-10 py-6 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-transform shadow-lg"
                >
                  <Mail size={18} strokeWidth={1.5} />
                  <span>Say Hello</span>
                </a>
              </Magnetic>
            </div>
          </div>
        </motion.div>

        {/* Footer Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 pt-16 mt-24 border-t border-black/10 dark:border-white/10 relative z-10">
          <div className="flex items-center gap-4 md:w-1/3 justify-center md:justify-start">
            <img src={`${import.meta.env.BASE_URL}h_logo.png`} alt="Logo" className="w-6 h-6 object-contain invert dark:invert-0" />
            <p className="text-black/60 dark:text-white/60 text-xs font-mono font-bold tracking-widest uppercase whitespace-nowrap">
              © 2026. All rights reserved.
            </p>
          </div>
          
          {/* Authentic Signature */}
          <div className="flex justify-center items-center md:w-1/3">
            <div className="scale-75 md:scale-100 h-[38px] flex justify-center items-center text-black dark:text-white">
              <SignatureAnimation duration={1.2}>Harsh Pratap Singh</SignatureAnimation>
            </div>
          </div>

          <div className="flex items-center gap-6 md:w-1/3 justify-center md:justify-end">
            <Magnetic intensity={0.3}>
              <a href="https://github.com/harshsingh07i" target="_blank" rel="noopener noreferrer" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors duration-300 p-2">
                <Link size={24} strokeWidth={1.5} />
              </a>
            </Magnetic>
            <Magnetic intensity={0.3}>
              <a href="https://www.linkedin.com/in/harsh-singh-b89925315/" target="_blank" rel="noopener noreferrer" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors duration-300 p-2">
                <Link size={24} strokeWidth={1.5} />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Massive Parallax Overlay */}
      <motion.div 
        style={{ x: signatureX, scale: signatureScale }}
        className="w-full mt-20 flex justify-center opacity-[0.03] absolute bottom-[5%] left-0 pointer-events-none z-0"
      >
        <h1 className="text-[20vw] md:text-[25vw] leading-none font-black tracking-tighter text-black dark:text-white uppercase text-center w-full select-none whitespace-nowrap">
          HARSH
        </h1>
      </motion.div>
    </section>
  );
};

export default Contact;
