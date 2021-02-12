import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import SideMenuList from "./SideMenuList";

const Sidemenu = ({ isOpen, toggleMenu }) => {
  const backdropVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen ? (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          className="bg-navy-normal  min-h-screen h-full w-full absolute  right-0  z-40 shadow-lg"
        >
          <motion.div className="bg-navy-normal  min-h-screen h-full w-full absolute  right-0  z-40 shadow-lg ">
            <SideMenuList toggleMenu={toggleMenu} />
          </motion.div>
        </motion.div>
      ) : (
        <div></div>
      )}
    </AnimatePresence>
  );
};

export default Sidemenu;
