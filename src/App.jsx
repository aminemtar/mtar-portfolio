import React from 'react';
import './App.css';

// Layout
import { Studio } from './components/studio/Studio';
import { ProgressBar } from './components/layout/ProgressBar';

import { Footer } from './components/layout/Footer';

// Sections

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
        <ProgressBar />
        <Studio />
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