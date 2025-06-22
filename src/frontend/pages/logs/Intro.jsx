import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Intro = () => {
    useEffect(() => {
        document.title = "Intro Log"
    } )
  return ( 
    <div className='text-textlight dark:text-textdark animate-fade-in mt-[5%] md:mt-[18%] w-full ml-5'>

      <h1 className='text-3xl font-bold text-center items-center justify-center align-middle mb-1'>
        Intro Log :) 
      </h1>

      <hr className='border-textlight dark:textdark mb-2'></hr>

      <div className='flex items-center justify-center font-semibold text-lg text-gray-500 mb-6'>
        <p className=''> ~3 min read   |   June 21th, 2025</p> 
      </div>

      <div>
        <img style={styles.img} src='../../../images/about/norway18.jpg'/>
        <p style={styles.caption} className='mb-4'>Norway's Fjords, August 2018</p>
      </div>
      

      <p className='text-lg mb-4'>
        Hello again :) Not sure how many people will even read this but I appreciate you for doing so!
        On the logbook section, I will be documenting my life more in depth (i hope). 
        There are a few rules I'll be following:
      </p>

      <ol className='list-disc list-outside mb-4 text-lg space-y-2'>
        <li>
          <span className='font-bold'>NO AI!</span> — We often blindly use AI in everything nowadays and I feel it makes it difficult for us to be authentic.
          You'll be seeing me myself and I on this blob of the internet. The max I'll do is use it for motivation maybe... pls dont end me
        </li>
        <li>
          <span className='font-bold'>NO FILTER!</span> - I'm going to attempt to be as transparent as possible about my views, opinions, and experiences.
          Luckily no politics will be discussed.
        </li>
        <p className='text-lg mb-4'>
        So that's all I can think of for now but this'll likely be the only part of the logbook that might be edited in the future. 
        I'll also try to keep at least one image per log to retain attention for today's generation.
        </p>
      </ol>

      <div className='mb-4'>
        <h1 className='text-xl font-bold mb-2 underline'>Why?</h1>
        <p className='text-lg mb-2'>
          Frankly, idk. Also, the underlined words won't change every time you click them like they do on the main pages. It unfortunately
          takes too long (2 mins) to implement so that luxury is reserved for the main pages XD.
        </p>
        <p className='text-lg mb-2'>
          Anyway, if you think about it, this page is in the depths of the internet on a page not a lot of people would visit.
          That gives it a nice bit of balance from being both too public or too private. Maybe its a sort of public diary which gives me a wierd sense of comfort?
        </p>
        <p className='text-lg mb-2'>
          I'm also at a point in life where I want to try out new things cause why not, you know? What's the worst that could happen?
          Maybe my future employer will see this and think "lmao what is this guy doing?" and throw my resume in the trash.
          BUT, they could also think "wow, he took a risk, dude seems interesting." and still throw my resume in the trash. On the other hand, maybe someone I employ
          will see this and think "wow, I'd love to work with this guy". There's a million things that COULD happen. Why not focus on what's in your hand?
        </p>
        <p className='text-lg mb-2'>
          At the end of the day,
          I keep itching towards the idea of not caring about the opinions of others. Not in a self-centered or rude way, but in more so in a "it's my life and I think
          I should do what I want" way. Hey, I can make a whole logbook page out of that!
        </p>
        <p className='text-lg mb-2'>
          Moreso, I might affect someone in a positive way. Maybe someone will read this and think "damn, he's speaking facts" and NOT throw my resume in the trash.
          LOL just kidding not everything's about getting a job. Or is it... Anyway, I'd like to think I can help someone out there in a way too. To me, there are almost 
          no negatives to this. Either I help someone out, I learn how to finally write better, or no one ever reads this and I just have a nice place to vent my thoughts. 
        </p>
      </div>

      <div className='mb-4'>
        <h1 className='text-xl font-bold mb-2 underline'>Plans</h1>
        <p className='text-lg mb-4'>
          At this point, I wanna write about a lot but you know how that usually goes.
          I'll try to hold myself accountable and meet those standards but you never know.
          My current plans are to write about 3 main categories which you might've noticed on the main logbook page:
        </p>
        <ol className='list-disc list-outside mb-4 text-lg space-y-2'>
          <li>
            <span className='font-bold'>life</span> — Here I want to write about my personal life choices.
            This would include anything from hobbies, interests, personal growth, etc...
          </li>
          <li>
            <span className='font-bold'>school</span> — This will focus on my academic life.
            I'd like to think I'll keep it going throughout my life incase I pursue a master's or whatnot.
          </li>
          <li>
            <span className='font-bold'>career</span> — I think this would be interchangeable with school at times 
            but would focus more on professional development such as internships (if I get to do any more &lt;/3).
          </li>
        </ol>
          <p className='text-lg mb-2'>
          Other than these, I might add reviews on courses I've taken at Mac which I guess would come under school.
          I could also include some of the external exams I've done such as the SAT, APs, IELTS, etc...
          </p>
          <p className='text-lg mb-2'>
            I thought of also adding any notes I made for courses which might help out someone out there.
            I know how much I struggled at times with those so if it can help someone, I'll be glad.
          </p>
      </div>
      
      <div className='mb-4'>
       <h1 className='text-xl font-bold mb-2 underline'>Reflection</h1>

       <p className='text-lg mb-2'>
        I'm excited to see how this goes. I've seen countless portfolios on the internet with logbooks/blogs and they're always interesting to skim through.
        I feel like it gives you a nice understanding of who they are as a person.
        Whether its them rambling on about some random topic or sharing good advice on topics, either way its a nice read for me at least.
        It almost feels like a 1P13 or Innovate 1Z03 reflection but thank god this one isn't graded and I can ramble on about whatever I feel like.
       </p>
       <p className='text-lg mb-2'>
        If you made it this far, I appreciate you for doing so. I used to make YouTube videos back in 2018. 
        It was mainly a Fortnite gaming channel and I think I made around 5-10 videos with a few hundred subscribers before I quit.
        This just feels like a YouTube outro atp but thank you! If you have any feedback, suggestions, or just wanna chat,
        feel free to reach out through the <a href='https://www.mahadhssn.com/#/contact' target="_blank" rel="noopener noreferrer" className='underline'>contact page :)</a>
       </p>
      </div>

    </div>
  )
}

const styles = {
  img: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1rem',
    marginBottom: '0.5rem',
    width: '75%',
    height: 'auto',
    borderRadius: '1rem',
  },
  caption: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: '1.125rem',
  }
}

export default Intro
