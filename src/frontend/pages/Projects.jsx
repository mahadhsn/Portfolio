import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Projects = () => {
  useEffect(() => {
    document.title = "Mahad's Projects";
  });

  return (
    <div className="text-textlight dark:text-textdark animate-fade-in mt-[10%] md:mt-[20%] transition-all duration-300 ease-in-out">
      <Helmet>
        <title>Mahad's Projects</title>
        <meta
          name="description"
          content="Projects page of Mahad Hassan's software engineering portfolio."
        />
      </Helmet>

      <span className="md:text-xl text-lg">
        <h2 className="text-lg md:text-xl mb-4">
          A list of some of my projects. Take a look at all of them at my{" "}
          <a
            href="https://github.com/mahadhsn"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Github!
          </a>{" "}
          🚀
        </h2>
        <hr className="border-textlight dark:border-textdark"></hr>
        <h2 className="text-2xl md:text-3xl text-left underline mt-8">
          <a
            href="https://github.com/mahadhsn/A2-Recue-Mission-T11"
            target="_blank"
            rel="noopener noreferrer"
          >
            Drone Rescue Mission
          </a>
        </h2>
        <p className="mb-6">
          Drone controller uses states and strategies to rescue a drone in Java
        </p>
        <h2 className="text-2xl md:text-3xl text-left underline">
          <a
            href="https://github.com/mahadhsn/C-View"
            target="_blank"
            rel="noopener noreferrer"
          >
            C-View
          </a>
        </h2>
        <p className="mb-6">
          Lightweight, command-line image processor written in C
        </p>
        <h2 className="text-2xl md:text-3xl text-left underline">
          <a
            href="https://github.com/mahadhsn/Convert-Number-Systems"
            target="_blank"
            rel="noopener noreferrer"
          >
            Convert-Number-Systems
          </a>
        </h2>
        <p className="mb-6">Convert numbers between number systems in C</p>
        <h2 className="text-2xl md:text-3xl text-left underline">
          <a
            href="https://github.com/mahadhsn/Digit-Recognizer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digit-Recognizer
          </a>
        </h2>
        <p className="mb-6">
          Python program to recognize handwritten digits with 99.3% accuracy
        </p>
        <h2 className="text-2xl md:text-3xl text-left underline">
          <a
            href="https://github.com/mahadhsn/Java-Tic-Tac-Toe-AI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Java-Tic-Tac-Toe-AI
          </a>
        </h2>
        <p className="mb-6">
          Play Tic-Tac-Toe against an AI that uses the minimax algorithm
        </p>
        <h2 className="text-2xl md:text-3xl text-left underline">
          <a
            href="https://github.com/mahadhsn/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </h2>
        <p className="mb-6">
          This portfolio! Created using React and Tailwind CSS and contains
          information about me.
        </p>
        <h2 className="text-2xl md:text-3xl text-left">
          <a
            href="https://github.com/mahadhsn/MacEngComp24"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <span className="underline">Cybersecurity System</span>
            <span className="text-neutral-900">p</span>
          </a>
          <span className="text-lg invisible md:visible mobile:fixed md:absolute md:translate-y-2">
            {" "}
            (winners at MacEngComp 24') 🏆
          </span>
        </h2>{" "}
        <span className="text-base visible md:hidden">
          {" "}
          (winners at MacEngComp 24') 🏆
        </span>
        <p className="mb-6">
          Cybersecurity system - face recognition, file encryption, and more
        </p>
        <h2 className="text-2xl md:text-3xl text-left underline">
          <a
            href="https://github.com/mahadhsn/US-Baby-Names"
            target="_blank"
            rel="noopener noreferrer"
          >
            US-Baby-Names
          </a>
        </h2>
        <p className="mb-6">
          Bash script to list the rankings of baby names in the US
        </p>
      </span>
    </div>
  );
};

export default Projects;
