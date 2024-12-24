import React from 'react'
import { cornerOptions } from '../consts'
import { greetings } from '../consts'

const Home = () => {

  const [currentCorner, setCurrentCorner] = React.useState(cornerOptions[0]);
  const [currentGreeting, setCurrentGreeting] = React.useState(greetings[0]);

  const handleCornerClick = () => {
    const randomIndex = Math.floor(Math.random() * cornerOptions.length);
    if (cornerOptions[randomIndex] === currentCorner) {
      handleClick();
      return;
    }
    setCurrentCorner(cornerOptions[randomIndex]);
  };

  const handleGreetingClick = () => {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    if (greetings[randomIndex] === currentGreeting) {
      handleClick();
      return;
    }
    setCurrentGreeting(greetings[randomIndex]);
  }

  return (

    <div className='text-white flex flex-col opacity-0 animate-fade-in'>
        <h1 className=' text-5xl text-center mb-6'>
          <span className='underline cursor-pointer font-bold' onClick={handleGreetingClick}>{currentGreeting}</span>
        , I'm Mahad!</h1>
        <span>
          <p className='text-xl mb-6'>Welcome to my <span className='underline cursor-pointer font-bold' onClick={handleCornerClick}>{currentCorner}</span>
            , where the code is clean and the coffee is strong.
             </p>
          <p className='text-xl'>I'm an Honours Software Engineering student studying at McMaster University 🦅 based in 
            Hamilton, Ontario 🍁. I'm passionate about software development,
          </p>
        </span>
    </div>
  )
}

export default Home

