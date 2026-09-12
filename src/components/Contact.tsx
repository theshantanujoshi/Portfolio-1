import React from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { liquidReveal } from './About';
import SignatureAnimation from './SignatureAnimation';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full max-w-[1400px] mx-auto px-6 py-10 pb-32">
      <motion.div 
        className="flex flex-col items-center bg-[#0f172a]/70 backdrop-blur-2xl border border-white/40 dark:border-white/20 p-12 md:p-20 rounded-[2.5rem] shadow-lg max-w-4xl mx-auto text-center transition-colors duration-500"
        variants={liquidReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-amber-500 text-amber-100 tracking-tighter mb-6 transition-colors duration-500">Get In Touch</h2>
        <p className="text-amber-500 text-blue-200 opacity-95 mb-12 max-w-2xl leading-relaxed text-lg md:text-xl font-medium transition-colors duration-500">
          Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 mb-14">
          <div className="flex items-center gap-4 bg-[#0f172a]/90 px-6 py-5 rounded-3xl border border-white/60 dark:border-white/20 shadow-sm transition-colors duration-500 hover:shadow-md">
            <Mail className="text-amber-500 text-amber-100" size={24} />
            <div className="text-left">
              <p className="text-xs font-bold text-amber-500 text-blue-400 uppercase tracking-widest opacity-80 mb-1">Personal</p>
              <a href="mailto:wharshsingh@gmail.com" className="text-amber-500 text-amber-100 font-semibold hover:text-black dark:hover:text-blue-300 transition-colors">wharshsingh@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#0f172a]/90 px-6 py-5 rounded-3xl border border-white/60 dark:border-white/20 shadow-sm transition-colors duration-500 hover:shadow-md">
            <Mail className="text-amber-500 text-amber-100" size={24} />
            <div className="text-left">
              <p className="text-xs font-bold text-amber-500 text-blue-400 uppercase tracking-widest opacity-80 mb-1">College</p>
              <a href="mailto:b24bs1154@iitj.ac.in" className="text-amber-500 text-amber-100 font-semibold hover:text-black dark:hover:text-blue-300 transition-colors">b24bs1154@iitj.ac.in</a>
            </div>
          </div>
        </div>

        <a 
          href="mailto:wharshsingh@gmail.com?subject=Hello%20from%20your%20Portfolio!"
          className="inline-flex items-center gap-3 bg-amber-900 dark:bg-white text-amber-100 dark:text-black px-10 py-5 rounded-2xl text-lg font-bold hover:bg-black dark:hover:bg-gray-200 transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
        >
          <Mail size={22} />
          <span>Say Hello</span>
        </a>

        {/* Improved Footer inside contact box for compactness */}
        <div className="mt-16 pt-8 border-t border-[#e5e7eb] dark:border-white/10 w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 transition-colors duration-500">
          {/* Left section */}
          <div className="flex items-center gap-3 md:w-1/3 justify-center md:justify-start">
            <img src={`${import.meta.env.BASE_URL}h_logo.png`} alt="Logo" className="w-6 h-6 object-contain invert dark:invert-0 transition-all duration-500" />
            <p className="text-amber-500 text-blue-400 opacity-80 text-sm font-medium transition-colors duration-500 whitespace-nowrap">
              © 2026. All rights reserved.
            </p>
          </div>
          
          {/* Center section: Signature */}
          <div className="flex justify-center items-center md:w-1/3 overflow-visible">
            <div className="scale-50 md:scale-75 origin-center h-[25px] md:h-[38px] flex justify-center items-center text-black text-amber-100">
              <SignatureAnimation duration={1.2}>Harsh Pratap Singh</SignatureAnimation>
            </div>
          </div>
          
          {/* Right section */}
          <div className="flex items-center gap-5 md:w-1/3 justify-center md:justify-end">
            <a href="https://github.com/harshsingh07i" target="_blank" rel="noopener noreferrer" className="text-amber-500 text-blue-400 opacity-70 hover:opacity-100 dark:hover:text-amber-100 transition-all duration-300 transform hover:scale-110">
              <GithubIcon size={22} />
            </a>
            <a href="https://www.linkedin.com/in/harsh-singh-b89925315/" target="_blank" rel="noopener noreferrer" className="text-amber-500 text-blue-400 opacity-70 hover:opacity-100 hover:text-[#0a66c2] dark:hover:text-[#0a66c2] transition-all duration-300 transform hover:scale-110">
              <LinkedinIcon size={22} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
