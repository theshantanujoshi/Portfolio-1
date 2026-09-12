import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, ArrowRight, Link } from 'lucide-react';

const Contact: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const signatureX = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const signatureScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true 
      }) + ' IST');
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" ref={containerRef} className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel rounded-[3rem] p-10 md:p-20 overflow-hidden relative bg-black !border-black"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-20 relative z-10">
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-4">
              Initiate<br/>Contact
            </h2>
            <div className="h-1 w-12 bg-white"></div>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col gap-10">
            <p className="text-2xl md:text-3xl font-medium text-white/90 leading-tight tracking-tight">
              Currently open for internships, research collaborations, and engineering roles. Let's build something exceptional.
            </p>
            
            <a 
              href="mailto:wharshsingh@gmail.com" 
              className="group flex items-center justify-between w-full bg-white text-black p-6 md:p-8 rounded-[2rem] hover:scale-[1.02] transition-transform duration-500"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold tracking-widest uppercase text-black/50 mb-1">Direct Line</span>
                  <span className="text-xl md:text-3xl font-black tracking-tight">wharshsingh@gmail.com</span>
                </div>
              </div>
              <ArrowRight size={32} className="text-black group-hover:translate-x-2 transition-transform duration-500" />
            </a>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-white/10 relative z-10">
          <div className="flex items-center gap-6">
            <a href="https://github.com/harshsingh07i" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300">
              <Link size={20} />
            </a>
            <a href="https://www.linkedin.com/in/harsh-singh-b89925315/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300">
              <Link size={20} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-1">Local Time (Jodhpur)</p>
            <p className="text-xl font-black tracking-tight text-white">{time}</p>
          </div>
        </div>
        
        {/* Massive Signature */}
        <motion.div 
          style={{ x: signatureX, scale: signatureScale }}
          className="w-full mt-20 flex justify-center opacity-10 absolute bottom-[-5%] left-0 pointer-events-none"
        >
          <h1 className="text-[25vw] leading-none font-black tracking-tighter text-white uppercase text-center w-full overflow-hidden select-none whitespace-nowrap">
            HARSH
          </h1>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
