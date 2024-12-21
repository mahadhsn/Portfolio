import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-red-900 mt-40 ml-40 w-32 flex flex-col text-right space-y-4 py-5 pr-2 text-white border border-white rounded-lg">
        <Link to="/" className="">
            <button>Home</button>
        </Link>

        <Link to="/about" className="">
            <button>About</button>
        </Link>
    </nav>
  )
}
export default Navbar