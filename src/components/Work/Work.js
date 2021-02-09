import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WorkListItem from "./WorkList/WorkListItem";
import WorkList from "./WorkList/WorkList";
import WorkDetails from "./WorkDetails/WorkDetails";

const Work = () => {
  const [selectedJob, setselectedJob] = useState(0);

  const controls = useAnimation();
  const { ref, inView } = useInView();

  const varients = {
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

  const work = [
    {
      name: "Telesur",
      position: "Software Developer",
      start: "Nov 2018",
      end: null,
      keyPoints: [
        "My goal is to always build products that provide pixel-perfect, performant experiences.",
        "My goal is to always build products that provide pixel-perfect, performant experiences.",
        "My goal is to always build products that provide pixel-perfect, performant experiences.",
      ],
    },
    {
      name: "Ministry of Finance",
      position: "Developer",
      start: "Nov 2018",
      end: null,
      keyPoints: [
        "My goal is to always build products that provide pixel-perfect, performant experiences. 2",
        "My goal is to always build products that provide pixel-perfect, performant experiences. 2",
        "My goal is to always build products that provide pixel-perfect, performant experiences. 2",
      ],
    },
    {
      name: "Tres Amigos Development",
      position: "Web Developer",
      start: "Nov 2018",
      end: null,
      keyPoints: [
        "My goal is to always build products that provide pixel-perfect, performant experiences. 3",
        "My goal is to always build products that provide pixel-perfect, performant experiences. 3",
        "My goal is to always build products that provide pixel-perfect, performant experiences. 3",
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
      className=" lg:flex flex-col lg:flex-row gap-8"
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
