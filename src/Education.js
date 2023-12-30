import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-content">
        <h2 className="section-title">Education</h2>
        <div className="education-items">
          <div className="education-item">
            <h3>Bachelor of ComputerScience</h3>
            <p>FAST (NUCES), Islamabad</p>
            <p>08/2020 - Present, Islamabad, Pakistan</p>
            <p className="course-title">Courses:</p>
            <ul className="course-list">
              <li>Programming Fundamentals</li>
              <li>Object Oriented Programming</li>
              <li>Data Structures</li>
              <li>Operating Systems</li>
              <li>Web Development</li>
              <li>Database Systems</li>
            </ul>
          </div>
          <div className="education-item">
            <h3>F.Sc. Pre Engineering</h3>
            <p>Punjab College, Hill House Complex, H-11/ 4</p>
            <p>08/2018 - 07/2020, Islamabad, Pakistan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
