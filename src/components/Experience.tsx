import React from 'react';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Open Source Contributor",
    company: "GitHub / Various",
    duration: "2024 - Present",
    description: [
      "Contributing to machine learning pipelines and core libraries.",
      "Optimizing data preprocessing scripts for large-scale datasets.",
      "Collaborating with global maintainers on issue resolution."
    ]
  },
  {
    role: "Student Researcher",
    company: "IIT Jodhpur",
    duration: "2024 - Present",
    description: [
      "Exploring novel neural network architectures for resource-constrained edge devices.",
      "Participating in AI alignment and safety discussions.",
      "Building internal tools for data scraping and analysis."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel rounded-[3rem] p-10 md:p-20 overflow-hidden relative"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Heading */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black uppercase mb-4">
              Operational<br/>Record
            </h2>
            <div className="h-1 w-12 bg-black"></div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-6 group relative">
                
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-[-3rem] w-[1px] bg-black/10"></div>
                )}

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/50 border border-white flex items-center justify-center shrink-0 shadow-sm z-10">
                    <Briefcase size={20} className="text-black" />
                  </div>
                  
                  <div className="flex flex-col w-full">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-black text-black tracking-tight">{exp.role}</h3>
                        <p className="text-lg font-bold text-black/50 tracking-tight mt-1">{exp.company}</p>
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase bg-black text-white px-4 py-2 rounded-full whitespace-nowrap w-fit">
                        {exp.duration}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-3 mt-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span>
                          <span className="text-lg font-medium text-black/80 leading-relaxed text-balance">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
