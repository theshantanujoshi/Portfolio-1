import React from 'react';
import { motion } from 'motion/react';
import { Code, Database, Terminal, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: "Core Stack",
    icon: <Terminal size={24} strokeWidth={1.5} />,
    skills: ["Python", "C++", "C", "JavaScript", "TypeScript"]
  },
  {
    title: "AI & ML",
    icon: <Cpu size={24} strokeWidth={1.5} />,
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "NLP"]
  },
  {
    title: "Architecture",
    icon: <Code size={24} strokeWidth={1.5} />,
    skills: ["React", "Node.js", "Express", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Data & Ops",
    icon: <Database size={24} strokeWidth={1.5} />,
    skills: ["SQL", "MongoDB", "Git", "Docker", "AWS"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full relative py-32 border-t border-black/10 dark:border-white/10">
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
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-black/40 dark:text-white/40 mb-4 block">
                [ 04 — ARSENAL ]
              </span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black dark:text-white uppercase mb-4 leading-none">
                Technical<br/>Arsenal
              </h2>
            </div>
          </div>

          {/* Right: Content Grid */}
          <div className="md:col-span-8 flex flex-col gap-12">
            <p className="text-3xl md:text-5xl font-medium text-black dark:text-white/90 leading-[1.1] tracking-tighter text-balance">
              A comprehensive stack spanning low-level systems programming to high-level machine learning interfaces.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {skillCategories.map((category, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 dark:bg-black/40 border border-black/10 dark:border-white/10 p-8 rounded-[2rem] flex flex-col h-full shadow-sm"
                >
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-14 h-14 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center text-black dark:text-white shrink-0">
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-black text-black dark:text-white tracking-tight uppercase leading-none">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-5 py-2.5 bg-black dark:bg-white/90 text-white dark:text-black hover:scale-105 active:scale-95 transition-transform duration-300 rounded-full text-sm font-bold tracking-widest uppercase cursor-default shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
