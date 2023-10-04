import Project from "./Project/Project";
import { motion } from "framer-motion";
import IProject from "@interfaces/Project";
import useTranslation from "next-translate/useTranslation";

const Projects = () => {
  const { t } = useTranslation("common");
  const projects: IProject[] = [
    {
      title: "Penpal",
      github: "https://github.com/shayant98/penpal",
      url: "https://penpal.shayant.com",
      description: "Give your documents life. A tool built to harness the power of AI to make information extraction from PDFs much easier.",
      technologies: ["NEXT.JS", "TRPC", "STRIPE"],
      image: "/images/penpal.png",
    },
    {
      title: "Easy Tools",
      github: "https://github.com/shayant98/easy-tools",
      url: "https://tools.shayant.com",
      description: "A website built for developers by developers. A set of handselected and built tools to help automate or eleviate some load from certain development workflows.",
      technologies: ["NEXT.JS", "TRPC", "STRIPE", "AI"],
      image: "/images/tools.png",
    },
    {
      title: "Recycle Point Locator (RPL)",
      github: "https://github.com/shayant98/RecyclePointLocator",
      description:
        "Reduce, Reuse, Recycle. An open-source mobile application built to support a local non-profit with their outreach and make it easier for people to find their closest recycle point",

      technologies: ["Flutter", "Firebase"],
      image: "/images/rpl.webp",
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
