import React from "react";
import Image from "next/image";

const ProjectImage = ({ flip, image }: CProjectImageProps) => {
  return (
    <div className={`relative z-0 ${flip && "order-last"} `}>
      <Image src={image} layout="fixed" width={330} height={270} objectFit="cover" alt="headhsot" className=" w-96 filter-grayscale" />
      <div className="h-full w-full absolute top-0 bg-opacity-75 bg-navy-normal rounded-sm"></div>
    </div>
  );
};


interface CProjectImageProps {
  flip: boolean
  image: string
}

export default ProjectImage;
