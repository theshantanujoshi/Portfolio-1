import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

const Navbar: React.FC = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isVisible, setIsVisible] = useState(true);
 const { scrollY } = useScroll();

 useMotionValueEvent(scrollY, "change", (latest) => {
 const previous = scrollY.getPrevious() ?? 0;
 if (latest > previous && latest > 150) {
 setIsVisible(false);
 } else {
 setIsVisible(true);
 }
 });

 return (
 <motion.nav 
 className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 pt-6"
 initial={{ y: -50, opacity: 0 }}
 animate={{ 
 y: isVisible ? 0 : -100,
 opacity: isVisible ? 1 : 0 
 }}
 transition={{ duration: 0.3, ease: "easeInOut" }}
 >
 <div className="max-w-[1400px] mx-auto bg-[#0f172a]/70 backdrop-blur-2xl border border-amber-900/30 rounded-[2rem] px-8 py-4 flex items-center justify-between shadow-md transition-colors duration-500">
 
 {/* Left: Logo */}
 <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
 <img src={`${import.meta.env.BASE_URL}h_logo.png`} alt="Logo" className="w-9 h-9 object-contain" />
 </a>

 {/* Center: Links (Hidden on mobile) */}
 <div className="hidden md:flex items-center gap-10 text-sm font-bold tracking-tight">
 {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
 <a 
 key={item} 
 href={`#${item.toLowerCase()}`}
 className="text-amber-200/80 hover:text-amber-100 transition-colors"
 >
 {item}
 </a>
 ))}
 </div>

 {/* Right: Actions */}
 <div className="flex items-center gap-4">
 <a 
 href={`${import.meta.env.BASE_URL}resume.pdf`} 
 download="HARSH_PRATAP_SINGH_Resume.pdf"
 className="hidden sm:flex items-center gap-2 bg-amber-800 text-amber-100 px-6 py-3 rounded-2xl text-sm font-bold hover:bg-amber-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
 >
 <Download size={18} />
 <span>Resume</span>
 </a>

 {/* Mobile Menu Toggle */}
 <button 
 onClick={() => setIsMenuOpen(!isMenuOpen)}
 className="md:hidden p-2 rounded-xl bg-[#0f172a]/70 text-amber-200/80 hover:text-amber-100 transition-colors shadow-sm"
 aria-label="Toggle menu"
 >
 {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
 </button>
 </div>

 </div>

 {/* Mobile Menu Dropdown */}
 {isMenuOpen && (
 <motion.div 
 initial={{ opacity: 0, y: -10 }}
 animate={{ opacity: 1, y: 0 }}
 className="md:hidden mt-4 mx-auto max-w-[1400px] bg-[#0f172a]/95 backdrop-blur-xl border border-amber-900/30 rounded-2xl p-4 shadow-lg flex flex-col gap-4"
 >
 {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
 <a 
 key={item} 
 href={`#${item.toLowerCase()}`}
 onClick={() => setIsMenuOpen(false)}
 className="text-amber-200/80 hover:text-amber-100 font-medium px-4 py-2 rounded-lg hover:bg-[#1e293b]/50 transition-colors"
 >
 {item}
 </a>
 ))}
 <a 
 href={`${import.meta.env.BASE_URL}resume.pdf`} 
 download="HARSH_PRATAP_SINGH_Resume.pdf"
 onClick={() => setIsMenuOpen(false)}
 className="sm:hidden flex items-center justify-center gap-2 bg-amber-800 text-amber-100 px-5 py-3 rounded-xl text-sm font-medium mt-2"
 >
 <Download size={16} />
 <span>Download Resume</span>
 </a>
 </motion.div>
 )}
 </motion.nav>
 );
};

export default Navbar;
