import { motion } from "framer-motion";
import React from "react";

const TechnologiesListItem = ({ index, variants, technology }) => {
  return (
    <motion.li key={index} variants={variants}>
      <span className="text-red-400 mr-2">▹</span> {technology}
    </motion.li>
  );
};

export default TechnologiesListItem;
