import Image from "../../components/logs/Image";
import Header from "../../components/logs/Header";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

const SceloCare = () => {
  useEffect(() => {
    document.title = "About ScleroCare";
  });

  return (
    <div>
      <Helmet>
        <title>About ScleroCare</title>
        <meta
          name="description"
          content="Description and backstory to ScleroCare"
        />
      </Helmet>

      {/* Header */}
      <Header Title="ScleroCare" Mins="4" Date="July 24th, 2025" />

      <div className="flex flex-row justify-center">
        <Image
          src={"../../../images/logs/sclerocare/sclero-splash.png"}
          imgStyle={styles.img_portrait}
          captionText={"Splash Screen"}
        />
        <Image
          src={"../../../images/logs/sclerocare/sclero-home.png"}
          imgStyle={styles.img_portrait}
          captionText={"Home Screen"}
        />
      </div>

      <div className="flex flex-row justify-center">
        <Image
          src={"../../../images/logs/sclerocare/sclero-research.png"}
          imgStyle={styles.img_portrait}
          captionText={"Research Screen | Sub-page under Features"}
        />
        <Image
          src={"../../../images/logs/sclerocare/sclero-profile.png"}
          imgStyle={styles.img_portrait}
          captionText={"Profile Screen"}
        />
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-bold underline mb-2">Background</h1>

        <p className="mb-6">
          ScleroCare is a partnership between the{" "}
          <a
            href="https://www.eng.mcmaster.ca/ibiomed/resources/ibiomed-society/"
            target="_blank"
            className="underline"
          >
            iBioMed Society
          </a>{" "}
          at McMaster University and{" "}
          <a
            href="https://www.scleroderma.ca"
            target="_blank"
            className="underline"
          >
            Scleroderma Canada
          </a>{" "}
          via the{" "}
          <a
            href="https://ibiomedsociety.ca/studentlife/tech4good"
            target="_blank"
            className="underline"
          >
            Tech4Good
          </a>{" "}
          program. The functionality of the app includes options for the user to
          get connected with the right resources depending on their needs. There
          will be postings for New Research/Clinical Trials, Content/Workshops,
          Support Libraries for Patients, Caregivers, and Healthcare providers,
          and a map with POIs near where the user is located. These will include
          financial, social, and emotional support institutions. Last but not
          least, the app will also allow the user to store their Medical Resume,
          fully encrypted, of course.
        </p>

        <p className="mb-2">
          Firstly, I had never done ANY app development before this. I convinced
          myself that I'd be able to take on this project despite studying
          full-time and being a part of 3 other clubs at the time.
        </p>

        <p className="mb-2">
          I had previously done some web dev experience since I had set up this
          portfolio's first iteration quite literally the month before applying
          for this role. I knew that getting this experience under my belt would
          be a great addition to my skillset and overall impact I provide to
          society.
        </p>

        <p className="mb-2">
          It would be my first time working on an app that eventually makes its
          way to the app store (soon)!
        </p>
      </div>

      <div className="mb-6 space-y-2">
        <div className="flex flex-row space-x-4 text-2xl">
          <h1 className="font-bold underline">Tech Stack & Team</h1>

          <div className="flex flex-row space-x-4 text-3xl">
            <FaReact />
            <IoLogoFirebase />
            <SiTypescript />
          </div>
        </div>

        <p>
          The app is built in React Native with TypeScript. It also implements
          Firebase as of now for most of the backend functionality, including
          data storage, encryption, and user authentication.
        </p>

        <p>
          Though this app is currently not open-source, I attached the Figma
          designs for the front-end, which are identical to what the app will
          actually look like once public. To get a visual of what it looks like.
          Development has been underway since January, and we aim to get it out
          in the app store in the near future!
        </p>

        <p>
          We are a team of 4 developers, and you can learn more about us{" "}
          <a
            href="https://ibiomedsociety.ca/studentlife/tech4good"
            target="_blank"
            className="underline"
          >
            here
          </a>{" "}
          - scroll to the bottom :)
        </p>
      </div>

      <div className="mb-6 space-y-2">
        <h1 className="text-2xl font-bold underline">Why?</h1>

        <p>It's a little deeper than a simple "cuz why not".</p>

        <p>
          Here's a fun fact about me. I actually joined McMaster University back
          in 2022 for a program called Chemical and Physical Sciences Gateway.
          This was essentially just another form of a Life Science program, but
          instead, you get to choose what courses you want to take and
          specialize in what you want the following year.
        </p>

        <p>
          The reason for this was, surprise surprise... I wanted to be a Doctor.
          Back in the day, my mom was a Doctor and my dad a Mechanical Engineer,
          so I had always been on both sides of the coin.
        </p>

        <p>
          After some research and spending time watching a lot of
          medical-related shows (The Good Doctor & the first 8-ish seasons of
          Grey's Anatomy), I fell in love with medicine. However, only after
          joining University for a Life Science degree did I realize that I'm
          not meant for that life. At first, I thought the universe was against
          me, but who knew I'd love where I'm at now.
        </p>

        <p>
          Biology 1M03 or Biodiversity, Evolution and Humanity for the non-mac
          people was the end of me. I quickly realized that memorization was not
          my strong stuit, and I instead preferred to understand things on a
          deeper level. Blindly memorizing content would cause me to spend hours
          upon hours cramming it, only to forget everything in a week.
        </p>

        <p>
          You may ask, why did I not realize this in high school, when I did AP
          Bio?? My high school was taught weird. Most of the students were able
          to come up with loopholes to simple get good grades. And, of course,
          COVID enhanced this effect, leading to just a very odd high scool
          experience. Might talk more on this in another log.
        </p>
      </div>

      <div className="mb-6">
        <p className="mb-2">
          So, after the end of my first semester, I decided to make the switch
          into the faculty of Engineering, specifically Software Engineering.
          This was a very tough decision due to a multitude of reasons:
        </p>

        <ol className="list-disc list-outside mb-2 space-y-2">
          <li>I would have to repeat a whole year.</li>
          <li>
            Transferring into engineering had an unknown cut-off. No matter how
            much I tried to investigate, I never got a straight answer, but the
            rough estimate was around a 10/12 GPA. This roughly equates to a
            3.8/4.
          </li>
          <li>
            Even if I get into Eng, getting into Software was another goal which
            would have required roughly a 10.8/12 GPA, which equates closer to a
            3.9/4.
          </li>
        </ol>

        <p className="mb-2">I was able to make the switch, and now I'm here!</p>

        <p className="mb-2">
          TLDR: This initiative is a nice way for me to connect both software
          and medicine into one app, which will help make a positive impact in
          the community.
        </p>
      </div>

      <div className="mb-6 space-y-2">
        <h1 className="font-bold underline text-2xl">Challenges</h1>

        <p>
          Balancing this project along with school was not easy in January. Like
          I said, I was working on 3 other clubs while also studying full time.
          I was VP of Events for MacPSA, VP of Operations for VoicesAtMac, and
          Attendee Relations Exec for DeltaHacks. On top of this, again, I had
          never done any app development beforehand or any work with Firebase.
        </p>

        <p>
          However, I managed my time and slowly added iterations and built the
          app step by step while collaborating with the team. We split up the
          work in a way where everyone works on their own pages, but would also
          be open to helping each other out if needed. This helpful environment
          made it much easier to work on new and unknown tech.
        </p>

        <p>
          Even now, balancing a full-time job, submitting applications for next
          term co-op opportunities, AND working on this app has not been easy.
          But I guess that's what life is. You learn, you adapt, and you keep
          going.
        </p>
      </div>

      <div className="mb-6 space-y-2">
        <h1 className="font-bold underline text-2xl">Reflection</h1>

        <p>
          Working in a team for a long period of time can be tough at first. You
          don't know when to ask for more time on a component or when to ask
          your team member to do their work. It all feels very awkward at first,
          but you live and you learn.
        </p>

        <p>
          This project has given me the great opportunity to collaborate on an
          App which will be used in the real world by patients eventually. We
          have gone through many challenges and roadblocks, but we keep powering
          through!
        </p>

        <p>
          I'm grateful to have been chosen to contribute to this project and am
          quite excited to see how it turns out!
        </p>
      </div>
    </div>
  );
};

const styles = {
  img_portrait: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1rem",
    marginBottom: "0.5rem",
    maxWidth: "80%",
    maxHeight: "70vh",
    width: "auto",
    height: "auto",
    borderRadius: "1rem",
  },
  caption: {
    textAlign: "center",
    color: "#6b7280",
    fontSize: "1.125rem",
  },
};

export default SceloCare;
