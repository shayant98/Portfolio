import { motion, Variants } from "framer-motion";
import Image from "next/legacy/image";
import Portrait from "../../public/images/portrait.webp";
const AboutImage = () => {
  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ ease: "easeInOut" }}
      variants={imageVariants}
      className="group relative h-64 lg:h-80 2xl:h-96 w-64 lg:w-80 mx-auto  2xl:ml-5 mt-10 lg:mt-0 "
    >
      <Image src={Portrait} alt="headshot wearing yellow shirt" layout="fill" objectFit="cover" className="z-10 relative   object-cover object-top rounded-sm" />
      <div className="h-full w-full absolute top-0 z-20 bg-opacity-75 bg-navy-normal group-hover:bg-opacity-0 transition ease-in duration-300"></div>
      <motion.div className="h-full w-full z-0 absolute top-4 left-4 border-4  border-red-400  rounded-sm transition ease-in duration-400"></motion.div>
    </motion.div>
  );
};

export default AboutImage;
