import { motion } from "framer-motion";
import React from "react";
const Button = ({ title, icon = null, lg = false }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className={`${icon && "flex justify-around w-48"} ${
        lg && "w-56 "
      } px-6 py-4 border-solid border-2 rounded-sm border-red-400 text-red-400`}
    >
      {icon} {title}
    </motion.button>
  );
};

export default Button;
