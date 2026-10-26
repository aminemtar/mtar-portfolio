import React, { useState } from 'react';
import './App.css';

// Layout
import { World } from './components/world/World';
import { Navbar } from './components/layout/Navbar';
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
  const [browse, setBrowse] = useState(false);
  return (
    <LanguageProvider>
      <div className="site">
        {!browse ? <World onBrowse={() => setBrowse(true)} /> : <>
        <Navbar />
        <div style={{ height: 100 }} />
        <ProgressBar />
        <Marquee />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
        <button className="browse-back" onClick={() => setBrowse(false)}>← 3D World</button>
        </>}
      </div>
    </LanguageProvider>
  );
}

export default App;