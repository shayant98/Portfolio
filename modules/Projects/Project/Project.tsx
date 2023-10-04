import IProject from "@interfaces/Project";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Media } from "../../../utils/media";
import DesktopProject from "./Desktop/DesktopProject";
import MobileProject from "./Mobile/MobileProject";

const Project = ({ project, flip }: CProjectProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div ref={ref} initial="hidden" variants={variants} animate={controls}>
      <MobileProject flip={flip} project={project} />
      <DesktopProject flip={flip} project={project} />
    </motion.div>
  );
};

interface CProjectProps {
  project: IProject;
  flip?: boolean;
}

export default Project;
