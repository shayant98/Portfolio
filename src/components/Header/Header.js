import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Button from "../Button";
import HeaderOption from "./HeaderOption";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";

import LanguageDropdown from "./LanguageDropdown";
const Header = ({ toggleMenu, isOpen }) => {
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

  const variants = {
    hidden: {
      y: "-50vh",
    },
    visible: {
      y: "0",
      // type: "tween",
    },
  };

  return (
    <>
      <nav className="bg-navy-normal fixed h-16 lg:h-24 w-screen justify-between flex items-center font-mono text-white text-md px-3 lg:px-12 z-50">
        <motion.div animate={{ opacity: 2 }}>
          <Link to="home" smooth={true} className="pl-8 cursor-pointer">
            LOGO
          </Link>
        </motion.div>
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => {
            toggleMenu(!isOpen);
          }}
        >
          {isOpen ? (
            <HiOutlineX className="text-red-400 text-3xl" />
          ) : (
            <HiMenuAlt3 className="text-red-400 text-3xl" />
          )}
        </div>
        <motion.div className="px-8 hidden lg:block ">
          {menuOptions.map((option, index) => (
            <HeaderOption
              key={index}
              option={option}
              index={index}
              variants={variants}
              custom={index}
            />
          ))}
          <motion.a href="#" variants={variants}>
            <Button title="Resume" />
          </motion.a>{" "}
          {/* <LanguageDropdown variants={variants} /> */}
        </motion.div>
      </nav>
    </>
  );
};

export default Header;
