import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TechnologiesList from "./TechnologyList/TechnologiesList";
import AboutDescription from "./AboutDescription";
import AboutImage from "./AboutImage";
const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const varients = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="grid  lg:grid-cols-2 gap-4"
      initial="hidden"
      animate={controls}
      variants={varients}
    >
      <motion.div className="leading-6 text-blue-200 text-opacity-50 md:text-lg">
        <AboutDescription />
        <motion.p className="mt-4">
          Here are a few technologies I've been working with recently:
        </motion.p>
        <TechnologiesList />
      </motion.div>
      <AboutImage />
    </motion.div>
  );
};

export default About;
