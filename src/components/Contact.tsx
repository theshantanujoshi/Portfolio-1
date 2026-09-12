import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, Link } from 'lucide-react';
import SignatureAnimation from './SignatureAnimation';
import Magnetic from './Magnetic';

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
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <p className="text-2xl md:text-3xl font-medium text-white/90 leading-tight tracking-tight mb-4">
              Currently open for internships, research collaborations, and engineering roles. Let's build something exceptional.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <Magnetic intensity={0.1}>
                <a 
                  href="mailto:wharshsingh@gmail.com" 
                  className="flex-1 group flex items-center justify-between bg-white text-black p-6 rounded-[2rem] hover:scale-[1.02] transition-transform duration-500 w-full"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-xs font-bold tracking-widest uppercase text-black/50 mb-1">Personal</span>
                      <span className="text-lg md:text-xl font-black tracking-tight truncate">wharshsingh@gmail.com</span>
                    </div>
                  </div>
                </a>
              </Magnetic>

              <Magnetic intensity={0.1}>
                <a 
                  href="mailto:b24bs1154@iitj.ac.in" 
                  className="flex-1 group flex items-center justify-between bg-white text-black p-6 rounded-[2rem] hover:scale-[1.02] transition-transform duration-500 w-full"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-xs font-bold tracking-widest uppercase text-black/50 mb-1">Institution</span>
                      <span className="text-lg md:text-xl font-black tracking-tight truncate">b24bs1154@iitj.ac.in</span>
                    </div>
                  </div>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-white/10 relative z-10">
          <div className="flex items-center gap-6">
            <Magnetic intensity={0.3}>
              <a href="https://github.com/harshsingh07i" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300">
                <Link size={20} />
              </a>
            </Magnetic>
            <Magnetic intensity={0.3}>
              <a href="https://www.linkedin.com/in/harsh-singh-b89925315/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300">
                <Link size={20} />
              </a>
            </Magnetic>
          </div>
          
          {/* Authentic Signature */}
          <div className="scale-75 md:scale-100 h-[38px] flex justify-center items-center text-white invert filter">
            <SignatureAnimation duration={1.2}>Harsh Pratap Singh</SignatureAnimation>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-1">Local Time (Jodhpur)</p>
            <p className="text-xl font-black tracking-tight text-white">{time}</p>
          </div>
        </div>
        
        {/* Massive Parallax Overlay */}
        <motion.div 
          style={{ x: signatureX, scale: signatureScale }}
          className="w-full mt-20 flex justify-center opacity-[0.03] absolute bottom-[-5%] left-0 pointer-events-none"
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
