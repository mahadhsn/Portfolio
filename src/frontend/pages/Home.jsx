import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Image from "../components/logs/Image";
import { greetings } from "../../data/consts";
import Quotes from "../components/Quotes";
import CountUpCard from "../components/home/CountUpCard";

const Home = () => {
  useEffect(() => {
    document.title = "Mahad Hassan";
  }, []);

  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  const handleGreetingClick = () => {
    const nextIndex =
      (greetings.indexOf(currentGreeting) + 1) % greetings.length;
    setCurrentGreeting(greetings[nextIndex]);
  };

  return (
    <div className="space-y-10 md:-mt-10">
      <Helmet>
        <title>Mahad Hassan</title>
        <meta
          name="description"
          content="Home page of Mahad Hassan's software engineering portfolio."
        />
      </Helmet>

      {/* HERO */}
      <div className="flex flex-col text-center space-y-3">
        <Image src="/images/hero.jpeg" imgStyle={styles.img} />

        <h1 className="text-3xl md:text-5xl flex items-center justify-center gap-2">
          <span
            className="cursor-pointer flex items-center gap-2 select-none transition-colors
              hover:text-accenthoverlight dark:hover:text-accenthoverdark"
            onClick={handleGreetingClick}
          >
            {currentGreeting.flag && (
              <span className="flex items-center">{currentGreeting.flag}</span>
            )}
            <span className="underline font-bold">{currentGreeting.text}</span>
          </span>
          <span>I'm Mahad</span>
        </h1>
      </div>

      {/* QUICK ACTIONS */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        {[
          { to: "/resume", label: "View Resume", isLink: false },
          { to: "/projects", label: "Projects", isLink: true },
          { to: "/contact", label: "Contact", isLink: true },
        ].map(({ to, label, isLink }) =>
          isLink ? (
            <Link
              key={to}
              to={to}
              className="px-5 py-2 rounded-lg border transition text-center
                border-borderlight dark:border-borderdark
                hover:border-accentlight dark:hover:border-accentdark"
            >
              {label}
            </Link>
          ) : (
            <a
              key={to}
              href={to}
              className="px-5 py-2 rounded-lg border transition text-center
                border-borderlight dark:border-borderdark
                hover:border-accentlight dark:hover:border-accentdark"
            >
              {label}
            </a>
          ),
        )}
      </div>

      {/* VISUAL GRID */}
      <div className="space-y-8 md:space-y-10">
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* About */}
          <div
            className="lg:col-span-7 rounded-3xl border p-8
              border-borderlight dark:border-borderdark"
          >
            <div className="text-sm font-bold">
              <span className="text-xl">A</span>BOUT
            </div>
            <div className="h-1 w-12 rounded-full bg-accentlight dark:bg-accentdark mb-5" />
            <div className="text-2xl font-semibold mt-1">Quick snapshot</div>

            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "Software Engineering III @ McMaster",
                "Prev @ TD",
                "Building clean systems",
                "Integrating AI-based solutions",
              ].map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full border text-sm
                    border-borderlight dark:border-borderdark
                  "
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Featured */}
          <div
            className="lg:col-span-5 rounded-3xl border p-8
              border-borderlight dark:border-borderdark"
          >
            <div className="text-sm font-bold">
              <span className="text-xl">F</span>EATURED
            </div>
            <div className="h-1 w-12 rounded-full bg-accentlight dark:bg-accentdark mb-5" />

            <div className="text-2xl font-semibold mt-1">Digit Recognizer</div>

            <p className="text-sm mt-5  leading-relaxed">
              8-layer CNN built to detect hand-drawn digits with 99.3% accuracy
            </p>

            <a
              href="https://digit-recognizer-web.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 underline text-sm
              
                hover:text-accenthoverlight dark:hover:text-accenthoverdark transition-colors"
            >
              Try it out!
            </a>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Now */}
          <div
            className="lg:col-span-8 rounded-3xl border p-8
              border-borderlight dark:border-borderdark"
          >
            <div className="text-sm font-bold">
              <span className="text-xl">N</span>OW
            </div>
            <div className="h-1 w-12 rounded-full bg-accentlight dark:bg-accentdark mb-5" />

            <div className="text-2xl font-semibold mt-1">
              What I’m focused on
            </div>

            <ul className="mt-5 space-y-3 text-sm ">
              {[
                "Building scalable AI solutions",
                "Advancing humanity by solving real world problems",
                "Maintaining dean's list with involvement in 7 clubs",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-[7px] h-2 w-2 rounded-full bg-accentlight dark:bg-accentdark" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-block mt-5 underline text-sm
              
                hover:text-accenthoverlight dark:hover:text-accenthoverdark transition-colors"
            >
              Read more
            </Link>
          </div>

          {/* Overview */}
          <div
            className="lg:col-span-4 rounded-3xl border p-8
              border-borderlight dark:border-borderdark"
          >
            <div className="text-sm font-bold">
              <span className="text-xl">O</span>VERVIEW
            </div>
            <div className="h-1 w-12 rounded-full bg-accentlight dark:bg-accentdark mb-5" />

            <div className="mt-5 space-y-3">
              <CountUpCard value={10} suffix="+" label="Projects" />
              <CountUpCard value={5} suffix="+" label="Hackathons" />
              <CountUpCard value={2} label="Internships" />
            </div>
          </div>
        </div>
      </div>

      <Quotes />
    </div>
  );
};

const styles = {
  img: {
    display: "block",
    borderRadius: "50%",
    width: "300px",
    height: "300px",
    objectFit: "cover",
  },
};

export default Home;
