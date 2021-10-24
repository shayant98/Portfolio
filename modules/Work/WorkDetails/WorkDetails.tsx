import { motion, Variants } from "framer-motion";
import KeyPointsList from "./KeyPointsList";
import IWork from "@interfaces/Work";

const WorkDetails = ({ job }: {job: IWork}) => {
  const detailsVariants: Variants = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 1.0,
        ease: "easeIn",
      },
    },
  };
  return (
    <motion.div variants={detailsVariants} className="flex-auto mt-10 md:mt-0">
      <motion.h3 className="text-blue-100 md:text-xl">
        {job.position} <span className="text-red-400 ">@ {job.name}</span>
      </motion.h3>
      <motion.p className="text-blue-200 text-sm opacity-25">
        {job.start} - {job.end ?? "present"}
      </motion.p>
      <KeyPointsList points={job.keyPoints} />
    </motion.div>
  );
};

export default WorkDetails;
