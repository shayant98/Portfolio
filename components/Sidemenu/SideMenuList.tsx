import { motion } from "framer-motion";
import React from "react";
import Button from "../Button";
import SideMenuListItem from "./SideMenuListItem";
import IMenuOption from "../../interfaces/MenuOption"
const SideMenuList = ({ toggleMenu }: SideMenuListProps) => {
  const menuOptions: IMenuOption[] = [
    {
      title: "About",
      to: "home",
    },
    {
      title: "Experience",
      to: "work",
    },
    {
      title: "Projects",
      to: "projects",
    },
    {
      title: "Contact",
      to: "contact",
    },
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: "-100vh",
    },
    visible: {
      opacity: 1,
      y: "0",
    },
  };
  return (
    <div className="py-28 px-5 flex flex-col h-screen  items-center text-blue-200 text-xl md:text-3xl justify-around">
      {menuOptions.map((option: IMenuOption, index) => (
        <SideMenuListItem
          key={index}
          index={index}
          option={option}
          variants={menuVariants}
          toggleMenu={toggleMenu}
        />
      ))}
      <motion.a href="#">
        <Button title="Resume" size="sm" />
      </motion.a>
    </div>
  );
};

interface SideMenuListProps {
  toggleMenu: Function
}

export default SideMenuList;
