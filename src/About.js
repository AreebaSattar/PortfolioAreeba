import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2 className="about-heading">👋 Who am I?</h2>
      <p className="about-intro">
        Hey there, I'm Areeba Sattar! Welcome to my world of web wizardry!{' '}
        <span role="img" aria-label="sparkles">
          ✨
        </span>
      </p>

      <div className="about-content">
        <div className="about-section">
          <h3 className="section-heading">🎓 Student Developer</h3>
          <p>
            I'm a Computer Science student at the National University of Computer and Emerging Sciences (NUCES) in Islamabad.
          </p>
        </div>

        <div className="about-section">
          <h3 className="section-heading">💻 Tech Enthusiast</h3>
          <p>
            Through my studies, I've become buddies with programming languages like C++, Java, and Python.
          </p>
        </div>

        <div className="about-section">
          <h3 className="section-heading">🚀 Imagination Unleashed</h3>
          <p>
            You know what's cooler? I've been playing around with my own projects. It's not just code – it's a chance to let my imagination run wild!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;