import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Library Management System',
      description: 'A comprehensive system for managing library books, members, and borrowing records with search and tracking features.',
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern and responsive personal portfolio showcasing my skills, projects, and contact information.',
      link: 'https://gudinaman.github.io/Cs_Portfollio/'
    }
  ];
  
  return (
    <section id="projects" className="section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="view-btn"
            >
              VIEW
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
