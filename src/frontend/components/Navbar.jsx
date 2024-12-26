import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="md:text-xl text-lg text-white border-r-5 flex flex-row md:flex-col items-center justify-center mobile:space-x-2 md:items-end md:space-y-4 md:py-4">
      <Link
        to="/"
        className={`transition-all duration-300 ease-in-out ${
          location.pathname === '/' ? 'text-cyan-500' : 'hover:text-cyan-700'
        }`}>
        <button>home</button>
      </Link>

      <span className="md:hidden"> | </span>

      <Link
        to="/about"
        className={`transition-all duration-300 ease-in-out ${
          location.pathname === '/about' ? 'text-cyan-500' : 'hover:text-cyan-700'
        }`}>
        <button>about</button>
      </Link>

      <span className="md:hidden"> | </span>

      <Link
        to="/projects"
        className={`transition-all duration-300 ease-in-out ${
          location.pathname === '/projects' ? 'text-cyan-500' : 'hover:text-cyan-700'
        }`}>
        <button>projects</button>
      </Link>
      
      <span className="md:hidden"> | </span>

      <Link
        to="/resources"
        className={`transition-all duration-300 ease-in-out ${
          location.pathname === '/resources' ? 'text-cyan-500' : 'hover:text-cyan-700'
        }`}>
        <button>resources</button>
      </Link>
      
      <span className="md:hidden"> | </span>

      <Link
        to="/contact"
        className={`transition-all duration-300 ease-in-out ${
          location.pathname === '/contact' ? 'text-cyan-500' : 'hover:text-cyan-700'
        }`}>
        <button>contact</button>
      </Link>
    </nav>
  );
};

export default Navbar;