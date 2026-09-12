import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight, Code2, Terminal } from 'lucide-react';
import Tilt from './Tilt';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
}

const TerminalLoader = () => {
  const [text, setText] = useState('');
  const fullText = "INITIALIZING SECURE CONNECTION...\n> HANDSHAKE ESTABLISHED\n> FETCHING DEPLOYED REPOSITORIES...\n> PARSING ARCHITECTURE...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-24 gap-6">
      <div className="w-16 h-16 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center relative">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute inset-0 rounded-full border-t-2 border-black dark:border-white opacity-50"
        />
        <Terminal className="text-black dark:text-white" size={24} />
      </div>
      <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl min-w-[300px] h-[100px] flex items-start justify-start border border-black/5 dark:border-white/5">
        <p className="text-xs font-mono tracking-widest text-black/70 dark:text-white/70 whitespace-pre-line text-left">
          {text}
          <motion.span 
            animate={{ opacity: [1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-3 bg-black dark:bg-white ml-1 align-middle"
          />
        </p>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show off the terminal loader
    const timer = setTimeout(() => {
      fetch('https://api.github.com/users/harshsingh07i/repos?sort=updated&per_page=4')
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) setRepos(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="w-full relative py-32 border-t border-black/10 dark:border-white/10">
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
                [ 03 — SYSTEMS ]
              </span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black dark:text-white uppercase mb-4 leading-none">
                Deployed<br/>Systems
              </h2>
            </div>
          </div>

          {/* Right: Content Grid */}
          <div className="md:col-span-8 flex flex-col gap-12">
            <p className="text-3xl md:text-5xl font-medium text-black dark:text-white/90 leading-[1.1] tracking-tighter text-balance">
              A collection of architectural experiments, data pipelines, and machine learning models pulled directly from production telemetry.
            </p>

            {loading ? (
              <TerminalLoader />
            ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 [perspective:1000px]">
            {repos.map((repo, i) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="h-full"
              >
                <Tilt rotationIntensity={8} className="h-full block">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ transformStyle: "preserve-3d" }}
                    className="group relative flex flex-col justify-between bg-white/40 dark:bg-black/40 border border-white dark:border-white/10 p-8 md:p-12 rounded-[2rem] hover:bg-black dark:hover:bg-white transition-all duration-500 min-h-[350px] h-full shadow-sm hover:shadow-2xl overflow-hidden"
                  >
                    {/* Hover Glint Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/5 to-transparent dark:via-black/5 -translate-x-full group-hover:translate-x-full duration-1000 ease-in-out" />
                    
                    <div style={{ transform: "translateZ(40px)" }} className="absolute top-8 right-8 w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center group-hover:bg-white dark:group-hover:bg-black transition-colors duration-500 shadow-md">
                      <ArrowUpRight size={24} className="text-white dark:text-black group-hover:text-black dark:group-hover:text-white transition-colors duration-500" />
                    </div>

                    <div style={{ transform: "translateZ(30px)" }}>
                      <Code2 size={32} className="text-black dark:text-white/70 group-hover:text-white dark:group-hover:text-black transition-colors duration-500 mb-8" />
                      <h3 className="text-3xl font-black text-black dark:text-white tracking-tight mb-4 group-hover:text-white dark:group-hover:text-black transition-colors duration-500 break-words">
                        {repo.name}
                      </h3>
                      <p className="text-lg font-medium text-black dark:text-white/70 group-hover:text-white dark:group-hover:text-black transition-colors duration-500 line-clamp-3">
                        {repo.description || "Experimental repository without structural description."}
                      </p>
                    </div>

                    <div style={{ transform: "translateZ(20px)" }} className="mt-12 flex items-center justify-between border-t border-black/20 dark:border-white/10 group-hover:border-white/20 dark:group-hover:border-black/20 pt-6 transition-colors duration-500">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-black dark:bg-white group-hover:bg-white dark:group-hover:bg-black transition-colors duration-500 animate-pulse" />
                        <span className="text-xs font-bold tracking-widest uppercase text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500">
                          {repo.language || "Mixed"}
                        </span>
                      </div>
                      <ExternalLink size={20} className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500" />
                    </div>
                  </a>
                </Tilt>
              </motion.div>
            ))}
          </div>
        )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
