import React from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Logbook = () => {

  useEffect(() => {
    document.title = 'Mahad\'s Life'
  },[])

  return (
    <div className='text-white flex flex-col opacity-0 animate-fade-in mt-[5%] md:mt-[18%] w-full'>

      <h1 className='text-3xl font-bold text-white text-center items-center justify-center align-middle mb-2'>
        Get to know me :)
      </h1>
      <hr className='mb-5'></hr>

      <li className='flex flex-col mb-7'>
        <h2 className='text-2xl font-semibold'>More about ME</h2>
        <Link
        to="/whos this guy anyway"
        className={`transition-all duration-300 ease-in-out ${
          location.pathname === '/whos this guy anyway' ? 'text-cyan-500' : 'hover:text-cyan-700'
        }`}
        >
        <button>Who's this guy anyway??</button>
      </Link>
      </li>

      <li className='flex flex-col'>
        Misc
        <Link
        to="/whos this guy anyway"
        className={`transition-all duration-300 ease-in-out ${
          location.pathname === '/whos this guy anyway' ? 'text-cyan-500' : 'hover:text-cyan-700'
        }`}>
        <button>about</button>
      </Link>
      </li>

    </div>
  )
}

export default Logbook