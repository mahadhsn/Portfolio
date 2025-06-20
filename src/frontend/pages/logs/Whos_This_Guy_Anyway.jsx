import React from 'react'
import { useEffect } from 'react'

const Whos_This_Guy_Anyway = () => {
    useEffect(() => {
        document.title = "Who I am"
    } )
  return ( 
    <div className='text-white flex flex-col opacity-0 animate-fade-in mt-[5%] md:mt-[18%] w-full'>

      <h1 className='text-3xl font-bold text-white text-center items-center justify-center align-middle mb-2'>
        Who's this guy anyway? 
      </h1>
      <p className='text-center font-semibold text-lg text-gray-400 mb-5'>
        Written on May 23rd, 2025
      </p>
      
    </div>
  )
}

export default Whos_This_Guy_Anyway
