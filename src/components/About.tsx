import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export const liquidReveal = {
  hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 1.2, type: "spring" as const, bounce: 0.4 } 
  }
};

const About: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-[1400px] mx-auto px-6 py-10 flex flex-col items-center">
      <motion.div 
        className="w-full flex flex-col md:flex-row items-center gap-12 bg-white/70 dark:bg-white/10 backdrop-blur-2xl border border-white/40 dark:border-white/20 rounded-[2.5rem] p-10 md:p-16 shadow-lg transition-colors duration-500"
        variants={liquidReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Profile Picture */}
        <div className="relative shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-white dark:border-white/20 shadow-2xl relative z-10 transition-colors duration-500">
            <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Harsh Pratap Singh" className="w-full h-full object-cover" />
          </div>
          {/* Subtle glow behind picture */}
          <div className="absolute inset-0 bg-blue-600 dark:bg-white blur-3xl opacity-30 dark:opacity-20 rounded-full scale-125 z-0 transition-opacity duration-500"></div>
        </div>

        {/* Details & Education */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter mb-6 transition-colors duration-500">About Me</h2>
          <p className="text-lg md:text-xl text-slate-900 dark:text-gray-200 font-medium opacity-95 mb-10 leading-relaxed max-w-2xl transition-colors duration-500">
            I am a highly motivated Artificial Intelligence and Data Science student with strong foundations in mathematics, data analytics, and AI systems. I have experience building real-world projects, participating in national-level hackathons, and applying AI to data-driven decision making.
          </p>

          <div className="inline-flex items-start gap-5 bg-white/80 dark:bg-black/40 border border-white/60 dark:border-white/20 p-6 rounded-3xl shadow-sm transition-colors duration-500">
            <div className="p-3 bg-white dark:bg-white/10 rounded-xl shadow-sm border border-transparent dark:border-white/10 transition-colors duration-500">
              <GraduationCap className="text-slate-900 dark:text-white transition-colors duration-500" size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-slate-900 dark:text-white text-lg transition-colors duration-500">Indian Institute of Technology (IIT) Jodhpur</h3>
              <p className="text-slate-900 dark:text-gray-400 opacity-90 text-sm transition-colors duration-500">Bachelors in Artificial Intelligence & Data Science</p>
              <p className="text-slate-900 dark:text-gray-500 font-medium text-sm mt-1 transition-colors duration-500">2024 – 2028 (Expected)</p>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default About;
