import React from 'react';
import { Outlet } from 'react-router-dom';
import GridBG from '@/components/Layout/GridBG';

function App() {
  return (
    <div className="min-h-screen relative selection:bg-terminal-accent/30 selection:text-terminal-accent">
      <GridBG />
      <div className="crt-overlay" />

      <main className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* The router will inject the specific section content here */}
        <Outlet />
      </main>
      
      <footer className="py-20 text-center border-t border-terminal-border relative z-10 bg-terminal-bg/50">
        <p className="text-[10px] font-mono text-terminal-secondary uppercase tracking-[0.5em]">
          © 2026 Anoop Prakash • Operator Mode Active
        </p>
      </footer>
    </div>
  );
}

export default App;