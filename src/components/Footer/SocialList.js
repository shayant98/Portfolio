import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const SocialList = () => {
  return (
    <div className="pt-2 justify-self-center flex">
      <a href="https://github.com/shayant98">
        <FiGithub className="mr-3 text-lg text-blue-200 hover:text-red-400 transition delay-200 easeIn" />
      </a>
      <a href="https://linkedin.com/in/shayant-sital">
        <FiLinkedin className="mr-3 text-lg text-blue-200 hover:text-red-400 transition delay-200 easeIn" />
      </a>
    </div>
  );
};

export default SocialList;
