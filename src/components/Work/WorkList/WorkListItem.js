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
    <div>
      <motion.li
        onClick={() => {
          setselectedJob(index);
        }}
        key={index}
        style={{ borderSpacing: 0 }}
        variants={listVariants}
        className={`p-1  h-full w-full text-sm text-center font-mono  border-b lg:border-l-2 lg:border-t-0 cursor-pointer ${
          index === selectedJob
            ? "border-red-400 text-red-400"
            : "border-blue-200 text-blue-200"
        } hover:bg-navy-light  hover:text-red-400 transition delay-200 ease-in`}
      >
        {job.name}
      </motion.li>
    </div>
  );
};

export default WorkListItem;
