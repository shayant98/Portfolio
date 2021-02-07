import React from "react";

const Project = ({ project, flip = false }) => {
  return (
    <div className="group flex h-max w-full pt-24 cursor-pointer">
      <div className={`relative z-0 ${flip && "order-last"}`}>
        <img
          src="https://loremflickr.com/640/360"
          alt="headhsot"
          className="rounded-md "
        />
        <div className="h-full w-full absolute top-0 bg-opacity-50 bg-red-400 rounded-md group-hover:bg-opacity-0 transition ease-in duration-100"></div>
      </div>
      <div
        className={`transform ${
          flip ? "translate-x-16" : "-translate-x-16"
        } z-10`}
      >
        <p className={`text-red-400 ${!flip && "text-right"}`}>
          Featured Project
        </p>
        <p
          className={`text-blue-200 text-2xl  font-bold py-3 ${
            !flip && "text-right"
          }`}
        >
          {project.title}
        </p>
        <div className="py-5 px-7 bg-navy-light text-blue-200 rounded-md  justify-end max-w-xl shadow-md hover:shadow-xl transition ease-in duration-100">
          <p className="leading-6 tracking-wide text-md ">
            {project.description}
          </p>
        </div>
        <div
          className={`py-3  font-mono text-blue-200 text-sm ${
            !flip && "text-right"
          }`}
        >
          <ul className="inline-flex space-x-4">
            {project.technologies.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="group absolute top-0 right-20  cursor-pointer">
        <img
          src="https://loremflickr.com/640/360"
          alt="headhsot"
          className=" rounded-md "
        />
        {/* <div className="h-full w-full absolute top-0 bg-opacity-75 bg-red-400 rounded-md group-hover:bg-opacity-0 transition ease-in duration-100"></div>
      </div>
      <div class="absolute top-0 right-20">
        <p className="text-red-400 text-right">Featured Project</p>
        <p className="text-blue-200 text-2xl text-right font-bold py-3 ">
          Covid 19 Tracker
        </p>
        <div className="py-5 px-7 bg-navy-light text-blue-200 rounded-md  justify-end max-w-xl shadow-md hover:shadow-lg transition ease-in duration-100">
          <p className="leading-6 tracking-wide text-md text-right">
            My goal is to always build products that provide pixel-perfect,
            performant experiences. My goal is to always build products that
            provide pixel-perfect, performant experiences.
          </p>
        </div>
        <div className="py-3 text-right font-mono text-blue-200 text-sm">
          <ul className="inline-flex space-x-4">
            <li>Next.Js</li>
            <li>Next.Js</li>
            <li>Next.Js</li>
            <li>Next.Js</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Project;
