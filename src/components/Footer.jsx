import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa'; // Import the specific icons you need

const Footer = () => {
  return (
    <footer className="flex justify-center items-center space-x-6 py-4 text-white">

        <a 
        href="https://www.instagram.com/mahadhssn/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-cyan-500 transition-all duration-300">
        <FaInstagram size={24} />
      </a>

      <a 
        href="https://www.linkedin.com/in/mahad-hassan/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-cyan-500 transition-all duration-300">
        <FaLinkedin size={24} />
      </a>

      <a 
        href="https://github.com/mahadhsn" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-cyan-500 transition-all duration-300">
        <FaGithub size={24} />
      </a>
    </footer>
  );
}

export default Footer;