import React from 'react'
import ChangeWord from '../components/ChangeWord'
import { useEffect } from 'react'
import { currently, previously, achievements, shortGoals, longGoals } from '../consts'
//import HoverImage from '../components/ImageHoverCard'

const About = () => {

  useEffect(() => {
    document.title = "Yours Truly"
  })

  return (
    <div className='text-white mt-10 md:mt-[20%]'>

      <div className='flex flex-col items-center justify-center align-middle mb-4'>
        <div className='image-wrapper'>
          <img src='../../../images/about/me.jpg' alt='me' className='mb-1 size-1/2 rounded-lg'/>
        </div>
          <p className='text-center text-gray-500 text-m md:text-lg mt-2'>Me at a Daniel Caeser concert!</p>
      </div>
      
      <hr className=''></hr>

      <div className='text-lg md:text-xl'>
        <p className='mt-8'>
          <span className='font-bold'>Hello!</span> I am someone who is always looking to try out new things. This may sound cliché
          but I truly mean it! Learning new things, meeting new people, and experiencing new cultures are things that 
          keep me going in life. I love all things 
          tech, space,
          music, 
          video games, 
          movies, 
          nature, 
          animals, 
          and much more. The sky's the limit for me and I am always looking to reach for the stars 🌟.
        </p>

        <p className='mt-8 mb-8'>
          A few short time goals of mine include <ChangeWord list={shortGoals} /> Towards the long term, I am looking 
          to <ChangeWord list={longGoals} />.
          I am also looking to get more involved in the tech community
          by attending hackathons, coding competitions, and networking events. I am always looking to learn new things
          and meet new people so if you have any opportunities or just want to chat, feel free to reach out to me!
        </p>

        <span className=''>

          <span className='text-2xl md:text-3xl'>
           📌 <ChangeWord list={currently} />
          </span>
          <ul className='list-disc list-inside mb-8'>
            <li> In my  2<span className='text-sm'>nd</span> year of my Bachelor's of Software Engineering degree 🖥️</li>
            <li> VP of Events 
              for <a href='https://www.instagram.com/mcmasterpsa/' target="_blank" rel="noopener noreferrer" className='underline'>McMaster PSA</a> planning
               & managing events with 300+ attendees 🇵🇰 
            </li>
            <li> VP of Operations 
              for <a href='https://www.instagram.com/voicesatmac/' target="_blank" rel="noopener noreferrer" className='underline'>VoicesatMac</a> helping
              initialize the club and host interviews with various people of all backgrounds 🎤
            </li>
            <li> Aided in the admissions process for <a href='https://www.deltahacks.com' target="_blank" rel="noopener noreferrer" className='underline'>DeltaHacks</a> as
             an Attendee Relations Executive 💻
              
            </li>
            <li> Working part-time as 
              a <a href='https://housing.mcmaster.ca/housing-conference-services/careers/gra-esa/' target="_blank" rel="noopener noreferrer" className='underline'>GRA & ESA</a> for 
              student life under McMaster HCS 🏢
            </li>
          </ul>
          
          <span className='text-2xl md:text-3xl'>
          📬 <ChangeWord list={previously} />
          </span>
          
          <ul className='list-disc list-inside mb-8'>
            <li> Combatted threats 
              at <a href='https://www.qewc.com/qewc/en/subsidiaries/rlpc/' target="_blank" rel="noopener noreferrer" className='underline'>RLPC</a> as
              a Cybersecurity Intern 🦠
            </li> 
            <li>
              President and founder of the Chess♟️ and Guitar 🎸 clubs at my high school
            </li>
          </ul>

          <span className='text-2xl md:text-3xl'>
          🥇 <ChangeWord list={achievements} />
          </span>
          <ul className='list-disc list-inside mb-8'>
            <li>Straight A student - Dean's list at McMaster 💯</li>
            <li>Winner at MacEngComp 24' 🏆</li>
            <li>Finalists at MacEngComp 23' 🏆</li>
            <li>Raised nearly $6,000 for charity with McMasterPSA 🎗️</li>
            <li>Accomodated the Move-In/Move-out of up to 4700 first year students as an ESA</li>
          </ul>
        </span>
      </div>

      <div>


      </div>
      

    </div>
  )
}

export default About