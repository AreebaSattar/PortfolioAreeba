import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2 className="skills-heading">Skills</h2>
        <div className="skills-list">
          <div className="skill">
            <h3>HTML/CSS</h3>
            <div className="skill-level">
              <div className="skill-level-bar" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>JavaScript</h3>
            <div className="skill-level">
              <div className="skill-level-bar" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>React</h3>
            <div className="skill-level">
              <div className="skill-level-bar" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>C++</h3>
            <div className="skill-level">
              <div className="skill-level-bar" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>C#</h3>
            <div className="skill-level">
              <div className="skill-level-bar" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>Python</h3>
            <div className="skill-level">
              <div className="skill-level-bar" style={{ width: '80%' }}></div>
            </div>
          </div>
          {/* Add more skills here */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
