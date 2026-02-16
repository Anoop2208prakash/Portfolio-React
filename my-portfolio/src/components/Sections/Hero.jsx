import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Window from '@/components/Terminal/Window';
import BootBar from '@/components/Terminal/BootBar';
import CommandText from '@/components/Terminal/CommandText';
import { Github, ExternalLink, Terminal } from 'lucide-react';

const Hero = () => {
  const [isBooting, setIsBooting] = useState(false);

  // Animation variants for staggered text entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center py-12 relative z-10">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid lg:grid-cols-2 gap-12 items-center"
      >
        
        {/* Left Side: Text Content */}
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="inline-block px-3 py-1 border border-terminal-accent/30 bg-terminal-accent/10 rounded text-terminal-accent text-xs font-mono uppercase tracking-widest">
            <span className="animate-pulse mr-2">●</span> SYSTEM.KERNEL :: v2.5.0 ONLINE
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terminal-accent via-orange-400 to-yellow-500">
                Anoop Prakash
              </span>
            </h1>
            
            {/* Typing effect for your specific roles */}
            <div className="space-y-2 min-h-[60px]">
              <CommandText 
                text="<Architect /> Engineering Beyond Boundaries." 
                className="text-terminal-accent text-lg font-mono"
                delay={0.8}
              />
              <CommandText 
                text="Final year BCA student & Full-Stack Developer specializing in high-performance web applications." 
                className="text-terminal-secondary text-base font-mono opacity-80"
                delay={2.5}
              />
            </div>
          </motion.div>

          {/* Action Area */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsBooting(true)}
                className="group flex items-center gap-2 bg-terminal-accent hover:bg-orange-600 text-black px-6 py-3 rounded font-bold transition-all transform active:scale-95"
              >
                Initialize OS <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 border border-terminal-border hover:bg-terminal-border px-6 py-3 rounded font-mono text-sm transition-all text-gray-400 hover:text-white">
                <Github size={18} /> Check out GitHub
              </button>
            </div>

            {/* BootBar appears here when triggered */}
            <div className="min-h-[80px]">
               {isBooting ? <BootBar /> : (
                 <p className="text-[10px] text-[#2d2d2d] font-mono italic">
                   // Click "Initialize OS" to start system sequence
                 </p>
               )}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex gap-4 text-[10px] font-mono text-terminal-secondary pt-4 uppercase tracking-[0.2em]">
            {["React", "Next.js", "Node.js", "PostgreSQL", "Java"].map((tech) => (
              <span key={tech} className="hover:text-terminal-accent transition-colors cursor-default">{tech}</span>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Mock Code Editor */}
        <motion.div 
          variants={itemVariants}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-terminal-accent/20 to-blue-600/20 rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <Window title="portfolio.tsx" className="relative backdrop-blur-sm border-terminal-border/50">
            <div className="space-y-1 text-sm md:text-base">
              <p className="text-gray-500 italic mb-4">// Welcome to my workspace</p>
              <p className="text-purple-400 font-semibold">import <span className="text-blue-400">{`{ Developer }`}</span> from <span className="text-green-400">'./universe'</span>;</p>
              <br />
              <p className="text-purple-400">const <span className="text-yellow-300">Portfolio</span> = () =&gt; {'{'}</p>
              <div className="pl-6 border-l border-terminal-border ml-1 my-2">
                <p className="text-purple-400">return (</p>
                <div className="pl-6">
                  <p className="text-blue-300">&lt;Developer</p>
                  <div className="pl-6 space-y-1">
                    <p className="text-gray-300">name=<span className="text-green-400">"Anoop Prakash"</span></p>
                    <p className="text-gray-300">role=<span className="text-green-400">"Full Stack Engineer"</span></p>
                    <p className="text-gray-300">passion=<span className="text-green-400">"Scalable Systems"</span></p>
                  </div>
                  <p className="text-blue-300">/&gt;</p>
                </div>
                <p className="text-purple-400">);</p>
              </div>
              <p className="text-purple-400">{'};'}</p>
              
              <div className="pt-6 flex items-center gap-2 text-terminal-secondary text-xs">
                <Terminal size={12} />
                <span className="animate-pulse">_ while(alive) {`{ code() }`}</span>
              </div>
            </div>
          </Window>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;