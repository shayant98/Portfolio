import { motion, AnimatePresence, Variants } from "framer-motion";
import SideMenuList from "./SideMenuList";

const Sidemenu = ({ isOpen, toggleMenu }:SidemenuProps) => {
  const backdropVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const sideMenuVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      x: '-100vw',
      opacity: 0,
    },
  };

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      {isOpen ? (
        <div>
          <motion.div
            onClick={() => toggleMenu(false)}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            className="bg-navy-normal  min-h-screen h-full w-full bg-opacity-75 absolute  right-0  z-40 shadow-lg"
          ></motion.div>
          <motion.div
            variants={sideMenuVariants}
            initial="hidden"
            animate="visible"
            exit= "exit"
            className="bg-navy-normal  min-h-screen h-full w-3/4 absolute  right-0  z-40 shadow-lg"
          >
            <motion.div className="bg-navy-normal  min-h-screen h-full w-full absolute  right-0  z-40 shadow-lg ">
              <SideMenuList toggleMenu={toggleMenu} />
            </motion.div>
          </motion.div>
        </div>
      ) : (
        <div></div>
      )}
    </AnimatePresence>
  );
};


interface SidemenuProps {
  isOpen: boolean
  toggleMenu: Function
}

export default Sidemenu;
