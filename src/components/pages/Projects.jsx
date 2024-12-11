import React from "react";
import FontDraggableText from "../ui/FontDraggableText";
import TextToggle from "../ui/TextToggle";
import Safari from "../ui/safari";
import Iphone15Pro from "../ui/iphone-15-pro";
import useMobile from "../hooks/UseMobile";
import { Link } from "react-router-dom";

function Projects() {
  const isMobile = useMobile();

  const projects = [
    {
      title: "Portfolio",
      desktopPath: "/Portfolio/desktop.png",
      desc: "A personal portfolio showcasing my projects, skills, and experiences. It provides an interactive platform for visitors to explore my professional journey and accomplishments.",
      githubLink: "https://github.com/satendra03/portfolio",
      liveLink: "https://satendra-portfolio.vercel.app",
    },
    {
      title: "JourneyJolt",
      desktopPath: "/JourneyJolt/desktop.png",
      desc: "An AI-powered travel planner designed to create personalized itineraries for users based on their preferences, location, and budget. Ideal for hassle-free trip planning.",
      githubLink: "https://github.com/satendra03/trip-planner-by-satendra",
      liveLink: "https://trip-planner-by-satendra.vercel.app",
    },
    {
      title: "BeatBlast",
      desktopPath: "/BeatBlast/desktop.png",
      desc: "A music application inspired by Spotify, featuring dynamic playlists, an engaging interface, and compatibility across devices for a seamless listening experience.",
      githubLink: "https://github.com/satendra03/BeatBlast-MusicHub",
      liveLink: "https://beat-blast-music-hub-by-satendra.vercel.app/",
    },
    {
      title: "ToDo App",
      desktopPath: "/ToDo/desktop.png",
      desc: "A simple yet efficient task management tool that allows users to organize their daily tasks, set deadlines, and track their progress with ease.",
      githubLink: "https://github.com/satendra03/ToDo-bySatendra",
      liveLink: "https://todo-by-satendra.vercel.app/",
    },
    {
      title: "E-Quest Quiz",
      desktopPath: "/EQuest/desktop.png",
      desc: "An interactive quiz platform for E-Cell events, supporting real-time questions, leaderboard tracking, and participant authentication for smooth quiz operations.",
      githubLink: "https://github.com/satendra03/E-Cell-Quiz-FrontEnd",
      liveLink: "https://e-cell-quiz-front-end.vercel.app/",
    },
    {
      title: "CareCrest - SIH Project",
      desktopPath: "/CareCrest/desktop.png",
      desc: "A hospital management system offering features like patient records, appointment scheduling, and department management for efficient healthcare operations.",
      githubLink: "https://github.com/satendra03/sig-1620",
      liveLink: "https://sig-1620.vercel.app/",
    },
    {
      title: "Ochi Web Clone",
      desktopPath: "/OchiClone/desktop.png",
      desc: "A clone of the Ochi website, highlighting design and development skills with a focus on user interface and responsive web design.",
      githubLink: "https://github.com/satendra03/React-Ochi-Web-Clone",
      liveLink: "https://satendra-temp-portfolio.vercel.app/",
    },
    {
      title: "LaughLab",
      desktopPath: "/LaughLab/desktop.png",
      desc: "A browser extension designed for lighthearted entertainment, providing users with a collection of jokes, memes, and fun content.",
      githubLink: "https://github.com/satendra03/LaughLab",
      liveLink: "https://microsoftedge.microsoft.com/addons/detail/laughlab-satendra-kumar/meaikeiaoghlpdikgjhmkmakmdkimnnp",
    },
  ];
  

  return (
    <div className="projects w-screen">
      <div className="content py-20 w-full min-h-[100vh]">
        <div className="heading w-full flex items-center flex-col justify-center py-3 md:py-5">
          <div className="about-me flex gap-5">
            <FontDraggableText
              words={["My", "Projects?"]}
              size={"text-3xl md:text-5xl"}
            />
          </div>
          <div className="more-text mt-3 flex-col flex items-center justify-center text-center text-black/40 text-md md:text-lg">
            <p className="tracking-tighter">
              {" "}
              Really? Who are{" "}
              <span className="underline bg-red-400 px-1 text-white">You?</span>
              Bruhh
            </p>
          </div>
        </div>

        <div className="text-content h-[60vh] flex flex-col items-center justify-center text-center font-bold tracking-tighter py-10 px-10 md:px-36 md:py-20">
          <TextToggle
            className={"text-4xl lg:text-6xl"}
            textTrue={
              "An elite gallery of code experiments that occasionally work, fueled by caffeine, stack overflow, chatGPT, and a whole lot of 'trial and error.'"
            }
            textFalse={
              "A showcase of thoughtfully designed and technically robust projects, reflecting dedication, creativity, and innovation."
            }
          />
        </div>

        <h1 className="w-screen flex items-center justify-center mt-36 mb-10 md:mt-36 text-4xl md:text-6xl font-bold">
          The List
        </h1>
        <div className="text-content text-center flex flex-col gap-32 items-center justify-center font-bold tracking-tighter py-8 px-10 md:px-16 md:py-20">

          <div className="projects w-full flex flex-col gap-36">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`project flex flex-col gap-3 md:flex-row ${index%2 && "md:flex-row-reverse"} p-1`}
              >
                <div className="mockups">
                  <div className="browser w-full">
                    <Link
                    to={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Safari
                      src={project.desktopPath}
                      url={index == projects.length - 1 ? "https://microsoftedge.microsoft.com/addons/": project.liveLink}
                      className="size-full drop-shadow-2xl hover:scale-105 transition-all"
                    /></Link>
                  </div>
                </div>
                <div className="text flex items-center justify-center flex-col">
                  <div className="heading text-xl md:text-5xl">
                    <h4>{project.title}</h4>
                  </div>
                  <p className="font-normal text-lg md:text-2xl text-gray-500">
                    {project.desc}
                  </p>
                  <div className="links flex gap-5 font-normal underline mt-5">
                    <Link
                      to={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Link>
                    <Link
                      to={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="more-project">
            These are nothing <br /> in front of my <br /> <Link to="https://github.com/satendra03" className="underline font-normal">Github</Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
