import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Button from "../Button";
import HeaderOption from "./HeaderOption";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import Logo from "../../public/images/icons/icon-512x512.png";
import LanguageDropdown from "./LanguageDropdown";
import IMenuOption from "../../interfaces/MenuOption";

const Header = ({ toggleMenu, isOpen }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [lastScrollPos, setLastScrollPos] = useState<number>(0);

  const handleScroll = useCallback(() => {
    const currentPos = window.pageYOffset;
    currentPos > lastScrollPos ? setShowMenu(false) : setShowMenu(true);
    setLastScrollPos(window.pageYOffset);
  }, [lastScrollPos]);

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

  const variants: Variants = {
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
          boxShadow: lastScrollPos > 0 ? "0px -4px 12px rgb(0,0,0)" : "0px 0px 0px rgb(0,0,0)",
        }}
        transition={{ duration: 1.5 }}
        className={`flex  justify-between items-center bg-navy-normal bg-opacity-50  fixed  w-screen  h-16 lg:h-max    font-mono text-white text-md px-3 lg:px-12 lg:py-10 z-40`}
      >
        <motion.div animate={{ opacity: 1 }} className="mt-2">
          <Link to="home" smooth={true} >
            <Image src={Logo} alt="logo" layout="fixed" width="35" height="35" objectFit="contain"/>
          </Link>
        </motion.div>
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => {
             console.log(isOpen);
            toggleMenu(!isOpen);


          }}
        >
          {isOpen ? <HiOutlineX className="text-red-400 text-3xl" /> : <HiMenuAlt3 className="text-red-400 text-3xl" />}
        </div>
        <motion.div className="px-8  hidden lg:flex ">
          {menuOptions.map((option, index) => (
            <HeaderOption key={index} option={option} index={index} variants={variants} />
          ))}
          <motion.div variants={variants} initial="hidden" animate="visible" transition={{ duration: 0.2 * 10 }}>
            <a href="#about">
              <Button title="Resume" size="sm" />
            </a>
          </motion.div>
          {/* <LanguageDropdown variants={variants} /> */}
        </motion.div>
      </motion.nav>
    </>
  );
};

interface HeaderProps {
  toggleMenu: Function
  isOpen: boolean
}

export default Header;
