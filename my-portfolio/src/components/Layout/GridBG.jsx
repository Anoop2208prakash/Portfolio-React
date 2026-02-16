import React from 'react';

const GridBG = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-terminal-bg">
      {/* Layer 1: Central Amber Glow (Personalized to your Accent Color) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,0,0.06)_0%,transparent_70%)]" />

      {/* Layer 2: Geometric Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px'
        }}
      />

      {/* Layer 3: Vertical CRT Scanlines */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), 
                       linear-gradient(90deg, rgba(255, 0, 0, 0.01), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.01))` ,
          backgroundSize: '100% 3px, 3px 100%'
        }}
      />
    </div>
  );
};

export default GridBG;