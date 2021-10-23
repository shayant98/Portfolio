import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const ProjectImage = ({ flip, image }: CProjectImageProps) => {
  return (
    <motion.div whileHover={{ y: 10 }} className={`relative ${flip && "order-last"} w-1/2`}>
      <motion.div className={`h-full w-full absolute top-4 ${flip ? "left-4" : "right-4"} border-4  border-red-400  rounded-sm`}></motion.div>

      <Image src={image} layout="fill" objectFit="cover" objectPosition="center" alt="headhsot" className=" relative " />

      <div className="h-full w-full absolute top-0 bg-opacity-50 bg-navy-normal  backdrop-grayscale  hover:filter-none  rounded-sm group-hover:bg-opacity-0 transition ease-in duration-200"></div>
    </motion.div>
  );
};

interface CProjectImageProps {
  flip: boolean
  image: string
}

export default ProjectImage;
