import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full relative py-32 border-t border-black/10 dark:border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
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
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-black/60 dark:text-white/60 mb-4 block">
                [ 01 — INTEL ]
              </span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black dark:text-white uppercase mb-4 leading-none">
                System<br/>Intel
              </h2>
            </div>
            
            <a href="https://linkedin.com/in/harsh-singh-b89925315/" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-4 group mt-12 w-fit">
              <span className="text-sm font-bold uppercase tracking-widest text-black dark:text-white group-hover:text-black/70 dark:group-hover:text-white/50 transition-colors">View Full Profile</span>
              <span className="w-10 h-[1px] bg-black dark:bg-white group-hover:w-16 transition-all duration-300" />
              <ArrowRight size={16} strokeWidth={1.5} className="text-black dark:text-white" />
            </a>
          </div>

          {/* Right: Content Grid */}
          <div className="md:col-span-8 flex flex-col gap-16">
            <p className="text-3xl md:text-5xl font-medium text-black dark:text-white/90 leading-[1.1] tracking-tighter text-balance">
              I build and research machine learning architectures, data pipelines, and intelligent interfaces. My goal is to bridge the gap between theoretical AI and production-grade engineering.
            </p>

            {/* Education Card */}
            <div className="glass-panel p-10 md:p-12 rounded-[2rem] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center bg-black/5 dark:bg-white/5 group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap strokeWidth={1} className="text-black dark:text-white" size={32} />
                </div>
                <div>
                  <h3 className="font-black text-2xl text-black dark:text-white tracking-tight uppercase">IIT Jodhpur</h3>
                  <p className="text-black/70 dark:text-white/70 font-medium text-lg mt-1 tracking-tight">B.Tech AI & Data Science</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-l border-black/10 dark:border-white/10 pl-0 md:pl-8">
                <span className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-black/60 dark:text-white/60">
                  <Calendar size={14} strokeWidth={2} /> 2024—2028
                </span>
                <span className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-black/60 dark:text-white/60">
                  <MapPin size={14} strokeWidth={2} /> Rajasthan, India
                </span>
              </div>
            </div>

            <a href="https://linkedin.com/in/harsh-singh-b89925315/" target="_blank" rel="noopener noreferrer" className="md:hidden inline-flex items-center gap-4 group w-fit">
              <span className="text-sm font-bold uppercase tracking-widest text-black dark:text-white group-hover:text-black/70 dark:group-hover:text-white/50 transition-colors">View Full Profile</span>
              <span className="w-10 h-[1px] bg-black dark:bg-white group-hover:w-16 transition-all duration-300" />
              <ArrowRight size={16} strokeWidth={1.5} className="text-black dark:text-white" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
