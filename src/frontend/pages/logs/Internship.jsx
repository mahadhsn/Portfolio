import { useEffect} from 'react'

const Internship = () => {
    useEffect(() => {
        document.title = "Internship Log"
    })

  return (
    <div className='text-textlight dark:text-textdark animate-fade-in mt-[5%] md:mt-[18%] w-full ml-5'>

      {/* Header */}
      <div className='mb-6'>
        <h1 className='text-3xl font-bold text-center items-center justify-center align-middle mb-1'>
            How to land an internship 101
        </h1>
        
        <hr className='border-textlight dark:textdark mb-1'></hr>

        <div className='flex items-center justify-center font-semibold text-lg text-gray-500'>
            <p className=''> ~3 min read   |   June 21th, 2025</p> 
        </div>
      </div>

      {/* Picture + Caption */}
      <div className='mb-6'>
        <img style={styles.img} src='../../../images/logs/internship/TD_View.jpg'/>
        <p style={styles.caption}>The view from the 46th floor of TD Terrace, May 2025</p>
      </div>


      {/* Intro */}
      <div className='mb-6'>
        <p className='text-lg mb-4'>
            Alright, let's get some things straight before you start reading this:
        </p>

        <ol className='list-disc list-outside mb-4 text-lg space-y-2'>

          <li>
            <span className='font-bold'>I am not some internship wizard</span> 
            <p></p>
            You'll see people on LinkedIn with 7 FAANG internships who started coding out of the womb
            but that's not me. I'm learning too! The first time I ever touched code was actually somewhere in January of 2023. Think of this blog as a checklist for when you are looking to get employed. Checking these off will likely increase your chances but can never
            guarantee that you'll land one. These are just tips which I feel helped me land my first ever internship at TD. Hope for the best, but always prepare for the worst.
          </li>

          <li>
            <span className='font-bold'>A lot of it comes down to luck</span>
            <p></p>
            Even if you LeetCode in your sleep, nothing stops the hiring manager from picking a better qualified individual.
            Or even their old highschool buddy who's never touched code but has a great sense of humor. Focus on what is in your hands and leave the rest for fate to decide.
          </li>
        </ol>

        <p className='text-lg'>
            Now that the disclaimers are out of the way, to understand how to land an internship, we need to first understand why companies 
            even hire interns in the first place. A lot of people nowadays believe that interns don't actually provide any value to the company they're with. This is simply false. So:
        </p>
      </div>

      {/* Why Hire Interns */}
      <div className='mb-6'>

        <h1 className='text-2xl font-bold mb-4 underline'>Why hire interns?</h1>

        <ol className='list-disc list-outside mb-2 text-lg space-y-2'>
          <li>
            <span className='font-bold'>It's an investment</span>
            <p></p>
            Companies hire interns to give them a trial version of what it would be like to work there full-time. Realistically,
            companies know that interns are not going to invent a new massively efficient process saving them billions BUT:
          </li>
          
          <li>
            <span className='font-bold'>Interns provide value</span>
            <p></p>
            Firstly, a lot of interns bring valuable technical expertise to the table. If they are technically sound, they are able
            to pick up pace and get close to the level of work being done by a Junior Developer. Secondly, interns are usually from the younger
            generation. This allows them to have a unique way of looking at problems and brings a fresh set of eyes. Most of the time, 
            if someone has been in the industry long enough, they tend to get used to the norm but interns challenge this for the better.
            This is why companies look for curiosity and ambition to learn!
          </li>

          <li>
            <span className='font-bold'>Great marketing</span>
            <p></p>
            Our generation tends to post everything on social media. A few nice LinkedIn posts about your experience at your internship
            is enough for people to remember that oh that guy had an internship at said company, sounds like a nice place. And then, next time
            they see a job posting from that company, they'll be more likely to apply. This makes it easier for the company to hire younger, full-timers
            which gives them all return-on-investment they needed. And the cycle continues.
          </li>
        </ol>
      </div>

      {/* Skill */}
      <div className='mb-6'>
        <p className='text-lg mb-4'>
            Now, we can reverse-engineer a checklist such that we do our best to meet these demands and land that return offer. But, all of these will only be applied after we actually
            get the internship and join :( . So, let's take another step back and talk about how you can maximize those chances using some more reverse engineering. There are 10000000000000
            main topics I'll cover which will help you do this (in no particular order):
        </p>

        <h1 className='text-2xl font-bold mb-2 underline'>Skillset</h1>

        <p className='text-lg mb-2'>
            Though I said this list was in no particular order, I'd argue that this point is the most important. 
        </p>

        <p className='text-lg mb-2'>
            Expanding your skillset will likely be your best bet at landing an internship. It's simple: the industry hires skill. You can follow all the tutorials you can find on YouTube
            about builing AIs from scratch, autonomous driving, etc... but, if you don't learn anything from them, those projects are not worth much. The second you land that interview and 
            the hiring manager asks you about details about said projects, it's over for you. It's a similar situation if you vibe-code all of your projects.
        </p>

        <p className='text-lg mb-4'>
            The only thing that sets us apart from AI is that we are capable of problem solving. If we ourselves just start using Chat to code everything for us, sure we might win a few hackathons
            and impress a few people but we aren't gaining much in the long-run. All of this is obviously much easier said that done, so how can you actually get better at coding? (or anything for that
            matter):
        </p>

        <p className='text-lg mb-2'>
              <span className='font-bold'>Consistency.</span> Spend a week researching where your interests lie. If you figure it out, great! Make it your goal to do any sort of work on the topic for at least
              1 hour a day, but you have to be consistent. There are thousands of videos, blogs, documentations, and resources online which you can spend time watching. Remember, ANY work is better that no work.
        </p>
        <p className='text-lg mb-2'>
              If you can't figure it out, make it your goal to reasearch for an hour a day, I'm sure you'll land on something eventually. I'd also recommmend you focus on one
              thing and not dabble in too much or else you become a master of none. Companies prefer when you are highly specialized in one field.
        </p>
      </div>

      {/* Network */}
      <div className='mb-6'>
        
        <h1 className='text-2xl font-bold mb-2 underline'>Network</h1>

        <p className='text-lg mb-2'>
            A lady on our orientation day at TD said that "My network is my net worth" and it was a little cheesy but very true.
        </p>

        <p className='text-lg mb-2'>
            
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
    maxWidth: '80%',
    maxHeight: '70vh',
    width: 'auto',
    height: 'auto',
    borderRadius: '1rem',
    objectFit: 'cover',
  },
  caption: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: '1.125rem',
  }
}

export default Internship
