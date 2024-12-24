import React from 'react'
import { cornerOptions } from '../consts'
import { greetings } from '../consts'

const Home = () => {

  const [currentCorner, setCurrentCorner] = React.useState(cornerOptions[0]);
  const [currentGreeting, setCurrentGreeting] = React.useState(greetings[0]);

  const handleCornerClick = () => {
    const nextIndex = (cornerOptions.indexOf(currentCorner) + 1) % cornerOptions.length;
    setCurrentCorner(cornerOptions[nextIndex]);
  };

  const handleGreetingClick = () => {
    const nextIndex = (greetings.indexOf(currentGreeting) + 1) % greetings.length;
    setCurrentGreeting(greetings[nextIndex]);
  }

  return (

    <div className='text-white flex flex-col opacity-0 animate-fade-in'>
        <h1 className=' text-4xl text-center mb-6'>
          <span className='cursor-pointer' onClick={handleGreetingClick}>
            {currentGreeting.flag && <span className="mr-2 select-none">{currentGreeting.flag}</span>}
            <span className='underline font-bold select-none'>{currentGreeting.text}</span>
          </span>, I'm Mahad!</h1>
        <span>
          <p className='text-xl mb-6'>
            Welcome to my <span className='underline cursor-pointer font-bold select-none' onClick={handleCornerClick}>{currentCorner}</span>
            , where the code is clean and the coffee is strong.
             </p>
          <p className='text-xl'>I'm an Honours Software Engineering student studying at McMaster University 🦅 based in 
            Hamilton, Ontario 🍁. Outside the coding world, I'm
          </p>
        </span>
    </div>
  )
}

export default Home

