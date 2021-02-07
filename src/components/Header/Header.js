import React from "react";
const Header = () => {
  return (
    <nav className="bg-navy-normal h-24 justify-between flex items-center font-mono text-white text-xs px-12">
      <a href="/" className="pl-8">
        LOGO
      </a>
      <div className="cursor-ponter md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="px-8 md:block hidden">
        <a
          href="/"
          className=" mx-7 hover:text-red-400 transition ease-in duration-100"
        >
          <span className="text-red-400">1.</span> Home
        </a>
        <a
          href="/"
          className="mx-7 hover:text-red-400 transition ease-in duration-100"
        >
          <span className="text-red-400">2.</span> Experience
        </a>
        <a
          href="/"
          className="mx-7 hover:text-red-400 transition ease-in duration-100"
        >
          <span className="text-red-400">3.</span> Projects
        </a>
        <a
          href="/"
          className="mx-7 hover:text-red-400 transition ease-in duration-100"
        >
          <span className="text-red-400">4.</span> Contact
        </a>
        <a
          href="/"
          className="px-6 py-4 border-solid border-2 rounded-md border-red-400 text-red-400 hover:bg-red-400 hover:bg-opacity-25 transition ease-in duration-100 after:empty-content after:w-1 after:h-12 after:bg-white"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Header;
