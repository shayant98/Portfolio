import IWork from "@interfaces/Work";
import { motion } from "framer-motion";
import React from "react";
import WorkListItem from "./WorkListItem";

const WorkList = ({ jobs, selectedJob, setselectedJob }: WorkListProps) => {
  return (
    <motion.ul className="inline-flex md:block">
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

interface WorkListProps {
  jobs: IWork[]
  selectedJob: number
  setselectedJob: Function
}

export default WorkList;
