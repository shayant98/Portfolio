import { motion } from "framer-motion";
import React from "react";
import WorkListItem from "./WorkListItem";

const WorkList = ({ jobs, selectedJob, setselectedJob }) => {
  return (
    <motion.ul className="inline-flex lg:block">
      {jobs.map((job, index) => (
        <WorkListItem
          key={index}
          job={job}
          index={index}
          setselectedJob={setselectedJob}
          selectedJob={selectedJob}
        />
      ))}
    </motion.ul>
  );
};

export default WorkList;
