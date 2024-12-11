import React, { useEffect, useState } from "react";
import FontDraggableText from "../ui/FontDraggableText";
import TextToggle from "../ui/TextToggle";
import { VelocityScroll } from "../ui/scroll-based-velocity";
import useMobile from "../hooks/UseMobile";
import { Link } from "react-router-dom";

function About() {
  const skills = [
    {
      title: "Visual",
      description:
        "From wireframes to high-fidelity mockups, I help designers create visually appealing and user-friendly interfaces.",
      funny:
        "Drawing boxes and circles that somehow convince people I'm a creative genius. Magic happens when coffee kicks in.",
    },
    {
      title: "Frontend",
      description:
        "I specialize in building sleek, responsive, and engaging websites using modern web technologies like React, Next.js, and Tailwind CSS.",
      funny:
        "Turning pixels into code, and bugs into features. Also, the reason dark mode exists on websites.",
    },
    {
      title: "Backend",
      description:
        "I work closely with backend developers to build scalable, efficient, and secure APIs using popular programming languages like Node.js, Express, and MongoDB.",
      funny:
        "The silent ninja making sure your app doesn't crash after 100 users. Error logs are my love language.",
    },
    {
      title: "UI/UX",
      description:
        "I help designers and developers create intuitive, user-friendly, and engaging user interfaces using proven design principles and methodologies.",
      funny:
        "I make sure buttons don't look like links and links don't look like buttons. That's called experience.",
    },
  ];

  const organizations = [
    {
      name: "E-Cell",
      role: "Lead Graphics Designer",
      description:
        "Promoted entrepreneurship by designing impactful visuals for events and initiatives at Jabalpur Engineering College.",
      funny:
        "Created posters so good, they made people attend events just for the graphics!",
    },
    {
      name: "Tourist",
      role: "Frontend Developer",
      description:
        "Developed intuitive user interfaces for a hospital management system, enhancing patient experience.",
      funny: "Ensured the hospital's UI had fewer bugs than its waiting rooms.",
    },
    {
      name: "Kaarwaa.N",
      role: "Lead Graphics Designer",
      description:
        "Educated and motivated students in government schools through engaging and visually appealing designs.",
      funny:
        "Convinced kids to study harder with designs cooler than their video games.",
    },
    {
      name: "The-LitC",
      role: "Graphic Designer",
      description:
        "Designed visually appealing posters and digital assets for literary and technical events, enhancing event outreach and engagement.",
      funny:
        "Crafted designs so good that people showed up to events just to admire the posters.",
    },
  ];

  const technologies = [
    {
      name: "ReactJS",
      category: "Frontend Framework",
      description: "Building interactive UIs efficiently and declaratively.",
      funny: "Turning JSX into magic without breaking a sweat (most times).",
    },
    {
      name: "TailwindCSS",
      category: "CSS Framework",
      description: "Utility-first styling for a consistent design system.",
      funny: "Spending less time styling, more time vibing.",
    },
    {
      name: "HTML",
      category: "Markup Language",
      description: "Structuring web pages with semantic elements.",
      funny: "The skeleton of all my digital masterpieces.",
    },
    {
      name: "CSS",
      category: "Styling Language",
      description: "Adding colors, layouts, and animations to designs.",
      funny: "Making pixels pop like never before.",
    },
    {
      name: "JavaScript",
      category: "Programming Language",
      description: "Powering web apps with interactivity and logic.",
      funny: "Because what's life without a few console.logs?",
    },
    {
      name: "C++",
      category: "Programming Language",
      description: "The foundation of my programming journey.",
      funny: "Where pointers and I have a love-hate relationship.",
    },
    {
      name: "NodeJS",
      category: "Backend Framework",
      description: "Building scalable server-side applications.",
      funny: "Bringing JavaScript to the backend like a boss.",
    },
    {
      name: "Firebase",
      category: "Backend-as-a-Service",
      description: "Simplifying database and authentication needs.",
      funny: "Where backend feels almost like frontend magic.",
    },
    {
      name: "MongoDB",
      category: "NoSQL Database",
      description: "Storing data flexibly with documents.",
      funny: "No schema, no worries!",
    },
    {
      name: "ExpressJS",
      category: "Backend Framework",
      description: "Creating server-side APIs with ease.",
      funny: "The 'E' in MERN, but cooler than it sounds.",
    },
    {
      name: "Figma",
      category: "Design Tool",
      description: "Designing UI prototypes collaboratively.",
      funny: "Where my ideas take their first visual breath.",
    },
    {
      name: "Canva",
      category: "Design Tool",
      description: "Quick and simple graphic designing.",
      funny: "Turning procrastination into professional posters.",
    },
  ];

  const isMobile = useMobile();

  return (
    <div className="about w-screen">
      <div className="content py-20 w-full min-h-[300vh]" data-scroll-section>
        <div className="heading w-full flex items-center flex-col justify-center py-3 md:py-5">
          <div className="about-me flex gap-5">
            <FontDraggableText
              words={["About", "Me?"]}
              size={"text-3xl md:text-5xl"}
            />
          </div>
          <div className="more-text mt-3 flex-col flex items-center justify-center text-center text-black/40 text-md md:text-lg">
            <p className="tracking-tighter">
              {" "}
              are you really{" "}
              <span className="underline bg-red-400 px-1 text-white">
                Interested?
              </span>
            </p>
          </div>
        </div>
        <div className="text-content text-center font-bold tracking-tighter py-10 px-10 md:px-36 md:py-20">
          <TextToggle
            className={"text-4xl lg:text-6xl"}
            textTrue={
              "A visual designer with decent skills — still holding out against AI takeover — crafting 'masterpieces' only when the bribe, I mean paycheck, hits the sweet spot."
            }
            textFalse={
              "I'm a selectively skilled designer and developer with strong focus on producing high quality & impactful digital experience."
            }
          />
        </div>

        <div className="velocity-text py-44 ">
          <VelocityScroll
            text={" Satendra is best •"}
            default_velocity={3}
            className="font-display text-center hover:text-red-400 text-6xl font-bold tracking-[-0.02em] text-black/20 drop-shadow-lg select-none dark:text-white md:text-7xl md:leading-[5rem]"
          />
          <div className="hidden-text w-full flex items-center mt-5 justify-center text-gray-200 pointer-events-none select-none">
            {isMobile ? "(You can tap me)" : "(You can hover over)"}
          </div>
        </div>

        <div className="text-content mt-10 text-center flex flex-col gap-32 items-center justify-center font-bold tracking-tighter py-10 px-10 md:px-36 md:py-20">
          <div className="skills h-full my-10 flex flex-col gap-5">
            <div className="head">
              <div className="heading text-3xl md:text-5xl">
                <h4> What I do!</h4>
              </div>
              <div className="more-text md:mt-2 flex-col flex items-center justify-center text-center text-black/40 font-normal">
                <p className="tracking-tighter">
                  {" "}
                  to{" "}
                  <span className="underline text-white bg-red-400 px-1">
                    Earn
                  </span>
                </p>
              </div>
            </div>

            <div className="skills-list p-3 my-10">
              <div className="skill w-full h-full flex flex-col gap-10">
                {skills.map((skill, index) => {
                  const [hovered, setHovered] = useState(false);
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      className="item flex flex-col md:flex-row items-center md:gap-3"
                    >
                      <div
                        className={`min-w-36 md:min-w-fit flex flex-wrap 
                      ${hovered && "text-black/40 drop-shadow-md"}
                        `}
                      >
                        <span className="text-6xl md:text-7xl uppercase">
                          {skill.title}
                        </span>
                      </div>
                      <div
                        className="desc flex items-center justify-center
                      "
                      >
                        <p
                          className={`text-lg font-normal text-center md:text-start md:text-2xl tracking-tighter ${
                            hovered && "text-red-400 drop-shadow-lg"
                          } `}
                        >
                          {hovered ? skill.funny : skill.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="experience h-full my-10 flex flex-col gap-5">
            <div className="head">
              <div className="heading text-3xl md:text-5xl">
                <h4>Experiences</h4>
              </div>
              <div className="more-text md:mt-2 flex-col flex items-center justify-center text-center text-black/40 font-normal">
                <p className="tracking-tighter">
                  Some{" "}
                  <span className="underline text-white bg-red-400 px-1">
                    lucky
                  </span>{" "}
                  organizations
                </p>
              </div>
            </div>

            <div className="organizations-list p-3 my-10">
              <div className="organization w-full h-full flex flex-col gap-10">
                {organizations.map((org, index) => {
                  const [hovered, setHovered] = useState(false);
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      className="item flex flex-col md:flex-row items-center md:gap-3"
                    >
                      <div className="main-text min-w-36 md:min-w-fit flex flex-col">
                        <div
                          className={`${
                            hovered && "text-black/40 drop-shadow-md"
                          }`}
                        >
                          {org.name.split("").map((letter, indexx) => {
                            return (
                              <span
                                key={indexx}
                                className="text-6xl md:text-7xl uppercase"
                              >
                                {letter}
                              </span>
                            );
                          })}
                        </div>
                        <p
                          className={`font-normal ${
                            hovered ? "text-black" : "text-gray-500"
                          }`}
                        >
                          {org.role}
                        </p>
                      </div>
                      <div className="desc flex items-center justify-center">
                        <p
                          className={`text-lg font-normal text-center md:text-start md:text-2xl tracking-tighter ${
                            hovered ? "text-red-400 drop-shadow-lg" : ""
                          }`}
                        >
                          {hovered ? org.funny : org.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="technologies h-full mt-10 flex flex-col gap-5">
            <div className="head">
              <div className="heading text-3xl md:text-5xl">
                <h4>What I Use</h4>
              </div>
              <div className="more-text md:mt-2 flex-col flex items-center justify-center text-center text-black/40 font-normal">
                <p className="tracking-tighter">
                  My{" "}
                  <span className="underline text-white bg-red-400 px-1">
                    dependency array
                  </span>{" "}
                </p>
              </div>
            </div>

            <div className="technologies-list p-3 my-10">
              <div className="technology w-full h-full flex flex-col gap-5">
                {technologies.map((tech, index) => {
                  const [hovered, setHovered] = useState(false);
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      className="item flex flex-col md:flex-row items-center md:gap-2"
                    >
                      <div className="main-text min-w-64 flex flex-col">
                        <div
                          className={`${
                            hovered && "text-black/40 drop-shadow-md"
                          }`}
                        >
                          {tech.name.split("").map((letter, indexx) => {
                            return (
                              <span
                                key={indexx}
                                className="text-2xl md:text-5xl uppercase"
                              >
                                {letter}
                              </span>
                            );
                          })}
                        </div>
                        <p
                          className={`font-normal ${
                            hovered ? "text-black" : "text-gray-500"
                          }`}
                        >
                          {tech.category}
                        </p>
                      </div>
                      <div className="desc flex items-center justify-center">
                        <p
                          className={`text-lg font-normal text-center md:text-start md:text-2xl tracking-tighter ${
                            hovered && "text-red-400 drop-shadow-lg"
                          }`}
                        >
                          {hovered ? tech.funny : tech.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <p>
            This array will increase... for sure! <br /> Till then! <br />
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={"https://buymeacoffee.com/satendra03"}
              className="underline font-normal"
            >
              Buy me a coffee!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
