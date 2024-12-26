import React from 'react'
import { cornerOptions } from '../consts'
import { greetings } from '../consts'
import { hobbies } from '../consts'
import Quotes from '../components/Quotes'

const Home = () => {

  const [currentCorner, setCurrentCorner] = React.useState(cornerOptions[0]);
  const [currentGreeting, setCurrentGreeting] = React.useState(greetings[0]);
  const [currentHobby, setCurrentHobby] = React.useState(hobbies[0]);


  const handleCornerClick = () => {
    const nextIndex = (cornerOptions.indexOf(currentCorner) + 1) % cornerOptions.length;
    setCurrentCorner(cornerOptions[nextIndex]);
  };

  const handleGreetingClick = () => {
    const nextIndex = (greetings.indexOf(currentGreeting) + 1) % greetings.length;
    setCurrentGreeting(greetings[nextIndex]);
  }

  const handleHobbyClick = () => {
    const nextIndex = (hobbies.indexOf(currentHobby) + 1) % hobbies.length;
    setCurrentHobby(hobbies[nextIndex]);
  }

  return (

    <div className='text-white flex flex-col opacity-0 animate-fade-in'>
        <h1 className=' text-4xl text-center mb-6'>
          <span className='cursor-pointer' onClick={handleGreetingClick}>
            {currentGreeting.flag && <span className="mr-2 select-none">{currentGreeting.flag}</span>}
            <span className='underline font-bold select-none'>{currentGreeting.text}</span>
          </span>, I'm Mahad!</h1>
        <span>
          <p className='text-lg mb-6'>
            Welcome to my <span className='underline cursor-pointer font-bold select-none' onClick={handleCornerClick}>{currentCorner}</span>
            , where the code is clean and the coffee is strong.
             </p>
          <p className='text-lg mb-6'>I'm an Honours Software Engineering student studying at McMaster University 🦅 based in 
            Hamilton, Ontario 🍁. Outside the coding world, I'm probably listening to music, learning a new skill, 
            or <span className='underline cursor-pointer font-bold select-none' onClick={handleHobbyClick}>{currentHobby}</span>.
          </p>

          <p className='text-lg'>I love chatting with new people so please contact me using the contact page. I'm always open to new opportunities and collaborations! 🚀
          </p>

          <Quotes />

        </span>
    </div>
  )
}

export default Home

