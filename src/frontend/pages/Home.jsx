import React from 'react'
import ChangeWord from '../components/ChangeWord'
import { useEffect } from 'react'
import { hobbies, cornerOptions, greetings } from '../../data/consts'
import Quotes from '../components/Quotes'

const Home = () => {

  useEffect(() => {
    document.title = "Mahad's Home"
  }, [])

  const [currentGreeting, setCurrentGreeting] = React.useState(greetings[0]);

  const handleGreetingClick = () => {
    const nextIndex = (greetings.indexOf(currentGreeting) + 1) % greetings.length;
    setCurrentGreeting(greetings[nextIndex]);
  }

  return (

    <div className='text-white flex flex-col opacity-0 animate-fade-in mt-[5%] md:mt-[20%]'>

    <h1 className='text-3xl md:text-5xl text-center mb-7 flex items-center justify-center'>
      <span className='cursor-pointer relative flex items-center -mb-5' onClick={handleGreetingClick}>
        {currentGreeting.flag && (
          <span className="mr-2 select-none flex items-center">
            {currentGreeting.flag}
          </span>
        )}
        <div className='flex flex-col items-center'>
          <span className='underline font-bold select-none'>{currentGreeting.text}</span>
          <span className='text-sm text-gray-400 italic mt-1 animate-bop select-none'>
            ↑ Click me!
          </span>
        </div>
      </span>
      <span className='ml-2'>I'm Mahad</span>
    </h1>

      <span className='text-lg md:text-xl'>
        <p className='mb-6'>
          Welcome to my <span className=''><ChangeWord list={cornerOptions}/></span>
          , where the code is clean and the coffee is strong.
            </p>
        <p className='mb-6'>
          I'm an 
          Honours <a href='https://www.eng.mcmaster.ca/cas/degree-options/software-engineering/' target="_blank" rel="noopener noreferrer" className='underline'>Software Engineering</a> student 
          at <a href='https://www.mcmaster.ca' target="_blank" rel="noopener noreferrer" className='underline'>McMaster University</a> 🦅 
          based in 
          Hamilton, Ontario 🍁. Outside the coding world, I'm probably 
          singing <span className='font-light'>(checkout my TikTok!)</span>, learning a new skill, 
          or <span><ChangeWord list={hobbies}/></span>.
        </p>

        <p className='mb-6'>
          At the heart of it all, I believe in constant self-improvement. As <span className='font-light'>Boonaa Mohammed</span> once 
          said, <span className='italic font-semibold'> "If the whole world was blind, how many people you impress?"</span>. This
          quote has always helped me focus growth and impact over vanity and 
          ego. <span className='font-light'>(check out more below!)</span>
        </p>

        <p className=''>
          I’d love to connect with you! Feel free to reach out through my contact page or drop me an email 
          at <a href='mailto:mahadhassan.hello@gmail.com' target="_blank" rel="noopener noreferrer" className='underline'>mahadhassan.hello@gmail.com</a>
            . I'm always open to new opportunities and collaborations! 🚀
        </p>
        </span>
        <Quotes />

    </div>
  )
}

export default Home

