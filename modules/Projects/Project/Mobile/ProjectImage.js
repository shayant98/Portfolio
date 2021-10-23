import React from "react";
import Image from "next/image";

const ProjectImage = ({ flip, image }) => {
  return (
    <div className={`relative z-0 ${flip && "order-last"}`}>
      <Image src={image} layout="fill" alt="headhsot" className="filter-grayscale h-80 object-cover rounded-sm" />
      <div className="h-full w-full absolute top-0 bg-opacity-75 bg-navy-normal rounded-sm"></div>
    </div>
  );
};

export default ProjectImage;
