import React from 'react';
import './App.css';

// Layout
import { CursorHalo } from './components/layout/CursorHalo';
import { ProgressBar } from './components/layout/ProgressBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Sections
import { Hero } from './components/sections/Hero';
import { Marquee } from './components/sections/Marquee';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';

// Context
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="site">
        <CursorHalo />
        <ProgressBar />
        <Navbar />
        <Hero />
        <Marquee />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;