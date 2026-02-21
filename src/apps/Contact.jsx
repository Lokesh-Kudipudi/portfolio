import { useState } from 'react';
import { Mail, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const LeetCodeIcon = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.956-.207a1.384 1.384 0 0 0-.207-1.953l-3.5-2.831c-2.227-1.802-5.404-1.536-7.519.745L4.1 11.67c-.206.22-.387.46-.539.718l4.606-4.931 5.406-5.788a1.372 1.372 0 0 0-.088-1.955 1.375 1.375 0 0 0-1.956.095z" />
    <path d="M22.84 8.79l-4.25-4.172c-.542-.534-1.419-.526-1.953.018a1.388 1.388 0 0 0-.018 1.955l4.25 4.17c.543.535 1.42.527 1.954-.017a1.388 1.388 0 0 0 .017-1.954zM22.253 14.12l-6.848 6.71c-.543.534-1.42.527-1.954-.017a1.388 1.388 0 0 0 .017-1.954l6.848-6.711c.543-.534 1.42-.527 1.954.017a1.388 1.388 0 0 0-.017 1.955z" />
  </svg>
);

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-4 md:p-6 h-full w-full flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-black/20 pointer-events-none" />
      
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 z-10">
        
        {/* Photo Container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-[220px] h-[280px] md:w-[260px] md:h-[320px] shrink-0 cursor-pointer"
          style={{ perspective: "1000px" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="w-full h-full relative"
            animate={{ rotateY: isHovered ? 180 : 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front Photo - Professional */}
            <div 
              className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1a1a2e]"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img 
                src="/me.JPG" 
                alt="Lokesh Professional" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-end">
                <div>
                  <h3 className="text-white font-medium text-base leading-tight">Lokesh Kudipudi</h3>
                  <p className="text-white/70 text-xs mt-1 flex items-center gap-1.5">
                    <Terminal size={12} /> Software Engineer
                  </p>
                </div>
              </div>
            </div>
            
            {/* Back Photo - Casual */}
            <div 
              className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1a1a2e]"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <img 
                src="/me-casual.jpg" 
                alt="Lokesh Casual" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-end">
                <div>
                  <h3 className="text-white font-medium text-base leading-tight">Beyond Code</h3>
                  <p className="text-white/70 text-xs mt-1">Always up for an adventure!</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-purple-600/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -z-10 -top-4 -left-4 w-32 h-32 bg-cyan-600/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col flex-1 max-w-lg w-full"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">amazing</span>.
          </h2>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 backdrop-blur-md shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <p className="text-sm md:text-base text-gray-300 mb-5 leading-relaxed relative z-10 font-light">
              Hi! I'm Lokesh. Whether you have an exciting project, a challenging problem, or just want to say a warm hello, my inbox is always open. Let's connect!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <a 
                href="mailto:lokeshkudipudi@gmail.com" 
                onPointerDownCapture={(e) => e.stopPropagation()}
                className="relative z-20 flex flex-1 items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/email cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover/email:bg-indigo-500 group-hover/email:text-white transition-colors shrink-0">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-400">Email Me</p>
                  <p className="text-sm text-white font-medium truncate">lokeshkudipudi2006@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wider">Find me on</p>
              <div className="flex gap-3">
                <SocialLink 
                  href="https://github.com/Lokesh-Kudipudi" 
                  icon={<FaGithub size={20} />} 
                  label="GitHub"
                  hoverColor="hover:bg-white hover:text-black"
                />
                <SocialLink 
                  href="https://www.linkedin.com/in/lokesh-kudipudi/" 
                  icon={<FaLinkedin size={20} />} 
                  label="LinkedIn"
                  hoverColor="hover:bg-[#0A66C2] hover:text-white"
                />
                <SocialLink 
                  href="https://leetcode.com/u/Lokesh-Kudipudi/" 
                  icon={<SiLeetcode size={20} />} 
                  label="LeetCode"
                  hoverColor="hover:bg-[#FFA116] hover:text-white"
                />
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon, label, hoverColor }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    aria-label={label}
    onPointerDownCapture={(e) => e.stopPropagation()}
    className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:shadow-lg relative z-20 cursor-pointer ${hoverColor}`}
  >
    {icon}
  </a>
);

export default Contact;
