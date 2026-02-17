import React from 'react';
import Window from '../Terminal/Window';
import { GitBranch, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: "7b4e92",
      role: "BCA Final Year Student",
      company: "Academic Projects",
      period: "2023 - Present",
      description: "Focusing on research and development for major projects. Built various management systems including a Hostel Management System and an IMS.",
      stack: ["Java", "SQL", "Spring Boot", "React"],
      stats: "+580 insertions, -12 deletions"
    },
    {
      id: "a3f1d4",
      role: "Full Stack Developer",
      company: "Quick Cart (Project)",
      period: "Nov 2025",
      description: "Designed the architecture and logo for a modern grocery/e-commerce marketplace platform.",
      stack: ["Next.js", "PostgreSQL", "Tailwind"],
      stats: "+120 insertions, -5 deletions"
    }
  ];

  return (
    <section className="py-20 border-t border-[#1a1a1a]">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-[#ff6b00] text-xl">$</span>
        <h2 className="text-3xl font-bold font-mono tracking-widest text-gray-100 uppercase">git log --stat</h2>
      </div>

      <div className="relative pl-8 border-l border-[#1a1a1a] space-y-12 ml-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative">
            {/* Timeline Indicator */}
            <div className="absolute -left-[37px] top-4 w-4 h-4 rounded-full bg-[#ff6b00] border-4 border-[#0d0d0d] shadow-[0_0_10px_#ff6b00]" />
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Log Meta */}
              <div className="md:w-32 pt-1 font-mono">
                <div className="text-[#ff6b00] text-xs flex items-center gap-2">
                  <GitBranch size={12} /> {exp.id}
                </div>
                <div className="text-[#4d4d4d] text-[10px] uppercase mt-2 flex items-center gap-1">
                  <Calendar size={10} /> {exp.period}
                </div>
              </div>

              {/* Log Details Window */}
              <div className="flex-1">
                <Window title={`commit: ${exp.id}`}>
                  <div className="space-y-4 font-mono">
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                      {exp.role} <span className="text-[#4d4d4d] font-normal lowercase">@ {exp.company}</span>
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.stack.map(tech => (
                        <span key={tech} className="text-[10px] px-2 py-0.5 border border-[#1a1a1a] rounded text-[#4d4d4d]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2 text-[10px] text-green-500/60 italic">
                      {exp.stats}
                    </div>
                  </div>
                </Window>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;