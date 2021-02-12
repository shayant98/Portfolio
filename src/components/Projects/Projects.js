import React from "react";
import Project from "./Project/Project";
import { motion } from "framer-motion";
import Button from "../Button";
import { FiFolder } from "react-icons/fi";

const Projects = () => {
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
      github: "https://github.com/shayant98/covid19Tracker",
      url: "https://covid19trackershayant.herokuapp.com/",
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

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {projects.map((project, index) => (
        <motion.div key={index} custom={index}>
          <Project key={index} flip={index % 2 === 0} project={project} />
        </motion.div>
      ))}
      <div className="mt-20">
        <motion.a href="https://github.com/shayant98?tab=repositories">
          <Button
            lg={true}
            title="Visit the Archive"
            icon={<FiFolder className="text-xl" />}
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Projects;
