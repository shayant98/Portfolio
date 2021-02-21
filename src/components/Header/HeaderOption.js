import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";

const HeaderOption = ({ index, option, variants }) => {
  return (
    <motion.button
      key={index}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.2 * index + 1 }}
    >
      <Link
        to={option.to}
        smooth={true}
        className=" mx-7 hover:text-red-400 cursor-pointer transition ease-in duration-200 cursor-pointer"
      >
        <span className="text-red-400">0{index + 1}.</span> {option.title}
      </Link>
    </motion.button>
  );
};

export default HeaderOption;
