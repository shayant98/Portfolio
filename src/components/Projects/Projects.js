import React, { useEffect } from "react";
import Project from "./Project/Project";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const projects = [
    {
      title: "Covid 19 tracker",
      github: "https://github.com/shayant98/covid19Tracker",
      url: "https://covid19trackershayant.herokuapp.com/",
      description:
        "My goal is to always build products that provide pixel-perfect, performant experiences. My goal is to always build products that provide pixel-perfect, performant experiences.",
      technologies: ["Next.Js", "Next.Js", "Next.Js", "Next.Js"],
    },
    {
      title: "Covid 19 tracker 2",
      description:
        "My goal is to always build products that provide pixel-perfect, performant experiences. My goal is to always build products that provide pixel-perfect, performant experiences.",
      technologies: ["Javascript (ES6+)", "React", "Next.Js", "Node.Js"],
    },
    {
      title: "Covid 19 tracker 3",
      description:
        "My goal is to always build products that provide pixel-perfect, performant experiences. My goal is to always build products that provide pixel-perfect, performant experiences.",
      technologies: ["Javascript (ES6+)", "React", "Next.Js", "Node.Js"],
    },
  ];
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {projects.map((project, index) => (
        <motion.div
          custom={index}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <Project key={index} flip={index % 2 === 0} project={project} />
        </motion.div>
      ))}
      <div className="mt-20">
        <a
          href="https://github.com/shayant98?tab=repositories"
          className="flex items-center justify-between w-48 px-4  items-center py-3 border-solid border-2 rounded-sm border-red-400 text-red-400 hover:bg-red-400 hover:bg-opacity-25 transition ease-in duration-300 after:empty-content after:w-1 after:h-12 after:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            width="1rem"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-folder"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>{" "}
          <span> Visit the Archive</span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
