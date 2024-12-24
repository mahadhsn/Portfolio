import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex flex-col text-right justify-end space-y-4 p-4 text-white">
        <Link 
          to="/" 
          className={`transition-all duration-300 ease-in-out ${location.pathname === '/' ? 'text-cyan-500' : 'hover:text-cyan-700'}`}>
            <button>home</button>
        </Link>

        <Link 
          to="/about" 
          className={`transition-all duration-300 ease-in-out ${location.pathname === '/about' ? 'text-cyan-500' : 'hover:text-cyan-700'}`}>
            <button>about</button>
        </Link>

        <Link 
          to="/projects" 
          className={`transition-all duration-300 ease-in-out ${location.pathname === '/projects' ? 'text-cyan-500' : 'hover:text-cyan-700'}`}>
            <button>projects</button>
        </Link>
    </nav>
  )
}

export default Navbar