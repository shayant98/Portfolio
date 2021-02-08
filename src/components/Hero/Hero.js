import React from "react";

const Hero = () => {
  return (
    <>
      <div className="text-left">
        <h1 className="mt-40  lg:mt-8 font-mono font-sm text-red-400 transition ease-in duration-300">
          Fawaka, my name is
        </h1>
        <h2 className="text-4xl my-3  md:text-6xl md:my-8   lg:text-7xl lg:my-8  font-sans text-white text-red-300 font-semibold">
          Shayant Sital.
        </h2>
        <h2 className="text-4xl my-3  md:text-6xl md:my-8 font-sans text-white text-red-100 font-semibold">
          I build things for the web
        </h2>
        <p className="mt-8 mb-16 max-w-lg  text-blue-100">
          I'm a software engineer based in Paramaribo, Suriname specializing in
          building (and occasionally designing) exceptional websites,
          applications, and everything in between.
        </p>
        <a
          href="/"
          className="px-6 py-4 cursor-pointer border-solid border-2 rounded-md border-red-400 text-red-400  text-lg hover:bg-red-400 hover:bg-opacity-25 transition ease-in duration-300"
        >
          Get in touch
        </a>
      </div>
    </>
  );
};

export default Hero;
