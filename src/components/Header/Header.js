import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Button from "../Button";
import HeaderOption from "./HeaderOption";

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
      y: "-100vh",
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 text-red-400"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 text-red-400"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </div>
        <motion.div className="px-8 hidden lg:block ">
          {menuOptions.map((option, index) => (
            <HeaderOption
              option={option}
              index={index}
              variants={variants}
              custom={index}
            />
          ))}
          <motion.button href="#" variants={variants}>
            <Button title="Resume" />
          </motion.button>{" "}
        </motion.div>
      </nav>
    </>
  );
};

export default Header;
