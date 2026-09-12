import React from 'react';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { liquidReveal } from './About';

const experiences = [
  {
    role: "Data Analyst Intern",
    company: "Tata Group (Tata iQ)",
    date: "July 2025",
    duties: [
      "Conducted AI-powered exploratory data analysis on financial services datasets.",
      "Used GenAI tools to assess data quality and identify delinquency risk indicators.",
      "Proposed a no-code predictive modeling framework for high-risk customer detection.",
      "Designed an ethical and scalable AI-driven collections strategy aligned with regulations."
    ]
  },
  {
    role: "Data Science Intern",
    company: "British Airways",
    date: "July 2025",
    duties: [
      "Analyzed customer review data to extract insights into purchasing behavior.",
      "Built predictive models to identify factors influencing customer decisions.",
      "Aligned analytical insights with business goals and customer satisfaction."
    ]
  },
  {
    role: "Cybersecurity Analyst Intern",
    company: "TCS",
    date: "July 2025",
    duties: [
      "Implemented identity and access management strategies for secure user lifecycle control.",
      "Applied enterprise cybersecurity best practices aligned with business needs.",
      "Prepared clear documentation and presentations for non-technical stakeholders."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full max-w-[1400px] mx-auto px-6 py-10">
      <motion.div 
        className="flex flex-col items-center mb-16"
        variants={liquidReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2 className="text-4xl font-bold text-amber-200 text-amber-100 tracking-tighter transition-colors duration-500">Experience</h2>
        <div className="h-1.5 w-16 bg-amber-900 dark:bg-white rounded-full mt-6 opacity-80 dark:opacity-60 transition-colors duration-500"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-10">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="relative flex items-start gap-8 bg-[#0f172a]/70 backdrop-blur-2xl border border-white/40 dark:border-white/20 p-8 md:p-12 rounded-[2.5rem] shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            variants={{
              hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: 'blur(0px)',
                transition: { duration: 1, type: "spring" as const, bounce: 0.3, delay: index * 0.15 } 
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="hidden sm:flex shrink-0 w-16 h-16 bg-[#0f172a]/90 rounded-full shadow-sm items-center justify-center border border-white/60 dark:border-white/20 transition-colors duration-500">
              <Briefcase size={24} className="text-amber-200 text-amber-100 transition-colors duration-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-amber-200 text-amber-100 tracking-tight transition-colors duration-500">{exp.role}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2 mb-6">
                <span className="text-lg text-amber-200 text-amber-100/90 font-semibold opacity-95 transition-colors duration-500">@ {exp.company}</span>
                <span className="text-sm font-bold tracking-wider uppercase text-amber-200 text-amber-200/70 opacity-90 bg-[#0f172a]/90 px-4 py-1.5 rounded-full border border-white/60 dark:border-white/20 mt-3 sm:mt-0 inline-block w-fit transition-colors duration-500">
                  {exp.date}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-3 text-lg font-medium text-amber-200 text-amber-200/70 opacity-95 transition-colors duration-500">
                {exp.duties.map((duty, i) => (
                  <li key={i} className="leading-relaxed">{duty}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
