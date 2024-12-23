import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-900 flex flex-col text-right justify-end space-y-4 p-4 text-white">
        <Link to="/" className="bg-black">
            <button>Home</button>
        </Link>

        <Link to="/about" className="bg-cyan-900">
            <button>About</button>
        </Link>

        <Link to="/projects" className="bg-green-900">
            <button>Projects</button>
        </Link>
    </nav>
  )
}
export default Navbar