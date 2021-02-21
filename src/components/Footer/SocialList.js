import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const SocialList = () => {
  return (
    <div className="pt-2 justify-self-center flex bg-opacity-50 ">
      <a href="https://github.com/shayant98">
        <FiGithub className="mr-3 text-lg text-blue-200 text-opacity-50 hover:text-red-400 transition delay-200 ease-in" />
      </a>

      <a href="https://linkedin.com/in/shayant-sital">
        <FiLinkedin className="mr-3 text-lg text-blue-200 text-opacity-50 hover:text-red-400 transition delay-200 ease-in" />
      </a>
    </div>
  );
};

export default SocialList;
