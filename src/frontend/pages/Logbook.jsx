import React from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Logbook = () => {

  useEffect(() => {
    document.title = 'Mahad\'s Life'
  },[])

  return (
    <div className='text-white flex flex-col opacity-0 animate-fade-in mt-[5%] md:mt-[18%] items-center'>

      <h1 className='text-3xl md:text-5xl text-center'>
        Logbook!
      </h1>



    </div>
  )
}

export default Logbook