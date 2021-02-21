import React from "react";
import Project from "./Project/Project";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Covid 19 tracker",
      github: "https://github.com/shayant98/covid19Tracker",
      url: "https://covid19trackershayant.herokuapp.com/",
      description:
        "A webapp for at a glance information about the COVID-19 pandemic. View numbers by country/province or state(US), also view the number of people vaccinated.",
      technologies: ["HTML", "Javascript(ES6)", "Node.Js"],
    },
    {
      title: "Electroshop",
      github: "https://github.com/shayant98/electroshop",
      url: "https://electroshopmern.herokuapp.com/",
      description:
        "A webshop built from scratch with PayPal integration. View products, leave reviews & checkout. This app has everything you expect from a webshop",
      technologies: ["React", "Node.Js", "MongoDB", "Express", "React-Query"],
    },
    {
      title: "TBN Mobile App",
      description:
        "A new way of connecting with Radio 90.5 FM in Suriname. Listen to your favourite stations and watch live tv anywhere.",
      technologies: ["Flutter", "Firebase", "NodeJS"],
      android:
        "https://play.google.com/store/apps/details?id=com.radiotrishul.tbn",
      ios:
        "https://apps.apple.com/us/app/trishul-broadcasting-network/id1530443572",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {projects.map((project, index) => (
        <motion.div key={index} custom={index}>
          <Project key={index} flip={index % 2 === 0} project={project} />
        </motion.div>
      ))}

      <div className="mt-20 lg:mt-56 text-red-400  text-center">
        <motion.h3 className="text-2xl lg:text-4xl mb-4  text-blue-200 font-bold">
          Other interesting projects
        </motion.h3>
        <motion.a
          href="https://github.com/shayant98?tab=repositories"
          className="font-mono border-b border-navy-normal hover:border-red-400 transition delay-200 ease-in-out"
        >
          Visit the Archive
        </motion.a>
      </div>
    </div>
  );
};

export default Projects;
