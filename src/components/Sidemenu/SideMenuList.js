import { motion } from "framer-motion";
import React from "react";
import Button from "../Button";
import SideMenuListItem from "./SideMenuListItem";

const SideMenuList = ({ toggleMenu }) => {
  const menuOptions = [
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
      {menuOptions.map((option, index) => (
        <SideMenuListItem
          key={index}
          index={index}
          option={option}
          variants={menuVariants}
          toggleMenu={toggleMenu}
        />
      ))}
      <motion.a href="#" name="resumeLink">
        <Button title="Resume" sm={true} />
      </motion.a>
    </div>
  );
};

export default SideMenuList;
