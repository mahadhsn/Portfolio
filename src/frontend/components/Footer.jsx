import { GitHub, LinkedIn, Mail, TikTok } from "./Icons";

const Footer = () => (
  <footer className="foot">
    <span>© 2026 Mahad Hassan</span>
    <span className="foot-center">Designed + built in Hamilton, ON</span>
    <div className="foot-right">
      <a href="https://github.com/mahadhsn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <GitHub size={15} />
      </a>
      <a href="https://www.linkedin.com/in/mahad-hassan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <LinkedIn size={15} />
      </a>
      <a href="https://www.tiktok.com/@aguitarer" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
        <TikTok size={15} />
      </a>
      <a href="mailto:mahadhassan.hello@gmail.com" aria-label="Email">
        <Mail size={15} />
      </a>
    </div>
  </footer>
);

export default Footer;
