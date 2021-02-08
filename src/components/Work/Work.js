import React, { useState } from "react";

const Work = () => {
  const [selectedJob, setselectedJob] = useState(0);

  const work = [
    {
      name: "Telesur",
      position: "Software Developer",
      start: "Nov 2018",
      end: null,
      keyPoints: [
        "My goal is to always build products that provide pixel-perfect, performant experiences.",
        "My goal is to always build products that provide pixel-perfect, performant experiences.",
        "My goal is to always build products that provide pixel-perfect, performant experiences.",
      ],
    },
    {
      name: "Ministry of Finance",
      position: "Developer",
      start: "Nov 2018",
      end: null,
      keyPoints: [
        "My goal is to always build products that provide pixel-perfect, performant experiences.",
        "My goal is to always build products that provide pixel-perfect, performant experiences.",
        "My goal is to always build products that provide pixel-perfect, performant experiences.",
      ],
    },
    {
      name: "Tres Amigos Development",
      position: "Web Developer",
      start: "Nov 2018",
      end: null,
      keyPoints: [
        "My goal is to always build products that provide pixel-perfect, performant experiences.",
        "My goal is to always build products that provide pixel-perfect, performant experiences.",
        "My goal is to always build products that provide pixel-perfect, performant experiences.",
      ],
    },
  ];
  return (
    <div className=" lg:flex flex-col lg:flex-row gap-8">
      <div className="">
        <ul className="inline-flex lg:block">
          {work.map((work, index) => (
            <li
              onClick={() => setselectedJob(index)}
              key={index}
              className={`py-2 px-3 text-blue-200 m-0 p-0  rounded-sm border-t-2 lg:border-l-2 lg:border-t-0 cursor-pointer ${
                index === selectedJob ? "border-red-400" : "border-blue-200"
              } hover:bg-navy-light  hover:text-white transition delay-200 ease-in`}
            >
              {work.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-auto mt-5 lg:mt-0">
        <h3 className="text-blue-100 text-xl">
          {work[selectedJob].position}{" "}
          <span className="text-red-400">@ {work[selectedJob].name}</span>
        </h3>
        <p className="text-blue-200 text-sm opacity-25">
          {work[selectedJob].start} - {work[selectedJob].end ?? "present"}
        </p>
        <ul className=" py-3 text-blue-200">
          {work[selectedJob].keyPoints.map((point) => (
            <li className="py-3 max-w-lg">
              <span className="text-red-400 mr-2">▹</span> {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Work;
