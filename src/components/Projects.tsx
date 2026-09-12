import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FolderOpen, ExternalLink, Loader2 } from 'lucide-react';
import { GithubIcon } from './icons';
import { liquidReveal } from './About';

const highlightedProjects = [
 {
 title: "Sahayak AI (EdTech)",
 description: "3rd Rank Winner at EdTech OnHack (UP). Built an AI-powered educational assistant to support students and educators, improving learning accessibility and guidance.",
 tags: ["AI", "Data-driven", "Hackathon"],
 link: "#",
 icon: <ExternalLink size={20} />
 },
 {
 title: "Problem Reporting Tool",
 description: "Developed a web-based system for reporting, tracking, and managing issues efficiently with structured categorization and prioritization.",
 tags: ["Web Dev", "Management"],
 link: "https://github.com/harshsingh07i/Problem-reporting-tool",
 icon: <GithubIcon size={20} />
 },
 {
 title: "AI FlashCard – FlashGenius",
 description: "Built an AI-powered flashcard application to improve learning and revision efficiency. Enabled dynamic flashcard generation.",
 tags: ["AI", "EdTech"],
 link: "https://github.com/harshsingh07i/AI-FlashCard-FlashGenius",
 icon: <GithubIcon size={20} />
 },
 {
 title: "GDP Dashboard",
 description: "Created an interactive dashboard to visualize GDP trends across regions and time periods using data visualization techniques.",
 tags: ["Data Viz", "Dashboard"],
 link: "https://github.com/harshsingh07i/gdp-dashboard",
 icon: <GithubIcon size={20} />
 }
];

interface Repo {
 id: number;
 name: string;
 description: string;
 html_url: string;
 language: string;
 updated_at: string;
}

const Projects: React.FC = () => {
 const [repos, setRepos] = useState<Repo[]>([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
 fetch('https://api.github.com/users/harshsingh07i/repos?sort=updated&per_page=100')
 .then(res => res.json())
 .then(data => {
 if (Array.isArray(data)) {
 // Filter out repos that are already in highlighted to avoid duplication
 const highlightedUrls = highlightedProjects.map(p => p.link.toLowerCase());
 const newRepos = data.filter(repo => !highlightedUrls.includes(repo.html_url.toLowerCase()));
 setRepos(newRepos);
 }
 setLoading(false);
 })
 .catch(err => {
 console.error("Failed to fetch repos", err);
 setLoading(false);
 });
 }, []);

 return (
 <section id="projects" className="w-full max-w-[1400px] mx-auto px-6 py-10">
 <motion.div 
 className="flex flex-col items-center mb-16"
 variants={liquidReveal}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-50px" }}
 >
 <h2 className="text-4xl font-bold text-amber-200 tracking-tighter transition-colors duration-500">Projects & Hackathons</h2>
 <div className="h-1.5 w-16 bg-amber-800 rounded-full mt-6 opacity-80 transition-colors duration-500"></div>
 </motion.div>

 {/* Highlighted Projects */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
 {highlightedProjects.map((project, index) => (
 <motion.div 
 key={index}
 className="flex flex-col h-full bg-[#0f172a]/70 backdrop-blur-2xl border border-white/40 border-amber-900/30 p-10 rounded-[2.5rem] shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
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
 <div className="flex justify-between items-center mb-8">
 <div className="w-14 h-14 bg-[#0f172a]/90 rounded-xl shadow-sm flex items-center justify-center border border-amber-900/30 transition-colors duration-500">
 <FolderOpen className="text-amber-200 transition-colors duration-500" size={26} />
 </div>
 <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-amber-200 opacity-70 hover:opacity-100 hover:scale-110 transition-all p-2">
 {project.icon}
 </a>
 </div>
 
 <h3 className="text-2xl font-bold text-amber-200 mb-4 tracking-tight transition-colors duration-500">{project.title}</h3>
 <p className="text-lg text-amber-200/80 opacity-95 mb-8 flex-grow leading-relaxed font-medium transition-colors duration-500">{project.description}</p>
 
 <div className="flex flex-wrap gap-2.5 mt-auto">
 {project.tags.map((tag, i) => (
 <span key={i} className="text-sm font-semibold bg-[#0f172a]/90 text-amber-200/90 border border-amber-900/30 px-4 py-1.5 rounded-xl shadow-sm transition-colors duration-500">
 {tag}
 </span>
 ))}
 </div>
 </motion.div>
 ))}
 </div>

 {/* Dynamic GitHub Repos */}
 <motion.div 
 className="flex flex-col items-center mb-10"
 variants={liquidReveal}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-50px" }}
 >
 <h3 className="text-3xl font-bold text-amber-200 tracking-tighter transition-colors duration-500 flex items-center gap-4">
 <GithubIcon size={28} /> Other GitHub Repositories
 </h3>
 </motion.div>

 {loading ? (
 <div className="flex justify-center items-center py-12">
 <Loader2 className="animate-spin text-amber-200" size={40} />
 </div>
 ) : repos.length > 0 ? (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {repos.map((repo, index) => (
 <motion.div 
 key={repo.id}
 className="flex flex-col h-full bg-white/60 /5 backdrop-blur-xl border border-white/40 dark:border-white/10 p-8 rounded-[2rem] shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500"
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
 <div className="flex justify-between items-start mb-5">
 <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-amber-200 hover:underline transition-colors duration-500 break-all tracking-tight">
 {repo.name}
 </a>
 <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-amber-200 opacity-60 hover:opacity-100 hover:scale-110 transition-all flex-shrink-0 ml-3">
 <ExternalLink size={20} />
 </a>
 </div>
 
 <p className="text-amber-200/80 font-medium opacity-90 mb-8 flex-grow text-base leading-relaxed transition-colors duration-500">
 {repo.description || "No description provided."}
 </p>
 
 <div className="flex justify-between items-center mt-auto pt-5 border-t border-white/40 dark:border-white/10 transition-colors duration-500">
 <span className="text-sm font-bold text-amber-200 text-amber-200/60 opacity-90 transition-colors duration-500 tracking-widest uppercase">
 {repo.language || "Code"}
 </span>
 </div>
 </motion.div>
 ))}
 </div>
 ) : null}
 </section>
 );
};

export default Projects;
