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
        variants={listVariants}
        className={`py-2 px-3 text-blue-200 m-0 p-0  rounded-sm border-t-2 lg:border-l-2 lg:border-t-0 cursor-pointer ${
          index === selectedJob ? "border-red-400" : "border-blue-200"
        } hover:bg-navy-light  hover:text-white transition delay-200 ease-in`}
      >
        {job.name}
      </motion.li>
    </div>
  );
};

export default WorkListItem;
