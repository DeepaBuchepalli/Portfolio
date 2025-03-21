import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Navyasri</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#achievements">Achievements</a></li> 
        <li><a href="#projects">Projects</a></li> 
        <li><a href="#contact">Contact</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
