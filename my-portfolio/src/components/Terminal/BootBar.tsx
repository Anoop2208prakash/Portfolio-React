import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BootBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md bg-terminal-bg border border-terminal-border p-4 rounded-lg font-mono">
      <div className="flex justify-between text-[10px] uppercase tracking-widest mb-2">
        <span className="text-gray-300">Initialise OS</span>
        <span className="text-terminal-accent">{Math.round(progress)}%</span>
      </div>
      
      {/* Progress Bar Track */}
      <div className="w-full h-1.5 bg-terminal-border rounded-full overflow-hidden">
        {/* Animated Progress Filler */}
        <motion.div 
          className="h-full bg-terminal-accent"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>

      <div className="mt-3 text-[9px] text-terminal-secondary flex items-center gap-2">
        <span className="animate-pulse">&gt;</span>
        <span>sudo boot_gui --verbose</span>
        {progress === 100 ? (
          <span className="text-green-500 ml-auto font-bold">READY</span>
        ) : (
          <span className="ml-auto animate-pulse">LOADING...</span>
        )}
      </div>
    </div>
  );
};

export default BootBar;