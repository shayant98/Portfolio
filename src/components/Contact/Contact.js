import { motion } from "framer-motion";
import React from "react";
import Button from "../Button";

const Contact = () => {
  return (
    <div className="mb-10 flex flex-col justify-center w-full items-center">
      <h3 className="text-5xl lg:text-6xl text-blue-200  font-extrabold">
        Get in Touch
      </h3>
      <p className="mt-3 text-blue-200 text-center text-lg w-80">
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <motion.a className="py-8" href="#">
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
  );
};

export default Contact;
