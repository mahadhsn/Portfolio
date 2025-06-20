import React from 'react'
import { useEffect } from 'react'

const Intro = () => {
    useEffect(() => {
        document.title = "Intro Log"
    } )
  return ( 
    <div className='min-h-screen text-textlight dark:text-textdark flex flex-col opacity-0 animate-fade-in mt-[5%] md:mt-[18%] w-full'>

      <h1 className='text-3xl font-bold text-center items-center justify-center align-middle mb-2'>
        Intro Log :) 
      </h1>

      <hr className='border-textlight dark:textdark mb-2'></hr>

      <div className='flex items-center justify-center font-semibold text-lg text-gray-500 mb-5'>
        <p className=''> X min read   |   June 20th, 2025</p> 
      </div>

      <p className='text-lg mb-4'>
        Hello again :) Not sure how many people will even read this but I appreciate you for doing so!
        On the logbook section, I will be documenting my life more in depth (i hope). 
        There are a few rules I'll be following:
      </p>

      <ol className='list-disc list-outside mb-4 text-lg space-y-2'>
        <li>
          <span className='font-bold'>NO AI!</span> — We often blindly use AI in everything nowadays and I feel it makes it difficult for us to be authentic.
          You'll be seeing me myself and I on this blob of the internet.
        </li>
        <li>
          <span className='font-bold'>NO FILTER!</span> - I'm going to attempt to be as transparent as possible about my views, opinions, and experiences.
          Luckily no politics will be discussed.
        </li>
        <p className='text-lg mb-4'>
         So that's all I can think of for now but this'll likely be the only part of the logbook that might be edited in the future. 
        </p>
      </ol>

      <h1 className='text-xl font-bold mb-1'>Why?</h1>
      <p className='text-lg mb-1'>
        Frankly, idk. If you think about it, this page is in the depths of the internet on a page not a lot of people would visit.
        That gives it a nice bit of balance of being too public or too private. Maybe its a sort of public diary which gives me a wierd sense of comfort?
      </p>
      <p className='text-lg mb-1'>
        I'm also at a point in life where I want to try out new things cause why not you know? What's the worst that could happen?
        Maybe my future employer will see this and think "lmao what is this guy doing?" and throw my resume in the trash.
        BUT, they could also think "wow, he took a risk, dude seems interesting." and still throw my resume in the trash. On the other hand, maybe someone I employ
        will see this and think "wow, I'd love to work with this guy". There's a million things that COULD happen. Why not focus on what's in your hand?
      </p>
      <p className='text-lg mb-1'>
        At the end of the day,
        I keep itching towards the idea of not caring about the opinions of others. Not in a self-centered or rude way, but in more so in a "it's my life and I think
        I should do what I want" way. Hey, I can make a whole logbook page out of that! Added it to my list, hopefully it sees the light of day at some point.
      </p>
      <p className='text-lg mb-1'>
        Moreso, I might affect someone in a positive way. Maybe someone will read this and think "damn, he's speaking facts" and NOT throw my resume in the trash.
        LOL just kidding not everything's about getting a job. Or is it... Anyway, I'd like to think I can help someone out there in a way too. To me, there are almost 
        no negatives to this. Either I help someone out, I learn how to finally write better, or no one ever reads this and I just have a nice place to vent my thoughts.
      </p>

    </div>
  )
}

export default Intro
