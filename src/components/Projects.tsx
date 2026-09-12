import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight, Loader2, Code2 } from 'lucide-react';
import Tilt from './Tilt';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  return (
    <section id="projects" className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel rounded-[3rem] p-10 md:p-20 overflow-hidden relative"
      >
        
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-16">
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black uppercase mb-4">
              Deployed<br/>Systems
            </h2>
            <div className="h-1 w-12 bg-black"></div>
          </div>
          <div className="w-full lg:w-2/3">
            <p className="text-2xl md:text-3xl font-medium text-black/90 leading-tight tracking-tight">
              A collection of architectural experiments, data pipelines, and machine learning models pulled directly from production.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="animate-spin text-black" size={40} />
            <p className="text-sm font-bold tracking-widest uppercase text-black/50">Fetching Database</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {repos.map((repo, i) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Tilt rotationIntensity={10}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col justify-between bg-white/40 border border-white p-8 md:p-12 rounded-[2rem] hover:bg-black transition-colors duration-500 min-h-[300px] h-full"
                  >
                    <div className="absolute top-8 right-8 w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                      <ArrowUpRight size={24} className="text-white group-hover:text-black transition-colors duration-500" />
                    </div>

                    <div style={{ transform: "translateZ(30px)" }}>
                      <Code2 size={32} className="text-black/30 group-hover:text-white/30 transition-colors duration-500 mb-8" />
                      <h3 className="text-3xl font-black text-black tracking-tight mb-4 group-hover:text-white transition-colors duration-500 break-words">
                        {repo.name}
                      </h3>
                      <p className="text-lg font-medium text-black/70 group-hover:text-white/70 transition-colors duration-500 line-clamp-3">
                        {repo.description || "Experimental repository without structural description."}
                      </p>
                    </div>

                    <div style={{ transform: "translateZ(20px)" }} className="mt-12 flex items-center justify-between border-t border-black/10 group-hover:border-white/10 pt-6 transition-colors duration-500">
                      <span className="text-xs font-bold tracking-widest uppercase text-black group-hover:text-white transition-colors duration-500">
                        {repo.language || "Mixed"}
                      </span>
                      <ExternalLink size={20} className="text-black group-hover:text-white transition-colors duration-500" />
                    </div>
                  </a>
                </Tilt>
              </motion.div>
            ))}
          </div>
        )}

      </motion.div>
    </section>
  );
};

export default Projects;
