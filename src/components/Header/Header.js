import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Button from "../Button";
import HeaderOption from "./HeaderOption";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";

import LanguageDropdown from "./LanguageDropdown";

const Header = ({ toggleMenu, isOpen }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const handleScroll = useCallback(() => {
    const currentPos = window.pageYOffset;
    currentPos > lastScrollPos ? setShowMenu(false) : setShowMenu(true);
    setLastScrollPos(window.pageYOffset);
  }, [lastScrollPos]);

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <motion.nav
        initial={{ y: "0", boxShadow: "0px 0px 0px rgb(0,0,0)" }}
        animate={{
          y: showMenu ? "0" : "-50vh",
          boxShadow:
            lastScrollPos > 0
              ? "0px -4px 12px rgb(0,0,0)"
              : "0px 0px 0px rgb(0,0,0)",
        }}
        transition={{ duration: 0.3 }}
        className={`bg-navy-normal  fixed  w-screen justify-between h-16 lg:h-24 flex items-center font-mono text-white text-md px-3 lg:px-12 z-50`}
      >
        <motion.div animate={{ opacity: 1 }}>
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
      </motion.nav>
    </>
  );
};

export default Header;
