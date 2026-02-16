import React from 'react';
import GridBG from '@/components/Layout/GridBG';
import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Skills from '@/components/Sections/Skills'; // New Import
import Experience from '@/components/Sections/Experience';
import Projects from '@/components/Sections/Projects';
import Contact from '@/components/Sections/Contact';

function App() {
  return (
    <div className="min-h-screen selection:bg-terminal-accent/30 selection:text-terminal-accent overflow-x-hidden relative">
      <GridBG />
      <div className="crt-overlay" />

      <main className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Hero />
        <About />
        <Skills /> {/* Added Skills Section */}
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-20 text-center border-t border-terminal-border relative z-10 bg-terminal-bg/50 backdrop-blur-sm">
        <p className="text-[10px] font-mono text-terminal-secondary uppercase tracking-[0.5em] mb-4">
          © 2026 Anoop Prakash. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 text-[10px] font-mono text-[#4d4d4d] uppercase tracking-widest">
          <span>BCA FINAL YEAR STUDENT</span>
          <span>•</span>
          <span>FULL STACK DEVELOPER</span>
          <span>•</span>
          <span>JAIPUR, INDIA</span>
        </div>
      </footer>
    </div>
  );
}

export default App;