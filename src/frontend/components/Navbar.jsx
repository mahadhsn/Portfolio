import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="text-sm sm:text-sm md:text-lg text-textlight dark:text-textdark flex flex-row md:flex-col flex-wrap items-center justify-center gap-1 sm:gap-2 md:space-y-4 px-2 md:px-4 py-2 md:py-4 overflow-x-auto whitespace-nowrap">
      
      <ThemeToggle />

      <span className="md:hidden"> | </span>

      <Link
        to="/"
        className={`transition-all duration-300 ease-in-out ${
          location.pathname === '/'
            ? 'text-accentlight dark:text-accentdark'
            : 'hover:text-accenthoverlight dark:hover:text-accenthoverdark'
        }`}
      >
        <button>home</button>
      </Link>

      <span className="md:hidden"> | </span>

      <Link
        to="/about"
        className={`transition-all duration-300 ease-in-out ${
          location.pathname === '/about' 
          ? 'text-accentlight dark:text-accentdark'
            : 'hover:text-accenthoverlight dark:hover:text-accenthoverdark'
        }`}
      >
        <button>about</button>
      </Link>

      <span className="md:hidden"> | </span>

      <Link
        to="/projects"
        className={`transition-all duration-300 ease-in-out ${
          location.pathname === '/projects' 
          ? 'text-accentlight dark:text-accentdark'
            : 'hover:text-accenthoverlight dark:hover:text-accenthoverdark'
        }`}
      >
        <button>projects</button>
      </Link>

      <span className="md:hidden"> | </span>

      <Link
        to="/logbook"
        className={`transition-all duration-300 ease-in-out ${
          location.pathname.startsWith('/logbook') 
          ? 'text-accentlight dark:text-accentdark'
            : 'hover:text-accenthoverlight dark:hover:text-accenthoverdark'
        }`}>
        <button>logbook</button>
      </Link>
      
      <span className="md:hidden"> | </span>

      <Link
        to="/resume"
        className={`transition-all duration-300 ease-in-out ${
          location.pathname === '/resume' 
          ? 'text-accentlight dark:text-accentdark'
            : 'hover:text-accenthoverlight dark:hover:text-accenthoverdark'
        }`}
      >
        <button>resume</button>
      </Link>
      
      <span className="md:hidden"> | </span>

      <Link
        to="/contact"
        className={`transition-all duration-300 ease-in-out ${
          location.pathname === '/contact' 
          ? 'text-accentlight dark:text-accentdark'
            : 'hover:text-accenthoverlight dark:hover:text-accenthoverdark'
        }`}
      >
        <button>contact</button>
      </Link>
    </nav>
  );
};

export default Navbar;