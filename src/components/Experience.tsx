import React from 'react';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Open Source Contributor",
    company: "GitHub / Various",
    duration: "2024 — Present",
    description: [
      "Contributing to machine learning pipelines and core libraries.",
      "Optimizing data preprocessing scripts for large-scale datasets.",
      "Collaborating with global maintainers on issue resolution."
    ]
  },
  {
    role: "Student Researcher",
    company: "IIT Jodhpur",
    duration: "2024 — Present",
    description: [
      "Exploring novel neural network architectures for resource-constrained edge devices.",
      "Participating in AI alignment and safety discussions.",
      "Building internal tools for data scraping and analysis."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full relative py-32 border-t border-black/10 dark:border-white/10">
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
                [ 02 — OPS ]
              </span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black dark:text-white uppercase mb-4 leading-none">
                Operational<br/>Record
              </h2>
            </div>
          </div>

          {/* Right: Content Grid */}
          <div className="md:col-span-8 flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative flex flex-col md:flex-row gap-8 items-start pb-12 border-b border-black/10 dark:border-white/10 last:border-0 last:pb-0">
                
                {/* Icon Column */}
                <div className="hidden md:flex w-16 h-16 rounded-full border border-black/20 dark:border-white/20 items-center justify-center bg-black/5 dark:bg-white/5 shrink-0 group-hover:scale-110 group-hover:bg-black group-hover:dark:bg-white transition-all duration-500">
                  <Briefcase size={24} strokeWidth={1} className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500" />
                </div>
                
                {/* Content Column */}
                <div className="flex flex-col w-full">
                  <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-3xl font-black text-black dark:text-white tracking-tight uppercase leading-none">{exp.role}</h3>
                      <p className="text-xl font-bold text-black/60 dark:text-white/60 tracking-tight mt-2">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-black/60 dark:text-white/60 whitespace-nowrap mt-1">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-black/40 dark:bg-white/40 mt-2.5 shrink-0 group-hover:bg-black group-hover:dark:bg-white transition-colors duration-500"></span>
                        <span className="text-lg font-medium text-black/80 dark:text-white/80 leading-relaxed text-balance">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
