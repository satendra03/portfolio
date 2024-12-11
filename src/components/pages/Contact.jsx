import React, { useState } from "react";
import FontDraggableText from "../ui/FontDraggableText";
import TextToggle from "../ui/TextToggle";
import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

function Contact() {
  const contactLinks = [
    {
      title: "Email",
      link: "mailto:satendrakumarparteti.work@gmail.com",
      desc: "Your best bet for detailed conversations.",
      icon: <Mail size={20} />,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/connect-satendra",
      desc: "Serious me - where I wear my professional hat.",
      icon: <Linkedin size={20} />,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/_satendra_03",
      desc: "Where aesthetics and occasional tech meet.",
      icon: <Instagram size={20} />,
    },
    {
      title: "GitHub",
      link: "https://github.com/satendra03",
      desc: "The place where I experiment, break things, and sometimes create magic.",
      icon: <Github size={20} />,
    },
    {
      title: "Twitter",
      link: "https://twitter.com/satendra_03",
      desc: "Short, snappy thoughts sprinkled with a bit of tech and fun.",
      icon: <Twitter size={20} />,
    },
  ];

  return (
    <div className="projects w-screen">
      <div className="content py-20 w-full min-h-[100vh]">
        <div className="heading w-full mt-20 flex items-center flex-col justify-center py-3 md:py-5">
          <div className="about-me flex gap-5">
            <FontDraggableText
              words={["Contact", "Me?"]}
              size={"text-3xl md:text-5xl"}
            />
          </div>
          <div className="more-text mt-3 flex-col flex items-center justify-center text-center text-black/40 text-md md:text-lg">
            <p className="tracking-tighter">
              {" "}
              Prepare Your{" "}
              <span className="underline bg-red-400 px-1 text-white">
                Cheque
              </span>
              <br />
              we'll start a project soon!
            </p>
          </div>
        </div>

        <div className="text-content flex flex-col gap-12 items-center justify-center text-center font-bold tracking-tighter py-24 px-10 md:px-36 md:py-20">
          <TextToggle
            className="text-3xl md:text-5xl text-center"
            textTrue={
              "Need a coding wizard or just someone to chat about tech over coffee? Let's connect and create something extraordinary!"
            }
            textFalse={
              "Reach out for collaboration, queries, or opportunities. I'm just a message away from bringing your ideas to life."
            }
          />

          <div className="links h-full my-10 flex flex-col gap-5">
            <div className="head">
              <div className="heading text-3xl md:text-5xl">
                <h4>My Presence!</h4>
              </div>
              <div className="more-text md:mt-2 flex-col flex items-center justify-center text-center text-black/40 font-normal">
                <p className="tracking-tighter">
                  {" "}
                  not{" "}
                  <span className="underline text-white bg-red-400 px-1">
                    omnipresent
                  </span>
                </p>
              </div>
            </div>

            <div className="skills-list p-3 my-10">
              <div className="skill w-full h-full flex flex-col gap-10">
                {contactLinks.map((contact, index) => {
                  const [hovered, setHovered] = useState(false);
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      className="item flex flex-col items-center justify-center md:gap-3"
                    >
                      <div
                        className={`min-w-36 text-center md:min-w-fit flex flex-wrap 
                      ${hovered && "text-black/40 drop-shadow-md"}
                        `}
                      >
                        <Link
                          to={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl md:text-3xl uppercase flex gap-4 items-center justify-center"
                        >
                           {contact.icon}
                          {contact.title}
                        </Link>
                      </div>
                      <div className="desc flex items-center justify-center">
                        <p
                          className={`text-lg font-normal text-center tracking-tighter ${
                            hovered && "text-red-400 drop-shadow-lg"
                          } `}
                        >
                          {contact.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="font-normal">I cant be everywhere!</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
