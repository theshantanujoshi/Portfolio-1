import React from 'react';
import { motion } from 'motion/react';
import { Code2, Brain, Calculator, ShieldCheck } from 'lucide-react';
import { liquidReveal } from './About';

const skillCategories = [
  {
    title: "Programming & Data",
    icon: <Code2 size={24} />,
    skills: ["Python", "SQL", "EDA", "Data Cleaning", "Predictive Modeling"]
  },
  {
    title: "AI & Analytics",
    icon: <Brain size={24} />,
    skills: ["Generative AI Tools", "Machine Learning", "Business Intelligence"]
  },
  {
    title: "Mathematics",
    icon: <Calculator size={24} />,
    skills: ["Linear Algebra", "Probability & Statistics", "Numerical Optimization"]
  },
  {
    title: "Tools & Security",
    icon: <ShieldCheck size={24} />,
    skills: ["Power BI", "Jupyter", "Cybersecurity", "IAM"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full max-w-[1400px] mx-auto px-6 py-10">
      <motion.div 
        className="flex flex-col items-center mb-16"
        variants={liquidReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2 className="text-4xl font-bold text-amber-500 text-amber-100 tracking-tighter transition-colors duration-500">Technical Skills</h2>
        <div className="h-1.5 w-16 bg-amber-900 dark:bg-white rounded-full mt-6 opacity-80 dark:opacity-60 transition-colors duration-500"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            className="flex flex-col bg-[#0f172a]/70 backdrop-blur-2xl border border-white/40 dark:border-white/20 p-8 rounded-[2rem] shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            variants={{
              hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: 'blur(0px)',
                transition: { duration: 1, type: "spring" as const, bounce: 0.3, delay: index * 0.1 } 
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#0f172a]/90 rounded-xl shadow-sm flex items-center justify-center border border-white/60 dark:border-white/20 text-amber-500 text-amber-100 transition-colors duration-500">
                {category.icon}
              </div>
              <h3 className="font-bold text-amber-500 text-amber-100 text-xl tracking-tight transition-colors duration-500">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, i) => (
                <span key={i} className="text-sm font-semibold bg-[#0f172a]/90 text-amber-500 text-blue-200 border border-white/60 dark:border-white/20 px-4 py-1.5 rounded-xl shadow-sm transition-colors duration-500">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
