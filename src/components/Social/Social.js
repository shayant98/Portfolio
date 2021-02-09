import React from "react";
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
            className="hover:text-red-400 transition ease-in duration-300 "
          >
            <li className="py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                width="40px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </li>
          </a>
          <a
            href="https://linkedin.com/in/shayant-sital"
            className="hover:text-red-400 transition ease-in duration-300 "
          >
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </li>
          </a>
        </ul>
        <div className="h-32 border-l-2 border-white text-center mt-4 border-blue-200"></div>
      </div>
    </div>
  );
};

export default Social;
