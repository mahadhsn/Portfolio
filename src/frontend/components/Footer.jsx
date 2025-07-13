import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaTiktok } from 'react-icons/fa'; // Import the specific icons you need

const Footer = () => {
  return (
    <footer className="text-textlight dark:text-textdark">
      
      <div className='flex justify-center items-center space-x-6 py-3'>
        <a 
          href="mailto:mahadhassan.hello@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-accenthoverlight hover:dark:text-accenthoverdark transition-all duration-300">
          <FaEnvelope size={24} />
        </a>

        <a 
          href="https://www.linkedin.com/in/mahad-hassan/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-accenthoverlight hover:dark:text-accenthoverdark transition-all duration-300">
          <FaLinkedin size={24} />
        </a>

        <a 
          href="https://github.com/mahadhsn" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-accenthoverlight hover:dark:text-accenthoverdark transition-all duration-300">
          <FaGithub size={24} />
        </a>

        <a 
          href="https://www.instagram.com/mahadhssn/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-accenthoverlight hover:dark:text-accenthoverdark transition-all duration-300">
          <FaInstagram size={24} />
        </a>

        <a 
          href="https://www.tiktok.com/@aguitarer" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-accenthoverlight hover:dark:text-accenthoverdark transition-all duration-300">
          <FaTiktok size={24} />
        </a>
      </div>

      <div className='text-center py-4 text-accentlight dark:text-accentdark'>
        <p>mahadhssn &copy; 2025 | Updated: 13/7/2025</p>
      </div>

    </footer>
  );
}

export default Footer;
