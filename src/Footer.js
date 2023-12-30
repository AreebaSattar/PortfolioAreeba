import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; {new Date().getFullYear()} Areeba Sattar. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com/in/areeba-sattar/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/AreebaSattar" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        </div>
      </div>

  </footer>
  );
}

export default Footer;
