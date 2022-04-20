import Project from "./Project/Project";
import { motion } from "framer-motion";
import IProject from "@interfaces/Project";
import useTranslation from "next-translate/useTranslation";

const Projects = () => {
  const { t } = useTranslation("common");
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
      github: "https://github.com/shayant98/RecyclePointLocator",
      description: t("project_fp_2_desc"),
      technologies: ["Flutter", "Firebase"],
      image: "/images/rpl.webp",
    },
    {
      title: t("project_fp_3_title"),
      description: t("project_fp_3_desc"),
      technologies: ["React", "NodeJS"],
      image: "/images/bijles.webp",
      url: "https://www.bijles.sr/",
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
      </div>
    </div>
  );
};

export default Projects;
