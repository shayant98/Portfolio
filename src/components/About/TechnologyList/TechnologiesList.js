import { motion } from "framer-motion";
import React from "react";
import TechnologiesListItem from "./TechnologiesListItem";

const TechnologiesList = () => {
  const technologies = ["React", "Next.Js", "Node.Js", "MongoDB", "Flutter"];

  const textVarients = {
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
      <TechnologiesListItem key={5} index={5} technology={"And more..."} />
    </motion.ul>
  );
};

export default TechnologiesList;
