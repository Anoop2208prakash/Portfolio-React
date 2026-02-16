import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

// List of skills with their Simple Icons slugs and display names
const skills = [
  { name: 'React', slug: 'react', color: '#61DAFB' },
  { name: 'Next.js', slug: 'nextdotjs', color: '#FFFFFF' },
  { name: 'Node.js', slug: 'nodedotjs', color: '#339933' },
  { name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
  { name: 'JavaScript', slug: 'javascript', color: '#F7DF1E' },
  { name: 'Java', slug: 'openjdk', color: '#ED8B00' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '#4169E1' },
  { name: 'Tailwind CSS', slug: 'tailwindcss', color: '#06B6D4' },
  { name: 'Git', slug: 'git', color: '#F05032' },
  { name: 'Docker', slug: 'docker', color: '#2496ED' },
  { name: 'Python', slug: 'python', color: '#3776AB' },
  { name: 'Spring', slug: 'spring', color: '#6DB33F' },
  { name: 'MongoDB', slug: 'mongodb', color: '#47A248' },
  { name: 'HTML5', slug: 'html5', color: '#E34F26' },
  { name: 'CSS3', slug: 'css3', color: '#1572B6' },
];

const Skills = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const radius = 250; // Sphere radius

  // Distribute icons on a sphere using Fibonacci mapping
  const getPoints = () => {
    return skills.map((skill, i) => {
      const n = skills.length;
      const phi = Math.acos(1 - 2 * (i + 0.5) / n);
      const theta = Math.sqrt(n * Math.PI) * phi;
      
      return {
        ...skill,
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
      };
    });
  };

  const points = getPoints();

  // Mouse move handler for the parallax effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) * 0.1;
    const y = (e.clientX - rect.left - rect.width / 2) * 0.1;
    setRotation({ x, y });
  };

  return (
    <section className="py-20 border-t border-terminal-border">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-terminal-accent text-xl">⚙️</span>
        <h2 className="text-3xl font-bold font-mono tracking-widest text-gray-100 uppercase">
          # Skills.json
        </h2>
      </div>

      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setRotation({ x: 0, y: 0 })}
        className="relative h-[600px] flex items-center justify-center overflow-hidden cursor-crosshair"
      >
        {/* Wireframe Sphere Background */}
        <div className="absolute opacity-5 pointer-events-none">
          <svg width="500" height="500" viewBox="0 0 500 500">
            <circle cx="250" cy="250" r="240" fill="none" stroke="white" strokeWidth="0.5" />
            <ellipse cx="250" cy="250" rx="240" ry="100" fill="none" stroke="white" strokeWidth="0.5" />
            <ellipse cx="250" cy="250" rx="100" ry="240" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        {/* 3D Icons Cloud */}
        <div className="relative w-full h-full flex items-center justify-center perspective-1000">
          {points.map((skill, i) => {
            // Apply 3D rotation math
            const radX = rotation.x * (Math.PI / 180);
            const radY = rotation.y * (Math.PI / 180);

            // Basic rotation matrix application
            const rotatedY = skill.y * Math.cos(radX) - skill.z * Math.sin(radX);
            const rotatedZ = skill.y * Math.sin(radX) + skill.z * Math.cos(radX);
            const rotatedX = skill.x * Math.cos(radY) + rotatedZ * Math.sin(radY);
            
            // Depth effect (Scale and Opacity based on Z-axis)
            const scale = (rotatedZ + radius * 2) / (radius * 2);
            const opacity = (rotatedZ + radius) / (radius * 2);

            return (
              <motion.div
                key={skill.name}
                className="absolute flex flex-col items-center gap-2 group"
                animate={{
                  x: rotatedX,
                  y: rotatedY,
                  scale: scale,
                  opacity: opacity + 0.2,
                  zIndex: Math.round(rotatedZ),
                }}
                transition={{ type: 'spring', stiffness: 60, damping: 20 }}
              >
                <div 
                  className="p-3 bg-terminal-bg/80 border border-terminal-border rounded-xl backdrop-blur-sm group-hover:border-terminal-accent transition-colors"
                  style={{ boxShadow: `0 0 20px ${skill.color}20` }}
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color.replace('#', '')}`}
                    alt={skill.name}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                </div>
                <span className="text-[10px] font-mono text-terminal-secondary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;