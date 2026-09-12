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
    <section id="contact" ref={containerRef} className="relative w-full pb-32 overflow-hidden flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel rounded-[3rem] p-10 md:p-16 relative overflow-hidden w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10"
      >
        <div className="relative z-10 flex flex-col items-center w-full">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black dark:text-white uppercase mb-6">
            Get In Touch
          </h2>
          
          <p className="text-xl md:text-2xl font-medium text-black dark:text-white/70 leading-relaxed tracking-tight max-w-3xl mb-12 text-balance">
            Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-3xl mb-16">
            <Magnetic intensity={0.1}>
              <a href="mailto:wharshsingh@gmail.com" className="group flex-1 bg-white/40 dark:bg-black/40 border border-white dark:border-white/10 p-6 rounded-2xl flex items-center gap-5 hover:bg-white dark:hover:bg-black hover:shadow-xl transition-all duration-300 w-full cursor-pointer">
                <Mail size={24} className="text-black dark:text-white/70 shrink-0 group-hover:text-black dark:text-white transition-colors" />
                <div className="flex flex-col items-start overflow-hidden">
                  <span className="text-[10px] font-black tracking-widest uppercase text-black dark:text-white/70 mb-1 group-hover:text-black dark:text-white/70 transition-colors">Personal</span>
                  <span className="text-lg md:text-xl font-bold tracking-tight text-black dark:text-white truncate">
                    wharshsingh@gmail.com
                  </span>
                </div>
              </a>
            </Magnetic>

            <Magnetic intensity={0.1}>
              <a href="mailto:b24bs1154@iitj.ac.in" className="group flex-1 bg-white/40 dark:bg-black/40 border border-white dark:border-white/10 p-6 rounded-2xl flex items-center gap-5 hover:bg-white dark:hover:bg-black hover:shadow-xl transition-all duration-300 w-full cursor-pointer">
                <Mail size={24} className="text-black dark:text-white/70 shrink-0 group-hover:text-black dark:text-white transition-colors" />
                <div className="flex flex-col items-start overflow-hidden">
                  <span className="text-[10px] font-black tracking-widest uppercase text-black dark:text-white/70 mb-1 group-hover:text-black dark:text-white/70 transition-colors">College</span>
                  <span className="text-lg md:text-xl font-bold tracking-tight text-black dark:text-white truncate">
                    b24bs1154@iitj.ac.in
                  </span>
                </div>
              </a>
            </Magnetic>
          </div>

          <Magnetic intensity={0.2}>
            <a 
              href="mailto:wharshsingh@gmail.com?subject=Hello%20from%20your%20Portfolio!"
              className="inline-flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-transform shadow-lg"
            >
              <Mail size={18} />
              <span>Say Hello</span>
            </a>
          </Magnetic>
        </div>

        {/* Footer Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 pt-12 mt-16 border-t border-black dark:border-white/10 relative z-10">
          <div className="flex items-center gap-3 md:w-1/3 justify-center md:justify-start">
            <img src={`${import.meta.env.BASE_URL}h_logo.png`} alt="Logo" className="w-5 h-5 object-contain" />
            <p className="text-black dark:text-white/70 text-sm font-bold tracking-widest uppercase whitespace-nowrap">
              © 2026. All rights reserved.
            </p>
          </div>
          
          {/* Authentic Signature */}
          <div className="flex justify-center items-center md:w-1/3">
            <div className="scale-75 md:scale-100 h-[38px] flex justify-center items-center text-black dark:text-white">
              <SignatureAnimation duration={1.2}>Harsh Pratap Singh</SignatureAnimation>
            </div>
          </div>

          <div className="flex items-center gap-4 md:w-1/3 justify-center md:justify-end">
            <Magnetic intensity={0.3}>
              <a href="https://github.com/harshsingh07i" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white/70 hover:text-black dark:text-white transition-colors duration-300 p-2">
                <Link size={24} />
              </a>
            </Magnetic>
            <Magnetic intensity={0.3}>
              <a href="https://www.linkedin.com/in/harsh-singh-b89925315/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white/70 hover:text-black dark:text-white transition-colors duration-300 p-2">
                <Link size={24} />
              </a>
            </Magnetic>
          </div>
        </div>
      </motion.div>

      {/* Massive Parallax Overlay - Moved outside glass panel so it doesn't get clipped */}
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
