import { motion, Variants } from "framer-motion";
import TechnologiesListItem from "./TechnologiesListItem";
import { DiMongodb, DiNodejs, DiReact } from "react-icons/di";
import { SiMicrosoftazure, SiFirebase,SiFlutter,SiNextdotjs } from "react-icons/si";
import ITechnology from "@interfaces/Technology";
const TechnologiesList = () => {
  const technologies: ITechnology[] = [
    { name: "React", icon: <DiReact /> },
    { name: "Next.Js", icon: <SiNextdotjs /> },
    { name: "Node.Js", icon: <DiNodejs /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Azure", icon: <SiMicrosoftazure/> },
  ];

  const textVarients: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <motion.ul
      variants={textVarients}
      className="pt-8 grid grid-cols-2 text-sm"
    >
      {technologies.map((technology, index) => (
        <TechnologiesListItem
          key={index}
          index={index}
          technology={technology}
        />
      ))}
    </motion.ul>
  );
};

export default TechnologiesList;
