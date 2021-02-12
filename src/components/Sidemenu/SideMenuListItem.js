import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";

const SideMenuListItem = ({ variants, index, option, toggleMenu }) => {
  return (
    <motion.div
      key={index}
      variants={variants}
      transition={{ delay: index * 0.2, type: "tween" }}
    >
      <Link
        to={option.to}
        smooth={true}
        className="cursor-pointer"
        onClick={() => toggleMenu(false)}
      >
        <span className="text-red-400">0{index + 1}.</span> {option.title}
      </Link>
    </motion.div>
  );
};

export default SideMenuListItem;
