import React from "react";

const Sidemenu = ({ isOpen, setMenuopen }) => {
  return (
    <div
      className={`${
        isOpen ? "block lg:hidden" : "hidden"
      } transition ease-in delay-1000`}
    >
      <div className="bg-navy-normal opacity-75 min-h-screen h-full w-full absolute top-20 right-0  z-50 shadow-lg "></div>
      <div className="bg-navy-normal  min-h-screen h-full w-1/2 absolute top-20 right-0  z-50 shadow-lg ">
        <div className="py-5 px-5 flex flex-col h-screen  items-center text-blue-200 text-3xl justify-around">
          <a
            href="/"
            className=" mx-7 hover:text-red-400 transition ease-in duration-300"
          >
            <span className="text-red-400">1.</span> Home
          </a>
          <a
            href="/"
            className="mx-7 hover:text-red-400 transition ease-in duration-300"
          >
            <span className="text-red-400">2.</span> Experience
          </a>
          <a
            href="/"
            className="mx-7 hover:text-red-400 transition ease-in duration-300"
          >
            <span className="text-red-400">3.</span> Projects
          </a>
          <a
            href="/"
            className="mx-7 hover:text-red-400 hover:border-2 transition ease-in duration-300"
          >
            <span className="text-red-400">4.</span> Contact
          </a>
          <a
            href="/"
            className="px-6 py-4 border-solid border-2 rounded-md border-red-400 text-red-400 hover:bg-red-400 hover:bg-opacity-25 transition ease-in duration-300 after:empty-content after:w-1 after:h-12 after:bg-white"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
