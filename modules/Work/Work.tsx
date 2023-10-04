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
        staggerChildren: 0.2,
      },
    },
  };

  const work: IWork[] = [
    {
      name: "VSH-Tech BV",
      position: "Full Stack Software Developer",
      start: "Nov 2018",
      end: null,
      keyPoints: [
        "Spearheaded development development of crucial pipelines and CI/CD workflows",
        "Lead development on the Center Customer Webportal for easy packge tracking for 1000+ users daily",
        "Lead architecture design and planning for multiple crucial systems on Azure Cloud",
      ],
    },
    {
      name: "Telesur",
      position: "Software Developer",
      start: "Nov 2018",
      end: "Nov 2021",
      keyPoints: [
        "Responsible for building and maintaining applications used by 100+ Telesur personal ",
        "Responsible for implementing the complete CI/CD workflow, used by the development team ",
      ],
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div ref={ref} className="flex flex-col  md:flex-row gap-8" initial="hidden" animate={controls} variants={varients}>
      <WorkList setselectedJob={setselectedJob} selectedJob={selectedJob} jobs={work} />
      <WorkDetails job={work[selectedJob]} />
    </motion.div>
  );
};

export default Work;
