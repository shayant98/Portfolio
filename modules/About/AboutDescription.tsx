import { motion, Variants } from "framer-motion";
import useTranslation from "next-translate/useTranslation";

const AboutDescription = () => {
    const {t} = useTranslation("common")

  const textVarients: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <>
      <motion.p variants={textVarients}>
        Hello! I&apos;m Shayant, a software engineer based in Paramaribo, Suriname.{" "}
      </motion.p>
      <motion.p variants={textVarients} className="pt-5">
        I enjoy creating things that live on the internet, whether that be
        websites, applications, or anything in between. My goal is to always
        build products that provide pixel-perfect, performant experiences.
      </motion.p>
      <motion.p variants={textVarients} className="pt-5">
        Currently i&apos;m studying Software Engineering at the{" "}
        <motion.a href="https://unasat.net/" className="text-red-400">
          University of Applied Sciences & technology
        </motion.a>{" "}
        where i&apos;ll soon recieve my bacholar.
      </motion.p>
      <motion.p variants={textVarients} className="pt-5">
        Late 2018 i joined the development team at{" "}
        <motion.a href="https://telesur.sr/" className="text-red-400">
          Telesur
        </motion.a>{" "}
        where I work on a wide variety of interesting and meaningful projects on
        a daily basis.
      </motion.p>
    </>
  );
};

export default AboutDescription;
