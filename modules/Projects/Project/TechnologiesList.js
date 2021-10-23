import React from "react";

const TechnologiesList = ({ flip, technologies }) => {
  return (
    <div className={`lg:py-4   ${!flip && "text-right"}`}>
      <ul className="inline-flex space-x-4 font-mono text-blue-200 lg:text-navy-light text-xs 2xl:text-base mt-2 2xl:mt-2 lg:mt-0">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechnologiesList;
