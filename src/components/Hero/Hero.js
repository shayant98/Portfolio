import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import { HiOutlineHand } from "react-icons/hi";
const Hero = () => {
  return (
    <>
      <div className="text-left">
        <motion.h1
          className="mt-40  lg:mt-8 font-mono font-sm text-red-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Fawaka, my name is
        </motion.h1>
        <motion.h2
          className="text-4xl my-3  md:text-6xl md:my-8   lg:text-7xl lg:my-8  text-white text-red-300 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          Shayant Sital.
        </motion.h2>
        <motion.h2
          className="text-4xl my-3  md:text-6xl md:my-8 text-white text-red-100 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          I build things for the web
        </motion.h2>
        <motion.p
          className="mt-8 mb-16 max-w-lg text-lg  text-blue-100 leading-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          I'm a software engineer based in Paramaribo, Suriname, specializing in
          building (and occasionally designing) exceptional websites,
          applications, and everything in between.
        </motion.p>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          href="mailto:shayant98@gmail.com"
        >
          <Button
            title="Get in touch"
            icon={<HiOutlineHand className="text-xl" />}
          />
        </motion.a>
      </div>
    </>
  );
};

export default Hero;
