import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";
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
          I'm a software engineer based in Paramaribo, Suriname specializing in
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
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="20px"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                />
              </svg>
            }
          />
        </motion.a>
      </div>
    </>
  );
};

export default Hero;
