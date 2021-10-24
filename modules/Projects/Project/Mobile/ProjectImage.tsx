import React from "react";
import Image from "next/image";

const ProjectImage = ({ flip, image }: CProjectImageProps) => {
  return (
    <div className={`relative z-0 ${flip && "order-last"} w-full`}>
      <Image src={image} priority className=" mt-10 filter-grayscale" alt="Project Image"  layout="responsive"
       objectFit="cover"
       width={6}
       height={5}/>
      <div className="h-full w-full absolute top-0 bg-opacity-75 bg-navy-normal rounded-sm"></div>
    </div>
  );
};


interface CProjectImageProps {
  flip: boolean
  image: string
}

export default ProjectImage;
