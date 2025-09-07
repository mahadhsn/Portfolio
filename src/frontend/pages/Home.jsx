import React from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import ChangeWord from "../components/ChangeWord";
import { hobbies, cornerOptions, greetings } from "../../data/consts";
import Quotes from "../components/Quotes";
import MahadAI from "../components/MahadAI";

const Home = () => {
  useEffect(() => {
    document.title = "Mahad's Home";
  }, []);

  const [currentGreeting, setCurrentGreeting] = React.useState(greetings[0]);

  const handleGreetingClick = () => {
    const nextIndex =
      (greetings.indexOf(currentGreeting) + 1) % greetings.length;
    setCurrentGreeting(greetings[nextIndex]);
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Mahad's Home</title>
        <meta
          name="description"
          content="Home page of Mahad Hassan's software engineering portfolio."
        />
      </Helmet>

      <h1 className="text-3xl md:text-5xl text-center mb-7 flex items-center justify-center">
        <span
          className="cursor-pointer relative flex items-center -mb-5"
          onClick={handleGreetingClick}
        >
          {currentGreeting.flag && (
            <span className="mr-2 select-none flex items-center">
              {currentGreeting.flag}
            </span>
          )}
          <div className="flex flex-col items-center">
            <span className="underline font-bold select-none">
              {currentGreeting.text}
            </span>
            <span className="text-sm text-gray-400 italic mt-1 animate-bop select-none">
              ↑ Click me!
            </span>
          </div>
        </span>
        <span className="ml-2">I'm Mahad</span>
      </h1>

      <div className="flex flex-col justify-center items-center space-y-2 -mb-8">
        <Quotes />
      </div>
    </div>
  );
};

export default Home;
