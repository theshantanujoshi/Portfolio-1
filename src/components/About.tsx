import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel rounded-[3rem] p-10 md:p-20 overflow-hidden relative group"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Heading */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black uppercase mb-4">
              System<br/>Intel
            </h2>
            <div className="h-1 w-12 bg-black"></div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-10">
            <p className="text-2xl md:text-3xl font-medium text-black/90 leading-tight tracking-tight">
              I build and research machine learning architectures, data pipelines, and intelligent interfaces. My goal is to bridge the gap between theoretical AI and production-grade engineering.
            </p>

            {/* Education Card */}
            <div className="bg-white/50 border border-white p-8 rounded-3xl mt-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-black">IIT Jodhpur</h3>
                  <p className="text-black/60 font-medium">B.Tech AI & Data Science</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase bg-black/5 px-4 py-2 rounded-full text-black/70">
                  <Calendar size={16} /> 2024–2028
                </span>
                <span className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase bg-black/5 px-4 py-2 rounded-full text-black/70">
                  <MapPin size={16} /> Rajasthan, India
                </span>
              </div>
            </div>

            <a href="https://linkedin.com/in/harsh-singh-b89925315/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-black uppercase tracking-widest hover:opacity-50 transition-opacity w-fit mt-4">
              <span>View Full Profile</span>
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
