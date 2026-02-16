import React from 'react';
import Window from '../Terminal/Window';
import { Folder, ExternalLink, Github, Database, Globe } from 'lucide-react';

const Projects = () => {
  const allProjects = [
    { name: "ims-system", lang: "Java/React", date: "2 days ago" },
    { name: "quick-cart", lang: "Next.js", date: "3 months ago" },
    { name: "hostel-mgmt", lang: "Spring Boot", date: "Nov 2025" },
    { name: "grocery-market", lang: "TypeScript", date: "Dec 2025" },
    { name: "anoop-industries", lang: "Logo Design", date: "Jan 2026" },
  ];

  return (
    <section className="py-20 border-t border-[#1a1a1a]">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-[#ff6b00] text-xl">📁</span>
        <h2 className="text-3xl font-bold font-mono tracking-widest text-gray-100 uppercase">
          ls -la ~/projects
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left: Project Directory List */}
        <div className="lg:col-span-4">
          <Window title="Repositories">
            <div className="space-y-4 font-mono">
              {allProjects.map((proj, i) => (
                <div key={i} className="flex justify-between items-center group cursor-pointer hover:bg-[#1a1a1a] p-2 rounded transition-colors">
                  <div className="flex items-center gap-3">
                    <Folder size={14} className="text-[#4d4d4d] group-hover:text-[#ff6b00]" />
                    <span className="text-gray-300 group-hover:text-white">{proj.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-[#4d4d4d]">{proj.lang}</div>
                    <div className="text-[9px] text-[#2d2d2d] uppercase">{proj.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </Window>
        </div>

        {/* Right: Featured Projects */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Featured Project 1: IMS */}
            <Window title="ims_core.exe">
              <div className="space-y-4 font-mono">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-[#ff6b00]">INSTITUTE MGMT SYSTEM</h3>
                  <Globe size={16} className="text-[#4d4d4d]" />
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  A comprehensive management system built for educational institutions. 
                  Handles frontend, backend, and complex database design.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Java", "SQL", "Spring"].map(t => (
                    <span key={t} className="text-[9px] px-2 py-0.5 bg-[#1a1a1a] text-[#4d4d4d] rounded">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <button className="text-[10px] flex items-center gap-1 text-[#ff6b00] hover:underline">
                    <ExternalLink size={12} /> DEMO
                  </button>
                  <button className="text-[10px] flex items-center gap-1 text-gray-500 hover:text-white">
                    <Github size={12} /> SOURCE
                  </button>
                </div>
              </div>
            </Window>

            {/* Featured Project 2: Quick Cart */}
            <Window title="quick_cart.pkg">
              <div className="space-y-4 font-mono">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-[#ff6b00]">QUICK CART</h3>
                  <Database size={16} className="text-[#4d4d4d]" />
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  A high-performance grocery marketplace platform with real-time 
                  inventory tracking and professional branding.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Tailwind"].map(t => (
                    <span key={t} className="text-[9px] px-2 py-0.5 bg-[#1a1a1a] text-[#4d4d4d] rounded">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <button className="text-[10px] flex items-center gap-1 text-[#ff6b00] hover:underline">
                    <ExternalLink size={12} /> DEMO
                  </button>
                  <button className="text-[10px] flex items-center gap-1 text-gray-500 hover:text-white">
                    <Github size={12} /> SOURCE
                  </button>
                </div>
              </div>
            </Window>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;