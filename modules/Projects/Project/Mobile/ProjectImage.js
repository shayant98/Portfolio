import React from "react";
import Image from "next/image";

const ProjectImage = ({ flip, image }) => {
  return (
    <div className={`relative z-0 ${flip && "order-last"} `}>
      <img src={image} layout="fixed" width={370} height={280} objectFit="cover" alt="headhsot" className=" w-96 filter-grayscale" />
      <div className="h-full w-full absolute top-0 bg-opacity-75 bg-navy-normal rounded-sm"></div>
    </div>
  );
};

export default ProjectImage;
