import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

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
      <div>
        <motion.ul className="inline-flex lg:block">
          {work.map((work, index) => (
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
              {work.name}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <motion.div variants={detailsVariants} className="flex-auto mt-5 lg:mt-0">
        <motion.h3 className="text-blue-100 text-xl">
          {work[selectedJob].position}{" "}
          <span className="text-red-400">@ {work[selectedJob].name}</span>
        </motion.h3>
        <motion.p className="text-blue-200 text-sm opacity-25">
          {work[selectedJob].start} - {work[selectedJob].end ?? "present"}
        </motion.p>
        <ul className=" py-3 text-blue-200">
          {work[selectedJob].keyPoints.map((point, index) => (
            <motion.li key={index} className="py-3 max-w-lg">
              <span className="text-red-400 mr-2">▹</span> {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Work;
