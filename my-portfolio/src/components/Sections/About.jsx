import React from 'react';
import Window from '../Terminal/Window';
import { User, Zap, Coffee, Code } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 border-t border-[#1a1a1a]">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-[#ff6b00] text-xl">#</span>
        <h2 className="text-3xl font-bold font-mono uppercase tracking-widest text-gray-100">About.system</h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Profile Identity Card */}
        <div className="lg:col-span-2">
          <Window title="operator_profile" className="h-full">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-2 border-[#ff6b00] p-1">
                  <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
                    <User size={64} className="text-[#4d4d4d]" />
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0d0d0d]" />
              </div>

              <div className="w-full space-y-4 text-left font-mono text-xs">
                <div className="flex justify-between border-b border-[#1a1a1a] pb-2">
                  <span className="text-[#4d4d4d]">OPERATOR</span>
                  <span className="text-[#ff6b00] font-bold">ANOOP PRAKASH</span>
                </div>
                <div className="flex justify-between border-b border-[#1a1a1a] pb-2">
                  <span className="text-[#4d4d4d]">ROLE</span>
                  <span className="text-blue-400 uppercase">Full_Stack_Developer</span>
                </div>
                <div className="flex justify-between border-b border-[#1a1a1a] pb-2">
                  <span className="text-[#4d4d4d]">EDUCATION</span>
                  <span className="text-gray-300">BCA FINAL YEAR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4d4d4d]">STATUS</span>
                  <span className="text-green-500 bg-green-500/10 px-2 rounded">OPEN_FOR_COLLAB</span>
                </div>
              </div>
            </div>
          </Window>
        </div>

        {/* System Logs */}
        <div className="lg:col-span-3 space-y-8">
          <Window title="user_profile.log">
            <div className="space-y-6 font-mono text-sm leading-relaxed">
              <div className="space-y-2">
                <p className="text-blue-400 flex items-center gap-2">
                  <span className="text-[#ff6b00]">→</span> whoami
                </p>
                <p className="text-gray-400 pl-6">
                  Passionate full-stack developer with expertise in modern web technologies. 
                  Currently focusing on building robust, scalable applications that solve real-world problems.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-purple-400 flex items-center gap-2">
                  <span className="text-[#ff6b00]">→</span> cat mission.txt
                </p>
                <p className="text-gray-400 pl-6">
                  Translating complex business requirements into high-performance technical solutions. 
                  Current research focuses on <span className="text-white">IMS architectures</span> and 
                  <span className="text-white">Cloud Integration</span>.
                </p>
              </div>
            </div>
          </Window>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Experience', value: '1+ YRS', icon: <Zap size={14} /> },
              { label: 'Projects', value: '15+ DEP', icon: <Code size={14} /> },
              { label: 'Caffeine', value: '∞ ML', icon: <Coffee size={14} /> }
            ].map((stat, i) => (
              <div key={i} className="bg-[#0d0d0d] border border-[#1a1a1a] p-4 rounded text-center">
                <div className="text-[#ff6b00] mb-1 flex justify-center">{stat.icon}</div>
                <div className="text-xl font-bold font-mono">{stat.value}</div>
                <div className="text-[10px] text-[#4d4d4d] uppercase tracking-widest font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;