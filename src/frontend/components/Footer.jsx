import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa"; // Import the specific icons you need
import FooterText from "./FooterText";

const Footer = () => {
  return (
    <footer className="text-textlight dark:text-textdark pb-8 space-y-4">
      <div className="flex justify-center items-center space-x-6">
        <a
          href="mailto:mahadhassan.hello@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accenthoverlight hover:dark:text-accenthoverdark transition-all duration-300"
        >
          <FaEnvelope size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/mahad-hassan/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accenthoverlight hover:dark:text-accenthoverdark transition-all duration-300"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="https://github.com/mahadhsn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accenthoverlight hover:dark:text-accenthoverdark transition-all duration-300"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://www.instagram.com/mahadhssn/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accenthoverlight hover:dark:text-accenthoverdark transition-all duration-300"
        >
          <FaInstagram size={24} />
        </a>

        <a
          href="https://www.tiktok.com/@aguitarer"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accenthoverlight hover:dark:text-accenthoverdark transition-all duration-300"
        >
          <FaTiktok size={24} />
        </a>
      </div>

      <FooterText />
    </footer>
  );
};

export default Footer;
