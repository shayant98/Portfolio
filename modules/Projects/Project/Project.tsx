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
      <Media lessThan="md"><MobileProject flip={flip} project={project} /></Media>
      <Media greaterThanOrEqual="md"><DesktopProject flip={flip} project={project} /></Media>
    </motion.div>
  );
};

interface CProjectProps {
  project: IProject
  flip?: boolean
}

export default Project;
