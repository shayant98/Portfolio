import React from "react";

const Hero = () => {
  return (
    <>
      <div className="text-left">
        <h1 className="my-8 font-mono font-sm text-red-400 transition ease-in duration-300">
          Fawaka, my name is
        </h1>
        <h2 className="my-8 text-7xl font-sans text-white text-red-300 font-semibold">
          Shayant Sital.
        </h2>
        <h2 className="my-8 text-7xl font-sans text-white text-blue-100 font-semibold">
          I build things for the web
        </h2>
        <p className="my-8 max-w-lg  text-blue-100">
          I'm a software engineer based in Paramaribo, Suriname specializing in
          building (and occasionally designing) exceptional websites,
          applications, and everything in between.
        </p>
        <a
          href="/"
          className="my-8 px-6 py-4 cursor-pointer border-solid border-2 rounded-md border-red-400 text-red-400 hover:bg-red-400 hover:bg-opacity-25 transition ease-in duration-100 after:empty-content after:w-1 after:h-12 after:bg-white"
        >
          Get in touch
        </a>
      </div>
    </>
  );
};

export default Hero;
