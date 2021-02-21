import { motion } from "framer-motion";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectImage = ({ flip }) => {
  return (
    <motion.div
      whileHover={{ y: 10 }}
      className={`relative z-0  ${flip && "order-last"}`}
    >
      <motion.div
        className={`h-full w-full absolute top-4 ${
          flip ? "left-4" : "right-4"
        } border-4  border-red-400  rounded-sm`}
      ></motion.div>

      <LazyLoadImage
        src="./images/covid.png"
        alt="headhsot"
        className=" rounded-sm h-80  object-cover relative rounded-sm object-cover object-bottom"
      />

      <div className="h-full w-full absolute top-0 bg-opacity-50 bg-navy-normal  backdrop-grayscale  hover:filter-none  rounded-sm group-hover:bg-opacity-0 transition ease-in duration-200"></div>
    </motion.div>
  );
};

export default ProjectImage;
