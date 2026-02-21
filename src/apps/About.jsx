import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import skills from '../config/skills';

const About = () => {

  return (
    <div className="p-6 md:p-8 h-full w-full flex flex-col items-center overflow-y-auto overflow-x-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-black/20 pointer-events-none" />
      
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-8 z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md shadow-xl"
        >
          <div className="relative shrink-0">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl relative z-10">
              <img 
                src="/me.JPG" 
                alt="Lokesh Kudipudi" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl animate-pulse -z-10"></div>
          </div>
          
          <div className="text-center md:text-left flex flex-col justify-center h-full pt-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
              Lokesh Kudipudi
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-2 text-indigo-300 font-medium bg-indigo-500/10 w-fit mx-auto md:mx-0 px-4 py-1.5 rounded-full border border-indigo-500/20">
              <Terminal size={16} />
              <span>Full Stack Development | Machine Learning</span>
            </div>
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md shadow-xl"
        >
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
            About Me
          </h2>
          <div className="text-gray-300 leading-relaxed font-light space-y-4">
            <p>
              Hello! I'm a passionate developer who loves building beautiful, scalable, and functional web applications. I enjoy taking complex problems and turning them into simple and beautiful interface designs.
            </p>
            <p>
              When I'm not coding, you can find me exploring new tech stacks, optimizing architectures, or hunting for the perfect dark mode color palette. I believe in writing clean code and creating intuitive user experiences.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2 text-white font-medium">
                {skill.name}
              </div>
              <p className="text-sm text-gray-400 font-light">{skill.tools}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default About;
