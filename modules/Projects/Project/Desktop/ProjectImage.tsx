import { motion } from "framer-motion";
import Image from "next/image";

const ProjectImage = ({ flip, image, url }: CProjectImageProps) => {
  return (
    <motion.a href={url} target="_blank" whileHover={{ y: 10 }} className={`relative ${flip && "order-last"} lg:w-3/4 xl:w-1/2 cursor-pointer`}>
      <motion.div className={`h-full w-full absolute top-4 ${flip ? "left-4" : "right-4"} border-4  border-red-400  rounded`} />

      <Image src={image} alt="project image" className="relative rounded" width={2956} height={2100} quality={60} />

      <div className="h-full w-full absolute top-0 bg-opacity-50 bg-navy-normal  hover:filter-none  rounded group-hover:bg-opacity-0 transition ease-in duration-200"></div>
    </motion.a>
  );
};

interface CProjectImageProps {
  flip: boolean;
  image: string;
  url: string;
}

export default ProjectImage;
