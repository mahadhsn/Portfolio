import { useEffect} from 'react'

const Internship = () => {
    useEffect(() => {
        document.title = "Internship Log"
    })

  return (
    <div className='text-textlight dark:text-textdark animate-fade-in mt-[5%] md:mt-[18%] w-full ml-5'>

        <h1 className='text-3xl font-bold text-center items-center justify-center align-middle mb-1'>
            How to land an internship 101
        </h1>
        
        <hr className='border-textlight dark:textdark mb-2'></hr>

        <div className='flex items-center justify-center font-semibold text-lg text-gray-500 mb-6'>
            <p className=''> ~3 min read   |   June 21th, 2025</p> 
        </div>

        <div>
        <img style={styles.img} src='../../../images/logs/internship/TD_View.jpg'/>
        <p style={styles.caption} className='mb-4'>The view from the 46th floor of TD Terrace, May 2025</p>
      </div>

        <p className='text-lg mb-4'>
            Alright, let's get some things straight before you start reading this:
        </p>

        <ol className='list-disc list-outside mb-4 text-lg space-y-2'>
        <li>
          <span className='font-bold'>I am not some internship wizard</span> — You'll see people on LinkedIn with 7 FAANG internships who started coding out of the womb
          but that's not me. The first time I ever touched code was actually somewhere in January of 2023. Think of this blog as a checklist for when you are looking to get employed. Checking these off will likely increase your chances but can never
          guarantee that you'll land one. These are just tips which I feel helped me land my first ever internship at TD. Hope for the best, but always prepare for the worst.
        </li>
        <li>
          <span className='font-bold'>A lot of it comes down to luck</span> — Even if you LeetCode in your sleep, nothing stops the hiring manager from picking a better qualified individual.
          Or even their old highschool buddy who's never touched code but has a great sense of humor. Focus on what is in your hands and leave the rest for fate to decide.
        </li>
        </ol>

        <p className='text-lg mb-4'>
            Now that the disclaimers are out of the way, here are 5 key ways you can increase your chances of landing an internship (in no particular order):
        </p>

        <h1 className='text-2xl font-bold mb-2 underline'>Skillset</h1>
      
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
