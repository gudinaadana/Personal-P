import React from 'react';

function Skills() {
  const skills = [
    { name: 'React', level: 63, desc: 'Building modern web apps with components and hooks' },
    { name: 'JavaScript', level: 67, desc: 'Core programming for interactive web features' },
    { name: 'HTML', level: 80, desc: 'Structuring web content with semantic markup' },
    { name: 'CSS', level: 75, desc: 'Styling and responsive design for all devices' },
    { name: 'PHP', level: 65, desc: 'Server-side scripting and backend development' },
    { name: 'Node.js', level: 60, desc: 'Building scalable server applications' },
    { name: 'Git', level: 65, desc: 'Version control and team collaboration' }
  ];
  
  return (
    <section id="skills" className="section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <p className="skill-desc">{skill.desc}</p>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
