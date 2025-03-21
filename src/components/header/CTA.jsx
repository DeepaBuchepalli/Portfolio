import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const CTA = () => {
  return (
    <div className="cta">
      <a href="/DeepaResume.pdf" download="DeepaResume.pdf" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn">
        Let's talk
      </a>
      <a href="https://www.linkedin.com/in/deepabuchepalli/" target="_blank" rel="noreferrer">
        <BsLinkedin className="linkedin" style={{ fontSize: '2em', marginTop: '1rem' }} />
      </a>
      <a href="https://github.com/DeepaBuchepalli" target="_blank" rel="noreferrer">
        <FaGithub className="github" style={{ fontSize: '2em', marginTop: '1rem' }} />
      </a>
    </div>
  );
};

export default CTA;
