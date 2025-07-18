import { useEffect } from "react";

import { Helmet } from "react-helmet";

const Internship = () => {
  useEffect(() => {
    document.title = "Internship Log";
  });

  return (
    <div className="text-textlight dark:text-textdark animate-fade-in mt-[5%] md:mt-[18%] w-full text-lg">
      <Helmet>
        <title>How to land an internship | Mahad Hassan</title>
        <meta
          name="description"
          content="Mahad Hassan's How to Land an Internship 101 Log"
        />
      </Helmet>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-center items-center justify-center align-middle mb-1">
          How to land an internship 101
        </h1>

        <hr className="border-textlight dark:textdark mb-1"></hr>

        <div className="flex items-center justify-center font-semibold text-gray-500">
          <p className=""> ~12 min read | July 7th, 2025</p>
        </div>
      </div>

      {/* TD Picture */}
      <div className="mb-6">
        <img
          style={styles.img_portrait}
          src="../../../images/logs/internship/TD_View.jpg"
        />
        <p style={styles.caption}>
          The view from the 46th floor of TD Terrace, May 2025
        </p>
      </div>

      {/* Intro */}
      <div className="mb-6 space-y-2">
        <p className="mb-4">
          Alright, let's get some things straight before you start reading this:
        </p>

        <ol className="list-disc list-outside mb-4 space-y-2">
          <li>
            <span className="font-bold">I am not some internship wizard</span>
            <p></p>
            You'll see people on LinkedIn with 7 FAANG internships who started
            coding out of the womb, but that's not me. I'm learning too! The
            first time I ever touched code was actually somewhere in January of
            2023 in Python. Think of this blog as a checklist for when you are
            looking to get employed. Checking these off will likely increase
            your chances, but can never guarantee that you'll land one. These
            are just tips that I feel helped me land my first-ever internship at
            TD. Hope for the best, but always prepare for the worst.
          </li>

          <li>
            <span className="font-bold">A lot of it comes down to luck</span>
            <p></p>
            Even if you LeetCode in your sleep, nothing stops the hiring manager
            from picking a better-qualified individual. Or even their old high
            school buddy who's never touched code but has a great sense of
            humor. Focus on what is in your hands and leave the rest for fate to
            decide.
          </li>
        </ol>

        <p>
          Now that the disclaimers are out of the way, to understand how to land
          an internship, we need to first understand why companies even hire
          interns in the first place. Many people nowadays believe that interns
          don't actually provide any value to the company they're with. This is
          simply false. So:
        </p>
      </div>

      {/* Why Hire Interns */}
      <div className="mb-6 space-y-2">
        <h1 className="text-2xl font-bold mb-4 underline">Why hire interns?</h1>

        <ol className="list-disc list-outside space-y-2">
          <li>
            <span className="font-bold">It's an investment</span>
            <p></p>
            Companies hire interns to give them a trial version of what it would
            be like to work there full-time. Realistically, companies know that
            interns are not going to invent a new massively efficient process
            saving them billions BUT:
          </li>

          <li>
            <span className="font-bold">Interns provide value</span>
            <p></p>
            Firstly, a lot of interns bring valuable technical expertise to the
            table. If they are technically sound, they are able to pick up pace
            and get close to the level of work being done by a Junior Developer.
            Secondly, interns are usually from the younger generation. This
            allows them to have a unique way of looking at problems and bring a
            fresh set of eyes. Most of the time, if someone has been in the
            industry long enough, they tend to get used to the norm, but interns
            challenge this for the better. This is why companies look for
            curiosity and ambition to learn while hiring!
          </li>

          <li>
            <span className="font-bold">Great marketing</span>
            <p></p>
            This one's a little debatable, but it makes sense in my opinion. Our
            generation tends to post everything on social media. A few nice
            LinkedIn posts about your experience at your internship are enough
            for people to remember that, oh, that guy had an internship at said
            company, sounds like a nice place. And then, next time they see a
            job posting from that company, they'll be more likely to apply. This
            makes it easier for the company to hire younger, full-timers, which
            gives them the return-on-investment they needed. And the cycle
            continues.
          </li>
        </ol>
      </div>

      <p className="mb-4">
        Now, we can reverse-engineer a checklist such that we do our best to
        meet these demands and land that return offer. But, all of these will
        only be applied after we actually get the internship and join :( . So,
        let's take another step back and talk about how you can maximize those
        chances using some more reverse engineering. There are 5 main topics
        I'll cover which, will help you do this (in no particular order):
      </p>

      {/* Skill */}
      <div className="mb-6">
        <div className="space-y-2 mb-6">
          <h1 className="text-2xl font-bold underline mb-4">Skillset</h1>

          <p>
            Though I said this list was in no particular order, I'd argue that
            this point is the most important.
          </p>

          <p>
            Expanding your skillset will likely be your best bet at landing an
            internship. It's simple: the industry hires skill. You can follow
            all the tutorials you can find on YouTube about building AIs from
            scratch, autonomous driving, etc, but if you don't learn anything
            from them, those projects are not worth much. The second you land
            that interview and the hiring manager asks you about details about
            said projects, it's over for you. The same happens if you vibe-code
            all the time.
          </p>
        </div>

        {/* Facial Rec Pic */}
        <div className="mb-6">
          <img
            style={styles.img_landscape}
            src="../../../images/logs/internship/tech.PNG"
          />
          <p style={styles.caption}>
            2nd place winning MacEngComp project, Nov 2024
          </p>
        </div>

        <div className="space-y-2">
          <p className="mb-4">
            The only thing that sets us apart from AI is that we are capable of
            creative thinking and solving real problems. If we ourselves just
            start using Chat to code everything for us, sure, we might win a few
            hackathons and impress a few people, but we aren't gaining anything
            in the long run. All of this is obviously much easier said than
            done, so how can you actually get better at coding? (or anything for
            that matter):
          </p>

          <p>
            <span className="font-bold">Consistency.</span> Spend a week
            researching where your interests lie. If you figure it out, great!
            Make it your goal to do any sort of work on the topic for at least 1
            hour a day, but you have to be consistent. There are thousands of
            videos, blogs, documentations, and resources online that you can
            spend time watching. Remember, ANY work is always better than no
            work. No progress: 1.00<sup>365</sup> = 1 &nbsp;&nbsp;|&nbsp;&nbsp;
            Even just 1% progress daily: 1.01<sup>365</sup> ≈{" "}
            <span className="font-bold">37.78</span>
          </p>

          <p>
            If you can't figure it out, make it your goal to research for an
            hour a day; I'm sure you'll land on something eventually. I'd also
            recommend you focus on one thing and not dabble in too much, or else
            you become a master of none. Companies prefer that you are highly
            specialized in one field, as that way you become a rare resource.
            Very few people are highly specialized nowadays, and most people
            know the basics of a lot of things. Find your passion and dive into
            it.
          </p>
        </div>
      </div>

      {/* Network */}
      <div className="mb-6 space-y-2">
        <h1 className="text-2xl font-bold mb-4 underline">Network</h1>

        <p>
          A lady at our orientation day at TD said that{" "}
          <span className="font-light">"My network is my net worth,"</span> and
          it was a little cheesy but very true. Even if you're an introvert, try
          to meet people whenever you can and set up meaningful coffee chats
          with them.
        </p>

        <p>
          The best practice for a coffee chat is to have a genuine interest in
          what the person does and their history. Put yourself in their shoes.
          If someone you've never met before reached out to you and started
          begging you for a referral, would you give them one? Probably not.
          However, if that same person showed genuine interest and passion in
          what you do and was able to hold an interesting conversation, you
          might even refer them without them asking. This feels like something
          out of the 48 Laws of Power by Robert Greene, but being likeable is
          very important to be successful!
        </p>

        <p>
          People love talking about themselves. It's basic human psychology.
          Look up the person you're meeting on LinkedIn, learn a little about
          their past & interests, and set up a few genuine questions from which
          you can later branch and start a conversation. I'd recommend not to
          blatantly ask for a referral unless it gets brought up in the
          conversation. It just gives off the feeling that that was the only
          reason you wanted to chat with them in the first place. It makes
          people feel used.
        </p>

        <p>
          People also love feeling seen. After you meet anyone new, reach out to
          them on LinkedIn, talk about how you really enjoyed the conversation
          you had with them, and bonus points if you can mention a minor detail.
          This'll make them feel like "oh wow, no way they remembered that," and
          hopefully you'll stay in their head for a while.
        </p>
      </div>

      <div className="space-y-2 mb-6">
        <p>
          At this point, you should have decent skills and a network you can
          rely on. Now, you'll start the actual application process. Of course,
          there is no order to do this in, but I think having a network before
          applying could help.
        </p>

        <p>
          Applying is hard. Nowadays, it's common for people to put in 250+
          applications before even landing an interview. You must treat it like
          a full-time job. Apply everywhere, but put in extra effort at the
          places you think you have connections. Remember that one campus
          recruiter you met last fall at your campus fair? Will they remember
          you? Likely not, but reach out to them anyway in case they do. If
          you've been following my tips, they likely will remember you cause you
          complimented their shirt or something along those lines.
        </p>
      </div>

      {/* Resume */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4 underline">Resume</h1>

        {/* Resume Examples */}
        <div className="mb-6 flex flex-col gap-4">
          <div className="flex flex-col items-center">
            <img
              style={styles.img_portrait}
              src="../../../images/logs/internship/bad_resume.png"
              alt="Bad Resume Example"
            />
            <p style={styles.caption}>
              Bad resume example |{" "}
              <a
                href="https://enhancv.com/resume-examples/engineering/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enhancv.com
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              style={styles.img_portrait}
              src="../../../images/logs/internship/good_resume.jpg"
              alt="Good Resume Example"
            />
            <p style={styles.caption}>
              Good resume example |{" "}
              <a
                href="https://medium.com/free-code-camp/writing-a-killer-software-engineering-resume-b11c91ef699d"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium.com
              </a>
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <ol className="list-disc list-outside space-y-2">
            <li className="space-y-2">
              <span className="font-bold">Overview</span>
              <p>
                Follow a template and keep it to a page in length. Do you know
                how long a recruiter takes to scan your resume?{" "}
                <a
                  href="https://www.tealhq.com/post/how-long-recruiters-spend-reviewing-resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  An average of 7-9 seconds
                </a>
                , which makes easy readability key.
              </p>
              <p>
                There are many different templates to follow, but choose one
                that is plain and tidy. Avoid a lot of colours and images that
                could distract the recruiter from the actual bullet points and
                experiences on the resume. Make sure everything is in line, the
                same font, size, etc, nothing should look off. This is
                important, firstly, so that nothing looks off. Secondly, a lot
                of companies use AI parsers to do a pre-scan of resumes.
                Multiple columns of data can confuse the parsers.
              </p>
              <p>
                Your resume's bullet points should follow the
                <span className="font-bold">
                  "[enter an action verb] [enter thing made] which resulted in
                  [enter estimated number]% better efficiency in our
                  system."{" "}
                </span>
                I'd recommend you only use the action verbs that are listed on{" "}
                <a
                  href="https://hls.harvard.edu/bernard-koteen-office-of-public-interest-advising/opia-job-search-toolkit/action-verbs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Harvard's list of Action Verbs
                </a>
              </p>
              <p>
                Avoid any white spaces which could make your resume feel empty.
                If all your text is too left-centered, for example, it gives a
                feeling of emptiness. Construct your bullet points such that
                each row extends to the end of the page.
              </p>
              <p>
                Let's go in order from top to bottom of what your resume should
                be structured like:
              </p>
            </li>

            <li>
              <span className="font-bold">Header</span>
              <p></p>
              Include your legal name, contact info, general address, GitHub
              profile, and portfolio link if you have one. Save and store
              whatever template you use here, as if you have to create a cover
              letter, its advised to use the same header as the one on your
              resume for consistency.
            </li>

            <li>
              <span className="font-bold">Professional Summary</span>
              <p></p>
              In my opinion, a professional summary is not needed. It's long,
              tedious to read, and recruiters simply don't look at it for long
              enough. If they spend time reading the summary, they won't even
              get to the experiences and whatnot. Situations when you can
              include a summary is if you feel like your resume is not packed
              enough (ideally, you should still try to fill it with some
              projects and what not). In this case, keep it short, concise and
              easy to read. Avoid using overcomplicated words. A good
              communicator easily gets their point across, not by showing off
              how many big words they know.
            </li>

            <li className="space-y-2">
              <span className="font-bold">
                1st Section: Education vs Skills
              </span>
              <p>
                It's debatable whether your education should be listed as the
                first thing on your resume or your skills. It doesn't really
                matter as long as they are both well-made.
              </p>
              <p>
                For the education section, include ONLY your university
                involvement. List your degree name, expected graduation date,
                achievements/clubs/courses, and your GPA if it's above ~3.5.
              </p>
              <p>
                Your skills section should include the main technical skills you
                are proficient in. Optionally, you can include more
                non-technical skills such as MS Office, etc...
              </p>
            </li>

            <li className="space-y-2">
              <span className="font-bold">Experiences</span>
              <p>
                List experiences relevant to the job description. If you're
                applying to a Software Engineering Intern position, sure, your
                experience at Shopper's is nice, but, is not as valuable on the
                resume as a relevant experience would be.
              </p>
              <p>
                If you don't have any relevant experiences, sign up for
                volunteer opportunities at your school. Some clubs offer
                initiatives that provide resume-worthy experiences. If you don't
                have access to this, build meaningful projects. Tie it back to
                the points discussed earlier of not copying a random idea.
              </p>
              <p>
                A pro-tip would be to brainstorm how you spend your week and
                write down the most annoying problems you face going about your
                day, and think of projects that could solve them. That way, you
                have a great project AND something that saved you a lot of pain.
              </p>
            </li>

            <li>
              <span className="font-bold">Projects</span>
              <p>
                Keep this similar to the experiences section by keeping the same
                "did x to improve y by z%" format. Try to include projects that
                solve real-world problems you or your peers have been facing.
                Some people include a date on when they completed the project;
                this is mostly optional.
              </p>
            </li>

            <li className="space-y-2">
              <span className="font-bold">Extras</span>
              <p>
                As we enter the more modern age where everything is digitized,
                I'd recommend having links all over your resume. A link to your
                GitHub for each project you list, a link to the company's
                website for any experiences you have, and links to your contact
                information, such as a mailto: for your email, a link to your
                LinkedIn, and a link to your portfolio. I would still recommend
                having another version of your resume that has the links fully
                typed out, in case you have to give a physical copy to someone.
              </p>

              <p>
                Try to not include any experiences from high school. These are
                primitive and not credible enough to list on a professional
                resume. An interests/hobbies section is optional. If you don't
                have enough experience/projects, you can add it as a last resort
                just to fill in the space.
              </p>

              <p>
                Check out{" "}
                <a
                  href="https://www.mahadhssn.com/#/resume"
                  className="underline"
                >
                  my resume
                </a>{" "}
                for reference.
              </p>
            </li>
          </ol>
        </div>
      </div>

      {/* Cover Letter */}
      <div className="mb-6 space-y-2">
        <h1 className="text-2xl font-bold underline">Cover Letter</h1>

        <p>
          No one likes writing cover letters. I'd even argue that no one likes
          reading them. However, a good few applications still require you to
          submit one. So, let's make the best one possible.
        </p>

        <p>
          Follow the same overall template as your resume. This means keeping
          the header section with your name and other details the same.
        </p>

        <p>
          Include 5 total paragraphs. 2 for the intro and conclusion, 1 for your
          experiences, 1 for projects, and 1 for why you want to work at the
          company specifically. I'd say ~300 words would be the sweet spot. To
          maximize your chances, do some research on the company and point out
          any details you can that you think both relate to your passions and
          would be considered 'underground' info.
        </p>
      </div>

      <div className="space-y-2">
        <p>
          At this point, you need to apply, apply, and apply. Remember{" "}
          <span className="font-bold">consistency</span>! Try to submit 10
          applications a day. That way, you'll have submitted 300 by the end of
          the month. You'll have to treat it like an unpaid, full-time job to
          maximize your chances.
        </p>

        <p>
          If you're lucky, by now you <span className="italic"> should </span>{" "}
          have received an interview or two. If not, that's okay. Keep applying
          and hoping for the best! If you've followed everything on this list,
          you should be getting a call very soon!
        </p>

        <p></p>
      </div>

      {/* Interview */}
      <div className="mb-6">
        <div className="space-y-2 mb-6">
          <h1 className="text-2xl font-bold underline">Interview</h1>

          <p>
            Interviews are scary, but if you've received a call, you've filtered
            out thousands of other people from the competition, so well done!
            Take a minute to pat yourself on the back!
          </p>

          <p>
            Depending on where you got the interview for, I'd recommend that you
            do some research on the types of questions the company usually asks.
            Some places don't do technical questions whatsoever and only focus
            on the behavioural side while some go through 2 rounds of heavy
            technical questions.
          </p>

          <p>
            Your best bet would be to reach out to someone on LinkedIn who is
            currently working at the company for a similar role as the one you
            applied for. People are usually quite helpful, so that shouldn't be
            an issue. Good old Reddit also works well for this info.
          </p>
        </div>

        {/* Technical */}
        <div className="mb-6 space-y-2">
          <p>
            For the technical portion, I'd recommend that you just grind out
            LeetCode. Most of the time, the industry likes to test you on how
            you can make efficient solutions for complex problems, and what
            better way to test that than LeetCode? Again, practice makes
            perfect, so keep practicing consistently.
          </p>

          <p>
            For other positions like Full-Stack Developers, I'd recommend doing
            more research as they'd likely ask basics for React, Next.js, and
            other stacks if listed in the job description.
          </p>
        </div>

        {/* Facial Rec Pic */}
        <div className="mb-6">
          <img
            style={styles.img_landscape}
            src="../../../images/logs/internship/star.png"
          />
          <p style={styles.caption}>
            Star Method |{" "}
            <a
              href="https://www.free-power-point-templates.com/articles/star-interview-method/"
              target="_blank"
              className="underline"
            >
              free-power-point-templates.com
            </a>
          </p>
        </div>

        {/* Behavioural */}
        <div className="mb-6 space-y-2">
          <p>
            For the behavioural portion, the STAR method is unmatched. Refer to
            the image above for it.
          </p>

          <p>
            First of all, don't be nervous to take your time to understand the
            question being asked. 5-10 seconds spent brainstorming can be the
            difference between rambling and a well-structured response. Speaking
            slowly and taking your time also gives off a feeling of confidence.
          </p>

          <p>
            The usual first question asked is, "Tell me about yourself." For
            this, I like to talk about my education, courses, experiences,
            projects, and hobbies in that order. Any other way works as long as
            they learn something new about you and you speak for about ~2
            minutes on it.
          </p>

          <p>
            Start off any other common behavioural question by describing the{" "}
            <span className="font-bold">S</span>ituation. This turns the answer
            into more of a story which, is usually preferred by recruiters. Good
            communication is very important!
          </p>

          <p>
            As you build up to the answer, start describing the{" "}
            <span className="font-bold">T</span>ask. Now you have conveyed the
            background of the entire situation.
          </p>

          <p>
            Next, talk about what <span className="font-bold">A</span>ction you
            took. Here, be honest about how much you did, as companies usually
            like hearing that you are capable of collaborating with others.
            Share any struggles and how you overcame those as well.
          </p>

          <p>
            Lastly, inform them of the <span className="font-bold">R</span>esult
            of it all. Whether you ended up winning the hackathon or did well in
            the assignment, inform them of the outcome. This last piece
            completes the story you set up and gives the interviewer a good
            sense that you can communicate well!
          </p>

          <p>Repeat this for any behavioural question asked.</p>
        </div>

        {/* Offer - or not */}
        <div className="mb-6 space-y-2">
          <h1 className="text-2xl font-bold underline">Offer - or not</h1>

          <p>
            At this point, you have completed all the steps and are waiting to
            hear back from the employer. You have done everything that you
            could, so try not to stress. Stressing at this point would not make
            any difference to the outcome whatsoever. If anything, you'll just
            be restricting yourself from applying to more positions.
          </p>

          <p className="mb-4">
            Let fate decide what happens and try to come to peace with it, even
            if you don't land the position. We're getting more into the
            spiritual and psychological aspect of things, but I like to believe
            it all works out at the end of the day. Having faith in that helps
            you from wasting energy on stressing.
          </p>

          <p>
            If you received the offer, CONGRATS! Your hard work has paid off.
            Enjoy your internship and do your best!
          </p>

          <p>
            If not, don't stress. Keep your head up and keep fighting your
            fight. You'll land something eventually, and it'll be better than
            whoever rejected someone as amazing as you :). Hard work always pays
            off.
          </p>
        </div>

        {/* Conclusion */}
        <div className="mb-6 space-y-2">
          <h1 className="text-2xl font-bold underline">Conclusion</h1>

          <p>
            Again, I'm not an internship wizard. Getting internships/jobs
            nowadays is extremely hard, and everyone admits it. I just think
            I've learnt a thing or two going through this whole process and
            would like to save others the struggle of having to learn all of it
            on their own.
          </p>

          <p>
            Keep your head up and keep applying. It's tough. You'll feel like
            quitting when you hit 200 applications without an interview call.
            That's when you have to keep going. Who knows if the next
            application will be your offer? Well, you can't know until you
            apply!
          </p>

          <p>
            Keep going and be consistent. Refer back to this page if you ever
            need advice on anything specific, and feel free to reach out to me
            anytime on LinkedIn. As of the day I made this post, I've helped
            around 4 people land an internship at TD just by giving them advice
            on the whole process. Now, 90% of that advice is available here.
          </p>

          <p>
            Thanks for reading this and I wish you the best in your endeavours.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  img_portrait: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1rem",
    marginBottom: "0.5rem",
    maxWidth: "80%",
    maxHeight: "70vh",
    width: "auto",
    height: "auto",
    borderRadius: "1rem",
    objectFit: "cover",
  },
  img_landscape: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1rem",
    marginBottom: "0.5rem",
    width: "75%",
    height: "auto",
    borderRadius: "1rem",
  },
  img_sideBySide: {
    display: "block",
    width: "100%",
    height: "auto",
    borderRadius: "0.75rem",
    objectFit: "cover",
  },
  caption: {
    textAlign: "center",
    color: "#6b7280",
    fontSize: "1.125rem",
  },
};

export default Internship;
