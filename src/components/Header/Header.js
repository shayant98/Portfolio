import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Button from "../Button";

const Header = ({ toggleMenu, isOpen }) => {
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
        <div className="px-8 hidden lg:block ">
          <motion.button
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="about"
              smooth={true}
              className=" mx-7 hover:text-red-400 cursor-pointer transition ease-in duration-300 cursor-pointer"
            >
              <span className="text-red-400">01.</span> About
            </Link>
          </motion.button>
          <motion.button
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <Link
              to="work"
              smooth={true}
              className="mx-7 hover:text-red-400 transition ease-in duration-300 cursor-pointer"
            >
              <span className="text-red-400">02.</span> Work
            </Link>
          </motion.button>
          <motion.button
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
          >
            <Link
              to="projects"
              smooth={true}
              className="mx-7 hover:text-red-400 transition ease-in duration-300 cursor-pointer"
            >
              <span className="text-red-400">03.</span> Experience
            </Link>
          </motion.button>
          <motion.button
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 2 }}
          >
            <Link
              to="contact"
              smooth={true}
              className="mx-7 hover:text-red-400 transition ease-in duration-300 cursor-pointer"
            >
              <span className="text-red-400">04.</span> Contact
            </Link>
          </motion.button>
          <motion.a
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 2.5 }}
          >
            <Button title="Resume" />
          </motion.a>{" "}
        </div>
      </nav>
    </>
  );
};

export default Header;
