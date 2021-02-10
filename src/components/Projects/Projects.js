import React, { useEffect } from "react";
import Project from "./Project/Project";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../Button";
import { FiFolder } from "react-icons/fi";

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
          key={index}
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
