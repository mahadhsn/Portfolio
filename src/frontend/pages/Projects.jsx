import React from 'react'
import { useEffect } from 'react'

const Projects = () => {
  useEffect(() => {
    document.title = "My Masterpieces"
  } )


  return (
    <div className='text-white mt-10 md:mt-[20%] animate-fade-in'>
      <span className='md:text-xl text-lg'>
        
        <h2 className='text-xl md:text-2xl mb-8'>
          A list of some of my projects. Take a look at all of them at my Github link in the footer! 🚀
        </h2>

        <hr></hr>

        <h2 className='text-2xl md:text-3xl text-left underline mt-8'>
          <a href='https://github.com/mahadhsn/C-View' target="_blank" rel="noopener noreferrer">
            [ C-View ]
          </a>
        </h2>
        <p className='mb-6'>
          Lightweight image processor created entirely in C designed to be used in the terminal 
          when resources are limited
        </p>

        <h2 className='text-2xl md:text-3xl text-left underline'>
          <a href='https://github.com/mahadhsn/Convert-Number-Systems' target="_blank" rel="noopener noreferrer">
            [ Convert-Number-Systems ]
          </a>
        </h2>
        <p className='mb-6'>
          C program to convert numbers between binary, octal, decimal, and hexadecimal number systems
        </p>

        <h2 className='text-2xl md:text-3xl text-left underline'>
          <a href='https://github.com/mahadhsn/Digit-Recognizer' target="_blank" rel="noopener noreferrer">
            [ Digit-Recognizer ]
          </a>
        </h2>
        <p className='mb-6'>
          Python program that uses the MNIST dataset to recognize handwritten digits using a neural network
        </p>

        <h2 className='text-2xl md:text-3xl text-left underline'>
          <a href='https://github.com/mahadhsn/Java-Tic-Tac-Toe-AI' target="_blank" rel="noopener noreferrer">
            [ Java-Tic-Tac-Toe-AI ]
          </a>
        </h2>

        <p className='mb-6'>
          Java program that allows the user to play Tic-Tac-Toe against an AI that uses the minimax algorithm
        </p>

        <h2 className='text-2xl md:text-3xl text-left underline'>
          <a href='https://github.com/mahadhsn/Portfolio' target="_blank" rel="noopener noreferrer">
            [ Portfolio ]
          </a>
        </h2>
        <p className='mb-6'>
          This portfolio! Created using React and Tailwind CSS and contains information about me.
        </p>

        <h2 className='text-2xl md:text-3xl text-left underline'>
          <a href='https://github.com/mahadhsn/US-Baby-Names' target="_blank" rel="noopener noreferrer">
            [ US-Baby-Names ]
          </a>
        </h2>
        <p className='mb-6'>
          Bash command line program that uses the US Baby Names dataset to analyze trends in baby names over the years
        </p>

        



      </span>
    
    </div>
  )
}

export default Projects
