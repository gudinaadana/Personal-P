import React from 'react';

function Education() {
  const education = [
    {
      level: 'University',
      institution: 'Madda Walabu University',
      program: 'BSc in Computer Science',
      period: '3rd Year',
      icon: '🎓'
    },
    {
      level: 'High School',
      institution: 'Hachalu Hundessa',
      program: 'Grade 11-12',
      period: 'Completed',
      icon: '📚'
    },
    {
      level: 'High School',
      institution: 'Ginchi',
      program: 'Grade 9-10',
      period: 'Completed',
      icon: '📚'
    },
    {
      level: 'Elementary',
      institution: 'Dimtu Burka',
      program: 'Grade 1-8',
      period: 'Completed',
      icon: '🏫'
    }
  ];

  return (
    <section id="education" className="section">
      <h2>Education Background</h2>
      <div className="education-horizontal">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="edu-icon-horizontal">{edu.icon}</div>
            <div className="edu-content-horizontal">
              <h3>{edu.institution}</h3>
              <p className="edu-program">{edu.program}</p>
              <p className="edu-period">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
