import React from "react";

const Work = () => {
  const work = [
    {
      name: "Telesur",
    },
    {
      name: "Ministry of Finance",
    },
    {
      name: "Tres Amigos Development",
    },
    {
      name: "HDF Consulting",
    },
  ];
  return (
    <div className="flex flex-row gap-8">
      <div className="flex-auto">
        <ul>
          {work.map((work, index) => (
            <li
              className={`py-2 px-3 text-blue-200 m-0 p-0  rounded-sm border-l-2 cursor-pointer ${
                index === 0 ? "border-red-400" : "border-blue-200"
              } hover:bg-red-400  hover:border-red-400  hover:text-white transition delay-200 ease-in`}
            >
              {work.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-auto">
        <h3 className="text-blue-100 text-xl">
          Developer <span className="text-red-400">@ Telesur</span>
        </h3>
        <p className="text-blue-200 text-sm opacity-25">Nov 2018 - present</p>
        <ul className=" py-3 text-blue-200">
          <li className="py-3 max-w-lg">
            <span className="text-red-400 mr-2">▹</span> My goal is to always
            build products that provide pixel-perfect, performant experiences.
          </li>
          <li className="py-3 max-w-lg">
            <span className="text-red-400 mr-2">▹</span> My goal is to always
            build products that provide pixel-perfect, performant experiences.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
