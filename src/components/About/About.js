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
    if (!inView) {
      controls.start("hidden");
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
      <motion.div className="leading-6 text-blue-100  mt-7 font-sans">
        <motion.p variants={textVarients}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </motion.p>
        <motion.p variants={textVarients} className="pt-5">
          Suspendisse faucibus ac metus viverra pharetra. Quisque non magna
          iaculis, cursus mauris ac, fermentum sapien. Praesent euismod sapien
          ac purus fringilla iaculis. Etiam a tempor mauris, in vehicula libero.
          Sed tempus elit nec libero vulputate, sit amet viverra augue
          tincidunt. Phasellus at ipsum nibh. Cras
        </motion.p>
        <motion.p variants={textVarients} className="pt-5">
          Cras mi est, pretium vel risus at, venenatis tincidunt orci. Nullam
          eget nulla vel mauris egestas convallis vitae quis nunc. Curabitur vel
          tristique lorem
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
        className="group relative h-40 md:h-64 lg:h-80 w-max place-self-center cursor-pointer transition ease-in duration-100"
      >
        <img
          src="https://loremflickr.com/640/360"
          alt="headhsot"
          className="z-10 relative h-full object-cover rounded-sm"
        />
        <div className="h-full w-full z-0 absolute top-0 z-20 bg-opacity-75 bg-navy-light rounded-sm group-hover:bg-opacity-0 transition ease-in duration-300"></div>
        <div className="h-full w-full z-0 absolute top-4 left-4 lg:top-10 lg:left-10 border-4 border-navy-light rounded-sm group-hover:border-red-400  transition ease-in duration-400"></div>
      </motion.div>
    </motion.div>
  );
};

export default About;
