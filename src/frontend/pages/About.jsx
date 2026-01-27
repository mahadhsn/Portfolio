import { useEffect, useMemo, useRef } from "react";
import { Helmet } from "react-helmet";
import ChangeWord from "../components/ChangeWord";
import Image from "../components/logs/Image";
import AboutRail from "../components/about/AboutRail";
import SectionHeader from "../components/about/SectionHeader";
import MiniPanel from "../components/about/MiniPanel";
import TimelineBlock from "../components/about/TimelineBlock";
import useActiveSection from "../components/about/useActiveSection";
import {
  currently,
  previously,
  achievements,
  shortGoals,
  longGoals,
} from "../../data/consts";

const About = () => {
  useEffect(() => {
    document.title = "About Mahad";
  }, []);

  const sections = useMemo(
    () => [
      { id: "intro", label: "Intro" },
      { id: "now", label: "Now" },
      { id: "before", label: "Before" },
      { id: "wins", label: "Wins" },
    ],
    [],
  );

  const refs = useRef({});
  const { active, scrollTo } = useActiveSection(sections, refs, {
    activationRatio: 0.32,
    yOffset: -12,
    clickLockMs: 550,
  });

  // Keep page container open (no mobile padding). Fix “mini tables” by making
  // the *TimelineBlock* larger on mobile via wrapper classes.
  const sectionCard =
    "rounded-3xl border-borderlight dark:border-borderdark " +
    "p-7 md:p-8"; // keep your section padding basically as-is

  // This is the important part: make the TimelineBlocks (School/Teams/etc)
  // feel bigger + less cramped on mobile.
  const blockWrap = "-mx-2 sm:mx-0"; // lets the block breathe wider than the section padding on tiny screens

  const blockCardClassName =
    "rounded-3xl border border-borderlight dark:border-borderdark " +
    "px-7 py-7 md:px-6 md:py-6"; // BIGGER on mobile, normal on md+

  // Also give the NOW/BEORE/WINS blocks a bit more spacing on mobile
  const blocksStack = "mt-7 space-y-6 md:space-y-4";

  return (
    <div className="max-w-6xl mx-auto md:px-8">
      <Helmet>
        <title>About Mahad</title>
        <meta
          name="description"
          content="About page of Mahad Hassan's software engineering portfolio."
        />
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-0">
        <AboutRail
          sections={sections}
          active={active}
          onSelect={scrollTo}
          image={
            <Image
              divStyle={styles.imageWrapper}
              imgStyle={styles.img}
              src="/images/about/me.jpg"
              captionText="Me at a Daniel Caeser concert - Oct 2023"
            />
          }
        />

        <main className="lg:col-span-8 space-y-8 md:space-y-10">
          {/* INTRO */}
          <section
            id="intro"
            ref={(el) => (refs.current.intro = el)}
            className={sectionCard}
          >
            <SectionHeader title="Intro" />

            <div className="text-lg md:text-xl leading-relaxed space-y-6">
              <p>
                <span className="font-bold">Hello!</span> I’m someone who’s
                always looking to try new things. Learning new things, meeting
                new people, and experiencing new cultures keeps me going. I love
                tech, space, music, video games, movies, nature, animals, and
                more. If you want the real story, my{" "}
                <a
                  href="/logbook"
                  className="underline hover:text-accenthoverlight dark:hover:text-accenthoverdark transition-colors"
                >
                  logbook
                </a>{" "}
                is where I write things as I learn and build.
              </p>

              <p>
                I put huge emphasis on bettering myself mentally, physically,
                and emotionally. I believe small steps lead to big changes. You
                are your biggest competition, and the only person you should be
                better than is who you were yesterday.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              <MiniPanel title="Short-term">
                <ChangeWord list={shortGoals} />
              </MiniPanel>
              <MiniPanel title="Long-term">
                <ChangeWord list={longGoals} />
              </MiniPanel>
            </div>
          </section>

          {/* NOW */}
          <section
            id="now"
            ref={(el) => (refs.current.now = el)}
            className={sectionCard}
          >
            <SectionHeader
              title={
                <span className="flex items-center gap-3">
                  <span>Now</span>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                  </span>
                </span>
              }
              subtitle={<ChangeWord list={currently} />}
            />

            <div className={blocksStack}>
              <div className={blockWrap}>
                <TimelineBlock
                  className={blockCardClassName}
                  title="School"
                  items={[
                    {
                      date: "2022",
                      content: (
                        <>
                          3<span className="text-sm">rd</span> year Software
                          Engineering student 🖥️
                        </>
                      ),
                    },
                  ]}
                />
              </div>

              <div className={blockWrap}>
                <TimelineBlock
                  className={blockCardClassName}
                  title="Teams + clubs"
                  items={[
                    {
                      date: "Oct 2025",
                      content: (
                        <>
                          Machine learning Engineer at{" "}
                          <a
                            href="https://www.macdrones.ca"
                            className="underline hover:text-accenthoverlight dark:hover:text-accenthoverdark transition-colors"
                          >
                            McMaster Drone Club
                          </a>{" "}
                          ✈
                        </>
                      ),
                    },
                    {
                      date: "Sept 2025",
                      content: (
                        <>
                          Controls-Subteam at{" "}
                          <a
                            href="https://www.macrocketry.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-accenthoverlight dark:hover:text-accenthoverdark transition-colors"
                          >
                            McMaster Rocketry
                          </a>{" "}
                          🚀
                        </>
                      ),
                    },
                    {
                      date: "July 2025",
                      content: (
                        <>
                          Website Developer for{" "}
                          <a
                            href="https://ses.eng.mcmaster.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-accenthoverlight dark:hover:text-accenthoverdark transition-colors"
                          >
                            Software Eng Society
                          </a>{" "}
                          💻
                        </>
                      ),
                    },
                    {
                      date: "Jan 2025",
                      content: (
                        <>
                          Developing{" "}
                          <a
                            href="https://www.mahadhssn.com/logbook/sclerocare"
                            className="underline hover:text-accenthoverlight dark:hover:text-accenthoverdark transition-colors"
                          >
                            an app
                          </a>{" "}
                          for{" "}
                          <a
                            href="https://www.scleroderma.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-accenthoverlight dark:hover:text-accenthoverdark transition-colors"
                          >
                            Scleroderma Canada
                          </a>{" "}
                          📱
                        </>
                      ),
                    },
                    {
                      date: "Aug 2024",
                      content: (
                        <>
                          Attendee Relations Executive for{" "}
                          <a
                            href="https://www.deltahacks.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-accenthoverlight dark:hover:text-accenthoverdark transition-colors"
                          >
                            DeltaHacks
                          </a>{" "}
                          💻
                        </>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </section>

          {/* BEFORE */}
          <section
            id="before"
            ref={(el) => (refs.current.before = el)}
            className={sectionCard}
          >
            <SectionHeader
              title="Before"
              subtitle={<ChangeWord list={previously} />}
            />

            <div className={blocksStack}>
              <div className={blockWrap}>
                <TimelineBlock
                  className={blockCardClassName}
                  title="Work"
                  items={[
                    {
                      date: "May - Aug 2025",
                      content: (
                        <>
                          Software Engineering Intern @{" "}
                          <a
                            href="https://www.td.com/ca/en/personal-banking"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-accenthoverlight dark:hover:text-accenthoverdark transition-colors"
                          >
                            TD
                          </a>{" "}
                          🟩
                        </>
                      ),
                    },
                    {
                      date: "June - Aug 2024",
                      content: (
                        <>
                          Cybersecurity Intern @{" "}
                          <a
                            href="https://www.linkedin.com/company/ras-laffan-power-company/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-accenthoverlight dark:hover:text-accenthoverdark transition-colors"
                          >
                            RLPC
                          </a>{" "}
                          🦠
                        </>
                      ),
                    },
                  ]}
                />
              </div>

              <div className={blockWrap}>
                <TimelineBlock
                  className={blockCardClassName}
                  title="Leadership + community"
                  items={[
                    {
                      date: "Oct 2024 - Sept 2025",
                      content: (
                        <>
                          VP of Operations @{" "}
                          <a
                            href="https://www.instagram.com/voicesatmac/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-accenthoverlight dark:hover:text-accenthoverdark transition-colors"
                          >
                            VoicesatMac
                          </a>{" "}
                          🎤
                        </>
                      ),
                    },
                    {
                      date: "@ Sept 2024",
                      content: (
                        <>
                          Volunteered for{" "}
                          <a
                            href="https://www.hammerhacks.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-accenthoverlight dark:hover:text-accenthoverdark transition-colors"
                          >
                            HammerHacks
                          </a>{" "}
                          💻
                        </>
                      ),
                    },
                    {
                      date: "June 2024 - April 2025",
                      content: (
                        <>
                          VP of Events @{" "}
                          <a
                            href="https://www.instagram.com/mcmasterpsa/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-accenthoverlight dark:hover:text-accenthoverdark transition-colors"
                          >
                            McMaster PSA
                          </a>{" "}
                          🇵🇰
                        </>
                      ),
                    },
                    {
                      date: "@ Aug 2024",
                      content: (
                        <>
                          Volunteered for{" "}
                          <a
                            href="https://www.campquality.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-accenthoverlight dark:hover:text-accenthoverdark transition-colors"
                          >
                            CampQuality
                          </a>{" "}
                          🏕️
                        </>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </section>

          {/* WINS */}
          <section
            id="wins"
            ref={(el) => (refs.current.wins = el)}
            className={sectionCard}
          >
            <SectionHeader
              title="Wins"
              subtitle={<ChangeWord list={achievements} />}
            />

            <div className={blocksStack}>
              <div className={blockWrap}>
                <TimelineBlock
                  className={blockCardClassName}
                  title="Academics"
                  items={[
                    { content: "Consistent Dean's List at McMaster 💯" },
                    { content: "Scored 1480 on the SAT 🎓" },
                    { content: "Received the AP Scholar with Honor Award 🏅" },
                  ]}
                />
              </div>

              <div className={blockWrap}>
                <TimelineBlock
                  className={blockCardClassName}
                  title="Competitions"
                  items={[
                    { content: "Winner at MacEngComp 25' 🏆" },
                    { content: "Winner at MacEngComp 24' 🏆" },
                    { content: "Finalists at MacEngComp 23' 🏆" },
                  ]}
                />
              </div>

              <div className={blockWrap}>
                <TimelineBlock
                  className={blockCardClassName}
                  title="Leadership & Impact"
                  items={[
                    {
                      date: "June 2024 - Apr 2025",
                      content:
                        "Raised nearly $6,000 for charity with McMasterPSA 🎗️",
                    },
                    {
                      date: "Nov 2023 - Apr 2025",
                      content:
                        "Accomodated Move-In/Move-out of up to 4700 first year students as an ESA",
                    },
                  ]}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

const styles = {
  imageWrapper: {
    width: "100%",
    maxWidth: "420px",
  },
  img: {
    borderRadius: "12px",
    width: "100%",
  },
};

export default About;
