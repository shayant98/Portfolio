import React from "react";
import { Link } from "react-scroll";

import { motion } from "framer-motion";

const Sidemenu = ({ isOpen, toggleMenu }) => {
  const menuOptions = [
    {
      title: "Home",
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

  return (
    <motion.div
      initial={{ opacity: 0, visibility: "hidden" }}
      animate={{
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
      }}
    >
      <div className="bg-navy-normal opacity-75 min-h-screen h-full w-full absolute  right-0  z-40 shadow-lg "></div>
      <div className="bg-navy-normal  min-h-screen h-full w-1/2 absolute  right-0  z-40 shadow-lg ">
        <div className="py-28 px-5 flex flex-col h-screen  items-center text-blue-200 text-xl md:text-3xl justify-around">
          {menuOptions.map((option, index) => (
            <div key={index}>
              <Link
                to={option.to}
                smooth={true}
                className="cursor-pointer"
                onClick={() => toggleMenu(false)}
              >
                <span className="text-red-400">{index + 1}.</span>{" "}
                {option.title}
              </Link>
            </div>
          ))}
          <a
            href="/"
            className="px-6 py-4 border-solid border-2 rounded-md border-red-400 text-red-400 hover:bg-red-400 hover:bg-opacity-25 transition ease-in duration-300 after:empty-content after:w-1 after:h-12 after:bg-white"
          >
            Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidemenu;
