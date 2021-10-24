import Project from "./Project/Project";
import { motion } from "framer-motion";
import IProject from "@interfaces/Project";
import useTranslation from "next-translate/useTranslation";

const Projects = () => {
  const {t} = useTranslation("common")
  const projects: IProject[] = [
    {
      title: t("project_fp_1_title"),
      github: "https://github.com/shayant98/covid19Tracker",
      url: "https://covid19trackershayant.herokuapp.com/",
      description: t("project_fp_1_desc"),
      technologies: ["HTML", "Javascript(ES6)", "Node.Js"],
      image: "/images/covid.webp",
    },
    {
      title: t("project_fp_2_title"),
      github: "https://github.com/shayant98/electroshop",
      url: "https://electroshopmern.herokuapp.com/",
      description: t("project_fp_2_desc"),
      technologies: ["React", "Node.Js", "MongoDB", "Express", "React-Query"],
      image: "/images/electroshop.webp",
    },
    {
      title: t("project_fp_3_title"),
      description: t("project_fp_3_desc"),
      technologies: ["Flutter", "Firebase", "NodeJS"],
      image: "/images/covid.webp",
      android: "https://play.google.com/store/apps/details?id=com.radiotrishul.tbn",
      ios: "https://apps.apple.com/us/app/trishul-broadcasting-network/id1530443572",
    },
  ];

  return (
    <div className="w-full  flex flex-col justify-center items-center">
      {projects.map((project, index) => (
        <motion.div key={index} custom={index} className="w-full">
          <Project key={index} flip={index % 2 === 0} project={project} />
        </motion.div>
      ))}

      <div className="mt-20 lg:mt-56 text-red-400  text-center">
        <motion.h3 className="text-2xl lg:text-4xl mb-4  text-blue-200 font-bold">{t("projects_interesting_header")}</motion.h3>
        <motion.a href="https://github.com/shayant98?tab=repositories" className="font-mono border-b border-navy-normal hover:border-red-400 transition delay-200 ease-in-out">
          {t("projects_interesting_link")}
        </motion.a>
        {/* <div className="grid grid-cols-3 gap-3 grid-rows-3">
          <div className="w-72 h-80  bg-navy-light"></div>
          <div className="w-72 h-80  bg-navy-light"></div>
          <div className="w-72 h-80  bg-navy-light"></div>
          <div className="w-72 h-80  bg-navy-light"></div>
          <div className="w-72 h-80  bg-navy-light"></div>
          <div className="w-72 h-80  bg-navy-light"></div>
          <div className="w-72 h-80  bg-navy-light"></div>
          <div className="w-72 h-80  bg-navy-light"></div>
          <div className="w-72 h-80  bg-navy-light"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
