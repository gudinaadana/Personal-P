import React from 'react';
import './App.css';
import AboutMe from './AboutMe.jsx';
import Skills from './Skills.jsx';
import Education from './Education.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Gudina Adana</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      
      <AboutMe />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      
      <footer>
        <p>&copy; 2026 Gudina Adana. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
