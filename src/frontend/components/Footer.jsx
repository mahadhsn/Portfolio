import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaTiktok } from 'react-icons/fa'; // Import the specific icons you need

const Footer = () => {
  return (
    <footer className="">
      
      <div className='flex justify-center items-center space-x-6 py-3 text-white'>
        <a 
          href="mailto:mahadhassan.hello@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-cyan-500 transition-all duration-300">
          <FaEnvelope size={24} />
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

        <a 
          href="https://www.instagram.com/mahadhssn/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-cyan-500 transition-all duration-300">
          <FaInstagram size={24} />
        </a>

        <a 
          href="https://www.tiktok.com/@aguitarer" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-cyan-500 transition-all duration-300">
          <FaTiktok size={24} />
        </a>
      </div>

      <div className='text-center text-white py-4'>
        <p></p>
        <p>mahadhssn &copy; 2025 | Updated: 7/1/2025</p>
      </div>

    </footer>
  );
}

export default Footer;
