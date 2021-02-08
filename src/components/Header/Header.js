import React from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const Header = ({ toggleMenu, isOpen }) => {
  return (
    <>
      <nav className="bg-navy-normal fixed h-24 w-screen justify-between flex items-center font-mono text-white text-md px-12 ">
        <Link to="/" className="pl-8">
          LOGO
        </Link>
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => {
            toggleMenu(!isOpen);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-6 w-6 text-red-400"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
        <div className="px-8 lg:block hidden">
          <Link
            to="home"
            smooth={true}
            className=" mx-7 hover:text-red-400 transition ease-in duration-300 cursor-pointer"
          >
            <span className="text-red-400">1.</span> Home
          </Link>
          <Link
            to="work"
            smooth={true}
            className="mx-7 hover:text-red-400 transition ease-in duration-300 cursor-pointer"
          >
            <span className="text-red-400">2.</span> Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            className="mx-7 hover:text-red-400 transition ease-in duration-300 cursor-pointer"
          >
            <span className="text-red-400">3.</span> Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            className="mx-7 hover:text-red-400 transition ease-in duration-300 cursor-pointer"
          >
            <span className="text-red-400">4.</span> Contact
          </Link>
          <a
            href="/"
            className="px-6 py-4 border-solid border-2 rounded-md border-red-400 text-red-400 hover:bg-red-400 hover:bg-opacity-25 transition ease-in duration-300 after:empty-content after:w-1 after:h-12 after:bg-white"
          >
            Resume
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
