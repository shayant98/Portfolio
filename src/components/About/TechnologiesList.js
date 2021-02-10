import { motion } from "framer-motion";
import React from "react";

const TechnologiesList = () => {
  const technologies = [
    "Javascript (ES6+)",
    "HTML & (S)CSS",
    "React",
    "Next.Js",
    "Node.Js",
  ];

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
        <motion.li key={index} variants={textVarients}>
          <span className="text-red-400 mr-2">▹</span> {technology}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default TechnologiesList;
