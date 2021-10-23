import { motion, Variants } from "framer-motion";
import React from "react";

const TechnologiesListItem = ({ index, variants, technology }: TechnologiesListItemProps) => {
  return (
    <motion.li key={index} variants={variants}>
      <span className="text-red-400 mr-2">▹</span> {technology}
    </motion.li>
  );
};

interface TechnologiesListItemProps {
  index: number
  variants?: Variants
  technology: String
}

export default TechnologiesListItem;
