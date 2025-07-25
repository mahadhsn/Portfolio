import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Project from "../components/projects/Project";

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
        <Project
          Title={"ScleroCare"}
          Description={
            "An app for patients, partnering with Tech4Good & Scleroderma Canada, soon to be on the App Store!"
          }
          href={"/logbook/sclerocare"}
        />
        <Project
          Title={"Drone Rescue Mission"}
          Description={
            "Drone controller uses states and strategies to rescue a drone in Java"
          }
          href={"https://github.com/mahadhsn/A2-Recue-Mission-T11"}
        />
        <Project
          Title={"C-View"}
          Description={"Lightweight, command-line image processor written in C"}
          href={"https://github.com/mahadhsn/C-View"}
        />
        <Project
          Title={"Convert-Number-Systems"}
          Description={"Convert numbers between number systems in C"}
          href={"https://github.com/mahadhsn/Convert-Number-Systems"}
        />
        <Project
          Title={"Digit-Recognizer"}
          Description={
            "Python program to recognize handwritten digits with 99.3% accuracy"
          }
          href={"https://github.com/mahadhsn/Digit-Recognizer"}
        />
        <Project
          Title={"Java-Tic-Tac-Toe-AI"}
          Description={
            "Play Tic-Tac-Toe against an AI that uses the minimax algorithm"
          }
          href={"https://github.com/mahadhsn/Java-Tic-Tac-Toe-AI"}
        />
        <Project
          Title={"Portfolio"}
          Description={
            "This portfolio! Created using React and Tailwind CSS and contains information about me."
          }
          href={"https://github.com/mahadhsn/Portfolio"}
        />
        <h2 className="text-2xl md:text-3xl text-left">
          <a
            href="https://github.com/mahadhsn/MacEngComp24"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <span className="underline">Cybersecurity System</span>
            <span> </span>
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
        <Project
          Title={"US-Baby-Names"}
          Description={
            "Bash script to list the rankings of baby names in the US"
          }
          href={"https://github.com/mahadhsn/US-Baby-Names"}
        />
      </span>
    </div>
  );
};

export default Projects;
