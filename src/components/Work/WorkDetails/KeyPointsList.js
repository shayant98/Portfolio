import { motion } from "framer-motion";
import React from "react";
import KeyPointListitem from "./KeyPointListitem";

const KeyPointsList = ({ points }) => {
  return (
    <motion.ul className=" py-3 text-blue-200">
      {points.map((point, index) => (
        <KeyPointListitem index={index} key={index} point={point} />
      ))}
    </motion.ul>
  );
};

export default KeyPointsList;
