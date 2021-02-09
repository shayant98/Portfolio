import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectImage = ({ flip }) => {
  return (
    <div className={`relative z-0 ${flip && "order-last"}`}>
      <LazyLoadImage
        src="./images/covid.png"
        alt="headhsot"
        className="filter-grayscale h-80 object-cover rounded-sm"
      />
      <div className="h-full w-full absolute top-0 bg-opacity-50 bg-red-500 rounded-sm"></div>
      <div className="h-full w-full absolute top-0 bg-opacity-75 bg-gray-900 rounded-sm"></div>
    </div>
  );
};

export default ProjectImage;
