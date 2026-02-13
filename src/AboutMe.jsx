import React from 'react';

function AboutMe() {
  return (
    <section id="about" className="section about-hero">
      <div className="about-section-wrapper">
        <h2 className="section-title-hero">About Me</h2>
        <div className="hero-container">
          <div className="hero-image">
            <img 
              src="/src/assets/profile.jpg" 
              alt="Gudina Adana" 
              className="hero-avatar"
            />
          </div>
          <div className="hero-content">
            <h1 className="hero-greeting">Hello, I'm <span className="hero-name">Gudina Adana</span></h1>
            <p className="hero-subtitle">Computer Science Student | Third Year</p>
            <p className="hero-tagline">Passionate about technology, web development and software development</p>
            <div className="hero-buttons">
              <a href="#projects" className="hero-btn primary">View Projects</a>
              <a href="#contact" className="hero-btn secondary">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
