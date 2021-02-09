import React from "react";

const Contact = () => {
  return (
    <div className="mb-10 flex flex-col justify-center w-full items-center">
      <h3 className="text-5xl lg:text-7xl text-blue-200 font-bold">
        Get in Touch
      </h3>
      <p className="mt-3 text-blue-200 text-center text-lg w-80">
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <a
        href="/"
        className="flex justify-between w-40 mt-10 px-6 py-4 cursor-pointer border-solid border-2 rounded-sm border-red-400 text-red-400  text-lg hover:bg-red-400 hover:bg-opacity-25 transition ease-in duration-300"
      >
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
        Say Hello
      </a>
    </div>
  );
};

export default Contact;
