import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Project from "../components/projects/Project";
import { FaReact, FaJava, FaPython } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiJavascript,
  SiTypescript,
  SiApachemaven,
  SiTensorflow,
  SiNumpy,
  SiOpencv,
  SiFlask,
  SiGnubash,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { PiFileSqlFill } from "react-icons/pi";

const Projects = () => {
  useEffect(() => {
    document.title = "Mahad's Projects";
  });

  return (
    <div>
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
          Icons={[FaReact, IoLogoFirebase, SiTypescript]}
        />
        <Project
          Title={"Drone Rescue Mission"}
          Description={
            "Drone controller uses states and strategies to rescue a drone in Java"
          }
          href={"https://github.com/mahadhsn/A2-Recue-Mission-T11"}
          Icons={[FaJava, SiApachemaven]}
        />
        <Project
          Title={"C-View"}
          Description={"Lightweight, command-line image processor written in C"}
          href={"https://github.com/mahadhsn/C-View"}
          Icons={[TbCircleLetterCFilled]}
        />
        <Project
          Title={"Convert-Number-Systems"}
          Description={"Convert numbers between number systems in C"}
          href={"https://github.com/mahadhsn/Convert-Number-Systems"}
          Icons={[TbCircleLetterCFilled]}
        />
        <Project
          Title={"Digit-Recognizer"}
          Description={
            "Python program to recognize handwritten digits with 99.3% accuracy"
          }
          href={"https://digit-recognizer-web.vercel.app"}
          Icons={[
            FaReact,
            SiTypescript,
            RiTailwindCssFill,
            FaPython,
            SiTensorflow,
            SiNumpy,
          ]}
        />
        <Project
          Title={"Java-Tic-Tac-Toe-AI"}
          Description={
            "Play Tic-Tac-Toe against an AI that uses the minimax algorithm"
          }
          href={"https://github.com/mahadhsn/Java-Tic-Tac-Toe-AI"}
          Icons={[FaJava, SiApachemaven]}
        />
        <Project
          Title={"Portfolio"}
          Description={
            "This portfolio! Created using React and Tailwind CSS and contains information about me."
          }
          href={"https://github.com/mahadhsn/Portfolio"}
          Icons={[FaReact, SiJavascript, RiTailwindCssFill]}
        />
        <Project
          Title={"SecureVault"}
          Description={
            "Cybersecurity system - face recognition, file encryption, and more | (winners at MacEngComp 24') 🏆"
          }
          href={"https://github.com/mahadhsn/MacEngComp24"}
          Icons={[FaPython, SiOpencv, SiFlask, PiFileSqlFill]}
        />
        <Project
          Title={"US-Baby-Names"}
          Description={
            "Bash script to list the rankings of baby names in the US"
          }
          href={"https://github.com/mahadhsn/US-Baby-Names"}
          Icons={[SiGnubash]}
        />
      </span>
    </div>
  );
};

export default Projects;
