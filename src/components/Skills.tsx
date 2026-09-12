import React from 'react';
import { motion } from 'motion/react';
import { Code, Database, Terminal, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: "Core Stack",
    icon: <Terminal size={24} />,
    skills: ["Python", "C++", "C", "JavaScript", "TypeScript"]
  },
  {
    title: "AI & ML",
    icon: <Cpu size={24} />,
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "NLP"]
  },
  {
    title: "Architecture",
    icon: <Code size={24} />,
    skills: ["React", "Node.js", "Express", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Data & Ops",
    icon: <Database size={24} />,
    skills: ["SQL", "MongoDB", "Git", "Docker", "AWS"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel rounded-[3rem] p-10 md:p-20 overflow-hidden relative"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-16">
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black dark:text-white uppercase mb-4">
              Technical<br/>Arsenal
            </h2>
            <div className="h-1 w-12 bg-black dark:bg-white"></div>
          </div>
          <div className="w-full lg:w-2/3">
            <p className="text-2xl md:text-3xl font-medium text-black dark:text-white/70 leading-tight tracking-tight">
              A comprehensive stack spanning low-level systems programming to high-level machine learning interfaces.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/40 dark:bg-black/40 border border-white dark:border-white/10 p-8 rounded-[2rem] flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black shrink-0">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-black text-black dark:text-white tracking-tight">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-auto">
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

      </motion.div>
    </section>
  );
};

export default Skills;
