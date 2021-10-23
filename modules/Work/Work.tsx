import React, { useEffect, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WorkList from "./WorkList/WorkList";
import WorkDetails from "./WorkDetails/WorkDetails";
import IWork from "@interfaces/Work";

const Work = () => {
  const [selectedJob, setselectedJob] = useState(0);

  const controls = useAnimation();
  const { ref, inView } = useInView();

  const varients: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const work: IWork[] = [
    {
      name: "Telesur",
      position: "Software Developer",
      start: "Nov 2018",
      end: null,
      keyPoints: [
        "Responsible for building and maintaining applications used by 100+ Telesur personal ",
        "Responsible for implementing the complete CI/CD workflow, used by the development team ",
      ],
    },
    {
      name: "Ministry of Finance",
      position: "Developer",
      start: "Mar 2018",
      end: "Nov 2018",
      keyPoints: [
        "Built a complete internal webapplication for sharing office updates & easy access to company personal information",
        "Responsible for maintaining internal web-applications",
      ],
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      className="flex flex-col  md:flex-row gap-8"
      initial="hidden"
      animate={controls}
      variants={varients}
    >
      <WorkList
        setselectedJob={setselectedJob}
        selectedJob={selectedJob}
        jobs={work}
      />
      <WorkDetails job={work[selectedJob]} />
    </motion.div>
  );
};

export default Work;
