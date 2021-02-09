import React, { useState } from "react";
import { motion, useCycle } from "framer-motion";

const Work = () => {
  const [selectedJob, setselectedJob] = useState(0);
  const [animate, cycle] = useCycle("{ opacity: [0, 1] }");

  const workDetailVariant = {
    visible: {
      opacity: [0, 1],
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
  return (
    <div className=" lg:flex flex-col lg:flex-row gap-8">
      <div className="">
        <ul className="inline-flex lg:block">
          {work.map((work, index) => (
            <li
              onClick={() => {
                setselectedJob(index);
                cycle();
              }}
              key={index}
              className={`py-2 px-3 text-blue-200 m-0 p-0  rounded-sm border-t-2 lg:border-l-2 lg:border-t-0 cursor-pointer ${
                index === selectedJob ? "border-red-400" : "border-blue-200"
              } hover:bg-navy-light  hover:text-white transition delay-200 ease-in`}
            >
              {work.name}
            </li>
          ))}
        </ul>
      </div>
      <motion.div
        className="flex-auto mt-5 lg:mt-0"
        animate={animate}
        transition={{ duration: 2 }}
      >
        <motion.h3 className="text-blue-100 text-xl" initial={{ opacity: 0 }}>
          {work[selectedJob].position}{" "}
          <span className="text-red-400">@ {work[selectedJob].name}</span>
        </motion.h3>
        <motion.p
          className="text-blue-200 text-sm opacity-25"
          animate={animate}
        >
          {work[selectedJob].start} - {work[selectedJob].end ?? "present"}
        </motion.p>
        <ul className=" py-3 text-blue-200">
          {work[selectedJob].keyPoints.map((point) => (
            <motion.li className="py-3 max-w-lg" animate={animate}>
              <span className="text-red-400 mr-2">▹</span> {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Work;
