import React from 'react';
import githubIcon from '../icons/GithubIcon.png';
import linkedinIcon from '../icons/LinkedInIcon.png';
import twitterIcon from '../icons/TwitterIcon.png';

function Footer() {
  return (
    <footer className="text-center">
      <h2 className="fw-bold mb-3">Connect with me</h2>
      <ul className="list-inline text-center">
        <li className="list-inline-item">
          <a href="https://github.com/Marwaynemclovin" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" style={{ width: '50px', height: '50px' }} /></a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.linkedin.com/in/marwin-manlangit/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" style={{ width: '50px', height: '50px' }} /></a>
        </li>
        <li className="list-inline-item">
          <a href="https://twitter.com/marwayn3" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="Twitter" style={{ width: '50px', height: '50px' }} /></a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
