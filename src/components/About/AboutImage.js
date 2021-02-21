import { motion } from "framer-motion";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutImage = () => {
  const imageVariants = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: "0vw",
      transition: {
        duration: 0.1,
      },
    },
  };
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      variants={imageVariants}
      className="group relative h-64 md:h-96 mx-auto w-max lg:ml-5 mt-10 md:mt-0 "
    >
      <LazyLoadImage
        src="./images/portrait.webp"
        alt="headshot wearing yellow shirt"
        className="z-10 relative  w-64 h-64  md:w-96 md:h-96  object-cover object-top rounded-sm"
      />
      <div className="h-full w-full z-0 absolute top-0 z-20 bg-opacity-75 bg-navy-normal rounded-sm group-hover:bg-opacity-0 transition ease-in duration-300"></div>
      <div className="h-full w-full z-0 absolute top-0 z-20 bg-opacity-0 lg:bg-opacity-75 bg-gray-900 rounded-sm group-hover:bg-opacity-0 transition ease-in duration-300"></div>
      <motion.div className="h-full w-full z-0 absolute top-4 left-4 border-4  border-red-400  rounded-sm transition ease-in duration-400"></motion.div>
    </motion.div>
  );
};

export default AboutImage;
