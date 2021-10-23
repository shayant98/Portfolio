import { motion } from "framer-motion";
import React from "react";

const KeyPointListitem = ({ index, point }: {index: number, point: string}) => {
  return (
    <motion.li key={index} className="flex py-3 max-w-lg">
      <span className="text-red-400 mr-2">▹</span> {point}
    </motion.li>
  );
};

export default KeyPointListitem;
