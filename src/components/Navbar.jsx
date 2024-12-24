import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  const [activePage, setActivePage] = React.useState('Home')

  const navItems = []

  return (
    <nav className=" flex flex-col text-right justify-end space-y-4 p-4 text-white ">
        <Link to="/" className="transition-all duration-300 ease-in-out hover:text-cyan-500">
            <button>home</button>
        </Link>

        <Link to="/about" className="transition-all duration-300 ease-in-out hover:text-cyan-500">
            <button>about</button>
        </Link>

        <Link to="/projects" className="transition-all duration-300 ease-in-out hover:text-cyan-500">
            <button>projects</button>
        </Link>
    </nav>
  )
}
export default Navbar