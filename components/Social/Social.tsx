import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
const Social = () => {
  return (
    <div
      className="fixed left text-white bottom-0 left-5 w-12 z-10 hidden md:block"
      aria-orientation="vertical"
    >
      <div className="flex flex-col items-center relative text-navy-light">
        <ul>
          <a
            href="https://github.com/shayant98"
            className="hover:text-red-400 transition ease-in duration-200 "
          >
            <li className="py-4">
              <FiGithub className="text-2xl" />
            </li>
          </a>
          <a
            href="https://linkedin.com/in/shayant-sital"
            className="hover:text-red-400 transition ease-in duration-200 "
          >
            <li>
              <FiLinkedin className="text-2xl" />
            </li>
          </a>
        </ul>
        <div className="h-32 border-l-2 text-center mt-4 border-blue-200"></div>
      </div>
    </div>
  );
};

export default Social;
