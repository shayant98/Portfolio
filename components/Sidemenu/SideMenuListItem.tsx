import { motion, Variants } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";
import IMenuOption from "../../interfaces/MenuOption"

const SideMenuListItem = ({ variants, index, option, toggleMenu }: SideMenuListItemProps) => {
  return (
    <motion.div
      className="flex flex-col items-center text-base"
      key={index}
      variants={variants}
      transition={{ delay: index * 0.2, type: "tween" }}
    >
      <span className="font-mono text-sm text-red-400">0{index + 1}.</span>
      <Link
        to={option.to}
        smooth={true}
        className="cursor-pointer"
        onClick={() => toggleMenu(false)}
      >
        {option.title}
      </Link>
    </motion.div>
  );
};

interface SideMenuListItemProps {
  variants: Variants
  index: number
  option: IMenuOption
  toggleMenu: Function
}

export default SideMenuListItem;