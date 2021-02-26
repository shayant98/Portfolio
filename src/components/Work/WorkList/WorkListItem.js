import { motion } from "framer-motion";
import React from "react";

const WorkListItem = ({ selectedJob, setselectedJob, index, job }) => {
  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.li
      onClick={() => {
        setselectedJob(index);
      }}
      key={index}
      style={{ borderSpacing: 0 }}
      variants={listVariants}
      className={`p-1 md:p-3   text-sm text-center md:text-left font-mono  border-b md:border-l-2 md:border-b-0 cursor-pointer ${
        index === selectedJob
          ? "border-red-400 text-red-400"
          : "border-blue-200 text-blue-200"
      } hover:bg-navy-light  hover:text-red-400 transition delay-200 ease-in`}
    >
      {job.name}
    </motion.li>
  );
};

export default WorkListItem;
