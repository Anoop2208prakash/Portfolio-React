import React from 'react';
import { Terminal } from 'lucide-react';

const Window = ({ title, children, className = "" }) => {
  return (
    <div className={`bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg overflow-hidden shadow-2xl ${className}`}>
      {/* Window Header */}
      <div className="bg-[#1a1a1a] px-4 py-2.5 flex justify-between items-center border-b border-[#1a1a1a]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/40" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
          <div className="w-3 h-3 rounded-full bg-green-500/40" />
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-[#4d4d4d] font-mono flex items-center gap-2">
          <Terminal size={12} /> {title}
        </div>
        <div className="w-12" /> {/* Spacer for centering */}
      </div>
      
      {/* Window Content */}
      <div className="p-5 md:p-8 font-mono text-sm leading-relaxed text-gray-300">
        {children}
      </div>
    </div>
  );
};

export default Window;