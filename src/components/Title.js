import React from "react";

const Title = ({ title, count }) => {
  return (
    <div className="flex items-center  mb-7 ">
      <h2 className="text-purple-200 text-4xl font-sans">
        <span className="font-mono text-red-400 text-400 text-2xl ">
          {`0${count}`}.
        </span>{" "}
        {title}
      </h2>
      <div className="w-80 border-b ml-4 border-navy-light"></div>
    </div>
  );
};

export default Title;
