import React from 'react'
import ChangeWord from '../components/ChangeWord'
import { useEffect } from 'react'
import { currently, previously, achievements, shortGoals, longGoals } from '../../data/consts'
//import HoverImage from '../components/ImageHoverCard'

const About = () => {

  useEffect(() => {
    document.title = "About Mahad"
  })

  return (
    <div className='text-white animate-fade-in mt-10 md:mt-[20%]'>

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
          I put huge emphasis on bettering myself whether that be mentally, physically, or even emotionally.
          I truly believe in the 'small steps lead to big changes' philosophy and I try to implement that in my life as much as possible.
          Always remember: <span className='font-bold'>you are your biggest competition</span> and the only person you should strive to be better than 
          is <span className='font-bold'>who you were yesterday</span>.
          I tackle this by setting both:
          <ul className='list-disc list-inside'>
            <li>short term: <ChangeWord list={shortGoals} /></li>
            <li>and long term goals: <ChangeWord list={longGoals} /></li>
          </ul>
        </p>

        <span className=''>

          <span className='text-2xl md:text-3xl'>
           📌 <ChangeWord list={currently} />
          </span>
          <ul className='list-disc list-inside mb-8'>
            <li> 2<span className='text-sm'>nd</span> year Software Engineering degree 🖥️</li>
            <li> VP of Events 
              for <a href='https://www.instagram.com/mcmasterpsa/' target="_blank" rel="noopener noreferrer" className='underline'>McMaster PSA</a> planning
               & managing events with 300+ attendees 🇵🇰 
            </li>
            <li> VP of Operations 
              for <a href='https://www.instagram.com/voicesatmac/' target="_blank" rel="noopener noreferrer" className='underline'>VoicesatMac</a> helping
              initialize the club and host interviews with various people of all backgrounds 🎤
            </li>
            <li> Attendee Relations Executive for <a href='https://www.deltahacks.com' target="_blank" rel="noopener noreferrer" className='underline'>DeltaHacks</a> aiding in the admissions for the 
            hackathon 💻
              
            </li>
            <li> Working part-time as 
              a <a href='https://housing.mcmaster.ca/housing-conference-services/careers/gra-esa/' target="_blank" rel="noopener noreferrer" className='underline'>GRA & ESA</a> for 
              student life under McMaster HCS 🏢
            </li>
            <li>
              Developing an app 
              for <a href="https://www.scleroderma.ca" target="_blank" rel="noopener noreferrer" className='underline'>Scleroderma Canada</a> partnered with
              Tech4Good and the McMaster iBioSociety to help patients 📱
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
            <li>
              Volunteered 
              for <a href='https://www.campquality.org' target="_blank" rel="noopener noreferrer" className='underline'>CampQuality</a> and spent a week at camp 🏕️
            </li>
          </ul>

          <span className='text-2xl md:text-3xl'>
          🥇 <ChangeWord list={achievements} />
          </span>
          <ul className='list-disc list-inside'>
            <li>Straight A student - Dean's list at McMaster 💯</li>
            <li>Winner at MacEngComp 24' 🏆</li>
            <li>Finalists at MacEngComp 23' 🏆</li>
            <li>Raised nearly $6,000 for charity with McMasterPSA 🎗️</li>
            <li>Accomodated the Move-In/Move-out of up to 4700 first year students as an ESA</li>
            <li>Scored 1480 on the SAT 🎓</li>
            <li>Received the AP Scholar Award 🏅</li>
          </ul>
        </span>
      </div>

      <div>


      </div>
      

    </div>
  )
}

export default About