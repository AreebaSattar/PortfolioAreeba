import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode, faGraduationCap, faTools, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="header">
      <div className="header-brand">Areeba Sattar</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#about"><FontAwesomeIcon icon={faUser} /></a></li>
          <li><a href="#projects"><FontAwesomeIcon icon={faCode} /></a></li>
          <li><a href="#education"><FontAwesomeIcon icon={faGraduationCap} /></a></li>
          <li><a href="#skills"><FontAwesomeIcon icon={faTools} /></a></li>
          <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} /></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
