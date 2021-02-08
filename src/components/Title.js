import React from "react";

const Title = ({ title, count }) => {
  return (
    <div className="flex items-center  mb-7 ">
      <h2 className="text-purple-200 text-2xl md:text-3xl lg:text-4xl font-sans">
        <span className="font-mono text-red-400 text-400 text-lg md:text-1xl lg:text-2xl ">
          {`0${count}`}.
        </span>{" "}
        {title}
      </h2>
      <div className=" md:w-48 md:ml-4 border-b lg:ml-4 border-navy-light"></div>
    </div>
  );
};

export default Title;
