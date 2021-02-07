import React from "react";
import Project from "../Project/Project";

const Projects = () => {
  const projects = [
    {
      title: "Covid 19 tracker",
      description:
        "My goal is to always build products that provide pixel-perfect, performant experiences. My goal is to always build products that provide pixel-perfect, performant experiences.",
      technologies: ["Next.Js", "Next.Js", "Next.Js", "Next.Js", "Next.Js"],
    },
    {
      title: "Covid 19 tracker 2",
      description:
        "My goal is to always build products that provide pixel-perfect, performant experiences. My goal is to always build products that provide pixel-perfect, performant experiences.",
      technologies: [
        "Javascript (ES6+)",
        "HTML & (S)CSS",
        "React",
        "Next.Js",
        "Node.Js",
      ],
    },
    {
      title: "Covid 19 tracker 3",
      description:
        "My goal is to always build products that provide pixel-perfect, performant experiences. My goal is to always build products that provide pixel-perfect, performant experiences.",
      technologies: [
        "Javascript (ES6+)",
        "HTML & (S)CSS",
        "React",
        "Next.Js",
        "Node.Js",
      ],
    },
  ];

  return (
    <div className="w-full">
      {projects.map((project, index) => (
        <Project flip={index % 2 === 0} project={project} />
      ))}
    </div>
  );
};

export default Projects;
