import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const technologies = [
    "Javascript (ES6+)",
    "HTML & (S)CSS",
    "React",
    "Next.Js",
    "Node.Js",
  ];

  const varients = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const textVarients = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const imageVariants = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: "0vw",
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="grid  lg:grid-cols-2 gap-4"
      initial="hidden"
      animate={controls}
      variants={varients}
    >
      <motion.div className="leading-6 text-blue-100 text-lg">
        <motion.p variants={textVarients}>
          Hello! I'm Shayant, a software engineer based in Paramaribo, Suriname.{" "}
        </motion.p>
        <motion.p variants={textVarients} className="pt-5">
          I enjoy creating things that live on the internet, whether that be
          websites, applications, or anything in between. My goal is to always
          build products that provide pixel-perfect, performant experiences.
        </motion.p>
        <motion.p variants={textVarients} className="pt-5">
          Currently i'm studying at the{" "}
          <motion.a href="https://unasat.net/" className="text-red-400">
            University of Applied Sciences & technology
          </motion.a>{" "}
          to get my bacholar in Software Engineering. Late 2018 i joined the
          development team at{" "}
          <motion.a href="https://telesur.sr/" className="text-red-400">
            Telesur
          </motion.a>{" "}
          where I work on a wide variety of interesting and meaningful projects
          on a daily basis.
        </motion.p>
        <motion.p variants={textVarients} className="pt-5">
          Here are a few technologies I've been working with recently:
        </motion.p>
        <motion.ul
          variants={textVarients}
          className="pt-8 grid grid-cols-2 text-sm"
        >
          {technologies.map((technology, index) => (
            <motion.li key={index} variants={textVarients}>
              <span className="text-red-400 mr-2">▹</span> {technology}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <motion.div
        variants={imageVariants}
        className="group relative h-40 md:h-64 lg:h-80 w-max lg:ml-5 transition ease-in duration-100"
      >
        <img
          src="https://loremflickr.com/640/360"
          alt="headhsot"
          className="z-10 relative h-full object-cover rounded-sm"
        />
        <div className="h-full w-full z-0 absolute top-0 z-20 bg-opacity-75 bg-navy-light rounded-sm group-hover:bg-opacity-0 transition ease-in duration-300"></div>
        <motion.div className="h-full w-full z-0 absolute top-4 left-4 border-4  border-red-400  rounded-sm transition ease-in duration-400"></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
