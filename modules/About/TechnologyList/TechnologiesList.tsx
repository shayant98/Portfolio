import { motion, Variants } from "framer-motion";
import TechnologiesListItem from "./TechnologiesListItem";

const TechnologiesList = () => {
  const technologies = ["React", "Next.Js", "Node.Js", "MongoDB", "Flutter"];

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
