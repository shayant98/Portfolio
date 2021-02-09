import React from "react";
import { motion } from "framer-motion";
import KeyPointsList from "./KeyPointsList";

const WorkDetails = ({ job }) => {
  const detailsVariants = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div variants={detailsVariants} className="flex-auto mt-5 lg:mt-0">
      <motion.h3 className="text-blue-100 text-xl">
        {job.position} <span className="text-red-400">@ {job.name}</span>
      </motion.h3>
      <motion.p className="text-blue-200 text-sm opacity-25">
        {job.start} - {job.end ?? "present"}
      </motion.p>
      <KeyPointsList points={job.keyPoints} />
    </motion.div>
  );
};

export default WorkDetails;
